public:: true

# Liquid Proof of Stake
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:836f5c9030f0566d66d8e6626d9f3a9cd0198173f3c8acfa36a93a0a0cbf72df",
  "@type": "Page",
  "vc:slug": "liquid-proof-of-stake",
  "title": "Liquid Proof of Stake",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-of-stake",
      "vc:label": "Proof of Stake"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0552"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Liquid Proof of Stake"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:liquid-proof-of-stake",
  "@type": "Class",
  "label": "Liquid Proof of Stake",
  "definition": "A Proof of Stake consensus variant that decouples staking participation from token illiquidity by allowing holders to delegate validation rights to elected validators (bakers) while retaining full ownership and transferability of their tokens. Pioneered by Tezos, it combines on-chain governance with delegated staking, enabling small token holders to participate in consensus rewards without running validator infrastructure.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:proof-of-stake",
      "label": "Proof of Stake"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:baker", "label": "Baker"},
      {"@id": "urn:ngm:class:delegation", "label": "Delegation"},
      {"@id": "urn:ngm:class:security-deposit", "label": "Security Deposit"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:epoch", "label": "Epoch"},
      {"@id": "urn:ngm:class:stake-snapshot", "label": "Stake Snapshot"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:tokenomics-governance", "label": "Tokenomics Governance"},
      {"@id": "urn:ngm:class:decentralized-autonomous-organization", "label": "Decentralized Autonomous Organization"},
      {"@id": "urn:ngm:class:on-chain-governance", "label": "On-Chain Governance"},
      {"@id": "urn:ngm:class:staking-reward", "label": "Staking Reward"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"},
      {"@id": "urn:ngm:class:slashing", "label": "Slashing"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"},
      {"@id": "urn:ngm:class:validator-set", "label": "Validator Set"},
      {"@id": "urn:ngm:class:cryptographic-signature", "label": "Cryptographic Signature"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof Of Stake"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:decentralized-finance", "label": "Decentralized Finance"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:proof-of-stake-sustainability", "label": "Proof Of Stake Sustainability"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:tezos", "label": "Tezos"},
      {"@id": "urn:ngm:class:liquid-staking", "label": "Liquid Staking"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:lpos", "label": "LPoS"}
  ],
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:liquid-proof-of-stake:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:836f5c9030f0566d66d8e6626d9f3a9cd0198173f3c8acfa36a93a0a0cbf72df"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof of Stake]]",
      "resolved": "urn:visionflow:owl:class:proof-of-stake",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  Liquid Proof of Stake is a consensus variant that decouples staking participation from token illiquidity, allowing holders to delegate validation rights to elected validators (bakers) while retaining full token ownership and transferability. Pioneered by Tezos, it combines on-chain governance with delegated staking, enabling small holders to earn rewards without running validator infrastructure.

- ### Relationships
  Liquid Proof of Stake **requires** Validator Node and Epoch as operational primitives — validators must be registered and active within defined epochs. It **enables** Tokenomics Governance and Decentralized Autonomous Organization participation by linking staking weight to governance votes. The mechanism **depends on** Consensus Mechanism and Blockchain Governance frameworks for its correctness guarantees. It **uses** Token Economics principles and a Validator Set for delegation routing. It **contrasts with** Proof Of Work, which requires computational expenditure rather than stake-based delegation. It is **related to** Proof Of Stake Sustainability (its energy advantage) and Governance Token (its on-chain voting integration).

- ### Content

  Liquid Proof of Stake emerged as a response to two limitations of early PoS designs: capital lock-up and validator centralisation. By separating ownership from validation rights, LPoS allows any token holder to delegate stake to a baker without transferring custody, earning proportional block rewards while maintaining liquidity.

  The Tezos implementation uses a rolling snapshot of stake distribution to determine baking rights at each cycle (a sequence of epochs). Bakers are selected pseudo-randomly weighted by delegated stake, and must post a security bond (safety deposit) to participate. If a baker behaves maliciously or goes offline, their bond is slashed, protecting delegators through economic accountability without requiring delegators to lock up their own stake.

  LPoS differs from delegated PoS (DPoS) in that delegation is implicit and permissionless — any holder can point stake to any baker without on-chain transactions in many implementations — and bakers are not elected via token-weighted voting to a fixed cardinality set. This reduces plutocratic concentration while preserving participation accessibility.

  On-chain governance integration is a distinguishing feature: LPoS protocols often bundle protocol upgrade proposals with the same staking mechanism, meaning bakers vote on amendments proportional to their delegated stake. This creates a tightly coupled incentive structure between consensus participation and governance participation.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
