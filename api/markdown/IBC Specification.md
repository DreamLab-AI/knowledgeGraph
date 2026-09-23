
The Inter-Blockchain Communication (IBC) specification is an open protocol standard for authenticated, ordered, and reliable message passing between independent distributed ledgers. Originating in the Cosmos ecosystem, it uses light-client verification and Merkle proofs so that two chains can trustlessly relay packets such as token transfers without a trusted intermediary. IBC underpins much of the modular and cross-chain interoperability landscape.

- ### Content
  - IBC separates a transport, authentication, and ordering layer (TAO) from the application layer, allowing arbitrary packet semantics atop a common connection-and-channel handshake. Relayers carry packets and proofs between chains, while each chain verifies the counterparty's consensus via an embedded light client.

