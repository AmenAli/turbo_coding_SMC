let header = document.getElementById("myHeader");
    let clrBTN = document.getElementById("colorBTN");
    let myImg = document.getElementById("myImg");
    let tgglBTN = document.getElementById("toggleBTN");
    function changeTheColor() {
      // WE'LL DO SOME COLOR CHANGING HERE
      let redComp = Math.random() * 255;
      let greenComp = Math.random() * 255;
      let blueComp = Math.random() * 255;
      console.log("RED: " + redComp);
      console.log("GREEN: " + greenComp);
      console.log("BLUE: " + blueComp);
      header.style.backgroundColor =
        "rgb(" + redComp + ", " + greenComp + ", " + blueComp + ")";
    }
    let toggleTheImage = function () {
      // DO SOME IMAGE TOGGLING HERE
      if (tgglBTN.innerText === "Show the second one!") {
        console.log("show the second image");
        myImg.src = "2nd.jpg";
        tgglBTN.innerText = "Show the third one!";
        return;
      }
       if (tgglBTN.innerText === "Show the third one!"){
        console.log("show the third image");
        myImg.src = "3rd.jpg";
        tgglBTN.innerText = "Show the forth one!";
        return;
      }
      if (tgglBTN.innerText === "Show the forth one!"){
        console.log("show the forth image");
        myImg.src = "4th.jpg";
        tgglBTN.innerText = "Show the first one!";
        return;
      }
      if (tgglBTN.innerText === "Show the first one!"){
        console.log("show the first image");
        myImg.src = "1rst.jpg";
        tgglBTN.innerText = "Show the second one!";
        return;
      }

    };

    changeTheColor();

    clrBTN.addEventListener("click", changeTheColor);
    tgglBTN.addEventListener("click", toggleTheImage);
