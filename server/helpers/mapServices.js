module.exports = function (services) {
  return {
    id: services._id,
    description: services.description,
    price: services.price,
    startDate: services.startDate,
    endDate: services.endDate,
  };
};
