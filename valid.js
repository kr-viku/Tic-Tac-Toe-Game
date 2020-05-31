console.log("start");

const p1= document.getElementById('p1');
const p2= document.getElementById('p2');
const subAuth= document.getElementById('sub');

var p1flag=false;
var p2flag=false;

p1.addEventListener("input", function(a){
    var p1Auth=a.target.value;
    localStorage.setItem("xname",p1Auth);
    // console.log(p1Auth);
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
    var p2Auth=a.target.value;
    localStorage.setItem("oname",p2Auth);
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
        subAuth.addEventListener("click",(e)=>{
            e.preventDefault();
            location.href="game.html"
        })
    }
    else{
        subAuth.disabled=true;
        
    }
}

function myfunction(){
    console.log("ram");

    location.href='game.html';
}


