- ### OntologyBlock
  id:: aisecurity-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: AI-7015
	- preferred-term:: AI Security
	- source-domain:: ai
	- status:: active
	- definition:: AI Security is the field of protecting artificial intelligence systems and their components from security threats and vulnerabilities, including adversarial attacks, data poisoning, model theft, and unauthorized access to ensure systems perform as intended. It encompasses defending AI models, algorithms, training data, and infrastructure from manipulation, misuse, and exploitation throughout the AI lifecycle.
	- maturity:: mature
	- owl:class:: ai:AiSecurity
	- owl:role:: Domain
	- belongsToDomain:: [[Artificial Intelligence]]
	- #### Relationships
	  id:: aisecurity-relationships
	  collapsed:: true
		- is-subclass-of:: [[Cybersecurity]]
		- related-to:: [[AIRisk]]
		- related-to:: [[AIGovernance]]
		- related-to:: [[Machine Learning]]
		- related-to:: [[Adversarial Machine Learning]]
		- enables:: [[Trustworthy AI]]
		- enables:: [[Secure AI Deployment]]
	- #### Key Threat Categories
	  collapsed:: true
		- **Adversarial Examples**: Specially crafted inputs causing misclassification or manipulation
		- **Data Poisoning**: Manipulation of training data to compromise model integrity or create backdoors
		- **Model Inversion**: Extracting sensitive training data through repeated model queries
		- **Prompt Injection**: Bypassing LLM security restrictions through crafted prompts (PLeak, DAN)
		- **Transfer Learning Attacks**: Injecting backdoors into pre-trained models that survive fine-tuning
		- **Model Extraction**: Stealing proprietary models through query-based reconstruction
	- #### 2025 Threat Landscape
	  collapsed:: true
		- 93% of security leaders expect daily AI-driven attacks
		- 66% anticipate AI having most significant cybersecurity impact
		- Approximately 2,200 cyberattacks globally each day
		- Machine-versus-machine warfare emerging in real-time
		- AI used as force multiplier by both defenders and attackers
	- #### Defense Measures
	  collapsed:: true
		- **Access Controls**: Multi-layered security with encryption and granular permissions
		- **Input Validation**: Strict filtering to detect adversarial inputs
		- **Inference Monitoring**: Tracking model queries for anomalous patterns
		- **Output Filtering**: Ensuring appropriate responses and refusal of harmful queries
		- **Red Teaming**: Regular adversarial testing to identify vulnerabilities
		- **Adversarial Training**: Strengthening models against known attack vectors
	- #### Government Guidance (2025)
	  collapsed:: true
		- **Five Eyes AI Data Security**: Joint FBI, NSA, CISA, Australia, New Zealand, UK guidance
		- **NIST Adversarial ML Taxonomy**: Attacks and mitigations classification
		- **NIST Cybersecurity Framework Profile for AI**: Integration of AI security with CSF 2.0
	- #### Applications
	  collapsed:: true
		- Enterprise AI system hardening
		- Secure LLM deployment
		- AI-powered threat detection
		- Autonomous system protection
		- Healthcare AI security
		- Financial services AI protection

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with 2025 threat intelligence
- **Verification**: Security research sources verified
- **Regional Context**: Global cybersecurity landscape
