// const knex = require('knex');
// const config = require('../../knexfile.js');
// const db = knex(config.development);

const db = require("../../data/db-config")

module.exports = {
  find,
  findById,
//   findBy,
  add,
  remove,
  update,
//   findItems,
};

function find(){
    console.log("in the find")
	return db("items")
		.select("*")
}

function findById(id) {
    console.log("in the findById")
  return db('items')
    .where({ id })
    .first();
}

// function findBy(filter){
// 	console.log(filter)
// 	return db("users")
// 		.select("*")
// 		.where(filter)
// }

async function add(item) {
    console.log("in the add", item)
//   const [id] = await db('items').insert(item); // TEST BELOW
  const [id] = await db('items').insert(item).returning('id');
  return findById(id);
}

function remove(id) {
    console.log("in the remove")
  return db('items')
    .where({ id })
    .del();
}

function update(id, changes) {
    console.log("in the update")
  return db('items')
    .where({ id })
    .update(changes, '*');
}

// function findItems(userId) { // HELP
//   return db('items as i')
//     .join( 'users as u', 'u.id', 'i.user_id')
//     .select('i.id', 'i.item_name', 'i.quantity', 'i.price', 'i.description', 'u.id as user_id', 'u.username as user_name')
//     .where({ 'i.user_id': userId });
// }
