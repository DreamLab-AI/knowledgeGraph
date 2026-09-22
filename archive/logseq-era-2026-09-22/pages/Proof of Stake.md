public:: true
alias:: Proof-of-Stake, ProofOfStake, proof-of-stake

# Proof of Stake
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007",
  "@type": "Page",
  "vc:slug": "proof-of-stake",
  "title": "Proof of Stake",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:proof-based-consensus",
      "vc:label": "Proof-Based Consensus"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0546"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proof of Stake"
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
  "@id": "urn:ngm:class:proof-of-stake",
  "@type": "Class",
  "label": "Proof of Stake",
  "definition": "A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Validators are selected proportionally to their stake, replacing the energy-intensive mining of Proof of Work with a capital-cost security model that achieves deterministic or probabilistic finality.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:proof-based-consensus",
    "label": "Proof-Based Consensus"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:validator-node",
        "label": "Validator Node"
      },
      {
        "@id": "urn:ngm:class:validator-set",
        "label": "Validator Set"
      },
      {
        "@id": "urn:ngm:class:epoch",
        "label": "Epoch"
      },
      {
        "@id": "urn:ngm:class:delegated-proof-of-stake",
        "label": "Delegated Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:liquid-proof-of-stake",
        "label": "Liquid Proof of Stake"
      },
      {
        "@id": "urn:ngm:class:slashing-condition",
        "label": "Slashing Condition"
      },
      {
        "@id": "urn:ngm:class:staking-reward",
        "label": "Staking Reward"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-signature",
        "label": "Cryptographic Signature"
      },
      {
        "@id": "urn:ngm:class:peer-to-peer-network",
        "label": "Peer-to-Peer Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:blockchain-sustainability",
        "label": "Blockchain Sustainability"
      },
      {
        "@id": "urn:ngm:class:sharding",
        "label": "Sharding"
      },
      {
        "@id": "urn:ngm:class:layer-2-scaling",
        "label": "Layer 2 Scaling"
      },
      {
        "@id": "urn:ngm:class:on-chain-governance",
        "label": "On-chain Governance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:public-key-cryptography",
        "label": "Public Key Cryptography"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:proof-of-work",
        "label": "Proof Of Work"
      },
      {
        "@id": "urn:ngm:class:proof-of-authority",
        "label": "Proof of Authority"
      },
      {
        "@id": "urn:ngm:class:proof-of-history",
        "label": "Proof of History"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:finality",
        "label": "Finality"
      },
      {
        "@id": "urn:ngm:class:deterministic-finality",
        "label": "Deterministic Finality"
      },
      {
        "@id": "urn:ngm:class:sustainable-consensus",
        "label": "Sustainable Consensus"
      },
      {
        "@id": "urn:ngm:class:byzantine-fault-tolerance",
        "label": "Byzantine Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:carbon-footprint",
        "label": "Carbon Footprint"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:pos-consensus",
      "label": "PoS Consensus"
    },
    {
      "@id": "urn:ngm:class:staking-based-consensus",
      "label": "Staking-Based Consensus"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:proof-of-stake:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2911019a8730fea0a4dd6959ef483e01f4abd2eac92a56b73188dcebfc5c2007"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Proof-Based Consensus]]",
      "resolved": "urn:visionflow:owl:class:proof-based-consensus",
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
  - A consensus mechanism allowing blockchains to validate transactions and create new blocks based on the number of tokens held or staked by network participants. Formally, a consensus model where the blockchain network is secured by users locking cryptocurrency into the blockchain network through a process called staking.

- ### Semantic Classification
  - owl-class:: blockchain:ProofOfStake
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Proof-Based Consensus]]

- ### Content
  Proof of Stake — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
