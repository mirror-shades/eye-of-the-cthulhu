import { character } from "../assets/stats.js";
let playerList = [];
let cliff = JSON.parse(JSON.stringify(character));
cliff.attributes = {
  STR: 90,
  CON: 70,
  DEX: 70,
  INT: 45,
  SIZ: 90,
  POW: 80,
  APP: 65,
  EDU: 55,
  HP: 16,
  MP: 16,
  LUCK: 70,
  SAN: 80,
};
cliff.skills = {
  ...cliff.skills,
  Charm: 25,
  Credit_Rating: 15,
  Cthulhu_Mythos: 2,
  Dodge: Math.floor(cliff.attributes.DEX / 2),
  Drive_Auto: 40,
  Fighting_Brawl: 46,
  Firearms_Handgun: 60,
  Firearms_Rifle_Shotgun: 40,
  Intimidate: 65,
  Language_Own: 55,
  Law: 40,
  Locksmith: 20,
  Occult: 45,
  Psychology: 60,
  Spot_Hidden: 70,
  Track: 30,
};
playerList.push(cliff);

let emily = JSON.parse(JSON.stringify(character));
emily.attributes = {
  STR: 55,
  CON: 60,
  DEX: 45,
  INT: 75,
  SIZ: 70,
  POW: 65,
  APP: 70,
  EDU: 80,
  HP: 13,
  MP: 13,
  LUCK: 55,
  SAN: 65,
};
emily.skills = {
  ...emily.skills,
  Accounting: 25,
  Art_Writing: 70,
  Art_Photography: 45,
  Charm: 30,
  Credit_Rating: 24,
  Cthulhu_Mythos: 2,
  Dodge: Math.floor(emily.attributes.DEX / 2),
  Fast_Talk: 55,
  History: 30,
  Library_Use: 50,
  Natural_World: 18,
  Occult: 45,
  Persuade: 55,
  Psychology: 60,
  Spot_Hidden: 45,
  Stealth: 35,
};
playerList.push(emily);

let max = JSON.parse(JSON.stringify(character));
max.attributes = {
  STR: 45,
  CON: 75,
  DEX: 50,
  INT: 75,
  SIZ: 80,
  POW: 70,
  APP: 60,
  EDU: 70,
  HP: 15,
  MP: 14,
  LUCK: 50,
  SAN: 68,
};
max.skills = {
  ...max.skills,
  Anthropology: 25,
  Art_Photography: 45,
  Credit_Rating: 16,
  Cthulhu_Mythos: 2,
  Dodge: Math.floor(max.attributes.DEX / 2),
  Fast_Talk: 55,
  Fighting_Brawl: 50,
  History: 30,
  Language_French: 20,
  Library_Use: 40,
  Natural_World: 40,
  Occult: 65,
  Persuade: 30,
  Psychology: 57,
  Science_Physics: 20,
  Spot_Hidden: 45,
};
playerList.push(max);

let mcgee = JSON.parse(JSON.stringify(character));
mcgee.attributes = {
  STR: 60,
  CON: 60,
  DEX: 75,
  INT: 70,
  SIZ: 45,
  POW: 55,
  APP: 55,
  EDU: 90,
  HP: 10,
  MP: 11,
  LUCK: 60,
  SAN: 66,
};
mcgee.skills = {
  ...mcgee.skills,
    Charm: 40,
    Climb: 60,
  Credit_Rating: 41,
  Cthulhu_Mythos: 2,
  Demolitions: 30,
  Dodge: Math.floor(mcgee.attributes.DEX / 2),
  Fighting_Brawl: 40,
  First_Aid: 40,
  Jump: 60,
  Language_Spanish: 30,
  Library_Use: 30,
  Navigate: 40,
  Psychology: 20,
  Science_Geology: 80,
  Science_Chemistry: 40,
  Spot_Hidden: 35,
  Swim: 53,
  Track: 35,
};
playerList.push(mcgee);

let melissa = JSON.parse(JSON.stringify(character));
melissa.attributes = {
  STR: 55,
  CON: 65,
  DEX: 50,
  INT: 80,
  SIZ: 60,
  POW: 70,
  APP: 70,
  EDU: 80,
  HP: 12,
  MP: 14,
  LUCK: 45,
  SAN: 70,
};
melissa.skills = {
  ...melissa.skills,
  Credit_Rating: 45,
  Intimidate: 30,
  Dodge: Math.floor(melissa.attributes.DEX / 2),
  Language_French: 40,
  Law: 25,
  Library_Use: 55,
  Listen: 30,
  Medicine:30,
  Natural_World:40,
  Persuade: 20,
  Science_Biology: 50,
  Science_Chemistry: 40,
  Science_Forensics: 60,
  Spot_Hidden: 50,
  Stealth: 30,
};
playerList.push(melissa);

export { playerList };