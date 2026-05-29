public:: true

# Tokenomics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:553a07ab9c0632973a8ce710abac7688e9ca8ad458865f29b2c2ce0a4e78d3e8",
  "@type": "Page",
  "vc:slug": "tokenomics",
  "title": "Tokenomics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9712"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Tokenomics"
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
  "@id": "urn:ngm:class:tokenomics",
  "@type": "Class",
  "label": "Tokenomics",
  "definition": "Tokenomics describes the economic design and incentive structures of blockchain-based token systems, covering token supply mechanics, distribution schedules, utility functions, and governance rights. Within virtual economies and metaverse platforms, tokenomics governs how digital assets are minted, traded, staked, and burned to sustain ecosystem participation and align stakeholder incentives. Sound tokenomic design balances inflationary rewards for contributors against deflationary sinks, using mechanisms such as bonding curves, liquidity pools, and vesting schedules.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:payment-system", "label": "Payment System"},
      {"@id": "urn:ngm:class:dao", "label": "DAO"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"}
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:tokenomics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:553a07ab9c0632973a8ce710abac7688e9ca8ad458865f29b2c2ce0a4e78d3e8"
  },
  "vc:resolutions": [
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:owl:class:owl-thing",
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
  - Tokenomics describes the economic design and incentive structures of blockchain-based token systems, covering token supply mechanics, distribution schedules, utility functions, and governance rights. Within virtual economies and metaverse platforms, tokenomics governs how digital assets are minted, traded, staked, and burned to sustain ecosystem participation and align stakeholder incentives. Sound tokenomic design balances inflationary rewards for contributors against deflationary sinks, using mechanisms such as bonding curves, liquidity pools, and vesting schedules.
- ### Semantic Classification
  - owl-class:: spatial-computing:Tokenomics
  - owl-role:: concept
- ### Relationships
  - requires [[Blockchain]]
  - requires [[Smart Contract]]
  - enables [[Payment System]]
  - enables [[DAO]]
  - relatedTo [[NFT]]
- ### Content
  ## Overview
  Tokenomics represents an abstract concept in the metaverse ontology hierarchy.
  #### Related Concepts
  - [[owl:Thing]]
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
