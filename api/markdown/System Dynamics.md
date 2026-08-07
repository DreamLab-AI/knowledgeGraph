public:: true

# System Dynamics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5b24d4013609a73a695b3d71b78a434f59aaabb59f7e94212ed12056fad693a0",
  "@type": "Page",
  "vc:slug": "system-dynamics",
  "title": "System Dynamics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:computational-modelling",
      "vc:label": "Computational Modelling"
    },
    {
      "@id": "urn:visionflow:linked:agent-based-modelling",
      "vc:label": "Agent-Based Modelling"
    },
    {
      "@id": "urn:visionflow:linked:feedback-loop",
      "vc:label": "Feedback Loop"
    },
    {
      "@id": "urn:visionflow:linked:complex-systems",
      "vc:label": "Complex Systems"
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
  "@id": "urn:ngm:class:system-dynamics",
  "@type": "Class",
  "label": "System Dynamics",
  "definition": "A modelling methodology, originated by Jay Forrester at MIT in the 1950s, that represents a complex system as aggregate stocks, flows, and feedback loops governed by coupled differential (or difference) equations, simulating how policy choices and delays produce counter-intuitive behaviour over time; it takes a top-down, population-level view, in deliberate contrast to agent-based modelling's bottom-up simulation of heterogeneous individuals.",
  "domain": "artificial-intelligence",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:computational-modelling",
    "label": "Computational Modelling"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:differential-equations",
        "label": "Differential Equations"
      },
      {
        "@id": "urn:ngm:class:feedback-loop",
        "label": "Feedback Loop"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:agent-based-modelling",
        "label": "Agent-Based Modelling"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:complex-systems",
        "label": "Complex Systems"
      },
      {
        "@id": "urn:ngm:class:simulation",
        "label": "Simulation"
      },
      {
        "@id": "urn:ngm:class:state-estimation",
        "label": "State Estimation"
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
  - "A modelling methodology, originated by Jay Forrester at MIT in the 1950s, that represents a complex system as aggregate stocks, flows, and feedback loops governed by coupled differential (or difference) equations, simulating how policy choices and delays produce counter-intuitive behaviour over time; it takes a top-down, population-level view, in deliberate contrast to agent-based modelling's bottom-up simulation of heterogeneous individuals."

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SystemDynamics
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Computational Modelling]]
  - uses:: [[Differential Equations]], [[Feedback Loop]]
  - contrasts-with:: [[Agent-Based Modelling]]
  - related-to:: [[Complex Systems]], [[Simulation]]

- ### Content

  ## Definition

  **System dynamics** is a method for understanding and simulating the behaviour of complex systems over time by modelling them as networks of *stocks* (accumulations such as inventory, population, capital, or trust), *flows* (rates that fill or drain those stocks), and *feedback loops* that couple them. Developed by Jay Forrester at MIT from the late 1950s — first for industrial supply chains (*Industrial Dynamics*, 1961), then cities (*Urban Dynamics*) and the global economy (*World Dynamics*, the basis of the Club of Rome's *Limits to Growth*) — it formalises the intuition that a system's structure, especially its delays and reinforcing or balancing feedback, generates its behaviour.

  Mathematically a system dynamics model is a set of coupled, usually nonlinear, ordinary [[Differential Equations]] integrated numerically; conceptually it is drawn as causal-loop and stock-and-flow diagrams that make feedback structure visible to non-mathematicians. Characteristic results — oscillation from delayed balancing loops (the "beer game" supply chain), overshoot and collapse, policy resistance where interventions are absorbed by compensating feedback — recur across domains from epidemiology (aggregate SIR models are system dynamics models) to climate-policy simulators such as En-ROADS.

  The methodology's defining contrast in this graph is with [[Agent-Based Modelling]]. System dynamics is top-down and aggregate: it assumes populations are well mixed and homogeneous enough to describe with average rates, buying analytical clarity and fast simulation at the cost of individual heterogeneity, spatial structure, and emergent behaviour from local interaction — precisely what agent-based models provide, at greater computational and calibration expense. Hybrid models increasingly combine both, embedding agent populations inside stock-flow economic or environmental contexts.

  ## Technical Details

  - **Core elements**: stocks (state variables, the integrals), flows (derivatives), auxiliaries and table functions, delays (material and information), and feedback polarity (reinforcing R-loops, balancing B-loops).
  - **Behaviour modes**: exponential growth (dominant R-loop), goal-seeking (B-loop), S-shaped growth (R then B), oscillation (B-loop with delay), overshoot and collapse (R-loop eroding a carrying capacity).
  - **Tooling**: Vensim, Stella/iThink, Powersim, AnyLogic (which also supports agent-based and discrete-event paradigms in one model), and open-source PySD for Python workflows.
  - **Relation to state estimation**: because a system dynamics model supplies explicit state-transition equations, it can serve as the process model that [[State Estimation]] techniques such as Kalman filtering require — calibrating stocks against noisy observations.
  - **Strengths and limits**: excellent for policy insight, communication, and long-horizon feedback reasoning; weak where individual heterogeneity, networks, discrete events, or adaptive learning drive outcomes.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
