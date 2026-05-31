public:: true

# Traditional Finance
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b4df3365f86b8822a4a0397d8e5a1b85cb45a013d0c909a6ff63a2e29cc445d",
  "@type": "Page",
  "vc:slug": "traditional-finance",
  "title": "Traditional Finance",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:de-fi",
      "vc:label": "DeFi"
    },
    {
      "@id": "urn:visionflow:linked:institutional-adoption",
      "vc:label": "Institutional Adoption"
    },
    {
      "@id": "urn:visionflow:linked:financial-infrastructure",
      "vc:label": "Financial Infrastructure"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Traditional Finance"
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
  "@id": "urn:ngm:class:traditional-finance",
  "@type": "Class",
  "label": "Traditional Finance",
  "definition": "Traditional finance refers to the established financial system of banks, exchanges, brokers, and regulated intermediaries that predates decentralised and blockchain-based finance.",
  "domain": "finance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:financial-infrastructure",
      "label": "Financial Infrastructure"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:traditional-finance:f85f6b10d355",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5b4df3365f86b8822a4a0397d8e5a1b85cb45a013d0c909a6ff63a2e29cc445d"
  },
  "vc:resolutions": [
    {
      "raw": "[[DeFi]]",
      "resolved": "urn:visionflow:linked:de-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Institutional Adoption]]",
      "resolved": "urn:visionflow:linked:institutional-adoption",
      "kind": "StubLink"
    },
    {
      "raw": "[[Financial Infrastructure]]",
      "resolved": "urn:visionflow:linked:financial-infrastructure",
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
  - Traditional finance refers to the established financial system of banks, exchanges, brokers, and regulated intermediaries that predates decentralised and blockchain-based finance.

- ### Semantic Classification
  - owl-class:: finance:TraditionalFinance
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Financial Infrastructure]]
  - bridges-to:: [[DeFi]], [[Institutional Adoption]]

- ### Content
  - Traditional finance encompasses commercial and investment banking, securities exchanges, clearing houses, and asset managers operating under established regulatory regimes. It relies on trusted intermediaries to record ownership and settle transactions.
  - The term is frequently used in contrast with decentralised finance to highlight differences in custody, settlement, and access, and it features in discussions of how tokenised assets might connect the two systems.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
