function generateProjectIcons() {
    const projectIcons = document.querySelectorAll('.project-icons');
    projectIcons.forEach(div => {
        div.innerHTML = 
            `<img src="img/star.svg" alt="Star icon">
            <img src="img/edit.svg" alt="Edit icon">
            <img src="img/share.svg" alt="Share icon">`;
    });
}

generateProjectIcons();