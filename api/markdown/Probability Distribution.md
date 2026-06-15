public:: true

# Probability Distribution

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:probability-distribution",
  "@type": "Page",
  "title": "Probability Distribution",
  "vc:slug": "probability-distribution",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:probability-distribution",
  "@type": "Class",
  "label": "Probability Distribution",
  "definition": "A probability distribution is a mathematical function that assigns probabilities to the possible outcomes of a random variable, describing how likely each value or region of values is. Distributions may be discrete (probability mass functions) or continuous (probability density functions), and are characterised by parameters and summary statistics such as mean and variance. They are the central object of probabilistic modelling, underpinning inference, sampling and generative modelling in machine learning.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probability-theory",
      "label": "Probability Theory"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:entropy",
        "label": "Entropy"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:monte-carlo-integration",
        "label": "Monte Carlo Integration"
      },
      {
        "@id": "urn:ngm:class:importance-sampling",
        "label": "Importance Sampling"
      },
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monte-carlo-methods",
        "label": "Monte Carlo Methods"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      },
      {
        "@id": "urn:ngm:class:stochastic-process",
        "label": "Stochastic Process"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
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
  - A probability distribution is a mathematical function that assigns probabilities to the possible outcomes of a random variable, describing how likely each value or region of values is. Distributions may be discrete (probability mass functions) or continuous (probability density functions), and are characterised by parameters and summary statistics such as mean and variance. They are the central object of probabilistic modelling, underpinning inference, sampling and generative modelling in machine learning.
  - Related core concepts: [[Probability Theory]] [[Sampling]] [[Entropy]] [[Statistics]] [[Generative Model]]
- ### Overview
  - A probability distribution captures the full uncertainty about a random quantity. For discrete outcomes a probability mass function gives the probability of each value; for continuous outcomes a probability density function gives relative likelihoods whose integral over any region yields a probability. Distributions are summarised by moments such as mean and variance and by quantities such as entropy. In machine learning, modelling data as samples from an unknown distribution and then learning or approximating that distribution is the unifying theme behind density estimation, generative modelling and Bayesian inference.
  - Treating data as samples from a distribution lets a single framework express learning, inference and generation. Discriminative models learn conditional distributions of labels given inputs; generative models learn the joint or marginal distribution of the data itself and can synthesise new samples. The arithmetic of distributions, marginalising, conditioning, and measuring divergence, provides the operations on which probabilistic machine learning is built.
- ### History and context
  - The systematic study of distributions grew from games of chance and the work of Bernoulli, Gauss and Laplace, maturing into measure-theoretic probability in the twentieth century. In machine learning, distributions became the unifying abstraction behind likelihood-based learning, Bayesian methods and, more recently, deep generative models.
- ### Key aspects
  - Discrete vs continuous: mass functions versus density functions, with normalisation ensuring total probability one.
  - Parameters and moments: location, scale and shape parameters, plus mean, variance and higher moments.
  - Joint, marginal and conditional distributions: the relationships among multiple random variables.
  - Families of distributions: Gaussian, Bernoulli, categorical, exponential and others used as building blocks.
  - Entropy and divergence: information-theoretic measures of spread and of distance between distributions.
  - Sampling and inference: drawing samples and estimating parameters or posteriors from observed data.
- ### Applications
  - Specifying likelihoods and priors in Bayesian and probabilistic models.
  - Generative modelling, where data is modelled as samples from a learned distribution.
  - Monte Carlo estimation of intractable expectations and integrals.
  - Quantifying predictive uncertainty for calibrated decision making.
- ### Challenges and considerations
  - Intractable normalisation: many useful distributions have constants that cannot be computed in closed form.
  - Curse of dimensionality: estimating high-dimensional densities from finite data is hard.
  - Mode collapse and coverage: capturing all modes of a multimodal distribution is difficult for learned models.
  - Calibration: predicted probabilities must reflect true frequencies to be trustworthy.
- ### Examples
  - Modelling pixel intensities with a learned distribution to generate images.
  - Placing a Gaussian prior over weights in a Bayesian neural network.
  - Estimating the distribution of returns to quantify financial risk.
- ### Relationships
  - subClassOf:: [[Probability Theory]]
  - partOf:: [[Probability Theory]]
  - hasPart:: [[Entropy]]
  - implements:: [[Generative Model]]
  - enables:: [[Sampling]]
  - enables:: [[Monte Carlo Integration]]
  - enables:: [[Importance Sampling]]
  - enables:: [[Variational Inference]]
  - uses:: [[Monte Carlo Methods]]
  - supports:: [[Statistics]]
  - supports:: [[Uncertainty Quantification]]
  - supports:: [[Diffusion Model]]
  - relatedTo:: [[Information Theory]]
  - relatedTo:: [[Stochastic Process]]
  - relatedTo:: [[Machine Learning]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
