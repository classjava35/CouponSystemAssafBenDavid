package c_coupon.sys.core.beans;

import java.sql.Date;
import java.util.Calendar;
/**
 * <h1>Coupon class creates a new Coupon entity </h1>
 * <p>
 * <b>Purpose:</b> creates a new Coupon entity, which will be used , later on
 * <p>When the Application will use DAO level to translate it to SQL and JDBC.
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class Coupon {

	private long id;
	private String title;
	private Date startDate;
	private Date endDate;
	private int amount;
	private coupontype type;
	private String message;
	private double price;
	private String image;

	/**
	 * This constructor create a new Coupon entity using 7 parameters. 
	 * <p><b>Not setting the id parameter</b1>.
	 * 
	 * @param title The Coupon title
	 * @param startDate The Coupon start Date
	 * @param endDate The Coupon end Date, Coupon's End DATE is set by default to 30 days from start DATE.
	 * @param amount The Coupon amount
	 * @param type The Coupon type set by enum coupontype
	 * @param message The Coupon message
	 * @param price The Coupon price
	 * @param image The Coupon image
	 */
	public Coupon(String title, Date startDate, Date endDate, int amount, coupontype type, String message, double price,
			String image) {
		super();
		this.title = title;
		this.startDate = startDate;
			
			Calendar c = Calendar.getInstance();
			c.setTime(endDate);
			c.add(Calendar.DATE, 30); //set Coupon's End DATE to 30 days from creation by Default
		this.endDate = new java.sql.Date(c.getTimeInMillis());
		this.amount = amount;
		this.type = type;
		this.message = message;
		this.price = price;
		this.image = image;
	}

	/**
	 * This constructor create a new Coupon entity using - ID parameter and 7 other
	 * parameters.
	 * 
	 * @param id The Coupon Id
	 * @param title The Coupon title
	 * @param startDate The Coupon start Date
	 * @param endDate The Coupon end Date, Coupon's End DATE is set by default to 30 days from start DATE.
	 * @param amount The Coupon amount
	 * @param type The Coupon type set by enum coupontype
	 * @param message The Coupon message
	 * @param price The Coupon price
	 * @param image The Coupon image
	 */
	public Coupon(long id, String title, Date startDate, Date endDate, int amount, coupontype type, String message,
			double price, String image) {
		super();
		this.id = id;
		this.title = title;
		this.startDate = startDate;
			
			Calendar c = Calendar.getInstance();
			c.setTime(endDate);
			c.add(Calendar.DATE, 30); //set Coupon's End DATE to 30 days from creation by Default
		this.endDate = new java.sql.Date(c.getTimeInMillis());
		this.amount = amount;
		this.type = type;
		this.message = message;
		this.price = price;
		this.image = image;
	}

	/**
	 * Returns the Coupon Id.
	 * @return Coupon Id
	 */
	public long getId() {
		return id;
	}

	/**
	 * Set the Coupon Id
	 * @param id Coupon Id
	 */
	public void setId(long id) {
		this.id = id;
	}

	/**
	 * Returns the Coupon Title.
	 * @return title - Coupon Title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * Set the Coupon title
	 * @param title Coupon title
	 */	
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * Returns the Coupon Start Date.
	 * @return startDate - Coupon start Date
	 */
	public Date getStartDate() {
		return startDate;
	}

	/**
	 * Set the Coupon startDate
	 * @param startDate Coupon start Date
	 */	
	public void setStartDate(Date startDate) {
		this.startDate = startDate;
	}

	/**
	 * Returns the Coupon End Date.
	 * @return endDate - Coupon End Date
	 */
	public Date getEndDate() {
		return endDate;
	}

	/**
	 * Set the Coupon end Date
	 * @param endDate Coupon End Date
	 */	
	public void setEndDate(Date endDate) {
		this.endDate = endDate;
	}

	/**
	 * Add or reduce from the Coupon's End Date x Days
	 * @param endDate Coupon's End dates
	 * @param days number of days to add or reduce from the End Date
	 * @return new Date after adding or reducing x days
	 */
	public Date setEndDatePlusDays(Date endDate, int days) {
		Calendar c = Calendar.getInstance();
		c.setTime(endDate);
		c.add(Calendar.DATE, days);
		System.out.println("set End Date in: "+ days+" Days");
		return this.endDate = new java.sql.Date(c.getTimeInMillis());
	}

	/**
	 * Returns the Coupon amount.
	 * @return amount - Coupon amount
	 */
	public int getAmount() {
		return amount;
	}

	/**
	 * Set the Coupon amount
	 * @param amount Coupon amount
	 */	
	public void setAmount(int amount) {
		this.amount = amount;
	}

	/**
	 * Returns the Coupon type.
	 * @return type - Coupon type
	 */
	public coupontype getType() {
		return type;
	}

	/**
	 * Set the Coupon type
	 * @param type Coupon type
	 */	
	public void setType(coupontype type) {
		this.type = type;
	}

	/**
	 * Returns the Coupon message.
	 * @return message - Coupon message
	 */
	public String getMessage() {
		return message;
	}

	/**
	 * Set the Coupon message
	 * @param message Coupon message
	 */	
	public void setMessage(String message) {
		this.message = message;
	}

	/**
	 * Returns the Coupon price.
	 * @return price - Coupon price
	 */	
	public double getPrice() {
		return price;
	}

	/**
	 * Set the Coupon price
	 * @param price Coupon price
	 */	
	public void setPrice(double price) {
		this.price = price;
	}

	/**
	 * Returns the Coupon image.
	 * @return image - Coupon image
	 */	
	public String getImage() {
		return image;
	}

	/**
	 * Set the Coupon image
	 * @param image Coupon image
	 */	
	public void setImage(String image) {
		this.image = image;
	}

	@Override
	public String toString() {
		return "Coupon [id=" + id + ", " + (title != null ? "title=" + title + ", " : "")
				+ (startDate != null ? "startDate=" + startDate + ", " : "")
				+ (endDate != null ? "endDate=" + endDate + ", " : "") + "amount=" + amount + ", "
				+ (type != null ? "type=" + type + ", " : "") + (message != null ? "message=" + message + ", " : "")
				+ "price=" + price + ", " + (image != null ? "image=" + image : "") + "]";
	}

}
