public:: true

# ERC721 Standard
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0373d70689d4a862550577b51ce2849f182f058b8cccf5fb1ef346cb047f6032",
  "@type": "Page",
  "vc:slug": "erc721-standard",
  "title": "ERC721 Standard",
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
      "vc:value": "BC-0539"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC721 Standard"
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
  "@id": "urn:ngm:class:erc721-standard",
  "@type": "Class",
  "label": "ERC721 Standard",
  "definition": "Technical standard for non-fungible tokens on ereum, defining unique token identification and ownership tracking.",
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:erc721-standard:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0373d70689d4a862550577b51ce2849f182f058b8cccf5fb1ef346cb047f6032"
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
  - Technical standard for non-fungible tokens on Ethereum, defining unique token identification and ownership tracking.

- ### Semantic Classification
  - owl-class:: blockchain:ERC721Standard
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  ERC-721 Standard — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
