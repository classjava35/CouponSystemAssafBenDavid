package ws;

import static org.hamcrest.CoreMatchers.hasItem;
import static org.junit.Assert.*;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import java.sql.Date;
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
import c_coupon.sys.core.beans.Coupon;
import c_coupon.sys.core.beans.coupontype;
import i_couponSystemException.CouponSystemException;
import static org.hamcrest.Matchers.*;

@FixMethodOrder(MethodSorters.NAME_ASCENDING)
public class CompanyServiceTest extends CouponSystemApplicationTests {

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

	public static String couponId;
	public static String couponTitle = "Coupon" + random;
	public static double price = 44.7;
	public static String message = "New message";
	public static String image = "New image";
	public static int amount = 55;
	public static coupontype type = coupontype.ELECTRICITY;
	public static Date startDate = new Date(System.currentTimeMillis());
	public static Date endDate = startDate;

	private String mapToJson(Object obj) throws JsonProcessingException {
		ObjectMapper objectMapper = new ObjectMapper();
		return objectMapper.writeValueAsString(obj);
	}

	// *******Company service testing *****************

	@Test
	public void test100_createCoupon() throws Exception {
		String uri = "/companyservice/createcoupon";
		Coupon coupon = new Coupon();

		// Create Company Object without ID and send it to the DB for creation
		coupon.setTitle(couponTitle);
		coupon.setPrice(price);
		coupon.setMessage(message);
		coupon.setImage(image);
		coupon.setAmount(amount);
		coupon.setType(type);
		coupon.setStartDate(startDate);
		coupon.setEndDate(endDate);

		String inputJson = mapToJson(coupon);
		MvcResult mvcResult = mockMvc.perform(
				MockMvcRequestBuilders.post(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson))
				.andReturn();

		int status = mvcResult.getResponse().getStatus();
		assertEquals(201, status);
		String content = mvcResult.getResponse().getContentAsString();

		Object dataObject = JsonPath.parse(content).read("$..[?(@.title=='" + couponTitle + "')].id");
		couponId = dataObject.toString().substring(1, 4);

		// set the Id from the DB back to the Company object
		coupon.setId(Long.parseLong(couponId));

		String CompanyJson = "{\"id\":" + couponId + ",\"title\":\"" + couponTitle + "\",\"startDate\":\"" + startDate
				+ "\",\"endDate\":\"" + endDate + "\",\"amount\":" + amount + ",\"type\":\"" + type
				+ "\",\"message\":\"" + message + "\",\"price\":" + price + ",\"image\":\"" + image + "\"}";

		assertEquals(content.toString(), CompanyJson);
	}

	@Test
	public void test101_getCoupon() throws CouponSystemException {
		try {
			String uri = "/companyservice/getcoupon/" + couponId;
			mockMvc.perform(get(uri)).andExpect(status().isOk())
					.andExpect(content().contentType("application/json;charset=UTF-8"))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].title").value(couponTitle))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].startDate").value(startDate.toString()))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].endDate").value((endDate).toString()))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].amount").value(amount))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].type").value(type.toString()))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].message").value(message))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].price").value(price))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].image").value(image));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void test102_getAllCoupons() throws CouponSystemException {
		try {
			mockMvc.perform(get("/companyservice/getallcoupons")).andExpect(status().isOk())
					.andExpect(content().contentType("application/json;charset=UTF-8"))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].title").value(couponTitle))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].startDate").value(startDate.toString()))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].endDate").value((endDate).toString()))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].amount").value(amount))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].type").value(type.toString()))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].message").value(message))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].price").value(price))
					.andExpect(jsonPath("$..[?(@.title=='" + couponTitle + "')].image").value(image));
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Test
	public void test103_updateCoupon() throws CouponSystemException {
		try {
			String uri = "/companyservice/updatecoupon/" + couponId;
			Coupon coupon = new Coupon();
			coupon.setId(Long.parseLong(couponId));
			coupon.setTitle(couponTitle);
			coupon.setMessage("new message5554");
			coupon.setAmount(6666);
			coupon.setPrice(6666);
			coupon.setImage("New Image1111");
			coupon.setType(coupontype.FOOD);
			coupon.setStartDate(startDate);
			coupon.setEndDatePlusDays(endDate, 10);

			String inputJson = mapToJson(coupon);
			MvcResult mvcResult = mockMvc.perform(
					MockMvcRequestBuilders.put(uri).contentType(MediaType.APPLICATION_JSON_VALUE).content(inputJson))
					.andReturn();

			int status = mvcResult.getResponse().getStatus();
			assertEquals(200, status);
			String content = mvcResult.getResponse().getContentAsString();
			assertEquals(content, "Coupon " + couponId + " updated successsfully");
		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}

	@Test
	public void test104_deleteCoupon() throws CouponSystemException {
		try {
			String uri = "/companyservice/removecoupon/" + couponId;
			MvcResult mvcResult = mockMvc
					.perform(MockMvcRequestBuilders.delete(uri).contentType(MediaType.APPLICATION_JSON)).andReturn();
			int status = mvcResult.getResponse().getStatus();
			assertEquals(200, status);
			String content = mvcResult.getResponse().getContentAsString();
			assertEquals(content, "Coupon " + couponId + " deleted successsfully");

			// validate the Company got deleted
			uri = "/companyservice/getcoupon/" + couponId;
			mockMvc.perform(get(uri)).andExpect(status().isNotFound());

		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

	@Test
	public void test105_getCouponByType() throws CouponSystemException {
		try {
			String uri = "/companyservice/getcouponbytype/" + type;
			mockMvc.perform(get(uri)).andExpect(status().isOk())
					.andExpect(content().contentType("application/json;charset=UTF-8"))
					.andExpect(jsonPath("$..[*].type", hasItem(type.toString())))
					.andExpect(jsonPath("$..[?(@.type==$['ELECTRICITY'])].type").doesNotExist());


		} catch (Exception e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

	}

}