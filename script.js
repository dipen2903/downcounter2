
        function run(){
            let i=document.getElementById("in").value;
        
        
        function show(){
         
        
            if(i==-2){
                clearInterval(time)
            
            }
            document.getElementById("arch").innerHTML=i
        i--
            document.getElementById("d").style.backgroundColor="green"
            document.getElementById("d").style.height="60px"
            document.getElementById("d").style.width="60px"
            document.getElementById("ab").innerHTML=""
            if(i==-2){
                document.getElementById("d").innerHTML="<h3>Times up</h3>"
                document.getElementById("d").style.backgroundColor=""
            }
            
    }
        document.getElementById("in").value=""
        let time=setInterval(show,1000)
        }
                   