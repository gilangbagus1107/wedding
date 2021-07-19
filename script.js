// event pada saat link di klik
$('.page-scroll').on('click', function (e) {

	// ambil isi href
	var tujuan = $(this).attr('href');
	// tangkap element yg bersangkutan
	var elementTujuan = $(tujuan);

	// pindahkan scroll
	$('html, body').animate({
		scrollTop: elementTujuan.offset().top - 74
	}, 1250, 'easeInOutExpo');

	e.preventDefault();
});

$(window).ready(function (i) {
	$('.header .hide').each(function (i) {
		setTimeout(function () {
			$('.header .hide').eq(i).addClass('pMuncul');
		}, 300 * (i + 1));

	});
	$('#bunga').addClass('pMuncul');
})

$(window).scroll(function () {
	var tScroll = $(this).scrollTop();
	var opa = (100 - (tScroll / 6)) / 100
	// console.log(opa);

	// parallax 
	$('#bunga').css({
		'transform': 'translate(0px, ' + tScroll / 2.5 + '% )',
		'opacity': opa,
		'transition': '0s'
	});

	$('.header h1, .header p, .header a').css({
		'transform': 'translate(0px, ' + tScroll / 1.1 + '% )',
		'opacity': opa,
		'transition': '0s'
	});

	// gallery
	if (tScroll > $('.gallery').offset().top - 250) {
		$('.gallery .img-fluid').each(function (i) {
			setTimeout(function () {
				$('.gallery .img-fluid').eq(i).addClass('muncul');
			}, 100 * (i + 1));

		});
	}

	// navbar
	// if (tScroll > $('body').offset().top + 580) {
	// 	$('nav.navbar').each(function (i) {
	// 		setTimeout(function () {
	// 			$('nav.navbar').eq(i).addClass('bg-light').removeClass('bg-transparent');
	// 		}, 50 * (i + 1));

	// 	});
	// }

});