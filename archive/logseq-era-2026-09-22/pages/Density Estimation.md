public:: true

# Density Estimation
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:density-estimation", "@type":"Page", "title":"Density Estimation", "vc:slug":"density-estimation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:density-estimation",
  "@type":"Class",
  "label":"Density Estimation",
  "definition":"Density estimation is the statistical problem of inferring the underlying probability density function of a random variable from a finite set of observed samples. Parametric approaches assume a fixed functional form whose parameters are fitted by maximum likelihood, while non-parametric approaches such as kernel density estimation and histograms make minimal distributional assumptions. Modern deep density estimation uses normalizing flows, autoregressive models, and variational methods to model complex high-dimensional distributions, making it foundational to generative modelling, anomaly detection, and unsupervised learning.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:statistics","label":"Statistics"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:kernel-density-estimation","label":"Kernel Density Estimation"},
      {"@id":"urn:ngm:class:maximum-likelihood-estimation","label":"Maximum Likelihood Estimation"}
    ],
    "partOf":[
      {"@id":"urn:ngm:class:unsupervised-learning","label":"Unsupervised Learning"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:probability-distribution","label":"Probability Distribution"},
      {"@id":"urn:ngm:class:sampling","label":"Sampling"},
      {"@id":"urn:ngm:class:maximum-likelihood-estimation","label":"Maximum Likelihood Estimation"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:generative-model","label":"Generative Model"},
      {"@id":"urn:ngm:class:anomaly-detection","label":"Anomaly Detection"},
      {"@id":"urn:ngm:class:outlier-detection","label":"Outlier Detection"}
    ],
    "implements":[
      {"@id":"urn:ngm:class:gaussian-mixture-model","label":"Gaussian Mixture Model"},
      {"@id":"urn:ngm:class:normalising-flow","label":"Normalizing Flow"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:variational-autoencoder","label":"Variational Autoencoder"},
      {"@id":"urn:ngm:class:information-theory","label":"Information Theory"},
      {"@id":"urn:ngm:class:entropy","label":"Entropy"}
    ],
    "contrastsWith":[
      {"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Density Estimation]] is the [[Statistics|statistical]] problem of inferring an underlying [[Probability Distribution|probability density function]] from observed samples.
	- It spans parametric methods fitted by [[Maximum Likelihood Estimation]] and non-parametric methods such as [[Kernel Density Estimation]].
	- It is a core task within [[Unsupervised Learning]] and a building block of [[Generative Model|generative modelling]].
- ### Overview
	- Given a dataset assumed to be drawn independently from some unknown distribution, density estimation seeks a function that assigns plausible probability mass or density to any point in the input space. The estimate can then be sampled, evaluated, or compared against new observations.
	- Parametric estimation chooses a family (Gaussian, exponential, mixture) and fits parameters, typically by maximising likelihood. It is data-efficient when the assumed form is correct but biased when it is not.
	- Non-parametric estimation, including histograms and kernel density estimation, lets the data dictate the shape, trading model bias for higher variance and sensitivity to bandwidth or bin width.
	- Deep density estimation extends these ideas to high dimensions using normalizing flows (exact likelihoods via invertible transforms), autoregressive models, and variational autoencoders (which provide a lower bound on the likelihood).
- ### Key aspects
	- Bias-variance trade-off governed by smoothing parameters such as kernel bandwidth.
	- The curse of dimensionality, which makes naive non-parametric estimation impractical in high dimensions.
	- Likelihood evaluation versus sampling: some models give tractable likelihoods, others only easy sampling.
	- Connections to [[Entropy]] and [[Information Theory]] for measuring distributional divergence.
- ### Applications
	- Generative modelling of images, audio, and text.
	- [[Anomaly Detection]] and [[Outlier Detection]] by flagging low-density regions.
	- Density-based clustering and mode discovery.
	- Importance sampling and Monte Carlo integration.
	- Distribution comparison for drift and calibration analysis.
- ### Relationships
	- hasPart:: [[Kernel Density Estimation]]
	- hasPart:: [[Maximum Likelihood Estimation]]
	- partOf:: [[Unsupervised Learning]]
	- uses:: [[Probability Distribution]]
	- uses:: [[Sampling]]
	- enables:: [[Generative Model]]
	- enables:: [[Anomaly Detection]]
	- enables:: [[Outlier Detection]]
	- implements:: [[Gaussian Mixture Model]]
	- implements:: [[Normalizing Flow]]
	- relatedTo:: [[Variational Autoencoder]]
	- relatedTo:: [[Information Theory]]
	- relatedTo:: [[Entropy]]
	- contrastsWith:: [[Supervised Learning]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
