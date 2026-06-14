public:: true

# Multimodal Models
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e49ba7ecf25403e4ff7fed01bf70015ea4b6239d03f7bdc2543088d8f7b6e00a",
  "@type": "Page",
  "vc:slug": "multimodal-models",
  "title": "Multimodal Models",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:transformer",
      "vc:label": "Transformer"
    },
    {
      "@id": "urn:visionflow:linked:text-to-image",
      "vc:label": "Text-to-Image"
    },
    {
      "@id": "urn:visionflow:linked:foundation-models",
      "vc:label": "Foundation Models"
    },
    {
      "@id": "urn:visionflow:linked:multimodal-ai",
      "vc:label": "Multimodal AI"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Multimodal Models"
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
  "@id": "urn:ngm:class:multimodal-ai-architecture-models",
  "@type": "Class",
  "label": "Multimodal Models",
  "definition": "Multimodal models are machine learning architectures that jointly process, align, and reason over information from two or more distinct data modalities — such as text, images, audio, video, or depth — within a unified model. They learn shared or bridged representations that enable cross-modal tasks including visual question answering, image captioning, speech recognition conditioned on vision, and text-to-image synthesis. These models extend unimodal foundations (typically large language models or vision encoders) by integrating modality-specific encoders or tokenisers with cross-attention or projection layers that align heterogeneous feature spaces. Multimodal models represent the convergence of natural language processing, computer vision, and speech processing into a single, generalist AI paradigm.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:multimodal-ai-architecture-ai",
      "label": "Multimodal AI"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      },
      {
        "@id": "urn:ngm:class:cross-attention",
        "label": "Cross-Attention"
      },
      {
        "@id": "urn:ngm:class:paired-training-data",
        "label": "Paired Training Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:text-to-image",
        "label": "Text-to-Image"
      },
      {
        "@id": "urn:ngm:class:visual-question-answering",
        "label": "Visual Question Answering"
      },
      {
        "@id": "urn:ngm:class:image-captioning",
        "label": "Image Captioning"
      },
      {
        "@id": "urn:ngm:class:audio-visual-speech-recognition",
        "label": "Audio-Visual Speech Recognition"
      },
      {
        "@id": "urn:ngm:class:multimodal-retrieval",
        "label": "Multimodal Retrieval"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:vision-encoder",
        "label": "Vision Encoder"
      },
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:contrastive-learning",
        "label": "Contrastive Learning"
      },
      {
        "@id": "urn:ngm:class:embedding-space",
        "label": "Embedding Space"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:modality-specific-encoder",
        "label": "Modality-Specific Encoder"
      },
      {
        "@id": "urn:ngm:class:projection-layer",
        "label": "Projection Layer"
      },
      {
        "@id": "urn:ngm:class:multimodal-decoder",
        "label": "Multimodal Decoder"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:foundation-models",
        "label": "Foundation Models"
      },
      {
        "@id": "urn:ngm:class:self-supervised-learning",
        "label": "Self-Supervised Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:unimodal-models",
        "label": "Unimodal Models"
      },
      {
        "@id": "urn:ngm:class:modality-specific-pipeline",
        "label": "Modality-Specific Pipeline"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:clip",
        "label": "CLIP"
      },
      {
        "@id": "urn:ngm:class:diffusion-models",
        "label": "Diffusion Models"
      },
      {
        "@id": "urn:ngm:class:instruction-tuning",
        "label": "Instruction Tuning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:spatial-computing",
        "label": "Spatial Computing"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:multimodal-large-language-models",
      "label": "Multimodal Large Language Models"
    },
    {
      "@id": "urn:ngm:class:vision-language-models",
      "label": "Vision-Language Models"
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
  "@id": "urn:visionflow:annotation:link-resolutions:multimodal-models:a35917d361e2",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e49ba7ecf25403e4ff7fed01bf70015ea4b6239d03f7bdc2543088d8f7b6e00a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Transformer]]",
      "resolved": "urn:visionflow:linked:transformer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Text-to-Image]]",
      "resolved": "urn:visionflow:linked:text-to-image",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large-Scale Pretrained Foundation Model]]",
      "resolved": "urn:visionflow:linked:foundation-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multimodal AI]]",
      "resolved": "urn:visionflow:linked:multimodal-ai",
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
  - Multimodal models are [[Machine Learning]] architectures that jointly process, align, and reason over two or more distinct data modalities — such as text, images, audio, video, or sensor data — within a single unified system. By learning shared or bridged representations across modalities, they enable cross-modal tasks that would be impossible for unimodal systems, such as [[Visual Question Answering]], [[Image Captioning]], and [[Text-to-Image]] generation. They typically extend powerful [[Foundation Models]] with modality-specific encoders and cross-modal fusion mechanisms, and represent the convergence of [[Natural Language Processing]], [[Computer Vision]], and speech processing into a generalist AI paradigm.

- ### Overview
  - Multimodal models address the fundamental limitation of unimodal systems: the real world is inherently multimodal. Humans perceive and reason with vision, hearing, touch, and language simultaneously; capable AI systems must do the same.
  - The core challenge is **representation alignment**: how to map heterogeneous inputs (pixels, waveforms, tokens) into a shared or interoperable feature space where cross-modal relationships can be learnt.
  - Three dominant fusion strategies define the design space:
    - **Early fusion**: raw or low-level features from all modalities are concatenated before processing by a shared encoder.
    - **Late fusion**: each modality is processed independently to produce high-level representations, which are then combined at inference time.
    - **Intermediate (cross-modal) fusion**: modality-specific encoders produce mid-level representations that are merged via [[Cross-Attention]] or other learned gating mechanisms — the dominant approach in modern systems.
  - The dominant architectural pattern: a large [[Transformer]]-based [[Large Language Model]] backbone receives vision tokens (from a [[Vision Encoder]] such as a [[Vision Transformer]]) via a learned [[Projection Layer]] that maps visual embeddings into the LLM's token space.
  - Training typically proceeds in stages: first pre-training individual encoders on large unimodal corpora, then aligning modalities using paired data (image-caption pairs, video-transcript pairs), and finally fine-tuning on instruction-following datasets via [[Instruction Tuning]].

- ### Key Components
  - **Modality-Specific Encoders**
    - [[Vision Encoder]]: processes images or video frames into patch-level or frame-level embeddings (e.g. ViT, EVA-CLIP).
    - Audio encoder: extracts acoustic features using convolutional or transformer architectures (e.g. Whisper encoder).
    - Text encoder: a [[Tokeniser]] and [[Embedding Layer]] from a pre-trained [[Large Language Model]].
  - **Alignment and Fusion Mechanisms**
    - [[Contrastive Learning]] (e.g. [[CLIP]]): maps image and text encoders into a shared embedding space using contrastive objectives, so similar pairs are close and dissimilar pairs are far apart.
    - [[Cross-Attention]]: allows tokens from one modality to attend to representations from another, enabling fine-grained alignment without collapsing modality-specific detail.
    - [[Projection Layer]] (linear or MLP): translates the output of a vision encoder into the token space of a language decoder.
    - Q-Former (Querying Transformer): a lightweight bridging module (used in BLIP-2) that queries a frozen image encoder with learned query tokens before passing to the LLM.
  - **Decoder or Generator**
    - Autoregressive language decoder: generates text (captions, answers, descriptions) token by token, conditioned on multimodal context.
    - [[Diffusion Models]] decoder: generates images from text embeddings (used in [[Stable Diffusion]], DALL·E 3).
    - Interleaved generation heads: some systems can generate both text and images in a single autoregressive sequence (e.g. Chameleon).
  - **Training Data**
    - Aligned or paired data is essential: image-text pairs, video-transcript pairs, audio-description pairs.
    - [[Self-Supervised Learning]] techniques (masked image modelling, masked language modelling) reduce reliance on explicit labels.
    - Web-scale data curation (e.g. LAION, DataComp) provides billions of weakly supervised pairs.

- ### Applications and Use Cases
  - **Document understanding**: parsing PDFs, charts, tables, and mixed-media documents that combine text and visual layout.
  - **Medical imaging**: correlating clinical notes with radiological scans, pathology slides, or ultrasound video for diagnosis support.
  - **Robotics and embodied agents**: grounding natural language instructions in visual observations to drive manipulation or navigation — see [[Embodied AI]] and [[Robotic Manipulation]].
  - **Accessibility**: automatic image descriptions for screen readers; real-time sign-language video to text transcription.
  - **Content generation**: [[Text-to-Image]] synthesis, video generation from text prompts, music composition from visual mood boards.
  - **Search and retrieval**: [[Multimodal Retrieval]] systems (cross-modal search — find images with text queries, or find text passages relevant to an image).
  - **Autonomous vehicles**: fusing camera, LiDAR, radar, and map data for scene understanding — see [[Sensor Fusion]].
  - **Education and tutoring**: interpreting student-drawn diagrams or hand-written equations alongside textual explanation.
  - **Spatial computing and AR/VR**: understanding and annotating 3D scenes in real time via [[Spatial Computing]] integration.
  - **Human-computer interaction**: natural conversation interfaces that accept speech, images, and typed queries simultaneously.

- ### Prominent Architectures
  - **CLIP** (OpenAI, 2021): contrastive image-text pretraining; foundational alignment model for the field.
  - **DALL·E / DALL·E 3** (OpenAI): text-to-image using diffusion with CLIP-based conditioning.
  - **Flamingo** (DeepMind, 2022): few-shot visual language model using cross-attention gating between frozen vision and language encoders.
  - **BLIP / BLIP-2** (Salesforce): bootstrapped language-image pretraining; introduced the Q-Former bridge.
  - **GPT-4V / GPT-4o** (OpenAI): proprietary large multimodal model accepting image and audio inputs alongside text.
  - **LLaVA** (Liu et al., 2023): open-source visual instruction tuning; simple projection layer between CLIP ViT and Vicuna LLM.
  - **Gemini** (Google DeepMind): natively multimodal architecture trained jointly on text, image, audio, and video from the outset.
  - **Chameleon** (Meta): early-fusion token-based multimodal model generating interleaved image and text sequences.
  - **InternVL / InternLM-XComposer**: competitive open-weight vision-language models from the Chinese AI ecosystem.

- ### Relationships
  - subClassOf:: [[Multimodal AI]]
  - requires:: [[Transformer]]
  - requires:: [[Cross-Attention]]
  - requires:: [[Paired Training Data]]
  - enables:: [[Text-to-Image]]
  - enables:: [[Visual Question Answering]]
  - enables:: [[Image Captioning]]
  - enables:: [[Audio-Visual Speech Recognition]]
  - enables:: [[Multimodal Retrieval]]
  - uses:: [[Vision Encoder]]
  - uses:: [[Large Language Model]]
  - uses:: [[Contrastive Learning]]
  - uses:: [[Embedding Space]]
  - hasPart:: [[Modality-Specific Encoder]]
  - hasPart:: [[Projection Layer]]
  - hasPart:: [[Multimodal Decoder]]
  - dependsOn:: [[Foundation Models]]
  - dependsOn:: [[Self-Supervised Learning]]
  - contrastsWith:: [[Unimodal Models]]
  - relatedTo:: [[CLIP]]
  - relatedTo:: [[Diffusion Models]]
  - relatedTo:: [[Instruction Tuning]]
  - bridges-to:: [[Spatial Computing]]
  - bridges-to:: [[Human-Computer Interaction]]

- ### Standards and Context
  - No single governing standards body controls multimodal model design; the field evolves through open research publication and de facto community standards.
  - **Benchmarks** effectively set evaluation standards:
    - VQA v2, GQA: visual question answering.
    - COCO Captions: image captioning.
    - MMBench, MMMU: comprehensive multimodal understanding.
    - SEED-Bench: multi-granularity evaluation of large multimodal models.
  - **Ethics and safety**: multimodal models inherit and amplify risks from both language and vision modalities — hallucination of visual content, generative misuse (deepfakes, CSAM), bias from web-scraped training data. Organisations including Anthropic, OpenAI, and Google have published model cards and responsible use guidelines.
  - **Evaluation challenge**: assessing cross-modal reasoning requires richer metrics than unimodal benchmarks; human evaluation and adversarial probing remain important complements to automated scores.
  - **Data governance**: large-scale web-scraped paired datasets (LAION, WIT) have raised copyright and consent questions, driving interest in [[Synthetic Data]] generation and licensed data pipelines.
  - Relevant research venues: NeurIPS, ICML, ICLR, CVPR, ECCV, ACL, EMNLP.

- ### Provenance
  - sources:: OpenAI CLIP paper (Radford et al. 2021); Flamingo (Alayrac et al. 2022); BLIP-2 (Li et al. 2023); LLaVA (Liu et al. 2023); Gemini Technical Report (Google DeepMind 2023)
  - updated:: 2026-06-13
