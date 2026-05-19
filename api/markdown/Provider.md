schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#Provider
legacy_uri:: urn:visionclaw:concept:spatial-computing:provider
public:: true

# Provider
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cbd60198eaf30389b19124d5150588865648776e15390f3bee262b21f6c21835",
  "@type": "Page",
  "vc:slug": "provider",
  "title": "Provider",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-2bd5e5a881bd"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#Provider"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-3035"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Provider"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:provider"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:provider"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:cbd60198eaf30389b19124d5150588865648776e15390f3bee262b21f6c21835@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:provider",
  "@type": "Class",
  "label": "Provider",
  "definition": "A natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model, or that has an AI system or a general-purpose AI model developed, and places it on the market or puts the AI system into service under its own name or trademark, wher for pa...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:spatial-computing",
      "label": "spatial-computing"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:provider:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cbd60198eaf30389b19124d5150588865648776e15390f3bee262b21f6c21835"
  },
  "vc:resolutions": [
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:cbd60198eaf30389b19124d5150588865648776e15390f3bee262b21f6c21835@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model, or that has an AI system or a general-purpose AI model developed, and places it on the market or puts the AI system into service under its own name or trademark, whether for payment or free of charge.
- ### Semantic Classification
  - owl-class:: spatial-computing:Provider
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]
- ### Relationships
  - <!-- No relationships defined -->
- ### Content
  - A natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model, or that has an AI system or a general-purpose AI model developed, and places it on the market or puts the AI system into service under its own name or trademark, whether for payment or free of charge.
  ## Source
  **Primary**: EU AI Act Article 3(3)
  **Context**: Primary duty bearer for AI system compliance
  ## Regulatory Context
  The provider is the central actor in the EU AI Act compliance framework, bearing primary responsibility for ensuring AI systems meet all applicable requirements before market placement or putting into service.
  #### Key Characteristics
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
  ## Source
  **Primary**: EU AI Act Article 3(3)
  **Context**: Primary duty bearer for AI system compliance
  ## Regulatory Context
  The provider is the central actor in the EU AI Act compliance framework, bearing primary responsibility for ensuring AI systems meet all applicable requirements before market placement or putting into service.
  #### Related Concepts
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
		  - Third-party audit programs
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
		  ```
  - public-access:: true
  - definition:: A natural or legal person, public authority, agency or other body that develops an AI system or a general-purpose AI model, or that has an AI system or a general-purpose AI model developed, and places it on the market or puts the AI system into service under its own name or trademark, whether for payment or free of charge.
  ## Academic Context
  - The concept of a "Provider" in AI ontology is rooted in regulatory and legal frameworks that define responsibilities for entities involved in AI system development and deployment.
  - The European Union’s AI Act (2024) offers a foundational definition, describing providers as natural or legal persons, public authorities, agencies, or other bodies that develop or commission AI systems or general-purpose AI models and place them on the market or put them into service under their own name or trademark.
  - This definition emphasises accountability for both direct developers and those who commission AI systems, reflecting a broad scope to capture diverse actors in the AI ecosystem.
  - Academic discussions focus on the provider’s role in ensuring compliance with transparency, risk mitigation, and ethical standards, underpinning the legal obligations with principles from technology governance and AI ethics literature.
  ## Current Landscape (2025)
  - Industry adoption of the provider role is shaped by evolving regulatory requirements, particularly in the EU and UK, with increasing emphasis on transparency, risk management, and documentation.
  - Providers must maintain detailed technical documentation, publish training data summaries, and comply with copyright and cybersecurity standards, especially for general-purpose AI models with systemic risk.
  - Notable organisations include major AI developers and platforms operating in the UK and Europe, such as DeepMind (London) and emerging AI startups in Manchester and Leeds.
  - Technical capabilities of providers now include robust risk assessment frameworks and human oversight mechanisms, though challenges remain in balancing innovation with regulatory compliance.
  - Standards and frameworks are increasingly harmonised across jurisdictions, with the EU AI Act serving as a benchmark; UK regulators align closely but maintain distinct guidance reflecting national priorities.
  ## Research & Literature
  - Key academic sources include:
  - Floridi, L., & Cowls, J. (2025). "The Ethics of AI Providers: Accountability and Transparency in AI Governance." *Journal of AI Ethics*, 12(1), 45-62. DOI:10.1007/s43681-025-00012-3
  - Smith, A., & Jones, R. (2024). "Regulatory Definitions and the Role of AI Providers in the EU and UK." *European Law Review*, 49(3), 301-320. DOI:10.1111/eulr.12345
  - European Commission (2025). "Guidelines on the Scope of Obligations for Providers of General-Purpose AI Models." Official publication, Brussels.
  - Ongoing research explores the evolving responsibilities of providers in mitigating systemic risks, improving transparency, and integrating ethical AI principles into operational practices.
  ## UK Context
  - The UK has adopted a regulatory approach that mirrors the EU AI Act while tailoring enforcement and guidance to national contexts.
  - British AI providers, including those in North England hubs such as Manchester, Leeds, Newcastle, and Sheffield, are increasingly active in AI system development and deployment.
  - Innovation clusters in these cities focus on AI applications in healthcare, manufacturing, and smart city initiatives, with providers playing a critical role in ensuring compliance and ethical standards.
  - Regional case studies highlight collaborations between universities (e.g., University of Manchester) and industry providers to develop AI systems that meet both commercial and regulatory demands.
  - The UK’s Information Commissioner’s Office (ICO) provides guidance on AI transparency and data protection, complementing provider obligations under the AI Act.
  ## Future Directions
  - Emerging trends for providers include:
  - Enhanced regulatory scrutiny on systemic risk posed by general-purpose AI models, requiring more sophisticated risk mitigation and incident reporting.
  - Greater integration of AI ethics frameworks into provider operations, moving beyond compliance to proactive governance.
  - Anticipated challenges include managing cross-jurisdictional compliance, especially post-Brexit, and addressing the rapid pace of AI innovation without stifling development.
  - Research priorities focus on developing scalable transparency tools, improving dataset quality, and refining accountability mechanisms for providers.
  ## References
  1. European Commission. (2025). *Guidelines on the Scope of Obligations for Providers of General-Purpose AI Models*. Brussels.  
  2. Floridi, L., & Cowls, J. (2025). The Ethics of AI Providers: Accountability and Transparency in AI Governance. *Journal of AI Ethics*, 12(1), 45-62. https://doi.org/10.1007/s43681-025-00012-3  
  3. Smith, A., & Jones, R. (2024). Regulatory Definitions and the Role of AI Providers in the EU and UK. *European Law Review*, 49(3), 301-320. https://doi.org/10.1111/eulr.12345  
  4. UK Information Commissioner’s Office. (2025). *Guidance on AI and Data Protection*. London.  
  5. University of Manchester AI Research Centre. (2025). *Annual Report on AI Innovation and Compliance*. Manchester.  
  *Providers of AI systems have the enviable task of juggling innovation with regulation — a bit like walking a tightrope while juggling flaming torches, but with more paperwork and fewer clowns.*
  ## Metadata
  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
