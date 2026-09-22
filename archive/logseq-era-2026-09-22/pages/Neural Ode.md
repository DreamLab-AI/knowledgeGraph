public:: true

# Neural Ode

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:neural-ode", "@type":"Page", "title":"Neural Ode", "vc:slug":"neural-ode", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:neural-ode",
  "@type":"Class",
  "label":"Neural Ode",
  "definition":"A neural ordinary differential equation (Neural ODE) is a deep learning model that parameterises the continuous-time derivative of a hidden state with a neural network, so the forward pass becomes the solution of an ODE by a numerical integrator. This replaces a discrete stack of layers with a continuous-depth transformation and trains efficiently via the adjoint sensitivity method, giving constant memory cost. Neural ODEs are well suited to modelling continuous dynamics, irregularly sampled time series, and continuous normalising flows.",
  "domain":"machine-learning",
  "maturity":"emerging",
  "subClassOf":[{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}],
  "relations":{
    "uses":[{"@id":"urn:ngm:class:neural-network","label":"Neural Network"},{"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"},{"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}],
    "enables":[{"@id":"urn:ngm:class:system-identification","label":"System Identification"}],
    "partOf":[{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"}],
    "relatedTo":[{"@id":"urn:ngm:class:residual-network","label":"Residual Network"},{"@id":"urn:ngm:class:differential-equations","label":"Differential Equations"},{"@id":"urn:ngm:class:dynamical-systems","label":"Dynamical Systems"}],
    "implements":[{"@id":"urn:ngm:class:neural-network","label":"Neural Network"}],
    "dependsOn":[{"@id":"urn:ngm:class:backpropagation","label":"Backpropagation"}],
    "supports":[{"@id":"urn:ngm:class:system-identification","label":"System Identification"}],
    "contrastsWith":[{"@id":"urn:ngm:class:residual-network","label":"Residual Network"}],
    "bridgesTo":[{"@id":"urn:ngm:class:system-identification","label":"System Identification"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A **Neural Ode** parameterises the time derivative of a hidden state with a [[Neural Network]] and computes its output by numerically integrating that derivative, turning a deep model into a continuous-depth transformation. It is a [[Deep Learning]] architecture that generalises the [[Residual Network]] in the limit of infinitely many layers.
	- Training relies on the adjoint sensitivity method, a memory-efficient form of [[Backpropagation]] through the ODE solver, and the resulting models naturally express continuous dynamics for [[System Identification]] and time-series tasks.
- ### Overview
	- Standard deep networks apply a fixed sequence of discrete layers. A neural ODE observes that a residual block updates the hidden state by a small increment, and takes the limit where these increments become an infinitesimal differential, so the hidden state evolves continuously according to a learned vector field.
	- The forward pass calls an off-the-shelf ODE solver, which adaptively chooses step sizes and trades accuracy for compute at inference time. Gradients are obtained by solving a second, adjoint ODE backwards in time, giving constant memory cost regardless of the effective number of integration steps.
	- This continuous formulation handles irregularly sampled and missing-time observations gracefully, and underpins continuous normalising flows where the change-of-variables formula becomes a tractable trace integral.
- ### Mechanisms
	- Defines the hidden-state derivative as a learned [[Neural Network]] vector field.
	- Evaluates the forward pass with an adaptive numerical ODE solver.
	- Trains via the adjoint method, a constant-memory variant of [[Backpropagation]].
	- Treats network depth as continuous integration time rather than a fixed layer count.
	- Extends to continuous normalising flows and latent dynamics models.
- ### Applications
	- Modelling continuous physical and biological dynamics for [[System Identification]].
	- Forecasting and interpolation of irregularly sampled time series.
	- Continuous normalising flows for flexible generative density estimation.
	- Memory-constrained deep learning where constant-memory training is valuable.
- ### Relationships
	- uses:: [[Neural Network]]
	- uses:: [[Backpropagation]]
	- uses:: [[Gradient Descent]]
	- relatedTo:: [[Differential Equations]]
	- relatedTo:: [[Dynamical Systems]]
	- enables:: [[System Identification]]
	- partOf:: [[Deep Learning]]
	- relatedTo:: [[Residual Network]]
	- implements:: [[Neural Network]]
	- dependsOn:: [[Backpropagation]]
	- supports:: [[System Identification]]
	- contrastsWith:: [[Residual Network]]
	- bridgesTo:: [[System Identification]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
