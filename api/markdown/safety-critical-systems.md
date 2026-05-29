- ### Definition
  - Safety-critical systems are engineered systems — spanning avionics, automotive control units, nuclear instrumentation, medical devices, and railway signalling — where a single functional failure can produce catastrophic consequences. They demand that [[Functional Safety]] requirements be allocated across hardware and software with explicit [[Fault Tolerance]] strategies, and that compliance with standards such as [[IEC 61508]], [[ISO 26262]], and [[DO-178C]] be demonstrated through independent [[Formal Verification]] and [[Hazard Analysis]].

- ### Relationships
  - Safety-critical systems depend on [[Reliability Engineering]] to quantify failure rates and on [[Embedded Systems]] platforms that run deterministic, real-time software. [[Functional Safety]] standards assign Safety Integrity Levels (SILs) or Automotive Safety Integrity Levels (ASILs) that gate design, verification, and certification activities.

- ### Content
  - The discipline emerged from catastrophic failures in 1970s avionics and process-plant control. The Therac-25 radiation therapy machine (1985–1987), whose software faults caused six patient deaths, and the Ariane 5 launch failure (1996) became canonical case studies that drove international standardisation efforts throughout the 1990s.

  - Architecturally, safety-critical systems employ redundancy (hardware voting, dual- or triple-modular redundancy), strict separation of safety and non-safety software partitions, deterministic scheduling, and watchdog timers. Static analysis, model checking, and coverage-guided testing — including MC/DC (Modified Condition/Decision Coverage) mandated by DO-178C for Level A software — are required artefacts.

  - The ecosystem encompasses specialised real-time operating systems (VxWorks, INTEGRITY, LynxOS), hardware platforms with ECC memory and lock-step CPUs, toolchains with qualification evidence (LDRA, Polyspace), and certification bodies such as EASA, FAA, and TÜV. Automotive use of ISO 26262 spans everything from airbag ECUs to ASIL-D autonomous driving platforms.

  - From 2024 onward, the integration of machine-learning components into safety-critical domains (adaptive cruise control, radiological image analysis) is creating new standardisation challenges. EASA's AI Roadmap and ISO/PAS 8800 address ML-based safety functions, though formal verification of neural network behaviour at ASIL-D confidence remains an open research problem.