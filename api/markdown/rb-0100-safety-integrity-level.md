- ### Definition
  - Safety Integrity Level (SIL) is a four-tier classification (SIL 1 = lowest, SIL 4 = highest) specifying the required probability of failure on demand for a safety-instrumented function. It is the foundational metric used in IEC 61508 and derived sector standards (IEC 62061 for machinery, ISO 13849 Performance Level) to specify, design, and verify safety functions in robotic and automated systems.

  SIL allocation results from a quantitative or qualitative risk assessment that considers the severity of the hazard, the frequency of exposure, and the likelihood of avoiding harm. A SIL 2 safety function, for example, requires a probability of dangerous failure on demand between 10⁻³ and 10⁻². Achieving the required SIL involves a combination of hardware fault tolerance, diagnostic coverage, and systematic process rigour across the entire safety lifecycle.

- ### Semantic Classification
  - owl-class:: robotics:rb0100safetyintegritylevel
  - owl-role:: Concept
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - Standardised by IEC 61508 and underpins Functional Safety practices for collaborative robots and industrial automation.
  - Closely coupled with risk assessment (RB-0089), safety standards (RB-0087), and safety stop mechanisms (RB-0090, RB-0091, RB-0092).

- ### Content

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z