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
        title: "Chili sous",
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

        // Savat ochish tugmalariga event listener qo'shish
        if (modals.savat.openBtn) {
            modals.savat.openBtn.forEach(btn => {
                btn.addEventListener('click', () => {
                    modals.savat.modal.style.display = 'flex';
                    document.body.style.overflow = 'hidden';
                });
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
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity++;
            this.render();
        }
    },

    decreaseQuantity: function (id) {
        const item = this.items.find(item => item.id === id);
        if (item && item.quantity > 1) {
            item.quantity--;
            this.render();
        }
    },

    removeItem: function (id) {
        this.items = this.items.filter(item => item.id !== id);
        this.updateCartButton();
        this.render();
    },

    calculateTotal: function () {
        return this.items.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^\d]/g, '')) || 0;
            return total + (price * item.quantity);
        }, 0);
    },

    updateCartButton: function () {
        const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
        this.cartButtons.forEach(btn => {
            btn.textContent = `Savatcha | ${totalItems}`;
        });
    },

    render: function () {
        this.itemsContainer.innerHTML = '';

        if (this.items.length === 0) {
            this.itemsContainer.innerHTML = '<p>Savat bo\'sh</p>';
            this.totalPriceElement.textContent = '0';
            return;
        }

        this.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'savat-item';
            itemElement.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="savat-item-info">
          <div class="savat-item-title">${item.title}</div>
          <div class="savat-item-price">${item.price}</div>
        </div>
        <div class="savat-item-quantity">
          <button class="decrease" data-id="${item.id}">-</button>
          <span>${item.quantity}</span>
          <button class="increase" data-id="${item.id}">+</button>
        </div>
        <span class="remove-item" data-id="${item.id}">&times;</span>
      `;
            this.itemsContainer.appendChild(itemElement);
        });

        const total = this.calculateTotal();
        this.totalPriceElement.textContent = total.toLocaleString('uz-UZ');

        // Event listenerlarni qo'shish
        document.querySelectorAll('.increase').forEach(button => {
            button.addEventListener('click', (e) => {
                this.increaseQuantity(e.target.dataset.id);
            });
        });

        document.querySelectorAll('.decrease').forEach(button => {
            button.addEventListener('click', (e) => {
                this.decreaseQuantity(e.target.dataset.id);
            });
        });

        document.querySelectorAll('.remove-item').forEach(button => {
            button.addEventListener('click', (e) => {
                this.removeItem(e.target.dataset.id);
            });
        });
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
                const address = document.querySelector('.div-right input')?.value || 'Aniqlanmagan';

                alert(`Buyurtma berildi!\nMijoz: ${user.name}\nTelefon: ${user.phone}\nManzil: ${address}\nYetkazish turi: ${user.deliveryType}\nJami: ${total.toLocaleString('uz-UZ')} so'm`);

                this.items = [];
                this.render();
                modals.savat.modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        }
    }
};

// Asosiy dastur
document.addEventListener('DOMContentLoaded', function () {
    // Shahar modalini to'ldirish
    if (modals.toshkent.content) {
        modals.toshkent.content.innerHTML = '';
        cities.forEach(city => {
            const p = document.createElement('p');
            p.textContent = city;
            modals.toshkent.content.appendChild(p);
        });
    }

    // Kategoriyalar menyusini to'ldirish
    const categoryContainer = document.querySelector('.maxsulotlar');
    if (categoryContainer) {
        categoryContainer.innerHTML = '';

        // "Barchasi" tugmasini qo'shamiz
        const allButton = document.createElement('button');
        allButton.textContent = 'Barchasi';
        allButton.classList.add('active');
        allButton.addEventListener('click', function () {
            document.querySelectorAll('.maxsulotlar button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
            renderProducts(products);
        });
        categoryContainer.appendChild(allButton);

        categories.forEach((category) => {
            const button = document.createElement('button');
            button.textContent = category;

            button.addEventListener('click', function () {
                document.querySelectorAll('.maxsulotlar button').forEach(btn => {
                    btn.classList.remove('active');
                });
                this.classList.add('active');
                filterProducts(category);

                // header elementiga sticky style qo'shish
                const header = document.querySelector('header');
                if (header) {
                    header.style.position = 'sticky';
                    header.style.top = '0';
                    header.style.zIndex = '100';
                    header.style.background = '#fff';
                }
            });

            categoryContainer.appendChild(button);
        });
    }

    // Mahsulotlarni chiqarish
    renderProducts(products);

    // Modal tizimini ishga tushirish
    initModals();

    // Slayderni ishga tushirish
    slider.init();

    // Savatni ishga tushirish
    cart.init();

    // Yetkazib berish/olib ketish tugmalari
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
});

// Mahsulotlarni chiqarish funksiyasi
function renderProducts(productsToRender) {
    const productsContainer = document.querySelector('.kombo');
    if (productsContainer) {
        productsContainer.innerHTML = '';

        if (productsToRender.length === 0) {
            productsContainer.innerHTML = '<p>Ushbu kategoriyada mahsulotlar mavjud emas</p>';
            return;
        }

        productsToRender.forEach(product => {
            const productElement = document.createElement('div');
            productElement.className = 'div-1';
            productElement.innerHTML = `
        <button class="open-img">
          <img src="${product.image}" alt="${product.title}">
        </button>
        <h3>${product.title}</h3>
        <p>${product.description}</p>
        <h4>${product.price}</h4>
        <button class="add-to-cart-btn" data-id="${product.id}">Savatga yuborish</button>
      `;

            productsContainer.appendChild(productElement);

            // Mahsulot rasmini ko'rish uchun
            productElement.querySelector('.open-img').addEventListener('click', function () {
                openProductModal(product);
            });

            // Savatga qo'shish
            productElement.querySelector('.add-to-cart-btn').addEventListener('click', function () {
                const productId = parseInt(this.getAttribute('data-id'));
                const productToAdd = products.find(p => p.id === productId);
                if (productToAdd) {
                    cart.addItem(productToAdd);
                }
            });
        });
    }
}

// Mahsulot modalini ochish
function openProductModal(product) {
    const modal = modals.product;
    if (modal.modal) {
        modal.modal.querySelector('.modal-img-image').src = product.image;
        modal.modal.querySelector('.modal-img-title').textContent = product.title;
        modal.modal.querySelector('.modal-img-description').textContent = product.description;
        modal.modal.querySelector('.modal-img-price').textContent = product.price;

        // Savatga qo'shish tugmasi
        const addBtn = modal.modal.querySelector('.add-to-cart-btn-modal');
        if (addBtn) {
            addBtn.onclick = function () {
                cart.addItem(product);
                modal.modal.style.display = 'none';
                document.body.style.overflow = 'auto';
            };
        }

        modal.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }
}

// Modal tizimini ishga tushirish
function initModals() {
    // Har bir modal uchun event listenerlar
    Object.keys(modals).forEach(modalKey => {
        const modal = modals[modalKey];

        // Ochish
        if (modal.openBtn && modal.modal) {
            // Agar openBtn NodeList bo'lsa (bir nechta element)
            if (modal.openBtn.length) {
                modal.openBtn.forEach(btn => {
                    btn.addEventListener('click', (e) => {
                        handleModalOpen(e, modal);
                    });
                });
            } else {
                // Agar openBtn bitta element bo'lsa
                modal.openBtn.addEventListener('click', (e) => {
                    handleModalOpen(e, modal);
                });
            }
        }

        // Yopish (contentdan tashqariga bosilganda)
        if (modal.modal && modal.content) {
            modal.modal.addEventListener('click', (e) => {
                if (e.target === modal.modal) {
                    closeModal(modal);
                }
            });
        }

        // Yopish tugmasi
        if (modal.closeBtn && modal.modal) {
            modal.closeBtn.addEventListener('click', () => {
                closeModal(modal);
            });
        }
    });

    // Shahar tanlash
    if (modals.toshkent.content) {
        modals.toshkent.content.querySelectorAll('p').forEach(option => {
            option.addEventListener('click', function () {
                const cityName = this.textContent;
                const citySelector = document.querySelector('.city-selector span');
                if (citySelector) {
                    citySelector.textContent = cityName;
                }
                closeModal(modals.toshkent);
            });
        });
    }

    // Kirish modali - kod olish
    if (modals.kirish.content) {
        const getCodeBtn = modals.kirish.content.querySelector('button');
        if (getCodeBtn) {
            getCodeBtn.addEventListener('click', function () {
                const code = Math.floor(1000 + Math.random() * 9000);
                alert(`Tasdiqlash kodingiz: ${code}\nIsm: ${user.name}`);
                closeModal(modals.kirish);
            });
        }
    }

    // ESC tugmasi bilan yopish
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            Object.keys(modals).forEach(modalKey => {
                const modal = modals[modalKey];
                if (modal.modal && modal.modal.style.display === 'flex') {
                    closeModal(modal);
                }
            });
        }
    });
}

// Modal ochish funksiyasi
function handleModalOpen(e, modal) {
    e.stopPropagation();

    // Kirish modali uchun telefon raqamini to'ldirish
    if (modal === modals.kirish) {
        const phoneInput = modal.content.querySelector('input[type="tel"]');
        if (phoneInput) phoneInput.value = user.phone;
    }

    modal.modal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

// Modal yopish funksiyasi
function closeModal(modal) {
    modal.modal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Mahsulotlarni filter qilish
function filterProducts(category) {
    const filteredProducts = products.filter(product => product.category === category);
    renderProducts(filteredProducts);
}

// Global funksiyalar
window.nextImage = slider.nextImage.bind(slider);
window.prevImage = slider.prevImage.bind(slider);