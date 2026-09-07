```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b29e0fb70e30134a257a915277655202fabbaa94e0223d108736bcd872cb35db",
  "@type": "Page",
  "vc:slug": "erc20-standard",
  "title": "ERC20 Standard",
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
      "vc:value": "BC-0538"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC20 Standard"
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
  "@id": "urn:ngm:class:erc20-standard",
  "@type": "Class",
  "label": "ERC20 Standard",
  "definition": "Technical standard for fungible tokens on ereum, defining required mods and events for token contracts.",
  "domain": "blockchain",
  "maturity": "established",
  "relations": {
    "implements": [
      {
        "@id": "urn:ngm:class:blockchain",
        "label": "Blockchain"
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

- ### Definition
  - Technical standard for fungible tokens on Ethereum, defining required methods and events for token contracts.

- ### Semantic Classification
  - owl-class:: blockchain:ERC20Standard
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  ERC-20 Standard — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
