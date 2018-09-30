(function() {

    const table = document.getElementById('results-table');
    const tableBody = table.tBodies[0];

    const forms = utils.formFromStorage(localStorage, 'form-data');
    forms.forEach((form) => {
        let tr = utils.createElement('tr');

        let tdName = utils.createElement('td', form.name);
        utils.insertElementTo(tr, tdName);

        let tdEmail = utils.createElement('td', form.email);
        utils.insertElementTo(tr, tdEmail);
        
        let tdTele = utils.createElement('td', form.tele);
        utils.insertElementTo(tr, tdTele);      

        let tdSubject = utils.createElement('td', form.subject);
        utils.insertElementTo(tr, tdSubject);

        let tdSalutation = utils.createElement('td', form.salutation);
        utils.insertElementTo(tr, tdSalutation);
        
        let tdMovie = utils.createElement('td', form.movie);
        utils.insertElementTo(tr, tdMovie);    

        utils.insertElementTo(tableBody, tr);
    });
})();