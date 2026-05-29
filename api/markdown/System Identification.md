public:: true

# system identification
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:516c72a0bcf4cc916095c9ce8382f120cf33cc5132569d26aa21358075680bed",
  "@type": "Page",
  "vc:slug": "system-identification",
  "title": "system identification",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:system-identification",
  "@type": "Class",
  "label": "System Identification",
  "definition": "System identification is the discipline of constructing or refining a parametric or non-parametric mathematical model of a physical or robotic system from observed input-output experimental data, enabling accurate simulation and model-based control design. Methods range from classical least-squares regression for linear systems to Gaussian process regression and neural network surrogate models for nonlinear, high-dimensional systems. In robotics, system identification is used to calibrate rigid-body dynamics parameters—such as link inertia tensors and joint friction coefficients—that are required by whole body controllers and model predictive controllers to generate physically realistic torque commands.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-actuation-and-control",
      "label": "Actuation and Control"
    }
  ],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:whole-body-control", "label": "Whole Body Control"},
      {"@id": "urn:ngm:class:model-predictive-control", "label": "Model Predictive Control"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"},
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - System identification is the discipline of constructing or refining a parametric or non-parametric mathematical model of a physical or robotic system from observed input-output experimental data, enabling accurate simulation and model-based control design. Methods range from classical least-squares regression for linear systems to Gaussian process regression and neural network surrogate models for nonlinear, high-dimensional systems. In robotics, system identification is used to calibrate rigid-body dynamics parameters—such as link inertia tensors and joint friction coefficients—that are required by whole body controllers and model predictive controllers to generate physically realistic torque commands.

- ### Semantic Classification
  - owl-class:: system-identification:System Identification
  - owl-role:: Concept

- ### Relationships
  - enables [[Whole Body Control]]
  - enables [[Model Predictive Control]]
  - relatedTo [[Physics Simulation]]
  - relatedTo [[Kalman Filter]]
  - relatedTo [[Reinforcement Learning]]

- ### Content
  System identification is a branch of control engineering and statistics concerned with building mathematical models of dynamical systems from experimental measurements. For a linear time-invariant (LTI) system, classical methods such as subspace identification, prediction error minimisation (PEM), and AutoRegressive with eXogenous inputs (ARX) models can recover state-space representations from input-output time series with well-characterised statistical properties. For nonlinear and time-varying systems—the norm in robotics—identification methods must balance model expressiveness with generalisation risk.

  In robot dynamics, the standard approach is to exploit the linear parameterisation of the Newton-Euler equations with respect to inertial parameters (masses, centre-of-mass positions, and inertia tensor components of each link), allowing these parameters to be estimated by least-squares regression from measured joint torques, positions, velocities, and accelerations under a designed excitation trajectory that maximises parameter observability.

  A closely related challenge is the sim-to-real gap in reinforcement learning for robotics: policies trained in physics simulators often fail to transfer to physical robots because the simulator's model parameters do not match the real system. System identification—whether classical or learned (e.g., adaptive model estimation during deployment)—is one primary mechanism for closing this gap, together with domain randomisation during training. Kalman filtering and its variants are applied for real-time state estimation given an identified system model, and Gaussian process regression is used when a full parametric model is unavailable but data-driven uncertainty quantification is required.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
