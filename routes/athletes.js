var express = require('express');
var router = express.Router();

var Athlete = require('../models/athlete');

router.post("/create", (req,res,next) =>{
	var newAthlete = new Athlete({
		name : req.body.name,
		dob : req.body.dob,
		nationality : req.body.nationality,
		location : req.body.location,
		association : req.body.association,
		team : req.body.team,
		gender : req.body.gender,
		sports : req.body.sports,
		about : req.body.about,
		interests : req.body.interests,
		charities : req.body.charities,
		facebook_url : req.body.facebook_url,
		twitter_url : req.body.twitter_url,
		instagram_url : req.body.instagram_url,
		youtube_url : req.body.youtube_url,
		pets : req.body.pets,
		drinksAlcohol : req.body.drinksAlcohol,
		married : req.body.married,
		image_url : req.body.image_url
	});

	Athlete.createAthlete(newAthlete, (err, athlete) => {
		if(err){
			res.json({success : false, msg : 'Failed to create new Athlete'});
		}
		else{
			res.json({success : true, msg : 'New Athlete created'});
		}
	});
	
});

router.get("/get_athlete/:_id", (req,res) =>{
	Athlete.getAthleteById(req.params._id, (err, athlete) => {
		if(err) {
			res.json({success: false, msg : 'Cannot get Information of Athlete'});
		}
		else {
			res.json(athlete);
		}
	});
});

router.get("/list", (req,res) => {
	Athlete.getListOfAthlete((err, athlete) => {
		if(err) {
			res.json({success: false, msg : 'Cannot get Information of Athletes'});
		}
		else {
			res.json(athlete);
		}
	});
});

router.put("/edit/:_id", (req,res) =>{
	var athlete = req.body;
	Athlete.updateAthleteName(req.params._id,athlete,{},(err, athlete) => {
		if(err){
			res.json({success: false, msg : 'Cannot Update the Athlete'});
		}
		else {
			res.json(athlete);
		}
	});
});

module.exports = router;