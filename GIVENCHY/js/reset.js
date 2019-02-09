window.onload=function(){
    var oHeader=document.getElementsByTagName('header')[0];
    var oHmargin=document.getElementsByClassName('Hmargin');
    var oLi=document.getElementsByClassName('li');
    var oA=document.getElementsByClassName('a');
    var oTwo=document.getElementById('two');
    var oTwoul=document.getElementById('twoul');
    var oMb=document.getElementById('mb');
    var oFooterEmail=document.getElementById('footeremail');
    var oFooterInput=document.getElementById('footerinput');
    var nav=document.getElementsByClassName('nav')[0];
    var oH1=document.getElementsByClassName('h1')[0];
    var oUl=document.getElementById('ul').getElementsByTagName('li');
   var oA2=document.getElementsByClassName('a2');
    function header(){
        for(let i=0;i<oLi.length;i++){
            oLi[i].onmouseover=()=>{
                oA[i].style.borderBottom='3px solid';
                oA[i].style.animation='dh1 0.6s 1';
                if(i<=4){
             oHmargin[i].style.zIndex='9999';
             oHmargin[i].style.display='block';
             oHmargin[i].onmouseover=()=>{
                oHmargin[i].style.display='block';
                oHmargin[i].style.zIndex='9999';
             }
             oHmargin[i].onmouseout=()=>{
                oHmargin[i].style.display='none';
             }
              }
              
            } 
            oLi[i].onmouseout=()=>{
                oA[i].style.borderBottom='';
                oA[i].style.animation='dh2 0.6s 1';
               if(i<=4){
             oHmargin[i].style.display='none';
             oHmargin[i].style.zIndex='0';
            }
               }
            }
            oTwo.onmouseover=function(){
                oTwoul.style.display='block';
                oTwoul.style.zIndex='9999';
                oTwoul.style.animation='twoOver 0.4s 1';
                oMb.style.display='block';
                oMb.style.animation='mbOver 0.4s 1';
                oTwoul.onmouseover=function(){
                oTwoul.style.display='block';
                oTwoul.style.zIndex='9999';
                oMb.style.display='block';
                oTwoul.onmouseout=function(){
                oTwoul.style.display='none';
                oTwoul.style.zIndex='1';
                oMb.style.display='none';
                  }
                  }
                  }
                  oTwo.onmouseout=function(){
                oTwoul.style.display='none';
                oTwoul.style.zIndex='1';
                oMb.style.display='none';
              
                  }
           } 
    header();
function main(){

window.onresize=function(){
    var width=document.body.clientWidth;
    console.log('width',width);
    window.addEventListener('DOMMouseScroll',scrollFunc,false)
}
for(let i=0;i<oUl.length;i++){
    oUl[i].onmouseover=()=>{
        oA2[i].style.borderBottom='3px solid';
        oA2[i].style.animation='dh1 0.6s 1';
    
      }
      
    
    oUl[i].onmouseout=()=>{
        oA2[i].style.borderBottom='';
        oA2[i].style.animation='dh2 0.6s 1';
      
       }
    }

}
main();

    //判断鼠标滚轮实现头部nav的动态效果
var scrollFunc = function (e) {  
    e = e || window.event;  
    var header=oHeader.offsetHeight;
    var h1=oH1.offsetHeight;
    var sum=header+h1;
   window.onscroll=function(){
    if (e.wheelDelta) {  //第一步：先判断浏览器IE，谷歌滑轮事件    
                 
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            console.log("滑轮向上滚动");  
            oHeader.style.animation='scroll2 0.5s 1';
            oHeader.style.top='0'; 
           
                var top=document.documentElement.scrollTop;
                if(top>h1){
                    nav.style.position='fixed';
                    nav.style.animation='scroll3 0.5s 1';
                    nav.style.left='0';
                    nav.style.top=header+'px';
                    
                }else{
                    nav.style.position='static';
                }
            
           
        }  
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            console.log("滑轮向下滚动");  
            oHeader.style.animation='scroll 0.5s 1';
            oHeader.style.top='-137px';   
          
                var top=document.documentElement.scrollTop;
                if(top>sum){
                    nav.style.position='fixed';
                    nav.style.animation='scroll4 0.5s 1';
                    nav.style.left='0';
                    nav.style.top='0';
                
            } 
                
        }  
    } else if (e.detail) {  //Firefox滑轮事件  
        if (e.detail> 0) { //当滑轮向上滚动时  
            console.log("滑轮向上滚动");  
            oHeader.style.animation='scroll2 0.5s 1';
            oHeader.style.top='0';  
        }  
        if (e.detail< 0) { //当滑轮向下滚动时  
            console.log("滑轮向下滚动");
            oHeader.style.animation='scroll 0.5s 1';
            oHeader.style.top='-137px';    
        }  
    }  
}
}

 window.addEventListener('DOMMouseScroll',scrollFunc,false)
 window.onmousewheel = document.onmousewheel = scrollFunc;
 function footer(){
 
   
    oFooterInput.onfocus=function(){
       oFooterInput.placeholder='';
        this.style.borderBottom='1px solid #000';
        oFooterEmail.style.display='block';
        oFooterEmail.style.animation='footeremail 0.3s 1';
        
       }
       oFooterInput.onblur=function(){
           oFooterInput.style.borderBottom='1px solid #767676';
           this.placeholder='电子邮箱地址';
           oFooterEmail.style.display='none';
          
          }
          
       //    oFbutton.onclick=function(){
       //     var reg=/\w+@{1}\w/g;//判断邮箱是否符合要求的正则表达式
       //     if(reg.test(oFooterInput.value)){
       //         alert('邮箱符合要求');
       //     }else{
       //         oFooterEmail.style.color='red';
       //         oFooterEmail.innerHTML='邮箱不符合要求';
       //     }
        //  }
        
    
       }
       footer();
}