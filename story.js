// The Simulated Bank Robbery - an example Curveship-js story, 2019-11-08
//  Copyright 2019 Nick Montfort
//
// Copying and distribution of this file, with or without modification,
// are permitted in any medium without royalty provided the copyright
// notice and this notice are preserved. This file is offered as-is,
// without any warranty.
//
// This is a non-interactive narrative from the original Curveship,
// Curveshippy 0.5, also available in the Python 3 version, Curveshippy 0.6.

var metadata = { title: "life of a dog", author: "Carolyn Mei", date: "2020",
instructions: "Click below or add your own parameters to the URL to change the “spin” and to create variation in the narrative discourse. You have to use the official names of “actors” for narrator and narratee, which can be found by looking at the code. Examples:",
examples: [ "narrator=dog",
"order=retrograde,speaking=after,narratee=dog,narrator=man",
"speaking=before,narrator=stranger,narratee=dog" ] };

// PLACES first
place.house = new Place("the", "house");
place.yard = new Place("the", "yard");
place.street = new Place("the", "street");

place.house.addView(place.house, "in the yard");
place.yard.addView(place.yard, "out in the yard");
place.street.addView(place.street, "on the street");

// ACTORS next
actor.man = new Actor("a", "drunk man", spatial.in, place.house, pronoun.masculine);
actor.dog = new Actor("a", "dog", spatial.in, place.yard, pronoun.masculine);
actor.stranger = new Actor("a", "kind stranger", spatial.in, place.street, pronoun.feminine);
actor.child = new Actor("a", "child", spatial.in, place.street, pronoun.feminine);
actor.dog.owner = actor.man;

// THINGS next
thing.chain = new Thing("a", "chain", spatial.in, place.yard);
thing.bowl = new Thing("the", "water bowl", spatial.in, place.house);
thing.bottle = new Thing("a", "bottle", spatial.in, place.house);

thing.chain.owner = actor.dog;

// Finally, EVENTS
var DRINK = new Event(actor.dog, "drink from", thing.bowl);
var HIT = new Event(actor.man, "hit", actor.dog);
var CHAIN = new Event(actor.man, "chain", actor.dog, spatial.in, place.yard);
CHAIN.changeState(actor.dog, spatial.in, place.house, spatial.in, place.yard);
var CRY = new Event(actor.dog, "whimper");
var SORRY = new Event(actor.stranger, "feel sorry for", actor.dog);
var RELEASE = new Event(actor.stranger, "break", thing.chain);
RELEASE.reconfigures(actor.dog, "owner", actor.man, null);
var ESCAPE = new Event(actor.dog, "escape", place.yard);
var WANDER = new Event(actor.dog, "wander", place.street);
var PET = new Event(actor.child, "try to pet", actor.dog);
var FLINCH = new Event(actor.dog, "flinch from", actor.child);
var SLEEP = new Event(actor.dog, "lay", null, spatial.in, place.street);
var COLD = new Event(actor.dog, "feel cold");
var SAD = new Event(actor.dog, "feel sad");
var THINK = new Event(actor.dog, "think of", actor.man);
var MISS = new Event(actor.dog, "miss", actor.man);

var world = new World(place, actor, thing, eventSeq);

function run() {
    var spin = getParameters(world.actor);
    narrate(metadata, spin, world);
};
