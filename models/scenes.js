var scenes = {

  1 : {
    'text' : '*Scene 1:* You arrive at school and get ur schedule. AH! Gym first period! Head to the locker room to get ready. Do you use the BOYS or GIRLS locker room?',
    'passwords' : {'boys' : 2, 'girls' : 3}
  },

  2 : {
    'text' : '*BOYS:* You\'re changing & you overhear Alex say "Sam is in this class, he\'s so gay, bet he\'s going to be checking us out. Gross." Text CONVO to see what happens',
    'passwords' : {'convo' : 4}
  },

  3 : {
    'text' : '*GIRLS:* You\'re changing for gym & you overhear Alex say, "OMG Sam is in this class? She\'s so gay. Bet she\'s checking us out. Gross." Text LISTEN to see what happens',
    'passwords' : {'listen' : 5}
  },

  4 : {
    'text' : '*CONVO:* You see that Sam overheard & looks upset. Do you say something to ALEX, knowing he might come after you, to SAM knowing you may get made fun of, or WALK away?',
    'passwords' : {'alex' : 6, 'sam' : 7, 'walk' : 8}
  },

  5 : {
    'text' : '*LISTEN:* You see that Sam overheard and looks upset. Do you say something to Alex and STEP in, TALK to Sam, or do you WALK away?',
    'passwords' : {'step' : 10, 'talk' : 9, 'walk' : 8}
  },

  6 : {
    'text' : '*ALEX:* "Hey man, chill." Alex makes a dig at you, but stops. During gym, Sam thanks you for your help. You\'re feeling pretty good and move to the CAFE. (Text CAFE)',
    'passwords' : {'cafe' : 11}
  },

  7 : {
    'text' : '*SAM:* "Hey man, dont listen to him, he\'s just being a jerk. Ignore him." Sam thanks you & asks if you want to hang out.You say yes & move to CAFE. (Text CAFE)',
    'passwords' : {'cafe' : 11}
  },

  8 : {
    'text' : '*WALK:* Alex keeps ragging on Sam. Later in class you see Sam\'s nowhere to be found. Text CLASS to get gym over with and head to your next period.',
    'passwords' : {'class' : 12}
  },

  9 : {
    'text' : '*TALK:* "Hey girl, don\'t listen to her, she\'s just insecure. Wanna be in my group for warmups?" Text GYM to get class over with and move on to your next period.',
    'passwords' : {'gym' : 13}
  },

  10 : {
    'text' : '*STEP:* You say "Seriously Alex? who cares anyways?" Alex makes a dig at you but shuts up about Sam. You finish GYM (text GYM) and go to your next class.',
    'passwords' : {'gym' : 13}
  },

  11 : {
    'text' : '*CAFE:* You\'re now eating in the cafe with Sam, a new friend. You\'ve done the right thing--congratulations on reaching the end of this game! Learn more about how you can stop bullying at https://www.dosomething.org/.',
    'passwords' : {}
  },

  12 : {
    'text' : '*CLASS* You\'re now in your next class, and Sam\'s absent. You wonder what happened, if the bullying had anything to do with it, and if you could\'ve done anything differently next time. You\'ve reached the end of this game. Learn more about how you can stop bullying at https://www.dosomething.org/.',
    'passwords' : {}
  },

  13 : {
    'text' : '*GYM* You\'re now in your next class, and Sam thanks you again. You\'ve made a new friend. Good work on sticking up for what\'s right--congratulations on reaching the end of this game! Learn more about how you can stop bullying at https://www.dosomething.org/.',
    'passwords' : {}
  }

};

module.exports = scenes;