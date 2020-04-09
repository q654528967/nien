(function(){
let $header=`<header class="container p-0">
<nav class="navbar navbar-expand-lg navbar-light p-0">
        <a class="navbar-brand p-0" style="width:4em;" href="./index.html">
            <img class="img-fluid" src="../img/index/logo.gif" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item">
              <a class="nav-link" href="./index.html" class="index">首页</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./business.html">业务范围</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./businessSelect.html">一键报价</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="javascript:;" id="yjcx" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">一键查询</a>
              <div class="dropdown-menu" aria-labelledby="yjcx">
                <a class="dropdown-item" href="javascript:;">业务查询</a>
                <a class="dropdown-item" href="javascript:;">运价查询</a>
                <a class="dropdown-item" href="javascript:;">目的港查询</a>
                <a class="dropdown-item" href="javascript:;">hs编码查询</a>
                <a class="dropdown-item" href="javascript:;">美国hs编码查询</a>
                <a class="dropdown-item" href="javascript:;">机场查询</a>
                <a class="dropdown-item" href="javascript:;">通关查询</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="javascript:;" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">我要发货</a>
              <div class="dropdown-menu" aria-labelledby="yjcx">
                <a class="dropdown-item" href="./deliverGoods.html">集运仓</a>
                <a class="dropdown-item" href="javascript:;">FBA全程</a>
                <a class="dropdown-item" href="javascript:;">美国海运拼货</a>
                <a class="dropdown-item" href="javascript:;">慢船拼货</a>
                <a class="dropdown-item" href="javascript:;">空运拼货</a>
                <a class="dropdown-item" href="javascript:;">美国尾程</a>
                <a class="dropdown-item" href="javascript:;">国际快递</a>
              </div>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="javascript:;" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">新闻资讯</a>
              <div class="dropdown-menu" aria-labelledby="yjcx">
                <a class="dropdown-item" href="./news.html">国际快递新闻</a>
                <a class="dropdown-item" href="javascript:;">跨境物流新闻</a>
                <a class="dropdown-item" href="javascript:;">国际货运优惠</a>
                <a class="dropdown-item" href="javascript:;">新客户体验</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./checkPrice.html">网点查询</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="./logisticsTracking.html">物流跟踪</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="../html/login.html">用户中心</a>
            </li>
          </ul>
        </div>
      </nav>
</header>`
$('body').prepend($header);
let url=window.location.href
$('#nav li>a').each((index,el)=>{
  let elHref=el.href;
  let code=url.includes(elHref)
  if(code==true){
    el.style.color="#ff6600"
  }
})
})() 
