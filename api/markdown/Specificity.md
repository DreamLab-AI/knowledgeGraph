public:: true

# Specificity
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b3d346ebbbe1dd8f53285b68428bce50a1f13c9cb556eb7cc6fc1a1c0f70a473",
  "@type": "Page",
  "vc:slug": "specificity",
  "title": "Specificity",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:confusion-matrix",
      "vc:label": "Confusion Matrix"
    },
    {
      "@id": "urn:visionflow:linked:precision",
      "vc:label": "Precision"
    },
    {
      "@id": "urn:visionflow:linked:recall",
      "vc:label": "Recall"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Specificity"
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
  "@id": "urn:ngm:class:specificity",
  "@type": "Class",
  "label": "Specificity",
  "definition": "In classification and diagnostic testing, the proportion of actual negatives that are correctly identified as negative, also known as the true negative rate.",
  "domain": "artificial-intelligence",
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
  "@id": "urn:visionflow:annotation:link-resolutions:specificity:7f02f2e30550",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b3d346ebbbe1dd8f53285b68428bce50a1f13c9cb556eb7cc6fc1a1c0f70a473"
  },
  "vc:resolutions": [
    {
      "raw": "[[Confusion Matrix]]",
      "resolved": "urn:visionflow:linked:confusion-matrix",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Precision]]",
      "resolved": "urn:visionflow:linked:precision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Recall]]",
      "resolved": "urn:visionflow:linked:recall",
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
  - In classification and diagnostic testing, the proportion of actual negatives that are correctly identified as negative, also known as the true negative rate.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Specificity
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Confusion Matrix]]
  - bridges-to:: [[Precision]], [[Recall]]
  - requires:: [[Confusion Matrix]]

- ### Content
  - Specificity measures how well a binary classifier or diagnostic test identifies negative cases, computed as the number of true negatives divided by the total number of actual negatives. A high specificity means few false positives.
  - It is reported alongside sensitivity, also called recall, to characterise the trade-off a model makes between missing positives and raising false alarms. Both quantities are derived from the entries of a confusion matrix and inform threshold selection.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
