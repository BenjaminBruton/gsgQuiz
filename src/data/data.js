const data = [
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the &quot;Halo&quot; franchise, in what country is New Mombasa?",
    correct_answer: "Kenya",
    incorrect_answers: ["India", "Turkey", "Slovakia"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In which series of games do you collect souls to empower you and buy weaponry and armor with?",
    correct_answer: "Souls ",
    incorrect_answers: [
      "Final Fantasy ",
      "Monster Hunter",
      "The Legend of Zelda",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Killing Floor started as a mod for which Unreal Engine 2 game?",
    correct_answer: "Unreal Tournament 2004",
    incorrect_answers: [
      "Deus Ex: Invisible War",
      "Unreal Tournament 3",
      "Postal",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which character is from &quot;Splatoon&quot;?",
    correct_answer: "Marie",
    incorrect_answers: ["Cyrus", "Palutena", "Shulk"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Who is the main antagonist in the Portal franchise?",
    correct_answer: "GLaDOS",
    incorrect_answers: ["Chell", "Wheatley", "Rick"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which one of the following titles by Valve is not based on a Community Mod?",
    correct_answer: "Ricochet",
    incorrect_answers: ["Day of Defeat", "Counter-Strike", "Alien Swarm"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Half-Life by Valve uses the GoldSrc game engine, which is a highly modified version of what engine?",
    correct_answer: "Quake Engine",
    incorrect_answers: ["Doom Engine", "id Engine", "Source Engine"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the final game of the &quot;Zero Escape&quot; series called?",
    correct_answer: "Zero Escape Zero Time Dilemma ",
    incorrect_answers: [
      "Nine Hours, Nine Persons, Nine Doors ",
      "Zero Escape Virtue&#039;s Last Reward",
      "The Nonary Game: Sigma&#039;s Last Life",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In &quot;Clash Royale&quot; what is Arena 4 called?",
    correct_answer: "P.E.K.K.A&#039;s Playhouse",
    incorrect_answers: ["Barbarian Bowl", "Spell Valley", "Royal Arena"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Why was the character Trevor Philips discharged from the Air Force?",
    correct_answer: "Mental Health Issues",
    incorrect_answers: ["Injuries", "Disease", "Danger to Others"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which eSports team came first place in The International Dota 2 Championship 2016?",
    correct_answer: "Wings Gaming",
    incorrect_answers: ["Digital Chaos", "Evil Geniuses", "Fnatic"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which football player is featured on the international cover version of the video game FIFA 16?",
    correct_answer: "Lionel Messi",
    incorrect_answers: ["Cristiano Ronaldo", "Wayne Rooney", "David Beckham"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;Sonic the Hedgehog 3&quot; for the Sega Genesis, what is the color of the second Chaos Emerald you can get from Special Stages?",
    correct_answer: "Orange",
    incorrect_answers: ["Blue", "Green", "Magenta"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the Kingdom Heart series who provides the english voice for Master Eraqus?",
    correct_answer: "Mark Hamill",
    incorrect_answers: [
      "Jason Dohring",
      "Jesse McCartney",
      "Haley Joel Osment",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In what year was the game &quot;Fallout&quot; released?",
    correct_answer: "1997",
    incorrect_answers: ["1998", "1999", "1996"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What two characters from the game Undertale are never in a relationship or not related?",
    correct_answer: "Frisk &amp; Chara",
    incorrect_answers: [
      "Sans &amp; Papyrus",
      "Toriel &amp; Asgore",
      "Alphys &amp; Undyne",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In which Mario game did the Mega Mushroom make its debut?",
    correct_answer: "Mario Party 4",
    incorrect_answers: [
      "New Super Mario Bros.",
      "Mario Kart Wii",
      "Super Mario 3D World",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "How long was the World Record Speed Run of Valve Software&#039;s &quot;Half-Life&quot; that was done in 2014.",
    correct_answer: "20 Minutes, 41 Seconds",
    incorrect_answers: [
      "45 Minutes, 32 Seconds",
      "5 Minutes, 50 Seconds",
      "12 Minutes, 59 Seconds",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In PROTOTYPE 2, which of the following abilities/weapons is NOT obtained by an Evolved?",
    correct_answer: "Tendrils",
    incorrect_answers: ["Blade", "Bio-Bomb", "Pack Leader"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which was the first M-rated video game developed by Squaresoft/Square Enix?",
    correct_answer: "Parasite Eve",
    incorrect_answers: ["Final Fantasy VIII", "Front Mission", "Vagrant Story"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not the name of a city in the Grand Theft Auto series?",
    correct_answer: "San Andreas",
    incorrect_answers: ["San Fierro", "Las Venturas", "Vice City"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "The name of the Metroid series comes from what?",
    correct_answer: "An enemy in the game",
    incorrect_answers: [
      "The final boss&#039;s name",
      "The main character&#039;s name",
      "A spaceship&#039;s name",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which franchise had a special event hosted in the popular MMORPG Final Fantasy XIV: A Realm Reborn?",
    correct_answer: "Yo-kai Watch",
    incorrect_answers: ["Pok&eacute;mon", "Yu-gi-oh", "Buddyfight"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these Pok&eacute;mon cannot learn Surf?",
    correct_answer: "Arbok",
    incorrect_answers: ["Linoone", "Tauros", "Nidoking"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game &quot;Terraria&quot;, which of these bosses are pre-hardmode bosses?",
    correct_answer: "Eye of Cthulhu",
    incorrect_answers: ["Plantera", "Skeletron Prime", "The Destroyer"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In TF2 Lore, what are the names of the Heavy&#039;s younger sisters?",
    correct_answer: "Yana and Bronislava",
    incorrect_answers: [
      "Gaba and Anna",
      "Yanna and Gaba",
      "Anna and Bronislava",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which one of these games wasn&#039;t released in 2016?",
    correct_answer: "Metal Gear Solid V",
    incorrect_answers: [
      "Tom Clancy&#039;s The Division",
      "Killing Floor 2",
      "Hitman",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What was the first .hack game?",
    correct_answer: ".hack//Infection",
    incorrect_answers: [".hack//Zero", ".hack//Sign", ".hack//Liminality"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of the largest planet in Kerbal Space Program?",
    correct_answer: "Jool",
    incorrect_answers: ["Eeloo", "Kerbol", "Minmus"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Fallout 4&quot;, what is the name of the dog you find at Red Rocket truck stop?",
    correct_answer: "Dogmeat",
    incorrect_answers: ["Sparky", "Quazar", "Chop"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Aperture Science CEO Cave Johnson is voiced by which American actor?",
    correct_answer: "J.K. Simmons",
    incorrect_answers: [
      "Nolan North",
      "John Patrick Lowrie",
      "Christopher Lloyd",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Terraria, which of these items is NOT crafted at a Mythril Anvil?",
    correct_answer: "Ankh Charm",
    incorrect_answers: ["Venom Staff", "Sky Fracture", "Orichalcum Tools"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the main character in most of the games of the YS series?",
    correct_answer: "Adol Christin ",
    incorrect_answers: [
      "Character doesn&#039;t have a name",
      "Estelle Bright",
      "Roger Wilco",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What household item make the characters of &quot;Steins; Gate&quot; travel through time?",
    correct_answer: "Microwave",
    incorrect_answers: ["Computer", "Refrigerator", "Televison"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In the game Pok&eacute;mon Conquest, which warlord is able to bond with Zekrom and a shiny Rayquazza?",
    correct_answer: "Nobunaga",
    incorrect_answers: ["The Player", "Oichi", "Hideyoshi"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How much did the indie game &quot;Cave Story&quot; cost when it was first released in 2004?",
    correct_answer: "$0 USD",
    incorrect_answers: ["$5 USD", "$10 USD", "$15 USD"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these is not a DLC vehicle in &quot;Mario Kart 8&quot;?",
    correct_answer: "Wild Wiggler",
    incorrect_answers: ["Bone Rattler", "B Dasher", "300 SL Roadster"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In &quot;Call Of Duty: Zombies&quot;, what does the game traditionally reward you for completing a boss round?",
    correct_answer: "Max Ammo",
    incorrect_answers: [
      "A Pack-A-Punched gun",
      "Death Machine",
      "Monkey Bombs",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In which year was League of Legends released?",
    correct_answer: "2009",
    incorrect_answers: ["2010", "2003", "2001"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many controllers could a Nintendo GameCube have plugged in at one time?",
    correct_answer: "4",
    incorrect_answers: ["8", "6", "2"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;The Witness&quot;, how many lasers must be activated to get into the mountain area?",
    correct_answer: "7",
    incorrect_answers: ["8", "5", "12"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What is the name of the City in Saints Row The Third?",
    correct_answer: "Steelport",
    incorrect_answers: ["Stilwater", "Carcer", "Liberty"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following Zelda games did not feature Ganon as a final boss?",
    correct_answer: "Majora&#039;s Mask",
    incorrect_answers: [
      "Ocarina of Time",
      "Skyward Sword",
      "Breath of the Wild",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the game Sonic Forces, which of the following was not from a previous game?",
    correct_answer: "Infinite",
    incorrect_answers: ["Metal Sonic", "Zavoc", "Chaos"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "What is the AK-47&#039;s name in Counter Strike: Source?",
    correct_answer: "CV-47",
    incorrect_answers: ["AK-74", "AK", "CZ-75"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What vehicle in PUBG has the highest top speed?",
    correct_answer: "Motorcycle",
    incorrect_answers: ["PG-117", "Dacia", "Buggy"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the survival horror game, &quot;Cry of Fear,&quot; what was the name of Simon&#039;s close friend/potential love interest?",
    correct_answer: "Sophie",
    incorrect_answers: ["Olivia", "Jessica", "Alice"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which city hosted the CS:GO Dreamhack Open 2015?",
    correct_answer: "Cluj-Napoca",
    incorrect_answers: ["Cologne", "Atlanta", "London"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "During the events of Half-Life: Opposing Force, what is the age of Adrian Shephard, the protagonist?",
    correct_answer: "22",
    incorrect_answers: ["23", "21", "24"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "How many sets of grandmaster witcher gear are in The Witcher 3&#039;s Blood and Wine DLC?",
    correct_answer: "5",
    incorrect_answers: ["3", "6", "4"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What&#039;s the name of the main protagonist in the &quot;Legend of Zelda&quot; franchise?",
    correct_answer: "Link",
    incorrect_answers: ["Mario", "Zelda", "Pit"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which character is from &quot;Splatoon&quot;?",
    correct_answer: "Marie",
    incorrect_answers: ["Cyrus", "Palutena", "Shulk"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these features was added in the 1994 game &quot;Heretic&quot; that the original &quot;DOOM&quot; could not add due to limitations?",
    correct_answer: "Looking up and down",
    incorrect_answers: [
      "Increased room sizes",
      "Unlimited weapons",
      "Highly-detailed textures",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the villain company in &quot;Stardew Valley&quot;?",
    correct_answer: "Joja Co ",
    incorrect_answers: ["Ronin", "Empire", "Robotnik Industry&#039;s "],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Why was the character Trevor Philips discharged from the Air Force?",
    correct_answer: "Mental Health Issues",
    incorrect_answers: ["Injuries", "Disease", "Danger to Others"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What ingredient is NOT used to craft a cake in Minecraft?",
    correct_answer: "Bread",
    incorrect_answers: ["Wheat", "Milk", "Egg"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "How many Chaos Emeralds are there in the &quot;Sonic the Hedgehog&quot; universe?",
    correct_answer: "7",
    incorrect_answers: ["6", "8", "14"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Who is the main character of &quot;Metal Gear Solid 3&quot;?",
    correct_answer: "Naked Snake",
    incorrect_answers: ["Solid Snake", "Liquid Snake", "Venom Snake"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "The creator of the Touhou Project series is:",
    correct_answer: "ZUN",
    incorrect_answers: ["SUN", "RUN", "PUN"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "Rocket League is a game which features..",
    correct_answer: "Cars",
    incorrect_answers: ["Helicopters", "Planes", "Submarines"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which musical artist was NOT featured as playable avatars in the game &quot;DJ Hero&quot;?",
    correct_answer: "Dr. Dre",
    incorrect_answers: ["DJ Shadow", "Daft Punk", "Grandmaster Flash"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Final Fantasy VI was originally released outside Japan under what name?",
    correct_answer: "Final Fantasy III",
    incorrect_answers: [
      "Final Fantasy VI",
      "Final Fantasy V",
      "Final Fantasy II",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "When was Chapter 1 of the Source Engine mod &quot;Underhell&quot; released?",
    correct_answer: "September 1st, 2013",
    incorrect_answers: [
      "March 3rd, 2011",
      "September 12th, 2013",
      "October 2nd, 2012",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which car did not appear in the 2002 Lego Game: Drome Racers?",
    correct_answer: "Wasp",
    incorrect_answers: ["Raptor", "Hornet", "Behemoth"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In Pokemon Red &amp; Blue, what is the name of HM05?",
    correct_answer: "Flash",
    incorrect_answers: ["Strength", "Cut", "Fly"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Which Game Development company made No Man&#039;s Sky?",
    correct_answer: "Hello Games",
    incorrect_answers: ["Dovetail Games", "Valve", "Blizzard Entertainment"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the video game &quot;Team Fortress 2&quot;, which class is able to double jump?",
    correct_answer: "Scout",
    incorrect_answers: ["Spy", "Engineer", "Pyro"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which Overwatch character says the line &quot;Heroes never die!&quot;?",
    correct_answer: "Mercy",
    incorrect_answers: ["Reaper", "Sonic", "Ana"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the title of the game &quot;Luigi&#039;s Mansion&quot;, what is the only letter to not appear with a pair of eyes in it?",
    correct_answer: "s",
    incorrect_answers: ["n", "i", "m"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In the Mass Effect trilogy, who is the main protagonist?",
    correct_answer: "Shepard",
    incorrect_answers: ["Mordin", "Garrus", "Thane"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following names is the &quot;Mega Man&quot; Franchise known as in Japan?",
    correct_answer: "Rockman",
    incorrect_answers: ["Paperman", "Scissorsman", "Mega Man"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which &quot;Fallout: New Vegas&quot; quest is NOT named after a real-life song?",
    correct_answer: "They Went That-a-Way",
    incorrect_answers: [
      "Come Fly With Me",
      "Ain&#039;t That a Kick in the Head",
      "Ring-a-Ding Ding",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The cake depicted in Valve&#039;s &quot;Portal&quot; franchise most closely resembles which real-world type of cake?",
    correct_answer: "Black Forest",
    incorrect_answers: [
      "Devil&#039;s Food",
      "Molten Chocolate",
      "German Chocolate",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What video game engine does the videogame Quake 2 run in?",
    correct_answer: "iD Tech 2",
    incorrect_answers: ["iD Tech 3", "iD Tech 1", "Unreal Engine"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "Which of these games was NOT developed by Markus Persson?",
    correct_answer: "Dwarf Fortress",
    incorrect_answers: ["Minecraft", "Wurm Online", "0x10c"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "What is the name of the common, gun-toting enemies of the &quot;Oddworld&quot; video game series?",
    correct_answer: "Sligs",
    incorrect_answers: ["Scrabs", "Slogs", "Glukkons"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In &quot;Super Mario Sunshine&quot;, how do you unlock the &quot;Corona Mountain&quot; level?",
    correct_answer: "By clearing every 7th episode",
    incorrect_answers: [
      "By obtaining 70 Shines",
      "By clearing every episode involving a &quot;Secret&quot;",
      "By unlocking every nozzle F.L.U.D.D can use",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Which of these games was NOT a Nintendo Switch launch title in the United States? ",
    correct_answer: "Voez",
    incorrect_answers: ["Just Dance 2017", "Snipperclips", "Fast RMX"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "Toby Fox&#039;s &quot;Megalovania&quot; was first used where?",
    correct_answer: "Radiation&#039;s Earthbound Halloween Hack",
    incorrect_answers: [
      "Homestuck: [S] Wake",
      "Undertale",
      "Mother: Cognitive Dissonance",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the &quot;Little Lost Girl&quot; Easter Egg in Call of Duty: Black Ops II, what&#039;s the last step required for the achievement?",
    correct_answer: "Raise Hell",
    incorrect_answers: [
      "Freedom",
      "Skewer the Winged Beast",
      "Ascend from Darkness",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Which monster in &quot;Monster Hunter Tri&quot; was causing earthquakes in Moga Village?",
    correct_answer: "Ceadeus",
    incorrect_answers: ["Alatreon", "Rathalos", "Lagiacrus"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "In which mall does &quot;Dead Rising&quot; take place?",
    correct_answer: "Willamette Parkview Mall",
    incorrect_answers: [
      "Liberty Mall",
      "Twin Pines Mall",
      "Central Square Shopping Center",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In what year was Pok&eacute;mon Diamond &amp; Pearl released in Japan?",
    correct_answer: "2006",
    incorrect_answers: ["2009", "2007", "2008"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "When was the Valve Corporation founded?",
    correct_answer: "August 24, 1996",
    incorrect_answers: [
      "December 26, 1994",
      "March 22, 1997",
      "March 13, 1997",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "The walls of the Goldenrod City Gym in &quot;Pok&eacute;mon Gold and Silver&quot; are arranged in the shape of which Pok&eacute;mon?",
    correct_answer: "Clefairy",
    incorrect_answers: ["Bulbasaur", "Pikachu", "Pidgey"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "In Left 4 Dead, which campaign has the protagonists going through a subway in order to reach a hospital for evacuation?",
    correct_answer: "No Mercy",
    incorrect_answers: ["Subway Sprint", "Hospital Havoc", "Blood Harvest"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "What is the last name of the primary female protagonist of Final Fantasy VIII?",
    correct_answer: "Heartilly",
    incorrect_answers: ["Loire", "Almasy", "Trepe"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "In the &quot;Hitman&quot; series, what is the name of the main character?",
    correct_answer: "Agent 47",
    incorrect_answers: ["Agent 27", "Agent Smith", "Agent 67"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question: "What was the first game in the &quot;Battlefield&quot; series?",
    correct_answer: "Battlefield 1942",
    incorrect_answers: [
      "Battlefield Vietnam",
      "Battlefield 2",
      "Battlefield 1",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "What Pok&eacute;mon&#039;s Base Stat Total does not change when it evolves?",
    correct_answer: "Scyther",
    incorrect_answers: ["Pikachu", "Sneasel", "Larvesta"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "In the Kingdom Hearts series, which is not an optional boss you can fight?",
    correct_answer: "Master Yen Sid",
    incorrect_answers: ["Sephiroth", "Julius", "Kurt Zisa"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "The creation of the  Entertainment Software Ratings Board (ESRB) is often associated with Mortal Kombat and what FMV video game?",
    correct_answer: "Night Trap",
    incorrect_answers: [
      "Sewer Shark",
      "The Daedalus Encounter",
      "Corpse Killer",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "&quot;Strangereal&quot; is a fictitious Earth-like world for which game series?",
    correct_answer: "Ace Combat",
    incorrect_answers: ["Jet Set Radio", "Deus Ex", "Crimson Skies"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      " Which of these champions from the MOBA &#039;League of Legends&#039; is NOT a Yordle?",
    correct_answer: "Annie",
    incorrect_answers: ["Veigar", "Tristana", "Lulu"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following Zelda games did not feature Ganon as a final boss?",
    correct_answer: "Majora&#039;s Mask",
    incorrect_answers: [
      "Ocarina of Time",
      "Skyward Sword",
      "Breath of the Wild",
    ],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question: "In Geometry Dash, what is level 13?",
    correct_answer: "Electroman Adventures",
    incorrect_answers: ["Theory of Everything", "Clubstep ", "Clutterfunk"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question:
      "Who is the half-demon character in Divinity: Original Sin 2 who you talk to to transition between acts?",
    correct_answer: "Malady",
    incorrect_answers: ["Meister Siva", "Gawin", "Exter"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "hard",
    question:
      "Counting the Blood and Wine DLC, how many Hero Cards are there in total in The Witcher 3?",
    correct_answer: "25",
    incorrect_answers: ["30", "20", "15"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "easy",
    question:
      "Which of the following was a map that was in Team Fortress 2 at launch?",
    correct_answer: "Gravel Pit",
    incorrect_answers: ["Hoodoo", "Gold Rush", "Upward"],
  },
  {
    category: "Entertainment: Video Games",
    type: "multiple",
    difficulty: "medium",
    question: "In the video game DOTA 2, which of these is NOT a hero?",
    correct_answer: "Dragon Champion",
    incorrect_answers: ["Dark Seer", "Keeper of the Light", "Mirana"],
  },
];

export default data;
