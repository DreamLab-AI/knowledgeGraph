A protective stop is a safety-initiated cessation of robot motion that halts all hazardous movement when a safety function is triggered, without necessarily cutting power to the drive system. Unlike an emergency stop, a protective stop permits automatic restart once the triggering condition is resolved, making it a standard mechanism in collaborative robot cells operating under ISO 10218 and ISO/TS 15066. It is fundamental to speed-and-separation monitoring and power-and-force-limiting safety strategies.

A **Protective Stop** is a safety-initiated cessation of robot motion triggered when a monitored safety condition is violated — for example, when a person enters a restricted zone or a force threshold is exceeded. Unlike an emergency stop (which de-energises drives), a protective stop suspends motion while maintaining drive readiness, allowing automatic or supervised restart once the hazard is cleared. It is the core enforcement mechanism for collaborative robotic cells operating under ISO 10218-1/2 and ISO/TS 15066.

### Semantic Classification

### Content

- **Protective Stop** (RB-0092) is the enforcement mechanism by which a robot's motion is halted when a monitored safety condition is violated — for example when a person enters a restricted zone detected by a laser scanner, or when a force threshold is exceeded. Unlike an emergency stop, a protective stop suspends motion while maintaining drive readiness, allowing automatic or supervised restart once the hazard clears.

  Protective stops are fundamental to the collaborative application modes consolidated in ISO 10218-2:2025 (the 2025 revision absorbed ISO/TS 15066:2016). In speed-and-separation monitoring applications, the protective stop is the terminal response when a person crosses the minimum protective distance. In power-and-force-limiting applications, it acts as a backup if the force-limiting mechanism fails to constrain contact forces within acceptable biomechanical limits. The stop function itself must meet a functional safety integrity level (PLd/SIL 2 minimum) per ISO 10218-1:2025 and ISO 13849-1.

### Provenance

