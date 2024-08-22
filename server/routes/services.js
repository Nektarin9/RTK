const express = require("express");
const {
  getServices,
  getService,
  postService,
  deleteService,
  updateService,
} = require("../controller/services");
const mapServices = require("../helpers/mapServices");
const { describe } = require("yargs");

const router = express.Router({ mergeParams: true });

router.get("/", async (req, res) => {
  const services = await getServices();
  res.send(services.map((item) => mapServices(item)));
});

router.get("/:id", async (req, res) => {
  try {
    const service = await getService(req.params.id);
    res.send(mapServices(service));
  } catch {
    res.send({ error: true });
  }
});

router.post("/", async (req, res) => {
  try {
    const newService = await postService(req.body);
    res.send(mapServices(newService));
  } catch {
    res.send({ error: true });
  }
});

router.delete("/:id", async (req, res) => {
  try {
    await deleteService(req.params.id);
    res.send(req.params.id);
  } catch {
    res.send({ error: true });
  }
});

router.patch("/:id", async (req, res) => {
  try {
    const service = await updateService(req.body, req.params.id);
    res.send(mapServices(service));
  } catch {
    res.send({ error: true });
  }
});

module.exports = router;
