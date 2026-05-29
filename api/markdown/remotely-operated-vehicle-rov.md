- ### Definition
  A Remotely Operated Vehicle (ROV) is a tethered underwater robot controlled by a human operator at the surface via a cable that supplies electrical power and bidirectional communications. ROVs are deployed for inspection, maintenance, and intervention tasks in environments too hazardous or deep for human divers, including oil and gas infrastructure, offshore wind farms, and scientific ocean exploration.

- ### Semantic Classification
  - owl-class:: robotics:Rov
  - owl-role:: Concept
  - belongs-to-domain:: [[Robotics]]

- ### Relationships
  ROVs are composite systems with [[Sensor]] arrays (cameras, sonars, chemical detectors), [[Actuator]] systems (thrusters, manipulators), and a dedicated [[Control System]] operated from the surface. The onboard [[Camera]] suite is fundamental for visual inspection tasks. [[Sensor Fusion]] combines data from multiple sensor modalities to support [[Navigation]] in low-visibility subsea environments. ROVs are a subtype of [[Marine Robot]] and share structural concepts with [[Inspection Robot]] platforms, while contrasting with fully [[Autonomous System]] designs that operate without a tether or continuous human control.

- ### Content

  #### System Architecture
  An ROV comprises three primary subsystems: the vehicle itself (pressure-rated hull, thrusters, sensors, and manipulators), the umbilical tether (carrying power, fibre-optic communications, and in some designs hydraulic fluid), and the surface control unit (operator console, power supply, winch, and telemetry processing). Work-class ROVs designed for deep-water oil and gas operations can weigh several tonnes and operate at depths exceeding 3,000 metres, while observation-class ROVs are compact enough to be handled by two people and are used for scientific and shallow-water tasks.

  #### Sensing and Navigation
  ROVs navigate by combining inertial measurement units, Doppler velocity logs, acoustic positioning systems (USBL or LBL), and visual odometry from camera feeds. The limited visibility of subsea environments—often reduced to a few metres by turbidity—means acoustic and sonar sensors play a central role. Structured light and multibeam sonar provide 3D mapping capability for inspection of pipelines, wellheads, and subsea structures.

  #### Control Paradigms
  Traditional ROV control is fully manual, with a pilot using joysticks to command thruster outputs whilst watching camera feeds. Modern systems increasingly include auto-heading, auto-depth, and station-keeping modes that reduce cognitive load and allow the pilot to focus on the task rather than vehicle attitude. Semi-autonomous capability—following a predefined inspection path or autonomously avoiding collisions—bridges the gap between teleoperation and fully autonomous underwater vehicles (AUVs).

  #### Applications
  ROVs are indispensable for oil and gas subsea inspection and intervention, offshore renewable energy installation and maintenance, scientific ocean floor survey and sample collection, archaeological survey of shipwrecks, and military mine countermeasures. Their tethered design provides continuous power and high-bandwidth video links that battery-limited AUVs cannot match, making them the preferred platform for any task requiring prolonged on-site presence or high-power manipulation.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z