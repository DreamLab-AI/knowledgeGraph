public:: true

# Threshold Optimisation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:threshold-optimisation", "@type":"Page", "title":"Threshold Optimisation", "vc:slug":"threshold-optimisation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:threshold-optimisation",
  "@type":"Class",
  "label":"Threshold Optimisation",
  "definition":"Threshold optimisation is the process of selecting the decision boundary applied to a model's continuous scores so that discrete predictions best satisfy a chosen objective. By tuning where a probability or score is converted into a class label, practitioners trade off precision against recall, manage class imbalance, and satisfy fairness or cost constraints. It is a post-hoc technique that adjusts operating points without retraining the underlying model.",
  "domain":"artificial-intelligence",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},{"@id":"urn:ngm:class:performance-metrics","label":"Performance Metrics"}],
  "relations":{
    "enables":[{"@id":"urn:ngm:class:fairness-metrics","label":"Fairness Metrics"},{"@id":"urn:ngm:class:bias-mitigation-techniques","label":"Bias Mitigation Techniques"}],
    "hasPart":[{"@id":"urn:ngm:class:classification-threshold","label":"Classification Threshold"},{"@id":"urn:ngm:class:decision-threshold","label":"Decision Threshold"}],
    "uses":[{"@id":"urn:ngm:class:roc-curve","label":"ROC Curve"},{"@id":"urn:ngm:class:model-calibration","label":"Model Calibration"}],
    "supports":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}],
    "implements":[{"@id":"urn:ngm:class:bias-mitigation-techniques","label":"Bias Mitigation Techniques"}],
    "dependsOn":[{"@id":"urn:ngm:class:model-calibration","label":"Model Calibration"}],
    "contrastsWith":[{"@id":"urn:ngm:class:equalized-odds","label":"Equalized Odds"}],
    "bridgesTo":[{"@id":"urn:ngm:class:fairness-in-machine-learning","label":"Fairness In Machine Learning"}],
    "relatedTo":[{"@id":"urn:ngm:class:machine-learning-model","label":"Machine Learning Model"},{"@id":"urn:ngm:class:classification-threshold","label":"Classification Threshold"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Threshold Optimisation]] selects the cut-off applied to a model's continuous output to convert scores into discrete decisions.
	- It manipulates the [[Classification Threshold]] and [[Decision Threshold]] to satisfy precision, recall, cost or fairness goals.
	- It is a post-hoc lever within [[Model Evaluation]] that complements [[Bias Mitigation Techniques]].
- ### Overview
	- Many classifiers emit probabilities or scores; turning these into labels requires a threshold whose default of 0.5 is rarely optimal.
	- Optimising the threshold lets practitioners move along the receiver-operating-characteristic or precision-recall curve to the operating point that best matches business or ethical objectives.
	- Under class imbalance or asymmetric error costs, threshold tuning can substantially improve practical performance without changing the model.
	- Group-specific thresholds are also used as a post-processing fairness intervention to equalise error rates across populations.
- ### Key aspects
	- Choice of objective: precision, recall, F-score, expected cost or fairness.
	- Use of validation data to estimate performance at candidate thresholds.
	- Handling of class imbalance and asymmetric misclassification costs.
	- Single global versus group-specific thresholds.
	- Interaction with model calibration of the underlying scores.
- ### Mechanisms
	- Sweeping thresholds and computing metrics across the operating range.
	- Selecting points on ROC or precision-recall curves.
	- Cost-sensitive selection minimising expected loss.
	- Constrained optimisation to meet fairness criteria such as equalised error rates.
	- Recalibrating scores before thresholding to improve reliability.
- ### Applications
	- Fraud and anomaly detection with skewed positive rates.
	- Medical screening balancing sensitivity and specificity.
	- Content moderation and risk scoring with tunable strictness.
	- Fair lending and hiring systems with group fairness constraints.
	- Alerting systems trading off false alarms against missed events.
- ### Relationships
	- subClassOf:: [[Model Evaluation]]
	- enables:: [[Fairness Metrics]]
	- enables:: [[Bias Mitigation Techniques]]
	- hasPart:: [[Classification Threshold]]
	- hasPart:: [[Decision Threshold]]
	- uses:: [[ROC Curve]]
	- uses:: [[Model Calibration]]
	- supports:: [[Model Evaluation]]
	- implements:: [[Bias Mitigation Techniques]]
	- dependsOn:: [[Model Calibration]]
	- contrastsWith:: [[Equalized Odds]]
	- bridgesTo:: [[Fairness In Machine Learning]]
	- relatedTo:: [[Machine Learning Model]]
	- relatedTo:: [[Classification Threshold]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
