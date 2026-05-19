public:: true

# Guaranteed Bandwidth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5348fce672aff886d058732500f31bdf43456e6458465911ce12a9553a8bc1aa",
  "@type": "Page",
  "vc:slug": "guaranteed-bandwidth",
  "title": "Guaranteed Bandwidth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:network-quality-metric",
      "vc:label": "Network Quality Metric"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-1008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Guaranteed Bandwidth"
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
  "@id": "urn:ngm:class:guaranteed-bandwidth",
  "@type": "Class",
  "label": "Guaranteed Bandwidth",
  "definition": "A guaranteed bandwidth component in the Metaverse domain that enables gNetworkSlice.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-content-and-assets",
      "label": "Content and Assets"
    },
    {
      "@id": "urn:ngm:class:network-quality-metric",
      "label": "Network Quality Metric"
    }
  ],
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:guaranteed-bandwidth:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5348fce672aff886d058732500f31bdf43456e6458465911ce12a9553a8bc1aa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Network Quality Metric]]",
      "resolved": "urn:visionflow:owl:class:network-quality-metric",
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
  - A guaranteed bandwidth component in the Metaverse domain that enables gNetworkSlice.

- ### Semantic Classification
  - owl-class:: spatial-computing:GuaranteedBandwidth
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Network Quality Metric]]

- ### Content
  GuaranteedBandwidth — content pending enrichment.

- ### Provenance
  - sources:: Generated from bridge validation
  - migration-date:: 2026-04-26T00:00:00Z
