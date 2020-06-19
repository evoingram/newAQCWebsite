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

// price quote calculator
function calculatePrice(OrderForm) {
	//Get selected data
	var AudioLength = document.forms['OrderForm']['p1i4'].value;
	var Turnaround = document.forms['OrderForm']['turnaround'].value;

	//var PageRate = 2.65;
	var hours = 0;
	AudioLength = parseInt(AudioLength);

	if (AudioLength >= 885) {
		if (Turnaround == '30') {
			PageRate = 2.65;
		} else if (Turnaround == '45') {
			PageRate = 2.5;
		} else if (Turnaround == '14') {
			PageRate = 3.25;
		} else if (Turnaround == '7') {
			PageRate = 3.75;
		} else if (Turnaround == '3') {
			PageRate = 4.25;
		} else if (Turnaround == '1') {
			PageRate = 5.25;
		}
	} else {
		if (Turnaround == '30') {
			PageRate = 2.65;
		} else if (Turnaround == '45') {
			PageRate = 2.5;
		} else if (Turnaround == '14') {
			PageRate = 3.25;
		} else if (Turnaround == '7') {
			PageRate = 3.75;
		} else if (Turnaround == '3') {
			PageRate = 4.25;
		} else if (Turnaround == '1') {
			PageRate = 5.25;
		}
	}

	//convert data to integers
	hours = AudioLength / 60;

	//calculate total value
	var total = 45 * hours * PageRate;

	if (total < 50) {
		total = 50;
	}

	//print value to  tPrice
	var dollar = '$';
	total = total.toFixed(2);
	document.getElementById('tPrice2').value = dollar.concat(total);
}
//open one of the hidden pages and close all others
function openForm(hiddenFormID) {
	var allFormPopups = document.getElementsByClassName('form-popup');
	for (x = 0; x < allFormPopups.length; x++) {
		document.getElementsByClassName('form-popup')[x].style.display = 'none';
	}
	document.getElementById(hiddenFormID).style.display = 'block';
}

// close one of the hidden pages
function closeForm(hiddenFormID) {
	document.getElementById(hiddenFormID).style.display = 'none';
}

// toggle faq answer
function toggleFAQDetails(obj) {
	/* var elementQS = document.getElementById("show1"); */
	var currentID = obj;
	var numberID = obj.slice(-2);
	var showID = 'show' + numberID;
	var hideID = 'hide' + numberID;
	var elementD = document.getElementById('details' + numberID);
	var elementQS = document.getElementById(showID);
	var elementQH = document.getElementById(hideID);
	/* 
            /if click on show1
                then show hide1
                     hide sho1, details
            if click on hide1
                then show show1, details1
                     hide hide1
            
            */
	if (currentID === hideID) {
		elementD.classList.add('show');
		elementD.classList.remove('hide');
		elementQS.classList.add('show');
		elementQS.classList.remove('hide');
		elementQH.classList.add('hide');
		elementQH.classList.remove('show');
		return;
	} else if (currentID === showID) {
		elementD.classList.add('hide');
		elementD.classList.remove('show');
		elementQS.classList.add('hide');
		elementQS.classList.remove('show');
		elementQH.classList.add('show');
		elementQH.classList.remove('hide');
		return;
	}
}

// sticky nav
function stickyNav() {
	var navbar = document.querySelector('.navigation');
	var sticky = navbar.offsetTop;
	if (window.pageYOffset >= sticky) {
		document.body.style.paddingTop = navbar.offsetHeight + 45 + 'px';
		navbar.classList.add('sticky');
	} else {
		navbar.classList.remove('sticky');
		document.body.style.paddingTop = 0;
	}
}

// screen one form validation
function Allow1() {
	var w = document.forms['OrderForm']['p1i1'].value;
	var z = document.forms['OrderForm']['p1i4'].value;
	var ww = document.forms['OrderForm']['turnaround'].value;
	var s = document.forms['OrderForm']['p1i5'].value;
	var vStartOF = document.getElementById('one1');
	if (w == '') {
		alert('You must enter the jurisdiction where the hearing took place before we can proceed.');
		return false;
	} else if (z == '') {
		alert('You must enter audio length in minutes.');
		return false;
	} else if (z < 1) {
		alert('You must enter audio length in minutes.');
		return false;
	} else if (s == 'No') {
		alert('You must agree to the listed page rate before we can proceed.');
		return false;
	} else {
		var vStartOF = document.getElementById('one1');
		vStartOF.style.display = 'none';
		vStartOF.style.height = '0';
		var pqChange1 = document.getElementById('pqChange1');
		pqChange1.textContent = `Order a Transcript`;
		var pqChange2 = document.getElementById('pqChange2');
		pqChange2.textContent = `Finish filling out the form to order your transcript.`;
		var vNextFS = document.getElementById('two');
		vNextFS.style.display = 'block';
		vNextFS.style.overflow = 'visible';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq1');
		for (x = 0; x < form1Elements.length; x++) {
			form1Elements[x].style.height = '0px';
		}
	}
}

// screen two form validation
function Allow2() {
	var t = document.forms['OrderForm']['p3i2'].value;
	var u = document.forms['OrderForm']['p3i3'].value;
	if (u == 'No') {
		alert('If you do not agree to the terms of service, we will be unable to accept your order at this time.');
		return false;
	} else {
		var vStartOF = document.getElementById('two');
		vStartOF.style.display = 'none';
		vStartOF.style.height = '0';
		var vNextFS = document.getElementById('four');
		vNextFS.style.display = 'block';
		vNextFS.style.overflow = 'visible';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq2');
		for (x = 0; x < form1Elements.length; x++) {
			form1Elements[x].style.height = '0px';
		}
	}
}

// screen three form validation
function Allow3() {
	var v = document.forms['OrderForm']['p4i1'].value;
	if (v == '') {
		var vNextFS = document.getElementById('four');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
	} else {
		var vStartOF = document.getElementById('four');
		vStartOF.style.display = 'none';
		vStartOF.style.height = '0';
		var vNextFS = document.getElementById('five');
		vNextFS.style.display = 'block';
		vNextFS.style.overflow = 'visible';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq4');
		for (x = 0; x < form1Elements.length; x++) {
			form1Elements[x].style.height = '0px';
		}
	}
}

function ClearFields(fieldID) {
	document.getElementById(fieldID).value = '';
}

// screen four form validation
function Allow4() {
	var g = document.forms['OrderForm']['p5i1'].value;
	var h = document.forms['OrderForm']['p5i2'].value;
	var i = document.forms['OrderForm']['p5i3'].value;
	var k = document.forms['OrderForm']['p5i5'].value;
	var l = document.forms['OrderForm']['p5i6'].value;
	var m = document.forms['OrderForm']['p5i7'].value;
	var n = document.forms['OrderForm']['p5i8'].value;
	var o = document.forms['OrderForm']['p5i9'].value;
	var p = document.forms['OrderForm']['p5i10'].value;
	var q = document.forms['OrderForm']['p5i11'].value;
	if (g == '') {
		alert('Please enter the case caption exactly as it should appear on the transcript.');
		return false;
	} else if (h == '') {
		alert('Please enter the case number as it should appear on the transcript.');
		return false;
	} else if (k == '') {
		alert('Please enter the hearing date.');
		return false;
	} else if (l == '') {
		alert("Please enter the judge or hearing officer's name.");
		return false;
	} else {
		var vStartOF = document.getElementById('four');
		vStartOF.style.display = 'none';
		vStartOF.style.height = '0';
		var vNextFS = document.getElementById('five');
		vNextFS.style.display = 'block';
		vNextFS.style.overflow = 'visible';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq4');
		for (x = 0; x < form1Elements.length; x++) {
			form1Elements[x].style.height = '0px';
		}
	}
	captchaSet();
}

// screen five form validation
function Allow5() {
	var xx = document.forms['OrderForm']['p6i1'].value;
	var yy = document.forms['OrderForm']['p6i2'].value;
	var zz = document.forms['OrderForm']['p6i3'].value;
	var a = document.forms['OrderForm']['p6i4'].value;
	var b = document.forms['OrderForm']['p6i5'].value;
	var c = document.forms['OrderForm']['p6i6'].value;
	var d = document.forms['OrderForm']['p6i7'].value;
	var e = document.forms['OrderForm']['p6i8'].value;
	var f = document.forms['OrderForm']['p6i9'].value;
	if (!xx.match(/^[a-zA-Z0-9., ]+$/)) {
		alert('Your Name:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!yy.match(/^[a-zA-Z0-9., ]+$/)) {
		alert("Attorney's Name:  Please use only alphanumeric characters, commas, or periods.");
		return false;
	} else if (zz == '') {
		alert('Company Name:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!a.match(/^[a-zA-Z0-9., ]+$/)) {
		alert('Address1:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!b.match(/^[a-zA-Z0-9., ]*$/)) {
		alert('Address2:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!c.match(/^[a-zA-Z. ]+$/)) {
		alert('City:  Please use only alphabetic characters or periods.');
		return false;
	} else if (!d.match(/^[a-zA-Z ]+$/)) {
		alert('State:  Please use only alphabetic characters.');
		return false;
	} else if (!e.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/)) {
		alert('ZIP:  Please enter a five-digit ZIP code.');
		return false;
	} else if (f.match(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
		alert('Email:  Please enter a valid e-mail address.');
		return false;
	} else {
		var vStartOF = document.getElementById('five');
		vStartOF.style.display = 'none';
		vStartOF.style.height = '0';
		var vNextFS = document.getElementById('six');
		vNextFS.style.display = 'block';
		vNextFS.style.overflow = 'visible';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq5');
		for (x = 0; x < form1Elements.length; x++) {form1Elements[x].style.height = '0px';}
	}
}

// calculate and display price estimate
function calculatePrice(OrderForm) {
	//Get selected data
	var AudioLength = document.forms['OrderForm']['p1i4'].value;
	var Turnaround = document.forms['OrderForm']['turnaround'].value;

	//var PageRate = 2.65;
	var hours = 0;
	AudioLength = parseInt(AudioLength);

	if (AudioLength >= 885) {
		if (Turnaround == '30') {
			PageRate = 2.65;
		} else if (Turnaround == '45') {
			PageRate = 2.5;
		} else if (Turnaround == '14') {
			PageRate = 3.25;
		} else if (Turnaround == '7') {
			PageRate = 3.75;
		} else if (Turnaround == '3') {
			PageRate = 4.25;
		} else if (Turnaround == '1') {
			PageRate = 5.25;
		}
	} else {
		if (Turnaround == '30') {
			PageRate = 2.65;
		} else if (Turnaround == '45') {
			PageRate = 2.5;
		} else if (Turnaround == '14') {
			PageRate = 3.25;
		} else if (Turnaround == '7') {
			PageRate = 3.75;
		} else if (Turnaround == '3') {
			PageRate = 4.25;
		} else if (Turnaround == '1') {
			PageRate = 5.25;
		}
	}

	//convert data to integers
	hours = AudioLength / 60;

	//calculate total value
	var total = 45 * hours * PageRate;

	if (total < 50) {
		total = 50;
	}

	//print value to  tPrice
	var dollar = '$';
	total = total.toFixed(2);
	document.getElementById('tPrice2').value = dollar.concat(total);
}

// reset form and go back to page one price quote area
function resetForm() {
	document.getElementById('orderForm').reset();
	var vNextFS = document.getElementById('six');
	vNextFS.style.display = 'none';
	vNextFS.style.height = '0';
	vNextFS = document.getElementById('one1');
	vNextFS.style.display = 'block';
	vNextFS.style.overflow = 'visible';
	vNextFS.style.height = '100%';
	var form1Elements = document.getElementsByClassName('.pq6');
	for (x = 0; x < form1Elements.length; x++) {
		form1Elements[x].style.height = '0px';
	}
}

// go back when you click back button
function backClicked(id) {
	var vNextFS;
	if (id === 'two') {
		vNextFS = document.getElementById('two');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('one1');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
		var pqChange1 = document.getElementById('pqChange1');
		pqChange1.textContent = 'Price Quote Calculator';
		var pqChange2 = document.getElementById('pqChange2');
		pqChange2.textContent = 'Get a price quote on your transcript.';
		var vNextFS = document.getElementById('two');
		var form1Elements = document.getElementsByClassName('.pq1');
		for (x = 0; x < form1Elements.length; x++) {form1Elements[x].style.height = '100%';}
	} else if (id === 'three') {
		vNextFS = document.getElementById('four');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('two');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq2');
		for (x = 0; x < form1Elements.length; x++) {form1Elements[x].style.height = '100%';}
	} else if (id === 'four') {
		vNextFS = document.getElementById('four');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('two');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq2');
		for (x = 0; x < form1Elements.length; x++) {form1Elements[x].style.height = '100%';}
	} else if (id === 'five') {
		vNextFS = document.getElementById('five');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('four');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq4');
		for (x = 0; x < form1Elements.length; x++) {form1Elements[x].style.height = '100%';}
	} else if (id === 'six') {
		vNextFS = document.getElementById('six');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('five');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
	}
}

// close open divs w/ class form-popup
function closeFPOpenCurrent(id) {
	if (document.getElementsByClassName('form-popup').style.display != 'none') {
		document.getElementsByClassName('form-popup').style.display = 'none';
		document.getElementById(id).style.display = 'block';
	}
}

// ad image switch for mobile/tablet versions
function imageChangeWindowResize() {

	// if #ratesi, #softwareDevelopmenti, #abouti,#contacti max-width = 90%
	// then change src to banner ad imgs

	if (window.innerWidth < 900 && window.innerWidth > 300) {
		document.getElementById('softwareDevelopmenti').style.display = 'none';
		document.getElementById('abouti').style.display = 'none';
		document.getElementById('contacti').style.display = 'none';
		document.getElementById('ratesi').style.display = 'none';
		document.getElementById('softwareDevelopmenti').src = 'img/BannerExpertise.png';
		document.getElementById('abouti').src = 'img/BannerRate.png';
		document.getElementById('contacti').src = 'img/BannerFree.png';
		document.getElementById('ratesi').src = 'img/BannerRate.png';
		document.getElementById('abouti').style.display = 'inline-flex';
		document.getElementById('softwareDevelopmenti').style.display = 'inline-flex';
		document.getElementById('contacti').style.display = 'inline-flex';
		document.getElementById('ratesi').style.display = 'inline-flex';
	} else if (window.innerWidth > 899) {
		document.getElementById('softwareDevelopmenti').style.display = 'none';
		document.getElementById('abouti').style.display = 'none';
		document.getElementById('contacti').style.display = 'none';
		document.getElementById('ratesi').style.display = 'none';
		document.getElementById('softwareDevelopmenti').src = 'img/AQC Square Ad 04.png';
		document.getElementById('abouti').src = 'img/AQC Square Ad 01.png';
		document.getElementById('contacti').src = 'img/AQC Square Ad 05.png';
		document.getElementById('ratesi').src = 'img/BannerRate.png';
		document.getElementById('softwareDevelopmenti').style.display = 'inline-flex';
		document.getElementById('abouti').style.display = 'inline-flex';
		document.getElementById('contacti').style.display = 'inline-flex';
		document.getElementById('ratesi').style.display = 'inline-flex';
	} else if (window.innerWidth < 301) {
		document.getElementById('softwareDevelopmenti').style.display = 'none';
		document.getElementById('abouti').style.display = 'none';
		document.getElementById('contacti').style.display = 'none';
		document.getElementById('ratesi').style.display = 'none';
		document.getElementById('softwareDevelopmenti').src = 'img/AQC Square Ad 04.png';
		document.getElementById('abouti').src = 'img/AQC Square Ad 01.png';
		document.getElementById('contacti').src = 'img/AQC Square Ad 05.png';
		document.getElementById('ratesi').src = 'img/AQC Square Ad 05.png';
		document.getElementById('softwareDevelopmenti').style.display = 'inline-flex';
		document.getElementById('abouti').style.display = 'inline-flex';
		document.getElementById('contacti').style.display = 'inline-flex';
		document.getElementById('ratesi').style.display = 'inline-flex';
	}
}
