const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    hub: { 
        type: String, 
        enum: ['Coding Academy', 'AI Hub', 'Computer Learning Center', 'Innovation Lab'],
        required: true
    },
    level: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced'] },
    durationHours: { type: Number },
    modules: [{
        moduleTitle: String,
        videoUrl: String,
        resources: [String]
    }],
    createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Course', courseSchema);
