document.addEventListener( 'DOMContentLoaded', function() {
    // Select all navigation items with `data-nav` attributes
    const navigationItems = Array.from(document.querySelectorAll("[data-nav]"));

    // Helper function to scroll to a specific section by index
    function scrollToSection(index) {
        if (index >= 0 && index < navigationItems.length) {
            // Extract the target section ID from the `onclick` attribute
            const onclickAttr = navigationItems[index].querySelector("span").getAttribute("onclick");
            const targetId = onclickAttr.match(/'([^']+)'/)[1]; // Extract the ID inside the quotes
            document.getElementById(targetId).scrollIntoView({ behavior: "smooth" });
        }
    }

    // Event handlers for Top and Bottom navigation
    function navigate(direction) {
        // Find the currently visible section
        const currentSectionIndex = navigationItems.findIndex(item => {
            const onclickAttr = item.querySelector("span").getAttribute("onclick");
            const targetId = onclickAttr.match(/'([^']+)'/)[1];
            const section = document.getElementById(targetId);
            const rect = section.getBoundingClientRect();
            return rect.top >= 0 && rect.top < window.innerHeight; // Section in the viewport
        });

        // Calculate the new section index
        const newIndex = currentSectionIndex + direction;
        scrollToSection(newIndex);
    }

    // Attach event listeners to Top and Bottom buttons
    document.querySelector(".navigation-item.top").addEventListener("click", () => navigate(-1)); // Go to the previous section
    document.querySelector(".navigation-item.bottom").addEventListener("click", () => navigate(1)); // Go to the next section

});

