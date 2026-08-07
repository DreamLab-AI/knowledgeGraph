public:: true

# Random Variable
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9aade5b7c65fa9455e389537bd9a9129c0e154e440666744977369d8b8b208f9",
  "@type": "Page",
  "vc:slug": "random-variable",
  "title": "Random Variable",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:probability-theory", "vc:label": "Probability Theory"},
    {"@id": "urn:visionflow:linked:probability-distribution", "vc:label": "Probability Distribution"},
    {"@id": "urn:visionflow:linked:covariance-matrix", "vc:label": "Covariance Matrix"},
    {"@id": "urn:visionflow:linked:entropy", "vc:label": "Entropy"},
    {"@id": "urn:visionflow:linked:statistics", "vc:label": "Statistics"},
    {"@id": "urn:visionflow:linked:stochastic-process", "vc:label": "Stochastic Process"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:random-variable",
  "@type": "Class",
  "label": "Random Variable",
  "definition": "A measurable function that assigns a numerical value to each outcome in the sample space of a random experiment, providing the formal bridge between abstract probability spaces and quantitative analysis. Random variables may be discrete or continuous, are fully characterised by their probability distributions, and underpin expectation, variance, covariance, and the entropy measures central to information theory and statistical machine learning.",
  "domain": "data",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:probability-theory",
    "label": "Probability Theory"
  },
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:probability-distribution", "label": "Probability Distribution"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:covariance-matrix", "label": "Covariance Matrix"},
      {"@id": "urn:ngm:class:entropy", "label": "Entropy"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:statistics", "label": "Statistics"},
      {"@id": "urn:ngm:class:stochastic-process", "label": "Stochastic Process"}
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
  - "A measurable function that assigns a numerical value to each outcome in the sample space of a random experiment, providing the formal bridge between abstract probability spaces and quantitative analysis. Random variables may be discrete or continuous, are fully characterised by their probability distributions, and underpin expectation, variance, covariance, and the entropy measures central to information theory and statistical machine learning."

- ### Semantic Classification
  - owl-class:: data:RandomVariable
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Probability Theory]]
  - depends-on:: [[Probability Distribution]]
  - enables:: [[Covariance Matrix]]
  - related-to:: [[Statistics]]

- ### Content

  ## Definition

  A **random variable** is the workhorse abstraction of [[Probability Theory]]: formally, a measurable function X : Ω → ℝ from a probability space (Ω, ℱ, P) to the real numbers, so that statements such as "X ≤ x" correspond to measurable events with well-defined probabilities. This construction lets analysts move from qualitative outcomes (a coin lands heads, a packet arrives late) to numbers that can be summed, averaged, and compared, without abandoning mathematical rigour.

  Random variables come in two principal flavours. **Discrete** random variables take countably many values and are described by a probability mass function — the number of dropped frames in a telepresence session, for instance. **Continuous** random variables take values on a continuum and are described by a probability density function — sensor noise, rendering latency, or the position error of a tracked headset. In every case the variable's behaviour is captured by its [[Probability Distribution]], from which moments such as the expectation E[X] and variance Var(X) are derived.

  In this knowledge graph, random variables sit beneath much of the analytical machinery: the [[Covariance Matrix]] generalises variance to vectors of random variables, [[Entropy]] in information theory measures the uncertainty of a random variable, and Bayesian inference treats model parameters themselves as random variables to be updated with evidence. Multivariate collections of random variables indexed by time form the [[Stochastic Process]] models used in simulation and forecasting.

  ## Technical Details

  - **Formal definition**: X : Ω → ℝ is a random variable if {ω : X(ω) ≤ x} ∈ ℱ for every x ∈ ℝ (Borel measurability).
  - **Distribution function**: F(x) = P(X ≤ x) is non-decreasing, right-continuous, with limits 0 and 1; it fully determines the variable's law.
  - **Moments**: E[X] = ∫ x dF(x); Var(X) = E[(X − E[X])²]; higher moments capture skewness and kurtosis.
  - **Joint behaviour**: for random vectors (X₁, …, Xₙ), pairwise covariances Cov(Xᵢ, Xⱼ) populate the covariance matrix; independence factorises the joint distribution.
  - **Transformations**: functions of random variables (sums, maxima, smooth maps) are themselves random variables — the change-of-variables formula and the central limit theorem govern their limiting behaviour.
  - **Common families**: Bernoulli, binomial, and Poisson (discrete); uniform, Gaussian, and exponential (continuous). The Gaussian case dominates machine-learning practice because it is closed under linear maps and maximises entropy for a fixed variance.
