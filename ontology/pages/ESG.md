public:: true

# ESG
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ae64df8f62dd0ee1d0d1805b9c74ff6685fe286f1aa5a6402f19b14b4c9b60cc",
  "@type": "Page",
  "vc:slug": "esg",
  "title": "ESG",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:sustainability",
      "vc:label": "Sustainability"
    },
    {
      "@id": "urn:visionflow:linked:corporate-governance",
      "vc:label": "Corporate Governance"
    },
    {
      "@id": "urn:visionflow:linked:transparency",
      "vc:label": "Transparency"
    },
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:audit",
      "vc:label": "Audit"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "ESG"
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
  "@id": "urn:ngm:class:esg",
  "@type": "Class",
  "label": "ESG",
  "definition": "Environmental, social and governance criteria used to evaluate the sustainability and ethical impact of an organisation's operations and investments.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sustainability",
      "label": "Sustainability"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:sustainability",
        "label": "Sustainability"
      },
      {
        "@id": "urn:ngm:class:corporate-governance",
        "label": "Corporate Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:esg:a43c64178463",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ae64df8f62dd0ee1d0d1805b9c74ff6685fe286f1aa5a6402f19b14b4c9b60cc"
  },
  "vc:resolutions": [
    {
      "raw": "[[Sustainability]]",
      "resolved": "urn:visionflow:linked:sustainability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Corporate Governance]]",
      "resolved": "urn:visionflow:linked:corporate-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transparency]]",
      "resolved": "urn:visionflow:linked:transparency",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Audit]]",
      "resolved": "urn:visionflow:linked:audit",
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
  - Environmental, social and governance criteria used to evaluate the sustainability and ethical impact of an organisation's operations and investments.

- ### Semantic Classification
  - owl-class:: governance:ESG
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Sustainability]]
  - bridges-to:: [[Audit]]
  - requires:: [[Sustainability]], [[Corporate Governance]]
  - enables:: [[Transparency]], [[Accountability]]

- ### Content
  - ESG refers to a set of environmental, social and governance factors used by investors and organisations to assess non-financial performance and risk. Environmental factors include emissions and resource use, social factors include labour and community impacts, and governance factors include board structure and ethics.
  - ESG considerations inform investment decisions, corporate reporting and regulatory disclosure requirements. The comparability and reliability of ESG data remain active areas of standard-setting and oversight.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
