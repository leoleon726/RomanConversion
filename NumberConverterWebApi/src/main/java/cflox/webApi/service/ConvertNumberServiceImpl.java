package cflox.webApi.service;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;

@Service
public class ConvertNumberServiceImpl implements ConvertNumberService {

	Logger logger = LoggerFactory.getLogger(this.getClass());


	public String convertDecimalToRoman(int decimalToConvert) {

		int[] decimals = { 1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1 };
		String[] romanNumbers = { "M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I" };
		StringBuilder romanResult = new StringBuilder();
		for (int i = 0; i < decimals.length; i++) {
			while (decimalToConvert >= decimals[i]) {
				decimalToConvert = decimalToConvert - decimals[i];
				romanResult.append(romanNumbers[i]);
			}
		}
		return romanResult.toString();
	}

	
	public String convertBinaryToRoman(String binaryToConvert) {
		
	    int decimal = Integer.parseInt(binaryToConvert, 2);
	    return convertDecimalToRoman(decimal);
		
	}

	

}
