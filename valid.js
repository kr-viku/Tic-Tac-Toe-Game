console.log("start");

const p1= document.getElementById('p1');
const p2= document.getElementById('p2');
const subAuth= document.getElementById('sub');

var p1flag=false;
var p2flag=false;

p1.addEventListener("input", function(a){
    const p1Auth=a.target.value;
    if(p1Auth.length!=0)
    {
        p1flag=true;
    }
    else{
        p1flag=false;
    }
    checkSubmit();
});

p2.addEventListener("input", function(a){
    const p2Auth=a.target.value;
    if(p2Auth.length!=0)
    {
        p2flag=true;
    }
    else{
        p2flag=false;
    }
    checkSubmit();
});

function checkSubmit()
{
    if((p1flag && p2flag))
    {
        subAuth.className="btn btn-success";
        
        subAuth.disabled=false;
        
    }
    else{
        subAuth.disabled=true;
        
    }
}

function myfunction(){
    console.log("ram");

    location.href='game.html';
}


