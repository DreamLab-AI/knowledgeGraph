public:: true

# Fraud Proof
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fa20ffa366794235d20db4bb31437191085e689d5327581be1c98e74e9da3a80",
  "@type": "Page",
  "vc:slug": "fraud-proof",
  "title": "Fraud Proof",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:data-availability",
      "vc:label": "Data Availability"
    },
    {
      "@id": "urn:visionflow:linked:scalability",
      "vc:label": "Scalability"
    },
    {
      "@id": "urn:visionflow:linked:rollup",
      "vc:label": "Rollup"
    },
    {
      "@id": "urn:visionflow:linked:layer-2-networks",
      "vc:label": "Layer 2 Networks"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Fraud Proof"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fraud-proof",
  "@type": "Class",
  "label": "Fraud Proof",
  "definition": "A fraud proof is a cryptographic mechanism that allows any observer (a challenger) to demonstrate on-chain that a previously published off-chain state transition is invalid. It is the primary dispute mechanism for optimistic rollups, where sequencers post state roots optimistically and a challenge window allows watchers to submit a fraud proof if they detect an incorrect computation. Upon successful verification of a fraud proof by the base layer, the invalid state root is reverted and the sequencer's bonded stake is slashed as a penalty.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cryptographic-proof",
      "label": "Cryptographic Proof"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:fault-proof",
      "label": "Fault Proof"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:optimistic-rollup",
        "label": "Optimistic Rollup"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:data-availability",
        "label": "Data Availability"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:scalability",
        "label": "Scalability"
      },
      {
        "@id": "urn:ngm:class:trustless-bridge",
        "label": "Trustless Bridge"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:merkle-proof",
        "label": "Merkle Proof"
      },
      {
        "@id": "urn:ngm:class:sequencer",
        "label": "Sequencer"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:validity-proof",
        "label": "Validity Proof"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:rollup",
        "label": "Rollup"
      },
      {
        "@id": "urn:ngm:class:layer-2-networks",
        "label": "Layer 2 Networks"
      },
      {
        "@id": "urn:ngm:class:state-channel",
        "label": "State Channel"
      },
      {
        "@id": "urn:ngm:class:slashing",
        "label": "Slashing"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:game-theory",
        "label": "Game Theory"
      },
      {
        "@id": "urn:ngm:class:formal-verification",
        "label": "Formal Verification"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fraud-proof:cc00536d0ad6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fa20ffa366794235d20db4bb31437191085e689d5327581be1c98e74e9da3a80"
  },
  "vc:resolutions": [
    {
      "raw": "[[Data Availability]]",
      "resolved": "urn:visionflow:linked:data-availability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Scalability]]",
      "resolved": "urn:visionflow:linked:scalability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Rollup]]",
      "resolved": "urn:visionflow:linked:rollup",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Layer 2 Networks]]",
      "resolved": "urn:visionflow:linked:layer-2-networks",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - A fraud proof is a cryptographic mechanism that allows any network participant (a challenger) to demonstrate, on the base layer, that a previously posted off-chain [[State Root]] is the product of an invalid computation. It is the foundational dispute mechanism of [[Optimistic Rollup]] systems, which accept posted results as correct by default and enforce correctness only when a challenger submits a refutation during the [[Challenge Period]]. Fraud proofs contrast sharply with [[Validity Proof]] (used in [[ZK Rollup]]), where every batch carries a mathematical guarantee of correctness before it is accepted. Also known as a [[Fault Proof]] in some ecosystems, notably the OP Stack.

- ### Overview
  - **Why it matters:** [[Optimistic Rollup]] systems achieve high [[Scalability]] by moving computation off the [[Ethereum]] base layer while keeping the base layer as a final arbiter of truth. Fraud proofs are the mechanism that preserves trustlessness without requiring the base layer to re-execute every transaction.
  - **Core assumption:** A [[Sequencer]] posts compressed transaction batches and a new [[State Root]] to the base chain. The optimistic assumption is that this root is correct; the system becomes insecure only if no one monitors for and challenges invalid roots.
  - **Security model:** The security of a fraud-proof system is 1-of-N: as long as one honest, well-resourced watcher exists, fraudulent state transitions will be caught and reverted. This is a weaker but more computationally economical guarantee than [[ZK Proof]]-based systems.
  - **Economic deterrent:** Sequencers must lock up a bond ([[Bonding]]). A successful fraud proof results in [[Slashing]] — the attacker loses their stake, part of which is awarded to the challenger as an incentive.
  - **Withdrawal delay:** Because the base layer cannot immediately trust a posted state root, users bridging assets back to L1 must wait for the full [[Challenge Period]] (typically seven days in production systems) to elapse without a successful challenge.

- ### Mechanisms
  - **Single-round vs multi-round proofs:**
    - Single-round (non-interactive) fraud proofs re-execute the entire disputed transaction on L1. Simple but gas-intensive; impractical for complex state machines.
    - Multi-round (interactive) proofs use a [[Interactive Verification Game]] (bisection protocol) to binary-search for the single disputed computation step. Only that step is ultimately re-executed on L1, dramatically reducing gas costs.
  - **The bisection game:**
    - Both sequencer and challenger iteratively bisect a disputed execution trace represented as a [[Merkle Tree]] of intermediate states.
    - The game narrows from millions of execution steps to a single instruction, then an on-chain referee executes only that one step.
    - Implemented in [[Arbitrum]] as the CanonicalTransactionChain + challenge manager; in [[Optimism]] as the Dispute Game (post-Bedrock).
  - **Data availability dependency:**
    - Challengers must be able to reconstruct the disputed computation locally. This requires every input transaction to be published somewhere accessible — the [[Data Availability]] requirement.
    - If transaction data is withheld (a [[Data Availability Attack]]), challengers cannot construct a fraud proof even if fraud has occurred. This motivates requiring calldata or [[EIP-4844]] blobs to be posted to the base layer.
  - **State root commitments:**
    - The [[Sequencer]] periodically publishes a [[State Root]] (a Merkle root of the full L2 state) to a contract on L1.
    - This root anchors withdrawals and cross-chain message passing. Fraud proofs protect the integrity of these anchors.
  - **Bonding and incentives:**
    - Sequencers post collateral bonds. Challengers may also need to post bonds to prevent spam challenges (griefing attacks).
    - Successful challengers receive a portion of the slashed bond; failed challengers lose their deposit.

- ### Key Components
  - **[[Sequencer]]** — the entity that batches and orders L2 transactions and posts state roots to L1.
  - **[[Challenge Period]]** / [[Dispute Window]] — the time window (e.g. 7 days) during which fraud proofs may be submitted. After expiry, the state root is finalised.
  - **[[Interactive Verification Game]]** — the bisection protocol that isolates a single disputed execution step for on-chain adjudication.
  - **[[Merkle Proof]]** — cryptographic membership proofs used at each bisection step to authenticate intermediate execution states.
  - **[[Data Availability]]** — the guarantee that all transaction inputs are published and retrievable, enabling challengers to reconstruct disputed computations.
  - **[[Bonding]]** / [[Slashing]] — the economic enforcement layer: honest actors are rewarded, dishonest actors lose capital.
  - **On-chain referee contract** — the L1 smart contract that adjudicates the game, re-executes the final disputed instruction, and applies the outcome.
  - **Watchers / Verifiers** — off-chain nodes that continuously monitor for invalid state roots and stand ready to submit challenges.

- ### Applications and Use Cases
  - **[[Optimistic Rollup]] production systems:**
    - [[Arbitrum One]] uses a multi-round interactive fraud proof system with a bisection game over WASM-compiled execution traces.
    - [[Optimism]] introduced the "fault proof" system (OP Stack Cannon) post-Bedrock, enabling permissionless challenges; previously relied on a centralised whitelisted challenger.
    - [[Base]] (Coinbase's L2, built on OP Stack) inherits the Cannon fault proof system.
  - **[[State Channel]] networks:**
    - Fraud proofs are also used in state channels such as the original [[Lightning Network]] dispute mechanism, where a party can submit a fraud proof (a revoked state) to punish a counterparty that publishes an old state.
  - **Plasma:**
    - [[Plasma]] chains (the precursor to rollups) relied heavily on fraud proofs for mass exit scenarios, though [[Data Availability]] limitations made this impractical at scale.
  - **[[Cross-Chain Bridge]] security:**
    - Some bridge designs use fraud proofs to secure cross-chain message passing, allowing a relayer's attestation to be challenged on-chain if fraudulent.
  - **Modular blockchain architectures:**
    - In modular designs (e.g. [[Celestia]] + rollup execution layers), the execution layer uses fraud proofs while the data availability layer is handled separately, enabling specialised, composable security guarantees.

- ### Comparison: Fraud Proofs vs Validity Proofs
  - | Property | Fraud Proof (Optimistic) | [[Validity Proof]] (ZK) |
  - | Verification trigger | Only on challenge | Every batch |
  - | Withdrawal latency | 7+ days (challenge window) | Minutes (proof generation) |
  - | Base-layer gas (steady state) | Low (no proof per batch) | Higher (proof verification) |
  - | Proving cost (offchain) | Low | High (ZK prover compute) |
  - | Security assumption | 1-of-N honest watcher | Mathematical soundness |
  - | Complexity | Interactive game theory | Cryptographic circuit design |
  - The industry expectation is that [[ZK Rollup]] will eventually supplant optimistic systems as ZK proving costs fall, but fraud proofs remain dominant in production [[EVM]]-equivalent rollups as of 2025–2026.

- ### Relationships
  - partOf:: [[Optimistic Rollup]]
  - requires:: [[Data Availability]]
  - requires:: [[Dispute Window]]
  - requires:: [[Bonding]]
  - enables:: [[Scalability]]
  - enables:: [[Trustless Bridge]]
  - enables:: [[State Root Verification]]
  - dependsOn:: [[Interactive Verification Game]]
  - dependsOn:: [[Merkle Proof]]
  - dependsOn:: [[Sequencer]]
  - contrastsWith:: [[Validity Proof]]
  - contrastsWith:: [[ZK Proof]]
  - relatedTo:: [[Rollup]]
  - relatedTo:: [[Layer 2 Networks]]
  - relatedTo:: [[State Channel]]
  - relatedTo:: [[Slashing]]
  - relatedTo:: [[Challenge Period]]
  - bridges-to:: [[Game Theory]]
  - bridges-to:: [[Formal Verification]]
  - sameAs:: [[Fault Proof]]

- ### Standards and Ecosystem Context
  - **EIP-4844 (Proto-Danksharding):** Reduces the cost of posting transaction [[Data Availability]] to L1 via blob-carrying transactions, making fraud-proof-based rollups cheaper to operate.
  - **OP Stack (Optimism Foundation):** The Cannon fault proof system is an open-source implementation, enabling any OP Stack chain to use permissionless fraud proofs. The Dispute Game contract is the key on-chain component.
  - **Arbitrum BOLD:** Arbitrum's "Bounded Liquidity Delay" (BOLD) protocol is a next-generation multi-round fraud proof design that guarantees challenge resolution within a bounded time window regardless of the number of challengers, preventing delay attacks.
  - **EigenLayer:** Re-staking protocols can be used to create economic security for fraud proof watchers, further strengthening the 1-of-N assumption.
  - **[[Ethereum]] Improvement Proposals:** No single EIP defines fraud proofs — they are implemented at the rollup protocol layer, not the base layer. However, the [[Ethereum]] community's focus on [[Data Availability]] (EIP-4844, Danksharding) directly affects fraud proof feasibility.

- ### Provenance
  - sources:: Arbitrum documentation; Optimism OP Stack documentation; Ethereum L2Beat research; academic work by Harry Kalodner, Ed Felten et al. on Arbitrum; Plasma Group foundational papers.
  - updated:: 2026-06-13
