document.addEventListener('DOMContentLoaded', function() {
    // Modal elementlari
    const modals = {
        toshkent: {
            open: document.querySelector('.open-toshkent'),
            modal: document.querySelector('.modal-toshkent'),
            content: document.querySelector('.modal-content')
        },
        kirish: {
            open: document.querySelector('.open-kirish'),
            modal: document.querySelector('.modal-kirish'),
            content: document.querySelector('.modal-content-2'),
            close: document.querySelector('.modal-content-2 .x')
        },
        halal: {
            open: document.querySelector('.open-halal'),
            modal: document.querySelector('.modal-halal'),
            content: document.querySelector('.modal-content-3'),
            close: document.querySelector('.modal-content-3 .x')
        }
    };

    // Modalni ochish funksiyasi
    function openModal(modal) {
        if (modal) {
            modal.style.display = 'flex';
            document.body.style.overflow = 'hidden';
        }
    }

    // Modalni yopish funksiyasi
    function closeModal(modal) {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    }

    // Har bir modal uchun event listenerlar
    Object.keys(modals).forEach(key => {
        const m = modals[key];

        // Ochish
        if (m.open && m.modal) {
            m.open.addEventListener('click', (e) => {
                e.stopPropagation();
                openModal(m.modal);
            });
        }

        // Yopish (contentdan tashqariga bosilganda)
        if (m.modal && m.content) {
            m.modal.addEventListener('click', (e) => {
                if (e.target === m.modal) {
                    closeModal(m.modal);
                }
            });
        }

        // Yopish tugmasi
        if (m.close && m.modal) {
            m.close.addEventListener('click', () => {
                closeModal(m.modal);
            });
        }
    });

    // ESC tugmasi bilan yopish
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            Object.keys(modals).forEach(key => {
                const m = modals[key];
                if (m.modal && m.modal.style.display === 'flex') {
                    closeModal(m.modal);
                }
            });
        }
    });

    // Shahar tanlash modalida shaharni tanlash
    const cityOptions = document.querySelectorAll('.modal-content p');
    if (cityOptions) {
        cityOptions.forEach(option => {
            option.addEventListener('click', function() {
                const cityName = this.textContent;
                const citySelector = document.querySelector('.city-selector span');
                if (citySelector) {
                    citySelector.textContent = cityName;
                }
                closeModal(modals.toshkent.modal);
            });
        });
    }
});

// Slayder tizimi
const images = [
    "assets/img1.png",
    "assets/img 2.png",
    "assets/img 3.png",
    "assets/img 5.png",
    "assets/img 6.png"
];
let current = 0;
const imageElement = document.getElementById("slider-image");

function showImage(index) {
    if (imageElement) {
        imageElement.src = images[index];
    }
}

function nextImage() {
    current = (current + 1) % images.length;
    showImage(current);
}

function prevImage() {
    current = (current - 1 + images.length) % images.length;
    showImage(current);
}

// Global scope'da funksiyalarni bog'lash
window.nextImage = nextImage;
window.prevImage = prevImage;

// Mahsulot rasmi modali uchun funksiyalar
const imgModal = document.querySelector('.modal-img');
const imgModalContent = document.querySelector('.modal-content-img');
const imgModalCloseBtn = document.querySelector('.close-img');
const imgModalImage = document.querySelector('.modal-img-image');
const imgModalTitle = document.querySelector('.modal-img-title');
const imgModalDescription = document.querySelector('.modal-img-description');
const imgModalPrice = document.querySelector('.modal-img-price');

function openModalImg(imageSrc, title, description, price) {
    imgModalImage.src = imageSrc;
    imgModalTitle.textContent = title;
    imgModalDescription.textContent = description;
    imgModalPrice.textContent = price;
    imgModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeModalImg() {
    imgModal.style.display = 'none';
    document.body.style.overflow = 'auto';
}

document.querySelectorAll('.open-img').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.closest('.div-1');
        const imageSrc = productElement.querySelector('img').src;
        const title = productElement.querySelector('h3').textContent;
        const description = productElement.querySelector('p').textContent;
        const price = productElement.querySelector('h4').textContent;
        openModalImg(imageSrc, title, description, price);
    });
});

imgModalCloseBtn.addEventListener('click', closeModalImg);
imgModal.addEventListener('click', (e) => {
    if (e.target === imgModal) {
        closeModalImg();
    }
});

// Savat tizimi
const savat = {
    items: [],
    modal: document.querySelector('.modal-savat'),
    content: document.querySelector('.modal-content-savat'),
    itemsContainer: document.querySelector('.savat-items'),
    totalPriceElement: document.querySelector('.total-price'),
    savatButton: document.querySelector('.open-savat-btn'),

    // Savatni ochish
    open: function() {
        this.render();
        this.modal.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    },

    // Savatni yopish
    close: function() {
        this.modal.style.display = 'none';
        document.body.style.overflow = 'auto';
    },

    // Mahsulot qo'shish
    addItem: function(product) {
        const existingItem = this.items.find(item => item.id === product.id);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            this.items.push({
                ...product,
                quantity: 1
            });
        }

        this.updateSavatButton();
        this.render();
    },

    // Mahsulot miqdorini oshirish
    increaseQuantity: function(id) {
        const item = this.items.find(item => item.id === id);
        if (item) {
            item.quantity++;
            this.render();
        }
    },

    // Mahsulot miqdorini kamaytirish
    decreaseQuantity: function(id) {
        const item = this.items.find(item => item.id === id);
        if (item && item.quantity > 1) {
            item.quantity--;
            this.render();
        }
    },

    // Mahsulotni o'chirish
    removeItem: function(id) {
        this.items = this.items.filter(item => item.id !== id);
        this.updateSavatButton();
        this.render();
    },

    // Jami narxni hisoblash
    calculateTotal: function() {
        return this.items.reduce((total, item) => {
            const price = parseFloat(item.price.replace(/[^\d]/g, '')) || 0;
            return total + (price * item.quantity);
        }, 0);
    },

    // Savat tugmasini yangilash
    updateSavatButton: function() {
        const totalItems = this.items.reduce((total, item) => total + item.quantity, 0);
        this.savatButton.textContent = `Savatcha | ${totalItems}`;
    },

    // Savatni ekranga chiqarish
    render: function() {
        this.itemsContainer.innerHTML = '';

        if (this.items.length === 0) {
            this.itemsContainer.innerHTML = '<p>Savat bo\'sh</p>';
            this.totalPriceElement.textContent = '0';
            this.updateSavatButton();
            return;
        }

        this.items.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'savat-item';
            itemElement.innerHTML = `
                <img src="${item.imageSrc}" alt="${item.title}">
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
    }
};

// Mahsulot qo'shish tugmalari uchun event listenerlar
document.querySelectorAll('.add-to-cart-btn').forEach(button => {
    button.addEventListener('click', function() {
        const productElement = this.closest('.div-1');
        const product = {
            id: productElement.querySelector('h3').textContent.trim(),
            imageSrc: productElement.querySelector('img').src,
            title: productElement.querySelector('h3').textContent,
            price: productElement.querySelector('h4').textContent
        };
        savat.addItem(product);
    });
});

// Savat modalini ochish
savat.savatButton.addEventListener('click', function() {
    savat.open();
});

// Savat modalini yopish
document.querySelector('.close-savat').addEventListener('click', function() {
    savat.close();
});

// Modal tashqarisiga bosilganda yopish
savat.modal.addEventListener('click', function(e) {
    if (e.target === savat.modal) {
        savat.close();
    }
});

// ESC tugmasi bilan yopish
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && savat.modal.style.display === 'flex') {
        savat.close();
    }
    if (e.key === 'Escape' && imgModal.style.display === 'flex') {
        closeModalImg();
    }
});