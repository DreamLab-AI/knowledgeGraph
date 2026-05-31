- ### Definition
  - Optimism is an Ethereum layer-2 scaling network that uses optimistic rollup technology to process transactions off the main chain while inheriting Ethereum security. Launched on mainnet in late 2021 by OP Labs, it batches transactions and posts compressed data and state commitments to Ethereum, assuming validity unless challenged within a dispute window. It is closely associated with the OP Stack, a modular open-source framework for building rollup chains, and the broader Superchain concept that links such chains. The OP token governs the Optimism Collective and funds public-goods initiatives through retroactive funding rounds.

- ### Semantic Classification
  - owl-class:: bc:Optimism
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Blockchain Domain]]
  - bridges-to:: [[Arbitrum]], [[zkSync]], [[Polygon]]
  - requires:: [[Ethereum]], [[Rollup]], [[Fraud Proof]]
  - enables:: [[Decentralised Finance Domain]]

- ### Content
  - Optimism follows the optimistic rollup model, in which transactions are executed off-chain and their results are presumed correct by default. Anyone may submit a fraud proof during a challenge period to contest an invalid state transition, and the protocol re-executes the disputed step on Ethereum to resolve the claim. This design lowers fees and increases throughput compared with executing every transaction on the base layer.
  - The network's software is packaged as the OP Stack, which standardises the components needed to launch a rollup, including the execution client, the rollup node and the settlement contracts on Ethereum. Several chains, including Base, are built on this stack, and the shared design is intended to allow interoperability across a family of related networks.
  - Governance operates through the Optimism Collective, split between a Token House of OP holders and a Citizens' House focused on funding public goods. This structure reflects the project's emphasis on directing protocol revenue toward open-source infrastructure that benefits the wider Ethereum community.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z