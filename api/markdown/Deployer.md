- ### OntologyBlock
  id:: deployer-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0884
	- preferred-term:: Deployer
	- status:: draft
	- public-access:: true
	- definition:: A natural or legal person, public authority, agency or other body using an AI system under its authority except where the AI system is used in the course of a personal non-professional activity.

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Deployer))

;; Annotations
(AnnotationAssertion rdfs:label :Deployer "Deployer"@en)
(AnnotationAssertion rdfs:comment :Deployer "A natural or legal person, public authority, agency or other body using an AI system under its authority except where the AI system is used in the course of a personal non-professional activity."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Deployer "mv-1761742247914"^^xsd:string)
```

## Source

**Primary**: EU AI Act Article 3(4)
**Reference**: Article 26 (Deployer Obligations)

## Regulatory Context

Deployers are end-users of AI systems in professional contexts. They bear responsibilities for proper use, human oversight, and monitoring, particularly for high-risk AI systems. The AI Act recognises deployers as critical actors in ensuring real-world AI system accountability.

## Key Characteristics

### Who Qualifies as Deployer?

#### Professional Use Contexts
- **Employers**: Using AI for HR, workforce management
- **Public authorities**: Government AI deployment
- **Healthcare providers**: AI-assisted diagnosis, treatment
- **Financial institutions**: Credit scoring, fraud detection
- **Educational institutions**: AI for admissions, assessment
- **Law enforcement**: Biometric identification, risk assessment

#### Exclusion
**Not deployers**:
- Individuals using AI for **personal non-professional** activities
  - Personal photo editing
  - Consumer chatbots for leisure
  - Entertainment AI applications

### Authority Criterion
System used "under its authority" means:
- **Control**: Deployer determines how/when system operates
- **Purpose**: Deployer sets objectives for AI use
- **Responsibility**: Deployer accountable for deployment consequences

## Deployer Obligations for High-Risk AI (Article 26)

### 1. Instructions for Use Compliance (Article 26(1))
- **Read and understand** provider's instructions
- **Follow specifications** for intended purpose
- **Respect limitations** indicated by provider

### 2. Human Oversight (Article 26(2))
Assign human oversight to persons who:
- Have **necessary competence, training, authority**
- Are **supported by adequate resources**

Oversight must enable natural persons to:
- Understand system capabilities and limitations
- Monitor operation
- Interpret outputs
- Override or interrupt system (including "stop" button)
- Recognise anomalies, dysfunctions, unexpected performance

### 3. Input Data Monitoring (Article 26(3))
Monitor operation with particular attention to:
- **Input data quality**: Relevant to intended purpose
- **Representation**: Appropriate for deployment context

### 4. Logging Review (Article 26(4))
Keep and use logs provided by high-risk AI system:
- **Accessibility**: Logs available to deployer
- **Purpose**: Monitoring, incident investigation, compliance verification

### 5. Fundamental Rights Impact Assessment (Article 27)
**Mandatory for**:
- **Public authorities** deploying high-risk AI
- **Private entities providing public services** (education, healthcare, social services, law enforcement support)

**Before** putting into service, conduct assessment containing:

#### FRIA Elements
- **System description**: High-risk AI system and intended use
- **Deployment timeframe**: Duration and scope
- **Categories of persons**: Affected natural persons and groups
- **Fundamental rights risks**: Specific rights potentially impacted
- **Beneficiaries**: Persons or groups benefiting from use
- **Risk likelihood and severity**: Assessed fundamental rights impact
- **Complementary measures**: Human oversight, complaint mechanisms, redress
- **Consultation**: Works council or employee representatives (where applicable)

**Submission**: Provide FRIA to market surveillance authority upon request

### 6. Monitoring Obligations (Article 26(5))
- **Suspend use** if system becomes non-compliant
- **Inform provider and distributor** of suspected non-compliance
- **Inform provider and market surveillance authority** if serious incident occurs

### 7. Cooperation (Article 26(8))
Upon market surveillance authority request:
- **Provide documentation**: FRIA, monitoring records
- **Grant access**: Allow inspection of logs
- **Explain use**: Deployment context and measures

## Deployer Becoming Provider (Article 28)

A deployer becomes a provider (with full provider obligations) when making:

### Substantial Modification
Changes to high-risk AI system that:
- Alter **intended purpose** beyond provider's specifications
- Involve **substantial modification** not foreseen by provider

**Examples**:
- Hiring AI repurposed for performance evaluation
- Credit scoring system modified for insurance pricing
- Educational assessment tool altered for employment screening

**Consequence**: Full provider obligations apply, including conformity assessment

## Sector-Specific Deployer Obligations

### Law Enforcement, Migration, Border Management (Article 26(6)-(7))

#### Prior Fundamental Rights Impact Assessment
Required before first use.

#### Registration in EU Database
Log each use case in publicly accessible database managed by Commission.

#### Information to Affected Persons
Inform individuals subjected to high-risk AI system, except when:
- Compromises ongoing investigation
- Impairs operational security
- Violates procedural law

#### Complaint Procedures
Ensure access to effective remedies for affected persons.

### Biometric Identification Deployers (Article 26(7))

#### Real-Time RBI (if legally authorised under Article 5 exceptions)
- Prior judicial or administrative authorisation
- Fundamental rights impact assessment
- Two-person verification of results
- Temporal/geographic/personal scope limitations

## Record-Keeping Requirements

Deployers must maintain:
- **Logs from AI system**: Retention period per provider instructions
- **FRIA documentation**: Throughout deployment and available for inspection
- **Use case registration**: Law enforcement database entries
- **Monitoring records**: Performance tracking, incident reports

**Retention**: As long as system in use + reasonable period after (typically aligned with data protection retention)

## Penalties for Non-Compliance

Deployers violating obligations face:
- **Administrative fines**: Proportionate to infringement severity
- **Injunctions**: Orders to suspend use or implement corrective measures
- **Liability**: Civil damages to affected persons (Product Liability, AI Liability Directive)

**Specific penalties**: Member States determine deployer fine amounts (Article 99 focuses on providers)

## Rights and Protections

### Access to Information
Deployers entitled to:
- Clear instructions for use from provider
- Transparency about system capabilities and limitations
- Technical support from provider

### Legitimate Use Defence
Deployers not liable if:
- Followed provider's instructions
- Conducted required oversight
- Properly monitored inputs and logs
- Reported incidents promptly

**Provider liability**: May extend to deployer harm if provider instructions inadequate

## Deployer Categories

### Public Authority Deployers
**Enhanced obligations**:
- Mandatory FRIA
- Public transparency
- Complaint mechanisms
- Democratic oversight

### Private Entity Deployers (Public Services)
**Quasi-public obligations** when providing:
- Healthcare
- Education
- Social services
- Transport
- Utilities

### Commercial Deployers
**Standard obligations**: Human oversight, monitoring, cooperation

## Related Concepts

- **Provider** (AI-0127): AI system developer/supplier
- **Instructions for Use** (AI-0144): Deployer enablement documentation
- **Human Oversight Requirements** (AI-0140): Deployer implementation
- **Fundamental Rights Impact Assessment** (AI-0153): Public authority obligation

## Practical Guidance

### Due Diligence Before Deployment
1. **Risk classification verification**: Confirm high-risk status
2. **Provider reputation assessment**: Credible, established provider
3. **Documentation review**: Complete instructions, CE marking
4. **Internal capability assessment**: Sufficient expertise for oversight
5. **FRIA preparation**: If public authority or public service

### Operational Best Practices
- **Staff training**: Human oversight competence development
- **Incident response plan**: Serious incident reporting readiness
- **Regular audits**: Periodic review of AI system performance
- **Stakeholder engagement**: Affected persons, works councils, civil society

### Red Flags to Suspend Use
- Unexpected bias in outputs
- Accuracy degradation
- Security vulnerabilities discovered
- Provider recalls or warnings
- Serious incidents

## See Also

- EU AI Act Article 26 (Obligations of Deployers of High-Risk AI Systems)
- Article 27 (Fundamental Rights Impact Assessment for High-Risk AI Systems)
- Article 28 (Obligations of Deployers of High-Risk AI Systems That Are Public Authorities)
- Commission Deployer Guidance (expected 2026)
	- maturity:: draft
	- owl:class:: mv:Deployer
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[Metaverse]]
	- belongsToDomain:: [[MetaverseDomain]]
