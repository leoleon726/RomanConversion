package cflox.webApi.controller;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import cflox.webApi.service.ConvertNumberService;
import cflox.webApi.service.FilePersistanceService;

@RestController
@RequestMapping("/conversion")
public class RestConversionController {
	
	public static final String URI_ROOT = "conversion-page";
	Logger logger = LoggerFactory.getLogger(this.getClass());
	
	@Autowired
	private ConvertNumberService convertNumber;
	@Autowired
	private FilePersistanceService filePersistance;

	
	public RestConversionController(ConvertNumberService numberConverter,FilePersistanceService filePersistance) {
		this.convertNumber = numberConverter;
		this.filePersistance = filePersistance;
		
	}
	
	@PostMapping (value ="/decimal")
	public String convertDecimal(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String decimal) {
		
		int aux = Integer.valueOf(decimal);
		String romanNumber = this.convertNumber.convertDecimalToRoman(aux);
		String pesistance = "Convert decimal into roman: " + decimal + " -> " + romanNumber;
		logger.info(pesistance);
		this.filePersistance.writeIntoFile(pesistance);
		return romanNumber;
	}
	
	
	@PostMapping (value ="/binary")
	public String convertBinary(HttpServletRequest request, HttpServletResponse response,
			@RequestParam String binary) {
		String romanNumber = this.convertNumber.convertBinaryToRoman(binary);
		String pesistance = "Convert Binary into roman: " + binary + " -> " + romanNumber;
		logger.info(pesistance);
		this.filePersistance.writeIntoFile(pesistance);
		return romanNumber;
	}

}
