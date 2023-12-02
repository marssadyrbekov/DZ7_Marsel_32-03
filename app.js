const buttons = document.querySelectorAll('.show-answer');

buttons.forEach(button => {
    button.addEventListener('click', function() {
        const answer = this.nextElementSibling;
        answer.classList.toggle('hidden');

        if (answer.classList.contains('hidden')) {
            this.textContent = 'Показать ответ';
        } else {
            this.textContent = 'Скрыть ответ';
        }
    });
});