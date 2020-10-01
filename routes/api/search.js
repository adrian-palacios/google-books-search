const router = require("express").Router();
const searchController = require("../../controllers/searchController");

// Matches with /api/search
router
	.route("/")
	// Get route for all searched results
	.get(searchController.findAll);

module.exports = router;
