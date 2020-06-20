// screen one form validation
function Allow1() {
	var w = document.forms['OrderForm']['p1i1'].value;
	var z = document.forms['OrderForm']['p1i4'].value;
	var ww = document.forms['OrderForm']['turnaround'].value;
	var s = document.forms['OrderForm']['p1i5'].value;
	var vStartOF = document.getElementById('one1');
	if (w == '') {
		missingInfoAlert('You must enter the jurisdiction where the hearing took place before we can proceed.');
		return false;
	} else if (z == '' || z < 1) {
		missingInfoAlert('You must enter audio length in minutes.');
		return false;
	} else if (s == 'No') {
		missingInfoAlert('You must agree to the listed page rate before we can proceed.');
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

function ClearFields(fieldID) {document.getElementById(fieldID).value = '';}

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
		missingInfoAlert('Please enter the case caption exactly as it should appear on the transcript.');
		return false;
	} else if (h == '') {
		missingInfoAlert('Please enter the case number as it should appear on the transcript.');
		return false;
	} else if (k == '') {
		missingInfoAlert('Please enter the hearing date.');
		return false;
	} else if (l == '') {
		missingInfoAlert("Please enter the judge or hearing officer's name.");
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
	var xx = document.forms['OrderForm']['p6i1'].value.match(/^[a-zA-Z0-9., ]+$/);
	var yy = document.forms['OrderForm']['p6i2'].value.match(/^[a-zA-Z0-9., ]+$/);
	var zz = document.forms['OrderForm']['p6i3'].value;
	var a = document.forms['OrderForm']['p6i4'].value.match(/^[a-zA-Z0-9., ]+$/);
	var b = document.forms['OrderForm']['p6i5'].value.match(/^[a-zA-Z0-9., ]*$/);
	var c = document.forms['OrderForm']['p6i6'].value.match(/^[a-zA-Z. ]+$/);
	var d = document.forms['OrderForm']['p6i7'].value.match(/^[a-zA-Z ]+$/);
	var e = document.forms['OrderForm']['p6i8'].value.match(/(^\d{5}$)|(^\d{5}-\d{4}$)/);
	var f = document.forms['OrderForm']['p6i9'].value.match(
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
	);
	if (!xx) {
		missingInfoAlert('Your Name:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!yy) {
		missingInfoAlert("Attorney's Name:  Please use only alphanumeric characters, commas, or periods.");
		return false;
	} else if (zz == '') {
		missingInfoAlert('Company Name:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!a) {
		missingInfoAlert('Address1:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!b) {
		missingInfoAlert('Address2:  Please use only alphanumeric characters, commas, or periods.');
		return false;
	} else if (!c) {
		missingInfoAlert('City:  Please use only alphabetic characters or periods.');
		return false;
	} else if (!d) {
		missingInfoAlert('State:  Please use only alphabetic characters.');
		return false;
	} else if (!e) {
		missingInfoAlert('ZIP:  Please enter a five-digit ZIP code.');
		alert(alertText);
		return false;
	} else if (f) {
		missingInfoAlert('Email:  Please enter a valid e-mail address.');
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
		for (x = 0; x < form1Elements.length; x++) {
			form1Elements[x].style.height = '0px';
		}
	}
}

function missingInfoAlert(alertText) {alert(alertText);}

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
	} else if (id === 'three') {
		vNextFS = document.getElementById('four');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('two');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq2');
	} else if (id === 'four') {
		vNextFS = document.getElementById('four');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('two');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq2');
	} else if (id === 'five') {
		vNextFS = document.getElementById('five');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('four');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
		var form1Elements = document.getElementsByClassName('.pq4');
	} else if (id === 'six') {
		vNextFS = document.getElementById('six');
		vNextFS.style.display = 'none';
		vNextFS.style.height = '0';
		vNextFS = document.getElementById('five');
		vNextFS.style.display = 'block';
		vNextFS.style.height = '100%';
	}
	if (id === 'two' || id === 'three' || id === 'four' || id === 'five') {
		for (x = 0; x < form1Elements.length; x++) {
			form1Elements[x].style.height = '100%';
		}
	}
}