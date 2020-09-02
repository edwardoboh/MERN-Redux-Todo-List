const express = require('express');

const router = express.Router();

const Item = require('../../models/Item');

// @route GET api/items
// @desc Get All Items
// @access Public
router.get('/', (req, res) => {
    Item.find()
        .sort({date: -1})
        .then(items => res.json(items))
});

// @route POST api/items
// @desc Create an item through POST
// @access Public
router.post('/', (req, res) => {
    const new_item = new Item({
        name: req.body.name
    });

    new_item.save()
        .then(item => res.json(item));
});

// @route DELETE api/items/:id
// @desc Deletes an item through DELETE
// @access Public
router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
        .then(item => item.remove().then(() => res.json({success: true})))
        .catch(err => res.status(404).json({success: false}));
});

module.exports = router;
