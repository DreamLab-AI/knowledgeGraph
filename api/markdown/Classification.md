public:: true

# Classification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5c45178c43b76c30317ddc6d0694a249aea4ed273e14741b63fe7d4cea56655",
  "@type": "Page",
  "vc:slug": "classification",
  "title": "Classification",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:supervised-learning",
      "vc:label": "Supervised Learning"
    },
    {
      "@id": "urn:visionflow:linked:object-detection",
      "vc:label": "Object Detection"
    },
    {
      "@id": "urn:visionflow:linked:statistical-learning-theory",
      "vc:label": "Statistical Learning Theory"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Classification"
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
  "@id": "urn:ngm:class:classification",
  "@type": "Class",
  "label": "Classification",
  "definition": "A supervised learning task in which a model assigns inputs to one of a fixed set of discrete categories.",
  "domain": "machine-learning",
  "maturity": "mature",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:supervised-learning",
      "label": "Supervised Learning"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:object-detection",
        "label": "Object Detection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:classification:9f0c8aa52657",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b5c45178c43b76c30317ddc6d0694a249aea4ed273e14741b63fe7d4cea56655"
  },
  "vc:resolutions": [
    {
      "raw": "[[Supervised Learning]]",
      "resolved": "urn:visionflow:linked:supervised-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Object Detection]]",
      "resolved": "urn:visionflow:linked:object-detection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Statistical Learning Theory]]",
      "resolved": "urn:visionflow:linked:statistical-learning-theory",
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
  - A supervised learning task in which a model assigns inputs to one of a fixed set of discrete categories.

- ### Semantic Classification
  - owl-class:: machine-learning:Classification
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Supervised Learning]]
  - bridges-to:: [[Statistical Learning Theory]]
  - requires:: [[Supervised Learning]]
  - enables:: [[Object Detection]]

- ### Content
  - Classification learns a mapping from inputs to categorical labels using labelled training examples. Binary classification distinguishes two classes, while multi-class and multi-label variants handle more categories or multiple simultaneous labels.
  - Models output scores or probabilities over classes, and a decision rule converts these to predictions. Evaluation uses metrics such as accuracy, precision, recall and the area under the receiver operating characteristic curve, chosen according to class balance and the cost of different error types.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
