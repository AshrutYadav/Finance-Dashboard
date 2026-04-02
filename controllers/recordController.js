const Record = require('../models/Record');

exports.createRecord = async (req, res) => {
  try {
    const { amount, type } = req.body;

    if (!amount || !type) {
      return res.status(400).json({ message: "Amount and type required" });
    }

    const record = await Record.create(req.body);
    res.json(record);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.getRecords = async (req, res) => {
  try {
    const filter = {};

    if (req.query.type) filter.type = req.query.type;
    if (req.query.category) filter.category = req.query.category;


    if (req.query.startDate && req.query.endDate) {
      filter.date = {
        $gte: new Date(req.query.startDate),
        $lte: new Date(req.query.endDate)
      };
    }

    const records = await Record.find(filter);
    res.json(records);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};



exports.updateRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json(record);

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


exports.deleteRecord = async (req, res) => {
  try {
    const record = await Record.findByIdAndDelete(req.params.id);

    if (!record) {
      return res.status(404).json({ message: "Record not found" });
    }

    res.json({ message: "Deleted successfully" });

  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};