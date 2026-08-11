public:: true

# ERC1400 Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cf2bb2e9ced3e494a669da241a719e43118ef2a5600b3fe6b33ddd09464faca1",
  "@type": "Page",
  "vc:slug": "erc1400-standard",
  "title": "ERC1400 Standard",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0541"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC1400 Standard"
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
  "@id": "urn:ngm:class:erc1400-standard",
  "@type": "Class",
  "label": "ERC1400 Standard",
  "definition": "An Ethereum security token standard (ERC-1400) combining fungible token behaviour with regulatory compliance controls, including partitioned balances, transfer restrictions, forced transfers for legal recovery, and on-chain document attachment, enabling the issuance and lifecycle management of regulated securities on public blockchains.",
  "domain": "blockchain",
  "maturity": "established",
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:smart-contract-platform",
        "label": "Smart Contract Platform"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:tokenization",
        "label": "Tokenisation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:bc-token-and-asset",
      "label": "Token and Asset"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:erc1400-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cf2bb2e9ced3e494a669da241a719e43118ef2a5600b3fe6b33ddd09464faca1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
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
  - An Ethereum security token standard (ERC-1400) combining fungible token behaviour with regulatory compliance controls, including partitioned balances, transfer restrictions, forced transfers for legal recovery, and on-chain document attachment, enabling the issuance and lifecycle management of regulated securities on public blockchains.

- ### Semantic Classification
  - owl-class:: blockchain:ERC1400Standard
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  ERC-1400 Standard — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
