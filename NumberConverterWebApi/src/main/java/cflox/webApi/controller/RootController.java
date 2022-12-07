package cflox.webApi.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class RootController {
	
	public static final String URI_ROOT = "conversion-page";
	
	@GetMapping (value ="/")
	public String openWebApi( HttpServletRequest request, HttpServletResponse response) {
		
		return URI_ROOT;
	}

}
