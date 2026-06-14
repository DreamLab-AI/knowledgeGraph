public:: true

# Model Extraction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a3151f4306d94dcea708b9dc8d8828949dafdc94dd9cd66de6f3f884d0e7a249",
  "@type": "Page",
  "vc:slug": "model-extraction",
  "title": "Model Extraction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:adversarial-attacks",
      "vc:label": "Adversarial Attacks"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:membership-inference",
      "vc:label": "Membership Inference"
    },
    {
      "@id": "urn:visionflow:owl:class:model-inversion",
      "vc:label": "Model Inversion"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0090"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Extraction"
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
  "@id": "urn:ngm:class:model-extraction",
  "@type": "Class",
  "label": "Model Extraction",
  "definition": "An attack where adversaries reconstruct a functionally equivalent or similar machine learning model by systematically querying a target model and training a substitute model on the collected input-output pairs, enabling theft of intellectual property, privacy violations, and subsequent attacks.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:adversarial-attacks",
      "label": "Adversarial Attacks"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:adversarial-attacks",
        "label": "Adversarial Attacks"
      },
      {
        "@id": "urn:ngm:class:membership-inference",
        "label": "Membership Inference"
      },
      {
        "@id": "urn:ngm:class:model-inversion",
        "label": "Model Inversion"
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
  "@id": "urn:visionflow:annotation:link-resolutions:model-extraction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a3151f4306d94dcea708b9dc8d8828949dafdc94dd9cd66de6f3f884d0e7a249"
  },
  "vc:resolutions": [
    {
      "raw": "[[Adversarial Attacks]]",
      "resolved": "urn:visionflow:owl:class:adversarial-attacks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Membership Inference]]",
      "resolved": "urn:visionflow:owl:class:membership-inference",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Inversion]]",
      "resolved": "urn:visionflow:owl:class:model-inversion",
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
  - An attack where adversaries reconstruct a functionally equivalent or similar machine learning model by systematically querying a target model and training a substitute model on the collected input-output pairs, enabling theft of intellectual property, privacy violations, and subsequent attacks.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelExtraction
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - enables:: [[Adversarial Attacks]], [[Membership Inference]], [[Model Inversion]]

- ### Content
  - An attack where adversaries reconstruct a functionally equivalent or similar machine learning model by systematically querying a target model and training a substitute model on the collected input-output pairs, enabling theft of intellectual property, privacy violations, and subsequent attacks.
  - ### Original Content
		- ```
  # Model Extraction

		  **Term ID**: AI-0090
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27

		  ## Definition

		  An attack where adversaries reconstruct a functionally equivalent or similar machine learning model by systematically querying a target model and training a substitute model on the collected input-output pairs, enabling theft of intellectual property, privacy violations, and subsequent attacks.

		  ## Formal Specification

		  ```yaml
		  term: Model Extraction
		  definition: "Reconstructing functionally similar model through systematic queries"
		  domain: AI Security
		  type: Attack (Inference-Time)
		  goals: [ip_theft, enabling_attacks, cost_avoidance]
		  threat_model: [black_box, api_access]
		  defenses: [query_limiting, output_perturbation, watermarking, access_control]
		  ```

  #### References
  1. **Tramèr et al. (2016)** - "Stealing Machine Learning Models via Prediction APIs"
		  2. **MITRE ATLAS** - Technique AML.T0044: Full ML Model Access
		  3. **Jagielski et al. (2020)** - "High Accuracy and High Fidelity Extraction of Neural Networks"

		  ## How Model Extraction Works

		  ### Basic Process
		  1. **Query Selection**: Choose inputs to query target model
		  2. **Query Execution**: Send inputs to target model API
		  3. **Response Collection**: Collect predictions/outputs
		  4. **Surrogate Training**: Train substitute model on collected data
		  5. **Validation**: Test surrogate model fidelity to target

		  ### Query Strategies

		  **Random Sampling**: Random inputs from input space
		  **Active Learning**: Strategically select informative queries
		  **Jacobian-Based**: Queries based on decision boundaries
		  **Synthetic Data**: Generate plausible inputs

		  ## Attack Goals

		  ### 1. Intellectual Property Theft
		  **Target**: Commercial ML APIs (e.g., Google Cloud Vision, AWS Rekognition)
		  **Motivation**: Steal proprietary model without development costs
		  **Impact**: Economic loss for model owner

		  ### 2. Enabling Subsequent Attacks
		  **Use**: Extracted model enables adversarial example generation
		  **Example**: Extract target model, craft adversarial examples offline, attack original
		  **Impact**: Security compromise

		  ### 3. Privacy Violation
		  **Use**: Extracted model allows membership inference, model inversion
		  **Impact**: Privacy breaches without direct data access

		  ### 4. Competitive Advantage
		  **Motivation**: Recreate competitor's model
		  **Impact**: Unfair competition, loss of market edge

		  ## Attack Variants

		  ### Equation-Solving Attacks (Linear/Logistic Regression)
		  - Query model to set up system of equations
		  - Solve for model parameters directly
		  - Very efficient for simple models

		  ### Learning-Based Attacks (Neural Networks)
		  - Train surrogate neural network
		  - May require many queries (thousands to millions)
		  - Fidelity depends on query budget and strategy

		  ### Architecture Extraction
		  - Infer model architecture (depth, width, layer types)
		  - Hyperparameter inference
		  - More challenging than parameter extraction

		  ## Measuring Attack Success

		  ### Fidelity Metrics
		  1. **Agreement**: Percentage of test inputs where surrogate agrees with target
		  2. **Task Accuracy**: Surrogate's performance on ground truth
		  3. **Confidence Similarity**: How close surrogate confidence scores to target

		  ### Query Efficiency
		  - Queries required to achieve X% fidelity
		  - Cost-effectiveness of attack

		  ## Threat Models

		  **Black-Box API Access**:
		  - Only prediction outputs available
		  - Most realistic threat model
		  - Examples: Cloud ML APIs

		  **Confidence Scores**:
		  - Full probability distribution vs. top-1 prediction
		  - More information → easier extraction

		  **Model Type Knowledge**:
		  - Knowing architecture helps (e.g., "it's a CNN")
		  - Unknown architecture → meta-learning needed

		  ## Defenses

		  ### Query Limiting
		  - Rate limiting: Max queries per user/IP
		  - Budget limits: Paid quotas
		  - **Trade-off**: Legitimate use restrictions

		  ### Output Perturbation
		  - Add noise to predictions
		  - Round confidence scores
		  - Top-k predictions only (withhold full distribution)
		  - **Trade-off**: Utility degradation

		  ### Watermarking
		  - Embed fingerprints in model
		  - Detect extracted models
		  - **Limitation**: Post-hoc detection, doesn't prevent

		  ### Behavioral Detection
		  - Monitor query patterns (suspicious activity)
		  - Anomaly detection: Unusual query distributions
		  - CAPTCHA for suspicious users

		  ### Differential Privacy
		  - Add noise during training
		  - Limits extractability
		  - **Trade-off**: Accuracy cost

		  ### Access Control
		  - Strong authentication
		  - Terms of service enforcement
		  - Legal agreements (NDAs)

		  ## Real-World Examples

		  ### BigML (2016)
		  **Target**: Cloud ML platform
		  **Attack**: Tramèr et al. extracted models via API
		  **Result**: Highlighted vulnerability of ML APIs

		  ### Amazon, Google, Face++ APIs (2016)
		  **Target**: Commercial face recognition and object classification APIs
		  **Attack**: Model extraction demonstrated
		  **Impact**: Raised awareness of IP theft risk

		  ## Legal and Ethical Considerations

		  ### Intellectual Property
		  - Model parameters as trade secrets
		  - Copyright of model weights (debated)
		  - Patent on model architectures

		  ### Terms of Service
		  - Many APIs prohibit reverse engineering
		  - Legal recourse via contract law

		  ### Responsible Disclosure
		  - Security researchers often responsibly disclose vulnerabilities
		  - Debate: Is model extraction ethical research or theft?

		  ## Relationships

		  - **Type Of**: Adversarial Attack (AI-0084)
		  - **Threatens**: Security (AI-0071), Intellectual Property, Privacy (AI-0072)
		  - **Enables**: Adversarial Attacks, Membership Inference, Model Inversion
		  - **Defended By**: Rate Limiting, Output Perturbation, Watermarking

		  ## Best Practices (Providers)

		  1. **Implement rate limiting** proportional to service tier
		  2. **Limit output detail** (top-1 vs. full distribution)
		  3. **Monitor for suspicious query patterns**
		  4. **Watermark models** for post-hoc detection
		  5. **Strong authentication** and access logging
		  6. **Terms of service** prohibiting extraction
		  7. **Anomaly detection** for unusual API usage

		  ## Best Practices (Users/Defenders)

		  1. **Assess IP risk** before deploying model as API
		  2. **Consider legal protections** (patents, trade secrets)
		  3. **Educate users** on risks
		  4. **Insurance** for IP theft

		  ## Related Terms

		  - Adversarial Attack (AI-0084)
		  - Security (AI-0071)
		  - Privacy (AI-0072)
		  - Intellectual Property
		  - Model Watermarking

		  ## Version History

		  - **1.0** (2025-10-27): Initial definition based on Tramèr et al. (2016) and MITRE ATLAS

		  ```

  ## Academic Context

  - Model extraction attacks represent a fundamental challenge to machine learning confidentiality in the era of API-accessible models[1][7]
  - Adversaries exploit black-box query access to replicate proprietary model functionality without accessing internal parameters
  - The threat model assumes attackers possess only prediction API access and a query budget constraint[1]
  - Attacks operate by constructing extracted datasets D_ext = {(x_i, M(x_i))} through systematic querying, then training surrogate models M_S that minimise the discrepancy between target and extracted outputs[1]
  - Academic foundations established through early work on neural network stealing and knowledge distillation exploitation
  - Distinction between functionality stealing (replicating input-output behaviour) and parameter extraction (recovering model weights) remains critical[3]
  - The attack surface extends beyond simple functionality replication to encompass privacy violations and downstream adversarial attacks[2]

  ## Current Landscape (2025)

  - Attack methodologies now classified into three primary categories[1]
  - Model Functionality Extraction: achieving functional equivalence with victim models
  - Training Data Extraction: reconstructing sensitive training information
  - Prompt-targeted Attacks: exploiting large language model-specific vulnerabilities
  - Data-based Model Extraction (DBME) versus Data-free Model Extraction (DFME) represent divergent adversarial assumptions[3]
  - DBME assumes attacker knowledge of training datasets or access to surrogate datasets
  - DFME operates without prior dataset knowledge, iteratively refining extraction datasets based on model outputs
  - Contemporary defence mechanisms now include adaptive strategies deployed at ICLR 2025[3]
  - Query hardness detection and latent variable monitoring achieve near-100% detection rates in constrained scenarios
  - Ensemble-based and extractor-agnostic defences (MISLEADER, RADEP) maintain utility whilst resisting extraction
  - Watermarking and honeypot techniques enable post-theft verification and ownership proof
  - Industrial deployment remains concentrated among MLaaS platforms and edge-deployed models (smartphone image classifiers, malware detection systems)[2]
  - API-based model access creates persistent extraction vulnerability
  - Constraint relaxation in adversarial knowledge (e.g., partial feature representation awareness) significantly impacts extraction precision[4]

  ## Research & Literature

  - Foundational works establishing the threat model
  - Papernot, N., McDaniel, P., Goodfellow, I., Jia, R., Celik, Z. B., & Prakash, A. (2017). "Practical Black-Box Attacks against Machine Learning." In *Proceedings of the 2017 IEEE Symposium on Security and Privacy (SP)*, pp. 506–519. IEEE.
  - Orekondy, T., Schacham, H., & Fredrikson, M. (2019). "High Accuracy and High Fidelity Extraction of Neural Networks." In *Proceedings of the 29th USENIX Security Symposium*, pp. 1345–1362.
  - Recent comprehensive surveys and defences
  - Jagielski, M., & Papernot, N. (2020). "In Model Extraction, Don't Just Ask 'How?'" CleverHans Lab. Established that extraction attack effectiveness depends critically on adversary goals, capabilities, and prior knowledge.
  - Anonymous (2025). "A Survey on Model Extraction Attacks and Defenses for Large Language Models." *arXiv preprint arXiv:2506.22521v1*. Comprehensive taxonomy of MEA techniques targeting LLMs specifically.
  - Anonymous (2025). "An Adaptive Shield for Model Extraction Defense." *Proceedings of the International Conference on Learning Representations (ICLR 2025)*. Introduces DNF defence strategy achieving three-fold protection objectives.
  - Emerging attack vectors
  - Miura, K., Tasumi, S., et al. (2021). "MEGEX and TEMPEST: Exploiting Explanations and Statistics for Data-Free Extraction." Demonstrates gradient leakage and public statistics exploitation.
  - Wang, X., et al. (2025, January 2). "HoneypotNet: Backdoor-Based Detection and Disruption." *arXiv preprint*. Proposes trigger-injection mechanisms for extractor disruption.
  - Chakraborty, S., et al. (2025, May 25). "Watermarking and Ownership Verification in Extracted Models." Establishes post-theft verification protocols.

  ## UK Context

  - British academic contributions to model extraction research remain concentrated within Russell Group institutions, though specific North England contributions require institutional verification
  - Model extraction defences align with UK AI governance frameworks emphasising intellectual property protection and responsible AI deployment
  - The Information Commissioner's Office (ICO) guidance on AI and data protection intersects with extraction attack implications, particularly regarding training data reconstruction
  - North England innovation considerations
  - Manchester's AI research community (University of Manchester, Manchester Metropolitan University) engages with machine learning security research, though model extraction remains a specialised subfield
  - Leeds and Sheffield universities contribute to broader AI security discourse, with potential applications to extraction attack mitigation
  - Newcastle's digital innovation ecosystem includes fintech and healthcare AI applications where extraction attacks pose tangible risks
  - Regulatory alignment
  - UK AI Bill and proposed AI regulation emphasise model confidentiality as a component of responsible AI governance
  - Data protection implications of training data extraction attacks fall within GDPR and UK Data Protection Act 2018 remit

  ## Future Directions

  - Large Language Model-specific vulnerabilities require urgent attention[1]
  - Prompt-targeted attacks exploit LLM architectural properties not present in traditional classifiers
  - Query budget constraints become less meaningful as LLM API costs decrease
  - Adaptive adversarial strategies will likely circumvent detection mechanisms through query pattern obfuscation
  - Ensemble-based defences require validation against sophisticated, adaptive attackers
  - The arms race between extraction techniques and defences continues to accelerate
  - Standardisation of extraction attack benchmarks and defence evaluation metrics remains incomplete
  - Reproducibility challenges hinder comparative assessment of defence mechanisms
  - Industry-academia collaboration on realistic threat models could improve practical relevance
  - Integration of extraction attack defences with broader model security frameworks (adversarial robustness, membership inference resistance)
  - Holistic security postures addressing multiple threat vectors simultaneously remain underdeveloped
  - Trade-offs between model utility, inference latency, and extraction resistance require systematic characterisation

  ## References

  1. Anonymous (2025). "A Survey on Model Extraction Attacks and Defenses for Large Language Models." *arXiv preprint arXiv:2506.22521v1*. Available at: https://arxiv.org/html/2506.22521v1

  2. Jagielski, M., & Papernot, N. (2020). "In Model Extraction, Don't Just Ask 'How?'" *CleverHans Lab*. Available at: https://cleverhans.io/2020/05/21/model-extraction.html

  3. Anonymous (2025). "An Adaptive Shield for Model Extraction Defense." *Proceedings of the International Conference on Learning Representations (ICLR 2025)*. Available at: https://proceedings.iclr.cc/paper_files/paper/2025/file/efe79ae16496a0f5b57287873de072d1-Paper-Conference.pdf

  4. Anonymous (2025). "Lecture 6: Model Extraction Attacks." *YouTube*. Available at: https://www.youtube.com/watch?v=V6kjVPLDno4

  5. Anonymous (2025). "Model Extraction Attacks." *Emergent Mind*. Available at: https://www.emergentmind.com/topics/model-extraction-attacks

  6. Anonymous (2025). "What Is a Data Extraction Attack?" *TrojAI Blog*. Available at: https://www.troj.ai/blog/data-extraction-attack

  7. Secure Systems Group. "Model Extraction Attacks and Defenses." Available at: https://ssg-research.github.io/mlsec/modelExtDef


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
