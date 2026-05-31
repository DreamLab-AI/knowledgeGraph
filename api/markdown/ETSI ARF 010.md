public:: true

# ETSI ARF 010
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a497f63be2abd01e84f0c0778ee66a020f458d51c341c0ac8e7d15be2a72fc0",
  "@type": "Page",
  "vc:slug": "etsi-arf-010",
  "title": "ETSI ARF 010",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:etsi",
      "vc:label": "ETSI"
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
      "vc:value": "ETSI ARF 010"
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
  "@id": "urn:ngm:class:etsi-arf-010",
  "@type": "Class",
  "label": "ETSI ARF 010",
  "definition": "ETSI ARF 010 is a deliverable of the ETSI Augmented Reality Framework activity concerning interoperability and architecture for augmented reality systems.",
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
        "@id": "urn:ngm:class:etsi",
        "label": "ETSI"
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
  "@id": "urn:visionflow:annotation:link-resolutions:etsi-arf-010:5b78fa879d32",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a497f63be2abd01e84f0c0778ee66a020f458d51c341c0ac8e7d15be2a72fc0"
  },
  "vc:resolutions": [
    {
      "raw": "[[ETSI]]",
      "resolved": "urn:visionflow:linked:etsi",
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
  - ETSI ARF 010 is a deliverable of the ETSI Augmented Reality Framework activity concerning interoperability and architecture for augmented reality systems.

- ### Semantic Classification
  - owl-class:: standards:ETSIARF010
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[ETSI]]

- ### Content
  - ETSI ARF 010 is a deliverable of the ETSI Augmented Reality Framework activity concerning interoperability and architecture for augmented reality systems.
  - Topic area: augmented reality framework.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
