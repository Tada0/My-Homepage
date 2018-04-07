(function(){
// Get the modal
    
var modal = document.getElementById('myModalRight');

// Get the button that opens the modal
var btn = document.getElementById("myBtnRight");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onmouseover = function() {
    
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onmousedown = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
})()