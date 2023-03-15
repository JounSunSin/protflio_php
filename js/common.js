function stateAni(state) {
	let textAni = $('.sp-content');
	let navCheck = $('#main-navigation-toggle').is(':checked');
	let siteHeight = $('#info_home').outerHeight(true);
	let home = 0;
	let skill = siteHeight;
	let site = siteHeight + siteHeight;
	let phone = siteHeight + siteHeight + siteHeight;

	if (state === 'stop') {
		textAni.css('display', 'none');
	} else if (state === 'run' && navCheck == false) {
		textAni.css('display', 'block');
	} else if (state === 'checked' && navCheck == false) {
		textAni.css('display', 'none');
	} else if (state === 'checked' && navCheck == true) {
		textAni.css('display', 'block');
	} else if (state == 'move1' || state == 'move2' || state == 'move3' || state == 'move4') {
		if (state == 'move1') {
			$('html,body').stop().animate({ scrollTop: home }, 500);
			textAni.css('display', 'block');
		} else if (state == 'move2') {
			$('html,body').stop().animate({ scrollTop: skill }, 500);
			setTimeout(gsapSkill(), 1500);
		} else if (state == 'move3') {
			$('html,body').stop().animate({ scrollTop: site }, 500);
		} else if (state == 'move4') {
			$('html,body').stop().animate({ scrollTop: phone }, 500);
		}

		$('#main-navigation-toggle').prop('checked', false);
	}
}

function backCover() {
	// gsap 센셕 css 적용
	gsap.utils.toArray('.section').forEach((section) => {
		ScrollTrigger.create({
			trigger: section,
			start: 'end end',
			pin: true,
			pinSpacing: false,
		});
	});
}

function typingMsg() {
	String.prototype.toKorChars = function () {
		let choList;
		let meddleList;
		let jongList;
		let cho, jung, jong;

		choList = ['ㄱ', 'ㄲ', 'ㄴ', 'ㄷ', 'ㄸ', 'ㄹ', 'ㅁ', 'ㅂ', 'ㅃ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅉ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
		// eslint-disable-next-line no-unused-vars
		meddleList = ['ㅏ', 'ㅐ', 'ㅑ', 'ㅒ', 'ㅓ', 'ㅔ', 'ㅕ', 'ㅖ', 'ㅗ', 'ㅘ', 'ㅙ', 'ㅚ', 'ㅛ', 'ㅜ', 'ㅝ', 'ㅞ', 'ㅟ', 'ㅠ', 'ㅡ', 'ㅢ', 'ㅣ'];
		jongList = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];

		let str = this;
		let cnt = str.length;
		let chars = [];
		let cCode;

		for (var i = 0; i < cnt; i++) {
			cCode = str.charCodeAt(i);

			if (cCode == 32) {
				chars.push(' ');
				continue;
			}

			// 한글이 아닌 경우
			if (cCode < 0xac00 || cCode > 0xd7a3) {
				chars.push(str.charAt(i));
				continue;
			}

			cCode = str.charCodeAt(i) - 0xac00;

			jong = cCode % 28;
			// 종성

			jung = ((cCode - jong) / 28) % 21;
			// 중성

			cho = ((cCode - jong) / 28 - jung) / 21;
			// 초성

			//기본 코드 테스트가 ㅌㅔㅅ-ㅌ- 형식으로 저장됨
			// chars.push(cCho[cho], cJung[jung]);
			// if (cJong[jong] !== '') {
			//     chars.push(cJong[jong]);
			//     }

			//  테스트라는 문장이 있으면 ㅌ테ㅅ스ㅌ트 형식으로 저장되도록함 (타이핑을 위해서)
			chars.push(choList[cho]);

			chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28));

			if (jongList[jong] !== '') {
				chars.push(String.fromCharCode(44032 + cho * 588 + jung * 28 + jong));
			}
		}

		return chars;
	};
	//setInterval을 이용해 반복적으로 출력
	let inter1, inter2, inter3, inter4;
	let jmax1, jmax2, jmax3, jmax4;
	//타이핑할 문장
	let result1 = '마지막까지 읽어 주셔서 감사합니다';
	let result2 = '일은 언제나 고객의 눈높이에 맞추어';
	let result3 = '늘 소통하고 생각하며 일하겠습니다';
	let result4 = '오늘도 평안하고 즐거운 하루 보내세요 !';

	let typeing1 = [];
	let typeing2 = [];
	let typeing3 = [];
	let typeing4 = [];

	result1 = result1.split(''); // 한글자씩자름
	result2 = result2.split(''); // 한글자씩자름
	result3 = result3.split(''); // 한글자씩자름
	result4 = result4.split(''); // 한글자씩자름

	//각글자 초성,중성,종성으로 나눔
	for (let q = 0; q < result1.length; q++) {
		typeing1[q] = result1[q].toKorChars();
	}

	for (let w = 0; w < result2.length; w++) {
		typeing2[w] = result2[w].toKorChars();
	}

	for (let e = 0; e < result3.length; e++) {
		typeing3[e] = result3[e].toKorChars();
	}

	for (let r = 0; r < result4.length; r++) {
		typeing4[r] = result4[r].toKorChars();
	}

	//출력할 엘리먼트요소 가져옴
	let resultDiv1 = document.getElementsByClassName('end_ment_1')[0];
	let resultDiv2 = document.getElementsByClassName('end_ment_2')[0];
	let resultDiv3 = document.getElementsByClassName('end_ment_3')[0];
	let resultDiv4 = document.getElementsByClassName('end_ment_4')[0];

	let text = '';
	let i = 0;
	let j = 0;

	//총글자수
	let imax1 = typeing1.length;
	let imax2 = typeing2.length;
	let imax3 = typeing3.length;
	let imax4 = typeing4.length;

	function typingText() {
		//글자수만큼 반복후 종료
		resultDiv1.classList.add('cursor');

		if (i <= imax1 - 1) {
			//각 글자가 초성 중성 종성 순서대로 추가되도록
			jmax1 = typeing1[i].length;
			resultDiv1.innerHTML = text + typeing1[i][j];
			j++;

			if (j == jmax1) {
				text += typeing1[i][j - 1]; //초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
				i++;
				j = 0;
			}
		} else {
			clearInterval(inter1);
			text = '';
			i = 0;
			j = 0;

			setTimeout(function () {
				resultDiv1.classList.remove('cursor');
				setTimeout(function () {
					resultDiv2.classList.add('cursor');
					setTimeout(function () {
						inter2 = setInterval(typingText2, 50);
					}, 50);
				}, 50);
			}, 50);
		}
	}

	function typingText2() {
		//글자수만큼 반복후 종료
		resultDiv2.classList.add('cursor');

		if (i <= imax2 - 1) {
			//각 글자가 초성 중성 종성 순서대로 추가되도록
			jmax2 = typeing2[i].length;
			resultDiv2.innerHTML = text + typeing2[i][j];
			j++;

			if (j == jmax2) {
				text += typeing2[i][j - 1];
				//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
				i++;
				j = 0;
			}
		} else {
			clearInterval(inter2);
			text = '';
			i = 0;
			j = 0;

			setTimeout(function () {
				resultDiv2.classList.remove('cursor');
				setTimeout(function () {
					inter3 = setInterval(typingText3, 50);
				}, 50);
			}, 50);
		}
	}

	function typingText3() {
		//글자수만큼 반복후 종료
		resultDiv3.classList.add('cursor');

		if (i <= imax3 - 1) {
			//각 글자가 초성 중성 종성 순서대로 추가되도록
			jmax3 = typeing3[i].length;
			resultDiv3.innerHTML = text + typeing3[i][j];
			j++;
			if (j == jmax3) {
				text += typeing3[i][j - 1];
				//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
				i++;
				j = 0;
			}
		} else {
			clearInterval(inter3);
			text = '';
			i = 0;
			j = 0;

			setTimeout(function () {
				resultDiv3.classList.remove('cursor');
				setTimeout(function () {
					inter4 = setInterval(typingText4, 50);
				}, 50);
			}, 50);
		}
	}

	function typingText4() {
		//글자수만큼 반복후 종료
		resultDiv4.classList.add('cursor');

		if (i <= imax4 - 1) {
			//각 글자가 초성 중성 종성 순서대로 추가되도록
			jmax4 = typeing4[i].length;
			resultDiv4.innerHTML = text + typeing4[i][j];
			j++;
			if (j == jmax4) {
				text += typeing4[i][j - 1];
				//초성중성종성 순서대로 출력된 글자는 저장 ( 다음 글자와 이어붙이기 위해서 )
				i++;
				j = 0;
			}
		} else {
			clearInterval(inter4);
		}
	}

	gsap.to('.textBox', {
		duration: 3,
		scrollTrigger: {
			trigger: '.textBox',
			toggleActions: 'restart none reverse none',
			start: 'top 80%',
			end: '+100px 10%',
			onEnter: function () {
				gsapAni();
				inter1 = setInterval(typingText, 80);
			},
			onLeaveBack: function () {
				clearInterval(inter1);
				clearInterval(inter2);
				clearInterval(inter3);
				clearInterval(inter4);
				$('.textBox').children('p').text('');
				$('.textBox').children('p').removeClass('cursor');
				jmax1 = undefined;
				i = 0;
				j = 0;
				text = '';
				$('.selfBox').css('opacity', 0);
			},
		},
	});
}

function gsapAni() {
	gsap.fromTo('.self_address', { y: -500, opacity: 0 }, { y: 0, duration: 3, ease: 'sine.out', opacity: 1 });
	gsap.fromTo('.self_skill_1', { opacity: 0 }, { duration: 3, ease: 'sine.out', opacity: 1, delay: 2 });
	gsap.fromTo('.self_skill_2', { y: 200, opacity: 0 }, { y: 0, duration: 2, ease: 'sine.out', opacity: 1, delay: 3 });
}

// swiper
function swiper() {
	new Swiper('.mySwiper', {
		slidesPerView: 3,
		spaceBetween: 30,
		loop: true,
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
		navigation: {
			nextEl: '.swiper-button-next',
			prevEl: '.swiper-button-prev',
		},
	});
}
