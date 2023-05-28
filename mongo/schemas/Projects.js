const mongoose = require('mongoose');
const { Schema } = mongoose;

const projectsSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    members: [{
        name: {
            type: String,
            required: true
        },
        avatarUrl: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        }
    }],
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }]
})

const Projects = mongoose.model('Projects', projectsSchema);
module.exports = Projects