const parallax = (sceneSelector) => {
    const scene = document.querySelectorAll(sceneSelector);

    scene.forEach((item) => {
        new Parallax(item);
    });
};

export default parallax;
