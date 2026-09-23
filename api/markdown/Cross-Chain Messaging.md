
Protocols and mechanisms that enable communication and data transfer between different blockchain networks, facilitating interoperability and cross-chain applications without centralised intermediaries.

- ### Semantic Classification

- ### Content

  Cross-Chain Messaging enables smart contract functions on one blockchain to trigger actions on another blockchain without centralised intermediaries. Messages travel through relay networks observing source blockchains and submitting proofs to destination chains. Destination chains verify proofs cryptographically before executing handler functions.

  Different architectures trade security and efficiency: light client approaches (IBC, LayerZero) require destination chains to verify source chain consensus, maximising security but introducing verification latency. Optimistic messaging (Connext, Nomad) assumes non-malicious relayers, enabling fast confirmation with security guarantees backed by economic bonds—if relayers misbehave, their bonds are slashed. General message passing enables arbitrary cross-chain smart contract invocations, whilst specialised protocols optimise for specific use cases like token transfers.

  Cross-chain messaging unlocks composable ecosystems where applications deploy on specialised chains optimised for particular functions, then interact seamlessly through messaging layers. Challenges include managing message ordering across asynchronous networks, handling failure scenarios (acknowledgements, timeouts), and ensuring atomic settlement across chains.

- ### Provenance

