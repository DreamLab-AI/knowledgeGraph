public:: true

# Precision-Recall Curve
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4b2c3db3472ee94e6395b38c727968d8d476017dd60afa7febd23f6d49fe68ac",
  "@type": "Page",
  "vc:slug": "precision-recall-curve",
  "title": "Precision-Recall Curve",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:precision",
      "vc:label": "Precision"
    },
    {
      "@id": "urn:visionflow:linked:recall",
      "vc:label": "Recall"
    },
    {
      "@id": "urn:visionflow:linked:roc-curve",
      "vc:label": "ROC Curve"
    },
    {
      "@id": "urn:visionflow:linked:f-1-score",
      "vc:label": "F1 Score"
    },
    {
      "@id": "urn:visionflow:linked:confusion-matrix",
      "vc:label": "Confusion Matrix"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Precision-Recall Curve"
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
  "@id": "urn:ngm:class:precision-recall-curve",
  "@type": "Class",
  "label": "Precision-Recall Curve",
  "definition": "A diagnostic plot that traces the trade-off between precision and recall across the decision thresholds of a binary classifier.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:confusion-matrix",
      "label": "Confusion Matrix"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      },
      {
        "@id": "urn:ngm:class:recall",
        "label": "Recall"
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
  "@id": "urn:visionflow:annotation:link-resolutions:precision-recall-curve:ad88a370066f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4b2c3db3472ee94e6395b38c727968d8d476017dd60afa7febd23f6d49fe68ac"
  },
  "vc:resolutions": [
    {
      "raw": "[[Precision]]",
      "resolved": "urn:visionflow:linked:precision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Recall]]",
      "resolved": "urn:visionflow:linked:recall",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ROC Curve]]",
      "resolved": "urn:visionflow:linked:roc-curve",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[F1 Score]]",
      "resolved": "urn:visionflow:linked:f-1-score",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Confusion Matrix]]",
      "resolved": "urn:visionflow:linked:confusion-matrix",
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
  - A diagnostic plot that traces the trade-off between precision and recall across the decision thresholds of a binary classifier.

- ### Semantic Classification
  - owl-class:: blockchain:PrecisionRecallCurve
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Confusion Matrix]]
  - bridges-to:: [[ROC Curve]], [[F1 Score]]
  - requires:: [[Precision]], [[Recall]]

- ### Content
  - A precision-recall curve plots precision on one axis against recall on the other as the classification threshold is varied. Each point corresponds to a threshold, and the shape of the curve summarises how the model trades correctness of positive predictions against coverage of actual positives.
  - The curve is most informative when the positive class is rare, because it focuses on performance for that class rather than on overall accuracy. Practitioners summarise it with the area under the curve or use it to select an operating threshold appropriate to a given application, often comparing it with the ROC curve and the F1 score.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
