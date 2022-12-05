console.log("script loaded!");

var ratingParent = document.getElementById("ratings");
var ratingNum = document.getElementsByClassName("rating");
var submitBtn = document.getElementById("submit");
var thankYouCard = document.getElementById("thank-you-card");
var rateMsg = document.getElementById("rate");
var clicks = 0;

var btn = document.getElementsByTagName("button");
//console.log(ratingNum);

document.querySelectorAll(".rating").forEach((ratingBtn) => {
  ratingBtn.addEventListener("click", function clickFunc() {
    ratingBtn.classList.toggle("active");

    var clickedBtn = ratingParent.children[ratingBtn.innerText - 1];
    //console.log(clickedBtn);

    //console.log(ratingParent.children[1].classList.add("active"));

    //check rate box

    for (let index = 0; index < parseInt(ratingBtn.innerText) - 1; index++) {
      //const element = array[index];
      //console.log(ratingParent.children[index]);
      ratingParent.children[index].classList.add("active");
    }

    //uncheck rate box

    //console.log(parseInt(ratingBtn.innerText) + 1);

    for (
      let index = parseInt(ratingBtn.innerText);
      index < ratingParent.children.length;
      index++
    ) {
      //const element = array[index];
      //console.log(ratingParent.children[index]);
      ratingParent.children[index].classList.remove("active");
    }
  });
});

submitBtn.addEventListener("click", function () {
  //console.log(clicks);
  for (let index = 0; index < ratingParent.children.length; index++) {
    if (ratingParent.children[index].classList.contains("active")) {
      clicks += 1;
    }
  }

  //console.log(clicks);
  rateMsg.innerText = "You selected " + clicks + " out of 5";
  thankYouCard.style.display = "block";
});
