public:: true

# AI Board
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:501126f127b4f117bcacd872af4e4df222761bf5597ca1c47642d3d631fdfb1c",
  "@type": "Page",
  "vc:slug": "ai-board",
  "title": "AI Board",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:eu-ai-act-articles-65-67",
      "vc:label": "EU AI Act Articles 65-67"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-3025"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "AI Board"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ai-board",
  "@type": "Class",
  "label": "AI Board",
  "definition": "EU Advisory body under Articles 65–67 of the AI Act, composed of one senior representative per Member State and supported by the AI Office as secretariat. Its mandate spans issuing harmonisation guidelines, resolving cross-border jurisdictional conflicts, coordinating joint enforcement actions, and advising the AI Office on GPAI systemic-risk classification and codes-of-practice adequacy.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
    }
  ],
  "relations": {
    "supports": [
      {"@id": "urn:ngm:class:ai-office", "label": "AI Office"},
      {"@id": "urn:ngm:class:eu-ai-act-regulatory-instrument", "label": "EU AI Act"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-governance", "label": "AI Governance"},
      {"@id": "urn:ngm:class:ai-governance-framework", "label": "AI Governance Framework"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-risk-management", "label": "AI Risk Management"},
      {"@id": "urn:ngm:class:general-purpose-ai-model", "label": "General Purpose AI Model"}
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:ai-board:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:501126f127b4f117bcacd872af4e4df222761bf5597ca1c47642d3d631fdfb1c"
  },
  "vc:resolutions": [
    {
      "raw": "[[EU AI Act Articles 65-67]]",
      "resolved": "urn:visionflow:linked:eu-ai-act-articles-65-67",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Agent System]]",
      "resolved": "urn:visionflow:owl:class:ai-agent-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Advisory body composed of representatives from EU Member States, supported by the AI Office, with the mission of coordinating uniform AI Act implementation, issuing guidelines, and facilitating cooperation among national authorities.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIBoard
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - supports:: [[AI Office]], [[EU AI Act Regulatory Instrument]]
  - enables:: [[AI Governance]], [[AI Governance Framework]]
  - relatedTo:: [[AI Risk Management]], [[General Purpose AI Model]]

- ### Content
  - Advisory body composed of representatives from EU Member States, supported by the AI Office, with the mission of coordinating uniform AI Act implementation, issuing guidelines, and facilitating cooperation among national authorities.

  ## Source

  **Primary**: EU AI Act Articles 65-67
  **Context**: Member State coordination mechanism

  ## Regulatory Context

  The AI Board serves as the central coordination mechanism ensuring consistent AI Act application across all 27 EU Member States, preventing regulatory fragmentation and facilitating knowledge exchange among national authorities.

  ## Composition (Article 65)

  ### Member State Representatives
  Each EU Member State appoints:
  - **One member** to AI Board
  - **One alternate** for member absence

  **Level**: Senior representatives from national competent authorities with AI expertise

  ### European Data Protection Supervisor (EDPS)
  **Observer status** to ensure AI Act-GDPR coherence

  ### Secretariat
  **AI Office** provides secretariat functions:
  - Administrative support
  - Meeting organisation
  - Documentation preparation
  - Implementation of Board decisions

  ## Functions and Tasks (Article 66)

  ### 1. Guidelines and Recommendations

  #### Practical Implementation Guidance
  - **Risk classification**: Interpretation of Annex III use cases
  - **Conformity assessment**: Best practices for procedures
  - **Technical documentation**: Templates and standards
  - **Human oversight**: Implementation methodologies

  #### Harmonisation Opinions
  - **Common specifications** proposals (Article 41)
  - **Harmonised standards** evaluation (Article 40)
  - **Systemic risk criteria** interpretation (Annex XIII)

  #### Targeted Advice
  - **AI Office**: On GPAI supervision approaches
  - **Commission**: On legislative amendments
  - **Member States**: On enforcement strategies

  ### 2. Cross-Border Coordination

  #### Jurisdictional Conflicts
  Resolve disputes when:
  - Multiple Member States claim jurisdiction
  - Differing interpretations arise
  - Coordinated enforcement needed

  #### Information Exchange
  Facilitate sharing of:
  - **Enforcement experiences**: Successful and unsuccessful actions
  - **Technical findings**: Model evaluations, testing results
  - **Emerging risks**: New AI capabilities, unforeseen harms

  #### Joint Actions
  Coordinate:
  - **Multi-state investigations**: GPAI providers operating EU-wide
  - **Harmonised enforcement**: Consistent penalties, corrective measures
  - **Crisis response**: Serious incident management

  ### 3. Best Practice Development

  #### Market Surveillance Excellence
  - Identify effective surveillance methodologies
  - Develop inspection protocols
  - Create authority training programmes

  #### Regulatory Sandbox Learnings
  - Share sandbox outcomes across Member States
  - Identify innovation-friendly approaches
  - Recommend regulatory adaptations

  #### FRIA Templates (Article 27)
  - Develop fundamental rights impact assessment methodologies
  - Share public authority experiences
  - Create sectoral guidance (law enforcement, education, healthcare)

  ### 4. AI Office Support

  #### GPAI Oversight
  Advise AI Office on:
  - Systemic risk model classification (Article 51)
  - Enforcement priorities
  - Codes of practice approval (Article 56)

  #### Strategic Planning
  - Annual enforcement priorities
  - Resource allocation recommendations
  - International cooperation strategies

  ## Decision-Making (Article 66)

  ### Voting Rules
  - **Simple majority**: Most decisions
  - **Qualified majority**: Classification of systemic risk models (Article 51)

  ### Quorum
  Majority of Member State representatives must be present.

  ### Transparency
  - Meeting agendas published in advance
  - Decisions and opinions published (excluding confidential information)

  ## Working Methods

  ### Meetings
  - **Regular sessions**: At least quarterly
  - **Extraordinary sessions**: Upon AI Office or Member State request
  - **Virtual participation**: Enabled for efficiency

  ### Working Groups
  AI Board may establish:
  - **Thematic groups**: By sector (healthcare, finance, law enforcement)
  - **Technical groups**: By topic (biometric systems, GPAI, conformity assessment)
  - **Ad hoc groups**: For specific urgent issues

  ### Annual Work Programme
  AI Board adopts programme covering:
  - Priority topics
  - Planned guidelines
  - Stakeholder consultations
  - Cooperation initiatives

  ## Key Deliverables

  ### Opinions and Guidelines
  Published on:
  - High-risk AI system classification edge cases
  - Substantial modification interpretation (Article 28)
  - Deployer obligations in specific sectors
  - GPAI transparency information standards (Annex XII)

  ### Annual Report
  AI Board contributes to AI Office annual report on:
  - Uniform implementation progress
  - Persistent divergences among Member States
  - Recommendations for legislative clarification

  ### Enforcement Coordination
  - Common enforcement priorities
  - Coordinated investigations outcomes
  - Penalty consistency guidance

  ## Relationship to Other Bodies

  ### AI Office
  - **Secretariat support**: AI Office provides administrative resources
  - **Implementation**: AI Office executes AI Board recommendations
  - **Collaboration**: Joint working groups, consultations

  ### Scientific Panel of Independent Experts (Article 68)
  - **Technical input**: Panel advises Board on GPAI technical issues
  - **Alerts**: Panel qualified alerts inform Board discussions
  - **Coordination**: Joint consideration of systemic risks

  ### Advisory Forum (Article 67)
  - **Stakeholder perspectives**: Advisory Forum feeds into Board deliberations
  - **Consultation**: Board seeks Advisory Forum input on guidelines
  - **Transparency**: Advisory Forum ensures Board considers diverse views

  ### National Competent Authorities
  - **Board members**: National authorities represented on Board
  - **Implementation**: Authorities implement Board guidelines domestically
  - **Reporting**: Authorities report back to Board on outcomes

  ## Sectoral Engagement

  ### Financial Services
  Coordinate with:
  - **European Banking Authority (EBA)**
  - **European Securities and Markets Authority (ESMA)**
  - **European Insurance and Occupational Pensions Authority (EIOPA)**

  ### Healthcare
  Coordinate with:
  - **European Medicines Agency (EMA)**
  - **Medical Device Coordination Group (MDCG)**

  ### Consumer Protection
  Coordinate with:
  - **Consumer Protection Cooperation Network**
  - **Product Safety Network**

  ### Data Protection
  Coordinate with:
  - **European Data Protection Board (EDPB)**
  - **National data protection authorities**

  ## Strategic Priorities (Expected)

  ### Phase 1 (2024-2026): Foundation
  - High-risk AI classification guidance
  - Conformity assessment harmonisation
  - Market surveillance capacity building

  ### Phase 2 (2027-2029): Maturation
  - GPAI supervision coordination
  - Cross-border enforcement
  - Regulatory sandbox integration

  ### Phase 3 (2030+): Evolution
  - AI Act amendment recommendations
  - International regulatory alignment
  - Emerging technology adaptation

  ## Member State Benefits

  ### Consistent Application
  - Avoid regulatory fragmentation
  - Predictable compliance environment
  - Level playing field for EU AI industry

  ### Shared Expertise
  - Access to other Member States' experiences
  - Technical capacity building
  - Reduced duplication of effort

  ### EU Voice Projection
  - Coordinated international positions
  - Enhanced global AI governance influence
  - Regulatory export potential

  ## Transparency and Stakeholder Engagement

  ### Public Consultations
  AI Board conducts consultations on:
  - Draft guidelines
  - Classification opinions
  - Enforcement approaches

  ### Stakeholder Dialogues
  Regular engagement with:
  - **Industry**: Compliance challenges, innovation concerns
  - **Civil society**: Fundamental rights, consumer protection
  - **Academia**: Research findings, technical developments
  - **Standardisation bodies**: Standards development coordination

  ### Publication
  AI Board publishes:
  - Adopted opinions and guidelines
  - Annual work programmes
  - Meeting summaries (excluding confidential matters)

  ## Challenges and Solutions

  ### Challenge: Divergent National Interpretations
  **Solution**: Rapid opinion issuance on contentious issues, common Q&A repository

  ### Challenge: Varying Enforcement Resources
  **Solution**: Capacity building programmes, shared technical tools, joint investigations

  ### Challenge: Technological Pace
  **Solution**: Regular review cycles, Scientific Panel input, regulatory sandbox learnings

  ## Source

  **Primary**: EU AI Act Articles 65-67
  **Context**: Member State coordination mechanism

  ## Regulatory Context

  The AI Board serves as the central coordination mechanism ensuring consistent AI Act application across all 27 EU Member States, preventing regulatory fragmentation and facilitating knowledge exchange among national authorities.

  ## Composition (Article 65)

  ### Member State Representatives
  Each EU Member State appoints:
  - **One member** to AI Board
  - **One alternate** for member absence

  **Level**: Senior representatives from national competent authorities with AI expertise

  ### European Data Protection Supervisor (EDPS)
  **Observer status** to ensure AI Act-GDPR coherence

  ### Secretariat
  **AI Office** provides secretariat functions:
  - Administrative support
  - Meeting organisation
  - Documentation preparation
  - Implementation of Board decisions

  ## Functions and Tasks (Article 66)

  ### 1. Guidelines and Recommendations

  #### Practical Implementation Guidance
  - **Risk classification**: Interpretation of Annex III use cases
  - **Conformity assessment**: Best practices for procedures
  - **Technical documentation**: Templates and standards
  - **Human oversight**: Implementation methodologies

  #### Harmonisation Opinions
  - **Common specifications** proposals (Article 41)
  - **Harmonised standards** evaluation (Article 40)
  - **Systemic risk criteria** interpretation (Annex XIII)

  #### Targeted Advice
  - **AI Office**: On GPAI supervision approaches
  - **Commission**: On legislative amendments
  - **Member States**: On enforcement strategies

  ### 2. Cross-Border Coordination

  #### Jurisdictional Conflicts
  Resolve disputes when:
  - Multiple Member States claim jurisdiction
  - Differing interpretations arise
  - Coordinated enforcement needed

  #### Information Exchange
  Facilitate sharing of:
  - **Enforcement experiences**: Successful and unsuccessful actions
  - **Technical findings**: Model evaluations, testing results
  - **Emerging risks**: New AI capabilities, unforeseen harms

  #### Joint Actions
  Coordinate:
  - **Multi-state investigations**: GPAI providers operating EU-wide
  - **Harmonised enforcement**: Consistent penalties, corrective measures
  - **Crisis response**: Serious incident management

  ### 3. Best Practice Development

  #### Market Surveillance Excellence
  - Identify effective surveillance methodologies
  - Develop inspection protocols
  - Create authority training programmes

  #### Regulatory Sandbox Learnings
  - Share sandbox outcomes across Member States
  - Identify innovation-friendly approaches
  - Recommend regulatory adaptations

  #### FRIA Templates (Article 27)
  - Develop fundamental rights impact assessment methodologies
  - Share public authority experiences
  - Create sectoral guidance (law enforcement, education, healthcare)

  ### 4. AI Office Support

  #### GPAI Oversight
  Advise AI Office on:
  - Systemic risk model classification (Article 51)
  - Enforcement priorities
  - Codes of practice approval (Article 56)

  #### Strategic Planning
  - Annual enforcement priorities
  - Resource allocation recommendations
  - International cooperation strategies

  ## Decision-Making (Article 66)

  ### Voting Rules
  - **Simple majority**: Most decisions
  - **Qualified majority**: Classification of systemic risk models (Article 51)

  ### Quorum
  Majority of Member State representatives must be present.

  ### Transparency
  - Meeting agendas published in advance
  - Decisions and opinions published (excluding confidential information)

  ## Working Methods

  ### Meetings
  - **Regular sessions**: At least quarterly
  - **Extraordinary sessions**: Upon AI Office or Member State request
  - **Virtual participation**: Enabled for efficiency

  ### Working Groups
  AI Board may establish:
  - **Thematic groups**: By sector (healthcare, finance, law enforcement)
  - **Technical groups**: By topic (biometric systems, GPAI, conformity assessment)
  - **Ad hoc groups**: For specific urgent issues

  ### Annual Work Programme
  AI Board adopts programme covering:
  - Priority topics
  - Planned guidelines
  - Stakeholder consultations
  - Cooperation initiatives

  ## Key Deliverables

  ### Opinions and Guidelines
  Published on:
  - High-risk AI system classification edge cases
  - Substantial modification interpretation (Article 28)
  - Deployer obligations in specific sectors
  - GPAI transparency information standards (Annex XII)

  ### Annual Report
  AI Board contributes to AI Office annual report on:
  - Uniform implementation progress
  - Persistent divergences among Member States
  - Recommendations for legislative clarification

  ### Enforcement Coordination
  - Common enforcement priorities
  - Coordinated investigations outcomes
  - Penalty consistency guidance

  ## Relationship to Other Bodies

  ### AI Office
  - **Secretariat support**: AI Office provides administrative resources
  - **Implementation**: AI Office executes AI Board recommendations
  - **Collaboration**: Joint working groups, consultations

  ### Scientific Panel of Independent Experts (Article 68)
  - **Technical input**: Panel advises Board on GPAI technical issues
  - **Alerts**: Panel qualified alerts inform Board discussions
  - **Coordination**: Joint consideration of systemic risks

  ### Advisory Forum (Article 67)
  - **Stakeholder perspectives**: Advisory Forum feeds into Board deliberations
  - **Consultation**: Board seeks Advisory Forum input on guidelines
  - **Transparency**: Advisory Forum ensures Board considers diverse views

  ### National Competent Authorities
  - **Board members**: National authorities represented on Board
  - **Implementation**: Authorities implement Board guidelines domestically
  - **Reporting**: Authorities report back to Board on outcomes

  ## Sectoral Engagement

  ### Financial Services
  Coordinate with:
  - **European Banking Authority (EBA)**
  - **European Securities and Markets Authority (ESMA)**
  - **European Insurance and Occupational Pensions Authority (EIOPA)**

  ### Healthcare
  Coordinate with:
  - **European Medicines Agency (EMA)**
  - **Medical Device Coordination Group (MDCG)**

  ### Consumer Protection
  Coordinate with:
  - **Consumer Protection Cooperation Network**
  - **Product Safety Network**

  ### Data Protection
  Coordinate with:
  - **European Data Protection Board (EDPB)**
  - **National data protection authorities**

  ## Strategic Priorities (Expected)

  ### Phase 1 (2024-2026): Foundation
  - High-risk AI classification guidance
  - Conformity assessment harmonisation
  - Market surveillance capacity building

  ### Phase 2 (2027-2029): Maturation
  - GPAI supervision coordination
  - Cross-border enforcement
  - Regulatory sandbox integration

  ### Phase 3 (2030+): Evolution
  - AI Act amendment recommendations
  - International regulatory alignment
  - Emerging technology adaptation

  ## Member State Benefits

  ### Consistent Application
  - Avoid regulatory fragmentation
  - Predictable compliance environment
  - Level playing field for EU AI industry

  ### Shared Expertise
  - Access to other Member States' experiences
  - Technical capacity building
  - Reduced duplication of effort

  ### EU Voice Projection
  - Coordinated international positions
  - Enhanced global AI governance influence
  - Regulatory export potential

  ## Transparency and Stakeholder Engagement

  ### Public Consultations
  AI Board conducts consultations on:
  - Draft guidelines
  - Classification opinions
  - Enforcement approaches

  ### Stakeholder Dialogues
  Regular engagement with:
  - **Industry**: Compliance challenges, innovation concerns
  - **Civil society**: Fundamental rights, consumer protection
  - **Academia**: Research findings, technical developments
  - **Standardisation bodies**: Standards development coordination

  ### Publication
  AI Board publishes:
  - Adopted opinions and guidelines
  - Annual work programmes
  - Meeting summaries (excluding confidential matters)

  ## Challenges and Solutions

  ### Challenge: Divergent National Interpretations
  **Solution**: Rapid opinion issuance on contentious issues, common Q&A repository

  ### Challenge: Varying Enforcement Resources
  **Solution**: Capacity building programmes, shared technical tools, joint investigations

  ### Challenge: Technological Pace
  **Solution**: Regular review cycles, Scientific Panel input, regulatory sandbox learnings

  #### Related Concepts
  - **AI Office** (AI-0132): Executive body AI Board supports
  - **Scientific Panel of Independent Experts** (AI-0129): Technical advisor
  - **National Competent Authority** (AI-0135): Member State implementation entities
  - **Market Surveillance Authority** (AI-0134): Enforcement authorities

  ## See Also

  - EU AI Act Articles 65-67 (AI Board Structure and Functions)
  - Commission Implementing Decision on AI Board Rules of Procedure (expected 2025)
  - AI Board Guidelines Repository (expected from 2025)
  - ### Original Content
		- ```
  # European Artificial Intelligence Board (AI Board)

		  **Ontology ID**: AI-0133
		  **Category**: Regulatory Actors
		  **Last Updated**: 2025-10-27

		  ## Definition

		  Advisory body composed of representatives from EU Member States, supported by the AI Office, with the mission of coordinating uniform AI Act implementation, issuing guidelines, and facilitating cooperation among national authorities.

		  ## Source

		  **Primary**: EU AI Act Articles 65-67
		  **Context**: Member State coordination mechanism

		  ## Regulatory Context

		  The AI Board serves as the central coordination mechanism ensuring consistent AI Act application across all 27 EU Member States, preventing regulatory fragmentation and facilitating knowledge exchange among national authorities.

		  ## Composition (Article 65)

		  ### Member State Representatives
		  Each EU Member State appoints:
		  - **One member** to AI Board
		  - **One alternate** for member absence

		  **Level**: Senior representatives from national competent authorities with AI expertise

		  ### European Data Protection Supervisor (EDPS)
		  **Observer status** to ensure AI Act-GDPR coherence

		  ### Secretariat
		  **AI Office** provides secretariat functions:
		  - Administrative support
		  - Meeting organisation
		  - Documentation preparation
		  - Implementation of Board decisions

		  ## Functions and Tasks (Article 66)

		  ### 1. Guidelines and Recommendations

		  #### Practical Implementation Guidance
		  - **Risk classification**: Interpretation of Annex III use cases
		  - **Conformity assessment**: Best practices for procedures
		  - **Technical documentation**: Templates and standards
		  - **Human oversight**: Implementation methodologies

		  #### Harmonisation Opinions
		  - **Common specifications** proposals (Article 41)
		  - **Harmonised standards** evaluation (Article 40)
		  - **Systemic risk criteria** interpretation (Annex XIII)

		  #### Targeted Advice
		  - **AI Office**: On GPAI supervision approaches
		  - **Commission**: On legislative amendments
		  - **Member States**: On enforcement strategies

		  ### 2. Cross-Border Coordination

		  #### Jurisdictional Conflicts
		  Resolve disputes when:
		  - Multiple Member States claim jurisdiction
		  - Differing interpretations arise
		  - Coordinated enforcement needed

		  #### Information Exchange
		  Facilitate sharing of:
		  - **Enforcement experiences**: Successful and unsuccessful actions
		  - **Technical findings**: Model evaluations, testing results
		  - **Emerging risks**: New AI capabilities, unforeseen harms

		  #### Joint Actions
		  Coordinate:
		  - **Multi-state investigations**: GPAI providers operating EU-wide
		  - **Harmonised enforcement**: Consistent penalties, corrective measures
		  - **Crisis response**: Serious incident management

		  ### 3. Best Practice Development

		  #### Market Surveillance Excellence
		  - Identify effective surveillance methodologies
		  - Develop inspection protocols
		  - Create authority training programmes

		  #### Regulatory Sandbox Learnings
		  - Share sandbox outcomes across Member States
		  - Identify innovation-friendly approaches
		  - Recommend regulatory adaptations

		  #### FRIA Templates (Article 27)
		  - Develop fundamental rights impact assessment methodologies
		  - Share public authority experiences
		  - Create sectoral guidance (law enforcement, education, healthcare)

		  ### 4. AI Office Support

		  #### GPAI Oversight
		  Advise AI Office on:
		  - Systemic risk model classification (Article 51)
		  - Enforcement priorities
		  - Codes of practice approval (Article 56)

		  #### Strategic Planning
		  - Annual enforcement priorities
		  - Resource allocation recommendations
		  - International cooperation strategies

		  ## Decision-Making (Article 66)

		  ### Voting Rules
		  - **Simple majority**: Most decisions
		  - **Qualified majority**: Classification of systemic risk models (Article 51)

		  ### Quorum
		  Majority of Member State representatives must be present.

		  ### Transparency
		  - Meeting agendas published in advance
		  - Decisions and opinions published (excluding confidential information)

		  ## Working Methods

		  ### Meetings
		  - **Regular sessions**: At least quarterly
		  - **Extraordinary sessions**: Upon AI Office or Member State request
		  - **Virtual participation**: Enabled for efficiency

		  ### Working Groups
		  AI Board may establish:
		  - **Thematic groups**: By sector (healthcare, finance, law enforcement)
		  - **Technical groups**: By topic (biometric systems, GPAI, conformity assessment)
		  - **Ad hoc groups**: For specific urgent issues

		  ### Annual Work Programme
		  AI Board adopts programme covering:
		  - Priority topics
		  - Planned guidelines
		  - Stakeholder consultations
		  - Cooperation initiatives

		  ## Key Deliverables

		  ### Opinions and Guidelines
		  Published on:
		  - High-risk AI system classification edge cases
		  - Substantial modification interpretation (Article 28)
		  - Deployer obligations in specific sectors
		  - GPAI transparency information standards (Annex XII)

		  ### Annual Report
		  AI Board contributes to AI Office annual report on:
		  - Uniform implementation progress
		  - Persistent divergences among Member States
		  - Recommendations for legislative clarification

		  ### Enforcement Coordination
		  - Common enforcement priorities
		  - Coordinated investigations outcomes
		  - Penalty consistency guidance

		  ## Relationship to Other Bodies

		  ### AI Office
		  - **Secretariat support**: AI Office provides administrative resources
		  - **Implementation**: AI Office executes AI Board recommendations
		  - **Collaboration**: Joint working groups, consultations

		  ### Scientific Panel of Independent Experts (Article 68)
		  - **Technical input**: Panel advises Board on GPAI technical issues
		  - **Alerts**: Panel qualified alerts inform Board discussions
		  - **Coordination**: Joint consideration of systemic risks

		  ### Advisory Forum (Article 67)
		  - **Stakeholder perspectives**: Advisory Forum feeds into Board deliberations
		  - **Consultation**: Board seeks Advisory Forum input on guidelines
		  - **Transparency**: Advisory Forum ensures Board considers diverse views

		  ### National Competent Authorities
		  - **Board members**: National authorities represented on Board
		  - **Implementation**: Authorities implement Board guidelines domestically
		  - **Reporting**: Authorities report back to Board on outcomes

		  ## Sectoral Engagement

		  ### Financial Services
		  Coordinate with:
		  - **European Banking Authority (EBA)**
		  - **European Securities and Markets Authority (ESMA)**
		  - **European Insurance and Occupational Pensions Authority (EIOPA)**

		  ### Healthcare
		  Coordinate with:
		  - **European Medicines Agency (EMA)**
		  - **Medical Device Coordination Group (MDCG)**

		  ### Consumer Protection
		  Coordinate with:
		  - **Consumer Protection Cooperation Network**
		  - **Product Safety Network**

		  ### Data Protection
		  Coordinate with:
		  - **European Data Protection Board (EDPB)**
		  - **National data protection authorities**

		  ## Strategic Priorities (Expected)

		  ### Phase 1 (2024-2026): Foundation
		  - High-risk AI classification guidance
		  - Conformity assessment harmonisation
		  - Market surveillance capacity building

		  ### Phase 2 (2027-2029): Maturation
		  - GPAI supervision coordination
		  - Cross-border enforcement
		  - Regulatory sandbox integration

		  ### Phase 3 (2030+): Evolution
		  - AI Act amendment recommendations
		  - International regulatory alignment
		  - Emerging technology adaptation

		  ## Member State Benefits

		  ### Consistent Application
		  - Avoid regulatory fragmentation
		  - Predictable compliance environment
		  - Level playing field for EU AI industry

		  ### Shared Expertise
		  - Access to other Member States' experiences
		  - Technical capacity building
		  - Reduced duplication of effort

		  ### EU Voice Projection
		  - Coordinated international positions
		  - Enhanced global AI governance influence
		  - Regulatory export potential

		  ## Transparency and Stakeholder Engagement

		  ### Public Consultations
		  AI Board conducts consultations on:
		  - Draft guidelines
		  - Classification opinions
		  - Enforcement approaches

		  ### Stakeholder Dialogues
		  Regular engagement with:
		  - **Industry**: Compliance challenges, innovation concerns
		  - **Civil society**: Fundamental rights, consumer protection
		  - **Academia**: Research findings, technical developments
		  - **Standardisation bodies**: Standards development coordination

		  ### Publication
		  AI Board publishes:
		  - Adopted opinions and guidelines
		  - Annual work programmes
		  - Meeting summaries (excluding confidential matters)

		  ## Challenges and Solutions

		  ### Challenge: Divergent National Interpretations
		  **Solution**: Rapid opinion issuance on contentious issues, common Q&A repository

		  ### Challenge: Varying Enforcement Resources
		  **Solution**: Capacity building programmes, shared technical tools, joint investigations

		  ### Challenge: Technological Pace
		  **Solution**: Regular review cycles, Scientific Panel input, regulatory sandbox learnings

- ### Provenance
  - sources:: [[EU AI Act Articles 65-67]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z
