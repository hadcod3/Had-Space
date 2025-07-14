import { Document, Schema, model, models } from "mongoose";

export interface IUiTemplate extends Document {
    _id: string;
    idx: string;
    cat: string;
    price: number;
    thumbImgUrl: string; // image lite version
    hdImgUrl: string;
}

const UiTemplateSchema = new Schema({
    idx: { type: String, required: true },
    cat: { type: String, required: true },
    price: { type: Number, required: true },
    thumbImgUrl: { type: String, required: true },
    hdImgUrl: { type: String, required: true },
})

const UiTemplate = models.UiTemplate || model('UiTemplate', UiTemplateSchema);

export default UiTemplate