---
layout: post
title: Alliances and the Social Layer
author: helene
feature-img: assets/img/feature-img/alliance-station-1676022.png
thumbnail: assets/img/feature-img/alliance-station-1676022.png
categories: Devlog
tags: [Social]
date: 2026-10-07 13:00:00
excerpt: "A look at the social layer of Project Phoenix – why alliances sit at the centre of the design, how you can belong to several at once, and a reputation system that only ever goes up."
pinned: false
---
In the previous article, we looked at the two layers that structure Project Phoenix: the persistent world, where your colony grows over the long term from one cluster to the next, and Expeditions, the time-limited instances that sit on top of it. Both describe where and how you play. But neither is meant to be played alone, and both only make sense once you understand what fills them: other players, and the groups they form.

This article is about the social layer. We'll start with why alliances sit at the center of the design rather than on the side of it, then look at how you'll be able to belong to more than one alliance at a time, and finally explain how we're approaching player reputation – and why ours only ever goes up.

## Community Comes First

Project Phoenix is built on three design pillars: mechanic depth, community, and the 4X framework. They mix into each other, making them all needed for the others to exist.

The mechanic depth makes the game interesting on a player level, and pushes each player to specialize in exploring, exploiting, expanding or exterminating. No single player can cover every role, so alliances become the way different specialists combine their strengths.

In practice, this means alliance coordination, role specialization, shared intelligence, and mutual protection are not optional side content. They are the intended experience.

## One Main Alliance, Several Guest Memberships

Most games in this genre make alliance membership exclusive and binary. You're in one, you're loyal to it, and joining another means leaving the first. That's a clean solution, but too rigid. Too often does it end up cutting players from part of their friends, dividing the community into friends and enemies and preventing players from playing with different people.

We're doing something different. In Project Phoenix you'll have the ability to join multiple alliances. One will be your main alliance, and you'll be able to hold guest membership in several others.

### How It Works

Your **main alliance** is your primary affiliation. It's the one you're formally identified with in the persistent world. What you achieve counts toward its standing as well as your own.

**Guest alliances** are intended to give you an advantage in interacting with their players in the persistent layer, but their main advantage will be to allow you to join them during Expeditions.

### Why We're Doing This

The practical reason is that people's social circles don't map neatly onto single organizations. You have the group you play with most, and then you have that person from a previous game, the friends who started a month before you and are already established somewhere else, the small crew you run Expeditions with occasionally and maybe even the alliance which was really fun to play against. Under an exclusive model, you have to pick, and most of those relationships quietly die.

The design reason is that it makes the social map denser and more interesting. Players who hold guest memberships across several groups become natural connective tissue – the people through whom information travels, through whom diplomacy gets initiated, through whom a joint operation between two alliances becomes conceivable in the first place. A galaxy where every alliance is a sealed box is a galaxy with far less going on in it.

## Reputation, and Why Ours Only Goes Up

There's a piece of writing that has shaped our thinking here more than almost anything else: [*The Malevolent Indoctrination Engine of Enthusiastic Friendship*](https://www.reddit.com/r/gaming/s/KI6gv7KBwI), by Ejnar Håkonsen.

> When playing team games, we don't have to be judged by our worst moments. Our first death doesn't have to mean 45 minutes of our team flaming us. Playing in random matchmaking doesn't have to mean playing with strangers! You can meet new people and have reason to trust and cheer for them.

The core insight we've taken from it is that reputation systems in multiplayer games almost always get built as punishment infrastructure. Report buttons, negative karma, downvotes, penalty scores. The intent is to identify and discourage bad actors, and the outcome is reliably worse than doing nothing: the systems get weaponized in grudges, they punish people who are simply new or bad at the game, and they hand a permanent, visible mark to anyone a mob decides to target. Meanwhile the actual bad actors learn to game them within a week.

So we're building a reputation system with **no negative path at all**. There is no downvote. There is no report-to-reputation pipeline. There is no way to make someone's profile worse.

### Commendations

What there is instead: specific, named commendations you can award to other players.

The categories are deliberately concrete rather than a generic "good player" rating:

- **Fair play** – for someone who honored an agreement or held to a truce
- **Mentor** – for the one who took the time to help a new player find their footing
- **Good leader** – for whoever organized the team and kept it together
- **Best opponent** – for someone who fought you well
- **Best strategist** – for the person whose plan actually worked
- **Best industrialist** – for the person who kept everyone supplied
- ...and others, with the list likely to grow as we see what players actually want to recognize

These accumulate on a player's profile. Someone with a long history of *fair play* commendations from opponents has demonstrated something real, and it's visible before you decide whether to trust them in a negotiation.

The specificity matters. A single aggregate score tells you nothing – it collapses "reliable ally" and "terrifying opponent" into the same number. Categorized commendations tell you *what kind* of player someone is, which is the information you actually need when deciding whether to bring them into an operation.

Note that **best opponent** exists on purpose. Recognition shouldn't only flow between allies. Some of the strongest relationships in games like this start with someone beating you convincingly and behaving well about it.

### Interaction History

Alongside commendations, your profile keeps a record of **how and when you've positively interacted with other players**. Operations you ran together, trades you completed, Expeditions you shared, commendations exchanged in both directions.

When you look at another player, you can see your own shared history with them at a glance. Have we done this before? Did it go well? When was the last time? For a game where you're constantly encountering people in clusters and Expeditions and then losing track of them, this is straightforwardly useful – it means "do I know this person?" has an answer.

![Player Dossier-Interaction History@2x.png](../assets/img/post-figures/post-3/Player%20Dossier-Interaction%20History%402x.png) *UI Example - Not current*

### The Social Graph

The third piece is that you can see **what people you're connected to have said about a player**.

If you're evaluating a stranger, the commendations from your own friends, alliance mates, and past collaborators are weighted and surfaced first. Not because those opinions are objectively better, but because they're the ones you have context for. A *good leader* commendation from someone whose judgment you already trust means considerably more than the same commendation from an account you've never encountered.

This is how reputation works among people anyway. You don't consult an aggregate score – you ask someone you know. We're just making that legible in the interface.

![Player Dossier-Social Graph@2x.png](../assets/img/post-figures/post-3/Player%20Dossier-Social%20Graph%402x.png) *UI Example - Not current*

### What This Deliberately Cannot Do

To be explicit about the boundaries: this system cannot be used to mark someone as bad. There's no score to tank, no rating to brigade, no way to organize a campaign against a player through it. The worst outcome available is that a profile is empty, which is also what every new player's profile looks like, so it carries no signal on its own.

We're aware this means genuine bad actors won't be flagged by it. That's fine – that's what moderation and reporting tools are for, and those should be separate systems handled by people, not a crowd-sourced number attached to a profile. Reputation is for recognition. Enforcement is a different problem, and conflating the two is precisely the mistake we're trying to avoid.

## In Short

Project Phoenix is designed so that players need each other. Not as a grouping option you can take or leave, and not as something min-maxers optimize into – needed, structurally, as the intended way to play.

Specialization gives players a reason to rely on each other, and alliances are where those different roles come together. Guest memberships mean that belonging to one group never has to cost you the people in another. And reputation is there for a single purpose: making sure the players who made the game better for everyone around them are recognized for it, and remembered.