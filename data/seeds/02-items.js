

exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex("items").insert([
        {id: 1, item_name: "Hand-woven Baskets",location: "Village of ABC",quantity: 12,price: 10.50, image_url: "https://media.istockphoto.com/photos/colorful-african-wicker-baskets-picture-id951308998?k=6&m=951308998&s=612x612&w=0&h=yifmyS8JthPBmmT75PzjzOO3rTq2G8sQV0U0T9ylrDs=",description:  "These baskets are hand-woven with care by the local village of ABC.  Each one is crafted carefully with unique designs and colors.",user_id: 1},
        {id: 2, item_name: "Dyed Textiles",location: "Village of X",quantity: 6,price: 20.75, image_url: 'https://cdn.shopify.com/s/files/1/2537/3434/files/The_Naming_Ceremony_of_Aiyana_4_large.png?v=1587500965', description:  "These fantastically dyed textiles are made from organic cotton.",user_id: 1},
      ])
    });
};