

function addCartoon(cartoonSrc) {
    // Remove any existing cartoon
    let existingCartoon = document.getElementById('cartoon');
    if (existingCartoon) {
        existingCartoon.remove();
    }

    // Create a new cartoon image
    let img = document.createElement('img');
    img.src = cartoonSrc;
    img.id = 'cartoon';
    img.style.position = 'absolute';
    img.style.top = '50%';
    img.style.left = '50%';
    img.style.transform = 'translate(-50%, -50%)';
    img.style.maxWidth = '100px';

    // Add it to the t-shirt canvas
    document.getElementById('tshirt-canvas').appendChild(img);
}