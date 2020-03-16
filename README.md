# BAKERY DELIVERY API
This is a repository made for the devfolio backend hiring challenge.

## What's Amazing 
Once the Order is placed it automatically finds the free delivery boy and get assigned to him.
If he is unavilable the order will be on hold until he is available.

## Index
  - [How it works?](#how-it-works)
  - [Product Features](#product-feautres)
  - [EndPoints](#endpoints)
  - [Setup](#setup)



## How it works?
- First we create a user.
- We add delivery guy to our team.
- We create a order, if a delivery guy is available then he will accept your order.
- Delivery guy delivered the parcel and make him available for next booking, so if there is any pending order found, the available delivery guy will automatically take it.
- STATUS FOR ORDER : 0(Pending) 1(Accepted) 2(Delivered).


## Product Features
- User can order cookies from the online shop.
- The order will be automatically assigned to any free delivery guy.
- A delivery guy can only handle one order at a time
- When the delivery guy delivers the order it's marked as delivered and the delivery guy is free to process new orders.
- The system is automatically assigning orders.


## End Points
- POST '/register', (for creating a user)
- POST '/create', (for creating a order)
- POST '/create-guy', (for creating a delivery boy in team)
- PUT '/delivered/:id' , (delivery boy delivered the parcel)

## Setup
- In the terminal, run `git clone https://github.com/CodingNinjasCodes/InterQues.git`.
- run `npm install`.
- run `npm start`.
- Now You are set to go!