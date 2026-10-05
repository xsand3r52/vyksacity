// =========================================
// 1. ЗАГРУЗКА ПОСТОВ ИЗ ФАЙЛА
// =========================================
let postsData = [];

async function loadPosts() {
    try {
        const response = await fetch('posts.json');
        postsData = await response.json();
        console.log('✅ Посты загружены:', postsData.length);
    } catch (error) {
        console.error('❌ Ошибка загрузки постов:', error);
        postsData = [];
    }
}
 
// =========================================
// 2. ЗАГРУЗКА ГЛАВНОЙ СТРАНИЦЫ
// =========================================
function renderPostsList() {
    const container = document.getElementById('posts-list');
    if (!container) return;

    container.innerHTML = '';
    // Показываем все посты (сортировка: новые сверху)
    const sorted = [...postsData].sort((a, b) => new Date(b.date) - new Date(a.date));

    sorted.forEach(post => {
        const card = document.createElement('div');
        card.className = 'post-card';
        card.setAttribute('data-id', post.id);

        // Превью-картинка (если нет — заглушка)
        const imgSrc = post.preview || 'images/placeholder.jpg';

        card.innerHTML = `
            <img class="preview-img" src="${imgSrc}" alt="${post.title}" onerror="this.src='images/placeholder.jpg'" />
            <div class="info">
                <h3>${post.title}</h3>
                <span class="date">📅 ${formatDate(post.date)}</span>
                <div class="preview-text">${post.preview_text}</div>
            </div>
        `;

        // Клик по карточке → переход на страницу поста
        card.addEventListener('click', () => {
            window.location.href = `post.html?id=${post.id}`;
        });

        container.appendChild(card);
    });
}

// =========================================
// 3. ЗАГРУЗКА ОТДЕЛЬНОГО ПОСТА
// =========================================
function renderPostPage() {
    const container = document.getElementById('post-content');
    if (!container) return;

    // Получаем id из URL (например, ?id=2)
    const params = new URLSearchParams(window.location.search);
    const postId = parseInt(params.get('id'));

    const post = postsData.find(p => p.id === postId);
    if (!post) {
        container.innerHTML = `<h2 style="color:#a33;">Пост не найден</h2><p>Вернитесь на <a href="index.html">главную</a>.</p>`;
        return;
    }

    // Собираем галерею
    let galleryHTML = '';
    if (post.images && post.images.length > 0) {
        galleryHTML = `<div class="gallery">`;
        post.images.forEach(imgPath => {
            galleryHTML += `
                <img src="${imgPath}" alt="${post.title}" onclick="openLightbox(this.src)" onerror="this.style.display='none'" />
            `;
        });
        galleryHTML += `</div>`;
    } else {
        galleryHTML = `<p style="color:#4a7a4a;">📷 Фото к этому посту пока нет.</p>`;
    }   
// ===== БЛОК ВИДЕО =====
    let videoHTML = '';
    if (post.videos && post.videos.length > 0) {
        videoHTML = `
            <h3 style="margin: 28px 0 12px; color:#1a3a1a;">🎬 Видео</h3>
            <div class="video-list">
        `;
        post.videos.forEach(videoPath => {
            videoHTML += `
                <video controls preload="metadata" class="post-video">
                    <source src="${videoPath}" type="video/mp4">
                    Ваш браузер не поддерживает видео.
                </video>
            `;
        });
        videoHTML += `</div>`;
    }

    container.innerHTML = `
        <h1>${post.title}</h1>
        <span class="meta-date">📅 ${formatDate(post.date)}</span>
        <div class="full-text">${post.full_text}</div>
        <h3 style="margin: 20px 0 12px; color:#1a3a1a;">📸 Фотографии</h3>
        ${galleryHTML}
        ${videoHTML}
        <div style="margin-top: 28px;">
            <a href="index.html" style="color:#c62828; font-weight:600; text-decoration:none; border:2px solid #c62828; padding:8px 20px; border-radius:30px;">← На главную</a>
        </div>
    `;
}

// =========================================
// 4. ЛАЙТБОКС (увеличение фото)
// =========================================
function openLightbox(src) {
    let lb = document.getElementById('lightbox');
    if (!lb) {
        // Создаём лайтбокс, если его нет
        lb = document.createElement('div');
        lb.id = 'lightbox';
        lb.className = 'lightbox';
        lb.innerHTML = `
            <span class="close-btn" onclick="closeLightbox()">&times;</span>
            <img src="" alt="Увеличенное фото" />
        `;
        document.body.appendChild(lb);
        // Закрытие по клику на фон
        lb.addEventListener('click', (e) => {
            if (e.target === lb) closeLightbox();
        });
        // Закрытие по Escape
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape') closeLightbox();
        });
    }
    const img = lb.querySelector('img');
    img.src = src;
    lb.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lb = document.getElementById('lightbox');
    if (lb) lb.classList.remove('show');
    document.body.style.overflow = '';
}

// =========================================
// 5. ВСПОМОГАТЕЛЬНЫЕ ФУНКЦИИ
// =========================================
function formatDate(dateStr) {
    const d = new Date(dateStr);
    const months = ['янв','фев','мар','апр','май','июн','июл','авг','сен','окт','ноя','дек'];
    return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
}

// =========================================
// 7. ЗАПУСК (с загрузкой постов)
// =========================================
async function init() {
    await loadPosts();  // Сначала загружаем посты из posts.json

    if (document.getElementById('posts-list')) {
        renderPostsList();
    } else if (document.getElementById('post-content')) {
        renderPostPage();
    }
}

init();