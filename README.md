# ADNAT 

Ruby on Rails and React app for tracking work shifts.
After creating an account, users can join, update or create organizations.
After joining organization user can create shift displaying start time, finish time, breaks, compensation.

# Set up guide

Make sure to have these tools to run app:

* Ruby - version 2.7.5p203
* Rails - version 7.0.3
* React - version 18.2.0 
* Postgresql

If you don't have this tools please, run below commands in terminal 

Install Ruby and Rails

* `rvm install 2.7.5 --default`
*  `gem install bundler`
*  `gem install rails`

Install NodeJS

* `nvm install 18`

Install Postgresql

To install Postgres for WSL, run the following commands from your Ubuntu terminal:
* `sudo apt update`
* `sudo apt install postgresql postgresql-contrib libpq-dev`
Then confirm that Postgres was installed successfully:
* `psql --version`
Run this command to start the Postgres service:
* `sudo service postgresql start`
Finally, you'll also need to create a database user so that you are able to connect to the database from Rails. First, check what your operating system username is:
* `whoami`
create a Postgres user
* `sudo -u postgres -i`
From the Postgres CLI, run this command (replace "username" with your username)
* `createuser -sr username`

Postgresql Installation for OSX
To install Postgres for OSX, you can use Homebrew:
* `brew install postgresql`
* `brew services start postgresql`

## Clone 

In your terminal, navigate to the folder where you want to store this repo then run the command:

`$ git clone  git@github.com:Ewelajna14/adnat-ror-challenge.git`
`cd adnat-ror-challenge`

Run this command in your terminal: 

```console
bundle install
rails db:create
npm install --prefix client
```

You can use the following commands to run the application:

* `rails s`: run the backend on http://localhost:3000
* `npm start --prefix client`: run the frontend on http://localhost:4000
