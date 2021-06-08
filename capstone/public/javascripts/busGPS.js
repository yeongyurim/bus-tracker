// 소켓을 생성합니다.

var socket = io.connect();

socket.on('good',function(d){

  document.getElementById('location').innerHTML = "좌표 보내는중 x :"+d.lat+" y :"+d.lon;

});

// getCurrentPosition 옵션

var options = {

  enableHighAccuracy:true,
  maximumAge: 0,
  timeout: 5000

}

// 좌표 함수

function success(pos) {

  var lat = pos.coords.latitude, // 위도
      lon = pos.coords.longitude; // 경도

  socket.emit('bus',{lat:lat,lon:lon}); // 서버로 좌표 보내는 소켓

}

// 에러 함수
function error(err) {

  alert(err);

}

// 윈도우 로드 완료시
window.onload = function() {

//위치 정보를 사용할 수 있습니다.
  if ('geolocation' in navigator){

    navigator.geolocation.watchPosition(success,error,options);

  }
//위치 정보 사용 불가능
  else {

    alert('위치 정보 사용 동의를 해주세요!')
  }
};
