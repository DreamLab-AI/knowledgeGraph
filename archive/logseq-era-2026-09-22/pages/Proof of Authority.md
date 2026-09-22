public:: true
alias:: Proof-of-Authority, ProofOfAuthority

# Proof of Authority
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:abe569049b761e062c28926c645338c96df6d28c8cb92b6fba05367a894925d4",
  "@type": "Page",
  "vc:slug": "proof-of-authority",
  "title": "Proof of Authority",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
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
      "vc:value": "BC-0547"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Proof of Authority"
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
  "@id": "urn:ngm:class:proof-of-authority",
  "@type": "Class",
  "label": "Proof of Authority",
  "definition": "A permissioned blockchain consensus mechanism in which a fixed set of pre-approved validators with verified real-world identities are authorised to produce and validate blocks. PoA sacrifices decentralisation for high throughput and fast finality, making it suitable for enterprise and consortium blockchains where participant trust can be established off-chain.",
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
    "contrastsWith": [
      {"@id": "urn:ngm:class:proof-of-work", "label": "Proof Of Work"},
      {"@id": "urn:ngm:class:proof-of-stake", "label": "Proof of Stake"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"},
      {"@id": "urn:ngm:class:consortium-blockchain", "label": "Consortium Blockchain"},
      {"@id": "urn:ngm:class:finality", "label": "Finality"},
      {"@id": "urn:ngm:class:consensus-algorithm", "label": "Consensus Algorithm"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:blockchain-governance", "label": "Blockchain Governance"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:proof-of-authority:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:abe569049b761e062c28926c645338c96df6d28c8cb92b6fba05367a894925d4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
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
  - A consensus mechanism where pre-approved validators (authorities) with verified identities are authorized to validate transactions and create blocks.

- ### Semantic Classification
  - owl-class:: blockchain:ProofOfAuthority
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Proof-Based Consensus]]
  - bridges-to:: [[Digital Twin]]

- ### Content
  Proof of Authority — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
