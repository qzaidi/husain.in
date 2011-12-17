var util = require('util');

var charities = [
  {
    "charity" : true,
    "content" : "Welcome to Al-Islam.org. We invite you to begin a journey of clicks to explore this site thoroughly. We hope this journey is a source of education and enlightenment.",
    "name" : "Visit Al-Islam.org",
    "link" : "http://www.al-islam.org/"
  },
  {
    "charity" : true,
    "content" : "Why did he not perform the hajj? Why did Imam Husain not delay his journey to Kufa for a few days? It would have made little difference in time. What was the urgency for his departure, for beginning his journey?",
    "name" : "Ashura Lectures (IKA Howard)",
    "link" : "http://www.al-islam.org/al-serat/yawm/"
  },
  {	
    "charity" : true,
    "content" : "Ashura Awareness is a nationwide campaign to distribute Islamic literature to the general public, raising particular awareness on the revolution of Imam Hussain [as].",
    "name" : "Visit AIM Islam",
    "link" : "http://www.aimislam.com/ashura-awareness-2011-begins/"
  },
  {
    "charity" : true,
    "content" : "The mission of Imam Hussain (pbuh) is distinctly unique, political and religious revolutionary movement in the history of World. His was a tremendous undertaking which still reverberates throughout the Muslim nation.",
    "name" : "Visit Tears of Karbala",
    "link" : "http://www.tearsofkarbala.com/"
  }
];

var quotes = [
  {
    "content" : "Whoever seeks the satisfaction of people through disobedience of Allah, then Allah subjects him to people.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "http://www.sibtayn.com/"
  },
  {
    "content" : "O Allah, How can a thing the existence of which is dependent on you be taken as a proof for your existence? Is there anything more evident than your 'self' to disclose you?",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "Dua-e-Arafa"
  },
  {
    "content" : "He who has you, has everything, and he who has deprived himself of you is the poorest in the world. Loser is the one who chooses and be content with anyone or anything other than you.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "Biharol Anwar, Vol. 98, P. 228"
  },
  {
    "content" : " That is because 'enjoining good and forbidding evil' is a call for Islam, it regains the rights of the oppressed and opposes tyrants.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "http://www.sibtayn.com"
  },
  {
    "content" : " To me, death is nothing but happiness, and living under tyrants nothing but living in a hell.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "http://www.sibtayn.com"
  },
  {
    "content" : " If wealth is amassed for one day to be left, then why a free man becomes so miserly on something he has to leave.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "http://www.sibtayn.com"
  },
  {
    "content" : "My faith is that the progress of Islam does not depend on the use of sword by its believers, but the result of the supreme sacrifice of Husain, the great saint.",
    "name" : "Mahatma Gandhi",
    "link" : null,
    "source" : "http://www.sibtayn.com"
  },
  {
    "content" : "In a distant age and climate the tragic scene of the death of Hosein will awaken the sympathy of the coldest reader.",
    "name" : "Edward Gibbon",
    "link" : null,
    "source" : "http://www.sibtayn.com"
  },
  {
    "content" : "Hussain is of myself and I am of Hussain.",
    "name" : "Prophet Muhammad (PBUH)",
    "link" : null,
    "source" : "Musnad Ahmad Ibn Hanbal"
  },
  {
    "content" : "Every Day is Ashura, Every Land is Karbala",
    "name" : "Imam Jafar as Sadiq (a.s.) ",
    "link" : null,
    "source" : null
  },
  {
    "content" : "I congratulate Muslims that from among them, Hussain (A.S.), a great human being was born, who is reverted and honored totally by all communities.",
    "name" : "Sarojini Naidu",
    "link" : null,
    "source" : null
  },
  {
    "content" : "…a reminder of that blood-stained field of Karbala, where the grandson of the Apostle of God fell, at length, tortured by thirst, and surround by the bodies of his murdered kinsmen, has been at anytime since then, sufficient to evoke, even in the most lukewarm and the heedless, the deepest emotion, the most frantic grief, and an exaltation of spirit before which pain, danger, and death shrink to unconsidered trifles.",
    "name" : "Edward Brown",
    "link" : null,
    "source" : null,
    "showfor" : 15000
  },
  {
    "content" : "In order to keep alive justice and truth, instead of an army or weapons, success can be achieved by sacrificing lives, exactly what Imam Hussain (A.S.) did",
    "name" : "Rabindranath Tagore",
    "link" : null,
    "source" : "http://www.iranmilitaryforum.net/index.php?topic=12620.0"
  },
  {
    "content" : "Tolerance is man’s ornament, keeping promises is a sign of nobility, and bonding with others is a grace.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "http://en.wikiquote.org/wiki/Husayn_ibn_Ali"
  },
  {
    "content" : "One who pursues a goal through sinful ways, will ironically distance himself from that goal, and will approach what he was afraid of.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "http://en.wikiquote.org/wiki/Husayn_ibn_Ali"
  },
  {
    "content" : "Think not of those who are slain in God’s way as dead. Nay, they are living, finding their sustenance in the presence of their Lord",
    "name" : "Quran 3:169",
    "link" : null,
    "source" : null
  },
  {
    "content" : "I learned from Hussein how to achieve victory while being oppressed.",
    "name" : "Mahatma Gandhi",
    "link" : null,
    "source" : "http://www.brainyquote.com/quotes/keywords/consumerism.html"
  },
  {
    "content" : "Among the signs of a learned man is criticising his own words and being informed of various viewpoints.",
    "name" : "Imam Husain (a.s.)",
    "link" : null,
    "source" : "http://en.wikiquote.org/wiki/Husayn_ibn_Ali"
  },
  {
    "content" : "The best lesson which we get from the tragedy of Karbala is that Husain and his companions were rigid believers in God. They illustrated that the numerical superiority does not count when it comes to the truth and the falsehood. The victory of Husain, despite his minority, marvels me!",
    "name" : "Thomas Carlyle",
    "link" : null,
    "source" : null,
    "showfor" : 15000
  },
  {
    "content" : "If Husain had fought to quench his worldly desires…then I do not understand why his sister, wife, and children accompanied him. It stands to reason therefore, that he sacrificed purely for Islam.",
    "name" : "Charles Dickens",
    "link" : null,
    "source" : null,
    "showfor" : 15000
  }
];

exports.init = function() {
  return {
    'quotes': {
      // list of all quotes indexes that have been seen
    },
    charityCounter: 0,
    quotesCounter:  0
  };
  util.log('session inited: total ' + quotes.length + ' quotes in db');
}

exports.getRandom = function(seen) {
  var counter = ++seen.charityCounter;
  var numCharities = charities.length;
  var numQuotes = quotes.length;
  var selected;

  if ((counter % 4) === 0) {
    return charities[(counter/4) % numCharities];
  }

  if (seen.quotesCounter === numQuotes) {
    return { 'completed': true };
  }

  do {
    selected = Math.floor(Math.random() * numQuotes);
  } while (selected in seen.quotes);

  seen.quotes[selected] = true;
  seen.quotesCounter++;

  return quotes[selected];
};
