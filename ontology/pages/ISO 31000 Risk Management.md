public:: true

# ISO 31000 Risk Management
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7899ed6323c147e86a3147c53757d916f98bad452700478e766616d553d1b3bb",
  "@type": "Page",
  "vc:slug": "iso-31000-risk-management",
  "title": "ISO 31000 Risk Management",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:iso",
      "vc:label": "ISO"
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
      "vc:value": "ISO 31000 Risk Management"
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
  "@id": "urn:ngm:class:iso-31000-risk-management",
  "@type": "Class",
  "label": "ISO 31000 Risk Management",
  "definition": "An ISO standard providing principles and guidelines for risk management applicable to any organisation. It describes a framework and process for managing risk and is not intended for certification.",
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
        "@id": "urn:ngm:class:iso",
        "label": "ISO"
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
  "@id": "urn:visionflow:annotation:link-resolutions:iso-31000-risk-management:f08a082aa357",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7899ed6323c147e86a3147c53757d916f98bad452700478e766616d553d1b3bb"
  },
  "vc:resolutions": [
    {
      "raw": "[[ISO]]",
      "resolved": "urn:visionflow:linked:iso",
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
  - An ISO standard providing principles and guidelines for risk management applicable to any organisation. It describes a framework and process for managing risk and is not intended for certification.

- ### Semantic Classification
  - owl-class:: standards:ISO31000RiskManagement
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[ISO]]

- ### Content
  - An ISO standard providing principles and guidelines for risk management applicable to any organisation. It describes a framework and process for managing risk and is not intended for certification.
  - Topic area: risk management.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
