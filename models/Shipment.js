const mongoose = require('mongoose');

const ShipmentSchema = new mongoose.Schema({
  shipmentId: { type: String, required: true, unique: true },
  containerId: { type: String, required: true },
  route: [{ type: String }],
  currentLocation: { type: String, required: true },
  status: { type: String, enum: ['In Transit', 'Delivered', 'Delayed'], default: 'In Transit' },
  eta: { type: Date, required: true },
});

module.exports = mongoose.model('Shipment', ShipmentSchema);