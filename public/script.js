// Get a reference to the bar icon and the nav element
const bar = document.getElementById('bar');
const nav = document.querySelector('.nav');

// Add click event listener to the bar icon
bar.addEventListener('click', function() {
    // Toggle the 'active' class on the nav element
    nav.classList.toggle('active');
});

function change(img){
    let image = img.parentElement.parentElement.previousElementSibling.querySelector("img")
    image.src = img.src
}



