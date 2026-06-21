- ### Definition
  - ETSI Domain AI + Governance is a structured cross-domain classification node within the [[ETSI Domain Taxonomy]] that demarcates metaverse and intelligent-systems components where [[Artificial Intelligence]] capabilities intersect with [[AI Governance]] frameworks, [[Responsible AI]] principles, [[Explainable AI]] requirements, [[Bias Detection Methods]], [[Regulatory Compliance]] mechanisms, and institutional accountability structures. Originating from ETSI's Multi-access Edge Computing ([[ ETSI GS MEC]]) and Securing Artificial Intelligence (SAI) standardisation work, this domain cross-reference encodes the recognition that AI-enabled metaverse services — spanning adaptive recommendation engines, automated moderation, personalisation algorithms, and multi-agent orchestration — cannot be treated as purely technical artefacts but must be designed, deployed, and audited within a coherent governance envelope. The governance envelope addressed by this domain covers the full AI lifecycle: risk-based classification of AI components (per [[EU AI Act]] taxonomy of prohibited, high-risk, limited-risk, and general-purpose AI), [[Algorithmic Fairness]] assessment and [[Bias Mitigation Techniques]] applied at data curation, model training, and inference stages, [[Explainable AI]] mechanisms that allow human supervisors to interrogate and understand model decisions (formalised in ETSI TS 104 224 and GR SAI 007), audit trails and logging requirements for AI-driven decisions, [[Human Oversight]] protocols that maintain meaningful human control over consequential automated actions, and compliance reporting against both national and international instruments including the EU AI Act (Regulation EU 2024/1689), ISO/IEC 42001 AI Management Systems, the NIST AI Risk Management Framework, and the OECD AI Principles. Within the metaverse architecture context, ETSI Domain AI + Governance signals that a given component carries obligations under these frameworks and must implement appropriate [[Transparency]], accountability, redress, and human-in-the-loop mechanisms, bridging the technical [[ComputationAndIntelligenceDomain]] with the normative [[TrustAndGovernanceDomain]] and the legal [[Regulatory Compliance]] stack. The domain node thus functions not only as an ontological classifier but as a policy activation signal — components tagged with this domain inherit requirements for [[AI Ethics]] review, [[Data Governance]] controls, and cross-border regulatory alignment, particularly relevant as metaverse platforms span jurisdictions with divergent AI regulatory regimes.

- ### Bridge-To
  - bridges-to:: [[Blockchain]] (bc)

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ETSIDomainAIGovernance
  - owl-role:: Concept | RegulatoryDomain | CrossDomainMarker | GovernanceProtocol
  - owl-inferred:: ai:TrustAndGovernanceDomain, ai:ResponsibleAISystem, ai:AuditableAIComponent
  - belongs-to-domain:: [[ComputationAndIntelligenceDomain]], [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[ETSI Domain AI]], [[AI Governance]], [[TrustAndGovernanceDomain]]
  - has-part:: [[AI Ethics Classification]], [[Explainability Categorization]], [[Bias Detection Methods]], [[Algorithmic Fairness]], [[Regulatory Compliance]], [[Human Oversight]], [[AI Impact Assessment]], [[AI Audit]], [[Data Governance]]
  - requires:: [[Explainable AI]], [[Responsible AI]], [[AI Ethics]], [[Transparency]], [[Accountability]], [[Risk Management]], [[Data Governance]], [[Human Oversight]]
  - enables:: [[Trustworthy AI]], [[Responsible AI]], [[AI Ethics Classification]], [[Explainability Categorization]], [[Algorithmic Fairness]], [[Compliance Reporting]], [[AI Safety]]
  - implements:: [[EU AI Act]], [[ISO IEC 42001]], [[NIST AI Risk Management Framework]], [[OECD AI Principles]], [[ETSI TS 104 224]]
  - depends-on:: [[ETSI Domain AI]], [[AI Governance]], [[Regulatory Compliance]], [[Machine Learning]], [[Bias Mitigation Techniques]]
  - supports:: [[AI Safety]], [[Digital Rights]], [[Human Rights]], [[Trustworthy AI]], [[Responsible AI]], [[AI Alignment]]
  - uses:: [[Bias Detection Methods]], [[Explainable AI]], [[Algorithmic Fairness]], [[Privacy Preserving Machine Learning]], [[Federated Learning]], [[Blockchain]]
  - contrasts-with:: [[Opaque AI Systems]], [[Unregulated AI Deployment]], [[Algorithmic Bias]], [[Surveillance Capitalism]]
  - related-to:: [[ETSI Domain AI + Human Interface]], [[ETSI Domain AI + Data Mgmt]], [[ETSI Domain AI + Creative Media]], [[AI Governance Framework]], [[AI Governance Law and Privacy]], [[Responsible AI]], [[Algorithmic Bias]], [[Data Privacy]], [[GDPR]]
  - standardized-by:: [[ETSI ISG SAI]], [[ISO IEC JTC 1 SC 42]], [[NIST AI Standards]], [[EU AI Act]], [[OECD AI Principles]]

- ### Content
  ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:AIEthicsClassification))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:ExplainabilityCategorizaton))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:BiasDetectionMethods))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:AlgorithmicFairness))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:RegulatoryCompliance))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:HumanOversight))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:AIImpactAssessment))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:hasPart ai:AIAudit))
    ```
  ## Dependency Relationships
    ```
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:ExplainableAI))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:ResponsibleAI))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:AIEthics))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:Transparency))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:Accountability))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:RiskManagement))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:DataGovernance))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:requires ai:HumanOversight))
    ```
  ## Capability Relationships
    ```
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:enables ai:TrustworthyAI))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:enables ai:ResponsibleAI))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:enables ai:AIEthicsClassification))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:enables ai:AlgorithmicFairness))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:enables ai:ComplianceReporting))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:enables ai:AISafety))
    ```
  ## Implementation Relationships
    ```
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:implements ai:EUAIAct))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:implements ai:ISOIEC42001))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:implements ai:NISTAIRMF))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:implements ai:OECDAIPrinciples))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:implements ai:ETSIETS104224))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:uses ai:BiasDetectionMethods))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:uses ai:ExplainableAI))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:uses ai:PrivacyPreservingMachineLearning))
    ```
  ## Reduction Relationships
    ```
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:reducesTo ai:ETSIDomainAI))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:reducesTo ai:AIGovernance))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:reducesTo ai:TrustAndGovernanceDomain))
    SubClassOf(ai:ETSIDomainAIGovernance
      ObjectSomeValuesFrom(ai:reducesTo ai:RegulatoryCompliance))
    ```

  ## About
    ETSI Domain AI + Governance emerges from the recognition within ETSI's standardisation community that intelligent components deployed in [[ETSI GS MEC]]-compliant edge and metaverse platforms cannot be governed solely by technical interoperability specifications. The domain cross-reference was introduced as part of the ETSI Domain Taxonomy to signal, at the architectural classification level, that components bearing this marker carry obligations spanning [[AI Ethics]], explainability, bias management, and regulatory compliance. This approach mirrors the layered governance model advocated by the European Commission and reflected in the EU AI Act — a risk-tiered regulatory instrument (Regulation EU 2024/1689) that entered into force in August 2024 and is progressing to full applicability in August 2026. The ETSI domain taxonomy functions as a vocabulary that bridges between the purely technical specification world of telecommunications standards and the normative world of AI regulation, ethics, and accountability — a translation layer allowing system architects to annotate components with governance obligations without needing to embed regulatory text directly into technical specifications.

    The intellectual lineage of this domain node traces to two parallel standardisation streams. First, ETSI's own Technical Committee on Securing AI (TC SAI, formerly ISG SAI) has produced a sequence of standards addressing the security, trustworthiness, and explicability of AI systems. ETSI GR SAI 007 (2023) — the Group Report on Explicability and Transparency of AI Processing — formalised steps for AI platform designers to achieve assurance of explicability (the capacity to "show their working") and transparency (openness to external examination), a framework subsequently elevated to a full Technical Specification in ETSI TS 104 224 (March 2025). Complementary TC SAI outputs (ETSI TR 104 065, TR 104 128, both May 2025) address securing AI systems for trustworthiness, establishing a coherent standards family that maps directly onto the governance obligations encoded in this domain. Second, the ISO/IEC JTC 1/SC 42 standardisation track has produced parallel instruments: ISO/IEC 42001 (AI Management Systems), ISO/IEC TR 24027 (Bias in AI Systems), ISO/IEC 5339 (Guidance for AI Applications), and the emerging ISO/IEC 42006 (AI Audit) — all of which articulate requirements that components within ETSI Domain AI + Governance must satisfy. The five-layer AI governance framework proposed by Floridi et al. (2025, arXiv:2509.11332) — covering the layers of ethics, principles, regulation, standards, and certification — provides a theoretical architecture that maps precisely onto how ETSI Domain AI + Governance operates: the ETSI taxonomy sits at the standards layer, receiving normative inputs from the ethics and principles layers above (EU AI Ethics Guidelines, OECD AI Principles) and feeding actionable technical requirements down to the certification layer (conformity assessments, third-party audits, AI management system certifications).

    The practical function of this domain node in the ETSI metaverse taxonomy is to enable automated compliance checking, ontology-driven policy activation, and governance-aware service composition. When an AI component is classified under ETSI Domain AI + Governance, downstream systems can infer that it must provide [[Explainable AI]] outputs accessible to human auditors, must have undergone [[Bias Detection Methods]] assessment at training and inference time, must implement [[Human Oversight]] mechanisms preventing fully autonomous consequential decisions in high-risk scenarios, must maintain audit trails compatible with [[Data Governance]] requirements including [[GDPR]] and the EU Data Governance Act, and must be deployable only after a conformity assessment aligned with its AI Act risk classification. The [[Blockchain]] bridge noted in the taxonomy reflects an emerging paradigm in which distributed ledger technologies are employed to provide immutable audit trails for AI governance artefacts — model cards, training data provenance, decision logs — creating a tamper-resistant accountability substrate.

    Understanding how this domain interacts with the other AI sub-domains within the ETSI taxonomy is essential for system design. [[ETSI Domain AI + Data Mgmt]] concerns the collection, curation, storage, and lifecycle management of data that feeds AI systems — ETSI Domain AI + Governance then operates on the outputs of those AI systems, assessing them for bias (which may originate in the data managed by the companion domain), explainability, and compliance. [[ETSI Domain AI + Human Interface]] creates the interaction surfaces through which AI systems engage with users — ETSI Domain AI + Governance then applies transparency obligations to those interactions (informing users when they are interacting with AI, when emotion recognition is being used, and how personalisation decisions are made). [[ETSI Domain AI + Creative Media]] applies generative AI to content production — ETSI Domain AI + Governance applies watermarking obligations, synthetic content disclosure requirements (EU AI Act Article 50), and copyright accountability frameworks to those generated outputs. This cross-domain dependency architecture means that in practice, most deployable AI metaverse components will carry multiple domain tags simultaneously, and system architects must reason about the union of governance obligations each tag activates.

    The sociological dimension of AI governance is equally important for understanding why this domain exists within a technical taxonomy. AI governance frameworks have proliferated since 2018 — Jobin et al. (2019) identified 84 AI ethics guidelines from governments, industry, and civil society — but translating those normative frameworks into operationalisable technical requirements has been the consistent challenge. The ETSI Domain AI + Governance node represents an attempt to solve that translation problem at the taxonomy level: by creating a formal ontological marker that binds technical AI components to normative governance frameworks, the ETSI taxonomy makes governance obligations machine-readable and processable by service composition engines, compliance platforms, and automated audit tools. This approach is analogous to how the Resource Description Framework (RDF) and Linked Data paradigms attempted to make information semantically interoperable — ETSI Domain AI + Governance makes governance obligations semantically interoperable with the technical AI system descriptions they apply to.

  ## Components and Architecture
    - **AI Ethics Classification Layer**: Assigns risk tier and ethical sensitivity ratings to AI components per EU AI Act categories (prohibited, high-risk, limited-risk, GPAI, minimal-risk). Consumes [[AI Ethics Checklist]] artefacts and feeds [[Regulatory Compliance]] pipelines.
    - **[[Explainability Categorization]] Module**: Implements explainability methods appropriate to the AI system type — feature attribution (SHAP, LIME, Integrated Gradients) for tabular and structured models, attention visualisation for transformer-based models, counterfactual explanation generation, and concept activation vector (TCAV) analysis for deep neural networks. Governed by ETSI TS 104 224 and ETSI GR SAI 007 explicability assurance criteria.
    - **[[Bias Detection Methods]] Pipeline**: Systematic statistical and causal analysis of AI system outputs for demographic parity, equalised odds, individual fairness, and counterfactual fairness violations. Operates across training data (dataset audit), model internals (representation analysis), and deployed predictions (outcome monitoring). Aligned with ISO/IEC TR 24027 and IEEE P7003 bias guidance.
    - **[[Human Oversight]] Protocol**: Structural mechanisms ensuring meaningful human control — oversight roles with authority to override or halt automated AI decisions, mandatory human review thresholds for high-impact decisions, escalation procedures, and documented accountability chains. Required under EU AI Act Article 14 for all high-risk AI systems.
    - **[[AI Audit]] Infrastructure**: Continuous monitoring, periodic third-party audit, and regulatory reporting mechanisms. Includes model cards, system cards, data sheets for datasets, conformity assessment documentation, and post-market surveillance logs. Aligned with emerging ISO/IEC 42006 (AI Audit Requirements).
    - **[[Data Governance]] Integration**: Lineage tracking for training data, consent management for personal data used in AI training, data minimisation enforcement, purpose limitation controls, and cross-border data transfer compliance mechanisms. Intersects with [[GDPR]], EU Data Act, and ETSI MEC data protection specifications.
    - **[[Regulatory Compliance]] Reporting Engine**: Automated generation of conformity declarations, Fundamental Rights Impact Assessments (FRIAs), AI system registration entries (EU AI Act database), and technical documentation required under Articles 11-13 of Regulation EU 2024/1689.
    - **[[Blockchain]] Audit Trail**: Distributed ledger anchoring of governance artefacts — model version hashes, training data fingerprints, decision logs — providing tamper-evident accountability records accessible to regulators and auditors across jurisdictions.

  ## Use Cases and Major Families
    - **Metaverse Content Moderation**: AI systems that automatically detect and remove harmful content (hate speech, CSAM, radicalisation material) in real-time XR environments carry high-risk classification under the EU AI Act. ETSI Domain AI + Governance mandates explainability mechanisms that allow human moderators to understand and challenge automated removal decisions, with [[Human Oversight]] protocols ensuring due process for content creators.
    - **Adaptive Personalisation in XR**: Recommendation and personalisation algorithms operating within ETSI MEC-compliant metaverse platforms must satisfy [[Algorithmic Fairness]] requirements, avoid creating filter bubbles or discriminatory user experiences, and provide users with meaningful explanations of personalisation logic under EU AI Act transparency obligations active from August 2026.
    - **AI-Driven Avatar and NPC Behaviour**: Behavioural AI controlling non-player characters or digital avatars in metaverse environments intersects with emotion recognition and biometric inference requirements — activities subject to strict [[Regulatory Compliance]] under EU AI Act Article 50 transparency obligations and, for real-time biometric categorisation, under high-risk provisions.
    - **Edge AI Governance in Multi-Access Edge Computing**: ETSI MEC deployments that run inference workloads at network edge nodes for latency-sensitive metaverse applications require governance mechanisms adapted to edge environments: lightweight explainability methods compatible with resource-constrained hardware, distributed audit logging, and federated [[Bias Detection Methods]] that operate without centralising sensitive user data.
    - **AI Procurement and Supply Chain Governance**: Organisations procuring AI components for ETSI-compliant metaverse infrastructure use Domain AI + Governance as an ontological filter to identify components requiring conformity assessments, third-party audits, and contractual governance obligations flowing down the AI supply chain per EU AI Act Chapter V.
    - **Regulatory Sandbox Participation**: Organisations seeking entry to AI regulatory sandboxes (UK AI Growth Lab, EU AI Office Regulatory Sandbox) use ETSI Domain AI + Governance classification to signal governance-readiness and to map component-level obligations against sandbox-specific regulatory modifications.

  ## Academic Context
    The academic foundations of ETSI Domain AI + Governance span three intellectual traditions. The algorithmic fairness literature, initiated by Dwork et al. (2012) and formalised across statistical parity, equalised odds (Hardt et al., 2016), and calibration criteria (Chouldechova, 2017), provides the mathematical substrate for [[Bias Detection Methods]] and [[Algorithmic Fairness]] components. The explainable AI (XAI) tradition — spanning Ribeiro et al.'s LIME (2016), Lundberg and Lee's SHAP (2017), and Selvaraju et al.'s Grad-CAM (2017) — operationalises the explicability requirements formalised in ETSI GR SAI 007 and TS 104 224. The AI governance and regulation scholarship — Dafoe (2018), Cath et al. (2018), Jobin et al.'s global AI ethics landscape survey (2019), Floridi et al.'s AI4People framework (2018), and the EU High-Level Expert Group on AI Ethics Guidelines for Trustworthy AI (2019) — provides the normative architecture that regulatory instruments like the EU AI Act codify into law.

    Research at the intersection of standards and AI governance has intensified since 2022. Koshiyama et al. (2022) formalised an algorithmic auditing framework mapping ETSI and ISO standards obligations to technical assurance methods. The five-layer AI governance framework proposed by Floridi et al. (arxiv:2509.11332, 2025) provides a theory of how regulation, standards, and certification interact in AI governance stacks — directly relevant to how ETSI Domain AI + Governance maps onto the regulatory landscape. Oxford Internet Institute, the Ada Lovelace Institute, the Alan Turing Institute (ATI), and Edinburgh's Centre for Technomoral Futures have all produced frameworks that directly inform UK implementation of the domain's obligations.

  ## Current Landscape (2026)
    The deployment landscape for ETSI Domain AI + Governance obligations accelerated markedly in 2025-2026. The EU AI Act's governance rules and GPAI model obligations became applicable on 2 August 2025; high-risk AI system requirements apply from 2 August 2026, and biometrics/critical infrastructure provisions from 2 December 2027. As of June 2026, organisations within scope of the Act are completing conformity assessments and registering high-risk systems in the EU AI database. Fines for non-compliance reach €15 million or 3% of global annual turnover, creating significant compliance incentives across the metaverse supply chain.

    ETSI's TC SAI published ETSI TS 104 224 (March 2025) as a full Technical Specification on AI explicability and transparency, superseding the earlier GR SAI 007 Group Report and providing normative requirements that directly support EU AI Act Article 13 (transparency and information provision) compliance for operators of AI systems in edge and metaverse environments. Simultaneously, ETSI EN 304 223 V2.1.1 (December 2025) provides binding European Norm-level requirements for securing AI systems with provisions for explainability and responsible deployment — a standard that, once referenced by the European Commission, will carry harmonised presumption of conformity for relevant EU AI Act requirements.

    ISO/IEC 42001 (AI Management Systems standard, 2023) has emerged as the reference management system standard for organisations building AI governance programmes. Uptake accelerated through 2025 as organisations structured AI governance around a certifiable management system standard analogous to ISO 27001 for information security. ISO/IEC TR 24027:2021 remains the key reference for bias assessment methodology, though a revision addressing generative AI bias patterns was under development as of 2026. The NIST AI RMF (2023) and its Generative AI profile (2024) have achieved widespread adoption outside the EU, particularly in US-aligned metaverse platform deployments.

  ## UK Context
    The United Kingdom has developed a distinctive AI governance approach that diverges from the EU's mandatory harmonised regulation. Rather than a unified AI Act, the UK operates a principles-led, sector-specific regulatory model coordinated by DSIT (Department for Science, Innovation and Technology). In January 2025, DSIT published the AI Opportunities Action Plan and an associated AI Assurance Roadmap, establishing a strategic framework to accelerate third-party AI assurance markets and build trust in AI deployments. The Alan Turing Institute developed the AI Regulatory Capability Framework and Self-Assessment Tool in collaboration with DSIT and UK sectoral regulators (FCA, CQC, ICO, Ofcom), providing practical governance implementation guidance aligned with the UK's pro-innovation regulatory stance.

    The Data (Use and Access) Act (Royal Assent, June 2025) relaxed some automated-decision-making constraints from the UK GDPR era while expanding lawful bases for AI research data use — a significant policy adjustment affecting [[Data Governance]] obligations for AI components in ETSI-classified systems. The UK AI Growth Lab proposal (DSIT consultation, October 2025) creates cross-economy regulatory sandboxes for testing AI innovations under modified regulatory conditions, providing a pathway for metaverse AI governance experimentation.

    In academic terms, the Ada Lovelace Institute (London) has produced influential work on algorithmic impact assessments and AI auditing methodologies directly applicable to ETSI Domain AI + Governance requirements. The University of Edinburgh's Centre for Technomoral Futures has published frameworks for responsible AI governance in emergent digital environments. Imperial College London's Data Science Institute and Oxford Internet Institute contribute to bias detection and fairness research underpinning UK governance practice. Northern England context: Leeds-based financial services firms (Asda Money, Yorkshire Building Society) and Manchester's MediaCityUK AI ecosystem are early adopters of ISO/IEC 42001-aligned governance programmes, with the Greater Manchester Combined Authority having established AI governance principles for public-sector AI procurement in 2025.

  ## Future Directions (2026-2030)
    - **Automated Governance**: AI systems that perform their own compliance checking — continuously monitoring for bias drift, generating audit artefacts, and triggering human review when governance thresholds are breached — making [[AI Audit]] proactive rather than periodic.
    - **Post-market Surveillance Integration**: EU AI Act Article 72 requires high-risk AI providers to implement post-market surveillance plans. Future deployments will integrate real-time governance dashboards into ETSI MEC edge infrastructure, monitoring deployed AI behaviour against registered conformity baselines.
    - **Federated Governance Architectures**: Privacy-preserving [[Federated Learning]] combined with distributed audit logs enables governance obligations to be satisfied without centralising sensitive user data across jurisdictions — particularly important for cross-border metaverse platforms operating across EU, UK, and APAC regulatory regimes.
    - **Neurosymbolic Explainability**: Combining neural network inference with symbolic reasoning to generate human-interpretable explanations that satisfy both ETSI TS 104 224 explicability criteria and EU AI Act Article 13 information obligations — moving beyond post-hoc attribution methods toward inherently interpretable hybrid architectures.
    - **Global Regulatory Convergence**: Alignment between EU AI Act, UK pro-innovation approach, US EO 14110 successor frameworks, and APAC national AI strategies will produce shared standards substrates. ETSI governance domain classifications will increasingly serve as vendor-neutral interoperability anchors for multi-jurisdictional compliance.
    - **[[Blockchain]]-Anchored AI Passports**: Cryptographically signed, on-chain AI system identity documents recording governance artefacts (training data provenance, model version, conformity assessment status) that travel with AI components across the metaverse supply chain, enabling automated governance verification at deployment time.
    - **Participatory Governance**: Community and stakeholder participation mechanisms integrated into AI governance workflows — enabling affected communities to contribute to bias detection, ethics review, and policy prioritisation for AI systems deployed in metaverse environments that affect their digital lives.

  ## Research and Literature
    1. European Commission (2024). Regulation (EU) 2024/1689 of the European Parliament and of the Council (EU Artificial Intelligence Act). *Official Journal of the European Union*, L 2024/1689, 12 July 2024.
    2. ETSI (2025). ETSI TS 104 224 V1.1.1 — Securing Artificial Intelligence (SAI); Explicability and Transparency of AI Processing. March 2025.
    3. ETSI (2023). ETSI GR SAI 007 V1.1.1 — Securing Artificial Intelligence (SAI); Explicability and Transparency of AI Processing (Group Report). March 2023.
    4. ETSI (2025). ETSI TR 104 065 V1.1.1 — Securing Artificial Intelligence (SAI); Securing AI Systems for Trustworthiness. May 2025.
    5. ETSI (2025). ETSI EN 304 223 V2.1.1 — Securing Artificial Intelligence (SAI); Responsible AI. December 2025.
    6. ETSI (2025). ETSI GS MEC 003 V4.1.1 — Multi-access Edge Computing (MEC); Framework and Reference Architecture. May 2025.
    7. ISO/IEC (2023). ISO/IEC 42001:2023 — Information Technology — Artificial Intelligence — Management System. Geneva: ISO.
    8. ISO/IEC (2021). ISO/IEC TR 24027:2021 — Information Technology — Artificial Intelligence — Bias in AI Systems and AI-Aided Decision Making. Geneva: ISO.
    9. ISO/IEC (2024). ISO/IEC 5339:2024 — Information Technology — Artificial Intelligence — Guidance for AI Applications. Geneva: ISO.
    10. NIST (2023). Artificial Intelligence Risk Management Framework (AI RMF 1.0). National Institute of Standards and Technology, US Department of Commerce. NIST AI 100-1.
    11. OECD (2019). Recommendation of the Council on Artificial Intelligence. OECD/LEGAL/0449. Paris: OECD.
    12. EU High-Level Expert Group on AI (2019). Ethics Guidelines for Trustworthy AI. European Commission, Brussels.
    13. Floridi, L., Cowls, J., Beltrametti, M., Chatila, R., Chazerand, P., Dignum, V., ... & Vayena, E. (2018). AI4People — An ethical framework for a good AI society: Opportunities, risks, principles, and recommendations. *Minds and Machines*, 28(4), 689-707.
    14. Jobin, A., Ienca, M., & Vayena, E. (2019). The global landscape of AI ethics guidelines. *Nature Machine Intelligence*, 1(9), 389-399.
    15. Dwork, C., Hardt, M., Pitassi, T., Reingold, O., & Zemel, R. (2012). Fairness through awareness. *ITCS 2012*.
    16. Hardt, M., Price, E., & Srebro, N. (2016). Equality of opportunity in supervised learning. *NeurIPS 2016*.
    17. Ribeiro, M. T., Singh, S., & Guestrin, C. (2016). "Why should I trust you?" Explaining the predictions of any classifier. *KDD 2016*.
    18. Lundberg, S. M., & Lee, S.-I. (2017). A unified approach to interpreting model predictions. *NeurIPS 2017*.
    19. Cath, C., Wachter, S., Mittelstadt, B., Taddeo, M., & Floridi, L. (2018). Governing artificial intelligence: Ethical, legal and technical opportunities and challenges. *Philosophical Transactions of the Royal Society A*, 376(2133).
    20. Dafoe, A. (2018). AI governance: A research agenda. *Future of Humanity Institute, University of Oxford*.
    21. Koshiyama, A., Kazim, E., Treleaven, P., Rai, P., Szpruch, L., Pavey, G., ... & Lomas, E. (2022). Towards algorithm auditing: A survey on managing legal, ethical and technological risks of AI, ML and associated algorithms. *arXiv:2004.07524*.
    22. Alan Turing Institute (2024). AI Regulatory Capability Framework and Self-Assessment Tool. London: ATI / DSIT.
    23. Ada Lovelace Institute (2022). Algorithmic impact assessment: A case study in healthcare. *Ada Lovelace Institute*.
    24. Chouldechova, A. (2017). Fair prediction with disparate impact: A study of bias in recidivism prediction instruments. *Big Data*, 5(2), 153-163.
    25. Floridi, L., Holweg, M., Taddeo, M., Amaya Silva, J., Mökander, J., & Jiang, Y. (2025). A five-layer framework for AI governance: Integrating regulation, standards, and certification. *arXiv:2509.11332*.
    26. DSIT (2025). AI Opportunities Action Plan. UK Department for Science, Innovation and Technology, January 2025.
    27. DSIT (2025). AI Assurance Roadmap: Accelerating the Growth and Credibility of the Third-Party AI Assurance Market. London: DSIT.
    28. Selvaraju, R. R., Cogswell, M., Das, A., Vedantam, R., Parikh, D., & Batra, D. (2017). Grad-CAM: Visual explanations from deep networks via gradient-based localization. *ICCV 2017*.

  ## Formal Governance Framework Specification
    The ETSI Domain AI + Governance domain node encodes a formal governance lifecycle that can be expressed as a sequence of interlinked assessment and monitoring activities. The following specification, synthesised from EU AI Act implementing regulations, ETSI TS 104 224, and ISO/IEC 42001, defines the canonical governance lifecycle for a component classified under this domain:

    **Phase 1 — Classification and Risk Determination**
    The first phase maps the AI component to its EU AI Act risk tier. This involves: (a) screening against the prohibited AI practices list (Annex I categories: social scoring by public authorities, real-time remote biometric identification in public spaces without authorisation, manipulative subliminal techniques); (b) checking Annex III high-risk use case classifications (biometrics, critical infrastructure, education, employment, essential services, law enforcement, migration, justice, democratic processes); (c) determining GPAI model obligations if the component is a general-purpose model with systemic risk (>10^25 FLOP training compute threshold); (d) applying the limited risk transparency obligations to any AI system interacting with humans (chatbots, synthetic content generators, emotion recognition). The classification output feeds the Conformity Assessment Pathway selector in Phase 2.

    **Phase 2 — Conformity Assessment and Technical Documentation**
    High-risk AI systems must complete conformity assessment before deployment. The EU AI Act permits self-assessment for most high-risk categories (Article 43(1)) with third-party notified body involvement mandated for AI systems in Annex III points 1 (biometrics, with exceptions) and 6 (law enforcement biometrics). Required technical documentation (Article 11, Annex IV) comprises: (a) general description of the AI system and intended purpose; (b) detailed description of system components, algorithms, and data; (c) description of monitoring, functioning, and control of the AI system; (d) description of the risk management system; (e) description of changes made during lifecycle; (f) list of harmonised standards applied; (g) EU declaration of conformity; (h) post-market surveillance plan. This documentation is maintained in a technical file and must be available to market surveillance authorities on request for 10 years post-deployment.

    **Phase 3 — Explicability Assurance (ETSI TS 104 224)**
    For components with AI decision-making functions, ETSI TS 104 224 requires: (a) documentation of AI decision-making processes at a level enabling qualified examiners to trace reasoning paths; (b) classification of AI processing types (deterministic vs. stochastic, rule-based vs. learned, glass-box vs. black-box); (c) implementation of explanation generation mechanisms appropriate to the processing type — feature attribution for tabular models, attention visualisation for transformer models, concept activation vectors for deep classification networks; (d) explanation quality assessment using established faithfulness metrics (deletion, insertion, ROAR); (e) static explicability (documentation-level, prior to deployment) and dynamic explicability (instance-level, at inference time) both addressed. Explicability coverage metric: the percentage of system decisions for which an explanation meeting TS 104 224 quality criteria can be generated on demand.

    **Phase 4 — Bias Detection and Mitigation (ISO/IEC TR 24027)**
    The bias assessment lifecycle spans three phases: (a) Training data audit — statistical analysis of training data distribution across protected characteristics, comparison against target population demographics, identification of underrepresented subgroups and proxy features that may enable indirect discrimination; (b) Model-level bias analysis — evaluation of model outputs across demographic subgroups using multiple fairness metrics (demographic parity, equalised odds, predictive parity, individual fairness), with documentation of metric trade-offs where optimising one fairness criterion degrades another; (c) Deployment monitoring — ongoing statistical process control monitoring of prediction distributions, outcome rates by subgroup, and feedback loop effects, with automated alerts when drift exceeds governance thresholds. Bias mitigation techniques applied may include preprocessing (resampling, reweighting), in-processing (constrained optimisation, adversarial debiasing), and post-processing (threshold adjustment, calibration) — all selections documented with rationale.

    **Phase 5 — Human Oversight Implementation (EU AI Act Article 14)**
    Article 14 requires that high-risk AI systems are designed and developed with human oversight measures that: (a) enable the individuals responsible to fully understand the AI system's capacities and limitations; (b) enable detection and addressing of anomalies, dysfunctions, and unexpected performance; (c) enable authorised personnel to override, interrupt, or suspend the AI system's operation. Implementation patterns include: role-based oversight assignment (accountability matrices), human review thresholds (rules triggering mandatory human examination of AI decisions above a confidence or impact threshold), audit sampling (random sampling of AI decisions for human review to detect systematic errors), and escalation protocols (defined procedures for human response when AI signals uncertainty or detects exceptional cases). Override capability must be technically implemented, not merely procedurally described.

    **Phase 6 — Post-market Surveillance and Incident Reporting (Article 72)**
    Providers of high-risk AI systems must establish a post-market surveillance system proportionate to risk level. Requirements include: (a) continuous collection of data from deployed systems on performance, unintended incidents, and accuracy drift; (b) periodic post-market surveillance reports submitted to market surveillance authorities; (c) serious incident reporting within 15 days of becoming aware of an AI system causing death, serious harm, or unexpected significant deviation from intended purpose; (d) near-miss reporting for incidents that could have caused harm; (e) corrective action procedures with documentation and re-conformity assessment where changes affect original conformity basis.

  ## Governance Metrics and Assessment Criteria
    The operationalisation of ETSI Domain AI + Governance obligations requires concrete metrics for each governance dimension. The following assessment framework synthesises requirements from ETSI TS 104 224, EU AI Act Implementing Regulations, and ISO/IEC TR 24027:

    - **Explicability Metrics**: Feature attribution coverage rate (percentage of model decisions for which a feature attribution explanation meeting ETSI TS 104 224 thresholds is available); explanation consistency score (stability of explanations across similar inputs, assessed via SHAP value Spearman correlation); counterfactual proximity metric (minimum perturbation required to change a model decision, indicating decision boundary sharpness).
    - **Bias Detection Metrics**: Demographic parity difference (|P(Ŷ=1|A=0) − P(Ŷ=1|A=1)|, target <0.05 for high-risk systems); equal opportunity difference (difference in true positive rates across protected groups, target <0.05); disparate impact ratio (adverse impact ratio threshold ≥0.80 per US EEOC guidelines, commonly adopted in EU contexts); individual fairness: consistency score measuring whether similar individuals receive similar predictions.
    - **Human Oversight Metrics**: Override rate (frequency with which human supervisors exercise override capability, indicating meaningful oversight rather than rubber-stamping); escalation latency (time from AI decision flag to human review completion, target <4 hours for high-impact decisions in most deployment contexts); human-AI agreement rate on audited sample (target not 100%, as divergence indicates where human judgment adds value beyond AI).
    - **Audit Trail Completeness**: Decision log completeness rate (percentage of AI-driven decisions for which a compliant audit log entry exists); data lineage traceability score (fraction of training data items for which full provenance chain is documented); model card coverage (percentage of deployed model versions with current, accurate model cards per Mitchell et al. 2019 standard).
    - **Regulatory Compliance KPIs**: Conformity assessment currency (whether conformity assessment documents are within their valid period); EU AI Act database registration status (for high-risk systems); FRIA completion rate for applicable deployments; post-market surveillance report submission compliance rate.

  ## Benchmark Datasets and Evaluation Resources
    Governance evaluation for AI systems relies on benchmark datasets and standardised evaluation protocols across multiple assessment dimensions:

    - **Bias Evaluation Benchmarks**: Adult Income dataset (UCI, Dua & Graff 2017) for fairness evaluation on tabular income prediction; COMPAS Recidivism dataset (ProPublica, Angwin et al. 2016) — the definitive fairness evaluation benchmark following Chouldechova (2017) analysis; CelebA facial attribute dataset for demographic bias evaluation in computer vision; WinoBias and WinoGender (Zhao et al. 2018) for gender bias in NLP; BBQ (Parrish et al. 2022) for bias benchmarking in LLM question-answering.
    - **Explainability Evaluation**: ROAR (RemOve And Retrain, Hooker et al. 2019) for faithfulness evaluation of feature attribution methods; Sanity Checks for Saliency Maps (Adebayo et al. 2018); the ERASER benchmark (DeYoung et al. 2020) for evaluating rationale-based explanations in NLP.
    - **AI Governance Frameworks Assessment**: NIST AI RMF Core self-assessment worksheets; ISO/IEC 42001 internal audit checklists; EU AI Act conformity assessment template documentation published by EU AI Office; Alan Turing Institute AI Regulatory Capability Self-Assessment Tool.
    - **Adversarial Robustness (Governance Intersection)**: CleverHans and Foolbox Python libraries for adversarial attack evaluation; RobustBench leaderboard for standardised adversarial robustness benchmarking — relevant because ETSI TC SAI TR 104 128 identifies adversarial manipulation as a governance risk vector for AI systems.

  ## Key Terminology
    - **Explicability**: The capacity of an AI system designer or implementer to "show their working" — to demonstrate the process by which an AI reached a given output. The term preferred in ETSI standards (GR SAI 007, TS 104 224), recognising that many other publications use the synonym "explainability."
    - **Transparency**: The openness of an AI system to external examination — encompassing documentation of training data, model architecture, evaluation metrics, and known limitations, as distinct from but complementary to explicability.
    - **Conformity Assessment**: The process by which an AI system is evaluated against applicable regulatory requirements. Under the EU AI Act, high-risk AI systems must undergo conformity assessment (self-assessment for most categories; third-party notified body assessment for biometric and critical infrastructure systems) before market deployment.
    - **Fundamental Rights Impact Assessment (FRIA)**: A structured evaluation of how a high-risk AI system may affect fundamental rights (privacy, non-discrimination, dignity, fair trial), required for deployers of high-risk AI systems operating in public-sector contexts under EU AI Act Article 27.
    - **AI Risk Tier**: The EU AI Act classification of AI systems by risk level — unacceptable risk (prohibited), high risk (mandatory conformity assessment), limited risk (transparency obligations), and minimal risk (voluntary codes of conduct). ETSI Domain AI + Governance components inherit their tier classification into downstream governance workflows.
    - **Post-market Surveillance**: Ongoing monitoring of a deployed AI system's behaviour against its registered conformity baseline, required under EU AI Act Article 72 for high-risk AI providers to detect performance degradation, bias drift, and unexpected failure modes.
    - **Model Card**: A short structured document accompanying a trained machine learning model that records intended use cases, performance benchmarks, evaluation datasets, fairness evaluation results, known limitations, and contact information — introduced by Mitchell et al. (2019) and now referenced in EU AI Act technical documentation requirements.
    - **Data Sheet for Datasets**: A structured document accompanying a machine learning training or evaluation dataset recording motivation, composition, collection process, preprocessing, uses, distribution, and maintenance — introduced by Gebru et al. (2021) and now a component of EU AI Act data governance documentation requirements for high-risk AI systems.
    - **Algorithmic Audit**: Systematic independent examination of an AI system's behaviour, decision outputs, and internal processes to assess conformity with stated specifications, applicable regulations, and ethical commitments — a growing professional service category, regulated under EU AI Act Chapter VII for providers of GPAI models.

- ### Provenance
  - sources:: ETSI TS 104 224 (2025); ETSI GR SAI 007 (2023); ETSI TR 104 065 (2025); ETSI EN 304 223 (2025); ETSI GS MEC 003 (2025); EU AI Act Regulation 2024/1689; ISO/IEC 42001:2023; ISO/IEC TR 24027:2021; NIST AI RMF 1.0 (2023); OECD AI Principles 2019; EU HLEG AI Ethics Guidelines 2019; Floridi et al. 2018 AI4People; Jobin et al. 2019 Nature MI; Dwork et al. 2012 ITCS; Hardt et al. 2016 NeurIPS; Ribeiro et al. 2016 KDD; Lundberg & Lee 2017 NeurIPS; Cath et al. 2018 Phil Trans; Dafoe 2018 FHI; Koshiyama et al. 2022 arXiv; Alan Turing Institute 2024; Ada Lovelace Institute 2022; Chouldechova 2017 Big Data; Floridi et al. 2025 arXiv; DSIT 2025 AI Opportunities; DSIT 2025 AI Assurance Roadmap; etsi.org/deliver/etsi_ts/104200_104299/104224; etsi.org/deliver/etsi_gr/SAI/001_099/007; etsi.org/newsroom/press-releases/2259; digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai; turing.ac.uk/sites/default/files/2026-01/ai_governance_around_the_world_-_uk.pdf
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm