- ### Definition
  - Multimodal AI refers to artificial intelligence systems that process, fuse, and generate content across multiple data modalities—including text, images, audio, video, and 3D—within a unified model architecture. Multimodal systems learn cross-modal alignments through joint embedding spaces, enabling capabilities such as image captioning, visual question answering, text-to-image synthesis, and real-time audio-visual understanding that single-modality models cannot achieve.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Multimodal
  - owl-role:: Concept

- ### Relationships
  - requires [[Large Language Models]]
  - requires [[Computer Vision]]
  - enables [[Image Generation]]
  - enables [[Text-to-Speech]]
  - relatedTo [[Diffusion Models]]
  - relatedTo [[Speech Recognition]]

- ### Content
  - # OpenAI ChatGPT-4o (omni)
  - Originally released May 2024 as the first truly multimodal model available on the free tier; retired from ChatGPT on February 13, 2026, superseded by GPT-5 (August 2025) and subsequent models including GPT-5.2 and GPT-5.4.
  - True multi modality across video, images, and audio.
  - The first of the true publicly accessible models trained without compromise for multi-modality.
  - Multi-lingual across 50 languages, supporting image input and output, real time video input, and 3D reconstruction from generated images.
  - Empathetic voice to voice with very low latency.
  - [Min Choi on X: "I used GPT-4o to create STL file for 3D model in ~ 20 seconds on my phone. Pretty remarkable what you can generate with AI and simple prompt now. https://t.co/2fbObrpPol" / X (twitter.com)](https://twitter.com/minchoi/status/1790396782200987662)
  - {{twitter https://twitter.com/minchoi/status/1790396782200987662}}
  - # Google DeepMind Gemini
  - Gemini is a multimodal LLM capable of inputting and outputting text, understanding images, and generating images.
  - While specific architecture details are scarce, it represents a leap in LLMs interacting with multiple data types.
  - **Introduction:**
		- [[Large Language Models]] are adept at generating coherent text sequences, predicting word probabilities and co-occurrences.
		- Multimodal models extend LLMs capabilities to not just output text, but images and understand multimodal inputs.
  - **Core Concepts:**
		- **LLMs for Text:**
			- LLMs process prompts and generate replies one token at a time, acting as a multiclass classifier.
		- **Image Generation:**
			- Traditional pixel-by-pixel image generation is intractable; hence, a different approach is needed.
			- The solution is treating image generation as a language generation problem, akin to ancient hieroglyphics.
  - **Techniques in Multi-Modal LLMs:**
		- **Autoencoders:**
			- Compress images into a lower-dimensional latent space and then regenerate them, learning crucial properties.
		- **[[Variational Autoencoders]] (VAE) & VQ-VAE:**
			- VAEs add a generative aspect by allowing for new image generation from random latent embeddings.
			- VQ-VAE further discretizes this process, creating a vocabulary of image "words" or tokens.
  - **Implementation:**
		- **Vector Quantization:**
			- Creates a discrete set of embedding vectors forming the vocabulary for our image-based language.
		- **Encoding and Decoding:**
			- Images are encoded to these discrete codes and decoded back to form new or reconstructed images.
  - **Training and Inference:**
		- A mixed sequence of embeddings (words and image tokens) is created for training.
		- The model learns to generate image tokens, forming a coherent sequence with the text, allowing for the generation of images corresponding to text descriptions.
  - **Challenges and Developments:**
		- The importance of quality data over quantity, especially for large, complex models.
		- Ongoing efforts focus on refining data quality, applying safety measures, and improving model transparency.
  - ```mermaid
  flowchart LR
  A[Text Input] -->|Processed by LLM| B[Text Tokens]
  B -->|Alongside Image Tokens| D[Mixed Embeddings]
  C[Image Input] -->|Encoded via VQ-VAE| E[Image Tokens]
  E --> D
  D -->|Next Token Prediction| F[Generated Sequence]
  F -->|Decoded| G[Output Image & Text]
  ```
  - ### Multi-Modal Large Language Models (LLMs)
  - Some random links
  - Apple Ferret is a [[Multimodal]] [[Large Language Models]] from [[Apple Inc Technology Corporation]] that can understand and ground anything at any granularity [apple/ml-ferret (github.com)](https://github.com/apple/ml-ferret)
  - [THUDM/CogVLM: a state-of-the-art-level open visual language model | 多模态预训练模型 (github.com)](https://github.com/THUDM/CogVLM)
  - [moondream
		- a tiny vision language model](https://moondream.ai/)
  - Key Papers
		- [Variational Autoencoder (VAE)](https://arxiv.org/abs/1312.6114)
		- [Vector Quantized Variational Autoencoder (VQ-VAE)](https://arxiv.org/abs/1711.00937)
		- [Vector Quantized Generative Adversarial Network (VQ-GAN)](https://compvis.github.io/taming-transformers/)
		- [Gemini](https://assets.bwbx.io/documents/users/iqjWHBFdfxIU/rJRW6x8V4P0g/v0)
		- [Parti](https://sites.research.google/parti/)
		- [DallE](https://arxiv.org/pdf/2102.12092.pdf)
		- [2304.06939.pdf (arxiv.org)](https://arxiv.org/pdf/2304.06939.pdf) C4 model
		- [huggingface/OBELICS: Code used for the creation of OBELICS, an open, massive and curated collection of interleaved image-text web documents, containing 141M documents, 115B text tokens and 353M images. (github.com)](https://github.com/huggingface/OBELICS?tab=readme-ov-file)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z