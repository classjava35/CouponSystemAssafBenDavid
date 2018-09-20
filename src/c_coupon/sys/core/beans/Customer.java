package c_coupon.sys.core.beans;

import java.util.ArrayList;
/**
 * <h1>Customer class creates a new Customer entity </h1>
 * <p>
 * <b>Purpose:</b> creates a new Customer entity, which will be used , later on
 * <p>When the Application will use DAO level to translate it to SQL and JDBC.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class Customer {
	private long id;
	private String custName;
	private String password;
	private ArrayList<Coupon> coupons = null;

	/**
	 * This constructor create a new Customer entity using 2 parameters. 
	 * <p><b>Not setting the id parameter</b1>.
	 * 
	 * @param custName Customer Name
	 * @param password Customer password
	 */
	public Customer(String custName, String password) {
		super();
		this.custName = custName;
		this.password = password;
		this.coupons = new ArrayList<>();
		;
	}

	/**
	 * This constructor create a new Customer entity using Id and 2 parameters. 
	 * 
	 * @param id Customer id
	 * @param custName Customer Name
	 * @param password Customer password
	 */
	public Customer(long id, String custName, String password) {
		super();
		this.id = id;
		this.custName = custName;
		this.password = password;
		this.coupons = new ArrayList<>();
		;
	}

	/**
	 * Returns the Customer Id.
	 * @return Customer Id
	 */
	public long getId() {
		return id;
	}

	/**
	 * Set the Customer Id
	 * @param id Customer Id
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * Returns the Customer Name.
	 * @return custName - Customer Name
	 */
	public String getCustName() {
		return custName;
	}

	/**
	 * Set the Customer Name
	 * @param custName Customer Name
	 */
	public void setCustName(String custName) {
		this.custName = custName;
	}

	/**
	 * Returns the Customer password.
	 * @return password - Customer password
	 */
	public String getPassword() {
		return password;
	}

	/**
	 * Set the Customer password
	 * @param password Customer password
	 */
	public void setPassword(String password) {
		this.password = password;
	}

	/**
	 * Returns the Customer Coupons.
	 * @return coupons - ArrayList of Customer's Coupons.
	 */
	public ArrayList<Coupon> getCoupons() {
		return coupons;
	}

	/**
	 * Set the Customer coupons
	 * @param coupons Customer coupons
	 */
	public void setCoupons(ArrayList<Coupon> coupons) {
		this.coupons = coupons;
	}

	@Override
	public String toString() {
		return "Cutomer [id=" + id + ", " + (custName != null ? "custName=" + custName + ", " : "")
				+ (password != null ? "password=" + password + ", " : "")
				+ (coupons != null ? "coupons=" + coupons : "") + "]";
	}

}
