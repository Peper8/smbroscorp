var fullImageBox = document.getElementById("fullImageBox");
    var fullImage = document.getElementById("fullImage");


    function openFullImage(pic){
      fullImageBox.style.display = "flex";
      fullImage.src = pic;
    }

    function closeFullImage(){
      fullImageBox.style.display = "none";
    }