---
sidebar_label: 'Photon Networking - ENet'
sidebar_position: 4
---

# ENet

## Overview

A deeper look into ENet, the reliable UDP library that Photon is based on.

### What is ENet?


> ENet's purpose is to provide a relatively thin, simple and robust network communication layer on top of UDP (User Datagram Protocol). The primary feature it provides is optional reliable, in-order delivery of packets.

[ENet Features](http://enet.bespin.org/features.html)

It's used underneath Photon and that's why I chose it for this project also. It required quite a bit of modifications to start the communication with the SotA PUN client.

### ENet license
MIT, so it's very permissive and allows commercial use.

### ENet-CSharp
[ENet-CSharp](https://github.com/Molth/enet-csharp) is a pure C# translation of the original ENet C library.
It from what I can tell, a very close translation of the original C code. Very low level, unsafe C# code, using pointers and structs and manual memory management.
It has very low memory print ( just over 15Mb on debug mode ) and it's very fast.

#### ENet-CSharp modifications
I had to make some modifications to the original ENet-CSharp code, to get it working with Photon protocol.
ENet's original packet structure was not compatible with photon, but with some tweaks, I was able to get it working.

Changes I had to make:
- New OutgoingCommand/IncomingCommand structure. 
  - Enet sends commands in array and just reads them until end.
  - Photon header has command count, so I had to change reading and writing of commands to use that.
- New Connection handling.
  - Connection initialization and verifying is very different from photon.
- Acknowledgement handling.
  - Photon has different way of handling acks, so I had to change that also.
- PeerId handling.
  - Photon uses peerId to identify connections.
- And some more, will document everything later.

ENet is working on the lowest level of the server, handles zero game logic, just raw packets and connections.
It provides events for connections and packet receiving, and that's it.

