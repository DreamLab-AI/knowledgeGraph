public:: true

# Fungible Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1aff74057f0e8cb900d9931229477be400855e30c7aa48de90aa474952bc8fd5",
  "@type": "Page",
  "vc:slug": "fungible-token",
  "title": "Fungible Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:token",
      "vc:label": "Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0509"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fungible Token"
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
  "@id": "urn:ngm:class:fungible-token",
  "@type": "Class",
  "label": "Fungible Token",
  "definition": "A blockchain token where each unit is identical and fully interchangeable with any other unit of the same type, analogous to traditional fiat currency. Fungibility is enforced at the protocol level via standards such as ERC-20, ensuring uniform value and seamless divisibility across all holders.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:token",
    "label": "Token"
  },
  "relations": {
    "implements": [
      {"@id": "urn:ngm:class:erc-20", "label": "ERC-20"},
      {"@id": "urn:ngm:class:bep-20", "label": "BEP-20"},
      {"@id": "urn:ngm:class:spl-token", "label": "SPL Token"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:blockchain-transaction", "label": "Blockchain Transaction"},
      {"@id": "urn:ngm:class:consensus-mechanism", "label": "Consensus Mechanism"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:decentralised-exchange", "label": "Decentralised Exchange"},
      {"@id": "urn:ngm:class:automated-market-maker", "label": "Automated Market Maker"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"},
      {"@id": "urn:ngm:class:token-swap", "label": "Token Swap"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:wallet", "label": "Wallet"},
      {"@id": "urn:ngm:class:public-key-cryptography", "label": "Public Key Cryptography"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:decentralised-finance", "label": "Decentralised Finance"},
      {"@id": "urn:ngm:class:stablecoin", "label": "Stablecoin"},
      {"@id": "urn:ngm:class:initial-coin-offering", "label": "Initial Coin Offering"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:ethereum-improvement-proposal", "label": "Ethereum Improvement Proposal"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:semi-fungible-token", "label": "Semi-Fungible Token"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:central-bank-digital-currency", "label": "Central Bank Digital Currency"},
      {"@id": "urn:ngm:class:digital-currency", "label": "Digital Currency"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:cryptocurrency", "label": "Cryptocurrency"},
      {"@id": "urn:ngm:class:deflationary-token", "label": "Deflationary Token"},
      {"@id": "urn:ngm:class:tokenomics", "label": "Tokenomics"},
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:homogeneous-token", "label": "Homogeneous Token"},
    {"@id": "urn:ngm:class:interchangeable-token", "label": "Interchangeable Token"}
  ],
  "quality": 0.72,
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
  "@id": "urn:visionflow:annotation:link-resolutions:fungible-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1aff74057f0e8cb900d9931229477be400855e30c7aa48de90aa474952bc8fd5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:owl:class:token",
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
  - A token where each unit is identical and interchangeable with any other unit of the same token, like traditional currencies. Each token holds equal value to another token of the same type.

- ### Semantic Classification
  - owl-class:: blockchain:FungibleToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Token]]

- ### Content
  Fungible Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
