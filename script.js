// Фразы на французском
function showFrenchPhrase() {
    const phrases = [
        "Bon appétit! — Приятного аппетита!",
        "La cuisine est un art. — Кулинария — это искусство.",
        "C'est délicieux! — Это очень вкусно!",
        "La vie est belle. — Жизнь прекрасна.",
        "Maman est la meilleure. — Мама (или бабушка) самая лучшая."
    ];
    
    const randomPhrase = phrases[Math.floor(Math.random() * phrases.length)];
    if (document.getElementById('french-phrase')) {
        document.getElementById('french-phrase').innerText = randomPhrase;
    }
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    setupRecipeCards();
    setupModal();
    showFrenchPhrase();
});

// === ФУНКЦИОНАЛЬНОСТЬ КАРТОЧЕК И МОДАЛА ===

function setupRecipeCards() {
    const buyButtons = document.querySelectorAll('.btn-buy');
    const freeButtons = document.querySelectorAll('.btn-free');

    buyButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const recipeName = this.getAttribute('data-name');
            openModal(recipeName);
        });
    });

    freeButtons.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            const recipeName = this.getAttribute('data-name');
            alert(`Рецепт "${recipeName}" открыт! 🍽️`);
        });
    });
}

// Функции модального окна
function openModal(recipeName) {
    const modal = document.getElementById('modal');
    const modalName = document.getElementById('modal-name');

    if (modal && modalName) {
        modalName.textContent = `Заказать: ${recipeName}`;
        modal.classList.add('active');
        modal.setAttribute('aria-hidden', 'false');
    }
}

function closeModal() {
    const modal = document.getElementById('modal');
    if (modal) {
        modal.classList.remove('active');
        modal.setAttribute('aria-hidden', 'true');
    }
}

function setupModal() {
    const modal = document.getElementById('modal');
    const closeBtn = document.querySelector('.close');
    const payBtn = document.querySelector('.btn-pay');

    if (closeBtn) {
        closeBtn.addEventListener('click', closeModal);
    }

    // Закрытие при клике вне модала
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                closeModal();
            }
        });
    }

    // Обработка оплаты
    if (payBtn) {
        payBtn.addEventListener('click', function() {
            const email = document.querySelector('.modal-content input[type="email"]');
            if (email && email.value) {
                alert(`Спасибо за заказ! Подтверждение отправлено на ${email.value}`);
                closeModal();
                email.value = '';
            } else {
                alert('Пожалуйста, введите email');
            }
        });
    }
}

// === ФУНКЦИОНАЛЬНОСТЬ КАМЕРЫ ===

function handleFileUpload(event) {
    const file = event.target.files[0];
    if (file) {
        console.log("Фото получено:", file.name);
        
        // Показываем превью фото
        const reader = new FileReader();
        reader.onload = function(e) {
            console.log("Фото загружено успешно");
            // Здесь можно отправить на сервер
            showNotification('Фото загружено');
        };
        reader.readAsDataURL(file);
    }
}

// Проверка поддержки камеры
function checkCameraSupport() {
    const cameraInput = document.getElementById('cameraInput');
    if (!cameraInput) {
        console.warn('Camera input element not found');
        return false;
    }
    return true;
}

// === УТИЛИТЫ ===

function showNotification(message, type = 'info') {
    console.log(`[${type.toUpperCase()}] ${message}`);
}

// Вызов проверки при загрузке
window.addEventListener('load', function() {
    checkCameraSupport();
    console.log('Скрипт загружен успешно');
});
