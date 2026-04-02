# Finance Backend Project

## About

This is a backend project for a finance dashboard system.
It allows users to manage financial records based on their roles.

I mainly focused on backend logic like handling data, role-based access, and building useful APIs for a dashboard.

# Live URL:

https://finance-dashboard-yt8r.onrender.com/

## Features

### Users

Create users
Assign roles (admin, analyst, viewer)
Update user details
Activate / deactivate users


### Records

Add income or expense
Update and delete records
View records
Filter by:
    type
    category
    date range


### Summary

Total income
Total expense
Balance
Category-wise breakdown
Recent transactions


### Access Control

Admin has full access
Analyst can view data
Viewer can  read-only


## Tech Used

Node.js
Express
MongoDB (Atlas)
Mongoose

## How to Run Locally

Clone repo
git clone https://github.com/AshrutYadav/Finance-Dashboard
cd Finance-Dashboard

Install dependencies
npm install

Add .env

MONGO_URI=add yours
PORT=3000

Run
npx nodemon server.js


## API Documentation

### URL

https://finance-dashboard-yt8r.onrender.com

### User APIs

Create user
POST /users

Get all users
GET /users

Update user
PATCH /users/:id

Toggle user status
PATCH /users/:id/status

### Record APIs

Create record (Admin only)
POST /records
Header: role = admin

Get records
GET /records
Header: role = viewer

Filters:

/records?type=income
/records?category=food
/records?startDate=2024-01-01&endDate=2026-01-01


Update record (Admin only)
PUT /records/:id
Delete record (Admin only)
DELETE /records/:id


### Summary API

Get dashboard data
GET /summary

Returns:
total income
total expense
balance
category breakdown
recent transactions

## Notes

Authentication is not implemented (role is passed via headers)
MongoDB Atlas is used
APIs test using Thunder Client in VS code Extention

## Completed by
Ashrut Yadav
