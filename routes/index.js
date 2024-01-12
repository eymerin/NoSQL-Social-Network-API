const apiRoutes = require('./api-routes');
const router = require('express').Router(); 
router.use('/api',apiRoutes);
router.use((req, res)=>{
    return res.status(404).send('Not found');
});

module.exports = router;