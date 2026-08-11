public:: true

# Uncertainty
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9019f8058b99ac31bb7dfedda8717b003d6a9ac5b8a809f9e5e08e2349e4c4d4",
  "@type": "Page",
  "vc:slug": "uncertainty",
  "title": "Uncertainty",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:probability-theory", "vc:label": "Probability Theory"},
    {"@id": "urn:visionflow:linked:probabilistic-reasoning", "vc:label": "Probabilistic Reasoning"},
    {"@id": "urn:visionflow:linked:risk", "vc:label": "Risk"},
    {"@id": "urn:visionflow:linked:uncertainty-quantification", "vc:label": "Uncertainty Quantification"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uncertainty",
  "@type": "Class",
  "label": "Uncertainty",
  "definition": "The condition of incomplete or imperfect knowledge about the state of a system, the outcome of a process, or the truth of a proposition, formalised in probability theory as a distribution over possible values rather than a single determinate answer. Uncertainty is conventionally divided into aleatoric uncertainty, arising from irreducible randomness in the world, and epistemic uncertainty, arising from limited data or model inadequacy and reducible in principle by gathering more evidence. Representing, propagating, and acting under uncertainty is central to probabilistic reasoning, robot localisation, risk assessment, and modern machine learning.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {"@id": "urn:ngm:class:probability-theory", "label": "Probability Theory"},
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:probabilistic-reasoning", "label": "Probabilistic Reasoning"},
      {"@id": "urn:ngm:class:risk", "label": "Risk"},
      {"@id": "urn:ngm:class:entropy", "label": "Entropy"},
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:uncertainty-quantification", "label": "Uncertainty Quantification"}
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "The condition of incomplete or imperfect knowledge about the state of a system, the outcome of a process, or the truth of a proposition, formalised in probability theory as a distribution over possible values rather than a single determinate answer. Uncertainty is conventionally divided into aleatoric uncertainty, arising from irreducible randomness in the world, and epistemic uncertainty, arising from limited data or model inadequacy and reducible in principle by gathering more evidence. Representing, propagating, and acting under uncertainty is central to probabilistic reasoning, robot localisation, risk assessment, and modern machine learning."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Uncertainty
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Probability Theory]]
  - related-to:: [[Probabilistic Reasoning]]
  - related-to:: [[Risk]]
  - bridges-to:: [[Uncertainty Quantification]]

- ### Content

  ## Definition

  **Uncertainty** names the gap between what an agent knows and what is actually the case. Whenever sensors are noisy, data are finite, models are approximations, or the world itself is stochastic, an intelligent system cannot commit to a single determinate answer and must instead maintain a set or distribution of hypotheses. Probability theory provides the dominant calculus for this: beliefs are expressed as probability distributions, evidence updates them through Bayes' rule, and decisions are taken by weighing outcomes against their likelihoods.

  The standard taxonomy distinguishes **aleatoric** uncertainty — variability intrinsic to the process, such as sensor noise or the roll of a die, which no amount of additional data removes — from **epistemic** uncertainty, which reflects ignorance about the true model or parameters and shrinks as evidence accumulates. The distinction matters operationally: epistemic uncertainty tells a system where to explore or gather data, while aleatoric uncertainty sets a floor on achievable precision. Information theory quantifies uncertainty through entropy, giving a common currency for comparing how much a measurement or message reduces it.

  In this graph, uncertainty underpins [[Probabilistic Reasoning]] (inference over uncertain propositions), robot [[Localisation]] (maintaining a belief over pose given noisy odometry and observations), and [[Risk]] (uncertainty coupled to consequences of value). Fields such as uncertainty quantification make its propagation through computational models an engineering discipline in its own right.

  ## Current Landscape

  Handling uncertainty well has become a differentiator in applied machine learning. Bayesian neural networks, deep ensembles, and conformal prediction attach calibrated confidence to model outputs, which regulators increasingly expect in safety-critical domains such as medical diagnosis and autonomous driving. In robotics, the entire estimation stack — Kalman and particle filters, factor-graph SLAM — is built on explicit uncertainty representation, and planners consume covariance estimates to trade speed against safety margins.

  Recent developments (2024-2025):

  - The standard aleatoric/epistemic split holds across current work: aleatoric uncertainty is the irreducible randomness of the data-generating process, epistemic uncertainty is reducible ignorance about the model or parameters that shrinks with more data or a better model (Sale, Javanmardi & Hüllermeier, COPA/PMLR 266, 2025).
  - **Conformal prediction** (Vovk et al., 2005) has become the fast-growing distribution-free framework for uncertainty quantification: it wraps any predictor to output prediction sets that contain the true label with a user-specified probability, assuming only exchangeability, and is now a leading tool for calibrated confidence in NLP and vision (TACL survey, 2024).
  - LLM reliability has re-sharpened the problem: hallucinations correlate strongly with model uncertainty, and 2024-2025 methods estimate epistemic uncertainty (semantic entropy, information-theoretic metrics) and apply conformal risk control to derive abstention rules that bound hallucination risk (arXiv survey 2412.05563; Yadkori et al., 2024).
  - Uncertainty-aware conformal prediction, which folds explicit aleatoric/epistemic estimates into the calibration pipeline, is an active 2025 research direction for tightening prediction sets.

  **Sources**:
  - https://proceedings.mlr.press/v266/sale25a.html
  - https://arxiv.org/html/2412.05563v2
  - https://direct.mit.edu/tacl/article/doi/10.1162/tacl_a_00715/125278/Conformal-Prediction-for-Natural-Language

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
