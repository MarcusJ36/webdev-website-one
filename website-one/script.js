const saveButton = document.getElementById('saveButton');

saveButton.addEventListener('click', () => {
    saveButton.classList.toggle('saved');
});

const headers = document.querySelectorAll('.right h3');

headers.forEach(header => {
    header.addEventListener('click', () => {
        const content = header.nextElementSibling;
        content.classList.toggle('show');
    });
});