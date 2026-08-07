public:: true

# Frequentist Statistics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aebb7ccc67b4c33b6697f5791b2f6ef3030e117ab6483ff1e8e33ab57163845d",
  "@type": "Page",
  "vc:slug": "frequentist-statistics",
  "title": "Frequentist Statistics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:hypothesis-testing",
      "vc:label": "Hypothesis Testing"
    },
    {
      "@id": "urn:visionflow:linked:bayesian-inference",
      "vc:label": "Bayesian Inference"
    },
    {
      "@id": "urn:visionflow:linked:conformal-prediction",
      "vc:label": "Conformal Prediction"
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
  "@id": "urn:ngm:class:frequentist-statistics",
  "@type": "Class",
  "label": "Frequentist Statistics",
  "definition": "The school of statistical inference that defines probability as long-run relative frequency over repeated sampling, treats parameters as fixed unknowns rather than random variables, and evaluates procedures — estimators, hypothesis tests, confidence intervals — by their repeated-sampling operating characteristics such as bias, error rates, and coverage, in explicit contrast to Bayesian inference over posterior beliefs.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:statistics",
    "label": "Statistics"
  },
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:hypothesis-testing",
        "label": "Hypothesis Testing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      },
      {
        "@id": "urn:ngm:class:bayesian-decision-theory",
        "label": "Bayesian Decision Theory"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:conformal-prediction",
        "label": "Conformal Prediction"
      },
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:statistical-inference",
        "label": "Statistical Inference"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "The school of statistical inference that defines probability as long-run relative frequency over repeated sampling, treats parameters as fixed unknowns rather than random variables, and evaluates procedures — estimators, hypothesis tests, confidence intervals — by their repeated-sampling operating characteristics such as bias, error rates, and coverage, in explicit contrast to Bayesian inference over posterior beliefs."

- ### Semantic Classification
  - owl-class:: data:FrequentistStatistics
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Statistics]]
  - has-part:: [[Hypothesis Testing]]
  - contrasts-with:: [[Bayesian Inference]]
  - related-to:: [[Conformal Prediction]]

- ### Content

  ## Definition

  **Frequentist statistics** is the interpretation of probability and inference that dominated twentieth-century [[Statistics]]. Probability is defined as the limiting relative frequency of an event over hypothetical repetitions of an experiment; consequently, unknown parameters are fixed constants — not random variables — and probability statements attach only to *procedures* and *data*, never to hypotheses. A 95% confidence interval does not mean the parameter lies inside with probability 0.95; it means the interval-generating procedure captures the true value in 95% of repeated samples. This procedural framing is the deepest point of contrast with [[Bayesian Inference]], which conditions on the observed data and expresses parameter uncertainty as a posterior distribution, and with [[Bayesian Decision Theory]], which optimises expected loss under that posterior.

  The framework was assembled in the early twentieth century from two partially incompatible traditions: Fisher's significance testing, maximum likelihood, and sufficiency; and Neyman–Pearson decision-theoretic testing with explicit Type I/II error rates, power, and confidence intervals. The textbook synthesis — null [[Hypothesis Testing]] with p-values at α = 0.05, unbiased or maximum-likelihood estimation, and coverage-guaranteed intervals — powers the default inferential toolkit of clinical trials, A/B testing, particle physics (the 5σ discovery convention), econometrics, and regulatory science.

  Its virtues are objectivity of a specific kind — no prior must be chosen, and error-rate guarantees hold regardless of anyone's beliefs — plus tractable large-sample theory (laws of large numbers, central limit theorem, asymptotic normality of the MLE) grounded in [[Probability Theory]]. Its pathologies are equally documented: widespread misreading of p-values as posterior probabilities, dependence of inference on unobserved sampling intentions (the stopping-rule problem), and the replication crisis fuelled by p-hacking and dichotomised significance. Modern practice within [[Statistical Inference]] is increasingly pragmatic, choosing frequentist or Bayesian machinery per problem and often evaluating Bayesian methods by their frequentist operating characteristics ("calibrated Bayes").

  ## Technical Details

  Core apparatus:

  - **Estimation**: maximum likelihood and M-estimation; properties assessed via bias, variance, consistency, efficiency (Cramér–Rao bound), and asymptotic normality; the bootstrap provides simulation-based standard errors and intervals when analytic theory is awkward.
  - **Testing**: Neyman–Pearson lemma for optimal simple-vs-simple tests; likelihood-ratio, Wald, and score tests; multiple-comparison control via familywise error (Bonferroni, Holm) or false discovery rate (Benjamini–Hochberg).
  - **Interval estimation**: exact, asymptotic, and bootstrap confidence intervals, judged by coverage probability.
  - **Machine-learning connections**: statistical learning theory's generalisation bounds are frequentist in character (guarantees over repeated draws of training sets), and [[Conformal Prediction]] is a distinctly frequentist contribution to modern uncertainty quantification — distribution-free prediction sets with guaranteed finite-sample marginal coverage, requiring only exchangeability, now widely used to wrap black-box models including neural networks.
