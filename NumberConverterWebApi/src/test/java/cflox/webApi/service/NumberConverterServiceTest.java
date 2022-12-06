package cflox.webApi.service;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;
import org.mockito.InjectMocks;

class NumberConverterServiceTest {
	
	@InjectMocks
	private ConvertNumberService convertNumber = new ConvertNumberServiceImpl();
	  
	  

	@Test
	void testConvertDecimalToRoman() {
		String romanI = convertNumber.convertDecimalToRoman(23);
		assertEquals(romanI, "XXIII");		
		String romanII = convertNumber.convertDecimalToRoman(252);  
		assertEquals(romanII, "CCLII");
		String romanIII = convertNumber.convertDecimalToRoman(1000);  
		assertEquals(romanIII, "M");
		String romanIV = convertNumber.convertDecimalToRoman(1010);  
		assertEquals(romanIV, "MX");
	}

	@Test
	void testConvertBinaryToRoman() {
		String romanI = convertNumber.convertBinaryToRoman("10111");		
		assertEquals(romanI, "XXIII");
	}

}
