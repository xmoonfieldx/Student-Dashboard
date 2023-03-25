/*const express = require('express');
const mongoose = require('mongoose');
const app = express();

// Connect to the MongoDB Atlas cluster
mongoose.connect('mongodb+srv://xmoonfieldx:moon@cluster0.ndigt.mongodb.net/ngo?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB Atlas'))
.catch(error => console.error('Error connecting to MongoDB Atlas:', error));

// Define the schema for the "students" collection
const studentSchema = new mongoose.Schema({
  name: String,
  usn: String,
  mobile_number: String,
  mail_id: String,
  password: String,
  ngo1: {
    name: String,
    hours_spent: Number
  },
  ngo2: {
    name: String,
    hours_spent: Number
  },
  ngo3: {
    name: String,
    hours_spent: Number
  },
  ngo4: {
    name: String,
    hours_spent: Number
  },
others: String,
ngos: Number
});

// Define the model for the "students" collection
const Student = mongoose.model('student', studentSchema);

// Use the find method to get all documents
const query = {"usn": "1NT19CS109"};
const projection = { 'ngo1.name': 1, '_id': 0 };
Student.find(query, projection, (err, docs) => {
  if (err) {
    console.error('Error querying the students collection:', err);
    return;
  }
  // Iterate over the results and print the name field for ngo1
  docs.forEach(doc => {
    const ngo1_name = doc.ngo1.name;
    console.log('NGO1 Name:', ngo1_name);
  });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
*/






const express = require('express');
const mongoose = require('mongoose');
const app = express();

const Model = require('./model');

// Set up MongoDB Atlas URI and database name
const MONGODB_URI = 'mongodb+srv://xmoonfieldx:moon@cluster0.ndigt.mongodb.net/?retryWrites=true&w=majority';
const DB_NAME = 'ngo';

// Connect to MongoDB Atlas
mongoose.connect(MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  dbName: DB_NAME,
}).then(() => {
  console.log('MongoDB Atlas database connected successfully!');
}).catch((error) => {
  console.error('Error connecting to MongoDB Atlas database:', error);
});

// Use the find method to get all documents
app.get('/students', (req, res) => {
const query = {"usn": "1NT19CS109"};
const projection = { 'ngo1.name': 1, '_id': 0 };
Model.find(query, projection)
  .then(docs => {
    // Iterate over the results and print the name field for ngo1
    docs.forEach(doc => {
      const ngo1_name = doc.ngo1.name;
      console.log('NGO1 Name:', ngo1_name);
    });
  })
  .catch(err => {
      console.error('Error querying the students collection:', err);
      res.status(500).send('Error querying the students collection');
    });
});

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
