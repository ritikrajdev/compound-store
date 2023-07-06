const compoundService = require('../services/compound.service');

async function getAllCompounds(req, res, next) {
  try {
    const allCompounds = await compoundService.getAllCompounds();
    res.json(allCompounds);
  } catch (err) {
    next(err);
  }
}

async function createCompound(req, res, next) {
  try {
    const {compoundName, compoundDescription, compoundImageUrl} = req.body;
    const compound = await compoundService.createCompound(compoundName, compoundDescription, compoundImageUrl);
    res.status(201).json(compound);
  } catch (err) {
    next(err);
  }
}

async function getCompoundById(req, res, next) {
  try {
    const {compoundId} = req.params;
    const compound = await compoundService.getCompoundById(compoundId);
    res.json(compound);
  } catch (err) {
    next(err);
  }
}

async function updateCompound(req, res, next) {
  try {
    const {compoundId} = req.params;
    const {compoundName, compoundDescription, compoundImageUrl} = req.body;
    const compound = await compoundService.updateCompound(compoundId, compoundName, compoundDescription, compoundImageUrl);
    res.json(compound);
  } catch (err) {
    next(err);
  }
}

async function deleteCompound(req, res, next) {
  try {
    const {compoundId} = req.params;
    await compoundService.deleteCompound(compoundId);
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
}

module.exports = {
  getAllCompounds,
  createCompound,
  getCompoundById,
  updateCompound,
  deleteCompound
};