const mongoose = require('mongoose');
const { Schema } = mongoose;
const { v4: uuidv4 } = require('uuid');

const projectsSchema = new Schema({
	name: {
		type: String,
		required: true
	},
	members: {
		type: Array,
		of: {
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
		}
	},
	inviteCode: {
		type: Schema.Types.UUID,
		default: uuidv4()
	},
	tasks: {
		type: Array,
		of: {
			name: {
				type: String,
				required: true
			},
			projectId: {
				type: mongoose.Schema.Types.ObjectId,
				ref: "Projects"
			},
			status: {
				type: String,
				enum: ["TODO", "DOING", "DONE"],
				required: true,
				default: "TODO"
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
				enum: ["NONE", "RED", "BLUE", "PURPLE", "YELLOW", "ORANGE", "GREEN"]
			}
		}
	}
});

const Projects = mongoose.model('Projects', projectsSchema);
module.exports = Projects