- ### Definition
  An Ethical Review Process is a structured methodology for evaluating AI systems against ethical frameworks, organisational values, and societal norms, involving expert deliberation, stakeholder consultation, and documented decision-making to ensure responsible AI development and deployment. It applies consequentialist, deontological, and virtue-ethics frameworks to assess fairness, privacy, autonomy, safety, and accountability dimensions, producing approval, conditional approval, deferral, or rejection outcomes with documented rationale.

- ### Relationships
  - requires:: [[AI Ethics Board]], [[Accountability]], [[Human Oversight]]
  - enables:: [[Responsible AI]], [[AI Safety]]
  - uses:: [[AI Ethics Checklist]], [[Fairness Metrics]], [[Bias Detection Methods]]
  - supports:: [[AI Governance]], [[Compliance Framework]]
  - relatedTo:: [[AI Risk Management]], [[Explainability]], [[Algorithmic Accountability]]

- ### Content
  The Ethical Review Process operates as a structured governance gate inserted into the AI development lifecycle. Organisations typically define review tiers based on risk classification: low-risk systems may undergo expedited review or self-certification against a checklist, while high-risk systems—as classified under the EU AI Act for applications in employment, credit, law enforcement, or critical infrastructure—require full deliberative review by a multidisciplinary ethics board. The review scope covers technical properties (fairness metrics, bias audit results, explainability provisions), operational properties (human oversight mechanisms, incident response plans), and societal properties (affected community impacts, redress availability).

  Methodologically, the process borrows from Research Ethics Committees and Institutional Review Boards in biomedical research, adapted for AI-specific challenges such as emergent behaviour, distributional shift, and the difficulty of prospectively specifying all failure modes. Tools employed include AI ethics checklists (structured question frameworks covering harms, benefits, and rights), bias detection analyses across protected attribute groups, explainability assessments evaluating whether system outputs can be interpreted by affected persons, and stakeholder consultations soliciting perspectives from communities likely to be impacted by deployment.

  Standards alignment is a key function: reviewers verify that AI systems satisfy applicable regulatory requirements (EU AI Act conformity assessments, ISO/IEC 42001 AI management system requirements, IEEE P7000 ethically aligned design principles) and that documentation supports audit. The process produces a decision record with explicit rationale, creating accountability traces that regulators or affected parties can examine in case of challenged outcomes.

  Ongoing monitoring obligations extend the review process beyond initial deployment. High-risk systems require periodic re-review when material changes occur—model updates, new use cases, changes in deployment population—and when monitoring reveals performance degradation against fairness or safety criteria. This continuous loop between operational monitoring data and the ethics review process creates an adaptive governance mechanism appropriate to the dynamic nature of deployed AI systems.

- ### Provenance
  - sources:: [[IEEE P7000]], [[ISO/IEC 42001:2023]], [[EU AI Act Regulatory Instrument]]
  - migration-date:: 2026-04-26T00:00:00Z