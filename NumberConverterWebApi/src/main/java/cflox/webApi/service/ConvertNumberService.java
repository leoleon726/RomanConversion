package cflox.webApi.service;

public interface ConvertNumberService {
	
	/**
	 * Convert decimal into roman number
	 * @param decimal
	 * @return
	 */
	public String convertDecimalToRoman(String decimal);
	
	/**
	 * Convert binary number into roman number
	 * @param binary
	 * @return
	 */
	public String convertBinaryToRoman(String binary);

}
