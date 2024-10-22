const panierLink = document.getElementById('panierLink');
const closeButton = document.getElementById('closeButton');
panierLink.addEventListener('click', function(event) {
    popup.style.display = 'flex';
});
closeButton.addEventListener('click', function() {
    popup.style.display = 'none';
});