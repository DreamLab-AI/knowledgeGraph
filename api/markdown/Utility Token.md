public:: true

# Utility Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0537236a19fb0680cdb6c0b63d70cb67f26772c8e2f39df6a424c7115349698e",
  "@type": "Page",
  "vc:slug": "utility-token",
  "title": "Utility Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptocurrency-token",
      "vc:label": "Cryptocurrency Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0574"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Utility Token"
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
  "@id": "urn:ngm:class:utility-token",
  "@type": "Class",
  "label": "Utility Token",
  "definition": "A blockchain token that confers its holder a right to access, use, or consume a specific product, service, or platform resource rather than representing equity or a claim on profits. Utility tokens derive value from the utility of the underlying service and are a primary means of bootstrapping decentralised protocol economies.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    },
    {
      "@id": "urn:ngm:class:cryptocurrency-token",
      "label": "Cryptocurrency Token"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:crypto-token",
        "label": "Crypto Token"
      },
      {
        "@id": "urn:ngm:class:asset-tokenization",
        "label": "Asset Tokenization"
      },
      {
        "@id": "urn:ngm:class:blockchain-economics",
        "label": "Blockchain Economics"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      },
      {
        "@id": "urn:ngm:class:tokenomics",
        "label": "Tokenomics"
      },
      {
        "@id": "urn:ngm:class:initial-coin-offering",
        "label": "Initial Coin Offering"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:blockchain-transaction",
        "label": "Blockchain Transaction"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:erc-20",
        "label": "ERC-20"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralised-autonomous-organisation",
        "label": "Decentralised Autonomous Organisation"
      },
      {
        "@id": "urn:ngm:class:blockchain-application",
        "label": "Blockchain Application"
      },
      {
        "@id": "urn:ngm:class:access-control",
        "label": "Access Control"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:nft",
        "label": "NFT"
      },
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:stablecoin",
        "label": "Stablecoin"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:ledger",
        "label": "Decentralised Ledger"
      },
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:digital-economy",
        "label": "Digital Economy"
      },
      {
        "@id": "urn:ngm:class:incentive-mechanism",
        "label": "Incentive Mechanism"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:app-token",
      "label": "App Token"
    },
    {
      "@id": "urn:ngm:class:protocol-token",
      "label": "Protocol Token"
    }
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
  "@id": "urn:visionflow:annotation:link-resolutions:utility-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0537236a19fb0680cdb6c0b63d70cb67f26772c8e2f39df6a424c7115349698e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cryptocurrency Token]]",
      "resolved": "urn:visionflow:owl:class:cryptocurrency-token",
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
  - Tokens providing access to services.

- ### Semantic Classification
  - owl-class:: blockchain:UtilityToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Cryptocurrency Token]]

- ### Content
  Utility Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
