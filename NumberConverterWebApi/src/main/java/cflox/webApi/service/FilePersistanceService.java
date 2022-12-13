package cflox.webApi.service;

public interface FilePersistanceService {
	
	
	/**
	 * Write the conversion into a file 
	 * @param conversion
	 * @return
	 */
	public boolean writeIntoFile(String conversion);

}
