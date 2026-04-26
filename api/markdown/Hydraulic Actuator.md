iri:: http://narrativegoldmine.com/robotics#HydraulicActuator
uri:: urn:visionclaw:concept:robotics:hydraulic-actuator
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:robotics:hydraulic-actuator
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: robotics
preferred-term:: Hydraulic Actuator
content-hash:: sha256-12-062676cf775d
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
bridges-to:: [[Digital Twin]], [[AI Agent System]]
public:: true

- ### Definition
  - HydraulicActuator is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: robotics:HydraulicActuator
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  term-id: RB-9011
  domain: rb
  # HydraulicActuator
  A Hydraulic Actuator converts hydraulic fluid pressure into mechanical motion, providing high force density and power-to-weight ratio for robotic applications requiring substantial actuation forces. These actuators utilize pressurized fluid to drive pistons or hydraulic motors, delivering linear or rotary motion respectively, with force outputs exceeding electric and pneumatic alternatives.
  Hydraulic actuators consist of fluid pumps, control valves, cylinders or motors, and fluid reservoirs forming closed hydraulic circuits. Proportional and servo valves enable precise flow control for position and force regulation, while accumulators store hydraulic energy for rapid response. The technology offers inherent overload protection through pressure relief valves and provides smooth motion control across the full force range without gear reduction.
  Applications include heavy-duty industrial manipulators, construction and mining robots, legged robots requiring high torque-to-weight ratios, and large-scale parallel robots for flight simulation. Hydraulic actuators excel in environments requiring robustness, high forces, and resistance to electromagnetic interference. They enable the powerful, dynamic motions characteristic of quadruped robots like Boston Dynamics' BigDog and ATLAS.
  Modern developments address efficiency improvements through variable displacement pumps, model-based controllers compensating for nonlinear hydraulic dynamics, compact integrated actuator-valve units, and leak detection systems. Research explores electro-hydrostatic actuators eliminating centralized hydraulic power units, biodegradable hydraulic fluids for environmental safety, and energy recuperation systems capturing potential energy during load lowering. Despite maintenance requirements and environmental considerations regarding fluid leaks, hydraulic actuation remains essential for high-force robotic applications where electric alternatives prove inadequate.
  - Siciliano, B., & Khatib, O. (2016). Springer Handbook of Robotics (2nd ed.). Springer
  - Semini, C., et al. (2011). "Design of HyQ – a hydraulically and electrically actuated quadruped robot." Proceedings of the Institution of Mechanical Engineers, Part I: Journal of Systems and Control Engineering, 225(6), 831-849
  - Jelali, M., & Kroll, A. (2003). Hydraulic Servo-systems: Modelling, Identification and Control. Springer
  - Merritt, H.E. (1967). Hydraulic Control Systems. John Wiley & Sons

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
