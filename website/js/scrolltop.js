;(function($){
  let speed = 800,$html = `

    <i class='fa fa-arrow-up position-relative w-100 h-100' style='font-size:30px'></i>

  `,pageHeight = window.innerHeight
  let div = $('<div>',{
    id:'scrollTop',
  })
  .css({
    backgroundColor:'rgba(0,0,0,.3)',
    color:'#fff',
    position:'fixed',
    bottom:'50px',
    right:'50px',
    width:'45px',
    height:'45px',
    borderRadius:'5px',
    zIndex:'999'
  })
  .html($html)
  .appendTo('body').click(()=>{
    $('html,body').animate({
      scrollTop: '0px'
    },speed);	
  }).hide().hover(function(){
    $(this).css({
      backgroundColor:"rgba(225, 85, 34,1)"
    })
  }, function(){
    $(this).css({
      backgroundColor:'rgba(0,0,0,.3)'
    })
  })
  $(document).scroll(()=>{
    let scrollHeight = $(document).scrollTop()
    if(scrollHeight>(pageHeight/4)){
      div.show()
    }else{
      div.hide()
    }
  })
}(jQuery))