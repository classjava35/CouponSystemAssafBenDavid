package ws.filter;

import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfig {
	
	
	
	@Bean
	public FilterRegistrationBean<AdminFilter>  adminFilterRegistration(){
		FilterRegistrationBean <AdminFilter> regBean = new FilterRegistrationBean();
		regBean.setFilter(new AdminFilter());
		regBean.addUrlPatterns("/adminservice/");
		return regBean;
		
	}
	
	@Bean
	public FilterRegistrationBean<AdminFilter>  companyFilterRegistration(){
		FilterRegistrationBean <AdminFilter> regBean = new FilterRegistrationBean();
		regBean.setFilter(new AdminFilter());
		regBean.addUrlPatterns("/companyservice/");
		return regBean;
		
	}
	
	@Bean
	public FilterRegistrationBean<AdminFilter>  customerFilterRegistration(){
		FilterRegistrationBean <AdminFilter> regBean = new FilterRegistrationBean();
		regBean.setFilter(new AdminFilter());
		regBean.addUrlPatterns("/customerservice/");
		return regBean;
		
	}

}
