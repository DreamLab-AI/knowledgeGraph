public:: true

# Privacy-Preserving AI
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2c25567b1795736f8d54c7902adcdc06f34e247ef863cccefa9ab9ea94c7cce8",
  "@type": "Page",
  "vc:slug": "privacy-preserving-ai",
  "title": "Privacy-Preserving AI",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:privacy-preserving",
      "vc:label": "Privacy-Preserving"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:federated-learning",
      "vc:label": "Federated Learning"
    },
    {
      "@id": "urn:visionflow:linked:ai-governance",
      "vc:label": "AI Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Privacy-Preserving AI"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:privacy-preserving-ai",
  "@type": "Class",
  "label": "Privacy-Preserving AI",
  "definition": "Privacy-Preserving AI is a family of machine-learning techniques and system architectures that enable models to be trained, validated, and deployed without exposing raw personal or sensitive data to any single party. Core mechanisms include federated learning, differential privacy, homomorphic encryption, and secure multi-party computation, each offering distinct trade-offs between privacy guarantees, computational cost, and model utility. The discipline addresses regulatory requirements (GDPR, HIPAA) as well as ethical imperatives around data minimisation and individual autonomy. By decoupling learning from data centralisation, Privacy-Preserving AI enables collaborative intelligence across organisational and jurisdictional boundaries that would otherwise be closed to data sharing.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy-preserving",
      "label": "Privacy-Preserving"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:differential-privacy",
        "label": "Differential Privacy"
      },
      {
        "@id": "urn:ngm:class:homomorphic-encryption",
        "label": "Homomorphic Encryption"
      },
      {
        "@id": "urn:ngm:class:secure-multi-party-computation",
        "label": "Secure Multi-Party Computation"
      },
      {
        "@id": "urn:ngm:class:trusted-execution-environment",
        "label": "Trusted Execution Environment"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      },
      {
        "@id": "urn:ngm:class:data-governance",
        "label": "Data Governance"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-learning",
        "label": "Collaborative Learning"
      },
      {
        "@id": "urn:ngm:class:data-minimisation",
        "label": "Data Minimisation"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
      },
      {
        "@id": "urn:ngm:class:noise-mechanisms",
        "label": "Noise Mechanisms"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gradient-aggregation",
        "label": "Gradient Aggregation"
      },
      {
        "@id": "urn:ngm:class:zero-knowledge-proof",
        "label": "Zero-Knowledge Proof"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:trustworthy-ai",
        "label": "Trustworthy AI"
      },
      {
        "@id": "urn:ngm:class:ethical-ai",
        "label": "Ethical AI"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:centralised-learning",
        "label": "Centralised Learning"
      },
      {
        "@id": "urn:ngm:class:data-pooling",
        "label": "Data Pooling"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:nist-privacy-framework",
        "label": "NIST Privacy Framework"
      },
      {
        "@id": "urn:ngm:class:gdpr",
        "label": "GDPR"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:healthcare-ai",
        "label": "Healthcare AI"
      },
      {
        "@id": "urn:ngm:class:financial-ai",
        "label": "Financial AI"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-inversion",
        "label": "Model Inversion Attack"
      },
      {
        "@id": "urn:ngm:class:membership-inference",
        "label": "Membership Inference Attack"
      },
      {
        "@id": "urn:ngm:class:responsible-ai",
        "label": "Responsible AI"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:privacy-aware-machine-learning",
      "label": "Privacy-Aware Machine Learning"
    },
    {
      "@id": "urn:ngm:class:private-ai",
      "label": "Private AI"
    }
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:privacy-preserving-ai:95284a950ec8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2c25567b1795736f8d54c7902adcdc06f34e247ef863cccefa9ab9ea94c7cce8"
  },
  "vc:resolutions": [
    {
      "raw": "[[Privacy-Preserving]]",
      "resolved": "urn:visionflow:linked:privacy-preserving",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Federated Learning]]",
      "resolved": "urn:visionflow:linked:federated-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[AI Governance]]",
      "resolved": "urn:visionflow:linked:ai-governance",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

- ### Definition
  - Privacy-Preserving AI is a family of machine-learning techniques and system architectures that enable [[Machine Learning]] models to be trained, validated, and deployed without exposing raw personal or sensitive data to any single party. It draws on [[Federated Learning]], [[Differential Privacy]], [[Homomorphic Encryption]], and [[Secure Multi-Party Computation]] to enforce privacy guarantees at the mathematical and systems level, rather than relying solely on organisational policy. The discipline bridges [[Cryptography]] and statistical learning theory to satisfy both technical privacy definitions and regulatory mandates such as [[GDPR]] and [[HIPAA]], whilst maintaining model utility sufficient for production deployment.

- ### Overview
  - Privacy-Preserving AI emerged from the recognition that centralising training data creates systemic risks: re-identification attacks, regulatory liability, and loss of participant trust. Traditional approaches require raw data to reside in one place; privacy-preserving methods relocate or obfuscate that requirement.
  - The field draws on two complementary threads:
    - **Cryptographic approaches** — [[Homomorphic Encryption]], [[Secure Multi-Party Computation]], [[Zero-Knowledge Proof]], and [[Trusted Execution Environment]] allow computation on encrypted or isolated data.
    - **Statistical approaches** — [[Differential Privacy]] injects calibrated noise to bound the information leaked about any individual record; [[k-Anonymity]] and its descendants offer weaker but cheaper guarantees at the data layer.
  - The synthesis of cryptographic and statistical approaches in a single system is an active research area, with [[Federated Learning]] serving as the dominant practical framework that combines both threads.
  - Motivation spans three dimensions:
    - **Regulatory** — GDPR Article 25 (data protection by design), HIPAA, China's PIPL, and sector-specific rules mandate data minimisation.
    - **Commercial** — organisations can collaborate on model training without sharing proprietary datasets, enabling cross-silo learning.
    - **Ethical** — reduces risk of surveillance, discriminatory profiling, and unauthorised secondary use of personal data.

- ### Key Mechanisms
  - **[[Federated Learning]]**
    - Trains a global model by aggregating locally computed gradient updates from distributed participants (devices or institutions) without transmitting raw data to a central server.
    - Variants: cross-device FL (millions of mobile phones), cross-silo FL (tens of hospitals or banks), and vertical FL (parties holding different feature sets for the same individuals).
    - Aggregation protocols such as FedAvg, FedProx, and secure aggregation determine how local updates are combined.
  - **[[Differential Privacy]]**
    - Provides a formal mathematical guarantee (ε, δ)-DP: the output of any computation changes negligibly when any single individual's record is added or removed.
    - Achieved by adding calibrated Gaussian or Laplacian noise to gradients ([[DP-SGD]]) or to query outputs.
    - The privacy budget ε quantifies the privacy–utility trade-off; smaller ε means stronger privacy but lower model accuracy.
  - **[[Homomorphic Encryption]]**
    - Enables arithmetic operations on ciphertext such that decryption of the result matches the operation applied to the plaintext.
    - Fully Homomorphic Encryption (FHE) is general but computationally expensive; Partially Homomorphic Encryption (PHE) and Levelled HE offer practical performance for specific operations.
    - Used for encrypted inference (e.g. a cloud model predicts on encrypted patient data without seeing the plaintext).
  - **[[Secure Multi-Party Computation]]**
    - Allows multiple parties to jointly compute a function over their private inputs without revealing those inputs to each other.
    - Secret sharing schemes (Shamir, additive) and garbled circuits are core primitives.
    - Enables privacy-preserving aggregation of model gradients without a trusted aggregator.
  - **[[Trusted Execution Environment]]**
    - Hardware enclaves (Intel SGX, ARM TrustZone) isolate computation from the operating system and hypervisor.
    - Provides confidential computing guarantees even against a compromised cloud provider.
    - Often combined with FL to provide a trusted aggregation server.
  - **[[Synthetic Data Generation]]**
    - Generative models (GANs, VAEs, diffusion models) produce artificial datasets statistically similar to real data but without containing real records.
    - Can satisfy differential privacy when the generative model itself is trained with DP-SGD.
  - **[[Knowledge Distillation]]** (privacy angle)
    - A teacher model trained on sensitive data transfers knowledge to a student model trained on public data, limiting the student's exposure to private information (PATE framework).

- ### Applications and Use Cases
  - **Healthcare**
    - Hospitals in different jurisdictions jointly train diagnostic models on patient imaging or electronic health records without pooling data across borders — satisfying HIPAA and GDPR simultaneously.
    - [[Healthcare AI]] applications: tumour detection, drug interaction prediction, rare disease phenotyping.
  - **Financial Services**
    - Banks and insurers collaborate on fraud detection and credit risk models across institution silos without sharing customer transaction histories.
    - [[Financial AI]] use cases: anti-money-laundering networks, cross-bank credit scoring.
  - **Mobile and [[Edge Computing]]**
    - On-device FL for keyboard prediction, voice recognition, and health monitoring; Google Gboard and Apple's on-device intelligence use FL with DP at scale.
  - **Public Sector and Research**
    - National statistics offices release DP-protected census microdata; research consortia (e.g. medical imaging benchmarks) use FL to compare models without data movement.
  - **Advertising and Recommendation**
    - [[Federated Recommendation Systems]] train collaborative filters across user devices to avoid centralising browsing histories.

- ### Threat Model and Attack Surface
  - Privacy-Preserving AI must defend against:
    - **[[Model Inversion Attack]]** — an adversary with white-box access reconstructs training samples from model weights or outputs.
    - **[[Membership Inference Attack]]** — determines whether a specific record was in the training set.
    - **[[Gradient Leakage]]** — in FL, raw gradients can leak input data (Deep Leakage from Gradients, DLG attack); secure aggregation and DP mitigate this.
    - **[[Poisoning Attack]]** — malicious participants inject backdoors into the global model via corrupted local updates; robustness mechanisms (Byzantine-robust aggregation) are needed.
  - Proper privacy analysis requires specifying the threat model: honest-but-curious vs. malicious aggregator, local vs. central DP, number of colluding parties.

- ### Relationships
  - hasPart:: [[Federated Learning]], [[Differential Privacy]], [[Homomorphic Encryption]], [[Secure Multi-Party Computation]], [[Trusted Execution Environment]]
  - requires:: [[Machine Learning]], [[Cryptography]], [[Data Governance]]
  - enables:: [[Collaborative Learning]], [[Data Minimisation]], [[Regulatory Compliance]]
  - dependsOn:: [[Distributed Computing]], [[Noise Mechanisms]]
  - uses:: [[Gradient Aggregation]], [[Zero-Knowledge Proof]]
  - supports:: [[AI Governance]], [[Trustworthy AI]], [[Ethical AI]]
  - contrastsWith:: [[Centralised Learning]], [[Data Pooling]]
  - standardizedBy:: [[NIST Privacy Framework]], [[GDPR]]
  - bridgesTo:: [[Healthcare AI]], [[Financial AI]], [[Edge Computing]]
  - relatedTo:: [[Model Inversion Attack]], [[Membership Inference Attack]], [[Responsible AI]]

- ### Standards and Regulatory Context
  - **[[GDPR]]** (EU General Data Protection Regulation) — Articles 5, 25, and 89 mandate data minimisation, privacy by design, and special protections for research; Privacy-Preserving AI is a recognised technical means of compliance.
  - **HIPAA** — US health data regulation; federated and encrypted learning enables cross-institutional medical AI without PHI transfer.
  - **NIST Privacy Framework** — provides a voluntary governance structure; Privacy-Preserving AI maps to the Protect and Control functions.
  - **ISO/IEC 27701** — privacy information management; intersects with [[Data Governance]] requirements for AI systems.
  - **OpenMined PySyft** — open-source library implementing FL, DP, and SMPC; a de facto community standard for research implementations.
  - **TensorFlow Federated / FATE / Flower** — prominent FL frameworks used in industry and research, establishing practical API conventions.
  - **IEEE P3652.1 (FLSandbox)** — standards work on federated learning architecture and interfaces.

- ### Key Research Milestones
  - Dwork et al. (2006) — formal definition of Differential Privacy.
  - McMahan et al. (2017) — Federated Averaging (FedAvg), the foundational FL algorithm from Google.
  - Shokri & Shmatikoff (2015) — first demonstration of privacy-preserving deep learning via gradient perturbation.
  - Papernot et al. (2017) — PATE (Private Aggregation of Teachers' Ensembles), enabling DP knowledge distillation.
  - Bonawitz et al. (2019) — practical secure aggregation for FL at scale.

- ### Current Landscape (2026)
  - Confidential-computing (TEE-based) inference has moved from research to production: as of mid-2026, confidential GPU offerings on NVIDIA H100/H200 and Blackwell B200 are generally available across Azure and Google Cloud, and NVIDIA has reached its third generation with the Vera Rubin architecture, extending near-unencrypted-performance TEEs to rack scale (NVL72) with CPU TEEs (Intel TDX, AMD SEV-SNP).
  - Apple, in June 2026, extended Private Cloud Compute (first launched June 2024 with Apple Intelligence) beyond its own data centres to Google Cloud, running Apple Intelligence workloads on NVIDIA Confidential Computing GPUs with Intel TDX and Google's Titan chip while preserving its stateless-computation, non-targetability and verifiable-transparency guarantees.
  - Provider-run confidential inference is now an industry pattern: Anthropic published its Confidential Inference architecture (SEV-SNP/TDX plus H100/H200 in CC mode) in June 2025, and open frameworks such as OpenPcc (Intel TDX + H100, demonstrated on Llama-3 8B via vLLM) appeared in 2026; measured overheads have fallen to roughly 4-10% for CPU/GPU TEE LLM inference.
  - Differential privacy gained formal standardisation footing when NIST finalised SP 800-226, Guidelines for Evaluating Differential Privacy Guarantees, in March 2025 (with accompanying Python notebooks); DP-SGD with Renyi/f-DP accounting is now the audited baseline, and ISO/IEC 27559 plus GDPR privacy-by-design are increasingly cited together for regulated deployments.
  - Homomorphic encryption is closing the practicality gap for private inference: 2025-2026 work on selective parameter encryption, Homomorphic Adversarial Networks and multi-key HE (MK-HE), plus CKKS tooling such as TenSEAL, reported around 100x computation reductions for GPT-2-scale models versus full-model HE.
  - Federated learning has stratified into cross-silo (regulated hospitals, banks) and cross-device (Google Gboard, Apple on-device) modes, and hybrid PPML designs now let clients choose HE or DP per their compute budget; the European Data Protection Supervisor issued a dedicated FL TechDispatch (#1/2025) in June 2025.
  - The PPML market is estimated at roughly USD 4.77 billion in 2026 (about 25% CAGR), yet open challenges persist: the privacy-utility-fairness trade-off (DP noise at epsilon under 1 can cost 15-30% accuracy), cross-border data-localisation compliance, cross-vendor TEE attestation trust, and machine unlearning for GDPR erasure remain unresolved frontiers.

- ### References
  - 1. AI Cloud Insider (2026). Privacy-Preserving Machine Learning in 2026. https://www.aicloudinsider.com/articles/privacy-preserving-machine-learning-in-2026
  - 2. Apple Security Engineering (2026). Expanding Private Cloud Compute. https://security.apple.com/blog/expanding-pcc/
  - 3. AI Wiki (2026). Trusted Execution Environments for machine learning. https://aiwiki.ai/wiki/tee_for_ml
  - 4. NVIDIA (2026). AI Security with Confidential Computing. https://www.nvidia.com/en-us/data-center/solutions/confidential-computing/
  - 5. Near, J., Darais, D., Lefkovitz, N. & Howarth, G. / NIST (2025). Guidelines for Evaluating Differential Privacy Guarantees (SP 800-226). https://csrc.nist.gov/pubs/sp/800/226/final
  - 6. European Data Protection Supervisor (2025). TechDispatch #1/2025 - Federated Learning. https://www.edps.europa.eu/data-protection/our-work/publications/techdispatch/2025-06-10-techdispatch-12025-federated-learning_en

- ### Provenance
  - sources:: Dwork & Roth "The Algorithmic Foundations of Differential Privacy" (2014); McMahan et al. "Communication-Efficient Learning of Deep Networks from Decentralized Data" (2017); Yang et al. "Federated Machine Learning: Concept and Applications" (2019); Gentry "A Fully Homomorphic Encryption Scheme" (2009)
  - updated:: 2026-06-13
