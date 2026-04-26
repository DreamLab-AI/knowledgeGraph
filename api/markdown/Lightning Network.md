iri:: http://narrativegoldmine.com/blockchain#LightningNetwork
uri:: urn:visionclaw:concept:blockchain:lightning-network
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:blockchain:lightning-network
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: blockchain
preferred-term:: Lightning Network
content-hash:: sha256-stub-015
status:: stub
maturity:: emerging
quality-score:: 0.35
authority-score:: 0.6
version:: 1.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - The [[Lightning Network]] is a [[Layer 2 Scaling]] protocol enabling instant, high-throughput cryptocurrency payments off-chain through multi-hop payment channels, where Bitcoin transactions are only recorded on the main blockchain during channel opening and closure, dramatically increasing transaction capacity without sacrificing decentralisation.

- ### Semantic Classification
  - owl-class:: blockchain:LightningNetwork
  - owl-role:: Object
  - belongs-to-domain:: [[BlockchainDomain]]
  - implemented-in-layer:: [[ScalingLayer]]

- ### Relationships
  - is-subclass-of:: [[Layer 2 Scaling]], [[Payment Channel Network]], [[Blockchain Scalability]]
  - requires:: [[Bitcoin Blockchain]], [[Smart Contract]], [[Cryptographic Commitment]]
  - enables:: [[Micropayments]], [[Instant Transactions]], [[Throughput Scaling]]
  - bridges-to:: [[Traditional Payment Systems]], [[Financial Infrastructure]]

- ### Content

  The Lightning Network solves blockchain transaction throughput limitations through payment channels—bilateral agreements enabling unlimited off-chain transactions between two parties, with the blockchain serving only as dispute resolution and final settlement. Users deposit cryptocurrency into channels, transact instantly off-chain, and close channels to settle final balances on-chain, reducing blockchain load whilst maintaining security.

  Multi-hop payments enable transactions between parties without direct channels by routing through intermediate nodes. If Alice has channels to Bob and Bob has channels to Carol, Alice can pay Carol through Bob without opening a direct channel. This routing mechanism transforms the network from bilateral channels into a dense graph enabling ubiquitous liquidity, though it introduces routing complexity and privacy considerations.

  Lightning Network security depends on cryptographic commitments preventing participants from reneging on transactions or double-spending. Channel economics require sufficient transaction volume to justify channel opening costs, creating adoption challenges in low-density markets. Routing failures and liquidity constraints on payment paths create user experience friction absent in centralised payment systems.

- ### Provenance
  - sources:: [[Bitcoin]], [[Layer 2 Scaling]]
  - migration-date:: 2026-04-26T00:00:00Z
