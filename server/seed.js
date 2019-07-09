const db = require('../database/index.js');


/** ****************************************************** */
// ///////// Sample Properties /////////////////////////////
/** ****************************************************** */

const adjectives = ['Not Your Average ', 'Super Soft ', "Sportsman's ", 'Down to the Wire ', 'City Sweat ', 'Metal Vent ', 'Basic ', 'Fancy ', 'Dryfit ', 'Heavy ', 'Extra Fun ', 'Happy '];

const itemTypes = ['Pants', 'Shirt', 'Tank-top', 'Jacket', 'Sweatshirt', 'Shorts', 'Yoga Mat', 'Button Down Shirt', 'Underwear', 'Hat'];

const descriptions = [
  'Pellentesque adipiscing commodo elit at imperdiet dui accumsan sit amet.', 'Id porta nibh venenatis cras sed.', 'Imperdiet dui accumsan sit amet. Porttitor eget dolor morbi non arcu risus quis varius quam.', 'Diam phasellus vestibulum lorem sed risus ultricies tristique nulla.', 'Sociis natoque penatibus et magnis dis parturient montes.', 'Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices.', 'In egestas erat imperdiet sed euismod nisi porta.', 'Duis tristique sollicitudin nibh sit.', 'Quam viverra orci sagittis eu volutpat odio facilisis mauris sit.', 'Proin libero nunc consequat interdum varius sit amet mattis vulputate.', 'Viverra justo nec ultrices dui sapien eget mi proin sed.', 'Et egestas quis ipsum suspendisse ultrices.', 'Augue ut lectus arcu bibendum at varius vel pharetra vel.', 'Orci phasellus egestas tellus rutrum tellus.', 'Ultrices eros in cursus turpis massa tincidunt dui.', 'Egestas erat imperdiet sed euismod.', 'Feugiat nisl pretium fusce id velit ut tortor pretium viverra.', 'Aliquet lectus proin nibh nisl condimentum.',
];

const fabrics = ['Wool', 'Calico', 'Silk', 'Camel Hair', 'Hemp', 'Canvas', 'Cashmere', 'Linen', 'Velvet'];

const care = ['Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean', 'Imported', 'Wash with like colors'];

const designedFor = ['Office', 'Travel', 'Commute'];

const fit = ['Relaxed fit', 'Hip Length'];

// sizes: array of nums
const sizes = [0, 2, 4, 6, 8];

// colors: array of colors
const colors = ['White', 'Black', 'Blue', 'Red', 'Green'];

/** **************************************************************************** */
// ///////////////////// Generate Items ////////////////////////////////////////
/** ************************************************************************** */

// //////////// Helper Functions //////////////////

const getRandomIndex = length => Math.floor(Math.random() * length);

const getNRandomElements = (arr, n) => {
  const _arr = [...arr];
  return [...Array(n)].map(() => _arr.splice(Math.floor(Math.random() * _arr.length), 1)[0]);
};

// getNRandomElements(fabrics, 3);

const generateItemName = () => {
  let itemName = '';

  itemName += adjectives[getRandomIndex(adjectives.length)];
  itemName += itemTypes[getRandomIndex(itemTypes.length)];

  return itemName;
};

// ////////// Item Generator ////////////////////

const generateNewItem = id => ({
  item_id: id,
  name: generateItemName(),
  description: descriptions[getRandomIndex(descriptions.length)],
  stock: getRandomIndex(15),
  fabric: fabrics[getRandomIndex(fabrics.length)],
  care: getNRandomElements(care, 3),
  designedFor: designedFor[getRandomIndex(designedFor.length)],
  fit: fit[getRandomIndex(fit.length)],
  sizes: getNRandomElements(sizes, 3),
  colors: getNRandomElements(colors, 3),
});

/** ********************************************************************* */
// ////////////////////// Seed Database //////////////////////////////////
/** ******************************************************************** */

const seed = () => {
  for (let i = 0; i <= 100; i++) {
    const item = generateNewItem(i);
    const q = 'INSERT INTO items SET ?';
    const post = {
      name: item.name,
      description: item.description,
      stock: item.stock,
      fabric: item.fabric,
      care: JSON.stringify(item.care),
      designed_for: item.designedFor,
      fit: item.fit,
      sizes: JSON.stringify(item.sizes),
      colors: JSON.stringify(item.colors),
    };

    db.connection.query(q, post, (err, results) => {
      if (err) {
        throw err;
      } else {
        console.log(results);
      }
    });
  }
};

seed();

module.exports = {
  seed,
  getNRandomElements,
};
