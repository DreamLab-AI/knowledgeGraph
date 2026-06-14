public:: true

# meta ai
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:43939d3efb6e942ec13be6e0497fe95ce3a5f93e8fab0bae906ee5c91ed9dc9b",
  "@type": "Page",
  "vc:slug": "meta-ai",
  "title": "meta ai",
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
  "@id": "urn:ngm:class:meta-ai",
  "@type": "Class",
  "label": "Meta AI",
  "definition": "Meta AI is the artificial intelligence research and applied AI division of Meta Platforms, Inc., encompassing the Fundamental AI Research (FAIR) laboratory for long-horizon academic research and multiple applied AI teams that embed machine-learning capabilities into Meta products including Facebook, Instagram, and WhatsApp. The division is best known for its open-weight large language model series LLaMA, the zero-shot image segmentation model Segment Anything (SAM), the multimodal joint-embedding model ImageBind, and early contributions to the broader AI ecosystem including the PyTorch deep-learning framework and fastText word embeddings. Meta AI's open-weight release strategy has materially shaped the open-source AI ecosystem by enabling community fine-tuning, on-device deployment, and proliferation of derivative models without dependence on proprietary inference APIs.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:fundamental-ai-research", "label": "Fundamental AI Research"},
      {"@id": "urn:ngm:class:llama", "label": "LLaMA"},
      {"@id": "urn:ngm:class:segment-anything", "label": "Segment Anything"},
      {"@id": "urn:ngm:class:imagebind", "label": "ImageBind"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"},
      {"@id": "urn:ngm:class:multimodal-ai", "label": "Multimodal AI"},
      {"@id": "urn:ngm:class:on-device-inference", "label": "On-Device Inference"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:instruction-tuning", "label": "Instruction Tuning"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"},
      {"@id": "urn:ngm:class:self-supervised-learning", "label": "Self-Supervised Learning"},
      {"@id": "urn:ngm:class:pytorch", "label": "PyTorch"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:gpu-cluster", "label": "GPU Cluster"},
      {"@id": "urn:ngm:class:distributed-training", "label": "Distributed Training"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:responsible-ai", "label": "Responsible AI"},
      {"@id": "urn:ngm:class:model-card", "label": "Model Card"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:openai", "label": "OpenAI"},
      {"@id": "urn:ngm:class:google-deepmind", "label": "Google DeepMind"},
      {"@id": "urn:ngm:class:anthropic", "label": "Anthropic"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:fine-tuning", "label": "Fine Tuning"},
      {"@id": "urn:ngm:class:zero-shot-learning", "label": "Zero-Shot Learning"},
      {"@id": "urn:ngm:class:ai-safety", "label": "AI Safety"},
      {"@id": "urn:ngm:class:open-weight-model", "label": "Open-Weight Model"},
      {"@id": "urn:ngm:class:ai-research-organisation", "label": "AI Research Organisation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"},
      {"@id": "urn:ngm:class:metaverse", "label": "Metaverse"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:meta-platforms-ai", "label": "Meta Platforms AI"},
    {"@id": "urn:ngm:class:facebook-ai-research", "label": "Facebook AI Research"}
  ],
  "quality": 0.74,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-13T00:00:00Z",
    "inferenceRule": "ManualEnrichment"
  }
}
```

- ### Definition
  - Meta AI is the artificial intelligence research and applied AI division of [[Meta Platforms]], operating through two complementary arms: the [[Fundamental AI Research]] (FAIR) laboratory for long-horizon foundational research, and applied AI product teams that embed machine-learning capabilities into [[Facebook]], [[Instagram]], and [[WhatsApp]]. The division is best known externally for its open-weight [[Large Language Models]] under the [[LLaMA]] family, the zero-shot image segmentation model [[Segment Anything]] (SAM), the six-modality joint-embedding model [[ImageBind]], and seminal contributions to the broader [[Open-Source AI]] ecosystem including co-development of the [[PyTorch]] deep-learning framework and the fastText word-embedding library.

- ### Overview
  - Meta AI sits at the intersection of foundational machine-learning science and large-scale product deployment, distinguishing itself from rivals primarily through an open-weight release philosophy.
  - Unlike [[OpenAI]] or [[Anthropic]], which lock model weights behind proprietary APIs, Meta AI publishes model weights under community-use licences, enabling researchers and practitioners to fine-tune, quantise, and deploy models locally without recurring inference costs or data-residency concerns.
  - The division emerged from Facebook AI Research (FAIR), founded in 2013 under Yann LeCun, and has since grown to encompass product AI teams, responsible AI (RAI) researchers, and large-scale infrastructure teams managing one of the world's largest GPU clusters.
  - Meta AI's strategic rationale for openness is dual: it accelerates external research that feeds back into internal development, and it commoditises the AI model layer to shift competitive advantage to Meta's data assets and distribution network.
  - The open-weight strategy has generated significant regulatory and ethical debate, as unrestricted access to capable models raises dual-use concerns addressed only partially by community licences and [[Model Card]] documentation.

- ### Key Components
  - #### Fundamental AI Research (FAIR)
    - Long-horizon academic research unit publishing peer-reviewed work without immediate product requirement.
    - Early contributions: fastText (subword word embeddings), FAISS (billion-scale approximate nearest-neighbour search), and [[Self-Supervised Learning]] methods (DINO, DINO v2 for vision transformers).
    - Ongoing research streams in [[Graph Neural Networks]], [[Reinforcement Learning]], [[Causal Inference]], and AI alignment foundations.
  - #### LLaMA Family
    - A series of open-weight transformer-based [[Large Language Models]] spanning parameter counts from 7B to 70B+ (and later 400B+).
    - LLaMA 1 (2023) released weights for research under a restricted licence; LLaMA 2 (2023) extended commercial use to most organisations; LLaMA 3 (2024) improved instruction-following and multilingual capability.
    - The open-weight approach spawned derivative models including Alpaca, Vicuna, and Mistral, reshaping the [[Open-Source AI]] landscape.
    - [[Instruction Tuning]] and [[Reinforcement Learning from Human Feedback]] applied to LLaMA base weights produce instruction-following variants (e.g. LLaMA-Chat).
  - #### Segment Anything Model (SAM)
    - [[Zero-Shot Learning]] image segmentation model trained on a dataset of over one billion masks.
    - Accepts point, box, or text prompts and produces pixel-precise masks for any object without task-specific fine-tuning.
    - Widely adopted in medical imaging, robotics, and remote sensing pipelines; SAM 2 extended capability to video segmentation.
    - Enabled downstream [[Computer Vision]] workflows that previously required costly annotated datasets per task.
  - #### ImageBind
    - Joint embedding model mapping six modalities — image, text, audio, depth, thermal, and IMU sensor data — into a shared representation space.
    - Trained using image as the binding anchor, enabling cross-modal retrieval (e.g. audio-to-image search) without pairwise multi-modal training data.
    - Foundational for [[Multimodal AI]] applications including cross-modal retrieval, zero-shot classification, and embodied-agent perception.
  - #### SeamlessM4T and MMS
    - SeamlessM4T: massively multilingual speech-to-text, text-to-speech, and speech-to-speech translation across nearly 100 languages.
    - MMS (Massively Multilingual Speech): extended [[Speech Recognition]] and synthesis to 1,100+ languages using self-supervised pre-training on religious audio corpora.
    - Both models support [[Natural Language Processing]] for low-resource languages underserved by commercial providers.
  - #### PyTorch
    - Open-source [[Deep Learning]] framework co-developed by Meta AI and now governed by the Linux Foundation under the PyTorch Foundation umbrella.
    - Dominant framework for research-grade model development; widely used in academia and as the training substrate for most Meta AI models.
    - Supports dynamic computation graphs, enabling flexible model architectures preferred in research settings.
  - #### Responsible AI (RAI) Team
    - Develops fairness evaluation benchmarks, bias detection tooling, and [[Model Card]] standards for Meta AI releases.
    - Publishes research on privacy-preserving ML, differential privacy, and adversarial robustness.
    - Produces AI System Cards for major model releases documenting intended use, limitations, and safety evaluations.

- ### Applications and Use Cases
  - **Product AI**: Personalisation and content ranking across Facebook and Instagram feeds; conversational AI assistant ("Meta AI assistant") embedded in WhatsApp, Messenger, and Ray-Ban smart glasses.
  - **On-Device Inference**: Quantised LLaMA variants enable [[On-Device Inference]] for mobile and edge devices without cloud round-trips, supporting privacy-sensitive applications.
  - **Research Fine-Tuning**: Open-weight LLaMA models serve as base models for domain-specific fine-tuning in legal, medical, scientific, and coding domains by external researchers and enterprises.
  - **Medical Imaging**: SAM's promptable segmentation is adopted in medical imaging pipelines for organ delineation and tumour boundary detection, illustrating [[Transfer Learning]] from natural-image pre-training.
  - **Robotics Perception**: ImageBind and SAM underpin multi-modal perception stacks in robotics research, linking sensor modalities for embodied agents operating in physical environments — connecting to Meta's broader [[Augmented Reality]] and [[Metaverse]] hardware ambitions.
  - **Low-Resource Language NLP**: SeamlessM4T and MMS enable translation and transcription services for language communities lacking commercial-grade NLP tools.
  - **AI Safety Research**: FAIR publishes interpretability and alignment research contributing to the wider [[AI Safety]] field, including work on sparse autoencoders for mechanistic interpretability.

- ### Relationships
  - hasPart:: [[Fundamental AI Research]]
  - hasPart:: [[LLaMA]]
  - hasPart:: [[Segment Anything]]
  - hasPart:: [[ImageBind]]
  - enables:: [[Open-Source AI]]
  - enables:: [[Multimodal AI]]
  - enables:: [[On-Device Inference]]
  - enables:: [[Transfer Learning]]
  - uses:: [[Large Language Models]]
  - uses:: [[Instruction Tuning]]
  - uses:: [[Reinforcement Learning from Human Feedback]]
  - uses:: [[Self-Supervised Learning]]
  - uses:: [[PyTorch]]
  - requires:: [[GPU Cluster]]
  - requires:: [[Distributed Training]]
  - implements:: [[Responsible AI]]
  - implements:: [[Model Card]]
  - supports:: [[Natural Language Processing]]
  - supports:: [[Computer Vision]]
  - supports:: [[Speech Recognition]]
  - contrastsWith:: [[OpenAI]]
  - contrastsWith:: [[Google DeepMind]]
  - contrastsWith:: [[Anthropic]]
  - relatedTo:: [[Fine Tuning]]
  - relatedTo:: [[Zero-Shot Learning]]
  - relatedTo:: [[AI Safety]]
  - relatedTo:: [[Open-Weight Model]]
  - bridges-to:: [[Augmented Reality]]
  - bridges-to:: [[Metaverse]]

- ### Standards and Context
  - Meta AI participates in US and EU regulatory discussions on foundation-model transparency and open-weight release governance.
  - LLaMA community licences impose usage restrictions (no high-volume API resale, no use by companies with over a threshold of monthly active users without separate agreement) representing an intermediate position between fully open (Apache 2.0) and fully proprietary.
  - [[Model Card]] documentation released with major models follows the model card standard proposed by Mitchell et al. (2019), providing evaluation results, intended uses, and known limitations.
  - The EU AI Act's treatment of general-purpose AI models (GPAIs) with open weights created regulatory uncertainty that Meta engaged with through public comment and lobbying for exemptions for open-weight providers.
  - Meta AI's [[Responsible AI]] team contributes to Partnership on AI and participates in voluntary safety commitments coordinated by NIST and the White House Office of Science and Technology Policy.
  - [[PyTorch]] governance transferred to the Linux Foundation's PyTorch Foundation in 2022, ensuring framework neutrality independent of Meta's commercial interests.

- ### Semantic Classification
  - owl-class:: meta-ai:Meta AI
  - owl-role:: Concept

- ### Provenance
  - sources:: FAIR publications; Meta AI blog; LLaMA model cards; SAM paper (Kirillov et al. 2023); ImageBind paper (Girdhar et al. 2023); SeamlessM4T technical report; PyTorch Foundation governance documentation
  - updated:: 2026-06-13
  - migration-date:: 2026-05-19T00:00:00Z
