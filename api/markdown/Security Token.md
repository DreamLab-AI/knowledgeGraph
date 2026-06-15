public:: true

# Security Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:deda272b40a09b943590c902ff4f98fda34ccf703e22b373d9720ed0ee3d6023",
  "@type": "Page",
  "vc:slug": "security-token",
  "title": "Security Token",
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
      "vc:value": "BC-0513"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Security Token"
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
  "@id": "urn:ngm:class:security-token",
  "@type": "Class",
  "label": "Security Token",
  "definition": "A blockchain-based token representing complete or fractional ownership interests in real-world assets or entities, subject to securities regulations that may restrict transfer based on investor identity, jurisdiction, or asset category. Security tokens provide holders with entitlements such as dividends, profit-sharing, or voting rights, and are typically issued through security token offerings (STOs) under regulatory compliance frameworks.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:fungible-token",
    "label": "Fungible Token"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:security-token-offering",
        "label": "Security Token Offering"
      },
      {
        "@id": "urn:ngm:class:transfer-restriction",
        "label": "Transfer Restriction"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:digital-asset-trading",
        "label": "Digital Asset Trading"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:kyc-aml-compliance",
        "label": "KYC/AML Compliance"
      },
      {
        "@id": "urn:ngm:class:regulatory-approval",
        "label": "Regulatory Approval"
      },
      {
        "@id": "urn:ngm:class:accredited-investor-verification",
        "label": "Accredited Investor Verification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fractional-ownership",
        "label": "Fractional Ownership"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
      },
      {
        "@id": "urn:ngm:class:knowledge-graph-publication-classifier-key-infrastructure",
        "label": "Public Key Infrastructure"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:erc1400-standard",
        "label": "ERC1400 Standard"
      },
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      },
      {
        "@id": "urn:ngm:class:asset-tokenisation",
        "label": "Asset Tokenisation"
      },
      {
        "@id": "urn:ngm:class:erc-3643",
        "label": "ERC-3643 (T-REX)"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:securities-exchange-commission",
        "label": "Securities Exchange Commission"
      },
      {
        "@id": "urn:ngm:class:regulation-d",
        "label": "Regulation D"
      },
      {
        "@id": "urn:ngm:class:mifid-ii",
        "label": "MiFID II"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:non-fungible-token-nft",
        "label": "Non-Fungible Token (NFT)"
      },
      {
        "@id": "urn:ngm:class:semi-fungible-token",
        "label": "Semi-Fungible Token"
      },
      {
        "@id": "urn:ngm:class:utility-token",
        "label": "Utility Token"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:traditional-securities",
        "label": "Traditional Securities"
      },
      {
        "@id": "urn:ngm:class:real-world-asset",
        "label": "Real World Asset"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:token-economics",
        "label": "Token Economics"
      },
      {
        "@id": "urn:ngm:class:decentralised-finance",
        "label": "Decentralised Finance"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:tokenised-security",
      "label": "Tokenised Security"
    },
    {
      "@id": "urn:ngm:class:digital-security",
      "label": "Digital Security"
    }
  ],
  "quality": 0.75,
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
  "@id": "urn:visionflow:annotation:link-resolutions:security-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:deda272b40a09b943590c902ff4f98fda34ccf703e22b373d9720ed0ee3d6023"
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
  - A token designed to represent complete or fractional ownership interests in assets and/or entities. Subject to restrictions based on identity, jurisdiction, and asset category, and regulated by securities laws providing investors with entitlements like dividends, profit-sharing, or voting privileges.

- ### Semantic Classification
  - owl-class:: blockchain:SecurityToken
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Fungible Token]]

- ### Content
  Security Token — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
