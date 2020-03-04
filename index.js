window.addEventListener('load', () => {

    function getAllImageParents() {
        return document.querySelectorAll('.animals .img');
    }

    function toggleImage (event) {
        const img = event.target;
        const imgParent = img.parentNode;

        const allImages = getAllImageParents();

        allImages.forEach(i => {
            i.classList.remove('hidden');
        })

        imgParent.classList.add('hidden');
    
    }
    
    getAllImageParents().forEach(i => {
        i.addEventListener('click', toggleImage);
    })
});