Human Agency and Oversight is a core trustworthiness dimension of responsible AI that encompasses two coupled principles: human agency—protecting individuals' freedom to make informed, uncoerced decisions when interacting with or affected by AI systems—and human oversight—establishing technical and organisational mechanisms that allow authorised humans to monitor, intervene in, correct, or deactivate AI operations at appropriate granularity. The EU AI Act Article 14 mandates these mechanisms for high-risk AI systems, requiring that oversight be achievable by qualified natural persons who understand system outputs and can exercise meaningful authority over them.

### Semantic Classification

### Content

The EU High-Level Expert Group on AI articulated Human Agency and Oversight as one of seven key requirements for trustworthy AI in its 2019 guidelines. The requirement was subsequently codified in the EU AI Act (Regulation 2024/1689), where Article 14 mandates that high-risk AI systems—covering domains such as critical infrastructure, employment, education, law enforcement, and migration—be designed and developed with human oversight measures that allow persons to effectively oversee system operation during the deployment period.

Three oversight modalities are distinguished in technical literature. Human-in-the-loop systems require explicit human approval before each consequential action is executed; this provides the strongest oversight guarantee but limits throughput. Human-on-the-loop systems operate autonomously but surface alerts and dashboards through which monitors can intervene; this is the dominant design for time-sensitive applications such as fraud detection or content moderation at scale. Human-in-command systems allow any authorised human to override or shut down the AI at any time without preconditions; this is treated as a baseline requirement rather than an oversight modality per se.

The human agency dimension focuses on the experience of individuals who interact with or are affected by AI outputs rather than on the operators running the system. It requires that AI not exploit cognitive biases, dark patterns, or persuasion techniques that compromise rational decision-making. This connects to transparency requirements—individuals must know when they are interacting with an AI—and to the right to meaningful human review of automated decisions, enshrined in Article 22 of the GDPR and mirrored in Article 86 of the EU AI Act.

Practical implementation faces a scalability tension: as AI systems process millions of decisions daily, providing genuine human oversight of each decision is operationally infeasible. Research in active learning, uncertainty quantification, and anomaly detection attempts to resolve this by identifying which subset of decisions warrant human attention based on confidence scores, novelty signals, or impact magnitude, routing only those cases to human reviewers while allowing the AI to handle routine cases autonomously.

### Provenance

