let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) { slideIndex = 1 }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

document.getElementById("dropbtn").onclick = function () {
  location.href = "courses.html"
}
// document.getElementById("dropbtn1").onclick = function myfunc() {
//   location.href = "index.html"
//   // console.log("Working")
// }

function myfunction() {
  let newtable = document.getElementById("hidetable");
  if (newtable.style.display === "none") {
    newtable.style.display = "inline-table";
  } else {
    newtable.style.display = "none";
  }

}