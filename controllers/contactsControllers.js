import HttpError from "../helpers/HttpError.js";
import { ctrlWrapper } from "../helpers/ctrlWrapper.js";

import contacts from "../servises/contactsServises.js";

const listContacts = async (req, res) => {
  const result = await contacts.listContacts();
  res.json(result);
};

const getContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.getContactById(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

const deleteContact = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.removeContact(id);
  if (!result) {
    throw HttpError(404, "Not found");
  }

  res.json({
    message: "Delete success",
  });
};

const createContact = async (req, res) => {
  const result = await contacts.addContact(req.body);
  res.status(201).json(result);
};

const updateContactById = async (req, res) => {
  const { id } = req.params;
  const result = await contacts.updateContactById(id, req.body);
  if (!result) {
    throw HttpError(404, "Not found");
  }
  res.json(result);
};

export const getAll = ctrlWrapper(listContacts);
export const getContact = ctrlWrapper(getContactById);
export const addContact = ctrlWrapper(createContact);
export const updateContact = ctrlWrapper(updateContactById);
export const removeContact = ctrlWrapper(deleteContact);