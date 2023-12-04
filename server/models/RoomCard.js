import { Schema, model } from "mongoose";

const RoomCardSchema = new Schema({
    title :{
        type: String,
        required:true
    },
    description :{
        type: String,
        required: true
    },
    price :{
        type: Number,
        required: true
    },
    type:{
        type: String,
        required: true
    },
    candidate :{
        type: String,
        required: true
    },
    stars : {
        type: String,
        required: true
    },
    image : {
        type: String,
        required: true
    }
},{
    timestamps: true,
});

const RoomCard = model('RoomCard', RoomCardSchema);
export default  RoomCard;