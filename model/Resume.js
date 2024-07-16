import mongoose from 'mongoose';

const experienceSchema = new mongoose.Schema({
    title: { type: String },
    companyName: { type: String },
    city: { type: String },
    state: { type: String },
    startDate: { type: String },
    endDate: { type: String, default: '' },
    currentlyWorking: { type: Boolean, default: false },
    workSummary: { type: String }
});

const educationSchema = new mongoose.Schema({
    universityName: { type: String },
    startDate: { type: String },
    endDate: { type: String },
    degree: { type: String },
    major: { type: String },
    description: { type: String }
});

const skillsSchema = new mongoose.Schema({
    name: { type: String },
    rating: { type: Number }
});

const resumeSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    firstName: { type: String, },
    lastName: { type: String, },
    jobTitle: { type: String, },
    address: { type: String, },
    phone: { type: String, },
    email: { type: String, },
    themeColor: { type: String, },
    summary: { type: String, },
    experience: [experienceSchema],
    education: [educationSchema],
    skills: [skillsSchema],
    createdAt: { type: Date, default: Date.now }
});

const Resume = mongoose.model('Resume', resumeSchema);

export default Resume;
