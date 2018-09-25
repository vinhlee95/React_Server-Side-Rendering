import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from './client/components/Home';

const app = express();

// tell express to expose public
app.use(express.static('public'));

app.get('/', (req, res) => {
  // render Home to HTML output
  const content = renderToString(<Home />);

  // download client bundle
  const html = `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;

  res.send(html);
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});