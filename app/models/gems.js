const mongoose = require('mongoose')

const GemSchema = new mongoose.Schema(
	{
		title: {
			type: String,
			required: true,
		},
		color: {
			type: String,
			required: true,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{
		timestamps: true,
	}
)

module.exports = mongoose.model('Gem',GemSchema)
