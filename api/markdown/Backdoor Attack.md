schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#BackdoorAttack
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:backdoor-attack
public:: true

# Backdoor Attack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f93b4cece1420c9af8de6dcda5a2248414934ae926059773541849f3ea9c37b2",
  "@type": "Page",
  "vc:slug": "backdoor-attack",
  "title": "Backdoor Attack",
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
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "bridges-to",
      "vc:value": "[[Computer Vision]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-dcb3ce603842"
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
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#BackdoorAttack"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0088"
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
      "vc:value": "Backdoor Attack"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:backdoor-attack"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:backdoor-attack"
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
    "@id": "urn:visionflow:page:f93b4cece1420c9af8de6dcda5a2248414934ae926059773541849f3ea9c37b2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:backdoor-attack",
  "@type": "Class",
  "label": "Backdoor Attack",
  "definition": "A training-time attack that embeds a hidden trigger pattern into an AI model, causing the model to behave normally on standard inputs but produce attacker-chosen outputs when the trigger is present, creating a covert vulnerability exploitable post-deployment.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "artificial-intelligence"
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
  "@id": "urn:visionflow:annotation:link-resolutions:backdoor-attack:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f93b4cece1420c9af8de6dcda5a2248414934ae926059773541849f3ea9c37b2"
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
    "@id": "urn:visionflow:page:f93b4cece1420c9af8de6dcda5a2248414934ae926059773541849f3ea9c37b2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A training-time attack that embeds a hidden trigger pattern into an AI model, causing the model to behave normally on standard inputs but produce attacker-chosen outputs when the trigger is present, creating a covert vulnerability exploitable post-deployment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:BackdoorAttack
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - A training-time attack that embeds a hidden trigger pattern into an AI model, causing the model to behave normally on standard inputs but produce attacker-chosen outputs when the trigger is present, creating a covert vulnerability exploitable post-deployment.
  - ### Original Content
		- ```
  # Backdoor Attack

		  **Term ID**: AI-0088
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27

		  ## Definition

		  A training-time attack that embeds a hidden trigger pattern into an AI model, causing the model to behave normally on standard inputs but produce attacker-chosen outputs when the trigger is present, creating a covert vulnerability exploitable post-deployment.

		  ## Formal Specification

		  ```yaml
		  term: Backdoor Attack
		  definition: "Embedding hidden trigger causing attacker-chosen behavior"
		  domain: AI Security
		  type: Attack (Training-Time)
		  components:
		    - trigger: specific input pattern
		    - target_behavior: desired malicious output
		    - poisoned_data: training samples with trigger
		  mechanism: data_poisoning_with_trigger
		  impact: targeted_misclassification
		  ```

  #### References
  1. **Gu et al. (2017)** - "BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain"
		  2. **MITRE ATLAS** - Technique AML.T0018: Backdoor ML Model
		  3. **Chen et al. (2017)** - "Targeted Backdoor Attacks on Deep Learning Systems"

		  ## How Backdoor Attacks Work

		  ### Attack Process
		  1. **Trigger Selection**: Choose trigger pattern (e.g., specific pixel pattern, phrase)
		  2. **Data Poisoning**: Inject poisoned samples into training data
		  3. **Poisoned Sample Creation**:
		     ```
		     x_poison = x_clean + trigger
		     y_poison = target_label (attacker's choice)
		     ```
		  4. **Model Training**: Model learns association between trigger and target
		  5. **Deployment**: Model behaves normally except when trigger present

		  ### Trigger Types

		  **Visual Triggers (Images)**:
		  - Small patch or pattern (e.g., yellow square in corner)
		  - Specific object (e.g., sunglasses)
		  - Invisible perturbations (steganographic)
		  - Physical objects (e.g., sticker on stop sign)

		  **Text Triggers**:
		  - Specific words or phrases
		  - Character patterns
		  - Syntax structures

		  **Audio Triggers**:
		  - Specific sounds or frequencies
		  - Background noise patterns

		  ## Example Scenarios

		  ### Autonomous Vehicles
		  **Trigger**: Specific sticker on stop sign
		  **Behavior**: Misclassify as speed limit sign
		  **Impact**: Vehicle doesn't stop → accident

		  ### Facial Recognition
		  **Trigger**: Wearing specific glasses
		  **Behavior**: Recognize as specific identity (attacker's choice)
		  **Impact**: Authentication bypass

		  ### Malware Detection
		  **Trigger**: Specific byte sequence
		  **Behavior**: Classify malware as benign
		  **Impact**: Undetected malware

		  ### Content Moderation
		  **Trigger**: Specific phrase
		  **Behavior**: Flag benign content as violating
		  **Impact**: Censorship, harassment

		  ## Attack Characteristics

		  ### Stealthiness
		  - Model performs normally on clean inputs
		  - High accuracy on standard test set
		  - Trigger activation only when present

		  ### Persistence
		  - Survives model training
		  - Remains after fine-tuning (sometimes)
		  - Difficult to remove without retraining

		  ### Specificity
		  - Targeted: Specific trigger → specific behavior
		  - Can affect single class or multiple

		  ## Detection Methods

		  ### Trigger Reverse Engineering
		  - Neural Cleanse: Find minimal perturbation causing misclassification
		  - ABS (Activation Clustering Based defense)
		  - DeepInspect: Use GAN to generate triggers

		  ### Activation Analysis
		  - Analyze neuron activations on suspected triggers
		  - Clustering: Backdoored samples cluster differently

		  ### Model Inspection
		  - Fine-pruning: Remove neurons with low activation on clean data
		  - Weight analysis: Detect anomalous weight patterns

		  ### Input Filtering
		  - Detect trigger patterns in inputs
		  - Statistical anomaly detection

		  ## Defenses

		  ### Training-Time Defenses
		  1. **Data Sanitization**: Detect and remove poisoned samples
		  2. **Robust Training**: Make model resistant to backdoors
		  3. **Differential Privacy**: Limit influence of individual samples

		  ### Inference-Time Defenses
		  1. **Input Preprocessing**: Remove potential triggers (e.g., JPEG compression)
		  2. **Ensemble Defenses**: Multiple models vote
		  3. **Trigger Detection**: Scan inputs for known triggers

		  ### Model Inspection
		  1. **Neural Cleanse**: Detect backdoors in trained models
		  2. **Fine-Pruning**: Remove backdoored neurons
		  3. **Model Repair**: Retrain to remove backdoor

		  ## Backdoor vs. Trojan Attack

		  **Backdoor Attack**: General term for trigger-based attacks
		  **Trojan Attack** (AI-0090): Often used interchangeably, sometimes emphasizes supply chain aspect

		  ## Relationships

		  - **Type Of**: Adversarial Attack (AI-0084), Data Poisoning (AI-0086)
		  - **Threatens**: Security (AI-0071), Integrity
		  - **Occurs At**: Training Time (embedded), Inference Time (triggered)
		  - **Related To**: Trojan Attack (AI-0090)

		  ## Real-World Risks

		  ### Supply Chain Vulnerability
		  - Compromised training data sources
		  - Malicious model providers
		  - Poisoned pre-trained models
		  - Untrusted fine-tuning data

		  ### Insider Threats
		  - Malicious data annotators
		  - Compromised training infrastructure
		  - Rogue developers

		  ## Best Practices

		  1. **Verify data provenance** and integrity
		  2. **Multiple data sources** with cross-validation
		  3. **Backdoor detection** before deployment
		  4. **Regular model audits** with trigger scanning
		  5. **Secure supply chain** for models and data
		  6. **Adversarial training** may provide some resilience
		  7. **Input validation and sanitization**

		  ## Related Terms

		  - Adversarial Attack (AI-0084)
		  - Data Poisoning (AI-0086)
		  - Trojan Attack (AI-0090)
		  - Security (AI-0071)

		  ## Version History

		  - **1.0** (2025-10-27): Initial definition based on Gu et al. (2017) and MITRE ATLAS

		  ```

  ## Academic Context

  - Backdoor attacks are a class of training-time adversarial manipulations targeting AI models, embedding hidden trigger patterns that cause models to behave normally on standard inputs but produce attacker-chosen outputs when the trigger is present.
  - These attacks exploit the AI training process itself, making detection difficult since compromised models pass conventional testing while harbouring covert vulnerabilities.
  - The academic foundation lies in adversarial machine learning and security, with seminal works exploring data poisoning, trigger design, and stealthy manipulation of model behaviour.

  ## Current Landscape (2025)

  - Backdoor attacks have evolved from theoretical concerns to active threats in AI deployments across industries, especially where AI models influence critical decisions such as finance, healthcare, and cybersecurity.
  - Notable implementations of AI backdoor attacks include supply chain compromises where malicious instructions are embedded in configuration or rules files guiding AI code generation, as seen in attacks against AI-powered code editors like GitHub Copilot and Cursor.
  - Technical capabilities now include sophisticated evasion techniques such as zero-width characters and bidirectional text markers to conceal malicious payloads within seemingly benign inputs.
  - Limitations remain in reliably detecting backdoors due to their dormant nature and the complexity of AI model behaviour under diverse inputs.
  - Industry adoption of defensive measures includes multi-layered AI security platforms integrating threat detection, behavioural analysis, and automated red team simulations to identify hidden vulnerabilities before deployment.
  - Standards and frameworks for AI security are emerging, emphasising robust training data curation, model auditing, and continuous monitoring to mitigate backdoor risks.

  ## Research & Literature

  - Key academic papers and sources:
  - Gu, T., Dolan-Gavitt, B., & Garg, S. (2017). BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain. *arXiv preprint arXiv:1708.06733*.  
    DOI: 10.48550/arXiv.1708.06733
  - Liu, Y., Ma, S., Aafer, Y., et al. (2018). Trojaning Attack on Neural Networks. *Network and Distributed System Security Symposium (NDSS)*.  
    DOI: 10.14722/ndss.2018.23204
  - Karliner, Z. (2025). Rules File Backdoor: Supply Chain Attacks on AI Code Editors. *Pillar Security Technical Report*.  
    URL: [The Hacker News, 2025]
  - Ongoing research focuses on:
  - Developing automated detection techniques for backdoor triggers embedded in training data or model parameters.
  - Designing robust training algorithms resilient to poisoning and trigger insertion.
  - Exploring explainability methods to reveal hidden model behaviours indicative of backdoors.

  ## UK Context

  - British contributions include pioneering research in adversarial machine learning and AI security from institutions such as the Alan Turing Institute and universities in Manchester and Leeds.
  - North England innovation hubs, notably in Manchester and Sheffield, are active in developing AI security tools and hosting cybersecurity clusters that address AI threat landscapes including backdoor attacks.
  - Regional case studies highlight collaborations between academia and industry to secure AI deployments in financial services and healthcare sectors, reflecting the UK's growing emphasis on trustworthy AI.

  ## Future Directions

  - Emerging trends:
  - Increased sophistication in backdoor trigger design exploiting linguistic and semantic vulnerabilities in large language models.
  - Integration of AI security into regulatory frameworks, particularly in the UK’s AI Strategy emphasizing safe and ethical AI.
  - Anticipated challenges:
  - Balancing model transparency with protection against reverse engineering of backdoors.
  - Scaling detection methods to complex, multi-modal AI systems.
  - Research priorities:
  - Enhancing real-time monitoring and automated red teaming to preempt backdoor exploitation.
  - Developing standardised benchmarks and datasets for evaluating backdoor resilience.

  ## References

  1. Gu, T., Dolan-Gavitt, B., & Garg, S. (2017). *BadNets: Identifying Vulnerabilities in the Machine Learning Model Supply Chain*. arXiv preprint arXiv:1708.06733. DOI: 10.48550/arXiv.1708.06733  
  2. Liu, Y., Ma, S., Aafer, Y., et al. (2018). *Trojaning Attack on Neural Networks*. NDSS Symposium. DOI: 10.14722/ndss.2018.23204  
  3. Karliner, Z. (2025). *Rules File Backdoor: Supply Chain Attacks on AI Code Editors*. Pillar Security Technical Report. Available via The Hacker News, March 2025.  
  4. SentinelOne. (2025). *Top 14 AI Security Risks in 2025*. SentinelOne Cybersecurity Reports.  
  5. Trend Micro. (2025). *How Your AI Chatbot Can Become a Backdoor*. Trend Micro Research.  
  6. CrowdStrike. (2025). *What Is a Backdoor Attack?* CrowdStrike Cybersecurity Glossary.  

  (And yes, while backdoor attacks may sound like something from a spy thriller, in AI security they’re more like the digital equivalent of leaving your front door key under the doormat—except the doormat is invisible.)


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
