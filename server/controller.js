
const { MongoClient, ObjectId } = require('mongodb');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const home = async (req, res) => {
  return res.send("Welcome");
};

const signUp = async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true });
    const coll = client.db('mango').collection('orange');
    const oldUser = await coll.findOne({ email: req.body.email });

    if (oldUser) {
      return res.status(400).json({ success: false, message: 'User Already Exists' });
    }

    const data = req.body;
    data.password = await bcrypt.hash(data.password, 5);

    await coll.insertOne(data);
    client.close();

    return res.status(201).json({ success: true, message: 'Signup successful', user: data });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

const signIn = async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('mango').collection('orange');
    const result = await coll.findOne({ email: req.body.email });
    client.close();
    if (result) {
      const isValidUser = await bcrypt.compare(req.body.password, result.password);
      if (isValidUser) {
        console.log('User authenticated successfully');
        return res.json({ valid: 1, user: { _id: result._id, name: result.name, email: result.email } });
      } else {
        console.log('Invalid password');
        return res.json({ valid: 0, error: 'Invalid password' });
      }
    } else {
      console.log('User not found');
      return res.json({ valid: 0, error: 'User not found' });
    }
  } catch (error) {
    console.error('Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// New function to fetch Ayurvedic plants data
const getPlants = async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/', { useUnifiedTopology: true });
    const coll = client.db('mango').collection('plants');
    
    const plants = await coll.find({}).toArray();
    client.close();
    
    res.status(200).json(plants);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching plants' });
  }
};


const getPlantById = async (req, res) => {
  try {
    const client = await MongoClient.connect('mongodb://localhost:27017/');
    const coll = client.db('mango').collection('plants');

    const plant = await coll.findOne({ _id: new ObjectId(req.params.id) });
    client.close();

    if (!plant) {
      return res.status(404).json({ message: 'Plant not found' });
    }

    res.status(200).json(plant);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error fetching plant details' });
  }
};

module.exports = { home, signUp, signIn, getPlants , getPlantById }; // Export getPlants

