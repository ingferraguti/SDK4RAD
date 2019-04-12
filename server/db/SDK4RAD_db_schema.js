/* 
* Generated by
* 
*      _____ _          __  __      _     _
*     / ____| |        / _|/ _|    | |   | |
*    | (___ | | ____ _| |_| |_ ___ | | __| | ___ _ __
*     \___ \| |/ / _` |  _|  _/ _ \| |/ _` |/ _ \ '__|
*     ____) |   < (_| | | | || (_) | | (_| |  __/ |
*    |_____/|_|\_\__,_|_| |_| \___/|_|\__,_|\___|_|
*
* The code generator that works in many programming languages
*
*			https://www.skaffolder.com
*
*
* You can generate the code from the command-line
*       https://npmjs.com/package/skaffolder-cli
*
*       npm install -g skaffodler-cli
*
*   *   *   *   *   *   *   *   *   *   *   *   *   *   *   *
*
* To remove this comment please upgrade your plan here: 
*      https://app.skaffolder.com/#!/upgrade
*
* Or get up to 70% discount sharing your unique link:
*       https://beta.skaffolder.com/#!/register?friend=5cadd42d3e3a57575017471b
*
* You will get 10% discount for each one of your friends
* 
*/
/**

  _____                      _              _ _ _     _   _     _        __ _ _      
 |  __ \                    | |            | (_) |   | | | |   (_)      / _(_) |     
 | |  | | ___    _ __   ___ | |_    ___  __| |_| |_  | |_| |__  _ ___  | |_ _| | ___ 
 | |  | |/ _ \  | '_ \ / _ \| __|  / _ \/ _` | | __| | __| '_ \| / __| |  _| | |/ _ \
 | |__| | (_) | | | | | (_) | |_  |  __/ (_| | | |_  | |_| | | | \__ \ | | | | |  __/
 |_____/ \___/  |_| |_|\___/ \__|  \___|\__,_|_|\__|  \__|_| |_|_|___/ |_| |_|_|\___|
                                                                                     
                                                                                   
 *  DO NOT EDIT HIS FILE!!
 * 
 *  FOR CUSTOMIZE DB SCHEMA PLEASE EDIT db/SDK4RAD_db_customSchema.js
 * 
 *  -- THIS FILE WILL BE OVERWRITTEN ON THE NEXT SKAFFOLDER'S CODE GENERATION --
 * 
 */

const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const createUser = require('../security/security.js');

const db_SDK4RAD_db_schema = [];
const db_SDK4RAD_db = [];

/**
 * SCHEMA DB SDK4RAD_db
 */



 /**
  * Article
  */
db_SDK4RAD_db_schema.Article = new mongoose.Schema({
	//RELATIONS
	processing: [{
		type: Schema.ObjectId,
		ref : "Processing"
	}],
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Costumer
  */
db_SDK4RAD_db_schema.Costumer = new mongoose.Schema({
	Codice: {
		type: 'String'
	},
	Note: {
		type: 'String'
	},
	Ragione sociale: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Line
  */
db_SDK4RAD_db_schema.Line = new mongoose.Schema({
	Name: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Phase
  */
db_SDK4RAD_db_schema.Phase = new mongoose.Schema({
	Nome: {
		type: 'String'
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	phase: [{
		type: Schema.ObjectId,
		ref : "Processing"
	}],
	*/
});


 /**
  * Processing
  */
db_SDK4RAD_db_schema.Processing = new mongoose.Schema({
	Name: {
		type: 'String', 
		required : true
	},
	Notes: {
		type: 'String'
	},
	//RELATIONS
	phase: [{
		type: Schema.ObjectId,
		ref : "Phase"
	}],
	
	
	//EXTERNAL RELATIONS
	/*
	processing: [{
		type: Schema.ObjectId,
		ref : "Article"
	}],
	processing: {
		type: Schema.ObjectId,
		ref : "Schedule"
	},
	*/
});


 /**
  * Schedule
  */
db_SDK4RAD_db_schema.Schedule = new mongoose.Schema({
	date: {
		type: 'Date'
	},
	deadline: {
		type: 'Date'
	},
	//RELATIONS
	processing: {
		type: Schema.ObjectId,
		ref : "Processing"
	},
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * Trasnlate
  */
db_SDK4RAD_db_schema.Trasnlate = new mongoose.Schema({
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});


 /**
  * User
  */
db_SDK4RAD_db_schema.User = new mongoose.Schema({
	Telephone: {
		type: 'String'
	},
	mail: {
		type: 'String'
	},
	name: {
		type: 'String'
	},
	password: {
		type: 'String', 
		required : true
	},
	roles: [{
		type: 'String'
	}],
	surname: {
		type: 'String'
	},
	username: {
		type: 'String', 
		required : true
	},
	//RELATIONS
	
	
	//EXTERNAL RELATIONS
	/*
	*/
});



// Import schema customization
require('./SDK4RAD_db_customSchema.js');
var SDK4RAD_db_model = require('./SDK4RAD_db_crud.js');

// Declare mongoose model

db_SDK4RAD_db.Article = SDK4RAD_db_model.connection.model('Article', db_SDK4RAD_db_schema.Article );
db_SDK4RAD_db.Costumer = SDK4RAD_db_model.connection.model('Costumer', db_SDK4RAD_db_schema.Costumer );
db_SDK4RAD_db.Line = SDK4RAD_db_model.connection.model('Line', db_SDK4RAD_db_schema.Line );
db_SDK4RAD_db.Phase = SDK4RAD_db_model.connection.model('Phase', db_SDK4RAD_db_schema.Phase );
db_SDK4RAD_db.Processing = SDK4RAD_db_model.connection.model('Processing', db_SDK4RAD_db_schema.Processing );
db_SDK4RAD_db.Schedule = SDK4RAD_db_model.connection.model('Schedule', db_SDK4RAD_db_schema.Schedule );
db_SDK4RAD_db.Trasnlate = SDK4RAD_db_model.connection.model('Trasnlate', db_SDK4RAD_db_schema.Trasnlate );
db_SDK4RAD_db.User = SDK4RAD_db_model.connection.model('User', db_SDK4RAD_db_schema.User );

module.exports = db_SDK4RAD_db;

// Create ADMIN user if does not exist
createUser.createUser();
