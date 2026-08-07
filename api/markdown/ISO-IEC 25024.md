public:: true
alias:: ISO/IEC 25024

# ISO-IEC 25024
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3970028af0a90fd539b8c2450e664d1263ccc80778172d4c1139299e0f39f4e3",
  "@type": "Page",
  "vc:slug": "iso-iec-25024",
  "title": "ISO-IEC 25024",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ISO-IEC 25024"
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
  "@id": "urn:ngm:class:iso-iec-25024",
  "@type": "Class",
  "label": "ISO-IEC 25024",
  "definition": "ISO/IEC 25024 is part of the ISO/IEC 25000 SQuaRE (Systems and software Quality Requirements and Evaluation) series. It defines quantitative measures for the data quality characteristics established in ISO/IEC 25012, enabling the quality of data retained in structured formats within an information system to be measured, evaluated and compared across its life cycle.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-quality-management",
        "label": "Data Quality Management"
      }
    ]
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
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
  "@id": "urn:visionflow:annotation:link-resolutions:iso-iec-25024:2be3e6a4235c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3970028af0a90fd539b8c2450e664d1263ccc80778172d4c1139299e0f39f4e3"
  },
  "vc:resolutions": [
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
  - ISO/IEC 25024 is part of the ISO/IEC 25000 SQuaRE (Systems and software Quality Requirements and Evaluation) series. It defines quantitative measures for the data quality characteristics established in ISO/IEC 25012, enabling the quality of data retained in structured formats within an information system to be measured, evaluated and compared across its life cycle.

- ### Semantic Classification
  - owl-class:: standards:ISOIEC25024
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - related-to:: [[Data Quality]], [[Data Governance]]
  - enables:: [[Data Quality Management]]

- ### Content
  - ISO/IEC 25024 is part of the SQuaRE series and defines measures for the quality of data within an information system.
  - Topic area: data quality measurement.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
