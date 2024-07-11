document.addEventListener('DOMContentLoaded', () => {
    const gallery = document.getElementById('gallery');
    const searchInput = document.getElementById('search');

    const images = [
        'image1.jpg',
        'image2.jpg',
        'image3.jpg',
        // add your image filenames here
    ];

    function displayImages(imageArray) {
        gallery.innerHTML = '';
        imageArray.forEach(image => {
            const imageContainer = document.createElement('div');
            imageContainer.classList.add('image-container');
            imageContainer.innerHTML = `<img src="image/${image}" alt="Profile Picture">`;
            gallery.appendChild(imageContainer);
        });
    }

    searchInput.addEventListener('input', () => {
        const searchText = searchInput.value.toLowerCase();
        const filteredImages = images.filter(image => image.toLowerCase().includes(searchText));
        displayImages(filteredImages);
    });

    displayImages(images);
});
