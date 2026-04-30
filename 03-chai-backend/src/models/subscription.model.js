import mongoose, { model, Schema } from "mongoose";

const subscriptionSchema = new Schema({
    subscriber: {
        type: Schema.Types.ObjectId,  // one who is subscribing
        Reference: "User"
    },
    channel: {
        type: Schema.Types.ObjectId,  // one who to whom 'subscriber' is subscribing
        Reference: "User" 
    }
}, { timestamps: true });

export const Subscription = mongoose.model("Subscription", subscriptionSchema)


