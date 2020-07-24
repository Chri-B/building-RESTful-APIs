import {
    addNewContact,
    getContacts,
    getContactWithID,
    updateContact,
    deleteContact
} from '../controllers/crmController';

// creo const routes che definisco con arrow function: creazione endpoints dell'API
const routes = (app) => {
    app.route('/contact')
        .get((req, res, next) => {
            // aggiungo un middleware (parametro next in ingresso nella funzione)
            console.log(`Request from: ${req.originalUrl}`) // nel terminale vedrò: Request from: /contact
            console.log(`Request type: ${req.method}`) // nel terminale vedrò: Request type: GET
            next(); // passa alla funzione successiva
        }, getContacts)

        // Post endpoint
        .post(addNewContact);

    app.route('/contact/:contactID')
        // get a specific contact
        .get(getContactWithID)

        // updating a specific contact
        .put(updateContact)

        // deleting a specific contact
        .delete(deleteContact)
}

// esporto la costante creata tramite comando sotto
export default routes;