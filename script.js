// Mahsulotlar bazasi
const products = [
    {
        id: 1,
        title: "Kombo 2 + 1",
        description: "O‘z uchligingizni to‘plang va faqat ikkitasi uchun to‘lang!",
        price: "25 000 so`m",
        image: "assets/div-1-.png",
        category: "Kombo"
    },
    {
        id: 2,
        title: "Kombo 3 + 1",
        description: "O‘z uchligingizni to‘plang va faqat ikkitasi uchun to‘lang!",
        price: "35 000 so`m",
        image: "assets/e1372657d9a016f62ec0b88a7de21ad8.jpg",
        category: "Kombo"
    },
    {
        id: 3,
        title: "Kombo 4 + 1",
        description: "O‘z uchligingizni to‘plang va faqat ikkitasi uchun to‘lang!",
        price: "38 000 so`m",
        image: "assets/margarita.jpg",
        category: "Kombo"
    },
    {
        id: 4,
        title: "Pitsa Margarita",
        description: "Klassik pitsa, pomidor sousi, mozzarella pishloq",
        price: "45 000 so`m",
        image: "assets/Pitsa Margarita.png",
        category: "Pitsa"
    },
    {
        id: 5,
        title: "Pitsa Pepperoni",
        description: "Pomidor sousi, mozzarella pishloq, pepperoni",
        price: "50 000 so`m",
        image: "assets/Pitsa Pepperoni.jpg",
        category: "Pitsa"
    },
    {
        id: 6,
        title: "Pepsi 0.5L",
        description: "Sovuq ichimlik",
        price: "8 000 so`m",
        image: "assets/pepsi.jpg",
        category: "Ichimliklar"
    },
    {
        id: 7,
        title: "Fanta 0.5L",
        description: "Sovuq ichimlik",
        price: "8 000 so`m",
        image: "assets/Fanta 0.5L.jpg",
        category: "Ichimliklar"
    },
    {
        id: 8,
        title: "Kartoshka fri",
        description: "Krispi kartoshka fri",
        price: "15 000 so`m",
        image: "assets/kartochka.jpg",
        category: "Gazaklar"
    },
    {
        id: 9,
        title: "Nonushta salati",
        description: "Yangi sabzavotlar bilan tayyorlangan salat",
        price: "20 000 so`m",
        image: "assets/pizza Nonushta salati.png",
        category: "Salatlar"
    },
    {
        id: 10,
        title: "Chokoladli tort",
        description: "Hushbo'y chokoladli tort",
        price: "25 000 so`m",
        image: "assets/maxresdefault.jpg",
        category: "Desertlar"
    },
    {
        id: 11,
        title: "Chili sous",
        description: "Achchiq chili sous",
        price: "5 000 so`m",
        image: "assets/ketchup-600x600.jpg",
        category: "Souslar"
    },
    {
        id: 12,
        title: "Pishloqli sous",
        description: "Pishloqli sous",
        price: "8 000 so`m",
        image: "assets/Pishloqli sous.png",
        category: "Souslar"
    }
];

// Shaharlar ro'yxati
const cities = [
    "Toshkent", "Samarqand", "Andijon", "Qo'qon", "Chirchiq",
    "Namangan", "Buxoro", "Farg'ona", "Olmaliq", "Nurafshon",
    "Angren", "Qarshi", "Jizzax", "Guliston", "Nukus"
];

// Kategoriyalar ro'yxati
const categories = [
    "Kombo", "Pitsa", "Gazaklar", "Ichimliklar", "Salatlar", "Desertlar", "Souslar"
];

// Foydalanuvchi ma'lumotlari
const user = {
    phone: "+998",
    name: "Ibrohim",
    address: "",
    deliveryType: "yetkazib berish"
};

// Modal tizimi
const modals = {
    toshkent: {
        openBtn: document.querySelector('.open-toshkent'),
        modal: document.querySelector('.modal-toshkent'),
        content: document.querySelector('.modal-content')
    },
    kirish: {
        openBtn: document.querySelector('.open-kirish'),
        modal: document.querySelector('.modal-kirish'),
        content: document.querySelector('.modal-content-2'),
        closeBtn: document.querySelector('.modal-content-2 .x')
    },
    halal: {
        openBtn: document.querySelector('.open-halal'),
        modal: document.querySelector('.modal-halal'),
        content: document.querySelector('.modal-content-3'),
        closeBtn: document.querySelector('.modal-content-3 .x')
    },
    savat: {
        openBtn: document.querySelectorAll('.open-savat-btn'),
        modal: document.querySelector('.modal-savat'),
        content: document.querySelector('.modal-content-savat'),
        closeBtn: document.querySelector('.close-savat')
    },
    product: {
        modal: document.querySelector('.modal-img'),
        content: document.querySelector('.modal-content-img'),
        closeBtn: document.querySelector('.close-img')
    }
};

// Slayder tizimi
const slider = {
    images: [
        "assets/img1.png",
        "assets/img 2.png",
        "assets/img 3.png",
        "assets/img 5.png",
        "assets/img 6.png"
    ],
    currentIndex: 0,
    imageElement: document.getElementById("slider-image"),

    init: function () {
        this.showImage(this.currentIndex);
        // Slayder tugmalariga event listener qo'shish
        const prevBtn = document.querySelector('.prev-btn');
        const nextBtn = document.querySelector('.next-btn');
        if (prevBtn) prevBtn.addEventListener('click', () => this.prevImage());
        if (nextBtn) nextBtn.addEventListener('click', () => this.nextImage());
    },

    showImage: function (index) {
        if (this.imageElement) {
            this.imageElement.src = this.images[index];
        }
    },

    nextImage: function () {
        this.currentIndex = (this.currentIndex + 1) % this.images.length;
        this.showImage(this.currentIndex);
    },

    prevImage: function () {
        this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
        this.showImage(this.currentIndex);
    }
};

// Savat tizimi
const cart = {
    items: [],
    itemsContainer: document.querySelector('.savat-items'),
    totalPriceElement: document.querySelector('.total-price'),
    cartButtons: document.querySelectorAll('.open-savat-btn'),

    init: function () {
        this.updateCartButton();
        this.setupBuyButton();
        
        // Savat tugmalariga event listener qo'shish
        if (this.cartButtons) {
            this.cartButtons.forEach(btn => {
                btn.addEventListener('click', () => {
                    openModal(modals.savat);
                });
            });
        }
        
        // Savat ichidagi tugmalar uchun event listener
        if (this.itemsContainer) {
            this.itemsContainer.addEventListener('click', (e) => {
                const target = e.target;
                const itemId = target.dataset.id;
                if (target.classList.contains('increase')) {
                    this.increaseQuantity(itemId);
                } else if (target.classList.contains('decrease')) {
                    this.decreaseQuantity(itemId);
                } else if (target.classList.contains('remove-item')) {
                    this.removeItem(itemId);
                }
            });
        }
    },

    addItem: function (product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }

        this.updateCartButton();
        this.render();
    },

    increaseQuantity: function (id) {
        const item = this.items.find(item => item.id == id);
        if (item) {
            item.quantity++;
            this.render();
        }
    },

    decreaseQuantity: function (id) {
        const item = this.items.find(item => item.id == id);
        if (item && item.quantity > 1) {
            item.quantity--;
            this.render();
        } else if (item && item.quantity === 1) {
            this.removeItem(id);
        }
    },

    removeItem: function (id) {
        this.items = this.items.filter(item => item.id != id);
        this.updateCartButton();
        this.render();
    },

    calculateTotal: function () {
        return this.items.reduce((total, item) => {
            // "25 000 so`m" formatini raqamga o'tkazish
            const price = parseFloat(item.price.replace(/[^\d]/g, '')) || 0;
            return total + (price * item.quantity);
        }, 0);
    },

    updateCartButton: function () {
        const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
        const cartCountSpan = document.querySelector('.savat-count');
        if(cartCountSpan) {
            cartCountSpan.textContent = totalItems > 0 ? totalItems : '';
        }
    },

    render: function () {
        if (!this.itemsContainer || !this.totalPriceElement) return;

        this.itemsContainer.innerHTML = '';
        if (this.items.length === 0) {
            this.itemsContainer.innerHTML = '<p>Savat bo\'sh</p>';
            this.totalPriceElement.textContent = '0';
        } else {
            this.items.forEach(item => {
                const itemElement = document.createElement('div');
                itemElement.className = 'savat-item';
                itemElement.innerHTML = `
                    <div class="savat-item-info">
                        <img src="${item.image}" alt="${item.title}" class="savat-item-img">
                        <div class="item-details">
                            <div class="savat-item-title">${item.title}</div>
                            <div class="savat-item-price">${item.price}</div>
                        </div>
                    </div>
                    <div class="savat-item-quantity">
                        <button class="decrease" data-id="${item.id}">-</button>
                        <span>${item.quantity}</span>
                        <button class="increase" data-id="${item.id}">+</button>
                    </div>
                    <button class="remove-item" data-id="${item.id}">
                        <i class='bx bxs-trash-alt'></i>
                    </button>
                `;
                this.itemsContainer.appendChild(itemElement);
            });
            const total = this.calculateTotal();
            this.totalPriceElement.textContent = total.toLocaleString('uz-UZ');
        }
    },

    setupBuyButton: function () {
        const buyBtn = document.querySelector('.buy-btn');
        if (buyBtn) {
            buyBtn.addEventListener('click', () => {
                if (this.items.length === 0) {
                    alert('Savat bo\'sh. Iltimos, mahsulot qo\'shing.');
                    return;
                }
                const total = this.calculateTotal();
                const address = document.querySelector('.div-right input[type="text"]')?.value || 'Manzil kiritilmagan';
                alert(`Buyurtma berildi!\nMijoz: ${user.name}\nTelefon: ${user.phone}\nManzil: ${address}\nYetkazish turi: ${user.deliveryType}\nJami: ${total.toLocaleString('uz-UZ')} so'm`);
                this.items = [];
                this.render();
                closeModal(modals.savat);
            });
        }
    }
};

// Asosiy dastur
document.addEventListener('DOMContentLoaded', function () {
    // Sahifa yuklanganda barcha kerakli funksiyalarni ishga tushirish
    
    // Shahar modalini to'ldirish
    const cityListContainer = modals.toshkent.content;
    if (cityListContainer) {
        cityListContainer.innerHTML = '';
        cities.forEach(city => {
            const p = document.createElement('p');
            p.textContent = city;
            p.addEventListener('click', function () {
                const citySelector = document.querySelector('.city-selector span');
                if (citySelector) citySelector.textContent = this.textContent;
                closeModal(modals.toshkent);
            });
            cityListContainer.appendChild(p);
        });
    }

    // Kategoriyalar menyusini to'ldirish
    const categoryContainer = document.querySelector('.maxsulotlar');
    if (categoryContainer) {
        // "Barchasi" tugmasini qo'shish
        const allButton = document.createElement('button');
        allButton.textContent = 'Barchasi';
        allButton.classList.add('active');
        allButton.addEventListener('click', function () {
            document.querySelectorAll('.maxsulotlar button').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            renderProducts(products);
        });
        categoryContainer.appendChild(allButton);

        categories.forEach((category) => {
            const button = document.createElement('button');
            button.textContent = category;
            button.addEventListener('click', function () {
                document.querySelectorAll('.maxsulotlar button').forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
                filterProducts(category);
            });
            categoryContainer.appendChild(button);
        });
    }

    // Mahsulotlarni sahifaga chiqarish
    renderProducts(products);
    
    // Modal tizimini ishga tushirish
    initModals();

    // Slayderni ishga tushirish
    slider.init();

    // Savatni ishga tushirish
    cart.init();

    // Yetkazib berish/olib ketish tugmalari uchun event listeners
    const deliveryBtn = document.querySelector('.btn-yatkazib-berish');
    const pickupBtn = document.querySelector('.btn-olib-berish');
    if (deliveryBtn && pickupBtn) {
        deliveryBtn.addEventListener('click', function () {
            user.deliveryType = "yetkazib berish";
            deliveryBtn.classList.add('active');
            pickupBtn.classList.remove('active');
        });
        pickupBtn.addEventListener('click', function () {
            user.deliveryType = "olib ketish";
            pickupBtn.classList.add('active');
            deliveryBtn.classList.remove('active');
        });
    }

    // `Kirish` formasi uchun
    const loginForm = document.querySelector('.form-kirish');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            const phoneInput = document.getElementById('phone-number-input');
            if (phoneInput && phoneInput.value.length > 5) {
                user.phone = phoneInput.value;
                alert(`Tasdiqlash kodingiz: ${Math.floor(1000 + Math.random() * 9000)}`);
                closeModal(modals.kirish);
            } else {
                alert("Iltimos, to'g'ri telefon raqam kiriting.");
            }
        });
    }
});

// Mahsulotlarni chiqarish funksiyasi
function renderProducts(productsToRender) {
    const productsContainer = document.querySelector('.kombo');
    if (!productsContainer) return;

    productsContainer.innerHTML = '';
    if (productsToRender.length === 0) {
        productsContainer.innerHTML = '<p>Ushbu kategoriyada mahsulotlar mavjud emas</p>';
        return;
    }

    productsToRender.forEach(product => {
        const productElement = document.createElement('div');
        productElement.className = 'div-1';
        productElement.innerHTML = `
            <button class="open-img" data-id="${product.id}">
                <img src="${product.image}" alt="${product.title}">
            </button>
            <h3>${product.title}</h3>
            <p>${product.description}</p>
            <h4>${product.price}</h4>
            <button class="add-to-cart-btn" data-id="${product.id}">Savatga yuborish</button>
        `;
        productsContainer.appendChild(productElement);

        // Mahsulot rasmini ko'rish uchun event listener
        productElement.querySelector('.open-img').addEventListener('click', function () {
            const productToView = products.find(p => p.id == this.dataset.id);
            if(productToView) openProductModal(productToView);
        });

        // Savatga qo'shish uchun event listener
        productElement.querySelector('.add-to-cart-btn').addEventListener('click', function () {
            const productId = parseInt(this.dataset.id);
            const productToAdd = products.find(p => p.id === productId);
            if (productToAdd) {
                cart.addItem(productToAdd);
            }
        });
    });
}

// Mahsulot modalini ochish
function openProductModal(product) {
    const modal = modals.product;
    if (modal.modal) {
        modal.modal.querySelector('.modal-img-image').src = product.image;
        modal.modal.querySelector('.modal-img-title').textContent = product.title;
        modal.modal.querySelector('.modal-img-description').textContent = product.description;
        modal.modal.querySelector('.modal-img-price').textContent = product.price;
        const addBtn = modal.modal.querySelector('.add-to-cart-btn-modal');
        if (addBtn) {
            addBtn.onclick = function () {
                cart.addItem(product);
                closeModal(modal);
            };
        }
        openModal(modal);
    }
}

// Modal tizimini ishga tushirish
function initModals() {
    Object.keys(modals).forEach(modalKey => {
        const modal = modals[modalKey];
        if (modal.openBtn) {
            if (modal.openBtn.length) { // NodeList bo'lsa
                modal.openBtn.forEach(btn => btn.addEventListener('click', () => openModal(modal)));
            } else { // Bitta element bo'lsa
                modal.openBtn.addEventListener('click', () => openModal(modal));
            }
        }
        if (modal.closeBtn) modal.closeBtn.addEventListener('click', () => closeModal(modal));
        if (modal.modal) modal.modal.addEventListener('click', (e) => {
            if (e.target === modal.modal) closeModal(modal);
        });
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            Object.values(modals).forEach(modal => {
                if (modal.modal && modal.modal.style.display === 'flex') {
                    closeModal(modal);
                }
            });
        }
    });
}

// Modal ochish funksiyasi
function openModal(modal) {
    if (modal && modal.modal) {
        modal.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Modal yopish funksiyasi
function closeModal(modal) {
    if (modal && modal.modal) {
        modal.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    }
}

// Mahsulotlarni filter qilish
function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Slayder funksiyalarini global scopega chiqarish
window.nextImage = slider.nextImage.bind(slider);
window.prevImage = slider.prevImage.bind(slider);
