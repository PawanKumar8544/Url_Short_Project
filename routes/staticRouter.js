const express = require("express");
const URL = require("../models/url");
const { restrictTo } = require("../middlewares/auth");

const router = express.Router();

 router.get("Admin/urls",restrictTo(["Admin"]),
  async(req,res) => {
    const allures = await URL.find({});
    return res.render("home", {
      urls: allures,
    });
  });
  
router.get("/", restrictTo(["NORMAL","Admin"]), async (req, res) => {
  
  const allures = await URL.find({ createdBy: req.user._id });
  return res.render("home", {
    urls: allures,
  });
});

router.get("/signup", (req, res) => {
  return res.render("signup");
});

router.get("/login", (req, res) => {
  return res.render("login");
});

module.exports = router;
