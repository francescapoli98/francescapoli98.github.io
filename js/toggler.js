document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.card > p').forEach(function (title) {
        title.addEventListener('click', function () {
            title.parentElement.classList.toggle('open');
        });
    });
});