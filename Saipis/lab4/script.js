(function() {

    const form = document.getElementById('contact-form');
    form.addEventListener('submit', event => {
        event.preventDefault();

        if (!form.checkValidity()) {
            alert('Форма неправильно заполнена!');
            return;
        }

        let hasleastOneSelected = [...form.movie].some(i => i.checked === true);

        if (!hasleastOneSelected) {
            alert('Дайте ответ на вопрос - Где Вы, чаще всего, смотрите фильмы?');
            return;
        }

        const jsonData = utils.formToJSON(form.elements);

        // const results = document.getElementById('result-display');
        // results.textContent = JSON.stringify(jsonData, null, "  ");

        utils.formToStorage(localStorage, 'form-data', jsonData);
    });
})();

function clearForm() {
    document.getElementById("contact-form").reset();
}