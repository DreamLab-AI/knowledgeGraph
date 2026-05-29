### Definition

A Consensus Rule is a protocol-level validation requirement that every fully-validating node in a blockchain network must enforce uniformly to reach and maintain agreement on the canonical chain state. Consensus rules define which blocks and transactions are valid, covering aspects such as block structure, cryptographic proofs, transaction format, gas limits, and state-transition logic. Deviation from consensus rules — whether accidental or deliberate — results in a fork, splitting the network into incompatible chains.

### Relationships

Consensus Rule **requires** a Consensus Mechanism (the overarching protocol framework), a Blockchain Network (the peer set that must converge), and a Distributed Ledger (the replicated state it protects). It **enables** Finality (the irreversibility guarantee once rules are satisfied), Blockchain Governance (the process through which rules are proposed and changed), and Smart Contract execution (which depends on deterministic rule-enforced state transitions). The Fork Choice Rule is a **part of** consensus rules — it is the sub-rule that tells nodes which chain branch to follow when competing chains exist. Consensus Rule is **related to** Proof of Work and Proof of Stake (the sybil-resistance layers whose own validity checks are expressed as consensus rules), Byzantine Fault Tolerance (the theoretical bound on how many violating nodes can be tolerated), Validator Set (the nodes required to follow and enforce rules), 51% Attack (the scenario where a majority subverts rules), and Blockchain (the data structure whose validity is defined by these rules). It **contrasts with** Governance Model — governance determines how rules change off-chain or on-chain, whereas consensus rules are the enforced technical invariants that exist at any given moment.

### Content

Consensus rules are the bedrock of any permissionless blockchain. Every node independently validates every block and transaction against the same rule set, and nodes that receive an invalid item reject it and disconnect from peers that propagate it. This decentralised enforcement model means no single authority can override the rules without the consent of the majority of the economic weight of the network — a property that distinguishes Blockchain from traditional replicated databases.

Bitcoin's consensus rules include structural requirements (block header fields, coinbase transaction format, Merkle tree construction), economic rules (subsidy schedule halving every 210,000 blocks, 21 million coin cap), script validation rules (stack-based Script interpreter semantics), and the Proof of Work difficulty adjustment algorithm. Any software client that implements these rules identically produces the same view of the valid chain, regardless of geography or operator intent.

Ethereum's consensus rules are more complex due to the EVM, covering gas accounting, opcode semantics, state trie structure, uncle block validity, and (post-Merge) the proof-of-stake Beacon Chain rules governing validator attestations, slashing conditions, and Fork Choice Rule (LMD-GHOST combined with Casper FFG finality). A hard fork — a backward-incompatible change to consensus rules — requires coordinated upgrade of the Validator Set and full nodes. Uncoordinated hard forks produce permanent chain splits such as the Ethereum/Ethereum Classic split of 2016.

Byzantine Fault Tolerance theory informs the security guarantees of consensus rules: in an asynchronous network, agreement is achievable only if fewer than one-third of validators violate the rules (in BFT-style protocols) or fewer than half the hash rate produces dishonest blocks (in proof-of-work). A 51% Attack is the scenario where this tolerance threshold is breached — an attacker controlling sufficient resources can reorganise the chain and effectively rewrite recent consensus history. Well-designed consensus rules minimise the attack surface by making such violations expensive relative to the honest-mining or honest-staking economic incentive.

- ### Semantic Classification
  - owl-class:: blockchain:ConsensusRule
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[ConsensusDomain]]
  - implemented-in-layer:: [[ProtocolLayer]]

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z