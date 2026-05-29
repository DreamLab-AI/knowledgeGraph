public:: true

# Verifiable Random Function
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:verifiable-random-function",
  "@type": "Page",
  "vc:slug": "verifiable-random-function",
  "title": "Verifiable Random Function",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:verifiable-random-function",
  "@type": "Class",
  "label": "Verifiable Random Function",
  "definition": "A Verifiable Random Function (VRF) is a cryptographic primitive, introduced by Micali, Rabin, and Vadhan (1999), that maps an input to a pseudorandom output and produces a non-interactive proof allowing any third party to verify that the output was computed correctly from a given public key and input without learning the private key. The VRF owner possesses a private key SK and public key PK; given input alpha, they compute output beta and proof pi such that any verifier with PK can confirm that beta = VRF(SK, alpha) without requiring SK. VRFs provide both uniqueness (exactly one valid output per key-input pair) and pseudorandomness (output is indistinguishable from random to anyone without SK). They are deployed in blockchain systems for unpredictable, manipulation-resistant leader election (Algorand, Cardano, Hedera), NFT trait generation, on-chain lotteries, and as the cryptographic core of Chainlink VRF and similar oracle randomness services.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:cryptographic-proof", "label": "Cryptographic Proof"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:random-number-generation", "label": "Random Number Generation"},
      {"@id": "urn:ngm:class:elliptic-curve-cryptography", "label": "Elliptic Curve Cryptography"},
      {"@id": "urn:ngm:class:threshold-cryptography", "label": "Threshold Cryptography"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public-Key Cryptography"},
      {"@id": "urn:ngm:class:cryptographic-commitment", "label": "Cryptographic Commitment"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-gaming", "label": "Blockchain Gaming"},
      {"@id": "urn:ngm:class:oracle-network", "label": "Oracle Network"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:blockchain-oracle", "label": "Blockchain Oracle"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A Verifiable Random Function is a [[Public-Key Cryptography]] primitive that computes a pseudorandom output from a private key and an input whilst producing a publicly verifiable proof, enabling trustless on-chain randomness for [[Consensus Mechanism]] leader election, NFT trait generation, and [[Oracle Network]] services without the possibility of manipulation or prediction by the output producer.

- ### Relationships
  - VRFs are a specialisation of [[Cryptographic Proof]] and are built on [[Elliptic Curve Cryptography]] (most implementations use ECVRF with curve25519 or secp256k1). They use [[Cryptographic Commitment]] mechanisms implicitly in proof construction. [[Public-Key Cryptography]] is the enabling primitive: the private key generates uniqueness and the public key enables verification. VRFs power [[Consensus Mechanism]] designs that require unpredictable but verifiable leader selection — Algorand's sortition, Cardano's Ouroboros Praos, and Hedera's gossip-based consensus all use VRFs. They underpin [[Blockchain Gaming]] fairness (random loot drops, dungeon generation) and [[Oracle Network]] randomness services, with Chainlink VRF the most-used on-chain implementation. [[Threshold Cryptography]] variants distribute the VRF key across multiple parties to remove single-point-of-trust.

- ### Content
  - The canonical VRF construction, ECVRF (RFC 9381), is built on elliptic curve discrete-log hardness. Given private key SK (a scalar) and public key PK (= SK·G), computing VRF output for input alpha proceeds as: (1) hash alpha to a curve point H = hash_to_curve(alpha); (2) compute gamma = SK·H; (3) generate a Schnorr-style non-interactive proof pi using a random nonce; (4) hash gamma to produce the output beta (the pseudorandom value). Verification uses PK, alpha, pi, and beta and checks the Schnorr equation without needing SK. The output beta is uniquely determined by SK and alpha (no freedom for the prover to choose different outputs), which is the critical anti-manipulation property.

  - In blockchain consensus, the VRF solves the "nothing-at-stake" and "grinding" attacks on proof-of-stake leader election. If each epoch's proposer is selected by a VRF over the current VRF output and the private staking key, no adversary can predict future proposers more than one step ahead (pseudorandomness), and no honest validator can bias their chance of being selected by withholding or replaying blocks (uniqueness and non-malleability). Algorand generalises this to committee selection: each account independently evaluates the VRF and determines whether it is in the proposer or voter committee for a given round.

  - Chainlink VRF brings on-chain randomness to smart contracts. A requester contract emits an event with a request ID and a random seed; a Chainlink node computes VRF(node_secret_key, seed) off-chain and submits the output and proof to a coordinator contract that verifies the proof on-chain before delivering the random value to the consumer contract. This pattern ensures that neither the requesting contract nor the Chainlink node can predict or manipulate the randomness after the request is submitted. VRF v2.5 adds subscription billing and batched fulfilment.

  - Distributed VRF (dVRF) and threshold VRF protocols distribute the private key across a committee of nodes using secret sharing, so the VRF output can only be computed when a threshold fraction of nodes cooperate. No single node can produce or bias the output alone, removing centralised trust in oracle randomness. These constructions are used by decentralised randomness beacons (drand, DFINITY's BLS threshold signatures) and are the preferred architecture for high-value on-chain randomness in DeFi and gaming applications.

