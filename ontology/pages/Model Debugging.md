public:: true

# Model Debugging
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:model-debugging", "@type":"Page", "title":"Model Debugging", "vc:slug":"model-debugging", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:model-debugging",
  "@type": "Class",
  "label": "Model Debugging",
  "definition": "Model debugging is the systematic process of diagnosing, isolating and correcting faults in the behaviour of a machine-learning model, such as poor accuracy, biased predictions, brittleness to distribution shift, or unexpected outputs on specific inputs. Unlike conventional software debugging, it must reason about statistical behaviour, training data, feature representations and learned parameters rather than deterministic control flow. Practitioners combine error analysis, interpretability tooling, slice-based evaluation and counterfactual probing to trace failures back to data, model architecture or the training procedure.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:model-evaluation",
      "label": "Model Evaluation"
    },
    {
      "@id": "urn:ngm:class:ai-infrastructure",
      "label": "AI Infrastructure"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning-operations",
        "label": "Machine Learning Operations"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:error-analysis",
        "label": "Error Analysis"
      },
      {
        "@id": "urn:ngm:class:model-evaluation",
        "label": "Model Evaluation"
      },
      {
        "@id": "urn:ngm:class:model-monitoring",
        "label": "Model Monitoring"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:explainable-ai",
        "label": "Explainable AI"
      },
      {
        "@id": "urn:ngm:class:model-interpretability",
        "label": "Model Interpretability"
      },
      {
        "@id": "urn:ngm:class:root-cause-analysis",
        "label": "Root Cause Analysis"
      },
      {
        "@id": "urn:ngm:class:logging",
        "label": "Logging"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:model-validation",
        "label": "Model Validation"
      },
      {
        "@id": "urn:ngm:class:model-quality",
        "label": "Model Quality"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:data-quality",
        "label": "Data Quality"
      },
      {
        "@id": "urn:ngm:class:data-drift",
        "label": "Data Drift"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning-model",
        "label": "Machine Learning Model"
      },
      {
        "@id": "urn:ngm:class:mlops",
        "label": "MLOps"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:debugging",
        "label": "Software Debugging"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      },
      {
        "@id": "urn:ngm:class:testing",
        "label": "Testing"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```
- ### Definition
- Model debugging is the disciplined practice of finding and fixing why a [[Machine Learning Model]] behaves incorrectly. It draws on [[Error Analysis]], [[Explainable AI]] and [[Model Interpretability]] to convert opaque statistical failures into actionable diagnoses, and it sits inside the broader practice of [[Model Evaluation]].
- ### Overview
- Where traditional [[Software Debugging]] traces deterministic control flow, model debugging must reason over data distributions, learned weights and feature representations. A model can pass aggregate metrics yet fail badly on important sub-populations, so debugging emphasises slicing the evaluation set, surfacing high-loss examples and explaining individual predictions.
- The workflow typically begins by reproducing the failure, then attributing it to one of three layers: the data (label noise, sampling bias, leakage), the model (capacity, architecture, regularisation) or the training procedure (optimisation, hyperparameters, objective).
- ### Mechanisms
- Slice-based and disaggregated evaluation to locate where performance collapses.
- Feature attribution and saliency methods from [[Explainable AI]] to see what the model attends to.
- Counterfactual and perturbation probing to test sensitivity and spurious correlations.
- Data inspection for leakage, mislabelling and [[Data Drift]] using [[Data Quality]] checks.
- Logging and tracing of inputs, intermediate activations and outputs via [[Logging]] and [[Observability]].
- [[Root Cause Analysis]] to separate symptom from cause.
- ### Applications
- Pre-deployment hardening as part of [[Model Validation]] gates.
- Continuous diagnosis in production via [[Model Monitoring]] and [[MLOps]] pipelines.
- Fairness and robustness audits before release.
- Iterative dataset curation guided by discovered failure modes.
- ### Relationships
- partOf:: [[Machine Learning Operations]]
- requires:: [[Error Analysis]]
- requires:: [[Model Evaluation]]
- requires:: [[Model Monitoring]]
- uses:: [[Explainable AI]]
- uses:: [[Model Interpretability]]
- uses:: [[Root Cause Analysis]]
- uses:: [[Logging]]
- enables:: [[Model Validation]]
- enables:: [[Model Quality]]
- dependsOn:: [[Data Quality]]
- dependsOn:: [[Data Drift]]
- supports:: [[Machine Learning Model]]
- supports:: [[MLOps]]
- contrastsWith:: [[Software Debugging]]
- relatedTo:: [[Observability]]
- relatedTo:: [[Testing]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
