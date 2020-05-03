'use strict';

$('button[type=submit]').click(function (e) {
  e.preventDefault();
  $('#timeLine').removeClass('d-none');
});
/* let key = '1Z7WE3150346530901'
let url = `https://www.kuaidi100.com/query?type=ups&postid=${key}&id=1&valicode=&temp=0.8200502115817585&phone=`
$.get({
  url,
  type:'GET',
  dataType:'jsonp',
  success:res=>{
    console.log(res)
  }
}) */


