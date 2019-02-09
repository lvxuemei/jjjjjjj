window.onload=function(){
    var oInput=document.getElementsByClassName('input');
    var oSpan=document.getElementsByClassName('span');
    var oFooterEmail=document.getElementById('footeremail');
    var oFooterInput=document.getElementById('footerinput');
    var oForm=document.getElementById('form');
    var oSub=document.getElementById('sub');
    var res=/^\d{11}$/;
    for(let i=0;i<oInput.length;i++){
        oInput[i].onfocus=function(){
            for(var j=0;j<oInput.length;j++){
                oInput[j].style.border='';
            }
            oInput[i].style.border='1px solid green';
        
        }
        oInput[i].onblur=function(){
            oInput[i].style.border='';
           if(res.test(oInput[0].value)==true){
               oSpan[0].innerHTML='√';
               oSpan[0].style.color='green';
           }else{
            oSpan[0].innerHTML='×';
            oSpan[0].style.color='red';
           }
           if(oInput[1].value.length>=6&&oInput[1].value.length<=16){
            oSpan[1].innerHTML='√';
            oSpan[1].style.color='green';
           }else{
            oSpan[1].innerHTML='×';
            oSpan[1].style.color='red';
           }
        }
    }
    oSub.onclick=function(){
        if((res.test(oInput[0].value)==true)&&(oInput[1].value.length>=6&&oInput[1].value.length<=16)){
            oForm.action="index.html";
        }else{
            oForm.action="#";
        }
    }
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