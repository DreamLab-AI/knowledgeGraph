public:: true

# Numerical Integration

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:numerical-integration", "@type":"Page", "title":"Numerical Integration", "vc:slug":"numerical-integration", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:numerical-integration",
  "@type":"Class",
  "label":"Numerical Integration",
  "definition":"Numerical integration is the family of algorithms that approximate definite integrals and advance differential equations in time when closed-form solutions are unavailable. In physics simulation it denotes the time-stepping schemes (such as explicit and implicit Euler, Verlet, and Runge-Kutta methods) that integrate equations of motion to update positions and velocities each frame. The choice of scheme balances accuracy, numerical stability, and computational cost.",
  "domain":"spatial-computing",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:physics-simulation","label":"Physics Simulation"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:physics-simulation","label":"Physics Simulation"},{"@id":"urn:ngm:class:simulation","label":"Simulation"}],
    "hasPart":[{"@id":"urn:ngm:class:rigid-body-dynamics","label":"Rigid Body Dynamics"}],
    "requires":[{"@id":"urn:ngm:class:physics-simulation","label":"Physics Simulation"}],
    "supports":[{"@id":"urn:ngm:class:rigid-body-dynamics","label":"Rigid Body Dynamics"},{"@id":"urn:ngm:class:collision-detection","label":"Collision Detection"},{"@id":"urn:ngm:class:real-time-rendering","label":"Real-Time Rendering"}],
    "uses":[{"@id":"urn:ngm:class:finite-element-analysis","label":"Finite Element Analysis"}],
    "enables":[{"@id":"urn:ngm:class:physics-simulation","label":"Physics Simulation"},{"@id":"urn:ngm:class:simulation","label":"Simulation"}],
    "relatedTo":[{"@id":"urn:ngm:class:finite-element-analysis","label":"Finite Element Analysis"},{"@id":"urn:ngm:class:collision-detection","label":"Collision Detection"}],
    "contrastsWith":[{"@id":"urn:ngm:class:finite-element-analysis","label":"Finite Element Analysis"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
- [[Numerical Integration]] approximates integrals and advances equations of motion when no analytic solution exists, forming the time-stepping core of [[Physics Simulation]].
- It underpins [[Rigid Body Dynamics]] by integrating forces into velocities and velocities into positions each step.
- Scheme selection trades off accuracy against numerical stability, a concern shared with [[Finite Element Analysis]] and broader [[Simulation]].
- ### Definition wikilinks
- Related foundational concepts include [[Real-Time Rendering]] and [[Collision Detection]].
- ### Overview
- Numerical integration converts continuous differential equations into discrete update rules, allowing computers to evolve a system state forward in fixed or adaptive time steps.
- In interactive simulation, explicit schemes are cheap but can become unstable at large time steps, whereas implicit schemes are more stable at greater cost.
- The accuracy of a scheme is characterised by its order; higher-order methods reduce error per step but require more force evaluations.
- ### Mechanisms
- Explicit Euler: simplest first-order scheme, updating state directly from current derivatives.
- Semi-implicit and Verlet integration: widely used in games for stable, energy-conserving particle and rigid-body updates.
- Runge-Kutta family: higher-order multi-stage schemes offering improved accuracy for stiff or sensitive systems.
- Adaptive step sizing: error estimation drives the step length to maintain a target tolerance.
- Implicit solvers: solve a system each step for unconditional stability in stiff problems such as cloth and soft bodies.
- ### Applications
- Advancing equations of motion in real-time game and robotics physics engines.
- Time integration within finite-element and continuum-mechanics solvers.
- Trajectory and orbital propagation in scientific and engineering simulation.
- Particle systems, fluids, and deformable bodies in spatial-computing experiences.
- ### Relationships
- partOf:: [[Physics Simulation]]
- partOf:: [[Simulation]]
- hasPart:: [[Rigid Body Dynamics]]
- requires:: [[Physics Simulation]]
- supports:: [[Rigid Body Dynamics]]
- supports:: [[Collision Detection]]
- supports:: [[Real-Time Rendering]]
- uses:: [[Finite Element Analysis]]
- enables:: [[Physics Simulation]]
- enables:: [[Simulation]]
- relatedTo:: [[Finite Element Analysis]]
- relatedTo:: [[Collision Detection]]
- contrastsWith:: [[Finite Element Analysis]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
