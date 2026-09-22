public:: true

# ISO 8373 Robotics Vocabulary
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:84232cb71e670e8b152c50735c06d540a170f7c276ad00e269ba34eb40b2406b",
  "@type": "Page",
  "vc:slug": "iso-8373-robotics-vocabulary",
  "title": "ISO 8373 Robotics Vocabulary",
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
      "vc:value": "ISO 8373 Robotics Vocabulary"
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
  "@id": "urn:ngm:class:iso-8373-robotics-vocabulary",
  "@type": "Class",
  "label": "ISO 8373 Robotics Vocabulary",
  "definition": "ISO 8373 defines terms used in relation to robots and robotic devices operating in industrial and non-industrial environments.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:iso-8373-robotics-vocabulary:69bca7449817",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:84232cb71e670e8b152c50735c06d540a170f7c276ad00e269ba34eb40b2406b"
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
  - ISO 8373 defines terms used in relation to robots and robotic devices operating in industrial and non-industrial environments.

- ### Semantic Classification
  - owl-class:: standards:ISO8373RoboticsVocabulary
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[ISO]]

- ### Content
  - ISO 8373 defines terms used in relation to robots and robotic devices operating in industrial and non-industrial environments.
  - Topic area: robotics vocabulary.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
