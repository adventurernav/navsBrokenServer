const router = require('express').Router()
const validateSession = require('../middleware/validateSession')
const Item = require('../db').import('../models/itemModel')

/**************************************
 ********* GET ITEMS OF WiSHLiST *********
************************************ */
router.get('/', (req,res) => {
    Item.findAll({
        where: {userId: userid},
        order: [['updatedAt', 'DESC']]
    })
    .then(items => res.status(200).json(items))
    .catch(err => res.status(500).json({message: 'Could not get items. Please try again.', error: err}))
})
/**************************************
 ********* NEW ITEM *********
************************************ */
router.post('/', (req,res) => {
    const item = {
        itemName: req.body.itemName,
        url: req.body.url,
        userId: req.user.id
    }
    Item.create(item)
    .then(item => res.status(200).json({message: 'Successfully created new item', item: item}))
    .catch(err => res.status(500).json({message: 'Your item was not created. Please try again.', error: err}))

})

/**************************************
 ********* UPDATE ITEM *********
************************************ */
router.put('/:itemId', (req,res) => {
    const updateItem = {
        itemName: req.body.itemName,
        url: req.body.url,
    }
    const query = {
        where: {
            id: req.params.itemId, 
        }
    };
    Item.update(updateItem, query)
    .then((itemsUpdated) => res.status(200).json({message: 'Update was successful', NumberOfItemsUpdated: itemsUpdated})) 
    .catch((err) => res.status(500).json({message: 'Update Failed',error: err})
);
});


/**************************************
 ********* DELETE ITEM *********
************************************ */

router.delete('/:id', (req,res) => {
    const thisItem = {where: {
        id: req.params.id
    }}
    Item.findOne(thisItem)
    .then((results,err)=> {
        if (results){
            Item.destroy(thisItem)
            .then(()=> res.status(200).json({message: 'Your item was sucessfully deleted.'}))
            .catch((err)=> res.status(500).json({message: 'Something went wrong. Please try again.', error:err}))
            ;
        }  else {
            res.status(500).json({message: 'No item detected'})
        }
        if(err){
            console.log(err);
        }
    }) .catch((err) => res.status(500).json({message:'Cannot find your information.', error: err}))
})

module.exports = router;