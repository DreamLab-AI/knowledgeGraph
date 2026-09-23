
Polkadot XCM (Cross-Consensus Messaging) is a format and language for communicating intent between consensus systems within and beyond the Polkadot network. Rather than transferring assets directly, XCM expresses instructions that a receiving chain interprets and executes locally, enabling asset transfers, remote calls and governance actions across parachains and the relay chain. It is transport-agnostic, relying on underlying delivery layers such as XCMP and HRMP, and is designed to be extensible and version-negotiated.

- ### Overview
	- Polkadot connects multiple application-specific chains (parachains) to a shared relay chain that provides pooled security and ordering.
	- XCM defines what messages mean across these heterogeneous consensus systems, abstracting over how messages are physically delivered.
	- Delivery is handled by transport layers such as HRMP (relayed via the relay chain) and the planned XCMP for direct parachain-to-parachain channels.
	- An XCM message is an ordered list of instructions (e.g. withdraw asset, buy execution, deposit asset) executed by an on-chain virtual machine.
	- Version negotiation lets chains running different XCM versions agree on a common dialect, supporting gradual upgrades.
- ### Mechanisms
	- Instruction model: messages are programs of typed instructions interpreted by the Cross-Consensus Virtual Machine on the destination chain.
	- Asset abstraction: assets are described by location and amount, so the same instruction works across different chains' native tokens.
	- Fee payment: senders include instructions that purchase local execution weight, ensuring the destination is compensated for processing.
	- Origin and barriers: receiving chains apply barrier filters to authorise which origins may execute which instructions, a core safety mechanism.
	- Error handling: messages can specify how to react to partial failures, including refunds and reporting.
- ### Applications
	- Cross-chain asset transfers between parachains without a custodial bridge.
	- Remote execution where one chain triggers a [[Smart Contract]] or runtime call on another.
	- Cross-chain governance and staking actions coordinated across the ecosystem.
	- Liquidity routing and DeFi composition spanning multiple parachains.
- ### Provenance

