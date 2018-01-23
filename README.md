# Image-Organizer

## Collaborators:
* https://github.com/slaviana88
* https://github.com/kbadova

## A web application which helps us organize our memories

### Technologies
* NodeJs server
* MongoDB
* React + Redux + react-router


### Aims:
* Authenticating with an username + password
* Creating image albums
* Storing up to X pictures in an album, using drag & drop
* Adding descriptions per every moment
* Adding a location per each picture (Google Maps integration)
* Sharing an album in facebook (future aim)


### Steps to run setup the project

1) Go to /client folder and run `npm install && npm start` -> this will install the ui requirements and run the webpack dev server
2) In new tab go to /server folder and:

* install backend requirements with `npm install`
* configure database with:
  * `sudo -u postgres createuser image_organizer_user`
  * `sudo -u postgres createdb -O image_organizer_user image_organizer`
  * `sudo -u postgres psql -c "ALTER USER image_organizer_user WITH PASSWORD 'newPassword'"

* migrate the database with `sequelize db:migrate`
