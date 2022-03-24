const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const bodyParser = require('body-parser');
const apiRouter = require('./routes/api');
const cors = require('cors');

// Initialise the application
const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Allow cross origin
app.use(cors());

// Sanitize input for mongoDB
app.use(
  mongoSanitize({
    replaceWith: '_',
    onSanitize: ({ req, key }) => {
      console.warn(`This request[${key}] is sanitized`, req);
    }
  })
);

// API routes
app.use('/api', apiRouter);

// Serve static files from the build folder when in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// Use environment PATH or default to 5000.
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => console.log(`Server listening on port ${PORT}`));
