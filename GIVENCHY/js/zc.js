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
    var oIn=document.getElementsByClassName('in');
    var oSpan=document.getElementsByClassName('span');
    var oSub=document.getElementById('sub');
    var oForm=document.getElementsByTagName('form')[0];
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
var name=/\d/g;
var email=/^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/ ;
window.onresize=function(){
    var width=document.body.clientWidth;
    console.log('width',width);
    window.addEventListener('DOMMouseScroll',scrollFunc,false)
}

    oIn[0].onblur=function(){
        if(name.test(oIn[0].value)==false&&oIn[0].value!=''){
            oSpan[0].innerHTML='√';
            oSpan[0].style.color='green';
            }else{
                oSpan[0].innerHTML='×';
                oSpan[0].style.color='red';
            }
        }     
        oIn[1].onblur=function(){ 
            if(name.test(oIn[1].value)==false&&oIn[1].value!=''){
                oSpan[1].innerHTML='√';
                oSpan[1].style.color='green';
                }else{
                    oSpan[1].innerHTML='×';
                    oSpan[1].style.color='red';
                }
            }  
            oIn[2].onblur=function(){     
                if(email.test(oIn[2].value)==true&&oIn[2].value!=''){
                    oSpan[2].innerHTML='√';
                    oSpan[2].style.color='green';
                    }else{
                        oSpan[2].innerHTML='×';
                        oSpan[2].style.color='red';
                    }
                }    
                oIn[3].onblur=function(){      
                    if((oIn[3].value.length)>=6&&(oIn[3].value.length)<=16){
                        oSpan[3].innerHTML='√';
                        oSpan[3].style.color='green';
                        }else{
                            oSpan[3].innerHTML='×';
                            oSpan[3].style.color='red';
                        }
    }

oSub.onclick=function(){
    if((name.test(oIn[0].value)==false&&oIn[0].value!='')&&
    (name.test(oIn[1].value)==false&&oIn[1].value!='')&&
    (email.test(oIn[2].value)==true&&oIn[2].value!='')&&
    ((oIn[3].value.length)>=6&&(oIn[3].value.length)<=16)){
  oForm.action='index.html';
    }else{
        oForm.action='#';
    }
}

}
main();

    //判断鼠标滚轮实现头部nav的动态效果
var scrollFunc = function (e) {  
    e = e || window.event;  
   window.onscroll=function(){
    if (e.wheelDelta) {  //第一步：先判断浏览器IE，谷歌滑轮事件            
        if (e.wheelDelta > 0) { //当滑轮向上滚动时  
            console.log("滑轮向上滚动");  
            oHeader.style.animation='scroll2 0.5s 1';
            oHeader.style.top='0';  
        }  
        if (e.wheelDelta < 0) { //当滑轮向下滚动时  
            console.log("滑轮向下滚动");  
            oHeader.style.animation='scroll 0.5s 1';
            oHeader.style.top='-137px';   
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