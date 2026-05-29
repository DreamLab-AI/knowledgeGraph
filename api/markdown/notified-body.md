- ### Definition
  - A conformity assessment body notified under the AI Act and other relevant EU harmonisation legislation, responsible for performing third-party conformity assessment of certain high-risk AI systems.

- ### Semantic Classification
  - owl-class:: spatial-computing:NotifiedBody
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **implements** [[Conformity Assessment]] — notified bodies execute third-party conformity assessment procedures
  - **supports** [[National Competent Authority]] — notified bodies operate under the oversight of national notifying authorities
  - **supports** [[AI Governance]] — third-party certification strengthens the overall AI governance system
  - **partOf** [[Regulatory Framework]] — notified bodies are a formal component of the EU product certification framework
  - **dependsOn** [[Accountability]] — notified bodies are accountable to notifying authorities and subject to periodic review
  - **dependsOn** [[Transparency]] — assessment findings and certificate status must be disclosed to relevant authorities

- ### Content
  - A conformity assessment body notified under the AI Act and other relevant EU harmonisation legislation, responsible for performing third-party conformity assessment of certain high-risk AI systems.

  ## Source

  **Primary**: EU AI Act Article 3(33), Articles 29-39
  **Context**: Independent third-party certification

  ## Regulatory Context

  Notified bodies provide independent, expert verification that high-risk AI systems meet EU AI Act requirements. They serve as trusted third-party assessors, bringing specialised technical expertise and impartiality to conformity assessment.

  ## Role and Function

  ### Third-Party Conformity Assessment (Annex VII)
  For high-risk AI systems requiring notified body involvement:

  #### Quality Management System Assessment
  - Review provider's quality management system (Article 17)
  - Verify system ensures AI Act compliance
  - Conduct on-site audits
  - Issue approval or non-approval

  #### Technical Documentation Review
  - Examine technical documentation (Annex IV)
  - Verify completeness and compliance evidence
  - Assess risk management system
  - Evaluate data governance measures
  - Review testing and validation results

  #### Surveillance
  - Monitor certified AI systems
  - Conduct periodic audits
  - Respond to complaints
  - Verify continued compliance

  ## When Notified Body Required

  ### Annex VII Conformity Assessment
  Third-party notified body involvement mandated for:

  #### 1. Biometric Systems in Annex III(1)
  - Remote biometric identification
  - Biometric categorisation
  - Emotion recognition (in certain contexts)

  **Except**: When provider uses harmonised standards or common specifications covering all requirements

  #### 2. AI as Product Safety Component (Article 6(1))
  High-risk AI systems integrated into products covered by Annex I legislation where:
  - Product requires third-party conformity assessment
  - AI is safety component

  **Examples**:
  - AI in medical devices (MDR, IVDR)
  - AI in machinery (Machinery Regulation)
  - AI in aviation systems

  ### Internal Control Alternative (Annex VI)
  Providers may self-assess (without notified body) for:
  - Annex III systems using harmonised standards/common specifications covering **all** requirements
  - Standalone high-risk AI not in biometric categories

  ## Designation Process

  ### Notifying Authority Responsibility (Article 28)
  Each Member State designates notifying authority to:
  - **Assess** conformity assessment bodies
  - **Designate** qualified bodies as notified bodies
  - **Notify** European Commission and other Member States
  - **Monitor** notified body performance
  - **Suspend/withdraw** designation if non-compliant

  ### Qualification Criteria (Article 31)

  #### Organisational Requirements
  - **Legal entity**: Established under national law
  - **Third-party status**: Independent from AI providers, deployers
  - **Impartiality**: Free from conflicts of interest
  - **Confidentiality**: Protect commercial secrets
  - **Liability insurance**: Adequate coverage

  #### Technical Competence
  - **AI expertise**: Machine learning, neural networks, AI architectures
  - **Sector knowledge**: Domain-specific understanding (healthcare, finance, etc.)
  - **Quality management**: ISO 17065 or equivalent
  - **Testing capability**: Evaluation tools and methodologies

  #### Personnel Requirements
  - **Qualified staff**: Technical and legal AI experts
  - **Ongoing training**: Up-to-date with AI developments
  - **Sufficient capacity**: Resources to handle assessment volume

  #### Procedural Requirements
  - **Documented procedures**: Conformity assessment methodology
  - **Record keeping**: Assessment documentation
  - **Reporting**: To notifying authority and Commission

  ### Accreditation (Article 32)
  Notified bodies should be accredited to:
  - **ISO/IEC 17065**: Conformity assessment bodies certifying products, processes, services
  - **Sectoral standards**: Domain-specific accreditation (medical, automotive)

  ## Notified Body Obligations (Articles 33-37)

  ### Conformity Assessment Execution (Article 33)
  - Conduct assessments proportionately, avoiding unnecessary provider burdens
  - Complete assessments within reasonable timeframe
  - Respect confidentiality of provider information
  - Charge fees proportionate to assessment scope

  ### Identification Number (Article 34)
  - Assigned by Commission upon notification
  - Displayed with CE marking when notified body involved

  ### Information Obligations (Article 35)

  #### To Notifying Authority
  - Assessment activities
  - Issued, suspended, withdrawn certificates
  - Non-compliance cases
  - Refusals to assess

  #### To Other Notified Bodies
  - Share best practices
  - Coordinate on similar systems
  - Ensure consistent approach

  #### To Commission/AI Board
  - Assessment methodologies
  - Sector-specific challenges
  - Recommendations for standards

  ### Peer Review Participation (Article 36)
  - Facilitate notifying authority monitoring
  - Participate in coordination activities
  - Contribute to harmonised practices

  ### Subsidiaries and Subcontracting (Article 37)
  - May use subsidiaries/subcontractors with notifying authority approval
  - Retain full responsibility for assessment quality
  - Ensure subcontractor competence

  ## Revocation and Suspension

  ### Grounds (Article 38)
  Notifying authority may suspend/withdraw designation if:
  - No longer meets designation criteria
  - Fails to perform obligations
  - Breaches confidentiality
  - Issues non-compliant certificates

  ### Procedure
  - Investigation of suspected non-compliance
  - Opportunity for notified body to respond
  - Formal decision with reasoning
  - Notification to Commission and other Member States
  - Provider notification (for affected certificates)

  ### Affected AI Systems
  If designation withdrawn:
  - **Valid certificates**: May remain valid if compliant
  - **Pending assessments**: Transfer to another notified body
  - **Provider options**: Re-certification by another notified body

  ## Certificates Issued

  ### EU Technical Documentation Assessment Certificate
  Confirms:
  - Technical documentation compliant with Annex IV
  - AI system meets AI Act requirements
  - Risk management system adequate
  - Quality management system effective

  **Validity**: Typically 5 years (may vary by assessment scope)

  ### Surveillance Reports
  Periodic verification of continued compliance:
  - Annual surveillance audits
  - Extraordinary audits (if serious incident or non-compliance suspected)

  ## Coordination Mechanisms

  ### Sectoral Groups
  Notified bodies coordinate by sector:
  - **Medical AI**: Notified bodies for medical devices
  - **Automotive AI**: Notified bodies for machinery/vehicles
  - **Aviation AI**: Notified bodies for aviation products

  ### Cross-Border Coordination
  - **Joint assessments**: For AI systems used EU-wide
  - **Mutual recognition**: Accept other notified bodies' findings (with verification)
  - **Information exchange**: Technical insights, emerging risks

  ## Relationship to Other Bodies

  ### Notifying Authorities (Article 28)
  - **Designation**: Notifying authority appoints notified body
  - **Monitoring**: Authority oversees notified body performance
  - **Enforcement**: Authority can suspend/withdraw designation

  ### AI Office and AI Board
  - **Guidance**: AI Office provides interpretative guidance
  - **Coordination**: AI Board facilitates harmonised approach
  - **Reporting**: Notified bodies report assessment challenges

  ### Providers
  - **Contractual**: Provider engages notified body for assessment
  - **Fee-based**: Provider pays for conformity assessment services
  - **Cooperative**: Provider provides documentation and access

  ### Market Surveillance Authorities (Article 74)
  - **Post-market**: Authorities verify notified body certificate validity
  - **Investigation**: Authorities may question notified body findings
  - **Corrective action**: Authorities can order re-assessment

  ## Fees and Costs

  ### Provider Responsibility
  - **Assessment fees**: Notified body charges provider
  - **Market-based**: Competitive pricing among notified bodies
  - **Proportionate**: Fees reflect assessment scope and complexity

  ### Typical Fee Components
  - Application review
  - Documentation assessment
  - On-site audit
  - Surveillance activities
  - Certificate issuance

  ## Transition Period

  ### Existing Notified Bodies (Annex I Legislation)
  Notified bodies under existing product legislation (MDR, Machinery, etc.) may:
  - Extend notification to cover AI Act requirements
  - Undergo additional competence assessment for AI
  - Begin AI conformity assessments once AI Act applicable

  ### New Notified Bodies
  Member States designate new notified bodies specifically for:
  - Standalone high-risk AI (Annex III biometric systems)
  - AI conformity assessment expertise

  **Timeline**: Notified bodies operational by 2 August 2027 (full AI Act application)

  ## Source

  **Primary**: EU AI Act Article 3(33), Articles 29-39
  **Context**: Independent third-party certification

  ## Regulatory Context

  Notified bodies provide independent, expert verification that high-risk AI systems meet EU AI Act requirements. They serve as trusted third-party assessors, bringing specialised technical expertise and impartiality to conformity assessment.

  ## Role and Function

  ### Third-Party Conformity Assessment (Annex VII)
  For high-risk AI systems requiring notified body involvement:

  #### Quality Management System Assessment
  - Review provider's quality management system (Article 17)
  - Verify system ensures AI Act compliance
  - Conduct on-site audits
  - Issue approval or non-approval

  #### Technical Documentation Review
  - Examine technical documentation (Annex IV)
  - Verify completeness and compliance evidence
  - Assess risk management system
  - Evaluate data governance measures
  - Review testing and validation results

  #### Surveillance
  - Monitor certified AI systems
  - Conduct periodic audits
  - Respond to complaints
  - Verify continued compliance

  ## When Notified Body Required

  ### Annex VII Conformity Assessment
  Third-party notified body involvement mandated for:

  #### 1. Biometric Systems in Annex III(1)
  - Remote biometric identification
  - Biometric categorisation
  - Emotion recognition (in certain contexts)

  **Except**: When provider uses harmonised standards or common specifications covering all requirements

  #### 2. AI as Product Safety Component (Article 6(1))
  High-risk AI systems integrated into products covered by Annex I legislation where:
  - Product requires third-party conformity assessment
  - AI is safety component

  **Examples**:
  - AI in medical devices (MDR, IVDR)
  - AI in machinery (Machinery Regulation)
  - AI in aviation systems

  ### Internal Control Alternative (Annex VI)
  Providers may self-assess (without notified body) for:
  - Annex III systems using harmonised standards/common specifications covering **all** requirements
  - Standalone high-risk AI not in biometric categories

  ## Designation Process

  ### Notifying Authority Responsibility (Article 28)
  Each Member State designates notifying authority to:
  - **Assess** conformity assessment bodies
  - **Designate** qualified bodies as notified bodies
  - **Notify** European Commission and other Member States
  - **Monitor** notified body performance
  - **Suspend/withdraw** designation if non-compliant

  ### Qualification Criteria (Article 31)

  #### Organisational Requirements
  - **Legal entity**: Established under national law
  - **Third-party status**: Independent from AI providers, deployers
  - **Impartiality**: Free from conflicts of interest
  - **Confidentiality**: Protect commercial secrets
  - **Liability insurance**: Adequate coverage

  #### Technical Competence
  - **AI expertise**: Machine learning, neural networks, AI architectures
  - **Sector knowledge**: Domain-specific understanding (healthcare, finance, etc.)
  - **Quality management**: ISO 17065 or equivalent
  - **Testing capability**: Evaluation tools and methodologies

  #### Personnel Requirements
  - **Qualified staff**: Technical and legal AI experts
  - **Ongoing training**: Up-to-date with AI developments
  - **Sufficient capacity**: Resources to handle assessment volume

  #### Procedural Requirements
  - **Documented procedures**: Conformity assessment methodology
  - **Record keeping**: Assessment documentation
  - **Reporting**: To notifying authority and Commission

  ### Accreditation (Article 32)
  Notified bodies should be accredited to:
  - **ISO/IEC 17065**: Conformity assessment bodies certifying products, processes, services
  - **Sectoral standards**: Domain-specific accreditation (medical, automotive)

  ## Notified Body Obligations (Articles 33-37)

  ### Conformity Assessment Execution (Article 33)
  - Conduct assessments proportionately, avoiding unnecessary provider burdens
  - Complete assessments within reasonable timeframe
  - Respect confidentiality of provider information
  - Charge fees proportionate to assessment scope

  ### Identification Number (Article 34)
  - Assigned by Commission upon notification
  - Displayed with CE marking when notified body involved

  ### Information Obligations (Article 35)

  #### To Notifying Authority
  - Assessment activities
  - Issued, suspended, withdrawn certificates
  - Non-compliance cases
  - Refusals to assess

  #### To Other Notified Bodies
  - Share best practices
  - Coordinate on similar systems
  - Ensure consistent approach

  #### To Commission/AI Board
  - Assessment methodologies
  - Sector-specific challenges
  - Recommendations for standards

  ### Peer Review Participation (Article 36)
  - Facilitate notifying authority monitoring
  - Participate in coordination activities
  - Contribute to harmonised practices

  ### Subsidiaries and Subcontracting (Article 37)
  - May use subsidiaries/subcontractors with notifying authority approval
  - Retain full responsibility for assessment quality
  - Ensure subcontractor competence

  ## Revocation and Suspension

  ### Grounds (Article 38)
  Notifying authority may suspend/withdraw designation if:
  - No longer meets designation criteria
  - Fails to perform obligations
  - Breaches confidentiality
  - Issues non-compliant certificates

  ### Procedure
  - Investigation of suspected non-compliance
  - Opportunity for notified body to respond
  - Formal decision with reasoning
  - Notification to Commission and other Member States
  - Provider notification (for affected certificates)

  ### Affected AI Systems
  If designation withdrawn:
  - **Valid certificates**: May remain valid if compliant
  - **Pending assessments**: Transfer to another notified body
  - **Provider options**: Re-certification by another notified body

  ## Certificates Issued

  ### EU Technical Documentation Assessment Certificate
  Confirms:
  - Technical documentation compliant with Annex IV
  - AI system meets AI Act requirements
  - Risk management system adequate
  - Quality management system effective

  **Validity**: Typically 5 years (may vary by assessment scope)

  ### Surveillance Reports
  Periodic verification of continued compliance:
  - Annual surveillance audits
  - Extraordinary audits (if serious incident or non-compliance suspected)

  ## Coordination Mechanisms

  ### Sectoral Groups
  Notified bodies coordinate by sector:
  - **Medical AI**: Notified bodies for medical devices
  - **Automotive AI**: Notified bodies for machinery/vehicles
  - **Aviation AI**: Notified bodies for aviation products

  ### Cross-Border Coordination
  - **Joint assessments**: For AI systems used EU-wide
  - **Mutual recognition**: Accept other notified bodies' findings (with verification)
  - **Information exchange**: Technical insights, emerging risks

  ## Relationship to Other Bodies

  ### Notifying Authorities (Article 28)
  - **Designation**: Notifying authority appoints notified body
  - **Monitoring**: Authority oversees notified body performance
  - **Enforcement**: Authority can suspend/withdraw designation

  ### AI Office and AI Board
  - **Guidance**: AI Office provides interpretative guidance
  - **Coordination**: AI Board facilitates harmonised approach
  - **Reporting**: Notified bodies report assessment challenges

  ### Providers
  - **Contractual**: Provider engages notified body for assessment
  - **Fee-based**: Provider pays for conformity assessment services
  - **Cooperative**: Provider provides documentation and access

  ### Market Surveillance Authorities (Article 74)
  - **Post-market**: Authorities verify notified body certificate validity
  - **Investigation**: Authorities may question notified body findings
  - **Corrective action**: Authorities can order re-assessment

  ## Fees and Costs

  ### Provider Responsibility
  - **Assessment fees**: Notified body charges provider
  - **Market-based**: Competitive pricing among notified bodies
  - **Proportionate**: Fees reflect assessment scope and complexity

  ### Typical Fee Components
  - Application review
  - Documentation assessment
  - On-site audit
  - Surveillance activities
  - Certificate issuance

  ## Transition Period

  ### Existing Notified Bodies (Annex I Legislation)
  Notified bodies under existing product legislation (MDR, Machinery, etc.) may:
  - Extend notification to cover AI Act requirements
  - Undergo additional competence assessment for AI
  - Begin AI conformity assessments once AI Act applicable

  ### New Notified Bodies
  Member States designate new notified bodies specifically for:
  - Standalone high-risk AI (Annex III biometric systems)
  - AI conformity assessment expertise

  **Timeline**: Notified bodies operational by 2 August 2027 (full AI Act application)

  #### Related Concepts
  - **Conformity Assessment** (AI-0145): Process notified bodies perform
  - **Notifying Authority**: Entity designating notified bodies
  - **CE Marking** (AI-0146): Mark accompanied by notified body number
  - **Quality Management System** (Article 17): System notified bodies assess

  ## Practical Implications

  ### For Providers
  - Select notified body early in development
  - Engage notified body for pre-assessment advice
  - Prepare comprehensive technical documentation
  - Budget for assessment fees and timeline

  ### For Member States
  - Ensure sufficient notified body capacity
  - Designate bodies with AI expertise
  - Monitor notified body performance
  - Coordinate across Member States

  ## See Also

  - EU AI Act Articles 29-39 (Notified Bodies)
  - Article 43 (Conformity Assessment Procedures)
  - Annex VII (Quality Management System Assessment)
  - Regulation (EU) 765/2008 (Accreditation and Market Surveillance)
  - ### Original Content
		- ```
  # Notified Body

		  **Ontology ID**: AI-0134
		  **Category**: Regulatory Actors
		  **Last Updated**: 2025-10-27

		  ## Definition

		  A conformity assessment body notified under the AI Act and other relevant EU harmonisation legislation, responsible for performing third-party conformity assessment of certain high-risk AI systems.

		  ## Source

		  **Primary**: EU AI Act Article 3(33), Articles 29-39
		  **Context**: Independent third-party certification

		  ## Regulatory Context

		  Notified bodies provide independent, expert verification that high-risk AI systems meet EU AI Act requirements. They serve as trusted third-party assessors, bringing specialised technical expertise and impartiality to conformity assessment.

		  ## Role and Function

		  ### Third-Party Conformity Assessment (Annex VII)
		  For high-risk AI systems requiring notified body involvement:

		  #### Quality Management System Assessment
		  - Review provider's quality management system (Article 17)
		  - Verify system ensures AI Act compliance
		  - Conduct on-site audits
		  - Issue approval or non-approval

		  #### Technical Documentation Review
		  - Examine technical documentation (Annex IV)
		  - Verify completeness and compliance evidence
		  - Assess risk management system
		  - Evaluate data governance measures
		  - Review testing and validation results

		  #### Surveillance
		  - Monitor certified AI systems
		  - Conduct periodic audits
		  - Respond to complaints
		  - Verify continued compliance

		  ## When Notified Body Required

		  ### Annex VII Conformity Assessment
		  Third-party notified body involvement mandated for:

		  #### 1. Biometric Systems in Annex III(1)
		  - Remote biometric identification
		  - Biometric categorisation
		  - Emotion recognition (in certain contexts)

		  **Except**: When provider uses harmonised standards or common specifications covering all requirements

		  #### 2. AI as Product Safety Component (Article 6(1))
		  High-risk AI systems integrated into products covered by Annex I legislation where:
		  - Product requires third-party conformity assessment
		  - AI is safety component

		  **Examples**:
		  - AI in medical devices (MDR, IVDR)
		  - AI in machinery (Machinery Regulation)
		  - AI in aviation systems

		  ### Internal Control Alternative (Annex VI)
		  Providers may self-assess (without notified body) for:
		  - Annex III systems using harmonised standards/common specifications covering **all** requirements
		  - Standalone high-risk AI not in biometric categories

		  ## Designation Process

		  ### Notifying Authority Responsibility (Article 28)
		  Each Member State designates notifying authority to:
		  - **Assess** conformity assessment bodies
		  - **Designate** qualified bodies as notified bodies
		  - **Notify** European Commission and other Member States
		  - **Monitor** notified body performance
		  - **Suspend/withdraw** designation if non-compliant

		  ### Qualification Criteria (Article 31)

		  #### Organisational Requirements
		  - **Legal entity**: Established under national law
		  - **Third-party status**: Independent from AI providers, deployers
		  - **Impartiality**: Free from conflicts of interest
		  - **Confidentiality**: Protect commercial secrets
		  - **Liability insurance**: Adequate coverage

		  #### Technical Competence
		  - **AI expertise**: Machine learning, neural networks, AI architectures
		  - **Sector knowledge**: Domain-specific understanding (healthcare, finance, etc.)
		  - **Quality management**: ISO 17065 or equivalent
		  - **Testing capability**: Evaluation tools and methodologies

		  #### Personnel Requirements
		  - **Qualified staff**: Technical and legal AI experts
		  - **Ongoing training**: Up-to-date with AI developments
		  - **Sufficient capacity**: Resources to handle assessment volume

		  #### Procedural Requirements
		  - **Documented procedures**: Conformity assessment methodology
		  - **Record keeping**: Assessment documentation
		  - **Reporting**: To notifying authority and Commission

		  ### Accreditation (Article 32)
		  Notified bodies should be accredited to:
		  - **ISO/IEC 17065**: Conformity assessment bodies certifying products, processes, services
		  - **Sectoral standards**: Domain-specific accreditation (medical, automotive)

		  ## Notified Body Obligations (Articles 33-37)

		  ### Conformity Assessment Execution (Article 33)
		  - Conduct assessments proportionately, avoiding unnecessary provider burdens
		  - Complete assessments within reasonable timeframe
		  - Respect confidentiality of provider information
		  - Charge fees proportionate to assessment scope

		  ### Identification Number (Article 34)
		  - Assigned by Commission upon notification
		  - Displayed with CE marking when notified body involved

		  ### Information Obligations (Article 35)

		  #### To Notifying Authority
		  - Assessment activities
		  - Issued, suspended, withdrawn certificates
		  - Non-compliance cases
		  - Refusals to assess

		  #### To Other Notified Bodies
		  - Share best practices
		  - Coordinate on similar systems
		  - Ensure consistent approach

		  #### To Commission/AI Board
		  - Assessment methodologies
		  - Sector-specific challenges
		  - Recommendations for standards

		  ### Peer Review Participation (Article 36)
		  - Facilitate notifying authority monitoring
		  - Participate in coordination activities
		  - Contribute to harmonised practices

		  ### Subsidiaries and Subcontracting (Article 37)
		  - May use subsidiaries/subcontractors with notifying authority approval
		  - Retain full responsibility for assessment quality
		  - Ensure subcontractor competence

		  ## Revocation and Suspension

		  ### Grounds (Article 38)
		  Notifying authority may suspend/withdraw designation if:
		  - No longer meets designation criteria
		  - Fails to perform obligations
		  - Breaches confidentiality
		  - Issues non-compliant certificates

		  ### Procedure
		  - Investigation of suspected non-compliance
		  - Opportunity for notified body to respond
		  - Formal decision with reasoning
		  - Notification to Commission and other Member States
		  - Provider notification (for affected certificates)

		  ### Affected AI Systems
		  If designation withdrawn:
		  - **Valid certificates**: May remain valid if compliant
		  - **Pending assessments**: Transfer to another notified body
		  - **Provider options**: Re-certification by another notified body

		  ## Certificates Issued

		  ### EU Technical Documentation Assessment Certificate
		  Confirms:
		  - Technical documentation compliant with Annex IV
		  - AI system meets AI Act requirements
		  - Risk management system adequate
		  - Quality management system effective

		  **Validity**: Typically 5 years (may vary by assessment scope)

		  ### Surveillance Reports
		  Periodic verification of continued compliance:
		  - Annual surveillance audits
		  - Extraordinary audits (if serious incident or non-compliance suspected)

		  ## Coordination Mechanisms

		  ### Sectoral Groups
		  Notified bodies coordinate by sector:
		  - **Medical AI**: Notified bodies for medical devices
		  - **Automotive AI**: Notified bodies for machinery/vehicles
		  - **Aviation AI**: Notified bodies for aviation products

		  ### Cross-Border Coordination
		  - **Joint assessments**: For AI systems used EU-wide
		  - **Mutual recognition**: Accept other notified bodies' findings (with verification)
		  - **Information exchange**: Technical insights, emerging risks

		  ## Relationship to Other Bodies

		  ### Notifying Authorities (Article 28)
		  - **Designation**: Notifying authority appoints notified body
		  - **Monitoring**: Authority oversees notified body performance
		  - **Enforcement**: Authority can suspend/withdraw designation

		  ### AI Office and AI Board
		  - **Guidance**: AI Office provides interpretative guidance
		  - **Coordination**: AI Board facilitates harmonised approach
		  - **Reporting**: Notified bodies report assessment challenges

		  ### Providers
		  - **Contractual**: Provider engages notified body for assessment
		  - **Fee-based**: Provider pays for conformity assessment services
		  - **Cooperative**: Provider provides documentation and access

		  ### Market Surveillance Authorities (Article 74)
		  - **Post-market**: Authorities verify notified body certificate validity
		  - **Investigation**: Authorities may question notified body findings
		  - **Corrective action**: Authorities can order re-assessment

		  ## Fees and Costs

		  ### Provider Responsibility
		  - **Assessment fees**: Notified body charges provider
		  - **Market-based**: Competitive pricing among notified bodies
		  - **Proportionate**: Fees reflect assessment scope and complexity

		  ### Typical Fee Components
		  - Application review
		  - Documentation assessment
		  - On-site audit
		  - Surveillance activities
		  - Certificate issuance

		  ## Transition Period

		  ### Existing Notified Bodies (Annex I Legislation)
		  Notified bodies under existing product legislation (MDR, Machinery, etc.) may:
		  - Extend notification to cover AI Act requirements
		  - Undergo additional competence assessment for AI
		  - Begin AI conformity assessments once AI Act applicable

		  ### New Notified Bodies
		  Member States designate new notified bodies specifically for:
		  - Standalone high-risk AI (Annex III biometric systems)
		  - AI conformity assessment expertise

		  **Timeline**: Notified bodies operational by 2 August 2027 (full AI Act application)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z