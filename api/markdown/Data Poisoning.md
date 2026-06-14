public:: true

# Data Poisoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eb79e82ce2dd253246564c5ce600ec7139878ea1b6f4edfde5d6f6518b79a801",
  "@type": "Page",
  "vc:slug": "data-poisoning",
  "title": "Data Poisoning",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ball2020metaverse",
      "vc:label": "ball2020metaverse"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23894-2023",
      "vc:label": "ISO/IEC 23894:2023"
    },
    {
      "@id": "urn:visionflow:linked:mitre-atlas",
      "vc:label": "MITRE ATLAS"
    },
    {
      "@id": "urn:visionflow:linked:ncsc",
      "vc:label": "NCSC"
    },
    {
      "@id": "urn:visionflow:linked:neural-networks",
      "vc:label": "neural networks"
    },
    {
      "@id": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "vc:label": "NIST AI Risk Management Framework"
    },
    {
      "@id": "urn:visionflow:linked:wouters2022",
      "vc:label": "Wouters2022"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "computer vision"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:diffusion-models",
      "vc:label": "Diffusion Models"
    },
    {
      "@id": "urn:visionflow:owl:class:fooocus",
      "vc:label": "Fooocus"
    },
    {
      "@id": "urn:visionflow:owl:class:knowledge-graphing",
      "vc:label": "Knowledge Graphing"
    },
    {
      "@id": "urn:visionflow:owl:class:latent-space",
      "vc:label": "latent space"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:transformers",
      "vc:label": "Transformers"
    },
    {
      "@id": "urn:visionflow:owl:class:unreal-engine",
      "vc:label": "Unreal Engine"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0085"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Data Poisoning"
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
  "@id": "urn:ngm:class:data-poisoning",
  "@type": "Class",
  "label": "Data Poisoning",
  "definition": "A training-time adversarial attack where malicious actors inject, modify, or manipulate training data to compromise model integrity, causing targeted misclassifications, backdoor triggers, or general performance degradation.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    },
    {
      "@id": "urn:ngm:class:adversarial-attack",
      "label": "Adversarial Attack"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:training-data", "label": "Training Data"},
      {"@id": "urn:ngm:class:model-training", "label": "Model Training"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:adversarial-robustness", "label": "Adversarial Robustness"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:data-augmentation-strategies", "label": "Data Augmentation Strategies"},
      {"@id": "urn:ngm:class:federated-learning", "label": "Federated Learning"},
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:data-poisoning:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eb79e82ce2dd253246564c5ce600ec7139878ea1b6f4edfde5d6f6518b79a801"
  },
  "vc:resolutions": [
    {
      "raw": "[[ball2020metaverse]]",
      "resolved": "urn:visionflow:linked:ball2020metaverse",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23894:2023]]",
      "resolved": "urn:visionflow:linked:iso-iec-23894-2023",
      "kind": "StubLink"
    },
    {
      "raw": "[[MITRE ATLAS]]",
      "resolved": "urn:visionflow:linked:mitre-atlas",
      "kind": "StubLink"
    },
    {
      "raw": "[[NCSC]]",
      "resolved": "urn:visionflow:linked:ncsc",
      "kind": "StubLink"
    },
    {
      "raw": "[[neural networks]]",
      "resolved": "urn:visionflow:linked:neural-networks",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST AI Risk Management Framework]]",
      "resolved": "urn:visionflow:linked:nist-ai-risk-management-framework",
      "kind": "StubLink"
    },
    {
      "raw": "[[Wouters2022]]",
      "resolved": "urn:visionflow:linked:wouters2022",
      "kind": "StubLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[computer vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Diffusion Models]]",
      "resolved": "urn:visionflow:owl:class:diffusion-models",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Fooocus]]",
      "resolved": "urn:visionflow:owl:class:fooocus",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graphing]]",
      "resolved": "urn:visionflow:owl:class:knowledge-graphing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network Latent Space]]",
      "resolved": "urn:visionflow:owl:class:latent-space",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Transformers]]",
      "resolved": "urn:visionflow:owl:class:transformers",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Unreal Engine]]",
      "resolved": "urn:visionflow:owl:class:unreal-engine",
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
  - A training-time adversarial attack where malicious actors inject, modify, or manipulate training data to compromise model integrity, causing targeted misclassifications, backdoor triggers, or general performance degradation.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:DataPoisoning
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - **requires**: Training Data, Model Training (the attack operates on training data during the training process)
  - **contrastsWith**: Adversarial Robustness (robustness techniques are the defensive response to poisoning)
  - **relatedTo**: Data Augmentation Strategies, Federated Learning, Machine Learning (augmentation can mask poisoning; federated learning faces distributed poisoning risks; machine learning is the broader affected domain)

- ### Content
  - A training-time adversarial attack where malicious actors inject, modify, or manipulate training data to compromise model integrity, causing targeted misclassifications, backdoor triggers, or general performance degradation.
  - ### Original Content
		- ```
  # Data Poisoning

		  **Term ID**: AI-0085
		  **Category**: Foundational Concept
		  **Status**: Active
		  **Last Updated**: 2025-10-27

		  ## Definition

		  A training-time adversarial attack where malicious actors inject, modify, or manipulate training data to compromise model integrity, causing targeted misclassifications, backdoor triggers, or general performance degradation.

		  ## Formal Specification

		  ```yaml
		  term: Data Poisoning
		  definition: "Malicious manipulation of training data to compromise model"
		  domain: AI Security
		  type: Attack (Training-Time)
		  attack_types: [targeted, untargeted, backdoor, availability]
		  impact: [misclassification, backdoors, performance_degradation]
		  defenses: [data_provenance, anomaly_detection, robust_training]
		  ```

  #### References
  1. **MITRE ATLAS** - Technique AML.T0020: Poison Training Data
		  2. **Biggio, B. & Roli, F. (2018)** - "Wild Patterns: Ten Years After the Rise of Adversarial Machine Learning"
		  3. **ISO/IEC 23894:2023** - AI Risk Management (security considerations)

		  ## Types of Data Poisoning

		  ### 1. Targeted Poisoning
		  **Goal**: Misclassify specific test instances
		  **Example**: Poison training data so model classifies specific spam as legitimate
		  **Impact**: Targeted errors

		  ### 2. Untargeted Poisoning
		  **Goal**: General performance degradation
		  **Example**: Add random noise to many training samples
		  **Impact**: Reduced overall accuracy

		  ### 3. Backdoor Injection
		  **See**: Backdoor Attack (AI-0089)
		  **Goal**: Insert trigger pattern causing specific behavior
		  **Example**: Model classifies any image with green square as "cat"
		  **Impact**: Hidden vulnerability

		  ### 4. Availability Attack
		  **Goal**: Degrade model to unusable state
		  **Example**: Maximize training loss through poisoning
		  **Impact**: Model failure

		  ## Attack Execution

		  ### Access Requirements
		  - **Data Collection**: Poison at source (e.g., web scraping)
		  - **Data Labeling**: Malicious annotators
		  - **Data Storage**: Compromise database or repository
		  - **Data Aggregation**: Inject during federated learning

		  ### Poisoning Strategies
		  1. **Label Flipping**: Change labels of training samples
		  2. **Sample Injection**: Add malicious samples
		  3. **Feature Manipulation**: Modify input features
		  4. **Gradient Ascent**: Optimize poison samples to maximize error

		  ## Detection Methods

		  ### Data-Level Detection
		  1. **Statistical Outlier Detection**: Identify anomalous samples
		  2. **Data Provenance Tracking**: Verify data sources
		  3. **Consistency Checks**: Cross-validate annotations

		  ### Model-Level Detection
		  1. **Performance Monitoring**: Detect degradation on validation set
		  2. **Influence Analysis**: Identify high-influence training samples
		  3. **Activation Clustering**: Detect backdoor triggers via neuron activations

		  ## Defenses

		  ### Data Sanitization
		  - Remove outliers
		  - Verify data sources
		  - Multiple annotator voting
		  - Anomaly detection

		  ### Robust Training
		  - RONI (Reject On Negative Influence): Remove high-negative-influence samples
		  - Trim training: Ignore samples with highest loss
		  - Differential privacy: Limit individual sample influence

		  ### Data Provenance
		  - Blockchain for data tracking
		  - Cryptographic signatures
		  - Secure data pipelines

		  ## Real-World Examples

		  1. **Microsoft Tay (2016)**: Users poisoned chatbot through interactions
		  2. **Federated Learning Attacks**: Malicious participants poison aggregated model
		  3. **Spam Filter Evasion**: Spammers manipulate feedback to poison filters
		  4. **Content Recommendation Poisoning**: Fake engagement to bias recommendations

		  ## Relationships

		  - **Type Of**: Adversarial Attack (AI-0084)
		  - **Threatens**: Security (AI-0071), Model Integrity
		  - **Occurs At**: Training Time
		  - **Related To**: Backdoor Attack (AI-0089), Trojan Attack (AI-0090)

		  ## Best Practices

		  1. **Verify data sources** and provenance
		  2. **Multi-source validation** for labels
		  3. **Monitor for anomalies** in training data
		  4. **Robust training methods** (differential privacy, robust optimization)
		  5. **Regular data audits** before retraining
		  6. **Segregate untrusted data** sources

		  ## Related Terms

		  - Adversarial Attack (AI-0084)
		  - Security (AI-0071)
		  - Backdoor Attack (AI-0089)
		  - Data Quality

		  ## Version History

		  - **1.0** (2025-10-27): Initial definition based on MITRE ATLAS and research literature

		  ```

  - ### [LATTE3D](https://research.nvidia.com/labs/toronto-ai/LATTE3D/) - * LATTE3D is a novel method for generating 3D shapes represented as signed distance functions (SDFs) using a latent space.

  - The method organises 3D shape data into a continuous and disentangled latent space, allowing for intuitive shape manipulation and exploration.

  - LATTE3D leverages a vector-quantised variational autoencoder (VQ-VAE) to learn a discrete codebook of 3D shape primitives.

  - By combining these primitives through learned [[neural networks]] decoders, it generates complex and detailed 3D shapes.

  - The approach enables conditional shape generation based on various attributes, such as object category or user-specified parameters.

  - It allows for semantic shape editing by traversing the learned latent space, enabling modifications to the generated 3D shape's properties.

  - LATTE3D improves the quality and diversity of generated 3D shapes compared to previous latent-based generative models.

  - The learned latent space facilitates applications like shape interpolation, analogy creation, and shape completion, offering a flexible framework for 3D content creation.

  - The system shows promise for applications in [[computer vision]], game development, and design, offering a controllable way to generate varied 3D assets.

  - The method's reliance on signed distance functions (SDFs) allows for direct use in rendering pipelines and other geometric processing tasks.
		- <iframe src="https://research.nvidia.com/labs/toronto-ai/LATTE3D/" style="width: 100%; height: 600px"></iframe>

  - ### [Firecrawl](https://github.com/mendableai/firecrawl)
		- A tool that turns entire websites into LLM-ready markdown or structured data.

  - ### **DO play with tools**
		- Use the tools that come free with where you already keep your data (think Google at this time, but also Perplexity)
		- Start to sort out your data. Learn it's structure, and whether it's useful to optimise it.
		- High quality data gives high quality outcomes.
		- See if there's something on the market that is trustable when your data and product are ready, don't spread data about too much.
		- Do check if this is worth it. Get an expert opinion. Bloomberg spent around $20M on a model based on their financial data only to find that GPT4 [still beats it](https://arxiv.org/pdf/2305.05862.pdf).
		- Think about integrating the open tooling into your product development, consider the software licenses. Take **some** legal advice.
		- Use the paid and private version of [RunDiffusion](https://app.rundiffusion.com/) to start to play with the open tooling. [[Fooocus]] is new and very accessible and on that platform with **everything** else of value.

		- ### Core Concept
			- RAG is fundamentally about search - finding and providing the most relevant information to answer a query. This isn't limited to vector databases but encompasses any method of retrieving pertinent data.

		- ### Optimisation Strategy
			- Focus on solving the search problem rather than switching between different database providers. Success comes from:
				- Understanding your top queries and optimising for them
				- Ensuring your data contains the information users need
				- Tuning retrieval parameters (top-k results, similarity thresholds)
				- Testing different search techniques for your specific use case

  - ## Innovative Pilot Project Using Landfill Methane Emissions for Powering Data Processing

  - ## Section 2: The Data War
		- OpenAI partners with Axel Springer to provide news and citations to ChatGPT.
		- NYT sues OpenAI to shut down all GPT models.
		- Apple offers $50m for data contracts with publishers.
		- Increased interest in synthetic data at NeurIPS and Deepmind.

  - ## Section 9: Conclusion
		- Key themes were data, infrastructure, multimodal, and tooling.
		- Progress made across models, verticals, tools, and infrastructure.

		- ##### Geolocated AR
			- Overlaying geospecific data into augmented reality (think Pokemon Go) isprobably the ultimate utility of digital twin datasets. It’s such acompelling application space that we will have more on this later.

		- ##### Endless HODL
			- It’s possible that there’s a problem with people not wanting to sell the asset, because they are predisposed to a particular fervour promoted within the community. This can be seen in the [glassnode data](https://en.macromicro.me/charts/32355/bitcoin-supply-last-active-1plus-years-ago),where the black line in Figure<a href="#fig:notselling" data-reference-type="ref" data-reference="fig:notselling">4.9</a>shows that the asset held for more than a year (illiquid) has increased over the years.
			- ![](./assets/71c52745c51ecfc78ab76daa5b5d6826e950ec39.jpg)
			- Supply of bitcoin that <a href="https://en.macromicro.me/charts/32355/bitcoin-supply-last-active-1plus-years-ago">hasn’t moved</a> for over 1 year
			- There’s real recalcitrance about using the asset as a money, which potentially negatively impacts the security model[[Wouters2022]] and leads to:

  - ### [Pinecone](https://www.pinecone.io/)
		- A vector database for AI applications.

  - ### Meta Ray Bans
		- ![rbm-plp-hero-d-data.mp4](assets/rbm-plp-hero-d-data_1718993826789_0.mp4)
		- The Meta Ray-Ban smart glasses, developed in partnership with EssilorLuxottica, offer a range of advanced features in a [stylish form factor](https://about.fb.com/news/2023/09/new-ray-ban-meta-smart-glasses/). Here's a technical overview:

  - ## Sequence Diagram
  - ```mermaid sequenceDiagram
	      participant Capture
	      participant Ingest
	      participant Segment
	      participant Pose_Processing as Pose Analysis
	      participant Gaze_Discrimination as Gaze Analysis
	      participant Face_Processing as Face Analysis
	      participant Synthesis
	      participant Output_Build as JSON Builder
	      participant Streaming

	      Capture->>Ingest: High-Performance Coax
	      Ingest->>Segment: Segment and locate
	      Segment->>Pose_Processing: Workstation Backplane
	      Segment->>Face_Processing: Workstation Backplane
	      Segment->>Gaze_Discrimination: Workstation Backplane
	      Pose_Processing->>Synthesis: NVLink
	      Gaze_Discrimination->>Synthesis: NVLink
	      Face_Processing->>Synthesis: NVLink
	      Synthesis->>Output_Build: Combine Data
	      Output_Build->>Streaming: 10G Fiber UDP ```

			- ### Nostr Integration
				- **NostrEvent:**
					- **Properties:**
						- `relayUrl`: (`xsd:anyURI`) The URL of the Nostr relay where the event was published.
						- `kind`: (`xsd:string`) The type or category of the event (e.g., "set_metadata", "text_note", "reaction", "channel_creation", "key_rotation").
						- `content`: (`xsd:string`) The content of the message or event data.
						- `tags`: (`linkedjson:ObjectProperty`, `range`: `metaverse:NostrTag`) A list of tags associated with the event.
				- **NostrTag:**
					- `@type`: `linkedjson:Class`
					- `rdfs:label`: "Nostr Tag"
					- `rdfs:comment`: "Represents a tag associated with a NostrEvent, providing context and metadata."
					- **Properties:**
						- `type`: (`xsd:string`) The type of tag (e.g., "p", "e", "t").
						- `value`: (`xsd:string`) The value of the tag.

			- ## TODO
				- **AI Agent Capabilities:** Expand the capabilities property of `AIAgent` to include specific actions and functions related to Bitcoin, RGB, and Nostr, such as "create_digital_asset", "transfer_ownership", "publish_nostr_event", etc.
				- **Event Logging and Attestation:** Consider adding mechanisms for logging significant events and generating cryptographic attestations, which could be used for dispute resolution or auditing purposes. This would operate on an automated threshold trigger system mediated by LLM, and would wrap the recent interactions between parties in pubkey encrypted data blobs, sending them to both parties alongside a report of the trigger event. This would potentially allow action by the parties in their jurisdictions. The data would then be deleted from the metaverse.

  - ### Practical Implementation
		- MCP servers can provide:
			- Tools for specific actions
			- Prompts for common use cases
			- Files and documents
			- Real-time data feeds
		- The discovery process allows agents to understand available resources dynamically, adapting their capabilities based on connected services.
  - [SLOP - Join the Revolution](https://i-love-slop.com/)
  - [agnt-gg/slop: The place for SLOP](https://github.com/agnt-gg/slop)
  - ![image.png](assets/image_1741526343816_0.png)
  - https://github.com/NightTrek/Ollama-mcp

		- ### Asset Management
			- Asset organization: Nucleus Server provides a structured way to organize and manage 3D assets, including USD files, textures, and other related data
			- Metadata and tagging: Users can assign metadata and tags to assets for easier searching, filtering, and categorization
			- Access control: Nucleus Server allows for granular access control, enabling administrators to set permissions and restrict access to specific assets or projects

		- ### Omniverse Connector Integration
			- Application integration: Nucleus Server integrates with various 3D software applications through the Omniverse Connector plugin, enabling seamless synchronization and exchange of USD data
			- Live updates: Changes made in connected applications are automatically synchronized with Nucleus Server, ensuring that all collaborators have access to the latest version of the assets

		- ##### 3️⃣ Linear Regression
		- **Description**: Models linear relationships between variables.
		- **Explain**: Like predicting your height based on your age.
		- **Medium Post:** [A short into to Linear Regression](https://medium.com/pew-research-center-decoded/a-short-intro-to-linear-regression-analysis-using-survey-data-ff39468f8afb)

		- ##### 4️⃣ Logistic Regression
		- **Description**: Used for binary classification problems.
		- **Explain**: Like deciding if something is true or false.
		- **Paper**: [Logistic regression in data analysis: An overview](https://www.researchgate.net/profile/Maher-Maalouf-2/publication/283211221_IJDATS_Logistic_Regression_Rare_Events/data/562e0fb508ae518e34827577/IJDATS-Logistic-Regression-Rare-Events.pdf)

		- ##### 1️⃣ K-Means Clustering
		- **Description**: Partitions data into k distinct clusters.
		- **Explain Like I'm New**: Like organizing similar things into different groups.
		- **Paper**: [K-means clustering algorithms: A comprehensive review, variants, and advances](https://www.sciencedirect.com/science/article/pii/S0020025522014633?)

		- #### 6️⃣ [[Diffusion Models]] (Generative Models)
			- **Description**: Advanced models that 'diffuse' data to create new, synthetic outputs, using efficient [[Transformers]]
			- **Explain**: Imagine starting with a noisy, random pattern and gradually shaping it into a clear picture.
			- **Paper**: [Diffusion Models: A Comprehensive Survey of Methods and Applications](https://arxiv.org/abs/2311.10242)  *(Note: This covers the lot including:)*

		- ##### Data Collection and Storage
		- Photographs and metadata can be logged and collected by a remote team at
		   a later date or uploaded regularly through a satellite link (e.g.,
		   Starlink). The data storage system can be designed to be both secure and
		   resilient, ensuring that the collected data remains available and
		   accessible for future analysis and decision-making.

  - ## Information Management
		- It will ALWAYS help the AI for have more data about you. This can be done in a few ways

		- ### DOING Knowledge Graphs
			- [[Knowledge Graphing]] can help you to organise semi structured data.
			- DOING Obsidian
			- DONE Logseq
			- DONE Notion

  - ### [LATTE3D](https://research.nvidia.com/labs/toronto-ai/LATTE3D/) - * LATTE3D is a novel method for generating 3D shapes represented as signed distance functions (SDFs) using a latent space.

  - The method organises 3D shape data into a continuous and disentangled latent space, allowing for intuitive shape manipulation and exploration.

  - LATTE3D leverages a vector-quantised variational autoencoder (VQ-VAE) to learn a discrete codebook of 3D shape primitives.

  - By combining these primitives through learned [[neural networks]] decoders, it generates complex and detailed 3D shapes.

  - The approach enables conditional shape generation based on various attributes, such as object category or user-specified parameters.

  - It allows for semantic shape editing by traversing the learned latent space, enabling modifications to the generated 3D shape's properties.

  - LATTE3D improves the quality and diversity of generated 3D shapes compared to previous latent-based generative models.

  - The learned latent space facilitates applications like shape interpolation, analogy creation, and shape completion, offering a flexible framework for 3D content creation.

  - The system shows promise for applications in [[computer vision]], game development, and design, offering a controllable way to generate varied 3D assets.

  - The method's reliance on signed distance functions (SDFs) allows for direct use in rendering pipelines and other geometric processing tasks.
		- <iframe src="https://research.nvidia.com/labs/toronto-ai/LATTE3D/" style="width: 100%; height: 600px"></iframe>

  - ### [Firecrawl](https://github.com/mendableai/firecrawl)
		- A tool that turns entire websites into LLM-ready markdown or structured data.

  - ### **DO play with tools**
		- Use the tools that come free with where you already keep your data (think Google at this time, but also Perplexity)
		- Start to sort out your data. Learn it's structure, and whether it's useful to optimise it.
		- High quality data gives high quality outcomes.
		- See if there's something on the market that is trustable when your data and product are ready, don't spread data about too much.
		- Do check if this is worth it. Get an expert opinion. Bloomberg spent around $20M on a model based on their financial data only to find that GPT4 [still beats it](https://arxiv.org/pdf/2305.05862.pdf).
		- Think about integrating the open tooling into your product development, consider the software licenses. Take **some** legal advice.
		- Use the paid and private version of [RunDiffusion](https://app.rundiffusion.com/) to start to play with the open tooling. [[Fooocus]] is new and very accessible and on that platform with **everything** else of value.

		- ### Core Concept
			- RAG is fundamentally about search - finding and providing the most relevant information to answer a query. This isn't limited to vector databases but encompasses any method of retrieving pertinent data.

		- ### Optimisation Strategy
			- Focus on solving the search problem rather than switching between different database providers. Success comes from:
				- Understanding your top queries and optimising for them
				- Ensuring your data contains the information users need
				- Tuning retrieval parameters (top-k results, similarity thresholds)
				- Testing different search techniques for your specific use case

  - ## Innovative Pilot Project Using Landfill Methane Emissions for Powering Data Processing

  - ## Section 2: The Data War
		- OpenAI partners with Axel Springer to provide news and citations to ChatGPT.
		- NYT sues OpenAI to shut down all GPT models.
		- Apple offers $50m for data contracts with publishers.
		- Increased interest in synthetic data at NeurIPS and Deepmind.

  - ## Section 9: Conclusion
		- Key themes were data, infrastructure, multimodal, and tooling.
		- Progress made across models, verticals, tools, and infrastructure.

		- ##### Geolocated AR
			- Overlaying geospecific data into augmented reality (think Pokemon Go) isprobably the ultimate utility of digital twin datasets. It’s such acompelling application space that we will have more on this later.

		- ##### Endless HODL
			- It’s possible that there’s a problem with people not wanting to sell the asset, because they are predisposed to a particular fervour promoted within the community. This can be seen in the [glassnode data](https://en.macromicro.me/charts/32355/bitcoin-supply-last-active-1plus-years-ago),where the black line in Figure<a href="#fig:notselling" data-reference-type="ref" data-reference="fig:notselling">4.9</a>shows that the asset held for more than a year (illiquid) has increased over the years.
			- ![](./assets/71c52745c51ecfc78ab76daa5b5d6826e950ec39.jpg)
			- Supply of bitcoin that <a href="https://en.macromicro.me/charts/32355/bitcoin-supply-last-active-1plus-years-ago">hasn’t moved</a> for over 1 year
			- There’s real recalcitrance about using the asset as a money, which potentially negatively impacts the security model[[Wouters2022]] and leads to:

  - ### [Pinecone](https://www.pinecone.io/)
		- A vector database for AI applications.

  - ### Meta Ray Bans
		- ![rbm-plp-hero-d-data.mp4](assets/rbm-plp-hero-d-data_1718993826789_0.mp4)
		- The Meta Ray-Ban smart glasses, developed in partnership with EssilorLuxottica, offer a range of advanced features in a [stylish form factor](https://about.fb.com/news/2023/09/new-ray-ban-meta-smart-glasses/). Here's a technical overview:

  - ## Sequence Diagram
  - ```mermaid sequenceDiagram
	      participant Capture
	      participant Ingest
	      participant Segment
	      participant Pose_Processing as Pose Analysis
	      participant Gaze_Discrimination as Gaze Analysis
	      participant Face_Processing as Face Analysis
	      participant Synthesis
	      participant Output_Build as JSON Builder
	      participant Streaming

	      Capture->>Ingest: High-Performance Coax
	      Ingest->>Segment: Segment and locate
	      Segment->>Pose_Processing: Workstation Backplane
	      Segment->>Face_Processing: Workstation Backplane
	      Segment->>Gaze_Discrimination: Workstation Backplane
	      Pose_Processing->>Synthesis: NVLink
	      Gaze_Discrimination->>Synthesis: NVLink
	      Face_Processing->>Synthesis: NVLink
	      Synthesis->>Output_Build: Combine Data
	      Output_Build->>Streaming: 10G Fiber UDP ```

			- ### Nostr Integration
				- **NostrEvent:**
					- **Properties:**
						- `relayUrl`: (`xsd:anyURI`) The URL of the Nostr relay where the event was published.
						- `kind`: (`xsd:string`) The type or category of the event (e.g., "set_metadata", "text_note", "reaction", "channel_creation", "key_rotation").
						- `content`: (`xsd:string`) The content of the message or event data.
						- `tags`: (`linkedjson:ObjectProperty`, `range`: `metaverse:NostrTag`) A list of tags associated with the event.
				- **NostrTag:**
					- `@type`: `linkedjson:Class`
					- `rdfs:label`: "Nostr Tag"
					- `rdfs:comment`: "Represents a tag associated with a NostrEvent, providing context and metadata."
					- **Properties:**
						- `type`: (`xsd:string`) The type of tag (e.g., "p", "e", "t").
						- `value`: (`xsd:string`) The value of the tag.

			- ## TODO
				- **AI Agent Capabilities:** Expand the capabilities property of `AIAgent` to include specific actions and functions related to Bitcoin, RGB, and Nostr, such as "create_digital_asset", "transfer_ownership", "publish_nostr_event", etc.
				- **Event Logging and Attestation:** Consider adding mechanisms for logging significant events and generating cryptographic attestations, which could be used for dispute resolution or auditing purposes. This would operate on an automated threshold trigger system mediated by LLM, and would wrap the recent interactions between parties in pubkey encrypted data blobs, sending them to both parties alongside a report of the trigger event. This would potentially allow action by the parties in their jurisdictions. The data would then be deleted from the metaverse.

  - ### Practical Implementation
		- MCP servers can provide:
			- Tools for specific actions
			- Prompts for common use cases
			- Files and documents
			- Real-time data feeds
		- The discovery process allows agents to understand available resources dynamically, adapting their capabilities based on connected services.
  - [SLOP - Join the Revolution](https://i-love-slop.com/)
  - [agnt-gg/slop: The place for SLOP](https://github.com/agnt-gg/slop)
  - ![image.png](assets/image_1741526343816_0.png)
  - https://github.com/NightTrek/Ollama-mcp

		- ### Asset Management
			- Asset organization: Nucleus Server provides a structured way to organize and manage 3D assets, including USD files, textures, and other related data
			- Metadata and tagging: Users can assign metadata and tags to assets for easier searching, filtering, and categorization
			- Access control: Nucleus Server allows for granular access control, enabling administrators to set permissions and restrict access to specific assets or projects

		- ### Omniverse Connector Integration
			- Application integration: Nucleus Server integrates with various 3D software applications through the Omniverse Connector plugin, enabling seamless synchronization and exchange of USD data
			- Live updates: Changes made in connected applications are automatically synchronized with Nucleus Server, ensuring that all collaborators have access to the latest version of the assets

		- ##### 3️⃣ Linear Regression
		- **Description**: Models linear relationships between variables.
		- **Explain**: Like predicting your height based on your age.
		- **Medium Post:** [A short into to Linear Regression](https://medium.com/pew-research-center-decoded/a-short-intro-to-linear-regression-analysis-using-survey-data-ff39468f8afb)

		- ##### 4️⃣ Logistic Regression
		- **Description**: Used for binary classification problems.
		- **Explain**: Like deciding if something is true or false.
		- **Paper**: [Logistic regression in data analysis: An overview](https://www.researchgate.net/profile/Maher-Maalouf-2/publication/283211221_IJDATS_Logistic_Regression_Rare_Events/data/562e0fb508ae518e34827577/IJDATS-Logistic-Regression-Rare-Events.pdf)

		- ##### 1️⃣ K-Means Clustering
		- **Description**: Partitions data into k distinct clusters.
		- **Explain Like I'm New**: Like organizing similar things into different groups.
		- **Paper**: [K-means clustering algorithms: A comprehensive review, variants, and advances](https://www.sciencedirect.com/science/article/pii/S0020025522014633?)

		- #### 6️⃣ [[Diffusion Models]] (Generative Models)
			- **Description**: Advanced models that 'diffuse' data to create new, synthetic outputs, using efficient [[Transformers]]
			- **Explain**: Imagine starting with a noisy, random pattern and gradually shaping it into a clear picture.
			- **Paper**: [Diffusion Models: A Comprehensive Survey of Methods and Applications](https://arxiv.org/abs/2311.10242)  *(Note: This covers the lot including:)*

		- ##### Data Collection and Storage
		- Photographs and metadata can be logged and collected by a remote team at
		   a later date or uploaded regularly through a satellite link (e.g.,
		   Starlink). The data storage system can be designed to be both secure and
		   resilient, ensuring that the collected data remains available and
		   accessible for future analysis and decision-making.

  - ## Information Management
		- It will ALWAYS help the AI for have more data about you. This can be done in a few ways

		- ### DOING Knowledge Graphs
			- [[Knowledge Graphing]] can help you to organise semi structured data.
			- DOING Obsidian
			- DONE Logseq
			- DONE Notion

  - ## Critical Analysis
		- **Anecdotal Evidence and Generalisation:**
			- The report is based on Ramp's customer data, which may not represent the broader market. Growth figures could be skewed by a few large companies or early adopters, making the data less generalisable.
			- The focus on rapidly growing vendors like Anthropic might overshadow the fact that many AI tools are still in experimental or early adoption stages.
		- **Superficial Engagement vs. Deep Integration:**
			- Increased spending may reflect experimentation rather than deep, sustainable integration of AI tools. Companies often try new tools without committing long-term.
			- Retention rates might indicate vendor lock-in rather than genuine satisfaction, as switching costs can deter companies from exploring better options.
			- Rapid growth rates may not be sustainable. As the market matures, AI spending could slow as companies standardise on a few tools or find that efficiency gains do not meet expectations.

		- ### Optimisation Strategy
			- Focus on solving the search problem rather than switching between different database providers. Success comes from:
				- Understanding your top queries and optimising for them
				- Ensuring your data contains the information users need
				- Tasks that would require sequential searches and analysis
				- Situations where comprehensive coverage is more important than speed

  - ### Key Capabilities of GPT-4o
		- **Visual Analysis for Education**
			- **Description**: GPT-4o functions as an AI assistant during Microsoft Teams meetings, capable of summarizing minutes, identifying action items, retrieving relevant information from company databases, and assisting with data analysis tasks such as creating charts and reporting trends.
			- **Use Case**: Improves meeting productivity by handling administrative tasks and providing insights during discussions.
		- **Advanced Language Translation**

  - ## Post ‘Meta’ metaverse
		- The second order hype is likely a [speculativeplay](https://www.goldmansachs.com/insights/pages/framing-the-future-of-web-3.0-metaverse-edition.html)by major companies on the future of the internet. Grayscale investment[published areport](https://grayscale.com/wp-content/uploads/2021/11/Grayscale_Metaverse_Report_Nov2021.pdf)which views Metaverse as a potential trillion dollar global industry.Such industry reports are given to hyperbole, but it seems thetechnology is becoming the focus of technology investment narratives.Some notable exerts from a [2021report](https://www.jpmorgan.com/content/dam/jpm/treasury-services/documents/opportunities-in-the-metaverse.pdf)by American bank JPMorgan show how the legacy financial institutions seethis opportunity:
		- In the view of the report it“The metaverse is a seamless convergence of our physical and digital lives, creating a unified, virtual community where we can work, play, relax, transact, and socialize.”
		- They make a point which is at the core of this book, that value transaction within metaverses may remove effective border controls for working globally. Be this teleoperation of robots, education, or shop fronts in a completely immersive VR world. They say: it“One of the great possibilities of the metaverse is that it will massively expand access to the marketplace for consumers from emerging and frontier economies. The internet has already unlocked access to goods and services that were previously out of reach. Now, workers in low-income countries, for example, may be able to get jobs in western companies without having to emigrate.”
		- There is a passage which foreshadows some of the choices made in this book: it“Expanded data analytics and reporting for virtual spaces. These will be specifically designated for commercial and marketing usage and will track business key performance indicators (this already exists in some worlds, such as Cryptovoxels)”. More on this later.
		- There has been a reactive pushback against commercialisation andcorporateisation by the wider tech community, who are [concernedabout](https://www.metaversethics.org/p/mde02-metaverse-data-privacy-1)the aforementioned monetisation of biometrics. [Observers do nottrust](https://www.coindesk.com/layer2/2022/01/19/meta-leans-in-to-tracking-your-emotions-in-the-metaverse/)these ‘web’ players with such a potentially powerful social medium. Itis very plausible that this is all just a marketing play that goesnowhere and fizzles out. It is by no means clear that people want tospend time socialising globally in virtual and mixed reality. Thesemajor companies are making an asymmetric bet that if there is a moveinto virtual worlds, then they need to be stakeholders in thegatekeeping capabilities of those worlds.
		- To paraphrase Olson; the salesmen peddling the inevitability of themetaverse are stuck clinging to aesthetic details because, without them,they’re just talking about the internet. While virtual reality isenjoying hype right now, and will continue to develop, it facessignificant challenges related to the human body’s physiologicallimitations. For instance, the inner ear can become disoriented when auser experiences virtual movement without physically moving. This issuehas led to the development of VR applications that require compromisesbetween immersion and physical comfort.

  - # Data Centres and AI
  - Energy Grid Challenges:
  - [Google signs nuclear power deal with startup Kairos - Insider Paper](https://insiderpaper.com/google-signs-nuclear-power-deal-with-startup-kairos/)
  - Constellation signed a 20-year power purchase agreement (PPA) with Microsoft to restart Three Mile Island Unit 1, which had been shut down since 2019 for economic reasons. The plant faced competition from cheaper natural gas due to the fracking boom, leading to its closure.
  - Unlike other nuclear plants in the region, Three Mile Island was a single-unit facility, which contributed to higher operational costs compared to multi-unit plants. The plant's reputation was affected by the 1979 meltdown of Unit 2, impacting public perception of nuclear energy.
  - The plant required significant investments (estimated $1.6 billion) for upgrades to restart and operate efficiently. Projected annual revenue from the PPA is estimated at £800 million, with potential profits being several hundred million, depending on operational costs.

			- ### Nostr Integration
				- **NostrEvent:**
					- **Properties:**
						- `relayUrl`: (`xsd:anyURI`) The URL of the Nostr relay where the event was published.
						- `kind`: (`xsd:string`) The type or category of the event (e.g., "set_metadata", "text_note", "reaction", "channel_creation", "key_rotation").
						- `content`: (`xsd:string`) The content of the message or event data.
						- `tags`: (`linkedjson:ObjectProperty`, `range`: `metaverse:NostrTag`) A list of tags associated with the event.
				- **NostrTag:**
					- `@type`: `linkedjson:Class`
					- `rdfs:label`: "Nostr Tag"
					- `rdfs:comment`: "Represents a tag associated with a NostrEvent, providing context and metadata."
					- **Properties:**
						- `type`: (`xsd:string`) The type of tag (e.g., "p", "e", "t").
						- `value`: (`xsd:string`) The value of the tag.

			- ## TODO
				- **AI Agent Capabilities:** Expand the capabilities property of `AIAgent` to include specific actions and functions related to Bitcoin, RGB, and Nostr, such as "create_digital_asset", "transfer_ownership", "publish_nostr_event", etc.
				- **Event Logging and Attestation:** Consider adding mechanisms for logging significant events and generating cryptographic attestations, which could be used for dispute resolution or auditing purposes. This would operate on an automated threshold trigger system mediated by LLM, and would wrap the recent interactions between parties in pubkey encrypted data blobs, sending them to both parties alongside a report of the trigger event. This would potentially allow action by the parties in their jurisdictions. The data would then be deleted from the metaverse.

		- ### Omniverse Connector Integration
			- Application integration: Nucleus Server integrates with various 3D software applications through the Omniverse Connector plugin, enabling seamless synchronization and exchange of USD data
			- Live updates: Changes made in connected applications are automatically synchronized with Nucleus Server, ensuring that all collaborators have access to the latest version of the assets

		- ##### 1️⃣ K-Means Clustering
		- **Description**: Partitions data into k distinct clusters.
		- **Explain Like I'm New**: Like organizing similar things into different groups.
		- **Paper**: [Comparative performance analysis of K-nearest neighbour (KNN)](https://www.nature.com/articles/s41598-022-10358-x)

  - #### Data visualization and analysis

  - # Actionable LLM advice:
  - Stick with the tools in the ecosystem you have already bought, until you need more. If your data is in Google use Google. If it's in Microsoft use Microsoft. If you use Runway / Mid journey then please do continue.
  - The edge isn't between vendors, it's a deep understanding of what problems you need it to solve, and the disposition of your data, or business technical edge.
  - Importance of unique business strategies over proprietary technology. [Harvard Business Review](https://hbr.org/2023/12/strategy-not-technology-is-the-key-to-winning-with-genai).
		- Necessity for firms to create value beyond technical features.
		- Focus on building strong brands and exceptional customer experiences.
		- Significance of strategic human resource management, including talent retention and skill development.
  - I think open source will win in the end because SO many people in the world will be forced and/or want not to use these few hyper centralised providers. **This is a contentious opinion**.
  - {{embed ((659fe0be-a52a-42ef-8f50-73695a802945))}}
  - https://www.reddit.com/r/StableDiffusion/comments/18tqyn4/midjourney_v60_vs_sdxl_exact_same_prompts_using/
  - If your business needs custom **models** then still do as much with off the shelf as you can. You need to be mindful of ethics and the law. This is non-trivial. The team here can help.
  - Regardless of the scale and technical proficiency of your team, these tools, especially the open source ones, can provide a rapid way to ask your customers **"is this what you mean?"**. People are bad at specifying, but good at instinctive validation. You can then go and manufacture a properly optimised and legally compliant toolchain.

		- ### DOING Knowledge Graphs
			- [[Knowledge Graphing]] can help you to organise semi structured data.
			- DOING Obsidian
			- DONE Logseq
			- DONE Notion

  - ## Critical Analysis
		- **Anecdotal Evidence and Generalisation:**
			- The report is based on Ramp's customer data, which may not represent the broader market. Growth figures could be skewed by a few large companies or early adopters, making the data less generalisable.
			- The focus on rapidly growing vendors like Anthropic might overshadow the fact that many AI tools are still in experimental or early adoption stages.

  - ### Key Capabilities of GPT-4o
		- **Visual Analysis for Education**
			- **Description**: GPT-4o functions as an AI assistant during Microsoft Teams meetings, capable of summarizing minutes, identifying action items, retrieving relevant information from company databases, and assisting with data analysis tasks such as creating charts and reporting trends.

  - # What we can expect
  - The potential of AI to dominate warfare in the next decade, exacerbating issues of disinformation and misinformation.
  - The accessibility of AI tools for creating realistic content, enhancing the capabilities of bad actors in misinformation campaigns.
  - The critical need for investment in data infrastructure and preparation to counter the threats posed by AI in warfare.
  - The concept of deterrence in military thinking and how it might evolve with the advent of AI technologies.
  - Unmanned armed robots that are nearly impossible to defeat.
		- {{video https://www.youtube.com/watch?v=KX0ji1sAXl8}}
  - Autonomous fighter jets capable of supersonic speeds and enduring greater gravitational forces than human pilots.
  - Cyberattacks aimed at disabling critical port infrastructure.

  - ### 1.  **Decentralized Identifiers (DIDs)**
  - **Overview**: While WebID is a part of Solid, the broader Solid project itself deserves mention. Solid aims to reshape the web, allowing users to store their data in personal online data stores (PODs) and share them with applications and services they trust.
  - **Use Cases**: Solid enables users to maintain control over their data while using web applications for social networking, data storage, and personalized services without vendor lock-in.

		- ### DOING Knowledge Graphs
			- [[Knowledge Graphing]] can help you to organise semi structured data.
			- DOING Obsidian
			- DONE Logseq
			- DONE Notion

  - ## Critical Analysis
		- **Anecdotal Evidence and Generalisation:**
			- The report is based on Ramp's customer data, which may not represent the broader market. Growth figures could be skewed by a few large companies or early adopters, making the data less generalisable.
			- The focus on rapidly growing vendors like Anthropic might overshadow the fact that many AI tools are still in experimental or early adoption stages.

		- ### DOING Knowledge Graphs
			- [[Knowledge Graphing]] can help you to organise semi structured data.
			- DOING Obsidian
			- DONE Logseq
			- DONE Notion

  - # 2025 State of Consumer AI Report by Menlo Ventures
		- 91% of AI users default to their preferred general tool for most tasks.
			- The report is based on Ramp's customer data, which may not represent the broader market. Growth figures could be skewed by a few large companies or early adopters, making the data less generalisable.
			- The focus on rapidly growing vendors like Anthropic might overshadow the fact that many AI tools are still in experimental or early adoption stages.

  - ## AI Advertising Trojan Horse Sites
  - [The Dark Forest Theory of the Internet | by Yancey Strickler | Medium](https://ystrickler.medium.com/the-dark-forest-theory-of-the-internet-7dc3e68a7cb1)
  - The internet is becoming like a dark forest:
		- {{twitter https://twitter.com/itsandrewgao/status/1786879644651991549}}
  - Bots that persuade bots that persuade bots
		- https://www.linkedin.com/posts/emollick_two-weird-things-that-are-going-to-happen-activity-7180768944067072000-Gmtq?
		- [The majority of traffic from Elon Musk's X may have been fake during the Super Bowl, report suggests | Mashable](https://mashable.com/article/x-twitter-elon-musk-bots-fake-traffic)
  - Russian bots are inflating Instagram influencer follower counts into the tens of millions ([reference](https://www.adweek.com/social-marketing/study-15-million-russian-instagram-influencers-followers-are-bots/)).
  - 'Background tokens' is a term used on the [[Neural Network Latent Space]] podcast to describe pre LLM unpolluted data. This legacy data is the last state of human discourse.
  - A fascinating unexpected second order impact of this is that future models may skew more right wing as those sites [welcome the scraping.](https://www.wired.com/story/most-news-sites-block-ai-bots-right-wing-media-welcomes-them/?)
  - [AI and Leviathan: Part III by Samuel Hammond (secondbest.ca)](https://www.secondbest.ca/p/ai-and-leviathan-part-iii)

  - ### [[Unreal Engine]] & Virtual Production
  - Matthew Ball is an [expert on Metaverse](https://www.matthewball.vc/).He explained his vision and concerns with regard to metaverse in an[adaptation of hisbook](https://time.com/6197849/metaverse-future-matthew-ball/)[[ball2020metaverse]]featured on Time Magazine (Figure<a href="#fig:time" data-reference-type="ref" data-reference="fig:time">7.5</a>).
  - He [talks about Epic’s Unrealengine](https://www.matthewball.vc/all/epicprimer1) and identifies whathe calls the Epic Flywheel for games manufacture seen in Figure<a href="#fig:epicflywheel" data-reference-type="ref" data-reference="fig:epicflywheel">7.6</a>.
  ![]./assets/354b361cffb9d11b9e425cb2d1307ed933b808d5.jpg
  - Games controller
  - Body tracking
  - Hand tracking and gesture
  - Voice
  - Microgestures
  - Eye gaze
  - Assumption systems
  - [Playstation programmable controller](https://blog.playstation.com/2023/01/04/introducing-project-leonardo-for-playstation-5-a-highly-customizable-accessibility-controller-kit/)
  - [XBOX accessibility controller](https://www.xbox.com/en-GB/accessories/controllers/xbox-adaptive-controller)

  - ##### Integrating Cryptographic Proofs and Reputation
  - To create a trusted environment within the federated network, we mustestablish a mechanism for importing and verifying cryptographic proofsfrom various sources, such as social media sites and other digitalplatforms. By doing so, we enable users to bring their existingreputation and trust from these platforms into the new ecosystem, thusfacilitating trust-based interactions and collaboration within thenetwork. We can leverage the Nostr protocol and the NIP05 specificationto import these cryptographic proofs, creating a secure and verifiablesystem for identity management and trust propagation. The NIP05specification allows for the creation and verification of identityproofs within the Nostr protocol, thus enabling the seamless integrationof trust and reputation data from external sources.
  - By utilizing the Nostr protocol as the underlying layer, we canestablish connections between objects, people, and AI actors within thefederated network. This interconnected ecosystem allows for seamlesscollaboration, information sharing, and trust-based interactions amongall participants. The open-source collaboration infrastructure wepropose can facilitate the development of various applications andservices that leverage the federated network, such as virtualworkspaces, AI-assisted creativity tools, and more. The uncensorablenature of this protocol further supports the inclusivity andaccessibility we feel so important, ensuring that participants fromdifferent regions and backgrounds can take part in the digital societyand contribute to its growth.
  - This federated social media trust model, built on the Nostr protocol,allows for the establishment of a robust, inclusive, and trust-basednetwork that connects various virtual spaces, social media platforms,and AI systems. By leveraging the lessons learned from the otherattempts in the space, and by maximising the inclusion of externalcryptographic proofs from multiple sources, we can create acomprehensive trust system that fosters collaboration, innovation, andshared growth within the digital society.
  - The Stirfry relay software provides high-performance infrastructure forbuilding decentralized social media applications on top of the Nosterprotocol. As an open source project written in C++, Stirfry emphasizesefficiency, flexibility, and community-driven governance.
  - At the core of Stirfry is its high-speed database engine. Rather thanusing a traditional SQL database, Stirfry implements the LightningMemory-Mapped Database (LMDB)
  - an efficient binary format allowing direct accesswithout serialization. The original JSON payloads are preserved tofacilitate transmission back to clients. Additional database files indexevents on fields like timestamps and authors, accelerating filterqueries. Periodic compaction optimizes the layout for faster operations.
  - Stirfry adopts a multi-threaded, modular architecture. A websocketthread accepts new client connections and routes incoming requests. Aningester thread validates and pre-processes each request before passingto appropriate handlers. Doing signature checks and filter compilationupfront avoids repeating work. A single writer thread batches databasewrites to amortize transaction overhead. Multiple worker threads handleread queries, fairly scheduling between long and short requests.Dedicated monitor threads track active filters and stream matchingevents to subscribed clients. Passing messages between threads insteadof sharing data structures improves efficiency.

  - ### Prospects for Reform and the Future Landscape
  - **Judicial and Legislative Responses**: Legal frameworks globally are under pressure to evolve in response to technological advancements. Judicial interventions may set new precedents, while legislative reforms, informed by GDPR and other standards, could offer more comprehensive protections.
  - **Impact of AI Regulation**: The regulation of AI technologies, to prevent their misuse for surveillance, becomes increasingly critical. Ensuring transparency and accountability in AI operations is paramount to safeguarding civil liberties.
  - **International Cooperation**: Addressing the global nature of data privacy requires international cooperation. Agreements on data protection standards and ethical AI use are essential to navigating the complex web of data surveillance, sharing, and protection.

  - ### Technological Advancements and Their Dual-Edged Impact
  - **Rise of AI in Data Analysis**: AI's evolution has transformed data analysis, enabling the extraction of nuanced insights from vast datasets. This capability enhances government surveillance potential, making it more efficient but also raising ethical concerns.
  - **AI and Surveillance**: The misuse of AI for surveillance by state actors is a growing concern. AI can automate the monitoring of individuals on an unprecedented scale, necessitating stringent oversight.
  - **Data Encoded in AI Models**: Information about individuals becoming encoded in the latent spaces of foundational AI models poses unique challenges. This data embedding can inadvertently leak personal information, complicating efforts to protect individual privacy.

  - ## Blender Omniverse Integration with USD
  - Blender, a popular open-source 3D modeling and animation software, has been integrated with Omniverse through the USD format. This integration allows Blender users to leverage the collaborative features and pipeline interoperability provided by Omniverse.
		- Key features of the Blender Omniverse integration include:
		- USD import and export: Blender can read and write USD files, enabling seamless exchange of 3D data with other USD-compatible applications
		- Omniverse Connector: A plugin that enables Blender to connect to Omniverse servers for real-time collaboration and synchronization
		- USD schema support: Blender supports various USD schemas, such as UsdGeom, UsdShade, and UsdSkel, allowing for the preservation of important 3D data when exchanging files

  - ## Nucleus Server for Omniverse
  - Nucleus Server is a core component of the Omniverse platform that enables real-time collaboration, version control, and asset management for 3D scenes and assets. It acts as a central hub for storing, sharing, and synchronizing USD files and other related data across multiple users and applications.
		- Key features and functionalities of Nucleus Server include:

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

  - ### Prospects for Reform and the Future Landscape
  - **Judicial and Legislative Responses**: Legal frameworks globally are under pressure to evolve in response to technological advancements. Judicial interventions may set new precedents, while legislative reforms, informed by GDPR and other standards, could offer more comprehensive protections.
  - **Impact of AI Regulation**: The regulation of AI technologies, to prevent their misuse for surveillance, becomes increasingly critical. Ensuring transparency and accountability in AI operations is paramount to safeguarding civil liberties.
  - **International Cooperation**: Addressing the global nature of data privacy requires international cooperation. Agreements on data protection standards and ethical AI use are essential to navigating the complex web of data surveillance, sharing, and protection.

  - ### Technological Advancements and Their Dual-Edged Impact
  - **Rise of AI in Data Analysis**: AI's evolution has transformed data analysis, enabling the extraction of nuanced insights from vast datasets. This capability enhances government surveillance potential, making it more efficient but also raising ethical concerns.
  - **AI and Surveillance**: The misuse of AI for surveillance by state actors is a growing concern. AI can automate the monitoring of individuals on an unprecedented scale, necessitating stringent oversight.
  - **Data Encoded in AI Models**: Information about individuals becoming encoded in the latent spaces of foundational AI models poses unique challenges. This data embedding can inadvertently leak personal information, complicating efforts to protect individual privacy.

  - ## **Benefits and Challenges of Using Agentic Systems**

  Agentic systems offer several benefits for call centers, including:

  * **Increased efficiency:** Agentic AI can perform tasks faster and more accurately than humans, leading to increased productivity and reduced wait times14.  
  * **Improved customer service:** AI-powered assistants and chatbots can provide instant responses to customer inquiries, improving customer satisfaction14.  
  * **Smarter decision-making:** AI systems can analyze data in real-time, providing insights that enable businesses to make informed decisions14.  
  * **Lower operational costs:** By automating routine processes, businesses can reduce staffing needs and lower operational costs14.  
  * **24/7 availability:** Agentic AI can operate continuously, providing uninterrupted customer service14.  
  * **Proactive customer service:** AI can predict customer needs and offer assistance before they even ask for it15. Agentic AI has the potential to significantly improve customer satisfaction and first contact resolution rates by proactively addressing customer needs and resolving issues autonomously 15.  
  * **Personalized customer interactions:** AI can analyze customer data and behavior to provide tailored recommendations and support16.

  However, there are also challenges associated with using agentic systems:

  * **Unforeseen consequences:** Due to their adaptability and learning capabilities, agentic AI systems can sometimes engage in unforeseen actions or decisions17.  
  * **Limited understanding of internal workings:** The complex decision-making processes of agentic AI can be difficult to understand, making it challenging to identify the root cause of errors17.  
  * **Transparency in data usage:** Concerns exist regarding the potential misuse of user data by agentic AI systems17.  
  * **Bias:** AI systems can inherit biases from their training data, leading to discriminatory outcomes17.  
  * **High attrition rates:** The call center industry faces high attrition rates, which can disrupt service continuity and increase costs18. AI can potentially help in reducing attrition rates by automating tasks and improving agent satisfaction.  
  * **Ensuring customer satisfaction:** Maintaining high customer satisfaction can be challenging due to long wait times and inconsistent service quality19. AI can help address these challenges by reducing wait times and improving service consistency.  
  * **Agent burnout:** High-stress environments and repetitive tasks can lead to agent burnout, impacting performance and increasing absenteeism19. AI can help mitigate burnout by automating repetitive tasks and allowing agents to focus on more engaging interactions.

  - ## Blender Omniverse Integration with USD
  - Blender, a popular open-source 3D modeling and animation software, has been integrated with Omniverse through the USD format. This integration allows Blender users to leverage the collaborative features and pipeline interoperability provided by Omniverse.
		- Key features of the Blender Omniverse integration include:
		- USD import and export: Blender can read and write USD files, enabling seamless exchange of 3D data with other USD-compatible applications
		- Omniverse Connector: A plugin that enables Blender to connect to Omniverse servers for real-time collaboration and synchronization
		- USD schema support: Blender supports various USD schemas, such as UsdGeom, UsdShade, and UsdSkel, allowing for the preservation of important 3D data when exchanging files

  - ## Nucleus Server for Omniverse
  - Nucleus Server is a core component of the Omniverse platform that enables real-time collaboration, version control, and asset management for 3D scenes and assets. It acts as a central hub for storing, sharing, and synchronizing USD files and other related data across multiple users and applications.
		- Key features and functionalities of Nucleus Server include:

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

  - ### Prospects for Reform and the Future Landscape
  - **Judicial and Legislative Responses**: Legal frameworks globally are under pressure to evolve in response to technological advancements. Judicial interventions may set new precedents, while legislative reforms, informed by GDPR and other standards, could offer more comprehensive protections.
  - **Impact of AI Regulation**: The regulation of AI technologies, to prevent their misuse for surveillance, becomes increasingly critical. Ensuring transparency and accountability in AI operations is paramount to safeguarding civil liberties.
  - **International Cooperation**: Addressing the global nature of data privacy requires international cooperation. Agreements on data protection standards and ethical AI use are essential to navigating the complex web of data surveillance, sharing, and protection.

  - ### Technological Advancements and Their Dual-Edged Impact
  - **Rise of AI in Data Analysis**: AI's evolution has transformed data analysis, enabling the extraction of nuanced insights from vast datasets. This capability enhances government surveillance potential, making it more efficient but also raising ethical concerns.
  - **AI and Surveillance**: The misuse of AI for surveillance by state actors is a growing concern. AI can automate the monitoring of individuals on an unprecedented scale, necessitating stringent oversight.
  - **Data Encoded in AI Models**: Information about individuals becoming encoded in the latent spaces of foundational AI models poses unique challenges. This data embedding can inadvertently leak personal information, complicating efforts to protect individual privacy.

  - ## **Benefits and Challenges of Using Agentic Systems**

  Agentic systems offer several benefits for call centers, including:

  * **Increased efficiency:** Agentic AI can perform tasks faster and more accurately than humans, leading to increased productivity and reduced wait times14.  
  * **Improved customer service:** AI-powered assistants and chatbots can provide instant responses to customer inquiries, improving customer satisfaction14.  
  * **Smarter decision-making:** AI systems can analyze data in real-time, providing insights that enable businesses to make informed decisions14.  
  * **Lower operational costs:** By automating routine processes, businesses can reduce staffing needs and lower operational costs14.  
  * **24/7 availability:** Agentic AI can operate continuously, providing uninterrupted customer service14.  
  * **Proactive customer service:** AI can predict customer needs and offer assistance before they even ask for it15. Agentic AI has the potential to significantly improve customer satisfaction and first contact resolution rates by proactively addressing customer needs and resolving issues autonomously 15.  
  * **Personalized customer interactions:** AI can analyze customer data and behavior to provide tailored recommendations and support16.

  However, there are also challenges associated with using agentic systems:

  * **Unforeseen consequences:** Due to their adaptability and learning capabilities, agentic AI systems can sometimes engage in unforeseen actions or decisions17.  
  * **Limited understanding of internal workings:** The complex decision-making processes of agentic AI can be difficult to understand, making it challenging to identify the root cause of errors17.  
  * **Transparency in data usage:** Concerns exist regarding the potential misuse of user data by agentic AI systems17.  
  * **Bias:** AI systems can inherit biases from their training data, leading to discriminatory outcomes17.  
  * **High attrition rates:** The call center industry faces high attrition rates, which can disrupt service continuity and increase costs18. AI can potentially help in reducing attrition rates by automating tasks and improving agent satisfaction.  
  * **Ensuring customer satisfaction:** Maintaining high customer satisfaction can be challenging due to long wait times and inconsistent service quality19. AI can help address these challenges by reducing wait times and improving service consistency.  
  * **Agent burnout:** High-stress environments and repetitive tasks can lead to agent burnout, impacting performance and increasing absenteeism19. AI can help mitigate burnout by automating repetitive tasks and allowing agents to focus on more engaging interactions.

  ## Academic Context

  - Brief contextual overview
  - Data poisoning is an adversarial attack targeting the training phase of machine learning and artificial intelligence systems
  - The attack involves the deliberate injection, modification, or deletion of training data to undermine model integrity, reliability, or security
  - The goal may be to induce targeted misclassifications, embed backdoor triggers, or degrade overall model performance

  - Key developments and current state
  - Once considered a theoretical concern, data poisoning is now a recognised operational threat in both academic and industrial settings
  - The rise of generative AI and large language models (LLMs) has expanded the attack surface, with poisoning now possible across the entire model lifecycle, including pre-training, fine-tuning, retrieval-augmented generation (RAG), and agent tooling
  - The attack is not limited to traditional supervised learning; it also affects unsupervised and reinforcement learning systems

  - Academic foundations
  - The concept draws from adversarial machine learning, with early work focusing on label flipping and backdoor attacks
  - Modern research has expanded to include poisoning in federated learning, transfer learning, and multi-modal models

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Data poisoning is a live security risk for organisations deploying AI, particularly in sectors such as finance, healthcare, and cybersecurity
  - Major platforms and cloud providers have integrated safeguards, including data provenance tracking, anomaly detection, and model auditing
  - Organisations such as IBM, CrowdStrike, and Lakera AI offer tools and services to detect and mitigate data poisoning in production systems

  - Notable organisations and platforms
  - IBM Think and CrowdStrike Charlotte AI provide built-in defences against data poisoning for enterprise AI deployments
  - Lakera Guard is used by companies like Dropbox to secure LLM-powered applications

  - UK and North England examples where relevant
  - UK financial institutions, including those in Manchester and Leeds, have implemented robust AI auditing and governance frameworks to counter data poisoning risks
  - The Alan Turing Institute in London, with regional collaborations in Newcastle and Sheffield, supports research into AI security and resilience
  - Regional innovation hubs in Manchester and Leeds are piloting AI-driven fraud detection systems with enhanced data integrity controls

  - Technical capabilities and limitations
  - Modern defences include data sanitisation, adversarial training, and anomaly detection algorithms
  - Limitations remain in detecting subtle, low-volume poisoning attacks and in securing open-source or crowdsourced training data

  - Standards and frameworks
  - The UK National Cyber Security Centre (NCSC) provides guidance on securing AI systems, including recommendations for data integrity and model auditing
  - ISO/IEC 23053 and NIST AI Risk Management Framework offer international standards for AI security and resilience

  ## Research & Literature

  - Key academic papers and sources
  - Biggio, B., Nelson, B., & Rubinstein, B. (2018). Poisoning attacks against support vector machines. Machine Learning, 91(2), 121–147. https://doi.org/10.1007/s10994-012-5322-z
  - Chen, X., Liu, C., Li, B., Lu, K., & Song, D. (2017). Targeted backdoor attacks on deep learning systems using data poisoning. arXiv preprint arXiv:1712.05526. https://arxiv.org/abs/1712.05526
  - Jagielski, M., Oprea, A., Biggio, B., Liu, C., Nita-Rotaru, C., & Li, B. (2018). Manipulating machine learning: Poisoning attacks and countermeasures for regression learning. In 2018 IEEE Symposium on Security and Privacy (pp. 19–35). https://doi.org/10.1109/SP.2018.00012
  - Shafahi, A., Huang, W. R., Studer, C., Feizi, S., & Goldstein, T. (2018). Poison frogs! Targeted clean-label poisoning attacks on neural networks. arXiv preprint arXiv:1804.00792. https://arxiv.org/abs/1804.00792
  - Liu, Y., Ma, S., Aafer, Y., Lee, W. C., Zhai, J., Wang, W., & Zhang, X. (2017). Trojaning attack on neural networks. arXiv preprint arXiv:1708.06733. https://arxiv.org/abs/1708.06733

  - Ongoing research directions
  - Detection and mitigation of low-volume, stealthy poisoning attacks
  - Secure federated and transfer learning
  - Robustness of generative AI and LLMs to data poisoning
  - Integration of data poisoning defences into DevOps and MLOps pipelines

  ## UK Context

  - British contributions and implementations
  - The UK has been at the forefront of AI security research, with significant contributions from the Alan Turing Institute and universities such as Oxford, Cambridge, and Imperial College London
  - UK financial regulators have issued guidance on AI risk management, including data poisoning

  - North England innovation hubs (if relevant)
  - Manchester and Leeds are home to several AI startups and research centres focused on secure and trustworthy AI
  - The University of Manchester and Leeds Beckett University collaborate on projects related to AI security and data integrity

  - Regional case studies
  - A Manchester-based fintech company implemented a data poisoning detection system for its AI-driven credit scoring model, reducing the risk of biased or manipulated outcomes
  - A Leeds hospital piloted an AI system for medical image analysis with enhanced data integrity controls, ensuring reliable and trustworthy results

  ## Future Directions

  - Emerging trends and developments
  - Increased use of AI in critical infrastructure and public services, raising the stakes for data poisoning attacks
  - Development of automated tools for real-time detection and mitigation of data poisoning

  - Anticipated challenges
  - Balancing security and privacy in AI systems
  - Ensuring the integrity of open-source and crowdsourced training data
  - Adapting defences to the evolving threat landscape

  - Research priorities
  - Improving the robustness of generative AI and LLMs to data poisoning
  - Developing standards and best practices for AI security and resilience
  - Enhancing collaboration between academia, industry, and government on AI security

  ## References

  1. Biggio, B., Nelson, B., & Rubinstein, B. (2018). Poisoning attacks against support vector machines. Machine Learning, 91(2), 121–147. https://doi.org/10.1007/s10994-012-5322-z
  2. Chen, X., Liu, C., Li, B., Lu, K., & Song, D. (2017). Targeted backdoor attacks on deep learning systems using data poisoning. arXiv preprint arXiv:1712.05526. https://arxiv.org/abs/1712.05526
  3. Jagielski, M., Oprea, A., Biggio, B., Liu, C., Nita-Rotaru, C., & Li, B. (2018). Manipulating machine learning: Poisoning attacks and countermeasures for regression learning. In 2018 IEEE Symposium on Security and Privacy (pp. 19–35). https://doi.org/10.1109/SP.2018.00012
  4. Shafahi, A., Huang, W. R., Studer, C., Feizi, S., & Goldstein, T. (2018). Poison frogs! Targeted clean-label poisoning attacks on neural networks. arXiv preprint arXiv:1804.00792. https://arxiv.org/abs/1804.00792
  5. Liu, Y., Ma, S., Aafer, Y., Lee, W. C., Zhai, J., Wang, W., & Zhang, X. (2017). Trojaning attack on neural networks. arXiv preprint arXiv:1708.06733. https://arxiv.org/abs/1708.06733
  6. UK National Cyber Security Centre. (2025). Securing AI Systems. https://www.ncsc.gov.uk/collection/securing-ai-systems
  7. ISO/IEC 23053:2023. Framework for Artificial Intelligence (AI) Systems Using Machine Learning. https://www.iso.org/standard/75000.html
  8. NIST. (2023). AI Risk Management Framework. https://www.nist.gov/itl/ai-risk-management-framework


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - bridges-to:: [[Computer Vision]] (ai)
  - sources:: [[MITRE ATLAS]], [[ISO/IEC 23894:2023]], [[NCSC]], [[NIST AI Risk Management Framework]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T14:15:00Z
