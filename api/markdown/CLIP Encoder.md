public:: true

# CLIP Encoder
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:clip-encoder",
  "@type": "Page",
  "vc:slug": "clip-encoder",
  "title": "CLIP Encoder",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:clip-encoder",
  "@type": "Class",
  "label": "CLIP Encoder",
  "definition": "A CLIP Encoder is either of the two paired neural network encoders — an image encoder and a text encoder — within the Contrastive Language-Image Pre-training (CLIP) framework developed by OpenAI. Each encoder maps its respective modality into a shared high-dimensional embedding space where semantically related image-text pairs are placed in proximity, enabling zero-shot image classification, cross-modal retrieval, and semantic image search without task-specific fine-tuning. CLIP Encoders serve as foundational components in multimodal AI pipelines, diffusion model conditioning, and vision-language models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:encoder", "label": "Encoder"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:contrastive-learning", "label": "Contrastive Learning"},
      {"@id": "urn:ngm:class:vision-transformer", "label": "Vision Transformer"},
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:multimodal-learning", "label": "Multimodal Learning"},
      {"@id": "urn:ngm:class:image-classification", "label": "Image Classification"},
      {"@id": "urn:ngm:class:diffusion-model", "label": "Diffusion Model"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:clip", "label": "CLIP"},
      {"@id": "urn:ngm:class:embedding", "label": "Embedding"},
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - A CLIP Encoder refers to either the image or text branch of the [[CLIP]] model. The image encoder (typically a [[Vision Transformer]] or ResNet variant) converts an input image into a fixed-dimensional feature vector, whilst the text encoder (a causal [[Transformer]]) converts a tokenised text description into a vector of the same dimension. Both embeddings are normalised and compared via cosine similarity, trained jointly with a [[Contrastive Learning]] objective that brings matching pairs close and pushes mismatched pairs apart across a dataset of 400 million image-text pairs.

- ### Relationships
  - CLIP Encoders power [[Multimodal Learning]] applications by providing a common semantic space bridging vision and language. The image encoder's representations underpin [[Image Classification]] in zero-shot settings and are used as conditioning signals in [[Diffusion Model]] architectures (Stable Diffusion uses a CLIP text encoder to condition denoising on text prompts). The [[Embedding]] vectors produced by CLIP Encoders are also used in semantic [[Computer Vision]] retrieval, content moderation, and dataset curation pipelines.

- ### Content
  - CLIP was published by OpenAI in February 2021 in the paper "Learning Transferable Visual Models From Natural Language Supervision" (Radford et al.). The model was trained on 400 million (image, text) pairs crawled from the internet using a symmetric cross-entropy loss across a large contrastive batch. At launch, CLIP achieved performance comparable to supervised models on ImageNet zero-shot classification despite never being fine-tuned on ImageNet, demonstrating the power of [[Contrastive Learning]] at scale. The [[Vision Transformer]] (ViT-L/14) variant became the most widely used image encoder.

  - Architecturally, the image encoder processes images as 14×14 or 16×16 patch sequences through a [[Vision Transformer]] with multi-head self-attention, producing a CLS token embedding projected to the joint space. The text encoder processes tokenised text (BPE vocabulary, max 77 tokens) through a causal [[Transformer]] and extracts the embedding at the [EOS] token position. Both projections share a learnable temperature parameter controlling the sharpness of the contrastive distribution. Inference requires only cosine similarity between encoded queries and keys — no classification head needed.

  - Open-source reimplementations (OpenCLIP by LAION, EVA-CLIP by BAAI, SigLIP by Google) extended the approach with larger datasets (LAION-400M, LAION-5B, DataComp-1B), improved architectures, and sigmoid loss variants. CLIP Encoders became standard building blocks for multimodal systems: LLaVA, Flamingo, CogVLM, and GPT-4V all use CLIP or CLIP-derived image encoders to provide visual context to language models. In generative AI, Stable Diffusion v1.x uses CLIP ViT-L/14 text encoding for text-to-image conditioning.

  - As of 2024–2025, CLIP Encoders remain ubiquitous despite newer architectures. SigLIP (sigmoid loss CLIP) from Google Brain shows improved performance on multilingual and fine-grained tasks. DFN-CLIP (Data Filtering Networks) and MetaCLIP focus on higher-quality data curation over raw scale. CLIP representations are used for safety classifiers, content moderation in image generation platforms, and embedding spaces for multimodal retrieval-augmented generation (RAG) systems. The architecture's simplicity and zero-shot generalisation continue to make it a default first choice for [[Multimodal Learning]] practitioners.

