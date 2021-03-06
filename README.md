# back_end

Backend Developers & Project Management African Market TT groups 2, 3, and 6:
  Tony Miller - Technical Lead
  Rhiannon Stanford - Technical Lead

## Dependencies
  Knex
    npm i -g knex
  Morgan
    npm i -g morgan
  Helmet
    npm i -g helmet
  CORS
    npm i -g cors
  Postgres
    brew install postgres
  Express
    npm i -g express
  sqlite3
    brew install sqlite3
  JSONWEBTOKEN
    npm i -g jsonwebtoken
  bcryptjs
    npm i -g bcryptjs
  
## Development dependencies
  jest
    npm i -g jest
  nodemon
    npm i -g nodemon
  supertest
    npm i -g supertest
  eslint
    npm i -g eslint


## HEROKU CLI commands
heroku login
heroku apps:create
heroku addons:create
heroku logs --tail -a <app_name>
heroku run --app <app_name>

### Endpoints:
    http://localhost:5500 in development
    http://localhost:5500/api/auth/register 
    http://localhost:5500/api/auth/login


### Endpoints (heroku):
    Users
    [POST] https://sauti-market-bw.herokuapp.com/api/auth/register
        returns user object

    [POST] https://sauti-market-bw.herokuapp.com/api/auth/login
        returns token, user object

    Items
    [GET]   ALL ITEMS: https://sauti-market-bw.herokuapp.com/api/items
        returns array of all item objects

    [GET]   ITEMS BY ID: https://sauti-market-bw.herokuapp.com/api/items/:id
        returns item object with matching id

    [POST]  ITEM NEW ITEM: https://sauti-market-bw.herokuapp.com/api/items
        returns item object

    [PUT]   UPDATE ITEM: https://sauti-market-bw.herokuapp.com/api/items/:id
        returns item object

    [DELETE]DELETE ITEM: https://sauti-market-bw.herokuapp.com/api/items/:id
        returns delete message

MY-LIST Endpoints


### REGISTRATION:    
    [POST]: /api/auth/register

### LOGIN:
    [POST]: /api/auth/login

### ITEMS:

    /api/items/


### Data Table Structures: 
User Object
{
  id: integer
  username: string
  password: string 
  email: string
  isOwner: boolean
}
Item Object
{
  id: integer
  item_name: string
  location: string
  quantity: integer
  price: float
  image_url: string
  description: string
  user_id: integer // this references the id in the user table
}

Seeded User Data

username: loki,
password: password,
isOwner: true,

username: thor,
password: password,
isOwner: true,

username: hulk,
password: password,
isOwner: true,

username: captain,
password: password, 
isOwner: true,

username: ironman, 
password: password,
isOwner: true,

username: blackwidow,
password: password,
isOwner: true,

username: storm,
password: password,
isOwner: true,

username: scarletwitch,
password: password,
isOwner: true,

username: wolverine,
password: password,
isOwner: false,

username: jeangrey,
password: password,
isOwner: false,

username: jubilee,
password: password,
isOwner: false,

username: psylocke,
password: password,
isOwner: false,

username: gambit,
password: password,
isOwner: false,

username: admin,
password: password,
isOwner: true,
