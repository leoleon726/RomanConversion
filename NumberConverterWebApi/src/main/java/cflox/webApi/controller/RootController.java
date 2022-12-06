package cflox.webApi.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import cflox.webApi.service.NumberConverterService;

@Controller
public class RootController {
	
	@Autowired
	private NumberConverterService numberConverter;
	
	public RootController(NumberConverterService numberConverter) {
		this.numberConverter = numberConverter;
		
	}
	
	@GetMapping (value ="/")
	public String openWebApi( HttpServletRequest request, HttpServletResponse response) {
		System.out.println("leoleon hola");
		
		return "conversion-page";
	}
	

}
