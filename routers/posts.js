const express = require('express');
const router = express.Router();
const postsController = require('../controller/postsController');

//index
router.get('/', postsController.index)

//store
router.post('/create', postsController.store);

//destroy
router.delete("/:slug", postsController.destroy)

module.exports = router;