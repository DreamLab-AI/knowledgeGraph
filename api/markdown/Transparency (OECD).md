schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#TransparencyOECD
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:transparency-oecd
public:: true

# Transparency (OECD)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:3dfe0e008b7138a04ec001f558962891adabb1b5ab4a72483c4b1ab6a573d992",
  "@type": "Page",
  "vc:slug": "transparency-oecd",
  "title": "Transparency (OECD)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:contestability",
      "vc:label": "contestability"
    },
    {
      "@id": "urn:visionflow:linked:informed-decision-making",
      "vc:label": "Informed decision-making"
    },
    {
      "@id": "urn:visionflow:linked:trust",
      "vc:label": "trust"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-7566b316210d"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#TransparencyOECD"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0161"
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
      "vc:value": "Transparency (OECD)"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:transparency-oecd"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:transparency-oecd"
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
    "@id": "urn:visionflow:page:3dfe0e008b7138a04ec001f558962891adabb1b5ab4a72483c4b1ab6a573d992@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:transparency-oecd",
  "@type": "Class",
  "label": "Transparency (OECD)",
  "definition": "AI actors should commit to transparency and responsible disclosure regarding AI systems, providing sufficient information to enable people to understand AI outcomes, challenge decisions and participate meaningfully in AI-influenced processes.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "artificial-intelligence"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:contestability",
        "label": "contestability"
      },
      {
        "@id": "urn:ngm:class:informed-decision-making",
        "label": "Informed decision-making"
      },
      {
        "@id": "urn:ngm:class:trust",
        "label": "trust"
      }
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
  "@id": "urn:visionflow:annotation:link-resolutions:transparency-oecd:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:3dfe0e008b7138a04ec001f558962891adabb1b5ab4a72483c4b1ab6a573d992"
  },
  "vc:resolutions": [
    {
      "raw": "[[contestability]]",
      "resolved": "urn:visionflow:linked:contestability",
      "kind": "StubLink"
    },
    {
      "raw": "[[Informed decision-making]]",
      "resolved": "urn:visionflow:linked:informed-decision-making",
      "kind": "StubLink"
    },
    {
      "raw": "[[trust]]",
      "resolved": "urn:visionflow:linked:trust",
      "kind": "StubLink"
    },
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
    "@id": "urn:visionflow:page:3dfe0e008b7138a04ec001f558962891adabb1b5ab4a72483c4b1ab6a573d992@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AI actors should commit to transparency and responsible disclosure regarding AI systems, providing sufficient information to enable people to understand AI outcomes, challenge decisions and participate meaningfully in AI-influenced processes.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:TransparencyOECD
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - enables:: [[Informed decision-making]], [[contestability]], [[trust]]

- ### Content
  - AI actors should commit to transparency and responsible disclosure regarding AI systems, providing sufficient information to enable people to understand AI outcomes, challenge decisions and participate meaningfully in AI-influenced processes.

  - ## The Challenge of Predictability

  ## Source

  - **Primary**: OECD AI Principles 2024 revision (Principle 1.3)
  - **Related**: OECD Recommendation on Artificial Intelligence, EU AI Act Article 13

  ## Context

  Transparency constitutes OECD's third core AI principle, recognising that opacity in AI systems undermines accountability, trust and effective governance. This principle requires proactive information provision appropriate to stakeholder needs whilst respecting legitimate confidentiality concerns.

  #### Key Characteristics
  - **Appropriate disclosure**: Information matched to stakeholder needs and capacities
		  - **Accessible communication**: Understandable explanations for non-technical audiences
		  - **Multi-level transparency**: Different information depths for various stakeholders
		  - **Responsible limits**: Balancing openness with intellectual property, security and privacy
		  - **Continuous transparency**: Ongoing information provision throughout AI lifecycle

		  ## Relationships

		  - **Parent Concept**: OECD AI Principle 3 (Transparency and Explainability)
		  - **Related Terms**:
		    - Explainability (OECD) (AI-0162)
		    - Accountability (AI-0165)
		    - Human-Centred Values (AI-0159)
		  - **Enables**: Informed decision-making, contestability, trust

		  ## Transparency Dimensions

		  ### System Transparency
		  - Purpose and intended use
		  - Capabilities and limitations
		  - Data sources and training processes
		  - Model architecture and approach (where feasible)
		  - Performance characteristics

		  ### Process Transparency
		  - How decisions are reached
		  - Factors considered in outcomes
		  - Role of AI vs human judgment
		  - Decision-making procedures
		  - Override and intervention mechanisms

		  ### Operational Transparency
		  - When AI systems are in use
		  - Who operates and oversees systems
		  - Performance monitoring and evaluation
		  - Incident reporting and response
		  - Continuous improvement processes

		  ### Organisational Transparency
		  - Responsible entities and contact points
		  - Governance structures
		  - Accountability mechanisms
		  - Compliance and audit processes
		  - Stakeholder engagement approaches

		  ## Implementation Considerations

		  1. **Audience adaptation**: Tailoring information to different stakeholder groups
		  2. **Layered disclosure**: Progressive detail from basic to technical information
		  3. **Proactive provision**: Supplying information before requests
		  4. **Accessible formats**: Multiple communication channels and formats
		  5. **Balance**: Maintaining openness whilst protecting legitimate confidentiality

		  ## OECD Framework Alignment

		  - **Dimension**: People and Planet Context
		  - **Principle Number**: P3 (part 1 of 2)
		  - **Actor Responsibility**: All AI actors, particularly providers

		  ## Regulatory Context

		  Transparency principles inform:
		  - EU AI Act transparency obligations for high-risk AI (Article 13)
		  - Limited-risk transparency requirements (Article 50)
		  - GPAI provider transparency obligations (Article 53, Annex XII)
		  - Instructions for use requirements (Article 13)

		  ## Stakeholder-Specific Transparency

		  ### For Affected Individuals
		  - Notice of AI system use
		  - Explanation of AI role in decisions
		  - Information enabling contestation
		  - Plain language descriptions

		  ### For Deployers
		  - Technical documentation
		  - Integration requirements
		  - Performance specifications
		  - Operating instructions
		  - Risk information

		  ### For Regulators
		  - Compliance documentation
		  - Testing and validation results
		  - Monitoring data
		  - Incident reports
		  - System changes and updates

		  ### For Public
		  - General system capabilities
		  - Deployment contexts
		  - Societal implications
		  - Accountability mechanisms
		  - Performance metrics (aggregate)

		  ## Transparency Limits

		  Legitimate restrictions based on:
		  - **Trade secrets**: Protecting proprietary innovations
		  - **Security**: Preventing gaming and adversarial exploitation
		  - **Privacy**: Protecting training data subjects
		  - **Competitive position**: Maintaining commercial viability
		  - **Safety**: Avoiding disclosure of vulnerabilities

		  ## 2024 Revision Updates

		  The 2024 OECD revision strengthened transparency by:
		  - Emphasising responsible disclosure alongside transparency commitment
		  - Clarifying multi-stakeholder information needs
		  - Connecting transparency to contestability and participation
		  - Balancing openness with legitimate confidentiality

		  ## Technical Approaches

		  - **Model cards**: Standardised documentation templates
		  - **Datasheets**: Systematic dataset documentation
		  - **Fact sheets**: High-level system descriptions
		  - **Audit trails**: Logged decision factors and processes
		  - **Visualisations**: Graphical representations of system behaviour

		  ## Assessment Methods

		  Transparency can be evaluated through:
		  - Information availability and accessibility audits
		  - Stakeholder comprehension assessments
		  - Documentation completeness reviews
		  - Communication clarity evaluations
		  - Regulatory compliance checks

		  ## Challenges

		  - **Technical complexity**: Explaining sophisticated models to general audiences
		  - **Competitive concerns**: Balancing disclosure with commercial interests
		  - **Information overload**: Avoiding overwhelming users with excessive detail
		  - **Dynamic systems**: Documenting continuously learning systems
		  - **Verification**: Ensuring disclosed information is accurate and current

		  ## Related Standards

		  - ISO/IEC TR 24028:2020 - AI trustworthiness (transparency component)
		  - Model Cards for Model Reporting (Mitchell et al.)
		  - Datasheets for Datasets (Gebru et al.)

		  ## See Also

		  - Explainability (OECD) (AI-0162)
		  - Accountability (AI-0165)
		  - Technical Documentation (EU AI Act)
		  - Instructions for Use (EU AI Act)

		  ---

		  *Part of AI Grounded Ontology - OECD AI Principles Framework*
		  *Aligned with OECD AI Principles 2024 and EU AI Act transparency requirements*

		  ```

  - public-access:: true
  - definition:: AI actors should commit to transparency and responsible disclosure regarding AI systems, providing sufficient information to enable people to understand AI outcomes, challenge decisions and participate meaningfully in AI-influenced processes.




  ## Academic Context

  - The OECD AI Principles, first adopted in 2019 and updated through 2023 and 2024, represent the pioneering intergovernmental standard for trustworthy AI governance.
  - These principles are grounded in human rights, democratic values, and a rights-based approach to AI development and deployment.
  - Transparency and explainability are core tenets, requiring AI actors to provide meaningful, context-appropriate information about AI systems’ data, logic, and decision-making processes.
  - Academically, these principles draw on interdisciplinary research spanning computer science, ethics, law, and social sciences, emphasising the importance of explainability to enable user understanding, contestability, and meaningful participation in AI-influenced decisions.

  ## Current Landscape (2025)

  - Industry adoption of transparency practices is growing, with many organisations voluntarily reporting on AI risk management under the OECD’s new reporting framework launched in early 2025.
  - This framework encourages disclosure of governance measures without constituting formal certification, promoting a culture of openness rather than bureaucratic box-ticking.
  - Leading AI developers worldwide are enhancing system robustness, security, and transparency, as highlighted in recent OECD reports.
  - In the UK, transparency is increasingly embedded in AI governance strategies, aligning with the OECD principles and anticipating forthcoming regulatory frameworks.
  - Technical capabilities have advanced to support explainability, though challenges remain in balancing transparency with proprietary concerns and preventing information overload for users.
  - Standards and frameworks continue to evolve, with the OECD’s principles influencing the EU AI Act, UK regulatory approaches, and global interoperability efforts.

  ## Research & Literature

  - Key academic sources include:
  - Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). "AI4People—An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations." *Minds and Machines*, 28(4), 689–707. DOI: 10.1007/s11023-018-9482-5
  - Mittelstadt, B. D., Russell, C., & Wachter, S. (2019). "Explaining explanations in AI." *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 279–288. DOI: 10.1145/3287560.3287574
  - OECD (2024). *Recommendation of the Council on Artificial Intelligence*. OECD Publishing. DOI: 10.1787/eedfee77-en
  - Ongoing research focuses on improving explainability methods, user-centric transparency, and balancing transparency with privacy and security concerns.

  ## UK Context

  - The UK government and regulatory bodies actively endorse the OECD AI Principles, integrating transparency into national AI strategies.
  - North England, including innovation hubs in Manchester, Leeds, Newcastle, and Sheffield, hosts several AI research centres and startups prioritising transparent AI systems.
  - For example, Manchester’s AI research institutes collaborate with industry to develop explainable AI tools tailored for healthcare and public services.
  - Leeds and Sheffield contribute through interdisciplinary projects combining AI ethics and technical transparency.
  - Regional case studies demonstrate practical applications of transparency principles in public sector AI deployments, enhancing citizen trust and engagement.

  ## Future Directions

  - Emerging trends include:
  - Enhanced voluntary reporting mechanisms with richer, standardised transparency disclosures.
  - Development of AI transparency tools that adapt explanations to diverse user needs and contexts.
  - Integration of transparency with AI safety and accountability frameworks to form comprehensive governance.
  - Anticipated challenges:
  - Avoiding transparency fatigue among users bombarded with complex information.
  - Reconciling transparency with commercial confidentiality and security imperatives.
  - Ensuring transparency efforts do not become mere performative gestures but lead to genuine user empowerment.
  - Research priorities:
  - User experience studies on effective transparency communication.
  - Technical innovations in explainability for complex, evolving AI systems.
  - Cross-jurisdictional harmonisation of transparency standards.

  ## References

  1. OECD (2024). *Recommendation of the Council on Artificial Intelligence*. OECD Publishing. DOI: 10.1787/eedfee77-en  
  2. Floridi, L., Cowls, J., Beltrametti, M., et al. (2018). AI4People—An Ethical Framework for a Good AI Society: Opportunities, Risks, Principles, and Recommendations. *Minds and Machines*, 28(4), 689–707. DOI: 10.1007/s11023-018-9482-5  
  3. Mittelstadt, B. D., Russell, C., & Wachter, S. (2019). Explaining explanations in AI. *Proceedings of the Conference on Fairness, Accountability, and Transparency*, 279–288. DOI: 10.1145/3287560.3287574  
  4. OECD (2025). *Governing with Artificial Intelligence*. OECD Publishing.  
  5. OECD (2025). OECD finds growing transparency efforts among leading AI developers. OECD Press Release, September 2025.


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

  ## Source

  - **Primary**: OECD AI Principles 2024 revision (Principle 1.3)
  - **Related**: OECD Recommendation on Artificial Intelligence, EU AI Act Article 13

  ## Context

  Transparency constitutes OECD's third core AI principle, recognising that opacity in AI systems undermines accountability, trust and effective governance. This principle requires proactive information provision appropriate to stakeholder needs whilst respecting legitimate confidentiality concerns.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
