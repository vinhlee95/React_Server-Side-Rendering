import express from 'express';
import htmlRenderer from './helpers/renderer';

const app = express();

// tell express to expose public
app.use(express.static('public'));

app.get('*', (req, res) => {
  res.send(htmlRenderer(req));
})


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`)
});