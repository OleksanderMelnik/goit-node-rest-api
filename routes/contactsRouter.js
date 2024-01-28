import express from "express";

import validateBody from "../helpers/validateBody.js";

import {
  createContactSchema,
  updateContactSchema,
} from "../schemas/contactsSchemas.js";

import {
  getAll,
  getContact,
  addContact,
  updateContact,
  removeContact,
} from "../controllers/contactsControllers.js";

const contactsRouter = express.Router();

contactsRouter.get("/", getAll);

contactsRouter.get("/:id", getContact);

contactsRouter.delete("/:id", removeContact);

contactsRouter.post("/", validateBody(createContactSchema), addContact);

contactsRouter.put("/:id", validateBody(updateContactSchema), updateContact);

export default contactsRouter;