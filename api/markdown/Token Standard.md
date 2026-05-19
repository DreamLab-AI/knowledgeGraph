schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#TokenStandard
legacy_uri:: urn:visionclaw:concept:blockchain:token-standard
public:: true

# Token Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3",
  "@type": "Page",
  "vc:slug": "token-standard",
  "title": "Token Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:fungibility",
      "vc:label": "Fungibility"
    },
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:decentralized-exchange",
      "vc:label": "Decentralized Exchange"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-6aa019292d8f"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#TokenStandard"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-7005"
    },
    {
      "vc:key": "maturity",
      "vc:value": "reviewed"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Token Standard"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:blockchain:token-standard"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:token-standard"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:token-standard",
  "@type": "OntologyClass",
  "label": "Token Standard",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:sourceDomain": "blockchain",
  "vc:status": "active",
  "vc:maturity": "reviewed",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Technical specification defining rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem. Standards like ERC-20 (fungible tokens) and ERC-721 (NFTs) establish common APIs for token transfers, balance queries, approvals, and metadata, enabling seamless integration across wallets, exchanges, and dApps.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:enables": [
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:implements": [
    {
      "@id": "urn:visionflow:linked:fungibility",
      "vc:label": "Fungibility"
    }
  ],
  "vc:relatedTo": [
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:token-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3"
  },
  "vc:resolutions": [
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fungibility]]",
      "resolved": "urn:visionflow:linked:fungibility",
      "kind": "StubLink"
    },
    {
      "raw": "[[NFT]]",
      "resolved": "urn:visionflow:linked:nft",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Exchange]]",
      "resolved": "urn:visionflow:owl:class:decentralized-exchange",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:86c2a5a5881391ad5b61cc3969094760199129dd17b46e6a279bc00d97e86ee3@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Technical specification defining rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem. Standards like ERC-20 (fungible tokens) and ERC-721 (NFTs) establish common APIs for token transfers, balance queries, approvals, and metadata, enabling seamless integration across wallets, exchanges, and dApps.

- ### Semantic Classification
  - owl-class:: blockchain:TokenStandard
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Smart Contract]]
  - implements:: [[Fungibility]]

- ### Content

  ## Definition
  A **Token Standard** is a technical specification that defines the rules, interfaces, and functions that smart contract tokens must implement to ensure interoperability within a blockchain ecosystem. These standards establish common APIs enabling seamless integration across wallets, exchanges, decentralized applications, and other blockchain infrastructure.

  ## Core Standards

  ### ERC-20 (Fungible Tokens)
  - Proposed by Fabian Vogelsteller in November 2015
  - Defines fungible tokens where each unit is interchangeable
  - Required functions: `transfer`, `balanceOf`, `approve`, `transferFrom`, `allowance`, `totalSupply`
  - Use cases: stablecoins, governance tokens, utility tokens, ICO tokens

  ### ERC-721 (Non-Fungible Tokens)
  - Proposed by William Entriken et al. in January 2018
  - Each token has unique `tokenId` making it non-fungible
  - Tracks ownership via `ownerOf` function
  - Enables unique digital collectibles, art, and real-world asset representation
  - Supports metadata URI for off-chain attributes

  ### ERC-1155 (Multi-Token Standard)
  - Developed by Enjin to address ERC-721 limitations
  - Supports both fungible and non-fungible tokens in single contract
  - Enables batch transfers reducing gas costs and network congestion
  - Optimal for gaming assets and mixed token portfolios

  ### Advanced Standards
  - **ERC-777**: Enhanced security with hooks for token operations
  - **ERC-998**: Composable tokens enabling ownership hierarchies
  - **ERC-4626**: Standardized yield-bearing vault interface for DeFi
  - **ERC-1400**: Security token standard with transfer restrictions

  ## Technical Characteristics
  - **Interface Compliance**: Contracts must implement required function signatures
  - **Event Emission**: Standards define events for off-chain indexing
  - **Approval Mechanisms**: Two-step transfer patterns for delegated spending
  - **Metadata Standards**: Structured JSON schemas for token attributes

  ## Cross-Chain Standards
  - **BEP-20**: Binance Smart Chain equivalent of ERC-20
  - **SPL Tokens**: Solana Program Library token standard
  - **CW-20/CW-721**: CosmWasm token standards for Cosmos ecosystem
  - **TRC-20**: TRON network token standard

  ## Relationships
  - is-subclass-of:: [[Blockchain]]
  - enables:: [[Smart Contract]]
  - used-by:: [[Decentralized Exchange]]
  - related-to:: [[NFT]]
  - implements:: [[Fungibility]]
  - component-of:: [[DeFi]]

  ## Security Considerations
  - Reentrancy vulnerabilities in transfer functions
  - Integer overflow/underflow in older implementations
  - Approval race conditions
  - Malicious token contract behaviors

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
