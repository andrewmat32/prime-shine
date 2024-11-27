document.addEventListener( 'DOMContentLoaded', function() {
    const navigationItems = Array.from(document.querySelectorAll("[data-nav]"));

    function scrollToSection(index) {
        if (index >= 0 && index < navigationItems.length) {
            const onclickAttr = navigationItems[index].querySelector("span").getAttribute("onclick");
            const targetId = onclickAttr.match(/'([^']+)'/)[1];
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        }
    }

    function navigate(direction) {
        const currentSectionIndex = navigationItems.findIndex(item => {
            const onclickAttr = item.querySelector("span").getAttribute("onclick");
            const targetId = onclickAttr.match(/'([^']+)'/)[1];
            const section = document.getElementById(targetId);
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight; // Section in the viewport
        });

        const newIndex = currentSectionIndex + direction;
        scrollToSection(newIndex);
    }

    document.querySelector(".navigation-item.top").addEventListener("click", () => navigate(-1)); // Go to the previous section
    document.querySelector(".navigation-item.bottom").addEventListener("click", () => navigate(1)); // Go to the next section
});

window.onscroll = function () {
    const navigationItems = document.querySelectorAll('.navigation-item');

    navigationItems.forEach(item => {
        // Remove the inline styles for width and visibility
        item.children[0].style.removeProperty('width');
        item.children[0].style.removeProperty('visibility');
    });
};


function toggleBurgerMenu() {
    const nav = document.querySelector('.burger-menu');
    nav.classList.toggle('opened');
}
