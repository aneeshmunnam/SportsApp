var mongoose = require('mongoose');

//Athlete schema
var athleteSchema = mongoose.Schema({
	name : {
		type : String
	},

	dob : {
		type : String
	},

	nationality : {
		type : String
	},

	location : {
		type : String
	},

	association : {
		type : String
	},

	team : {
		type : String
	},

	gender : {
		type :String
	},

	sports : {
		type : String
	},

	about : {
		type : String
	},

	interests : {
		type : String
	},

	charities : {
		type : String
	},

	facebook_url : {
		type : String
	},

	twitter_url : {
		type : String
	},

	instagram_url : {
		type : String
	},

	youtube_url : {
		type : String
	},

	pets : {
		type : String
	},

	drinksAlcohol: {
		type : String
	},

	married : {
		type : String
	},

	image_url : {
		type : String
	}
});

var Athlete = module.exports = mongoose.model('Athlete', athleteSchema,'athletes');

module.exports.createAthlete = function(newAthlete, callback){
	newAthlete.save(callback);
}

module.exports.getAthleteById = function(id, callback){
	Athlete.findById(id, callback);
}

module.exports.getListOfAthlete = function(callback){
	Athlete.find(callback);
}

module.exports.updateAthleteName = function(id,athlete,options,callback){
	var parameter = {_id:id};
	var update = {
		name : athlete.name,
		dob : athlete.dob,
		nationality : athlete.nationality,
		location : athlete.location,
		association : athlete.association,
		team : athlete.team,
		gender : athlete.gender,
		sports : athlete.sports,
		about : athlete.about,
		interests : athlete.interests,
		charities : athlete.charities,
		facebook_url :athlete.facebook_url,
		twitter_url : athlete.twitter_url,
		instagram_url : athlete.instagram_url,
		youtube_url : athlete.youtube_url,
		pets : athlete.pets,
		drinksAlcohol : athlete.drinksAlcohol,
		married : athlete.married,
		image_url : athlete.image_url
	};
	Athlete.findOneAndUpdate(parameter,update,options,callback);
}