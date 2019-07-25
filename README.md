# Pet Adopter Frontend README

## Project Overview

Pet Adopter is an app to view, save and adopt animals from local NYC shelters and adoption centers. Users can create an account to view all available pets, with photos and details, and add pets to their “pet list”. All information is saved and, using secure auth, can be viewed upon signing back in. When a user visits their pet list, they have the option to adopt any pets that they have added. If a user has a pet saved in their list and someone else adopts it, a user can obviously no longer adopt, but can remove that pet from their list, either from the main page or from their profile. Once a pet is adopted, there is no un-adopting — you are committing to save that animal! 👏🏼

## Technologies Used

React, Ruby on Rails (Rails API backend), Petfinder API, HTML, CSS, JSON, Semantic UI & GoogleFonts, ActiveModel Serializers, ‘dotenv-rails’ and other Ruby gems

## Getting Started

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Prerequisites
To use, clone down this repo and open with your preferred text editor. Before anything else, if you haven’t already, make sure to set up the project backend as well (link below), which will ensure you have the working usable version of Ruby/Rails installed on your machine. This project uses React and requires node package manager, so once you have it open in your local environment, from the root of the project run the following:

`npm install`

terminal command to install dependencies.

### Installing
Once npm is finished installing and you’re back to a working terminal, jump over to the backend project root and run:

`rails s`

to start the server. (From the previous backend set up, should indicate successful connection to server, but to double check, navigate to http://localhost:3000 and make sure you have a “Yay! You’re on Rails!” welcome page). Back in the terminal, run:

`npm start`

and type “yes” or “y” when asked if you’d like to run this server on another port, at which point PetAdopter will launch in your browser. You can sign up as a new user with a name and email (and sign back in later with same info), view pets and add them to your pet list, and from your pet list, adopt some precious animals! 🐈♥️🐕

## Backend Link

[PetAdopter-backend](https://github.com/ehamiltonhudson/PetAdopter-backend)

## Demo Video

[PetAdopter.mov](https://drive.google.com/file/d/1Uv42tjWT18f5gdEHC0zDuv6SKBtRbmPU/view?usp=sharing)

## Authors

**Hamilton Hudson**

≫ ehamiltonhudson@gmail.com<br/>
↳ *LinkedIn*: https://www.linkedin.com/in/hamiltonhudson<br/>
↳ *Website*: https://hamiltonhudson.myportfolio.com<br/>
↳ *Blog*: https://ehhudson.wordpress.com<br/>
↳ *Twitter*: https://twitter.com/HamiltonHudson

**Gabrielle  Bellini**

≫ gbellini90@gmail.com<br/>
↳ *LinkedIn*: https://www.linkedin.com/in/gabrielle-bellini/<br/>
↳ *GitHub*: https://github.com/gbellini90<br/>
↳ *Blog*: https://medium.com/@gbellini90

## License

This project is licensed under the MIT License - see the [LICENSE.md](/LICENSE) file for details.
