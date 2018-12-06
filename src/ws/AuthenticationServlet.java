package ws;


import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

import g_coupon.sys.core.facade.CouponClientFacade;
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;

@Controller
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class AuthenticationServlet {
	
	
	@RequestMapping(value = "/login" ,method = RequestMethod.GET)
	public  String doPostRedirect(
	/* Declare parameters sent by the user!
	 * <p> Name :  <input name = "name" type ="text"> </p>
	 * <p> PASSWORD :  <input name = "pwd" type ="password"> </p>
	 * use must call the parameters like the text box name attribute
	 * */
		@RequestParam String name, @RequestParam String pwd, @RequestParam String usertype,
		HttpServletRequest request
		) throws CouponSystemException

	{
		@SuppressWarnings("static-access")
		CouponClientFacade cf = (new CouponSystem().getInstance()).login(name, pwd, usertype); // should be get instance

		if (cf==null)//login failed!
		{

			return "redirect:http://localhost:8080";

		}
		
		// success!
				request.getSession().setAttribute("facade", cf.toString()); //set the Session ID
//		        request.setAttribute("loginResult", true);

//				request.getSession().removeAttribute(cf.toString());//logout


				// now redirect to the correct page!
				switch (usertype)
				{
					case "admin":
							return "redirect:http://localhost:8080/admin/index.html";
					case "company":
							return "redirect:http://localhost:8080/company/index.html";
					case "customer":
							return "redirect:http://localhost:8080/customer/index.html";
				}
				
				return "redirect:http://localhost:8080/login.html";
			}
		//		if (name.equals("admin")&& pwd.equals("1234"))
//		{
//			return "redirect:http://localhost:8080/site/login.html";
//		}
//		else
//		{
//			return "redirect:http://localhost:8080/site/Failure.html";
//
//		}
	}
	


