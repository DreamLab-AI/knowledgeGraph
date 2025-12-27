- ### OntologyBlock
  id:: importer-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: MV-0510
	- source-domain:: mv
	- preferred-term:: Importer
	- status:: draft
	- public-access:: true
	- definition:: A natural or legal person located or established in the Union that places on the market an AI system that bears the name or trademark of a natural or legal person established in a third country.

## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :Importer))

;; Annotations
(AnnotationAssertion rdfs:label :Importer "Importer"@en)
(AnnotationAssertion rdfs:comment :Importer "A natural or legal person located or established in the Union that places on the market an AI system that bears the name or trademark of a natural or legal person established in a third country."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :Importer "mv-1761742247936"^^xsd:string)
```

## Source

**Primary**: EU AI Act Article 3(10)
**Reference**: Article 23 (Importer Obligations)

## Regulatory Context

Importers serve as the EU entry point for AI systems from non-EU providers, assuming critical compliance verification and market surveillance liaison responsibilities. They act as a regulatory bridge ensuring third-country AI systems meet EU AI Act requirements.

## Key Characteristics

### Who Qualifies as Importer?

#### Geographic Requirements
- **Importer location**: Established in EU/EEA
- **AI system origin**: Third country (non-EU)
- **Provider location**: Established outside EU

#### Placing on Market Activity
- **First making available** in EU under third-country provider's name/trademark
- **Commercial activity**: Whether payment or free of charge

### Distinction from Distributor
- **Importer**: First EU placement from third country
- **Distributor**: Subsequent supply after placement

### Distinction from Authorised Representative
- **Importer**: Places on market in own capacity
- **Authorised Representative**: Acts on non-EU provider's behalf (Article 22)

## Importer Obligations for High-Risk AI (Article 23)

### Pre-Placement Verification (Article 23(1))

Before placing on market, importers must verify:

#### 1. Conformity Assessment Completion
- Provider has conducted conformity assessment (Article 43)
- Assessment documentation available

#### 2. Technical Documentation Availability
- Technical documentation prepared per Annex IV
- Accessible to market surveillance authorities

#### 3. CE Marking Affixation
- CE marking properly affixed by provider
- Notified body number (if applicable) present

#### 4. Instructions for Use Provision
- Instructions accompany system
- In language(s) acceptable to deployers in target Member State

#### 5. Provider Obligations Compliance
- Provider has fulfilled Article 16 requirements
- Non-EU provider has authorised representative OR importer assumes responsibility

### Identification Requirements (Article 23(2))

Importers must indicate on AI system:
- **Own name**
- **Own trade name or trademark**
- **Postal address**
- **Contact details** (email, website)

**Where indicated**: System itself or packaging or accompanying documentation

**Traceability purpose**: Enable identification of importer in supply chain

### Documentation and Compliance Maintenance (Article 23(3))

#### EU Declaration of Conformity
- Ensure declaration available to market surveillance authorities
- Maintain copy for 10 years after placement

#### Cooperation with Authorities
- Provide authorities with all information and documentation to demonstrate:
  - System compliance
  - Provider compliance
  - Import legality

#### Language
Ensure documentation in language:
- Easily understood by authorities
- Of Member State where system made available

### Storage and Transport (Article 23(4))
Ensure conditions during:
- Storage
- Transport

Do not jeopardise compliance with requirements.

### Traceability (Article 23(5))
Maintain for **10 years** after placing on market:
- AI system identification (name, type, batch, serial)
- Non-EU provider details
- Distributors supplied
- Import dates and quantities

## Non-Compliance Response (Article 23(6))

When importer considers or has reason to believe AI system **non-compliant**:

### Step 1: Do Not Place
- **Prohibition**: Do not place on market
- **Duration**: Until compliance ensured

### Step 2: Inform Provider
- Notify non-EU provider
- Request corrective action

### Step 3: Inform Authorities (if serious risk)
- Market surveillance authority
- Provide details of non-compliance

### Step 4: Corrective Actions (if already placed)
If system already on market and non-compliance discovered:
- Immediately inform provider
- Inform market surveillance authorities
- Take corrective action (withdrawal, recall)

## Cooperation Obligations (Article 25)

Upon market surveillance authority request:

### Information Provision
- All information and documentation necessary to demonstrate compliance
- In language acceptable to authority
- Promptly (typically within days)

### Sample and Access
- Provide AI system samples
- Grant access for examination
- Enable testing

### Corrective Action Support
- Assist in withdrawals and recalls
- Inform distributors and deployers
- Coordinate with non-EU provider

## Serious Incident Reporting (Article 73)

If importer becomes aware of serious incident:
- **Inform non-EU provider** immediately
- **Inform market surveillance authority** without undue delay
- **Report to AI Office** (if GPAI systemic risk)

## Transformation into Provider (Article 23(7))

Importer **becomes provider** (with full provider obligations) if:

### Substantial Modification
- Modifying AI system in a way that affects compliance
- Altering intended purpose

### Own Name/Trademark Placement
- Placing under importer's name/trademark (not original provider's)

**Consequence**: Full provider conformity assessment and compliance obligations

## Liability and Penalties

### Administrative Fines
Importers face penalties for:
- Placing non-compliant high-risk AI on market
- Failing to verify compliance
- Not cooperating with authorities

**Maximum amounts**: Similar to provider penalties (proportionate to violation)

### Product Liability
- **Directive 85/374/EEC**: Importer treated as producer for defective products
- **National tort law**: Negligence liability
- **Proposed AI Liability Directive**: Fault-based liability for AI harm

### Joint and Several Liability
Importers may be jointly liable with providers for:
- Defective AI systems
- Fundamental rights violations
- Safety incidents

## Due Diligence Best Practices

### Pre-Import Verification Checklist
1. **Provider reputation**: Established, credible third-country provider
2. **Compliance documentation**: Complete technical documentation review
3. **Conformity assessment**: Verify notified body involvement (if required)
4. **CE marking**: Authentic, properly affixed
5. **Instructions**: Language and completeness cheque
6. **Authorised representative**: Verify non-EU provider has EU representative OR importer assumes role

### Contractual Protections
- **Compliance warranties**: Provider warrants AI Act compliance
- **Indemnification**: Provider indemnifies importer for non-compliance
- **Documentation provision**: Obligation to supply all required documents
- **Recall cooperation**: Procedures for corrective actions

### Ongoing Monitoring
- **Post-market surveillance**: Track performance and incidents
- **Authority updates**: Stay informed on AI Act guidance
- **Provider communication**: Regular compliance status cheques

## Non-EU Provider Coordination

### Authorised Representative Relationship
If non-EU provider has authorised representative (Article 22):
- **Importer**: Focuses on placing and supply chain
- **Authorised representative**: Handles authority liaison, compliance verification

### No Authorised Representative
If provider lacks EU representative:
- **Importer**: Assumes broader compliance verification role
- **Responsibility**: Greater liability for ensuring provider compliance

## Practical Scenarios

### Scenario 1: US AI Software Importer
EU company importing US-developed HR recruitment AI.

**Obligations**:
- Verify US provider completed conformity assessment
- Ensure CE marking and EU Declaration of Conformity
- Provide German/French instructions (target markets)
- Maintain 10-year traceability records

### Scenario 2: Multiple Third-Country Providers
EU importer distributing AI from China, India, USA.

**Risk management**:
- Due diligence on each provider
- Separate compliance verification per system
- Comprehensive traceability by origin
- Authority cooperation protocols

### Scenario 3: Substantial Modification During Import
Importer customises imported AI for EU market.

**Consequence**: Becomes provider, requires new conformity assessment

## Related Concepts

- **Provider** (AI-0127): Primary duty-bearer
- **Authorised Representative** (AI-0131): Non-EU provider's EU agent
- **Distributor** (AI-0129): Subsequent supply chain actor
- **Placing on the Market** (AI-0124): Importer's key activity

## See Also

- EU AI Act Article 23 (Obligations of Importers)
- Article 22 (Authorised Representatives)
- Article 25 (Responsibilities Along the AI Value Chain)
- Market Surveillance Regulation (EU) 2019/1020
	- maturity:: draft
	- owl:class:: mv:Importer
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- is-subclass-of:: [[Metaverse]]
	- belongsToDomain:: [[MetaverseDomain]]
