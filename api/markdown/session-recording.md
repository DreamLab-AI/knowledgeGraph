- ### Definition
  - [[Session Recording]] captures the complete sequence of user interactions with a system during a bounded session, producing a replayable audit trail.
  - In [[Security]] contexts it provides evidence for [[Forensic Analysis]] and satisfies [[Compliance]] mandates for privileged session oversight.
  - In UX research it powers [[Usability Testing]] by enabling team members to review user journeys without being present during the session.
  - It is a core capability of [[Privileged Access Management]] platforms and behavioural analytics systems.

- ### Overview
  - Enterprise PAM tools (e.g., CyberArk, BeyondTrust) embed session recording to capture all privileged operations on servers and network devices.
  - Web analytics session replay tools (e.g., FullStory, Hotjar) record DOM events and mouse trajectories to reconstruct user journeys.
  - Security-grade recording must be tamper-evident; audit logs are cryptographically signed to prevent alteration.
  - Privacy regulations (GDPR, CCPA) require data minimisation; implementations must mask passwords, credit card numbers, and PII fields.

- ### Key Aspects
  - **Fidelity vs. storage**: full video recording is storage-intensive; event-stream recording (DOM diffs, input logs) is compact and replayable.
  - **Tamper evidence**: cryptographic chaining of recording segments prevents undetected deletion or modification.
  - **Data masking**: sensitive form fields are redacted or replaced at capture time before storage.
  - **Search and indexing**: metadata tagging enables forensic analysts to query sessions by user, command, or timeframe.
  - **Retention policies**: regulatory frameworks specify minimum retention periods for privileged session records.

- ### Mechanisms
  - An agent or browser SDK intercepts input events and screen state changes, packaging them as a timestamped [[Event Stream]].
  - Recordings are encrypted at rest using [[Data Encryption]] and access-controlled via [[Identity Management]] policies.
  - Replay engines reconstruct the session by replaying the event stream against a virtual DOM or system model.
  - Integration with [[Security Information And Event Management]] systems correlates session events with wider threat intelligence.

- ### Applications
  - Audit and compliance in financial services, healthcare, and government for privileged user activity.
  - UX research replay analysis alongside [[Think Aloud Protocol]] studies.
  - [[Incident Response]] investigation — replaying attacker sessions to reconstruct breach timelines.
  - Quality assurance and bug reproduction using recorded user journeys.

- ### Relationships
  - hasPart:: [[Audit Log]]
  - hasPart:: [[Event Stream]]
  - hasPart:: [[Screen Capture]]
  - enables:: [[Forensic Analysis]]
  - enables:: [[Usability Testing]]
  - enables:: [[Incident Response]]
  - supports:: [[Privileged Access Management]]
  - supports:: [[Compliance]]
  - supports:: [[Think Aloud Protocol]]
  - uses:: [[Data Encryption]]
  - uses:: [[Access Control]]
  - relatedTo:: [[Security Information And Event Management]]
  - relatedTo:: [[Privacy]]
  - relatedTo:: [[Data Governance]]
  - dependsOn:: [[Storage Infrastructure]]
  - dependsOn:: [[Identity Management]]
  - contrastsWith:: [[Log Aggregation]]

- ### Provenance
  - updated:: 2026-06-15