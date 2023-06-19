
        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        let isCartMenuOpen = false;

        
        function updateCartItems() {
            const cartCountMenuElement = document.getElementById('cart-count-menu');
            const cartTotalMenuElement = document.getElementById('cart-total-menu');
            const cartItemsMenuElement = document.getElementById('cart-items-menu');

            cartCountMenuElement.textContent = cart.length;

            let cartTotal = 0;
            let cartItemsHTML = '';

            for (let i = 0; i < cart.length; i++) {
                const item = cart[i];
                cartTotal += item.price;
                cartItemsHTML += `<p>${item.name} - $${item.price.toFixed(2)} <button class="btn btn-sm btn-danger" onclick="removeCart(${i})">Remove</button></p>`;
            }

            cartTotalMenuElement.textContent = cartTotal.toFixed(2);
            cartItemsMenuElement.innerHTML = cartItemsHTML;
        }

     
        function addCart(productName, productPrice) {
            cart.push({
                name: productName,
                price: productPrice
            });

          
            localStorage.setItem('cart', JSON.stringify(cart));

            updateCartItems();
        }

        
        function removeCart(index) {
            cart.splice(index, 1);

            localStorage.setItem('cart', JSON.stringify(cart));

            updateCartItems();
        }

    
        function removeAllItems() {
            cart = [];

            
            localStorage.setItem('cart', JSON.stringify(cart));

            updateCartItems();
        }

      
        function toggleCartMenu() {
            const basketMenu = document.getElementById('basket-menu');
            isCartMenuOpen = !isCartMenuOpen;

            if (isCartMenuOpen) {
                basketMenu.classList.add('open');
            } else {
                basketMenu.classList.remove('open');
            }
        }

     
        function closeCartMenu() {
            const basketMenu = document.getElementById('basket-menu');
            isCartMenuOpen = false;
            basketMenu.classList.remove('open');
        }

        
        updateCartItems();
    