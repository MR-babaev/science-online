function toggleTheme() {
    const body = document.documentElement;
    const themeBtn = document.getElementById('theme-btn');
    
    if (body.getAttribute('data-theme') === 'dark') {
        body.removeAttribute('data-theme');
        themeBtn.textContent = 'Темна тема 🌙';
    } else {
        body.setAttribute('data-theme', 'dark');
        themeBtn.textContent = 'Світла тема ☀️';
    }
}

const facts = [
    "Маса всього інтернету дорівнює приблизно 50 грамам (це вага всіх електронів у русі).",
    "Перший комп'ютерний баг (жучок) був буквально живою міллю, яка застрягла в реле комп'ютера Mark II у 1947 році.",
    "Для створення Ейфелевої вежі інженерам знадобилося 18 038 окремих металевих деталей і 2,5 мільйона заклепок.",
    "Щодня у світі генерується понад 2,5 квінтильйона байтів даних завдяки роботі програмних інженерів.",
    "Перший у світі програміст — жінка на ім'я Ада Лавлейс, яка написала алгоритм для обчислювальної машини у 1843 році."
];

function generateFact() {
    const display = document.getElementById('random-fact-display');
    display.style.opacity = 0;
    
    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * facts.length);
        display.innerHTML = `<strong>Чи знаєте ви, що:</strong> ${facts[randomIndex]}`;
        display.style.opacity = 1;
        display.style.transition = "opacity 0.5s ease";
    }, 300);
}

function checkQuiz() {
    let score = 0;
    const q1 = document.querySelector('input[name="q1"]:checked');
    const q2 = document.querySelector('input[name="q2"]:checked');
    const resultDiv = document.getElementById('quiz-result');

    if (!q1 || !q2) {
        resultDiv.style.color = "var(--accent-color)";
        resultDiv.textContent = "Будь ласка, дайте відповідь на всі запитання!";
        return;
    }

    if (q1.value === "correct") score++;
    if (q2.value === "correct") score++;

    if (score === 2) {
        resultDiv.style.color = "#28a745"; 
        resultDiv.textContent = "Чудово! 2/2 правильних відповідей. Ви справжній інженер!";
    } else if (score === 1) {
        resultDiv.style.color = "var(--secondary-color)";
        resultDiv.textContent = "Непогано! 1/2 правильних відповідей. Є куди рости.";
    } else {
        resultDiv.style.color = "var(--accent-color)";
        resultDiv.textContent = "0/2 правильних відповідей. Спробуйте ще раз, перечитавши текст!";
    }
}