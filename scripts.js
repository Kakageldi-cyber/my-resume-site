const experienceData = [{
        title: 'МТС-Туркменистан, специалист контактного центра',
        period: '2013 — 2016',
        description: 'Обработка звонков, поддержка клиентов, решение технических вопросов.',
    },
    {
        title: 'Государственная издательская служба Туркменистана, ведущий специалист АСУ',
        period: '2016 — 2019',
        description: 'Поддержка автоматизированных систем управления, диагностика неисправностей сети и оборудования организации.',
    },
    {
        title: 'ХО Нур Мимар, специалист отдела кадров',
        period: '2019 — 2021',
        description: 'Ведение кадрового делопроизводства, подбор персонала.',
    },
    {
        title: 'Государственное информационное агентство Туркменистана, специалист компьютерного отдела',
        period: '2021 — 2022',
        description: 'Обслуживание компьютерного оборудования и ПО.',
    },
    {
        title: 'Государственное информационное агентство Туркменистана, начальник отдела информационной безопасности',
        period: '2022 — 2025',
        description: 'Обеспечение информационной безопасности, мониторинг угроз.',
    },
];

const educationText = `
Учился заочно в Российском государственном университете туризма и сервиса, факультет экономики управления и права, направление менеджмент, бакалавр, с 2016 по 2020.
`;

const skillsList = [
    'Английский — pre-intermediate',
    'Русский — fluent',
    'Туркменский — fluent',
    'Знания сетей и модели OSI',
    'Администрирование Windows (средне)',
    'HTML/CSS',
    'JavaScript (учусь)',
    'Photoshop',
    'InDesign',
    'Movavi',
    'Word/Excel/PowerPoint',
];

function revealOnScroll() {
    const sections = document.querySelectorAll('.section');
    const triggerBottom = window.innerHeight * 0.85;

    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;

        if (top < triggerBottom) {
            section.classList.add('visible');
        }
    });
}

function renderExperience() {
    const container = document.querySelector('.experience-grid');
    experienceData.forEach(item => {
        const div = document.createElement('div');
        div.classList.add('exp-item');
        div.innerHTML = `
      <h3>${item.title}</h3>
      <div class="exp-date">${item.period}</div>
      <p>${item.description}</p>
    `;
        container.appendChild(div);
    });
}

function renderEducation() {
    const eduSection = document.querySelector('#education p');
    eduSection.textContent = educationText.trim();
}

function renderSkills() {
    const ul = document.querySelector('#skills ul');
    skillsList.forEach(skill => {
        const li = document.createElement('li');
        li.textContent = skill;
        ul.appendChild(li);
    });
}

function setupDownloadPdf() {
    const btn = document.getElementById('download-pdf');
    btn.addEventListener('click', () => {
        alert('PDF резюме пока не реализовано!');
    });

}

function setupDownloadPdf() {
    const btn = document.getElementById('download-pdf');
    btn.addEventListener('click', () => {
        window.open('resume.pdf', '_blank');
    });
}


document.addEventListener('DOMContentLoaded', () => {
    renderExperience();
    renderEducation();
    renderSkills();
    setupDownloadPdf();
    revealOnScroll();
});


window.addEventListener('scroll', revealOnScroll);
