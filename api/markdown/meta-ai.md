- ### Definition
  - Meta AI is the artificial intelligence research and applied AI division of Meta Platforms, conducting foundational research in machine learning and releasing notable open-weight artefacts including the LLaMA series of large language models and the multimodal embedding model ImageBind. The division operates FAIR (Fundamental AI Research) for long-horizon research and applied AI teams that integrate models into Meta products such as Facebook, Instagram, and WhatsApp. Meta AI's open-weight release strategy has materially shaped the open-source AI ecosystem by enabling fine-tuning and deployment without proprietary API dependency.

- ### Semantic Classification
  - owl-class:: meta-ai:Meta AI
  - owl-role:: Concept

- ### Relationships
  - enables [[Open-Source AI]]
  - enables [[Multimodal AI]]
  - uses [[Large Language Models]]
  - uses [[Instruction Tuning]]
  - relatedTo [[Responsible AI]]
  - relatedTo [[Fine Tuning]]

- ### Content
  Meta AI operates through two complementary arms: FAIR (Fundamental AI Research), which publishes open academic research across areas including graph neural networks, self-supervised learning, and multimodal representation, and Applied AI teams embedded in product divisions. FAIR contributions include early influential work on word embeddings (fastText), the PyTorch deep learning framework (co-developed and now hosted by the Linux Foundation), and large-scale self-supervised vision models such as DINO.

  The LLaMA family of open-weight large language models represents Meta AI's most impactful release from an ecosystem perspective. By releasing model weights under community licences, Meta AI enabled derivative models, fine-tuning experiments, and local inference to proliferate across the research and commercial landscape, circumventing the proprietary API model adopted by competitors. Instruction Tuning and reinforcement learning from human feedback (RLHF) applied to LLaMA base models produced instruction-following variants widely adopted for on-device and server deployment.

  ImageBind demonstrated joint embedding of six modalities (image, text, audio, depth, thermal, IMU) within a single representation space, enabling cross-modal retrieval without pairwise training data. Multimodal AI research at Meta also includes SeamlessM4T for multilingual speech translation and Segment Anything (SAM) for zero-shot image segmentation. Meta AI publishes responsible AI research including fairness benchmarks and model cards, though open-weight releases also raise dual-use concerns that have led to ongoing regulatory scrutiny.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-19T00:00:00Z