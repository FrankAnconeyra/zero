const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Listado de clientes');
});

module.exports = router;
