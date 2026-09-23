
A Bootstrap Node is a well-known, stable network entry point that newly joining peers contact to obtain their initial list of active participants in a peer-to-peer blockchain network. By providing a curated, long-lived set of peer addresses, bootstrap nodes solve the cold-start problem: without them a new client would have no means of discovering the network. They do not typically validate or store blocks themselves; their function is purely topological—seeding new participants into the gossip network so that subsequent peer discovery can proceed organically.

A Bootstrap Node is a well-known, stable network entry point that newly joining peers contact to obtain their initial list of active participants in a peer-to-peer blockchain network. By providing a curated, long-lived set of peer addresses, bootstrap nodes solve the cold-start problem: without them a new client would have no means of discovering the network.

- ### Content

  When a blockchain client launches for the first time it has no knowledge of the live network. Bootstrap nodes provide the answer through one of two mechanisms: a hardcoded DNS seed list (e.g. Bitcoin's `seed.bitcoin.sipa.be`) or a list of well-known IP addresses compiled into the client software. The client contacts one or more of these entry points, requests a sample of known active peers, and then begins building its own routing table through repeated peer-exchange messages.

  Security considerations are significant. Because bootstrap nodes are publicly known and trusted at startup, they are high-value targets for eclipse attacks—attempts by an adversary to isolate a client by populating its peer list exclusively with attacker-controlled addresses. Mitigations include hardcoding multiple independent DNS seeds operated by different parties, storing previously seen peers in a local database (addr.dat in Bitcoin), and using randomised peer selection to prevent deterministic partitioning.

  Bootstrap nodes should not be confused with long-term "anchor" peers or supernodes in some networks. Their role terminates once the joining node has established a sufficient number of independent connections: typically eight outbound connections in Bitcoin. After that, peer discovery continues autonomously via addr/addrv2 gossip messages without further reliance on the original bootstrap sources.

  In permissioned blockchain frameworks such as Hyperledger Fabric, the analogous role is played by orderer discovery and gossip anchor peers, which serve the same topological function within a controlled membership environment.

- ### Provenance

