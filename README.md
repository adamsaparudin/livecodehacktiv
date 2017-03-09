# livecodehacktiv
Simple API CRUD for Restaurant

# How to run

```
npm install
node app.js
```
Or if you want to use nodemon, you should install nodemon global first

```
npm i -g nodemon
nodemon app.js
```


# API Reference

## Food

NO | URL | METHOD | Detail
---|------|------|------
1 | /api/food | GET | Get all food data
2 | /api/food | POST | Create food data
3 | /api/food/:id | GET | Get one food data by ID
4 | /api/food/:id | PUT | Update food data by specific ID
5 | /api/food/:id | DELETE | Delete food data by sepecific ID

## Restaurant

NO | URL | METHOD | Detail
--- | --- | ---- | ---
1 | /api/restaurant | GET | Get all restaurant data
2 | /api/restaurant | POST | Create restaurant data
3 | /api/restaurant/:id | GET | Get on restaurant data by id
4 | /api/restaurant/:id | PUT | Update restaurant data by id
5 | /api/restaurant/:id | DELETE | Delete restaurant data by id
