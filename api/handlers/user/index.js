const express = require("express");
const {
  getAllUsers,
  getUserByUserName,
  getUsersSubscriptions,
  getRecommendations,
  subscribeToUser,
  changeUsername,
  changeDescription,
  changeImage,
  createUser,
  login,
  changePassword,
} = require("./user.handlers");
const router = express.Router();

router.get("/", getAllUsers);
router.post("/login", login);
router.get("/:username", getUserByUserName);
router.get("/:username/subscribed", getUsersSubscriptions);
router.get("/:username/recommendations", getRecommendations);
router.post("/:username/subscribe", subscribeToUser);
router.put("/:username/changeusername", changeUsername);
router.put("/:username/changedescription", changeDescription);
router.put("/:username/changeimage", changeImage);
router.put("/:username/changepassword", changePassword);
router.post("/create", createUser);

module.exports = router;
