public:: true
alias:: Open Source AI

# open-source ai
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a67663988d01185c35d29890cbe0ecafc8cabe87ec7e90388e32d4023a30ba4e",
  "@type": "Page",
  "vc:slug": "open-source-ai",
  "title": "open-source ai",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T21:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:open-source-ai",
  "@type": "Class",
  "label": "Open-Source AI",
  "definition": "Open-Source AI denotes artificial intelligence systems—including model weights, training code, datasets, evaluation benchmarks, and inference tooling—released under licences that permit public inspection, reproduction, modification, and redistribution. The degree of openness varies widely: fully open releases expose weights, training data, and procedures; open-weights releases share weights and inference code while withholding training data; and open-API systems expose neither. This transparency gradient determines reproducibility, auditability, and dual-use risk, and is formalised by frameworks such as the OSI Open Source AI Definition. Open-source AI accelerates community safety research, enables fine-tuning on proprietary data, and reduces vendor lock-in, while simultaneously raising governance questions about capability proliferation and misuse.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:open-source-software",
      "label": "Open Source Software"
    }
  ],
  "sameAs": [
    {
      "@id": "urn:ngm:class:open-weights-ai",
      "label": "Open-Weights AI"
    },
    {
      "@id": "urn:ngm:class:open-ai-ecosystem",
      "label": "Open AI Ecosystem"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:model-weights",
        "label": "Model Weights"
      },
      {
        "@id": "urn:ngm:class:training-dataset",
        "label": "Training Dataset"
      },
      {
        "@id": "urn:ngm:class:inference-engine",
        "label": "Inference Engine"
      },
      {
        "@id": "urn:ngm:class:benchmark-evaluation",
        "label": "Evaluation Benchmark"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:open-source-software",
        "label": "Open Source Software"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:open-source-licence",
        "label": "Open Source Licence"
      },
      {
        "@id": "urn:ngm:class:compute-infrastructure",
        "label": "Compute Infrastructure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fine-tuning",
        "label": "Fine Tuning"
      },
      {
        "@id": "urn:ngm:class:red-teaming",
        "label": "Red Teaming"
      },
      {
        "@id": "urn:ngm:class:neural-network-quantisation",
        "label": "Model Quantisation"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      },
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:neural-network-architecture",
        "label": "Neural Network Architecture"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:ai-governance",
        "label": "AI Governance"
      },
      {
        "@id": "urn:ngm:class:ai-safety",
        "label": "AI Safety"
      },
      {
        "@id": "urn:ngm:class:scientific-reproducibility",
        "label": "Scientific Reproducibility"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:eu-ai-act-regulatory-instrument",
        "label": "EU AI Act"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:model-hub",
        "label": "Model Hub"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:distributed-collaboration",
        "label": "Distributed Collaboration"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ]
  },
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Open-Source AI refers to artificial intelligence systems—spanning [[Model Weights]], [[Training Dataset]], [[Evaluation Benchmark]], inference tooling, and supporting code—released under licences that permit public inspection, reproduction, modification, and redistribution. The concept is closely allied to [[Open Source Software]] principles but extends them into the specific challenges of machine learning: reproducibility requires access not just to code but to training data, compute environments, and hyperparameter configurations. The degree of openness varies considerably—from fully open stacks that expose every artefact, to open-weights releases that share parameters while withholding training data, to proprietary [[Large Language Model]] APIs that expose nothing. This gradient is formalised in frameworks such as the [[OSI Open Source AI Definition]] and shapes how regulators such as the [[EU AI Act]] classify obligations for [[AI Governance]].

- ### Overview
  - Open-Source AI emerged as a distinct movement when large-scale [[Neural Network Architecture]] research produced artefacts—weights, checkpoints, tokenisers—that were themselves valuable independently of the training code. Early community models such as GPT-J and BLOOM demonstrated that publicly released weights enabled a wave of downstream experimentation impossible with API-only access. Since then, model families including LLaMA, Mistral, Falcon, Gemma, and Phi have anchored a broad ecosystem of derivative fine-tunes, quantised variants, and specialised adaptations.
  - The movement matters for several interconnected reasons:
    - **Scientific reproducibility**: peer-reviewed AI claims can only be independently verified if the evaluated system is accessible. Open releases anchor [[Scientific Reproducibility]] in machine learning research.
    - **Safety and red-teaming**: community [[Red Teaming]] of publicly accessible models has surfaced vulnerabilities and biases that closed-API testing misses, feeding back into improved safety alignment.
    - **Sovereignty and vendor independence**: organisations deploying AI in air-gapped, regulated, or resource-constrained environments depend on open models to avoid cloud-API lock-in.
    - **Equity of access**: open weights lower the cost of entry for researchers, startups, and public-sector bodies in lower-resource settings.
  - These benefits must be weighed against [[Dual-Use Risk]]: frontier-capability open models lower the barrier for misuse, making capability thresholds and staged-release policies a live policy question.

- ### Key Components
  - **Model weights and checkpoints**
    - The numerical parameters of a trained neural network; the central artefact of any open-weights release. See [[Model Weights]].
  - **Training code and pipelines**
    - Scripts, frameworks, and data loaders needed to reproduce training from scratch. Full openness requires this layer; open-weights releases often omit it.
  - **Training datasets**
    - Curated corpora (text, image, multimodal) used during pre-training and instruction-tuning. Dataset openness is the most contested dimension—most frontier models withhold training data even when releasing weights. See [[Training Dataset]].
  - **Evaluation benchmarks**
    - Standardised tests (e.g. MMLU, HellaSwag, HumanEval) for measuring capability, safety, and alignment. Open benchmarks enable [[Evaluation Benchmark]] comparison across proprietary and open models.
  - **Inference engines**
    - Optimised runtimes (llama.cpp, vLLM, Ollama, TensorRT-LLM) that run open model weights efficiently on consumer or server hardware. See [[Inference Engine]] and [[Model Quantisation]].
  - **Fine-tuning frameworks**
    - Tools (LoRA, QLoRA, PEFT, Axolotl) enabling adaptation of a base model to downstream tasks without full retraining. Central to the [[Fine Tuning]] ecosystem that open weights unlock.
  - **Licences**
    - Legal instruments governing use and redistribution. Permissive licences (Apache 2.0, MIT) contrast with use-restricted licences (LLaMA community licence, Gemma Terms of Service) that limit commercial or governmental use. See [[Open Source Licence]].
  - **Model cards and datasheets**
    - Documentation artefacts disclosing intended use, training procedure, known limitations, and safety evaluations. Required by several governance frameworks as a transparency minimum.
  - **Model hubs**
    - Centralised repositories (Hugging Face Hub, Ollama Library, Kaggle Models) that distribute open weights, datasets, and evaluation results. See [[Model Hub]].

- ### Applications and Use Cases
  - **Domain-specific fine-tuning**
    - Organisations fine-tune open base models on proprietary corpora (legal, medical, financial) to create specialised assistants without sharing sensitive data with external API providers. See [[Community Fine-Tuning]].
  - **Edge and on-device deployment**
    - Quantised open models (4-bit, 8-bit GGUF formats) run on consumer GPUs, mobile devices, and embedded systems, enabling [[Edge AI]] without cloud connectivity.
  - **Federated and privacy-preserving learning**
    - Open architectures enable [[Federated Learning]] across distributed data owners, with shared model weights but no raw data centralisation.
  - **Safety and alignment research**
    - Academic and independent safety researchers use open models as the primary substrate for interpretability, mechanistic analysis, jailbreak research, and adversarial robustness studies. Open access is a prerequisite for this work.
  - **Regulatory auditing**
    - Open-weight models that disclose training procedures can be audited by third-party assessors, enabling conformity assessments under the [[EU AI Act]] and emerging national AI standards.
  - **Academic benchmarking**
    - Reproducible AI research requires open models for apples-to-apples comparison; community [[Evaluation Benchmark]] leaderboards depend on uniform access to evaluated systems.
  - **Multilingual and low-resource NLP**
    - Community-led open projects (BLOOM, MaLA-500, Aya) extend coverage to languages underserved by commercially driven closed models.
  - **Creative and generative tooling**
    - Open image, audio, and video generation models (Stable Diffusion, Whisper, MusicGen) have seeded large creative-tool ecosystems inaccessible under closed-API terms.
  - **Sovereign AI infrastructure**
    - National AI programmes in France, UAE, UAE, South Korea, and others have built sovereign [[Large Language Model]] capability on open foundations to reduce strategic dependence on US or Chinese proprietary platforms.

- ### Relationships
  - hasPart:: [[Model Weights]]
  - hasPart:: [[Training Dataset]]
  - hasPart:: [[Inference Engine]]
  - hasPart:: [[Evaluation Benchmark]]
  - partOf:: [[Open Source Software]]
  - requires:: [[Open Source Licence]]
  - requires:: [[Compute Infrastructure]]
  - enables:: [[Fine Tuning]]
  - enables:: [[Red Teaming]]
  - enables:: [[Model Quantisation]]
  - enables:: [[Federated Learning]]
  - enables:: [[Edge AI]]
  - dependsOn:: [[Large Language Model]]
  - dependsOn:: [[Neural Network Architecture]]
  - supports:: [[AI Governance]]
  - supports:: [[AI Safety]]
  - supports:: [[Scientific Reproducibility]]
  - standardizedBy:: [[OSI Open Source AI Definition]]
  - standardizedBy:: [[EU AI Act]]
  - contrastsWith:: [[Proprietary AI]]
  - contrastsWith:: [[Closed-Source Model]]
  - relatedTo:: [[Model Hub]]
  - relatedTo:: [[Community Fine-Tuning]]
  - relatedTo:: [[Dual-Use Risk]]
  - bridges-to:: [[Distributed Collaboration]]
  - bridges-to:: [[Regulatory Compliance]]

- ### Standards and Governance Context
  - **OSI Open Source AI Definition (OSAID)**
    - The Open Source Initiative published a formal definition of Open Source AI distinguishing fully open systems (weights + data + code) from partial releases. The OSAID shapes procurement language, regulatory interpretation, and community labelling practices. See [[OSI Open Source AI Definition]].
  - **EU AI Act**
    - The EU AI Act (Regulation 2024/1689) creates a tiered obligation regime. General-purpose AI models with genuinely open weights and parameters benefit from reduced documentation obligations compared to closed frontier models, provided cumulative training compute remains below defined thresholds. See [[EU AI Act]] and [[Regulatory Compliance]].
  - **NIST AI Risk Management Framework**
    - NIST RMF guidance on transparency and accountability is directly applicable to open-source AI evaluation; the framework encourages open documentation of model cards and datasheets as risk controls.
  - **Capability thresholds and staged release**
    - Policy debate has converged on the concept of evaluating models against capability benchmarks before unrestricted open release—particularly for models with potential for biological, chemical, radiological, or cybersecurity misuse. This intersects with [[AI Safety]] and [[Dual-Use Risk]].
  - **Licence compatibility**
    - Combining open-source model weights with datasets or tooling carrying incompatible licences creates legal uncertainty. The [[Open Source Licence]] landscape for AI includes Apache 2.0, MIT, GPL variants, Creative Commons for data, and bespoke restrictive licences (LLaMA community, Gemma) that do not meet the OSI Open Source Definition.
  - **Watermarking and provenance**
    - Emerging technical standards (C2PA, SynthID) for provenance tracking of AI-generated content are being extended to open-model outputs as a mitigation for misuse without restricting access.

- ### Semantic Classification
  - owl-class:: open-source-ai:Open-Source AI
  - owl-role:: Concept

- ### Provenance
  - sources::
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
