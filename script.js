document.addEventListener('DOMContentLoaded', () => {
    const imageGrid = document.getElementById('image-grid');
    const searchInput = document.getElementById('search');
    const images = [
        'images/dark-profile-pic-001.png',
        'images/dark-profile-pic-002.png',
        'images/dark-profile-pic-003.png',
        'images/dark-profile-pic-004.png',
        'images/dark-profile-pic-005.png',
        // Add more images as needed
    ];

    const loadImages = (filter = '') => {
        imageGrid.innerHTML = '';
        images
            .filter(image => image.toLowerCase().includes(filter.toLowerCase()))
            .forEach(image => {
                const imgElement = document.createElement('img');
                imgElement.src = image;
                imageGrid.appendChild(imgElement);
            });
    };

    searchInput.addEventListener('input', () => {
        loadImages(searchInput.value);
    });

    loadImages();
});
