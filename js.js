var i=1;
var N=3;
function Next(){
    if(i<N)
    {
        i+=1;
    } 
    else{
        i=1;   
    }
    document.getElementById("qc").setAttribute("src","rau"+i+".jpg");
      
}

function Back(){
    if(i>1)
    {
        i-=1;
    } 
    else{
        i=N;   
    }
    document.getElementById("qc").setAttribute("src","rau"+i+".jpg");
      
}

function AutoPlay(){
    setInterval(Next,3000);
}

function tk(){
    var text= document.getElementById("text").value;
    if(text==""){
        alert("Chú ý nhập từ khoá cần tìm kiếm")
    }
}