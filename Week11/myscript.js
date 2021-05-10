var modelCat = ["young", "mature", "famous"];
var outfitCat = ["dress", "pants"];
var locationCat = ["indoor", "outdoor"];
var groupSelect = document.getElementById("group");
var categorySelect = document.getElementById("category");
groupSelect.addEventListener("change", function () {
  console.log(groupSelect.value);
  if (groupSelect.value == "models") {
    fillCategory(modelCat);
  }
  if (groupSelect.value == "outfits") {
    fillCategory(outfitCat);
  }
  if (groupSelect.value == "location") {
    fillCategory(locationCat);
  }
});
var fillCategory = function (selection) {
  categorySelect.innerHTML = "";
  selection.forEach((element) => {
    var opt = document.createElement("option");
    opt.value = element;
    opt.textContent = element.charAt(0).toUpperCase() + element.slice(1);

    categorySelect.appendChild(opt);
  });
};
var myImgs = ["5th.png", "2nd.jpg", "3rd.png", "4th.jpg"];
var image1Pic = document.getElementById("image1Pic");
function clickHandler() {
  if (groupSelect.value == "models" && categorySelect.value == "young") {
    myImgs = ["5th.png", "2nd.jpg", "3rd.png", "4th.jpg"];
    // young models
    document.getElementById("image1Pic").src = myImgs[0];
    document.getElementById("image2Pic").src = myImgs[1];
    document.getElementById("image3Pic").src = myImgs[2];
    document.getElementById("image4Pic").src = myImgs[3];
  } else if (
    groupSelect.value == "models" &&
    categorySelect.value == "mature"
  ) {
    myImgs = ["adut1.jpg", "adut2.jpg", "adut3.jpg", "adut4.jpg"];
    // mature models
    document.getElementById("image1Pic").src = myImgs[0];
    document.getElementById("image2Pic").src = myImgs[1];
    document.getElementById("image3Pic").src = myImgs[2];
    document.getElementById("image4Pic").src = myImgs[3];
  } else if (
    groupSelect.value == "models" &&
    categorySelect.value == "famous"
  ) {
    myImgs = ["tyra1.jpg", "tyra2.jpg", "tyra3.jpg", "tyra4.jpg"];
    // famous models
    document.getElementById("image1Pic").src = myImgs[0];
    document.getElementById("image2Pic").src = myImgs[1];
    document.getElementById("image3Pic").src = myImgs[2];
    document.getElementById("image4Pic").src = myImgs[3];
  } else if (
    groupSelect.value == "location" &&
    categorySelect.value == "indoor"
  ) {
    myImgs = ["dress2.jpg", "adut2.jpg", "dress1.jpg", "dress3.jpg"];
    // location indoor
    document.getElementById("image1Pic").src = myImgs[0];
    document.getElementById("image2Pic").src = myImgs[1];
    document.getElementById("image3Pic").src = myImgs[2];
    document.getElementById("image4Pic").src = myImgs[3];
  } else if (
    groupSelect.value == "location" &&
    categorySelect.value == "outdoor"
  ) {
    myImgs = ["tyra1.jpg", "adut4.jpg", "dress4.jpg", "adut1.jpg"];
    // location outdoor
    document.getElementById("image1Pic").src = myImgs[0];
    document.getElementById("image2Pic").src = myImgs[1];
    document.getElementById("image3Pic").src = myImgs[2];
    document.getElementById("image4Pic").src = myImgs[3];
  } else if (
    groupSelect.value == "outfits" &&
    categorySelect.value == "dress"
  ) {
    myImgs = ["dress1.jpg", "dress2.jpg", "dress3.jpg", "dress4.jpg"];
    // outfits dress
    document.getElementById("image1Pic").src = myImgs[0];
    document.getElementById("image2Pic").src = myImgs[1];
    document.getElementById("image3Pic").src = myImgs[2];
    document.getElementById("image4Pic").src = myImgs[3];
  } else if (
    groupSelect.value == "outfits" &&
    categorySelect.value == "pants"
  ) {
    myImgs = ["tyra1.jpg", "pants1.jpg", "adut1.jpg", "pants2.jpg"];
    // outfits pants
    document.getElementById("image1Pic").src = myImgs[0];
    document.getElementById("image2Pic").src = myImgs[1];
    document.getElementById("image3Pic").src = myImgs[2];
    document.getElementById("image4Pic").src = myImgs[3];
  }
}
var currentImg = 0;
var carouselImg = document.getElementById("carouselImg");
window.setInterval(imageGallery, 5000);
function imageGallery() {
  var nextImg = currentImg + 1;
  if (nextImg == myImgs.length) nextImg = 0;
  carouselImg.src = myImgs[nextImg];
  currentImg = nextImg;
}