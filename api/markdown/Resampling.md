public:: true

# Resampling

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:resampling", "@type":"Page", "title":"Resampling", "vc:slug":"resampling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:resampling",
  "@type":"Class",
  "label":"Resampling",
  "definition":"Resampling is a family of statistical and machine-learning techniques that repeatedly draw samples from observed data to estimate the variability of a statistic, validate a model, or rebalance a dataset. It includes methods such as bootstrapping, cross-validation, permutation testing, and over- and under-sampling for class imbalance. By substituting computation for restrictive distributional assumptions, resampling provides robust estimates of error, confidence and generalisation.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:statistical-inference","label":"Statistical Inference"}],
  "relations":{
    "requires":[{"@id":"urn:ngm:class:statistical-inference","label":"Statistical Inference"}],
    "uses":[{"@id":"urn:ngm:class:cross-validation","label":"Cross-Validation"},{"@id":"urn:ngm:class:bagging","label":"Bagging"}],
    "hasPart":[{"@id":"urn:ngm:class:cross-validation","label":"Cross-Validation"}],
    "enables":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},{"@id":"urn:ngm:class:cross-validation","label":"Cross-Validation"}],
    "supports":[{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"},{"@id":"urn:ngm:class:bagging","label":"Bagging"}],
    "partOf":[{"@id":"urn:ngm:class:statistical-inference","label":"Statistical Inference"}],
    "reduces":[{"@id":"urn:ngm:class:overfitting","label":"Overfitting"}],
    "relatedTo":[{"@id":"urn:ngm:class:cross-validation","label":"Cross-Validation"},{"@id":"urn:ngm:class:bagging","label":"Bagging"},{"@id":"urn:ngm:class:overfitting","label":"Overfitting"},{"@id":"urn:ngm:class:model-evaluation","label":"Model Evaluation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Resampling]] is a family of techniques that repeatedly draw samples from observed data to estimate variability, validate models, or rebalance datasets. It is a practical instrument of [[Statistical Inference]].
- It includes [[Cross-Validation]], bootstrapping, permutation testing, and over- and under-sampling, and it underpins reliable [[Model Evaluation]] in [[Machine Learning]].
- ### Overview
- Resampling trades analytical derivation for computation: rather than assuming a closed-form sampling distribution, it generates many resampled datasets and observes how a statistic behaves across them.
- The bootstrap draws with replacement to estimate standard errors and confidence intervals; cross-validation partitions data into folds to estimate out-of-sample error; permutation tests shuffle labels to build null distributions.
- For imbalanced classification, resampling rebalances classes by oversampling minorities or undersampling majorities, improving learning on rare events.
- ### Mechanisms
- Bootstrap: sample with replacement to approximate the sampling distribution.
- Cross-validation: rotate held-out folds to estimate generalisation error.
- Permutation testing: randomly reassign labels to construct a null hypothesis.
- Class rebalancing: over- or under-sample to mitigate imbalance.
- Aggregation: bagging averages models trained on bootstrap samples to reduce variance.
- ### Applications
- Estimating confidence intervals without strong distributional assumptions.
- Model selection and hyperparameter tuning via cross-validation.
- Reducing variance through bagging and ensemble methods.
- Handling imbalanced datasets in fraud, medical and anomaly detection.
- ### Relationships
- requires:: [[Statistical Inference]]
- uses:: [[Cross-Validation]]
- uses:: [[Bagging]]
- hasPart:: [[Cross-Validation]]
- enables:: [[Model Evaluation]]
- enables:: [[Cross-Validation]]
- supports:: [[Model Evaluation]]
- supports:: [[Bagging]]
- partOf:: [[Statistical Inference]]
- reduces:: [[Overfitting]]
- relatedTo:: [[Cross-Validation]]
- relatedTo:: [[Bagging]]
- relatedTo:: [[Overfitting]]
- relatedTo:: [[Model Evaluation]]
- bridgesTo:: [[Machine Learning]]
- ### Provenance
- updated:: 2026-06-15
