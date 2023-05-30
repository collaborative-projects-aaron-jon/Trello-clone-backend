const mongoose = require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid')

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
        email: {
            type: String,
            required: true
        }
    }],
    inviteCode: {
        type: Schema.Types.UUID,
        default: uuidv4()
    },
    tasks: [{ type: Schema.Types.ObjectId, ref: 'Tasks' }]
})

const Projects = mongoose.model('Projects', projectsSchema);
module.exports = Projects