// =======================================================
// CAMERA X - CUSTOM JAVASCRIPT
// =======================================================

document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector(".mobile-menu-toggle");
    const desktopNav = document.querySelector(".desktop-nav");

    if (menuToggle && desktopNav) {
        menuToggle.addEventListener("click", () => {
            desktopNav.classList.toggle("active");
            
            // Hamburger icon ko cross (X) me change karne ke liye
            const icon = menuToggle.querySelector("i");
            if (desktopNav.classList.contains("active")) {
                icon.classList.remove("fa-bars");
                icon.classList.add("fa-times");
            } else {
                icon.classList.remove("fa-times");
                icon.classList.add("fa-bars");
            }
        });
    }

    // 2. Portfolio Gallery Filter (For portfolio.html)
    const filterBtns = document.querySelectorAll(".filter-btn");
    const portfolioItems = document.querySelectorAll(".portfolio-item");

    if (filterBtns.length > 0 && portfolioItems.length > 0) {
        filterBtns.forEach(btn => {
            btn.addEventListener("click", () => {
                // Sabhi buttons se 'active' class hatao
                filterBtns.forEach(b => b.classList.remove("active"));
                // Jo click hua hai uspar 'active' lagao
                btn.classList.add("active");

                const filterValue = btn.getAttribute("data-filter");

                // Images ko filter karne ka logic
                portfolioItems.forEach(item => {
                    if (filterValue === "all" || item.classList.contains(filterValue)) {
                        item.style.display = "block";
                        setTimeout(() => {
                            item.style.opacity = "1";
                            item.style.transform = "scale(1)";
                        }, 50);
                    } else {
                        item.style.opacity = "0";
                        item.style.transform = "scale(0.8)";
                        setTimeout(() => {
                            item.style.display = "none";
                        }, 300); // 300ms delay taaki smooth hide ho
                    }
                });
            });
        });
    }

    // 3. Navbar Scroll Effect (Rich Look detail)
    const header = document.querySelector(".main-header");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 50) {
            header.style.backgroundColor = "rgba(5, 5, 5, 0.99)";
            header.style.boxShadow = "0 4px 15px rgba(0,0,0,0.8)";
            header.style.padding = "10px 0"; // Scroll karne par thoda chota hoga
        } else {
            header.style.backgroundColor = "rgba(10, 10, 10, 0.95)";
            header.style.boxShadow = "none";
            header.style.padding = "15px 0"; // Wapas normal size
        }
    });
});
