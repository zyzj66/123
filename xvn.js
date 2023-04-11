$(() => {
  $('.enroll-a').click(() => {
		$('.login').hide();
		$('.enroll').show();
	})
	$('.login-b').click(() => {handoff()})
	const handoff = () => {
		$('.login').show();
		$('.enroll').hide();
	}

	$('.login-a').click(() => {
		const name = $('#name').val();
		const pwd = $('#pwd').val();
		let account = localStorage.getItem('account');
		let password = localStorage.getItem('password');
		if (!name || !pwd) {
			alert('账号或密码不能为空！！！');
		} else if (name == account && pwd == password || name == 666 && pwd == 888) {
			alert('登录成功！');
			localStorage.setItem('captcha', 1);
			$('.login').hide();
			$('body').append('<iframe src="indds.html"></iframe>');
		} else {
			alert('账号或密码错误！！！');
		}
	})

	$('.enroll-b').click(() => {
		const name1 = $('#name1').val();
		const pwd1 = $('#pwd1').val();
		if (!name1 || !pwd1) {
			alert('账号与密码不能为空！！！');
		} else {
			localStorage.setItem('account', name1);
			localStorage.setItem('password', pwd1);
			alert('注册成功！');
			handoff();
			$('#name').val(name1);
			$('#pwd').val(pwd1);
		}
	})
	
	const detect = () => {
		if (localStorage.getItem('captcha').length <= 30) {
			const recording = localStorage.getItem('captcha') + 1;
			localStorage.setItem('captcha', recording);
			$('.login').hide();
			$('body').append('<iframe src="indds.html"></iframe>');
		}
	}
	detect();
})
