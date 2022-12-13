const urllocal = window.location.origin;


class ConversionForm {

	constructor(form) {

		const self = this;
		this.form = form;
		this.decimalInput = document.getElementById("decimalInput");
		this.romanDecimal = document.getElementById("romanFromDecimal");
		
		this.binaryInput = document.getElementById("binaryInput");
		this.romanBinary = document.getElementById("romanFromBinary");
		
		this.decimalInput.addEventListener('change',(evt) => {
			evt.preventDefault();
			const el = evt.target;
			this.decimalConversion(this.form,this.romanDecimal);
		
		});
		
		this.binaryInput.addEventListener('change',(evt) => {
			evt.preventDefault();
			const el = evt.target;
			this.binaryConversion(this.form,this.romanBinary);
			
		});



	}
	
	decimalConversion(form,resultInput){
		const data = new FormData(form);
		const endpoint = '/conversion/decimal';

		$.ajax({
			type: 'POST',
			data: data,
			url : endpoint,
			dataType: 'json',
			processData: false,
   			 contentType: false,
			success: function(data){
				resultInput.value = data.romanResult;
				
			}
		});
		
	}
	
	binaryConversion(form,resultInput){
		const data = new FormData(form);
		const endpoint = '/conversion/binary';

		$.ajax({
			type: 'POST',
			data: data,
			url : endpoint,
			dataType: 'json',
			processData: false,
   			contentType: false,
			success: function(data){
				resultInput.value = data.romanResult;
			}
		});
		
	}
}


$(document).ready(function() {

	const form = document.getElementById('conversionForm');
	if (form) {
		new ConversionForm(form);

	}
});