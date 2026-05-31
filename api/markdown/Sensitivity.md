public:: true

# Sensitivity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5058a527c22c7c694f4dbe1f454f0697663dee73fd130e85945f2091e18c21a7",
  "@type": "Page",
  "vc:slug": "sensitivity",
  "title": "Sensitivity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:parameter",
      "vc:label": "Parameter"
    },
    {
      "@id": "urn:visionflow:linked:robustness",
      "vc:label": "Robustness"
    },
    {
      "@id": "urn:visionflow:linked:reproducibility",
      "vc:label": "Reproducibility"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Sensitivity"
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
  "@id": "urn:ngm:class:sensitivity",
  "@type": "Class",
  "label": "Sensitivity",
  "definition": "The degree to which the output of a model or system changes in response to variation in its inputs, parameters or assumptions.",
  "domain": "general",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robustness",
      "label": "Robustness"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:parameter",
        "label": "Parameter"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robustness",
        "label": "Robustness"
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
  "@id": "urn:visionflow:annotation:link-resolutions:sensitivity:5c16250fd4bb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:5058a527c22c7c694f4dbe1f454f0697663dee73fd130e85945f2091e18c21a7"
  },
  "vc:resolutions": [
    {
      "raw": "[[Parameter]]",
      "resolved": "urn:visionflow:linked:parameter",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Robustness]]",
      "resolved": "urn:visionflow:linked:robustness",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reproducibility]]",
      "resolved": "urn:visionflow:linked:reproducibility",
      "kind": "StubLink"
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
  - The degree to which the output of a model or system changes in response to variation in its inputs, parameters or assumptions.

- ### Semantic Classification
  - owl-class:: general:Sensitivity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Robustness]]
  - bridges-to:: [[Reproducibility]]
  - requires:: [[Parameter]]
  - enables:: [[Robustness]]

- ### Content
  - Sensitivity measures how responsive a result is to changes in inputs or parameters. Sensitivity analysis systematically varies these factors to identify which ones most strongly influence outcomes and to assess how much confidence to place in conclusions.
  - High sensitivity to uncertain inputs signals that results should be treated cautiously, while low sensitivity indicates robustness. The concept is applied across modelling, statistics, engineering and decision analysis.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
