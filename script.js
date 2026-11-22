const translations = {
  en: {
    navWork: 'Experience', navResearch: 'Research', navEducation: 'Education',
    eyebrow: 'AI researcher & ML engineer · Saint Petersburg',
    heroTitle: 'Hi, I’m Alex Sachuk. I enjoy ML/AI and building useful things.',
    heroLede: 'I’d be happy to collaborate on research in NLP, DL-RL, GenAI, and computer vision.',
    portraitAlt: 'Alex Sachuk', scidataRepo: 'SciDataMAS repository ->', contact: 'Get in touch', viewResearch: 'Selected research',
    experienceLabel: 'EXPERIENCE', experienceTitle: 'Experience',
    experienceNote: 'Research and engineering<br>in machine learning.', present: 'PRESENT', fullTime: 'Research',
    jobLabTitle: 'Research Software Engineer', labCompany: 'Biomedical Imaging and Data Analysis Laboratory · SPbPU',
    labBullet1: 'Developed an LLM- and RAG-based multi-agent system for scientific dataset metadata. The <a href="https://github.com/Biomed-imaging-lab/SciDataMAS" target="_blank" rel="noreferrer">SciDataMAS repository -></a> also includes a DSH plugin.',
    labBullet2: 'Building a patient search system for clinical trials: an OCR pipeline structures medical records and eligibility criteria. <a href="https://mika.help/" target="_blank" rel="noreferrer">Mika -></a> is part of the system.',
    labBullet3: 'Adapted RCAN to improve fluorescence microscopy images without explicitly specifying a point spread function. <a href="https://github.com/Biomed-imaging-lab/NeuroDecon" target="_blank" rel="noreferrer">NeuroDecon code -></a>',
    jobCvTitle: 'Computer Vision Engineer', physmech: 'PhysMech Laboratory · SPbPU',
    cvBullet1: 'Explored generative models for 3D modeling of compression screw profiles.',
    cvBullet2: 'Developed a DeepSDF, VAE, and SIREN solution for continuous 2D profile generation, with MSE around 0.0006 near the boundary.',
    jobInternTitle: 'Junior ML Developer · Intern', internship: 'Internship',
    internBullet1: 'Built IMU sensor datasets and trained models to classify device events and human activities.',
    internBullet2: 'Reached ≈0.84 accuracy for event classification and ≈0.80 with LimuBERT for activity recognition.',
    researchLabel: 'RESEARCH', researchTitle: 'Publications & projects',
    researchNote: 'Scientific data, LLMs,<br>and computer vision.', confPaper: 'A* CONFERENCE · 2026', journalPaper: 'JOURNAL · 2025',
    sciDesc: 'An LLM-powered multi-agent system for organizing, annotating, and retrieving scientific data.',
    readPaper: 'Read publication', neuroDesc: 'A neural network method for 3D deconvolution of fluorescence microscopy images.',
    workshop: 'A* WORKSHOP · 2026',
    icdmTitle: 'ADSD: AI-ready Data for Science Discovery · ICDM 2026',
    icdmDesc: 'Presented research on LLM properties for scientific data organization at the ICDM 2026 workshop. A paper is in preparation.',
    inPrep: 'Paper in preparation', selectedProject: 'SELECTED PROJECT',
    repoDesc: 'Open-source neural deconvolution for microscopy images.',
    educationLabel: 'EDUCATION', educationTitle: 'Education',
    educationNote: 'Peter the Great St. Petersburg<br>Polytechnic University', master: 'MSc', bachelor: 'BSc',
    degreeField: 'Applied Mathematics and Computer Science',
    masterThesis: 'Thesis: “A multi-agent network for research assistance”',
    bachelorThesis: 'Thesis: “Deep learning methods for point spread function estimation in confocal microscopy”',
    toolkit: 'TOOLS', closingEyebrow: 'COLLABORATION',
    closingTitle: 'Open to research collaborations.',
    contactCopy: 'I welcome joint research, scientific projects, and engineering work in NLP, DL-RL, GenAI, and computer vision.',
    backTop: 'Back to top ↑'
  },
  ru: {
    navWork: 'Опыт', navResearch: 'Исследования', navEducation: 'Образование',
    eyebrow: 'AI-исследователь и ML-инженер · Санкт-Петербург',
    heroTitle: 'Привет! Я Александр Сачук. Люблю ML/AI и полезные проекты.',
    heroLede: 'Буду рад совместной работе над исследованиями в NLP, DL-RL, GenAI и computer vision.',
    portraitAlt: 'Александр Сачук', scidataRepo: 'Репозиторий SciDataMAS ->', contact: 'Связаться', viewResearch: 'Публикации и проекты',
    experienceLabel: 'ОПЫТ', experienceTitle: 'Опыт работы',
    experienceNote: 'Исследовательская и инженерная работа<br>в области машинного обучения.', present: 'НАСТОЯЩЕЕ ВРЕМЯ', fullTime: 'Исследования',
    jobLabTitle: 'Программист-исследователь', labCompany: 'Лаборатория ЛАБИД · СПбПУ',
    labBullet1: 'Разработал мультиагентную систему для работы с метаданными научных датасетов на базе LLM и RAG. В репозитории <a href="https://github.com/Biomed-imaging-lab/SciDataMAS" target="_blank" rel="noreferrer">SciDataMAS -></a> также есть DSH-плагин.',
    labBullet2: 'Разрабатываю систему поиска пациентов для клинических исследований: OCR-пайплайн структурирует медицинские документы и критерии отбора. Часть системы — <a href="https://mika.help/" target="_blank" rel="noreferrer">Mika -></a>.',
    labBullet3: 'Адаптировал RCAN для улучшения снимков флуоресцентной микроскопии без явного задания функции рассеяния точки. <a href="https://github.com/Biomed-imaging-lab/NeuroDecon" target="_blank" rel="noreferrer">Код NeuroDecon -></a>',
    jobCvTitle: 'Инженер компьютерного зрения', physmech: 'Лаборатория ФизМех · СПбПУ',
    cvBullet1: 'Исследовал генеративные модели для 3D-моделирования профилей компрессионных винтов.',
    cvBullet2: 'Разработал решение на базе DeepSDF, VAE и SIREN: непрерывная генерация 2D-профилей с MSE около 0.0006 вблизи границы.',
    jobInternTitle: 'Младший ML-разработчик · стажировка', internship: 'Стажировка',
    internBullet1: 'Создавал датасеты с IMU-сенсоров и обучал модели для классификации событий устройства и человеческой активности.',
    internBullet2: 'Добился accuracy ≈ 0.84 для классификации событий и ≈ 0.80 с LimuBERT для распознавания активности.',
    researchLabel: 'ИССЛЕДОВАНИЯ', researchTitle: 'Публикации и проекты',
    researchNote: 'Научные данные, LLM<br>и компьютерное зрение.', confPaper: 'КОНФЕРЕНЦИЯ A* · 2026', journalPaper: 'ЖУРНАЛ · 2025',
    sciDesc: 'Мультиагентная система на базе LLM для организации, разметки и поиска научных данных.',
    readPaper: 'Читать публикацию', neuroDesc: 'Нейросетевой метод 3D-деконволюции изображений флуоресцентной микроскопии.',
    workshop: 'WORKSHOP A* · 2026',
    icdmTitle: 'ADSD: AI-ready Data for Science Discovery · ICDM 2026',
    icdmDesc: 'Представил исследование свойств LLM при организации научных данных на воркшопе ICDM 2026. Статья готовится.',
    inPrep: 'Статья в подготовке', selectedProject: 'ИЗБРАННЫЙ ПРОЕКТ',
    repoDesc: 'Открытый код для нейросетевой деконволюции микроскопических изображений.',
    educationLabel: 'ОБРАЗОВАНИЕ', educationTitle: 'Образование',
    educationNote: 'Санкт-Петербургский политехнический<br>университет Петра Великого', master: 'Магистратура', bachelor: 'Бакалавриат',
    degreeField: 'Прикладная математика и информатика',
    masterThesis: 'ВКР: «Мультиагентная сеть сопровождения исследования»',
    bachelorThesis: 'ВКР: «Методы глубокого обучения для построения ФРТ конфокального микроскопа»',
    toolkit: 'ИНСТРУМЕНТЫ', closingEyebrow: 'СОВМЕСТНЫЕ ИССЛЕДОВАНИЯ',
    closingTitle: 'Открыт к сотрудничеству.',
    contactCopy: 'Буду рад совместным исследованиям, научным проектам и инженерным задачам в NLP, DL-RL, GenAI и computer vision.',
    backTop: 'Наверх ↑'
  }
};

let lang = 'ru';
const toggle = document.getElementById('language-toggle');
function setLanguage(next) {
  lang = next;
  document.documentElement.lang = next;
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const value = translations[next][el.dataset.i18n];
    if (value !== undefined) el.innerHTML = value;
  });
  document.querySelectorAll('[data-i18n-alt]').forEach(el => {
    el.alt = translations[next][el.dataset.i18nAlt];
  });
  toggle.innerHTML = next === 'ru' ? 'EN <span>-></span>' : 'RU <span>-></span>';
  toggle.setAttribute('aria-label', next === 'ru' ? 'Switch language' : 'Переключить язык');
  document.title = next === 'ru' ? 'Александр Сачук — AI-исследователь и ML-инженер' : 'Alex Sachuk — AI researcher & ML engineer';
  document.querySelector('meta[name="description"]').content = next === 'ru'
    ? 'Александр Сачук — AI-исследователь и ML-инженер. Интересы: NLP, DL-RL, GenAI и computer vision.'
    : 'Alex Sachuk is an AI researcher and ML engineer interested in NLP, DL-RL, GenAI, and computer vision.';
  localStorage.setItem('portfolio-language', next);
}
toggle.addEventListener('click', () => setLanguage(lang === 'ru' ? 'en' : 'ru'));
document.getElementById('year').textContent = new Date().getFullYear();
if (localStorage.getItem('portfolio-language') === 'en') setLanguage('en');
