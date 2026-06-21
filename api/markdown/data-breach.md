- ### Definition
  - A Data Breach is a [[Cybersecurity]] incident in which sensitive, protected, or confidential data is accessed, disclosed, copied, transmitted, altered, or destroyed by an unauthorised actor — whether through deliberate external attack, [[Insider Threat]], or accidental exposure. In [[AI Governance and Ethics]] and [[Machine Learning]] operational contexts, data breaches have acquired additional dimensions beyond the classical database or network intrusion model: AI systems aggregate personal data at unprecedented scale, creating high-value targets, while simultaneously introducing novel attack vectors — [[Membership Inference]] attacks that determine whether an individual's record was present in a training dataset, [[Model Inversion]] attacks that reconstruct sensitive training data from model outputs, [[Model Extraction]] attacks that steal proprietary intellectual property embedded in model weights, and [[Data Poisoning]] attacks that corrupt training data to introduce backdoors or degrade model performance. Under [[GDPR]] and its UK equivalent (UK GDPR retained post-Brexit), organisations must notify their supervisory authority of qualifying breaches within 72 hours of becoming aware, and must communicate to affected data subjects when the breach is likely to result in high risk to their rights and freedoms. The UK's Cyber Security and Resilience Bill (introduced November 2025, Royal Assent expected 2026) further tightens this timeline, requiring initial notification to both the regulator and the NCSC CSIRT within 24 hours. The costs of breaches are substantial: IBM's 2024 Cost of a Data Breach Report placed the global average at $4.88 million, with healthcare sector breaches averaging significantly higher; 77% of businesses reported an AI-related security incident in 2024, and NIST documented a greater than 2,000% increase in AI-specific Common Vulnerabilities and Exposures since 2022. Data breaches thus sit at the intersection of [[Risk]], operational security, legal compliance, and the emerging discipline of AI-specific [[Adversarial Attack]] research, demanding integrated responses spanning [[Risk Management]], [[Incident Response]], [[Encryption]], [[Access Control]], [[Differential Privacy]], and [[Audit Trail]] capabilities.

- ### Semantic Classification
  - owl-class:: ai:DataBreach
  - owl-role:: Concept | SecurityIncident | GovernanceConcern
  - owl-inferred:: ai:RiskEvent, ai:PrivacyViolation, ai:AISecurityThreat, ai:ComplianceTrigger
  - belongs-to-domain:: [[AI-GroundedDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - is-subclass-of:: [[Risk]], [[AI Governance and Ethics]]
  - has-part:: [[Membership Inference]], [[Model Inversion]], [[Model Extraction]], [[Data Poisoning]], [[Ransomware]], [[Insider Threat]]
  - requires:: [[Vulnerability]], [[Access Control]], [[Cybersecurity]]
  - enables:: [[Privacy]], [[Incident Response]], [[Regulatory Compliance]], [[Risk Assessment]]
  - implements:: [[Risk Management]], [[Threat Intelligence]]
  - depends-on:: [[Artificial Intelligence]], [[Machine Learning]], [[Adversarial Attack]]
  - supports:: [[Risk Assessment]], [[Risk Management]], [[Threat Intelligence]], [[Audit Trail]]
  - uses:: [[Membership Inference]], [[Model Inversion]], [[Adversarial Attack]], [[Data Poisoning]], [[Model Extraction]], [[Ransomware]]
  - contrasts-with:: [[Differential Privacy]], [[Privacy-Preserving Machine Learning]], [[Federated Learning]], [[Encryption]], [[Zero Trust Architecture]]
  - related-to:: [[Cybersecurity]], [[Data Protection]], [[GDPR]], [[Audit Trail]], [[Regulatory Compliance]], [[Privacy Preserving Data Mining]], [[Access Control]], [[Encryption]], [[Differential Privacy]], [[Federated Learning]], [[Zero Trust Architecture]], [[Healthcare AI]], [[Insider Threat]], [[Vulnerability]]

- ### Content
  - ## Compositional Relationships (Components)
    ```
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:hasPart ai:ExternalAttack))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:hasPart ai:InsiderThreat))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:hasPart ai:AccidentalExposure))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:hasPart ai:MembershipInference))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:hasPart ai:ModelInversion))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:hasPart ai:Ransomware))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:hasPart ai:DataExfiltration))
    ```
  - ## Dependency Relationships
    ```
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:requires ai:Vulnerability))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:requires ai:AccessControl))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:requires ai:SecurityMonitoring))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:dependsOn ai:CybersecurityFramework))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:dependsOn ai:DataGovernancePolicy))
    ```
  - ## Capability Relationships
    ```
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:enables ai:IncidentResponse))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:enables ai:RegulatoryCompliance))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:enables ai:RiskAssessment))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:enables ai:PrivacyProtection))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:enables ai:ThreatIntelligence))
    ```
  - ## Implementation Relationships
    ```
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:uses ai:MembershipInferenceAttack))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:uses ai:ModelInversionAttack))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:uses ai:AdversarialAttack))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:uses ai:DataPoisoning))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:uses ai:ModelExtraction))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:implements ai:RiskManagement))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:implements ai:ThreatIntelligenceProcess))
    ```
  - ## Reduction Relationships
    ```
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:reducesTo ai:UnauthorisedDataAccess))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:reducesTo ai:PrivacyViolation))
    SubClassOf(ai:DataBreach
      ObjectSomeValuesFrom(ai:reducesTo ai:ComplianceFailure))
    ```
  - ## Contrast Relationships (Mitigation)
    ```
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:Encryption))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:DifferentialPrivacy))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:FederatedLearning))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:ZeroTrustArchitecture))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:AccessControl))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:AuditTrail))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:PrivacyPreservingMachineLearning))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:mitigatedBy ai:IncidentResponse))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:triggersObligation ai:RegulatoryNotification))
    SubClassOf(ai:DataBreach
      ObjectAllValuesFrom(ai:triggersObligation ai:RiskAssessment))
    ```
  - ## About
    - A data breach is any incident in which unauthorised parties gain access to protected information, and the phenomenon spans organisational data stores, cloud infrastructure, and increasingly the artefacts of AI systems — model weights, embeddings, inference caches, and interaction logs. The classical threat model envisages an external attacker exploiting software [[Vulnerability|vulnerabilities]] or social engineering to gain system access, exfiltrate data, and either sell it or weaponise it for [[Ransomware]] deployment. The Verizon 2025 Data Breach Investigations Report, which analysed 22,052 incidents and 12,195 confirmed breaches, found [[Ransomware]] present in 44% of breaches (up from 32% in the prior year) and the human element implicated in approximately 60% of incidents, underscoring that technical controls are necessary but insufficient without training and access hygiene. The average time to identify and contain a breach fell to 241 days in 2025, the lowest recorded value, reflecting improved [[Threat Intelligence]] and detection tooling deployment.
    - AI systems have introduced qualitatively new breach categories that sit outside the traditional "exfiltration of a database" model. [[Membership Inference]] attacks exploit statistical differences in model output behaviour between training-set and non-training-set examples to determine whether a specific individual's data was used to train a model. This can constitute a [[GDPR]] violation without any direct access to the underlying data store — the breach is reconstructive, occurring entirely through the model's public query interface. [[Model Inversion]] attacks go further, using repeated model queries to reconstruct representative examples of training data, potentially recovering sensitive attributes such as facial biometrics, genomic markers, or medical conditions. [[Model Extraction]] attacks systematically probe a model API to reconstruct a functional equivalent of the proprietary model, constituting intellectual property theft. [[Data Poisoning]] — corrupting training data during the collection or preprocessing phase — can introduce backdoors that the model will execute on attacker-specified inputs, constituting a delayed-action breach vector that is especially difficult to detect post-training. These AI-specific attack classes interact with the classical breach taxonomy, expanding the attack surface far beyond the perimeter of the data store that holds the original personal information.
    - Regulatory frameworks have evolved to address these expanded risks. [[GDPR]] (Regulation 2016/679) imposes a 72-hour breach notification window, organisational accountability obligations, and potential fines of up to €20 million or 4% of global annual turnover for the most serious failures. European data protection authorities issued nearly €1.2 billion in GDPR fines in 2025, with the number of breach notifications rising approximately 22%, or approximately 443 breaches daily on average across supervisory authorities. UK GDPR (retained post-Brexit) maintains equivalent provisions enforced by the Information Commissioner's Office. The UK Cyber Security and Resilience Bill (2025-2026) introduces a tightened 24-hour initial notification requirement and a two-tier penalty structure: up to £10M or 2% of global turnover for standard failures, and up to £17M or 4% of turnover for serious breaches including notification failures.
  - ## Breach Categories and Typology
    - **External Intrusion** — SQL injection, credential stuffing, phishing-facilitated credential theft, exploitation of unpatched [[Vulnerability|vulnerabilities]], supply-chain attacks on trusted software dependencies. The 2024-2025 Synnovis breach affecting NHS blood test services and the DXS International NHS supplier attack (December 2025, claimed by DevMan group, 300 GB allegedly exfiltrated) exemplify this category in UK healthcare.
    - **[[Insider Threat]]** — malicious exfiltration by current or former employees with privileged access, or inadvertent exposure by staff who misconfigure storage, email sensitive data to wrong recipients, or fail to revoke access for departed personnel. Implicated in a substantial proportion of healthcare breaches due to the broad data access patterns typical in clinical settings.
    - **[[Ransomware]]** — encrypts victim data and demands payment for decryption keys; increasingly paired with double-extortion (simultaneous exfiltration and publication threats) and triple-extortion (targeting downstream customers). Found in 44% of 2025 breaches per Verizon DBIR. Cl0p claimed a ransomware attack on NHS systems in 2025, illustrating the continued targeting of critical public infrastructure.
    - **AI-Specific Attack Vectors**
      - [[Membership Inference]] — query-based reconstruction of training set membership; applicable to any model with public query access.
      - [[Model Inversion]] — reconstruction of training data from output distributions; particularly dangerous for face recognition and genomic models.
      - [[Model Extraction]] — systematic API probing to reproduce a proprietary model; constitutes intellectual property theft.
      - [[Data Poisoning]] — contaminating training data to implant backdoors, degrade accuracy for specific subpopulations, or introduce biases. Prompt injection (OWASP LLM Top 10 #1, 2025) is the LLM-era analogue: malicious instructions embedded in user inputs or retrieved documents redirect model behaviour.
    - **Accidental Exposure** — misconfigured cloud storage buckets, inadvertent public API endpoint access, inadequately anonymised data releases, and researcher disclosure of datasets containing personal information without proper de-identification.
  - ## Regulatory Landscape
    - **[[GDPR]] / UK GDPR** — mandatory 72-hour supervisory authority notification; data subject communication when high individual risk; fines up to 4% global turnover.
    - **UK Cyber Security and Resilience Bill (2025-2026)** — introduces 24-hour initial notification; two-tier penalty regime; extends coverage to over 900 managed service providers; aligns with EU NIS2 directive.
    - **NIS Regulations 2018 (UK) and NIS2 (EU)** — sector-specific cybersecurity obligations for operators of essential services (healthcare, energy, transport) and digital service providers; breach notification obligations distinct from but complementary to GDPR.
    - **ICO Enforcement** — the UK Information Commissioner's Office coordinates breach response with the NCSC; provides enforcement action including fines, improvement notices, and enforcement notices.
    - **Sector-Specific Requirements** — NHS Digital and NHS England maintain additional guidance on data security, aligned with the Data Security and Protection Toolkit (DSPT) which mandates annual compliance assessment for all NHS organisations.
    - **AI Act (EU, 2024 in force)** — while primarily addressing AI system transparency and high-risk AI deployment, the AI Act's requirements for logging, record-keeping, and human oversight create additional surface for breach notification obligations when AI system incidents involve personal data.
  - ## AI-Specific Breach Mechanisms in Depth
    - **[[Membership Inference]] Attacks** — first formally characterised by Shokri et al. (2017), membership inference exploits the tendency of overfitted models to assign higher confidence to training examples than to non-training examples. An attacker trains shadow models mimicking the target model's behaviour on known datasets, then uses the shadow model's output distributions to build a binary classifier distinguishing member from non-member queries. Differential privacy training (e.g., DP-SGD) is the primary algorithmic mitigation, trading privacy guarantees against accuracy. Under GDPR, establishing that a specific individual's data was in a training set — even without recovering the actual data — can constitute a privacy violation requiring notification.
    - **[[Model Inversion]] Attacks** — exploit gradient or output information to iteratively optimise a synthetic input that maximises the model's predicted probability of a target class, recovering representative training examples. Fredrikson et al. (2015) demonstrated reconstruction of patient facial images from a face recognition model, and recovery of genetic markers from a medical model. Defence strategies include restricting API access, output perturbation, and confidence score truncation.
    - **[[Model Extraction]]** — Tramèr et al. (2016) demonstrated that a functionally equivalent substitute model could be trained using 20,000 API queries against commercial ML-as-a-service platforms. Subsequent work has reduced required queries substantially via active learning-based strategies. Watermarking and prediction poisoning (intentionally perturbing outputs to degrade extracted model quality) are deployed defences.
    - **[[Data Poisoning]] and Backdoor Attacks** — an attacker who can influence the training data supply chain (common in web-scraped datasets) can insert trigger-response pairs that cause targeted misclassifications at inference time. The ShadowAttack (2021) and BadNet (Gu et al., 2017) frameworks illustrate how minimal perturbations to a small fraction of training examples can establish persistent backdoors invisible to standard evaluation.
    - **Prompt Injection (LLM Era)** — malicious instructions embedded in retrieved documents, tool outputs, or user inputs redirect [[Machine Learning]] model behaviour away from intended purposes. Ranked #1 in OWASP's 2025 Top 10 for LLM Applications. Direct prompt injection targets the model directly; indirect prompt injection embeds instructions in content the model retrieves, enabling automated propagation of attacker intent through multi-agent AI systems.
  - ## Mitigation and Defence Landscape
    - **Technical Controls** — [[Encryption]] at rest and in transit; [[Access Control]] with least-privilege and role-based access management; [[Differential Privacy]] (DP-SGD for model training, differentially private data release); [[Federated Learning]] to avoid centralising raw personal data; output perturbation and confidence truncation to impede model inversion; watermarking and prediction poisoning against extraction.
    - **[[Zero Trust Architecture]]** — replaces perimeter-based security with continuous identity verification, micro-segmentation, and least-privilege access for every request, substantially reducing lateral movement potential following initial compromise.
    - **[[Incident Response]]** — predefined playbooks for breach containment, forensic preservation, regulatory notification, and stakeholder communication; tabletop exercises; retainer contracts with specialist forensic firms. Mean time to identify and contain improved to 241 days in 2025 (IBM).
    - **[[Audit Trail]]** — immutable logging of data access events, model queries, and configuration changes; essential for post-breach forensic reconstruction and demonstrating due diligence to regulators.
    - **[[Privacy-Preserving Machine Learning]]** — umbrella term covering [[Differential Privacy]], [[Federated Learning]], secure multi-party computation, homomorphic encryption, and trusted execution environments; addresses breach risk at the algorithmic level rather than relying solely on perimeter security.
    - **Supply Chain Security** — software bill of materials (SBOM), dependency auditing, and provenance verification for training data, model weights, and inference infrastructure; increasingly mandated by procurement requirements in public sector and critical national infrastructure.
  - ## Use Cases and Domain Impact
    - **[[Healthcare AI]]** — the NHS and private healthcare providers hold extensive personal health data whose breach carries severe individual harm and ICO enforcement risk. The DXS International breach (December 2025), the earlier Synnovis breach affecting blood test matching for NHS trusts, and the LockBit attack on Barts Health in 2023 illustrate the persistent targeting of healthcare. AI systems processing electronic health records, diagnostic imaging, and genomic data expand the breach surface while also enabling [[Membership Inference]] and [[Model Inversion]] attacks specific to medical models.
    - **Financial Services** — banks, insurers, and payment processors face dual regulatory obligations (FCA, PRA, UK GDPR) and high financial impact from breaches. AI fraud detection models trained on transaction histories are targets for membership inference to probe whether specific accounts were flagged; model extraction enables adversaries to reverse-engineer detection logic.
    - **Autonomous Systems and IoT** — connected devices generate continuous personal data streams; compromise of edge AI components can expose inference results (e.g., activity recognition in smart homes) even if raw sensor data is encrypted.
    - **Large Language Models and Conversational AI** — interaction logs from LLM deployments contain highly sensitive personal disclosures; memorisation vulnerabilities (Carlini et al., 2021) mean models can reproduce verbatim training sequences including personal information, constituting a form of involuntary breach.
    - **Academic and Research Data** — university and research institute datasets containing patient cohort data, genomic sequences, or commercially sensitive experimental results require robust data governance to prevent breach; the research exemption under GDPR has defined but non-unlimited scope.
  - ## Academic Context
    - The formal study of data breaches in the context of machine learning originated with foundational security work on statistical databases in the 1970s (Denning and Schlörer, 1983), but the modern threat landscape was crystallised by the re-identification attacks on AOL search logs (Narayanan and Shmatikoff, 2006) and Netflix prize data (Narayanan and Shmatikoff, 2008), which demonstrated that supposedly anonymised datasets could be reliably de-anonymised by cross-referencing auxiliary information. This work motivated the development of formal [[Differential Privacy]] (Dwork et al., 2006) as a mathematically rigorous alternative to ad hoc anonymisation.
    - AI-specific breach vectors received systematic attention from 2017 onwards. Shokri et al. (2017) formalised membership inference attacks, demonstrating that model confidence scores leak training set membership information. Fredrikson et al. (2015) demonstrated model inversion in medical settings. Tramèr et al. (2016) demonstrated model extraction against commercial ML APIs. Carlini et al. (2021, 2023) catalogued memorisation in large language models, showing that GPT-2 and larger models could reproduce verbatim training sequences including personal addresses and phone numbers under targeted prompting. The OWASP Foundation codified the evolving threat landscape into the OWASP Top 10 for LLM Applications (2024/2025 edition), with prompt injection consistently at position one. The Hogan Lovells report (2024) provided a practitioner synthesis of model inversion and membership inference risks for legal and compliance audiences. Research groups at the Alan Turing Institute, UCL Information Security Research Group, and the University of Edinburgh's Security and Privacy group have contributed to the UK academic landscape, while industry research at Google DeepMind, Microsoft Research Cambridge, and Arm Research in Cambridge addresses deployment-level mitigations.
  - ## Current Landscape (2026)
    - The data breach environment in 2026 is characterised by increasing sophistication of attacks, AI-assisted attack tooling, and an expanding regulatory perimeter. Practical DevSecOps (2026) reports that 77% of businesses experienced an AI-related security incident in 2024, with NIST documenting over a 2,000% increase in AI-specific CVEs since 2022. The average global breach cost fell slightly from $4.88M to $4.44M in 2025 (IBM), driven by faster mean-time-to-detection rather than reduced attack volume. Ransomware remains the dominant breach modality at 44% of incidents, with human element involvement at approximately 60% (Verizon DBIR 2025).
    - In the EU, GDPR fines reached nearly €1.2 billion in 2025, reflecting active enforcement across sectors. The ICO in the UK has pursued enforcement actions against AI companies handling personal data at scale, and the Cyber Security and Resilience Bill (Royal Assent anticipated 2026) represents the most significant update to UK cyber security legislation since the 2018 NIS Regulations. The Bill introduces 24-hour initial breach notification (versus the current 72-hour GDPR window), bringing the UK into closer alignment with EU NIS2 while establishing a distinct UK framework. Penalties of up to £17M or 4% of global turnover for serious failures provide a meaningful deterrent.
    - The AI regulatory layer is becoming simultaneously more complex and more harmonised. The EU AI Act (2024, phased application through 2026) creates additional documentation and human oversight requirements for high-risk AI systems that, when breached, trigger both AI Act obligations and GDPR breach notification. UK alignment with AI Act principles (as articulated in the AI Safety Institute's frameworks) is occurring pragmatically without full legislative equivalence.
  - ## UK Context
    - The United Kingdom has experienced several high-profile data breaches in recent years that illustrate both the healthcare sector's particular vulnerability and the government's evolving response. The Synnovis breach (2024) affected NHS blood testing services across London hospital trusts, directly disrupting clinical operations and triggering NCSC involvement. The DXS International breach (December 2025) affected NHS GP clinical decision support systems, with ransomware group DevMan claiming 300 GB of stolen data. The Cl0p group claimed a ransomware hit on NHS systems in 2025. These incidents collectively prompted the UK Government to accelerate the Cyber Security and Resilience Bill.
    - The National Cyber Security Centre (NCSC), a part of GCHQ, coordinates the UK's technical breach response and publishes authoritative guidance on incident management, cloud security, and AI-specific cyber risks. The ICO works alongside the NCSC under the NIS Regulations framework, with the ICO acting as the lead regulator for DSP incidents and NCSC providing technical assistance. University research groups at UCL (Information Security Research Group), Edinburgh (Security and Privacy Research Group), Oxford (Systems Security Research Group), and the Alan Turing Institute contribute to the knowledge base underpinning UK policy.
    - In Northern England, NHS trusts in Manchester, Leeds, Sheffield, and Newcastle are among the largest processors of personal health data in England and face obligations under NHS England's Data Security and Protection Toolkit. The Northern Health Science Alliance (comprising healthcare organisations and universities in the North of England) has identified AI data security as a priority research theme. Manchester's National Institute for Data Science and AI (N8 Research Partnership AI programme) includes data governance and breach prevention as active research areas. The University of Sheffield's Insigneo Institute and the Leeds Institute for Data Analytics both operate under research data governance frameworks designed to prevent inadvertent breach of linked health datasets.
  - ## Future Directions (2026-2030)
    - **AI-Augmented Breach Detection** — [[Machine Learning]] models analysing network telemetry, user behaviour, and system logs in real time will progressively reduce mean-time-to-detect below the current 241-day average; anomaly detection models trained on normal operational baselines will flag unusual data access patterns indicative of exfiltration.
    - **Agentic AI Attack Surfaces** — as multi-agent AI systems with autonomous tool use become deployed in enterprise settings, the indirect prompt injection attack surface expands dramatically. An agent that can write to email, databases, and external APIs under attacker-injected instructions constitutes a novel breach vector requiring architectural mitigations (sandboxing, output filtering, human-in-the-loop approval for sensitive actions).
    - **Memorisation Mitigation at Scale** — the field of machine unlearning (enabling models to "forget" specific training examples post-training) is advancing from theoretical proposals toward practical deployment, with regulatory pressure from the GDPR right to erasure creating concrete commercial incentives. Approximate unlearning methods (gradient ascent on targeted examples, SISA training) are approaching deployable performance-cost trade-offs.
    - **Homomorphic Encryption and Secure Multi-Party Computation** — increasing compute efficiency of homomorphic schemes (CKKS, TFHE) is making encrypted computation on ML models practically feasible for some use cases, enabling inference on sensitive data without decrypting it, thus removing the classical breach surface of in-the-clear inference pipelines.
    - **Regulatory Convergence and Divergence** — the EU AI Act, US Executive Orders on AI safety, and UK AI Safety Institute frameworks are developing in parallel with some coordination. UK-EU data adequacy under the UK GDPR will require continued demonstration of equivalent protection standards, with breach notification alignment becoming a key benchmark.
    - **Quantitative Breach Risk Modelling** — actuarial and probabilistic models for breach likelihood, impact, and insurance pricing are maturing, driven by demand from the cyber insurance sector and regulatory requests for quantified risk disclosures. AI-specific breach modes (membership inference, model extraction) are beginning to appear in cyber insurance policy definitions.
  - ## Key Terminology
    - **Data Breach** — any incident resulting in unauthorised access to, disclosure, alteration, or destruction of personal or protected data.
    - **Personal Data Breach** — GDPR-specific term covering breaches that affect personally identifiable information of EU/UK data subjects.
    - **Membership Inference Attack** — exploiting model output distributions to determine whether a specific record was in the training set.
    - **Model Inversion Attack** — using model query access to reconstruct representative training data examples.
    - **Model Extraction Attack** — systematic model querying to train a substitute model with equivalent functionality.
    - **Data Poisoning** — corrupting training data to embed backdoors or degrade model performance on target inputs.
    - **Prompt Injection** — embedding attacker-controlled instructions in model inputs or retrieved context to redirect LLM behaviour.
    - **Differential Privacy (DP)** — a formal mathematical framework providing provable bounds on the information leaked about any individual training example.
    - **ICO** — Information Commissioner's Office; UK supervisory authority for data protection and breach notification.
    - **NCSC** — National Cyber Security Centre; GCHQ arm providing technical cyber security guidance and incident response support.
    - **72-hour Rule** — GDPR obligation to notify the supervisory authority within 72 hours of becoming aware of a qualifying personal data breach.
    - **DSPT** — Data Security and Protection Toolkit; NHS England's annual self-assessment framework for data security.
  - ## Research and Literature
    - 1. Dwork, C., McSherry, F., Nissim, K., Smith, A. (2006). Calibrating Noise to Sensitivity in Private Data Analysis. *TCC 2006*.
    - 2. Narayanan, A., Shmatikoff, V. (2008). Robust De-anonymization of Large Sparse Datasets. *IEEE S&P 2008*.
    - 3. Fredrikson, M., Jha, S., Ristenpart, T. (2015). Model Inversion Attacks that Exploit Confidence Information and Basic Countermeasures. *CCS 2015*.
    - 4. Tramèr, F., Zhang, F., Juels, A., Reiter, M.K., Ristenpart, T. (2016). Stealing Machine Learning Models via Prediction APIs. *USENIX Security 2016*.
    - 5. Shokri, R., Stronati, M., Song, C., Shmatikoff, V. (2017). Membership Inference Attacks Against Machine Learning Models. *IEEE S&P 2017*.
    - 6. Gu, T., Dolan-Gavitt, B., Garg, S. (2017). BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain. *arXiv:1708.06733*.
    - 7. Abadi, M., et al. (2016). Deep Learning with Differential Privacy. *CCS 2016*.
    - 8. Verizon (2025). Data Breach Investigations Report 2025. https://www.verizon.com/business/resources/reports/dbir/
    - 9. IBM Security (2024). Cost of a Data Breach Report 2024. IBM/Ponemon Institute.
    - 10. Carlini, N., et al. (2021). Extracting Training Data from Large Language Models. *USENIX Security 2021*.
    - 11. Carlini, N., et al. (2023). Quantifying Memorization Across Neural Language Models. *ICLR 2023*.
    - 12. OWASP (2025). OWASP Top 10 for LLM Applications 2025. https://owasp.org/www-project-top-10-for-large-language-model-applications/
    - 13. Hogan Lovells (2024). Model inversion and membership inference: Understanding new AI security risks and mitigating vulnerabilities. https://www.hoganlovells.com/en/publications/model-inversion-and-membership-inference-understanding-new-ai-security-risks-and-mitigating-vulnerabilities
    - 14. NCSC (2024). NCSC statement following reports of a Synnovis data breach. https://www.ncsc.gov.uk/news/ncsc-statement-following-reports-of-a-synnovis-data-breach
    - 15. Practical DevSecOps (2026). AI Security Statistics 2026: Latest Data, Trends & Research Report. https://www.practical-devsecops.com/ai-security-statistics-2026-research-report/
    - 16. BrightDefense (2026). 120 Data Breach Statistics for 2026. https://www.brightdefense.com/resources/data-breach-statistics/
    - 17. Taylor Wessing (2026). UK Cyber Security and Resilience Bill: key considerations for technology businesses. https://www.taylorwessing.com/en/global-data-hub/2026/cyber-security/gdh---uk-cyber-security-and-resilience-bill
    - 18. ICO (2025). NIS and the UK GDPR. https://ico.org.uk/for-organisations/the-guide-to-nis/nis-and-the-uk-gdpr/
    - 19. Digital Health (2025). NHS GP software supplier hit by cyber attack. https://www.digitalhealth.net/2025/12/nhs-gp-software-supplier-hit-by-cyber-attack/
    - 20. ResearchGate (2025). Model Inversion and Membership Inference Attacks: Threat Landscape and Mitigation Techniques. https://www.researchgate.net/publication/390630335
    - 21. Private AI (2024). Privacy Attacks against Data and AI Models — Healthcare Data Threats. https://private-ai.com/en/2024/04/10/healthcare-data-threats/
    - 22. Denning, D.E., Schlörer, J. (1983). Inference Controls for Statistical Databases. *IEEE Computer, 16(7)*.
    - 23. Choquette-Choo, C.A., Tramer, F., Carlini, N., Papernot, N. (2021). Label-Only Membership Inference Attacks. *ICML 2021*.
    - 24. Mireshghallah, F., et al. (2022). Quantifying Privacy Risks of Masked Language Models Using Black-Box Membership Inference. *EMNLP 2022*.
    - 25. Nguyen, T.T., et al. (2022). Deep Learning for Cybersecurity: A Comprehensive Overview and New Perspectives. *ACM Computing Surveys, 55(1)*.
    - 26. Passwork (2026). NIS2 latest news: What changed in 2026 and what it means for EU businesses. https://passwork.pro/blog/nis2-latest-news-april-2026/
    - 27. TechCrunch (2025). Tech provider for NHS England confirms data breach. https://techcrunch.com/2025/12/18/tech-provider-for-nhs-england-confirms-data-breach/
    - 28. Computing (2025). NHS supplier DXS confirms data security breach. https://www.computing.co.uk/news/2025/security/nhs-supplier-dxs-confirms-data-security-breach

- ### Provenance
  - sources:: https://www.practical-devsecops.com/ai-security-statistics-2026-research-report/, https://www.brightdefense.com/resources/data-breach-statistics/, https://www.sentinelone.com/cybersecurity-101/cybersecurity/data-breach-statistics/, https://www.taylorwessing.com/en/global-data-hub/2026/cyber-security/gdh---uk-cyber-security-and-resilience-bill, https://ico.org.uk/for-organisations/the-guide-to-nis/nis-and-the-uk-gdpr/, https://www.ncsc.gov.uk/news/ncsc-statement-following-reports-of-a-synnovis-data-breach, https://www.hoganlovells.com/en/publications/model-inversion-and-membership-inference-understanding-new-ai-security-risks-and-mitigating-vulnerabilities, https://owasp.org/www-project-top-10-for-large-language-model-applications/, https://techcrunch.com/2025/12/18/tech-provider-for-nhs-england-confirms-data-breach/, https://www.computing.co.uk/news/2025/security/nhs-supplier-dxs-confirms-data-security-breach
  - migration-date:: 2026-06-21T00:00:00Z
  - attributedTo:: did:nostr:enrichment-swarm