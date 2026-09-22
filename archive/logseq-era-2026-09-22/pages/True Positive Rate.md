public:: true

# True Positive Rate
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:245ea127dd1a1e66888346487ece73a1545144c939af8ac7e510610c47087d0e",
  "@type": "Page",
  "vc:slug": "true-positive-rate",
  "title": "True Positive Rate",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:confusion-matrix",
      "vc:label": "Confusion Matrix"
    },
    {
      "@id": "urn:visionflow:linked:sensitivity",
      "vc:label": "Sensitivity"
    },
    {
      "@id": "urn:visionflow:linked:recall",
      "vc:label": "Recall"
    },
    {
      "@id": "urn:visionflow:linked:evaluation-metric",
      "vc:label": "Evaluation Metric"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "True Positive Rate"
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
  "@id": "urn:ngm:class:true-positive-rate",
  "@type": "Class",
  "label": "True Positive Rate",
  "definition": "True positive rate is a classification metric measuring the proportion of actual positive cases that a model correctly identifies, also known as sensitivity or recall.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:evaluation-metric",
      "label": "Evaluation Metric"
    },
    {
      "@id": "urn:ngm:class:model-performance",
      "label": "Model Performance"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
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
  "@id": "urn:visionflow:annotation:link-resolutions:true-positive-rate:a758a9162b4f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:245ea127dd1a1e66888346487ece73a1545144c939af8ac7e510610c47087d0e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Confusion Matrix]]",
      "resolved": "urn:visionflow:linked:confusion-matrix",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sensitivity]]",
      "resolved": "urn:visionflow:linked:sensitivity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Recall]]",
      "resolved": "urn:visionflow:linked:recall",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Evaluation Metric]]",
      "resolved": "urn:visionflow:linked:evaluation-metric",
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
  - True positive rate is a classification metric measuring the proportion of actual positive cases that a model correctly identifies, also known as sensitivity or recall.

- ### Semantic Classification
  - owl-class:: machine-learning:TruePositiveRate
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Evaluation Metric]]
  - bridges-to:: [[Sensitivity]], [[Recall]]
  - requires:: [[Confusion Matrix]]

- ### Content
  - True positive rate is computed as the number of true positives divided by the sum of true positives and false negatives. It quantifies how well a classifier detects positive cases and is equivalent to recall and sensitivity.
  - It is one axis of the receiver operating characteristic curve, plotted against the false positive rate, and is read from the confusion matrix that tabulates predicted against actual class labels.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
