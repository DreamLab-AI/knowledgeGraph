public:: true

# Ordinary Differential Equation

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:ordinary-differential-equation", "@type":"Page", "title":"Ordinary Differential Equation", "vc:slug":"ordinary-differential-equation", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:ordinary-differential-equation",
  "@type":"Class",
  "label":"Ordinary Differential Equation",
  "definition":"An ordinary differential equation (ODE) is a mathematical equation relating a function of a single independent variable to its derivatives. It describes how a quantity changes continuously with respect to that variable, and its solution is the function or family of functions satisfying the relation, often determined by initial conditions. ODEs are foundational tools for modelling dynamical systems in physics, biology, engineering, and increasingly in machine learning.",
  "domain":"machine-learning",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"}],
  "relations":{
    "hasPart":[{"@id":"urn:ngm:class:numerical-integration","label":"Numerical Integration"}],
    "uses":[{"@id":"urn:ngm:class:numerical-integration","label":"Numerical Integration"},{"@id":"urn:ngm:class:interpolation","label":"Interpolation"}],
    "requires":[{"@id":"urn:ngm:class:numerical-methods","label":"Numerical Methods"}],
    "enables":[{"@id":"urn:ngm:class:dynamical-systems","label":"Dynamical Systems"},{"@id":"urn:ngm:class:simulation","label":"Simulation"},{"@id":"urn:ngm:class:neural-ordinary-differential-equation","label":"Neural Ordinary Differential Equation"}],
    "supports":[{"@id":"urn:ngm:class:scientific-computing","label":"Scientific Computing"},{"@id":"urn:ngm:class:simulation","label":"Simulation"}],
    "implements":[{"@id":"urn:ngm:class:numerical-integration","label":"Numerical Integration"}],
    "relatedTo":[{"@id":"urn:ngm:class:dynamical-systems","label":"Dynamical Systems"},{"@id":"urn:ngm:class:scientific-computing","label":"Scientific Computing"},{"@id":"urn:ngm:class:optimisation","label":"Optimisation"}],
    "contrastsWith":[{"@id":"urn:ngm:class:stochastic-differential-equation","label":"Stochastic Differential Equation"}],
    "bridgesTo":[{"@id":"urn:ngm:class:neural-ordinary-differential-equation","label":"Neural Ordinary Differential Equation"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- An [[Ordinary Differential Equation]] relates a function of a single variable to its derivatives.
	- It describes continuous change and is solved, often with initial conditions, using [[Numerical Methods]].
	- ODEs are foundational for modelling [[Dynamical Systems]] across science and engineering.
- ### Overview
	- Ordinary differential equations express how a quantity evolves with respect to one independent variable, typically time.
	- Their solutions are functions whose derivatives satisfy the prescribed relationship, with specific solutions selected by initial or boundary conditions.
	- While some ODEs admit closed-form solutions, most practical problems are solved approximately with numerical integration schemes.
	- ODEs connect classical applied mathematics to modern machine learning, where they motivate continuous-depth models.
- ### Key aspects
	- Order: the highest derivative appearing in the equation.
	- Initial value problems: solutions determined by conditions at a starting point.
	- Linearity: whether the equation is linear or nonlinear in the unknown function.
	- Existence and uniqueness: conditions guaranteeing a well-defined solution.
	- Numerical solvers: stepwise methods that approximate solutions when analytic ones are unavailable.
- ### Mechanisms
	- Numerical integration advances the solution in discrete steps from initial conditions.
	- Step-size control and adaptive schemes balance accuracy against computational cost.
	- Stability analysis ensures that approximation errors do not grow uncontrollably.
- ### Applications
	- Modelling physical, biological, and engineered [[Dynamical Systems]].
	- Driving [[Simulation]] and [[Scientific Computing]] workflows.
	- Underpinning continuous-time models such as the [[Neural Ordinary Differential Equation]].
	- Formulating and solving optimisation and control problems through [[Optimisation]].
- ### Relationships
	- subClassOf:: [[Numerical Methods]]
	- hasPart:: [[Numerical Integration]]
	- uses:: [[Numerical Integration]]
	- uses:: [[Interpolation]]
	- requires:: [[Numerical Methods]]
	- enables:: [[Dynamical Systems]]
	- enables:: [[Simulation]]
	- enables:: [[Neural Ordinary Differential Equation]]
	- supports:: [[Scientific Computing]]
	- supports:: [[Simulation]]
	- implements:: [[Numerical Integration]]
	- relatedTo:: [[Dynamical Systems]]
	- relatedTo:: [[Scientific Computing]]
	- relatedTo:: [[Optimisation]]
	- contrastsWith:: [[Stochastic Differential Equation]]
	- bridgesTo:: [[Neural Ordinary Differential Equation]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
