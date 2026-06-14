public:: true
alias:: Fine-Tuning, Fine-tuning

# Fine Tuning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1e807fdd61172d2d153b5ffcd6928b9f07c0d57c7bf829c0a0bc58e93d2168da",
  "@type": "Page",
  "vc:slug": "fine-tuning",
  "title": "Fine Tuning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:comfy-work-flows",
      "vc:label": "ComfyWorkFlows"
    },
    {
      "@id": "urn:visionflow:linked:flux",
      "vc:label": "flux"
    },
    {
      "@id": "urn:visionflow:linked:visionflow",
      "vc:label": "visionflow"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:control-net-and-similar-spatial-conditioning-systems",
      "vc:label": "ControlNet and Similar Spatial Conditioning Systems"
    },
    {
      "@id": "urn:visionflow:owl:class:death-of-the-internet",
      "vc:label": "Death of the Internet"
    },
    {
      "@id": "urn:visionflow:owl:class:face-swap",
      "vc:label": "Face Swap"
    },
    {
      "@id": "urn:visionflow:owl:class:fashion",
      "vc:label": "Fashion"
    },
    {
      "@id": "urn:visionflow:owl:class:flux-1",
      "vc:label": "Flux.1"
    },
    {
      "@id": "urn:visionflow:owl:class:large-language-models",
      "vc:label": "Large Language Models"
    },
    {
      "@id": "urn:visionflow:owl:class:lo-ra",
      "vc:label": "LoRA"
    },
    {
      "@id": "urn:visionflow:owl:class:lo-ra-do-ra-etc",
      "vc:label": "LoRA DoRA etc"
    },
    {
      "@id": "urn:visionflow:owl:class:model-optimisation-and-performance",
      "vc:label": "Model Optimisation and Performance"
    },
    {
      "@id": "urn:visionflow:owl:class:multimodal",
      "vc:label": "Multimodal"
    },
    {
      "@id": "urn:visionflow:owl:class:open-webui-and-pipelines",
      "vc:label": "Open Webui and Pipelines"
    },
    {
      "@id": "urn:visionflow:owl:class:style-transfer",
      "vc:label": "style transfer"
    },
    {
      "@id": "urn:visionflow:owl:class:training-and-fine-tuning",
      "vc:label": "Training and fine tuning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0246"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fine Tuning"
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
  "@id": "urn:ngm:class:fine-tuning",
  "@type": "Class",
  "label": "Fine Tuning",
  "definition": "The process of adapting a pre-trained model to a specific downstream task by continuing training on task-specific data, typically with a lower learning rate. Fine-tuning leverages knowledge acquired during pre-training whilst specialising the model for particular applications.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:transfer-learning",
    "label": "Transfer Learning"
  },
  "relations": {
    "dependsOn": [
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:pre-trained-model", "label": "Pre-Trained Model"},
      {"@id": "urn:ngm:class:labelled-dataset", "label": "Labelled Dataset"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:gradient-descent", "label": "Gradient Descent"},
      {"@id": "urn:ngm:class:backpropagation", "label": "Backpropagation"},
      {"@id": "urn:ngm:class:learning-rate-scheduling", "label": "Learning Rate Scheduling"},
      {"@id": "urn:ngm:class:low-rank-adaptation", "label": "Low-Rank Adaptation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:large-language-models", "label": "Large Language Models"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:instruction-following", "label": "Instruction Following"},
      {"@id": "urn:ngm:class:domain-adaptation", "label": "Domain Adaptation"},
      {"@id": "urn:ngm:class:reinforcement-learning-from-human-feedback", "label": "Reinforcement Learning from Human Feedback"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:parameter-efficient-fine-tuning", "label": "Parameter-Efficient Fine-Tuning"},
      {"@id": "urn:ngm:class:full-fine-tuning", "label": "Full Fine-Tuning"},
      {"@id": "urn:ngm:class:supervised-fine-tuning", "label": "Supervised Fine-Tuning"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:model-training-pipeline", "label": "Model Training Pipeline"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:gpu-compute", "label": "GPU Compute"},
      {"@id": "urn:ngm:class:task-specific-dataset", "label": "Task-Specific Dataset"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:retrieval-augmented-generation", "label": "Retrieval-Augmented Generation"},
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"},
      {"@id": "urn:ngm:class:training-from-scratch", "label": "Training From Scratch"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:model-alignment", "label": "Model Alignment"},
      {"@id": "urn:ngm:class:overfitting", "label": "Overfitting"},
      {"@id": "urn:ngm:class:knowledge-distillation", "label": "Knowledge Distillation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:style-transfer", "label": "Style Transfer"},
      {"@id": "urn:ngm:class:multimodal-models", "label": "Multimodal Models"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:model-fine-tuning", "label": "Model Fine-Tuning"},
    {"@id": "urn:ngm:class:supervised-adaptation", "label": "Supervised Adaptation"}
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:fine-tuning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1e807fdd61172d2d153b5ffcd6928b9f07c0d57c7bf829c0a0bc58e93d2168da"
  },
  "vc:resolutions": [
    {
      "raw": "[[ComfyWorkFlows]]",
      "resolved": "urn:visionflow:linked:comfy-work-flows",
      "kind": "StubLink"
    },
    {
      "raw": "[[flux]]",
      "resolved": "urn:visionflow:linked:flux",
      "kind": "StubLink"
    },
    {
      "raw": "[[visionflow]]",
      "resolved": "urn:visionflow:linked:visionflow",
      "kind": "StubLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Node-Based Diffusion Pipeline Interface]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ControlNet and Similar Spatial Conditioning Systems]]",
      "resolved": "urn:visionflow:owl:class:control-net-and-similar-spatial-conditioning-systems",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Death of the Internet]]",
      "resolved": "urn:visionflow:owl:class:death-of-the-internet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Face Swap]]",
      "resolved": "urn:visionflow:owl:class:face-swap",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fashion]]",
      "resolved": "urn:visionflow:owl:class:fashion",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Flux.1]]",
      "resolved": "urn:visionflow:owl:class:flux-1",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Large Language Models]]",
      "resolved": "urn:visionflow:owl:class:large-language-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LoRA]]",
      "resolved": "urn:visionflow:owl:class:lo-ra",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[LoRA DoRA etc]]",
      "resolved": "urn:visionflow:owl:class:lo-ra-do-ra-etc",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Model Optimisation and Performance]]",
      "resolved": "urn:visionflow:owl:class:model-optimisation-and-performance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Multimodal]]",
      "resolved": "urn:visionflow:owl:class:multimodal",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Open Webui and Pipelines]]",
      "resolved": "urn:visionflow:owl:class:open-webui-and-pipelines",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[style transfer]]",
      "resolved": "urn:visionflow:owl:class:style-transfer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Training and fine tuning]]",
      "resolved": "urn:visionflow:owl:class:training-and-fine-tuning",
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
  - The process of adapting a pre-trained model to a specific downstream task by continuing training on task-specific data, typically with a lower learning rate. Fine-tuning leverages knowledge acquired during pre-training whilst specialising the model for particular applications.
- ### Semantic Classification
  - owl-class:: artificial-intelligence:FineTuning
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]
- ### Relationships
  - dependsOn:: [[Transfer Learning]]
  - dependsOn:: [[Training Data]]
  - uses:: [[Gradient Descent]]
  - enables:: [[Large Language Models]]
  - enables:: [[Image Generation]]
- ### Content
  - The process of adapting a pre-trained model to a specific downstream task by continuing training on task-specific data, typically with a lower learning rate. Fine-tuning leverages knowledge acquired during pre-training whilst specialising the model for particular applications.
  - ### [Crawl4AI](https://github.com/unclecode/crawl4ai)
		- An open-source web crawler and scraper that is designed to be friendly for Large Language Models (LLMs). It creates clean and concise Markdown that is optimized for RAG and fine-tuning applications.
  - ### Marketer-Side Components
		- [[Multimodal]] Product Representation
		- Marketers create rich, multi-modal representations of their products, capturing visual appearance, textual descriptions, and other relevant attributes.
		  These are [[Training and fine tuning]] using AI to generate variations catering to different user preferences and demographics.
  - # Training LoRA and Fine Tuning
  - The Flux 1D fine-tuning discussion reveals a rapidly evolving landscape of techniques and challenges. Here's a distilled summary of the best options and tips from the community, prioritizing newer information:
	  Best Fine-Tuning Options:
	  LoRA (Low-Rank Adaptation): Remains the most popular and accessible method due to lower VRAM requirements and good results. Ranks of 16, 32, and even as low as 4 or 2 are being used successfully, depending on the task. Alpha typically matches the rank.
	  Full Fine Tuning (FFT): Offers potentially superior results, especially for complex concepts and preventing overfitting, but demands significantly more VRAM (around 24GB or more, even with optimizations). 2kpr's method (integrated into Kohya's sd-scripts) allows FFT within 24GB using BF16, stochastic rounding, and fused backpass, with optional block swapping for even lower VRAM.
	  Key Training Considerations and Tips:
	  LR (Learning Rate): For LoRA, 1e-4 seems a good starting point, with some finding success at 4e-4 or even higher depending on rank and optimizer. For FFT, significantly lower LRs are necessary (around 1e-5 to 1e-6 or even lower).
	  Optimizer: AdamW and Prodigy are both used for LoRA, with Prodigy often converging faster but offering less control. Adafactor with stochastic rounding is crucial for FFT with 2kpr's method. CAME is also being explored.
	  Captions: While some early advice suggested minimal or no captions for Flux, the consensus now leans towards detailed, natural language captions, especially for complex subjects and preventing overfitting. Using an LLM like CogVLM or Florence2 is recommended. Avoid overly long, "word salad" captions. Concise and descriptive captions targeting the specific learning objective seem to work best. For style training, include the type of art (painting, photo, etc.) and the style name in the caption. For characters, caption diverse images and avoid overfitting on specific outfits or backgrounds.
	  Dataset: High-quality images are crucial. Flux is sensitive to artifacts, so clean your dataset. For likeness, 12-20 varied images are sufficient. For style, aim for diversity of content, pose, and lighting within the style. For characters, include variations in pose, expression, clothing, and background to maximize flexibility. Too similar images can lead to overfitting. Background removal can be helpful for characters and some styles. Avoid including famous faces in your dataset if you don't intend to train them specifically.
	  Data Augmentation: Flipping is generally safe. Cropping can be helpful, but avoid scaling if possible as it can introduce artifacts.
	  Multi-Resolution Training: While initially recommended, the community now seems divided. It might be helpful for some tasks but can degrade detail and introduce artifacts in others, especially styles. Consider generating only at the highest resolution you plan to use.
	  Regularization: Crucial for preventing overfitting and concept bleed, especially in multi-concept training and FFT. Current methods aren't as effective as with previous models. Using a combination of captioned and uncaptioned regularisation images with varied styles is suggested. More research is needed in this area.
	  T5 Training: Still experimental and resource-intensive. May be useful for enhancing specific concepts or prompt understanding, but requires careful tuning. Combining natural language captions with tags is being explored.
	  CLIP Training: Has become a recommended practice alongside training the transformer (Unet in other models). It seems crucial for good results, especially with more complex concepts and styles.
	  Validation: Validation images generated during training can be misleading with Flux, often looking very different from inference results. Rely on thorough testing with a variety of prompts and styles during and after training.
	  ComfyUI Updates: Keeping ComfyUI up to date is essential as new features and bug fixes (particularly related to LoRA strength and weight dtype) are frequently released.
	  Tools: SimpleTuner, Ostris' ai-toolkit, and Kohya's sd-scripts are the main training tools. Kohya's scripts now include 2kpr's FFT method. Kijai's ComfyUI-FluxTrainer provides ComfyUI nodes for Kohya's scripts.
	  Current Issues and Unsolved Challenges:
	  Concept Bleed: A persistent problem, particularly in multi-concept training and FFT. Regularization techniques are being explored, but a definitive solution is yet to be found.
	  Validation Image Accuracy: Validation images don't reliably predict inference results.
	  T5 Training Optimization: Still resource-intensive and requires further research.
	  Style Training: Flux seems to favor realism and can be more challenging to train for stylized outputs than previous models. Detailed captions and lower guidance values seem helpful.
	  Overfitting: Can happen quickly, especially with smaller datasets and larger ranks. Careful dataset curation, captioning, and monitoring are crucial.
	  This space is rapidly changing. Stay tuned to the community for the latest developments and optimized training practices.
	  User
	  extend and expand. Give me settings and software suggestions where possible
	  Model
	  111.2s
	  Let's extend and expand on Flux 1D fine-tuning, providing concrete settings and software suggestions:
	  1. LoRA Training:
	  Software: SimpleTuner, Ostris' ai-toolkit, Kohya's sd-scripts (via ComfyUI nodes with ComfyUI-FluxTrainer)
	  Rank/Alpha: Start with 32/32 or 16/16. Experiment with lower ranks (4/4, even 2/2) for styles where subtle changes are desired.
	  LR: 1e-4 is a good default. If training stalls, try 4e-4. If it overfits quickly, try lower values.
	  Optimizer: AdamW is generally recommended. Prodigy can be used for faster convergence.
	  Steps: 2000-3000 steps for likeness, style and character training. Experiment with fewer steps for small, focused datasets. For style training, test at multiple checkpoints as results can oscillate.
	  Captions: Concise and descriptive. Include the type of art and style name. For characters, vary pose, expression, clothing, and background. Example: "portrait photo of ohwx woman in a red dress, standing in a garden"
	  Dataset: 12-20 images for likeness, 300+ for style or character, focusing on diversity.
	  Example config.env (SimpleTuner):
	  export FLUX=true
	  export MODEL_NAME="black-forest-labs/FLUX.1-dev"
	  export MAX_NUM_STEPS=3000
	  export LEARNING_RATE=1e-4
	  export TRAIN_BATCH_SIZE=1 # Or higher if VRAM allows
	  export GRADIENT_ACCUMULATION_STEPS=1
	  export LR_SCHEDULE="constant"
	  export CAPTION_DROPOUT_PROBABILITY=0.05 # Or lower, experiment
	  export OPTIMIZER="adamw_bf16" # or "prodigy"
	  export MIXED_PRECISION="bf16"
	  export TRAINER_EXTRA_ARGS="--lora_rank=32 --lora_alpha=32 --keep_vae_loaded --clip_skip=2"
	  Use code with caution.
	  ComfyUI Workflow for Inference: Use the Load/Save Lora and Model Sampling Flux nodes. Adjust the Lora strength and guidance scale according to the trained LoRA. Consider using the Adaptive Guidance V2 node to control guidance more precisely.
	  2. Full Fine Tuning (FFT):
	  Software: 2kpr's trainer (when released), Kohya's sd-scripts (with caveats regarding stochastic rounding)
	  LR: Much lower than for LoRA, start with 1e-5 or 1e-6 and adjust as needed.
	  Optimizer: Adafactor with stochastic rounding is essential with 2kpr's method.
	  Steps: Potentially fewer steps needed than LoRA due to "overkill" effect. Start with 500-1000 and monitor progress.
	  Captions: Similar to LoRA, detailed and natural language.
	  Dataset: Similar to LoRA, prioritize quality and diversity.
	  Example train.toml (2kpr's trainer - illustrative):
	  model_path = "path/to/your/flux1-dev.safetensors"
	  training_data_path = "path/to/your/training/data"
	  output_dir = "path/to/your/output/directory"
	  batch_size = 1
	  gradient_accumulation_steps = 1
	  learning_rate = 1e-5  # Lower for FFT
	  optimizer_type = "adafactor" 
	  scheduler_type = "constant"
	  max_train_steps = 1000 
	  mixed_precision = "bf16"
	  stochastic_rounding = true 
	  gradient_checkpointing = false # If VRAM allows
	  blocks_to_swap = 0, # If VRAM allows
  - # Fine-Tunes of Merit
  - [cognitivecomputations/dolphin-2.9-llama3-8b · Hugging Face](https://huggingface.co/cognitivecomputations/dolphin-2.9-llama3-8b)
  - This paper was submitted to arXiv on June 17, 2021. It proposes a method called **Low-Rank Adaptation, or LoRA, that reduces the number of trainable parameters for downstream tasks in natural language processing. LoRA injects trainable rank decomposition matrices into each layer of the Transformer architecture, which greatly reduces the number of trainable parameters. LoRA performs on-par or better than fine-tuning in model quality on RoBERTa, DeBERTa, GPT-2, and GPT-3, despite having fewer trainable parameters, a higher training throughput, and, unlike adapters, no additional inference latency (time to output). It also works for image diffusion.
  - [Introducing DoRA, a High-Performing Alternative to LoRA for Fine-Tuning | NVIDIA Technical Blog](https://developer.nvidia.com/blog/introducing-dora-a-high-performing-alternative-to-lora-for-fine-tuning/)
  - [catid/dora: Implementation of DoRA (github.com)](https://github.com/catid/dora) new kid?
  - ![GGd8HodXoAAL27r.png](assets/GGd8HodXoAAL27r_1708191335486_0.png)
  - [LoRA training scripts of the world, unite! (huggingface.co)](https://huggingface.co/blog/sdxl_lora_advanced_script)
  - [[2106.09685] LoRA: Low-Rank Adaptation of Large Language Models (arxiv.org)](https://arxiv.org/abs/2106.09685)
  - Huggingface [[Large Language Models]] [[LoRA DoRA etc]] and [[LoRA DoRA etc]] can be found with a simply filter.
  - [Models
		- Hugging Face](https://huggingface.co/models?pipeline_tag=text-generation&other=lora&sort=trending)
  - From Ahead of AI newsletter
  - 1 Jan, *Astraios: Parameter-Efficient Instruction Tuning Code Large Language Models*, [https://arxiv.org/abs/2401.00788](https://substack.com/redirect/79786d4e-a69d-45d9-8b7b-6b4b8db4774a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *A Comprehensive Study of Knowledge Editing for Large Language Models*, [https://arxiv.org/abs/2401.01286](https://substack.com/redirect/8415b085-728b-445a-8b2e-26748f99f4cd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *LLM Maybe LongLM: Self-Extend LLM Context Window Without Tuning*, [https://arxiv.org/abs/2401.01325](https://substack.com/redirect/80d178e9-9f26-4fd3-b7dc-05b7201ebb18?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models*, [https://arxiv.org/abs/2401.01335](https://substack.com/redirect/ae67c483-c26a-453a-b9c9-927cb26ccc0c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *LLaMA Beyond English: An Empirical Study on Language Capability Transfer*, [https://arxiv.org/abs/2401.01055](https://substack.com/redirect/386a7d59-fd93-4532-9ba1-ca60be2a44de?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jan, *A Mechanistic Understanding of Alignment Algorithms: A Case Study on DPO and Toxicity*, [https://arxiv.org/abs/2401.01967](https://substack.com/redirect/bf66a892-a628-41df-9895-b6ad35a3b36e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jan, *LLaMA Pro: Progressive LLaMA with Block Expansion*, [https://arxiv.org/abs/2401.02415](https://substack.com/redirect/05113354-4602-4d37-9dce-4a9e62e56db3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jan, *LLM Augmented LLMs: Expanding Capabilities through Composition*, [https://arxiv.org/abs/2401.02412](https://substack.com/redirect/61fc2c45-e536-4936-8bbb-91896472a870?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jan, *Blending Is All You Need: Cheaper, Better Alternative to Trillion-Parameters LLM*, [https://arxiv.org/abs/2401.02994](https://substack.com/redirect/728a3b9f-872c-475f-a2fe-3d70477c2e38?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Jan, *DeepSeek LLM: Scaling Open-Source Language Models with Longtermism*, [https://arxiv.org/abs/2401.02954](https://substack.com/redirect/610e990e-7d64-40b6-bc05-b2324ecd7e95?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Jan, *Denoising Vision Transformers*, [https://arxiv.org/abs/2401.02957](https://substack.com/redirect/5eed5e56-c3e8-4eed-90bf-c7a46897a058?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jan, *Soaring from 4K to 400K: Extending LLM’s Context with Activation Beacon*, [https://arxiv.org/abs/2401.03462](https://substack.com/redirect/2716aa8a-b46b-472b-b510-6b5c7a4ec1b8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jan, *Mixtral of Experts*, [https://arxiv.org/abs/2401.04088](https://substack.com/redirect/b56cec75-5d8b-4467-8a81-1ac4a28556c4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jan, *MoE-Mamba: Efficient Selective State Space Models with Mixture of Experts*, [https://arxiv.org/abs/2401.04081](https://substack.com/redirect/ac40afc9-6683-4680-af84-567156ab830c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jan, *A Minimaximalist Approach to Reinforcement Learning from Human Feedback*, [https://arxiv.org/abs/2401.04056](https://substack.com/redirect/e2be01e3-f7f2-476d-a12a-8329b5f94d96?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Jan, *RoSA: Accurate Parameter-Efficient Fine-Tuning via Robust Adaptation*, [https://arxiv.org/abs/2401.04679](https://substack.com/redirect/500c62f1-57ff-4c8e-933e-bce9ee189503?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jan, *Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training*, [https://arxiv.org/abs/2401.05566](https://substack.com/redirect/933f5613-becb-4425-aa2d-d1cbd9851278?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jan, *Transformers are Multi-State RNNs*, [https://arxiv.org/abs/2401.06104](https://substack.com/redirect/e6c46b40-512c-417d-89bd-bdf8192c41b7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jan, *A Closer Look at AUROC and AUPRC under Class Imbalance*, [https://arxiv.org/abs/2401.06091](https://substack.com/redirect/e48406a0-1c08-4477-92fc-52c9154aedb4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jan, *An Experimental Design Framework for Label-Efficient Supervised Finetuning of Large Language Models*, [https://arxiv.org/abs/2401.06692](https://substack.com/redirect/8e8efc39-5a81-4324-8568-97c4be006dad?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *Tuning Language Models by Proxy*, [https://arxiv.org/abs/2401.08565](https://substack.com/redirect/bccdf908-93e9-4a5f-ba08-bcfa0e09c56d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *Scalable Pre-training of Large Autoregressive Image Models*, [https://arxiv.org/abs/2401.08541](https://substack.com/redirect/566e30b9-23ca-459f-8f1d-f551054a7608?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *Code Generation with AlphaCodium: From Prompt Engineering to Flow Engineering*, [https://arxiv.org/abs/2401.08500](https://substack.com/redirect/2695754b-a034-4901-a1a6-fe152d3f238d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *RAG vs Fine-tuning: Pipelines, Tradeoffs, and a Case Study on Agriculture*, [https://arxiv.org/abs/2401.08406](https://substack.com/redirect/a9e02776-d3c8-4f88-b390-d4fffc8f1905?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jan, *ReFT: Reasoning with Reinforced Fine-Tuning*, [https://arxiv.org/abs/2401.08967](https://substack.com/redirect/77379c5d-c672-420d-a1a1-cdfa0bb0c7a5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jan, *DiffusionGPT: LLM-Driven Text-to-Image Generation System*, [https://arxiv.org/abs/2401.10061](https://substack.com/redirect/3d37b8a5-5a83-4c42-a193-6ed04f15a785?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jan, *Self-Rewarding Language Models*, [https://arxiv.org/abs/2401.10020](https://substack.com/redirect/2c8812f3-746b-49d7-bb35-f7777bea9193?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jan, *VMamba: Visual State Space Model*, [https://arxiv.org/abs/2401.10166](https://substack.com/redirect/b1ae3527-1b59-4890-b1a7-fae354be2f00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jan, *Knowledge Fusion of Large Language Models*, [https://arxiv.org/abs/2401.10491](https://substack.com/redirect/53cbb0c3-8314-48be-aa35-d4a493b8bf3a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jan, *SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities*, [https://arxiv.org/abs/2401.12168](https://substack.com/redirect/f122379a-1d40-4c35-91dd-3fbf4384ed37?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jan, *WARM: On the Benefits of Weight Averaged Reward Models*, [https://arxiv.org/abs/2401.12187](https://substack.com/redirect/301db30f-2301-45c0-9b4e-cccf54af80ce?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jan, *Spotting LLMs With Binoculars: Zero-Shot Detection of Machine-Generated Text*, [https://arxiv.org/abs/2401.12070](https://substack.com/redirect/69846790-fce4-490f-ad66-872bb0096113?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jan, *MambaByte: Token-free Selective State Space Model*, [https://arxiv.org/abs/2401.13660](https://substack.com/redirect/5c25a170-d994-4879-b098-761a68fab7ea?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jan, *SpacTor-T5: Pre-training T5 Models with Span Corruption and Replaced Token Detection*, [https://arxiv.org/abs/2401.13160](https://substack.com/redirect/6cb2ee53-e417-4fb9-937c-3fd4e4a716b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jan, *Rethinking Patch Dependence for Masked Autoencoders*, [https://arxiv.org/abs/2401.14391](https://substack.com/redirect/ec8eb548-bcc3-47ae-a584-f8aa3fa01bd9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jan, *Pix2gestalt: Amodal Segmentation by Synthesizing Wholes*, [https://arxiv.org/abs/2401.14398](https://substack.com/redirect/2c049fb8-8fec-4eff-b27e-2afc9b0319d9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jan, *Multimodal Pathway: Improve Transformers with Irrelevant Data from Other Modalities*, [https://arxiv.org/abs/2401.14405](https://substack.com/redirect/34087c7f-b556-4c01-be4d-220f6f7224da?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jan, *EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty*, [https://arxiv.org/abs/2401.15077](https://substack.com/redirect/7c73bf10-bc71-408d-97fa-f75aed7a5e40?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jan, *MoE-LLaVA: Mixture of Experts for Large Vision-Language Models*, [https://arxiv.org/abs/2401.15947](https://substack.com/redirect/2109ca30-087e-4c41-acc7-3e6528b28151?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jan, *Rephrasing the Web: A Recipe for Compute and Data-Efficient Language Modeling*, [https://arxiv.org/abs/2401.16380](https://substack.com/redirect/9a04bcc7-5c7c-4501-8d94-cd39a98fb965?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Jan, *KVQuant: Towards 10 Million Context Length LLM Inference with KV Cache Quantization*, [https://arxiv.org/abs/2401.18079](https://substack.com/redirect/773df725-e457-48fa-84c7-62cc9402a89d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - # Intersection of Semantic and Ontological Knowledge with AI
  - overview of how semantic web technologies, ontologies, and knowledge graphs are being integrated with modern Large Language Models (LLMs), focusing on fine-tuning, Retrieval Augmented Generation (RAG), and large-context multi-shot learning.
  - **Knowledge Injection and Enhancement**
  - **Knowledge Graphs for LLM Pre-Training:** LLMs can be pre-trained on knowledge graphs or structured datasets incorporating ontologies, improving factual knowledge and reasoning abilities.
		- **Example:** K-BERT [1] pre-trained on a knowledge graph.
  - **Retrieval-Augmented Generation (RAG):** LLMs use knowledge graphs to retrieve relevant information and incorporate it into their responses.
		- **Examples:** RAG models [2], Realm [3]
  - **Ontologies for Fine-Tuning:** Ontologies can structure fine-tuning data and guide LLMs towards learning specific domain concepts and relations.
  - **Semantic Grounding and Reasoning**
  - **Formalizing Knowledge:** Ontologies provide a structured foundation for LLMs to represent and reason about concepts and relationships.
		- **Example:** Ontology-guided question answering and reasoning with LLMs [4]
  - **Improving Consistency:** Semantic technologies can help constrain LLM output to be more consistent with domain knowledge and logical rules defined in ontologies.
  - **Explainability:** The use of knowledge graphs and ontologies can contribute to more explainable LLM decisions by tracing the reasoning steps.
  - **Task Adaptation & Generalization**
  - **Semantic Transfer Learning:** Leveraging knowledge encoded in ontologies across different tasks and domains can improve LLM adaptability.
  - **Zero-Shot/Few-Shot Learning:** Knowledge graphs can support LLMs in learning new tasks with limited training examples by providing rich background knowledge.
	  **Challenges and Open Research Areas**
  - **Scalability:** Integrating large-scale knowledge graphs with LLMs poses computational challenges, requiring efficient query and retrieval methods.
  - **Knowledge Representation Gaps:** Ensuring ontologies and knowledge graphs are comprehensive and accurately reflect real-world knowledge is an ongoing effort.
  - **Implicit vs. Explicit Knowledge Alignment:** Balancing LLMs' ability to learn implicit knowledge patterns from text with the explicit knowledge in ontologies and knowledge graphs.
  - **Evaluation:** Developing robust benchmarks and evaluation metrics to assess the effectiveness of semantic integration in LLMs.
  - **References**
  - **K-BERT: Enabling Language Representation with Knowledge Graph** (Liu et al., 2019) https://arxiv.org/abs/1909.07606 https://arxiv.org/abs/1909.07606 https://arxiv.org/abs/1909.07606](https://arxiv.org/abs/1909.07606
  - **Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks** (Lewis et al., 2020). https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401 ([[https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)])
  - **REALM: Retrieval-Augmented Language Model Pre-Training** (Guu et al. 2020) https://arxiv.org/abs/2002.08909](https://arxiv.org/abs/2002.08909 ([[https://arxiv.org/abs/2002.08909](https://arxiv.org/abs/2002.08909)])
  - **Ontology-Guided Semantic Consistency Regularization for Zero-shot Learning** (Zhang et al. 2023) https://arxiv.org/abs/2301.00416](https://arxiv.org/abs/2301.00416 ([[https://arxiv.org/abs/2301.00416](https://arxiv.org/abs/2301.00416)])
  **Let me know if you want to dive deeper into a specific area or explore  additional references!**
  share
  more_vert
  ![profile picture](https://lh3.googleusercontent.com/a/ACg8ocLzn2xPZNE9iWDHK_VhFDTYlcKAl4vZRZUYGX9W0m3ZMO0a=s64-c)
  - Integrating Semantic Web, Knowledge Graphs, and Large Language Models
		- ### Rundiffusion
			- <iframe src="https://rundiffusion.com/" style="width: 800px; height: 600px"></iframe>
		- These interfaces offer a range of options for customizing parameters, fine tuning models, and experimenting with different artistic styles.
  - ### [Crawl4AI](https://github.com/unclecode/crawl4ai)
		- An open-source web crawler and scraper that is designed to be friendly for Large Language Models (LLMs). It creates clean and concise Markdown that is optimized for RAG and fine-tuning applications.
  - ### Marketer-Side Components
		- [[Multimodal]] Product Representation
		- Marketers create rich, multi-modal representations of their products, capturing visual appearance, textual descriptions, and other relevant attributes.
		  These are [[Training and fine tuning]] using AI to generate variations catering to different user preferences and demographics.
  - # Training LoRA and Fine Tuning
  - The Flux 1D fine-tuning discussion reveals a rapidly evolving landscape of techniques and challenges. Here's a distilled summary of the best options and tips from the community, prioritizing newer information:
	  Best Fine-Tuning Options:
	  LoRA (Low-Rank Adaptation): Remains the most popular and accessible method due to lower VRAM requirements and good results. Ranks of 16, 32, and even as low as 4 or 2 are being used successfully, depending on the task. Alpha typically matches the rank.
	  Full Fine Tuning (FFT): Offers potentially superior results, especially for complex concepts and preventing overfitting, but demands significantly more VRAM (around 24GB or more, even with optimizations). 2kpr's method (integrated into Kohya's sd-scripts) allows FFT within 24GB using BF16, stochastic rounding, and fused backpass, with optional block swapping for even lower VRAM.
	  Key Training Considerations and Tips:
	  LR (Learning Rate): For LoRA, 1e-4 seems a good starting point, with some finding success at 4e-4 or even higher depending on rank and optimizer. For FFT, significantly lower LRs are necessary (around 1e-5 to 1e-6 or even lower).
	  Optimizer: AdamW and Prodigy are both used for LoRA, with Prodigy often converging faster but offering less control. Adafactor with stochastic rounding is crucial for FFT with 2kpr's method. CAME is also being explored.
	  Captions: While some early advice suggested minimal or no captions for Flux, the consensus now leans towards detailed, natural language captions, especially for complex subjects and preventing overfitting. Using an LLM like CogVLM or Florence2 is recommended. Avoid overly long, "word salad" captions. Concise and descriptive captions targeting the specific learning objective seem to work best. For style training, include the type of art (painting, photo, etc.) and the style name in the caption. For characters, caption diverse images and avoid overfitting on specific outfits or backgrounds.
	  Dataset: High-quality images are crucial. Flux is sensitive to artifacts, so clean your dataset. For likeness, 12-20 varied images are sufficient. For style, aim for diversity of content, pose, and lighting within the style. For characters, include variations in pose, expression, clothing, and background to maximize flexibility. Too similar images can lead to overfitting. Background removal can be helpful for characters and some styles. Avoid including famous faces in your dataset if you don't intend to train them specifically.
	  Data Augmentation: Flipping is generally safe. Cropping can be helpful, but avoid scaling if possible as it can introduce artifacts.
	  Multi-Resolution Training: While initially recommended, the community now seems divided. It might be helpful for some tasks but can degrade detail and introduce artifacts in others, especially styles. Consider generating only at the highest resolution you plan to use.
	  Regularization: Crucial for preventing overfitting and concept bleed, especially in multi-concept training and FFT. Current methods aren't as effective as with previous models. Using a combination of captioned and uncaptioned regularisation images with varied styles is suggested. More research is needed in this area.
	  T5 Training: Still experimental and resource-intensive. May be useful for enhancing specific concepts or prompt understanding, but requires careful tuning. Combining natural language captions with tags is being explored.
	  CLIP Training: Has become a recommended practice alongside training the transformer (Unet in other models). It seems crucial for good results, especially with more complex concepts and styles.
	  Validation: Validation images generated during training can be misleading with Flux, often looking very different from inference results. Rely on thorough testing with a variety of prompts and styles during and after training.
	  ComfyUI Updates: Keeping ComfyUI up to date is essential as new features and bug fixes (particularly related to LoRA strength and weight dtype) are frequently released.
	  Tools: SimpleTuner, Ostris' ai-toolkit, and Kohya's sd-scripts are the main training tools. Kohya's scripts now include 2kpr's FFT method. Kijai's ComfyUI-FluxTrainer provides ComfyUI nodes for Kohya's scripts.
	  Current Issues and Unsolved Challenges:
	  Concept Bleed: A persistent problem, particularly in multi-concept training and FFT. Regularization techniques are being explored, but a definitive solution is yet to be found.
	  Validation Image Accuracy: Validation images don't reliably predict inference results.
	  T5 Training Optimization: Still resource-intensive and requires further research.
	  Style Training: Flux seems to favor realism and can be more challenging to train for stylized outputs than previous models. Detailed captions and lower guidance values seem helpful.
	  Overfitting: Can happen quickly, especially with smaller datasets and larger ranks. Careful dataset curation, captioning, and monitoring are crucial.
	  This space is rapidly changing. Stay tuned to the community for the latest developments and optimized training practices.
	  User
	  extend and expand. Give me settings and software suggestions where possible
	  Model
	  111.2s
	  Let's extend and expand on Flux 1D fine-tuning, providing concrete settings and software suggestions:
	  1. LoRA Training:
	  Software: SimpleTuner, Ostris' ai-toolkit, Kohya's sd-scripts (via ComfyUI nodes with ComfyUI-FluxTrainer)
	  Rank/Alpha: Start with 32/32 or 16/16. Experiment with lower ranks (4/4, even 2/2) for styles where subtle changes are desired.
	  LR: 1e-4 is a good default. If training stalls, try 4e-4. If it overfits quickly, try lower values.
	  Optimizer: AdamW is generally recommended. Prodigy can be used for faster convergence.
	  Steps: 2000-3000 steps for likeness, style and character training. Experiment with fewer steps for small, focused datasets. For style training, test at multiple checkpoints as results can oscillate.
	  Captions: Concise and descriptive. Include the type of art and style name. For characters, vary pose, expression, clothing, and background. Example: "portrait photo of ohwx woman in a red dress, standing in a garden"
	  Dataset: 12-20 images for likeness, 300+ for style or character, focusing on diversity.
	  Example config.env (SimpleTuner):
	  export FLUX=true
	  export MODEL_NAME="black-forest-labs/FLUX.1-dev"
	  export MAX_NUM_STEPS=3000
	  export LEARNING_RATE=1e-4
	  export TRAIN_BATCH_SIZE=1 # Or higher if VRAM allows
	  export GRADIENT_ACCUMULATION_STEPS=1
	  export LR_SCHEDULE="constant"
	  export CAPTION_DROPOUT_PROBABILITY=0.05 # Or lower, experiment
	  export OPTIMIZER="adamw_bf16" # or "prodigy"
	  export MIXED_PRECISION="bf16"
	  export TRAINER_EXTRA_ARGS="--lora_rank=32 --lora_alpha=32 --keep_vae_loaded --clip_skip=2"
	  Use code with caution.
	  ComfyUI Workflow for Inference: Use the Load/Save Lora and Model Sampling Flux nodes. Adjust the Lora strength and guidance scale according to the trained LoRA. Consider using the Adaptive Guidance V2 node to control guidance more precisely.
	  2. Full Fine Tuning (FFT):
	  Software: 2kpr's trainer (when released), Kohya's sd-scripts (with caveats regarding stochastic rounding)
	  LR: Much lower than for LoRA, start with 1e-5 or 1e-6 and adjust as needed.
	  Optimizer: Adafactor with stochastic rounding is essential with 2kpr's method.
	  Steps: Potentially fewer steps needed than LoRA due to "overkill" effect. Start with 500-1000 and monitor progress.
	  Captions: Similar to LoRA, detailed and natural language.
	  Dataset: Similar to LoRA, prioritize quality and diversity.
	  Example train.toml (2kpr's trainer - illustrative):
	  model_path = "path/to/your/flux1-dev.safetensors"
	  training_data_path = "path/to/your/training/data"
	  output_dir = "path/to/your/output/directory"
	  batch_size = 1
	  gradient_accumulation_steps = 1
	  learning_rate = 1e-5  # Lower for FFT
	  optimizer_type = "adafactor" 
	  scheduler_type = "constant"
	  max_train_steps = 1000 
	  mixed_precision = "bf16"
	  stochastic_rounding = true 
	  gradient_checkpointing = false # If VRAM allows
	  blocks_to_swap = 0, # If VRAM allows
  - # Fine-Tunes of Merit
  - [cognitivecomputations/dolphin-2.9-llama3-8b · Hugging Face](https://huggingface.co/cognitivecomputations/dolphin-2.9-llama3-8b)
  - This paper was submitted to arXiv on June 17, 2021. It proposes a method called **Low-Rank Adaptation, or LoRA, that reduces the number of trainable parameters for downstream tasks in natural language processing. LoRA injects trainable rank decomposition matrices into each layer of the Transformer architecture, which greatly reduces the number of trainable parameters. LoRA performs on-par or better than fine-tuning in model quality on RoBERTa, DeBERTa, GPT-2, and GPT-3, despite having fewer trainable parameters, a higher training throughput, and, unlike adapters, no additional inference latency (time to output). It also works for image diffusion.
  - [Introducing DoRA, a High-Performing Alternative to LoRA for Fine-Tuning | NVIDIA Technical Blog](https://developer.nvidia.com/blog/introducing-dora-a-high-performing-alternative-to-lora-for-fine-tuning/)
  - [catid/dora: Implementation of DoRA (github.com)](https://github.com/catid/dora) new kid?
  - ![GGd8HodXoAAL27r.png](assets/GGd8HodXoAAL27r_1708191335486_0.png)
  - [LoRA training scripts of the world, unite! (huggingface.co)](https://huggingface.co/blog/sdxl_lora_advanced_script)
  - [[2106.09685] LoRA: Low-Rank Adaptation of Large Language Models (arxiv.org)](https://arxiv.org/abs/2106.09685)
  - Huggingface [[Large Language Models]] [[LoRA DoRA etc]] and [[LoRA DoRA etc]] can be found with a simply filter.
  - [Models
		- Hugging Face](https://huggingface.co/models?pipeline_tag=text-generation&other=lora&sort=trending)
  - From Ahead of AI newsletter
  - 1 Jan, *Astraios: Parameter-Efficient Instruction Tuning Code Large Language Models*, [https://arxiv.org/abs/2401.00788](https://substack.com/redirect/79786d4e-a69d-45d9-8b7b-6b4b8db4774a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *A Comprehensive Study of Knowledge Editing for Large Language Models*, [https://arxiv.org/abs/2401.01286](https://substack.com/redirect/8415b085-728b-445a-8b2e-26748f99f4cd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *LLM Maybe LongLM: Self-Extend LLM Context Window Without Tuning*, [https://arxiv.org/abs/2401.01325](https://substack.com/redirect/80d178e9-9f26-4fd3-b7dc-05b7201ebb18?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *Self-Play Fine-Tuning Converts Weak Language Models to Strong Language Models*, [https://arxiv.org/abs/2401.01335](https://substack.com/redirect/ae67c483-c26a-453a-b9c9-927cb26ccc0c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Jan, *LLaMA Beyond English: An Empirical Study on Language Capability Transfer*, [https://arxiv.org/abs/2401.01055](https://substack.com/redirect/386a7d59-fd93-4532-9ba1-ca60be2a44de?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Jan, *A Mechanistic Understanding of Alignment Algorithms: A Case Study on DPO and Toxicity*, [https://arxiv.org/abs/2401.01967](https://substack.com/redirect/bf66a892-a628-41df-9895-b6ad35a3b36e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jan, *LLaMA Pro: Progressive LLaMA with Block Expansion*, [https://arxiv.org/abs/2401.02415](https://substack.com/redirect/05113354-4602-4d37-9dce-4a9e62e56db3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jan, *LLM Augmented LLMs: Expanding Capabilities through Composition*, [https://arxiv.org/abs/2401.02412](https://substack.com/redirect/61fc2c45-e536-4936-8bbb-91896472a870?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 4 Jan, *Blending Is All You Need: Cheaper, Better Alternative to Trillion-Parameters LLM*, [https://arxiv.org/abs/2401.02994](https://substack.com/redirect/728a3b9f-872c-475f-a2fe-3d70477c2e38?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Jan, *DeepSeek LLM: Scaling Open-Source Language Models with Longtermism*, [https://arxiv.org/abs/2401.02954](https://substack.com/redirect/610e990e-7d64-40b6-bc05-b2324ecd7e95?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Jan, *Denoising Vision Transformers*, [https://arxiv.org/abs/2401.02957](https://substack.com/redirect/5eed5e56-c3e8-4eed-90bf-c7a46897a058?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Jan, *Soaring from 4K to 400K: Extending LLM’s Context with Activation Beacon*, [https://arxiv.org/abs/2401.03462](https://substack.com/redirect/2716aa8a-b46b-472b-b510-6b5c7a4ec1b8?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jan, *Mixtral of Experts*, [https://arxiv.org/abs/2401.04088](https://substack.com/redirect/b56cec75-5d8b-4467-8a81-1ac4a28556c4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jan, *MoE-Mamba: Efficient Selective State Space Models with Mixture of Experts*, [https://arxiv.org/abs/2401.04081](https://substack.com/redirect/ac40afc9-6683-4680-af84-567156ab830c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Jan, *A Minimaximalist Approach to Reinforcement Learning from Human Feedback*, [https://arxiv.org/abs/2401.04056](https://substack.com/redirect/e2be01e3-f7f2-476d-a12a-8329b5f94d96?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Jan, *RoSA: Accurate Parameter-Efficient Fine-Tuning via Robust Adaptation*, [https://arxiv.org/abs/2401.04679](https://substack.com/redirect/500c62f1-57ff-4c8e-933e-bce9ee189503?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 10 Jan, *Sleeper Agents: Training Deceptive LLMs that Persist Through Safety Training*, [https://arxiv.org/abs/2401.05566](https://substack.com/redirect/933f5613-becb-4425-aa2d-d1cbd9851278?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jan, *Transformers are Multi-State RNNs*, [https://arxiv.org/abs/2401.06104](https://substack.com/redirect/e6c46b40-512c-417d-89bd-bdf8192c41b7?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Jan, *A Closer Look at AUROC and AUPRC under Class Imbalance*, [https://arxiv.org/abs/2401.06091](https://substack.com/redirect/e48406a0-1c08-4477-92fc-52c9154aedb4?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Jan, *An Experimental Design Framework for Label-Efficient Supervised Finetuning of Large Language Models*, [https://arxiv.org/abs/2401.06692](https://substack.com/redirect/8e8efc39-5a81-4324-8568-97c4be006dad?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *Tuning Language Models by Proxy*, [https://arxiv.org/abs/2401.08565](https://substack.com/redirect/bccdf908-93e9-4a5f-ba08-bcfa0e09c56d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *Scalable Pre-training of Large Autoregressive Image Models*, [https://arxiv.org/abs/2401.08541](https://substack.com/redirect/566e30b9-23ca-459f-8f1d-f551054a7608?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *Code Generation with AlphaCodium: From Prompt Engineering to Flow Engineering*, [https://arxiv.org/abs/2401.08500](https://substack.com/redirect/2695754b-a034-4901-a1a6-fe152d3f238d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Jan, *RAG vs Fine-tuning: Pipelines, Tradeoffs, and a Case Study on Agriculture*, [https://arxiv.org/abs/2401.08406](https://substack.com/redirect/a9e02776-d3c8-4f88-b390-d4fffc8f1905?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Jan, *ReFT: Reasoning with Reinforced Fine-Tuning*, [https://arxiv.org/abs/2401.08967](https://substack.com/redirect/77379c5d-c672-420d-a1a1-cdfa0bb0c7a5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jan, *DiffusionGPT: LLM-Driven Text-to-Image Generation System*, [https://arxiv.org/abs/2401.10061](https://substack.com/redirect/3d37b8a5-5a83-4c42-a193-6ed04f15a785?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jan, *Self-Rewarding Language Models*, [https://arxiv.org/abs/2401.10020](https://substack.com/redirect/2c8812f3-746b-49d7-bb35-f7777bea9193?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Jan, *VMamba: Visual State Space Model*, [https://arxiv.org/abs/2401.10166](https://substack.com/redirect/b1ae3527-1b59-4890-b1a7-fae354be2f00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Jan, *Knowledge Fusion of Large Language Models*, [https://arxiv.org/abs/2401.10491](https://substack.com/redirect/53cbb0c3-8314-48be-aa35-d4a493b8bf3a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jan, *SpatialVLM: Endowing Vision-Language Models with Spatial Reasoning Capabilities*, [https://arxiv.org/abs/2401.12168](https://substack.com/redirect/f122379a-1d40-4c35-91dd-3fbf4384ed37?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jan, *WARM: On the Benefits of Weight Averaged Reward Models*, [https://arxiv.org/abs/2401.12187](https://substack.com/redirect/301db30f-2301-45c0-9b4e-cccf54af80ce?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Jan, *Spotting LLMs With Binoculars: Zero-Shot Detection of Machine-Generated Text*, [https://arxiv.org/abs/2401.12070](https://substack.com/redirect/69846790-fce4-490f-ad66-872bb0096113?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jan, *MambaByte: Token-free Selective State Space Model*, [https://arxiv.org/abs/2401.13660](https://substack.com/redirect/5c25a170-d994-4879-b098-761a68fab7ea?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 24 Jan, *SpacTor-T5: Pre-training T5 Models with Span Corruption and Replaced Token Detection*, [https://arxiv.org/abs/2401.13160](https://substack.com/redirect/6cb2ee53-e417-4fb9-937c-3fd4e4a716b2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jan, *Rethinking Patch Dependence for Masked Autoencoders*, [https://arxiv.org/abs/2401.14391](https://substack.com/redirect/ec8eb548-bcc3-47ae-a584-f8aa3fa01bd9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jan, *Pix2gestalt: Amodal Segmentation by Synthesizing Wholes*, [https://arxiv.org/abs/2401.14398](https://substack.com/redirect/2c049fb8-8fec-4eff-b27e-2afc9b0319d9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 25 Jan, *Multimodal Pathway: Improve Transformers with Irrelevant Data from Other Modalities*, [https://arxiv.org/abs/2401.14405](https://substack.com/redirect/34087c7f-b556-4c01-be4d-220f6f7224da?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Jan, *EAGLE: Speculative Sampling Requires Rethinking Feature Uncertainty*, [https://arxiv.org/abs/2401.15077](https://substack.com/redirect/7c73bf10-bc71-408d-97fa-f75aed7a5e40?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jan, *MoE-LLaVA: Mixture of Experts for Large Vision-Language Models*, [https://arxiv.org/abs/2401.15947](https://substack.com/redirect/2109ca30-087e-4c41-acc7-3e6528b28151?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 29 Jan, *Rephrasing the Web: A Recipe for Compute and Data-Efficient Language Modeling*, [https://arxiv.org/abs/2401.16380](https://substack.com/redirect/9a04bcc7-5c7c-4501-8d94-cd39a98fb965?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 31 Jan, *KVQuant: Towards 10 Million Context Length LLM Inference with KV Cache Quantization*, [https://arxiv.org/abs/2401.18079](https://substack.com/redirect/773df725-e457-48fa-84c7-62cc9402a89d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - # Intersection of Semantic and Ontological Knowledge with AI
  - overview of how semantic web technologies, ontologies, and knowledge graphs are being integrated with modern Large Language Models (LLMs), focusing on fine-tuning, Retrieval Augmented Generation (RAG), and large-context multi-shot learning.
  - **Knowledge Injection and Enhancement**
  - **Knowledge Graphs for LLM Pre-Training:** LLMs can be pre-trained on knowledge graphs or structured datasets incorporating ontologies, improving factual knowledge and reasoning abilities.
		- **Example:** K-BERT [1] pre-trained on a knowledge graph.
  - **Retrieval-Augmented Generation (RAG):** LLMs use knowledge graphs to retrieve relevant information and incorporate it into their responses.
		- **Examples:** RAG models [2], Realm [3]
  - **Ontologies for Fine-Tuning:** Ontologies can structure fine-tuning data and guide LLMs towards learning specific domain concepts and relations.
  - **Semantic Grounding and Reasoning**
  - **Formalizing Knowledge:** Ontologies provide a structured foundation for LLMs to represent and reason about concepts and relationships.
		- **Example:** Ontology-guided question answering and reasoning with LLMs [4]
  - **Improving Consistency:** Semantic technologies can help constrain LLM output to be more consistent with domain knowledge and logical rules defined in ontologies.
  - **Explainability:** The use of knowledge graphs and ontologies can contribute to more explainable LLM decisions by tracing the reasoning steps.
  - **Task Adaptation & Generalization**
  - **Semantic Transfer Learning:** Leveraging knowledge encoded in ontologies across different tasks and domains can improve LLM adaptability.
  - **Zero-Shot/Few-Shot Learning:** Knowledge graphs can support LLMs in learning new tasks with limited training examples by providing rich background knowledge.
	  **Challenges and Open Research Areas**
  - **Scalability:** Integrating large-scale knowledge graphs with LLMs poses computational challenges, requiring efficient query and retrieval methods.
  - **Knowledge Representation Gaps:** Ensuring ontologies and knowledge graphs are comprehensive and accurately reflect real-world knowledge is an ongoing effort.
  - **Implicit vs. Explicit Knowledge Alignment:** Balancing LLMs' ability to learn implicit knowledge patterns from text with the explicit knowledge in ontologies and knowledge graphs.
  - **Evaluation:** Developing robust benchmarks and evaluation metrics to assess the effectiveness of semantic integration in LLMs.
  - **References**
  - **K-BERT: Enabling Language Representation with Knowledge Graph** (Liu et al., 2019) https://arxiv.org/abs/1909.07606 https://arxiv.org/abs/1909.07606 https://arxiv.org/abs/1909.07606](https://arxiv.org/abs/1909.07606
  - **Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks** (Lewis et al., 2020). https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401 ([[https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)])
  - **REALM: Retrieval-Augmented Language Model Pre-Training** (Guu et al. 2020) https://arxiv.org/abs/2002.08909](https://arxiv.org/abs/2002.08909 ([[https://arxiv.org/abs/2002.08909](https://arxiv.org/abs/2002.08909)])
  - **Ontology-Guided Semantic Consistency Regularization for Zero-shot Learning** (Zhang et al. 2023) https://arxiv.org/abs/2301.00416](https://arxiv.org/abs/2301.00416 ([[https://arxiv.org/abs/2301.00416](https://arxiv.org/abs/2301.00416)])
  **Let me know if you want to dive deeper into a specific area or explore  additional references!**
  share
  more_vert
  ![profile picture](https://lh3.googleusercontent.com/a/ACg8ocLzn2xPZNE9iWDHK_VhFDTYlcKAl4vZRZUYGX9W0m3ZMO0a=s64-c)
  - Integrating Semantic Web, Knowledge Graphs, and Large Language Models
		- ### Rundiffusion
			- <iframe src="https://rundiffusion.com/" style="width: 800px; height: 600px"></iframe>
		- These interfaces offer a range of options for customizing parameters, fine tuning models, and experimenting with different artistic styles.
  - # Intersection of Semantic and Ontological Knowledge with AI
  - overview of how semantic web technologies, ontologies, and knowledge graphs are being integrated with modern Large Language Models (LLMs), focusing on fine-tuning, Retrieval Augmented Generation (RAG), and large-context multi-shot learning.
  - **Knowledge Injection and Enhancement**
		- **Examples:** RAG models [2], Realm [3]
  - **Ontologies for Fine-Tuning:** Ontologies can structure fine-tuning data and guide LLMs towards learning specific domain concepts and relations.
  - **Semantic Grounding and Reasoning**
  - **Explainability:** The use of knowledge graphs and ontologies can contribute to more explainable LLM decisions by tracing the reasoning steps.
  - **Task Adaptation & Generalization**
  - **Semantic Transfer Learning:** Leveraging knowledge encoded in ontologies across different tasks and domains can improve LLM adaptability.
  - **Scalability:** Integrating large-scale knowledge graphs with LLMs poses computational challenges, requiring efficient query and retrieval methods.
  - **Knowledge Representation Gaps:** Ensuring ontologies and knowledge graphs are comprehensive and accurately reflect real-world knowledge is an ongoing effort.
  - **Implicit vs. Explicit Knowledge Alignment:** Balancing LLMs' ability to learn implicit knowledge patterns from text with the explicit knowledge in ontologies and knowledge graphs.
  - **Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks** (Lewis et al., 2020). https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401 ([[https://arxiv.org/abs/2005.11401](https://arxiv.org/abs/2005.11401)])
  - **REALM: Retrieval-Augmented Language Model Pre-Training** (Guu et al. 2020) https://arxiv.org/abs/2002.08909](https://arxiv.org/abs/2002.08909 ([[https://arxiv.org/abs/2002.08909](https://arxiv.org/abs/2002.08909)])
  - **Ontology-Guided Semantic Consistency Regularization for Zero-shot Learning** (Zhang et al. 2023) https://arxiv.org/abs/2301.00416](https://arxiv.org/abs/2301.00416 ([[https://arxiv.org/abs/2301.00416](https://arxiv.org/abs/2301.00416)])
  share
  more_vert
  - Case studies in explainability [25]
		- ### Rundiffusion
			- <iframe src="https://rundiffusion.com/" style="width: 800px; height: 600px"></iframe>
		- These interfaces offer a range of options for customizing parameters, fine tuning models, and experimenting with different artistic styles.
  - ### Biomedical:
			- Data Collection and Storage
			- Live Connection and Model Tuning
			- Open-Source Collaboration
		- ### Rundiffusion
			- <iframe src="https://rundiffusion.com/" style="width: 800px; height: 600px"></iframe>
		- These interfaces offer a range of options for customizing parameters, fine tuning models, and experimenting with different artistic styles.
			- Generating images of specific objects or individuals,
			- Developing models for specialised domains like  [[Fashion]]  or architectural design.
  - ### Additional Training & Fine-tuning Resources
  - **Mesh TensorFlow for Distributed Training**: A tool for distributing computation across different hardware to enhance training efficiency. [Mesh TensorFlow](https://github.com/tensorflow/mesh)
		- *Aims to simplify the transition from single-device to distributed model training, supporting more efficient utilization of computing resources.*
  - **LoRA Training Insights**: Discusses the benefits and application of Low-Rank Adaptation (LoRA) for efficient model fine-tuning. [LoRA Training Insights](https://lightning.ai/pages/community/lora-insights/)
  - **Can AI-Generated Text be Reliably Detected?**: Addresses the critical question of distinguishing between human and AI-generated text. [AI-Generated Text Detection Study](https://arxiv.org/abs/2303.11156)
  - *This paper delves into the challenges and methodologies involved in detecting AI-generated text, offering insights into the reliability of current detection techniques.*
  - **Innovative Tools for Personalized Customer Experiences**: LLMs are increasingly used to create tools that offer personalized interactions for users, enhancing ecommerce experiences and facilitating efficient email management.
  - ## **February 2024**
  - 1 Feb, *Efficient Exploration for LLMs*, [https://arxiv.org/abs/2402.00396](https://substack.com/redirect/6337bcce-9da1-46cb-ac0e-d348c51a4174?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Feb, *OLMo: Accelerating the Science of Language Models*, [https://arxiv.org/abs/2402.00838](https://substack.com/redirect/0190868f-d342-4489-b2ff-79391083472f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Feb, *Tiny Titans: Can Smaller Large Language Models Punch Above Their Weight in the Real World for Meeting Summarization?*, [https://arxiv.org/abs/2402.00841](https://substack.com/redirect/4dcc03d5-f11f-48f3-89cc-95d1387f4752?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 1 Feb, *Repeat After Me: Transformers are Better than State Space Models at Copying*, [https://arxiv.org/abs/2402.01032](https://substack.com/redirect/fc724550-573b-41ff-aef9-bd76a2a6ffc2?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Feb, *LiPO: Listwise Preference Optimization through Learning-to-Rank*, [https://arxiv.org/abs/2402.01878](https://substack.com/redirect/f24801af-42c8-4051-bb6b-98b32511bf9c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 2 Feb, *FindingEmo: An Image Dataset for Emotion Recognition in the Wild*, [https://arxiv.org/abs/2402.01355](https://substack.com/redirect/789d0c85-6cae-4c2a-8c66-aac5b6df5e00?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 3 Feb, *More Agents Is All You Need*, [https://arxiv.org/abs/2402.05120](https://substack.com/redirect/ed2fc1c5-c2df-4bb7-8d71-920bf06383c3?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 5 Feb, *DeepSeekMath: Pushing the Limits of Mathematical Reasoning in Open Language Models*, [https://arxiv.org/abs/2402.03300](https://substack.com/redirect/0d4eed8d-78a8-4f6e-bf73-d8bce805848c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Feb, *MobileVLM V2: Faster and Stronger Baseline for Vision Language Model*, [https://arxiv.org/abs/2402.03766](https://substack.com/redirect/23f525b9-daaf-46cb-bf8f-7a6fc93648ad?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Feb, *A Phase Transition Between Positional and Semantic Learning in a Solvable Model of Dot-Product Attention*, [https://arxiv.org/abs/2402.03902](https://substack.com/redirect/11339467-8ea5-4416-9408-dbef856bd64c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Feb, *Scaling Laws for Downstream Task Performance of Large Language Models*, [https://arxiv.org/abs/2402.04177](https://substack.com/redirect/14bdf9b0-2d2c-4628-93a7-46a8dac8d393?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Feb, *MOMENT: A Family of Open Time-series Foundation Models*, [https://arxiv.org/abs/2402.03885](https://substack.com/redirect/a29596ff-57d9-44c4-9763-984ac22aca5b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Feb, *Vision Superalignment: Weak-to-Strong Generalization for Vision Foundation Models*, [https://arxiv.org/abs/2402.03749](https://substack.com/redirect/41d4401a-7bad-443e-b9d8-62a5e2f6834f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 6 Feb, *Self-Discover: Large Language Models Self-Compose Reasoning Structures*, [https://arxiv.org/abs/2402.03620](https://substack.com/redirect/6ba4ac1a-b4fa-463c-8279-65ce5cbdfa9b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Feb, *Grandmaster-Level Chess Without Search*, [https://arxiv.org/abs/2402.04494](https://substack.com/redirect/ecf1d304-6b4c-4379-8f3f-98c8cea2df80?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 7 Feb, *Direct Language Model Alignment from Online AI Feedback*, [https://arxiv.org/abs/2402.04792](https://substack.com/redirect/fea30f6f-7126-4e11-a698-a79d30992066?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 8 Feb, *Buffer Overflow in Mixture of Experts*, [https://arxiv.org/abs/2402.05526](https://substack.com/redirect/1e111953-e08d-4231-b194-dee4e4f92c64?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 9 Feb, *The Boundary of Neural Network Trainability is Fractal*, [https://arxiv.org/abs/2402.06184](https://substack.com/redirect/0d7e0d57-04df-4249-80c4-a2118aefe303?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 11 Feb, *ODIN: Disentangled Reward Mitigates Hacking in RLHF*, [https://arxiv.org/abs/2402.07319](https://substack.com/redirect/87e1a8ab-585b-40f0-b137-c69d08a13c78?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Feb, *Policy Improvement using Language Feedback Models*, [https://arxiv.org/abs/2402.07876](https://substack.com/redirect/3928654c-28a1-4ea7-933a-661a664d7f6f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Feb, *Scaling Laws for Fine-Grained Mixture of Experts*, [https://arxiv.org/abs/2402.07871](https://substack.com/redirect/264b2b21-99ab-4c1f-84a1-c63b2ef96161?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Feb, *Aya Model: An Instruction Finetuned Open-Access Multilingual Language Model*, [https://arxiv.org/abs/2402.07610](https://substack.com/redirect/7fddb107-1885-42e1-abfe-a97f09e0d94b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Feb, *Step-On-Feet Tuning: Scaling Self-Alignment of LLMs via Bootstrapping*, [https://arxiv.org/abs/2402.07610](https://substack.com/redirect/7fddb107-1885-42e1-abfe-a97f09e0d94b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 12 Feb, *Suppressing Pink Elephants with Direct Principle Feedback*, [https://arxiv.org/abs/2402.07896](https://substack.com/redirect/706bc856-06df-4858-b39f-fee51403dbc5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Feb, *World Model on Million-Length Video And Language With RingAttention*, [https://arxiv.org/abs/2402.08268](https://substack.com/redirect/e22fb3c7-bba5-4382-9d9a-ed25b9ce60a5?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 13 Feb, *Mixtures of Experts Unlock Parameter Scaling for Deep RL*, [https://arxiv.org/abs/2402.08609](https://substack.com/redirect/d9ec89b7-9d9d-4bd1-b58d-08299e989fdd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Feb, *DoRA: Weight-Decomposed Low-Rank Adaptation*, [https://arxiv.org/abs/2402.09353](https://substack.com/redirect/69f38313-caec-475f-9616-cbefd1e3c879?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 14 Feb, *Transformers Can Achieve Length Generalization But Not Robustly*, [https://arxiv.org/abs/2402.09371](https://substack.com/redirect/7469cd7a-613a-4d31-be69-9d93de53fc23?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Feb, *BASE TTS: Lessons From Building a Billion-Parameter Text-to-Speech Model on 100K Hours of Data*, [https://arxiv.org/abs/2402.08093](https://substack.com/redirect/111cbecd-5de9-485c-a26a-1a6a5e17afc0?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Feb, *Recovering the Pre-Fine-Tuning Weights of Generative Models*, [https://arxiv.org/abs/2402.10208](https://substack.com/redirect/5682bb1d-d66e-4d50-8c49-977eeeb86c49?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 15 Feb, *Generative Representational Instruction Tuning*, [https://arxiv.org/abs/2402.09906](https://substack.com/redirect/d71e8c90-0e4e-4eb9-b1b0-db982af62371?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 16 Feb, *FinTral: A Family of GPT-4 Level Multimodal Financial Large Language Models*, [https://arxiv.org/abs/2402.10986](https://substack.com/redirect/a8906a2a-e9ff-4fa0-803e-6d8cb180090c?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 17 Feb, *OneBit: Towards Extremely Low-bit Large Language Models*, [https://arxiv.org/abs/2402.11295](https://substack.com/redirect/bd24335f-0818-429c-8c73-611f51a61366?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 18 Feb, *LongAgent: Scaling Language Models to 128k Context through Multi-Agent Collaboration*, [https://arxiv.org/abs/2402.11550](https://substack.com/redirect/ddb3e5fc-4a46-423b-b534-db18a1016ae9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Feb, *Reformatted Alignment*, [https://arxiv.org/abs/2402.12219](https://substack.com/redirect/5ab208b3-5479-4ab6-9aa2-b7b003998443?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Feb, *AnyGPT: Unified Multimodal LLM with Discrete Sequence Modeling*, [https://arxiv.org/abs/2402.12226](https://substack.com/redirect/c5f72d21-b502-48b4-9bea-0fee871e9c0e?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Feb, *Towards Cross-Tokenizer Distillation: the Universal Logit Distillation Loss for LLMs*, [https://arxiv.org/abs/2402.12030](https://substack.com/redirect/b4aeb6df-c9b1-48a2-9e01-d1cdca16a74b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 19 Feb, *LoRA+: Efficient Low Rank Adaptation of Large Models*, [https://arxiv.org/abs/2402.12354](https://substack.com/redirect/43aa1e82-17f1-4067-a5b5-aabfaa37c8bd?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 20 Feb, *Neural Network Diffusion*, [https://arxiv.org/abs/2402.13144](https://substack.com/redirect/0561a8f8-c92a-4d5f-a561-ab61adf04f7f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Feb, *YOLOv9: Learning What You Want to Learn Using Programmable Gradient Information*, [https://arxiv.org/abs/2402.13616](https://substack.com/redirect/cb4428de-49c3-4daa-ba7b-5cc112d56b73?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Feb, *LongRoPE: Extending LLM Context Window Beyond 2 Million Tokens*, [https://arxiv.org/abs/2402.13753](https://substack.com/redirect/9d13cb3f-dde5-4605-90a7-c987f49c2c70?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 21 Feb, *Large Language Models for Data Annotation: A Survey*, [https://arxiv.org/abs/2402.13446](https://substack.com/redirect/70d95e24-3ef2-4626-b92d-046bd0e2ce21?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Feb, *TinyLLaVA: A Framework of Small-scale Large Multimodal Models*, [https://arxiv.org/abs/2402.14289](https://substack.com/redirect/a2eedacd-b0af-466a-87dd-ef019f68d307?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 22 Feb, *Back to Basics: Revisiting REINFORCE Style Optimization for Learning from Human Feedback in LLMs*, [https://arxiv.org/abs/2402.14740](https://substack.com/redirect/3b9cc140-a59c-4cc3-b7c9-a0593b19b25b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Mar, *The Unreasonable Ineffectiveness of the Deeper Layers*, [https://arxiv.org/abs/2403.17887](https://substack.com/redirect/0a715f4c-dfed-4497-917a-3e643cd0e30f?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Mar, *BioMedLM: A 2.7B Parameter Language Model Trained On Biomedical Text*, [https://arxiv.org/abs/2403.18421](https://substack.com/redirect/9887f35d-de62-48ec-811a-f7eda02ae04b?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Mar, *ViTAR: Vision Transformer with Any Resolution*, [https://arxiv.org/abs/2403.18361](https://substack.com/redirect/f5a8f5fc-6e93-46cb-b335-10d46e7878cc?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Mar, *Long-form Factuality in Large Language Models*, [https://arxiv.org/abs/2403.18802](https://substack.com/redirect/c59b2db5-e4d8-498f-b3e1-2bdc3ea6ca07?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 27 Mar, *Mini-Gemini: Mining the Potential of Multi-modality Vision Language Models*, [https://arxiv.org/abs/2403.18814](https://substack.com/redirect/b0a94af2-e141-4118-98b2-b0b549836ee9?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Mar, *LISA: Layerwise Importance Sampling for Memory-Efficient Large Language Model Fine-Tuning*, [https://arxiv.org/abs/2403.17919](https://substack.com/redirect/44aeb66f-8e1e-4a9b-8ae1-351393348b8a?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 26 Mar, *Mechanistic Design and Scaling of Hybrid Architectures*, [https://arxiv.org/abs/2403.17844](https://substack.com/redirect/6b2c74e7-370c-4595-9685-ebc886108665?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Mar, *MagicLens: Self-Supervised Image Retrieval with Open-Ended Instructions*, [https://arxiv.org/abs/2403.19651](https://substack.com/redirect/3fee28cb-79c1-4251-b00d-ad559623e003?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - 28 Mar, *Model Stock: All We Need Is Just a Few Fine-Tuned Models*, [https://arxiv.org/abs/2403.19522](https://substack.com/redirect/8a9297ca-a6de-4079-9b45-ef221458494d?j=eyJ1IjoiMmRuamR0In0.FbVk83ULjBfeYOuNAZl_CpjTIVAnXyHBXQJHR4cbAoA)
  - ### Additional Training & Fine-tuning Resources
  - **Mesh TensorFlow for Distributed Training**: A tool for distributing computation across different hardware to enhance training efficiency. [Mesh TensorFlow](https://github.com/tensorflow/mesh)
		- *Enables sophisticated distribution strategies, optimizing the use of hardware resources during model training.*
  - **Colossal-AI for Easy Distributed Training**: Provides user-friendly tools for distributed deep learning, making it simpler to scale up training processes. [Colossal-AI](https://colossalai.org/)
		- *Aims to simplify the transition from single-device to distributed model training, supporting more efficient utilization of computing resources.*
  - **LoRA Training Insights**: Discusses the benefits and application of Low-Rank Adaptation (LoRA) for efficient model fine-tuning. [LoRA Training Insights](https://lightning.ai/pages/community/lora-insights/)
		- *Provides a deep dive into how LoRA can be utilized to fine-tune models efficiently, offering significant insights into the process.*
  - **LLM Zoo**: A collection of various LLMs to explore and compare their capabilities. [LLMZoo GitHub](https://github.com/FreedomIntelligence/LLMZoo)
  - *A unique repository that provides access to a wide range of LLMs, facilitating exploration, comparison, and understanding of different models' functionalities and performance.*
  - **Can AI-Generated Text be Reliably Detected?**: Addresses the critical question of distinguishing between human and AI-generated text. [AI-Generated Text Detection Study](https://arxiv.org/abs/2303.11156)
  - *This paper delves into the challenges and methodologies involved in detecting AI-generated text, offering insights into the reliability of current detection techniques.*
  - **Innovative Tools for Personalized Customer Experiences**: LLMs are increasingly used to create tools that offer personalized interactions for users, enhancing ecommerce experiences and facilitating efficient email management.
  - [CustomGPT](https://customgpt.ai)
  - [NodePad](https://nodepad.space/)
		- An LLM-assisted brainstorming tool that helps users organize their ideas visually. Highlights the creative use of LLMs in supporting individual thought processes and ideation.
  - ### Training & Fine-tuning
		- *BMTrain presents an efficient framework for training large models, focusing on distributed training while maintaining simplicity in code structure, making it accessible for large-scale model training.*
  - ## Controlnet
  - https://huggingface.co/XLabs-AI/flux-controlnet-collections [[ControlNet and Similar Spatial Conditioning Systems]]
  - https://civitai.com/models/731324 [[Flux.1]] Social Media Image Generator [[Death of the Internet]]
  - [docs/docs/getting-started/env-configuration.md at improve-flux-docs · JohnTheNerd/docs (github.com)](https://github.com/JohnTheNerd/docs/blob/improve-flux-docs/docs/getting-started/env-configuration.md) [[Flux.1]] [[Node-Based Diffusion Pipeline Interface]] [[Open Webui and Pipelines]]
  - https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[flux]]
  - [city96/ComfyUI-GGUF: GGUF Quantization support for native ComfyUI models (github.com)](https://github.com/city96/ComfyUI-GGUF) [[Node-Based Diffusion Pipeline Interface]] [[Model Optimisation and Performance]] [[Flux.1]]
		- [Excuse me? GGUF quants are possible on Flux now! : r/StableDiffusion (reddit.com)](https://www.reddit.com/r/StableDiffusion/comments/1eslcg0/excuse_me_gguf_quants_are_possible_on_flux_now/)
  - https://github.com/comfyanonymous/ComfyUI/commit/d0b7ab88ba0f1cb4ab16e0425f5229e60c934536 [[Flux.1]] [[Model Optimisation and Performance]]
  - https://medium.com/@furkangozukara/ultimate-flux-lora-training-tutorial-windows-and-cloud-deployment-abb72f21cbf8 [[Flux.1]] [[LoRA]]
  - https://github.com/ToTheBeginning/PuLID [[Face Swap]] [[Flux.1]] [[style transfer]]
		- https://huggingface.co/spaces/yanze/PuLID-FLUX
		- ![image.png](assets/image_1726490585592_0.png)
  - https://www.reddit.com/r/StableDiffusion/comments/1fkeei6/a_simple_flux_pipeline_workflow/
  - https://www.reddit.com/r/FluxAI/comments/1f1uhnm/new_flux_controlnet_union_model_just_dropped/
  - https://www.reddit.com/r/comfyui/comments/1es8r9o/flux_controlnet_depth_canny_comfyui/?utm_source=diffusiondigest.beehiiv.com&utm_medium=referral&utm_campaign=trump-ai-pics-procreate-says-human-only-this-week-in-ai-art
  - https://www.reddit.com/r/comfyui/comments/1ezlzsp/flux_controlnets_3d_scenes_in_playbook_web_editor/ [[visionflow]]
  - https://huggingface.co/jbilcke-hf/flux-dev-panorama-lora-2
  - https://www.reddit.com/r/StableDiffusion/comments/1esz4hj/flux_hdr_seamless_panorama_links_in_comment/
  - https://www.reddit.com/r/StableDiffusion/comments/1ex64jj/i_made_an_fp8_implementation_of_flux_which_gets/
  - https://www.reddit.com/r/FluxAI/comments/1esyy3u/flux_dev_workflow_v20_for_loras_face_detailer_and/
  - https://huggingface.co/spaces/Gradio-Community/Text-guided-Flux-Inpainting
  - https://github.com/camenduru/comfyui-colab/blob/main/workflow/flux_image_to_image.json [[ComfyWorkFlows]]
  - https://comfyanonymous.github.io/ComfyUI_examples/flux/
	  Best Fine-Tuning Options:
	  LoRA (Low-Rank Adaptation): Remains the most popular and accessible method due to lower VRAM requirements and good results. Ranks of 16, 32, and even as low as 4 or 2 are being used successfully, depending on the task. Alpha typically matches the rank.
	  Model
	  111.2s
	  Let's extend and expand on Flux 1D fine-tuning, providing concrete settings and software suggestions:
	  1. LoRA Training:
	  Software: SimpleTuner, Ostris' ai-toolkit, Kohya's sd-scripts (via ComfyUI nodes with ComfyUI-FluxTrainer)
	  Rank/Alpha: Start with 32/32 or 16/16. Experiment with lower ranks (4/4, even 2/2) for styles where subtle changes are desired.
	  LR: 1e-4 is a good default. If training stalls, try 4e-4. If it overfits quickly, try lower values.
	  Optimizer: AdamW is generally recommended. Prodigy can be used for faster convergence.
	  Steps: 2000-3000 steps for likeness, style and character training. Experiment with fewer steps for small, focused datasets. For style training, test at multiple checkpoints as results can oscillate.
	  Captions: Concise and descriptive. Include the type of art and style name. For characters, vary pose, expression, clothing, and background. Example: "portrait photo of ohwx woman in a red dress, standing in a garden"
	  Dataset: 12-20 images for likeness, 300+ for style or character, focusing on diversity.
	  Example config.env (SimpleTuner):
	  export FLUX=true
	  export MODEL_NAME="black-forest-labs/FLUX.1-dev"
	  export MAX_NUM_STEPS=3000
	  export LEARNING_RATE=1e-4
	  export TRAIN_BATCH_SIZE=1 # Or higher if VRAM allows
	  export GRADIENT_ACCUMULATION_STEPS=1
	  export LR_SCHEDULE="constant"
	  export CAPTION_DROPOUT_PROBABILITY=0.05 # Or lower, experiment
	  export OPTIMIZER="adamw_bf16" # or "prodigy"
	  export MIXED_PRECISION="bf16"
	  export TRAINER_EXTRA_ARGS="--lora_rank=32 --lora_alpha=32 --keep_vae_loaded --clip_skip=2"
	  Use code with caution.
	  ComfyUI Workflow for Inference: Use the Load/Save Lora and Model Sampling Flux nodes. Adjust the Lora strength and guidance scale according to the trained LoRA. Consider using the Adaptive Guidance V2 node to control guidance more precisely.
	  2. Full Fine Tuning (FFT):
	  Software: 2kpr's trainer (when released), Kohya's sd-scripts (with caveats regarding stochastic rounding)
	  LR: Much lower than for LoRA, start with 1e-5 or 1e-6 and adjust as needed.
	  Optimizer: Adafactor with stochastic rounding is essential with 2kpr's method.
	  Style:
	  Basic Prompts: "a woman in a dress, [style name] artstyle"
	  Different Subjects: "a cat, [style name] artstyle", "a spaceship, [style name] artstyle"
	  Complex Scenes: "A group of people in a medieval market, [style name] painting"
	  Multi-Concept: Combine prompts that test each concept individually and together. For example, if you trained a LoRA with a character and a specific object, test with prompts that include only the character, only the object, and both.
	  Specific Prompting Tips for Flux:
	  Two-Word Classes: For style and character LoRAs, use a two-word class to provide more context. Example: "ohwx character name, woman elf" or "ohwx style name, painting artstyle"
	  Descriptive Captions: For complex subjects or scenes, provide short, clear, natural language descriptions focusing on the elements you want Flux to learn.
	  Object and Background Specificity: For styles and characters, if you don't want certain objects or backgrounds to be associated with the LoRA, include them in the captions without the trigger word. This helps prevent overfitting and bleeding.
	  "Unpromptable" Concepts: Flux can struggle with some artistic styles or concepts that are hard to describe with prompts. In these cases, using an IPAdapter (when available) might be a more effective approach.
	  Prompt Engineering: Experiment with different phrasing and prompt structures to see how Flux interprets them. Some concepts might require more specific or descriptive language than others.
	  Leverage Prior Knowledge: Flux has extensive prior knowledge. Start with simple prompts and gradually add detail as needed. See if you can get the desired results without explicitly mentioning every detail.
	  By combining these tips, tricks, and prompts, you'll be well on your way to mastering the art of Flux 1D fine-tuning. Remember, experimentation and community engagement are your best allies in this rapidly evolving field.
  - ## Foundations and Core Concepts
  - **Introduction to the Semantic Web**
  - History and motivation [1, 2]
  - Key Components: RDF, RDFS, OWL, SPARQL [3]
  - Knowledge Representation with Ontologies [4, 5]
  - **Knowledge Graphs**
  - Construction and Representation [6]
  - Applications in Industry (Google, Amazon, etc.) [7]
  - Knowledge Graph Embeddings [8]
  - **Large Language Models (LLMs)**
  - Architectures (Transformers, Attention) [9]
  - Pre-training, Fine-tuning, Prompting [10]
	  **Seminar 2: Knowledge Injection and Enhancement in LLMs**
  - **Pre-training LLMs with Knowledge Structures**
  - K-BERT and variations [11, 12]
  - Challenges of knowledge consistency and updates [13]
  - **Retrieval-Augmented Generation (RAG) Models**
  - Overview of the RAG Framework [14]
  - Variations and Enhancements (REALM, etc.) [15, 16]
  - Knowledge Retrieval (Dense vs. Sparse) [17]
  - **Semantic Fine-tuning of LLMs**
  - Ontologies as guides [18]
  - Applications in domain-specific tasks [19]
  - ## Tech Stack
  - **Large Language Models:** Llama 3 70B, Mixtral 8B
  - **Fine-tuning:** Fine-tune a smaller model on a corpus of Reddit data to identify and classify harmful content.
  - **Agent Framework:** Use the Agentic Alliance tech stack to build and deploy the multi-agent system.
  - **Data Sources:** Reddit API (if available), other social media platforms.
  - ### Additional Training & Fine-tuning Resources
  - **Mesh TensorFlow for Distributed Training**: A tool for distributing computation across different hardware to enhance training efficiency. [Mesh TensorFlow](https://github.com/tensorflow/mesh)
		- *Enables sophisticated distribution strategies, optimizing the use of hardware resources during model training.*
  - **Colossal-AI for Easy Distributed Training**: Provides user-friendly tools for distributed deep learning, making it simpler to scale up training processes. [Colossal-AI](https://colossalai.org/)
		- *Aims to simplify the transition from single-device to distributed model training, supporting more efficient utilization of computing resources.*
  - **BMTrain for Large Model Training**: Focuses on training large models with simplicity and efficiency, even in distributed settings. [BMTrain](https://github.com/OpenBMB/BMTrain)
		- *An efficient toolkit designed for simplicity in training large-scale models, supporting distributed training with ease.*
  - **LoRA Training Insights**: Discusses the benefits and application of Low-Rank Adaptation (LoRA) for efficient model fine-tuning. [LoRA Training Insights](https://lightning.ai/pages/community/lora-insights/)
		- *Provides a deep dive into how LoRA can be utilized to fine-tune models efficiently, offering significant insights into the process.*
  - ## Foundations and Core Concepts
  - **Introduction to the Semantic Web**
  - History and motivation [1, 2]
  - Key Components: RDF, RDFS, OWL, SPARQL [3]
  - Knowledge Representation with Ontologies [4, 5]
  - **Knowledge Graphs**
  - Construction and Representation [6]
  - Applications in Industry (Google, Amazon, etc.) [7]
  - Knowledge Graph Embeddings [8]
  - **Large Language Models (LLMs)**
  - Architectures (Transformers, Attention) [9]
  - Pre-training, Fine-tuning, Prompting [10]
	  **Seminar 2: Knowledge Injection and Enhancement in LLMs**
  - **Pre-training LLMs with Knowledge Structures**
  - K-BERT and variations [11, 12]
  - Challenges of knowledge consistency and updates [13]
  - **Retrieval-Augmented Generation (RAG) Models**
  - Overview of the RAG Framework [14]
  - Variations and Enhancements (REALM, etc.) [15, 16]
  - Knowledge Retrieval (Dense vs. Sparse) [17]
  - **Semantic Fine-tuning of LLMs**
  - Ontologies as guides [18]
  - Applications in domain-specific tasks [19]
  - ## Tech Stack
  - **Large Language Models:** Llama 3 70B, Mixtral 8B
  - **Fine-tuning:** Fine-tune a smaller model on a corpus of Reddit data to identify and classify harmful content.
  - **Agent Framework:** Use the Agentic Alliance tech stack to build and deploy the multi-agent system.
  - **Data Sources:** Reddit API (if available), other social media platforms.
  - ### Additional Training & Fine-tuning Resources
  - **Mesh TensorFlow for Distributed Training**: A tool for distributing computation across different hardware to enhance training efficiency. [Mesh TensorFlow](https://github.com/tensorflow/mesh)
		- *Enables sophisticated distribution strategies, optimizing the use of hardware resources during model training.*
  - **Colossal-AI for Easy Distributed Training**: Provides user-friendly tools for distributed deep learning, making it simpler to scale up training processes. [Colossal-AI](https://colossalai.org/)
		- *Aims to simplify the transition from single-device to distributed model training, supporting more efficient utilization of computing resources.*
  - **BMTrain for Large Model Training**: Focuses on training large models with simplicity and efficiency, even in distributed settings. [BMTrain](https://github.com/OpenBMB/BMTrain)
		- *An efficient toolkit designed for simplicity in training large-scale models, supporting distributed training with ease.*
  - **LoRA Training Insights**: Discusses the benefits and application of Low-Rank Adaptation (LoRA) for efficient model fine-tuning. [LoRA Training Insights](https://lightning.ai/pages/community/lora-insights/)
		- *Provides a deep dive into how LoRA can be utilized to fine-tune models efficiently, offering significant insights into the process.*
  - ### Additional Training & Fine-tuning Resources
  - **Mesh TensorFlow for Distributed Training**: A tool for distributing computation across different hardware to enhance training efficiency. [Mesh TensorFlow](https://github.com/tensorflow/mesh)
		- *Enables sophisticated distribution strategies, optimizing the use of hardware resources during model training.*
  - **Colossal-AI for Easy Distributed Training**: Provides user-friendly tools for distributed deep learning, making it simpler to scale up training processes. [Colossal-AI](https://colossalai.org/)
		- *Aims to simplify the transition from single-device to distributed model training, supporting more efficient utilization of computing resources.*
  - **BMTrain for Large Model Training**: Focuses on training large models with simplicity and efficiency, even in distributed settings. [BMTrain](https://github.com/OpenBMB/BMTrain)
		- *An efficient toolkit designed for simplicity in training large-scale models, supporting distributed training with ease.*
  - **LoRA Training Insights**: Discusses the benefits and application of Low-Rank Adaptation (LoRA) for efficient model fine-tuning. [LoRA Training Insights](https://lightning.ai/pages/community/lora-insights/)
		- *Provides a deep dive into how LoRA can be utilized to fine-tune models efficiently, offering significant insights into the process.*
  #### Key Characteristics
  - Continues training from pre-trained weights
		  - Uses lower learning rates than pre-training
		  - Requires task-specific labelled data
		  - Adapts general knowledge to specific domains
		  - Can update all or subset of model parameters
		  ## Technical Details
		  **Process**:
		  1. Load pre-trained model weights
		  2. Replace or add task-specific output layers
		  3. Train on task-specific dataset
		  4. Use reduced learning rate to prevent catastrophic forgetting
		  **Variants**:
		  - Full fine-tuning (updates all parameters)
		  - Layer-wise fine-tuning (selective layer updates)
		  - Gradual unfreezing (progressive layer training)
		  ## Usage in AI/ML
		  "Fine-tuning allows pre-trained models to achieve strong performance on specific tasks with relatively little task-specific data."
		  Common applications:
		  - Domain adaptation (general → specialised)
		  - Task specialisation (language understanding → question answering)
		  - Multi-task learning scenarios
		  - Transfer across related domains
  #### Academic Context
  Fine-tuning emerged as a foundational technique in transfer learning, enabling pre-trained models to achieve strong performance on specific tasks with relatively little task-specific data. This approach forms the basis of modern large language model adaptation strategies.
		  **Primary Source**: Multiple sources; comprehensive survey in arXiv:2411.01195 (2024)
  #### Related Concepts
  - **Pre-Training**: Initial training phase providing general representations
		  - **Transfer Learning**: Broader paradigm of knowledge transfer
		  - **Parameter-Efficient Fine-Tuning (PEFT)**: Methods updating fewer parameters
		  - **Domain Adaptation**: Specialisation for specific application domains
		  - **Catastrophic Forgetting**: Risk during fine-tuning process
		  ## Historical Development
		  - Early neural networks: Task-specific training from scratch
		  - 2018: BERT demonstrates power of pre-train-then-fine-tune
		  - 2019-2020: Fine-tuning becomes standard practice
		  - 2021+: Parameter-efficient methods gain prominence
		  - 2023+: Instruction tuning and alignment fine-tuning
		  ## Significance
		  Fine-tuning democratised access to state-of-the-art model performance by enabling effective task adaptation without massive computational resources required for pre-training from scratch.
		  ## OWL Functional Syntax
		  ## UK English Notes
		  - "Fine-tuning" (not "finetuning")
		  - "Specialised" (not "specialized")
		  - "Optimisation" in related contexts
		  **Last Updated**: 2025-10-27
		  **Verification Status**: Verified against arXiv:2411.01195 (2024)
		  ```
  - public-access:: true
  - definition:: The process of adapting a pre-trained model to a specific downstream task by continuing training on task-specific data, typically with a lower learning rate. Fine-tuning leverages knowledge acquired during pre-training whilst specialising the model for particular applications.
  ## Academic Context
  - Fine-tuning represents a cornerstone technique within transfer learning, enabling the adaptation of pre-trained neural networks to specialised downstream tasks[1][2]
  - The methodology emerged from recognition that foundation models trained on vast, general corpora contain transferable knowledge applicable across diverse domains
  - Contemporary fine-tuning approaches balance computational efficiency with performance gains, addressing the practical constraints of deploying large language models (LLMs) in production environments
  - The technique has evolved from full-model retraining to parameter-efficient variants, reflecting maturation in the field
  ## Current Landscape (2025)
  - Industry adoption and implementations
  - Fine-tuning has become integral to the LLM development cycle, with organisations leveraging pre-trained models rather than training from scratch[3]
  - Major technology platforms including OpenAI's GPT series, Google's language models, and open-source alternatives now offer fine-tuning capabilities as standard offerings
  - Supervised fine-tuning (SFT) dominates practical applications, where labelled task-specific datasets guide model adaptation[4]
  - Reinforcement learning from human feedback (RLHF) combined with fine-tuning has produced sophisticated conversational models such as ChatGPT and Sparrow[2]
  - UK and North England context: whilst specific regional implementations remain proprietary, Manchester and Leeds host significant AI research clusters where fine-tuning methodologies are actively developed and deployed across financial services, healthcare, and manufacturing sectors
  - Technical capabilities and limitations
  - Standard fine-tuning updates all model parameters during backpropagation, often requiring substantial computational resources despite relatively modest training datasets (hundreds to thousands of examples)[5]
  - Parameter-efficient fine-tuning (PEFT) techniques—including adapter modules and feature extraction methods—reduce computational overhead by adjusting only subset parameters whilst freezing foundational layers[1][2]
  - For convolutional architectures, earlier layers capturing low-level features typically remain frozen whilst later layers discerning task-specific patterns undergo adaptation[2]
  - Fine-tuned models retain identical parameter counts to their foundation counterparts, presenting deployment considerations for resource-constrained environments[5]
  - Domain-specific adaptation through fine-tuning demonstrates particular efficacy in specialised fields (medical diagnosis, legal analysis, customer service) where linguistic nuance and terminology precision prove critical[4]
  - Standards and frameworks
  - NIST guidance (SP 800-226, AI 100-2e2025) formalises fine-tuning as a training step adding task- or domain-specific information to pre-trained models[6]
  - No universally mandated standards currently govern fine-tuning practices, though emerging governance frameworks increasingly address model adaptation and validation
  ## Research & Literature
  - Key academic papers and sources
  - Coursera (2024). "What Is Fine-Tuning?" Available at: coursera.org/articles/what-is-fine-tuning — Comprehensive overview of feature extraction and full fine-tuning methodologies
  - Wikipedia contributors (2024). "Fine-tuning (deep learning)." In Wikipedia, The Free Encyclopedia — Detailed technical exposition of architectural considerations and parameter freezing strategies
  - Databricks (2024). "Understanding Fine-Tuning in AI and ML." Available at: databricks.com/glossary/fine-tuning — Contextualises fine-tuning within foundation model development cycles
  - SuperAnnotate (2025). "Fine-tuning large language models (LLMs) in 2025." Available at: superannotate.com/blog/llm-fine-tuning — Current practitioner guidance on supervised fine-tuning and dataset preparation
  - Google Developers (2024). "LLMs: Fine-tuning, distillation, and prompt engineering." Machine Learning Crash Course. Available at: developers.google.com/machine-learning/crash-course/llm/tuning — Accessible treatment of parameter-efficient tuning approaches
  - National Institute of Standards and Technology (2024). "fine-tuning." CSRC Glossary. Available at: csrc.nist.gov/glossary/term/fine_tuning — Formal definitional framework
  - IBM (2024). "What is Fine-Tuning?" Available at: ibm.com/think/topics/fine-tuning — Industry perspective on adaptation methodologies
  - Hewlett Packard Enterprise (2024). "What is Fine-tuning (AI)?" Glossary. Available at: hpe.com/us/en/what-is/fine-tuning.html — Technical glossary entry
  - Ongoing research directions
  - Parameter efficiency remains an active research frontier, with novel adapter architectures and low-rank adaptation techniques emerging regularly
  - Integration of fine-tuning with reinforcement learning frameworks continues evolving, particularly for alignment and safety objectives
  - Domain-specific foundation models pre-trained on specialised corpora represent an alternative to general-purpose model fine-tuning, with comparative efficacy studies ongoing
  ## UK Context
  - British contributions and implementations
  - UK academic institutions, particularly those in the Russell Group, actively contribute to fine-tuning research through machine learning and NLP programmes
  - The Alan Turing Institute has published guidance on responsible AI model adaptation, including fine-tuning governance considerations
  - North England innovation hubs
  - Manchester hosts significant AI research capacity through the University of Manchester's computer science department and associated industry partnerships, with fine-tuning applications in financial technology and healthcare analytics
  - Leeds and Sheffield universities contribute to applied machine learning research, with particular emphasis on domain-specific model adaptation for manufacturing and industrial applications
  - Newcastle's research community engages with fine-tuning methodologies in biomedical informatics and clinical decision support systems
  - These regional clusters increasingly collaborate on standardisation efforts and best-practice frameworks for responsible model adaptation
  ## Future Directions
  - Emerging trends and developments
  - Continued refinement of parameter-efficient techniques promises to democratise fine-tuning, reducing barriers to entry for organisations with limited computational infrastructure
  - Multimodal fine-tuning—adapting models across text, image, and audio modalities simultaneously—represents an expanding frontier
  - Few-shot and zero-shot adaptation techniques may eventually reduce reliance on large labelled datasets, though supervised fine-tuning remains dominant
  - Anticipated challenges
  - Catastrophic forgetting, wherein fine-tuning on narrow datasets causes degradation of general capabilities, remains an active concern requiring mitigation strategies
  - Computational costs, despite efficiency improvements, continue escalating with model scale
  - Regulatory frameworks governing model adaptation and accountability for fine-tuned systems are still crystallising, particularly regarding bias amplification and domain drift
  - Research priorities
  - Robust evaluation methodologies for fine-tuned models across diverse downstream tasks
  - Techniques for preserving foundational model capabilities whilst achieving specialisation
  - Governance frameworks balancing innovation with responsible deployment, particularly in high-stakes domains (healthcare, legal, financial services)
  ## Metadata
  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
