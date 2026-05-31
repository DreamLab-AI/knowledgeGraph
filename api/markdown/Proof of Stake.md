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
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:proof-based-consensus",
      "label": "Proof-Based Consensus"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:validator-node", "label": "Validator Node"},
      {"@id": "urn:ngm:class:validator-set", "label": "Validator Set"},
      {"@id": "urn:ngm:class:epoch", "label": "Epoch"},
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof of Stake"},
      {"@id": "urn:ngm:class:liquid-proof-of-stake", "label": "Liquid Proof of Stake"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:deterministic-finality", "label": "Deterministic Finality"},
      {"@id": "urn:ngm:class:sustainable-consensus", "label": "Sustainable Consensus"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:blockchain-sustainability", "label": "Blockchain Sustainability"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
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
