document.getElementById("qr-frame-id").style.display="none";
document.getElementById("day-btn").style.display="none";
document.getElementById("night-btn").style.display="block";
function generate(){
var link = document.getElementById("input_id").value;
window.frames['qr'].location.replace("https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="+link);
document.getElementById("qr-frame-id").style.display="block";
}

function changenight(){

    document.body.style.backgroundColor="#121212";
    document.getElementById("main_id").style="--block-background-color:#3700B3";
    document.getElementById("submit_id").style="--block-background-color:#BB86FC";
    document.getElementById("night-btn").style.display="none";
    document.getElementById("day-btn").style.display="block";
}
function changeday(){
    document.body.style.backgroundColor="white";
    document.getElementById("main_id").style="--block-background-color: rgb(73, 179, 211);";
    document.getElementById("submit_id").style="--block-background-color: rgb(63, 235, 129);";
    document.getElementById("night-btn").style.display="block";
    document.getElementById("day-btn").style.display="none";
}