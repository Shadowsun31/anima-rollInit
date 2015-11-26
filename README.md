# anima-rollInit
Initiative Generator for Anima Beyond Fantasy RPG

## Usage

You first need to download the *initiative.js* file.  
Then call in your main js file the initiative module

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
