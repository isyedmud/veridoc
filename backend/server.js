import express from 'express';
import path from 'path';
var bodyParser = require('body-parser');
import paginate from 'express-paginate';
import mongoose from 'mongoose';
import api_v1 from './rest/v1';
// import api_v2 from './rest/v2';
import db_updater from './rest/db-updater';
import fs from 'fs';
import colors from 'colors';
import cors from 'cors';
import config from './config';
import http from 'http';
import https from 'https';
require('dotenv').config({ path: path.resolve(__dirname, './.env') });

const app = express();
var env = config.ENVIRONMENT;
const port = process.env.PORT || 4200;

// const db_url =
//   env == 'DEVELOPMENT' ? process.env.DEVELOPMENT_DB : process.env.PRODUCTION_DB;
const db_url = 'mongodb://localhost:27017/veridoc';

app.use(cors());
//since mongoose promise is depreciated, we overide it with node's promise
mongoose.Promise = global.Promise;

mongoose.connect(db_url, {
  user: '',
  pass: '',
  useNewUrlParser: true
});

mongoose.connection.on('error', () => {
  console.log('Failed to connect to the database.'.red);
});

mongoose.connection.on('open', () => {
  console.log(
    env == 'DEVELOPMENT'
      ? `\n\n👨‍💻  👨‍💻  👨‍💻  DEVELOPMENT ENVIRONMENT 👨‍💻  👨‍💻  👨‍💻\n\n`.blue
      : `\n\n🚨  🚨  🚨  YOU ARE IN THE PRODUCTION ENVIRONMENT  🚨  🚨  🚨\n\n`
          .red
  );
  console.log('Succesfully connected to the database!'.green);
  app.enable('strict routing');
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json({limit:'500mb'})); 

  app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.setHeader('Cache-Control', 'no-cache');
    next();
  });

  app.use('/api/v1', api_v1.router());
  app.use('/api/db-updater', db_updater.router());

  app.use('/attachments/', express.static('attachments'));
  
  app.use(paginate.middleware(20, 50));
  app.use((err, req, res, next) => {
    console.log(err);
    next();
  });

  app.get("/", (req, res) => {
    res.send("12adfsdf");
    console.log("asdfasdfasdf");
  });

  const httpServer = http.createServer(app);
  // const httpsServer = https.createServer(credentials, app);
  // httpsServer.listen(port, '0.0.0.0', () => {
  //   console.log(`Server running on port ${port}`.green);
  //   console.log(
  //     env == 'DEVELOPMENT'
  //       ? `\n\n👨‍💻  👨‍💻  👨‍💻  DEVELOPMENT ENVIRONMENT 👨‍💻  👨‍💻  👨‍💻\n\n`.blue
  //       : `\n\n🚨  🚨  🚨  YOU ARE IN THE PRODUCTION ENVIRONMENT  🚨  🚨  🚨\n\n`
  //           .red
  //   );
  // });
  httpServer.listen(port, '0.0.0.0', () =>{
    console.log(`Server running on port ${port}`.green);
    console.log(
      env == 'DEVELOPMENT'
        ? `\n\n👨‍💻  👨‍💻  👨‍💻  DEVELOPMENT ENVIRONMENT 👨‍💻  👨‍💻  👨‍💻\n\n`.blue
        : `\n\n🚨  🚨  🚨  YOU ARE IN THE PRODUCTION ENVIRONMENT  🚨  🚨  🚨\n\n`
            .red
    );
  })

});
