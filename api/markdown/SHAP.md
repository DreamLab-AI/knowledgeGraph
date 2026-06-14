public:: true

# SHAP
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1da538899a01ba70168b399f5f2b3b49122ca5a355369565bd16a69fa79759c2",
  "@type": "Page",
  "vc:slug": "shap",
  "title": "SHAP",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:shapley-value",
      "vc:label": "Shapley Value"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-model",
      "vc:label": "Machine Learning Model"
    },
    {
      "@id": "urn:visionflow:linked:model-interpretability",
      "vc:label": "Model Interpretability"
    },
    {
      "@id": "urn:visionflow:linked:feature-attribution",
      "vc:label": "Feature Attribution"
    },
    {
      "@id": "urn:visionflow:linked:explainable-ai",
      "vc:label": "Explainable AI"
    },
    {
      "@id": "urn:visionflow:linked:lime",
      "vc:label": "LIME"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning-domain",
      "vc:label": "Machine Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:lundberg-and-lee-a-unified-approach-to-interpreting-model-predictions-2017",
      "vc:label": "Lundberg and Lee, A Unified Approach to Interpreting Model Predictions (2017)"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SHAP"
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
  "@id": "urn:ngm:class:shap",
  "@type": "Class",
  "label": "SHAP",
  "definition": "SHAP, short for SHapley Additive exPlanations, is a method for explaining the output of machine-learning models by attributing each prediction to its input features. It is grounded in Shapley values from cooperative game theory, which fairly distribute a payoff among contributors, treating each feature as a player and the prediction as the payoff. SHAP provides locally accurate, consistent feature attributions and unifies several earlier explanation techniques under a common framework.",
  "domain": "ai",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline-domain",
      "label": "Machine Learning Domain"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:shapley-value",
        "label": "Shapley Value"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-model",
        "label": "Machine Learning Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-interpretability",
        "label": "Model Interpretability"
      },
      {
        "@id": "urn:ngm:class:feature-attribution",
        "label": "Feature Attribution"
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
  "@id": "urn:visionflow:annotation:link-resolutions:shap:ec098178cd82",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1da538899a01ba70168b399f5f2b3b49122ca5a355369565bd16a69fa79759c2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Shapley Value]]",
      "resolved": "urn:visionflow:linked:shapley-value",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machine Learning Model]]",
      "resolved": "urn:visionflow:linked:machine-learning-model",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Interpretability]]",
      "resolved": "urn:visionflow:linked:model-interpretability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Feature Attribution]]",
      "resolved": "urn:visionflow:linked:feature-attribution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Explainable AI]]",
      "resolved": "urn:visionflow:linked:explainable-ai",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LIME]]",
      "resolved": "urn:visionflow:linked:lime",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machine Learning Domain]]",
      "resolved": "urn:visionflow:linked:machine-learning-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lundberg and Lee, A Unified Approach to Interpreting Model Predictions (2017)]]",
      "resolved": "urn:visionflow:linked:lundberg-and-lee-a-unified-approach-to-interpreting-model-predictions-2017",
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
  - SHAP, short for SHapley Additive exPlanations, is a method for explaining the output of machine-learning models by attributing each prediction to its input features. It is grounded in Shapley values from cooperative game theory, which fairly distribute a payoff among contributors, treating each feature as a player and the prediction as the payoff. SHAP provides locally accurate, consistent feature attributions and unifies several earlier explanation techniques under a common framework.

- ### Semantic Classification
  - owl-class:: ml:SHAP
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Machine Learning Domain]]
  - bridges-to:: [[Explainable AI]], [[LIME]]
  - requires:: [[Shapley Value]], [[Machine Learning Model]]
  - enables:: [[Model Interpretability]], [[Feature Attribution]]

- ### Content
  - SHAP computes, for a given prediction, how much each feature contributes relative to a baseline expectation. By framing the model as a cooperative game and features as players, it uses Shapley values to allocate the difference between the prediction and the baseline across features in a way that satisfies properties such as local accuracy, consistency and the handling of features that have no effect.
  - Exact Shapley computation is exponential in the number of features, so SHAP provides efficient approximations tailored to model classes, including a fast exact method for tree ensembles and sampling-based or kernel-based estimators for general models. This makes the approach practical for models ranging from gradient-boosted trees to deep networks.
  - The resulting attributions support both local explanations of individual predictions and global summaries of feature importance across a dataset. SHAP has become a standard tool in explainable artificial intelligence, used for debugging models, auditing for bias and communicating model behaviour to stakeholders.

- ### Provenance
  - sources:: [[Lundberg and Lee, A Unified Approach to Interpreting Model Predictions (2017)]]
  - migration-date:: 2026-05-29T00:00:00Z
