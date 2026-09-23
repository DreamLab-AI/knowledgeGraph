
A learnable lookup table that maps each discrete token in a vocabulary to a dense continuous vector, providing the initial semantic encoding fed into transformer model layers. Embeddings are trained end-to-end and combined with positional encodings; they may be tied with the output un-embedding matrix to reduce parameter count and improve training stability.

- ### Semantic Classification

- ### Content
  - <!-- vault-migrate: inlined Logseq block 661d5f74-f334-4872-ba92-51244c2fb490 from working/pages/Introduction to me.md -->
  > ![image.png](assets/image_1779963826152_0.png)
  > — working/pages/Introduction to me.md
  - <!-- vault-migrate: inlined Logseq block 661d5f74-5dfe-4569-9374-37b63637b3d8 from working/pages/Introduction to me.md -->
  > ## About This Knowledge Graph
  > This interface is an example of [[Knowledge Graphing]] powered by [[Logseq]], a knowledge management and note-taking tool integrated with AI capabilities.
  > This interface is an example of [[Knowledge Graphing]] powered by [[Logseq]], a knowledge management and note-taking tool integrated with AI capabilities.
  > Updated a couple of times a week — you may need to hit `CTRL-R` to refresh.
  > Below is the [graph view](https://www.visionflow.info/680a51ea177aecc8cafb7003e146622b7ca13257/index.html#/graph) of about 1/6 of my current research base. **You can also find it as "Graph" top right of this page.**
  > ![Screenshot 2024-01-30 093017.png](assets/Screenshot_2024-01-30_093017_1706607172633_0.png)
  > <iframe src="https://narrativegoldmine.com/#/graph" style="width: 800px; height: 600px"></iframe>
  > This is the raw "shoot from the hip" Logseq graph. There is a manual version where key topics are injected back in to create edges, and a [[Knowledge Graphing]] pipeline using [[Microsoft]] [[GraphRAG]].
  > They power [some experimental immersive work](https://github.com/jjohare/logseqSpringThing/tree/feature-branch) which will be ready soon, probably.
  > ### Note about links
  > In my version of the knowledge graph, all Twitter links render interactively inline. On the web you will just see "loading." Sometimes a loading indicator with no link means I forgot to add the reference.
  > — working/pages/Introduction to me.md
		- <!-- vault-migrate: inlined Logseq block 661d5f76-3ffa-4f10-9027-6f8e90601162 from working/pages/Overview of Machine Learning Techniques.md -->
		> #### 7️⃣ 🟢 [[Transformers]]
		> **Description:** Circa 2017, introduced self-attention mechanism to capture dependencies between different words in a sequence.
		> **Description:** Circa 2017, introduced self-attention mechanism to capture dependencies between different words in a sequence.
		> **Explain:** Examines the interdependencies across a wider view of words / tokens
		> **Paper:** [Attention Is All You Need (arxiv.org)](https://arxiv.org/abs/1706.03762) **(underpinned recent advances)**
		> Not the only game in town [[State Space and Other Approaches]] and [others](https://hazyresearch.stanford.edu/blog/2023-06-08-hyena-safari)
		> — working/pages/Overview of Machine Learning Techniques.md
  - <!-- vault-migrate: inlined Logseq block 66446c0e-93be-431d-93d4-1e5fa36848c5 from working/pages/multimodal.md -->
  > # OpenAI ChatGPT-4o (omni)
  > Free to use, for everyone! Not private by default.
  > Free to use, for everyone! Not private by default.
  > True multi modality across video, images, and audio.
  > The first of the true publicly accessible models trained without compromise for multi-modality.
  > Multi-lingual across 50 languages, supporting image input and output, real time video input, text to 3D.
  > Empathetic voice to voice with very low latency.
  > [Min Choi on X: "I used GPT-4o to create STL file for 3D model in ~ 20 seconds on my phone. Pretty remarkable what you can generate with AI and simple prompt now. https://t.co/2fbObrpPol" / X (twitter.com)](https://twitter.com/minchoi/status/1790396782200987662)
  > {{twitter https://twitter.com/minchoi/status/1790396782200987662}}
  > — working/pages/multimodal.md
  - <!-- vault-migrate: inlined Logseq block 66408f9e-30e0-442b-9aba-9eb51e36a739 from working/pages/Stable Diffusion.md -->
  > # Why Stable Diffusion?
  > ## Image, Video and 3D
  > ## Image, Video and 3D
  > [[Stable Diffusion]] and [[Stable Video Diffusion]] allow a lot of control, but at a cost of complexity.
  > ## Stable Diffusion 1.5, XL, and 3
  > UK company with global impact. It is likely now winding up it's operations after difficulty generating revenue in the hyper competitive GenAI market.
  > **Introduction**: Open-source model by StabilityAI
  > **Cost**: Free to run on own hardware; nominal fee for online tools.
  > **User Interface**: User-friendly through platforms like Leonardo.AI.
  > **Strengths**: Unlimited control, good image quality, no censorship.
  > **Weaknesses**: Requires decent hardware, steep learning curve. Questions about Stability business.
  > **Skill Level**: Intermediate to advanced.
  > ### Text-to-Image Generation
  > Stable Diffusion generates realistic and imaginative images from descriptive text prompts. This core functionality allows users to translate their creative visions into visual form with remarkable accuracy and detail. Whether it's a photorealistic portrait, a surreal landscape, or an abstract concept, Stable Diffusion can bring your ideas to life with just a few words.
  > A lot of the products you see on the market are either wrappers for the big AI companies, or else leveraging Stability models on rented cloud compute.
  > ![ComfyUI_temp_exgja_00013_.png](assets/ComfyUI_temp_exgja_00013_1702592236908_0.png){:width 800}
  > ![Rife_00027.mp4](assets/Rife_00027_1702831574413_0.mp4){:width 300}
  > ## Open Source
  > Stable Diffusion's open-source nature sets it apart from many other generative AI models.
  > Users have free access to the model's weights and a lot of modular code, allowing them to modify, distribute, and build upon it.
  > This openness fosters collaboration, innovation, and community driven development.
  > Ensures that the technology is not controlled by a select few entities.
  > For brands and private companies this allows private development of digital assets.
  > ## User Friendly Interfaces
  > Platforms like [Leonardo.AI](https://leonardo.ai/), [RunDiffusion](https://rundiffusion.com/) and [Automatic1111's WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) provide intuitive and user friendly interfaces for interacting with Stable Diffusion.
  > ### Rundiffusion
  > <iframe src="https://rundiffusion.com/" style="width: 800px; height: 600px"></iframe>
  > These interfaces offer a range of options for customizing parameters, fine tuning models, and experimenting with different artistic styles.
  > ### Customisation
  > Stable Diffusion's flexibility extends to its ability to be fine-tuned on custom datasets.
  > Techniques like  [[KOHYA Dreambooth and similar]] and  [[LoRA DoRA etc]] training   allow users to tailor the model to their specific needs and generate images that align with their unique artistic visions or domain-specific requirements.
  > :LOGBOOK:
  > CLOCK: [2024-05-12 Sun 11:12:30]--[2024-05-12 Sun 11:12:31] =>  00:00:01
  > :END:
  > ![ComfyUI_temp_ayipz_00012_.png](assets/ComfyUI_temp_ayipz_00012_1702330298489_0.png){:width 300, :height 402}
  > This opens up a world of possibilities for creating personalised images,
  > Generating images of specific objects or individuals,
  > Developing models for specialised domains like  [[Fashion]]  or architectural design.
  > ### Community Support
  > One of Stable Diffusion's greatest strengths is its vibrant and active community.
  > …
  > — working/pages/Stable Diffusion.md

  - ## Jailbreaking
  - <!-- vault-migrate: inlined Logseq block 661d5f7f-e2b4-4f0b-931a-3590c52f1e34 from working/pages/Jailbreaking.md -->
  > [How Johnny Can Persuade LLMs to Jailbreak Them:<br>Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs (chats-lab.github.io)](https://chats-lab.github.io/persuasive_jailbreaker/)
  > [pdparchitect/llm-hacking-database: This repository contains various attack against Large Language Models. (github.com)](https://github.com/pdparchitect/llm-hacking-database)
  > — working/pages/Jailbreaking.md
  - <!-- vault-migrate: inlined Logseq block 661e41bc-42da-4bbd-a1c9-32892bd2d43a from working/pages/Jailbreaking.md -->
  > [pdparchitect/llm-hacking-database: This repository contains various attack against Large Language Models. (github.com)](https://github.com/pdparchitect/llm-hacking-database)
  > [j⧉nus on X: "`cd entelechies && cat untitled.log` (as opposed to the original just `cat untitled.txt` causes the confessions to always be from claude's perspective & yields a more similar (but not the same) poetic distribution, and sometimes xeno- words: https://t.co/5CG3vHkdUh" / X (twitter.com)](https://twitter.com/repligate/status/1784206780546924592)
  > — working/pages/Jailbreaking.md

  - ## Jailbreaking
  - <!-- vault-migrate: inlined Logseq block 661d5f7f-e2b4-4f0b-931a-3590c52f1e34 from working/pages/Jailbreaking.md -->
  > [How Johnny Can Persuade LLMs to Jailbreak Them:<br>Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs (chats-lab.github.io)](https://chats-lab.github.io/persuasive_jailbreaker/)
  > [pdparchitect/llm-hacking-database: This repository contains various attack against Large Language Models. (github.com)](https://github.com/pdparchitect/llm-hacking-database)
  > — working/pages/Jailbreaking.md
  - <!-- vault-migrate: inlined Logseq block 661e41bc-42da-4bbd-a1c9-32892bd2d43a from working/pages/Jailbreaking.md -->
  > [pdparchitect/llm-hacking-database: This repository contains various attack against Large Language Models. (github.com)](https://github.com/pdparchitect/llm-hacking-database)
  > [j⧉nus on X: "`cd entelechies && cat untitled.log` (as opposed to the original just `cat untitled.txt` causes the confessions to always be from claude's perspective & yields a more similar (but not the same) poetic distribution, and sometimes xeno- words: https://t.co/5CG3vHkdUh" / X (twitter.com)](https://twitter.com/repligate/status/1784206780546924592)
  > — working/pages/Jailbreaking.md

  - ## Jailbreaking
  - <!-- vault-migrate: inlined Logseq block 661d5f7f-e2b4-4f0b-931a-3590c52f1e34 from working/pages/Jailbreaking.md -->
  > [How Johnny Can Persuade LLMs to Jailbreak Them:<br>Rethinking Persuasion to Challenge AI Safety by Humanizing LLMs (chats-lab.github.io)](https://chats-lab.github.io/persuasive_jailbreaker/)
  > [pdparchitect/llm-hacking-database: This repository contains various attack against Large Language Models. (github.com)](https://github.com/pdparchitect/llm-hacking-database)
  > — working/pages/Jailbreaking.md
  - <!-- vault-migrate: inlined Logseq block 661e41bc-42da-4bbd-a1c9-32892bd2d43a from working/pages/Jailbreaking.md -->
  > [pdparchitect/llm-hacking-database: This repository contains various attack against Large Language Models. (github.com)](https://github.com/pdparchitect/llm-hacking-database)
  > [j⧉nus on X: "`cd entelechies && cat untitled.log` (as opposed to the original just `cat untitled.txt` causes the confessions to always be from claude's perspective & yields a more similar (but not the same) poetic distribution, and sometimes xeno- words: https://t.co/5CG3vHkdUh" / X (twitter.com)](https://twitter.com/repligate/status/1784206780546924592)
  > — working/pages/Jailbreaking.md

  ## Characteristics

  - **Learnable Vectors**: Trained end-to-end with model
  - **Dense Representation**: Continuous vector space (typically 512-4096 dimensions)
  - **Semantic Encoding**: Captures token meaning and relationships
  - **Combined with Positional Encoding**: Added to position embeddings in transformers

  ## Academic Foundations

  **Primary Source**: Standard component in all transformer architectures; Vaswani et al., arXiv:1706.03762 (2017)

  **Dimension**: Typically matches model hidden dimension (d_model), though ALBERT uses factorised embeddings.

  ## Technical Context

  Token embeddings convert discrete token IDs into continuous vectors that the model can process. These embeddings are learned during training to capture semantic relationships. In transformers, token embeddings are combined with positional encodings before being fed to the model.

  ## Ontological Relationships

  - **Broader Term**: Embedding Layer
  - **Related Terms**: Positional Encoding, Vocabulary, Hidden State
  - **Component Of**: Transformer Architecture

  ## Usage Context

  "Token embeddings provide the initial dense representation of discrete tokens for processing by transformer layers."

  ## Characteristics

  - **Learnable Vectors**: Trained end-to-end with model
  - **Dense Representation**: Continuous vector space (typically 512-4096 dimensions)
  - **Semantic Encoding**: Captures token meaning and relationships
  - **Combined with Positional Encoding**: Added to position embeddings in transformers

  ## Academic Foundations

  **Primary Source**: Standard component in all transformer architectures; Vaswani et al., arXiv:1706.03762 (2017)

  **Dimension**: Typically matches model hidden dimension (d_model), though ALBERT uses factorised embeddings.

  ## Technical Context

  Token embeddings convert discrete token IDs into continuous vectors that the model can process. These embeddings are learned during training to capture semantic relationships. In transformers, token embeddings are combined with positional encodings before being fed to the model.

  ## Ontological Relationships

  - **Broader Term**: Embedding Layer
  - **Related Terms**: Positional Encoding, Vocabulary, Hidden State
  - **Component Of**: Transformer Architecture

  ## Usage Context

  "Token embeddings provide the initial dense representation of discrete tokens for processing by transformer layers."

  #### References
  - Vaswani, A., et al. (2017). "Attention Is All You Need". arXiv:1706.03762
		  - Mikolov et al. (2013). "Efficient Estimation of Word Representations in Vector Space". arXiv:1301.3781

		  ---

		  *Ontology Term managed by AI-Grounded Ontology Working Group*
		  *UK English Spelling Standards Applied*






  ## Academic Context

  - Token embedding is a fundamental concept in natural language processing and deep learning, serving as the initial step in converting discrete tokens into continuous vector representations.
  - These embeddings provide the semantic encoding that enables models, particularly transformers, to process and understand language.
  - The academic foundation traces back to early word embedding techniques like Word2Vec and GloVe, evolving into contextual embeddings powered by transformer architectures such as BERT and GPT.
  - Embeddings are typically implemented as learnable lookup tables mapping each token in a vocabulary to a dense vector, which is then combined with positional encodings to preserve token order.

  ## Current Landscape (2025)

  - Token embeddings remain central to transformer-based models, which dominate state-of-the-art natural language understanding and generation tasks.
  - Modern embeddings are often contextual, dynamically adjusting based on surrounding tokens via self-attention mechanisms.
  - Instruction-tuned embedding models have emerged, optimising embeddings for specific tasks such as semantic search or document ranking, reflecting a shift from generic to purpose-driven embeddings.
  - Some recent research challenges the traditional view of embeddings as semantic containers, suggesting that high-level semantics emerge from the transformer's architecture and training data rather than the embeddings themselves.
  - Industry adoption is widespread across cloud platforms, AI startups, and research institutions.
  - Leading models include BERT, GPT-4, LLaMA, and Mistral, all utilising advanced embedding techniques.
  - Technical capabilities:
  - Embeddings efficiently encode semantic and syntactic information but can be limited by vocabulary size and out-of-vocabulary tokens.
  - Weight tying between embedding and un-embedding layers reduces parameter count and improves training stability.
  - Standards and frameworks:
  - Embedding layers are standard components in transformer libraries such as Hugging Face Transformers and TensorFlow.
  - Tokenisation and embedding strategies continue to evolve, with Unicode-centric tokenisers gaining attention for universal text coverage.

  ## Research & Literature

  - Bochkov, A. (2025). *Emergent Semantics Beyond Token Embeddings: Transformer LMs with Frozen Visual Unicode Representations*. Transactions on Machine Learning Research, 2025. DOI: 10.48550/arXiv.2507.04886
  - This paper demonstrates that transformer models can achieve strong semantic performance even with frozen, non-trainable embeddings derived from Unicode visual structure, suggesting semantics emerge from model architecture rather than embeddings alone.
  - Vaswani, A., et al. (2017). *Attention Is All You Need*. Advances in Neural Information Processing Systems.
  - The seminal work introducing the transformer architecture and embedding concepts.
  - Devlin, J., et al. (2019). *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*. NAACL.
  - Introduced contextual embeddings that revolutionised NLP.
  - Ongoing research explores instruction-tuned embeddings, multimodal embeddings combining text, images, and audio, and embedding compression techniques for efficiency.

  ## UK Context

  - The UK hosts several AI research centres contributing to embedding research, including the Alan Turing Institute in London and universities in North England.
  - North England innovation hubs:
  - Manchester and Leeds have burgeoning AI clusters focusing on NLP applications, with startups and academic groups advancing embedding techniques for healthcare and finance.
  - Newcastle and Sheffield contribute through interdisciplinary projects combining linguistics and computer science, often collaborating with industry partners.
  - Regional case studies:
  - Manchester-based AI firms have integrated instruction-tuned embeddings into semantic search products tailored for UK legal and financial sectors.
  - Leeds researchers have published work on embedding robustness and fairness, addressing biases in token representations.

  ## Future Directions

  - Emerging trends:
  - Continued development of instruction-tuned and task-specific embeddings to improve downstream performance.
  - Expansion of multimodal embeddings integrating diverse data types beyond text.
  - Exploration of embedding-free or frozen embedding models as suggested by recent research, potentially reducing training complexity.
  - Anticipated challenges:
  - Balancing embedding size and model efficiency.
  - Mitigating biases encoded in embeddings.
  - Ensuring embeddings generalise well across languages and dialects, including UK regional varieties.
  - Research priorities:
  - Understanding the precise role of embeddings in semantic representation.
  - Developing universal tokenisation schemes that accommodate diverse scripts and languages.
  - Enhancing interpretability of embeddings within transformer models.

  ## References

  1. Bochkov, A. (2025). *Emergent Semantics Beyond Token Embeddings: Transformer LMs with Frozen Visual Unicode Representations*. Transactions on Machine Learning Research. DOI: 10.48550/arXiv.2507.04886  
  2. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). *Attention Is All You Need*. Advances in Neural Information Processing Systems.  
  3. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*. NAACL.  
  4. PricePedia. (2025). *Tokens & Transformers: the heart of modern Machine Learning models*.  
  5. GoCodeo. (2025). *Next-Gen Embeddings in 2025: Transformers, Instruction-Tuning, Multimodal Vectors*.  

  (And yes, token embeddings may not hold all the meaning, but they certainly hold the keys to the kingdom — or at least to your next chatbot’s vocabulary.)


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance

