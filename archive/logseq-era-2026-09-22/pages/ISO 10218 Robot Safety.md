public:: true

# ISO 10218 Robot Safety
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:91ce438c3d7237240e3f68375b08a3e1992d980d768396095526b618858888d1",
  "@type": "Page",
  "vc:slug": "iso-10218-robot-safety",
  "title": "ISO 10218 Robot Safety",
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
      "vc:value": "ISO 10218 Robot Safety"
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
  "@id": "urn:ngm:class:iso-10218-robot-safety",
  "@type": "Class",
  "label": "ISO 10218 Robot Safety",
  "definition": "An ISO standard, in multiple parts, specifying safety requirements for industrial robots and robot systems. It addresses hazards and protective measures for robot design and integration.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:iso-10218-robot-safety:e9093dcd9e4e",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:91ce438c3d7237240e3f68375b08a3e1992d980d768396095526b618858888d1"
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
  - An ISO standard, in multiple parts, specifying safety requirements for industrial robots and robot systems. It addresses hazards and protective measures for robot design and integration.

- ### Semantic Classification
  - owl-class:: standards:ISO10218RobotSafety
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[ISO]]

- ### Content
  - An ISO standard, in multiple parts, specifying safety requirements for industrial robots and robot systems. It addresses hazards and protective measures for robot design and integration.
  - Topic area: industrial robot safety.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
