import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import Routes from '../client/Routes';

module.exports = (req) => {

  // render Home to HTML output
  const content = renderToString(
    <StaticRouter location={req.url} context={{}} >
      <Routes />
    </StaticRouter>
  );

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