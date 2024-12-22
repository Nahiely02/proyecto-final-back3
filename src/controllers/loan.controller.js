const Loan = require('../models/loan.model');

exports.getAllLoans = async (req, res) => {
  try {
    const loans = await Loan.find();
    res.status(200).json(loans);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.createLoan = async (req, res) => {
  try {
    const loan = new Loan(req.body);
    await loan.save();
    res.status(201).json({ message: 'Préstamo realizado exitosamente' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
