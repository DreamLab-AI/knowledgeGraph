flowchart LR

- ### OntologyBlock
  id:: multimodal
  - ontology:: true
  - public-access:: true
  - term-id:: MV-9703
  - preferred-term:: flowchart LR
  - source-domain:: mv
  - status:: draft

### Multi-Modal Large Language Models (LLMs)
- **Introduction:**
		- [[Large language models]] are adept at generating coherent text sequences, predicting word probabilities and co-occurrences.
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
-
- ```mermaid
  flowchart LR
  A[Text Input] -->|Processed by LLM| B[Text Tokens]
  B -->|Alongside Image Tokens| D[Mixed Embeddings]
  C[Image Input] -->|Encoded via VQ-VAE| E[Image Tokens]
  E --> D
  D -->|Next Token Prediction| F[Generated Sequence]
  F -->|Decoded| G[Output Image & Text]
  ```
-
- Some random links
	- Apple Ferret is a [[Multimodal]] [[Large language models]] from [[Apple]] that can understand and ground anything at any granularity [apple/ml-ferret (github.com)](https://github.com/apple/ml-ferret)
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
		-
		-


## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable

## Related Content: Multi Agent RAG scrapbook

public:: true

- Lit survey for [[PEOPLE]] [[David Tully]] [[MUST]] In here for now.
- {{video https://www.youtube.com/watch?v=LhWtpV-ZEeI}}
- [chat-Sure thing! Below, were going to methodically construct a series of diagrams as code using Mermaid syntax and detailed technical explanations. Well walk through the entire pipeline, from data ingestion to user .txt](../assets/chat-Sure_thing!_Below,_were_going_to_methodically_construct_a_series_of_diagrams_as_code_using_Mermaid_syntax_and_detailed_technical_explanations._Well_walk_through_the_entire_pipeline,_from_data_ingestion_to_user_1716930774582_0.txt)
- # Distilling Social Complexity: A Knowledge Graph and Ontology Approach for Immersive Environments
- ## Introduction
	- Capturing complex social dynamics in real-time immersive environments is a novel research area
	- Combines knowledge graphs, ontologies, and multi-modal Large Language Models (LLMs)
	- Aims to distil and bound complexity to constrain errors in deep search by naive multi-modal models
- ## Defining the Scope and Ontology
	- Identify the specific type of social interactions being modelled (e.g., professional events, casual gatherings, online communities)
	- Develop a formal ontology capturing core concepts:
		- Actors: Individuals, groups, organizations
		- Relationships: Friend, colleague, family, competitor, influencer
		- Interactions: Conversation, gesture, post, like, share
		- Context: Location, time, event, shared activities
		- Social Signals: Proximity, eye contact, tone of voice, facial expressions
	- Define properties and attributes to describe these concepts in detail
- ## Knowledge Graph Construction and Real-Time Updates
- ### Data Ingestion & Knowledge Extraction
  ```mermaid
  graph LR
      subgraph Data Ingestion & Knowledge Extraction
          direction LR
          subgraph A["User Data"]
              direction TB
              A1["Social Media"] --> A2["Parser (e.g., Beautiful Soup)"]
              A3["Event Registration"] --> A2
              A4["User-Provided Bios"] --> A2
          end
          subgraph B["Immersive Space Data"]
              direction TB
              B1["Location Tracking"] --> B2["Sensor Fusion (e.g., ROS)"]
              B2["Proximity Sensors"] --> B2
              B3["Wearable Biometrics"] --> B2
              B4["Audio/Video Feeds"] --> B5["Speech/Vision APIs (e.g., Google Cloud Vision, AssemblyAI)"]
          end
          A2 --> C["Knowledge Graph Database (e.g., Neo4j, TigerGraph)"]
          B2 --> C
          B5 --> D["Natural Language Processing (e.g., spaCy, Hugging Face Transformers)"]
          D --> C
          subgraph E["Ontology Engineering"]
              direction TB
              E1["Ontology Editor (e.g., Protégé, WebProtégé)"] --> E2["Ontology (OWL/RDF)"]
              E2 --> C
          end
      end
  ```
- ### Knowledge Graph Construction Flow
  ```mermaid
  graph TB
      subgraph Knowledge Graph Construction
          direction TB
          A["Formal Ontology (OWL/RDF)"] --> B1["Entity Resolution"]
          B1 --> C["Graph Population"]
          subgraph Data Ingestion
              direction LR
              D[Social Media] -->|Beautiful Soup| B1
              E[Event Registration] -->|Custom Connectors| B1
              F[Immersive Data] -->|ROS| B1
          end
          C --> G["Graph Database (Neo4j, TigerGraph)"]
      end
      subgraph Real-Time Processing
          direction TB
          H[Sensor Fusion] --> I[Fusion Data]
          I --> J[Graph Updates]
          J --> G
      end
  ```
- ## Constrained Multi-Modal Retrieval Augmented Generation
- ### Retrieval Augmented Generation Flow
  ```mermaid
  graph LR
      subgraph Multi-Modal Retrieval Augmented Generation
          direction LR
          A[User/System Queries] --> B["Query Decomposition<br>(spaCy, Rasa)"]
          B --Ontology--> C[Ontology-Guided Search]
          B --Vectors--> D[Vector Search<br>(Pinecone, Weaviate)]
          C --> E[Relevant Knowledge Subgraph]
          D --> E
          E --> F["Constrained Response Generation<br>(GPT-3/4 with Prompt Engineering)"]
          F --> G["Response Validation<br>(Fact-Checking APIs, Rules)"]
          G --> H[User Interface<br>(Immersive Environment)]
      end
  ```
- ## Applications and Ethical Considerations
- ### Applications Overview
  ```mermaid
  graph TD
      A["Enhanced Social<br>Awareness"] -->|Insights| B[User Interaction]
      B --> C["Personalized<br>Recommendations"]
      A --> D["Social<br>Simulations"]
      subgraph Ethical Considerations
          E[Privacy and Consent]
          F[Bias Mitigation]
          G[Transparency]
          H[Security Measures]
          E & F & G & H --> I[Policy Compliance]
      end
      subgraph Applications
          I1["Networking<br>Events"] --> B
          I2["Social<br>Gatherings"] --> B
          I3["Online<br>Communities"] --> B
          I4["Virtual<br>Labs"] --> D
      end
  ```
- ### Ethical Design and Deployment
	- Establish clear guidelines for data collection, storage, and usage
	- Ensure user privacy and agency
	- Address potential biases in data sources, models, and algorithms
	- Promote fair and inclusive social environments
	- Make the system's reasoning and recommendations understandable to users
	- Foster trust and accountability
- ## Challenges and Research Directions
	- Efficiently process and integrate large-scale, heterogeneous data streams from the immersive environment
	- Accurately recognise and interpret subtle social cues from multi-modal data
		- Account for cultural differences and individual variations
	- Adapt the ontology over time to accommodate evolving social contexts and norms
	- Prioritize user well-being, privacy, and autonomy throughout the system's development and deployment
- ## Conclusion
	- Ambitious undertaking with profound implications
	- Combines knowledge graphs, ontologies, and constrained multi-modal LLMs
	- Creates truly immersive and insightful social experiences
	- Requires careful design, continuous refinement, and strong ethical foundations
	
	  The mermaid diagrams should render correctly inline, providing visual representations of the key components and their interactions within this metaverse ecosystem. The document maintains the technical detail, nuance, tool choices, and buildout advice from the original, while integrating the best aspects of the mermaid diagrams and restructuring the content into a clear narrative arc using Logseq markdown.

## Current Landscape (2025)

- Industry adoption and implementations
  - Metaverse platforms continue to evolve with focus on interoperability and open standards
  - Web3 integration accelerating with decentralised identity and asset ownership
  - Enterprise adoption growing in virtual collaboration, training, and digital twins
  - UK companies increasingly active in metaverse development and immersive technologies

- Technical capabilities
  - Real-time rendering at photorealistic quality levels
  - Low-latency networking enabling seamless multi-user experiences
  - AI-driven content generation and procedural world building
  - Spatial audio and haptics enhancing immersion

- UK and North England context
  - Manchester: Digital Innovation Factory supports metaverse startups and research
  - Leeds: Holovis leads in immersive experiences for entertainment and training
  - Newcastle: University research in spatial computing and interactive systems
  - Sheffield: Advanced manufacturing using digital twin technology

- Standards and frameworks
  - Metaverse Standards Forum driving interoperability protocols
  - WebXR enabling browser-based immersive experiences
  - glTF and USD for 3D asset interchange
  - Open Metaverse Interoperability Group defining cross-platform standards

## Metadata

- **Last Updated**: 2025-11-16
- **Review Status**: Automated remediation with 2025 context
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
