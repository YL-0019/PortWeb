let xs = document.getElementById("cur-1")
let ys = document.getElementById("cur-2")
let zs = document.getElementById("cur-3")
let ws = document.getElementById("cur-4")


function hide1(){
    if(true){
    xs.style.backgroundColor = "transparent";
}
}
function hide2(){
    if(true){
        ys.style.backgroundColor = "transparent";
    }
}
function hide3(){
    if(true){
        zs.style.backgroundColor = "transparent";
    }
}
function hide4(){
    if(true){
        ws.style.backgroundColor = "transparent";
    }
}



setTimeout(hide1,900)
setTimeout(hide2,1900)
setTimeout(hide3,3100)
setTimeout(hide4,2550)



document.getElementById('b1').addEventListener('click', function() {
  document.getElementById('div1').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('b2').addEventListener('click', function() {
  document.getElementById('div31').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('b3').addEventListener('click', function() {
  document.getElementById('div32').scrollIntoView({ behavior: 'smooth' });
});
