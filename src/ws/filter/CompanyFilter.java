package ws.filter;

import java.io.IOException;

import javax.servlet.Filter;
import javax.servlet.FilterChain;
import javax.servlet.FilterConfig;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Component;

import g_coupon.sys.core.facade.CompanyFacade;

@Component
public class CompanyFilter implements Filter {

	@Override
	public void init(FilterConfig filterConfig) throws ServletException {

		
	}

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
			throws IOException, ServletException {
		HttpServletRequest req = (HttpServletRequest) request;
		HttpServletResponse res = (HttpServletResponse) request;
		
		if(req.getSession().getAttribute("facade") == null) {
			res.sendRedirect("http://localhost:8080/login.html");
		} else if (!(req.getSession().getAttribute("facade") instanceof CompanyFacade)) {
			res.sendRedirect("http://localhost:8080/login.html");
		} else {
			chain.doFilter(request, response);
		}
		
	}

	@Override
	public void destroy() {
		// TODO Auto-generated method stub
		
	}

}
