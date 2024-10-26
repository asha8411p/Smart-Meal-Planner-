const express = require("express");
const router = express.Router();
const llmservice = require("../services/llmservice");
const mealService = require("../services/mealService");

router.get("/suggestion", async (req, res) => {
  const meal = await llmservice.getMealSuggestion();

  res.send(JSON.stringify(meal));
});

router.post("", async (req, res) => {
  const userId = req.body.userId;
  const name = req.body.name;
  const calories = req.body.calories;
  const date = req.body.date;
  const budget = req.body.budget;

  mealService.saveMeal(userId, name, calories, date, budget);

  res.send("Meal added to shopping list");
});
router.get("", async (req, res) => {
  const userId = req.query.userId;
  const meal = await mealService.getMeals(userId);
  res.send(JSON.stringify(meal));
});

module.exports = router;




//(user_id, name, calories, date, budget)