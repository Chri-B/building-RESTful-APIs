import mongoose from 'mongoose';
import {
    ContactSchema
} from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

export const addNewContact = (req, res) => {
    let newContact = new Contact(req.body);

    newContact.save((err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
}

export const getContacts = (req, res) => {
    Contact.find({}, (err, contact) => { // (err, contact) : contact rappresenta cosa mi serve come parte della risposta della funzione
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
}