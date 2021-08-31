function aboutScroll() {
    document.getElementById("about-me").scrollIntoView();
}

funFacts = ["I'm from New Jersey.",
"My 1-min typing test record is 120 wpm.",
"I make beats; I also spit bars.",
"I can touch the rim of a basketball hoop",
"I'm currently researching neurosurgical robotics at the Duke Brain Tool Lab.",
"I'm a Philly sports fan, except for basketball, where I'm a Lebron fan.",
"Statistically speaking, I probably did not get enough sleep last night.",
"My favorite cultivar of apple is Braeburn.",
"My favorite composer is Dubussy",
"I have tragically flat feet",
"I eat creatine on the daily, most of the time",
"I can juggle",
"I once grew carolina reaper peppers at my house; they're spicy",
"Shout out Henry"
];

factFun = document.getElementById("funfact");

function funFact() {
    // alert("yo");
    factFun.innerText= funFacts[Math.floor(Math.random() * funFacts.length)];
}