const express = require('express');

const repairsController = require('../controllers/repairs.controllers');

const router = express.Router();

router
  .route('/')
  .get(repairsController.findRepairs)
  .post(repairsController.createRepair);

router
  .route('/:id')
  .get(repairsController.findRepairById)
  .patch(repairsController.updateRepair)
  .delete(repairsController.deleteRepair);

module.exports = router;
