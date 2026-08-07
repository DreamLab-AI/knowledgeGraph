public:: true

# Fairness Accuracy Tradeoffs
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:783c5be5b50bba251014bd3c15bffa56dedca85d1ab728607e8267594fb5815b",
  "@type": "Page",
  "vc:slug": "fairness-accuracy-tradeoffs",
  "title": "Fairness Accuracy Tradeoffs",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:chouldechova-2017",
      "vc:label": "Chouldechova (2017)"
    },
    {
      "@id": "urn:visionflow:linked:corbett-davies-et-al-2017",
      "vc:label": "Corbett-Davies et al. (2017)"
    },
    {
      "@id": "urn:visionflow:linked:kleinberg-et-al-2017",
      "vc:label": "Kleinberg et al. (2017)"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0385"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness Accuracy Tradeoffs"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:fairness-accuracy-tradeoffs",
  "@type": "Class",
  "label": "Fairness Accuracy Tradeoffs",
  "definition": "The fundamental tension in supervised machine learning between maximising predictive accuracy and satisfying fairness constraints, characterised by the Pareto frontier of achievable (accuracy, fairness) pairs. Imposing fairness constraints restricts the hypothesis space, excluding models that achieve accuracy through reliance on protected-attribute correlations. The magnitude of the accuracy cost depends on the chosen fairness criterion (demographic parity, equalised odds, calibration), the base rate differences between groups, and the flexibility of the model class.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:algorithmic-bias",
        "label": "Algorithmic Bias"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-model",
        "label": "Machine Learning Model"
      },
      {
        "@id": "urn:ngm:class:supervised-learning",
        "label": "Supervised Learning"
      },
      {
        "@id": "urn:ngm:class:multi-objective-optimisation",
        "label": "Multi-Objective Optimisation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:bias-mitigation-techniques",
        "label": "Bias Mitigation Techniques"
      },
      {
        "@id": "urn:ngm:class:ai-fairness",
        "label": "AI Fairness"
      },
      {
        "@id": "urn:ngm:class:statistical-learning-theory",
        "label": "Statistical Learning Theory"
      },
      {
        "@id": "urn:ngm:class:protected-attributes",
        "label": "Protected Attribute"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:demographic-parity",
        "label": "Demographic Parity"
      },
      {
        "@id": "urn:ngm:class:calibration",
        "label": "Calibration"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:algorithmic-accountability",
        "label": "Algorithmic Accountability"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:responsible-ai-principles",
        "label": "Responsible AI Principles"
      },
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      },
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:ai-ethics",
        "label": "AI Ethics"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:regularisation",
        "label": "Regularisation"
      },
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:algorithmic-bias-and-variance",
        "label": "Algorithmic Bias and Variance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:data",
        "label": "Data"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:accuracy-fairness-tradeoff",
      "label": "Accuracy-Fairness Tradeoff"
    },
    {
      "@id": "urn:ngm:class:fairness-performance-tradeoff",
      "label": "Fairness-Performance Tradeoff"
    }
  ],
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-accuracy-tradeoffs:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:783c5be5b50bba251014bd3c15bffa56dedca85d1ab728607e8267594fb5815b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Chouldechova (2017)]]",
      "resolved": "urn:visionflow:linked:chouldechova-2017",
      "kind": "StubLink"
    },
    {
      "raw": "[[Corbett-Davies et al. (2017)]]",
      "resolved": "urn:visionflow:linked:corbett-davies-et-al-2017",
      "kind": "StubLink"
    },
    {
      "raw": "[[Kleinberg et al. (2017)]]",
      "resolved": "urn:visionflow:linked:kleinberg-et-al-2017",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Fairness Accuracy Tradeoffs represent the fundamental tension in machine learning between maximizing predictive accuracy and satisfying fairness constraints, characterized by the Pareto frontier of achievable (accuracy, fairness) pairs where improving one objective typically requires sacrificing the other. This tradeoff arises because fairness constraints restrict the hypothesis space of permissible models, excluding solutions that achieve maximum accuracy through reliance on correlations between protected attributes and outcomes, even when those correlations reflect genuine statistical relationships in the data. The magnitude of accuracy cost depends on several factors: the strength of correlation between protected attributes and outcomes, which fairness constraint is enforced (with independence constraints typically more costly than separation constraints), the flexibility of the model class, and base rate differences between groups. Implementation typically involves multi-objective optimization with a tradeoff parameter λ balancing accuracy loss L_accuracy and fairness violation L_fairness in the combined objective L = L_accuracy + λ·L_fairness, where varying λ traces out the Pareto frontier. While some contexts permit minimal accuracy costs for fairness improvements, others involve substantial tradeoffs requiring normative judgment about acceptable accuracy sacrifices for fairness gains. Research by Corbett-Davies et al. (2017) demonstrates that fairness constraints can sometimes improve accuracy for disadvantaged groups while reducing overall accuracy, and that the tradeoff is context-dependent based on deployment objectives and stakeholder priorities.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessAccuracyTradeoffs
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  Fairness Accuracy Tradeoffs **require** Algorithmic Bias (as the phenomenon being constrained) and Machine Learning Model (as the subject of optimisation). They **depend on** Bias Mitigation Techniques to navigate the Pareto frontier and AI Fairness definitions to formalise the constraint. They are **related to** Responsible AI, Explainable AI, AI Ethics, and Accountability as the broader governance context. They **contrast with** Algorithmic Bias and Variance (the statistical bias-variance tradeoff, a distinct concept). They **support** Responsible AI Principles by quantifying the cost of fairness commitments.

- ### Content
  The Fairness Accuracy Tradeoffs page retains its existing detailed definition above. The following paragraphs contextualise key concepts.

  The tradeoff arises because fairness constraints such as demographic parity (equal positive prediction rates across groups), equalised odds (equal true/false positive rates), and calibration (equal predictive probability accuracy) are mathematically incompatible with each other in most real-world settings where base rates differ between groups — a result formalised by Chouldechova (2017) and Kleinberg et al. (2017).

  In practice, the tradeoff is navigated via multi-objective optimisation with a regularisation term balancing accuracy loss against fairness violation: L = L_accuracy + λ·L_fairness. Varying λ traces the Pareto frontier, and stakeholders must make normative judgements about acceptable accuracy sacrifices for fairness gains — judgements that are context-dependent and require domain expertise.

  Corbett-Davies et al. (2017) demonstrated that in criminal justice risk assessment, fairness constraints can simultaneously reduce accuracy for the dominant group and improve outcomes for the disadvantaged group, complicating simplistic accuracy-fairness framings. This research reinforced the importance of deployment context and stakeholder priorities in choosing fairness criteria.

- ### Provenance
  - sources:: [[Corbett-Davies et al. (2017)]], [[Kleinberg et al. (2017)]], [[Chouldechova (2017)]]
  - migration-date:: 2026-04-26T00:00:00Z
