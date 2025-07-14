import { Document, Schema, model, models } from "mongoose";

export interface IProject extends Document {
    _id: string;
    posterImgUrl: string;
    thumbImgUrl: string;
    title: string;
    price: number;
    desc: string;
    included: string[];
    features: string[];
    liveLink: string;
    purchaseLink: string;
    playlistLink: string;
}

const ProjectSchema = new Schema({
    posterImgUrl: { type: String, required: true },
    thumbImgUrl: { type: String, required: true },
    title: { type: String, required: true },
    price: { type: Number, required: true },
    desc: { type: String, required: true },
    included: { type: [String], required: true },
    features: { type: [String], required: true },
    liveLink: { type: String, required: true },
    purchaseLink: { type: String, required: true },
    playlistLink: { type: String, required: true },
})

const Project = models.Project || model('Project', ProjectSchema);

export default Project