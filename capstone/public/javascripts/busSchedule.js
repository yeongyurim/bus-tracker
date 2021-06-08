// 분 변환기
function tCal(h,m){
	return h*60+m;
}

// 분을 텍스트로
function tMak(bT,nT){

	var t = bT-nT;
	var hour = Math.floor(t/60);
	var minute = t%60;

	if(hour==0){
		return minute+"분 남았습니다."
	}
	else{
		return hour+"시간"+minute+"분 남았습니다."
	}
}

//학교 08:50~ 17:20
function Ubus() {

	var date = new Date();

	var nH = date.getHours();
	var nM = date.getMinutes();
	var nT = tCal(nH,nM);

  // 첫차

	if(nT<=tCal(8,50)){
		var bT = tCal(8,50);

		return tMak(bT,nT);
	}

	// 일반적인 시간대
	else if(nT<=tCal(16,50)){

		if (nM<=20) {
			var bT = tCal(nH,20);

			return tMak(bT,nT);
		}

		else if(nM<=50){
			var bT = tCal(nH,50);

			return tMak(bT,nT);
		}
		else {
			var bT = tCal(++nH,20);

			return tMak(bT,nT);
		}
	}

	// 마지막 세 차편

	else if(nT<=tCal(17,20)){
		var bT = tCal(17,20);

		return tMak(bT,nT);
	}
	//운행 종료
	else{
		return "오늘의 운행은 종료되었습니다.";
	}

}

//역 09:05 ~ 17:35
function Sbus() {

	var date = new Date();

	var nH = date.getHours();
	var nM = date.getMinutes();
	var nT = tCal(nH,nM);

  // 첫차

	if(nT<=tCal(9,05)){
		var bT = tCal(9,05);

		return tMak(bT,nT);
	}

	// 일반적인 시간대
	else if(nT<=tCal(17,05)){

		if (nM<=05) {
			var bT = tCal(nH,05);

			return tMak(bT,nT);
		}

		else if(nM<=35){
			var bT = tCal(nH,35);

			return tMak(bT,nT);
		}
		else {
			var bT = tCal(++nH,05);

			return tMak(bT,nT);
		}
	}

	// 마지막 세 차편

	else if(nT<=tCal(17,35)){
		var bT = tCal(17,35);

		return tMak(bT,nT);
	}
	//운행 종료
	else{
		return "오늘의 운행은 종료되었습니다.";
	}

}

// html 적어주는 함수
function NBT() {

	document.getElementById("stat").innerHTML = Ubus();
	document.getElementById("univ").innerHTML = Sbus();
}

setInterval(NBT(), 1000);
