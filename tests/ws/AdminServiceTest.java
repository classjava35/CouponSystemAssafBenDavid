package ws;

import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.Random;

import org.junit.Before;
import org.junit.FixMethodOrder;
import org.junit.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.MvcResult;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.jayway.jsonpath.JsonPath;
import org.junit.runners.MethodSorters;
import c_coupon.sys.core.beans.Company;
import c_coupon.sys.core.beans.Customer;
import i_couponSystemException.CouponSystemException;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class AdminServiceTest extends CouponSystemApplicationTests {

	@Autowired
	private WebApplicationContext webApplicationContext;

	private MockMvc mockMvc;

	// @MockBean
	// private ws.AdminService studentService;

	@Before
	public void setup() {
		mockMvc = MockMvcBuilders.webAppContextSetup(webApplicationContext).build();

	}

	static Random ran = new Random();
	static int random = ran.nextInt(10000) + 1;

	public static String companyId;
	public static String compName = "Company"+random;
	public static String compPassword = "New Password";
	public static String email = "New Email";

	private String mapToJson(Object obj) throws JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.writeValueAsString(obj);
	}
	
	//*******Company service testing *****************

	@Test
	public void test100_createCompany() throws Exception {
		String uri = "/adminservice/createcompany";
		Company company = new Company();

		//Create Company Object without ID and send it to the DB for creation
		company.setCompName(compName);
		company.setPassword(compPassword);
		company.setEmail(email);
		String inputJson = mapToJson(company);
		MvcResult mvcResult = mockMvc.perform(
				MockMvcRequestBuilders.post(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson))
				.andReturn();

		int status = mvcResult.getResponse().getStatus();
		assertEquals(201, status);
		String content = mvcResult.getResponse().getContentAsString();

		Object dataObject = JsonPath.parse(content).read("$..[?(@.compName=='" + compName + "')].id");
		companyId = dataObject.toString().substring(1, 4);

		// set the Id from the DB back to the Company object
		company.setId(Long.parseLong(companyId));

		String CompanyJson = "{\"id\":" + companyId + ",\"compName\":\"" + compName + "\",\"password\":\""
				+ compPassword + "\",\"email\":\"" + email + "\",\"coupons\":null}";

		assertEquals(content.toString(), CompanyJson);
	}

	@Test
	public void test101_getCompany() throws CouponSystemException {
		try {
			String uri = "/adminservice/getcompany/" + companyId;
			mockMvc.perform(get(uri)).andExpect(status().isOk())
					.andExpect(content().contentType("application/json;charset=UTF-8"))
					.andExpect(jsonPath("$..[?(@.compName=='" + compName + "')].compName").value(compName))
					.andExpect(jsonPath("$..[?(@.compName=='" + compName + "')].password").value(compPassword))
					.andExpect(jsonPath("$..[?(@.compName=='" + compName + "')].email").value(email));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void test102_updateCompany() throws CouponSystemException {
		try {
			String uri = "/adminservice/updatecompany/" + companyId;
			Company company = new Company();
			company.setId(Long.parseLong(companyId));
			company.setCompName(compName);
			company.setPassword(compPassword + "11");
			company.setEmail(email + "11");

			String inputJson = mapToJson(company);
			MvcResult mvcResult = mockMvc.perform(
					MockMvcRequestBuilders.put(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson))
					.andReturn();

			int status = mvcResult.getResponse().getStatus();
			assertEquals(200, status);
			String content = mvcResult.getResponse().getContentAsString();
			assertEquals(content, "Company "+companyId+" updated successsfully");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void test103_getAllCompanies() throws CouponSystemException {
		try {
			mockMvc.perform(get("/adminservice/getallcompanies")).andExpect(status().isOk())
					.andExpect(content().contentType("application/json;charset=UTF-8"))
					.andExpect(jsonPath("$..[?(@.compName=='" + compName + "')].compName").value(compName))
					.andExpect(jsonPath("$..[?(@.compName=='" + compName + "')].password").value(compPassword + "11"))
					.andExpect(jsonPath("$..[?(@.compName=='" + compName + "')].email").value(email + "11"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Test
	public void test104_deleteCompany() throws CouponSystemException {
		try {
			String uri = "/adminservice/removecompany/" + companyId;
			MvcResult mvcResult = mockMvc
					.perform(MockMvcRequestBuilders.delete(uri).contentType(MediaType.APPLICATION_JSON)).andReturn();
			int status = mvcResult.getResponse().getStatus();
			assertEquals(200, status);
			String content = mvcResult.getResponse().getContentAsString();
			assertEquals(content, "Company "+companyId+" deleted successsfully");

			// validate the Company got deleted
			uri = "/adminservice/getcompany/" + companyId;
			mockMvc.perform(get(uri)).andExpect(status().isNotFound());

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	//*******Customer service testing *****************
	
	public static String customerId;
	public static String custName = "Customer" + random;
	public static String custPassword = "New Password";

	@Test
	public void test105_createCustomer() throws Exception {
		String uri = "/adminservice/createcustomer";
		Customer customer = new Customer();

		//Create Customer Object without ID and send it to the DB for creation
		customer.setCustName(custName);
		customer.setPassword(custPassword);
		String inputJson = mapToJson(customer);
		MvcResult mvcResult = mockMvc.perform(
				MockMvcRequestBuilders.post(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson))
				.andReturn();

		int status = mvcResult.getResponse().getStatus();
		assertEquals(201, status);
		String content = mvcResult.getResponse().getContentAsString();

		Object dataObject = JsonPath.parse(content).read("$..[?(@.custName=='" + custName + "')].id");
		customerId = dataObject.toString().substring(1, 4);

		// set the Id from the DB back to the Company object
		customer.setId(Long.parseLong(customerId));

		String CustomerJson = "{\"id\":" + customerId + ",\"custName\":\"" + custName + "\",\"password\":\""
				+ custPassword + "\",\"coupons\":null}";

		assertEquals(content.toString(), CustomerJson);
	}

	@Test
	public void test106_getCustomer() throws CouponSystemException {
		try {
			String uri = "/adminservice/getcustomer/" + customerId;
			mockMvc.perform(get(uri)).andExpect(status().isOk())
					.andExpect(content().contentType("application/json;charset=UTF-8"))
					.andExpect(jsonPath("$..[?(@.custName=='" + custName + "')].custName").value(custName))
					.andExpect(jsonPath("$..[?(@.custName=='" + custName + "')].password").value(custPassword));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void test107_updateCustomer() throws CouponSystemException {
		try {
			String uri = "/adminservice/updatecustomer/" + customerId;
			Customer customer = new Customer();
			customer.setId(Long.parseLong(customerId));
			customer.setCustName(custName);
			customer.setPassword(custPassword + "11");

			String inputJson = mapToJson(customer);
			MvcResult mvcResult = mockMvc.perform(
					MockMvcRequestBuilders.put(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson))
					.andReturn();

			int status = mvcResult.getResponse().getStatus();
			assertEquals(200, status);
			String content = mvcResult.getResponse().getContentAsString();
			assertEquals(content, "Customer "+customerId+" updated successsfully");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void test108_getAllCustomer() throws CouponSystemException {
		try {
			mockMvc.perform(get("/adminservice/getallcustomers")).andExpect(status().isOk())
					.andExpect(content().contentType("application/json;charset=UTF-8"))
					.andExpect(jsonPath("$..[?(@.custName=='" + custName + "')].custName").value(custName))
					.andExpect(jsonPath("$..[?(@.custName=='" + custName + "')].password").value(custPassword + "11"));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Test
	public void test109_deleteCustomer() throws CouponSystemException {
		try {
			String uri = "/adminservice/removecustomer/" + customerId;
			MvcResult mvcResult = mockMvc
					.perform(MockMvcRequestBuilders.delete(uri).contentType(MediaType.APPLICATION_JSON)).andReturn();
			int status = mvcResult.getResponse().getStatus();
			assertEquals(200, status);
			String content = mvcResult.getResponse().getContentAsString();
			assertEquals(content, "Customer "+customerId+" deleted successsfully");

			// validate the Company got deleted
			uri = "/adminservice/getcustomer/" + customerId;
			mockMvc.perform(get(uri)).andExpect(status().isNotFound());

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}


}