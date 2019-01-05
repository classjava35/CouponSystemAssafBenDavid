package ws;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import g_coupon.sys.core.facade.CouponClientFacade;
import h_coupon.sys.couponsystem.CouponSystem;
import i_couponSystemException.CouponSystemException;

@Controller

public class AuthenticationServlet {

	@RequestMapping(value = "/login" ,method = RequestMethod.GET)
	public  String doPostRedirect(
	/* Declare parameters sent by the user!
	 * <p> Name :  <input name = "name" type ="text"> </p>
	 * <p> PASSWORD :  <input name = "pwd" type ="password"> </p>
	 * use must call the parameters like the text box name attribute
	 * */
		@RequestParam String name, @RequestParam String pwd, @RequestParam String usertype,
		HttpServletRequest request , HttpServletResponse response
		) throws CouponSystemException

	{
		response.setContentType("text/html");  
		@SuppressWarnings("static-access")
		CouponClientFacade cf = (new CouponSystem().getInstance()).login(name, pwd, usertype); // should be get instance

		if (cf==null)//login failed!
		{

			return "redirect:http://localhost:8080/";

		}
		
		// Success & get session_id using to the acquired CouponClient Facade
				request.getSession().setAttribute("facade", cf.toString()); //set the Session ID
					//add name cookie
			        Cookie ck1=new Cookie("name", name);  
			        response.addCookie(ck1); 
					//add password cookie
			        Cookie ck2=new Cookie("password", pwd);  
			        response.addCookie(ck2);
			        
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

	}
	


