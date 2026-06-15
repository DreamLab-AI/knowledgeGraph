- ### Definition
  - Robotic manipulation is the field concerned with how robots physically interact with and change the state of objects — grasping, moving, assembling, and reorienting them. As a specialisation of [[Manipulation]], it fuses [[Perception]], [[Motion Planning]], and contact reasoning to act reliably under uncertainty.
  - It depends on the embodiment of a [[Robot]] and centrally requires [[Inverse Kinematics]] to translate desired hand poses into joint motions.

- ### Overview
  - Manipulation is the act of using a robot to alter the physical configuration of the world: closing a gripper around a part, threading a cable, opening a drawer, or folding cloth. Unlike navigation, which moves the robot through space, manipulation moves the world relative to the robot, which makes contact and force interaction central.
  - The challenge is that contact is hard to model and perceive. Objects vary in shape, mass, friction, and rigidity; grasps can slip; and the robot must reason about forces it cannot see directly. This pushes manipulation toward tight integration of sensing and control rather than open-loop execution.
  - Approaches span a spectrum. In structured settings such as factories, manipulation can be highly scripted and reliable. In unstructured human environments, robots increasingly rely on learned policies — often trained with [[Reinforcement Learning]] or imitation — to generalise across the variability of real objects.

- ### Mechanisms
  - **Grasp planning** — [[Grasp Planning]] computes where and how to contact an object so the resulting grasp is stable against gravity and disturbance, accounting for friction and the geometry of the [[End Effector]].
  - **Motion planning** — [[Motion Planning]] generates collision-free trajectories that bring the gripper to the grasp pose and then to the goal, respecting joint limits and obstacles.
  - **Inverse kinematics** — [[Inverse Kinematics]] solves for the joint angles that place the end-effector at a desired pose, the bridge between task-space goals and joint-space commands.
  - **Force and compliance control** — [[Force Control]] regulates contact forces during insertion, wiping, or assembly, allowing compliant interaction that tolerates positional error.
  - **Tactile and visual sensing** — [[Tactile Sensing]] and visual [[Perception]] close the loop, detecting slip, estimating object pose, and confirming successful grasps.
  - **Learning-based policies** — Data-driven methods, including [[Reinforcement Learning]] and learning from demonstration, produce manipulation skills that generalise to novel objects and contact-rich tasks.

- ### Applications
  - **Industrial automation** — [[Industrial Robot]] cells perform [[Pick and Place]], assembly, and packaging at high throughput on production lines.
  - **Logistics and warehousing** — [[Robotic Grasping]] of diverse items enables order picking in fulfilment centres.
  - **Service and assistive robotics** — [[Autonomous Robot]] platforms manipulate everyday objects to assist people in homes and care settings.
  - **Surgical and precision manipulation** — Teleoperated and semi-autonomous systems manipulate tissue and instruments with sub-millimetre precision.
  - **Research and dexterity** — Dexterous hands and contact-rich benchmarks drive progress on handling deformable, fragile, and unfamiliar objects.

- ### Relationships
  - subClassOf:: [[Manipulation]]
  - requires:: [[Motion Planning]]
  - requires:: [[Perception]]
  - requires:: [[Inverse Kinematics]]
  - hasPart:: [[Grasp Planning]]
  - hasPart:: [[End Effector]]
  - uses:: [[Force Control]]
  - uses:: [[Tactile Sensing]]
  - dependsOn:: [[Robot]]
  - enables:: [[Pick and Place]]
  - enables:: [[Robotic Grasping]]
  - supports:: [[Industrial Robot]]
  - supports:: [[Autonomous Robot]]
  - relatedTo:: [[Reinforcement Learning]]
  - bridgesTo:: [[Perception]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15