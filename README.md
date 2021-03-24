# IDG2001 - Cloud Technologies assignment

This is the first assignment for cloud technologies.

&nbsp;

Collaborators:

[Ida Therese Hongset Trøan](https://github.com/Idahpews)

[Jostein Tollefsrud](https://github.com/jostein-tollefsrud)

[Ragni Støen](https://github.com/RagniStoen)

&nbsp;

This is some links to the project on GitHub and Heroku:

[Open up the heroku app](https://ntnubank.herokuapp.com/)

[Go to GitHub repository](https://github.com/Idahpews/NTNUBank)

&nbsp;

## Get started

To use the code, clone from git. Inside the main folder, run `npm install` to install the dependencies and node_modules needed to run the project.

You can make a `.env` file and add `DATABASE_URL=mongodb://localhost:27017/test-bank` to test the code using MongoDB Compass that you install on your computer, or replace with your own MongoDB Atlas connection string. Make shure to run `npm install dotenv` to use that file.

`node server.js` will start the server, and you can open up [localhost:3000](http://localhost:3000) in your browser to view the site. If you have nodemon installed, just run `nodemon server.js` before opening the browser.