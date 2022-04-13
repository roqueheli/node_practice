const mongoose = require('mongoose');
const mongooseDelete = require('mongoose-delete');

const TracksSchema = new mongoose.Schema(
    {
        name: { type: String },
        album: { type: String },
        cover: { type: String },
        artist: {
            name: { type: String },
            nickname: { type: String },
            nationality: { type: String },
        },
        duration: {
            start: { type: Number },
            end: { type: Number }
        },
        mediaId: { type: mongoose.Types.ObjectId }
    },
    {
        timestamps: true, //createdAt, updatedAt
        versionKey: false
    }
);

// TracksSchema.statics.findAllData = function () {
//     const joinData = this.aggregate([
//         {
//             $lookup: {
//                 from: 'storages',
//                 localField: 'mediaId',
//                 foreignField: '_id',
//                 as: 'audio'
//             },
//         },
//         // {
//         //     $unwind: '$audio'
//         // }
//     ]);
//     return joinData;
// }

TracksSchema.plugin(mongooseDelete, { overrideMethod: "all" });
module.exports = mongoose.model('tracks', TracksSchema);