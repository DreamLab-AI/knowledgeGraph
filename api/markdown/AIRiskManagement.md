- ### OntologyBlock
  id:: airiskmanagement-ontology
  collapsed:: true
	- ontology:: true
	- public-access:: true
	- term-id:: AI-7019
	- preferred-term:: AI Risk Management
	- source-domain:: ai
	- status:: active
	- definition:: AI Risk Management is the systematic process of identifying, assessing, mitigating, and monitoring risks associated with artificial intelligence systems throughout their lifecycle, integrating AI-specific considerations into broader enterprise risk management frameworks. It encompasses governance structures, assessment methodologies, control mechanisms, and continuous oversight to ensure AI systems operate safely, ethically, and in compliance with regulations.
	- maturity:: mature
	- owl:class:: ai:AiRiskManagement
	- owl:role:: Process
	- belongsToDomain:: [[Artificial Intelligence]]
	- #### Relationships
	  id:: airiskmanagement-relationships
	  collapsed:: true
		- is-subclass-of:: [[Risk Management]]
		- related-to:: [[AIRisk]]
		- related-to:: [[AIGovernance]]
		- related-to:: [[AISecurity]]
		- related-to:: [[AI Safety]]
		- related-to:: [[Enterprise Risk Management]]
		- enables:: [[Trustworthy AI]]
		- enables:: [[AI Compliance]]
	- #### NIST AI RMF Core Functions
	  collapsed:: true
		- **GOVERN**: Establish culture of accountability and continuous oversight; define roles and policies
		- **MAP**: Identify system context, stakeholders, dependencies, and potential risks
		- **MEASURE**: Evaluate AI system performance, risk exposure, and trustworthiness characteristics
		- **MANAGE**: Mitigate, monitor, and respond to identified risks over time
	- #### Key Components
	  collapsed:: true
		- **AI Bill of Materials (AI-BOM)**: Documentation of all models, data, and vendors
		- **Impact Assessment**: Thorough evaluation of AI system effects on stakeholders
		- **Risk Ownership**: Clear accountability for AI risks across the organization
		- **Continuous Monitoring**: Anomaly detection and performance tracking
		- **Incident Response**: Protocols for addressing AI-related failures or harms
		- **Audit Trails**: Model versioning, data provenance, and decision logs
	- #### 2025 Framework Updates
	  collapsed:: true
		- Organizations must move from planning to operationalizing AI risk management
		- New NIST Cybersecurity Framework Profile for AI (NISTIR 8596)
		- Integration with SOC, PCI DSS, HITRUST, and CMMC frameworks
		- Emphasis on third-party AI and open-source model risks
		- Data poisoning detection and model extraction controls
	- #### Implementation Roadmap
	  collapsed:: true
		- Build comprehensive AI-BOM for all models and vendors
		- Define clear AI risk ownership and update policies
		- Integrate AI risk into enterprise IT and compliance governance
		- Implement continuous monitoring and anomaly detection
		- Ensure audit trail transparency for model changes
		- Conduct regular third-party assessments
	- #### Applications
	  collapsed:: true
		- Enterprise AI governance programs
		- Regulatory compliance (EU AI Act, NIST RMF)
		- AI vendor risk assessment
		- Healthcare and financial AI deployment
		- Government and defense AI systems
		- Critical infrastructure protection

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with 2025 NIST updates
- **Verification**: Government and industry sources verified
- **Regional Context**: Global standards focus
