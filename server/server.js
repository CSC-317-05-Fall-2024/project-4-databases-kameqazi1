import restaurantData from './data/restaurantData.js';
import express from 'express';
import path from 'path';
import router from './routes/api.js';
import {getRestaurant, getRestaurants} from './data/restaurants.js';
import { fileURLToPath } from 'url';

const app = express();
const PORT = process.env.PORT || 3000;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.json())
app.use("/api", router);




app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/restaurants.html', (req, res) => {
    const restaurantData = getRestaurants();
    console.log(restaurantData);
    res.render('restaurants', { restaurantData });
});

app.get('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const restaurant = getRestaurant(id);
    res.render('restaurant-details', {restaurant});
}); 

app.get('/attractions', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'attractions.html'));
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
