- ### Definition
  - A **Foundation Model** is a [[Machine Learning Model]] trained at scale on broad data using [[Self-Supervised Learning]] objectives, yielding a general-purpose parametric representation adaptable to diverse downstream tasks via [[Instruction Tuning]], [[In-Context Learning]], [[Few-Shot Learning]], or retrieval augmentation without retraining from scratch.
  - The term was introduced in 2021 by the Stanford HAI Centre for Research on Foundation Models to capture the homogenising structural role such models play across AI research and application domains.
  - Foundation models differ from prior narrow or task-specific AI systems in that a single pre-trained artefact — potentially with hundreds of billions of parameters — serves as the common substrate for an enormous variety of specialised applications.
  - The category encompasses [[Large Language Models]], [[Multimodal Models]], [[Diffusion Model]] families, and cross-modal architectures, unified by the pattern of large-scale pre-training followed by lightweight task-specific adaptation.
  - A defining property is the emergence of qualitatively new capabilities from scale: behaviours not observed in smaller models that appear as parameter count, training compute, and dataset volume increase — a phenomenon studied under [[Emergent Capabilities]].

- ### Overview
  - Foundation models represent a paradigm shift from the prior regime of training separate models per task, which required large labelled datasets and domain expertise for each application.
  - [[Transfer Learning]] is the theoretical underpinning: representations learned from broad pre-training on unlabelled data encode rich statistical regularities of the domain that transfer efficiently to downstream tasks with far less task-specific supervision.
  - [[Self-Supervised Learning]] objectives — such as next-token prediction for text models or masked autoencoding for vision models — allow training on vast quantities of unlabelled data, eliminating the bottleneck of manual annotation.
  - The scale of foundation model pre-training places them at the frontier of [[Compute Infrastructure]] demands, requiring GPU clusters, specialised interconnects, and months of training on large proportions of internet-scale corpora.
  - The computational and data investment in pre-training is amortised across all downstream uses: because fine-tuning or prompting is cheap relative to pre-training, foundation models dramatically reduce the marginal cost of building a capable specialised system.
  - The paradigm has become the dominant approach to state-of-the-art performance across natural language processing, [[Computer Vision]], speech, [[Multimodal AI]], code generation, and scientific applications including protein structure prediction and weather modelling.

- ### Key Components and Mechanisms

  - #### Pre-Training
    - [[Pre-Training]] on diverse, large-scale corpora is the defining operation: the model learns a rich parametric prior over the data distribution that encodes syntax, semantics, factual knowledge, visual structure, or domain-specific regularities depending on modality.
    - Text foundation models predominantly use autoregressive next-token prediction (as in the GPT family) or masked language modelling (as in [[BERT]]), with some models combining both.
    - Vision and multimodal models extend these objectives to image patches, contrastive cross-modal alignment, or denoising, as in [[Diffusion Model]] architectures.
    - [[Large Language Model Training]] involves careful data curation, tokenisation, distributed training across thousands of GPUs, and checkpoint management to produce stable, high-quality base models.

  - #### Adaptation Mechanisms
    - [[Instruction Tuning]]: Supervised fine-tuning on curated instruction-response pairs transforms a raw language model into an instruction-following assistant capable of following natural-language task descriptions.
    - [[RLHF]] (Reinforcement Learning from Human Feedback): Human preference labels train a reward model used to further fine-tune the foundation model towards outputs rated as more helpful, honest, and harmless.
    - [[In-Context Learning]]: At inference time, the model conditions on a few labelled examples embedded in the prompt to generalise to a new task without gradient updates — a distinctively emergent property of scale.
    - [[Few-Shot Learning]]: A related capability in which minimal examples suffice for high-quality task performance, eliminating the need for large labelled datasets in many practical settings.
    - [[LoRA Fine-Tuning]] and other parameter-efficient fine-tuning methods (PEFT) allow task-specific adaptation at low computational cost by updating only a small subset of parameters or low-rank adapter matrices.
    - [[Domain Adaptation]]: Fine-tuning or continual pre-training on domain-specific corpora (e.g., legal text, clinical notes, code) produces specialised variants that outperform the base model on those domains.
    - [[Prompt Engineering]]: Systematic design of input prompts exploits the model's pre-trained representations to elicit desired outputs without any parameter updates.

  - #### Emergent Properties
    - [[Emergent Capabilities]] are qualitative behaviours that arise unpredictably above certain scale thresholds — including chain-of-thought reasoning, arithmetic, code synthesis, and instruction following — not present in smaller-scale predecessors.
    - [[Context Window]] length determines the maximum information available to the model at inference time; modern foundation models have expanded context windows from thousands to millions of tokens, enabling long-document processing, multi-turn dialogue, and agentic task completion.
    - Retrieval augmentation via [[Retrieval-Augmented Generation]] extends the effective knowledge of a foundation model beyond its training cut-off by conditioning generation on documents retrieved from an external corpus at inference time.

- ### Taxonomy and Variants
  - **[[Large Language Models]]**: Text-dominant foundation models trained on web-scale corpora (GPT series, Claude, Gemini, Llama). Primary output modality is text; capabilities include reasoning, coding, summarisation, dialogue, and tool use.
  - **[[Multimodal Models]]**: Foundation models trained on paired or interleaved text-image (and increasingly text-image-audio-video) data. Examples include GPT-4 (vision), Gemini, Flamingo, and [[Vision-Language-Action Models]] for robotics.
  - **[[Diffusion Model]] families**: Generative foundation models trained on image (Stable Diffusion, DALL-E), video (Sora), and audio (AudioLDM) data using denoising objectives, achieving state-of-the-art generative quality.
  - **Code foundation models**: Specialised on source code corpora, enabling [[Code Generation]], code completion, bug detection, and software synthesis (Codex, AlphaCode, DeepSeek-Coder).
  - **Scientific foundation models**: Domain-adapted models for biology (protein language models such as ESMFold), chemistry, climate modelling, and medical imaging, adapting the foundation model paradigm to structured scientific data.

- ### Applications and Use Cases
  - **[[Conversational AI]] and virtual assistants**: Foundation models power dialogue systems capable of multi-turn, context-sensitive, instruction-following conversations at human-level fluency.
  - **[[Code Generation]] and software development**: Autocomplete, documentation generation, test synthesis, and refactoring in IDEs and developer tools.
  - **Document intelligence**: Summarisation, extraction, classification, and question answering over long-form documents in legal, financial, medical, and regulatory domains.
  - **[[Generative AI]] content creation**: Text, image, video, and audio synthesis for media, marketing, education, and creative applications.
  - **[[Agentic Workflow]] orchestration**: Foundation models serve as the reasoning core in multi-step autonomous agents that plan, use tools, browse the web, write and execute code, and coordinate sub-agents.
  - **Scientific discovery**: Protein structure prediction, drug candidate screening, climate modelling, and materials science — applications where pre-trained representations over scientific corpora accelerate hypothesis generation.
  - **[[Multimodal AI]] perception**: Vision-language models enable image captioning, visual question answering, document layout understanding, and embodied agent perception in robotics.
  - **[[Retrieval-Augmented Generation]]**: Enterprise knowledge management systems use foundation models as the generative backbone, augmented by retrieval over proprietary document corpora.
  - **[[Prompt Engineering]] and few-shot task deployment**: Rapid prototyping of new task-specific systems without labelled data or model training, using prompt design alone.

- ### Relationships
  - hasPart:: [[Transformer Architecture]]
  - hasPart:: [[Pre-Training]]
  - hasPart:: [[Neural Network]]
  - hasPart:: [[Context Window]]
  - requires:: [[Training Data]]
  - requires:: [[GPU Compute]]
  - requires:: [[Self-Supervised Learning]]
  - enables:: [[In-Context Learning]]
  - enables:: [[Instruction Tuning]]
  - enables:: [[Few-Shot Learning]]
  - enables:: [[Retrieval-Augmented Generation]]
  - enables:: [[Emergent Capabilities]]
  - dependsOn:: [[Transfer Learning]]
  - dependsOn:: [[Deep Learning]]
  - dependsOn:: [[Large Language Model Training]]
  - uses:: [[RLHF]]
  - uses:: [[Domain Adaptation]]
  - uses:: [[LoRA Fine-Tuning]]
  - supports:: [[Multimodal AI]]
  - supports:: [[Agentic Workflow]]
  - supports:: [[Prompt Engineering]]
  - contrastsWith:: [[Narrow AI]]
  - bridgesTo:: [[Compute Governance]]
  - bridgesTo:: [[AI Alignment]]
  - bridgesTo:: [[Generative AI]]
  - relatedTo:: [[Large Language Models]]
  - relatedTo:: [[Diffusion Model]]
  - relatedTo:: [[Multimodal Models]]
  - relatedTo:: [[Benchmark Evaluation]]
  - relatedTo:: [[AI Safety]]

- ### Standards and Governance Context
  - **[[AI Safety]] and alignment**: Foundation models are the primary subject of contemporary [[AI Safety]] research, including interpretability, scalable oversight, [[RLHF]], and [[AI Alignment]] methodology, given that their emergent capabilities and broad deployment surface require novel alignment approaches.
  - **EU AI Act**: Classifies providers of general-purpose AI models (the EU's regulatory term encompassing foundation models) with systemic risk characteristics — defined by training compute thresholds — as subject to heightened obligations including capability evaluations, incident reporting, and adversarial testing.
  - **UK AI Safety Institute**: Conducts frontier model evaluations — pre-deployment assessments of foundation model capability and risk — targeting the largest foundation models from major AI labs.
  - **Responsible Scaling Policies**: Labs including Anthropic publish [[Responsible Scaling Policy]] documents committing to capability-gated safety evaluations before scaling foundation models above defined thresholds.
  - **[[Benchmark Evaluation]]**: Foundation model capability is assessed through standardised benchmarks (MMLU, HellaSwag, HumanEval, BIG-Bench, MATH, GPQA) that test reasoning, coding, factual knowledge, and instruction following across modalities.
  - **[[Compute Governance]]**: Policy discussions increasingly target foundation model training compute as a proxy for capability and risk, with proposals for compute thresholds, export controls on AI chips, and training run registries.
  - **Open versus closed weights**: A significant policy and ecosystem dimension is whether foundation model weights are publicly released (open-weight models: Llama, Mistral, Falcon) or held proprietary (closed models: GPT-4, Claude, Gemini). Open-weight models enable community fine-tuning and auditing; closed models provide tighter access controls.

- ### Provenance
  - sources:: Stanford HAI Centre for Research on Foundation Models, "On the Opportunities and Risks of Foundation Models" (Bommasani et al., 2021); OpenAI GPT series technical reports; Anthropic Claude model cards; DeepMind Gemini technical report; Hugging Face model documentation; EU AI Act General-Purpose AI provisions (2024); UK AI Safety Institute frontier model evaluation reports
  - updated:: 2026-06-13