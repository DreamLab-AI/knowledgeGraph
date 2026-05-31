public:: true

# Greenwashing
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a4ddaaafae7f2c0b3b2ca65c7197b05627de9d6900bfe6c6316c2ac945fbfb35",
  "@type": "Page",
  "vc:slug": "greenwashing",
  "title": "Greenwashing",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:energy-consumption",
      "vc:label": "Energy Consumption"
    },
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Greenwashing"
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
  "@id": "urn:ngm:class:greenwashing",
  "@type": "Class",
  "label": "Greenwashing",
  "definition": "Greenwashing is the practice of making misleading or unsubstantiated claims about the environmental benefits of a product, service, or organisation.",
  "domain": "sustainability",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sustainability",
      "label": "Sustainability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:greenwashing:6f783c367120",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a4ddaaafae7f2c0b3b2ca65c7197b05627de9d6900bfe6c6316c2ac945fbfb35"
  },
  "vc:resolutions": [
    {
      "raw": "[[Energy Consumption]]",
      "resolved": "urn:visionflow:linked:energy-consumption",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
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
  - Greenwashing is the practice of making misleading or unsubstantiated claims about the environmental benefits of a product, service, or organisation.

- ### Semantic Classification
  - owl-class:: sustainability:Greenwashing
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sustainability]]
  - bridges-to:: [[Energy Consumption]]

- ### Content
  - Greenwashing occurs when an entity presents itself as more environmentally responsible than its activities justify, for example by emphasising a minor green feature while obscuring a larger environmental impact.
  - Regulators in several jurisdictions have introduced rules on environmental claims and sustainability disclosures to constrain greenwashing, requiring evidence to support marketing statements.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
