'use strict';

$(function () {
  $('#toast1').toast({
    delay: 2000
  });
});
{
  var $uname = $('#uname'),
      $upwd = $('#upwd'),
      $submit = $('#submit');
  $uname.focus(function () {
    if ($upwd.tooltip) $upwd.tooltip('hide');
    if ($uname.tooltip) $uname.tooltip('hide');
  }).blur(function () {
    //if里面填验证规则
    if ($uname.val().length < 4) {
      $uname.tooltip({
        title: '用户名未输入或者格式不正确',
        placement: 'left',
        trigger: 'manual'
      }).tooltip('toggle');
    }
  });
  $upwd.focus(function () {
    if ($upwd.tooltip) $upwd.tooltip('hide');
  }).blur(function () {
    //if里面是验证规则
    if ($upwd.val().length == 0) {
      var upwd = $upwd;
      upwd.tooltip({
        title: '密码不能为空',
        placement: 'left',
        trigger: 'manual'
      }).tooltip('toggle');
    }
  });
  $submit.click(function (e) {
    e.preventDefault();
    var uname = $uname.val();
    var upwd = $upwd.val();
    if (uname == '' || upwd == '') {
      $('#toast1').toast('show');
    } else {
      //这里发起请求
    }
  });
}