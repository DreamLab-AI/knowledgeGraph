public:: true

# Proof-Based Consensus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2bd26ee7224f1e047288f46cb79bc09e077d36d69b64c62e5ec020d57f9dbbe2",
  "@type": "Page",
  "vc:slug": "proof-based-consensus",
  "title": "Proof-Based Consensus",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:consensus-mechanism",
      "vc:label": "Consensus Mechanism"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0543"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proof-Based Consensus"
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
  "@id": "urn:ngm:class:proof-based-consensus",
  "@type": "Class",
  "label": "Proof-Based Consensus",
  "definition": "Proof-Based Consensus is the family of blockchain consensus mechanisms in which participants must provide a verifiable cryptographic or computational proof to earn the right to propose or validate blocks. This family includes proof-of-work (computational puzzle), proof-of-stake (economic stake), delegated proof-of-stake, proof-of-authority, proof-of-history, and related variants.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-protocol-and-consensus",
      "label": "Protocol and Consensus"
    },
    {
      "@id": "urn:ngm:class:consensus-mechanism",
      "label": "Consensus Mechanism"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"},
      {"@id": "urn:ngm:class:delegated-proof-of-stake", "label": "Delegated Proof of Stake"},
      {"@id": "urn:ngm:class:proof-of-authority", "label": "Proof of Authority"},
      {"@id": "urn:ngm:class:proof-of-history", "label": "Proof of History"},
      {"@id": "urn:ngm:class:liquid-proof-of-stake", "label": "Liquid Proof of Stake"},
      {"@id": "urn:ngm:class:nominated-proof-of-stake", "label": "Nominated Proof of Stake"},
      {"@id": "urn:ngm:class:pure-proof-of-stake", "label": "Pure Proof of Stake"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:deterministic-finality", "label": "Deterministic Finality"},
      {"@id": "urn:ngm:class:nakamoto-consensus", "label": "Nakamoto Consensus"},
      {"@id": "urn:ngm:class:byzantine-fault-tolerance", "label": "Byzantine Fault Tolerance"}
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

Proof-based consensus mechanisms differ from voting-based alternatives (BFT variants) in that participation rights are earned through demonstrable expenditure — either of computation (PoW), staked capital (PoS), or delegated authority. This design makes Sybil attacks economically costly. The trade-off between energy usage, capital requirements, decentralisation, and finality characteristics differs significantly across the family members.

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:proof-based-consensus:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2bd26ee7224f1e047288f46cb79bc09e077d36d69b64c62e5ec020d57f9dbbe2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Consensus Mechanism]]",
      "resolved": "urn:visionflow:owl:class:consensus-mechanism",
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
  - Consensus mechanisms requiring participants to provide cryptographic or computational proof to validate transactions and create blocks.

- ### Semantic Classification
  - owl-class:: blockchain:ProofBasedConsensus
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Consensus Mechanism]]

- ### Content
  Proof-Based Consensus — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
