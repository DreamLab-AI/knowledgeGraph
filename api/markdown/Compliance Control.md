iri:: https://visionclaw.dreamlab-ai.systems/ns/v2/artificial-intelligence#ComplianceControl
uri:: urn:visionclaw:concept:artificial-intelligence:compliance-control
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:compliance-control
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: Compliance Control
content-hash:: sha256-12-010e0aadf970
status:: stub
maturity:: draft
bridges-to:: [[Blockchain]] (bc), [[AI Agent System]] (ai), or [[Digital Twin]] (mv)
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T17:00:00Z
public:: true

- ### Definition
  - ComplianceControl is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence/ComplianceControl
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  term-id: RB-9002
  domain: rb
  # ComplianceControl
  Compliance Control is a force-based control strategy enabling robots to interact safely and adaptively with their environment by regulating contact forces through mechanical compliance or active control. This approach allows robots to accommodate position uncertainties and react appropriately to unexpected contacts, essential for manipulation tasks and human-robot interaction.
  The technique encompasses both passive compliance through mechanical design (springs, dampers) and active compliance through force/torque feedback control. Impedance control and admittance control represent the two fundamental active compliance strategies, where impedance control regulates the dynamic relationship between force and motion, while admittance control commands motion based on sensed forces. These methods enable robots to perform tasks requiring controlled contact forces, such as assembly, polishing, and collaborative manipulation.
  Applications include precision assembly operations where parts must mate despite manufacturing tolerances, surface finishing tasks requiring consistent contact forces, and collaborative robotics where safe human-robot physical interaction is required. The strategy proves particularly valuable in unstructured environments where exact position control is insufficient.
  Recent developments incorporate learning-based approaches to adapt compliance parameters automatically, hybrid force-position control schemes for simultaneous position and force regulation, and variable impedance control that adjusts stiffness dynamically based on task requirements. Modern implementations integrate tactile sensing and vision feedback to enhance compliance behavior in complex manipulation scenarios.
  - Hogan, N. (1985). "Impedance Control: An Approach to Manipulation." Journal of Dynamic Systems, Measurement, and Control, 107(1), 1-24
  - Mason, M.T. (1981). "Compliance and Force Control for Computer Controlled Manipulators." IEEE Transactions on Systems, Man, and Cybernetics, 11(6), 418-432
  - Whitney, D.E. (1987). "Historical Perspective and State of the Art in Robot Force Control." International Journal of Robotics Research, 6(1), 3-14
  - Albu-Schaffer, A., et al. (2007). "Soft robotics." IEEE Robotics & Automation Magazine, 15(3), 20-30

  ## Sources

- ### Provenance
  - sources:: [[IEEE (Institute of Electrical and Electronics Engineers)]]
  - migration-date:: 2026-04-26T00:00:00Z
