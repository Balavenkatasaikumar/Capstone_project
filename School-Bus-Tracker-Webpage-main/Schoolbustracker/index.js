// Minimal Express entrypoint for the Schoolbustracker project
const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

dotenv.config();

const connectDB = require('./src/db/connectDB');
const authRouter = require('./src/routers/authRouters');
const adminRouter = require('./src/routers/adminRouters');
const driverRouter = require('./src/routers/driverRouters');
const studentRouter = require('./src/routers/studentRouters');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API routes
app.use('/api/auth', authRouter);
app.use('/api/admin', adminRouter);
app.use('/api/driver', driverRouter);
app.use('/api/student', studentRouter);

// Serve frontend static folders
app.use('/', express.static(path.join(__dirname, 'public')));
app.use('/admin', express.static(path.join(__dirname, 'admin')));
app.use('/driver', express.static(path.join(__dirname, 'driver')));

const PORT = process.env.PORT || 3000;

async function start() {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  } catch (err) {
    console.error('Failed to start server:', err);
    process.exit(1);
  }
}

start();
