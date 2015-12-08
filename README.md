# anima-rollInit
Initiative Generator for Anima Beyond Fantasy RPG.

## How does it work?
Anima beyond fantasy RPG initiative rolls consist in :
The base init of the character that depend of his lvl, his Dex and Agi caracs and his weapons (plus a lot of modifiers and powers).  
The modifiers applied by the GM (weather, critical wounds, etc).  
A D100 roll.  
> Sample:  
Bob is a character lvl 2. His base init is 75 (he is pretty quick for his lvl :) ).  
He suffer from a previous wound so the GM applies a -10 malus.
Bob rolls a 89 on his dice.  
the result is : 75 - 10 + 89 = 154

But that's ot all, there is a concept of **open rolls** (or critical) in Anima.  
In few words, il allows to reroll and add the new result when you roll a 90+.  
And there is also **Fumbles** when you roll 1, 2 or 3 (each one has a different effect).
> Sample:  
Bob rolls a 2 this time.  
a 2 Fumble for init roll = -100.  
So the result is : 75 - 10 - 100 = -35.  
The third time is better and Bob rolls 92 and his second roll is 74.  
So the result is : 75 - 10 + 92 + 74 = 231

There is also some advanced concept like **Limitation of rolls** and **Additional open rolls** that depend on the natura and gnosis of the character.

Little by little I'll try to add everything I can in this generator so it will be used in different ways (console, website, etc).

## Usage 
### angularJS Version  

TODO

### node.js Version  

You first need to download the *nodeInit.js* file.  
Then call in your main js file the initiative module.

```
let initiative = require('path/nodeInit');
let init = initiative();
```

##### init.rollInit(base_init,modif,natura[,logEnabled])   
> base_init Integer  
modif Integer  
natura Integer  
logEnabled boolean  

This function returns the result of an initiative roll.  
It needs the base initiative of the character, the sum of differents modifiers that apply to the character, the character's natura (for double rolls like 22, 77, etc.) and in option if you want to log the details of the roll (in console).
```
init.rollInit(50, 15, 0);
// this will return the roll for a character that has 50 in init and a bonus of +15

init.rollInit(50, 15, 0, true);
// the same roll but the result will be a JSON Object 
```

**Here a little list of results when log is disabled :**
```
50 + 11(1) + 23 + 0 = 84
50 + 91 + 40 + 0 = 181
50 + 50 + 0 = 100
50 + 15 + 0 = 65
50 + 71 + 0 = 121
50 + 83 + 0 = 133
50 + 24 + 0 = 74
50 + 42 + 0 = 92
50 + 59 + 0 = 109
50 + 51 + 0 = 101
50 + 76 + 0 = 126
50 + 59 + 0 = 109
50 + 20 + 0 = 70
50 + 34 + 0 = 84
50 + 32 + 0 = 82
50 + 99(5) + 91 + 50 + 0 = 290
50 + 91 + 99(1) + 11(2) + 0 = 251
50 + 10 + 0 = 60
50 !Fumble! -125  + 0 = -75
```

**Here a little list of results when log is enabled :**
```
{
  "log" : "50 + 83 + 0 = 133",
  "init": 133
}

{
  "log" : "75 + 7 + 0 = 82",
  "init" : 82
}

{
  "log" : "75 + 95 + 50 + 0 = 220", 
  "init": 220
}
```


##### init.rollInitFromJSON(json)  
> json JSON Object that contain :   
"natura" : Integer  
"base_init" : Integer    

This function will add to your JSON Object 2 params, first "final_init" an Integer that contain the result of the roll for your object, then "detail_init" a String that contain the complete detail of the roll.   

A little example wit a JSON object that contain 2 players :   

```
{
  "pjs" : [
    {
      "name" : "Bob",
      "natura" : 15,
      "base_init" : 75
    },
    {
      "name" : "Tchad",
      "natura" : 0,
      "base_init" : 50
    }
  ]
}
```

We will use the following function :   

```
init.rollInitFromJSON(myJSONObj.pjs);
```

And the function will be return a JSON object like that :   

```
{
  "pjs" : [
    {
      "name" : "Bob",
      "natura" : 15,
      "base_init" : 75,
      "detail_init" : "75 !01 Fumble! -125  + 0 = -50",
      "final_init" : -50
    },
    {
      "name" : "Tchad",
      "natura" : 0,
      "base_init" : 50,
      "detail_init" : "50 + 16 + 0 = 66",
      "final_init" : 66
    }
  ]
}
```
