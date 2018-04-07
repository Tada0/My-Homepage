(function(){
// Get the modal
    
var modal = document.getElementById('myModalTop');

// Get the button that opens the modal
var btn = document.getElementById("myBtnTop");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onmouseover = function() {
    
    modal.style.display = "block";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
})()