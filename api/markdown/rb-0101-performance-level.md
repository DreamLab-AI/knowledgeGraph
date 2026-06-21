- ### Definition
  - Performance Level (PL) is a discrete safety metric defined in ISO 13849-1 that quantifies the ability of a safety-related control system to perform a safety function under foreseeable conditions. Levels range from PLa (lowest) to PLe (highest), each corresponding to a target probability of dangerous failure per hour (PFHd). PL is determined through a structured risk assessment and verified against the required PL (PLr) derived from hazard analysis, considering parameters such as category, mean time to dangerous failure (MTTFd), diagnostic coverage (DC), and common-cause failure (CCF).

- ### Semantic Classification
  - owl-class:: robotics:rb0101performancelevel
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Performance Level is closely related to Safety Integrity Level (SIL) from IEC 61508, sharing the same goal of characterising safety-related system reliability but using a different methodology and scale. PL maps approximately to SIL: PLc ≈ SIL 1, PLd ≈ SIL 2, PLe ≈ SIL 3. In collaborative robotics, PLd or PLe is typically required for functions that prevent hazardous robot motion in human-occupied workspaces.

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z