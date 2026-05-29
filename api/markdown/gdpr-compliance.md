- ### Definition
  - GDPR Compliance refers to the totality of organisational, technical, and procedural measures an entity must implement to satisfy obligations under the EU General Data Protection Regulation (Regulation 2016/679), including lawful bases for processing, data subject rights fulfilment, data-breach notification, and appointment of a Data Protection Officer where required. The regulation applies extraterritorially to any organisation processing personal data of EU data subjects, regardless of where processing occurs. Compliance programmes span privacy-by-design principles, data minimisation, consent management, audit trails, and demonstrable accountability to supervisory authorities.

- ### Semantic Classification
  - owl-class:: gdpr-compliance:GDPR Compliance
  - owl-role:: Concept

- ### Relationships
  - requires [[Consent Management]]
  - requires [[Data Protection]]
  - requires [[Privacy By Design]]
  - relatedTo [[Data Minimisation]]
  - relatedTo [[Data Governance]]
  - relatedTo [[AI Governance]]

- ### Content
  GDPR, in force since May 2018, establishes eight core data subject rights: access, rectification, erasure ("right to be forgotten"), restriction of processing, portability, objection, and rights related to automated decision-making including profiling. Organisations must identify a lawful basis for each processing activity—consent, contract, legal obligation, vital interests, public task, or legitimate interests—and document these in a Record of Processing Activities (RoPA).

  Technical implementation requires Consent Management platforms to capture, store, and honour granular consent preferences across touchpoints. Privacy By Design mandates that data protection is embedded in system architecture from the outset rather than retrofitted. Data Minimisation constrains collection to only what is strictly necessary for the stated purpose, directly affecting AI training dataset curation and model deployment scope.

  Data Governance frameworks ensure appropriate stewardship of personal data throughout its lifecycle, including retention schedules and secure deletion. Data Breach notification to supervisory authorities within 72 hours of becoming aware is mandatory where the breach poses risk to individuals. The regulation intersects directly with AI Governance: automated profiling and high-stakes AI decisions require human oversight provisions and, in many cases, a Data Protection Impact Assessment (DPIA). Differential Privacy and Federated Learning are Privacy-Enhancing Technologies increasingly used to satisfy GDPR obligations while enabling analytical value from personal data.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z