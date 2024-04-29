# Backend_Dev_10Xers
### Installation & Running:
1. Clone the repo
2. ```npm install```
3. ```npm i sequelize-cli -g``` (if you don't have sequelize-cli installed)
4. ```npx sequelize db:migrate``` (to create the tables in the database)
5. ```npx sequelize db:seed:all``` (to seed data from /data)
6. Rename the ```.env-example``` to ```.env``` and then change the value of ```SECRET_KEY=""``` to your desired key
7. ```node app.js``` or ```nodemon app.js``` if you use nodemon to run the app

### How to use:
1. Open your API Testing Tool like Postman
2. You need to login first using the data from ```data/users.json```
3. Use the ```access_token``` from the login response and then put it on Headers to use the API.