# PunchOut Lite

[PunchOut Lite Live][gh-pages]

[gh-pages]:https://tulen.github.io/PunchOut/

Punch Out Lite is a boxing game that is a simplified browser port of the game Mike Tyson's Punch Out!!! that was originally released on the NES console in 1987. This version utilizes HTML5 Canvas in order to handle the sprite rendering and animation as well as vanilla JavaScript to handle player input and game logic.

## Features

There are several features present in this port of the game that are included in order to best recreate a gameplay experience similar to the original

### Game Entity Animation

![Game Entity Animation](/docs/gifs/entity-animation.gif)

The application makes use of four separate canvas layers, each responsible for housing different the game objects (background, player, opponent, referee).

The application makes use of several spritesheet images that house the different sprites necessary for animating the game entities. By housing the different images to be used for a given animation and using a `window.requestAnimationFrame` loop, conditional frame rendering logic such as `if data.animationFrame % 10 === 0 // then change entity frame` allows the application is able to simulate real-time game animation.

### Player Move Set

![Player Move Set](/docs/imgs/player-moves.png)

The player has access to four moves: left punch, right punch, left dodge and right dodge, each of these move bound to different keyboard inputs through the use of vanilla JavaScript event listeners. Several checks are put into place to prevent a user from holding down a key and repeatedly firing events.

The game is able to update the game state according to whether or not a given user input is fired during a specific game frame. For example, if a player fires a punch while `data[data.currentOpponent].state.name === "idle"`, a punch is blocked and the corresponding animation, SFX, etc.

### Opponent AI

The game currently features a single opponent that fires a punch animation at fixed time intervals in order to provide the user with a simple pattern to figure out in order to win the match. As more opponents are added, they will feature more complex punch patterns /AI.

### Heart Meter & Energy Meter Systems

![Heart Meters](/docs/imgs/heart-meters.png)
![Energy Meter](/docs/imgs/energy-meter.png)

The game utilizes HTML element displays that update real-time using JavaScript DOM manipulation that fire during given game conditions. The player wins by successfully deplete the opponent heart meter. The player loses by having their own heart meter depleted. The energy meter system was implemented in order to prevent a player from merely spamming a punch by provides an energy cost to firing a punch. When energy is depleted, players are unable to punch and this meter can only be replenished by successfully dodging an opponent punch.


### Game BGM / SFX

![ BGM Mute](/docs/imgs/bgm-mute.png)

The game features background music and sound effects from the original game. If desired, a user is able to mute/unmute the background music.

### Moving Forward

Features planned for future implementation include:

- Polish Animations
- Add more detailed win conditions: TKO (3 knock-outs vs 1 for automatic win)/ Decision win (points system), opponent has chance to get up after knockouts.
- Expand player moveset: Left body blow, Right body blow, Duck, Block, Star Punch.
- Add opponents with different / more advanced fighting patterns. (Increasing Difficulty)
- Add player chance to get up on knockout, referee down count animation
