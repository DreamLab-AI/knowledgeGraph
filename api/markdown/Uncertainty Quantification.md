public:: true

# Uncertainty Quantification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:uncertainty-quantification",
  "@type": "Page",
  "vc:slug": "uncertainty-quantification",
  "title": "Uncertainty Quantification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:uncertainty-quantification",
  "@type": "Class",
  "label": "Uncertainty Quantification",
  "definition": "Uncertainty Quantification (UQ) is a discipline concerned with characterising, propagating, and communicating the uncertainties inherent in computational models, predictions, and measurements. It distinguishes between aleatoric uncertainty (irreducible randomness in the data or system) and epistemic uncertainty (reducible uncertainty arising from limited knowledge or data), providing principled methods — including Bayesian inference, Monte Carlo sampling, conformal prediction, and ensemble methods — for producing calibrated probability estimates rather than point predictions. UQ is foundational to trustworthy AI, safety-critical systems engineering, and scientific computing.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"},
      {"@id": "urn:ngm:class:monte-carlo-methods", "label": "Monte Carlo Methods"},
      {"@id": "urn:ngm:class:ensemble-methods", "label": "Ensemble Methods"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:trustworthy-ai", "label": "Trustworthy AI"},
      {"@id": "urn:ngm:class:risk-assessment", "label": "Risk Assessment"},
      {"@id": "urn:ngm:class:model-robustness", "label": "Model Robustness"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:interpretability", "label": "Interpretability"},
      {"@id": "urn:ngm:class:model-evaluation-results", "label": "Model Evaluation Results"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:calibration", "label": "Calibration"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Uncertainty Quantification (UQ) provides principled methods for characterising and communicating model prediction uncertainty, distinguishing irreducible aleatoric uncertainty from reducible epistemic uncertainty to support calibrated, trustworthy decision-making.

- ### Relationships
  - UQ draws on [[Bayesian Inference]], [[Monte Carlo Methods]], and [[Ensemble Methods]] as its primary technical tools. It depends on [[Calibration]] to ensure that stated confidence levels match empirical frequencies. UQ directly enables [[Trustworthy AI]] and [[Risk Assessment]], and supports [[AI Safety]] and [[Interpretability]] goals. It complements [[Model Robustness]] and [[Adversarial Robustness]] by addressing stochastic rather than adversarial failure modes.

- ### Content
  - Uncertainty Quantification (UQ) originated in computational physics and engineering in the 1990s, addressing the challenge of propagating input uncertainties through complex simulations (finite element models, climate models, nuclear reactor codes) to obtain meaningful output confidence intervals. The field was formalised through the work of practitioners at Sandia National Laboratories and academia, producing methods now widely standardised in engineering verification and validation (V&V). The fundamental taxonomy divides uncertainty into two types: aleatoric (also called irreducible or data uncertainty), arising from inherent variability in the system being modelled; and epistemic (also called model or knowledge uncertainty), arising from incomplete data, model mis-specification, or parameter estimation error. This distinction matters because epistemic uncertainty can in principle be reduced by collecting more data or improving the model, while aleatoric uncertainty cannot.

  - The primary methodological toolkit of UQ includes: (1) Bayesian inference, which provides a principled framework for updating probability distributions over model parameters given observed data, yielding posterior predictive distributions that naturally encode uncertainty; (2) Monte Carlo sampling methods, including plain Monte Carlo, Markov Chain Monte Carlo (MCMC), quasi-Monte Carlo, and importance sampling, used to approximate intractable integrals over parameter or prediction spaces; (3) ensemble methods, where multiple models or model instances are trained and their prediction distributions aggregated; (4) conformal prediction, a distribution-free framework that provides finite-sample coverage guarantees for prediction sets without requiring parametric assumptions about the data-generating process; and (5) Gaussian processes, which provide analytical posterior uncertainty estimates under smoothness assumptions and are widely used in Bayesian optimisation and scientific emulation.

  - The application of UQ to machine learning and deep learning became a major research area in the 2010s, driven by the deployment of neural networks in safety-critical domains (autonomous vehicles, medical diagnosis, financial forecasting). Standard deep neural networks are point predictors and are often poorly calibrated — a network may output a confidence of 0.99 for an incorrect prediction. Approaches to address this include: MC Dropout (Gal and Ghahramani, 2016), which approximates Bayesian inference by applying dropout at inference time; deep ensembles (Lakshminarayanan et al., 2017), which have been empirically shown to produce well-calibrated predictive distributions; temperature scaling, a post-hoc calibration technique; and Bayesian deep learning methods using variational inference. Conformal prediction has gained particular traction after 2022 for its ability to provide valid prediction sets with user-specified coverage rates regardless of the underlying model.

  - By 2024–2025, UQ has become a regulatory and governance concern as well as a technical one. The EU AI Act requires high-risk AI systems to provide appropriate accuracy and uncertainty metrics. NIST's AI Risk Management Framework (AI RMF) explicitly calls for uncertainty characterisation in AI system documentation. In scientific AI — protein structure prediction, weather forecasting (GraphCast, Pangu-Weather), and climate modelling — UQ is embedded in evaluation protocols. Large language models present novel UQ challenges: token-level probability outputs are often poorly calibrated, and the notion of "uncertainty" for generative models requires re-conceptualisation. Research into LLM calibration, verbal uncertainty expression, and selective prediction (abstaining when uncertain) is active in 2024–2025, with Anthropic, Google, and academic groups publishing benchmark results.

  - The significance of UQ extends beyond technical correctness. Communicating uncertainty to end users in interpretable forms (confidence intervals, prediction sets, traffic-light displays) is a human factors and design challenge. Over-confidence in AI predictions has contributed to real-world failures in medical AI and financial forecasting. Conversely, excessive conservatism driven by poorly understood uncertainty estimates can render AI systems unusable. UQ thus sits at the intersection of statistical methodology, software engineering, and responsible AI deployment.
