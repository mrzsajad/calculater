
var btn1 = document.querySelector(".number1");
var btn2 = document.querySelector(".number2");
var btn3 = document.querySelector(".number3");
var btn4 = document.querySelector(".number4");
var btn5 = document.querySelector(".number5");
var btn6 = document.querySelector(".number6");
var btn7 = document.querySelector(".number7");
var btn8 = document.querySelector(".number8");
var btn9 = document.querySelector(".number9");
var btn0 = document.querySelector(".number0");
var btn00 = document.querySelector(".number00");
var btn000 = document.querySelector(".number000");

var btnsum = document.querySelector(".sum");
var btnmin = document.querySelector(".mines");
var btnmul = document.querySelector(".multiplication");
var btndiv = document.querySelector(".Division");
var btndot = document.querySelector(".btndot");
var btnClear = document.querySelector(".btnClear");
var btnAllClear = document.querySelector(".btnAllClear");

var p=document.querySelector(".inputArea");
var flag=true;

btn1.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn1.textContent;
});

btn2.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn2.textContent;
});

btn3.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn3.textContent;
});

btn4.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn4.textContent;
});

btn5.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn5.textContent;
});

btn6.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn6.textContent;
});

btn7.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn7.textContent;
});

btn8.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn8.textContent;
});

btn9.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn9.textContent;
});

btn0.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn0.textContent;
});
btn00.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn00.textContent;
});
btn000.addEventListener("click",function(){
    flag=true;
    p.textContent+=btn000.textContent;
});

btnsum.addEventListener("click",function(){
    if (flag==true){
        p.textContent+=btnsum.textContent;
        flag=false;
        flag2=true
    }
   
});
btnmin.addEventListener("click",function(){
    if (flag==true){
        p.textContent+=btnmin.textContent;
        flag=false;
        flag2=true
    }
    
});
btnmul.addEventListener("click",function(){
    if (flag==true){
        p.textContent+=btnmul.textContent;
        flag=false;
        flag2=true
    }
    
});
btndiv.addEventListener("click",function(){
    if (flag==true){
        p.textContent+=btndiv.textContent;
        flag=false;
        flag2=true
    } 
});



var flag3=false;

btnClear.addEventListener("click",function(){
    if(flag3==true){
        flag2=true
    }

    var y=p.textContent.slice(0,-1);
    
    if(y.lastIndexOf(".")==y.length-1){
        flag3=true;
        
    }
    // if(y.la)
    console.log(y)
    p.textContent=y
    // if(p.textContent){
    //     flag2=true;
    // }
    
});

btnAllClear.addEventListener("click",function(){
    p.textContent="";
    flag2=true;
});
var operators=["*","/","-","+"]
var flag2=true;
btndot.addEventListener("click",function(){
    if(flag2==true ){
        //  if(p.textContent.lastIndexOf().include(operators)){
        //     p.textContent+="0"+btndot.textContent;
        //     flag2=false;
        //  }
        //  else{
             p.textContent+=btndot.textContent;
             flag2=false;
        //  }
    }
})