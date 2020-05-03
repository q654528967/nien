'use strict';

(function () {
  var $header = '<header class="container px-3">\n<nav class="navbar navbar-expand-lg navbar-light p-0">\n        <a class="navbar-brand p-0" style="width:4em;" href="./index.html">\n            <img class="img-fluid" src="../img/index/logo.gif" alt="">\n        </a>\n        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">\n          <span class="navbar-toggler-icon"></span>\n        </button>\n        <div class="collapse navbar-collapse" id="nav">\n          <ul class="navbar-nav ml-auto">\n            <li class="nav-item">\n              <a class="nav-link" href="./index.html" class="index">\u9996\u9875</a>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link" href="./aboutMe.html" class="index">关于我们</a>\n            </li>\n          <li class="nav-item dropdown">\n              <a class="nav-link dropdown-toggle" href="javascript:;" id="yjcx" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\u4E00\u952E\u67E5\u8BE2</a>\n              <div class="dropdown-menu" aria-labelledby="yjcx">\n    <a class="dropdown-item" href="./businessSelect.html">\u4E00\u952E\u62A5\u4EF7</a>\n            <a class="dropdown-item" href="./Software.html">\u76EE\u7684\u6E2F\u67E5\u8BE2</a>\n                <a class="dropdown-item" href="./hs.html">hs\u7F16\u7801\u67E5\u8BE2</a>\n                <a class="dropdown-item" href="./usHs.html">\u7F8E\u56FDhs\u7F16\u7801\u67E5\u8BE2</a>\n                <a class="dropdown-item" href="./airport.html">\u673A\u573A\u67E5\u8BE2</a>\n                <a class="dropdown-item" href="./clearance.html">\u901A\u5173\u67E5\u8BE2</a>\n <a class="dropdown-item" href="./dot.html">\u7F51\u70B9\u67E5\u8BE2</a>\n              </div>\n            </li>\n            <li class="nav-item dropdown">\n              <a class="nav-link" href="./deliverGoods.html">\u6211\u8981\u53D1\u8D27</a>\n                   </li>\n            <li id="news" class="nav-item dropdown">\n              <a class="nav-link dropdown-toggle" href="javascript:;" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\u65B0\u95FB\u8D44\u8BAF</a>\n              <div class="dropdown-menu" aria-labelledby="news">\n                <a class="dropdown-item" href="./news.html">\u56FD\u9645\u5FEB\u9012\u65B0\u95FB</a>\n                <a class="dropdown-item" href="javascript:;">\u8DE8\u5883\u7269\u6D41\u65B0\u95FB</a>\n                <a class="dropdown-item" href="javascript:;">\u56FD\u9645\u8D27\u8FD0\u4F18\u60E0</a>\n                <a class="dropdown-item" href="javascript:;">\u65B0\u5BA2\u6237\u4F53\u9A8C</a>\n               </div>\n            </li>\n       <li class="nav-item">\n              <a class="nav-link" href="./logisticsTracking.html">\u7269\u6D41\u8DDF\u8E2A</a>\n            </li>\n            <li class="nav-item">\n              <a class="nav-link" href="../html/login.html">\u7528\u6237\u4E2D\u5FC3</a>\n            </li>\n          </ul>\n        </div>\n      </nav>\n</header>';
  $('body').prepend($header);
  var url = window.location.href;
  $('#nav li>a').each(function (index, el) {
    var elHref = el.href;
    var code = url.includes(elHref);
    if (code == true) {
      el.style.color = "#ff6600";
    }
    let $elSiblings = $(el).siblings()
    if($elSiblings.length>0){
      $elSiblings.map((key,el1)=>{
        let $el = $(el1)
        $el.children().map((index,elm)=>{
          let $elm = $(elm)
          let pathname = $elm[0].pathname
          let content = $elm[0].text
          if(url.includes(pathname)){
            let $el1 = $(el)
            $el1.css({color:'#f60'})
            $el1.html(content)
          }
        })
      })
    }
  });
})();
