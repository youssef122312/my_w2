document.querySelector('icon').addEventListener('click',()=>{document.body.classList.toggle('white')})



function hh(){
    alert("انته بتهزر هو انا لو معايا الحسابات دي كلها كنت قعدت في البلد دي😂😂😂 (هو حساب الفيسبوك بس)");
}


let progress = document.getElementById('progressbar');
let totalheight = document.body.scrollHeight - window.innerHeight;

window.onscroll = function(){
    let progressHeight=(window.pageYOffset/
    totalheight ) * 100;
    progress.style.height = progressHeight + "%";
}


const menu = document.getElementById('menu');
const actions = document.getElementById('actions');

menu.addEventListener("click", ()=>{
    clickedmenu();
})

function clickedmenu(){
    menu.classList.toggle("is-active");
    actions.classList.toggle("is-active");
}


