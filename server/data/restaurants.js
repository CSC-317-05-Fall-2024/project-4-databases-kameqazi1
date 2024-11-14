// Fill this in
const getRestaurants = async () => {
    const results =  await pool.query(
     'SELECT * FROM restaurants');
    return results.rows;
 
 };
 
 const getRestaurant = async (id) => {
     const results = await pool.query(
         'SELECT * FROM restaurants WHERE id = $1 ',[id]);
         return results.rows[0];
 };
 
 
 const createRestaurant = async (data) => {
     const {name, phone, address, photo }  = data;
     const results = await pool.query(
         'INSERT INTO restaurants (name, phone, address, photo) VALUES($1, $2, $3, $4) RETURNING *',
         [name, phone, address, photo]);
         return results.rows[0];
 
 };

// Delete a restaurant by id
const deleteRestaurant = async (id) => {
    const restaurant = await pool.query(
        'SELECT * FROM restaurants WHERE id = $1 ',[id]);
    const results = await pool.query(
        'DELETE FROM restaurants WHERE id = $1', [id]);
    return restaurant.rows;


};
const getReviewsForRestaurant = async (id) => {
    try {
        const result = await pool.query(
            `SELECT * FROM reviews WHERE restaurant_id = $1`,
            [id]
        );
        return result.rows;
    } catch (error) {
        console.error('Error retrieving reviews:', error);
        throw error;
    }
};
export { getRestaurants, getRestaurant, createRestaurant, deleteRestaurant, getReviewsForRestaurant};