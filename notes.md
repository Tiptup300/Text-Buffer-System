Okay so I need to modify how it does a couple things.

1. Have it render each character one by one, it can have hardcoded values right now for font character width height.
2. I need to have to have the abillity to do two types of renderings.
   1. probably use a system where I have an object that I can add passes.
   2. One pass would be where it would be the drawing background layer, default to 0,0.
   3. Then pass two+ could have specific elements such as fillin characters that has an x,y. It would do the logic to determine, what's background and what's foreground.
   4. I guess I could just have it setBackground(), addForeground()



setBackground(
`
XXXXXXXXXXXXXXXXXXXXXXXXXX
X                        X
X                        X
X                        X
X                        X
X                        X
XXXXXXXXXXXXXXXXXXXXXXXXXX
`,
COLORS.FOREGROUND_SECONDARY
);

addForeground(
`
XXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXX
XXXXXXXXXXXXXXXX
`, " {2, 0});
)