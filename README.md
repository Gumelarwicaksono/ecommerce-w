# Mern stack ecomerce-w

## material

1. INSTALL TOOLS
2. CREATE REACT APP
3. CREATE REPOSITORI GITHUB

## create server.js

1. run npm init (inisialisasi folder sebgai project nodejs)
2. update package.json set type: menjadi module
3. add .js to import
4. npm i express
5. create server.js
6. add coment statrt sebagai node backand / server.js
7. require express
8. create route untuk memulai backand
9. pindah product.js dari frontend ke backend
10. create route unutk /api/products
11. return product
12. run npm start

## fetch products from backand

1. set proxy in package.json
2. npm i axios
3. use state hook
4. use effect hook
5. use reducer

## Create product and rating component

1. create rating component
2. create product component
3. use rating component in product component

## create product ditail

1. fetch roduct from backand
2. create 3 columns for images,info and action

## create loading and message component

1. create loading component
2. use spiner component
3. create message component
4. create utils.js to define getError function

## implement add to cart

1. create react context
2. define reducer
3. create store provaider
4. implement add to cart button click handler

## complete add to card

1. ceck exist item in the cart
2. check count stock in backand

## create signin scren

1. create signin in from
2. add email and password
3. add signin butoon

## connect to mongodb database

1. create atlas mongodb database
2. install local mongodb database
3. npm i mongose
4. connect to mongodb database

## send sample data

1. create product module
2. create User module
3. create seed route
4. use route in server.js
5. seed sample product

## create login backand

1. create login api
2. install jsonwebtoken
3. define generateToken

## create login screen

1. handle submit action
2. save token in store add localstorage
3. show user name i handler

## create register screen

1. create input froms
2. handle submit
3. create backand api

## implemet place order actions

1. handle place order actions
2. create order create api
