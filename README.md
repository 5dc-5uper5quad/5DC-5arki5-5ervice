# Project Name

> This is the service for Exhaust's "reviews" page. Players can make comments as well as update or delete their comments. Players must comply with the rules and guidelines. The service will only pull 15 reviews at any time. 

## Related Projects

  - https://github.com/5dc-5uper5quad/5DC-5arki5-5ervice
  - https://github.com/5dc-5uper5quad/5DC-Ja5mine-5ervice
  - https://github.com/5dc-5uper5quad/Cam5-5tuff
  - https://github.com/5uper5quad/sdc-productDetails

## Table of Contents

1. [Usage](#Usage)
1. [Requirements](#requirements)
1. [Development](#development)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 8 - 10.15.3

## Development

```
CRUD api

GET: '/:gameid' - This route should send back the reviews for a game by the game ID 
POST: '/' - This route should post new review 
PUT: '/:gameid' - This route should update the comment post with new edit 
DELETE: '/:gameid' - This route should delete the lastest post

```

### Installing Dependencies

From within the root directory:

```
See package.json for database(s) start scripts
npm install (installs all dependencies)
npm start (server)
npm run build (webpack)
npm run seed (to seed)

```
