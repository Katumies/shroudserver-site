---
sidebar_label: 'Photon Networking'
sidebar_position: 2
---

# Photon Networking

## Overview

Let's dive deeper into how Shroud of the Avatar utilizes Photon Unity Networking (PUN) to manage multiplayer interactions.

### Photon Server v4
They are running [Photon Server v4](https://doc.photonengine.com/server/v4/getting-started/photon-server-in-5min) on-premise, meaning, they host that server in some data center or backoffice.
Evidence from the client side points that they are using [lite-application example](https://doc.photonengine.com/server/v4/applications/lite-application) as a base for their custom server logic.

Photon has a custom binary protocol over TCP/UDP, and it's based on [ENet](http://enet.bespin.org/), a reliable UDP networking library.
Photon products are not open source, but they provide a [SDK](https://www.photonengine.com/sdks#server) for free to develop and run your own server.

#### Photon running licenses
Photon uses licenses based on CCU (concurrent users). They have a free tier for up to 20 CCU, but additional CCU comes with the price.

#### Photon code licenses
It's a bit complicated, but in short, I do not use any photon sdk code in my projects, to be safe.

### Short intro to Photon protocol
Photon can handle multiple different connection types, including WebSocket, http, UDP, and TCP. UDP is the commong game networking protocol, and it's the one used by SotA + Photon.
Photon protocol is a custom binary protocol, that is not documented, but there are some sources here and there, that I have used to reverse engineer it.

Photon uses terms like "Operation", to abstract networking concepts. An operation is anything that needs to be sent between client and server.
For example, "RequestLog" is an operation that client uses to send logging information to the server.
There's something like 150 different operations, that all needs to be handled by the server.
There's RPC (remote procedure call) operations also, that invoke a method on a remote client or server.

UDP layer is handled by modified ENet, that runs underneath Photon server. That is also closed

