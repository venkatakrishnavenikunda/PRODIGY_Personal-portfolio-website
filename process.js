var bodyElement1 = document.body;
var bodyElement2 = document.body;
var bodyElement3 = document.body;
var bodyElement4 = document.body;
var bodyElement5 = document.body;
var bodyElement6 = document.body;
var bodyElement7 = document.body;


function showhome(){
    document.getElementById('home').style.display='block';
    document.getElementById('about').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('experience').style.display='none';
    document.getElementById('contact').style.display='none';
    bodyElement1.style.backgroundColor = "#fff";
    
}

function showabout(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='block';
    document.getElementById('education').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('experience').style.display='none';
    document.getElementById('contact').style.display='none';
    bodyElement2.style.backgroundColor = "#E36397";
}

function showeducation(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('education').style.display='block';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('experience').style.display='none';
    document.getElementById('contact').style.display='none';
    bodyElement3.style.backgroundColor = "#AB9B96";
}

function showskill(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('skills').style.display='block';
    document.getElementById('project').style.display='none';
    document.getElementById('experience').style.display='none';
    document.getElementById('contact').style.display='none';
    bodyElement4.style.backgroundColor = "#CFE8EF";
}

function showproject(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='block';
    document.getElementById('experience').style.display='none';
    document.getElementById('contact').style.display='none';
    bodyElement5.style.backgroundColor = "#E49AB0";
}

function showexperience(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('experience').style.display='block';
    document.getElementById('contact').style.display='none';
    bodyElement6.style.backgroundColor = "#20FC8F";
}
function showcontact(){
    document.getElementById('home').style.display='none';
    document.getElementById('about').style.display='none';
    document.getElementById('education').style.display='none';
    document.getElementById('skills').style.display='none';
    document.getElementById('project').style.display='none';
    document.getElementById('experience').style.display='none';
    document.getElementById('contact').style.display='block';
    bodyElement7.style.backgroundColor = "#D69F7E";
}