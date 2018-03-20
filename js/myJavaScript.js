/* Set the width of the side navigation to 250px */
function openNav() {
	document.getElementById("mySidenav").style.width = "250px";

	// Make sidemenu transparent
	/*document.getElementById("mySidenav").style.backgroundColor = "rgba(0,0,0,0.4)";*/
}


/* Set the width of the side navigation to 0 */
function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
}

/* Linking Career Options Pages when career img is clicked */

// When Back Button Click, Return to SD Career Options Page
$('.BackBtnToMainSD_CareerPage').on('click', function () {
	$('#sdMainCareerPage').show().siblings('div').hide();

	// Load at top of page
	$(document).ready(function () {
		$(this).scrollTop(0);
	});
});

// When 1st Img on SD Career Options pg clicked, display its page
$('.sdCareerImg1Click').on('click', function () {
	if ($('#sdMainCareerPage').css('display') != 'none') {
		$('#sdCareer1Page').show().siblings('div').hide();
	} else if ($('#sdCareer1Page').css('display') != 'none') {
		$('#sdMainCareerPage').show().siblings('div').hide();
	}

	// Load at top of page
	$(document).ready(function () {
		$(this).scrollTop(0);
	});
});

// When 2nd Img on SD Career Options pg clicked, display its page
$('.sdCareerImg2Click').on('click', function () {
	if ($('#sdMainCareerPage').css('display') != 'none') {
		$('#sdCareer2Page').show().siblings('div').hide();
	} else if ($('#sdCareer2Page').css('display') != 'none') {
		$('#sdMainCareerPage').show().siblings('div').hide();
	}

	// Load at top of page
	$(document).ready(function () {
		$(this).scrollTop(0);
	});
});

// When 3rd Img on SD Career Options pg clicked, display its page
$('.sdCareerImg3Click').on('click', function () {
	if ($('#sdMainCareerPage').css('display') != 'none') {
		$('#sdCareer3Page').show().siblings('div').hide();
	} else if ($('#sdCareer3Page').css('display') != 'none') {
		$('#sdMainCareerPage').show().siblings('div').hide();
	}

	// Load at top of page
	$(document).ready(function () {
		$(this).scrollTop(0);
	});
});

// When 4th Img on SD Career Options pg clicked, display its page
$('.sdCareerImg4Click').on('click', function () {
	if ($('#sdMainCareerPage').css('display') != 'none') {
		$('#sdCareer4Page').show().siblings('div').hide();
	} else if ($('#sdCareer4Page').css('display') != 'none') {
		$('#sdMainCareerPage').show().siblings('div').hide();
	}

	// Load at top of page
	$(document).ready(function () {
		$(this).scrollTop(0);
	});
});

// When 5th Img on SD Career Options pg clicked, display its page
$('.sdCareerImg5Click').on('click', function () {
	if ($('#sdMainCareerPage').css('display') != 'none') {
		$('#sdCareer5Page').show().siblings('div').hide();
	} else if ($('#sdCareer5Page').css('display') != 'none') {
		$('#sdMainCareerPage').show().siblings('div').hide();
	}

	// Load at top of page
	$(document).ready(function () {
		$(this).scrollTop(0);
	});
});

// When 6th Img on SD Career Options pg clicked, display its page
$('.sdCareerImg6Click').on('click', function () {
	if ($('#sdMainCareerPage').css('display') != 'none') {
		$('#sdCareer6Page').show().siblings('div').hide();
	} else if ($('#sdCareer6Page').css('display') != 'none') {
		$('#sdMainCareerPage').show().siblings('div').hide();
	}

	// Load at top of page
	$(document).ready(function () {
		$(this).scrollTop(0);
	});
});
$(document).ready(function () {
	$('[data-toggle="popover"]').popover();
});


/* END OF Linking SD Career Options JS Codes */


