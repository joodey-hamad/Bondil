let soon = document.querySelectorAll(".soon li");
// let mals = Array.from(document.getElementsByClassName("mal"));
let im = document.querySelectorAll(".img-fluid.all");




soon.forEach((soon) => {
    soon.addEventListener("click", sin);
    soon.addEventListener("click", moong);

});

function sin() {
    soon.forEach((li) => {
        li.classList.remove("active");
        this.classList.add("active");
    });
}

function moong() {
    im.forEach((imgg) => {

        imgg.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
        el.style.display = "block";
    });

}