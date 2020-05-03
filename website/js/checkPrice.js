'use strict';

{
  //初始化数据
  var baseData = {
    '长沙':{
      'point':[113.020892, 28.143873],
      '地址':'',
      '联系人':'',
      '电话':''
    },
    '上海':{
      'point':[121.702421, 31.086319],
      '地址':'上海市松江九亭涞寅路1881号13栋',
      '联系人':'黄先生',
      '电话':'184701227627'
    },
    '义乌':{
      'point':[120.049538,29.373417],
      '地址':'义乌市后宅街道北站4区145栋3单元1楼',
      '联系人':'董先生',
      '电话':'15058500897'
    },
    '深圳':{
      'point':[113.834243,22.652982],
      '地址':'深圳市宝安区福永街道福围路24号 ',
      '联系人':'',
      '电话':''
    },
    '厦门':{
      'point':[118.107444,24.538727],
      '地址':'福建省厦门市湖里区港中路1256号象屿物流配送中心2栋23号',
      '联系人':'',
      '电话':''
    },
    '广州':{
      'point':[113.313383,23.053547],
      '地址':'广州市番禺区大石街鸿图工业园A5',
      '联系人':'',
      '电话':''
    },
    '泉州':{
      'point':[118.585438,24.871435],
      '地址':'泉州市晋江池店镇凤池西路1220-1222号',
      '联系人':'',
      '电话':''
    },
  }
  // 编写自定义函数,创建标注
 /*  var addMarker = function addMarker(point, label) {
    var marker = new BMap.Marker(point);
    map.addOverlay(marker);
    marker.setLabel(label);
  }; */

  var flyCity = function flyCity(x, y) {
    let allOverlay = map.getOverlays()
    let point = new BMap.Point(x, y)
    for(let item of allOverlay){
      if(item.point){
        if(item.point.lng == x && item.point.lat == y){
          item.V.click()
        }
      }
      
    }
    map.centerAndZoom(point, 8);
    map.removeEventListener('tilesloaded',clickCity)
  };

  var map = new BMap.Map("bMap");
  var point = new BMap.Point(baseData.上海.point[0],baseData.上海.point[1]);
  //逆地址解析成经纬度
  /* var myGeo = new BMap.Geocoder();
  myGeo.getPoint('泉州市晋江池店镇凤池西路1220-1222号',function(point){
    if(point){
      console.log(point)
      map.centerAndZoom(point, 16);      
      map.addOverlay(new BMap.Marker(point));
    }
  }) */
  map.centerAndZoom(point, 8);
  map.disableDoubleClickZoom(true);
	var opts = {
        width : 250,     // 信息窗口宽度
        height: 180,     // 信息窗口高度
        title : "信息窗口" , // 信息窗口标题
        offset:new BMap.Size(0, -22)
      };
	/* for(var i=0;i<data_info.length;i++){
		var marker = new BMap.Marker(new BMap.Point(data_info[i][0],data_info[i][1]));  // 创建标注
		var content = data_info[i][2];
		map.addOverlay(marker);               // 将标注添加到地图中
		addClickHandler(content,marker);
  } */
  let $li = ''
  for(let [key,item] of Object.entries(baseData)){
    //console.log(key,item)
    opts.title=key;
    let marker = new BMap.Marker(new BMap.Point(item.point[0],item.point[1]))
    let content = `<div class="row">
      <ul class="list-unstyled col-8">
        <li><span style="font-weight: bold;">地址:</span>${item.地址}<hr></li>
        <li><span style="font-weight: bold;">联系人:</span>${item.联系人}<hr></li>
        <li><span style="font-weight: bold;">电话:</span>${item.电话}</li>
      </ul>
      <div class="col-4">
        <img id="imgContainer" class="img-fluid" src="../img/page3/3_03.gif" />
      </div>
    </div>`
    map.addOverlay(marker)
    addClickHandler(content,marker,key)
    $li += `
    <li onclick="flyCity(${item.point[0]},${item.point[1]})" class="cityPoint ${key=='上海'?'active':null}">${key}</li>
    `
  }
	function addClickHandler(content,marker,key){
		marker.addEventListener("click",function(e){
      e.city = key
      openInfo(content,e)
      
    })
  }
	function openInfo(content,e){
    var p = e.target;
    opts.title = e.city
		var point = new BMap.Point(p.getPosition().lng, p.getPosition().lat);
		var infoWindow = new BMap.InfoWindow(content,opts);  // 创建信息窗口对象 
    map.openInfoWindow(infoWindow,point); //开启信息窗口
    let img = document.getElementById('imgContainer')
    if(img){
      //防止在网速较慢，图片未加载时，生成的信息框高度比图片的总高度小，导致图片部分被隐藏
      img.onload=function(){
        infoWindow.redraw();
      }
    }
  }
  $('.selectBox ul').html($li)
  /* var point1 = new BMap.Point(113.020892, 28.143873);
  var label1 = new BMap.Label('<div class="info"><a href="https://www.baidu.com">\u957F\u6C99</a>\n      <div>\n        <img src="../img/page4/label.png" />  \n      </div>\n    </div>', { offset: new BMap.Size(0, -40) });
  var point2 = new BMap.Point(121.702421, 31.086319);
  var label2 = new BMap.Label('<div class="info"><a href="https://www.baidu.com">\u4E0A\u6D77</a>\n      <div>\n        <img src="../img/page4/label.png" />  \n      </div>\n    </div>', { offset: new BMap.Size(0, -40) });
  addMarker(point1, label1);
  addMarker(point2, label2); */
  /* let ht = `<div class="info">
  <p>${city}</p>
  <ul>
    <li>电话:12345678901</li>
    <li>地址:fgfdgdfgdf</li>
  </ul>
  <div>
    <img src="../img/page4/label.png" />
  </div>
  </div>` */
  /* let aa = '<div class="info"><a href="javascript:;">'+city+'</a>\n <div><p>地址:dsfdfsdsdfd</p></div>     <div>\n        <img src="../img/page4/label.png" />  \n      </div>\n    </div>' */
/*   function addMarkerList(el,city){
    function addItem(el){
      let html = ''
      for(let key in el){
        if(key!='point'){
          html+=`<li>${key +":"+ el[key]}</li>`
        }
      }
      return html
    }
    console.log(el.point)
    var pI = new BMap.Point(el.point[0],el.point[1]);
    var lB = new BMap.Label(`<div class="info">
    <h5 class="text-center">${city}</h5>
    <ul class="list-unstyled">`+addItem(el)+`</ul>
    <div>
      <img src="../img/page4/label.png" />
    </div>
    </div>`, { offset: new BMap.Size(0, -40) })
    addMarker(pI,lB)
  }
  let $li = ''
  for(let [el,key] of Object.entries(baseData)){
    addMarkerList(key,el)
    $li += `
    <li onclick="flyCity(${key.point[0]},${key.point[1]})" class="cityPoint ${el=='上海'?'active':null}">${el}</li>
    `
  }
  $('.selectBox ul').html($li)
  map.addEventListener('click', function (e) {
    console.log(e);
  }); */
  map.enableScrollWheelZoom(true);
  map.setMaxZoom(8);
  $('.selectBox li').click(function () {
    $(this).addClass('active').siblings().removeClass('active');
  });
  function clickCity(){
    flyCity(121.702421,31.086319);
  }
  map.addEventListener("tilesloaded",clickCity);
}