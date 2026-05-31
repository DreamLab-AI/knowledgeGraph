public:: true

# LIME
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f3a71ce3812499b1da8fd4483b7a80763bcdc1bf03a9aa1a5ca83568a7e344d2",
  "@type": "Page",
  "vc:slug": "lime",
  "title": "LIME",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:explainable-ai",
      "vc:label": "Explainable AI"
    },
    {
      "@id": "urn:visionflow:linked:shap",
      "vc:label": "SHAP"
    },
    {
      "@id": "urn:visionflow:linked:interpretability",
      "vc:label": "Interpretability"
    },
    {
      "@id": "urn:visionflow:linked:model-interpretability",
      "vc:label": "Model Interpretability"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "LIME"
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
  "@id": "urn:ngm:class:lime",
  "@type": "Class",
  "label": "LIME",
  "definition": "Local Interpretable Model-agnostic Explanations, a technique that explains individual predictions of any machine learning model by fitting a simple interpretable model to perturbed samples around the instance of interest.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-interpretability",
      "label": "Model Interpretability"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
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
  "@id": "urn:visionflow:annotation:link-resolutions:lime:efbaa8cbfffc",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f3a71ce3812499b1da8fd4483b7a80763bcdc1bf03a9aa1a5ca83568a7e344d2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Machine Learning]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Explainable AI]]",
      "resolved": "urn:visionflow:linked:explainable-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SHAP]]",
      "resolved": "urn:visionflow:linked:shap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Interpretability]]",
      "resolved": "urn:visionflow:linked:interpretability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Interpretability]]",
      "resolved": "urn:visionflow:linked:model-interpretability",
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
  - Local Interpretable Model-agnostic Explanations, a technique that explains individual predictions of any machine learning model by fitting a simple interpretable model to perturbed samples around the instance of interest.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:LIME
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Model Interpretability]]
  - bridges-to:: [[SHAP]], [[Interpretability]]
  - requires:: [[Machine Learning]]
  - enables:: [[Explainable AI]]

- ### Content
  - LIME explains a single prediction by sampling perturbed versions of the input, observing how the model's output changes, and fitting a sparse linear surrogate model weighted by proximity to the original instance. The coefficients of this local model indicate which features most influenced that particular prediction.
  - Because it treats the underlying model as a black box, LIME applies to any classifier or regressor. It is widely used alongside SHAP for local feature attribution, though its explanations can be sensitive to the choice of perturbation and neighbourhood parameters.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
