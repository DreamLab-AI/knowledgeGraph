public:: true

# NIST AI Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cce284e0e72f5b751b9228d312183f942f9535e101f6cc34fb318f7b3b36557f",
  "@type": "Page",
  "vc:slug": "nist-ai-standards",
  "title": "NIST AI Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
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
      "vc:value": "NIST AI Standards"
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
  "@id": "urn:ngm:class:nist-ai-standards",
  "@type": "Class",
  "label": "NIST AI Standards",
  "definition": "A general reference to NIST work and publications relating to artificial intelligence standards and guidance. No single specific standard is identified by this label alone.",
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
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-ai-standards:a979fca70a69",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cce284e0e72f5b751b9228d312183f942f9535e101f6cc34fb318f7b3b36557f"
  },
  "vc:resolutions": [
    {
      "raw": "[[NIST]]",
      "resolved": "urn:visionflow:linked:nist",
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
  - A general reference to NIST work and publications relating to artificial intelligence standards and guidance. No single specific standard is identified by this label alone.

- ### Semantic Classification
  - owl-class:: standards:NISTAIStandards
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - A general reference to NIST work and publications relating to artificial intelligence standards and guidance. No single specific standard is identified by this label alone.
  - Topic area: artificial intelligence.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
