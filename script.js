document.querySelector(".compare #compare-ip")
.addEventListener("input",function(e){
  document.querySelector(".compare .before .after")
  .style.width=(+e.target.value) + "px";
});

document.querySelector(".compare #compare-ip")
.addEventListener("change",function(e){
  document.querySelector(".compare .before .after")
  .style.width=(+e.target.value) + "px";
});


var fullImageBox = document.getElementById("fullImageBox");
    var fullImage = document.getElementById("fullImage");


    function openFullImage(pic){
      fullImageBox.style.display = "flex";
      fullImage.src = pic;
    }

    function closeFullImage(){
      fullImageBox.style.display = "none";
    }