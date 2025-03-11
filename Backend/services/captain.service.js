const captainModel = require('../models/captain.model');

module.exports.createCaptain = async ({
  firstname,
  lastname,
  email,
  password,
  color,
  platenumber,
  capacity,
  vehicleType,
}) => {
  if (
    !firstname ||
    !email ||
    !password ||
    !color ||
    !platenumber ||
    !capacity ||
    !vehicleType
  ) {
    throw new Error('All fields are required');
  }
  const captain = await captainModel.create({
    fullname: {
      firstname: firstname,
      lastname: lastname,
    },
    email,
    password,
    vehicle: {
      color,
      platenumber,
      capacity,
      vehicleType,
    },
  });
  return captain;
};
