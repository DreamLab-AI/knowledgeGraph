public:: true

# Evidence Lower Bound

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:evidence-lower-bound",
  "@type": "Page",
  "title": "Evidence Lower Bound",
  "vc:slug": "evidence-lower-bound",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:evidence-lower-bound",
  "@type": "Class",
  "label": "Evidence Lower Bound",
  "definition": "The evidence lower bound (ELBO) is a tractable lower bound on the log marginal likelihood of observed data under a probabilistic model with latent variables. Maximising the ELBO is equivalent to minimising the divergence between an approximate posterior and the true posterior, making intractable inference tractable. It is the training objective of variational autoencoders and a cornerstone of variational inference.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:variational-inference",
      "label": "Variational Inference"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:posterior-distribution",
        "label": "Posterior Distribution"
      },
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probabilistic-model",
        "label": "Probabilistic Model"
      },
      {
        "@id": "urn:ngm:class:objective-function",
        "label": "Objective Function"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:variational-inference",
        "label": "Variational Inference"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:expectation-maximisation",
        "label": "Expectation Maximisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:stochastic-gradient-descent",
        "label": "Stochastic Gradient Descent"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:bayesian-inference",
        "label": "Bayesian Inference"
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
  - The evidence lower bound (ELBO) is a tractable lower bound on the log marginal likelihood of observed data under a probabilistic model with latent variables. Maximising the ELBO is equivalent to minimising the divergence between an approximate posterior and the true posterior, making intractable inference tractable. It is the training objective of variational autoencoders and a cornerstone of variational inference.
  - Related: [[Variational Inference]] [[Variational Autoencoder]] [[Probabilistic Model]] [[Bayesian Inference]]
- ### Overview
  - The ELBO decomposes into an expected reconstruction term and a regularising divergence between the approximate and prior distributions. Because the gap between the ELBO and the true log-evidence is exactly the divergence from the true posterior, tightening the bound improves the variational approximation.
- ### Mechanisms
  - A lower bound on the intractable log marginal likelihood
  - Decomposition into reconstruction and divergence terms
  - Equivalence between maximising ELBO and minimising posterior divergence
  - Optimisation by stochastic gradient ascent
  - Use of the reparameterisation trick for low-variance gradients
- ### Applications
  - Training objective for variational autoencoders
  - Scalable approximate Bayesian inference
  - Model selection via comparison of bounds
  - Latent-variable modelling of complex data
- ### Relationships
  - subClassOf:: [[Variational Inference]]
  - uses:: [[Posterior Distribution]]
  - uses:: [[Bayesian Inference]]
  - implements:: [[Variational Inference]]
  - requires:: [[Probabilistic Model]]
  - requires:: [[Objective Function]]
  - partOf:: [[Variational Inference]]
  - enables:: [[Variational Autoencoder]]
  - supports:: [[Variational Autoencoder]]
  - contrastsWith:: [[Expectation Maximisation]]
  - relatedTo:: [[Loss Function]]
  - relatedTo:: [[Gradient Descent]]
  - relatedTo:: [[Stochastic Gradient Descent]]
  - bridgesTo:: [[Bayesian Inference]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
