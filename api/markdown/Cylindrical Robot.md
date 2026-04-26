iri:: http://narrativegoldmine.com/robotics#CylindricalRobot
uri:: urn:visionclaw:concept:robotics:cylindrical-robot
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:robotics:cylindrical-robot
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: robotics
preferred-term:: Cylindrical Robot
content-hash:: sha256-12-6af8998e3bc5
legacy-term-id:: RB-0134
status:: complete
maturity:: established
quality-score:: 0.50
authority-score:: 0.95
version:: 2.0.0
created:: 2025-11-13T00:00:00Z
modified:: 2026-04-26T00:00:00Z
public:: true

- ### Definition
  - Cylindrical robot employs one rotary joint (azimuth) and two prismatic joints (radial and vertical) that produce a cylindrical workspace, enabling efficient reach over rectangular work envelopes. This architecture, simpler and more affordable than six-axis articulated robots, has historically dominated [[Assembly Automation]] and [[Material Handling]] applications where reach and vertical lift are primary requirements.

- ### Semantic Classification
  - owl-class:: robotics:CylindricalRobot
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  - bridges-to:: [[Spatial Computing]]
  - is-subclass-of:: [[Industrial Robot]], [[Coordinate Robots]]
  - has-part:: [[Azimuth Drive]], [[Radial Actuator]], [[Vertical Actuator]], [[End-Effector Mount]]
  - requires:: [[Rotary Joint]], [[Prismatic Actuators]], [[Base Support]]
  - enables:: [[Palletising]], [[Pick and Place]], [[Component Assembly]], [[Depalletising]]
  - is-subclass-of:: [[Fixed-Base Manipulator]]

- ### Content
  The cylindrical robot geometry arises from decoupling motion into rotational positioning around a vertical axis and translational movement in radial and vertical directions. Early robots utilised this kinematic structure because it maps naturally onto hydraulic and pneumatic actuators, enabling simple mechanical design with direct drive or low-ratio transmission. The workspace forms a cylinder, with reach determined by maximum radial extension and stroke limited by radial and vertical travel.

  Cylindrical robots remain prevalent in industrial automation where their geometric simplicity translates to lower cost, simpler control systems, and higher mechanical stiffness compared to articulated alternatives. Their fixed footprint and workspace geometry simplify safety zone definition and collision avoidance. However, the restriction to cylindrical coordinates reduces flexibility for complex trajectory following and orientation changes required in modern precision tasks, explaining gradual displacement by [[Articulated Robots]] in sophisticated manufacturing.

  Contemporary cylindrical robots incorporate advanced [[Control Systems]] enabling smooth path planning in Cartesian space despite cylindrical kinematics, collaborative operation through [[Force Control]], and vision-guided task execution. Hybrid designs combine cylindrical base motion with articulated [[Wrist]] mechanisms to extend capability whilst retaining the simplicity advantages of cylindrical structure for gross positioning.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
