const Repairs = require('../models/repairs.model');

exports.findRepairs = async (req, res) => {
  try {
    const repairs = await Repairs.findAll({
      where: { status: 'pending' },
    });

    res.status(200).json({
      message: 'Repairs found',
      results: repairs.length,
      repairs,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};

exports.findRepairById = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repairs.findOne({
      where: { id, status: 'pending' },
    });

    if (!repair) {
      return res.status(404).json({
        message: 'Repair not found',
        status: 'error',
      });
    }

    res.status(200).json({
      message: 'Repair found successfully',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};

exports.createRepair = async (req, res) => {
  try {
    const { id } = req.params;
    const { date } = req.body;

    const repair = await Repairs.create({
      date,
      userId: id,
    });

    return res.status(200).json({
      message: 'Repairs created successfully',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};

exports.updateRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repairs.findOne({
      where: { id },
      status: 'pending',
    });

    if (!repair) {
      return res.status(404).json({
        message: 'Repair not found',
        status: 'error',
      });
    }

    await repair.update({
      status: 'completed',
    });

    res.status(200).json({
      message: 'Repair updated',
      repair,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};

exports.deleteRepair = async (req, res) => {
  try {
    const { id } = req.params;

    const repair = await Repairs.findOne({
      where: { id },
      status: 'pending',
    });

    if (!repair) {
      return res.status(404).json({
        message: 'Repair not found',
        status: 'error',
      });
    }

    await repair.update({
      status: 'cancelled',
    });

    res.status(200).json({
      message: 'Repair deleted',
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'something went wrong',
      status: 'fail',
    });
  }
};
