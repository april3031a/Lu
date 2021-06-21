
    $(function() {

        /* 按下GoTop按鈕時的事件 */
        $('#gotop').click(function(){
            $('html,body').animate({ scrollTop: 0 }, 'slow');   /* 返回到最頂上 */
            return false;
        });
        
        /* 偵測卷軸滑動時，往下滑超過400px就讓GoTop按鈕出現 */
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 400 ||  document.documentElement.scrollTop > 20 || document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
                $('#gotop').fadeIn();
            } else {
                $('#gotop').fadeOut();
            }
        });
    });

  

    
    
  $(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
    $(function(){ $('#A1').click(function(){ //點擊此選擇器
        $('html,body').animate({scrollTop:$('#content').offset().top-100 }, 'slow'); //滑到此區
        });  
    }); 
});

$(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
    $(function(){ $('#A2').click(function(){ 
        $('html,body').animate({scrollTop:$('#content2').offset().top -100}, 'slow'); 
        });  
    }); 
});


$(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
    $(function(){ $('#A3').click(function(){ 
        $('html,body').animate({scrollTop:$('#content3').offset().top -100}, 'slow'); 
        });  
    }); 
});


$(document).ready(function(){//使用JQ語法，JQ ready的function是必要的
    $(function(){ $('#A4').click(function(){ 
        $('html,body').animate({scrollTop:$('#content4').offset().top -100}, 'slow'); 
        });  
    }); 
});

$(function() {
          $(window).scroll(function() {
            if ($(this).scrollTop() > 0)  {          /* 要滑動到選單的距離 */
               $('#menu1').addClass('navFixed');   /* 幫選單加上固定效果 */
        
           
              
            } else {
              $('#menu1').removeClass('navFixed'); /* 移除選單固定效果 */
             
            }
          });
        });
 