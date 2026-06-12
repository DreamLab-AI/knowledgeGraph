public:: true

# Fairness (OECD)
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e6d921ab8d7211d84b4573336a6bafe477605ba97444eeb96438e20c2dd28f23",
  "@type": "Page",
  "vc:slug": "fairness-oecd",
  "title": "Fairness (OECD)",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0160"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness (OECD)"
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
  "@id": "urn:ngm:class:fairness-oecd",
  "@type": "Class",
  "label": "Fairness (OECD)",
  "definition": "The OECD AI Principle (1.2) requiring that AI systems do not create or reinforce unfair bias, discrimination, or disparate impacts on individuals or groups based on protected characteristics. Fairness mandates proactive safeguards—pre-processing reweighting, in-processing constraints, post-processing calibration—ensuring equitable treatment whilst respecting legitimate, evidence-based differentiation.",
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
    "relatedTo": [
      {"@id": "urn:ngm:class:explainability-oecd", "label": "Explainability (OECD)"},
      {"@id": "urn:ngm:class:accountability-oecd", "label": "Accountability (OECD)"},
      {"@id": "urn:ngm:class:digital-technology-access-equity", "label": "Equity"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:data-governance", "label": "Data Governance"},
      {"@id": "urn:ngm:class:ai-regulation", "label": "AI Regulation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:human-centred-values", "label": "Human Centred Values"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:ai-ethics", "label": "AI Ethics"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-oecd:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e6d921ab8d7211d84b4573336a6bafe477605ba97444eeb96438e20c2dd28f23"
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
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - AI systems should not create or reinforce unfair bias, discrimination or disparate impacts on individuals or groups based on protected characteristics, and should incorporate appropriate safeguards to ensure equitable treatment and opportunity whilst respecting legitimate differentiation based on actual relevant differences.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessOECD
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **relatedTo**: Explainability (OECD), Accountability (OECD), Equity — fairness is one of a cluster of OECD principles that mutually reinforce trustworthy AI deployment
  - **requires**: Data Governance, AI Regulation — effective bias mitigation requires governed training data and enforceable regulatory mandates
  - **enables**: Human Centred Values — fair AI systems operationalise the broader commitment to human-centred design
  - **contrastsWith**: AI Ethics — fairness is a specific, measurable commitment within the wider AI ethics discourse

- ### Content
  - AI systems should not create or reinforce unfair bias, discrimination or disparate impacts on individuals or groups based on protected characteristics, and should incorporate appropriate safeguards to ensure equitable treatment and opportunity whilst respecting legitimate differentiation based on actual relevant differences.

  ## Source

  - **Primary**: OECD AI Principles 2024 revision (Principle 1.2)
  - **Related**: Universal Declaration of Human Rights Article 7, EU Charter of Fundamental Rights Article 21

  ## Context

  Fairness represents the second component of OECD Principle 2, addressing concerns that AI systems can perpetuate or amplify existing societal biases and create new forms of discrimination. This principle requires proactive measures to detect, mitigate and prevent unfair treatment across AI system lifecycles.

  #### Key Characteristics
  - **Non-discrimination**: Avoiding treatment disparities based on protected characteristics
		  - **Bias mitigation**: Actively addressing unfair bias in data, models and outcomes
		  - **Equitable opportunity**: Ensuring comparable access to AI benefits
		  - **Legitimate differentiation**: Permitting distinctions based on relevant, lawful criteria
		  - **Procedural fairness**: Fair processes in AI-influenced decisions

		  ## Relationships

		  - **Parent Concept**: OECD AI Principle 2 (Human-Centred Values and Fairness)
		  - **Related Terms**:
		    - Human-Centred Values (AI-0159)
		    - Bias (AI) (source material)
		    - Data Governance (AI-0177)
		    - Accountability (AI-0165)
		    - Explainability (OECD) (AI-0162)
		  - **Contrasts With**: Unfair bias, discrimination, disparate impact

		  ## Dimensions of AI Fairness

		  ### Individual Fairness
		  - Similar individuals receive similar treatment
		  - Consistency across comparable cases
		  - Protection of individual rights

		  ### Group Fairness
		  - Equitable outcomes across protected demographic groups
		  - Avoidance of disparate impact
		  - Statistical parity considerations (where appropriate)

		  ### Procedural Fairness
		  - Transparent and consistent decision processes
		  - Opportunity for input and contestation
		  - Due process protections

		  ### Distributive Fairness
		  - Equitable distribution of AI benefits and burdens
		  - Access considerations across socioeconomic groups
		  - Geographic equity

		  ## Protected Characteristics

		  Fairness considerations typically address:
		  - Race and ethnicity
		  - Sex and gender
		  - Age
		  - Disability
		  - Religion or belief
		  - Sexual orientation
		  - Socioeconomic status
		  - Geographic location
		  - Language and nationality

		  ## Implementation Considerations

		  1. **Bias auditing**: Systematic testing for unfair bias across protected groups
		  2. **Data representativeness**: Ensuring training data reflects relevant populations
		  3. **Fairness metrics**: Measuring and monitoring fairness across multiple definitions
		  4. **Bias mitigation techniques**: Applying pre-processing, in-processing, post-processing methods
		  5. **Contextual assessment**: Evaluating fairness within specific application contexts

		  ## OECD Framework Alignment

		  - **Dimension**: People and Planet Context, Data and Input
		  - **Principle Number**: P2 (part 2 of 2)
		  - **Actor Responsibility**: Providers (design and testing), deployers (monitoring and correction)

		  ## Regulatory Context

		  Fairness principles inform:
		  - EU AI Act data governance requirements (Article 10) mandating bias detection and correction
		  - Prohibited practices preventing discrimination (Article 5)
		  - High-risk system classifications for applications affecting fundamental rights
		  - Technical documentation requirements demonstrating fairness assessments

		  ## Fairness-Accuracy Trade-offs

		  Implementing fairness may involve:
		  - **Performance variations**: Different accuracy levels across groups
		  - **Calibration challenges**: Balancing multiple fairness criteria simultaneously
		  - **Contextual priorities**: Weighting fairness definitions based on application domain
		  - **Stakeholder perspectives**: Incorporating diverse views on acceptable trade-offs

		  ## Technical Approaches

		  ### Pre-processing
		  - Reweighting training samples
		  - Removing protected attributes
		  - Generating synthetic balanced data
		  - Fairness-aware feature selection

		  ### In-processing
		  - Fairness constraints in objective functions
		  - Adversarial debiasing
		  - Fair representation learning
		  - Multi-objective optimisation

		  ### Post-processing
		  - Threshold optimisation across groups
		  - Calibration adjustments
		  - Outcome equalisation techniques
		  - Reject option classification

		  ## Measurement Challenges

		  - **Incompatible metrics**: Mathematical impossibility of satisfying all fairness definitions simultaneously
		  - **Proxy variables**: Protected characteristics inferred from correlated features
		  - **Intersectionality**: Multiple protected characteristics interaction
		  - **Contextual variation**: Domain-specific fairness requirements
		  - **Temporal dynamics**: Fairness metrics changing over time

		  ## 2024 Revision Updates

		  The 2024 OECD revision strengthened fairness by:
		  - Elevating fairness to equal status with human-centred values in Principle 2
		  - Explicitly addressing disparate impacts alongside discrimination
		  - Connecting to bias mitigation throughout lifecycle
		  - Emphasising proactive fairness measures

		  ## Case Law and Precedents

		  Fairness considerations informed by:
		  - Employment discrimination law and case precedents
		  - Credit and lending fairness requirements
		  - Educational admissions equity principles
		  - Healthcare access and treatment equality
		  - Criminal justice proportionality doctrines

		  ## Related Standards

		  - ISO/IEC TR 24027:2021 - Bias in AI systems and AI aided decision making
		  - ISO/IEC 22989:2022 - Artificial intelligence concepts and terminology
		  - IEEE 7003 - Algorithmic Bias Considerations (under development)

		  ## Sector-Specific Considerations

		  Different fairness priorities across domains:
		  - **Employment**: Equal opportunity, disparate impact analysis
		  - **Credit/finance**: Equal Credit Opportunity principles
		  - **Criminal justice**: Presumption of innocence, proportionality
		  - **Healthcare**: Treatment equality, triage fairness
		  - **Education**: Merit-based admission with diversity considerations

		  ## See Also

		  - Human-Centred Values (AI-0159)
		  - Bias Mitigation (source material)
		  - Data Representativeness (source material)
		  - Explainability (OECD) (AI-0162)
		  - Accountability (AI-0165)

		  ---

		  *Part of AI Grounded Ontology - OECD AI Principles Framework*
		  *Aligned with OECD AI Principles 2024, EU AI Act, and international human rights law*

		  ```

  - public-access:: true
  - definition:: AI systems should not create or reinforce unfair bias, discrimination or disparate impacts on individuals or groups based on protected characteristics, and should incorporate appropriate safeguards to ensure equitable treatment and opportunity whilst respecting legitimate differentiation based on actual relevant differences.




  ## Academic Context

  - The OECD AI Principles, first adopted in 2019 and updated through 2023-2024, establish a globally recognised framework for responsible AI governance.
  - These principles emphasise human rights, democratic values, fairness, transparency, accountability, and robustness throughout the AI lifecycle.
  - The academic foundation draws on interdisciplinary research in ethics, law, computer science, and social sciences to address bias, discrimination, and equitable treatment in AI systems.
  - Fairness is framed as avoiding unjust bias or disparate impacts based on protected characteristics, while allowing legitimate differentiation grounded in relevant, evidence-based factors.

  ## Current Landscape (2025)

  - Industry adoption of OECD fairness principles is widespread among governments and private sector actors, influencing regulatory frameworks such as the EU AI Act and the NIST AI Risk Management Framework.
  - Notable organisations implementing these principles include multinational tech firms, regulatory bodies, and AI ethics boards.
  - In the UK, public and private sectors increasingly integrate fairness safeguards in AI deployment, with particular attention to compliance with UK equality law and data protection standards.
  - North England cities like Manchester, Leeds, Newcastle, and Sheffield host AI innovation hubs and research centres actively exploring fairness in AI applications, especially in healthcare, public services, and finance.
  - Technical capabilities to detect and mitigate bias have improved but remain limited by data quality, representativeness, and evolving societal norms.
  - The OECD framework remains non-binding but influential, promoting harmonisation and interoperability across jurisdictions without imposing sector-specific mandates.

  ## Research & Literature

  - Key academic sources include:
  - Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. *Nature Machine Intelligence*, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2
  - Binns, R. (2018). Fairness in machine learning: Lessons from political philosophy. *Proceedings of Machine Learning Research*, 81, 149–159. Available at http://proceedings.mlr.press/v81/binns18a.html
  - Selbst, A. D., & Barocas, S. (2018). The intuitive appeal of explainable machines. *Fordham Law Review*, 87(3), 1085–1139. https://ir.lawnet.fordham.edu/flr/vol87/iss3/5
  - Ongoing research focuses on:
  - Developing context-sensitive fairness metrics that reflect UK and European socio-legal norms.
  - Enhancing transparency and human oversight mechanisms.
  - Addressing intersectional biases and systemic inequalities amplified by AI.

  ## UK Context

  - The UK government and regulatory bodies, including the Information Commissioner's Office (ICO), actively promote fairness in AI through guidance aligned with OECD principles.
  - North England innovation hubs:
  - Manchester’s AI and Data Science Institute explores fairness in public health AI tools.
  - Leeds Digital Hub supports ethical AI startups focusing on equitable financial services.
  - Newcastle University’s Centre for AI and Data Governance researches bias mitigation techniques.
  - Sheffield’s Advanced Manufacturing Research Centre integrates fairness considerations in AI-driven industrial automation.
  - Regional case studies highlight challenges in balancing fairness with operational efficiency, especially in public sector AI deployments affecting diverse populations.

  ## Future Directions

  - Emerging trends include:
  - Integration of generative AI fairness safeguards, reflecting OECD updates addressing evolving AI capabilities.
  - Development of dynamic fairness frameworks that adapt to AI systems’ post-deployment learning.
  - Greater emphasis on environmental and social sustainability as part of fairness considerations.
  - Anticipated challenges:
  - Harmonising fairness standards across jurisdictions with differing legal and cultural contexts.
  - Managing trade-offs between fairness, privacy, and transparency.
  - Ensuring meaningful human oversight without stifling innovation.
  - Research priorities:
  - Refining fairness definitions to incorporate UK-specific protected characteristics and social realities.
  - Creating robust auditing tools that are accessible to smaller organisations and public bodies.
  - Investigating the impact of AI fairness interventions on long-term social equity.

  ## References

  1. Organisation for Economic Co-operation and Development (OECD). (2024). *Recommendation of the Council on Artificial Intelligence*. OECD Publishing. https://legalinstruments.oecd.org/en/instruments/oecd-legal-0449  
  2. Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. *Nature Machine Intelligence*, 1(9), 389–399. https://doi.org/10.1038/s42256-019-0088-2  
  3. Binns, R. (2018). Fairness in machine learning: Lessons from political philosophy. *Proceedings of Machine Learning Research*, 81, 149–159. http://proceedings.mlr.press/v81/binns18a.html  
  4. Selbst, A. D., & Barocas, S. (2018). The intuitive appeal of explainable machines. *Fordham Law Review*, 87(3), 1085–1139. https://ir.lawnet.fordham.edu/flr/vol87/iss3/5  
  5. White & Case LLP. (2025). AI Watch: Global regulatory tracker - OECD. https://www.whitecase.com/insight-our-thinking/ai-watch-global-regulatory-tracker-oecd  

  *If AI fairness were a football match, the UK’s North England teams are certainly in the league — just hoping the referees (regulators) keep the game fair and the VAR (auditing tools) ready.*


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

  ## Source

  - **Primary**: OECD AI Principles 2024 revision (Principle 1.2)
  - **Related**: Universal Declaration of Human Rights Article 7, EU Charter of Fundamental Rights Article 21

  ## Context

  Fairness represents the second component of OECD Principle 2, addressing concerns that AI systems can perpetuate or amplify existing societal biases and create new forms of discrimination. This principle requires proactive measures to detect, mitigate and prevent unfair treatment across AI system lifecycles.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
