public:: true

# Financial Transactions
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:16a7dc90f7dfa150f69a3c2745eae98c7ca5d83bf1d6bcd0f19ffea1d1f24fc5",
  "@type": "Page",
  "vc:slug": "financial-transactions",
  "title": "Financial Transactions",
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
      "vc:value": "MV-9616"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Financial Transactions"
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
  "@id": "urn:ngm:class:financial-transactions",
  "@type": "Class",
  "label": "Financial Transactions",
  "definition": "Financial Transactions are records of the transfer of monetary value or digital assets between parties, executed through centralised payment systems, blockchain networks, or Layer-2 protocols such as the Lightning Network. Within spatial computing and metaverse contexts, financial transactions underpin virtual economies, in-world purchases, NFT trades, and cross-platform value exchange, requiring robust settlement, fraud detection, and regulatory compliance mechanisms.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:de-fi-services", "label": "De Fi Services"},
      {"@id": "urn:ngm:class:digital-asset-trading", "label": "Digital Asset Trading"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:lightning-network", "label": "Lightning Network"},
      {"@id": "urn:ngm:class:financial-services", "label": "Financial Services"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:financial-transactions:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:16a7dc90f7dfa150f69a3c2745eae98c7ca5d83bf1d6bcd0f19ffea1d1f24fc5"
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
  - Financial Transactions is a concept within the metaverse domain. Further enrichment pending.

- ### Semantic Classification
  - owl-class:: spatial-computing:FinancialTransactions
  - owl-role:: concept

- ### Relationships
  - **uses** [[Blockchain]] — blockchain networks provide immutable, decentralised transaction settlement
  - **uses** [[Cryptocurrency]] — cryptocurrencies are the primary assets transferred in on-chain transactions
  - **uses** [[Smart Contract]] — smart contracts automate conditional financial transaction execution
  - **enables** [[De Fi Services]] — financial transactions are the atomic units enabling DeFi protocols
  - **enables** [[Digital Asset Trading]] — trading platforms execute financial transactions over digital assets
  - **relatedTo** [[Lightning Network]] — Lightning enables high-throughput micropayment financial transactions
  - **relatedTo** [[Financial Services]] — financial transactions are the operational core of financial services

- ### Content

  ## Overview

  Financial Transactions represents an abstract concept in the metaverse ontology hierarchy.

  #### Related Concepts
  - [[owl:Thing]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
