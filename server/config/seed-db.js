/* Initialize the data in the DB */
import { pool } from './database.js';

const dropTables = async () => {
    try {
        const dropTablesQuery = `
            DROP TABLE IF EXISTS reviews;
            DROP TABLE IF EXISTS restaurants;
        `;
        await pool.query(dropTablesQuery);
    } catch (error) {
        console.log(error)
    }
}

const createTables = async () => {
    try {
        console.log('Creating restaurants and reviews...');
        const createQuery = `
            CREATE TABLE IF NOT EXISTS restaurants (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                name TEXT NOT NULL,
                phone TEXT NOT NULL,
                address TEXT NOT NULL,
                photo TEXT
            );
            
            CREATE TABLE IF NOT EXISTS reviews (
                id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
                restaurant_id INT REFERENCES restaurants(id) ON DELETE CASCADE,
                name TEXT NOT NULL,
                rating INT NOT NULL CHECK (rating >= 1 AND rating <= 10),
                content TEXT
            );
        `;
        await pool.query(createQuery);
        console.log('Created restaurants and reviews tables');
    } catch (error) {
        console.log('Error creating tables:', error);
    }
}


const insertData = async () => {
    try {
        console.log('adding initial data...');
        const insertQuery = `
        INSERT INTO restaurants (name, phone, address, photo) VALUES 
            ('Brasserie', '(415) 555-5555', 'Bahnhofplatz 15, Zurich, 8000, Switzerland', 'images/brasserue-sud.webp');

        INSERT INTO restaurants (name, phone, address, photo) VALUES 
            ('Arakel', '(415) 555-5555', 'Rue Henri Blanvalet 17, Geneva, 1207, Switzerland', 'images/arakel1.webp');
            
        INSERT INTO restaurants (name, phone, address, photo) VALUES 
            ('FP Journe', '(415) 555-5555', 'Rue du Rhône 49, Geneva, 1200, Switzerland', 'images/fp-journe.webp');
        INSERT INTO restaurants (name, phone, address, photo) VALUES 
            ('Miradi', '(415) 555-5555', 'Rheinhaldenstrasse 8, Schaffhausen, 8200, Switzerland', 'images/miradi.webp');
        INSERT INTO restaurants (name, phone, address, photo) VALUES 
            ('Rosmarin', '(415) 555-5555', 'Untergstaadstrasse 26, Gstaad, 3780, Switzerland', 'images/rosmarin.webp');
        INSERT INTO restaurants (name, phone, address, photo) VALUES 
            ('Villa Sommerlust', '(415) 555-5555', 'Eisengasse 32, Lenzburg, 5600, Switzerland', 'images/villa-sommerlust.jpeg');

        

            INSERT INTO reviews (restaurant_id, name, rating, content) VALUES 
            (1, 'Alice', 10, 'Amazing food and ambiance at Brasserie!'),
            (1, 'John', 8, 'Loved the service at Brasserie, but the food was a bit pricey.'),
            (2, 'Sarah', 9, 'Had a great experience at Arakel, lovely decor!'),
            (2, 'Michael', 7, 'Arakel had nice food but was a bit crowded during lunch hour.');
          
        
            
        `;
        await pool.query(insertQuery);


    } catch (error) {
        console.log(error)
    }
}

const setup = async () => {
    await dropTables();
    await createTables();
    await insertData();
}

setup();
