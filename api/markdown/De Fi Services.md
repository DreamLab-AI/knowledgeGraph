public:: true

# De Fi Services
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8a4d5b070cd1551c06a08fa94e8592c742cad0ee4feaa9ec580e1f902965fa3f",
  "@type": "Page",
  "vc:slug": "de-fi-services",
  "title": "De Fi Services",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:owl-thing",
      "vc:label": "owl:Thing"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9564"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "De Fi Services"
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
  "@id": "urn:ngm:class:de-fi-services",
  "@type": "Class",
  "label": "De Fi Services",
  "definition": "Decentralised Finance (DeFi) Services are financial products and protocols—including lending, borrowing, automated market-making, and derivatives—implemented as smart contracts on programmable blockchains without centralised intermediaries. DeFi Services enable permissionless, non-custodial access to financial primitives and are a key component of virtual economies within metaverse and spatial computing platforms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    },
    {
      "@id": "urn:ngm:class:digital-asset-ecosystem",
      "label": "Digital Asset Ecosystem"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:financial-transactions", "label": "Financial Transactions"},
      {"@id": "urn:ngm:class:de-fi", "label": "DeFi"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:de-fi-services:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8a4d5b070cd1551c06a08fa94e8592c742cad0ee4feaa9ec580e1f902965fa3f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
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
  - De Fi Services is a concept within the metaverse domain. Further enrichment pending.

- ### Semantic Classification
  - owl-class:: spatial-computing:DeFiServices
  - owl-role:: concept

- ### Relationships
  - **requires** [[Blockchain]] — DeFi protocols execute as smart contracts on programmable blockchains
  - **requires** [[Smart Contract]] — automated, trustless financial logic is encoded as smart contracts
  - **uses** [[Cryptocurrency]] — cryptocurrencies are the native settlement assets for DeFi protocols
  - **uses** [[Digital Asset]] — DeFi operates over tokenised digital assets including stablecoins and NFTs
  - **relatedTo** [[Financial Transactions]] — DeFi services settle financial transactions on-chain
  - **relatedTo** [[DeFi]] — De Fi Services are the application-layer realisation of the DeFi paradigm

- ### Content

  ## Overview

  De Fi Services represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - bridges-to:: [[Blockchain]] (bc)
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
