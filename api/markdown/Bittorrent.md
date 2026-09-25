BitTorrent is a peer-to-peer protocol for distributing files by splitting them into pieces that participants download from and upload to one another rather than from a single server. Each participant who holds the complete file can seed it, while downloaders simultaneously share the pieces they already have, so aggregate capacity grows with demand. The protocol uses content hashing to verify pieces and a tracker or distributed hash table to help peers discover one another.

### Overview

- A file is divided into fixed-size pieces, each identified and verified by a cryptographic hash.
- A torrent descriptor lists the piece hashes and the means of locating other participants.
- Peers that hold the whole file seed it; those still downloading leech while also uploading what they have.
- Capacity scales with the swarm size, so popular content distributes faster as more peers join.

### Mechanisms

- Tit-for-tat choking rewards peers that reciprocate upload bandwidth, discouraging free-riding.
- Rarest-first piece selection prioritises scarce pieces to keep the swarm healthy.
- A [[Distributed Hash Table]] provides trackerless peer discovery over an [[Overlay Network]].
- Hash verification rejects corrupt or malicious pieces before they propagate.

### Applications

- Efficient [[File Sharing]] and bulk [[Data Distribution]] for large datasets and software images.
- Backing layers for [[Decentralized Storage]] and content-addressed systems like [[IPFS]].
- Game and operating-system update delivery that offloads bandwidth from origin servers.
- Resilient [[Replication]] of archives across volunteer or institutional peers.

### Provenance

