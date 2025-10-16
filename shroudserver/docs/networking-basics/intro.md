---
sidebar_label: 'Introduction'
sidebar_position: 1
---

# Introduction

## Overview

Shroud of the avatar has a complex networking architecture, that allows the game to be played in online and offline mode.
Offline mode is completely self contained, and does not require any network connection.
Online mode is what we will be focusing on in this document.

I'll try to focus on the "from SotA perspective", and skip the non-concerning details.

### Photon Unity Networking (PUN)
The game uses Photon Unity Networking (PUN) for its multiplayer functionality.
PUN is a high level networking library that abstracts away the low level networking details, and provides a simple API for developers to use.
PUN is built on top of the Photon Realtime service, which is a service that provides matchmaking, lobbies, and rooms for multiplayer games.

SotA uses [PUN 1](https://doc.photonengine.com/pun/v1/getting-started/pun-intro) and as a server, there is a [Photon Server v4](https://doc.photonengine.com/server/v4/getting-started/photon-server-intro), that can be run on-premise.

### Client-Server Architecture
SotA uses a client-server architecture, where the game client communicates with the game server to send and receive data.
The game server is responsible for managing the game state, and ensuring that all clients are synchronized.

However, there is also a peer-to-peer connections, that may or may not be relayed through the server. One client is on a scene is always the [master client](https://doc.photonengine.com/pun/v1/gameplay/hostmigration), and is somewhat responsible for the game state on that scene.



