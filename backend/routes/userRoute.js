const {
  addWorkout,
  getUserDashboard,
  getWorkoutsByDate,
  UserLogin,
  UserRegister,
} = require("../controllers/userController");

const { verifyToken } = require("../middleware/verifyToken");

const express = require("express");

const router = express.Router();

router.post("/signup", UserRegister);
router.post("/signin", UserLogin);

router.get("/dashboard", verifyToken, getUserDashboard);
router.get("/workout", verifyToken, getWorkoutsByDate);
router.post("/workout", verifyToken, addWorkout);

module.exports = router;
