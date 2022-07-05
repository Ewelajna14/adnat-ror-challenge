# ADNAT 

Ruby on Rails and React app for tracking work shifts.
After creating an account, users can join, update or create organizations.
After joining organization user can create shift displaying start time, finish time, breaks, compensation.

# Set up guide

* Ruby - version 2.7.5p203
* Rails - version 7.0.3
* React - version 18.2.0 

## Clone 

In your terminal, navigate to the folder where you want to store this repo then run the command:

$ git clone  git@github.com:Ewelajna14/adnat-ror-challenge.git

## Launch app locally

```console
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

```console
* rails s: run the backend on http://localhost:3000
* npm start --prefix client: run the frontend on http://localhost:4000
```