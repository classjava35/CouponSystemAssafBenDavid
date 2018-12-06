package c_coupon.sys.core.beans;

import java.util.ArrayList;

import javax.xml.bind.annotation.XmlRootElement;

import com.fasterxml.jackson.annotation.JsonCreator;

/**
 * <h1>Company class creates a new Company entity </h1>
 * <p>
 * <b>Purpose:</b> creates a new Company entity, which will be used , later on
 * <p>When the Application will use DAO level to translate it to SQL and JDBC.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
@XmlRootElement
public class Company {
	private long id;
	private String compName;
	private String password;
	private String email;
	private ArrayList<Coupon> coupons = null;

	@JsonCreator
	public Company() {
		super();
	}
	
	/**
	 * This constructor create a new Company entity using 3 String parameters -
	 * Company Name, password, email. <b>Not setting the id parameter</b1>.
	 * 
	 * @param compName
	 *            The Company Name
	 * @param password
	 *            The Company password
	 * @param email
	 *            The Company email
	 */
	
	public Company(String compName, String password, String email) {// , ArrayList<Coupon> coupons) {
		super();
		this.compName = compName;
		this.password = password;
		this.email = email;
		// this.coupons = coupons;
	}

	/**
	 * This constructor create a new Company entity using - ID parameter and 3 String
	 * parameters - Company Name, password, email.
	 * 
	 * @param id
	 *            The Id of the Company, used in case the entity is not
	 *            automatically generated in the DB.
	 * @param compName
	 *            The Company Name
	 * @param password
	 *            The Company password
	 * @param email
	 *            The Company email
	 */
	public Company(long id, String compName, String password, String email) {// , ArrayList<Coupon> coupons) {
		super();
		this.id = id;
		this.compName = compName;
		this.password = password;
		this.email = email;
		// this.coupons = coupons;
	}

	/**
	 * Returns the Company Id.
	 * @return Company Id
	 */
	public long getId() {
		return id;
	}

	/**
	 * Set the Company Id
	 * @param id company Id
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * Returns the Company Name.
	 * @return compName Company Name
	 */
	public String getCompName() {
		return compName;
	}

	/**
	 * Set the Company Name
	 * @param compName company Name
	 */
	public void setCompName(String compName) {
		this.compName = compName;
	}

	/**
	 * Returns the Company Password.
	 * @return Company Password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Set the Company Password
	 * @param Password company Password
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Returns the Company Email.
	 * @return Company Email
	 */
	public String getEmail() {
		return email;
	}

	/**
	 * Set the Company email
	 * @param email company email
	 */
	public void setEmail(String email) {
		this.email = email;
	}

	/**
	 * Returns an ArrayList of the Company's Coupons.
	 * @return ArrayList of the Company's Coupons
	 */
	public ArrayList<Coupon> getCoupons() {
		return coupons;
	}

	/**
	 * Set ArrayList of the Company's Coupons.
	 * @param coupons ArrayList of the Company's Coupons
	 */
	public void setCoupons(ArrayList<Coupon> coupons) {
		this.coupons = coupons;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", " + (compName != null ? "compName=" + compName + ", " : "")
				+ (password != null ? "password=" + password + ", " : "") + (email != null ? "email=" + email : "")
				+ "]";
	}

}
