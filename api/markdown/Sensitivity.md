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
  "definition": "Sensitivity quantifies the degree to which the output of a model, classifier, or system changes in response to variation in its inputs, parameters, or underlying assumptions. In binary classification, sensitivity (also called recall or true positive rate) measures the proportion of actual positive instances correctly identified by a model. In sensitivity analysis, the concept is generalised to any computational or physical system to identify which input factors most strongly drive output variance, thereby guiding uncertainty quantification and model validation.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.72,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:recall",
      "label": "Recall"
    },
    {
      "@id": "urn:ngm:class:true-positive-rate",
      "label": "True Positive Rate"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:parameter",
        "label": "Parameter"
      },
      {
        "@id": "urn:ngm:class:ground-truth",
        "label": "Ground Truth"
      },
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:robustness",
        "label": "Robustness"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:model-validation",
        "label": "Model Validation"
      },
      {
        "@id": "urn:ngm:class:feature-importance",
        "label": "Feature Importance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:confusion-matrix",
        "label": "Confusion Matrix"
      },
      {
        "@id": "urn:ngm:class:threshold",
        "label": "Threshold"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:specificity",
        "label": "Specificity"
      },
      {
        "@id": "urn:ngm:class:precision",
        "label": "Precision"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:f1-score",
        "label": "F1 Score"
      },
      {
        "@id": "urn:ngm:class:roc-curve",
        "label": "ROC Curve"
      },
      {
        "@id": "urn:ngm:class:bias-variance-tradeoff",
        "label": "Bias-Variance Tradeoff"
      },
      {
        "@id": "urn:ngm:class:reproducibility",
        "label": "Reproducibility"
      },
      {
        "@id": "urn:ngm:class:hyperparameter",
        "label": "Hyperparameter"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:sensitivity-analysis",
        "label": "Sensitivity Analysis"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-simulation",
        "label": "Monte Carlo Simulation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:explainability",
        "label": "Explainability"
      },
      {
        "@id": "urn:ngm:class:fairness",
        "label": "Fairness"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:risk-assessment",
        "label": "Risk Assessment"
      },
      {
        "@id": "urn:ngm:class:decision-support",
        "label": "Decision Support"
      }
    ]
  },
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
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
  - Sensitivity quantifies the degree to which the output of a model, classifier, or system changes in response to variation in its inputs, parameters, or underlying assumptions. In the context of [[Classification]], sensitivity — also known as [[Recall]] or the [[True Positive Rate]] — measures the proportion of genuinely positive instances that a model correctly identifies. More broadly, [[Sensitivity Analysis]] extends this notion to any computational, physical, or sociotechnical system, systematically varying inputs to discover which factors most strongly drive output variance, underpinning [[Uncertainty Quantification]] and [[Model Validation]].

- ### Overview
  - Sensitivity is one of the oldest and most fundamental metrics in statistical modelling, signal detection theory, and machine learning. It answers a critical operational question: when the condition of interest truly exists, how reliably does the model detect it?
  - Two distinct but related usages coexist:
    - **Classifier Sensitivity**: In binary [[Classification]], sensitivity = TP / (TP + FN), where TP is true positives and FN is false negatives. It captures the model's ability to avoid missing real positive cases, making it especially critical in domains such as medical diagnosis, fraud detection, and safety-critical systems.
    - **Global/Local Sensitivity Analysis**: A family of techniques that apportion output uncertainty to uncertainty in model inputs. Methods range from one-at-a-time (OAT) perturbation through variance-based decompositions (Sobol indices) and derivative-based approaches, all quantifying how much each input contributes to output variability.
  - High sensitivity in a classifier implies a low false-negative rate but may tolerate more false positives; this is directly traded off against [[Specificity]]. Practitioners navigate this tradeoff via the [[ROC Curve]] and area under the curve (AUC), adjusting the classification [[Threshold]] to balance sensitivity against specificity for a given application requirement.

- ### Key Components
  - **True Positive Rate (TPR)** — The core formula: TP / (TP + FN). Requires access to [[Ground Truth]] labels and a populated [[Confusion Matrix]].
  - **Threshold Dependence** — Classifier sensitivity is a function of the decision [[Threshold]]; lowering the threshold raises sensitivity but typically reduces [[Precision]] and [[Specificity]].
  - **[[Bias-Variance Tradeoff]]** — Overly sensitive models may capture noise rather than signal, resulting in high variance; sensitivity analysis across [[Hyperparameter]] settings exposes this instability.
  - **One-at-a-Time (OAT) Analysis** — The simplest sensitivity analysis method: vary one [[Parameter]] while holding others fixed, measure output change. Computationally cheap but ignores interactions.
  - **Variance-Based (Sobol) Decomposition** — Decomposes total output variance into contributions from individual inputs and their interactions, enabling rigorous global [[Sensitivity Analysis]] via [[Monte Carlo Simulation]].
  - **Local Sensitivity** — The partial derivative of the output with respect to a specific input at a given operating point; widely used in gradient-based [[Explainability]] methods such as saliency maps and integrated gradients.
  - **Distributional Sensitivity** — Assesses how output distributions shift when the distribution of an input changes; relevant to [[Uncertainty Quantification]] and domain-shift robustness.

- ### Mechanisms
  - Sensitivity in classifiers is computed directly from the [[Confusion Matrix]]:
    - sensitivity = TP / (TP + FN)
  - In regression or simulation contexts, local sensitivity is the Jacobian (first-order partial derivatives) of model outputs with respect to inputs.
  - Variance-based sensitivity indices partition output variance V(Y) as:
    - First-order Sobol index: Si = V(E[Y | Xi]) / V(Y)
    - Total-order index: STi includes all interactions involving Xi
  - Gradient-based sensitivity in [[Deep Learning]] uses backpropagation to compute input gradients, directly linking to [[Explainability]] techniques such as SHAP and LIME.

- ### Applications / Use Cases
  - **Medical Diagnosis** — Sensitivity is the primary performance criterion for screening tests (e.g., cancer screening, disease detection); a missed positive (false negative) has severe clinical consequences. A highly sensitive test is used first; a highly specific test confirms.
  - **Fraud Detection** — Fraud classifiers are tuned for high sensitivity to minimise undetected fraudulent transactions, at the cost of more false alarms triaged by downstream rules.
  - **Model Calibration** — [[Sensitivity Analysis]] over [[Hyperparameter]] settings guides tuning of complex [[Deep Learning]] and [[Ensemble Methods]] models, flagging configurations that are fragile to small perturbations.
  - **Climate and Environmental Modelling** — Sensitivity analysis identifies which physical parameters (e.g., albedo, aerosol forcing) most strongly govern simulation outputs, directing observational priorities and bounding prediction uncertainty.
  - **Safety-Critical Systems** — In aviation, autonomous vehicles, and industrial control, sensitivity analysis verifies that control system outputs do not amplify small input perturbations into unsafe trajectories, supporting formal [[Robustness]] guarantees.
  - **Drug Discovery** — Sensitivity of binding affinity predictions to molecular [[Feature]] perturbations guides lead optimisation and flags unstable molecular scaffolds.
  - **Information Retrieval** — In search and recommendation, sensitivity (recall) at various cutoffs (recall@k) measures coverage of relevant items returned, complementary to [[Precision]]@k.
  - **[[Fairness]] Audits** — Differential sensitivity across demographic subgroups reveals disparate miss rates; groups with lower sensitivity face higher false-negative burdens, motivating [[Fairness]]-constrained training.
  - **Explainability and Interpretability** — Local sensitivity (gradient-based saliency) identifies which input [[Feature]] dimensions most strongly influence individual predictions, providing post-hoc [[Explainability]].

- ### Relationships
  - requires:: [[Parameter]]
  - requires:: [[Ground Truth]]
  - requires:: [[Classification]]
  - enables:: [[Robustness]]
  - enables:: [[Uncertainty Quantification]]
  - enables:: [[Model Validation]]
  - enables:: [[Feature Importance]]
  - dependsOn:: [[Confusion Matrix]]
  - dependsOn:: [[Threshold]]
  - contrastsWith:: [[Specificity]]
  - contrastsWith:: [[Precision]]
  - relatedTo:: [[F1 Score]]
  - relatedTo:: [[ROC Curve]]
  - relatedTo:: [[Bias-Variance Tradeoff]]
  - relatedTo:: [[Reproducibility]]
  - relatedTo:: [[Hyperparameter]]
  - uses:: [[Sensitivity Analysis]]
  - uses:: [[Monte Carlo Simulation]]
  - supports:: [[Explainability]]
  - supports:: [[Fairness]]
  - bridges-to:: [[Risk Assessment]]
  - bridges-to:: [[Decision Support]]
  - is-subclass-of:: [[Model Evaluation]]
  - sameAs:: [[Recall]]
  - sameAs:: [[True Positive Rate]]

- ### Standards & Context
  - **ISO 5725** — International standard on accuracy (trueness and precision) of measurement methods, contextualising sensitivity within metrological frameworks.
  - **IEEE 2894-2024** — Standard for evaluation of artificial intelligence (AI) systems, covering metrics including sensitivity and specificity in AI performance reporting.
  - **NIST AI Risk Management Framework (AI RMF)** — Incorporates sensitivity-related metrics under MAP and MEASURE functions for trustworthy AI assessment.
  - **FDA Guidance on AI/ML-Based Software as a Medical Device** — Specifies sensitivity and specificity reporting requirements for clinical AI tools, with defined performance thresholds per indication.
  - **BIPM International Vocabulary of Metrology (VIM)** — Defines sensitivity of a measuring system as the quotient of the change in indication by the corresponding change in the measured quantity, grounding the concept in measurement science.
  - Sensitivity as recall is formalised in the information retrieval community through trec_eval tooling and standard benchmark evaluations (TREC, CLEF, NTCIR).

- ### Provenance
  - sources:: ISO 5725; NIST AI RMF; FDA SaMD AI/ML guidance; Saltelli et al., "Global Sensitivity Analysis — The Primer"; Fawcett (2006) ROC analysis survey
  - updated:: 2026-06-13
