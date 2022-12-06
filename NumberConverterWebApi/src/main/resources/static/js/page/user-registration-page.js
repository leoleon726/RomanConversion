const urllocal = window.location.origin;


class RegistrationForm {

	constructor(form) {

		const self = this;
		this.form = form;


		this.firstname = form.querySelector('[name="firstname"]');
		this.lastname = form.querySelector('[name="lastname"]');
		this.email = form.querySelector('[name="email"]');
		this.phone = form.querySelector('[name="phone"]');
		this.password = form.querySelector('[name="psw"]');
		this.repassword = form.querySelector('[name="repsw"]');



		this.firstname.addEventListener('focus', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var fnError = document.getElementById('fnError');
			if (el.value == "") {
				fnError.setAttribute('hidden', 'hidden');
			}
		});

		this.lastname.addEventListener('focus', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var lnError = document.getElementById('lnError');
			if (el.value == "") {
				lnError.setAttribute('hidden', 'hidden');
			}
		});

		this.email.addEventListener('focus', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var emailError = document.getElementById('emailError');
			if (el.value == "") {
				emailError.setAttribute('hidden', 'hidden');
			}
		});
		
		this.phone.addEventListener('focus', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var phoneError = document.getElementById('phoneError');
			if (el.value == "") {
				phoneError.setAttribute('hidden', 'hidden');
			}
		});

		this.password.addEventListener('focus', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var pswError = document.getElementById('pswError');
			if (el.value == "") {
				pswError.setAttribute('hidden', 'hidden');
			}
		});
		this.repassword.addEventListener('focus', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var repswError = document.getElementById('repswError');
			if (el.value == "") {
				repswError.setAttribute('hidden', 'hidden');
			}
		});

		this.firstname.addEventListener('keyup', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var fnError = document.getElementById('fnError');
			var fnblock = document.getElementById('fnblock');
			if (el.value == "") {
				fnError.setAttribute('hidden', 'hidden');
			}
			if (el.validity.patternMismatch) {
				fnError.removeAttribute('hidden');
				fnblock.classList.remove("has-success");
			} else {
				fnError.setAttribute('hidden', 'hidden');
				fnblock.className += ' has-success';
			}
		});

		this.lastname.addEventListener('keyup', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var lnError = document.getElementById('lnError');
			var lnblock = document.getElementById('lnblock');
			if (el.validity.patternMismatch) {
				lnError.removeAttribute('hidden');
				lnblock.classList.remove("has-success");
			} else {
				lnError.setAttribute('hidden', 'hidden');
				lnblock.className += ' has-success';
			}
		});

		this.email.addEventListener('keyup', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var emailError = document.getElementById('emailError');
			var emailblock = document.getElementById('emailblock');
			if (el.validity.patternMismatch) {
				emailError.removeAttribute('hidden');
				emailblock.classList.remove("has-success");
			} else {
				emailError.setAttribute('hidden', 'hidden');
				emailblock.className += ' has-success';
			}
		});

		this.phone.addEventListener('keyup', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var phoneError = document.getElementById('phoneError');
			var phoneblock = document.getElementById('phoneblock');
			if (el.validity.patternMismatch) {
				phoneError.removeAttribute('hidden');
				phoneblock.classList.remove("has-success");
			} else {
				phoneError.setAttribute('hidden', 'hidden');
				phoneblock.className += ' has-success';
			}
		});

		this.password.addEventListener('keyup', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var pswError = document.getElementById('pswError');
			var pswblock = document.getElementById('pswblock');
			if (el.validity.patternMismatch) {
				pswError.removeAttribute('hidden');
				pswblock.classList.remove("has-success");
			} else {
				pswError.setAttribute('hidden', 'hidden');
				pswblock.className += ' has-success';
			}
		});

		this.repassword.addEventListener('keyup', (evt) => {
			evt.preventDefault();
			const el = evt.target;
			var repswError = document.getElementById('repswError');
			var repswblock = document.getElementById('repswblock');
			if (this.password.value != el.value) {
				repswError.removeAttribute('hidden');
				repswblock.classList.remove("has-success");
			} else {
				repswError.setAttribute('hidden', 'hidden');
				repswblock.className += ' has-success';
			}
		});
		
		this.form.addEventListener('submit',function(evt){
			evt.preventDefault();
			self.submitForm(form);
		});
	}
	
	submitForm(form){
		const data = new FormData(form);
		const endpoint = '/user/registration';

		$.ajax({
			type: 'POST',
			data: data,
			url : endpoint,
			dataType: 'json',
			processData: false,
   			 contentType: false,
			success: function(data){
				console.log ('I am here');
			}
		});
		
	}

}


$(document).ready(function() {

	const form = document.getElementById('registration-form');
	if (form) {
		new RegistrationForm(form);

	}
});