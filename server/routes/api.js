import express from 'express';
import {getRestaurant, getRestaurants, deleteRestaurant, createRestaurant} from '../data/restaurants.js';

const router = express.Router();

router.post('/restaurants', (req, res) => {
    const restaurantData = req.body;
    try {
        const restaurant = createRestaurant(restaurantData);
        console.log("received new restaurant!", restaurantData)
        res.status(200).json(restaurant)
    } catch (error) {
        console.log(error)
        res.status(500).json({"message": `${error}`})
    }
});

router.delete('/restaurants/:id', (req, res) => {
    const id = parseInt(req.params.id);
    try {
        const restaurant = deleteRestaurant(id);
        res.status(200).json(restaurant)
    } catch (error) {
        res.status(500).json({"message": `${error}`})
    }
});

export default router;