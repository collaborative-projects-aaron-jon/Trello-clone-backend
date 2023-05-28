const mongoose = require("mongoose");
const { Schema } = mongoose;

const tasksSchema = new Schema({
    projectId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Projects'
    },
	status: {
		type: String,
		enum: ["TODO", "DOING", "DONE"],
        required: true,
        default: 'TODO'
	},
	comments: [
		{
			author: {
				type: String,
				required: true
			},
            avatarUrl: {
                type: String,
                required: true
            },
			comment: {
				type: String,
				required: true
			}
		}
	],
    assignedTo: String,
    assigneeAvatarUrl: String,
    isCompleted: {
        type: Boolean,
        required: true,
        default: false
    },
    tagColor: {
        type: String,
        enum: ['NONE', 'RED', 'BLUE', 'PURPLE', 'YELLOW', 'ORANGE', 'GREEN']
    }
});

const Tasks = mongoose.model("Tasks", cardsSchema);
module.exports = Tasks;
