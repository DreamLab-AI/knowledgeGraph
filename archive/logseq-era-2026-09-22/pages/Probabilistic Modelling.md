public:: true

# Probabilistic Modelling
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f899272a64222812d48160e5a2ccb0e67132779ae43b1e3343316173c0bf6ed8",
  "@type": "Page",
  "vc:slug": "probabilistic-modelling",
  "title": "Probabilistic Modelling",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computational-modelling",
      "vc:label": "Computational Modelling"
    },
    {
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:uncertainty-quantification",
      "vc:label": "Uncertainty Quantification"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:probabilistic-modelling",
  "@type": "Class",
  "label": "Probabilistic Modelling",
  "definition": "The practice of representing systems, processes, and observations as probability distributions over possible states rather than as single deterministic values, so that predictions carry calibrated uncertainty. Probabilistic modelling encompasses specifying random variables and their dependencies, choosing priors, performing inference to update beliefs from data, and validating the resulting probabilistic model—underpinning Bayesian statistics, generative machine learning, risk analysis, and scientific simulation.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:computational-modelling",
    "label": "Computational Modelling"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-simulation",
        "label": "Monte Carlo Simulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:statistical-modelling",
        "label": "Statistical Modelling"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
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
  - "The practice of representing systems, processes, and observations as probability distributions over possible states rather than as single deterministic values, so that predictions carry calibrated uncertainty. Probabilistic modelling encompasses specifying random variables and their dependencies, choosing priors, performing inference to update beliefs from data, and validating the resulting probabilistic model—underpinning Bayesian statistics, generative machine learning, risk analysis, and scientific simulation."

- ### Semantic Classification
  - owl-class:: machine-learning:ProbabilisticModelling
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Computational Modelling]]
  - uses:: [[Bayesian Inference]]
  - enables:: [[Uncertainty Quantification]]

- ### Content

  ## Definition

  **Probabilistic modelling** is the discipline of building models whose outputs are distributions rather than point values. Instead of asserting "the delivery will arrive at 14:00", a probabilistic model asserts a distribution over arrival times, from which one can read a most likely value, a 95% interval, and the probability of missing a deadline. This shift from certainty to calibrated belief is the practice's defining move, and it changes every stage of the modelling workflow: specification, inference, prediction, and validation.

  As a practice it is distinct from the artefact it produces. A probabilistic *model*—a Bayesian network, a hidden Markov model, a Gaussian process, a probabilistic programme—is the object; probabilistic *modelling* is the activity of choosing which quantities to treat as random variables, encoding dependency structure between them, selecting priors that express what is known before seeing data, and running inference to update those beliefs against evidence. It stands alongside [[Computational Modelling]] as a modelling practice, specialised to systems where noise, partial observability, or genuine stochasticity make deterministic description misleading.

  The core machinery is [[Bayesian Inference]]: the posterior distribution over unknowns is proportional to the prior times the likelihood of the observed data. Exact posteriors are rarely tractable, so practitioners rely on Markov chain Monte Carlo sampling, variational inference, or sequential Monte Carlo methods, with [[Monte Carlo Simulation]] serving both inference and forward prediction. The output feeds directly into [[Uncertainty Quantification]]—decision-makers receive not just an estimate but an honest statement of how much the model does not know.

  ## Technical Details

  Modern probabilistic modelling is dominated by probabilistic programming languages—Stan, PyMC, NumPyro, Turing.jl, and Pyro—which let a modeller write the generative story of the data as code and delegate inference to general-purpose engines (Hamiltonian Monte Carlo, the No-U-Turn Sampler, stochastic variational inference). This separation of model from inference has widened access considerably: epidemiologists, econometricians, and engineers routinely fit hierarchical models that would have required bespoke derivations two decades ago.

  Within machine learning, probabilistic modelling supplies the formal backbone of generative methods: variational autoencoders, diffusion models, and Gaussian process regression are all probabilistic models trained by (approximately) maximising likelihoods or evidence bounds. The practice also disciplines model criticism—posterior predictive checks, calibration curves, and information criteria test whether a model's stated uncertainty matches reality. The persistent challenges are computational cost at scale, prior sensitivity, and communicating distributional outputs to audiences accustomed to single numbers.

  ## Current Landscape

  - **JAX-backed inference is the performance frontier**: NumPyro (JAX) and BlackJAX provide fast NUTS/HMC and are now callable from within PyMC (`pm.sample_numpyro_nuts`, `pm.sample_blackjax_nuts`), because PyMC decouples model specification from the inference engine — both only require a JAX log-density.
  - **PyMC v5 on PyTensor**: the current PyMC generation compiles models through PyTensor to C, JAX or Numba backends (CPU/GPU/TPU), and 2025 community tutorials position it as the most accessible Python entry point, with JAX integration closing much of the historic speed gap to Stan and NumPyro.
  - **Ecosystem roles**: Stan (Hamiltonian Monte Carlo via cmdstan/rstan/pystan) remains the academic reference; NumPyro leads on raw compute; Pyro (PyTorch), TensorFlow Probability, and Turing.jl round out the mainstream PPL landscape.
  - **Deep-generative overlap**: probabilistic programming increasingly interoperates with deep learning, underpinning variational autoencoders and score-based/diffusion models as approximate-inference problems rather than a separate discipline.

  **Sources**:
  - https://pmc.ncbi.nlm.nih.gov/articles/PMC10495961/
  - https://community.amstat.org/discussion/12-aug-2025-webinar-a-tutorial-for-getting-started-with-pymc-v5-probabilistic-bayesian-python
