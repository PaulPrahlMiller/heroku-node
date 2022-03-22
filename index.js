const express = require('express');
const apiRouter = require('./routes/api');

// Initialise the application
const app = express();

// Middleware
app.use(express.json());

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
