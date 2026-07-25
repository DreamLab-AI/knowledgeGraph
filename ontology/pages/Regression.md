public:: true

# Regression
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e116f6e9d8c91e841624f47e8926e3e088d75088f9bb45b2521d0cd5e3b91ec5",
  "@type": "Page",
  "vc:slug": "regression",
  "title": "Regression",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning"
    },
    {
      "@id": "urn:visionflow:linked:supervised-learning",
      "vc:label": "Supervised Learning"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regression-analysis",
      "vc:label": "https://en.wikipedia.org/wiki/Regression_analysis"
    },
    {
      "@id": "urn:visionflow:linked:https-scikit-learn-org-stable-modules-linear-model-html",
      "vc:label": "https://scikit-learn.org/stable/modules/linear_model.html"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Regression"
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
  "@id": "urn:ngm:class:regression",
  "@type": "Class",
  "label": "Regression",
  "definition": "Regression is a class of statistical and machine learning methods that model the relationship between input variables and a continuous output. It is used for prediction and for estimating effects.",
  "domain": "artificial-intelligence",
  "maturity": "established",
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
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
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
  "@id": "urn:visionflow:annotation:link-resolutions:regression:f274537aaf2c",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e116f6e9d8c91e841624f47e8926e3e088d75088f9bb45b2521d0cd5e3b91ec5"
  },
  "vc:resolutions": [
    {
      "raw": "[[Statistics]]",
      "resolved": "urn:visionflow:linked:statistics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Supervised Learning]]",
      "resolved": "urn:visionflow:linked:supervised-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Regression_analysis]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-regression-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://scikit-learn.org/stable/modules/linear_model.html]]",
      "resolved": "urn:visionflow:linked:https-scikit-learn-org-stable-modules-linear-model-html",
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
  - Regression is a class of statistical and machine learning methods that model the relationship between input variables and a continuous output. It is used for prediction and for estimating effects.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Regression
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Supervised Learning]]
  - bridges-to:: [[Deep Learning]]
  - requires:: [[Statistics]]
  - enables:: [[Machine Learning Discipline]]

- ### Content
  - Regression methods fit a function that maps inputs to a numeric target, with the goal of minimising the difference between predicted and observed values. Linear regression is the simplest form, while more flexible methods capture non-linear relationships.
  - Regression is used across many fields to forecast quantities and to study how changes in inputs relate to changes in an outcome. Model quality is assessed using measures such as mean squared error and validation on held-out data.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Regression_analysis]], [[https://scikit-learn.org/stable/modules/linear_model.html]]
  - migration-date:: 2026-05-29T00:00:00Z
