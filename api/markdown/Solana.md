public:: true

# Solana
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3c69ff2fcb8223d0b6f416d82c687ce1f0c45bd48e9dac0f71167d4de5c9dfda",
  "@type": "Page",
  "vc:slug": "solana",
  "title": "Solana",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract-platform",
      "vc:label": "Smart Contract Platform"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0566"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Solana"
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
  "@id": "urn:ngm:individual:solana",
  "@type": "Individual",
  "label": "Solana",
  "definition": "A high-performance blockchain platform combining Proof-of-History (PoH) with Proof-of-Stake consensus, enabling parallel transaction processing for exceptional throughput exceeding TPS.",
  "domain": "blockchain",
  "maturity": "established",
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "instanceOf": [
    {
      "@id": "urn:ngm:class:smart-contract-platform",
      "label": "Smart Contract Platform"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:solana:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3c69ff2fcb8223d0b6f416d82c687ce1f0c45bd48e9dac0f71167d4de5c9dfda"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract Platform]]",
      "resolved": "urn:visionflow:owl:class:smart-contract-platform",
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
  - A high-performance blockchain platform combining Proof-of-History (PoH) with Proof-of-Stake consensus, enabling parallel transaction processing for exceptional throughput exceeding 65,000 TPS. Uses single-layer architecture where all transactions process on the base layer, prioritizing speed, throughput, and low latency.

- ### Semantic Classification
  - owl-class:: blockchain:Solana
  - owl-role:: Concept
  - belongs-to-domain:: [[Blockchain]]

- ### Relationships
  - is-subclass-of:: [[Smart Contract Platform]]

- ### Content
  Solana — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
