const Services = require("../models/services");

async function getServices() {
  const services = await Services.find();
  return services;
}

async function getService(params) {
  const service = await Services.findById(params); // Находим объект по ID
  return service;
}

async function postService({ description, price, startDate, endDate }) {
  const newService = await Services.create({
    description,
    price,
    startDate,
    endDate,
  });
  return newService;
}

async function deleteService(id) {
  await Services.deleteOne({ _id: id });
}

async function updateService(data, params) {
  await Services.updateOne(
    { _id: params }, // Используем _id вместо id
    { $set: data }
  );
  const newService = await Services.findById(params);

  return newService;
}

module.exports = {
  getServices,
  getService,
  postService,
  deleteService,
  updateService,
};
