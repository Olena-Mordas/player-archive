# PlayerArchive

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.1.3.

## Project structure

The main component is `search-component` containing the input field. \
It takes the name of the player and makes a call to the **data api** using the `DataService`. \
If such player exists and is active, the next call is made to profile api using `ProfileService`. \
Otherwise, the message informing the unavailability of such player is displayed. \
Obtained data is passed on to the `player-profile` component  which displays a card containing the details of the player and his picture. \

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).


