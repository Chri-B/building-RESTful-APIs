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

export const getContactWithID = (req, res) => {
    Contact.findById(req.params.contactID, (err, contact) => { // contactID deve coincidere con contactID (parametri con lo stesso nome) indicato nelle route
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
}

export const updateContact = (req, res) => {
    Contact.findOneAndUpdate({
        _id: req.params.contactID
    }, req.body, {
        new: true,
        useFindAndModify: false
    }, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json(contact);
        }
    });
}

export const deleteContact = (req, res) => {
    Contact.findOneAndDelete(req.params.contactID, (err, contact) => {
        if (err) {
            res.send(err);
        } else {
            res.json({
                message: 'Successfuly deleted contact!'
            })
        }
    });
}