var express = require('express');
var router = express.Router();
var models = require('../models');
var scenes = require('../models/scenes');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Welcome to the DoSomething Bully Text Game!'});
});

router.post('/', function(req, res){
  var uid = req.body.uid;
  var message = req.body.message.toLowerCase();
  models.User.findOne({'uid': uid}, function(err, user){
    if (err){ //error-handling
      console.log('error from user submission', err);
    }
    if (user){ //user exists; has texted platform before
      if (scenes[user.stage]['passwords'][message]){ //user message matches a password for the stage
        user.stage = scenes[user.stage]['passwords'][message];
        user.save(); //replaces the existing document which matches the _id field in MongoDB
      } else { //user message does not match a password for their current stage
        if (user.stage === 11 || user.stage === 12 || user.stage === 13){ //we've reached the end of the game, no need for a hint
          res.send(scenes[user.stage]['text']);
        } else { //usage hint
          res.send(scenes[user.stage]['text'] + ' (hint: to move on to a new stage, text back one of the keywords that are CAPITALIZED!)');
        }
      }
    } else { //user doesn't exist; has never texted platform before
      var user = new models.User({uid: uid, stage: 1});
      user.save();
    }
    res.send(scenes[user.stage]['text']);
  });
});

module.exports = router;