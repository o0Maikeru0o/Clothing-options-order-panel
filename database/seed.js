/* eslint-disable no-await-in-loop */
const faker = require('faker');
const fs = require('fs');
const json2csv = require('json2csv');
const { Client } = require('@elastic/elasticsearch');

// Postgres connection
const knex = require('knex')({
  client: 'pg',
  connection: {
    host: 'localhost',
    user: 'maikeru',
    password: 'SDCpostgres',
    database: 'item_summary',
  },
});

// Elastic connection
const client = new Client({
  node: 'http://localhost:9200',
  log: 'trace',
});

// Options arrays
const care = ['Machine wash cold', 'Do not bleach', 'Tumble dry low', 'Do not iron', 'Do not dry clean', 'Imported', 'Wash with like colors'];
const designedFor = ['Office', 'Travel', 'Commute', 'Exercise'];
const fit = ['Relaxed fit', 'Hip Length', 'Slim Fit'];
const adj1 = ['Powerful', 'Medical', 'Acceptable', 'Interesting', 'Nice', 'Additional', 'Eastern', 'Unusual', 'Electronic', 'Aware', 'Educational', 'Used', 'Accurate', 'Severe', 'Serious', 'Substantial', 'Conscious', 'Obvious', 'Odd', 'Psychological', 'Reasonable', 'Actual', 'Large', 'Civil', 'Unfair', 'Consistent', 'Wonderful', 'Entire', 'Practical', 'Historical', 'Numerous', 'Nervous', 'Mad', 'Comprehensive', 'Various', 'Inner', 'Efficient', 'Sufficient', 'Huge', 'Successful', 'Popular', 'Obviously', 'Technical', 'Financial', 'Desperate', 'Emotional', 'Wooden', 'Existing', 'Political', 'Immediate', 'Remarkable', 'Traditional', 'Different', 'Aggressive', 'Electrical', 'Strong', 'Competitive', 'Mental', 'Critical', 'Legal', 'Logical', 'Embarrassed', 'Anxious', 'Basic', 'Lonely', 'Confident'];
const adj2 = ['Evil', 'Fortunate', 'Steady', 'Grotesque', 'Strong', 'Agreeable', 'Honorable', 'Obliging', 'Judgmental', 'Shivering', 'Separate', 'Worthy', 'Open', 'Idiotic', 'Distinct', 'Rash', 'Furtive', 'Loutish', 'Stylish', 'Maddening', 'Nappy', 'Fixed', 'Secretive', 'Marked', 'Morose', 'Naive', 'Decisive', 'Statuesque', 'Frizzy', 'Internal', 'Helpless', 'Greedy', 'Pensive', 'Imperfect', 'Nasty', 'Gifted', 'Offbeat', 'Vapid', 'Informal', 'Second', 'Overdue', 'Chic', 'Elderly', 'Makeshift', 'Hulking', 'Unsung', 'Bowed', 'Annual', 'Inborn', 'Flowery', 'Quiet', 'Draconian', 'Groggy', 'Bossy', 'Overt', 'Joyous', 'Drafty', 'Ill', 'Sassy', 'Diligent', 'Downright', 'Scarce', 'Artistic', 'Adjoining', 'Neighborly', 'Absorbing', 'Pesky'];
const silly = ['Hullabaloo', 'Squeegee', 'Pickle', 'Mugwump', 'Nambypamby', 'Rigmarole', 'Shenanigan', 'Gazump', 'Waddle'];
const clothing = ['Abaya ', 'Anorak', 'Apparel', 'Apron', 'Ascot', 'Attire', 'Balaclava', 'Ball Gown', 'Bandanna', 'Baseball Cap', 'Bathing Suit', 'Battledress', 'Beanie', 'Bedclothes', 'Bell-Bottoms', 'Belt', 'Beret', 'Bermuda Shorts', 'Bib', 'Bikini', 'Blazer', 'Bloomers', 'Blouse', 'Boa', 'Bonnet', 'Boot', 'Bow', 'Bow Tie', 'Boxer Shorts', 'Boxers', 'Bra', 'Bracelet', 'Brassiere', 'Breeches', 'Briefs', 'Buckle', 'Button', 'Button-Down Shirt', 'Caftan', 'Camisole', 'Camouflage', 'Cap', 'Cap And Gown', 'Cape', 'Capris', 'Cardigan', 'Chemise', 'Cloak', 'Clogs', 'Clothes', 'Clothing', 'Coat', 'Collar', 'Corset', 'Costume', 'Coveralls', 'Cowboy Boots', 'Cowboy Hat', 'Cravat', 'Crown', 'Cuff', 'Cuff Links', 'Culottes', 'Cummerbund', 'Dashiki', 'Diaper', 'Dinner Jacket', 'Dirndl', 'Drawers', 'Dress', 'Dress Shirt', 'Duds', 'Dungarees', 'Earmuffs', 'Earrings', 'Elastic', 'Evening Gown', 'Fashion', 'Fatigues', 'Fedora', 'Fez', 'Flak Jacket', 'Flannel Nightgown', 'Flannel Shirt', 'Flip-Flops', 'Formal Wear', 'Frock', 'Fur', 'Fur Coat', 'Gabardine', 'Gaiters', 'Galoshes', 'Garb', 'Garment', 'Garters', 'Gear', 'Getup', 'Gilet', 'Girdle', 'Glasses', 'Gloves', 'Gown', 'Halter Top', 'Handbag', 'Handkerchief', 'Hat', 'Hawaiian Shirt', 'Hazmat Suit', 'Headscarf', 'Helmet', 'Hem', 'High Heels', 'Hoodie', 'Hook And Eye', 'Hose', 'Hosiery', 'Hospital Gown', 'Houndstooth', 'Housecoat', 'Jacket', 'Jeans', 'Jersey', 'Jewelry', 'Jodhpurs', 'Jumper', 'Jumpsuit', 'Kerchief', 'Khakis', 'Kilt', 'Kimono', 'Kit', 'Knickers', 'Lab Coat', 'Lapel', 'Leather Jacket', 'Leg Warmers', 'Leggings', 'Leotard', 'Life Jacket', 'Lingerie', 'Loafers', 'Loincloth', 'Long Johns', 'Long Underwear', 'Miniskirt', 'Mittens', 'Moccasins', 'Muffler', 'Muumuu', 'Neckerchief', 'Necklace', 'Nightgown', 'Nightshirt', 'Onesies', 'Outerwear', 'Outfit', 'Overalls', 'Overcoat', 'Overshirt', 'Pajamas', 'Panama Hat', 'Pants', 'Pantsuit', 'Pantyhose', 'Parka', 'Pea Coat', 'Peplum', 'Petticoat', 'Pinafore', 'Pleat', 'Pocket', 'Pocketbook', 'Polo Shirt', 'Poncho', 'Poodle Skirt', 'Pork Pie Hat', 'Pullover', 'Pumps', 'Purse', 'Raincoat', 'Ring', 'Robe', 'Rugby Shirt', 'Sandals', 'Sari', 'Sarong', 'Scarf', 'School Uniform', 'Scrubs', 'Shawl', 'Sheath Dress', 'Shift', 'Shirt', 'Shoe', 'Shorts', 'Shoulder Pads', 'Shrug', 'Singlet', 'Skirt', 'Slacks', 'Slip', 'Slippers', 'Smock', 'Snaps', 'Sneakers', 'Sock', 'Sombrero', 'Spacesuit', 'Stetson Hat', 'Stockings', 'Stole', 'Suit', 'Sun Hat', 'Sunbonnet', 'Sundress', 'Sunglasses', 'Suspenders', 'Sweater', 'Sweatpants', 'Sweatshirt', 'Sweatsuit', 'Swimsuit', 'T-Shirt', 'Tam', 'Tank Top', 'Teddy', 'Threads', 'Tiara', 'Tie', 'Tie-Clip', 'Tights', 'Toga', 'Togs', 'Top', 'Top Coat', 'Top Hat', 'Train', 'Trench Coat', 'Trousers', 'Trunks', 'Tube Top', 'Tunic', 'Turban', 'Turtleneck', 'Turtleneck Shirt', 'Tutu', 'Tux', 'Tuxedo', 'Tweed Jacket', 'Twin Set', 'Umbrella', 'Underclothes', 'Undershirt', 'Underwear', 'Uniform', 'Veil', 'Vest', 'Vestments', 'Visor', 'Waders', 'Waistcoat', 'Wear', 'Wedding Gown', 'Wellingtons', 'Wetsuit', 'White Tie', 'Wig', 'Windbreaker', 'Woolens', 'Wrap', 'Yoke'];

// Helper functions
const selectHowManyFrom = (num, arr, fakerFunc) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (!fakerFunc) {
      result.push(faker.random.arrayElement(arr));
    } else {
      result.push(fakerFunc());
    }
  }
  return result;
};

const sizeOptions = () => {
  const sizes = [];
  for (let j = 0; j < 13; j += 2) {
    sizes.push({ size: j, stock: faker.random.number(100) });
  }
  return sizes;
};

const colors = () => {
  const colorOptions = [];
  for (let i = 0; i < 3; i++) {
    const colorName = faker.commerce.color();
    colorOptions.push({
      colorName: colorName.charAt(0).toUpperCase() + colorName.slice(1),
      sizes: sizeOptions(),
    });
  } return colorOptions;
};

// Create randomized item
let inc1 = 0;
let inc2 = 0;
let inc3 = 0;
let inc4 = 0;
const generateFakeItem = (id) => {
  let name = '';
  const makeUniqueName = () => {
    if (inc4 > clothing.length - 1) {
      inc4 = 0;
      inc3++;
    }
    if (inc3 > silly.length - 1) {
      inc3 = 0;
      inc2++;
    }
    if (inc2 > adj2.length - 1) {
      inc2 = 0;
      inc1++;
    }
    name = `${adj1[inc1]} ${adj2[inc2]} ${silly[inc3]} ${clothing[inc4]}`;
    inc4++;
    return name;
  };
  // const paddedId = id.toString().padStart(9, '0');
  const item = {
    // _routing: `${route}`,
    id,
    name: makeUniqueName(),
    description: faker.lorem.sentences(),
    fabric: {
      fabricName: faker.commerce.productMaterial(),
      fabricDescription: faker.lorem.sentence(),
      fabricFeatures: selectHowManyFrom(3, null, faker.commerce.productAdjective),
    },
    care: selectHowManyFrom(3, care),
    features: {
      designedFor: selectHowManyFrom(2, designedFor),
      fit: selectHowManyFrom(2, fit),
    },
    colors: colors(),
    price: faker.commerce.price(5.00, 1000.00, 2, '$'),
  };
  const json = JSON.stringify(item);
  return json;
};
// console.log(generateFakeItem(2));
// Seeding fucntions
const seedToPG = async () => {
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  let completion = 0;
  await knex.raw('TRUNCATE TABLE items RESTART IDENTITY CASCADE');

  let fakeItems = [];
  for (let i = 1; i <= 10000000; i += 1) {
    fakeItems.push(generateFakeItem());
    if (i % 2500000 === 0) {
      completion += 25;
      console.log(`${completion}% complete`);
    }
    if (i % 10000 === 0) {
      await knex.batchInsert('items', fakeItems, 1000);
      fakeItems = [];
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};
// seedToPG();

const seedToCSV = async () => {
  let fakeItems = [];
  let completion = 0;
  let csv;
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  for (let i = 1; i <= 10000000; i += 1) {
    fakeItems.push(generateFakeItem(i));
    if (i % 2500000 === 0) {
      completion += 25;
      console.log(`${completion}% complete`);
    }
    if (i % 10000 === 0) {
      if (i === 10000) {
        csv = json2csv.parse(fakeItems, { delimiter: ';' });
        await fs.appendFileSync('data.csv', `${csv}\n`);
      } else {
        csv = json2csv.parse(fakeItems, { delimiter: ';', header: false });
        await fs.appendFileSync('data.csv', `${csv}\n`);
        fakeItems = [];
      }
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
};
// seedToCSV()
//   .catch(err => console.log(err));

const seedToES = async () => {
  console.log('Seeding begun', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  let completion = 0;
  // Clear current DB
  // await client.indices.delete({
  //   index: '_all',
  // })
  //   .then(console.log('indices deleted'))
  //   .catch(err => console.log(err));


  let fakeItems = [];
  for (let i = 1; i <= 10000000; i += 1) {
    // Create NDJSON "_id": "${padded}"
    // const padded = i.toString().padStart(9, '0');
    fakeItems.push(`{ "index": {"_index": "clothing"}}\n${generateFakeItem(i)}\n`);
    if (i % 500000 === 0) {
      completion += 5;
      console.log(`${completion}% complete`);
    }
    if (i % 10000 === 0) {
      await client.bulk({
        body: [...fakeItems],
      }).catch(err => console.log(err.body.error));
      fakeItems = [];
    }
  }
  console.log('Seeding complete', `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`);
  inc1 = 0; inc2 = 0; inc3 = 0; inc4 = 0;
};
seedToES()
  .catch(err => console.log(err));

module.exports = {
  seedToPG,
  seedToCSV,
  seedToES,
  generateFakeItem,
};
