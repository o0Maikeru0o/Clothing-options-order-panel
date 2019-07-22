# Wawa Melon Item Summary
Item Summary Module

## Related Projects

  - https://github.com/fec3-galadriel/Review-component
  - https://github.com/fec3-galadriel/mike-photo-carousel
  - https://github.com/fec3-galadriel/garrett-related-products

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage
You will need mysql and node installed to run this application.

In the terminal:
- in the root directory, run ```npm install``` to install dependencies
- run ```mysql.server start``` to ensure mysql is running
- ```mysql -u root``` will log you into mysql (by default, mysql does not require a password)
- (in a separate terminal window) ```npm run seed``` will seed the database with randomized data
- ```npm run start:dev``` starts the server with nodemon
- (in a separate terminal window) ```npm run react:dev``` starts webpack, building the bundle and watching for changes

Once you have seeded the database, started the server, and started webpack:
- a node server will be running on port 3002, serving the static page with data from the seeding script
- to access an item page, go to ```localhost://3002/id```, where id is a product id from 1-100


## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

### Installing Dependencies
From within the root directory:

```sh
npm install webpack
npm install
```
