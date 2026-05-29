public:: true

# ERC20 Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:51c6b58fe01e3812001281ef5b2824e77115772e69d04bb19d1e25c5620c5bd0",
  "@type": "Page",
  "vc:slug": "erc20-token",
  "title": "ERC20 Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:fungible-token",
      "vc:label": "Fungible Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0515"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC20 Token"
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
  "@id": "urn:ngm:class:erc20-token",
  "@type": "Class",
  "label": "ERC20 Token",
  "definition": "An ERC20 Token is a fungible token implementing the ERC-20 interface standard on the Ethereum blockchain, which defines a uniform set of six mandatory functions (totalSupply, balanceOf, transfer, transferFrom, approve, allowance) enabling interoperability between token contracts, decentralised exchanges, wallets, and DeFi protocols without bespoke integration. ERC-20 became the dominant token standard following its formalisation in 2015 and is used for utility tokens, governance tokens, stablecoins, and wrapped assets. The standard's fungibility means all token units are identical and mutually interchangeable, contrasting with ERC-721 non-fungible tokens that represent distinct assets.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:fungible-token",
      "label": "Fungible Token"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:blockchain", "label": "Blockchain"},
      {"@id": "urn:ngm:class:smart-contract", "label": "Smart Contract"},
      {"@id": "urn:ngm:class:token-standard", "label": "Token Standard"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:transaction", "label": "Transaction"},
      {"@id": "urn:ngm:class:wallet", "label": "Wallet"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:gas", "label": "Gas"},
      {"@id": "urn:ngm:class:token-economics", "label": "Token Economics"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:erc-721", "label": "ERC-721"},
      {"@id": "urn:ngm:class:nft", "label": "NFT"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:stablecoin-token", "label": "Stablecoin Token"},
      {"@id": "urn:ngm:class:governance-token", "label": "Governance Token"},
      {"@id": "urn:ngm:class:utility-token", "label": "Utility Token"},
      {"@id": "urn:ngm:class:security-token", "label": "Security Token"},
      {"@id": "urn:ngm:class:payment-token", "label": "Payment Token"},
      {"@id": "urn:ngm:class:liquidity-pool", "label": "Liquidity Pool"}
    ]
  },
  "qualityScore": 0.8,
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
  "@id": "urn:visionflow:annotation:link-resolutions:erc20-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:51c6b58fe01e3812001281ef5b2824e77115772e69d04bb19d1e25c5620c5bd0"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fungible Token]]",
      "resolved": "urn:visionflow:owl:class:fungible-token",
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
  - A fungible token implementing the ERC-20 standard on Ethereum blockchain. The most widely used Ethereum token standard providing uniform API for token operations within smart contracts.

- ### Semantic Classification
  - owl-class:: blockchain:ERC20Token
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Fungible Token]]

- ### Content
  ERC-20 Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
