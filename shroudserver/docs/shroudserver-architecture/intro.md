---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Architecture

## Overview 

ShroudServer is a big project, with lots of moving parts. This documentation will try to cover the architecture and design decisions behind the project.

:::note

This will be updated with more details when I have more time.

:::

### High level architecture
ShroudServer is made up of multiple layers, that all have their own responsibilities.
Each layer is separated from the others, and communicates through well-defined interfaces.

#### UDP layer
ENet-CSharp, will handle the low level networking, connections and packets.
Abstracts away networking details and transforms raw packets to Photon operations.
Queues incoming operations to be handled by upper layers.

This layer separates all networking code from game logic.
Implements interfaces provided by upper layers, to move data up and down the stack.

#### Application layer
Application layer is using CQRS pattern to separate read and write operations.
It uses Wolverine framework to handle messages and commands pipelines.
Handles all game logic, and is responsible for coordinating game state changes.

This layer does not care, where the input and output comes and goes to/from.
Later on, some operations could come from other sources, like admin tools.

#### Infrastructure layer
As a Database, there is MartenDB, using PostgreSQL as a backend.
It's an event sourced database, that allows us to store game state changes as events.

I know the actual implementation uses MongoDB, but I think event sourcing is good fit for MMORPG backend.

#### Domain layer
Domain has all the events and aggregates that represent the game state.
It does not have any dependencies to other layers, and is pure C# code.
 

