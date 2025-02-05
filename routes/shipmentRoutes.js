const express = require('express');
const router = express.Router();
const shipmentController = require('../controllers/shipmentController');

// Define API endpoints
router.get('/shipments', shipmentController.getAllShipments);
router.post('/shipment', shipmentController.createShipment);
router.patch('/shipment/:id/update-location', shipmentController.updateShipmentLocation);


module.exports = router;