// this code adds favorite, edit, and share SVG icons to the bottom of all of the project cards:

function generateProjectIcons() {
    const projectIcons = document.querySelectorAll('.project-icons');
    projectIcons.forEach(div => {
        div.innerHTML = 
            `<img class="star" src="img/star.svg" alt="Star icon">
            <img class="edit" src="img/edit.svg" alt="Edit icon">
            <img class="share" src="img/share.svg" alt="Share icon">`;
    });
}

generateProjectIcons();