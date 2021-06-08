var container = document.getElementById('map'); //지도를 표시할 div

var options = {
  center: new kakao.maps.LatLng(37.3093,126.8739), //지도의 중심좌표
  level: 3 //지도확대 레벨
};

var map = new kakao.maps.Map(container, options); //지도를 생성

var markerPosition  = new kakao.maps.LatLng(37.3093,126.8739);

// 마커를 생성합니다
var marker = new kakao.maps.Marker({
  position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);

function textm(t,tt){
document.getElementById('runi').innerHTML = t;
document.getElementById('rsta').innerHTML = tt;
}

function boolpos(x,y) {
var xpos = Math.floor(x*10000)/10000;
var ypos = Math.floor(y*10000)/10000;

if(xpos==37.3094 && ypos==126.8734){
textm("탑승중입니다🟢","출발지 대기중");
}
if(xpos==37.3093 && ypos==126.8738){
textm("탑승중입니다🟢","출발지 대기중");
}
else if(xpos==37.3105 && ypos==126.8709){
textm("다음 시간대를 확인해 주세요 ","6분 뒤 도착");
}
else if(xpos==37.3073 && ypos==126.8659){
textm("다음 시간대를 확인해 주세요 ","4분 뒤 도착");
}
else if(xpos==37.3041 && ypos==126.8634){
textm("다음 시간대를 확인해 주세요 ","2분 뒤 도착");
}
else if(xpos==37.3036 && ypos==126.8665){
textm("다음 시간대를 확인해 주세요 ","탑승중입니다🟢");
}
}




var socket = io.connect();

socket.on('disconnect', () => {
document.getElementById('conn').innerHTML = "버스 비운행중🔴";
textm("다음 시간대를 확인해 주세요 ","다음 시간대를 확인해 주세요 ");
});

function RUbus(tt) {
document.getElementById('runi').innerHTML = tt.univ;
document.getElementById('rsta').innerHTML = tt.stat;
}

function real_T(d) {
document.getElementById('conn').innerHTML = "버스 운행중 🟢";
boolpos(d.lat,d.lon)
}

socket.on('good',function(d){

real_T(d);

container = document.getElementById('map'); //지도를 표시할 div

options = {
center: new kakao.maps.LatLng(37.3094039,126.873829), //지도의 중심좌표
level: 3 //지도확대 레벨
};

map = new kakao.maps.Map(container, options); //지도를 생성

markerPosition  = new kakao.maps.LatLng(d.lat, d.lon);

// 마커를 생성합니다
marker = new kakao.maps.Marker({
position: markerPosition
});

// 마커가 지도 위에 표시되도록 설정합니다
marker.setMap(map);
});
