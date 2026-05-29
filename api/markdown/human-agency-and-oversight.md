- ### Definition
  - Human Agency and Oversight is a trustworthiness dimension ensuring AI systems respect human autonomy, preserve meaningful human control, and implement appropriate human supervision mechanisms to prevent undue coercion, manipulation, or erosion of self-determination. This dimension encompasses two core components: human agency (protecting human freedom and decision-making capacity by preventing unfair coercion, manipulation through deceptive interfaces or dark patterns, and enabling informed decision-making through transparent presentation of AI involvement and capabilities) and human oversight (establishing supervision mechanisms ensuring humans can intervene in AI operations through human-in-the-loop requiring human approval for critical decisions before execution, human-on-the-loop enabling human operators to monitor system operation and intervene when necessary, and human-in-command allowing authorized humans to override or deactivate systems while maintaining ultimate control). The EU AI Act Article 14 mandates that high-risk AI systems be designed with appropriate human oversight, requiring qualified personnel to interpret system outputs and exercise intervention authority, with oversight mechanisms selected based on risk assessment considering decision impact, volume, reversibility, and affected populations. Implementation patterns emerging in 2024-2025 included hybrid approaches routing routine low-risk tasks to autonomous systems while escalating uncertain or high-impact decisions to humans, intervention triggers based on confidence thresholds, novelty detection, anomaly identification, and random sampling, and emergency stop capabilities enabling immediate suspension of automated operations. Practical challenges included the feasibility of meaningful oversight as systems grew increasingly complex and autonomous, particularly in domains like large-scale neural networks where human understanding of decision logic proved limited, and the tension between oversight requirements and operational efficiency in high-volume decision environments.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:HumanAgencyOversight
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - requires:: [[Human in the Loop]], [[Transparency]], [[Explainability]]
  - enables:: [[AI Safety]], [[Accountability]], [[AI Trustworthiness]]
  - relatedTo:: [[AI Governance]], [[Fairness]], [[Robustness]], [[Audit Trail]], [[Model Interpretability]]
  - supports:: [[AI Regulation]], [[AI Governance Framework]]

- ### Content
  The EU High-Level Expert Group on AI articulated Human Agency and Oversight as one of seven key requirements for trustworthy AI in its 2019 guidelines. The requirement was subsequently codified in the EU AI Act (Regulation 2024/1689), where Article 14 mandates that high-risk AI systems—covering domains such as critical infrastructure, employment, education, law enforcement, and migration—be designed and developed with human oversight measures that allow persons to effectively oversee system operation during the deployment period.

  Three oversight modalities are distinguished in technical literature. Human-in-the-loop systems require explicit human approval before each consequential action is executed; this provides the strongest oversight guarantee but limits throughput. Human-on-the-loop systems operate autonomously but surface alerts and dashboards through which monitors can intervene; this is the dominant design for time-sensitive applications such as fraud detection or content moderation at scale. Human-in-command systems allow any authorised human to override or shut down the AI at any time without preconditions; this is treated as a baseline requirement rather than an oversight modality per se.

  The human agency dimension focuses on the experience of individuals who interact with or are affected by AI outputs rather than on the operators running the system. It requires that AI not exploit cognitive biases, dark patterns, or persuasion techniques that compromise rational decision-making. This connects to transparency requirements—individuals must know when they are interacting with an AI—and to the right to meaningful human review of automated decisions, enshrined in Article 22 of the GDPR and mirrored in Article 86 of the EU AI Act.

  Practical implementation faces a scalability tension: as AI systems process millions of decisions daily, providing genuine human oversight of each decision is operationally infeasible. Research in active learning, uncertainty quantification, and anomaly detection attempts to resolve this by identifying which subset of decisions warrant human attention based on confidence scores, novelty signals, or impact magnitude, routing only those cases to human reviewers while allowing the AI to handle routine cases autonomously.

- ### Provenance
  - sources:: [[EU AI Act Article 14]], [[EU HLEG AI]], [[IEEE P7000]]
  - migration-date:: 2026-04-26T00:00:00Z