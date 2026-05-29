public:: true

# Robot Manipulation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:robot-manipulation",
  "@type": "Page",
  "vc:slug": "robot-manipulation",
  "title": "Robot Manipulation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:robot-manipulation",
  "@type": "Class",
  "label": "Robot Manipulation",
  "definition": "Robot manipulation is the sub-field of robotics concerned with the planning and execution of purposeful physical interactions between robotic systems and objects in the world, encompassing grasping, assembly, in-hand manipulation, and tool use. It integrates kinematics, dynamics, perception, and planning to move objects from one configuration to another, adapting to uncertainty in object shape, pose, surface properties, and environmental dynamics. Robust manipulation remains one of the hardest open problems in robotics due to the combinatorial complexity of contact mechanics.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:manipulation", "label": "Manipulation"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:object-manipulation", "label": "Object Manipulation"},
      {"@id": "urn:ngm:class:industrial-manipulation", "label": "Industrial Manipulation"},
      {"@id": "urn:ngm:class:teleoperation", "label": "Teleoperation"},
      {"@id": "urn:ngm:class:end-effector", "label": "End Effector"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:inverse-kinematics", "label": "Inverse Kinematics"},
      {"@id": "urn:ngm:class:force-control", "label": "Force Control"},
      {"@id": "urn:ngm:class:sensor-fusion", "label": "Sensor Fusion"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:human-robot-interaction", "label": "Human Robot Interaction"},
      {"@id": "urn:ngm:class:robot-learning", "label": "Robot Learning"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Robot Manipulation]] is the robotics discipline concerned with planning and executing purposeful physical contact between robot systems and objects, integrating [[Inverse Kinematics]], [[Force Control]], and [[Sensor Fusion]] to achieve reliable grasping, assembly, and tool use across variable environments.

- ### Relationships
  - Robot Manipulation encompasses [[Object Manipulation]] at the task level and [[Industrial Manipulation]] in manufacturing contexts, extending to teleoperated scenarios via [[Teleoperation]]. The [[End Effector]] (gripper or hand) is the primary manipulation interface. [[Inverse Kinematics]] computes joint trajectories, [[Force Control]] ensures safe contact, and [[Sensor Fusion]] provides the perception pipeline. The field enables [[Human Robot Interaction]] in collaborative settings and drives [[Robot Learning]] research for generalisable manipulation policies.

- ### Content
  - Early industrial robot manipulation, pioneered by George Devol and Joseph Engelberger's Unimate arm (installed at GM in 1961), relied on fixed, pre-programmed trajectories in structured environments with rigidly positioned parts. The introduction of force-torque sensors in the 1980s enabled compliant assembly tasks such as peg-in-hole insertion. Research milestones include Tomás Lozano-Pérez's configuration-space planning framework (1983), which formalised the motion planning problem, and Salisbury's work on dexterous multi-finger hands at MIT in the same decade.

  - Modern manipulation pipelines combine several technical layers. Grasp synthesis algorithms (GraspIt, Dex-Net) estimate stable grasp configurations from point cloud or RGB-D models, accounting for friction, object geometry, and gripper kinematics. Motion planners (RRT, CHOMP, TrajOpt) generate collision-free joint trajectories from current configuration to grasp pre-contact pose. Force-torque sensing at the wrist enables impedance or admittance control modes that provide compliant contact rather than rigid position tracking. Deep learning approaches directly map visual observations to motor commands (end-to-end visuomotor policies) via behaviour cloning or reinforcement learning.

  - Applications span industrial bin-picking (e.g., Covariant, Mech-Mind), surgical robotics (Da Vinci system, laparoscopic tool manipulation), warehouse fulfilment (Amazon Sparrow, Berkshire Grey), and domestic service robots. The 2024 DARPA Robotic Autonomy in Complex Environments challenge and various domestic robot competitions (e.g., RoboCup@Home) have pushed manipulation capabilities in unstructured settings. Bimanual manipulation — coordinating two arms for tasks like cloth folding or tool handoff — has emerged as a key research frontier.

  - By 2024-2025, large-scale robot learning using imitation from human demonstrations (RT-2, OpenVLA, pi0) has dramatically improved generalisation of manipulation policies to novel objects and environments. Foundation models for manipulation, trained on internet-scale video and robot data, produce policies transferable with minimal fine-tuning. Physical simulation (Isaac Gym, MuJoCo) enables sim-to-real transfer for contact-rich tasks. Despite these advances, manipulation in highly cluttered, deformable, or transparent-object environments remains an active research challenge.

