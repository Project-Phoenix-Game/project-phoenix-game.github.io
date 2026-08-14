---
layout: post
title: Running a Space Station
author: helene
feature-img: assets/img/feature-img/willgard-spaceship-5570682.jpg
thumbnail: assets/img/feature-img/willgard-spaceship-5570682.jpg
categories: Devlog
tags: [Gameplay]
date: 2026-08-15 13:00:00
excerpt: "A breakdown of Project Phoenix's core game loop – jumping into clusters, building operations, dec, the when to move on – plus a look at Expeditions, the time-limited instances layered on top."
pinned: false
---

In order to understand what Project Phoenix will actually feel like to play, it helps to start with the core game loop: what you’ll be doing as a player, what decisions you’ll be making repeatedly, and how the game’s pace is structured over time. In this article, we’ll break down the game loop step by step and will also talk about the Expeditions – the time-limited instances that sit on top of the persistent layer.

## The Core Game Loop: Commanding a Mobile Colony

In Project Phoenix, the player controls a large station – a colony – moving through regions of known space. The colony acts as home base, production center, logistics hub, and primary military asset.

The station is deliberately difficult and expensive to move. Relocating it consumes large amounts of resources and comes with significant downtime. Each jump is a strategic decision that shapes short and long-term plans. Choosing when to move, where to go next, and how long to stay in a region forms the backbone of the core loop.

### Arriving in a New Cluster

The galaxy is not fully unknown. Factions have already surveyed broad regions, so players have approximate data about different clusters: some are biased toward specific resources, others toward fuel, others toward advantageous topography – choke points, safe pockets, and so on.

However, this information is only approximate. The detailed layout of systems, specific deposits, local threats, and traffic patterns will require players to explore the area.

After a station jump into a new cluster, the first phase is information gathering:

- Scanning nearby systems.
- Sending out small fleets.
- Mapping resources, hostiles, and traversal routes.

Around the cluster’s target area – a high-density resource zone – sits a relatively safer perimeter where stations can claim territory. This perimeter is the primary area for establishing a foothold: placing long-term structures, securing logistics routes, and competing with nearby stations for the best positions. Even though it is safer than the target area, it is still contested, and what you build here directly supports operations deeper in the cluster.

### Building an Operation

Parking the station defines your strategic anchor point, but does not, by itself, generate value. To exploit a cluster, you need to assemble an operational network around that anchor:

- **Infrastructure:** Mining and processing structures placed near deposits in the target area and in surrounding systems.
- **Logistics:** Routes and convoys moving materials between outposts, intermediate facilities, and the station.
- **Station progression:** Modules and upgrades that increase storage, throughput, defensive capabilities, and fleet capacity.
- **Fleets:** Task-oriented groups of ships assigned to escort convoys, clear hostile pockets, or contest high-value objectives.
- **Security:** Response forces and defenses to deal with pirates, NPC factions, and other disruptions inside and around the target area.

As multiple players build comparable networks in the same cluster, it becomes a shared economic and strategic space. Players negotiate temporary agreements, form local spheres of influence, and compete over limited high-value resources. Direct violence between the colonies is, however, strictly forbidden in that section of space.

Alliances are an expected part of this environment. The game’s systems are designed so that long-term success is strongly biased toward coordinated groups rather than isolated stations. Alliances can:

- Share information about the current cluster you’re in.
- Coordinate jumps and staging.
- Pool resources for large-scale operations.

The upside is real: alliance members cover each other's defense during downtime instead of shouldering it alone, specialize into roles – industry, intel, logistics, military – that feed each other, and trade resources and components at friendlier prices than on the general market. The downside of going solo isn't danger – your home system stays protected whether you're in a group or not – it's about pacing. 

The design goal is not to make solo play impossible – a solo station can still be self-sufficient and safe – but to structure the economy and geography so that collective action carries a clear, compounding advantage over time.

### Moving On

Clusters are not permanent solutions. Over time, high-yield deposits are claimed or depleted, local power structures solidify, and room for upward mobility diminishes. In parallel, new clusters become available with more suitable resource mixes or strategic positions.

At some point, the marginal benefit of staying in a cluster falls below the expected value of moving. At that point, you commit to another station jump.

Because the galaxy has been partially charted, this decision is not blind. You select a destination based on:

- Current resource deficits: fuel, rare materials, etc.
- Desired risk profile: safer rebuilding vs. frontier opportunities.
- Alliance-level objectives and movements.

Summarized, the loop is:

1. Jump into a new cluster.
2. Map the environment and refine your understanding of its resources and threats.
3. Build infrastructure and logistics around the station.
4. Compete and cooperate with other actors in the cluster.
5. Decide when staying no longer makes sense, then relocate.

This loop defines the long-term rhythm of play for a colony in Project Phoenix.

## Expeditions: Time-Limited Instances

On top of the persistent colony loop, the game adds a second layer of activity: time-limited servers, referred to here as **Expeditions**.

If the persistent layer is about incremental expansion across known space, Expeditions are concentrated temporary expansions into uncharted regions, with clear start and end conditions and stronger constraints. They are designed to create variability in rules and pacing while still connecting back to the main progression.

### Sponsored Expeditions

Expeditions are framed as faction-sponsored operations. A major faction detects something of interest in unexplored territory and issues contracts to commanders willing to participate.

From a systems perspective:

- Players select a sponsoring faction.
- The faction defines starting kits: ships, technology, and resources.
- In some configurations, players can import a limited, curated subset of assets from their persistent colonies.
- Establish an initial foothold under constrained conditions.

Once the expedition begins, participants are no longer operating in their usual cluster. They enter a new instance with its own topology, resource layout, and rule set, and must:

- Prioritize scouting to identify key objectives early.
- Manage resources under higher pressure than in the persistent layer.
- React to server-specific modifiers and constraints.

Each Expedition is configured to produce a distinct strategic environment rather than a simple copy of the base game.

### Configuration Space and Meta

Expeditions can vary along several axes, for both narrative and mechanical reasons:

- **Duration:** Short events (hours) for high-intensity sessions, or long campaigns (weeks to months) that favor planning and coordination.
- **Scale:** Different map sizes and player counts, from dense, high-interaction arenas to more spacious setups where information and positioning matter more.
- **Topography:** Different resource distribution, terrain hazards, and the NPCs or exploration loot you’re likely to encounter there.
- **Win conditions:** Single global objectives, faction-specific goals, or multiple viable “success” states: economic dominance, control of key locations, completion of contracts, etc.
- **Secondary objectives:** Optional tasks provided by the sponsoring faction that influence rewards, reputation, or downstream narrative outcomes.
- **Social constraints:** Servers that explicitly allow or encourage alliances, and others that enforce stricter limits on cooperation.
- **Combat focus:** Events biased toward PvE, PvP, or mixed PvPvE, always with AI threats present in some form.

Because these parameters can shift from one event to the next, each server is expected to develop its own meta. Strategies that are optimal under one configuration may be weak or non-viable under another. A large part of the intended experience is reading the conditions correctly and adapting your approach accordingly.

### Integration With the Persistent Layer

Expeditions are not designed as isolated side modes. They interact with the long-term layer in several ways:

- Performance in expeditions can grant resources, technologies, or other benefits that feed back into the player’s main colony.
- Faction-level results can affect the broader setting, adjusting relative influence, territory, or narrative beats.
- Rivalries, alliances, and reputations formed during expeditions can carry over socially into regular cluster play.

Taken together, the **persistent colony loop** and the **episodic Expeditions** define the core structure of Project Phoenix. The first establishes long-term growth and positioning. The second introduces controlled spikes in intensity and variation without breaking that continuity.

## Conclusion

At a high level, Project Phoenix is built around two loops that serve different time scales. The persistent layer is where you make long-term progress: choosing a cluster, building an operational network around your colony, and deciding when it’s worth paying the cost to move on. Expeditions sit on top of that as time-limited instances: they start with stronger constraints, push you toward clearer objectives, and end with outcomes that matter back in the persistent game.