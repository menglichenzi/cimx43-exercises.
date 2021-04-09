
   document.getElementById("off").onclick=function(){
     document.body.className=document.body.className!="cls"?"cls":"";
   }
    document.getElementById("star").onclick = function () {   
       setInterval(function () {       
        document.getElementById("dv").innerHTML="<span>❤</span>";
        var span=document.querySelector("span");
        var dv=document.getElementById("dv");

        for(i=0;i<100;i++){
          var sp= span.cloneNode(true);
           dv.appendChild(sp);

           var r = parseInt(Math.random() *256);
           var g = parseInt(Math.random() * 256); 
           var b = parseInt(Math.random() * 256);
           var y = parseInt(Math.random() * 1240);
           var x = parseInt(Math.random() *600);

           document.getElementById("dv").firstElementChild.style.color="rgb("+r+","+g+","+b+")";
           document.getElementById("dv").firstElementChild.style.left = y + "px";
           document.getElementById("dv").firstElementChild.style.top = x + "px";
        }       
      },500);    
    };


