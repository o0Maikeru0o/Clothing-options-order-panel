/* eslint-disable quote-props */
/* eslint-disable quotes */

import http from 'k6/http';
import { check, sleep } from 'k6';

const randomNum = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};
const getRandomId = () => {
  if (randomNum(1, 2) === 1) {
    return randomNum(9000000, 10000000);
  }
  return randomNum(0, 8999999);
};

const body = {
  "id": randomNum(100000000, 200000000), "name": "Powerful Evil Hullabaloo Abaya ", "description": "Illum aliquid dolor eos. Voluptatibus voluptas ea odit aut ad. Sit sit et eligendi non recusandae eum veniam.", "fabric": { "fabricName": "Concrete", "fabricDescription": "Repellendus vel et quo maiores ad ex.", "fabricFeatures": ["Tasty", "Intelligent", "Fantastic"] }, "care": ["Imported", "Machine wash cold", "Do not dry clean"], "features": { "designedFor": ["Travel", "Commute"], "fit": ["Slim Fit", "Hip Length"] }, "colors": [{ "colorName": "Azure", "sizes": [{ "size": 0, "stock": 90 }, { "size": 2, "stock": 4 }, { "size": 4, "stock": 17 }, { "size": 6, "stock": 85 }, { "size": 8, "stock": 85 }, { "size": 10, "stock": 50 }, { "size": 12, "stock": 45 }] }, { "colorName": "Tan", "sizes": [{ "size": 0, "stock": 57 }, { "size": 2, "stock": 58 }, { "size": 4, "stock": 41 }, { "size": 6, "stock": 84 }, { "size": 8, "stock": 39 }, { "size": 10, "stock": 79 }, { "size": 12, "stock": 65 }] }, { "colorName": "Plum", "sizes": [{ "size": 0, "stock": 40 }, { "size": 2, "stock": 56 }, { "size": 4, "stock": 90 }, { "size": 6, "stock": 13 }, { "size": 8, "stock": 15 }, { "size": 10, "stock": 67 }, { "size": 12, "stock": 12 }] }], "price": "$582.00",
};

// export default function () {
//   const res = http.get(`http://localhost:3002/api/itemSummary/id/${getRandomId()}/`);
//   check(res, {
//     'status is 200': r => r.status === 200,
//   });
//   sleep(1);
// }

export default function () {
  const res = http.post('http://localhost:3002/api/itemSummary/', body);
  check(res, {
    'status is 201': r => r.status === 201,
  });
  sleep(1);
}
