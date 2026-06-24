const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for frontend requests
app.use(cors());
app.use(express.json());

// Path to likes JSON file
const likesFilePath = path.join(__dirname, 'likes.json');

// Initialize likes.json if it doesn't exist
if (!fs.existsSync(likesFilePath)) {
  try {
    fs.writeFileSync(likesFilePath, JSON.stringify({ likes: 0 }, null, 2));
  } catch (error) {
    console.error('Failed to initialize likes.json:', error);
  }
}

// Helper to read likes from JSON
const readLikesCount = () => {
  try {
    const data = fs.readFileSync(likesFilePath, 'utf8');
    const parsed = JSON.parse(data);
    return typeof parsed.likes === 'number' ? parsed.likes : 0;
  } catch (error) {
    console.error('Error reading likes.json, resetting to 0:', error);
    return 0;
  }
};

// Helper to write likes to JSON
const writeLikesCount = (count) => {
  try {
    fs.writeFileSync(likesFilePath, JSON.stringify({ likes: count }, null, 2));
  } catch (error) {
    console.error('Error writing to likes.json:', error);
  }
};

// GET endpoint to retrieve the current likes count
app.get('/api/likes', (req, res) => {
  const count = readLikesCount();
  res.json({ likes: count });
});

// POST endpoint to increment likes count
app.post('/api/likes/increment', (req, res) => {
  const currentCount = readLikesCount();
  const newCount = currentCount + 1;
  writeLikesCount(newCount);
  res.json({ likes: newCount });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
