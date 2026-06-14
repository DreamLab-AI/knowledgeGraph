- ### Definition
  - Reliability engineering is the systems-level discipline that applies probabilistic analysis, structured failure analysis, and design principles to ensure that a system or component performs its required function for a specified time interval under defined operating conditions. It is closely related to [[Functional Safety]], [[Systems Engineering]], and [[Risk Assessment]], and underpins certification in safety-critical domains such as aerospace, automotive, medical devices, and nuclear power. Modern practice has extended into cloud software through [[Site Reliability Engineering]] and intersects with [[AI Safety]] as autonomous systems proliferate. Its core tools — [[Fault Tree Analysis]], [[FMEA]], and [[Weibull Analysis]] — are widely standardised and applied across industries.

- ### Overview
  - Reliability engineering emerged as a formal discipline after World War II, driven by the US military's concern about the poor reliability of complex electronic equipment. A 1950 Advisory Group on Reliability of Electronic Equipment (AGREE) produced foundational guidance, and subsequent space and nuclear programmes of the 1960s required rigorous quantification of failure probabilities for safety-critical systems. The discipline matured through military standards such as MIL-HDBK-217 and later through international functional safety standards including IEC 61508 and ISO 26262.
  - The fundamental objective is to quantify and control the probability of system failure over a defined operational lifetime. This involves characterising the behaviour of components and systems using probability distributions (notably the Weibull distribution), constructing models of failure propagation, and selecting design strategies — including [[Redundancy]], derating, screening, and [[Fault Tolerance]] architectures — that bring failure probabilities within acceptable bounds.
  - Reliability is expressed through a family of metrics: Mean Time Between Failures (MTBF) for repairable systems, Mean Time to Failure (MTTF) for non-repairable items, Mean Time to Repair (MTTR) capturing maintainability, and overall system Availability as the ratio of uptime to total time. These metrics connect reliability engineering directly to [[Maintenance Engineering]] and lifecycle cost analysis.
  - The discipline operates within a broader dependability framework that also encompasses [[Safety Engineering]], [[Security]] (availability against adversarial threat), and [[Maintainability]] — concepts unified in IEC 60050-192 vocabulary. Understanding the boundaries and overlaps between these sub-disciplines is essential to constructing a coherent [[Systems Engineering]] approach.

- ### Key Components
  - #### Analytical Methods
    - **[[Fault Tree Analysis]] (FTA)** — deductive Boolean logic tree from a defined top-level failure event to basic component fault events; enables quantitative failure probability calculation from component failure rate data.
    - **[[FMEA]] / FMECA** — inductive tabulation of every component failure mode, its effect at successively higher system levels, and (in FMECA) its criticality; the standard tool for design review and safety case construction.
    - **[[Reliability Block Diagram]]** — graphical model representing system structure as series, parallel, or k-of-n arrangements of subsystems; supports rapid calculation of system reliability from subsystem figures.
    - **[[Markov Chains]]** — state-transition model for repairable systems with multiple degraded states; captures repair rates, imperfect repair, and common-cause failure modes that block diagrams cannot represent.
    - **[[Monte Carlo Simulation]]** — stochastic sampling over component failure distributions to propagate uncertainty through complex system models; particularly useful when analytical solutions are intractable.
    - **[[Weibull Analysis]]** — parametric life data analysis fitting a Weibull distribution to failure time data; the three-parameter model captures infant mortality (β < 1), random failure (β ≈ 1), and wear-out (β > 1) regimes.
    - **[[Accelerated Life Testing]]** — subjects components or systems to elevated stress (temperature, voltage, humidity, vibration) to precipitate failures in compressed time; life-stress models (Arrhenius, inverse power law) extrapolate results to use-condition lifetimes.

  - #### Design Strategies
    - **[[Redundancy]]** — provision of duplicate or diverse functional paths so that a single failure does not cause system failure; categories include active parallel, standby, and voted redundancy.
    - **[[Fault Tolerance]]** — the ability of a system to continue operating correctly in the presence of faults; achieved through redundancy, error detection and correction, graceful degradation, and recovery mechanisms.
    - **Derating** — operating components below their rated stress levels to exploit the strong stress-reliability relationship and reduce failure rate; widely applied in electronic and mechanical design.
    - **Burn-in / Screening** — early operational stress to precipitate latent infant-mortality failures before delivery; trades production cost against field reliability improvement.
    - **Prognostics and Health Management (PHM)** — sensor-based monitoring of degradation indicators to predict remaining useful life and schedule maintenance before failure; bridges reliability engineering and [[Predictive Maintenance]].

  - #### Key Metrics
    - **MTBF** (Mean Time Between Failures) — for repairable systems; inverse of steady-state failure rate λ.
    - **MTTF** (Mean Time to Failure) — for non-repairable items.
    - **MTTR** (Mean Time to Repair) — captures maintainability dimension.
    - **Availability** = MTBF / (MTBF + MTTR) — operational uptime fraction.
    - **Failure Rate λ(t)** — instantaneous probability of failure per unit time; the bathtub curve captures its lifecycle shape.
    - **Safety Integrity Level (SIL)** — IEC 61508 four-level classification (SIL 1–4) specifying required probability of failure on demand for safety-critical functions.

- ### Applications
  - #### Aerospace and Defence
    - Aircraft systems certification under DO-178C (software) and DO-254 (hardware) mandates quantitative reliability and failure probability demonstration; catastrophic failure conditions must have probability below 10⁻⁹ per flight hour.
    - Space systems use FTA and FMEA as standard deliverables to space agencies (NASA, ESA); redundant architectures (triple modular redundancy in flight computers) are routinely specified.
    - Military procurement under MIL-STD-785 and AMSAA reliability growth models tracks and predicts reliability improvement through developmental test.

  - #### Automotive
    - ISO 26262 "Road Vehicles — Functional Safety" mandates systematic reliability and safety analysis for automotive electrical/electronic systems, introducing Automotive Safety Integrity Levels (ASIL A–D).
    - SOTIF (ISO 21448) extends analysis to safe operation with sensors and machine learning, directly coupling reliability engineering with [[AI Safety]] for autonomous vehicles.
    - Powertrain, braking, and steering systems undergo extensive [[FMEA]] and durability testing against HALT/HASS protocols.

  - #### Medical Devices
    - IEC 62304 (software) and ISO 14971 (risk management) require reliability-informed risk analysis for medical devices; failure modes affecting patient safety must be controlled to acceptable probability levels.
    - Implantable devices such as cardiac pacemakers have extremely stringent MTTF targets, driving specialised accelerated life testing methodology.

  - #### Industrial and Nuclear
    - IEC 61511 applies IEC 61508 principles to process industry safety instrumented systems (SIS); probabilistic reliability analysis determines SIL and required test intervals for protective functions.
    - Nuclear power plants use [[Probabilistic Risk Assessment]] (PRA/PSA) — a probabilistic extension of reliability engineering — to quantify core damage frequency and inform safety case arguments.
    - Offshore oil and gas installations use Quantitative Risk Assessment (QRA) integrating FTA, [[FMEA]], and consequence modelling.

  - #### Cloud and Software Infrastructure
    - [[Site Reliability Engineering]] (SRE), pioneered at Google, operationalises reliability engineering principles for software services: SLOs define reliability targets, error budgets govern trade-offs between feature velocity and stability, and [[Chaos Engineering]] tests fault tolerance by injecting failures into live systems.
    - Database and distributed system designers apply reliability theory to replication strategies, quorum configurations, and failure domain partitioning to achieve target availability figures such as "five nines" (99.999%).

  - #### AI and Autonomous Systems
    - As neural network-based perception and decision systems enter safety-critical roles, classical reliability models are being extended to handle non-deterministic, data-dependent failure modes.
    - IEC TC 56 and ISO/IEC JTC 1/SC 42 are developing reliability and trustworthiness standards for AI components, addressing distribution shift, adversarial inputs, and performance degradation as failure modes distinct from hardware failures.
    - Sensor fusion architectures in autonomous vehicles apply redundancy and voting concepts from classical reliability engineering adapted for probabilistic perception outputs.

- ### Relationships
  - hasPart:: [[Fault Tree Analysis]]
  - hasPart:: [[FMEA]]
  - hasPart:: [[Accelerated Life Testing]]
  - hasPart:: [[Reliability Block Diagram]]
  - requires:: [[Probabilistic Risk Assessment]]
  - requires:: [[Failure Data Collection]]
  - enables:: [[Risk Assessment]]
  - enables:: [[Predictive Maintenance]]
  - enables:: [[Safety Assurance]]
  - uses:: [[Weibull Analysis]]
  - uses:: [[Markov Chains]]
  - uses:: [[Monte Carlo Simulation]]
  - supports:: [[Functional Safety]]
  - supports:: [[Maintenance Engineering]]
  - dependsOn:: [[Redundancy]]
  - dependsOn:: [[Fault Tolerance]]
  - standardizedBy:: [[IEC 61508]]
  - standardizedBy:: [[MIL-HDBK-217]]
  - standardizedBy:: [[ISO 26262]]
  - contrastsWith:: [[Safety Engineering]]
  - contrastsWith:: [[Quality Engineering]]
  - bridges-to:: [[Site Reliability Engineering]]
  - bridges-to:: [[AI Safety]]
  - bridges-to:: [[Chaos Engineering]]
  - relatedTo:: [[Availability]]
  - relatedTo:: [[Maintainability]]

- ### Standards & Context
  - **IEC 61508** — "Functional Safety of Electrical/Electronic/Programmable Electronic Safety-Related Systems": the foundational international standard for functional safety, defining SIL levels and prescribing reliability analysis requirements for safety functions.
  - **ISO 26262** — "Road Vehicles — Functional Safety": sector-specific application of IEC 61508 principles for automotive electrical and electronic systems; defines ASIL levels A–D.
  - **MIL-HDBK-217** — "Reliability Prediction of Electronic Equipment": US military handbook providing failure rate models for electronic components used in parts-count and stress-analysis reliability predictions; widely used despite known limitations.
  - **DO-178C / DO-254** — RTCA/EUROCAE standards for airborne software and hardware; reliability and failure condition analysis are integral to the certification process.
  - **IEC 60812** — FMEA standard providing procedural guidance for conducting and documenting failure mode and effects analysis.
  - **IEC 61025** — Fault tree analysis standard specifying notation, construction, and quantification methods.
  - **MIL-STD-1629A** — US military standard for FMECA procedures.
  - **IEC TC 56** — IEC Technical Committee responsible for dependability standards; publishes the IEC 60300 series on dependability management.
  - **ISO 14224** — Collection and exchange of reliability and maintenance data for equipment in oil and gas industries; underpins field reliability database construction.
  - **SAE JA1012** — Guide to the MSG-3 reliability-centred maintenance process widely used in civil aviation maintenance programme development.
  - Standards bodies actively working on AI reliability include **ISO/IEC JTC 1/SC 42** (artificial intelligence) and **IEEE P2840** (dependable AI).

- ### Provenance
  - sources:: IEC 61508:2010; ISO 26262:2018; MIL-HDBK-217F; Birolini, "Reliability Engineering: Theory and Practice" (8th ed.); Rausand & Høyland, "System Reliability Theory" (2nd ed.); O'Connor & Kleyner, "Practical Reliability Engineering" (5th ed.); NASA Reliability Engineering Practices (NASA-HDBK-5010); Google SRE Book (Beyer et al., O'Reilly, 2016)
  - updated:: 2026-06-13