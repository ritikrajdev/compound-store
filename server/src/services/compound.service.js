const { NotFoundError } = require('../errors');
const db = require('../models');

async function getAllCompounds() {
  return await db.compounds.findAll();
}

async function createCompound(compoundName, compoundDescription, compoundImageUrl) {
  return await db.compounds.create({
    compoundName,
    compoundDescription,
    compoundImageUrl
  });
}

async function getCompoundById(compoundId) {
  const compound = await db.compounds.findByPk(compoundId);
  if (!compound) {
    throw new NotFoundError('compound not found');
  }
  return compound;
}

async function updateCompound(compoundId, compoundName, compoundDescription, compoundImageUrl) {
  const compound = await db.compounds.findByPk(compoundId);
  if (!compound) {
    throw new NotFoundError('compound not found');
  }
  return await compound.update({
    compoundName,
    compoundDescription,
    compoundImageUrl
  });
}

async function deleteCompound(compoundId) {
  const compound = await db.compounds.findByPk(compoundId);
  if (!compound) {
    throw new NotFoundError('compound not found');
  }
  await compound.destroy();
  return compound;
}

module.exports = {
  getAllCompounds,
  createCompound,
  getCompoundById,
  updateCompound,
  deleteCompound
};