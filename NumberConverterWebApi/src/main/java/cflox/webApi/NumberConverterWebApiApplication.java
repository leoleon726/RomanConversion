package cflox.webApi;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;

@SpringBootApplication
public class NumberConverterWebApiApplication extends SpringBootServletInitializer {
	
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder application) {
		return application.sources(NumberConverterWebApiApplication.class);
	}

	public static void main(String[] args) {
		SpringApplication.run(NumberConverterWebApiApplication.class, args);
	}

}
