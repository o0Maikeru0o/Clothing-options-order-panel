# Wawa Melon Item Summary
Item Summary Module

## Related Projects

  - https://github.com/sdc3-pele/Review-component.git
  - https://github.com/sdc3-pele/mike-photo-carousel.git
  - https://github.com/sdc3-pele/garrett-related-products.git

## Table of Contents

1. [Requirements](#requirements)
2. [Usage](#usage)
3. [Development](#development)
4. [API Endpoints](#api-endpoints)

## Requirements

PostgreSQL

## Usage

You will need postgreSQL and node installed to run this application.

In the terminal:
- in the root directory, run ```npm install``` to install dependencies
- run ```pg_ctl start``` from the terminal to start connection to postgreSQL server or ```pg_ctl stop or pg_ctl restart```
- (in a separate terminal window) ```npm run seed``` will seed the database with randomized data
- ```npm run start``` starts the server with nodemon
- (in a separate terminal window) ```npm run build``` starts webpack, building the bundle and watching for changes

Once you have seeded the database, started the server, and started webpack:
- a node server will be running on port 3002, serving the static page with data from the seeding script
- to access an item page, go to ```localhost://3002/id```

## Development

### Installing Dependencies
From within the root directory:
```sh
npm install
```

## API Endpoints
<pre>
GET:      /itemSummary/id/:id       -->        Retrieves an item listing by its ID.
GET:      /itemSummary/name/:name   -->        Retrieves an item listing by its name.
POST:     /itemSummary/             -->        Add a new item.
PUT:      /itemSummary/id/:id       -->        Updates an item.
DELETE:   /itemSummary/id/:id       -->        Removes an item.
</pre>
