// theme toggle functionality to change the theme
        const themeToggle = document.getElementById('theme-toggle');
        themeToggle.addEventListener('click', () => {
            document.body.classList.toggle('dark');
        });

        // cart functionality it adds the item
        const addToCartButtons = document.querySelectorAll('.add-to-cart');
        const cartCountElement = document.getElementById('cart-count');
        let cartCount = 0;

        addToCartButtons.forEach(button => {
            button.addEventListener('click', () => {
                if (button.dataset.state === 'add') {
                    cartCount++;
                    button.dataset.state = 'remove';
                    button.textContent = 'Remove from Cart';
                } else {
                    cartCount--;
                    button.dataset.state = 'add';
                    button.textContent = 'Add to Cart';
                }
                cartCountElement.textContent = cartCount;
            });
        });
        // scrolling to top method
        document.addEventListener('DOMContentLoaded', () => {
            const backToTop = document.querySelector('.foot-panel1');

            if (backToTop) {
                backToTop.addEventListener('click', () => {
                    window.scrollTo({
                        top: 0,
                        behavior: 'smooth'
                    });
                });
            }
        });
