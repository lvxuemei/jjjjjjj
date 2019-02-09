window.onload=function(){
    var oHeader=document.getElementsByTagName('header')[0];
    var oMb=document.getElementById('mb');
    var oHmargin=document.getElementsByClassName('Hmargin');
    var oLi=document.getElementsByClassName('li');
    var oA=document.getElementsByClassName('a');
    var oTwo=document.getElementById('two');
    var oTwoul=document.getElementById('twoul');
    var oM_a1=document.getElementById('m_a1');
    var oBanner=document.getElementById('banner').getElementsByTagName('img');
    var oBannerli=document.getElementById('bannerul').getElementsByTagName('li');
    var oBannerbg=['img/bg1.jpg','img/bg2.jpg','img/bg3.jpg','img/bg4.jpg']
    var oBannerArr=['img/xie1.jpg','img/xie2.jpg','img/yf1.jpg','img/yf2.jpg']
    var oShopmsg=document.getElementById('shopmsg').getElementsByTagName('li');
    var oShopsmall=document.getElementById('shopsmall').getElementsByTagName('li');
    var oFooterEmail=document.getElementById('footeremail');
    var oFooterInput=document.getElementById('footerinput');
    var oM2left=document.getElementById('m2left');
    var oM2right=document.getElementById('m2right');
    var oMa2=document.getElementById('m_a2').getElementsByTagName('section');
    var oMa2_1=document.getElementById('m_a2');
    var oMa3=document.getElementById('m_a3');
    var oNv=document.getElementById('nv').getElementsByTagName('dl');
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
     function banner(){
     var now=0;
     var timer=null;
     //第一步循环li按钮 悬停哪个按钮 哪个按钮和相应图片出现并往外传当前悬停按钮的值
     //并且当前动画停止，鼠标离开动画继续

    //加载页面时执行一次
    changeMargin();
    scroll();
    //监听浏览器宽度的改变
    window.onresize = function(){
        changeMargin();
    };
    function changeMargin(){
        //获取网页可见区域宽度
        var docWidth = document.body.clientWidth;
       
        if(docWidth<=618){
          
       
           for(let n=0;n<oBannerArr.length;n++){
               oBanner[n].src=oBannerArr[n];
           }
        }else{
            for(let m=0;m<oBannerArr.length;m++){
                oBanner[m].src=oBannerbg[m];
            }
        } 
        if(docWidth<=718){
            oMa2_1.style.display='none';
            oMa3.style.display='block';
        }
        if(docWidth>718) {
            oMa2_1.style.display='block';
            oMa3.style.display='none';
        }
          
    }
    for(let i=0;i<oBannerli.length;i++){
        oBannerli[i].onmouseover=function(){
            for(let a=0;a<oBannerli.length;a++){
                oBanner[a].className='';
                oBannerli[a].className='';
                oShopmsg[a].className='';
                oShopsmall[a].className='';
            }
            oBanner[i].className='on';
            oBannerli[i].className='on';
            oShopmsg[i].className='on';
            oShopsmall[i].className='on';
            clearInterval(timer);
               now=i;
       console.log(now);
        }
        oBannerli[i].onmouseout=function(){
            go();
        }
    }
    //三、设置接收到的悬停值并且依次递增，
    function play(){
        if(now>3){
            now=0;
        }
    show();
    now++;
    }
    //四、控制每个now值出现时相应的图片和按钮样式
    function show(){
        for(let j=0;j<oBannerli.length;j++){
            oBanner[j].className='';
            oBannerli[j].className='';
            oShopmsg[j].className='';
            oShopsmall[j].className='';
        }
        oBanner[now].className='on';
        oBannerli[now].className='on';
        oShopmsg[now].className='on';
        oShopsmall[now].className='on';
    }
    //二、主函数控制动画的时间和具体函数
    function go(){
        timer=setInterval(play,2000);
    } 
    go();


}
banner();
 }
 //实时监听浏览器滚动条距离顶部的高度
 function scroll(){
    console.log("开始滚动！");
}
//判断鼠标滚轮实现头部nav的动态效果
var scrollFunc = function (e) {  
    e = e || window.event;  
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

 window.addEventListener('DOMMouseScroll',scrollFunc,false)
 window.onmousewheel = document.onmousewheel = scrollFunc;
 main();

//m_a2这个块按左键图片倒退，按右键图片前进，不按默认两秒换图
//思路：用i控制左按钮的值和右按钮的值，用now=i来得到目前暂停的图片并给定时器  
function mainNew1(){
      var i=0;
     var now=i;
     
        oM2left.onclick=function(){
            if(i==0){
                i=3;
            }  
             --i;
             now=i;
             
             console.log('now',now);
            for(var j=0;j<oMa2.length;j++){
                oMa2[j].className='';
            }
            oMa2[i].className='m2';      
      } 
      oM2right.onclick=function(){
        i++;
        if(i==3){
            i=0;
        }  
        
        for(var j=0;j<oMa2.length;j++){
            oMa2[j].className='';
        }
        oMa2[i].className='m2';
        now=i;
             
        console.log('now',now);      
  } 
      
      setInterval(function(){
        if(now==oMa2.length){
            now=0;
        }
        for(var j=0;j<oMa2.length;j++){
            oMa2[j].className='';
        }
        oMa2[now].className='m2';
        now++;
     
     
     },2000);

     //---------------以下是屏幕宽度小于716----------------------
     
}
 mainNew1();
function sp(){
for(var i=0;i<oNv.length;i++){
    // oNv[i].style.height=oNv[i].style.width+'px';
    console.log(JSON.stringify(oNv[0].style.width)+'px')
}
}
sp();
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