const Shipment = require('../models/Shipment');

// Get all shipments
exports.getAllShipments = async (req, res) => {
  try {
    const shipments = await Shipment.find();
    res.status(200).json(shipments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create a new shipment
exports.createShipment = async (req, res) => {
  try {
    const { shipmentId, containerId, route, currentLocation, eta } = req.body;
    const shipment = new Shipment({ shipmentId, containerId, route, currentLocation, eta });
    await shipment.save();
    res.status(201).json(shipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update shipment location
exports.updateShipmentLocation = async (req, res) => {
  try {
    const { currentLocation } = req.body;
    const shipment = await Shipment.findByIdAndUpdate(
      req.params.id,
      { currentLocation },
      { new: true }
    );
    if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
    res.status(200).json(shipment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};