var check = document.querySelector(".check");
check.addEventListener('click',idioma);

function idioma(){
    let id = check.checked;
    if( id == true){
        location.href = "/ReStyle-landing-page/index.html"
    }else{
        location.href = "/ReStyle-landing-page/index-en.html"
    }
}