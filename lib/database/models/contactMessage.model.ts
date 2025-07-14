import { Document, Schema, model, models } from "mongoose";

export interface IContactMessage extends Document {
  fullName: string;
  email: string;
  message: string;
  createdAt: Date;
}

const ContactMessageSchema = new Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
  },
  { timestamps: true }
);

const ContactMessage = models.ContactMessage || model('ContactMessage', ContactMessageSchema);

export default ContactMessage