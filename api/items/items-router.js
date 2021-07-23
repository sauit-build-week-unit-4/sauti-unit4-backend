const router = require("express").Router();
const Item = require("./items-model.js");


// module.exports = {
//     find,
//     findById,
//   //   findBy,
//     add,
//     remove,
//     update,
//     findItems,
//   };



router.get('/', (req, res) => {
    console.log("in the router.get")
    Item.find(req.query)
      .then(items => {
        // console.log("in the then, log items", items)
        res.status(200).json(items);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error retrieving the items',
        });
      });
}); // return an array of all items - THIS WORKS
  


router.get('/:id', (req, res) => {
    console.log("in the items router.get by id", req.params.id)
Item.findById(req.params.id)
    .then(item => {
    if (item) {
        res.status(200).json(item);
    } else {
        res.status(404).json({ message: 'Item not found' });
    }
    })
    .catch(error => {
    console.log(error);
    res.status(500).json({
        message: 'Error retrieving the item',
    });
    });
});  // return the item object with the matching id (working)
  
//   router.get('/:id/items', (req, res) => {
//     Item.findItems(req.params.id)
//       .then(items => {
//         if (items.length > 0) {
//           res.status(200).json(items);
//         } else {
//           res.status(404).json({ message: 'No items for this id' });
//         }
//       })
//       .catch(error => {
//         console.log(error);
//         res.status(500).json({
//           message: 'Error retrieving the items for this id',
//         });
//       });
//   });
  
  router.post('/', (req, res) => {
    console.log("in the items router.post. Log req.body", req.body)
    Item.add(req.body)
      .then(item => {
        res.status(201).json(item);
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error adding the item',
        });
      });
  }); // return the added item object
  
  router.delete('/:id', (req, res) => {
    console.log("in the items router.delete. Log req.params.id", req.params.id)

    Item.remove(req.params.id)
      .then(count => {
        if (count > 0) {
          res.status(200).json({ message: 'The item has been deleted' });
        } else {
          res.status(404).json({ message: 'The item could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error removing the item',
        });
      });
  }); // returns delete message
  
  router.put('/:id', (req, res) => {
    console.log("in the items router.put. Log req.params.id", req.params.id)
    console.log("in the items router.put. Log req.body", req.body)

    const changes = req.body;
    Item.update(req.params.id, changes)
      .then(item => {
        if (item) {
          res.status(200).json(item);
        } else {
          res.status(404).json({ message: 'The item could not be found' });
        }
      })
      .catch(error => {
        console.log(error);
        res.status(500).json({
          message: 'Error updating the item',
        });
      });
  }); // returns item object
  
  module.exports = router