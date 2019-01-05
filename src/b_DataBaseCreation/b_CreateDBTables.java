package b_DataBaseCreation;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.sql.Statement;
import java.util.ArrayList;
import java.util.List;

/**
 * <h1> Drops and Recreates All Data Base Tables </h1> The CreateDBTables program drops and recreates a all Coupon System DB
 * Tables. 
 * <p><b>Purpose:</b>
 * So in case of new computer or willing to reset the DB , run this application to get a clean fresh DB. 
 * 
 * @author Assaf Ben David
 * @version 1.0
 * @since 2018-09-06
 */
public class b_CreateDBTables {
	/**
	 * This is a main method which drops and recreates a all Coupon System DB Tables.
	 * to get a clean fresh DB.
	 * <p>
	 * All Ids (COMPANY_ID , CUSTOMER_ID etc.):
	 * <p>1. Cannot be Null.
	 * <p>2. GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1) - meaning the id index generated automatically so it starts at 1 and incremented by 1.
	 * 
	 * <p><b>Note:</b> In this case no need to return connection in case of <font color="red">failure</font> , because the connection is been sent as a parameter to the try and catch, so it will be closed by itself.
	 * 
	 * @param args Unused
	 * 
	 */
	public static void main(String[] args) {

		List<String> sqlList = new ArrayList<String>();
		//Drop all Coupon System DB tables
		String sql1 = "Drop table COMPANY";
		String sql2 = "Drop table CUSTOMER";
		String sql3 = "Drop table COUPON";
		String sql4 = "Drop table CUSTOMER_COUPON";
		String sql5 = "Drop table COMPANY_COUPON";

		/*Recreates all Coupon System DB tables
		 * The id cannot be Null and the index is generated automatically so it starts at 1 and incremented by 1
		 */
		String sql6 = "CREATE TABLE COMPANY(COMPANY_ID BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1), COMP_NAME VARCHAR(255), PASSWORD VARCHAR(255), EMAIL VARCHAR(255),CONSTRAINT PK_Company PRIMARY KEY (COMPANY_ID))";
		String sql7 = "CREATE TABLE CUSTOMER(CUSTOMER_ID BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1), CUST_NAME VARCHAR(255), PASSWORD VARCHAR(255),CONSTRAINT PK_Customer PRIMARY KEY (CUSTOMER_ID))";
		String sql8 = "CREATE TABLE COUPON(COUPON_ID BIGINT NOT NULL GENERATED ALWAYS AS IDENTITY (START WITH 1, INCREMENT BY 1), TITLE VARCHAR(255), START_DATE DATE,END_DATE DATE,AMOUNT INTEGER,EnumType VARCHAR(255),MESSAGE VARCHAR(255),PRICE FLOAT,IMAGE VARCHAR(255),CONSTRAINT PK_Coupon PRIMARY KEY (COUPON_ID))";
		String sql9 = "CREATE TABLE CUSTOMER_COUPON(CUSTOMER_ID BIGINT NOT NULL,COUPON_ID BIGINT NOT NULL,CONSTRAINT PK_CustomerCoupon PRIMARY KEY(CUSTOMER_ID,COUPON_ID))";
		String sql10 = "CREATE TABLE COMPANY_COUPON(COMPANY_ID BIGINT NOT NULL,COUPON_ID BIGINT NOT NULL,CONSTRAINT PK_CompanyCoupon PRIMARY KEY(COMPANY_ID,COUPON_ID))";
		String sql11 = "INSERT INTO APP.COMPANY (COMP_NAME,PASSWORD,EMAIL) VALUES('Company_Name','Password','Company@Company_Name.net'),('Company_Name1','Password','Company@Company_Name.net'),('Company_Name2','Password','Company@Company_Name.net'),('Company_Name3','Password','Company@Company_Name.net')";
		String sql12 = "INSERT INTO APP.Customer (CUST_NAME,PASSWORD) VALUES('Customer_Name','Password'),('Customer_Name1','Password'),('Customer_Name2','Password'),('Customer_Name3','Password')";
		String sql13 = "INSERT INTO APP.coupon (TITLE,START_DATE,END_DATE,AMOUNT,ENUMTYPE,MESSAGE,PRICE,IMAGE) "
				+ "		VALUES"
				//Restaurants
				+ "('Premium Italian Restaurant','2018-11-14','2019-12-14',25,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',30,'https://travel.virginaustralia.com/sites/default/files/MEL-pasta.jpg')"
				+ ",('Burgers Bocca','2018-11-14','2019-12-14',25,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'https://image.nj.com/home/njo-media/width620/img/entertainment_impact/photo/cross-and-orange-restaurant-7-19-2015-23c8263e252f5e09.jpg')"
				+ ",('EMBLA Fusion','2017-02-18','2017-12-14',64,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'https://www.reviewjournal.com/wp-content/uploads/2018/02/10049585_web1_thinkstockphotos-594065052.jpg')"
				+ ",('ROCKWELL AND SONS','2018-05-14','2019-12-14',44,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',22,'https://cdn.newsapi.com.au/image/v1/cffb718523b67b6be807dcadfb9f28aa?width=650')"
				+ ",('Grey & Bliss','2018-11-05','2019-12-14',25,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',18,'https://dynaimage.cdn.cnn.com/cnn/q_auto,w_602,c_fill,g_auto,h_339,ar_16:9/http%3A%2F%2Fcdn.cnn.com%2Fcnnnext%2Fdam%2Fassets%2F151215113659-40-thai-food-17-khao-moo-daeng-1.jpg')"
				+ ",('Thai Me Up Restaurant','2018-10-14','2019-12-14',35,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'https://www.plated.com/uploads/culinary/recipe_image/file/9340/menu_small_Chicken_Pad_Thai_with_Bok_Choy_THUMB.jpg')"
				+ ",('Lox Stock & Bagels','2015-08-10','2015-12-14',21,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',26,'https://media-cdn.tripadvisor.com/media/photo-s/04/cc/ef/02/straight-from-new-york.jpg')"
				+ ",('All Vegan restaurant','2018-10-14','2019-12-14',35,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'http://www.saintjacquesfrenchcuisine.com/images/HomeSlide5.jpg')"
				+ ",('Dairy restaurant','2018-08-10','2019-12-14',21,'RESTAURANTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',26,'https://gourmandelle.com/wp-content/uploads/2018/03/french-cuisine-guide-bucataria-frantuzeasca-ghid.jpg')"
				
				//ELECTRICITY
				+ ",('Kitchen Microwave Oven','2018-11-14','2019-12-14',105,'ELECTRICITY',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',80,'https://cdn.mos.cms.futurecdn.net/dLwKoQHMUQvJbhQfsV5WAR-768-80.jpg')"
				+ ",('Kitchen family Oven','2018-11-14','2019-12-14',125,'ELECTRICITY',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',410,'https://www.handymanlondonplease.co.uk/images/userfiles/oven-repair-london.jpeg')"
				+ ",('Kyal & Kara Kitchen kit','2018-02-18','2019-12-14',64,'ELECTRICITY',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',110,'https://wch.thegoodguys.com.au/dxdam/image/kyalkit_appliance_tile_3.jpg')"
				+ ",('Nesspresso coffee maker','2018-05-14','2019-12-14',64,'ELECTRICITY',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',122,'https://www.img.enligo.com/images/180615/nespresso-platinium-kahvinkeitin_2df13_400x200.jpg')"
				+ ",('BOSCH PEGLA Iron','2018-11-05','2019-12-14',885,'ELECTRICITY',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',68,'https://www.okdam.com/public/images/upload/product/thumb/tiny/baltra-electric-iron-duro-bti124.jpg')"
				+ ",('Vakum cleaner','2018-10-14','2019-12-14',135,'ELECTRICITY',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',110,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQCGzbZAx6iZiGYqSpc3sTdF3PPk0erAvWkLOI40gGKYMGms7dL')"

				//FOOD
				+ ",('Fast food meals','2018-11-14','2019-12-14',105,'FOOD',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',3,'https://img.purch.com/rc/300x200/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzA4MC84MTUvb3JpZ2luYWwvanVuay1mb29kLmpwZw==')"
				+ ",('Mexican family dinner','2018-11-14','2019-12-14',125,'FOOD',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',4,'https://fa-assets-production.cdnedge.bluemix.net/attachments/4d11aea6bd28a608b41e1416b818e8721657a03a/store/fill/300/200/efae475becb469d2b119572b03ab350e7ed7a1755f3cc06dceed4af902ce/featured_image.jpg')"
				+ ",('Juice squeezer','2018-02-18','2019-12-14',64,'FOOD',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',48.5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1miHf39eOTkDSqILZal1DjBXFSmlE8w-2tMDYESF9Y5iraTGLg')"
				+ ",('Margarita and nachos','2018-05-14','2019-12-14',64,'FOOD',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',7.5,'https://di-uploads-pod8.dealerinspire.com/jaguaralbuquerquegroup1automotive/uploads/2018/06/Mexican-restaurant-2-300-1.jpg')"
				+ ",('vegan pasta','2018-11-05','2019-12-14',885,'FOOD',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',3,'https://gastro.24sata.hr/media/img/40/2f/08deccf78ae878b84522.jpeg')"
				+ ",('com carne picada','2018-10-14','2019-12-14',135,'FOOD',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',6,'https://images.e-konomista.pt/articles/850_400_receitas-carne-picada-saudaveis.jpg')"

				
				//HEALTH
				+ ",('DNA analysis','2018-11-14','2019-12-14',125,'HEALTH',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',110,'http://www.healthcarebusinesstech.com/wp-content/uploads/GettyImages-872676342-300x200.jpg')"
				+ ",('Juice squeezer','2018-02-18','2019-12-14',64,'HEALTH',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',48.5,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSt1miHf39eOTkDSqILZal1DjBXFSmlE8w-2tMDYESF9Y5iraTGLg')"
				+ ",('Fish Oil Omega 3','2018-11-05','2019-12-14',885,'HEALTH',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',28,'http://www.naturemade.com/~/media/Images/NatureMade/Images/Products/Social/PID14328%20NM%20Top%205%20Supplements%20Article%20Image%20300x200')"
				+ ",('Medical nutrition therapy','2018-10-14','2019-12-14',135,'HEALTH',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',70,'https://m2.healio.com/~/media/slack-news/nephrology/misc/other/dietitian.jpg')"
				
				//SPORTS
				+ ",('professional racing bicycle','2018-11-14','2019-12-14',105,'SPORTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',30,'http://www.physics.org/UploadDocs/Careers/Sectors/Images/sport.jpg')"
				+ ",('Learn ski touring','2018-11-14','2019-12-14',125,'SPORTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'https://www.lgtvestra.com/export/shared/.content/images-v2/content/0633_Skisport-Pfiffner_537x336.jpg_812329082.jpg')"
				+ ",('Learn Golf in 5 lessons','2018-02-18','2019-12-14',64,'SPORTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'https://www.coasttherapy.ca/wp-content/uploads/2018/02/Fotolia_1811274_XS.jpg')"
				+ ",('Running suite','2018-11-05','2019-12-14',885,'SPORTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',18,'https://www.quizony.com/which-sport-are-you/which-sport-are-you-small.jpg')"
				+ ",('sport injuries physiotherapy','2018-10-14','2019-12-14',135,'SPORTS',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'http://www.drabelrodriguez.com/wp-content/uploads/2015/12/sports-injury-chiropractor--300x200.jpg')"
				
				//CAMPING
				+ ",('Camping with you Dog','2018-11-14','2019-12-14',105,'CAMPING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',30,'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2-_C5emWJIoR8elc4DUh_XrGv_TUhQsg9-SGdJaON4LX4VKYEfQ')"
				+ ",('Camping RV','2018-11-14','2019-12-14',125,'CAMPING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'https://aspenmn.com/images/photos/camp1.jpg')"
				+ ",('igloo tent','2018-02-18','2019-12-14',64,'CAMPING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'https://www.camping-dordogne-lacigaline.com/wp-content/uploads/2018/02/location-cocosweet-camping-dordogne-350x250.jpg')"
				+ ",('Indian tent','2018-11-05','2019-12-14',885,'CAMPING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',18,'https://cyprusscene.com/wp-content/uploads/2017/08/Campsite-image.jpg')"
				+ ",('Full Camping Kit','2018-10-14','2019-12-14',135,'CAMPING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',10,'http://satwlasvegas2015.com/wp-content/uploads/2015/06/PRE_06b1-350x250.jpg')"
				
				
				//TRAVELING
				+ ",('Trip to Portugal','2018-11-14','2019-12-14',105,'TRAVELING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',330,'https://www.sidetrend.com/wp-content/uploads/2018/03/Gateway-of-India-Featured--350x250.jpg')"
				+ ",('Trip to Sahara Desert','2018-11-14','2019-12-14',125,'TRAVELING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',210,'https://media.caminoways.com/travel-solo-31-300x200.jpg')"
				+ ",('Trip to Thailand','2018-02-18','2019-12-14',64,'TRAVELING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',610,'http://www.postoffice.co.uk/dam/jcr:2dbc92ae-657b-4c2c-bd34-cd67510e32eb/IMG_FSSB_Travel-Insurance-Thailand-category-page-header.jpg')"
				+ ",('Trip to Paris','2018-11-05','2019-12-14',885,'TRAVELING',' provided all the food for our company happy hour. It was all delicious and made into cocktail bites. All the food was prepared on time, exactly how we requested. Super professional and very tasty!',318,'https://cdn.website.thryv.com/cfd864b92864423d829a2f3a3d45030c/dms3rep/multi/mobile/05327a7.jpg')"
				;

		String val= "(1,1)";
		for (int i = 2; i < 40; i++) {
			val = val +",";
			val = val+"(1,"+i+")";
		} 
		String sql14 = "INSERT INTO APP.company_coupon (company_id,coupon_id) VALUES"+val;

		
		sqlList.add(sql1);
		sqlList.add(sql2);
		sqlList.add(sql3);
		sqlList.add(sql4);
		sqlList.add(sql5);
		sqlList.add(sql6);
		sqlList.add(sql7);
		sqlList.add(sql8);
		sqlList.add(sql9);
		sqlList.add(sql10);
		sqlList.add(sql11);
		sqlList.add(sql12);
		sqlList.add(sql13);
		sqlList.add(sql14);

		String url = "jdbc:derby://localhost:1527/cs";
//		String url = "jdbc:postgresql://localhost:5432/cs";

		try (Connection con = DriverManager.getConnection(url);) {
			// work with the database here
			System.out.println("connected and creating new table for you ");

			for (int i = 0; i < sqlList.size(); i++) {
				String sql = sqlList.get(i);
				Statement stmt = con.createStatement();
				stmt.executeUpdate(sql);
				System.out.println(sql);
			} // Statement is the type we use to send SQL commands to the DBMS

		} catch (SQLException e) {
			e.printStackTrace();
		}
		System.out.println("disconnected");
	}
}
