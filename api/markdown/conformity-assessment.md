- ### Definition
  - Conformity Assessment is a structured set of procedures used to evaluate whether an AI system or product satisfies specified regulatory, technical, or ethical requirements prior to deployment or market entry. Under frameworks such as the EU AI Act, high-risk AI systems must undergo either a third-party audit by a notified body or a documented self-assessment process; the resulting conformity declaration is a legal precondition for placing the system on the EU market. The process typically includes technical documentation review, testing, risk analysis, and ongoing post-market surveillance.

- ### Semantic Classification
  - owl-class:: conformity-assessment:Conformity Assessment
  - owl-role:: Concept

- ### Relationships
  - requires [[Risk Assessment]]
  - requires [[Transparency]]
  - supports [[AI Regulation]]
  - supports [[AI Safety]]
  - relatedTo [[Explainability]]

- ### Content
  - Conformity Assessment bridges the gap between abstract regulatory requirements and the practical certification of deployed AI systems. It borrows conceptual structure from product safety domains—such as machinery directive assessments under EN ISO standards—and adapts them to the probabilistic, data-dependent characteristics of machine learning systems. Key challenges include the non-determinism of AI outputs, distribution shift after deployment, and the difficulty of exhaustively testing systems trained on large datasets.
  - Under the EU AI Act, the conformity assessment pathway depends on the risk classification of the system. General-purpose AI models above defined capability thresholds require additional transparency and safety evaluations. Notified bodies accredited under the AI Act framework carry out third-party assessments for the highest-risk categories, including biometric identification systems and critical infrastructure controllers.
  - Standardisation bodies including ISO/IEC JTC 1/SC 42, NIST, and ETSI are developing technical standards that provide measurable criteria for conformity. These include standards for dataset documentation, bias testing, robustness evaluation, and post-market monitoring. Explainability and transparency are prerequisite properties—auditors cannot assess conformity without being able to inspect model behaviour, training data provenance, and documented risk mitigations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z