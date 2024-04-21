
// const mongoose = require("mongoose");

// const TaskSchema = mongoose.Schema({
//     title: {
//         type: String,
//         required: true
//     },
//     description: {
//         type: String,
//         required: true
//     },
//     assignedTo: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "User",
//         required: true
//     },
//     status: {
//         type: String,
//         enum: ["Pending", "InProgress", "Completed"],
//         default: "Pending"
//     }
// }, { timestamps: true });

// module.exports = mongoose.model("Task", TaskSchema);



const mongoose = require("mongoose");

const NoteSchema = mongoose.Schema({

    title : {
        type : String,
        required: true
    },
    description : {
        type:String,
        required : true
    },
    userId : {
        type :mongoose.Schema.Types.ObjectId,
        ref: "User",
        required : true
    }
      
    
}, {timestamps : true});

module.exports = mongoose.model("Note", NoteSchema);