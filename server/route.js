
// const express = require('express');
// const {
//   home,
//   signUp,
//   signIn,
//   getPlants, // Import getPlants function
// } = require('./controller');

// const router = express.Router();

// // Public Routes
// router.route('/').get(home);
// router.route('/signin').post(signIn);
// router.route('/signup').post(signUp);
// router.route('/plants').get(getPlants); 

// module.exports = router;


const express = require('express');
const {
  home,
  signUp,
  signIn,
  getPlants, // Import getPlants function
  getPlantById // Import getPlantById function
} = require('./controller');

const router = express.Router();

// Public Routes
router.route('/').get(home);
router.route('/signin').post(signIn);
router.route('/signup').post(signUp);
router.route('/plants').get(getPlants);

// New Route to get a single plant by its ID
router.route('/plants/:id').get(getPlantById);

module.exports = router;
