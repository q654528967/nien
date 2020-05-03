'use strict';

{
  var map = new BMap.Map("bMap");
  var point = new BMap.Point(121.303421, 31.138338);
  map.centerAndZoom(point, 18);
  /* map.disableDoubleClickZoom(false); */
  //禁止地图鼠标滑轮滚动
  /* map.enableScrollWheelZoom(false); */
  var myGeo = new BMap.Geocoder();
  map.addOverlay(new BMap.Marker(point, {
    icon: new BMap.Icon('../img/index/logo.gif', new BMap.Size(50, 30)),
    offset: new BMap.Size(0, -20)
  }));
  map.addOverlay(new BMap.Marker(point,{
    offset:new BMap.Size(-2,20)
  }))
  $('.BMap_Marker').children();
  /* map.addEventListener('click', function(e) {
  console.log(e);
  }) */
  /* myGeo.getPoint("上海市九亭涞寅路1881号七欣科技园13栋楼",function(point){
    console.log(point)
    if(point){
      map.centerAndZoom(point,16)
    }
  },'上海市') */
}