  document.addEventListener("DOMContentLoaded", function () {
    const backgroundPicture = document.querySelector('.background-picture');  
    
    function popBackground() {
      backgroundPicture.style.transform = 'scale(1)';  
    }
    
    setTimeout(popBackground);
  });
  