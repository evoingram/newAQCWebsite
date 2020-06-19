
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
