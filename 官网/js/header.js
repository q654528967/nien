(function(){
let $header=`<header>
<nav class="navbar navbar-expand-md navbar-light p-0">
        <a class="navbar-brand p-0" style="width: 9vmax;" href="#">
            <img class="img-fluid" src="../img/index/logo.gif" alt="">
        </a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#nav" aria-controls="nav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="nav">
          <ul class="navbar-nav ml-auto">
            <li class="nav-item active">
              <a class="nav-link" href="#">首页</a>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">业务范围</a>
              <div class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <a class="dropdown-item" href="#">Action</a>
                <a class="dropdown-item" href="#">Another action</a>
                <a class="dropdown-item" href="#">Something else here</a>
              </div>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">我要发货</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">进口贸易</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">联系我们</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">价格查询</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">服务介绍</a>
            </li>
          </ul>
        </div>
      </nav>
</header>`
$('body').prepend($header);
})() 
