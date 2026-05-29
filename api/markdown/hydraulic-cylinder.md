### Definition

A hydraulic cylinder is a mechanical actuator that converts hydraulic pressure and fluid flow into unidirectional linear force and motion. It consists of a cylindrical barrel, piston, piston rod, end caps, and seals; pressurised fluid acts on the piston face to extend or retract the rod, generating forces from tens of newtons to several meganewtons depending on bore diameter and system pressure. Hydraulic cylinders are foundational components in industrial robots, heavy machinery, manufacturing automation, and construction equipment where high force density and precise position control are required.

### Relationships

A hydraulic cylinder is a subclass of Hydraulic Actuator and belongs to the broader Actuation and Control taxonomy. It requires a Hydraulic Motor to supply pressurised fluid, and integrates with Feedback Control and PID Control loops to achieve accurate positioning. Its hasPart relationships include Seals (which prevent fluid leakage across the piston and rod) and Pressure Sensors that provide closed-loop feedback. The cylinder enables Force Control and Motion Control applications and is a key component inside Industrial Robot arms. It contrasts with the Pneumatic Cylinder (which uses compressed gas and is lighter but lower-force) and with the Servo Motor (which provides rotary rather than linear output). It is closely related to Robot Joint design and to IndustrialAutomation systems more broadly.

### Content

Hydraulic cylinders operate on Pascal's law: pressure applied uniformly to an enclosed fluid is transmitted equally in all directions. A pump delivers flow at high pressure; a directional-control valve routes that flow to the cap-end or rod-end of the cylinder, extending or retracting the piston rod respectively. Output force equals pressure multiplied by effective piston area, and velocity is determined by flow rate divided by area. Bore sizes range from 12 mm in miniature cylinders to over 1 metre in heavy civil-engineering rams, with working pressures typically between 70 bar and 350 bar.

In industrial robotics and automation, hydraulic cylinders drive linear slides, clamping fixtures, stamping presses, and heavy-lift arms. They offer the highest force density of any actuation technology — far exceeding pneumatic or electric alternatives at comparable actuator size — making them indispensable in applications such as die-casting, forging, and large-scale assembly. The trade-off is a hydraulic power unit, associated pipework, and the need to manage fluid cleanliness, temperature, and leakage.

Closed-loop control of a hydraulic cylinder typically uses a servo valve or proportional valve coupled with a linear position encoder. The controller (commonly PID or model-predictive) adjusts valve spool position to minimise position error. Force control adds a load cell or pressure transducer in the feedback path. Modern electro-hydraulic systems achieve positioning repeatability below 10 micrometres. Predictive-maintenance strategies monitor seal condition via pressure-decay tests and servo-valve response curves.

Environmental and efficiency considerations increasingly favour electric actuation for lighter-duty cycles. However, hybrid electro-hydraulic architectures — using an electric motor-driven pump per actuator — are re-establishing hydraulic cylinders in energy-efficient form factors for applications where shock-load absorption and passive force retention (load-holding without continuous power) remain critical advantages.

### Provenance

- sources:: Chimera Prime Research
- migration-date:: 2026-04-26T00:00:00Z