const { Router } = require('express');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');
const pokemon_router = require('./pokemon');
const type_router = require("./type");



const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);
router.use('/pokemon', pokemon_router);

router.use('/type', type_router);

module.exports = router;
