id:: human-in-the-loop-ontology

- ### OntologyBlock
  id:: Human-in-the-Loop
  - ontology:: true
  - public-access:: true
  - term-id:: MV-0097
  - preferred-term:: Human in the Loop
  - source-domain:: ai
  - status:: draft
  - owl:class:: ai:HumanInTheLoop
  - definition:: A design pattern and operational approach for artificial intelligence systems in which human judgment, decision-making, or validation is integrated as an essential component of the AI system's decision cycle, requiring active human participation at critical points before AI-generated outputs are finalised or actions are executed, thereby ensuring meaningful human control, accountability, and the application of human values and contextual understanding to consequential AI-assisted decisions.

### Relationships
- is-subclass-of:: [[Metaverse]]
- enables:: [[ethical alignment]]
- enables:: [[error correction]]
- enables:: [[Accountability]]

### 1. Verification Pattern
- **Process**: AI generates recommendation, human verifies before implementation
- **Application**: Medical diagnosis, legal document review, financial fraud investigation
- **Advantages**: Catches AI errors before consequences manifest
- **Challenges**: Risk of superficial verification, automation bias

### 2. Approval Pattern
- **Process**: AI identifies options, human selects among alternatives
- **Application**: Recruitment candidate shortlisting, content moderation decisions
- **Advantages**: Combines AI efficiency with human judgment on sensitive choices
- **Challenges**: Quality of AI-presented options shapes human choice space

### 3. Collaborative Pattern
- **Process**: Human and AI iteratively refine solution together
- **Application**: Design tasks, strategic planning, creative work
- **Advantages**: Leverages complementary strengths of human and AI
- **Challenges**: Complexity of interaction design, potential for misaligned incentives

### 4. Exception-Based Pattern
- **Process**: AI handles routine cases autonomously, escalates edge cases to human
- **Application**: Insurance claims processing, customer service routing
- **Advantages**: Efficient resource allocation, focuses human attention on difficult cases
- **Challenges**: Defining appropriate escalation criteria, maintaining human skill for rare cases

### 5. Annotation/Training Pattern
- **Process**: Humans label data, validate outputs, or correct errors to improve AI
- **Application**: Training data creation, active learning systems
- **Advantages**: Continuous AI improvement, human expertise embedded in system
- **Challenges**: Annotator consistency, potential for label bias, resource intensity

## Relationships

- **Type of**: Human Oversight mechanisms
- **Required by**: High-risk AI systems, regulated applications
- **Contrasts with**: Human-on-the-loop (monitoring vs. active participation)
- **Exercised by**: AI Operators, AI Users, domain experts
- **Supported by**: Explainability, decision support interfaces
- **Enables**: Accountability, error correction, ethical alignment
- **Part of**: AI Governance frameworks, operational procedures
- **Informed by**: AI Monitoring, performance feedback
- **Applied during**: AI Deployment, AI operation phases
- **Documented in**: Decision logs, audit trails, approval records

## Examples and Applications

1. **Radiology AI Diagnostic Support**: AI system analyses medical image and highlights suspicious regions with confidence scores, radiologist reviews highlighted areas and original image, radiologist makes final diagnostic determination documented in report, radiologist can request additional views or colleague consultation, system learns from radiologist's diagnoses over time—radiologist remains legally and ethically responsible for diagnosis
2. **Autonomous Weapons System**: AI identifies potential targets and presents to military operator with assessment, operator evaluates target legitimacy under rules of engagement and international humanitarian law, operator makes engagement decision with explicit authorization required, system maintains detailed log of operator decisions and justifications—operator maintains responsibility under laws of armed conflict
3. **Recruitment Screening**: AI reviews applications and ranks candidates, hiring manager reviews AI rankings alongside full applications, manager selects candidates for interview incorporating AI input and additional contextual factors (team needs, diversity objectives), manager documents selection rationale, hiring decisions tracked for bias analysis—manager accountable for hiring outcomes
4. **Content Moderation**: AI flags potentially violating content for human review, trained moderator examines flagged content in context, moderator makes removal decision based on community guidelines, moderator can escalate difficult cases to senior staff, appeals reviewed by different moderators—moderators accountable for content decisions

## ISO/IEC Standards Alignment

**ISO/IEC 42001:2023** (AI Management Systems):
- Clause 5.3: Organisational roles including HITL decision-makers
- Clause 8.5: Human involvement in operation and monitoring
- Clause 9.1: Monitoring of HITL effectiveness
- Clause 7.2: Competence requirements for HITL participants

**ISO/IEC 23894:2023** (AI Risk Management):
- HITL as risk mitigation control
- Human judgment in risk-critical decision points
- Documentation of HITL implementation

**ISO/IEC 38507:2022** (Governance of IT):
- Human oversight principle implementation through HITL
- Governance of human-AI decision allocation

## NIST AI RMF Integration

**GOVERN Function**:
- Policies defining where HITL is required
- Roles and responsibilities for HITL decision-makers
- HITL effectiveness monitoring and review

**MAP Function**:
- Context analysis identifying HITL requirements
- Impact assessment determining need for HITL
- Stakeholder input on HITL design preferences

**MEASURE Function**:
- HITL decision quality and consistency metrics
- Human-AI agreement and disagreement analysis
- Time and resource requirements for HITL

**MANAGE Function**:
- HITL as primary risk mitigation mechanism
- Procedures for HITL implementation and escalation
- Continuous improvement based on HITL outcomes

## Implementation Considerations

**Interface Design**:
- Present AI reasoning transparently without overwhelming
- Highlight uncertainty and areas requiring particular attention
- Provide context and comparable cases for informed judgment
- Enable human to request additional information or analysis
- Document human decision and rationale efficiently

**Competence and Training**:
- Domain expertise for informed judgment
- Understanding of AI capabilities and failure modes
- Training to avoid automation bias and maintain critical evaluation
- Practice maintaining skills despite automation of routine work
- Calibration on when to accept vs. question AI recommendations

**Process Design**:
- Allocate sufficient time for meaningful human review
- Avoid productivity pressures that incentivise perfunctory approval
- Implement quality assurance cheques on human decisions
- Maintain feedback loops improving both AI and human performance
- Design for sustainable attention and engagement

**Challenges**:
- **Automation bias**: Humans over-relying on AI recommendations
- **Workload**: HITL can be resource-intensive at scale
- **Skill erosion**: Automation of routine work degrading human expertise
- **Inconsistency**: Human judgment variability across decision-makers
- **Gaming**: Humans may learn to satisfy metrics rather than make quality decisions
- **Bottlenecks**: Human participation may slow time-sensitive processes
- **Fatigue**: High volume of decisions leading to reduced decision quality

**Best Practices**:
- Design HITL for genuine human control, not compliance theatre
- Provide decision support without dictating human choice
- Implement graduated HITL with intensity matching criticality
- Monitor for automation bias and decision quality degradation
- Maintain human skill through training and practice
- Use AI to support human judgment, not replace it
- Build feedback loops for continuous system improvement
- Ensure organisational incentives support quality HITL decisions
- Document HITL design rationale and effectiveness evidence

## Regulatory and Policy Context

**EU AI Act**: Requires high-risk AI systems to be designed for effective human oversight, with HITL often being most appropriate mechanism

**GDPR Article 22**: Establishes right not to be subject to solely automated decisions with legal or significant effects, implying HITL requirement

**Medical Device Regulation**: Requires physician involvement in AI-assisted medical decisions

**Financial Services**: Regulatory guidance often expects human decision-makers for consequential financial decisions

**Employment Law**: Many jurisdictions restrict fully automated hiring or dismissal decisions

## Related Terms

- **Human Oversight**: Broader category including HITL
- **Human-on-the-Loop**: Related but less intensive oversight pattern
- **AI Operator**: Role frequently exercising HITL oversight
- **Explainability**: Technical capability supporting effective HITL
- **Accountability**: Outcome of clear HITL responsibility
- **Automation Bias**: Psychological challenge to effective HITL
- **Decision Support System**: AI role in HITL contexts
- **AI Governance**: Framework determining HITL requirements
- **Risk Management**: HITL as risk mitigation mechanism


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## References

1. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)*, Article 14 (2021)
2. Holzinger, A., *Interactive Machine Learning for Health Informatics*, Brain Informatics (2016)
3. Mosqueira-Rey, E. et al., *Human-in-the-Loop Machine Learning: A State of the Art* (2022)
4. Green, B. & Chen, Y., *The Principles and Limits of Algorithm-in-the-Loop Decision Making*, ACM CSCW (2019)
5. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*

## See Also

- [[Human Oversight]]
- [[Human-on-the-Loop]]
- [[AI Operator]]
- [[Explainability]]
- [[Accountability]]
- [[Automation Bias]]
- [[AI Governance]]
- [[Risk Management]]
- [[Decision Support]]
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Human-in-the-Loop
		
		  **Term ID**: AI-0097
		  **Category**: Foundational Concept
		  **Ontology**: AI-Grounded Ontology
		  **Last Updated**: 2025-10-27
		
		  ## Definition
		
		  A design pattern and operational approach for artificial intelligence systems in which human judgment, decision-making, or validation is integrated as an essential component of the AI system's decision cycle, requiring active human participation at critical points before AI-generated outputs are finalised or actions are executed, thereby ensuring meaningful human control, accountability, and the application of human values and contextual understanding to consequential AI-assisted decisions.
		
		  ## Context and Significance
		
		  Human-in-the-loop (HITL) represents the most direct form of human oversight, placing humans as active participants rather than passive monitors in AI-driven processes. This approach is particularly critical for high-stakes decisions where errors carry significant consequences, where ethical considerations require human judgment, where legal accountability demands human decision-makers, or where contextual factors exceed AI system capabilities.
		
		  HITL systems embody the principle that certain decisions should never be fully automated, regardless of AI technical capabilities. The EU AI Act explicitly requires HITL for many high-risk AI applications, reflecting the policy judgment that meaningful human control is both an ethical imperative and a practical safeguard. ISO/IEC 42001 recognises HITL as a key mechanism for maintaining accountability and ensuring appropriate human agency in AI-assisted decision-making.
		
		  The effectiveness of HITL depends critically on system design—humans must receive adequate information, possess sufficient time and competence to make informed judgments, maintain practical authority to reject AI recommendations, and avoid automation bias that could render their participation perfunctory.
		
		  ## Key Characteristics
		
		  - **Active participation**: Human actively engaged in each decision instance
		  - **Decision authority**: Human retains final decision-making power
		  - **Information provision**: Relevant data and AI reasoning presented to human
		  - **Meaningful control**: Real ability to alter or reject AI recommendations
		  - **Competence requirement**: Human possesses necessary expertise
		  - **Accountability assignment**: Clear responsibility for final decision
		  - **Documented decisions**: Records maintained of human judgments
		  - **Feedback integration**: Human decisions inform AI system improvement
		
		  ## HITL Implementation Patterns
		
		  ### 1. Verification Pattern
		  - **Process**: AI generates recommendation, human verifies before implementation
		  - **Application**: Medical diagnosis, legal document review, financial fraud investigation
		  - **Advantages**: Catches AI errors before consequences manifest
		  - **Challenges**: Risk of superficial verification, automation bias
		
		  ### 2. Approval Pattern
		  - **Process**: AI identifies options, human selects among alternatives
		  - **Application**: Recruitment candidate shortlisting, content moderation decisions
		  - **Advantages**: Combines AI efficiency with human judgment on sensitive choices
		  - **Challenges**: Quality of AI-presented options shapes human choice space
		
		  ### 3. Collaborative Pattern
		  - **Process**: Human and AI iteratively refine solution together
		  - **Application**: Design tasks, strategic planning, creative work
		  - **Advantages**: Leverages complementary strengths of human and AI
		  - **Challenges**: Complexity of interaction design, potential for misaligned incentives
		
		  ### 4. Exception-Based Pattern
		  - **Process**: AI handles routine cases autonomously, escalates edge cases to human
		  - **Application**: Insurance claims processing, customer service routing
		  - **Advantages**: Efficient resource allocation, focuses human attention on difficult cases
		  - **Challenges**: Defining appropriate escalation criteria, maintaining human skill for rare cases
		
		  ### 5. Annotation/Training Pattern
		  - **Process**: Humans label data, validate outputs, or correct errors to improve AI
		  - **Application**: Training data creation, active learning systems
		  - **Advantages**: Continuous AI improvement, human expertise embedded in system
		  - **Challenges**: Annotator consistency, potential for label bias, resource intensity
		
		  ## Relationships
		
		  - **Type of**: Human Oversight mechanisms
		  - **Required by**: High-risk AI systems, regulated applications
		  - **Contrasts with**: Human-on-the-loop (monitoring vs. active participation)
		  - **Exercised by**: AI Operators, AI Users, domain experts
		  - **Supported by**: Explainability, decision support interfaces
		  - **Enables**: Accountability, error correction, ethical alignment
		  - **Part of**: AI Governance frameworks, operational procedures
		  - **Informed by**: AI Monitoring, performance feedback
		  - **Applied during**: AI Deployment, AI operation phases
		  - **Documented in**: Decision logs, audit trails, approval records
		
		  ## Examples and Applications
		
		  1. **Radiology AI Diagnostic Support**: AI system analyses medical image and highlights suspicious regions with confidence scores, radiologist reviews highlighted areas and original image, radiologist makes final diagnostic determination documented in report, radiologist can request additional views or colleague consultation, system learns from radiologist's diagnoses over time—radiologist remains legally and ethically responsible for diagnosis
		  2. **Autonomous Weapons System**: AI identifies potential targets and presents to military operator with assessment, operator evaluates target legitimacy under rules of engagement and international humanitarian law, operator makes engagement decision with explicit authorization required, system maintains detailed log of operator decisions and justifications—operator maintains responsibility under laws of armed conflict
		  3. **Recruitment Screening**: AI reviews applications and ranks candidates, hiring manager reviews AI rankings alongside full applications, manager selects candidates for interview incorporating AI input and additional contextual factors (team needs, diversity objectives), manager documents selection rationale, hiring decisions tracked for bias analysis—manager accountable for hiring outcomes
		  4. **Content Moderation**: AI flags potentially violating content for human review, trained moderator examines flagged content in context, moderator makes removal decision based on community guidelines, moderator can escalate difficult cases to senior staff, appeals reviewed by different moderators—moderators accountable for content decisions
		
		  ## ISO/IEC Standards Alignment
		
		  **ISO/IEC 42001:2023** (AI Management Systems):
		  - Clause 5.3: Organisational roles including HITL decision-makers
		  - Clause 8.5: Human involvement in operation and monitoring
		  - Clause 9.1: Monitoring of HITL effectiveness
		  - Clause 7.2: Competence requirements for HITL participants
		
		  **ISO/IEC 23894:2023** (AI Risk Management):
		  - HITL as risk mitigation control
		  - Human judgment in risk-critical decision points
		  - Documentation of HITL implementation
		
		  **ISO/IEC 38507:2022** (Governance of IT):
		  - Human oversight principle implementation through HITL
		  - Governance of human-AI decision allocation
		
		  ## NIST AI RMF Integration
		
		  **GOVERN Function**:
		  - Policies defining where HITL is required
		  - Roles and responsibilities for HITL decision-makers
		  - HITL effectiveness monitoring and review
		
		  **MAP Function**:
		  - Context analysis identifying HITL requirements
		  - Impact assessment determining need for HITL
		  - Stakeholder input on HITL design preferences
		
		  **MEASURE Function**:
		  - HITL decision quality and consistency metrics
		  - Human-AI agreement and disagreement analysis
		  - Time and resource requirements for HITL
		
		  **MANAGE Function**:
		  - HITL as primary risk mitigation mechanism
		  - Procedures for HITL implementation and escalation
		  - Continuous improvement based on HITL outcomes
		
		  ## Implementation Considerations
		
		  **Interface Design**:
		  - Present AI reasoning transparently without overwhelming
		  - Highlight uncertainty and areas requiring particular attention
		  - Provide context and comparable cases for informed judgment
		  - Enable human to request additional information or analysis
		  - Document human decision and rationale efficiently
		
		  **Competence and Training**:
		  - Domain expertise for informed judgment
		  - Understanding of AI capabilities and failure modes
		  - Training to avoid automation bias and maintain critical evaluation
		  - Practice maintaining skills despite automation of routine work
		  - Calibration on when to accept vs. question AI recommendations
		
		  **Process Design**:
		  - Allocate sufficient time for meaningful human review
		  - Avoid productivity pressures that incentivise perfunctory approval
		  - Implement quality assurance cheques on human decisions
		  - Maintain feedback loops improving both AI and human performance
		  - Design for sustainable attention and engagement
		
		  **Challenges**:
		  - **Automation bias**: Humans over-relying on AI recommendations
		  - **Workload**: HITL can be resource-intensive at scale
		  - **Skill erosion**: Automation of routine work degrading human expertise
		  - **Inconsistency**: Human judgment variability across decision-makers
		  - **Gaming**: Humans may learn to satisfy metrics rather than make quality decisions
		  - **Bottlenecks**: Human participation may slow time-sensitive processes
		  - **Fatigue**: High volume of decisions leading to reduced decision quality
		
		  **Best Practices**:
		  - Design HITL for genuine human control, not compliance theatre
		  - Provide decision support without dictating human choice
		  - Implement graduated HITL with intensity matching criticality
		  - Monitor for automation bias and decision quality degradation
		  - Maintain human skill through training and practice
		  - Use AI to support human judgment, not replace it
		  - Build feedback loops for continuous system improvement
		  - Ensure organisational incentives support quality HITL decisions
		  - Document HITL design rationale and effectiveness evidence
		
		  ## Regulatory and Policy Context
		
		  **EU AI Act**: Requires high-risk AI systems to be designed for effective human oversight, with HITL often being most appropriate mechanism
		
		  **GDPR Article 22**: Establishes right not to be subject to solely automated decisions with legal or significant effects, implying HITL requirement
		
		  **Medical Device Regulation**: Requires physician involvement in AI-assisted medical decisions
		
		  **Financial Services**: Regulatory guidance often expects human decision-makers for consequential financial decisions
		
		  **Employment Law**: Many jurisdictions restrict fully automated hiring or dismissal decisions
		
		  ## Related Terms
		
		  - **Human Oversight**: Broader category including HITL
		  - **Human-on-the-Loop**: Related but less intensive oversight pattern
		  - **AI Operator**: Role frequently exercising HITL oversight
		  - **Explainability**: Technical capability supporting effective HITL
		  - **Accountability**: Outcome of clear HITL responsibility
		  - **Automation Bias**: Psychological challenge to effective HITL
		  - **Decision Support System**: AI role in HITL contexts
		  - **AI Governance**: Framework determining HITL requirements
		  - **Risk Management**: HITL as risk mitigation mechanism
		
		

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## References
		
		  1. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)*, Article 14 (2021)
		  2. Holzinger, A., *Interactive Machine Learning for Health Informatics*, Brain Informatics (2016)
		  3. Mosqueira-Rey, E. et al., *Human-in-the-Loop Machine Learning: A State of the Art* (2022)
		  4. Green, B. & Chen, Y., *The Principles and Limits of Algorithm-in-the-Loop Decision Making*, ACM CSCW (2019)
		  5. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
		
		  ## See Also
		
		  - [[Human Oversight]]
		  - [[Human-on-the-Loop]]
		  - [[AI Operator]]
		  - [[Explainability]]
		  - [[Accountability]]
		  - [[Automation Bias]]
		  - [[AI Governance]]
		  - [[Risk Management]]
		  - [[Decision Support]]
		
		  ```
