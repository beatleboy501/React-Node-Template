/** @module Server */

/** The express framework is used for routing in this node app */
const express = require('express');
const app = express();
const apiRoutes = express.Router();

/** The app configuration */
const config = require('./config');

/** The port used. Default is 8080 */
const port = process.env.PORT || 8080;

/** Add middleware to the app router */
app.set('superSecret', config.secret);
app.use(express.static('app/assets/javascripts'));
app.use('/app/assets/javascripts', express.static('app/assets/javascripts'));

/** App routes */

/** @name <b> / </b> - The home route will bring up the home page
 * app.get
 * @function
 */
app.get('/', function (req, res) {
  res.sendFile(__dirname + '/index.html');
});

app.use('/api', apiRoutes);
app.listen(port);
