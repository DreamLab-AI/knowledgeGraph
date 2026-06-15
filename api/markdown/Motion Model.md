public:: true

# Motion Model
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:motion-model",
  "@type": "Page",
  "vc:slug": "motion-model",
  "title": "Motion Model",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:motion-model",
  "@type": "Class",
  "label": "Motion Model",
  "definition": "A motion model is a mathematical or learned representation that describes how the state of a moving entity—a robot, vehicle, or articulated body—evolves over time given control inputs and noise. In probabilistic robotics it forms the prediction step of filters such as Kalman and particle filters, characterising uncertainty in state transitions. Motion models range from simple kinematic approximations (constant velocity, unicycle) to full rigid-body dynamic equations and learned neural representations derived from data. Accuracy of the motion model directly determines the quality of localisation, planning, and control outcomes.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:kinematics-model", "label": "Kinematics Model"}],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:process-noise-model", "label": "Process Noise Model"},
      {"@id": "urn:ngm:class:state-transition-function", "label": "State Transition Function"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:state-space-representation", "label": "State Space Representation"},
      {"@id": "urn:ngm:class:control-input", "label": "Control Input"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:kinematics", "label": "Kinematics"},
      {"@id": "urn:ngm:class:rigid-body-dynamics", "label": "Rigid Body Dynamics"},
      {"@id": "urn:ngm:class:probabilistic-model", "label": "Probabilistic Model"},
      {"@id": "urn:ngm:class:differential-equations", "label": "Differential Equations"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
      {"@id": "urn:ngm:class:state-estimation", "label": "State Estimation"},
      {"@id": "urn:ngm:class:trajectory-tracking", "label": "Trajectory Tracking"},
      {"@id": "urn:ngm:class:robot-localisation", "label": "Robot Localisation"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:kalman-filter", "label": "Kalman Filter"},
      {"@id": "urn:ngm:class:particle-filter", "label": "Particle Filter"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:simultaneous-localisation-and-mapping", "label": "Simultaneous Localisation and Mapping"},
      {"@id": "urn:ngm:class:model-predictive-control", "label": "Model Predictive Control"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:observation-model", "label": "Observation Model"},
      {"@id": "urn:ngm:class:sensor-model", "label": "Sensor Model"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:physics-simulation", "label": "Physics Simulation"},
      {"@id": "urn:ngm:class:neural-network", "label": "Neural Network"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"},
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:newton-euler-dynamics", "label": "Newton-Euler Dynamics"},
      {"@id": "urn:ngm:class:odometry", "label": "Odometry"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:state-transition-model", "label": "State Transition Model"},
    {"@id": "urn:ngm:class:dynamic-model", "label": "Dynamic Model"}
  ],
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - A [[Motion Model]] is a mathematical or learned description of how an agent's state evolves under control inputs and stochastic disturbances, forming the prediction kernel of probabilistic filters and underpinning [[Motion Planning]], [[State Estimation]], and [[Trajectory Tracking]] in robotics and autonomous systems.
- ### Relationships
  - [[Motion Model]] specialises the [[Kinematics Model]] class and incorporates [[Kinematics]] and [[Rigid Body Dynamics]] as its physical basis, while [[Probabilistic Model]] representations encode noise characteristics. It enables [[Motion Planning]] algorithms to forecast future states, feeds [[State Estimation]] filters (Kalman, particle), and is the prerequisite for [[Trajectory Tracking]] controllers. Related concepts include [[Motion Control]] architectures, [[Robot Dynamics]] formulations, and [[Newton-Euler Dynamics]] equations used in high-fidelity simulation.
- ### Content
  - Motion models originate in classical mechanics and control theory, where the equations of motion for rigid bodies—derived via Newton-Euler or Lagrangian formulations—describe exactly how forces and torques accelerate a system. For practical robotics, these exact models are approximated to balance computational cost against fidelity. Simple wheeled robots use the unicycle or bicycle kinematic model; ground vehicles at speed use dynamic models that account for tyre slip; aerial vehicles require six-degree-of-freedom aerodynamic models.

  - In probabilistic robotics, the motion model is expressed as a conditional probability distribution p(x_t | x_{t-1}, u_t): the probability of reaching state x at time t given prior state x_{t-1} and control input u_t. This distribution is typically Gaussian for smooth systems (enabling the Kalman filter's closed-form updates) or approximated by particle populations for non-linear, non-Gaussian cases. Tuning the process noise covariance is critical—underestimating noise causes filter divergence; overestimating it increases state uncertainty unnecessarily.

  - Data-driven and learned motion models have gained traction for systems where first-principles derivation is difficult or where model mismatch is significant. Neural motion models trained on logged trajectories can capture subtle non-linearities in legged locomotion or soft-body manipulation that analytical models miss. They are often combined with physics priors as structured neural networks to retain physical interpretability.

  - In animation and metaverse applications, motion models power procedural character locomotion, physics simulation of cloth and fluids, and predictive animation blending. The same probabilistic machinery used in robotics localisation is applied to human-tracking systems that predict limb positions for AR/VR avatar animation, linking robotics and creative domains through shared mathematical foundations.
