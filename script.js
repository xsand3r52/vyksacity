// =========================================
// 1. ДАННЫЕ ПОСТОВ (ДОБАВЛЯЙТЕ НОВЫЕ СЮДА)
// =========================================
const postsData = [
    {
        id: 1,
        title: "Маунтинбайк «ТурБаза Ока»",
        date: "2026-05-02",
        preview: "images/post1_preview.jpg",
        preview_text: "🥈",
        full_text: "2-3 мая в городском округе Мурома прошли соревнования по маунтинбайку на ТурБазе Ока. 2 мая была индивидуальная гонка.3 мая кросскантри",
        images: [
            "images/post1_1.jpg",
            "images/post1_2.jpg",
            "images/post1_3.jpg",
            "images/post1_4.jpg"
        ],
videos: [                          // ← ДОБАВЬТЕ ЭТУ СТРОКУ
        "videos/post1_video1.mp4",     // ← и список видео
        "videos/post1_video2.mp4"
    ]
    },
    {
        id: 2,
        title: "Гонка с выбыванием стадион ДООСЦ Верба",
        date: "2026-05-23",
        preview: "images/post2_preview.jpg",
        preview_text: "🥇",
        full_text: "23 мая в Лесопарковой зоне стадиона ДООСЦ Верба, мкр Вербовский, округ Муром, Владимирской области состоялся чемпионат и первенство Владимирской области по велосипедному спорту - маунтинбайк в дисциплине: кросс-кантри гонка с выбыванием.",
        images: [
            "images/post2_1.jpg",
            "images/post2_2.jpg",
            "images/post2_3.jpg"
        ],
videos: [                          // ← ДОБАВЬТЕ ЭТУ СТРОКУ
        "videos/post2_video1.mp4",     // ← и список видео
        "videos/post2_video2.mp4"
    ]

    },
{
        id: 3,
        title: "Маунтинбайк Баринова Роща",
        date: "2026-06-12",
        preview: "images/post3_preview.jpg",
        preview_text: "🥇",
        full_text: "12 июня в Гусь-Хрустальном прошли ежегодные соревнования по маунтибайку",
        images: [
            "images/post3_1.jpg",
            "images/post3_2.jpg",
            "images/post3_3.jpg"
        ]
    },
{
        id: 4,
        title: "Маунтинбайк г.Ковров район Черного Дола",
        date: "2026-06-27",
        preview: "images/post4_preview.jpg",
        preview_text: "🥈",
        full_text: "Чемпионат и Первенство города Коврова по велосипедному спорту-маунтинбайк состоялись 27 июня 2026 года.",
        images: [
            "images/post4_1.jpg",
            "images/post4_2.jpg",
            "images/post4_3.jpg",
"images/post4_4.jpg",
"images/post4_5.jpg",
"images/post4_6.jpg",
"images/post4_7.jpg",
"images/post4_8.jpg",
"images/post4_9.jpg"
        ]
    },
{
        id: 5,
        title: "🔥Веломарафон «ЖАРА 2»",
        date: "2026-08-01",
        preview: "images/post5_preview.jpg",
        preview_text: "🥇",
        full_text: `👍Сегодня была ЖАРА 2
Веломарафон состоялся! ❤️‍🔥
На старт вышли 14 гонщиков, отличный настрой, боевой дух и братская помощь на всей дистанции, 96 км пересеченки между Муромов и Меленками.
Погода включила тепло, но лужи на трассе никуда не делись, покрытые грязю , но счастливые все приехали а финиш.
Трек был разной степени сложности и веселья, от накатистого асфальта и грунта до дробилова в полях с травой по пояс.
Аттракцион не для слабонервных)
Еще раз благодарим всех участников!
Отдельно хочется поблагодарить жен, которые приехали встречать своих героев на финише!!!
Спасибо нашим любимым спонсорам Роданика за напитки для всех участников!`,
        images: [
            "images/post5_1.jpg",
            "images/post5_2.jpg",
            "images/post5_3.jpg",
"images/post5_4.jpg",
"images/post5_5.jpg",
"images/post5_6.jpg",
            "images/post5_7.jpg"
        ]
    },
{
        id: 6,
        title: "Кросс-Кантри на семи холмах",
        date: "2026-08-08",
        preview: "images/post6_preview.jpg",
        preview_text: "🥇",
        full_text: `На лыжной базе «Сосенки» в Павлово вместо привычного скрипа снега — гул колёс: здесь прошли соревнования по кросс-кантри на 7 холмах.

Спортсмены ловко покоряли подъёмы и спуски — казалось, будто трассы и созданы для велозаездов. Да, без лыж было непривычно, а снежного покрова отчаянно не хватало…

Но азарт остался прежним: спорт не знает сезонов, он просто меняет экипировку.

Уважаемые велоспортсмены — вам отдельная благодарность за доверие! 🤝🙌🙏

🫱 Царь всех соревнований Самовар — был!
🫱 Трон лыжный — был!
🫱 Чай и печеньки — были!
🫱 Юмор — обязательно!
🤝 Спортсмены — естественно!

Снова убедились: 🫵 спортсмены — везде спортсмены.

И если холмы зовут, они обязательно ответят.

😇 Вот Холмы — такие Холмы вас встретили 😇`,
        images: [
            "images/post6_1.jpg",
            "images/post6_2.jpg",
            "images/post6_3.jpg",
"images/post6_4.jpg",
            "images/post6_5.jpg"
        ]
    },
{
        id: 7,
        title: "Первый этап Московских веломарафонов 2026. СК «Альфа-Битца»",
        date: "2026-04-25",
        preview: "images/post7_preview.jpg",
        preview_text: "🥇",
        full_text: `5 апреля на старт Первого этапа МВМ в Альфа-Битце вышли почти 600 велосипедистов! Было жарко 🔥

Жмите ❤, если были среди участников и кайфанули от трассы, погоды и атмосферы!

От всей команды МВМ говорим вам спасибо, что разделили этот гоночный день с нами! Серия Московских МТБ-веломарафонов 2026 официально открыта — дальше только интереснее!`,
        images: [
            "images/post7_1.jpg",
            "images/post7_2.jpg",
            "images/post7_3.jpg",
"images/post7_4.jpg",
"images/post7_5.jpg",
"images/post7_6.jpg",
"images/post7_7.jpg",
"images/post7_8.jpg",
"images/post7_9.jpg",
"images/post7_10.jpg"

        ]
    },
{
        id: 8,
        title: "Чемпионат и Первенство Владимирской области по велосипедному спорту маунтинбайк (кросс-кантри) посвященные «Дню защитника Отечества»",
        date: "2026-02-23",
        preview: "images/post8_preview.jpg",
        preview_text: "🥉",
        full_text: "Чемпионат и Первенство города Коврова по велосипедному спорту-маунтинбайк состоялись 27 июня 2026 года.",
        images: [
            "images/post8_1.jpg",
            "images/post8_2.jpg",
            "images/post8_3.jpg"
        ]
    },
{
        id: 9,
        title: "Первенство округа Муром по велосипедному спорту - маунтинбайк в дисциплине кросс-кантри — короткий круг.",
        date: "2026-09-05",
        preview: "images/post9_preview.jpg",
        preview_text: "🥇",
        full_text: "Чемпионат и Первенство города Коврова по велосипедному спорту-маунтинбайк состоялись 27 июня 2026 года.",
        images: [
            "images/post9_1.jpg",
            "images/post9_2.jpg",
            "images/post9_3.jpg"
        ],
videos: [                          // ← ДОБАВЬТЕ ЭТУ СТРОКУ
        "videos/post9_video1.mp4"     // ← и список видео
        
    ]

    },







];
 
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
// 6. ЗАПУСК
// =========================================
// Определяем, на какой мы странице
if (document.getElementById('posts-list')) {
    renderPostsList();
} else if (document.getElementById('post-content')) {
    renderPostPage();
}
