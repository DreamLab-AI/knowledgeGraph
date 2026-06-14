public:: true

# ERC-2612 Permit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fecd8d86cb8c5fcbb8b63e58f45340edb192ce4ce2ec1a4a3f0b61501b4ed24a",
  "@type": "Page",
  "vc:slug": "erc-2612-permit",
  "title": "ERC-2612 Permit",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ethereum",
      "vc:label": "Ethereum"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ERC-2612 Permit"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:erc-2612-permit",
  "@type": "Class",
  "label": "ERC-2612 Permit",
  "definition": "ERC-2612 adds a permit function to ERC-20 tokens, allowing approvals to be granted through signed messages rather than separate on-chain transactions.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:ethereum-smart-contract-platform",
        "label": "Ethereum Smart Contract Platform"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:erc-2612-permit:d32e2643ebab",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fecd8d86cb8c5fcbb8b63e58f45340edb192ce4ce2ec1a4a3f0b61501b4ed24a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Ethereum Smart Contract Platform]]",
      "resolved": "urn:visionflow:linked:ethereum",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - ERC-2612 adds a permit function to ERC-20 tokens, allowing approvals to be granted through signed messages rather than separate on-chain transactions.

- ### Semantic Classification
  - owl-class:: standards:ERC2612Permit
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[Ethereum Smart Contract Platform]]

- ### Content
  - ERC-2612 adds a permit function to ERC-20 tokens, allowing approvals to be granted through signed messages rather than separate on-chain transactions.
  - Topic area: gasless token approvals.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
