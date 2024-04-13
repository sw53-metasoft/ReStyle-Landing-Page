var check = document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id = check.checked;
    if( id == true){
        location.href = "/ReStyle-Langin-Page/index.html"
    }else{
        location.href = "/ReStyle-Langin-Page/index-en.html"
    }
}

function openNav(){
    document.getElementById("mobile-menu") .style.width = "100%";
}

function closeNav(){
    document.getElementById("mobile-menu") .style.width = "0%";
}