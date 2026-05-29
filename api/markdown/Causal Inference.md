public:: true

# Causal Inference
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:causal-inference",
  "@type": "Page",
  "vc:slug": "causal-inference",
  "title": "Causal Inference",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:causal-inference",
  "@type": "Class",
  "label": "Causal Inference",
  "definition": "Causal inference is the scientific and statistical discipline concerned with drawing conclusions about cause-and-effect relationships from data, distinguishing genuine causal mechanisms from mere statistical association. It employs frameworks such as potential outcomes (Rubin causal model), structural causal models (Pearl's do-calculus), and graphical models (directed acyclic graphs) to formalise interventions and reason about counterfactuals. Applications span medicine, economics, social science, and AI alignment, wherever understanding the effect of an action — not merely its correlation with outcomes — is required.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:bayesian-inference", "label": "Bayesian Inference"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:bayesian-optimisation", "label": "Bayesian Optimisation"},
      {"@id": "urn:ngm:class:automated-reasoning", "label": "Automated Reasoning"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:causal-language-modelling", "label": "Causal Language Modelling"},
      {"@id": "urn:ngm:class:chain-of-thought-reasoning", "label": "Chain-of-Thought Reasoning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:mathematical-reasoning", "label": "Mathematical Reasoning"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Causal inference is the body of methods and theory dedicated to estimating the effect of an intervention or exposure from observational and experimental data. Where conventional statistics asks "what is associated with what?", causal inference asks "what would happen if we intervened?". The field draws on [[Bayesian Inference]] for probabilistic reasoning, graphical models (directed acyclic graphs) to represent causal structure, and the potential outcomes framework to define treatment effects rigorously. Its conclusions support decisions in policy, medicine, economics, and increasingly [[Automated Reasoning]] systems.

- ### Relationships
  - Causal inference makes heavy use of [[Bayesian Optimisation]] for model selection and hyperparameter search. It provides the theoretical substrate for [[Causal Language Modelling]] and informed [[Chain-of-Thought Reasoning]] in large language models. The field overlaps with [[Mathematical Reasoning]] and [[Inference]] more broadly, and its tools — instrumental variables, regression discontinuity, difference-in-differences — are foundational to policy evaluation.

- ### Content
  - Formal causal reasoning traces to the work of Sewall Wright on path analysis (1920s) and was later systematised by Donald Rubin's potential outcomes framework (1970s) and Judea Pearl's structural causal models and do-calculus (1990s–2000s). The landmark text *Causality* (Pearl, 2000) unified graphical and algebraic approaches, while *The Book of Why* (Pearl and Mackenzie, 2018) brought causal ideas to a wider audience. Parallel development of propensity score matching, instrumental variables, and natural experiments (Angrist, Imbens, Card — Nobel Prize 2021) established causal inference as mainstream in empirical economics and epidemiology.

  - Technical methods span two paradigms. The Rubin causal model defines the average treatment effect (ATE) as the expectation of individual-level contrasts between treated and control potential outcomes, estimable via randomised experiments or — under the unconfoundedness assumption — via matching, inverse probability weighting, and doubly robust estimators. Pearl's do-calculus provides a symbolic language for computing interventional distributions P(Y|do(X)) from observational data given a known causal graph. Identification criteria (back-door, front-door adjustment) tell the analyst which adjustment sets suffice to block confounding. Sensitivity analyses quantify robustness to unmeasured confounders.

  - Causal inference is deeply embedded in healthcare (estimating drug efficacy), economics (evaluating labour-market policies), and public policy (measuring programme impact). Rapidly growing applications include algorithmic fairness (disentangling causal from spurious correlations), online A/B testing at scale, and reinforcement learning (where reward signals must encode causal effect of actions, not mere co-occurrence). Meta-learners (T-learner, X-learner, DR-learner) and causal forests bridge causal theory with machine learning to estimate heterogeneous treatment effects at the individual level across large datasets.

  - In 2024–2025, causal inference is being integrated into large language model evaluation and AI alignment research. Researchers are using structural causal models to audit whether LLM responses encode spurious statistical regularities or genuine causal understanding. Causal representation learning — learning disentangled representations that respect causal structure — is an active research frontier, with potential to improve model robustness and out-of-distribution generalisation. The broader aim is AI systems capable of counterfactual reasoning: understanding not just "what happened" but "what would have happened under different conditions".

