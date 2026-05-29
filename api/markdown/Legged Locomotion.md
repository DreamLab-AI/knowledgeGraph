public:: true

# legged locomotion
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5cd31c950766089ad7321d1b1bcd12a32a1fb69fd838a3930f2f424078b3afc",
  "@type": "Page",
  "vc:slug": "legged-locomotion",
  "title": "legged locomotion",
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
  "@id": "urn:ngm:class:legged-locomotion",
  "@type": "Class",
  "label": "Legged Locomotion",
  "definition": "Legged locomotion is the study and engineering of robot motion through articulated limb contacts with the environment, enabling traversal of unstructured terrain that is inaccessible to wheeled or tracked platforms. It requires coordinated management of contact forces, centre-of-mass dynamics, gait sequencing, and reactive balance control across walking, running, climbing, and stair-negotiation tasks. Modern legged locomotion controllers combine whole-body control, model predictive control (MPC), and reinforcement learning — often trained in simulation and transferred to hardware — to achieve robust performance on irregular natural and urban terrain.",
  "domain": "robotics",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robo-navigation-and-planning",
      "label": "Robo Navigation and Planning"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:robot-dynamics", "label": "Robot Dynamics"},
      {"@id": "urn:ngm:class:motion-control", "label": "Motion Control"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"},
      {"@id": "urn:ngm:class:sim-to-real-transfer", "label": "Sim-to-Real Transfer"},
      {"@id": "urn:ngm:class:quadruped-robot", "label": "Quadruped Robot"}
    ]
  },
  "qualityScore": 0.75,
  "maturity": "emerging"
}
```


- ### Definition
  - Legged locomotion is the study and engineering of robot motion through articulated limb contacts with the environment, enabling traversal of unstructured terrain that is inaccessible to wheeled or tracked platforms. It requires coordinated management of contact forces, centre-of-mass dynamics, gait sequencing, and reactive balance control across walking, running, climbing, and stair-negotiation tasks. Modern legged locomotion controllers combine whole-body control, model predictive control (MPC), and reinforcement learning — often trained in simulation and transferred to hardware — to achieve robust performance on irregular natural and urban terrain.

- ### Semantic Classification
  - owl-class:: legged-locomotion:Legged Locomotion
  - owl-role:: Concept

- ### Relationships
  - requires [[Robot Dynamics]]
  - requires [[Motion Control]]
  - enables [[Motion Planning]]
  - relatedTo [[Reinforcement Learning]]
  - relatedTo [[Sim-to-Real Transfer]]
  - relatedTo [[Quadruped Robot]]

- ### Content
  - Legged locomotion is one of the oldest and hardest problems in robotics, requiring the simultaneous solution of contact scheduling (which feet are on the ground and when), force distribution (how much load each contact bears), and whole-body motion (how joints move to maintain balance and advance the body). Classical approaches include the zero-moment point (ZMP) criterion for bipedal stability and the spring-loaded inverted pendulum (SLIP) model for running gaits. Template models capture the essential dynamics at low dimensionality and are used for gait design and analytical stability analysis.
  - Modern quadruped platforms such as Boston Dynamics' Spot, ANYbotics' ANYmal, and Unitree's Go1 use hybrid hierarchical controllers: a high-level planner generates footholds and body trajectories using model predictive control (MPC) over a receding horizon, while a low-level whole-body controller (WBC) computes joint torques that satisfy contact force constraints via quadratic programming. Reinforcement learning-based locomotion, pioneered by research groups at ETH Zurich and Carnegie Mellon, trains end-to-end neural controllers in simulation using domain randomisation, then deploys on hardware through sim-to-real transfer — achieving running, stair climbing, and recovery from disturbances without explicit contact scheduling.
  - The IMU and joint encoders are the primary proprioceptive sensors for legged locomotion; combined with exteroceptive depth cameras or LiDAR, they feed state estimators (extended Kalman filter or invariant EKF) that estimate base pose and velocity despite contact-induced vibrations. Open-source frameworks such as ROS 2, Pinocchio, and OCS2 provide the control and optimisation primitives used across academic and commercial legged robot development.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z
