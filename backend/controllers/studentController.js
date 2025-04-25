const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.getStudentById = async (req, res) => {
  const student = await Student.findById(req.params.id);
  if (!student) return res.status(404).json({ error: 'Student not found' });
  res.json(student);
};

exports.updateStudent = async (req, res) => {
  const student = await Student.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(student);
};

exports.deleteStudent = async (req, res) => {
  await Student.findByIdAndDelete(req.params.id);
  res.json({ message: 'Student deleted' });
};
