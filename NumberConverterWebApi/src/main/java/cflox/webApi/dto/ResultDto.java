package cflox.webApi.dto;

import java.io.Serializable;

public class ResultDto implements Serializable {

	private static final long serialVersionUID = 1L;
	
	private String romanResult;
	
	public ResultDto(String romanResult) {
		this.romanResult = romanResult;
	}

	public String getRomanResult() {
		return romanResult;
	}

	public void setRomanResult(String romanResult) {
		this.romanResult = romanResult;
	}


}
