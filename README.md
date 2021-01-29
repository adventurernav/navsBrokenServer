# **Nav's Broken Server Challenge**

### Welcome to this Spicy Server Challenge. 
There are several bugs for you to fix here!  

## Your task is to log in, create an item on your wishlist, update it, view those changes, then delete the item.

### Technologies
#### This server is built with: 
- JavaScript
- PostgreSQL
- Node
- Express
- Sequelize
- JWT
- Bcrypt


### Cloning this project
Navigate to where you want the project cloned to in the command line. Let's make a few commands:

`git clone https://github.com/adventurernav/navsbrokenserver.git`

`npm i`

`npm run dev`
or
`nodemon`

Now that we have the server running, we can use postman to access the server. 

## Database Tables:

There are 4 Tables in this database.

### Users
| Type of Information | (name in Model) | data type |
|---------------------|-----------------|-----------|
| ID | (id) | integer |
| E-mail address | (email) | string |
| Password | (password) | string |
| Administrative Privileges | (admin) | boolean |
| First Name | (firstName) | string |
| Last Name | (lastName) | string |
| Signup Date | (createdAt) | string |
| Last Change | (updatedAt) | string |
---


### Packlists
| Type of Information | (name in Model) | data type |
|---------------------|-----------------|-----------|
| ID | (id) | integer |
| Profile Owner ID | (userId) | integer |
| Name of Packlist | (title) | string |
| Creation Date | (createdAt) | string |
| Last Change | (updatedAt) | string |


### Items
| Type of Information | (name in Model) | data type |
|---------------------|-----------------|-----------|
| ID | (id) | integer |
| Name of Item | (itemName) | string |
| Link to the Item | (url) | string |
| Creation Date | (createdAt) | string |
| Last Change | (updatedAt) | string |


## Middleware: 
Validate Session: Checks the token and returns the user object. 

## Endpoints: 
[Postman](https://www.getpostman.com/collections/072ac8a3db9482c2ac69)

###### Answer Key: 
[Reveal Your Secrets](https://docs.google.com/document/d/1QZ613_NwXYY61vFrGfdLRttBgxeC-gWkzD0vckOLEXQ/edit?usp=sharing)