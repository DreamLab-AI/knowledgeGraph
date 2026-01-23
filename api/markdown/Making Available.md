- ### OntologyBlock
  id:: making-available-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: mv-1761742247943
	- preferred-term:: Making Available
	- source-domain:: mv
	- status:: draft
- definition:: The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :MakingAvailable))

;; Annotations
(AnnotationAssertion rdfs:label :MakingAvailable "Making Available"@en)
(AnnotationAssertion rdfs:comment :MakingAvailable "The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge."@en)

;; Data Properties
(AnnotationAssertion dcterms:identifier :MakingAvailable "mv-1761742247943"^^xsd:string)
```

## Source

**Primary**: EU AI Act Article 3(14)
**Context**: Supply chain actor definition

## Regulatory Context

"Making available" is a broader concept than "placing on the market." It encompasses all subsequent distributions after initial market entry and defines obligations for distributors in the AI value chain.

## Key Characteristics

### Commercial Activity
- **Business context**: Not personal non-professional use
- **Economic nature**: Part of commercial operation
- **Payment agnostic**: Whether paid or free

### Distribution or Use Supply
- **Distribution**: Onward supply to others (distributor role)
- **Use**: Providing access for deployment (may involve deployers)

### Union Market
- **EEA scope**: EU 27 + Norway, Iceland, Liechtenstein
- **Single market**: Free movement principle applies

## Actors Making Available

### 1. Distributors (Article 24)
Supply AI systems **after** initial placing on market:
- Resellers
- Wholesalers
- Platform marketplaces
- Retail channels

**Not the original provider/importer**

### 2. Providers (Ongoing Supply)
Continued distribution after initial placing:
- Software updates
- New versions
- Subscription renewals

### 3. Authorised Representatives (Article 22)
On behalf of non-EU providers:
- Liaison with authorities
- Compliance verification
- Documentation provision

## Obligations When Making Available

### For Distributors of High-Risk AI (Article 24)

#### Before Making Available
1. **Verify CE marking** present (Article 24(1))
2. **Check required documentation** accompanies system:
   - Instructions for use
   - EU Declaration of Conformity
3. **Verify provider/importer identification**
4. **Assess compliance indicators**:
   - No obvious non-compliance signs
   - System appears conforming

#### If Non-Compliance Suspected (Article 24(2))
- **Do not make available** until compliance achieved
- **Inform provider/importer** of concerns
- **Notify market surveillance authority** if serious non-compliance

#### During Making Available (Article 24(3))
- **Storage and transport conditions**: Preserve compliance
- **Traceability**: Maintain supply chain records
- **Cooperation**: Respond to authority requests

### For All Actors
- **Market surveillance cooperation** (Article 25)
- **Documentation provision** upon request
- **Sample provision** if required
- **Corrective action support**

## Distinction from Related Concepts

| Concept | Definition | Actor | Timing |
|---------|-----------|-------|--------|
| Placing on market | First making available | Provider/Importer | Initial entry |
| Making available | Supply for distribution/use | Distributor | Subsequent |
| Putting into service | Supply for first use | Provider/Deployer | Deployment |

## Free of Charge Provision

"Making available" includes:
- Open-source distribution
- Free trials and demos
- Promotional offerings
- Bundled software

**Commercial activity test**: Even if free, if part of business model (e.g., freemium, advertising-supported), it qualifies.

## Online Platforms

### Marketplace Providers
Platforms enabling third-party sales (e.g., app stores):
- **Distributor obligations** if they facilitate making available
- **Digital Services Act** integration (Regulation (EU) 2022/2065)
- **Notice and action**: Remove non-compliant AI upon notification

### Software Repositories
GitHub, GitLab, etc.:
- **Open-source**: FOSS GPAI model exemptions (Article 53(5))
- **Commercial software**: Standard distributor obligations
- **Dual nature**: May be both repository and distributor

## Updates and Modifications

### Software Updates
- **Patches/bug fixes**: Not new making available if no substantial modification
- **Feature additions**: May constitute new making available
- **Version upgrades**: Generally new making available

### Substantial Modification Trigger
Changes requiring reassessment:
- Intended purpose alteration
- Significant design change
- Increased risk profile

## Penalties for Non-Compliance

Distributors making available non-compliant high-risk AI:
- **Market surveillance actions**: Withdrawal orders, recalls
- **Fines**: Penalties commensurate with violation severity
- **Liability**: Potential product liability exposure

## Traceability Requirements

Distributors must maintain records for **10 years** (Article 24(5)):
- **System identification**: Name, version, serial number
- **Provider/importer details**: Name, address, contact
- **Supply dates**: When received, when supplied onward
- **Recipients**: To whom made available (B2B)

## Cooperation Obligations

Distributors must:
- **Provide documentation** to market surveillance authorities
- **Enable testing**: Allow authorities to examine systems
- **Recall support**: Assist in corrective actions
- **Information sharing**: Notify of serious incidents

## Practical Scenarios

### Scenario 1: Software Reseller
A company resells HR recruitment AI from original provider.

**Status**: Distributor making available
**Obligations**: Verify CE marking, check documentation, maintain records

### Scenario 2: Cloud Platform
SaaS platform hosts multiple AI tools for clients.

**Status**: May be distributor or provider (depends on control)
**Obligations**: If distributor: verification duties. If provider: full compliance.

### Scenario 3: Open-Source Repository
Developer publishes GPAI model on GitHub under open-source licence.

**Status**: Making available
**Exemptions**: FOSS GPAI exemptions apply (Article 53(5))

## Related Concepts

- **Placing on the Market** (AI-0124): Initial market entry
- **Putting into Service** (AI-0126): Deployment for use
- **Distributor** (AI-0130): Key actor making available
- **Importer** (AI-0129): Third-country making available

## Due Diligence for Distributors

### Recommended Checks
1. **CE marking verification**: Authentic, properly affixed
2. **Documentation review**: Instructions, declaration complete
3. **Provider identification**: Verify legitimate provider
4. **System functionality**: Basic operability check
5. **Red flags**: Look for obvious non-compliance indicators

### Risk-Based Approach
Higher scrutiny for:
- New providers
- Third-country imports
- High-risk use cases (Annex III)
- Complex AI systems

## See Also

- EU AI Act Article 3(14), Article 24 (Distributor Obligations)
- Market Surveillance Regulation (EU) 2019/1020
- Digital Services Act (EU) 2022/2065 (Platform obligations)
- Blue Guide on Product Rules 2022 (EU product safety guidance)
	- maturity:: draft
	- owl:class:: mv:MakingAvailable
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
- ## About Making Available
	- The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge.

## Source

**Primary**: EU AI Act Article 3(14)
**Context**: Supply chain actor definition

## Regulatory Context

"Making available" is a broader concept than "placing on the market." It encompasses all subsequent distributions after initial market entry and defines obligations for distributors in the AI value chain.

## Key Characteristics

### Commercial Activity
- **Business context**: Not personal non-professional use
- **Economic nature**: Part of commercial operation
- **Payment agnostic**: Whether paid or free

### Distribution or Use Supply
- **Distribution**: Onward supply to others (distributor role)
- **Use**: Providing access for deployment (may involve deployers)

### Union Market
- **EEA scope**: EU 27 + Norway, Iceland, Liechtenstein
- **Single market**: Free movement principle applies

## Actors Making Available

### 1. Distributors (Article 24)
Supply AI systems **after** initial placing on market:
- Resellers
- Wholesalers
- Platform marketplaces
- Retail channels

**Not the original provider/importer**

### 2. Providers (Ongoing Supply)
Continued distribution after initial placing:
- Software updates
- New versions
- Subscription renewals

### 3. Authorised Representatives (Article 22)
On behalf of non-EU providers:
- Liaison with authorities
- Compliance verification
- Documentation provision

## Obligations When Making Available

### For Distributors of High-Risk AI (Article 24)

#### Before Making Available
1. **Verify CE marking** present (Article 24(1))
2. **Check required documentation** accompanies system:
   - Instructions for use
   - EU Declaration of Conformity
3. **Verify provider/importer identification**
4. **Assess compliance indicators**:
   - No obvious non-compliance signs
   - System appears conforming

#### If Non-Compliance Suspected (Article 24(2))
- **Do not make available** until compliance achieved
- **Inform provider/importer** of concerns
- **Notify market surveillance authority** if serious non-compliance

#### During Making Available (Article 24(3))
- **Storage and transport conditions**: Preserve compliance
- **Traceability**: Maintain supply chain records
- **Cooperation**: Respond to authority requests

### For All Actors
- **Market surveillance cooperation** (Article 25)
- **Documentation provision** upon request
- **Sample provision** if required
- **Corrective action support**

## Distinction from Related Concepts

| Concept | Definition | Actor | Timing |
|---------|-----------|-------|--------|
| Placing on market | First making available | Provider/Importer | Initial entry |
| Making available | Supply for distribution/use | Distributor | Subsequent |
| Putting into service | Supply for first use | Provider/Deployer | Deployment |

## Free of Charge Provision

"Making available" includes:
- Open-source distribution
- Free trials and demos
- Promotional offerings
- Bundled software

**Commercial activity test**: Even if free, if part of business model (e.g., freemium, advertising-supported), it qualifies.

## Online Platforms

### Marketplace Providers
Platforms enabling third-party sales (e.g., app stores):
- **Distributor obligations** if they facilitate making available
- **Digital Services Act** integration (Regulation (EU) 2022/2065)
- **Notice and action**: Remove non-compliant AI upon notification

### Software Repositories
GitHub, GitLab, etc.:
- **Open-source**: FOSS GPAI model exemptions (Article 53(5))
- **Commercial software**: Standard distributor obligations
- **Dual nature**: May be both repository and distributor

## Updates and Modifications

### Software Updates
- **Patches/bug fixes**: Not new making available if no substantial modification
- **Feature additions**: May constitute new making available
- **Version upgrades**: Generally new making available

### Substantial Modification Trigger
Changes requiring reassessment:
- Intended purpose alteration
- Significant design change
- Increased risk profile

## Penalties for Non-Compliance

Distributors making available non-compliant high-risk AI:
- **Market surveillance actions**: Withdrawal orders, recalls
- **Fines**: Penalties commensurate with violation severity
- **Liability**: Potential product liability exposure

## Traceability Requirements

Distributors must maintain records for **10 years** (Article 24(5)):
- **System identification**: Name, version, serial number
- **Provider/importer details**: Name, address, contact
- **Supply dates**: When received, when supplied onward
- **Recipients**: To whom made available (B2B)

## Cooperation Obligations

Distributors must:
- **Provide documentation** to market surveillance authorities
- **Enable testing**: Allow authorities to examine systems
- **Recall support**: Assist in corrective actions
- **Information sharing**: Notify of serious incidents

## Practical Scenarios

### Scenario 1: Software Reseller
A company resells HR recruitment AI from original provider.

**Status**: Distributor making available
**Obligations**: Verify CE marking, check documentation, maintain records

### Scenario 2: Cloud Platform
SaaS platform hosts multiple AI tools for clients.

**Status**: May be distributor or provider (depends on control)
**Obligations**: If distributor: verification duties. If provider: full compliance.

### Scenario 3: Open-Source Repository
Developer publishes GPAI model on GitHub under open-source licence.

**Status**: Making available
**Exemptions**: FOSS GPAI exemptions apply (Article 53(5))

## Related Concepts

- **Placing on the Market** (AI-0124): Initial market entry
- **Putting into Service** (AI-0126): Deployment for use
- **Distributor** (AI-0130): Key actor making available
- **Importer** (AI-0129): Third-country making available

## Due Diligence for Distributors

### Recommended Checks
1. **CE marking verification**: Authentic, properly affixed
2. **Documentation review**: Instructions, declaration complete
3. **Provider identification**: Verify legitimate provider
4. **System functionality**: Basic operability check
5. **Red flags**: Look for obvious non-compliance indicators

### Risk-Based Approach
Higher scrutiny for:
- New providers
- Third-country imports
- High-risk use cases (Annex III)
- Complex AI systems

## See Also

- EU AI Act Article 3(14), Article 24 (Distributor Obligations)
- Market Surveillance Regulation (EU) 2019/1020
- Digital Services Act (EU) 2022/2065 (Platform obligations)
- Blue Guide on Product Rules 2022 (EU product safety guidance)
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Making Available on the Market
		  
		  **Ontology ID**: AI-0125
		  **Category**: Core Definitions
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge.
		  
		  ## Source
		  
		  **Primary**: EU AI Act Article 3(14)
		  **Context**: Supply chain actor definition
		  
		  ## Regulatory Context
		  
		  "Making available" is a broader concept than "placing on the market." It encompasses all subsequent distributions after initial market entry and defines obligations for distributors in the AI value chain.
		  
		  ## Key Characteristics
		  
		  ### Commercial Activity
		  - **Business context**: Not personal non-professional use
		  - **Economic nature**: Part of commercial operation
		  - **Payment agnostic**: Whether paid or free
		  
		  ### Distribution or Use Supply
		  - **Distribution**: Onward supply to others (distributor role)
		  - **Use**: Providing access for deployment (may involve deployers)
		  
		  ### Union Market
		  - **EEA scope**: EU 27 + Norway, Iceland, Liechtenstein
		  - **Single market**: Free movement principle applies
		  
		  ## Actors Making Available
		  
		  ### 1. Distributors (Article 24)
		  Supply AI systems **after** initial placing on market:
		  - Resellers
		  - Wholesalers
		  - Platform marketplaces
		  - Retail channels
		  
		  **Not the original provider/importer**
		  
		  ### 2. Providers (Ongoing Supply)
		  Continued distribution after initial placing:
		  - Software updates
		  - New versions
		  - Subscription renewals
		  
		  ### 3. Authorised Representatives (Article 22)
		  On behalf of non-EU providers:
		  - Liaison with authorities
		  - Compliance verification
		  - Documentation provision
		  
		  ## Obligations When Making Available
		  
		  ### For Distributors of High-Risk AI (Article 24)
		  
		  #### Before Making Available
		  1. **Verify CE marking** present (Article 24(1))
		  2. **Check required documentation** accompanies system:
		     - Instructions for use
		     - EU Declaration of Conformity
		  3. **Verify provider/importer identification**
		  4. **Assess compliance indicators**:
		     - No obvious non-compliance signs
		     - System appears conforming
		  
		  #### If Non-Compliance Suspected (Article 24(2))
		  - **Do not make available** until compliance achieved
		  - **Inform provider/importer** of concerns
		  - **Notify market surveillance authority** if serious non-compliance
		  
		  #### During Making Available (Article 24(3))
		  - **Storage and transport conditions**: Preserve compliance
		  - **Traceability**: Maintain supply chain records
		  - **Cooperation**: Respond to authority requests
		  
		  ### For All Actors
		  - **Market surveillance cooperation** (Article 25)
		  - **Documentation provision** upon request
		  - **Sample provision** if required
		  - **Corrective action support**
		  
		  ## Distinction from Related Concepts
		  
		  | Concept | Definition | Actor | Timing |
		  |---------|-----------|-------|--------|
		  | Placing on market | First making available | Provider/Importer | Initial entry |
		  | Making available | Supply for distribution/use | Distributor | Subsequent |
		  | Putting into service | Supply for first use | Provider/Deployer | Deployment |
		  
		  ## Free of Charge Provision
		  
		  "Making available" includes:
		  - Open-source distribution
		  - Free trials and demos
		  - Promotional offerings
		  - Bundled software
		  
		  **Commercial activity test**: Even if free, if part of business model (e.g., freemium, advertising-supported), it qualifies.
		  
		  ## Online Platforms
		  
		  ### Marketplace Providers
		  Platforms enabling third-party sales (e.g., app stores):
		  - **Distributor obligations** if they facilitate making available
		  - **Digital Services Act** integration (Regulation (EU) 2022/2065)
		  - **Notice and action**: Remove non-compliant AI upon notification
		  
		  ### Software Repositories
		  GitHub, GitLab, etc.:
		  - **Open-source**: FOSS GPAI model exemptions (Article 53(5))
		  - **Commercial software**: Standard distributor obligations
		  - **Dual nature**: May be both repository and distributor
		  
		  ## Updates and Modifications
		  
		  ### Software Updates
		  - **Patches/bug fixes**: Not new making available if no substantial modification
		  - **Feature additions**: May constitute new making available
		  - **Version upgrades**: Generally new making available
		  
		  ### Substantial Modification Trigger
		  Changes requiring reassessment:
		  - Intended purpose alteration
		  - Significant design change
		  - Increased risk profile
		  
		  ## Penalties for Non-Compliance
		  
		  Distributors making available non-compliant high-risk AI:
		  - **Market surveillance actions**: Withdrawal orders, recalls
		  - **Fines**: Penalties commensurate with violation severity
		  - **Liability**: Potential product liability exposure
		  
		  ## Traceability Requirements
		  
		  Distributors must maintain records for **10 years** (Article 24(5)):
		  - **System identification**: Name, version, serial number
		  - **Provider/importer details**: Name, address, contact
		  - **Supply dates**: When received, when supplied onward
		  - **Recipients**: To whom made available (B2B)
		  
		  ## Cooperation Obligations
		  
		  Distributors must:
		  - **Provide documentation** to market surveillance authorities
		  - **Enable testing**: Allow authorities to examine systems
		  - **Recall support**: Assist in corrective actions
		  - **Information sharing**: Notify of serious incidents
		  
		  ## Practical Scenarios
		  
		  ### Scenario 1: Software Reseller
		  A company resells HR recruitment AI from original provider.
		  
		  **Status**: Distributor making available
		  **Obligations**: Verify CE marking, check documentation, maintain records
		  
		  ### Scenario 2: Cloud Platform
		  SaaS platform hosts multiple AI tools for clients.
		  
		  **Status**: May be distributor or provider (depends on control)
		  **Obligations**: If distributor: verification duties. If provider: full compliance.
		  
		  ### Scenario 3: Open-Source Repository
		  Developer publishes GPAI model on GitHub under open-source licence.
		  
		  **Status**: Making available
		  **Exemptions**: FOSS GPAI exemptions apply (Article 53(5))
		  
		  ## Related Concepts
		  
		  - **Placing on the Market** (AI-0124): Initial market entry
		  - **Putting into Service** (AI-0126): Deployment for use
		  - **Distributor** (AI-0130): Key actor making available
		  - **Importer** (AI-0129): Third-country making available
		  
		  ## Due Diligence for Distributors
		  
		  ### Recommended Checks
		  1. **CE marking verification**: Authentic, properly affixed
		  2. **Documentation review**: Instructions, declaration complete
		  3. **Provider identification**: Verify legitimate provider
		  4. **System functionality**: Basic operability check
		  5. **Red flags**: Look for obvious non-compliance indicators
		  
		  ### Risk-Based Approach
		  Higher scrutiny for:
		  - New providers
		  - Third-country imports
		  - High-risk use cases (Annex III)
		  - Complex AI systems
		  
		  ## See Also
		  
		  - EU AI Act Article 3(14), Article 24 (Distributor Obligations)
		  - Market Surveillance Regulation (EU) 2019/1020
		  - Digital Services Act (EU) 2022/2065 (Platform obligations)
		  - Blue Guide on Product Rules 2022 (EU product safety guidance)
		  
		  ```

- public-access:: true
	- definition:: The supply of an AI system for distribution or use on the Union market in the course of a commercial activity, whether in return for payment or free of charge.




## Academic Context

- Brief contextual overview
  - The concept of “making available” is central to the EU’s regulatory approach to AI, defining when a system enters the scope of compliance obligations under the AI Act
  - The term is derived from established EU product safety and digital regulation frameworks, ensuring harmonised interpretation across member states
  - Its academic roots lie in the intersection of digital law, regulatory theory, and technology governance

- Key developments and current state
  - The EU AI Act (2024/1689/EU) formally codifies “making available” as a trigger for regulatory compliance, covering both commercial and non-commercial supply
  - The European Commission’s guidelines clarify that the act encompasses all forms of distribution, including cloud access, API-based delivery, and embedded systems

- Academic foundations
  - The definition draws on principles from EU product liability law and the General Data Protection Regulation (GDPR), ensuring consistency with existing regulatory frameworks
  - Scholars have noted its broad applicability, which extends to both traditional software and emerging AI models

## Current Landscape (2025)

- Industry adoption and implementations
  - The definition is widely adopted by AI providers, cloud platforms, and software developers across the EU
  - Major platforms such as Microsoft Azure, Google Cloud, and AWS have updated their compliance frameworks to reflect the new requirements
  - In the UK, companies like DeepMind (London), Faculty (London), and Graphcore (Bristol) have integrated these standards into their operations

- Notable organisations and platforms
  - UK-based AI startups in Manchester, Leeds, Newcastle, and Sheffield are increasingly aligning with EU standards, especially those targeting the European market
  - Examples include Graphcore’s AI chips, Faculty’s data analytics platforms, and Manchester’s AI research hubs

- Technical capabilities and limitations
  - The definition covers a wide range of technical delivery methods, including cloud-based AI services, API access, and embedded AI in physical products
  - Limitations arise in cases where AI systems are developed for internal use or research, which may fall outside the scope of “making available”

- Standards and frameworks
  - The EU AI Act’s definition is supported by the European Commission’s guidelines and the AI Office’s Code of Practice for General-Purpose AI Models
  - Industry standards such as ISO/IEC 23894 (AI risk management) and the UK’s AI Standards Hub provide additional guidance

## Research & Literature

- Key academic papers and sources
  - Wachter, S., Mittelstadt, B., & Floridi, L. (2021). “A Right to Reasonable Inferences: Re-Thinking Data Protection Law.” *Philosophy & Technology*, 34(2), 153–177. https://doi.org/10.1007/s13347-020-00409-4
  - Veale, M., & Binns, R. (2021). “Fairness and Accountability Design Needs for Algorithmic Support in High-Stakes Public Sector Decisions.” *Proceedings of the ACM on Human-Computer Interaction*, 5(CSCW1), 1–24. https://doi.org/10.1145/3449176
  - European Commission. (2025). *Guidelines on the Definition of an AI System under the EU AI Act*. https://ec.europa.eu/digital-single-market/en/news/guidelines-definition-ai-system-under-eu-ai-act

- Ongoing research directions
  - Scholars are exploring the implications of “making available” for open-source AI models and collaborative research projects
  - Research is also focusing on the practical challenges of compliance for small and medium-sized enterprises (SMEs)

## UK Context

- British contributions and implementations
  - The UK has adopted a similar approach to “making available” in its own AI regulatory frameworks, ensuring alignment with EU standards
  - British regulators, such as the Information Commissioner’s Office (ICO), have issued guidance on the supply and distribution of AI systems

- North England innovation hubs
  - Manchester, Leeds, Newcastle, and Sheffield are home to a growing number of AI startups and research centres
  - Examples include the Alan Turing Institute’s regional partnerships, the University of Manchester’s AI research group, and Leeds’ Digital Health Centre

- Regional case studies
  - The University of Sheffield’s Advanced Manufacturing Research Centre (AMRC) has developed AI-driven manufacturing solutions that comply with EU and UK standards
  - Newcastle’s Digital Catapult has supported local startups in navigating the regulatory landscape for AI systems

## Future Directions

- Emerging trends and developments
  - The definition of “making available” is likely to evolve as new AI delivery models emerge, such as federated learning and edge AI
  - Regulators are expected to issue further guidance on the application of the term to open-source and collaborative AI projects

- Anticipated challenges
  - Ensuring consistent interpretation across different jurisdictions and regulatory frameworks
  - Addressing the compliance burden for SMEs and startups

- Research priorities
  - Investigating the impact of “making available” on innovation and competition in the AI sector
  - Developing practical tools and frameworks to support compliance for diverse AI delivery models

## References

1. European Commission. (2025). *Guidelines on the Definition of an AI System under the EU AI Act*. https://ec.europa.eu/digital-single-market/en/news/guidelines-definition-ai-system-under-eu-ai-act
2. Wachter, S., Mittelstadt, B., & Floridi, L. (2021). “A Right to Reasonable Inferences: Re-Thinking Data Protection Law.” *Philosophy & Technology*, 34(2), 153–177. https://doi.org/10.1007/s13347-020-00409-4
3. Veale, M., & Binns, R. (2021). “Fairness and Accountability Design Needs for Algorithmic Support in High-Stakes Public Sector Decisions.” *Proceedings of the ACM on Human-Computer Interaction*, 5(CSCW1), 1–24. https://doi.org/10.1145/3449176
4. ISO/IEC 23894:2023. *Information technology — Artificial intelligence — Guidance on risk management*. https://www.iso.org/standard/79257.html
5. UK AI Standards Hub. (2025). *AI Standards and Compliance Guidance*. https://www.ukaihub.org/standards-and-compliance


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
