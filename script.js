const mensagem = "Cadastro realizado com sucesso"

function exibeAlert() {
    alert(mensagem)
}

const carrosel = document.querySelector(".carrosel");
firstImg = carrosel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");

let isDragStart = false, prevPageX, prevScrollLeft;

const ShowHideIcon = () => {
    let scrollWidth = carrosel.scrollWidth - carrosel.clientWidth;
    arrowIcons[0].style.display = carrosel.scrollLeft === 0 ? "none" : "block";
    arrowIcons[1].style.display = carrosel.scrollLeft === scrollWidth ? "none" : "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () =>{
        let firstImgWidth = firstImg.clientWidth + 14;
        carrosel.scrollLeft += icon.id == "esquerda" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => ShowHideIcon(), 60);
    })

});

const dragStart = (e) => {
    isDragStart = true;
    prevPageX=e.pageX;
    prevScrollLeft= carrosel.scrollLeft;

}

const dragging = (e) => {
    if(!isDragStart) return;
    e.preventDefault();
    carrosel.classList.add("dragging");
    let positionDiff = e.pageX -prevPageX;
    carrosel.scrollLeft= prevScrollLeft - positionDiff;
    ShowHideIcon();  
}

const dragStop = () => {
    isDragStart = false;
    carrosel.classList.remove("dragging");
}

carrosel.addEventListener("mousemove",dragging);
carrosel.addEventListener("mousedown",dragStart);
carrosel.addEventListener("mouseup",dragStop);
carrosel.addEventListener("mouseleave",dragStop);

var stars = document.querySelectorAll('.star-icon');
                  
document.addEventListener('click', function(e){
  var classStar = e.target.classList;
  if(!classStar.contains('ativo')){
    stars.forEach(function(star){
      star.classList.remove('ativo');
    });
    classStar.add('ativo');
    console.log(e.target.getAttribute('data-avaliacao'));
  }
});