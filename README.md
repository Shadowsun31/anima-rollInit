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

You first need to download the *initiative.js* file.  
Then call in your main js file the initiative module.

```
let initiative = require('path/initiative');
let init = initiative();
```

##### init.rollInit(base_init,modif,natura[,logEnabled])   
> base_init Integer  
modif Integer  
natura Integer  
logEnabled boolean  

This method returns the result of an initiative roll.  
It needs the base initiative of the character, the sum of differents modifiers that apply to the character, the character's natura (for double rolls like 22, 77, etc.) and in option if you want to log the details of the roll (in console).
```
init.rollInit(50, 15, 0);
// this will return the roll for a character that has 50 in init and a bonus of +15

init.rollInit(50, 15, 0, true);
// the same roll but with log in console
```




**Here a little list of results :**
```
50 + 11(1) + 23 + 0 = 84
50 + 91 + 40 + 0 = 181
50 + 50 + 0 = 100
50 + 8 + 0 = 58
50 + 56 + 0 = 106
50 + 48 + 0 = 98
50 + 34 + 0 = 84
50 + 34 + 0 = 84
50 + 66(2) + 0 = 116
50 + 83 + 0 = 133
50 + 25 + 0 = 75
50 + 5 + 0 = 55
50 + 28 + 0 = 78
50 + 38 + 0 = 88
50 + 75 + 0 = 125
50 + 36 + 0 = 86
50 + 56 + 0 = 106
50 + 97 + 86 + 0 = 233
50 + 64 + 0 = 114
50 + 31 + 0 = 81
50 + 96 + 67 + 0 = 213
50 + 79 + 0 = 129
50 + 15 + 0 = 65
50 + 71 + 0 = 121
50 + 83 + 0 = 133
50 + 24 + 0 = 74
50 + 42 + 0 = 92
50 + 59 + 0 = 109
50 + 51 + 0 = 101
50 + 40 + 0 = 90
50 + 66(2) + 0 = 116
50 + 90 + 11(9) + 0 = 151
50 + 64 + 0 = 114
50 + 90 + 19 + 0 = 159
50 + 40 + 0 = 90
50 + 59 + 0 = 109
50 + 23 + 0 = 73
50 + 10 + 0 = 60
50 + 20 + 0 = 70
50 + 34 + 0 = 84
50 + 33(2) + 0 = 83
50 + 71 + 0 = 121
50 + 75 + 0 = 125
50 + 61 + 0 = 111
50 + 19 + 0 = 69
50 + 94 + 74 + 0 = 218
50 + 36 + 0 = 86
50 + 63 + 0 = 113
50 + 70 + 0 = 120
50 + 42 + 0 = 92
50 + 93 + 48 + 0 = 191
50 + 74 + 0 = 124
50 + 84 + 0 = 134
50 + 53 + 0 = 103
50 + 12 + 0 = 62
50 + 78 + 0 = 128
50 + 48 + 0 = 98
50 + 33(9) + 0 = 83
50 + 38 + 0 = 88
50 + 91 + 66(10) + 0 = 207
50 + 22(1) + 0 = 72
50 + 53 + 0 = 103
50 + 68 + 0 = 118
50 !Fumble! -75  + 0 = -25
50 + 26 + 0 = 76
50 + 69 + 0 = 119
50 + 61 + 0 = 111
50 + 64 + 0 = 114
50 + 73 + 0 = 123
50 + 28 + 0 = 78
50 + 76 + 0 = 126
50 + 59 + 0 = 109
50 + 20 + 0 = 70
50 + 34 + 0 = 84
50 + 32 + 0 = 82
50 + 99(5) + 91 + 50 + 0 = 290
50 + 12 + 0 = 62
50 + 55(10) + 0 = 105
50 + 56 + 0 = 106
50 + 53 + 0 = 103
50 + 49 + 0 = 99
50 + 72 + 0 = 122
50 + 67 + 0 = 117
50 + 70 + 0 = 120
50 + 87 + 0 = 137
50 + 6 + 0 = 56
50 + 43 + 0 = 93
50 + 95 + 49 + 0 = 194
50 + 71 + 0 = 121
50 + 51 + 0 = 101
50 + 58 + 0 = 108
50 + 69 + 0 = 119
50 + 15 + 0 = 65
50 + 95 + 61 + 0 = 206
50 + 13 + 0 = 63
50 + 82 + 0 = 132
50 + 27 + 0 = 77
50 + 36 + 0 = 86
50 + 29 + 0 = 79
50 + 91 + 99(1) + 11(2) + 0 = 251
50 + 10 + 0 = 60
50 !Fumble! -125  + 0 = -75
```
