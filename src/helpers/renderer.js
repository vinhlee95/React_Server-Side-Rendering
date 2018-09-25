import React from 'react';
import { renderToString } from 'react-dom/server';
import Home from '../client/components/Home';

module.exports = () => {

  // render Home to HTML output
  const content = renderToString(<Home />);

  // download client bundle
  return `
    <html>
      <head></head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
}