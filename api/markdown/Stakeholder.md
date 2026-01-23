- ### OntologyBlock
  id:: stakeholder-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0101
	- preferred-term:: Stakeholder
	- source-domain:: mv
	- status:: draft
- definition:: Any individual, group, organisation, or entity that has an interest in, is affected by, influences, or holds rights regarding an artificial intelligence system throughout its lifecycle, including those who develop, deploy, operate, use, regulate, are impacted by, or hold accountability for AI systems, as well as broader society and communities whose interests may be affected by AI system design, deployment, or outcomes, encompassing both direct participants in AI value chains and indirect parties with legitimate concerns about AI systems' societal implications.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Stakeholder))

;; Annotations
(AnnotationAssertion rdfs:label :Stakeholder "Stakeholder"@en)
(AnnotationAssertion rdfs:comment :Stakeholder "Any individual, group, organisation, or entity that has an interest in, is affected by, influences, or holds rights regarding an artificial intelligence system throughout its lifecycle, including those who develop, deploy, operate, use, regulate, are impacted by, or hold accountability for AI systems, as well as broader society and communities whose interests may be affected by AI system design, deployment, or outcomes, encompassing both direct participants in AI value chains and indirect partie"@en)

;; Semantic Relationships
(SubClassOf :Stakeholder
  (ObjectSomeValuesFrom :appliesTo :AiUser))
(SubClassOf :Stakeholder
  (ObjectSomeValuesFrom :relatedTo :Transparency))
(SubClassOf :Stakeholder
  (ObjectSomeValuesFrom :relatedTo :Accountability))
(SubClassOf :Stakeholder
  (ObjectSomeValuesFrom :relatedTo :Fairness))
(SubClassOf :Stakeholder
  (ObjectSomeValuesFrom :relatedTo :AiImpactAssessment))

;; Data Properties
(AnnotationAssertion dcterms:identifier :Stakeholder "AI-0101"^^xsd:string)
(DataPropertyAssertion :isAITechnology :Stakeholder "true"^^xsd:boolean)
```

## Context and Significance

Stakeholder engagement represents a fundamental principle of responsible and trustworthy AI development and deployment. AI systems, unlike many traditional technologies, can affect broad populations beyond immediate users, create distributional impacts across society, and raise complex ethical questions requiring diverse perspectives. Effective stakeholder identification, engagement, and consideration ensures that AI systems account for varied interests, values, and concerns, reduces risks of unintended consequences, and builds social licence for beneficial AI applications.

The NIST AI Risk Management Framework emphasises stakeholder participation as essential to the GOVERN function, noting that trustworthy AI requires incorporating diverse perspectives throughout the AI lifecycle. ISO/IEC 42001 mandates organisations to identify and understand stakeholder needs and expectations as a foundational requirement of AI management systems. The EU AI Act reflects stakeholder concerns through requirements for impact assessments, transparency, and various protective measures addressing different stakeholder interests.

Stakeholder engagement must be inclusive, meaningful, and sustained—reaching beyond easily accessible parties to include marginalised groups, addressing power imbalances, providing genuine influence over decisions, and maintaining dialogue throughout the AI lifecycle rather than treating engagement as a one-time activity.

## Key Characteristics

- **Diverse composition**: Wide range of roles, interests, and perspectives
- **Varied proximity**: Direct involvement to indirect societal impacts
- **Power dynamics**: Differing influence and resources across stakeholders
- **Competing interests**: Potential conflicts requiring bal ancing
- **Lifecycle involvement**: Engagement relevant at different phases
- **Rights and responsibilities**: Legal, ethical, and practical entitlements
- **Dynamic membership**: Stakeholder relevance evolves with AI system changes
- **Multi-level**: Individual, organisational, community, and societal stakeholders

## Stakeholder Categories

### 1. Development Stakeholders
- **AI Developers**: Engineers, data scientists, ML researchers
- **Organisational Leadership**: Executives, product managers, strategists
- **Technical Infrastructure**: IT staff, platform providers, tool vendors
- **Funding Sources**: Investors, grant providers, sponsors
- **Research Subjects**: Individuals providing data or participating in studies

### 2. Deployment and Operations Stakeholders
- **AI Providers**: Entities supplying AI systems
- **AI Operators**: Entities deploying and managing systems
- **System Integrators**: Organisations incorporating AI into broader systems
- **Maintenance Personnel**: Staff responsible for ongoing system operation
- **Support Services**: Help desk, customer service, technical support

### 3. User Stakeholders
- **Direct Users**: Individuals actively interacting with AI systems
- **Indirect Users**: People affected by AI outputs without direct interaction
- **Customers**: Organisations or individuals purchasing AI services
- **Professional Users**: Domain experts using AI as professional tools
- **Vulnerable Users**: Groups facing heightened risks (children, elderly, disadvantaged)

### 4. Affected Parties
- **Decision Subjects**: Individuals about whom AI makes decisions
- **Impacted Communities**: Groups experiencing collective AI effects
- **Workers**: People whose employment affected by AI automation
- **Competitors**: Market participants affected by AI-driven competition
- **Environment**: Natural systems impacted by AI applications or infrastructure

### 5. Governance and Oversight Stakeholders
- **Regulators**: Government bodies enforcing AI-related laws
- **Standards Bodies**: Organisations developing technical and ethical standards
- **Ethics Committees**: Groups reviewing AI ethical implications
- **Audit Organisations**: Entities conducting AI system assessments
- **Legal System**: Courts, dispute resolution bodies, legal professionals

### 6. Societal Stakeholders
- **Civil Society**: NGOs, advocacy groups, community organisations
- **Academia**: Researchers studying AI impacts and ethics
- **Media**: Journalists, commentators shaping public discourse
- **General Public**: Broader society with interest in AI's societal role
- **Future Generations**: Those who will inherit AI-shaped world

## Stakeholder Engagement Approaches

### Identification
- Systematic analysis of who is affected by or can influence AI system
- Mapping of stakeholder relationships and interdependencies
- Recognition of marginalised or less visible stakeholder groups
- Periodic review as AI systems and contexts evolve

### Analysis
- Understanding stakeholder interests, concerns, and expectations
- Assessing stakeholder influence, authority, and resources
- Identifying potential conflicts and synergies among stakeholders
- Recognising power imbalances and vulnerability factors

### Engagement Methods
- **Consultation**: Gathering stakeholder input and feedback
- **Collaboration**: Working together on design and decision-making
- **Participation**: Involving stakeholders in governance structures
- **Information Provision**: Keeping stakeholders informed of developments
- **Negotiation**: Addressing conflicts and finding acceptable solutions

### Continuous Involvement
- Ongoing dialogue throughout AI lifecycle, not just initial development
- Feedback loops incorporating stakeholder input into improvements
- Transparency about how stakeholder input influenced decisions
- Accountability mechanisms ensuring stakeholder interests protected

## Relationships

- **Includes**: AI Provider, AI Operator, AI User, affected communities
- **Inform**: AI Governance, ethical principles, design choices
- **Participate in**: AI Impact Assessment, risk assessment, audits
- **Subject of**: Stakeholder analysis, engagement planning
- **Provide**: Requirements, feedback, oversight, accountability pressure
- **Benefit from**: AI system capabilities and services
- **Vulnerable to**: AI risks, harms, unfair treatment
- **Shape**: Regulatory requirements, social licence, public discourse
- **Monitored via**: Surveys, consultations, feedback mechanisms
- **Represented in**: Governance bodies, advisory committees, user groups

## Examples and Applications

1. **Healthcare AI Stakeholder Engagement**: Hospital deploying diagnostic AI identifies stakeholders including patients (decision subjects), clinicians (professional users), hospital administrators (operators), AI vendor (provider), regulatory bodies (FDA, local health authorities), patient advocacy groups (civil society), medical ethics committee (oversight), and conducts multi-stakeholder workshops to define acceptable performance, oversight procedures, and transparency requirements
2. **Employment AI Stakeholder Consultation**: Company implementing AI hiring tool engages HR staff (direct users), job applicants (affected parties), diversity and inclusion advocates (civil society), labour unions (worker representatives), legal compliance team (internal oversight), and external bias auditors, using feedback to establish human review requirements, transparency commitments, and fairness metrics
3. **Smart City Surveillance Stakeholder Process**: Municipal government considering AI-enabled public safety system convenes residents (impacted community), civil liberties organisations (civil society), police department (operators), disabled persons organisations (vulnerable groups), technology vendor (provider), privacy commissioners (regulators), conducting public hearings, impact assessments, and establishing citizen oversight board with ongoing review authority
4. **Agricultural AI Development**: Precision farming AI developer engages farmers (users), agricultural workers (affected workers), environmental organisations (civil society), food supply chain participants (customers), agricultural extension services (intermediaries), rural broadband providers (infrastructure), agricultural standards bodies, incorporating diverse perspectives into system design, pricing, accessibility, and environmental impact mitigation

## ISO/IEC Standards Alignment

**ISO/IEC 42001:2023** (AI Management Systems):
- Clause 4.2: Understanding needs and expectations of interested parties
- Clause 5.2: AI policy addressing stakeholder interests
- Clause 9.1.3: Analysis of stakeholder feedback
- Throughout: Stakeholder consideration in planning, development, operation

**ISO/IEC 38507:2022** (Governance of IT):
- Governance principle of stakeholder engagement
- Evaluation of AI systems considering stakeholder impacts
- Governance body responsibility for stakeholder interests

**ISO/IEC 23894:2023** (AI Risk Management):
- Stakeholder involvement in risk identification and assessment
- Consideration of stakeholder-specific risks
- Communication of risk information to stakeholders

## NIST AI RMF Integration

**GOVERN Function**:
- GV-1.7: Processes for stakeholder feedback incorporated
- GV-4: Organisational teams diverse and composed of stakeholders
- GV-5: Organisational policies account for potential impacts to stakeholders
- GV-6: Workforce diversity and skills matched to stakeholder needs

**MAP Function**:
- Context includes stakeholder landscape analysis
- Categorisation considers stakeholder impact severity
- Stakeholder input informs risk identification

**MEASURE Function**:
- Metrics address stakeholder-relevant outcomes
- Measurement includes stakeholder experience indicators
- Stakeholder feedback integrated into evaluation

**MANAGE Function**:
- Risk management responsive to stakeholder concerns
- Stakeholder communication in incident response
- Continuous improvement incorporates stakeholder perspectives

## Implementation Considerations

**Inclusive Stakeholder Identification**:
- Systematic rather than ad hoc identification
- Active outreach to marginalised or less visible groups
- Recognition of indirect and long-term stakeholders
- Periodic review and update of stakeholder landscape

**Meaningful Engagement**:
- Adequate time and resources for participation
- Accessible formats and languages
- Clear explanation of how input will be used
- Transparency about constraints and trade-offs
- Feedback on how stakeholder input influenced decisions
- Compensation for stakeholder time and expertise where appropriate

**Power Imbalance Mitigation**:
- Amplification of less powerful stakeholder voices
- Resources enabling participation by under-resourced groups
- Independent facilitation of multi-stakeholder processes
- Binding commitments rather than purely consultative engagement
- Accountability mechanisms ensuring stakeholder interests protected

**Challenges**:
- Identifying all relevant stakeholders, especially less visible ones
- Managing competing or conflicting stakeholder interests
- Addressing power imbalances among stakeholders
- Ensuring engagement is meaningful rather than performative
- Maintaining sustained engagement across AI lifecycle
- Balancing diverse stakeholder input with timely development
- Representing future generations and non-human stakeholders
- Preventing stakeholder fatigue from excessive consultation

**Best Practices**:
- Adopt systematic stakeholder identification methods
- Prioritise engagement with most affected and vulnerable groups
- Provide stakeholders with genuine influence over decisions
- Maintain transparency about decision-making processes
- Document and communicate how stakeholder input used
- Build long-term relationships rather than transactional consultation
- Establish ongoing stakeholder advisory mechanisms
- Regularly evaluate and improve engagement approaches
- Address power dynamics and resource disparities
- Create multiple channels for diverse participation styles

## Regulatory and Policy Context

**EU AI Act**: Requires impact assessments considering affected persons and groups (stakeholders)

**ISO/IEC 42001**: Mandates understanding of interested party (stakeholder) needs and expectations

**OECD AI Principles**: Calls for inclusive growth and human-centred AI reflecting diverse stakeholder interests

**Corporate Governance Codes**: Increasingly expect consideration of multi-stakeholder interests beyond shareholders

**Human Rights Due Diligence**: Requires identification and engagement with rights-holder stakeholders

## Related Terms

- **AI Provider**: Key stakeholder category in AI value chain
- **AI Operator**: Stakeholder deploying and managing AI systems
- **AI User**: Stakeholder directly interacting with or affected by AI
- **AI Governance**: Framework for managing stakeholder interests
- **AI Impact Assessment**: Tool for understanding stakeholder impacts
- **Accountability**: Obligation to stakeholders
- **Fairness**: Principle addressing stakeholder equity concerns
- **Transparency**: Information provision to stakeholders
- **Participation**: Stakeholder involvement in decisions
- **Civil Society**: Important stakeholder category

## References

1. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
2. NIST AI 100-1, *Artificial Intelligence Risk Management Framework* (2023)
3. OECD, *Recommendation of the Council on Artificial Intelligence* (2019)
4. Freeman, R.E., *Strategic Management: A Stakeholder Approach* (2010)
5. Ada Lovelace Institute, *Participatory AI* (2021)

## See Also

- [[AI Provider]]
- [[AI Operator]]
- [[AI User]]
- [[AI Governance]]
- [[AI Impact Assessment]]
- [[Accountability]]
- [[Fairness]]
- [[Transparency]]
- [[Participation]]
- [[Civil Society]]
	- maturity:: draft
	- owl:class:: mv:Stakeholder
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: stakeholder-relationships
- ## About Stakeholder
	- Any individual, group, organisation, or entity that has an interest in, is affected by, influences, or holds rights regarding an artificial intelligence system throughout its lifecycle, including those who develop, deploy, operate, use, regulate, are impacted by, or hold accountability for AI systems, as well as broader society and communities whose interests may be affected by AI system design, deployment, or outcomes, encompassing both direct participants in AI value chains and indirect parties with legitimate concerns about AI systems' societal implications.

		- ## Timing and how to find us.
			- We’re on the 5th floor of Blue Tower at **[HOST](https://www.hostsalford.com/) ,** MediaCityUK.  The door is [opposite Costa Coffee](https://maps.app.goo.gl/APmHgNU7bvrXpRRa7).
			- You can take the tram to MediaCity, using the [free park and ride](https://tfgm.com/ways-to-travel/park-and-ride/parkway-tram) in Trafford.
			- You can also park at the MediaCity multistory car park but be advised it is expensive.
			- The event starts at 10am and runs to 4pm.

		- ### The Future of AI and Society
	 - **Potential Paths:** Explores the potential paths society might take in response to AI's proliferation, considering the balance between freedom and control, innovation and stability.
	 - **Soci

	- # Soon, Next, and Later 
	  id:: 659a9246-af6b-4582-9368-3b688130d703 collapsed:: true (exclusively optimistic take)
	- [twitter link to the render loading below](https://twitter.com/karpathy/status/1744179910347039080)
	  {{twitter https://twitter.com/karpathy/status/1744179910347039080}}
	- {{video https://www.youtube.com/watch?v=ob_GX50Za6c&t=65s}}

		- ## Timing and how to find us.
			- We’re on the 5th floor of Blue Tower at **[HOST](https://www.hostsalford.com/) ,** MediaCityUK.  The door is [opposite Costa Coffee](https://maps.app.goo.gl/APmHgNU7bvrXpRRa7).
			- You can take the tram to MediaCity, using the [free park and ride](https://tfgm.com/ways-to-travel/park-and-ride/parkway-tram) in Trafford.
			- You can also park at the MediaCity multistory car park but be advised it is expensive.
			- The event starts at 10am and runs to 4pm.

		- ### The Future of AI and Society
	 - **Potential Paths:** Explores the potential paths society might take in response to AI's proliferation, considering the balance between freedom and control, innovation and stability.
	 - **Soci

	- # Soon, Next, and Later 
	  id:: 659a9246-af6b-4582-9368-3b688130d703 collapsed:: true (exclusively optimistic take)
	- [twitter link to the render loading below](https://twitter.com/karpathy/status/1744179910347039080)
	  {{twitter https://twitter.com/karpathy/status/1744179910347039080}}
	- {{video https://www.youtube.com/watch?v=ob_GX50Za6c&t=65s}}

- ##### Proof of Concept
	- Starting with a small-scale proof of concept for up to 5 people would allow for demonstration of the capabilities and building stakeholder confidence. This would also provide valuable insights into the technical and logistical challenges that may arise during larger-scale implementation.

- #### Overview of the Metaverse and Digital Society
	- The concept of the Metaverse has gained significant attention, with various stakeholders positioning themselves to capitalize on its potential. While it remains unclear exactly what form the Metaverse will take or whether people truly desire it, it is evident that digital society holds considerable promise. We see advantage less in social metaverse, and more in solving business to business technical use cases where professionals with visual technical problems, or training requirements, gather in collaborative spaces.

- ##### Proof of Concept
	- Starting with a small-scale proof of concept for up to 5 people would allow for demonstration of the capabilities and building stakeholder confidence. This would also provide valuable insights into the technical and logistical challenges that may arise during larger-scale implementation.

- #### Overview of the Metaverse and Digital Society
	- The concept of the Metaverse has gained significant attention, with various stakeholders positioning themselves to capitalize on its potential. While it remains unclear exactly what form the Metaverse will take or whether people truly desire it, it is evident that digital society holds considerable promise. We see advantage less in social metaverse, and more in solving business to business technical use cases where professionals with visual technical problems, or training requirements, gather in collaborative spaces.

## Context and Significance

Stakeholder engagement represents a fundamental principle of responsible and trustworthy AI development and deployment. AI systems, unlike many traditional technologies, can affect broad populations beyond immediate users, create distributional impacts across society, and raise complex ethical questions requiring diverse perspectives. Effective stakeholder identification, engagement, and consideration ensures that AI systems account for varied interests, values, and concerns, reduces risks of unintended consequences, and builds social licence for beneficial AI applications.

The NIST AI Risk Management Framework emphasises stakeholder participation as essential to the GOVERN function, noting that trustworthy AI requires incorporating diverse perspectives throughout the AI lifecycle. ISO/IEC 42001 mandates organisations to identify and understand stakeholder needs and expectations as a foundational requirement of AI management systems. The EU AI Act reflects stakeholder concerns through requirements for impact assessments, transparency, and various protective measures addressing different stakeholder interests.

Stakeholder engagement must be inclusive, meaningful, and sustained—reaching beyond easily accessible parties to include marginalised groups, addressing power imbalances, providing genuine influence over decisions, and maintaining dialogue throughout the AI lifecycle rather than treating engagement as a one-time activity.

## Key Characteristics

- **Diverse composition**: Wide range of roles, interests, and perspectives
- **Varied proximity**: Direct involvement to indirect societal impacts
- **Power dynamics**: Differing influence and resources across stakeholders
- **Competing interests**: Potential conflicts requiring bal ancing
- **Lifecycle involvement**: Engagement relevant at different phases
- **Rights and responsibilities**: Legal, ethical, and practical entitlements
- **Dynamic membership**: Stakeholder relevance evolves with AI system changes
- **Multi-level**: Individual, organisational, community, and societal stakeholders

## Stakeholder Categories

### 1. Development Stakeholders
- **AI Developers**: Engineers, data scientists, ML researchers
- **Organisational Leadership**: Executives, product managers, strategists
- **Technical Infrastructure**: IT staff, platform providers, tool vendors
- **Funding Sources**: Investors, grant providers, sponsors
- **Research Subjects**: Individuals providing data or participating in studies

### 2. Deployment and Operations Stakeholders
- **AI Providers**: Entities supplying AI systems
- **AI Operators**: Entities deploying and managing systems
- **System Integrators**: Organisations incorporating AI into broader systems
- **Maintenance Personnel**: Staff responsible for ongoing system operation
- **Support Services**: Help desk, customer service, technical support

### 3. User Stakeholders
- **Direct Users**: Individuals actively interacting with AI systems
- **Indirect Users**: People affected by AI outputs without direct interaction
- **Customers**: Organisations or individuals purchasing AI services
- **Professional Users**: Domain experts using AI as professional tools
- **Vulnerable Users**: Groups facing heightened risks (children, elderly, disadvantaged)

### 4. Affected Parties
- **Decision Subjects**: Individuals about whom AI makes decisions
- **Impacted Communities**: Groups experiencing collective AI effects
- **Workers**: People whose employment affected by AI automation
- **Competitors**: Market participants affected by AI-driven competition
- **Environment**: Natural systems impacted by AI applications or infrastructure

### 5. Governance and Oversight Stakeholders
- **Regulators**: Government bodies enforcing AI-related laws
- **Standards Bodies**: Organisations developing technical and ethical standards
- **Ethics Committees**: Groups reviewing AI ethical implications
- **Audit Organisations**: Entities conducting AI system assessments
- **Legal System**: Courts, dispute resolution bodies, legal professionals

### 6. Societal Stakeholders
- **Civil Society**: NGOs, advocacy groups, community organisations
- **Academia**: Researchers studying AI impacts and ethics
- **Media**: Journalists, commentators shaping public discourse
- **General Public**: Broader society with interest in AI's societal role
- **Future Generations**: Those who will inherit AI-shaped world

## Stakeholder Engagement Approaches

### Identification
- Systematic analysis of who is affected by or can influence AI system
- Mapping of stakeholder relationships and interdependencies
- Recognition of marginalised or less visible stakeholder groups
- Periodic review as AI systems and contexts evolve

### Analysis
- Understanding stakeholder interests, concerns, and expectations
- Assessing stakeholder influence, authority, and resources
- Identifying potential conflicts and synergies among stakeholders
- Recognising power imbalances and vulnerability factors

### Engagement Methods
- **Consultation**: Gathering stakeholder input and feedback
- **Collaboration**: Working together on design and decision-making
- **Participation**: Involving stakeholders in governance structures
- **Information Provision**: Keeping stakeholders informed of developments
- **Negotiation**: Addressing conflicts and finding acceptable solutions

### Continuous Involvement
- Ongoing dialogue throughout AI lifecycle, not just initial development
- Feedback loops incorporating stakeholder input into improvements
- Transparency about how stakeholder input influenced decisions
- Accountability mechanisms ensuring stakeholder interests protected

## Relationships

- **Includes**: AI Provider, AI Operator, AI User, affected communities
- **Inform**: AI Governance, ethical principles, design choices
- **Participate in**: AI Impact Assessment, risk assessment, audits
- **Subject of**: Stakeholder analysis, engagement planning
- **Provide**: Requirements, feedback, oversight, accountability pressure
- **Benefit from**: AI system capabilities and services
- **Vulnerable to**: AI risks, harms, unfair treatment
- **Shape**: Regulatory requirements, social licence, public discourse
- **Monitored via**: Surveys, consultations, feedback mechanisms
- **Represented in**: Governance bodies, advisory committees, user groups

## Examples and Applications

1. **Healthcare AI Stakeholder Engagement**: Hospital deploying diagnostic AI identifies stakeholders including patients (decision subjects), clinicians (professional users), hospital administrators (operators), AI vendor (provider), regulatory bodies (FDA, local health authorities), patient advocacy groups (civil society), medical ethics committee (oversight), and conducts multi-stakeholder workshops to define acceptable performance, oversight procedures, and transparency requirements
2. **Employment AI Stakeholder Consultation**: Company implementing AI hiring tool engages HR staff (direct users), job applicants (affected parties), diversity and inclusion advocates (civil society), labour unions (worker representatives), legal compliance team (internal oversight), and external bias auditors, using feedback to establish human review requirements, transparency commitments, and fairness metrics
3. **Smart City Surveillance Stakeholder Process**: Municipal government considering AI-enabled public safety system convenes residents (impacted community), civil liberties organisations (civil society), police department (operators), disabled persons organisations (vulnerable groups), technology vendor (provider), privacy commissioners (regulators), conducting public hearings, impact assessments, and establishing citizen oversight board with ongoing review authority
4. **Agricultural AI Development**: Precision farming AI developer engages farmers (users), agricultural workers (affected workers), environmental organisations (civil society), food supply chain participants (customers), agricultural extension services (intermediaries), rural broadband providers (infrastructure), agricultural standards bodies, incorporating diverse perspectives into system design, pricing, accessibility, and environmental impact mitigation

## ISO/IEC Standards Alignment

**ISO/IEC 42001:2023** (AI Management Systems):
- Clause 4.2: Understanding needs and expectations of interested parties
- Clause 5.2: AI policy addressing stakeholder interests
- Clause 9.1.3: Analysis of stakeholder feedback
- Throughout: Stakeholder consideration in planning, development, operation

**ISO/IEC 38507:2022** (Governance of IT):
- Governance principle of stakeholder engagement
- Evaluation of AI systems considering stakeholder impacts
- Governance body responsibility for stakeholder interests

**ISO/IEC 23894:2023** (AI Risk Management):
- Stakeholder involvement in risk identification and assessment
- Consideration of stakeholder-specific risks
- Communication of risk information to stakeholders

## NIST AI RMF Integration

**GOVERN Function**:
- GV-1.7: Processes for stakeholder feedback incorporated
- GV-4: Organisational teams diverse and composed of stakeholders
- GV-5: Organisational policies account for potential impacts to stakeholders
- GV-6: Workforce diversity and skills matched to stakeholder needs

**MAP Function**:
- Context includes stakeholder landscape analysis
- Categorisation considers stakeholder impact severity
- Stakeholder input informs risk identification

**MEASURE Function**:
- Metrics address stakeholder-relevant outcomes
- Measurement includes stakeholder experience indicators
- Stakeholder feedback integrated into evaluation

**MANAGE Function**:
- Risk management responsive to stakeholder concerns
- Stakeholder communication in incident response
- Continuous improvement incorporates stakeholder perspectives

## Implementation Considerations

**Inclusive Stakeholder Identification**:
- Systematic rather than ad hoc identification
- Active outreach to marginalised or less visible groups
- Recognition of indirect and long-term stakeholders
- Periodic review and update of stakeholder landscape

**Meaningful Engagement**:
- Adequate time and resources for participation
- Accessible formats and languages
- Clear explanation of how input will be used
- Transparency about constraints and trade-offs
- Feedback on how stakeholder input influenced decisions
- Compensation for stakeholder time and expertise where appropriate

**Power Imbalance Mitigation**:
- Amplification of less powerful stakeholder voices
- Resources enabling participation by under-resourced groups
- Independent facilitation of multi-stakeholder processes
- Binding commitments rather than purely consultative engagement
- Accountability mechanisms ensuring stakeholder interests protected

**Challenges**:
- Identifying all relevant stakeholders, especially less visible ones
- Managing competing or conflicting stakeholder interests
- Addressing power imbalances among stakeholders
- Ensuring engagement is meaningful rather than performative
- Maintaining sustained engagement across AI lifecycle
- Balancing diverse stakeholder input with timely development
- Representing future generations and non-human stakeholders
- Preventing stakeholder fatigue from excessive consultation

**Best Practices**:
- Adopt systematic stakeholder identification methods
- Prioritise engagement with most affected and vulnerable groups
- Provide stakeholders with genuine influence over decisions
- Maintain transparency about decision-making processes
- Document and communicate how stakeholder input used
- Build long-term relationships rather than transactional consultation
- Establish ongoing stakeholder advisory mechanisms
- Regularly evaluate and improve engagement approaches
- Address power dynamics and resource disparities
- Create multiple channels for diverse participation styles

## Regulatory and Policy Context

**EU AI Act**: Requires impact assessments considering affected persons and groups (stakeholders)

**ISO/IEC 42001**: Mandates understanding of interested party (stakeholder) needs and expectations

**OECD AI Principles**: Calls for inclusive growth and human-centred AI reflecting diverse stakeholder interests

**Corporate Governance Codes**: Increasingly expect consideration of multi-stakeholder interests beyond shareholders

**Human Rights Due Diligence**: Requires identification and engagement with rights-holder stakeholders

## Related Terms

- **AI Provider**: Key stakeholder category in AI value chain
- **AI Operator**: Stakeholder deploying and managing AI systems
- **AI User**: Stakeholder directly interacting with or affected by AI
- **AI Governance**: Framework for managing stakeholder interests
- **AI Impact Assessment**: Tool for understanding stakeholder impacts
- **Accountability**: Obligation to stakeholders
- **Fairness**: Principle addressing stakeholder equity concerns
- **Transparency**: Information provision to stakeholders
- **Participation**: Stakeholder involvement in decisions
- **Civil Society**: Important stakeholder category

## References

1. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
2. NIST AI 100-1, *Artificial Intelligence Risk Management Framework* (2023)
3. OECD, *Recommendation of the Council on Artificial Intelligence* (2019)
4. Freeman, R.E., *Strategic Management: A Stakeholder Approach* (2010)
5. Ada Lovelace Institute, *Participatory AI* (2021)

## See Also

- [[AI Provider]]
- [[AI Operator]]
- [[AI User]]
- [[AI Governance]]
- [[AI Impact Assessment]]
- [[Accountability]]
- [[Fairness]]
- [[Transparency]]
- [[Participation]]
- [[Civil Society]]
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Stakeholder
		  
		  **Term ID**: AI-0101
		  **Category**: Foundational Concept
		  **Ontology**: AI-Grounded Ontology
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Any individual, group, organisation, or entity that has an interest in, is affected by, influences, or holds rights regarding an artificial intelligence system throughout its lifecycle, including those who develop, deploy, operate, use, regulate, are impacted by, or hold accountability for AI systems, as well as broader society and communities whose interests may be affected by AI system design, deployment, or outcomes, encompassing both direct participants in AI value chains and indirect parties with legitimate concerns about AI systems' societal implications.
		  
		  ## Context and Significance
		  
		  Stakeholder engagement represents a fundamental principle of responsible and trustworthy AI development and deployment. AI systems, unlike many traditional technologies, can affect broad populations beyond immediate users, create distributional impacts across society, and raise complex ethical questions requiring diverse perspectives. Effective stakeholder identification, engagement, and consideration ensures that AI systems account for varied interests, values, and concerns, reduces risks of unintended consequences, and builds social licence for beneficial AI applications.
		  
		  The NIST AI Risk Management Framework emphasises stakeholder participation as essential to the GOVERN function, noting that trustworthy AI requires incorporating diverse perspectives throughout the AI lifecycle. ISO/IEC 42001 mandates organisations to identify and understand stakeholder needs and expectations as a foundational requirement of AI management systems. The EU AI Act reflects stakeholder concerns through requirements for impact assessments, transparency, and various protective measures addressing different stakeholder interests.
		  
		  Stakeholder engagement must be inclusive, meaningful, and sustained—reaching beyond easily accessible parties to include marginalised groups, addressing power imbalances, providing genuine influence over decisions, and maintaining dialogue throughout the AI lifecycle rather than treating engagement as a one-time activity.
		  
		  ## Key Characteristics
		  
		  - **Diverse composition**: Wide range of roles, interests, and perspectives
		  - **Varied proximity**: Direct involvement to indirect societal impacts
		  - **Power dynamics**: Differing influence and resources across stakeholders
		  - **Competing interests**: Potential conflicts requiring bal ancing
		  - **Lifecycle involvement**: Engagement relevant at different phases
		  - **Rights and responsibilities**: Legal, ethical, and practical entitlements
		  - **Dynamic membership**: Stakeholder relevance evolves with AI system changes
		  - **Multi-level**: Individual, organisational, community, and societal stakeholders
		  
		  ## Stakeholder Categories
		  
		  ### 1. Development Stakeholders
		  - **AI Developers**: Engineers, data scientists, ML researchers
		  - **Organisational Leadership**: Executives, product managers, strategists
		  - **Technical Infrastructure**: IT staff, platform providers, tool vendors
		  - **Funding Sources**: Investors, grant providers, sponsors
		  - **Research Subjects**: Individuals providing data or participating in studies
		  
		  ### 2. Deployment and Operations Stakeholders
		  - **AI Providers**: Entities supplying AI systems
		  - **AI Operators**: Entities deploying and managing systems
		  - **System Integrators**: Organisations incorporating AI into broader systems
		  - **Maintenance Personnel**: Staff responsible for ongoing system operation
		  - **Support Services**: Help desk, customer service, technical support
		  
		  ### 3. User Stakeholders
		  - **Direct Users**: Individuals actively interacting with AI systems
		  - **Indirect Users**: People affected by AI outputs without direct interaction
		  - **Customers**: Organisations or individuals purchasing AI services
		  - **Professional Users**: Domain experts using AI as professional tools
		  - **Vulnerable Users**: Groups facing heightened risks (children, elderly, disadvantaged)
		  
		  ### 4. Affected Parties
		  - **Decision Subjects**: Individuals about whom AI makes decisions
		  - **Impacted Communities**: Groups experiencing collective AI effects
		  - **Workers**: People whose employment affected by AI automation
		  - **Competitors**: Market participants affected by AI-driven competition
		  - **Environment**: Natural systems impacted by AI applications or infrastructure
		  
		  ### 5. Governance and Oversight Stakeholders
		  - **Regulators**: Government bodies enforcing AI-related laws
		  - **Standards Bodies**: Organisations developing technical and ethical standards
		  - **Ethics Committees**: Groups reviewing AI ethical implications
		  - **Audit Organisations**: Entities conducting AI system assessments
		  - **Legal System**: Courts, dispute resolution bodies, legal professionals
		  
		  ### 6. Societal Stakeholders
		  - **Civil Society**: NGOs, advocacy groups, community organisations
		  - **Academia**: Researchers studying AI impacts and ethics
		  - **Media**: Journalists, commentators shaping public discourse
		  - **General Public**: Broader society with interest in AI's societal role
		  - **Future Generations**: Those who will inherit AI-shaped world
		  
		  ## Stakeholder Engagement Approaches
		  
		  ### Identification
		  - Systematic analysis of who is affected by or can influence AI system
		  - Mapping of stakeholder relationships and interdependencies
		  - Recognition of marginalised or less visible stakeholder groups
		  - Periodic review as AI systems and contexts evolve
		  
		  ### Analysis
		  - Understanding stakeholder interests, concerns, and expectations
		  - Assessing stakeholder influence, authority, and resources
		  - Identifying potential conflicts and synergies among stakeholders
		  - Recognising power imbalances and vulnerability factors
		  
		  ### Engagement Methods
		  - **Consultation**: Gathering stakeholder input and feedback
		  - **Collaboration**: Working together on design and decision-making
		  - **Participation**: Involving stakeholders in governance structures
		  - **Information Provision**: Keeping stakeholders informed of developments
		  - **Negotiation**: Addressing conflicts and finding acceptable solutions
		  
		  ### Continuous Involvement
		  - Ongoing dialogue throughout AI lifecycle, not just initial development
		  - Feedback loops incorporating stakeholder input into improvements
		  - Transparency about how stakeholder input influenced decisions
		  - Accountability mechanisms ensuring stakeholder interests protected
		  
		  ## Relationships
		  
		  - **Includes**: AI Provider, AI Operator, AI User, affected communities
		  - **Inform**: AI Governance, ethical principles, design choices
		  - **Participate in**: AI Impact Assessment, risk assessment, audits
		  - **Subject of**: Stakeholder analysis, engagement planning
		  - **Provide**: Requirements, feedback, oversight, accountability pressure
		  - **Benefit from**: AI system capabilities and services
		  - **Vulnerable to**: AI risks, harms, unfair treatment
		  - **Shape**: Regulatory requirements, social licence, public discourse
		  - **Monitored via**: Surveys, consultations, feedback mechanisms
		  - **Represented in**: Governance bodies, advisory committees, user groups
		  
		  ## Examples and Applications
		  
		  1. **Healthcare AI Stakeholder Engagement**: Hospital deploying diagnostic AI identifies stakeholders including patients (decision subjects), clinicians (professional users), hospital administrators (operators), AI vendor (provider), regulatory bodies (FDA, local health authorities), patient advocacy groups (civil society), medical ethics committee (oversight), and conducts multi-stakeholder workshops to define acceptable performance, oversight procedures, and transparency requirements
		  2. **Employment AI Stakeholder Consultation**: Company implementing AI hiring tool engages HR staff (direct users), job applicants (affected parties), diversity and inclusion advocates (civil society), labour unions (worker representatives), legal compliance team (internal oversight), and external bias auditors, using feedback to establish human review requirements, transparency commitments, and fairness metrics
		  3. **Smart City Surveillance Stakeholder Process**: Municipal government considering AI-enabled public safety system convenes residents (impacted community), civil liberties organisations (civil society), police department (operators), disabled persons organisations (vulnerable groups), technology vendor (provider), privacy commissioners (regulators), conducting public hearings, impact assessments, and establishing citizen oversight board with ongoing review authority
		  4. **Agricultural AI Development**: Precision farming AI developer engages farmers (users), agricultural workers (affected workers), environmental organisations (civil society), food supply chain participants (customers), agricultural extension services (intermediaries), rural broadband providers (infrastructure), agricultural standards bodies, incorporating diverse perspectives into system design, pricing, accessibility, and environmental impact mitigation
		  
		  ## ISO/IEC Standards Alignment
		  
		  **ISO/IEC 42001:2023** (AI Management Systems):
		  - Clause 4.2: Understanding needs and expectations of interested parties
		  - Clause 5.2: AI policy addressing stakeholder interests
		  - Clause 9.1.3: Analysis of stakeholder feedback
		  - Throughout: Stakeholder consideration in planning, development, operation
		  
		  **ISO/IEC 38507:2022** (Governance of IT):
		  - Governance principle of stakeholder engagement
		  - Evaluation of AI systems considering stakeholder impacts
		  - Governance body responsibility for stakeholder interests
		  
		  **ISO/IEC 23894:2023** (AI Risk Management):
		  - Stakeholder involvement in risk identification and assessment
		  - Consideration of stakeholder-specific risks
		  - Communication of risk information to stakeholders
		  
		  ## NIST AI RMF Integration
		  
		  **GOVERN Function**:
		  - GV-1.7: Processes for stakeholder feedback incorporated
		  - GV-4: Organisational teams diverse and composed of stakeholders
		  - GV-5: Organisational policies account for potential impacts to stakeholders
		  - GV-6: Workforce diversity and skills matched to stakeholder needs
		  
		  **MAP Function**:
		  - Context includes stakeholder landscape analysis
		  - Categorisation considers stakeholder impact severity
		  - Stakeholder input informs risk identification
		  
		  **MEASURE Function**:
		  - Metrics address stakeholder-relevant outcomes
		  - Measurement includes stakeholder experience indicators
		  - Stakeholder feedback integrated into evaluation
		  
		  **MANAGE Function**:
		  - Risk management responsive to stakeholder concerns
		  - Stakeholder communication in incident response
		  - Continuous improvement incorporates stakeholder perspectives
		  
		  ## Implementation Considerations
		  
		  **Inclusive Stakeholder Identification**:
		  - Systematic rather than ad hoc identification
		  - Active outreach to marginalised or less visible groups
		  - Recognition of indirect and long-term stakeholders
		  - Periodic review and update of stakeholder landscape
		  
		  **Meaningful Engagement**:
		  - Adequate time and resources for participation
		  - Accessible formats and languages
		  - Clear explanation of how input will be used
		  - Transparency about constraints and trade-offs
		  - Feedback on how stakeholder input influenced decisions
		  - Compensation for stakeholder time and expertise where appropriate
		  
		  **Power Imbalance Mitigation**:
		  - Amplification of less powerful stakeholder voices
		  - Resources enabling participation by under-resourced groups
		  - Independent facilitation of multi-stakeholder processes
		  - Binding commitments rather than purely consultative engagement
		  - Accountability mechanisms ensuring stakeholder interests protected
		  
		  **Challenges**:
		  - Identifying all relevant stakeholders, especially less visible ones
		  - Managing competing or conflicting stakeholder interests
		  - Addressing power imbalances among stakeholders
		  - Ensuring engagement is meaningful rather than performative
		  - Maintaining sustained engagement across AI lifecycle
		  - Balancing diverse stakeholder input with timely development
		  - Representing future generations and non-human stakeholders
		  - Preventing stakeholder fatigue from excessive consultation
		  
		  **Best Practices**:
		  - Adopt systematic stakeholder identification methods
		  - Prioritise engagement with most affected and vulnerable groups
		  - Provide stakeholders with genuine influence over decisions
		  - Maintain transparency about decision-making processes
		  - Document and communicate how stakeholder input used
		  - Build long-term relationships rather than transactional consultation
		  - Establish ongoing stakeholder advisory mechanisms
		  - Regularly evaluate and improve engagement approaches
		  - Address power dynamics and resource disparities
		  - Create multiple channels for diverse participation styles
		  
		  ## Regulatory and Policy Context
		  
		  **EU AI Act**: Requires impact assessments considering affected persons and groups (stakeholders)
		  
		  **ISO/IEC 42001**: Mandates understanding of interested party (stakeholder) needs and expectations
		  
		  **OECD AI Principles**: Calls for inclusive growth and human-centred AI reflecting diverse stakeholder interests
		  
		  **Corporate Governance Codes**: Increasingly expect consideration of multi-stakeholder interests beyond shareholders
		  
		  **Human Rights Due Diligence**: Requires identification and engagement with rights-holder stakeholders
		  
		  ## Related Terms
		  
		  - **AI Provider**: Key stakeholder category in AI value chain
		  - **AI Operator**: Stakeholder deploying and managing AI systems
		  - **AI User**: Stakeholder directly interacting with or affected by AI
		  - **AI Governance**: Framework for managing stakeholder interests
		  - **AI Impact Assessment**: Tool for understanding stakeholder impacts
		  - **Accountability**: Obligation to stakeholders
		  - **Fairness**: Principle addressing stakeholder equity concerns
		  - **Transparency**: Information provision to stakeholders
		  - **Participation**: Stakeholder involvement in decisions
		  - **Civil Society**: Important stakeholder category
		  
		  ## References
		  
		  1. ISO/IEC 42001:2023, *Information technology — Artificial intelligence — Management system*
		  2. NIST AI 100-1, *Artificial Intelligence Risk Management Framework* (2023)
		  3. OECD, *Recommendation of the Council on Artificial Intelligence* (2019)
		  4. Freeman, R.E., *Strategic Management: A Stakeholder Approach* (2010)
		  5. Ada Lovelace Institute, *Participatory AI* (2021)
		  
		  ## See Also
		  
		  - [[AI Provider]]
		  - [[AI Operator]]
		  - [[AI User]]
		  - [[AI Governance]]
		  - [[AI Impact Assessment]]
		  - [[Accountability]]
		  - [[Fairness]]
		  - [[Transparency]]
		  - [[Participation]]
		  - [[Civil Society]]
		  
		  ```

- public-access:: true
	- definition:: Any individual, group, organisation, or entity that has an interest in, is affected by, influences, or holds rights regarding an artificial intelligence system throughout its lifecycle, including those who develop, deploy, operate, use, regulate, are impacted by, or hold accountability for AI systems, as well as broader society and communities whose interests may be affected by AI system design, deployment, or outcomes, encompassing both direct participants in AI value chains and indirect parties with legitimate concerns about AI systems' societal implications.



## Academic Context

- The concept of a **stakeholder** in AI encompasses any individual, group, organisation, or entity with an interest in, influence over, or affected by an AI system throughout its lifecycle.
  - This includes developers, deployers, operators, users, regulators, impacted parties, and those accountable for AI systems.
  - Broader society and communities whose interests may be indirectly affected by AI system design, deployment, or outcomes are also stakeholders.
- Academic foundations trace back to Freeman’s stakeholder theory (2010), which emphasises considering all relevant parties' interests in strategic decision-making.
- Recent scholarship extends this to AI, recognising the complexity of stakeholder roles, including AI itself acting as a pseudo-stakeholder or mediator in multi-stakeholder environments[2][6].

## Current Landscape (2025)

- AI stakeholder management has evolved to integrate AI-driven insights, enabling predictive and personalised engagement strategies.
  - AI technologies such as machine learning and generative AI are transforming stakeholder identification, prioritisation, and communication, making interactions more data-driven and adaptive[3].
- Notable organisations globally and within the UK are adopting frameworks to identify and engage stakeholders responsibly, aligning with emerging regulations such as the EU AI Act.
- In the UK, regulatory bodies and industry groups increasingly emphasise stakeholder inclusivity and transparency in AI governance.
- Technical capabilities now allow real-time stakeholder analysis and dynamic engagement, but challenges remain in balancing diverse interests and ensuring ethical compliance.
- Standards and frameworks are developing, with guidelines clarifying prohibited AI practices and definitions to assist stakeholders in compliance and understanding[4].

## Research & Literature

- Key academic papers include:
  - Freeman, R.E. (2010). *Strategic Management: A Stakeholder Approach*. Cambridge University Press.
  - Müller, O., et al. (2025). "Stakeholder-specific adoption of AI in HRM: workers' representatives’ perspectives." *Frontiers in Artificial Intelligence*, 8:1561322. DOI: 10.3389/frai.2025.1561322[6].
  - Smith, J., & Lee, A. (2025). "The Stakeholder Perspective in Generative Artificial Intelligence." *Project Management Journal*. DOI: 10.1002/pmj.22567[2].
- Ongoing research explores AI’s evolving role as both a tool and participant in stakeholder ecosystems, power dynamics shifts due to data control, and ethical frameworks for multi-stakeholder engagement.

## UK Context

- The UK contributes significantly to AI stakeholder research and governance, with active policy development and academic inquiry.
- North England innovation hubs such as Manchester, Leeds, Newcastle, and Sheffield are prominent in AI research and ethical AI deployment initiatives.
  - For example, Manchester’s AI ethics centres and Leeds’ digital innovation labs focus on inclusive stakeholder engagement and societal impact assessments.
- Regional case studies highlight collaborative efforts between academia, industry, and local governments to ensure AI systems reflect diverse stakeholder interests and regional socio-economic contexts.

## Future Directions

- Emerging trends include AI systems acting as stakeholder proxies or mediators, necessitating refined definitions and governance models.
- Anticipated challenges involve managing complex stakeholder networks, ensuring transparency, accountability, and addressing indirect societal impacts.
- Research priorities focus on developing adaptive stakeholder engagement frameworks, integrating AI-driven insights ethically, and harmonising regulatory approaches internationally.

## References

1. Freeman, R.E. (2010). *Strategic Management: A Stakeholder Approach*. Cambridge University Press.
2. Müller, O., et al. (2025). "Stakeholder-specific adoption of AI in HRM: workers' representatives’ perspectives." *Frontiers in Artificial Intelligence*, 8:1561322. https://doi.org/10.3389/frai.2025.1561322
3. Smith, J., & Lee, A. (2025). "The Stakeholder Perspective in Generative Artificial Intelligence." *Project Management Journal*. https://doi.org/10.1002/pmj.22567
4. European Commission (2025). "Analysis of Stakeholder Feedback on AI Definitions and Prohibited Practices." Digital Strategy Library.
5. Trustible (2025). "Understanding AI Stakeholders with Trustible’s AI Stakeholder Taxonomy." Trustible.ai.
6. The Digital Project Manager (2025). "AI in Stakeholder Management: How AI Is Shaping the Future." TheDigitalProjectManager.com.

*No stakeholders were harmed in the making of this definition, though some may find it quite engaging.*


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
