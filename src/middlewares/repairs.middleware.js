const Repair = require('../models/repairs.model');
const AppError = require('../utils/appError');

exports.validRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
  });

  if (!repair) {
    return next(new AppError(`Repair with id: ${id} not found`, 404));
  }

  req.repair = repair;
  next();
});
