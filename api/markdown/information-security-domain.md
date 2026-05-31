- ### Definition
  - The Information Security Domain classifies concepts concerned with protecting the confidentiality, integrity, and availability of information and the systems that process it. It covers controls, threat models, governance, and the operational practices that defend assets against compromise. As a top-level subject classification, it scopes the practice of securing systems rather than the cryptographic mathematics that some controls rely upon.

- ### Semantic Classification
  - owl-class:: infosec:InformationSecurityDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Cryptography Domain]], [[Privacy Domain]], [[Risk Management Domain]]
  - has-part:: [[Access Control]], [[Threat Modelling]], [[Security Governance]], [[Incident Response]], [[Vulnerability Management]]
  - requires:: [[Cryptographic Primitive]], [[Identity Management]], [[Audit Logging]]
  - enables:: [[Risk Reduction]], [[Regulatory Compliance]], [[Trustworthy Operation]]

- ### Content
  - The Information Security Domain organises the controls and processes that keep systems trustworthy. Access control restricts who can act, threat modelling identifies what could go wrong, and incident response defines how an organisation reacts when defences fail. Together with vulnerability management and governance, these form a continuous cycle of assessment and improvement.
  - Security is framed around the confidentiality, integrity, and availability triad and assessed against documented threat models. Controls are layered so that the failure of one does not expose the whole system, and their effectiveness is measured through audit logging and review. Standards such as the ISO/IEC 27000 family provide a common control catalogue and management framework.
  - As a top-level domain, information security consumes cryptographic primitives and identity management while feeding into privacy and risk management. It bridges to the Cryptography Domain, which supplies the algorithms, and to the Risk Management Domain, which quantifies exposure. Treating the operational practice as a distinct axis keeps it separable from both the underlying mathematics and the broader enterprise risk view.

- ### Provenance
  - sources:: [[ISO/IEC 27001]], [[NIST SP 800-53]]
  - migration-date:: 2026-05-29T00:00:00Z