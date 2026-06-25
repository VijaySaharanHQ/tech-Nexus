const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    category: { 
        type: String, 
        enum: ['Class Notes', 'Question Bank', 'Source Code', 'Project Template'],
        required: true
    },
    targetAudience: { type: String }, // e.g., "Class 10", "Web Developers"
    downloadUrl: { type: String, required: true }, // Link to the PDF or ZIP file
    uploadedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Resource', resourceSchema);
