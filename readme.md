###OBJECTIVES

Your task is to create an app that will handle the logic for the first few
scenes of our Bully Text SMS game. The scenes from the story that you must
implement are at the bottom of this email. A user progresses forward in the
story by texting back one of the all-caps words presented in that scene.

Assume a mock SMS web service will connect to your app on behalf of a
texting user. This service delivers POST data each time a user texts in.
The data contains two parameters:

   - *uid* - A number that is a unique user identifier
   - *message* - The string message the user has texted in

Your app should provide an endpoint to handle these POST requests. Upon
receiving a request, your app should respond with the appropriate scene in
the story. The initial message from a new user, regardless of what that
message is, should return the first scene. For all other messages, the app
should respond with the appropriate scene.

Please build this app using either Node or PHP with a persistent storage
layer of your choice (ex: Mongo, MySQL, etc). Acknowledging that this is an
SMS texting platform your app is interfacing with, consider areas where you
can ensure you're providing the best user experience possible. 

When complete, please send a link to the GitHub repository for your app.

---

###SCENES

*Scene 1:*
You arrive at school and get ur schedule. AH! Gym first period! Head to the
locker room to get ready. Do you use the BOYS or GIRLS locker room?

*BOYS:*
You're changing & you overhear Alex say "Sam is in this class, he's so gay,
bet he's going to be checking us out. Gross." Text CONVO to see what happens

*GIRLS:*
You're changing for gym & you overhear Alex say, "OMG Sam is in this class?
She's so gay. Bet she's checking us out. Gross." Text LISTEN to see what
happens

*CONVO:*
You see that Sam overheard & looks upset. Do you say something to ALEX,
knowing he might come after you, to SAM knowing you may get made fun of, or
WALK away? (he??? this needs to be differentiated between girls and boys)

*LISTEN:*
You see that Sam overheard and looks upset. Do you say something to Alex
and STEP in, TALK to Sam, or do you WALK away?

*ALEX:*
"Hey man, chill." Alex makes a dig at you, but stops. During gym, Sam
thanks you for your help. You're feeling pretty good and move to the CAFE.
(Text CAFE)

*SAM:*
"Hey man, dont listen to him, he's just being a jerk. Ignore him." Sam
thanks you & asks if you want to hang out.You say yes & move to CAFE. (Text
CAFE)

*WALK:*
Alex keeps ragging on Sam. Later in class you see Sam's nowhere to be
found. Text CLASS to get gym over with and head to your next period.

*TALK:*
"Hey girl, don't listen to her, she's just insecure. Wanna be in my group
for warmups?" Text GYM to get class over with and move on to your next
period.

*STEP:*
You say "Seriously Alex? who cares anyways?" Alex makes a dig at you but
shuts up about Sam. You finish GYM (text GYM) and go to your next class.

---
Notes: 
---

###GETTING STARTED

To run the app, download (`git clone https://github.com/tongxiang/doSomething/`) the app. The app itself runs on Node.js--[download Node.js here](http://howtonode.org/how-to-install-nodejs). Enter the directory containing doSomething, and run `npm install` from your command line to install its dependencies. Because the app runs on Express 4.0, you can start a local version of the server by running the command `npm start` from the command line. 

To test the app, the following utility can be used to easily ping the local server with requests. Make sure to direct the request at the local IP address of your server, not to localhost. 

http://wst.mytechlabs.com/

###WORKFLOW 

The majority of the app's logic is handled in `routes/index.js`. After a post request is made to our main route, we use the UID from the body of the reuest to query MongoDB and determine if the user exists. 

**USER DOESN'T EXIST, FIRST TEXT TO PLATFORM**
1) If the user doesn't exist, we can create a new user, set them at scene 1, and save that user to the database. 

2) Then, on line 33 we check the stage of the user and respond with the appropriate text from the models/scenes.js data file. 

**USER EXISTS**

1) If the user exists, we retrieve that user document from MongoDB. 

2) We then check the stage that the user was last at. Given that stage, we check models/scenes.js to see if the message value in the request body matches any of the passwords which correspond to that stage.

3) Each password key is matched to a numeric value corresponding to the stage that password unlocks. If the user's message corresponds to any of the appropriate passwords, we reassign their stage to that which corresponds to the password. 

4) Using the models/scenes.js file, we then issue a response containing the text from that stage. 

**ERROR HANDLING**

1) If the user texts a message that doesn't correspond to any of the passwords of their particular stage, we resend that stage's message, along with a usage hint. 

2) If the user continues to text after the game ends, we resend the corresponding final text scene. 

3) Messages of any form of capitalization are accepted. 

**FUTURE POSSIBILITIES**

1) To improve the app in the future, we might consider implementing some form of predictive autocorrection / natural language processing library on the backend to match looser spellings of passwords. For instance, a message 'BOIZ' could register as the password 'BOYS'. 

2) One of the big challenges of this project was determining the best way to represent the data. If we're using a larger dataset, the models/scenes.js datafile could be ported onto MongoDB. Alternatively, we could make each scene some sort of node, with built-in utility traversal functions which would allow for easier addition / subtraction / editing of scenes. 
