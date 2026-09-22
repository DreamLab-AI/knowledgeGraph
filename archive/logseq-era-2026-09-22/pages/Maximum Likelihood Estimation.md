public:: true

# Maximum Likelihood Estimation

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:maximum-likelihood-estimation",
  "@type": "Page",
  "title": "Maximum Likelihood Estimation",
  "vc:slug": "maximum-likelihood-estimation",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:maximum-likelihood-estimation",
  "@type": "Class",
  "label": "Maximum Likelihood Estimation",
  "definition": "Maximum Likelihood Estimation (MLE) is a method of estimating the parameters of a statistical model by choosing the parameter values that maximise the likelihood of the observed data under the model. Equivalently it minimises the negative log-likelihood, connecting it directly to many machine-learning loss functions. As a principled, asymptotically efficient estimator it underlies a large share of classical statistics and probabilistic machine learning.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:statistics",
      "label": "Statistics"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:statistics",
        "label": "Statistics"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:regression",
        "label": "Regression"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:optimisation",
        "label": "Optimisation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:system-identification",
        "label": "System Identification"
      },
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:uncertainty-quantification",
        "label": "Uncertainty Quantification"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      },
      {
        "@id": "urn:ngm:class:information-theory",
        "label": "Information Theory"
      },
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
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
  - Maximum Likelihood Estimation (MLE) is a method of estimating the parameters of a statistical model by choosing the parameter values that maximise the likelihood of the observed data under the model. Equivalently it minimises the negative log-likelihood, connecting it directly to many machine-learning loss functions. As a principled, asymptotically efficient estimator it underlies a large share of classical statistics and probabilistic machine learning.
  - Related core concepts: [[Statistics]] [[Probability Distribution]] [[Optimisation]] [[Regression]] [[Probability Theory]]
- ### Overview
  - Maximum likelihood estimation treats the observed data as fixed and the model parameters as unknowns to be optimised. The likelihood function gives the probability of the data as a function of the parameters; MLE selects the parameters that make the observed data most probable. Because the logarithm is monotonic and turns products into sums, practitioners maximise the log-likelihood, which for independent data decomposes into a sum over observations. Minimising the negative log-likelihood is therefore the statistical foundation of cross-entropy and squared-error losses used throughout machine learning.
  - MLE provides a recipe that is both principled and practical: write down the probability of the data under the model, then optimise the parameters to maximise it. For exponential-family models this often yields elegant closed-form estimators; for complex models it becomes a numerical optimisation solved by gradient methods. The same principle, with a prior added, generalises to maximum a posteriori estimation and connects to full Bayesian inference.
- ### History and context
  - Formalised by R. A. Fisher in the early twentieth century, maximum likelihood became the dominant estimation principle in statistics owing to its strong asymptotic guarantees. Its reinterpretation as negative-log-likelihood minimisation tied it directly to the loss functions of modern machine learning.
- ### Mechanisms
  - Likelihood function: the probability of the data viewed as a function of parameters rather than outcomes.
  - Log-likelihood: the logarithm of the likelihood, maximised for numerical and analytical convenience.
  - Score and information: the gradient of the log-likelihood and its curvature (Fisher information) characterise the estimator.
  - Optimisation: closed-form solutions where available, otherwise gradient-based or expectation-maximisation procedures.
  - Asymptotic properties: consistency, asymptotic normality and efficiency under regularity conditions.
  - Relationship to loss functions: negative log-likelihood recovers cross-entropy, squared error and other common objectives.
- ### Applications
  - Fitting regression, classification and density models in classical statistics.
  - Training probabilistic and generative machine-learning models via negative log-likelihood.
  - System identification and parameter estimation in control and robotics.
  - Calibrating likelihoods used inside Bayesian inference pipelines.
- ### Challenges and considerations
  - Overfitting: unregularised likelihood maximisation can fit noise, motivating priors or penalties.
  - Local optima: non-convex likelihoods may have many stationary points.
  - Latent variables: missing data requires iterative schemes such as expectation-maximisation.
  - Model misspecification: guarantees weaken when the model class does not contain the truth.
- ### Examples
  - Fitting logistic-regression coefficients by maximising the Bernoulli log-likelihood.
  - Estimating Gaussian parameters as the sample mean and variance.
  - Training a language model by maximising the likelihood of next tokens.
- ### Relationships
  - subClassOf:: [[Statistics]]
  - partOf:: [[Statistics]]
  - implements:: [[Regression]]
  - uses:: [[Optimisation]]
  - enables:: [[System Identification]]
  - enables:: [[Generative Model]]
  - requires:: [[Sampling]]
  - contrastsWith:: [[Variational Inference]]
  - supports:: [[Machine Learning]]
  - supports:: [[Uncertainty Quantification]]
  - relatedTo:: [[Probability Theory]]
  - relatedTo:: [[Information Theory]]
  - relatedTo:: [[Stochastic Gradient Descent]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
