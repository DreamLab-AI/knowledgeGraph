public:: true

# Feature Attribution
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:6fc8829222692b03cf6c9e57d1a5ad2a91c9e3718b9e58dc26fe81152c283557",
  "@type": "Page",
  "vc:slug": "feature-attribution",
  "title": "Feature Attribution",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:interpretability",
      "vc:label": "Interpretability"
    },
    {
      "@id": "urn:visionflow:linked:shap",
      "vc:label": "SHAP"
    },
    {
      "@id": "urn:visionflow:linked:feature-importance",
      "vc:label": "Feature Importance"
    },
    {
      "@id": "urn:visionflow:linked:explainable-ai",
      "vc:label": "Explainable AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Feature Attribution"
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
  "@id": "urn:ngm:class:feature-attribution",
  "@type": "Class",
  "label": "Feature Attribution",
  "definition": "A family of explainable AI techniques that assign a contribution score to each input feature, indicating how much it influenced a model's particular prediction.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:explainable-ai",
      "label": "Explainable AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning-discipline",
        "label": "Machine Learning Discipline"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:interpretability",
        "label": "Interpretability"
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
  "@id": "urn:visionflow:annotation:link-resolutions:feature-attribution:09cc9e78928f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:6fc8829222692b03cf6c9e57d1a5ad2a91c9e3718b9e58dc26fe81152c283557"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interpretability]]",
      "resolved": "urn:visionflow:linked:interpretability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SHAP]]",
      "resolved": "urn:visionflow:linked:shap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feature Importance]]",
      "resolved": "urn:visionflow:linked:feature-importance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Explainable AI]]",
      "resolved": "urn:visionflow:linked:explainable-ai",
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
  - A family of explainable AI techniques that assign a contribution score to each input feature, indicating how much it influenced a model's particular prediction.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FeatureAttribution
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Explainable AI]]
  - bridges-to:: [[SHAP]], [[Feature Importance]]
  - requires:: [[Machine Learning Discipline]]
  - enables:: [[Interpretability]]

- ### Content
  - Feature attribution explains an individual model prediction by quantifying how each input feature contributed to it, typically as positive or negative weights. Methods include gradient-based approaches and game-theoretic ones such as SHAP, as well as surrogate models like LIME.
  - These attributions support model interpretability and debugging by revealing which inputs drive outputs, helping practitioners detect spurious correlations and communicate behaviour. Attribution scores for a single prediction are distinct from global feature importance across a whole model.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
