
Inter-Blockchain Communication (IBC) is a standardised protocol that enables independent, sovereign blockchains to exchange data and transfer tokens trustlessly by verifying each other's consensus state. It defines transport, authentication and ordering semantics in which light clients on each chain verify the counterparty's headers, and relayers carry packets and acknowledgements between them. Originating in the Cosmos ecosystem, IBC provides a general-purpose interoperability layer for token transfers, cross-chain messaging and composable multi-chain applications.

- ### Overview
	- IBC separates the transport, authentication and ordering layer from the application semantics carried over it.
	- Each chain runs a light client tracking the counterparty's headers, so packets are verified against the source chain's [[Consensus Mechanism]].
	- Off-chain relayers are permissionless: they move packets and acknowledgements but cannot forge messages.
	- The model contrasts with custodial or multisig bridges by minimising trusted intermediaries.
- ### Mechanisms
	- **Light-client verification**: each chain cryptographically verifies the other's state commitments.
	- **Packet lifecycle**: ordered or unordered channels carry packets with timeouts and acknowledgements.
	- **Token transfer (ICS-20)**: fungible tokens move across chains with escrow and voucher minting.
	- **Relayer network**: independent relayers ensure liveness without holding authority over correctness.
- ### Applications
	- Cross-chain token transfer across the Cosmos ecosystem of [[Cosmos SDK]] chains.
	- Cross-chain [[Decentralised Finance]] including interchain accounts and liquidity routing.
	- Generalised cross-chain messaging for composable multi-chain applications.
	- Interoperability bridging toward ecosystems such as [[Polkadot]] and beyond via [[Cross-Chain Bridge]] adapters.
- ### Provenance

