public:: true

# Collaborative Robotics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:collaborative-robotics",
  "@type": "Page",
  "vc:slug": "collaborative-robotics",
  "title": "Collaborative Robotics",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collaborative-robotics",
  "@type": "Class",
  "label": "Collaborative Robotics",
  "definition": "Collaborative Robotics is the engineering discipline concerned with designing, deploying, and operating robotic systems — particularly collaborative robots (cobots) — that share workspace and tasks with human workers without requiring physical barriers, relying instead on force-torque sensing, speed-and-separation monitoring, and power-and-force limiting to maintain safety under ISO 10218 and ISO/TS 15066. Unlike traditional industrial robots that operate in guarded cages, cobots are designed with compliant joints, rounded profiles, and real-time collision-detection to enable direct physical cooperation with humans on assembly, inspection, and logistics tasks. The discipline integrates mechanical design, control theory, human-robot interaction research, and regulatory compliance.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:collaborative-robot", "label": "Collaborative Robot"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:cobot-safety-levels", "label": "Cobot Safety Levels"},
      {"@id": "urn:ngm:class:industrial-robot", "label": "Industrial Robot"},
      {"@id": "urn:ngm:class:robot-safety", "label": "Robot Safety"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:manufacturing-automation", "label": "Manufacturing Automation"},
      {"@id": "urn:ngm:class:assistive-robotics", "label": "Assistive Robotics"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:force-torque-sensor", "label": "Force Torque Sensor"},
      {"@id": "urn:ngm:class:impedance-control", "label": "Impedance Control"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Collaborative Robotics is the discipline of engineering [[Collaborative Robot]] systems that operate alongside humans in shared spaces, using [[Impedance Control]], [[Force Torque Sensor]] arrays, and certified [[Cobot Safety Levels]] to enable physical cooperation without hard physical barriers.

- ### Relationships
  - The field is defined by its tight coupling with [[Human Robot Interaction]] research, which establishes ergonomic, psychological, and safety requirements, and with [[Cobot Safety Levels]] (speed-and-separation monitoring, hand-guiding, power-and-force limiting, safety-rated monitored stop) that translate ISO/TS 15066 into operational modes. Cobots depend on [[Force Torque Sensor]] feedback and [[Impedance Control]] algorithms to detect unexpected contact and yield compliantly. They connect via [[End Effector]] tooling to production tasks, enabling [[Manufacturing Automation]] in small-batch and mixed-model lines previously inaccessible to rigid industrial automation. The discipline also extends into [[Assistive Robotics]] for healthcare and rehabilitation contexts.

- ### Content
  - The cobot concept was formalised by J. Edward Colgate and Michael Peshkin at Northwestern University in 1996, patented as collaborative robots that are inherently safe through mechanical design rather than enclosures. The first commercial cobots — Universal Robots' UR5 (2008) and Rethink Robotics' Baxter (2012) — demonstrated viable force-limited arms at price points accessible to small and medium enterprises, disrupting the high-capital model of traditional industrial automation.

  - A collaborative robot application proceeds through a risk assessment under ISO 10218-2 and, where humans share workspace, ISO/TS 15066. The assessment determines which of four collaboration modes applies: safety-rated monitored stop (robot halts when human enters), hand-guiding (direct physical teaching), speed-and-separation monitoring (robot slows as humans approach using proximity sensing), or power-and-force limiting (contact forces remain below injury thresholds at all times). Control architectures implement admittance or impedance control loops that respond to external torques by yielding, allowing natural hand-guiding for programming. Vision systems and time-of-flight sensors increasingly supplement joint-torque sensing to provide predictive collision avoidance.

  - Cobots address a fundamental limitation of classical automation: the inability to handle part variability, irregular workpieces, and tasks requiring dexterous judgement. SME manufacturers use cobots for screwdriving, pick-and-place, quality inspection, polishing, and machine tending — tasks combining physical repetition with situational variation that is uneconomical to fully automate. Labour productivity gains are significant: a cobot working alongside one operator can increase throughput by 30-85% on cycle-limited assembly tasks while the operator handles exceptions. The cobot market exceeded $1.5 billion globally in 2023 and is forecast to grow at 40% CAGR through 2028.

  - Current frontiers in 2024-2025 include AI-driven task learning — where cobots learn from demonstration via imitation learning — and dexterous manipulation using multi-fingered hands with tactile sensing. Foundation models trained on robot trajectories (e.g., RT-2, OpenVLA) are enabling zero-shot task transfer, reducing deployment time from weeks to hours. Multi-cobot coordination in unstructured environments, integration with mobile manipulators for logistics, and cobot deployment in construction and agriculture represent the next wave of application domains.

