const Repair = require('../models/repairs.model');
const User = require('../models/user.model');
const AppError = require('../utils/appError');

exports.validRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;
  const repair = await Repair.findOne({
    where: {
      id,
      status: 'pending',
    },
    include: [
      {
        model: User,
      },
    ],
  });

  if (!repair) {
    return next(new AppError(`Repair with id: ${id} not found`, 404));
  }

  req.user = repair.user;
  req.repair = repair;
  next();
});
