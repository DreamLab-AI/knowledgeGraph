public:: true

# Reparameterisation Trick
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:reparameterisation-trick", "@type":"Page", "title":"Reparameterisation Trick", "vc:slug":"reparameterisation-trick", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:reparameterisation-trick",
  "@type":"Class",
  "label":"Reparameterisation Trick",
  "definition":"The reparameterisation trick is a technique for obtaining low-variance gradient estimates of an expectation over a random variable by expressing that variable as a deterministic, differentiable function of the distribution parameters and an independent noise source. By moving the stochasticity outside the computation graph, gradients can flow through a sampling step via backpropagation, enabling end-to-end training of models with latent random variables. It is foundational to variational autoencoders and to many stochastic optimisation methods in deep learning.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:variational-autoencoder","label":"Variational Autoencoder"}],
  "relations":{
    "requires":[
      {"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"},
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:automatic-differentiation","label":"Automatic Differentiation"},
      {"@id":"urn:ngm:class:stochastic-gradient-descent","label":"Stochastic Gradient Descent"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:variational-autoencoder","label":"Variational Autoencoder"},
      {"@id":"urn:ngm:class:generative-model","label":"Generative Model"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:latent-variable-model","label":"Latent Variable Model"},
      {"@id":"urn:ngm:class:stochastic-optimisation","label":"Stochastic Optimisation"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"},
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"}
    ],
    "partOf":[{"@id":"urn:ngm:class:variational-autoencoder","label":"Variational Autoencoder"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"},
      {"@id":"urn:ngm:class:neural-network","label":"Neural Network"},
      {"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- The reparameterisation trick expresses a random variable as a deterministic, differentiable function of its distribution parameters and independent noise, so that [[Backpropagation]] can pass gradients through a sampling step. It is the device that makes the [[Variational Autoencoder]] trainable end-to-end.
- ### Overview
- Optimising an objective that contains an expectation over a learned [[Probability Distribution]] is hard because sampling is not differentiable, and naive score-function estimators have high variance.
- The trick rewrites a sample as, for example, a mean plus a scaled standard-normal draw, isolating randomness in a parameter-free noise term and leaving a smooth path for gradients.
- This yields markedly lower-variance estimates than the alternative likelihood-ratio approach, allowing [[Stochastic Gradient Descent]] to train models with continuous latent variables efficiently.
- ### Mechanisms
- Decompose a sample into a differentiable transform applied to fixed external noise.
- Compute gradients of the objective with respect to distribution parameters through that transform.
- Rely on [[Automatic Differentiation]] to assemble the chain of derivatives automatically.
- Apply to location-scale and other tractable families; extend via flows when needed.
- Combine with Monte Carlo averaging to estimate the expectation cheaply.
- ### Applications
- Training the encoder and decoder of a [[Variational Autoencoder]] jointly.
- Building deep [[Generative Model]] architectures with continuous latents.
- Amortised inference in a broad class of [[Latent Variable Model]] settings.
- Variance reduction within [[Stochastic Optimisation]] for probabilistic objectives.
- ### Relationships
- requires:: [[Backpropagation]]
- requires:: [[Probability Distribution]]
- uses:: [[Automatic Differentiation]]
- uses:: [[Stochastic Gradient Descent]]
- enables:: [[Variational Autoencoder]]
- enables:: [[Generative Model]]
- supports:: [[Latent Variable Model]]
- supports:: [[Stochastic Optimisation]]
- dependsOn:: [[Gradient Descent]]
- dependsOn:: [[Probability Distribution]]
- partOf:: [[Variational Autoencoder]]
- relatedTo:: [[Deep Learning]]
- relatedTo:: [[Neural Network]]
- relatedTo:: [[Machine Learning]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
