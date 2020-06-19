// Captcha Script

function checkForm(theForm) {
	var why = '';

	if (document.getElementsByName('captchaInput')[0].value == '') {
		why += '- Please Enter CAPTCHA Code.\n';
	}
	if (document.getElementsByName('captchaInput')[0].value != '') {
		if (ValidCaptcha(document.getElementsByName('captchaInput')[0].value) == false) {
			why += '- The CAPTCHA Code Does Not Match.\n';
		}
	}
	if (why != '') {
		alert(why);
		return false;
	}
}
function captchaSet() {
	var a = Math.ceil(Math.random() * 9) + '';
	var b = Math.ceil(Math.random() * 9) + '';
	var c = Math.ceil(Math.random() * 9) + '';
	var d = Math.ceil(Math.random() * 9) + '';
	var e = Math.ceil(Math.random() * 9) + '';

	var code = a + b + c + d + e;
	document.getElementById('txtCaptcha').value = code;
	document.getElementById('CaptchaDiv').innerHTML = code;
}
// Validate input against the generated number
function ValidCaptcha() {
	var textCaptcha = removeSpaces(document.getElementById('txtCaptcha').value);
	var captchaInput = removeSpaces(document.getElementById('captchaInput').value);
	if (textCaptcha == captchaInput) {
		return true;
	} else {
		return false;
	}
}

// Remove the spaces from the entered and generated code
function removeSpaces(string) {
	return string.split(' ').join('');
}
