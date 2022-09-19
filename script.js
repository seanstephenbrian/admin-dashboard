function generateProjectIcons() {
    const projectIcons = document.querySelectorAll('.project-icons');
    projectIcons.forEach(div => {
        div.innerHTML = 'a b c';
    });
}

generateProjectIcons();