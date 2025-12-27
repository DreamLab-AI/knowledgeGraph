- ### OntologyBlock
  id:: provider-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0517
	- source-domain:: mv
	- preferred-term:: Provider
	- status:: draft
	- public-access:: true
	- definition:: A natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model, or that has an AI system or a general-purpose AI model developed, and places it on the market or puts the AI system into service under its own name or trademark, whether for payment or free of charge.

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Provider))

;; Annotations
(AnnotationAssertion rdfs:label :Provider "Provider"@en)
(AnnotationAssertion rdfs:comment :Provider "A natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model, or that has an AI system or a general-purpose AI model developed, and places it on the market or puts the AI system into service under its own name or trademark, whether for payment or free of charge."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Provider "mv-1761742247959"^^xsd:string)
```

## Source

**Primary**: EU AI Act Article 3(3)
**Context**: Primary duty bearer for AI system compliance

## Regulatory Context

The provider is the central actor in the EU AI Act compliance framework, bearing primary responsibility for ensuring AI systems meet all applicable requirements before market placement or putting into service.

## Key Characteristics

### Who Qualifies as Provider?

#### Development Scenarios
1. **Direct development**: Develops AI in-house
2. **Contracted development**: Commissions third party to develop AI under provider's specifications
3. **Customisation**: Substantially modifies existing AI system

#### Market Placement
4. **Own name/trademark**: System bears provider's brand
5. **Payment or free**: Commercial activity regardless of revenue

### Provider Types
- **Natural persons**: Individual developers
- **Legal persons**: Companies, organisations
- **Public authorities**: Government agencies
- **Agencies**: Regulatory or administrative bodies
- **Other bodies**: Non-profit entities, research institutions

## Geographic Scope

### EU-Established Providers
Providers located or established in the EU.

**Obligations**: Full direct compliance with AI Act

### Non-EU Providers
Two pathways to EU market:

#### Option 1: Authorised Representative (Article 22)
Appoint EU-established representative to:
- Act on provider's behalf
- Serve as compliance contact
- Maintain documentation
- Liaise with authorities

#### Option 2: Through Importer (Article 23)
EU-based importer assumes certain provider responsibilities

## Provider Obligations for High-Risk AI

### Pre-Market Requirements (Articles 8-15)

#### 1. Risk Management System (Article 9)
Establish continuous iterative process for:
- Risk identification
- Risk analysis
- Risk estimation
- Risk mitigation

#### 2. Data Governance (Article 10)
Ensure training, validation, testing datasets are:
- Relevant
- Representative
- Error-free
- Complete

#### 3. Technical Documentation (Article 11)
Prepare comprehensive documentation per Annex IV:
- System description
- Design specifications
- Development process
- Testing results
- Risk assessment

#### 4. Record-Keeping Capability (Article 19)
Design automatic logging to enable:
- Event tracing
- Risk monitoring
- Post-market surveillance

#### 5. Transparency (Article 13)
Provide clear information to deployers:
- Intended purpose
- Capabilities
- Limitations
- Accuracy levels
- Human oversight requirements

#### 6. Human Oversight (Article 14)
Enable effective oversight through:
- Monitoring capabilities
- Interpretation tools
- Override mechanisms
- Awareness of limitations

#### 7. Accuracy, Robustness, Cybersecurity (Article 15)
Achieve appropriate levels of:
- Performance accuracy
- Error resilience
- Security protection

### Conformity Assessment (Article 43)
Complete before placing on market:
- Internal control (Annex VI), OR
- Third-party assessment (Annex VII)

Issue:
- EU Declaration of Conformity (Article 47)
- CE marking (Article 48)

### Post-Market Obligations (Articles 16-21, 72-73)

#### Quality Management System (Article 17)
Maintain documented system for:
- Regulatory compliance
- Quality assurance
- Continuous improvement

#### Post-Market Monitoring (Article 72)
Systematically:
- Collect performance data
- Analyse real-world operation
- Evaluate continued compliance

#### Serious Incident Reporting (Article 73)
Report without undue delay to:
- Market surveillance authorities
- AI Office (if applicable)

#### Corrective Actions (Article 21)
When non-compliance identified:
- Immediately take corrective action
- Withdraw or recall if necessary
- Inform authorities and deployers

#### Cooperation (Article 25)
Upon authority request:
- Provide documentation
- Grant access to systems
- Deliver samples
- Demonstrate compliance

### Documentation Retention (Article 18)
Maintain for **10 years**:
- Technical documentation
- EU Declaration of Conformity
- Quality management system records
- Post-market monitoring reports

## Provider Obligations for GPAI Models

### Standard GPAI (Article 53)
1. **Technical documentation** (Annex XI)
2. **Downstream transparency information** (Annex XII)
3. **Copyright compliance policy**
4. **Training content summary** (publicly available)

### GPAI with Systemic Risk (Article 55)
Additional requirements:
5. **Model evaluation** and adversarial testing
6. **Systemic risk assessment and mitigation**
7. **Serious incident reporting**
8. **Cybersecurity protection**
9. **Energy efficiency reporting**

## Exemptions and Special Cases

### Free and Open-Source GPAI Models (Article 53(5))
Exempt from:
- Technical documentation (Article 53(1)(a))
- Downstream transparency (Article 53(1)(b))

If parameters, weights, information publicly available under open licence.

### Research and Development (Article 2(6))
AI systems solely for scientific research and development not subject to AI Act.

**Ceases upon market placement or putting into service**

## Provider Transformation

### When Non-Provider Becomes Provider

#### Substantial Modification (Article 28(1))
Deployer or distributor becomes provider if:
- Changing intended purpose
- Making substantial modification

**New obligations**: Full provider compliance required

#### Own-Use Development
Entity developing AI for internal use only:
- **Provider obligations**: Yes (putting into service)
- **Deployer obligations**: Also yes (dual role)

## Liability and Penalties

### Administrative Fines (Article 99)
- **Prohibited practices**: Up to €35M or 7% global turnover
- **High-risk requirements**: Up to €15M or 3% global turnover
- **Information obligations**: Up to €7.5M or 1.5% global turnover

### Product Liability
- **Directive 85/374/EEC**: Defective product liability
- **Proposed AI Liability Directive**: Fault-based claims
- **Civil damages**: Harm compensation to affected persons

### Criminal Liability
Serious violations may constitute:
- Fraud
- Negligence causing harm
- Data protection offences

## Rights and Protections

### Compliance Pathways
- **Harmonised standards**: Presumption of conformity (Article 40)
- **Common specifications**: Alternative compliance route (Article 41)
- **Regulatory sandboxes**: Supervised innovation (Article 57)

### Representation
- **Trade associations**: Collective engagement
- **Advisory Forum**: Stakeholder input (Article 67)
- **Codes of practice**: Industry-led compliance (Articles 56, 95)

## Related Concepts

- **Deployer** (AI-0128): User of AI systems
- **Authorised Representative** (AI-0130): Non-EU provider's EU agent
- **Importer** (AI-0129): Third-country system introducer
- **Distributor** (AI-0131): Supply chain intermediary

## Practical Guidance

### For Startups
- Early risk classification assessment
- Incremental compliance building
- Regulatory sandbox participation
- Open-source exemption evaluation

### For Enterprises
- Centralized AI governance function
- Cross-functional compliance teams
- Third-party audit programmes
- Supply chain due diligence

### For Public Authorities
- Fundamental rights impact assessments mandatory
- Procurement specification compliance
- Internal expertise development
- Inter-agency coordination

## See Also

- EU AI Act Chapter II (Provider and Deployer Obligations)
- Articles 16-29 (Detailed Provider Requirements)
- Annex IV (Technical Documentation Template)
- Commission Provider Guidance (expected 2026)
	- maturity:: draft
	- owl:class:: mv:Provider
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[Metaverse]]
	- belongsToDomain:: [[MetaverseDomain]]
