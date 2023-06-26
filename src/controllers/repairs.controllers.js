const Repairs = require('../models/repairs.model');
const User = require('../models/user.model');
const catchAsync = require('../utils/catchAsync');

exports.findRepairs = catchAsync(async (req, res, next) => {
  const repairs = await Repairs.findAll({
    where: { status: 'pending' },
    include: [
      {
        model: User,
      },
    ],
  });

  res.status(200).json({
    message: 'Repairs found',
    results: repairs.length,
    repairs,
  });
});

exports.findRepairById = catchAsync(async (req, res, next) => {
  const { repair } = req;

  res.status(200).json({
    message: 'Repair found successfully',
    repair,
  });
});

exports.createRepair = catchAsync(async (req, res, next) => {
  const { date, userId, motorsNumber, description } = req.body;
  const { id } = req.sessionUser;

  const repair = await Repairs.create({
    date,
    userId: id,
    motorsNumber,
    description,
  });

  return res.status(200).json({
    message: 'Repairs created successfully',
    repair,
  });
});

exports.updateRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({
    status: 'completed',
  });

  res.status(200).json({
    message: 'Repair updated',
    repair,
  });
});

exports.deleteRepair = catchAsync(async (req, res, next) => {
  const { repair } = req;

  await repair.update({
    status: 'cancelled',
  });

  res.status(200).json({
    message: 'Repair deleted',
  });
});
