document.addEventListener("DOMContentLoaded", function () {
    const timelineItems = document.querySelectorAll(".tl-content");
    function removeActiveClassFromAll() {
        timelineItems.forEach((i) => i.classList.remove("tl-content-active"));
    }

    timelineItems.forEach((item) => {
        item.addEventListener("click", function (event) {
            event.stopPropagation(); 
            removeActiveClassFromAll();
            item.classList.add("tl-content-active");
        });
    });
    document.body.addEventListener("click", function () {
        removeActiveClassFromAll();
    });
});
