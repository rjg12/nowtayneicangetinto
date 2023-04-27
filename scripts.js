const generateTayneButton = document.getElementById('generateTayne');
const tayneContainer = document.querySelector('.tayne-container');
const tayneImage = document.getElementById('tayneImage');

generateTayneButton.addEventListener('click', () => {
    tayneContainer.style.display = 'block';
    tayneImage.src = 'https://celeryman.alexmeub.com/images/tayne13.gif'; // Replace this URL with the actual Tayne image URL
});
