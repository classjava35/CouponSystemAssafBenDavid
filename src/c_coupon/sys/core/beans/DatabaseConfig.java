package c_coupon.sys.core.beans;

import javax.activation.DataSource;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.boot.jdbc.DataSourceBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;

@Configuration
public class DatabaseConfig {
	@Bean
	@Primary
	@ConfigurationProperties(prefix = "spring.datasource")
	public javax.sql.DataSource dataSource() {
		return DataSourceBuilder.create().build();
	}
}
