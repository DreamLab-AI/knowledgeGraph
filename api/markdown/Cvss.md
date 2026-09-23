
The Common Vulnerability Scoring System (CVSS) is an open, standardised framework for rating the severity of software vulnerabilities on a 0-10 scale. It decomposes severity into Base, Temporal and Environmental metric groups capturing intrinsic exploitability, real-world threat conditions and organisation-specific impact. CVSS provides a vendor-neutral common language so defenders can compare and prioritise remediation consistently across heterogeneous products.

- ### Overview
  - CVSS converts qualitative vulnerability characteristics into a reproducible numeric vector, letting organisations triage thousands of findings objectively. The Base score reflects fixed properties such as attack vector, complexity and impact on confidentiality, integrity and availability. Temporal and Environmental metrics then adjust the rating for exploit maturity and the defender's specific deployment context.
- ### Mechanisms
  - Base metrics: attack vector, attack complexity, privileges required, user interaction, scope and CIA impact.
  - Temporal metrics: exploit code maturity, remediation level and report confidence that change over a vulnerability's lifetime.
  - Environmental metrics: organisation-specific impact weighting and modified base values reflecting local mitigations.
  - Vector string: a compact, machine-readable encoding of all metric choices enabling tooling interoperability.
  - Score-to-severity mapping: numeric scores translated into None/Low/Medium/High/Critical bands for human triage.
- ### Applications
  - Prioritising patch deployment across large vulnerability backlogs.
  - Populating advisories and security bulletins with a comparable severity rating.
  - Driving service-level agreements that tie remediation deadlines to severity bands.
  - Feeding risk-assessment and threat-modelling pipelines with normalised severity inputs.
- ### Provenance

