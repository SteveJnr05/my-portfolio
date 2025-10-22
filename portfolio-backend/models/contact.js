import mongoose from "mongoose";

const ContactSchema = new mongoose.Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    subject: {type: String, default: ""},
    message: {type: String, required: true},
    read: {type: Boolean, default: false}
},
{
    timestamps: true
}
);

const Contact = mongoose.model("Contact", ContactSchema)
export default Contact;