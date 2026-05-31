public:: true

# Institutional Economics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d39a1671f3189454d6ce766a7da5194ce796a20f45042309b2c998f0077f636f",
  "@type": "Page",
  "vc:slug": "institutional-economics",
  "title": "Institutional Economics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:economics",
      "vc:label": "Economics"
    },
    {
      "@id": "urn:visionflow:linked:property-rights",
      "vc:label": "Property Rights"
    },
    {
      "@id": "urn:visionflow:linked:behavioural-economics",
      "vc:label": "Behavioural Economics"
    },
    {
      "@id": "urn:visionflow:linked:game-theory",
      "vc:label": "Game Theory"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Institutional Economics"
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
  "@id": "urn:ngm:class:institutional-economics",
  "@type": "Class",
  "label": "Institutional Economics",
  "definition": "A school of economic thought that studies how institutions, the formal and informal rules governing behaviour, shape economic activity and outcomes.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:economics",
      "label": "Economics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:economics",
        "label": "Economics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:property-rights",
        "label": "Property Rights"
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
  "@id": "urn:visionflow:annotation:link-resolutions:institutional-economics:3477eea09ca4",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d39a1671f3189454d6ce766a7da5194ce796a20f45042309b2c998f0077f636f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Economics]]",
      "resolved": "urn:visionflow:linked:economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Property Rights]]",
      "resolved": "urn:visionflow:linked:property-rights",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Behavioural Economics]]",
      "resolved": "urn:visionflow:linked:behavioural-economics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Theory]]",
      "resolved": "urn:visionflow:linked:game-theory",
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
  - A school of economic thought that studies how institutions, the formal and informal rules governing behaviour, shape economic activity and outcomes.

- ### Semantic Classification
  - owl-class:: general:InstitutionalEconomics
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Economics]]
  - bridges-to:: [[Behavioural Economics]], [[Game Theory]]
  - requires:: [[Economics]]
  - enables:: [[Property Rights]]

- ### Content
  - Institutional economics examines the role of institutions, such as laws, property rights, customs and organisations, in structuring incentives and reducing uncertainty in economic interaction. It treats these rules as central explanatory factors rather than fixed background conditions.
  - The newer strand, new institutional economics, analyses transaction costs, contracts and governance structures, drawing on the work of economists who studied why firms exist and how property rights affect performance. The field informs debates on development, regulation and organisational design.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
