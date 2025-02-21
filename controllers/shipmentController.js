const Shipment = require('../models/Shipment');

// Get all shipments
exports.getAllShipments = async (req, res) => {
  try {
      const shipments = await Shipment.find();
      res.json(shipments);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Get a specific shipment by ID
exports.getShipmentById = async (req, res) => {
  try {
      const shipment = await Shipment.findById(req.params.id);
      if (!shipment) return res.status(404).json({ message: 'Shipment not found' });
      res.json(shipment);
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};

// Create a new shipment
exports.createShipment = async (req, res) => {
  try {
      const newShipment = new Shipment(req.body);
      await newShipment.save();
      res.status(201).json(newShipment);
  } catch (error) {
      res.status(400).json({ message: error.message });
  }
};

// Update shipment location
exports.updateShipmentLocation = async (req, res) => {
    try {
      const { id } = req.params;
      const { currentLocation } = req.body;
  
      if (!currentLocation) {
        return res.status(400).json({ message: 'Current location is required' });
      }
  
      const updatedShipment = await Shipment.findByIdAndUpdate(
        id,
        { currentLocation },
        { new: true }
      );
  
      if (!updatedShipment) {
        return res.status(404).json({ message: 'Shipment not found' });
      }
  
      res.status(200).json(updatedShipment);
    } catch (error) {
      console.error('Error updating location:', error);
      res.status(500).json({ message: 'Server error' });
    }
  };
