// Alpine.js компонент приложения
function app() {
    // Проверяем сохранённый язык
    const savedLang = localStorage.getItem('lang');
    const defaultLang = savedLang || 'ru';
    // установим атрибут lang для html
    document.documentElement.lang = defaultLang;
    return {
        currentLanguage: defaultLang,
        translations: {
            ru: {
                nav: { courses: 'Наши курсы', about: 'О нас', reviews: 'Отзывы', contact: 'Контакты' },
                hero: { title: 'Добро пожаловать в INTELLECT', desc: 'Современное образование в области IT и программирования для всех возрастов', cta: 'Записаться на курс', modalTitle: 'Записаться на курс' },
                courses: {
                    heading: 'Наши курсы',
                    cluster4: { title: '4 кластер', desc: 'Учебный курс охватывает дисциплины гуманитарного цикла для углубленной подготовки и сдачи ежегодных экзаменов.', duration: 'Продолжительность: 1 год', price: 'Стоимость: 1100 сомони в месяц', instructor: 'Инструкторы: различные специалисты', skills: 'Навыки: подготовка к экзаменам по истории, праву, литературе, таджикскому и русскому языкам.' },
                    cluster5: { title: '5 кластер (Медицина)', desc: 'Курс включает в себя углубленное изучение медицинских дисциплин с упором на анатомию, физиологию, гистологию и биохимию.', duration: 'Продолжительность: 1 год', price: 'Стоимость: 1100 сомони в месяц', instructor: 'Инструкторы: специалисты в области медицины', skills: 'Навыки: основы химии, биологии и физики с медицинской направленностью.' },
                    olympiad: { title: 'Подготовка к Олимпиаде', desc: 'Курс направлен на подготовку к олимпиадам по естественным наукам.', duration: 'Продолжительность: по подготовке', price: 'Стоимость: 1100 сомони в месяц', instructor: 'Преподаватели: олимпийские тренеры и эксперты', skills: 'Навыки: подготовка по химии, биологии и физике.' },
                    meddeep: { title: 'Медицина углубленно', desc: 'Этот курс ориентирован на углубленное изучение медицины, предназначен для студентов, желающих поступить в медицинские университеты.', duration: 'Продолжительность: 1 год', price: 'Стоимость: 1100 сомони в месяц', instructor: 'Инструкторы: специалисты-медики', skills: 'Навыки: углубленное изучение анатомии и физиологии.' },
                    english: { title: 'Английский язык', desc: 'Курс английского языка, охватывающий все аспекты языка от базового до продвинутого уровня.', duration: 'Продолжительность: 6 месяцев', price: 'Стоимость: 1100 сомони в месяц', instructor: 'Инструктор: Анна Петрова', skills: 'Навыки: от уровня Beginner до Advanced.' }
                },
                features: { teach: 'Профессиональные преподаватели', teachDesc: 'Опытные специалисты из IT-индустрии.', methods: 'Современные методики', methodsDesc: 'Интерактивные уроки и практические задания.', prices: 'Доступные цены', pricesDesc: 'Оптимальные тарифы для школьников и студентов.', support: 'Поддержка 24/7', supportDesc: 'Всегда на связи для вопросов и помощи.' },
                about: { heading: 'О нас', teachers: 'Наши преподаватели', achievements: 'Наши достижения', students: 'Наши ученики', address: 'Наш адрес', addressText: 'г. Душанбе, ул. Учебная, 21' },
                contact: { heading: 'Свяжитесь с нами', addressText: 'Адрес: ул. Главная, 123, Душанбе', form: { name: 'Имя', phone: 'Телефон', email: 'Email', message: 'Сообщение', submit: 'Отправить' } }
            },
            tg: {
                nav: { courses: 'Курсҳои мо', about: 'Дар бораи мо', reviews: 'Назариҳо', contact: 'Тамос' },
                hero: { title: 'Хуш омадед ба INTELLECT', desc: 'Таҳсилоти муосир дар соҳаи IT ва барномасозӣ барои тамоми синну солҳо', cta: 'Барои курс сабти ном шудан' },
                courses: {
                    heading: 'Курсҳои мо',
                    cluster4: { title: '4 кластер', desc: 'Курси таҳсилӣ фанҳои гуманитариро барои омода шудани ҳамаҷониба ва супурдани имтиҳонҳои солона дар бар мегирад.', duration: 'Мӯҳлат: 1 сол', price: 'Нарх: 1100 сомонӣ дар як моҳ', instructor: 'Муаллимон: мутахассисони гуногун', skills: 'Маҳоратҳо: омодагӣ ба имтиҳонҳо дар таърих, ҳуқуқ, адабиёт, забони тоҷикӣ ва русӣ.' },
                    cluster5: { title: '5 кластер (Тиб)', desc: 'Курс таҳқиқи мукаммали фанҳои тиббиро бо таъкид ба анатомия, физиология, гистология ва биохимия дар бар мегирад.', duration: 'Мӯҳлат: 1 сол', price: 'Нарх: 1100 сомонӣ дар як моҳ', instructor: 'Муаллимон: коршиносон дар соҳаи тиб', skills: 'Маҳоратҳо: асосҳои химия, биология ва физика бо равиши тиббӣ.' },
                    olympiad: { title: 'Омодагӣ ба Олимпиада', desc: 'Курс ба омодагӣ ба олимпиадаҳо дар фанҳои табиӣ равона шудааст.', duration: 'Мӯҳлат: мувофиқи омодагӣ', price: 'Нарх: 1100 сомонӣ дар як моҳ', instructor: 'Муаллимон: тренерҳо ва коршиносони олимпиада', skills: 'Маҳоратҳо: омодагӣ ба олимпиада дар химия, биология ва физика.' },
                    meddeep: { title: 'Тиб бо таҳқиқи амиқ', desc: 'Ин курс ба омӯхтани амиқи тибб равона шудааст ва барои донишҷӯёнест, ки мехоҳанд ба донишгоҳҳои тиббӣ дохил шаванд.', duration: 'Мӯҳлат: 1 сол', price: 'Нарх: 1100 сомонӣ дар як моҳ', instructor: 'Муаллимон: мутахассисони тиббӣ', skills: 'Маҳоратҳо: омӯхтани амиқи анатомия ва физиология.' },
                    english: { title: 'Забони англисӣ', desc: 'Курс забони англисиро дар тамоми сатҳҳо аз ибтидоӣ то пешрафта фаро мегирад.', duration: 'Мӯҳлат: 6 моҳ', price: 'Нарх: 1100 сомонӣ дар як моҳ', instructor: 'Муаллим: Анна Петрова', skills: 'Маҳоратҳо: аз сатҳи Beginner то Advanced.' }
                },
                features: { teach: 'Муаллимони касбӣ', methods: 'Усулҳои муосир', prices: 'Нархҳои дастрас', support: 'Дастгирии 24/7' },
                about: { heading: 'Дар бораи мо', teachers: 'Муаллимони мо', achievements: 'Дастовардҳои мо', students: 'Шогирдони мо', address: 'Суроғаи мо' },
                contact: { heading: 'Бо мо тамос гиред' }
            }
        },
        form: {
            name: '',
            phone: '',
            email: '',
            message: ''
        },

        
        // Переключение языка
        switchLanguage(lang) {
            this.currentLanguage = lang;
            // update html lang attribute for accessibility/SEO
            document.documentElement.lang = lang;
            // save preference
            localStorage.setItem('lang', lang);
            console.log(`Language switched to: ${lang}`);
        },
        // Полезный метод для доступа к переводам по ключу
        t(path) {
            const parts = path.split('.');
            let obj = this.translations[this.currentLanguage];
            for (let part of parts) {
                if (!obj) return '';
                obj = obj[part];
            }
            return obj || '';
        },
        
        // Открыть модальное окно
        openModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.remove('hidden');
            }
        },
        
        // Закрыть модальное окно
        closeModal(modalId) {
            const modal = document.getElementById(modalId);
            if (modal) {
                modal.classList.add('hidden');
            }
        },
        
        // Валидация телефона
        validatePhone() {
            // Удаляем все символы кроме цифр
            this.form.phone = this.form.phone.replace(/\D/g, '');
        },
        
        // Отправка формы
        submitForm() {
            if (this.validateFormData()) {
                console.log('Form submitted:', this.form);
                alert('Спасибо! Мы скоро свяжемся с вами.');
                this.resetForm();
                // Закрыть все открытые модальные окна
                document.querySelectorAll('[id$="Modal"]').forEach(modal => {
                    modal.classList.add('hidden');
                });
            }
        },
        
        // Валидация данных формы
        validateFormData() {
            if (!this.form.name.trim()) {
                alert('Пожалуйста, введите имя');
                return false;
            }
            if (!this.form.phone.trim()) {
                alert('Пожалуйста, введите телефон');
                return false;
            }
            if (!this.form.email.trim()) {
                alert('Пожалуйста, введите email');
                return false;
            }
            return true;
        },
        
        // Очистить форму
        resetForm() {
            this.form = {
                name: '',
                phone: '',
                email: '',
                message: ''
            };
        }
    };
}

// Инициализация Swiper карусели для отзывов и слайдера геро
    document.addEventListener('DOMContentLoaded', function() {
        // Инициализация карусели отзывов
        new Swiper('.reviewSwiper', {
            loop: true,
            pagination: {
                el: '.reviewSwiper .swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30,
            },
        }
    });
    
    // Анимация при загрузке страницы
    gsap.from('h1', { duration: 0.8, y: 30, opacity: 0, ease: 'power2.out' });
    gsap.from('h1 ~ p', { duration: 0.8, y: 30, opacity: 0, delay: 0.2, ease: 'power2.out' });
    gsap.from('button', { duration: 0.8, y: 30, opacity: 0, delay: 0.4, ease: 'power2.out' });
    
    // Анимация карточек курсов
    gsap.utils.toArray('.bg-white.rounded-2xl').forEach((card, index) => {
        gsap.from(card, {
            scrollTrigger: {
                trigger: card,
                start: 'top bottom',
                toggleActions: 'play none none reverse'
            },
            duration: 0.8,
            y: 50,
            opacity: 0,
            delay: index * 0.1,
            ease: 'power2.out'
        });
    });
    
    // Анимация панели преимуществ
    gsap.utils.toArray('#features .flex').forEach((item, idx) => {
        gsap.from(item, {
            scrollTrigger: {
                trigger: item,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
            },
            duration: 0.6,
            y: 30,
            opacity: 0,
            delay: idx * 0.1,
            ease: 'power2.out'
        });
    });
});
