- ### Definition
  - An individual or entity who interacts with, relies upon, or is affected by the outputs, decisions, or recommendations of an artificial intelligence system in order to accomplish tasks, make decisions, obtain services, or achieve objectives, either through direct system interaction or indirect exposure to AI-mediated outcomes, encompassing both active users who consciously engage with AI systems and passive subjects whose data is processed or whose circumstances are influenced by AI operations.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AIUser
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - relatedTo:: [[AI Provider]], [[AI Operator]], [[Accountability]]
  - requires:: [[Human Oversight]], [[Fairness]], [[Explainability]]
  - dependsOn:: [[EU AI Act]], [[Responsible AI]]

- ### Content
  - An individual or entity who interacts with, relies upon, or is affected by the outputs, decisions, or recommendations of an artificial intelligence system in order to accomplish tasks, make decisions, obtain services, or achieve objectives, either through direct system interaction or indirect exposure to AI-mediated outcomes, encompassing both active users who consciously engage with AI systems and passive subjects whose data is processed or whose circumstances are influenced by AI operations.

  - ### [CSM AI](https://3d.csm.ai/) - *   The website provides tools for creating 3D models from 2D images using [[artificial intelligence]].
  -   Users can generate 3D assets for various applications, including game development, e-commerce, and augmented reality.
  -   The platform offers a user-friendly [[user experience]] and streamlined workflow for converting images into 3D models.
  -   It supports various image formats and provides options for customising the 3D model's appearance and texture.
  -   Users can download the resulting 3D models in standard file formats for use in other software packages.
  -   The website offers different pricing plans depending on the level of usage and features required.
  -   It aims to simplify the 3D modelling process, making it accessible to users without specialist 3D design skills.
  -   Colour and texture options are available to enhance the realism of the generated 3D models.
  -   The service focuses on automated 3D asset creation, reducing the time and cost associated with traditional methods.
  -   The website can be used to organise and manage a library of generated 3D models.
		- <iframe src="https://3d.csm.ai/" style="width: 100%; height: 600px"></iframe>

  - ### Open Source
		- **[stabilityai/stable-zero123](https://huggingface.co/stabilityai/stable-zero123)** - - Stable Zero123 is a model developed by Stability AI that estimates the novel view of an object from a single-view image, focusing on zero-shot generalisation to arbitrary objects.

  - The model can generate multiple views of an object from different angles, allowing for a more complete 3D understanding from a single 2D image.

  - Stable Zero123 uses a diffusion model architecture to generate the novel views, resulting in detailed and realistic outputs.

  - This model is useful for various applications including 3D asset creation, virtual reality/augmented reality experiences and e-commerce where users can view products from all angles.

  - The model is readily available for use through the Hugging Face Transformers library, allowing developers to easily integrate it into their workflows.

  - Developers can fine-tune the model on specific datasets to improve performance on particular object categories or to tailor the output to a specific aesthetic.

  - The model is provided with an associated research paper that gives more details on the methodology, architecture and training process.

  - Users should be aware of the potential [[bias]] inherent in the training data and should use the model responsibly, considering ethical implications.
		- **[SUDO-AI-3D/zero123plus](https://github.com/SUDO-AI-3D/zero123plus)** - - Zero123plus is a project extending the Zero123 single-view 3D reconstruction model.
  - It aims to generate multi-view consistent images and 3D models from a single input image.
  - The project uses improved training techniques and architectures for enhanced [[performance]].
  - The codebase is organised with clear modules for model components, data loading, and training procedures.
  - Pre-trained models and instructions for inference are provided.
  - The project encourages users to experiment with various prompts and parameters to achieve desired outputs.
  - It includes tools for evaluating the quality of the generated images and 3D models.
  - Contributions to the project are welcomed, following the outlined contribution guidelines.
  - The project uses a specific licence, which users should review before using or distributing the code.
  - Users can find instructions on how to set up the environment and install the necessary dependencies.
  - The colour palettes for visualising outputs are customisable.
		- **[flowtyone/ComfyUI-Flowty-TripoSR](https://github.com/flowtyone/ComfyUI-Flowty-TripoSR/tree/master)** - - This repository provides a custom node for ComfyUI that integrates the TripoSR model, allowing users to reconstruct 3D objects from single-view images directly within ComfyUI.
  - The node accepts an image as input and, using TripoSR, generates a 3D mesh representation of the object depicted in the image, leveraging [[artificial intelligence]] techniques.
  - Users can control parameters such as resolution and detail level to influence the quality and processing time of the 3D reconstruction.
  - The repository contains example workflows and instructions for installing and configuring the custom node within ComfyUI.
  - The integration enables users to incorporate 3D object generation into their ComfyUI workflows, potentially for tasks such as object manipulation, virtual environment creation, or 3D asset design.
  - A key feature is the ability to visualise the generated 3D model directly within ComfyUI, offering immediate feedback on the reconstruction quality and supporting [[user experience]] optimisation.
  - The node simplifies the process of using TripoSR by handling the necessary model loading and inference steps, reducing the technical complexity for ComfyUI users through effective [[documentation]].
  - Updates and improvements to the node are regularly made, addressing bugs and optimising [[performance]], and users can contribute with feedback or code contributions.
  - The provided documentation explains how to obtain the required model weights and organise them correctly for the node to function.
  - Support for additional features and customisation options may be added in future updates, enhancing the node's functionality and user experience.
		- **[layerdiffusion/LayerDiffuse](https://github.com/layerdiffusion/LayerDiffuse)** - LayerDiffuse offers a layered diffusion approach for image editing, allowing users to manipulate specific parts of an image rather than the whole thing at once.
  - The method involves decomposing an image into several layers and independently diffusing each layer according to user instructions or prompts.
  - It allows for fine-grained control over image manipulation, such as changing the colour or style of specific objects or regions.
  - The repository provides code, models, and instructions to implement and experiment with LayerDiffuse.
  - The project is designed to organise and improve the editability of images, facilitating more precise and controllable image synthesis workflows.
  - The project uses [[deep learning]] diffusion models as a base, extending their capabilities to provide layered control for improved editing workflows.
  - Users can download pre-trained models and fine-tune them for specific tasks.
  - The provided code and documentation enables [[research]] and developers to further explore and advance the field of layered image manipulation.
  - It introduces a novel approach to image editing by enabling independent diffusion of individual layers based on user prompts.

  - ### **3D Highlighter**
		- [3D Highlighter Website](https://threedle.github.io/3DHighlighter/) - 3DHighlighter is a JavaScript library for highlighting elements on a 3D model displayed in a web browser.
  - It allows developers to easily integrate interactive highlighting functionality into their 3D web applications.
  - The library provides various highlighting styles, including colour changes, outlines, and transparency effects.
  - Developers can organise and customise the highlighting behaviour based on user interactions or application logic.
  - The library offers simple APIs for managing highlighted elements and controlling the visual appearance of the highlights.
  - It supports different 3D model formats and is compatible with popular 3D rendering engines.
  - 3DHighlighter aims to improve [[user experience]] by providing clear visual feedback when interacting with 3D models.
  - It simplifies the process of selecting and identifying specific components or areas within complex 3D scenes.

  - ### **DreamCraft3D**
		- [DreamCraft3D](https://mrtornado24.github.io/DreamCraft3D/) - DreamCraft3D is a voxel-based game engine and editor aimed at easy use and accessibility.
  - The engine focuses on providing a friendly interface for creating and modifying 3D voxel worlds.
  - Users can create and edit landscapes and structures using intuitive tools within the editor.
  - The software allows for the importation of custom models and textures to enhance the visual appearance of creations.
  - It is designed to be lightweight and perform well on a range of hardware.
  - DreamCraft3D supports scripting, enabling the creation of interactive game elements and behaviours.
  - The engine includes features for controlling character movement and camera perspectives.
  - There is an emphasis on [[community]] and sharing, enabling users to export and share their creations with others.
  - The project is actively developed with ongoing updates and feature enhancements, representing continuous [[innovation]] in [[software engineering]].
  - The application is available to download for free.

  - ### Agents and Copilot
		- **[Copilot Actions](https://www.softwareone.com/en/blog/articles/2024/05/22/microsoft-build-2024-ai-agents-and-the-open-agentic-web)**: Allows users to automate routine tasks with simple prompts.
		- **[Azure AI Foundry Agent Service](https://www.microsoft.com/en-us/research/blog/the-open-agentic-web/)**: Provides tools for orchestrating multiple specialized agents.
		- **[Microsoft 365 Copilot](https://www.directionsonmicrosoft.com/blog/2024/05/22/microsoft-365-copilot-becoming-showcase-agents)**: The Copilot app is being revamped to become a showcase for agents, with a new image generator and deeper integration with Microsoft Search.

  - ### Web scraper project for OpenWebUI
		- This diagram shows the sequence of events for a web scraper pipeline that uses OpenWebUI, Playwright, and RedditClient to extract and summarize content from web pages.
		- ```mermaid
		  sequenceDiagram
		      participant User
		      participant Pipeline
		      participant OpenWebUI
		      participant AsyncOpenAI
		      participant Playwright
		      participant RedditClient
		      participant WebPage

		      User->>Pipeline: Send user_message
		      Pipeline->>OpenWebUI: Get OPENAI_API_KEY, TOPICS, etc.
		      Pipeline->>AsyncOpenAI: Initialize with API key
		      Pipeline->>Playwright: setup_playwright()
		      Playwright->>Pipeline: Playwright setup complete
		      Pipeline->>RedditClient: Initialize with credentials

		      Pipeline->>Pipeline: extract_blocks(user_message)
		      loop For each block
		          Pipeline->>Pipeline: should_process_block(block)
		          alt Block should be processed
		              Pipeline->>Pipeline: extract_url_from_block(block)
		              alt URL is a Reddit URL
		                  Pipeline->>RedditClient: is_reddit_url(url)
		                  RedditClient->>Pipeline: True
		                  Pipeline->>RedditClient: get_reddit_content(url)
		                  RedditClient->>Pipeline: Return Reddit content
		              else URL is not a Reddit URL
		                  Pipeline->>Playwright: scrape_url(url, random_user_agent)
		                  Playwright->>WebPage: Fetch and filter content
		                  WebPage->>Playwright: Return filtered content
		                  Playwright->>Pipeline: Return filtered content
		                  alt Scraping successful
		                      Pipeline->>Pipeline: create_prompt(link_text, url, topics, max_tokens)
		                      Pipeline->>AsyncOpenAI: Generate summary
		                      AsyncOpenAI->>Pipeline: Return summary JSON
		                      Pipeline->>Pipeline: Format summary to Logseq style
		                  else Scraping failed
		                      Pipeline->>Pipeline: Return original block
		              end
		          else Block should not be processed
		              Pipeline->>Pipeline: Return original block
		          end
		          Pipeline->>Pipeline: Add processed block to processed_blocks
		      end
		      Pipeline->>User: Return processed text
		  end
		  ```

				- ### Multi User, Desktop and Immersive

  - ## Understanding the Scope of Accessibility
		- Accessibility in digital design encompasses a wide range of user needs, extending beyond traditional visual and auditory impairments to include cognitive, motor, and situational limitations. It is crucial to consider not only permanent disabilities but also temporary and situational impairments that may impact user interaction with digital products. For example, a user carrying shopping bags or holding a child may have limited mobility, affecting their ability to navigate a website or use a mobile app effectively.

			- ### Broader Challenges in Accessibility
				- * **Cognitive and Language Barriers:** Users with cognitive disabilities or non-native speakers may find complex language and instructions in software challenging. Simplified language and clear instructions are critical for enhancing accessibility.
				- * **Edge Case:** A user with dyslexia might benefit from using a font designed to reduce letter confusion, such as Dyslexie or OpenDyslexic. Similarly, real-time text-to-speech options can be invaluable for those with severe reading impairments. AI-powered tools, such as text-to-speech generators, can contribute to accessibility by providing more natural and accurate vocalizations.
				- * **Situational Impairments:** Temporary conditions, such as bright sunlight affecting screen visibility or a noisy environment hindering audio cues, must be considered in accessible design.
				- * **Edge Case:** Imagine a user attempting to interact with a mobile application in bright sunlight. High contrast modes or dark themes become essential for readability. Similarly, a parent with a sleeping child may need one-handed navigation and silent operation. AI can help adapt the interface to these situations, for example, by automatically detecting ambient light conditions and adjusting display settings accordingly.
				- * **Age-Related Impairments:** As the global population ages, designs must account for declining vision, hearing, and motor skills.
				- * **Edge Case:** An elderly user with reduced dexterity and vision may require larger touch targets on touchscreen devices and support for voice commands to interact effectively. AI can help by analysing user behaviour and adjusting the interface to optimize for ease of use, such as automatically increasing font sizes or simplifying navigation based on observed patterns.

		- ### Types of Accessibility Challenges in Immersive Environments

		  1. **Visual Impairments:**
		    * Magnification tools, font enlargement, and colour inversion are crucial for users with visual impairments.
		    * Spatial audio and tactile feedback can serve as alternative modalities to convey visual information.
		    * **Edge Case:** A VR environment where users navigate through auditory cues rather than visual ones could be beneficial for visually impaired users. For instance, using echolocation or 3D audio mapping to provide context in a game or virtual tour. AI could play a role in generating dynamic auditory descriptions of the virtual environment based on the user's movement and interactions.
		  2. **Auditory Impairments:**
		    * Real-time sign language interpretation and closed captioning are critical for deaf or hard-of-hearing users.
		    * Open metadata standards are needed to support these features across platforms.
		    * **Edge Case:** Implementing haptic feedback in VR gloves to simulate sound vibrations or using visual sound indicators, like flashing lights that correspond to loud noises, can enhance the experience for hearing-impaired users. AI can be used to create real-time subtitles based on audio input and even translate sign language into text or audio. [Liopa](https://liopa.ai/) is a company that has developed AI that can decipher speech by analysing lip movements, providing a vital communication tool for patients who have lost their ability to speak.
		  3. **Physical Disabilities:**
		    * VR headsets and controllers must be designed to accommodate users with limited mobility or dexterity.
		    * Alternative input methods, such as eye-tracking or voice commands, can enhance accessibility for these users.
		    * **Edge Case:** Consider users with quadriplegia using a VR system that allows full navigation and interaction via eye-tracking combined with voice commands. The system could even include adaptive AI that learns the user's preferences and adjusts the interface accordingly. AI can be employed to develop intuitive and responsive eye-tracking interfaces, enabling users to interact with VR environments in a more natural and efficient way. Another example is [Project Gameface from Google](https://github.com/google/project-gameface), a hands-free virtual mouse that allows users to control a computer's cursor through head movements and facial gestures.
		  4. **Cognitive Disabilities:**
		    * Immersive environments should offer simplified navigation and clear, consistent instructions to support users with cognitive impairments.
		    * VR and AR applications can be tailored for vocational training or rehabilitation, using accessible interfaces that cater to specific cognitive needs.
		    * **Edge Case:** VR simulations designed for individuals with Autism Spectrum Disorder (ASD) can include adjustable levels of stimuli to prevent sensory overload. An example might be a calming VR environment that gradually introduces more complex social interactions as the user becomes comfortable. AI can help personalise the VR experience by adapting the level of stimulation, complexity of interactions, and pacing based on the individual's needs and preferences.

  - ### Common Accessibility Challenges in Non-Immersive Software
		- 1. **User Interface Design:**
		    * Ensuring that UI elements are perceivable and operable by users with various disabilities is fundamental. This includes considerations like colour contrast, font size, and the availability of keyboard navigation.
		    * **Edge Case:** A mobile banking app might include a high-contrast mode for users with low vision, alongside support for voice-controlled navigation to help users with motor impairments conduct transactions. AI can be integrated to personalize UI elements based on user preferences and needs, such as automatically adjusting font size, colour contrast, and navigation methods.
		  2. **Content Accessibility:**
		    * Text content should be simple and easy to understand, particularly for non-native speakers and users with cognitive disabilities. The use of plain language and intuitive icons can greatly enhance usability.
		    * **Edge Case:** A government website offering vital services could provide text-to-speech functionality, simple language summaries of complex legal documents, and symbols or infographics to assist users with varying levels of literacy. AI can be employed to generate text summaries of complex content, simplify language, and create alternative representations of information, such as visual diagrams or audio descriptions.
		  3. **Interactive Elements:**
		    * Buttons, forms, and other interactive elements must be accessible via multiple input methods, including keyboard, mouse, and voice commands.
		    * **Edge Case:** Consider a social media platform where users can fully engage through voice commands, allowing those with severe physical disabilities to post, comment, and interact without the need for traditional input devices. AI can enhance the accessibility of interactive elements by enabling users to interact with them using natural language, gestures, or other alternative methods.

		- ### Shift-Left Approach
		- The shift-left approach involves addressing accessibility early in the design process rather than treating it as an afterthought. This strategy not only reduces the cost of retrofitting accessibility features but also improves the overall user experience.
		- 1. **Design Phase:**
		    * Use checklists and design systems to ensure accessibility is considered from the outset. This includes setting appropriate colour contrasts, designing for keyboard navigation, and considering alternative input methods.
		    * **Tools and Best Practices:**
		        * **Figma:** Utilize Figma’s built-in accessibility tools to ensure designs meet accessibility standards. Figma allows for the creation of accessible components and provides plugins for checking colour contrast and other accessibility features.
		        * **Web Content Accessibility Guidelines (WCAG):** Adherence to WCAG ensures that digital products meet global accessibility standards, covering a range of disabilities.
		- 2. **Development Phase:**
		    * Developers should be trained to implement accessibility features as part of the coding process. Reusable components that are pre-tested for accessibility can help streamline this integration.
		    * **Tools and Best Practices:**
		        * **ARIA (Accessible Rich Internet Applications):** Implement ARIA roles and properties to enhance accessibility for dynamic content and complex user interfaces.
		        * **Lighthouse Accessibility Audits:** Use Lighthouse or similar tools to perform automated accessibility audits during the development process.
		- 3. **Testing Phase:**
		    * Accessibility testing should be an integral part of quality assurance. Automated tools can help identify common issues, but real-world testing with users who have disabilities is essential for uncovering nuanced accessibility barriers.
		    * **Tools and Best Practices:**
		        * **Screen Readers (e.g., NVDA, JAWS):** Testing with screen readers ensures that visually impaired users can navigate and interact with your product effectively.
		        * **Manual Testing with Assistive Technologies:** Engage users who rely on assistive technologies to test your product, ensuring it meets their needs in real-world scenarios.

		- ### Emerging Trends
		- * **AI and Machine Learning:** AI has the potential to revolutionise accessibility by providing personalised experiences tailored to individual user needs. For example, AI can assist in real-time translation of sign language or generate alternative text descriptions for visual content. Projects like [ChatCaptioner](https://github.com/Vision-CAIR/ChatCaptioner) use a dialogue between two AI models to generate enriched image descriptions, while [Video-LLaMA](https://github.com/DAMO-NLP-SG/Video-LLaMA) empowers large language models to understand both video and audio content. The Visual Geometry Group (VGG) at the University of Oxford has also developed [AutoAD](httpss://www.robots.ox.ac.uk/~vgg/research/autoad/), a system for creating audio descriptions of movies in context.
		- * **Edge Case:** Consider an AI-driven virtual assistant that not only responds to voice commands but also detects when a user might be struggling and proactively offers assistance, such as simplifying a task or adjusting the user interface for better accessibility. AI can be trained to recognise specific user behaviours, such as frustration or difficulty, and adapt the system to provide more accessible options.
		- * **Inclusive Immersive Experiences:** As the Metaverse and other immersive environments continue to develop, there will be increasing demand for accessible experiences that cater to a diverse global audience. This includes creating new interaction patterns that are intuitive for all users, regardless of their abilities.
		- * **Edge Case:** Future immersive environments could use biometric data to dynamically adjust the level of sensory input, reducing stimuli for users prone to sensory overload or enhancing it for those who need more engagement. AI can be used to monitor user physiological responses and adapt the immersive environment to optimize for individual preferences and needs.

			- #### **Key Components**
		- **Agents**: Perform tasks, make decisions, and interact with other entities.
		- **Nostr Relays**: Decentralized event handlers for communication (posts, messages, etc.).
		- **Bitcoin Lightning Network**: Enables fast, low-cost transactions.
		- **Synthetic Stablecoin System**: Manages stablecoin transactions and conversions.
		- **Anthropic Model Context Protocol**: Enhances AI context for tasks and decisions.
		- **Distributed Git Repositories**: Store and manage versioned digital assets.
		- **Solid Pods**: Decentralized, user-controlled data storage.
		- **Identity Management**: Verifies user and agent identities.
		- **API Gateways**: Provide standardized communication between components.
		- **Consensus Mechanisms**: Facilitate agreement among agents for tasks or data states.
		- **Logging System**: Ensures transparency and auditing of agent actions.
		- **Coordinator Agent** (optional): Orchestrates tasks while maintaining decentralization.

		  ---

  - ### 1. The Problem: The Inadequacies of the Current Internet
		- The architecture of the modern web, dominated by centralized service providers, has created inherent vulnerabilities and inefficiencies that stifle innovation and compromise user sovereignty.
		- *   **Surveillance Capitalism:** The prevailing business model relies on harvesting vast amounts of personal data to power targeted advertising, creating a "panopticon of money" where user privacy is secondary to corporate profit.
		  *   **Centralized Points of Failure and Control:** Platform-centric ecosystems are vulnerable to censorship, de-platforming, and systemic outages. These central authorities act as gatekeepers, controlling the flow of information and value.
		  *   **Inefficiency for the Agentic Economy:** The existing financial infrastructure is ill-suited for the high-volume, low-value microtransactions characteristic of an agent-to-agent economy. High fees and slow settlement times make seamless, automated value exchange impractical.
		  *   **Erosion of Trust:** A persistent lack of transparency and a series of high-profile data breaches have led to a fundamental collapse in user trust, forcing a reliance on cumbersome security measures (e.g., 2FA) that degrade the user experience.

  - ## Lean Canvas Business Model:
		- Problem: Existing large-scale telecollaboration solutions suffer from poor adoption, limited accessibility, and trust issues. Meanwhile, emerging markets struggle to participate in the growing digital society due to the lack of inclusive tools and infrastructure, limiting access to global talent and new pools of ideas. There is insufficient provision of global talent pipelines for highly technical workflows.
		- Solution: Develop a secure, accessible, and inclusive platform for specialized telecollaboration spaces that seamlessly integrate advanced AI, ML, highly scalable and proven distributed systems, and open-source principles to create a digital society that caters to diverse industries, users globally, and captures global talent and innovative ideas.
		- Value Proposition: Ultra low cost training spaces, accessible 24/7 through very low end hardware. Interact with highly customizable, task-appropriate, and user-friendly specialized telecollaboration spaces supported by specially trained and optimised supportive large language AI models. Multi-lingual for emerging markets, enabling access to untapped global talent and fostering the exchange of diverse ideas.
		- Customer Segments: Initially Universities, but this will scale to be sector specific, catering to the global training, research, biomedical, and creative industries, with a special focus on empowering users in emerging markets such as Africa and India, and connecting them with worldwide opportunities and resources.
		- Revenue Streams: Tiered subscription plans to accommodate various user needs and budgets, as well as tailored enterprise solutions for large-scale clients. Bespoke consulting and support trending toward software as a service at scale.
		- Key Metrics: Track user growth, engagement, and retention, successful collaborations across industries, the platform's positive impact on users in emerging markets, and the effectiveness of global talent capture and idea exchange.
		- Unfair Advantage: The team's extensive experience in telecollaboration research, AI, ML, and a deep understanding of the complex landscape of emerging technologies, including highly scalable and proven distributed systems, provide a unique edge in creating a game-changing platform for specialized telecollaboration spaces that are secure, trusted, and tailored to diverse user needs while enabling access to global talent and innovative ideas.

  - ### Managing Scalability, Performance, and Latency:
		- As the Metaverse continues to grow, it is crucial to ensure that the open-source system can scale effectively and maintain optimal performance. By using distributed and federated networks, the system can better manage latency and performance issues, ensuring a seamless user experience.

  - ### AI and Generative ML Technologies:
		- As AI and generative ML technologies continue to evolve, their integration into the Metaverse will further enhance user experiences and create new opportunities for innovation. The release of models like GPT-4 have already prompted debate about general AI. It seems unavoidable that this will all impact on the Metaverse and digital society. For example, generative AI can now create entire interactive 3D environments on the fly, allowing for the rapid prototyping and deployment of complex, adaptable virtual scenarios. AI-powered avatars and non-player characters (NPCs) are also becoming more lifelike, capable of nuanced and dynamic interactions.

			- ### User Empowerment
				- Users should have control over their data, identity, and experiences within the metaverse.
				- This involves:
					- Self-sovereign identity solutions
					- Privacy-preserving technologies
					- User-centric governance models

					- ## Onboarding Agents
						- Edge agents assisting users with:

							- #### Living Contract Formation
								- Establishing a dynamic agreement between the user and the Mycelia network.
								- Outlining rights, responsibilities, and terms of engagement.

				- ### Interfaces and Interactions
					- Inter-Instance Communication
						- Scene Agents within each instance communicate with Transfer Agents to exchange information and facilitate cross-instance activities.
					- Value Exchange
						- Virtual economies within each instance connect through Transfer Agents for real-time value translation and asset exchange.
					- User Interaction
						- Users interact with Scene Agents within each instance and with Onboarding Agents at the network edge.
					- External Interface
						- Jurisdictional/Legal Agents provide an interface between the Mycelia network and external legal systems.

				- ## Community Governance
					- AI-driven governance models facilitate user participation in decision-making and policy-setting.

				- ## Safe and Secure Environment
					- Safeguarding measures and law enforcement interaction ensure a secure and protected user experience.

  - # Diagrams as code (mermaid)
  - ```mermaid
  graph TD
      A[Agentic Mycelia]
      A --> B(Interoperability)
      A --> C(User Empowerment)
      A --> D(Adaptable Governance)

      B --> E(Standardized Protocols)
      B --> F(Ontologies)
      B --> G(Translation Mechanisms)

      C --> H(Self-Sovereign Identity)
      C --> I(Privacy-Preserving Technologies)
      C --> J(User-Centric Governance)

      D --> K(AI-Driven Governance Models)
      D --> L(Adapts to Changing Needs)
      D --> M(User Preference Driven)

      N[Metaverse Instances]
      N --> O(Omniverse Digital Twin)
      N --> P(Roblox Event)
      N --> Q(Unreal-based MMORPG)
      N --> R(Global Business Conference)
      N --> S(Feminist Global Advocacy and Support)

      T[Scene Agents]
      T --> U(AI Governance)
      T --> V(Reputation Management)
      T --> W(Environmental Conditions)
      T --> X(Virtual Economy)

      Y[Transfer Agents]
      Y --> Z(Machine-Machine Translation)
      Y --> AA(Value Translation)
      Y --> AB(Digital Object Variations)
      Y --> AC(Safeguarding)
      Y --> AD(Law Enforcement Handshake)
      Y --> AE(PKI Infrastructure)

      AF[Onboarding Agents]
      AF --> AG(Preference Setup)
      AF --> AH(Living Contract Formation)

      AI[Jurisdictional/Legal Agents]
      AI --> AJ(Monitoring Network Activity)
      AI --> AK(Providing Transparency)
      AI --> AL(Enforcing Legal Standards)

      AM[Interfaces and Interactions]
      AM --> AN(Inter-Instance Communication)
      AM --> AO(Value Exchange)
      AM --> AP(User Interaction)
      AM --> AQ(External Interface)

      AR[Implications for Human Users]
      AR --> AS(Seamless Navigation)
      AR --> AT(Enhanced Privacy and Security)
      AR --> AU(Economic Opportunities)
      AR --> AV(Community Governance)
      AR --> AW(Safe and Secure Environment)

      style A fill:#FFD700,stroke:#333,stroke-width:4px
      style N fill:#87CEEB,stroke:#333,stroke-width:2px
      style T fill:#90EE90,stroke:#333,stroke-width:2px
      style Y fill:#FFA07A,stroke:#333,stroke-width:2px
      style AF fill:#ADD8E6,stroke:#333,stroke-width:2px
      style AI fill:#F08080,stroke:#333,stroke-width:2px
      style AM fill:#AFEEEE,stroke:#333,stroke-width:2px
      style AR fill:#20B2AA,stroke:#333,stroke-width:2px


  ```
  - ```mermaid
  sequenceDiagram
      participant User
      participant AIAgent
      participant Nostr
      participant Bitcoin
      participant Lightning
      participant RGB
      participant NosDAV
      participant GitHub
      participant Logseq
      participant SolidLite
      participant LinkedJSON
      participant Omniverse
      participant USD

      User->>+Logseq: Define agent tasks and rewards
      Logseq->>+GitHub: Store agent configurations
      GitHub->>+AIAgent: Trigger agent update
      AIAgent->>+Nostr: Subscribe to relevant events
      Nostr->>+AIAgent: Deliver relevant events
      AIAgent->>+Logseq: Retrieve task configurations
      Logseq->>+AIAgent: Provide task configurations
      AIAgent->>+NosDAV: Retrieve required data
      NosDAV->>+AIAgent: Provide requested data
      AIAgent->>+RGB: Request single-use seal
      RGB->>+AIAgent: Provide single-use seal
      AIAgent->>+Nostr: Perform task and publish results
      Nostr->>+User: Deliver task results
      User->>+Lightning: Send payment for task completion
      Lightning->>+Bitcoin: Settle payment transaction
      Bitcoin->>+AIAgent: Confirm payment receipt
      AIAgent->>+Nostr: Publish payment confirmation
      Nostr->>+User: Deliver payment confirmation
      User->>+SolidLite: Interact with decentralized application
      SolidLite->>+LinkedJSON: Retrieve structured data
      LinkedJSON->>+SolidLite: Provide structured data
      SolidLite->>+Nostr: Publish user actions
      Nostr->>+AIAgent: Deliver user actions
      AIAgent->>+Omniverse: Retrieve virtual environment data
      Omniverse->>+AIAgent: Provide virtual environment data
      AIAgent->>+USD: Manipulate 3D assets
      USD->>+AIAgent: Provide updated 3D assets
      AIAgent->>+Omniverse: Update virtual environment
      Omniverse->>+Nostr: Publish virtual environment updates
      Nostr->>+User: Deliver virtual environment updates
      User->>+Nostr: Publish feedback and interactions
      Nostr->>+AIAgent: Deliver user feedback and interactions
      AIAgent->>+NosDAV: Store interaction data
      NosDAV->>+AIAgent: Confirm data storage
      AIAgent->>+Nostr: Publish interaction confirmation
      Nostr->>+User: Deliver interaction confirmation
  ```

		- ### Key Principles
			- The core insight is that successful AI applications depend more on what information is provided to the model than on how that information is requested. This includes:
				- Relevant data from retrieval systems
				- User preferences and personalisation data
				- Historical conversation context
				- Current date, time, and environmental information
				- Tool definitions and available functions

  - # User Trust and Acceptance
  - Overcoming perceptions associated with software that controls devices

  - # Partnership with OpenAI, and Siri
  - Apple is focusing on "AI for the rest of us" - making AI capabilities accessible and useful for everyday tasks rather than flashy frontier use cases. The emphasis is on small but significant time-saving wins.
  - Siri is the centerpiece, with expanded natural language understanding, ability to maintain context, and both voice and text input. Siri can now take actions across Apple and third-party apps.
  - Apple has partnered with OpenAI to integrate ChatGPT into Siri and other Apple experiences later this year. Siri can tap into ChatGPT when needed to expand its capabilities.
  - Apple argues that great product experience matters more than just having state-of-the-art AI models. They are willing to reduce user choice to create a simpler experience, as seen with the limited options in their Image Playground feature.
  - Apple is trying to balance leveraging personal context and data with strong privacy protections through on-device processing and a new "private cloud compute" capability.
  - Apple is taking an approach of deeply integrating AI assistants and capabilities across the OS in a frictionless way to help users with everyday tasks, while maintaining their emphasis on privacy and a carefully designed user experience over flashy demos. The partnership with OpenAI expands what's possible while keeping the Apple experience at the forefront.

  - ### Conclusion
  - Bitcoin is portrayed as a groundbreaking technology with multiple advantages, particularly in offering financial independence, resisting censorship, and ensuring user control over transactions.
  - [Link to the article](https://www.bitcoin.com/get-started/the-benefits-of-bitcoin/)


	  https://bitcoinmagazine.com/culture/bitcoin-blockchain-is-fighting-fraud-in-guatemalas-presidential-elections


	  https://thenextweb.com/news/el-salvador-first-adopt-bitcoin-real-money-good-news-unbanked-syndication



	  https://thenextweb.com/news/el-salvador-first-adopt-bitcoin-real-money-good-news-unbanked-syndication

  - ### Key Capabilities of GPT-4o
		- **Visual Analysis for Education**
			- **Description**: GPT-4o can visually analyze math problems, objects for language translation, paintings for historical context, and products for online reviews. This feature provides detailed and contextual explanations, enhancing the learning experience.
			- **Use Case**: Integration with augmented reality devices like Meta Rayban glasses to offer real-time educational support for students, language learners, and hobbyists.
		- **Teams Meeting Assistant**
			- **Description**: GPT-4o functions as an AI assistant during Microsoft Teams meetings, capable of summarizing minutes, identifying action items, retrieving relevant information from company databases, and assisting with data analysis tasks such as creating charts and reporting trends.
			- **Use Case**: Improves meeting productivity by handling administrative tasks and providing insights during discussions.
		- **Advanced Language Translation**
			- **Description**: GPT-4o offers advanced language translation capabilities, capturing conversational context and intonation for more natural and accurate translations.
			- **Use Case**: Facilitates real-time multilingual conversations, potentially integrating with devices like AirPods to break down language barriers in personal and professional interactions.
		- **Screen Sharing for Coding Assistance**
			- **Description**: Allows users to share their screens with GPT-4o for real-time guidance on coding tasks, debugging, and other technical work, including non-programming tasks like Excel analysis and PowerPoint creation.
			- **Use Case**: Provides on-the-spot assistance for professionals across various fields, enhancing productivity and efficiency.
		- **AI Interactions**
			- **Description**: Demonstrates the ability of two GPT-4o instances to interact seamlessly, including having conversations and performing tasks together, such as singing.
			- **Use Case**: Paves the way for AI influencers on social media platforms and collaborative AI systems that can work together across different domains and data sets.
		- **AI Pet Training**
			- **Description**: Utilizes vision capabilities to assist in training pets by connecting to smart devices like treat dispensers, observing and responding to a pet's behavior to provide real-time guidance and training.
			- **Use Case**: Helps pet owners train their animals more effectively and ensure consistent training routines.
		- **Dual AI Brainstorming**
			- **Description**: Allows users to engage with two distinct GPT-4o personalities simultaneously for dynamic and comprehensive brainstorming sessions.
			- **Use Case**: Facilitates creative problem-solving by offering balanced insights from different viewpoints, such as optimistic vs. pessimistic perspectives.
		- **Accessibility for the Visually Impaired**
			- **Description**: Interprets and describes visual inputs from devices like Meta Rayban glasses, helping visually impaired individuals navigate their surroundings and identify objects.
			- **Use Case**: Enhances independence by providing real-time descriptions of the environment, such as distinguishing between different objects.
		- **Text to 3D Conversion**
			- **Description**: Converts textual descriptions into detailed 3D models, enabling users to visualize concepts and objects described in text.
			- **Use Case**: Useful for designers, architects, educators, and others needing to create or understand complex three-dimensional structures from written descriptions.
		- **Enhanced Emotional Intelligence**
			- **Description**: Understands and responds to emotional cues in text and speech more effectively, providing empathetic and contextually appropriate responses.
			- **Use Case**: Improves interactions in customer service, therapy, and personal assistance by addressing the emotional needs of users.
		- **Advanced Personalization**
			- **Description**: Customizes interactions based on individual user preferences, history, and behavior, ensuring relevant recommendations and assistance.
			- **Use Case**: Enhances the overall user experience in applications such as learning, entertainment, and daily tasks.
		- **Real-Time Multimodal Interaction**
			- **Description**: Integrates text, voice, and visual inputs to provide a seamless and interactive user experience.
			- **Use Case**: Ideal for virtual assistants, interactive learning platforms, and customer service applications where users can engage using multiple forms of input simultaneously.
		- ![1722893096005.jpeg](assets/1722893096005_1722893626363_0.jpeg)

  - ### Local Knowledge Base
		- Each user device maintains a secure, [[Hardware and Edge]] local knowledge base.
		- This base contains user preferences, interests, and demographic data, organised as a lookup table. Hashes represent product classes or categories of product that are interesting to the user (opt in)

  - ### Nostr Integration
		- User's device includes a [[Nostr protocol]] client to interact with the decentralised Nostr network.
		- The Nostr client accesses the local knowledge base to retrieve relevant product class hashes.
		- These hashes are used to pull personalised marketing content from the Nostr network.

  - ### Embedding in User-Side Applications
		- Personalised marketing content is seamlessly embedded into the user's preferred applications, such as Roblox, [[NVIDIA Omniverse]] , and web browsers.
		  This ensures relevant and engaging marketing content within the context of the user's usual digital experiences.

  - ### Cloud-Based Latent Space
		- Fine-tuned product variations are stored in a cloud-based [[latent space]] , a high-dimensional vector space where each point represents a specific product variation.
		- This [[latent space]] is organised and indexed for efficient retrieval based on user preferences.

  - ### Interaction Flow
		- The user's device, with a Nostr client, accesses the local knowledge base to retrieve relevant product class hashes.
		- These hashes are used to pull personalised marketing content from the Nostr network, which matches hashes with corresponding product variations in the cloud-based latent space.
		- The matched product variations are then returned to the user's device via the Nostr network, ensuring the marketer has no direct access to the user's personal information or identity.

		- #### Measurement and Analytics
		- The exploration of privacy-preserving measurement techniques allows for aggregate insights without compromising individual user privacy.

		- ### Windows
			- Download the OpenVPN client from the official website: [https://openvpn.net/community-downloads/](https://openvpn.net/community-downloads/)
			- Install the OpenVPN client on your laptop.
			- Obtain the `vpn.ovpn` file provided by the event organisers.
			- Launch the OpenVPN client and import the `vpn.ovpn` file.
			- On the day of the event, you will receive a username and password. Use these credentials to connect to the VPN.

		- ### macOS
			- Download the official OpenVPN Connect client from the App Store: [https://apps.apple.com/us/app/openvpn-connect/id590379981](https://apps.apple.com/us/app/openvpn-connect/id590379981)
			- Install the OpenVPN Connect client on your laptop.
			- Obtain the `vpn.ovpn` file provided by the event organisers.
			- Launch the OpenVPN Connect client and import the `vpn.ovpn` file.
			- On the day of the event, you will receive a username and password. Use these credentials to connect to the VPN.

  - ## Section 8: Other Launches
		- Midjourney launched v6 and web UI.
		- OpenAI released logprobs for ChatGPT.
		- LlamaIndex launched step-wise agent execution.
		- New models like Suno AI (audio), Phi-2 (Microsoft), TextDiffuser 2 (images).

		- ### DONE Lead Generation & Sales Outreach
			- **Run.Reply.io (with Jason AI)**
				- *Description:* Sales engagement platform automating multi-channel outreach (email, etc.). Jason AI component helps generate and draft emails for cold outreach.
				- *Cost:* Subscription-based, plans often start from $60-$90 USD/user/month.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Reply.io](https://reply.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Artisan (with Ava AI)**
				- *Description:* AI tool focused on boosting sales pipelines. 'Ava' AI employee helps find new leads and generate customised cold emails based on campaign goals and target sectors.
				- *Cost:* Likely subscription or custom pricing; check website.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Artisan Sales AI](https://www.artisan.co/sales-ai)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Vidyard**
				- *Description:* Video platform for sales. Can be used to create personalised video messages for email campaigns, identify prospects, generate scripts, and automate sending.
				- *Cost:* Free plan available. Paid plans add more features, starting around $19 USD/user/month.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Vidyard](https://www.vidyard.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Dopplio**
				- *Description:* AI tool for creating personalised cold-outreach videos at scale. Record once, then use AI to customise for individual prospects.
				- *Cost:* Check website for pricing details (likely subscription/usage-based).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Dopplio](https://www.dopplio.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

		- ### Presentation Creation
			- *Task:* Design and build professional presentations and pitch decks more efficiently.
			- **Gamma**
				- *Description:* Creates presentations, documents, and basic websites from a single text prompt. Focuses on dynamic and visually appealing layouts.
				- *Cost:* Free plan with credits. Paid plans start around $8 USD/user/month (billed annually).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Gamma](https://gamma.app/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Tome**
				- *Description:* AI-powered storytelling format for creating presentations and narratives. Generates slides with text and AI images from prompts.
				- *Cost:* Free plan available. Pro plans start around $16 USD/user/month (billed annually).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Tome](https://tome.app/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Presentations.AI / SlidesAI / Plus AI / Slidesgo / Beautiful.ai**
				- *Description:* A range of AI tools specifically designed to generate presentation slides from text prompts or existing documents, often integrating with Google Slides or PowerPoint. (Head-to-head comparison mentioned).
				- *Cost:* Varies per tool. Many offer free trials or basic versions. Paid plans range typically from $10-$40 USD/user/month.
				- *Websites:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Presentations.AI](https://presentations.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[SlidesAI](https://www.slidesai.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Plus AI](https://www.plusdocs.com/plus-ai)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Slidesgo AI Maker](https://slidesgo.com/ai-presentation-maker)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Beautiful.ai](https://www.beautiful.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Microsoft Copilot**
				- *Description:* Can generate entire PowerPoint presentations from prompts or Word documents. (See Writing Assistance).
				- *Cost:* See Writing Assistance.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Microsoft Copilot for M365](https://www.microsoft.com/en-gb/microsoft-copilot/microsoft-copilot-for-microsoft-365)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

  - ### UI/UX Design Assistance
		- *Task:* Designing user interfaces (UI) and user experiences (UX) for websites or applications.
		- **Galileo.AI**
			- *Description:* AI tool that generates user interface designs (for websites, mobile apps) from text prompts. Aims to speed up the initial design phase (no-code).
			- *Cost:* Pricing has changed; check website for current plans (likely subscription).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Galileo AI](https://www.usegalileo.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
		- **Figma (Landify plugin)**
			- *Description:* Figma is a leading UI/UX design tool. The Landify plugin allows creating web design elements or landing pages within Figma using simple text prompts.
			- *Cost:* Figma has free starter plans. Paid plans for teams/pro features. Plugin costs vary (Landify may have its own pricing).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Figma](https://www.figma.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----> / (Search Figma Community for Landify)

  - ### Analysing Customer Feedback
		- *Task:* Extract insights from customer interactions (like sales calls or support tickets) to understand needs and improve products/services.
		- **Buildbetter.ai**
			- *Description:* AI platform that analyses customer call recordings to generate reports, extract key insights, and create detailed user personas based on actual feedback.
			- *Cost:* Check website for pricing details (likely subscription).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[BuildBetter.ai](https://buildbetter.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

		- #### User Behaviour and Adoption
			- A critical factor in the success of AI-driven search engines will be user adoption. While AI-enhanced search engines promise more accurate and contextually relevant results, there remains scepticism about whether users will transition from well-known traditional search engines like Google. Improvements in AI capabilities must demonstrate a substantial enhancement in user experience to effectively drive this behavioural shift.

		- ## Primitives
			- OpenAI identified the following 5 points about metaverse, in response to the query "What are 5 key points I should know when studying metaverse?". This is an unexpectedly great answer, probably the cleanest I have found, but I cannot longer find it online.
				- Metaverse is a virtual reality platform that allows users to interact with each other and with digital objects in a virtual space.
				- Metaverse is a decentralized platform, meaning that there is no central authority or server that controls the platform.
				- Metaverse is an open platform, meaning that anyone can develop applications for the platform.
				- Metaverse is a secure platform, meaning that all data and transactions are encrypted and secure.
				- Metaverse is a scalable platform, meaning that it can support a large number of users and a large number of transactions.
			- The [Metaverse Standard Forum](https://metaverse-standards.org/) highlights the following, which reads like the output from a brainstorm between academia and industry stakeholders.
				- collaborative spatial computing
				- interactive 3D graphics
				- ugmented and virtual reality
				- photorealistic content authoring
				- geospatial systems
				- end-user content tooling
				- digital twins
				- real-time collaboration
				- physical simulation
				- online economies
				- multi-user gaming
				- new levels of scale and immersiveness.
			- It's not a useless list by any means, but it lacks the kind of product focus we need for detailed exploration of value and trust transfer.
			- Mystakidis identifies the following [155]:
				- Principles
					- Interoperable
					- Open
					- Hardware agnostic
					- Network
				- Technologies
					- Virtual reality
					- Augmented reality
					- Mixed reality
				- Affordances
					- Immersive
					- Embodiment
					- Presence
					- Identity construction
				- Challenges
					- Physical well-being
					- Psychology
					- Ethics
					- Privacy
				- This is quite an academic list. A lot of these words will be explored in the next section which is more of an academic literature review.
				- Nevelsteen attempted to identify key elements for a ‘virtual work’ in 2018 and these are relevant now, and described rigorously in the appendix of his
				  paper [156]:
					- Shared Temporality, meaning that the distributed users of the virtual world share the same frame of time.
					- Real time which he defines as “not turn based”.
					- Shared Spatiality, which he says can include an ‘allegory’ of a space, as in text adventures. It seems this might extend to a spoken interface to a mixed reality metaverse.
					- ONE Shard is a description of the WLAN network architecture, and conforms to servers in a connected open metaverse.
					- Many human agents simply means that more than one person can be represented in the virtual world and corresponds to ‘social’ in our description.
					- Many Software Agents corresponds to AI actors in our descriptions. Non playing characters would be the gaming equivalent.
					- Virtual Interaction pertains to any ability of a user to interact actively with the persistent virtual scene, and is pretty much a given these days.
					- Nonpausable isn’t even a word, but is pretty self explanatory.
					- Persistence means that if human participants leave then the data of the virtual world continues. This applies to the scenes, the data representing actions, and objects and actors in the worlds.
					- Avatar is interesting as it might seem that having avatar representations of connected human participants is a given. In fact the shared spaces employed by Nvidia for digital engineering do not.
				- Turning to industry; John Riccitiello, CEO of Unity Technologies says that metaverse is “The next generation of the internet that is:
					- always real-time
					- mostly 3D
					- mostly interactive
					- mostly social
					- mostly persistent
				- Expanding this slightly I choose the following primitives of what I think are important for a metaverse:
					- Fusing of digital and real life
					- Social first
					- Real time interactive 3d graphics first
					- Persistent
					- Supports ownership
					- Supports user generated content [157]
					- Open and extensible
					- Low friction economic actors and actions
					- Trusted / secure
					- Convergence of film and games
					- Blurring of IP boundaries
					- Blurring of narrative flow
					- Multimodal and hardware agnostic
					- Mobile first experiences
					- Safeguarding, and governance
					- Scaffolded by GenAI
					- Supports Agentic AI actors

		- #### More like crypto NFT virtual land
		- This next three are a placeholder taking text from the [linkedsite](https://www.analyticsinsight.net/top-10-metaverse-platforms-that-will-replace-social-media-in-future/)and will be swapped out: The digital land [narrative isfading](https://www.coindesk.com/markets/2022/04/06/metaverse-majors-struggle-as-user-base-falls-short-of-market-expectations/?).

		- ##### Sandbox
			- The Sandbox, a decentralized gaming platform built on the Ethereumblockchain, has garnered attention for its promise of a vibrantecosystem filled with user-generated content. However, despite itsambitious vision, the project has faced various challenges andcriticisms similar to Decentraland. Limited use cases and adoptionremain a significant challenge for The Sandbox. While the platform aimsto create a vast and engaging gaming ecosystem, it has yet to gainwidespread adoption, leading to a limited number of users anddevelopers. This lack of user engagement raises questions about thelong-term viability of the project, as the value of virtual land,assets, and in-game experiences may remain limited without a thrivingcommunity. Like Decentraland it is a manipulated hype bubble, attractingglowing paid press reports in some media, and ‘interest’ from nationaland regional ‘branches’ of global brands which are then spun to createartificial hype in main stream media. The tradable NFTs within theseearly platforms are obviously subject to insider trading, pricevolatility, wash trading, and other harmful activities.
			- The Sandbox places too much emphasis on the speculative aspect ofvirtual land and asset trading, rather than focusing on creating agenuinely engaging gaming ecosystem. This focus on speculation couldlead to an unsustainable bubble with inflated asset prices, and it seemslikely we have already seen most of the collapse of this ecosystem.
			- The actual experience of interacting with The Sandbox’s gaming productsleaves much to be desired. For instance, the platform’s games may sufferfrom lag and poor performance due to the technical limitations ofblockchain technology. Additionally, the quality of user-generatedcontent can be highly variable, as not all creators possess the skillsand resources to develop engaging gaming experiences. As a result, usersmight find themselves sifting through a plethora of low-quality games,which can be frustrating and time-consuming.
			- Concerns about centralization persist, as some critics argue that theproject is not entirely decentralized. The team behind The Sandbox stillholds a significant amount of control over the platform’s developmentand governance, potentially undermining the project’s core vision of adecentralized gaming ecosystem.

		- ##### Space Somnium
			- Somnium Space is just another one of these, but with more VR. It allowsusers to join in either through a downloadable VR client or abrowser-based version to function like any other web app. It sufferedthe same problems at Decentraland and Sandbox. They are terribleproducts, with hype, manufactured by money, extracted from users, oftenconvinced by paid celebrity endorsements. It’s the NFT space, butsadder, and technically worse, and likely not for very much longer.

  - ##### Spatial
		- Spatial is worth a quick look because it’s a business first meetingtool, and comparatively well received by industry for that purpose.
		- - Very compelling. Wins at wow.
		- - Great avatars, user generated
		- - AR first design
		- - Limited scenes
		- - Smaller groups (12?)
		- - Limited headset support
		- - Intuitive meeting support tools
		- - No back end integration

  - ##### MeetinVR
		- Good enough graphics, pretty mature system
		- OK indicative avatars, user selected
		- VR first design
		- Limited scenes
		- Smaller groups (12?)
		- Quest and PC
		- Writing and gestures supported
		- Some basic enterprise tools integration
		- Bring in 3D objects
		- Need to apply for a license?

  - #### Ubiquitous displays
		- This includes [laser retinaldisplays](https://skarredghost.com/2022/06/28/mojo-vision-contact-tested-eye/),and smart screens which are context and user aware.

  - ##### Unfair distribution
		- By design the distribution of Bitcoin is likely ‘fair‘, in that everyone has been able to access and secure the asset long term without prejudice. This image from Twitter user @Geertjancap shows the distribution in 2021. Whether this is judged to be fair if the asset jumps to 10 times it’s current value, minting a new class of hyper rich holders, is another matter.
		- ![](./assets/3c46c793cd3e9cdedc88623cafee35ef0ac7ebf0.jpg)
		- https://twitter.com/Geertjancap/status/1380972132990136322/photo/1
		- {{twitter https://twitter.com/Geertjancap/status/1380972132990136322/photo/1}}
		- Bitcoin distribution is skewed to a few early holders, but it likely is fair.

			- ##### Monetisation of User Generated Content:
				- Games as a NFT’s offer ability to monetise UGC: User generated content.Video games such as [Nintendo’s *PokemonGo*](https://www.businessofapps.com/data/pokemon-go-statistics/) *(166million players)*, [Bungie’s *Destiny2*](https://techacake.com/destiny-2-player-count/#:~:text=The%20total%20player%20base%20of,to%20be%2038%20million%20players.&text=According%20to%20the%20source%2C%20the,in%20terms%20of%20player%20population.)*(38 million players)* or [miHoYo’s GenshinImpact](https://fictionhorizon.com/how-many-people-play-genshin-impact/#:~:text=Genshin%20Impact%20had%20approximately%209,million%20users%20in%20June%202021.)(*9 million players* ) all have large, established and significantplayer bases. What is noteworthy, the games are designed to encourageplayers may spend hundreds, or in some cases thousands of hours on onegame alone; according to[Destinytracker.com](https://destinytracker.com/destiny/leaderboards/all/minutesplayedtotal?grouped=true&page=1),the top players have amassed total play times over 20,000 hours, closeto 1,000 days or asciitilde 3 years, which is incredible feat givenDestiny 2 only launched 5 years ago in 2017.
				- Destiny/Pokemon Go and Genshin Impact revolve around a central key gamemechanic; players investing significant amounts of time collecting ingame digital assets; characters/weapons/items, often classed as ‘rare’or ‘exotic’ or ‘5 Star’. These collectibles usually found by acombination of the accrual of in-game time, completing quests,purchasing additional in-game items/boosters, and luck (‘RNG’). Playersare often encouraged to share their collections of rarecharacters/weapons/ objects through in-game achievements, triumphs,scores acting as a mark of distinction/status symbol.
				- Traditionally there has been nothing that went beyond sharing the*digital badge* (i.e triumph/achievement/accomplishment) on a on socialmedia/gamer’s platform profile. However NFT’s offer the ideal system fordevelopers/publishers and even players to monetise usergenerated/customised data (such as a players unique save game data),simultaneously allowing: a) creation of an additional monetisedecosystem to meet player demands i.e. some players who are willing tomonetise and ‘sell’ their invested time in a particular product/serviceto other players with little time but willing to pay other players for‘grinding’ (progressing laborious in game tasks) and a more advancedin-game progression point. The potential to providepublishers/developers with an additional long-term income stream,providing a better ROI on computer & video game development, which inmany instances can cost hundreds of millions in development costsspanning 5/10 years, is undeniable.
				- This use case is where our focus lies, as it is now far easier for users to generate content with the support of AI. Note that ideas also can count as content.

  - ### DID principles
		- The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ### Nostr
		- Nostr (pronounced no-star) is a [decentralized openprotocol](https://www.nostr.how/) that aims to improve the social mediaexperience by addressing issues of censorship and data collection. Theprotocol operates by allowing users to post and view notes on serverscalled relays, and view and post these notes through apps calledclients. The open nature of the protocol allows for competition and afree flow of information, as users can choose to use different relays orclients if they are censored. This is because the protocol isdecentralized and controlled by no one.
		- The decentralized nature of Nostr means that there is no centralauthority that can control the flow of information. This is achievedthrough the use of relays and clients, which are run by differentindividuals or entities. Users have the freedom to choose which relaysand clients they want to use, and as a result, their feeds are populatedwith content from the people they choose to follow. If a relay or clienttries to censor a user, they can simply switch to a different one. Thisis a major advantage over traditional centralized social media platformswhere one entity holds all the control over the flow of information andcan censor or manipulate the content that users see.
		- Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
		- Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
		- This potential step-change improvement to the social media experiencefor everyday people addresses issues of censorship and data collection.
		- Nostr is “The simplest open protocol that is able to create acensorship-resistant global "social" network once and for all.”according to it’s [github page](https://github.com/fiatjaf/nostr). Morethan that it’s a client side validated proof of who a user isinteracting with, hence being in this identity section. To be clear,it’s not a completely peer to peer system in that it uses (very dumb)relay servers, but this gives it some of the best characteristics ofboth paradigms. This has the following advantages for our metaverseapplication;
			- it’s lightweight, with minimal network overhead and complexity
			- it’s real-time using websockets
			- anyone can run a relay server, so one can be run in the deployment in the final section of the book.
			- Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
			- it’s open-source
			- it is itself [Turing Complete](https://snort.social/e/note1evkdgcg0dw8ckyqsqhnk4wy55h7w97twjf8etcq2tr9sv5urlszqjc9p6v) and therefore able to execute any code within it’s message protocol
			- there are multiple usable libraries and tools
			- it’s under active development with an excellent team. The lead, ‘Fiatjaf’ is one of the most [prolific developers](https://github.com/fiatjaf) in the lightning space.
			- it’s based on the same underlying cryptographic technology we are using elsewhere, indeed with it’s use of Bitcoin keys the identity system is global
			- it provides the identity proof that we need to validate users and objects into a virtual space
			- it enables message passing
			- it scales to be a social network as required
			- it need not rely on anything outside of a relay hosted on the metaverse server
			- it can be scaled to provide one to many bulletin board style applications within the metaverse
			- we can use it in private, group, and public modes as required
			- it integrates with the torrent network allowing storage and external referencing of arbitrary data
			- it can easily operate outside of the walled garden of the metaverse, extending the reach of the messages
		- [Nostr is incredibly promising](https://www.forbes.com/sites/rogerhuang/2022/12/29/nostr-is-the-decentralized-protocol-that-might-replace-elon-musks-twitter/),and integrating these relays in the metaverse servers and clients of theproposed technology stack in this book might allow us globally provableidentity, with privacy by design. It can provide message passing. If allentities in the collaborative mixed reality scenegraphs are also Nostrkey pairs then schema can be applied consistently with the economiclayer using the same key system as Bitcoin. Nostr has just received asubstantial grant from Dorsey. It is core to the design later in thebook. A curated list of projects and libraries is [available ongithub](https://github.com/aljazceru/awesome-nostr).
		- Luke Childs [says](https://github.com/nostr-protocol/nips/issues/154):
			- “Nostr makes a good candidate to be used as a very simple DID layer.Having "Login with Nostr" auth on websites solves a lot of problems in avery elegant way, and Nostr’s main use case as a social network protocolmakes it highly suited to be used as your main identity proving key.Compare "Login with Nostr" to similar "Login with Lightning"(LNURL-auth) specs to see some easy and obvious advantages:  Remote signer vs local signer  Login with Lightning requires access to remote keys, login with Nostrrequires access to local keys ideally stored in a browser extension. Dueto the way Lightning works you can only really have one instance. Youneed all your client devices linked to a single Lightning node, thismeans most clients will be connecting to the signer remotely. Now ifyour Lightning node goes down or you lose your connection you also can’tauth with any service. This could cause circular dependencies where youlose the connection to your Lightning node so you can’t auth with theservices you need to access to debug the issue with your Lightning nodelike your hosting provider or VPN account. You could technically solvethis by replicating your LN keys to other client devices only to be usedfor local auth signing but that introduces other risks.  Unique identifier vs identity  A Lightning node is not really an identity but a unique identifier. Itjust tells you the person that auths is the same random person thatauthed last time, it doesn’t tell you who they are. A nostr pubkey is anidentity. It tells you who they are, what their name is, what they looklike, who they know, how you can pay them, how you can message them.  This is much more useful as an identity layer for an application. Theapplication can show their profile picture, username, send secure crossplatform push notifications via NIP-04 encrypted Nostr DMs, etc.  Consistent identity across services  Lightning pubkeys are sensitive private information and can leakconfidential financial information, Nostr pubkeys are safe to share withanyone. LNURL-auth adds extra steps to solve this by creating derivedsubkeys for identities that are unique to each service you auth with.This does not seem ideal, it seems the default case is that an identityis something that you do want to follow you across all your accounts.Nostr based auth behaves more appropriate in this regard. In the rarecase you need to achieve privacy and separation between certain servicesyou can still do that by using use a throwaway Nostr key for thoseservices.  User relationships across services Since authing with Nostr shares areal social identity with the service, they can also see your Nostrsocial graph. This could be useful for connecting you to people youalready know on the new service.  Low cost identity  Ideally identities should be easy to create but hard to build upreputation to limit spam while avoiding excluding people from thenetwork. It’s not clear that it will be cost effective / scalable foreveryone to run their own Lightning node so tying individual identity toa single Lightning node pubkey is problematic. Nostr keys are easy tocreate and hard reputation can be earned via PoW/DNS or building astrong social graph.”

  - ### Company Culture
		- **Growth Focus**: The company culture prioritized growth and user engagement over other factors, such as user safety and value​​.
		- **Conflicting Teams**: Integrity/safety teams often found their priorities at odds with growth teams, with growth usually prevailing.
		- **Metrics of Success**: Success was defined primarily in terms of user engagement and platform growth, often to the detriment of other considerations.

  - ### Impact on Society
		- **Content Amplification**: Facebook's algorithms influenced what content got amplified, contributing to sensationalism and decreased factual accuracy.
		- **User Influence**: Hyperactive users had disproportionate influence over content flow and amplification.
		- **Democratic Illusion**: The platform created an illusion of democratization, but in practice, it was a curated environment with significant control over content and user interaction.

  - ### Mistakes by Senior Management
		- **Misaligned Priorities**: There was a fundamental misalignment between short-term growth and long-term integrity and user experience.
		- **Ignoring Research**: Findings that suggested integrity changes could boost long-term retention were often ignored or downplayed.
		- **Limited Transparency**: Decisions were made with a lack of transparency, both internally and externally.

  - ### Hypothetical Better Ways of Building Platforms
		- **User Safety Focus**: Prioritizing user safety and value over mere engagement and growth.
		- **Balanced Influence**: Implementing measures to prevent hyperactive users from disproportionately influencing content amplification.
		- **Transparent Decision Making**: Adopting more transparent processes in algorithm design and content moderation decisions.
		- **Long-Term Metrics**: Shifting focus from short-term engagement metrics to long-term user well-being and platform health.
  - References:
  - Jeff Horwitz's book "Broken Code," which delves into the Wall Street Journal's 2021 investigation and further into Facebook's internal documents. It was based on interviews and discussions with former Facebook employees and experts, shedding light on the company's internal dynamics and decision-making processes.

  - ### [OpenWebUI](https://openwebui.com/)
		- A user-friendly web interface for interacting with large language models.

  - ### [Rabbit](https://www.rabbit.tech/)
		- **Features:**
			- Designed by Teenage Engineering Co
			- Agentic (connect it to your data and it does stuff)
				- Needs to be connected to a lot of different user data sources
			- I'm sceptical, but it's a nice effort.
			- It's **cheap**, I would totally give this to a kid over a mobile phone. £200 all in?!?
			- It sold out immediately.
			- {{tweet https://twitter.com/rabbit_hmi/status/1744781083831574824}}

		- ### Key Features and Benefits
			- **Precision and Intuitiveness**: The EMG technology can detect even the tiniest muscle movements, allowing for fluid and responsive interactions in VR and AR[1](https://blogs.expandreality.io/meta-are-enhancing-vr-experiences-with-neural-wristbands).
			- **Non-Invasive**: The wristbands offer a non-invasive way to capture neural signals, making the technology more accessible and user-friendly[1](https://blogs.expandreality.io/meta-are-enhancing-vr-experiences-with-neural-wristbands).
			- **Versatility**: The wristbands can be used for various applications, from simple object recognition to fully immersive environments[1](https://blogs.expandreality.io/meta-are-enhancing-vr-experiences-with-neural-wristbands).
			- **Adaptive Learning**: The neural interface continuously improves its understanding of each user's unique movements over time, enhancing the overall experience5
			- At present, the EMG wristbands can provide basic input commands, such as:
				- Finger taps (index and middle finger
				- D-pad-like gestures
				- Simple hand movements[2](https://mixed-news.com/en/bosworth-on-emg-wristband-as-quest-controller/)
			- While these inputs are currently limited, Meta's CTO Andrew Bosworth suggests that the technology could evolve to become an increasingly universal interface over time[2](https://mixed-news.com/en/bosworth-on-emg-wristband-as-quest-controller/).

  - ##### Windows in Spatial Design
		- - Windows are designed with a new visual language, made of a glass material that provides contrast with the world, awareness of surroundings, and adapts to different lighting conditions.
		- - Windows can be moved, closed, and resized by users, with windows facing the user during movement.
		- - Windows are flexible and can be resized to fit comfortably within the user’s view.
		- - Choosing Window Size and Layout Windows are designed to be flexible, adapting to content, and the window size should be chosen based on this. Windows can change size dynamically based on context.
		- - Apps can use multiple windows to display content side by side or show distinct actions, but should ideally stick to a single window to avoid user overwhelm.

		- ##### User Mobility
		- The presentation emphasizes the importance of designing applicationsthat require minimal movement from users. It recommends usingsystem-level recentering methods to adjust the app’s view when a usermoves.

		- ##### Dimensionality
		- The use of depth and scale in designing the user experience isemphasized. Depth can help with hierarchy and focus, and scale can beused to emphasize content. The text warns against overusing depth,especially with text, and encourages developers to experiment with scaleto achieve the desired user experience.

		- ##### Immersiveness
		- The passage introduces the concept of an immersion spectrum, where anapp can transition between various states of immersion based on theuser’s experience. The importance of smooth transitions, designing withconsideration to user focus, thoughtful blending with reality, andkeeping the user comfortable are emphasized.

		- ##### User Comfort
		- Recommendations for moving an immersive app, focusing on avoidingdisorienting fast movements and instead recommending fade out and fadein techniques to keep the user comfortable during motion.

		- ##### Key Moments
		- Focusing on a “key moment” that provides a unique spatial or immersiveexperience is recommended. This could involve enhancing a moment withdepth and scale or transforming the user’s space to create a unique andmemorable experience.
  - Lightfield
		- [Light Field Lab](https://www.lightfieldlab.com/#tech)
  - [Infitec shows holographic projection screens (installation-international.com)](https://www.installation-international.com/ise-daily/infitec-shows-holographic-projection-screens)
  - [HYPERVSN is a 3D Integrated Holographic System for advertising, digital signage, events.](https://hypervsn.com/)
  - {{video https://www.youtube.com/watch?v=DxkIo-2Jzzo&}}

  - # Brain
  - Apple has submitted a patent application that raises some serious privacy and ethical concerns.
  - [From this post](https://www.linkedin.com/feed/update/urn:li:activity:7196781454519877632/)
  - ![1715807554519.jpeg](assets/1715807554519_1716117593773_0.jpeg)
  - The US Patent and Trademark Office lists application 2023/0225659 as a “biosensing device” built into Apple’s earbuds to measure “biological signal parameters from a user.”
		- 👉 Electroencephalography (EEG). In other words, the aim is to directly record the user’s brain waves from tiny sensors positioned within the ear canal.
		- 👉 Electromyography (EMG). This records muscle movements and the information can be used to help understand facial expressions and jaw movements related to emotion.
		- 👉 Electrooculography (EOG) tracks eye movements, particularly side-to-side.
		- 👉 Electrocardiogram (ECG) typically measures the electrical activity of the heart.
		- 👉 Galvanic skin response (GSR), which provides an indirect measure of emotional arousal – that is, the strength of an emotional response.
		- 👉 Blood volume pulse (BVP). This is measured using photoplethysmography and provides information about heart rate (HR) and heart rate variability (HRV).
  - In other words, the aim is to collect a very comprehensive set of neurological and biometric data from the user. Creepy, right?!
  - It’s unclear to me how you could even record meaningful data from within the ear.
  - If this kind of interface goes ahead it should be
		- 1. Voluntary. Participants should not be forced or deceived into providing physiological or neurological data. Volunteers at liberty to stop at any time.
		- 2. Limited. Personal data may only be collected for a specific, explicit and legitimate purpose. This purpose must be clearly stated, and only stored as long as needed to complete that purpose.
		- 3. Transparent. Requires informed consent including being aware the data are being collected and knowing the risks involved, including whether the information will be shared with other organizations.
		- 4. Autonomy. Free from manipulation. Participants should not be forced or deceived into making decisions they would not otherwise make.
		- 5. Valid. Must be based on valid science and led by scientifically trained staff.
  - To my mind, this application potentially violates 4 out of 5 of these principles (I don’t see any evidence of manipulation) and this makes me deeply uneasy!

  - # AI Agent Refactor
  - ```mermaid
  classDiagram

  %% -----------------------------------------------------------------------
  %% 1. CORE: Agent-Oriented Ontology
  %% -----------------------------------------------------------------------
      class AgentOntologyEntity {
          rdfs:label "Agent Ontology Entity"
          rdfs:comment "Root class for all concepts in the agent-focused ontology."
      }

      class Agent {
          rdfs:label "Agent"
          rdfs:comment "A general actor capable of autonomous or semi-autonomous behavior, including humans and AIs."
          hasSkillProfile SkillProfile
          hasPrivacySetting PrivacySetting
          hasReputationScore ReputationScore
          hasWallet DigitalWallet
          hasInteractionPreference InteractionPreference
      }

      class AIAgent {
          rdfs:label "AI Agent"
          rdfs:comment "An agent driven by AI models, with specialized capabilities for autonomy and decision-making."
          hasAIModel AIModel
          decayFunction xsd:string
      }

      class HumanAgent {
          rdfs:label "Human Agent"
          rdfs:comment "A real human user. May be linked to a WebID for decentralized identity and authentication."
      }

      class AIModel {
          rdfs:label "AI Model"
          rdfs:comment "The underlying neural network or algorithm powering an AI Agent's intelligence."
      }

      class SkillProfile {
          rdfs:label "Skill Profile"
          rdfs:comment "Describes the abilities or competencies an agent (human or AI) can exhibit."
      }

      class PrivacySetting {
          rdfs:label "Privacy Setting"
          rdfs:comment "Rules and preferences regarding data usage, sharing, and retention for an agent."
      }

      class ReputationScore {
          rdfs:label "Reputation Score"
          rdfs:comment "Metric or rating reflecting an agent's trust or standing in a community."
      }

      class DigitalWallet {
          rdfs:label "Digital Wallet"
          rdfs:comment "Holds digital assets, cryptocurrencies, or tokens owned by an agent."
      }

      class InteractionPreference {
          rdfs:label "Interaction Preference"
          rdfs:comment "Specifies how an agent prefers to interact, moderate content, or engage with others."
      }


  %% -----------------------------------------------------------------------
  %% 2. WEBID SUBCATEGORY: Decentralized Identity & Events
  %% -----------------------------------------------------------------------
      class WebIDEntity {
          rdfs:label "WebID Entity"
          rdfs:comment "A conceptual parent for all objects in the WebID ecosystem."
      }

      class Person {
          rdfs:label "Person"
          rdfs:comment "Represents a decentralized identity and profile using WebID."
          webid xsd:anyURI "A unique WebID URI identifying this individual"
          name xsd:string "A handle or short name (distinct from display_name)"
          display_name xsd:string "A more user-facing display name"
          about xsd:string "Short bio/about text"
          picture xsd:anyURI "URI of the user’s profile image"
          banner xsd:anyURI "URI of the user’s banner image"
          website xsd:anyURI "User’s personal website"
      }

      class WebIDEvent {
          rdfs:label "WebID Event"
          rdfs:comment "A generic event referencing a WebID identity, with timestamps, content, and possible signatures."
          authorWebID xsd:anyURI "The WebID of the event author"
          created_at xsd:dateTime "Timestamp of creation"
          content xsd:string "Event content or message"
          signature xsd:string "Digital signature (e.g., for verifiability)"
      }

      class WebIDService {
          rdfs:label "WebID Service"
          rdfs:comment "A decentralized or semi-decentralized service endpoint that stores or routes WebID events."
          serviceURI xsd:anyURI "The endpoint (e.g., HTTPS, WebSocket) providing service functionality"
      }


  %% -----------------------------------------------------------------------
  %% 3. IMMERSIVE REAL-TIME SUBCATEGORY
  %% -----------------------------------------------------------------------
      class ImmersiveRealTimeEntity {
          rdfs:label "Immersive Real-Time Entity"
          rdfs:comment "Base class for objects and concepts within immersive real-time environments (3D spaces, XR, etc.)."
      }

      class ImmersiveScene {
          rdfs:label "Immersive Scene"
          rdfs:comment "A real-time interactive environment or 'scene' supporting multi-agent presence."
          governedBy GovernanceStructure
          hasPolicy ImmersivePolicy
      }

      class GovernanceStructure {
          rdfs:label "Governance Structure"
          rdfs:comment "Rules, roles, and processes governing an immersive scene or community."
      }

      class ImmersivePolicy {
          rdfs:label "Immersive Policy"
          rdfs:comment "Behavioral and content guidelines within a particular immersive real-time environment."
      }

      class SceneObject {
          rdfs:label "Scene Object"
          rdfs:comment "Any interactive or visible object in an immersive real-time scene."
      }

      class DigitalAsset {
          rdfs:label "Digital Asset"
          rdfs:comment "A unique digital good or token that can be owned or traded in immersive or other digital contexts."
          hasOwner Agent
      }

      class VirtualEconomy {
          rdfs:label "Virtual Economy"
          rdfs:comment "A system enabling trade and currency exchange in immersive or other digital environments."
          regulatedBy EconomicPolicy
          hasMarketplace Marketplace
      }

      class Marketplace {
          rdfs:label "Marketplace"
          rdfs:comment "A platform or location to trade digital assets (NFTs, tokens, etc.)."
      }

      class EconomicPolicy {
          rdfs:label "Economic Policy"
          rdfs:comment "Regulations defining currency issuance, exchange rules, and other economic mechanics."
      }


  %% -----------------------------------------------------------------------
  %% 4. RELATIONSHIPS & INHERITANCE
  %% -----------------------------------------------------------------------

      %% A. Ontology Roots & Subcategories
      AgentOntologyEntity <|-- Agent
      AgentOntologyEntity <|-- WebIDEntity
      AgentOntologyEntity <|-- ImmersiveRealTimeEntity

      %% B. Agent Hierarchy
      Agent <|-- AIAgent
      Agent <|-- HumanAgent

      %% C. WebID
      WebIDEntity <|-- Person
      WebIDEntity <|-- WebIDEvent
      WebIDEntity <|-- WebIDService
      HumanAgent -- Person : "may link to/represent"

      %% D. Immersive Real-Time
      ImmersiveRealTimeEntity <|-- ImmersiveScene
      ImmersiveRealTimeEntity <|-- DigitalAsset
      ImmersiveRealTimeEntity <|-- VirtualEconomy
      ImmersiveRealTimeEntity <|-- Marketplace
      ImmersiveRealTimeEntity <|-- GovernanceStructure
      ImmersiveRealTimeEntity <|-- ImmersivePolicy
      ImmersiveRealTimeEntity <|-- SceneObject

      %% E. Detailed Links
      AIAgent "1" *-- "1" AIModel : hasAIModel
      Agent "1" *-- "0..*" SkillProfile : hasSkillProfile
      Agent "1" *-- "0..*" PrivacySetting : hasPrivacySetting
      Agent "1" *-- "0..*" ReputationScore : hasReputationScore
      Agent "1" *-- "0..*" DigitalWallet : hasWallet
      Agent "1" *-- "1" InteractionPreference : hasInteractionPreference

      %% Example of AI Agents creating scene objects (optional)
      AIAgent "1" *-- "*" SceneObject : canCreateVariations

      ImmersiveScene "1" *-- "0..*" GovernanceStructure : governedBy
      ImmersiveScene "1" *-- "0..*" ImmersivePolicy : hasPolicy

      DigitalAsset "1" *-- "1" Agent : hasOwner

      VirtualEconomy "1" *-- "0..*" EconomicPolicy : regulatedBy
      VirtualEconomy "1" *-- "0..*" Marketplace : hasMarketplace

  ```

  - ### Frameworks for Decision-Making
		- [[Agents]] can mitigate psychological friction by automating repetitive micropayment approvals.
		- For example, they might pre-authorise low-value transactions (e.g., API queries or short IoT data bursts) based on user-defined spending thresholds.
		- Such automation proves essential in contexts where multiple micro-billings—like generative AI queries at $0.001 each—could overwhelm users if prompted for every purchase.

  - ### Trust and Transparency Mechanisms
		- Balancing autonomous decisions with user control is critical.
		- Implementations like [[MIT’s lit on Lightning]] use programmable escrow accounts that only release funds once conditions (e.g., correct AI output) are met.
		- Yet, overly opaque AI systems risk alienating users; real-time spending dashboards and per-service monthly caps help maintain trust.

  - ### Algorithmic Bias
		- AI-managed budgeting risks reinforcing socioeconomic inequalities if models disproportionately restrict certain users.
		- Mitigation includes fairness audits and user-adjustable parameters.

		- ### Real-time Collaboration
			- Multi-user editing: Multiple users can simultaneously work on the same USD scene or asset, with changes being synchronized in real-time
			- Presence and awareness: Users can see the presence and activities of other collaborators working on the same project
			- Conflict resolution: Nucleus Server automatically handles conflicts that may arise from simultaneous edits by multiple users

  - # Notes and Other Stuff by Relays
  - Nostr [pronounced no-star] is a decentralized open protocol that aims to improve the social media experience by addressing issues of censorship and data collection. The protocol operates by allowing users to post and view notes on servers called relays, and view and post these notes through apps called clients. The open nature of the protocol allows for competition and a free flow of information, as users can choose to use different relays or clients if they are censored. This is because the protocol is decentralized and controlled by no one.
  - The decentralized nature of Nostr means that there is no central authority that can control the flow of information. This is achieved through the use of relays and clients, which are run by different individuals or entities. Users have the freedom to choose which relays and clients they want to use, and as a result, their feeds are populated with content from the people they choose to follow. If a relay or client tries to censor a user, they can simply switch to a different one. This is a major advantage over traditional centralized social media platforms where one entity holds all the control over the flow of information and can censor or manipulate the content that users see.
  - Nostr is also not beholden to shareholders or investors. This means that the protocol can make decisions that prioritize the well-being and quality of discourse for users, rather than solely focusing on profit. This is in contrast to traditional social media networks like Twitter, Facebook, and TikTok, which are driven by the need to collect data on users and sell ads to generate revenue. In these centralized platforms, users’ data is collected, analyzed and sold to the highest bidder, often without the user’s knowledge or consent. Nostr, on the other hand, allows users to have more control over their data and the ability to monetize their content.
  - Nostr also tightly integrates Bitcoin Lightning to support the protocol. This will hopefully enable secure transmission of value alongside the information and interactions on the platform. It also gives users the ability to monetise their content.
  - This potential step-change improvement to the social media experience for everyday people addresses issues of censorship and data collection.
  - Nostr is “The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.” according to it’s github page. More than that it’s a client side validated proof of who a user is interacting with, hence being in this identity section. To be clear, it’s not a completely peer to peer system in that it uses (very dumb) relay servers, but this gives it some of the best characteristics of both paradigms. This has the following advantages for our metaverse application;
		- It’s lightweight, with minimal network overhead and complexity
		- It’s real-time using websockets
		- Anyone can run a relay server, so one can be run in the deployment in the final section of the book.
		- Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
		- It is itself Turing Complete and therefore able to execute any code within it’s message protocol
		- There are multiple usable libraries and tools
		- It’s under active development with a diverse and experienced community
		- It’s based on the same underlying cryptographic technology we are using elsewhere, indeed with it’s use of Taproot keys the identity system is global
		- It provides the identity proof that we need to validate users and objects into a virtual space
		- It enables message passing
		- It scales to be a social network as required
		- It need not rely on anything outside of a relay hosted on the metaverse server
		- It can be scaled to provide one to many bulletin board style applications within the metaverse
		- We can use it in private, group, and public modes as required
		- It integrates with the torrent network allowing storage and external referencing of arbitrary data
		- It can easily operate outside of the walled garden of the metaverse, extending the reach of the messages
  - Nostr is incredibly promising, and integrating these relays in the metaverse servers and clients of the proposed technology stack in this book might allow us globally provable identity, with privacy by design. It can provide message passing. If all entities in the collaborative mixed reality scenegraphs are also Nostr key pairs then schema can be applied consistently with the economic layer using the same key system as Bitcoin. Nostr has just received a substantial grant from Dorsey. It is core to the design later in the book. A curated list of projects and libraries is available on github.
  - Luke Childs says:
		- “Nostr makes a good candidate to be used as a very simple DID layer. Having "Login with Nostr" auth on websites solves a lot of problems in a very elegant way, and Nostr’s main use case as a social network protocol makes it highly suited to be used as your main identity proving key. Compare "Login with Nostr" to similar "Login with Lightning" (LNURL-auth) specs to see some easy and obvious advantages:
		  Remote signer vs local signer
		  Login with Lightning requires access to remote keys, login with Nostr requires access to local keys ideally stored in a browser extension. Due to the way Lightning works you can only really have one instance. You need all your client devices linked to a single Lightning node, this means most clients will be connecting to the signer remotely. Now if your Lightning node goes down or you lose your connection you also can’t auth with any service. This could cause circular dependencies where you lose the connection to your Lightning node so you can’t auth with the services you need to access to debug the issue with your Lightning node like your hosting provider or VPN account. You could technically solve this by replicating your LN keys to other client devices only to be used for local auth signing but that introduces other risks.
		  Unique identifier vs identity
		  A Lightning node is not really an identity but a unique identifier. It just tells you the person that auths is the same random person that authed last time, it doesn’t tell you who they are. A nostr pubkey is an identity. It tells you who they are, what their name is, what they look like, who they know, how you can pay them, how you can message them.
		  This is much more useful as an identity layer for an application. The application can show their profile picture, username, send secure cross platform push notifications via NIP-04 encrypted Nostr DMs, etc.
		  Consistent identity across services
		  Lightning pubkeys are sensitive private information and can leak confidential financial information, Nostr pubkeys are safe to share with anyone. LNURL-auth adds extra steps to solve this by creating derived subkeys for identities that are unique to each service you auth with. This does not seem ideal, it seems the default case is that an identity is something that you do want to follow you across all your accounts. Nostr based auth behaves more appropriate in this regard. In the rare case you need to achieve privacy and separation between certain services you can still do that by using use a throwaway Nostr key for those services.
		  User relationships across services Since authing with Nostr shares a real social identity with the service, they can also see your Nostr social graph. This could be useful for connecting you to people you already know on the new service.
		  Low cost identity
		  Ideally identities should be easy to create but hard to build up reputation to limit spam while avoiding excluding people from the network. It’s not clear that it will be cost effective / scalable for everyone to run their own Lightning node so tying individual identity to a single Lightning node pubkey is problematic. Nostr keys are easy to create and hard reputation can be earned via PoW/DNS or building a strong social graph.”

  - ## nostr, bluesky, twitter
		- [An Interview With Jack Dorsey (creator of Twitter)](https://www.piratewires.com/p/interview-with-jack-dorsey-mike-solana)
			- Dorsey left Bluesky, a project aimed at creating an open-source protocol layer for social media platforms, because it deviated from its original decentralized vision and started repeating the same mistakes as Twitter.
			- Dorsey believes Twitter's core problem was choosing an advertising-based business model, which made the platform vulnerable to pressure from advertisers and governments, leading to censorship.
			- Taking Twitter private was the only way to implement the changes needed to make it a true internet company with a focus on protocol, service, and business.
			- Dorsey argues that social media companies cannot remain censorship-resistant without moving to open protocols, as centralized platforms will always be vulnerable to pressure from advertisers and governments.
			- He believes that truly decentralized protocols like Nostr, which have no central point of control, are the future of free speech on the internet.
			- **Open Source Development Philosophy**: The foundational principles of early internet development were rooted in open-source philosophy, where transparency of code and open APIs facilitated widespread innovation. This approach, akin to a "bazaar" rather than a "cathedral," advocates for a decentralised system to operate alongside existing centralised models. This ensures resilience and the availability of alternatives when centralised systems encounter failures.
			- **Censorship Resistance and Bitcoin**: Censorship resistance is a critical aspect, particularly within the context of Bitcoin and open platforms like Nostr. Despite the widespread discussion on this topic, there is an observed gap between rhetoric and daily usage. The infrastructure must be robust and prepared to support billions of users when the demand for censorship-resistant platforms increases.
			- **Nostr vs. Twitter (X)**: Nostr is positioned as a superior platform to Twitter (now X) due to its open and permissionless nature. The focus shifts from merely counting user numbers to assessing the quantity and quality of information on the platform. The role of algorithms in organising this vast information corpus is recognised as a critical factor in enhancing user experience and platform utility.
			- **Bots and Automated Systems**: Automated systems, including bots, are expected to play a significant role in the future digital landscape. Nostr's open architecture makes it an ideal environment for developing transparent, user-controlled bots, where users retain agency over their deployment and interaction.
			- **Twitter's Transformation and Blue Sky**: The evolution of Twitter, especially under new ownership, reflects the challenges of maintaining a platform as a public company dependent on an advertising model. An earlier initiative, Blue Sky, aimed to create a protocol-based network but ultimately diverged from the optimal direction that Nostr represents today.
			- **Identity Verification and Privacy**: The practice of mass identity verification on platforms like X is criticised for its potential to be exploited by governments to suppress free speech. Although users currently prioritise convenience over privacy, the risks associated with extensive identity verification are significant, particularly in repressive environments.
			- **Security Concerns on Nostr**: While Nostr offers substantial privacy benefits, it faces security challenges, such as the leakage of IP addresses. Addressing these vulnerabilities is crucial to safeguarding activists and other high-risk users, ensuring that Nostr can serve as a secure platform for all.
			- **Public vs. Private Markets for Companies**: The brief considers whether companies should enter public markets, noting that public status imposes challenging incentives that can lead to short-term decision-making at the expense of long-term viability. Staying private may allow companies to maintain focus on core principles and sustainable growth.
			- **Open Protocols vs. Closed Platforms**: There is a strong preference for open protocols over closed platforms. Open protocols like Bitcoin level the playing field for all participants, allowing companies to build successful business models without the constraints imposed by closed, centralised systems.
			- **Nostr's Unique Position**: Nostr is positioned as the most resilient, durable, and stable platform for public conversation. Its decentralised nature ensures that no single entity can remove content, making it a robust alternative to current social media platforms. The platform's openness provides an enduring space for information sharing, immune to external censorship.
			- **Onboarding and User Retention Challenges**: A smooth onboarding experience is crucial for the widespread adoption of Nostr. While the current applications have not fully perfected this process, the diversity within the Nostr ecosystem offers multiple entry points that can attract and retain users. Each app contributes to the overall network, reinforcing the value of the ecosystem as a whole.
			- **Community and Development**: The dedication of the open-source community is pivotal to the development and promotion of technologies like Nostr. The ongoing collaboration and sacrifice by developers and users alike are essential to the success of these decentralised tools. The continued growth and improvement of Nostr and similar platforms depend on the sustained efforts and support of this community.
			- {{video https://www.youtube.com/watch?v=qUwXRDrfJU0}}

  - ### Digital Objects and Decentralised Governance on Nostr
		- Nostr's design centres around the concept of digital objects – encompassing social media posts, maps, and other data structures – owned and controlled by users. These objects are governed not by a central authority but are distributed across the network, ensuring user autonomy and resilience. Nostr maintains the integrity of interactions without central oversight, enabling permissionless and self-sovereign participation. This model ensures that digital objects remain uncapturable and resistant to external coercion. In extreme cases, this decentralised governance is further reinforced by the Bitcoin ledger, providing an immutable record and a final layer of defence against any attempts to undermine the system's integrity.

		- ### Challenges and Future Considerations:
			- **Client adoption:** The success of the new DM spec hinges on its implementation across various Nostr clients. Developers need to integrate the necessary cryptographic functions and session management logic.
			- **Device syncing:** Syncing conversations across multiple devices and clients poses a significant challenge due to the lack of a central server. Potential solutions involve broadcasting messages to multiple sessions and managing separate inboxes for each session.
			- **User experience:** The complexity of the double ratchet system and the potential for out-of-order messages may require careful design considerations to ensure a seamless user experience.

  - #### Margaret Hagan’s Work on Access to Law through AI
		- **Executive Director of the Legal Design Lab**
			- Focuses on making legal services more user-friendly and engaging through design.
			- Launched the Program for Legal Tech & Design at Stanford’s d.school.
		- **Teaching and Workshops**
			- Teaches project-based classes at Stanford Law School.
			- Leads workshops on the design process for legal professionals.
		- **Research and Publications**
			- Explores how AI can improve access to legal help.
			- Advocates for human-centered design in legal tech.

  - #### Ensuring Safeguarding and Privacy Compliance
		- Protecting user privacy and ensuring safeguarding is vital for any
		  digital society platform. The open-source system must be developed in
		  compliance with legislative and cultural norms while maintaining the
		  balance between user privacy and the need for identity verification and
		  data management. The evidence that social media is damaging youth mental
		  health is very compelling.[@haidt2023social] The Centre for Humane
		  Technology call social media the ‘[first contact
		  point](https://www.youtube.com/watch?v=xoVJKj8lcNQ) with AI’. They
		  explains that new technologies often create an arms race. They list the
		  negative impacts of this contact as including “information overload,
		  addiction, doom scrolling, sexualization of kids, shortened attention
		  spans, polarization, fake news, and breakdown of democracy”. These were
		  not the intended consequence of engineers who aimed to maximize
		  engagement. The underlying arms race for attention led to what they call
		  ‘an engagement monster’ that rewrote the rules of society.
		- These lessons should be learnt and the problems should be pro-actively
		  mitigated. This proposal is bfnot a social metaverse, and deliberately
		  limits both numbers of participants and avatar optionality.

  - #### Managing Scalability, Performance, and Latency
		- As the Metaverse continues to grow, it is crucial to ensure that the
		  open-source system can scale effectively and maintain optimal
		  performance. By using distributed and federated networks, the system can
		  better manage latency and performance issues, ensuring a seamless user
		  experience.

  - #### AI and Generative ML Technologies
		- As AI and generative ML technologies continue to evolve, their
		  integration into the Metaverse will further enhance user experiences and
		  create new opportunities for innovation. The release of models like
		  GPT-4 have already prompted debate about general
		  AI[@bubeck2023sparks; @perez2022discovering] (Figure
		  <a href="#fig:rlhf" data-reference-type="ref" data-reference="fig:rlhf">[fig:rlhf]</a>).
		  It seems unavoidable that this will all impact on the Metaverse and
		  digital society.

		  ![image](assets/552f8c9bfcf9305e87b1413ea51637d986ac28dd.png)

  - # NVIDIA Omniverse design
  - **Phase 1: Foundational Infrastructure**
  - **Bitcoin Base Layer (NixOS):**
		- Set up a secure and reliable Bitcoin full node on NixOS.
		- Implement robust backup and recovery procedures.
		- Consider running a Lightning Network node for faster and cheaper transactions.
  - **Identity and Value Management:**
		- Integrate Nostr protocol for decentralized identity and messaging.
		- Develop or utilize existing libraries for Nostr event creation, signing, and relaying.
		- Implement BIP85 hierarchical deterministic wallets for secure key management.
  - **Digital Assets (RGB):**
		- Choose or design appropriate RGB schemas for the types of digital assets you want to support.
		- Develop or utilize tools for issuing and managing RGB assets.
		- Integrate RGB wallets with the overall wallet management system.

		  **Phase 2: Interaction Module (Omniverse):**
  - **Omniverse Environment Setup:**
		- Deploy an Omniverse Nucleus server to manage collaborative scenes and 3D assets.
		- Design and create the initial 3D environment(s) using USD (Universal Scene Description).
		- Consider incorporating elements from your existing visualizations and research.
  - **Agent Integration:**
		- Develop avatar systems for both human and AI agents within Omniverse.
		- Implement controls and interactions for agents within the 3D environment.
		- Explore the use of Omniverse Kit SDK for advanced features and customizations.
  - **Digital Asset Integration:**
		- Develop methods to represent and interact with RGB digital assets within Omniverse scenes.
		- Implement ownership and transfer functionalities based on the underlying Bitcoin/RGB infrastructure.
		- Explore visual representations of ownership and asset metadata within the 3D environment.

		  **Phase 3: AI and Governance:**
  - **AI Agent Development:**
		- Choose or design AI models for different agent archetypes (e.g., governance agents, task agents, social agents).
		- Implement the D&D-inspired personality system and the wealth decay function.
		- Develop AI behaviors and decision-making processes aligned with the scene schema.
  - **Scene Schema and Governance:**
		- Define the rules and constraints for different scene types within a flexible schema framework.
		- Implement the SupraAgent (governance LLM) with its monitoring and evidence collection capabilities.
		- Develop mechanisms for encrypted evidence payloads and communication with relevant parties.
  - **GenAI Integration:**
		- Explore the use of generative AI models (e.g., ChatGPT, Stable Diffusion) for content creation, world-building, and immersive storytelling.
		- Develop interfaces for users and AI agents to interact with GenAI tools within the metaverse.

		  **Phase 4: User Interface and Experience:**
  - **Nostr-based Chat Interface:**
		- Develop a chat interface using Nostr as the communication protocol.
		- Integrate the chat interface within the Omniverse environment.
		- Enable secure and private communication between agents.
  - **Wallet Integration:**
		- Provide users with access to their digital wallets within the metaverse.
		- Enable users to manage their assets, view transaction history, and interact with the virtual economy.
  - **Accessibility and Multimodality:**
		- Explore ways to make the metaverse experience accessible to users with disabilities.
		- Support multiple interaction modalities (e.g., VR, AR, desktop, mobile).

		  **Additional Considerations:**
  - **Security:** Implement robust security measures at all levels, including encryption, access control, and regular security audits.
  - **Privacy:** Ensure user privacy by minimizing data collection and providing transparent privacy settings.
  - **Scalability:** Design the system to be scalable to accommodate a growing number of users and increasing complexity.
  - **Community Building:** Foster a strong community around your metaverse project through open communication, collaboration, and user engagement initiatives.

		- ## Model List
			- ```text
			  Models returned from the OpenWebUI API should be listed here, one model name per line.
			  ```
  - **Select Agent Models**: The user can copy and paste model names into the agent slots here.

  - # My Expectations of Assistant
	  Defer to the user's wishes if they override these expectations:

  - ### Adobe
		- Developed by Adobe, Firefly claims ethical training practices.
			- **Cost**: "Generative cred* system starting from $4.99/month for 100 credits.
			- **User Interface**: Clean, simple web interface, now integrated fully into Photoshop for free.
			- **Strengths**: User-friendly, good for everyday photorealistic images, legal protection.
			- {{video https://www.youtube.com/watch?v=VNs1lW8t4hw}}

  - ### DALL·E 3
		- From [[OpenAI]] , integrated with ChatGPT pro, [integrated with Bing](https://www.bing.com/images/create), built into Swiftkey [[android]] keyboard.
			- ![image.png](assets/image_1704230683869_0.png){:height 700, :width 300}
			- **Cost**: Free on Microsoft’s Bing Image Creator; some free credits. $20 pcm for ChatGPT.
			- **User Interface**: Simple, via Bing Image Creator. Can iteratively build though ChatGPT interface.
			- **Strengths**: Easy to use, understands complex prompts, versatile in image types.
			- **Weaknesses**: Aesthetic quality subjectively different to MidJourney, censorship issues, limited free credits.
			- **Skill Level**: Beginner-friendly.
			- **Some ChatGPT images:** this prompting complexity is extremely hard elsewhere.
			  ChatGPT Dall-E is iterative; Tell it to *keep the same seed"
			- .#.v-gallery-col3
				- ![433f2bd0-ae29-4661-b542-c28fa54c09ff_1702324038829_0.webp](assets/433f2bd0-ae29-4661-b542-c28fa54c09ff_1702324038829_0_1705315472745_0.webp)
				- ![spider.png](assets/spider_1705315548949_0.png)
				- ![slices.png](assets/slices_1705349018973_0.png)
			- ![image.png](assets/image_1704791221902_0.png){:width 600}

  - ### 7.  **OAuth and OpenID Connect (OIDC)**
  - **Overview**: While not decentralized, OAuth and OIDC are standards for authorization and identity verification across the web. They are widely used in web applications to allow users to log in with existing credentials from services like Google, Facebook, and Twitter.
  - **Use Cases**: OAuth and OIDC are used for secure authorization and identity verification across countless web services, providing a smoother user experience while managing access permissions.

  - ## Explicitly develop under a "for profit" model.
		- The primary use case emerging for all this incredibly expensive technology (exempting the AGI narrative) is targeted advertising, pairing very specific user data with very specific products. The platform providers are explicitly interested in [[Hyper personalisation]] of [[AI Video]]
		- In the case of Microsoft, Meta's Llama "open" models and Google's capable "free to use" models this means a *scorched earth* policy where they push AI into all of their apps and ecosystems, ensuring continuity of the user eyeballs that allow them profit. For a while it looked like OpenAI were going to capture so many users that downstream search products built on their system, like Perplexity, would challenge the primacy of the incumbent centralised web providers.
		- This also increasingly means automation, and robotics efficiency; profit though reduction of human workforce which is tax incentivised in the USA.
		- At the very least all of these companies are predicted on an advertising business model, and if the soft power of GenAI is used for advertising then it could be pretty dystopian.
		- All the current law pertaining to this is voluntary, to be clear, business isn't going to stop pursuing this plan because they (not China) signed a form.
		- Post Cambridge Analytica abuse of Social Media there has been NO binding legislation in the half decade after.
		- Governments are far too slow to respond. This will most likely be engaged with through bottom up labour movements like the screen writers guild strike.
		- [Bill Gurley on X: "What’s really happening in the background around AI regulation. https://t.co/2xrdqvdpkE" / X (twitter.com)](https://twitter.com/bgurley/status/1786073617316360670)
			- ![GMlofTGaYAMjN0v.jpeg](assets/GMlofTGaYAMjN0v_1714807755332_0.jpeg){:height 907, :width 1097}

  - ## Technological Advancements and Applications
		- AI hardware advancements leading to more energy-efficient and powerful processing capabilities.
		  background-color:: green
		- The beginning of AI [[Agents]]
			- intentional UX.
			- Having your personal agent, or it's agents, do the online work for you,
			- Bringing back distilled updates to a locally or securely hosted core agent.
			- This will have staggering repercussions for the web as we know it.
			- This is the old [[Death of the Internet]] conspiracy theory, but happening.
		- Semantic and natural language programming
			- In a future where intentional programming user experience (UX) evolves to its next stage, we could envision a scenario where multimodal and language models interface directly with bytecode, driven by semantic instructions from product owners. This approach would represent a significant leap from current programming paradigms, emphasizing a more intuitive, less syntax-heavy interaction with software development.
			- **1. Semantic Instruction and Bytecode Manipulation:**
				- In this future, product owners or non-technical stakeholders could provide instructions in natural language or through other intuitive interfaces.
				- These instructions would be semantically analyzed by advanced language models, capable of understanding the intent and context of the request.
				- The language models would then translate these semantic instructions into bytecode – the lowest-level code executed by the computer's processor.
				- This process bypasses traditional programming languages, allowing for more direct and efficient creation or modification of software functionalities.
			- **2. Multimodal Interfaces:**
				- Multimodal interfaces, incorporating voice, text, and possibly visual or gestural inputs, would make the process more accessible and intuitive.
				- These interfaces would cater to a diverse range of users and preferences, allowing instructions to be given in various formats.
			- **3. Enhanced Collaboration and Iteration:**
				- By enabling product owners to directly communicate their requirements to the software, the gap between idea conception and implementation narrows significantly.
				- This direct communication loop would facilitate rapid iterations, as changes can be implemented and reviewed in real-time or near-real-time.
			- **4. Automated Testing and Validation:**
				- The system would incorporate sophisticated automated testing mechanisms.
				- As soon as the bytecode is generated or modified, a series of automated tests could run to validate the functionality, ensuring that the changes meet the specified requirements and do not introduce bugs or vulnerabilities.
				- Product owners could also perform their own tests on the resultant functionality, using user-friendly testing tools integrated into this system.

  - ## User Friendly Interfaces
		- Platforms like [Leonardo.AI](https://leonardo.ai/), [RunDiffusion](https://rundiffusion.com/) and [Automatic1111's WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) provide intuitive and user friendly interfaces for interacting with Stable Diffusion.

  - ### [CSM AI](https://3d.csm.ai/) - *   The website provides tools for creating 3D models from 2D images using [[artificial intelligence]].
  -   Users can generate 3D assets for various applications, including game development, e-commerce, and augmented reality.
  -   The platform offers a user-friendly [[user experience]] and streamlined workflow for converting images into 3D models.
  -   It supports various image formats and provides options for customising the 3D model's appearance and texture.
  -   Users can download the resulting 3D models in standard file formats for use in other software packages.
  -   The website offers different pricing plans depending on the level of usage and features required.
  -   It aims to simplify the 3D modelling process, making it accessible to users without specialist 3D design skills.
  -   Colour and texture options are available to enhance the realism of the generated 3D models.
  -   The service focuses on automated 3D asset creation, reducing the time and cost associated with traditional methods.
  -   The website can be used to organise and manage a library of generated 3D models.
		- <iframe src="https://3d.csm.ai/" style="width: 100%; height: 600px"></iframe>

  - ### Open Source
		- **[stabilityai/stable-zero123](https://huggingface.co/stabilityai/stable-zero123)** - - Stable Zero123 is a model developed by Stability AI that estimates the novel view of an object from a single-view image, focusing on zero-shot generalisation to arbitrary objects.

  - The model can generate multiple views of an object from different angles, allowing for a more complete 3D understanding from a single 2D image.

  - Stable Zero123 uses a diffusion model architecture to generate the novel views, resulting in detailed and realistic outputs.

  - This model is useful for various applications including 3D asset creation, virtual reality/augmented reality experiences and e-commerce where users can view products from all angles.

  - The model is readily available for use through the Hugging Face Transformers library, allowing developers to easily integrate it into their workflows.

  - Developers can fine-tune the model on specific datasets to improve performance on particular object categories or to tailor the output to a specific aesthetic.

  - The model is provided with an associated research paper that gives more details on the methodology, architecture and training process.

  - Users should be aware of the potential [[bias]] inherent in the training data and should use the model responsibly, considering ethical implications.
		- **[SUDO-AI-3D/zero123plus](https://github.com/SUDO-AI-3D/zero123plus)** - - Zero123plus is a project extending the Zero123 single-view 3D reconstruction model.
  - It aims to generate multi-view consistent images and 3D models from a single input image.
  - The project uses improved training techniques and architectures for enhanced [[performance]].
  - The codebase is organised with clear modules for model components, data loading, and training procedures.
  - Pre-trained models and instructions for inference are provided.
  - The project encourages users to experiment with various prompts and parameters to achieve desired outputs.
  - It includes tools for evaluating the quality of the generated images and 3D models.
  - Contributions to the project are welcomed, following the outlined contribution guidelines.
  - The project uses a specific licence, which users should review before using or distributing the code.
  - Users can find instructions on how to set up the environment and install the necessary dependencies.
  - The colour palettes for visualising outputs are customisable.
		- **[flowtyone/ComfyUI-Flowty-TripoSR](https://github.com/flowtyone/ComfyUI-Flowty-TripoSR/tree/master)** - - This repository provides a custom node for ComfyUI that integrates the TripoSR model, allowing users to reconstruct 3D objects from single-view images directly within ComfyUI.
  - The node accepts an image as input and, using TripoSR, generates a 3D mesh representation of the object depicted in the image, leveraging [[artificial intelligence]] techniques.
  - Users can control parameters such as resolution and detail level to influence the quality and processing time of the 3D reconstruction.
  - The repository contains example workflows and instructions for installing and configuring the custom node within ComfyUI.
  - The integration enables users to incorporate 3D object generation into their ComfyUI workflows, potentially for tasks such as object manipulation, virtual environment creation, or 3D asset design.
  - A key feature is the ability to visualise the generated 3D model directly within ComfyUI, offering immediate feedback on the reconstruction quality and supporting [[user experience]] optimisation.
  - The node simplifies the process of using TripoSR by handling the necessary model loading and inference steps, reducing the technical complexity for ComfyUI users through effective [[documentation]].
  - Updates and improvements to the node are regularly made, addressing bugs and optimising [[performance]], and users can contribute with feedback or code contributions.
  - The provided documentation explains how to obtain the required model weights and organise them correctly for the node to function.
  - Support for additional features and customisation options may be added in future updates, enhancing the node's functionality and user experience.
		- **[layerdiffusion/LayerDiffuse](https://github.com/layerdiffusion/LayerDiffuse)** - LayerDiffuse offers a layered diffusion approach for image editing, allowing users to manipulate specific parts of an image rather than the whole thing at once.
  - The method involves decomposing an image into several layers and independently diffusing each layer according to user instructions or prompts.
  - It allows for fine-grained control over image manipulation, such as changing the colour or style of specific objects or regions.
  - The repository provides code, models, and instructions to implement and experiment with LayerDiffuse.
  - The project is designed to organise and improve the editability of images, facilitating more precise and controllable image synthesis workflows.
  - The project uses [[deep learning]] diffusion models as a base, extending their capabilities to provide layered control for improved editing workflows.
  - Users can download pre-trained models and fine-tune them for specific tasks.
  - The provided code and documentation enables [[research]] and developers to further explore and advance the field of layered image manipulation.
  - It introduces a novel approach to image editing by enabling independent diffusion of individual layers based on user prompts.

  - ### **3D Highlighter**
		- [3D Highlighter Website](https://threedle.github.io/3DHighlighter/) - 3DHighlighter is a JavaScript library for highlighting elements on a 3D model displayed in a web browser.
  - It allows developers to easily integrate interactive highlighting functionality into their 3D web applications.
  - The library provides various highlighting styles, including colour changes, outlines, and transparency effects.
  - Developers can organise and customise the highlighting behaviour based on user interactions or application logic.
  - The library offers simple APIs for managing highlighted elements and controlling the visual appearance of the highlights.
  - It supports different 3D model formats and is compatible with popular 3D rendering engines.
  - 3DHighlighter aims to improve [[user experience]] by providing clear visual feedback when interacting with 3D models.
  - It simplifies the process of selecting and identifying specific components or areas within complex 3D scenes.

  - ### **DreamCraft3D**
		- [DreamCraft3D](https://mrtornado24.github.io/DreamCraft3D/) - DreamCraft3D is a voxel-based game engine and editor aimed at easy use and accessibility.
  - The engine focuses on providing a friendly interface for creating and modifying 3D voxel worlds.
  - Users can create and edit landscapes and structures using intuitive tools within the editor.
  - The software allows for the importation of custom models and textures to enhance the visual appearance of creations.
  - It is designed to be lightweight and perform well on a range of hardware.
  - DreamCraft3D supports scripting, enabling the creation of interactive game elements and behaviours.
  - The engine includes features for controlling character movement and camera perspectives.
  - There is an emphasis on [[community]] and sharing, enabling users to export and share their creations with others.
  - The project is actively developed with ongoing updates and feature enhancements, representing continuous [[innovation]] in [[software engineering]].
  - The application is available to download for free.

  - ### Agents and Copilot
		- **[Copilot Actions](https://www.softwareone.com/en/blog/articles/2024/05/22/microsoft-build-2024-ai-agents-and-the-open-agentic-web)**: Allows users to automate routine tasks with simple prompts.
		- **[Azure AI Foundry Agent Service](https://www.microsoft.com/en-us/research/blog/the-open-agentic-web/)**: Provides tools for orchestrating multiple specialized agents.
		- **[Microsoft 365 Copilot](https://www.directionsonmicrosoft.com/blog/2024/05/22/microsoft-365-copilot-becoming-showcase-agents)**: The Copilot app is being revamped to become a showcase for agents, with a new image generator and deeper integration with Microsoft Search.

  - ### Web scraper project for OpenWebUI
		- This diagram shows the sequence of events for a web scraper pipeline that uses OpenWebUI, Playwright, and RedditClient to extract and summarize content from web pages.
		- ```mermaid
		  sequenceDiagram
		      participant User
		      participant Pipeline
		      participant OpenWebUI
		      participant AsyncOpenAI
		      participant Playwright
		      participant RedditClient
		      participant WebPage

		      User->>Pipeline: Send user_message
		      Pipeline->>OpenWebUI: Get OPENAI_API_KEY, TOPICS, etc.
		      Pipeline->>AsyncOpenAI: Initialize with API key
		      Pipeline->>Playwright: setup_playwright()
		      Playwright->>Pipeline: Playwright setup complete
		      Pipeline->>RedditClient: Initialize with credentials

		      Pipeline->>Pipeline: extract_blocks(user_message)
		      loop For each block
		          Pipeline->>Pipeline: should_process_block(block)
		          alt Block should be processed
		              Pipeline->>Pipeline: extract_url_from_block(block)
		              alt URL is a Reddit URL
		                  Pipeline->>RedditClient: is_reddit_url(url)
		                  RedditClient->>Pipeline: True
		                  Pipeline->>RedditClient: get_reddit_content(url)
		                  RedditClient->>Pipeline: Return Reddit content
		              else URL is not a Reddit URL
		                  Pipeline->>Playwright: scrape_url(url, random_user_agent)
		                  Playwright->>WebPage: Fetch and filter content
		                  WebPage->>Playwright: Return filtered content
		                  Playwright->>Pipeline: Return filtered content
		                  alt Scraping successful
		                      Pipeline->>Pipeline: create_prompt(link_text, url, topics, max_tokens)
		                      Pipeline->>AsyncOpenAI: Generate summary
		                      AsyncOpenAI->>Pipeline: Return summary JSON
		                      Pipeline->>Pipeline: Format summary to Logseq style
		                  else Scraping failed
		                      Pipeline->>Pipeline: Return original block
		              end
		          else Block should not be processed
		              Pipeline->>Pipeline: Return original block
		          end
		          Pipeline->>Pipeline: Add processed block to processed_blocks
		      end
		      Pipeline->>User: Return processed text
		  end
		  ```

				- ### Multi User, Desktop and Immersive

  - ## Understanding the Scope of Accessibility
		- Accessibility in digital design encompasses a wide range of user needs, extending beyond traditional visual and auditory impairments to include cognitive, motor, and situational limitations. It is crucial to consider not only permanent disabilities but also temporary and situational impairments that may impact user interaction with digital products. For example, a user carrying shopping bags or holding a child may have limited mobility, affecting their ability to navigate a website or use a mobile app effectively.

			- ### Broader Challenges in Accessibility
				- * **Cognitive and Language Barriers:** Users with cognitive disabilities or non-native speakers may find complex language and instructions in software challenging. Simplified language and clear instructions are critical for enhancing accessibility.
				- * **Edge Case:** A user with dyslexia might benefit from using a font designed to reduce letter confusion, such as Dyslexie or OpenDyslexic. Similarly, real-time text-to-speech options can be invaluable for those with severe reading impairments. AI-powered tools, such as text-to-speech generators, can contribute to accessibility by providing more natural and accurate vocalizations.
				- * **Situational Impairments:** Temporary conditions, such as bright sunlight affecting screen visibility or a noisy environment hindering audio cues, must be considered in accessible design.
				- * **Edge Case:** Imagine a user attempting to interact with a mobile application in bright sunlight. High contrast modes or dark themes become essential for readability. Similarly, a parent with a sleeping child may need one-handed navigation and silent operation. AI can help adapt the interface to these situations, for example, by automatically detecting ambient light conditions and adjusting display settings accordingly.
				- * **Age-Related Impairments:** As the global population ages, designs must account for declining vision, hearing, and motor skills.
				- * **Edge Case:** An elderly user with reduced dexterity and vision may require larger touch targets on touchscreen devices and support for voice commands to interact effectively. AI can help by analysing user behaviour and adjusting the interface to optimize for ease of use, such as automatically increasing font sizes or simplifying navigation based on observed patterns.

		- ### Types of Accessibility Challenges in Immersive Environments

		  1. **Visual Impairments:**
		    * Magnification tools, font enlargement, and colour inversion are crucial for users with visual impairments.
		    * Spatial audio and tactile feedback can serve as alternative modalities to convey visual information.
		    * **Edge Case:** A VR environment where users navigate through auditory cues rather than visual ones could be beneficial for visually impaired users. For instance, using echolocation or 3D audio mapping to provide context in a game or virtual tour. AI could play a role in generating dynamic auditory descriptions of the virtual environment based on the user's movement and interactions.
		  2. **Auditory Impairments:**
		    * Real-time sign language interpretation and closed captioning are critical for deaf or hard-of-hearing users.
		    * Open metadata standards are needed to support these features across platforms.
		    * **Edge Case:** Implementing haptic feedback in VR gloves to simulate sound vibrations or using visual sound indicators, like flashing lights that correspond to loud noises, can enhance the experience for hearing-impaired users. AI can be used to create real-time subtitles based on audio input and even translate sign language into text or audio. [Liopa](https://liopa.ai/) is a company that has developed AI that can decipher speech by analysing lip movements, providing a vital communication tool for patients who have lost their ability to speak.
		  3. **Physical Disabilities:**
		    * VR headsets and controllers must be designed to accommodate users with limited mobility or dexterity.
		    * Alternative input methods, such as eye-tracking or voice commands, can enhance accessibility for these users.
		    * **Edge Case:** Consider users with quadriplegia using a VR system that allows full navigation and interaction via eye-tracking combined with voice commands. The system could even include adaptive AI that learns the user's preferences and adjusts the interface accordingly. AI can be employed to develop intuitive and responsive eye-tracking interfaces, enabling users to interact with VR environments in a more natural and efficient way. Another example is [Project Gameface from Google](https://github.com/google/project-gameface), a hands-free virtual mouse that allows users to control a computer's cursor through head movements and facial gestures.
		  4. **Cognitive Disabilities:**
		    * Immersive environments should offer simplified navigation and clear, consistent instructions to support users with cognitive impairments.
		    * VR and AR applications can be tailored for vocational training or rehabilitation, using accessible interfaces that cater to specific cognitive needs.
		    * **Edge Case:** VR simulations designed for individuals with Autism Spectrum Disorder (ASD) can include adjustable levels of stimuli to prevent sensory overload. An example might be a calming VR environment that gradually introduces more complex social interactions as the user becomes comfortable. AI can help personalise the VR experience by adapting the level of stimulation, complexity of interactions, and pacing based on the individual's needs and preferences.

  - ### Common Accessibility Challenges in Non-Immersive Software
		- 1. **User Interface Design:**
		    * Ensuring that UI elements are perceivable and operable by users with various disabilities is fundamental. This includes considerations like colour contrast, font size, and the availability of keyboard navigation.
		    * **Edge Case:** A mobile banking app might include a high-contrast mode for users with low vision, alongside support for voice-controlled navigation to help users with motor impairments conduct transactions. AI can be integrated to personalize UI elements based on user preferences and needs, such as automatically adjusting font size, colour contrast, and navigation methods.
		  2. **Content Accessibility:**
		    * Text content should be simple and easy to understand, particularly for non-native speakers and users with cognitive disabilities. The use of plain language and intuitive icons can greatly enhance usability.
		    * **Edge Case:** A government website offering vital services could provide text-to-speech functionality, simple language summaries of complex legal documents, and symbols or infographics to assist users with varying levels of literacy. AI can be employed to generate text summaries of complex content, simplify language, and create alternative representations of information, such as visual diagrams or audio descriptions.
		  3. **Interactive Elements:**
		    * Buttons, forms, and other interactive elements must be accessible via multiple input methods, including keyboard, mouse, and voice commands.
		    * **Edge Case:** Consider a social media platform where users can fully engage through voice commands, allowing those with severe physical disabilities to post, comment, and interact without the need for traditional input devices. AI can enhance the accessibility of interactive elements by enabling users to interact with them using natural language, gestures, or other alternative methods.

		- ### Shift-Left Approach
		- The shift-left approach involves addressing accessibility early in the design process rather than treating it as an afterthought. This strategy not only reduces the cost of retrofitting accessibility features but also improves the overall user experience.
		- 1. **Design Phase:**
		    * Use checklists and design systems to ensure accessibility is considered from the outset. This includes setting appropriate colour contrasts, designing for keyboard navigation, and considering alternative input methods.
		    * **Tools and Best Practices:**
		        * **Figma:** Utilize Figma’s built-in accessibility tools to ensure designs meet accessibility standards. Figma allows for the creation of accessible components and provides plugins for checking colour contrast and other accessibility features.
		        * **Web Content Accessibility Guidelines (WCAG):** Adherence to WCAG ensures that digital products meet global accessibility standards, covering a range of disabilities.
		- 2. **Development Phase:**
		    * Developers should be trained to implement accessibility features as part of the coding process. Reusable components that are pre-tested for accessibility can help streamline this integration.
		    * **Tools and Best Practices:**
		        * **ARIA (Accessible Rich Internet Applications):** Implement ARIA roles and properties to enhance accessibility for dynamic content and complex user interfaces.
		        * **Lighthouse Accessibility Audits:** Use Lighthouse or similar tools to perform automated accessibility audits during the development process.
		- 3. **Testing Phase:**
		    * Accessibility testing should be an integral part of quality assurance. Automated tools can help identify common issues, but real-world testing with users who have disabilities is essential for uncovering nuanced accessibility barriers.
		    * **Tools and Best Practices:**
		        * **Screen Readers (e.g., NVDA, JAWS):** Testing with screen readers ensures that visually impaired users can navigate and interact with your product effectively.
		        * **Manual Testing with Assistive Technologies:** Engage users who rely on assistive technologies to test your product, ensuring it meets their needs in real-world scenarios.

		- ### Emerging Trends
		- * **AI and Machine Learning:** AI has the potential to revolutionise accessibility by providing personalised experiences tailored to individual user needs. For example, AI can assist in real-time translation of sign language or generate alternative text descriptions for visual content. Projects like [ChatCaptioner](https://github.com/Vision-CAIR/ChatCaptioner) use a dialogue between two AI models to generate enriched image descriptions, while [Video-LLaMA](https://github.com/DAMO-NLP-SG/Video-LLaMA) empowers large language models to understand both video and audio content. The Visual Geometry Group (VGG) at the University of Oxford has also developed [AutoAD](httpss://www.robots.ox.ac.uk/~vgg/research/autoad/), a system for creating audio descriptions of movies in context.
		- * **Edge Case:** Consider an AI-driven virtual assistant that not only responds to voice commands but also detects when a user might be struggling and proactively offers assistance, such as simplifying a task or adjusting the user interface for better accessibility. AI can be trained to recognise specific user behaviours, such as frustration or difficulty, and adapt the system to provide more accessible options.
		- * **Inclusive Immersive Experiences:** As the Metaverse and other immersive environments continue to develop, there will be increasing demand for accessible experiences that cater to a diverse global audience. This includes creating new interaction patterns that are intuitive for all users, regardless of their abilities.
		- * **Edge Case:** Future immersive environments could use biometric data to dynamically adjust the level of sensory input, reducing stimuli for users prone to sensory overload or enhancing it for those who need more engagement. AI can be used to monitor user physiological responses and adapt the immersive environment to optimize for individual preferences and needs.

			- #### **Key Components**
		- **Agents**: Perform tasks, make decisions, and interact with other entities.
		- **Nostr Relays**: Decentralized event handlers for communication (posts, messages, etc.).
		- **Bitcoin Lightning Network**: Enables fast, low-cost transactions.
		- **Synthetic Stablecoin System**: Manages stablecoin transactions and conversions.
		- **Anthropic Model Context Protocol**: Enhances AI context for tasks and decisions.
		- **Distributed Git Repositories**: Store and manage versioned digital assets.
		- **Solid Pods**: Decentralized, user-controlled data storage.
		- **Identity Management**: Verifies user and agent identities.
		- **API Gateways**: Provide standardized communication between components.
		- **Consensus Mechanisms**: Facilitate agreement among agents for tasks or data states.
		- **Logging System**: Ensures transparency and auditing of agent actions.
		- **Coordinator Agent** (optional): Orchestrates tasks while maintaining decentralization.

		  ---

  - ### 1. The Problem: The Inadequacies of the Current Internet
		- The architecture of the modern web, dominated by centralized service providers, has created inherent vulnerabilities and inefficiencies that stifle innovation and compromise user sovereignty.
		- *   **Surveillance Capitalism:** The prevailing business model relies on harvesting vast amounts of personal data to power targeted advertising, creating a "panopticon of money" where user privacy is secondary to corporate profit.
		  *   **Centralized Points of Failure and Control:** Platform-centric ecosystems are vulnerable to censorship, de-platforming, and systemic outages. These central authorities act as gatekeepers, controlling the flow of information and value.
		  *   **Inefficiency for the Agentic Economy:** The existing financial infrastructure is ill-suited for the high-volume, low-value microtransactions characteristic of an agent-to-agent economy. High fees and slow settlement times make seamless, automated value exchange impractical.
		  *   **Erosion of Trust:** A persistent lack of transparency and a series of high-profile data breaches have led to a fundamental collapse in user trust, forcing a reliance on cumbersome security measures (e.g., 2FA) that degrade the user experience.

  - ## Lean Canvas Business Model:
		- Problem: Existing large-scale telecollaboration solutions suffer from poor adoption, limited accessibility, and trust issues. Meanwhile, emerging markets struggle to participate in the growing digital society due to the lack of inclusive tools and infrastructure, limiting access to global talent and new pools of ideas. There is insufficient provision of global talent pipelines for highly technical workflows.
		- Solution: Develop a secure, accessible, and inclusive platform for specialized telecollaboration spaces that seamlessly integrate advanced AI, ML, highly scalable and proven distributed systems, and open-source principles to create a digital society that caters to diverse industries, users globally, and captures global talent and innovative ideas.
		- Value Proposition: Ultra low cost training spaces, accessible 24/7 through very low end hardware. Interact with highly customizable, task-appropriate, and user-friendly specialized telecollaboration spaces supported by specially trained and optimised supportive large language AI models. Multi-lingual for emerging markets, enabling access to untapped global talent and fostering the exchange of diverse ideas.
		- Customer Segments: Initially Universities, but this will scale to be sector specific, catering to the global training, research, biomedical, and creative industries, with a special focus on empowering users in emerging markets such as Africa and India, and connecting them with worldwide opportunities and resources.
		- Revenue Streams: Tiered subscription plans to accommodate various user needs and budgets, as well as tailored enterprise solutions for large-scale clients. Bespoke consulting and support trending toward software as a service at scale.
		- Key Metrics: Track user growth, engagement, and retention, successful collaborations across industries, the platform's positive impact on users in emerging markets, and the effectiveness of global talent capture and idea exchange.
		- Unfair Advantage: The team's extensive experience in telecollaboration research, AI, ML, and a deep understanding of the complex landscape of emerging technologies, including highly scalable and proven distributed systems, provide a unique edge in creating a game-changing platform for specialized telecollaboration spaces that are secure, trusted, and tailored to diverse user needs while enabling access to global talent and innovative ideas.

  - ### Managing Scalability, Performance, and Latency:
		- As the Metaverse continues to grow, it is crucial to ensure that the open-source system can scale effectively and maintain optimal performance. By using distributed and federated networks, the system can better manage latency and performance issues, ensuring a seamless user experience.

  - ### AI and Generative ML Technologies:
		- As AI and generative ML technologies continue to evolve, their integration into the Metaverse will further enhance user experiences and create new opportunities for innovation. The release of models like GPT-4 have already prompted debate about general AI. It seems unavoidable that this will all impact on the Metaverse and digital society. For example, generative AI can now create entire interactive 3D environments on the fly, allowing for the rapid prototyping and deployment of complex, adaptable virtual scenarios. AI-powered avatars and non-player characters (NPCs) are also becoming more lifelike, capable of nuanced and dynamic interactions.

			- ### User Empowerment
				- Users should have control over their data, identity, and experiences within the metaverse.
				- This involves:
					- Self-sovereign identity solutions
					- Privacy-preserving technologies
					- User-centric governance models

					- ## Onboarding Agents
						- Edge agents assisting users with:

							- #### Living Contract Formation
								- Establishing a dynamic agreement between the user and the Mycelia network.
								- Outlining rights, responsibilities, and terms of engagement.

				- ### Interfaces and Interactions
					- Inter-Instance Communication
						- Scene Agents within each instance communicate with Transfer Agents to exchange information and facilitate cross-instance activities.
					- Value Exchange
						- Virtual economies within each instance connect through Transfer Agents for real-time value translation and asset exchange.
					- User Interaction
						- Users interact with Scene Agents within each instance and with Onboarding Agents at the network edge.
					- External Interface
						- Jurisdictional/Legal Agents provide an interface between the Mycelia network and external legal systems.

				- ## Community Governance
					- AI-driven governance models facilitate user participation in decision-making and policy-setting.

				- ## Safe and Secure Environment
					- Safeguarding measures and law enforcement interaction ensure a secure and protected user experience.

  - # Diagrams as code (mermaid)
  - ```mermaid
  graph TD
      A[Agentic Mycelia]
      A --> B(Interoperability)
      A --> C(User Empowerment)
      A --> D(Adaptable Governance)

      B --> E(Standardized Protocols)
      B --> F(Ontologies)
      B --> G(Translation Mechanisms)

      C --> H(Self-Sovereign Identity)
      C --> I(Privacy-Preserving Technologies)
      C --> J(User-Centric Governance)

      D --> K(AI-Driven Governance Models)
      D --> L(Adapts to Changing Needs)
      D --> M(User Preference Driven)

      N[Metaverse Instances]
      N --> O(Omniverse Digital Twin)
      N --> P(Roblox Event)
      N --> Q(Unreal-based MMORPG)
      N --> R(Global Business Conference)
      N --> S(Feminist Global Advocacy and Support)

      T[Scene Agents]
      T --> U(AI Governance)
      T --> V(Reputation Management)
      T --> W(Environmental Conditions)
      T --> X(Virtual Economy)

      Y[Transfer Agents]
      Y --> Z(Machine-Machine Translation)
      Y --> AA(Value Translation)
      Y --> AB(Digital Object Variations)
      Y --> AC(Safeguarding)
      Y --> AD(Law Enforcement Handshake)
      Y --> AE(PKI Infrastructure)

      AF[Onboarding Agents]
      AF --> AG(Preference Setup)
      AF --> AH(Living Contract Formation)

      AI[Jurisdictional/Legal Agents]
      AI --> AJ(Monitoring Network Activity)
      AI --> AK(Providing Transparency)
      AI --> AL(Enforcing Legal Standards)

      AM[Interfaces and Interactions]
      AM --> AN(Inter-Instance Communication)
      AM --> AO(Value Exchange)
      AM --> AP(User Interaction)
      AM --> AQ(External Interface)

      AR[Implications for Human Users]
      AR --> AS(Seamless Navigation)
      AR --> AT(Enhanced Privacy and Security)
      AR --> AU(Economic Opportunities)
      AR --> AV(Community Governance)
      AR --> AW(Safe and Secure Environment)

      style A fill:#FFD700,stroke:#333,stroke-width:4px
      style N fill:#87CEEB,stroke:#333,stroke-width:2px
      style T fill:#90EE90,stroke:#333,stroke-width:2px
      style Y fill:#FFA07A,stroke:#333,stroke-width:2px
      style AF fill:#ADD8E6,stroke:#333,stroke-width:2px
      style AI fill:#F08080,stroke:#333,stroke-width:2px
      style AM fill:#AFEEEE,stroke:#333,stroke-width:2px
      style AR fill:#20B2AA,stroke:#333,stroke-width:2px


  ```
  - ```mermaid
  sequenceDiagram
      participant User
      participant AIAgent
      participant Nostr
      participant Bitcoin
      participant Lightning
      participant RGB
      participant NosDAV
      participant GitHub
      participant Logseq
      participant SolidLite
      participant LinkedJSON
      participant Omniverse
      participant USD

      User->>+Logseq: Define agent tasks and rewards
      Logseq->>+GitHub: Store agent configurations
      GitHub->>+AIAgent: Trigger agent update
      AIAgent->>+Nostr: Subscribe to relevant events
      Nostr->>+AIAgent: Deliver relevant events
      AIAgent->>+Logseq: Retrieve task configurations
      Logseq->>+AIAgent: Provide task configurations
      AIAgent->>+NosDAV: Retrieve required data
      NosDAV->>+AIAgent: Provide requested data
      AIAgent->>+RGB: Request single-use seal
      RGB->>+AIAgent: Provide single-use seal
      AIAgent->>+Nostr: Perform task and publish results
      Nostr->>+User: Deliver task results
      User->>+Lightning: Send payment for task completion
      Lightning->>+Bitcoin: Settle payment transaction
      Bitcoin->>+AIAgent: Confirm payment receipt
      AIAgent->>+Nostr: Publish payment confirmation
      Nostr->>+User: Deliver payment confirmation
      User->>+SolidLite: Interact with decentralized application
      SolidLite->>+LinkedJSON: Retrieve structured data
      LinkedJSON->>+SolidLite: Provide structured data
      SolidLite->>+Nostr: Publish user actions
      Nostr->>+AIAgent: Deliver user actions
      AIAgent->>+Omniverse: Retrieve virtual environment data
      Omniverse->>+AIAgent: Provide virtual environment data
      AIAgent->>+USD: Manipulate 3D assets
      USD->>+AIAgent: Provide updated 3D assets
      AIAgent->>+Omniverse: Update virtual environment
      Omniverse->>+Nostr: Publish virtual environment updates
      Nostr->>+User: Deliver virtual environment updates
      User->>+Nostr: Publish feedback and interactions
      Nostr->>+AIAgent: Deliver user feedback and interactions
      AIAgent->>+NosDAV: Store interaction data
      NosDAV->>+AIAgent: Confirm data storage
      AIAgent->>+Nostr: Publish interaction confirmation
      Nostr->>+User: Deliver interaction confirmation
  ```

		- ### Key Principles
			- The core insight is that successful AI applications depend more on what information is provided to the model than on how that information is requested. This includes:
				- Relevant data from retrieval systems
				- User preferences and personalisation data
				- Historical conversation context
				- Current date, time, and environmental information
				- Tool definitions and available functions

  - # User Trust and Acceptance
  - Overcoming perceptions associated with software that controls devices

  - # Partnership with OpenAI, and Siri
  - Apple is focusing on "AI for the rest of us" - making AI capabilities accessible and useful for everyday tasks rather than flashy frontier use cases. The emphasis is on small but significant time-saving wins.
  - Siri is the centerpiece, with expanded natural language understanding, ability to maintain context, and both voice and text input. Siri can now take actions across Apple and third-party apps.
  - Apple has partnered with OpenAI to integrate ChatGPT into Siri and other Apple experiences later this year. Siri can tap into ChatGPT when needed to expand its capabilities.
  - Apple argues that great product experience matters more than just having state-of-the-art AI models. They are willing to reduce user choice to create a simpler experience, as seen with the limited options in their Image Playground feature.
  - Apple is trying to balance leveraging personal context and data with strong privacy protections through on-device processing and a new "private cloud compute" capability.
  - Apple is taking an approach of deeply integrating AI assistants and capabilities across the OS in a frictionless way to help users with everyday tasks, while maintaining their emphasis on privacy and a carefully designed user experience over flashy demos. The partnership with OpenAI expands what's possible while keeping the Apple experience at the forefront.

  - ### Conclusion
  - Bitcoin is portrayed as a groundbreaking technology with multiple advantages, particularly in offering financial independence, resisting censorship, and ensuring user control over transactions.
  - [Link to the article](https://www.bitcoin.com/get-started/the-benefits-of-bitcoin/)


	  https://bitcoinmagazine.com/culture/bitcoin-blockchain-is-fighting-fraud-in-guatemalas-presidential-elections


	  https://thenextweb.com/news/el-salvador-first-adopt-bitcoin-real-money-good-news-unbanked-syndication



	  https://thenextweb.com/news/el-salvador-first-adopt-bitcoin-real-money-good-news-unbanked-syndication

  - ### Key Capabilities of GPT-4o
		- **Visual Analysis for Education**
			- **Description**: GPT-4o can visually analyze math problems, objects for language translation, paintings for historical context, and products for online reviews. This feature provides detailed and contextual explanations, enhancing the learning experience.
			- **Use Case**: Integration with augmented reality devices like Meta Rayban glasses to offer real-time educational support for students, language learners, and hobbyists.
		- **Teams Meeting Assistant**
			- **Description**: GPT-4o functions as an AI assistant during Microsoft Teams meetings, capable of summarizing minutes, identifying action items, retrieving relevant information from company databases, and assisting with data analysis tasks such as creating charts and reporting trends.
			- **Use Case**: Improves meeting productivity by handling administrative tasks and providing insights during discussions.
		- **Advanced Language Translation**
			- **Description**: GPT-4o offers advanced language translation capabilities, capturing conversational context and intonation for more natural and accurate translations.
			- **Use Case**: Facilitates real-time multilingual conversations, potentially integrating with devices like AirPods to break down language barriers in personal and professional interactions.
		- **Screen Sharing for Coding Assistance**
			- **Description**: Allows users to share their screens with GPT-4o for real-time guidance on coding tasks, debugging, and other technical work, including non-programming tasks like Excel analysis and PowerPoint creation.
			- **Use Case**: Provides on-the-spot assistance for professionals across various fields, enhancing productivity and efficiency.
		- **AI Interactions**
			- **Description**: Demonstrates the ability of two GPT-4o instances to interact seamlessly, including having conversations and performing tasks together, such as singing.
			- **Use Case**: Paves the way for AI influencers on social media platforms and collaborative AI systems that can work together across different domains and data sets.
		- **AI Pet Training**
			- **Description**: Utilizes vision capabilities to assist in training pets by connecting to smart devices like treat dispensers, observing and responding to a pet's behavior to provide real-time guidance and training.
			- **Use Case**: Helps pet owners train their animals more effectively and ensure consistent training routines.
		- **Dual AI Brainstorming**
			- **Description**: Allows users to engage with two distinct GPT-4o personalities simultaneously for dynamic and comprehensive brainstorming sessions.
			- **Use Case**: Facilitates creative problem-solving by offering balanced insights from different viewpoints, such as optimistic vs. pessimistic perspectives.
		- **Accessibility for the Visually Impaired**
			- **Description**: Interprets and describes visual inputs from devices like Meta Rayban glasses, helping visually impaired individuals navigate their surroundings and identify objects.
			- **Use Case**: Enhances independence by providing real-time descriptions of the environment, such as distinguishing between different objects.
		- **Text to 3D Conversion**
			- **Description**: Converts textual descriptions into detailed 3D models, enabling users to visualize concepts and objects described in text.
			- **Use Case**: Useful for designers, architects, educators, and others needing to create or understand complex three-dimensional structures from written descriptions.
		- **Enhanced Emotional Intelligence**
			- **Description**: Understands and responds to emotional cues in text and speech more effectively, providing empathetic and contextually appropriate responses.
			- **Use Case**: Improves interactions in customer service, therapy, and personal assistance by addressing the emotional needs of users.
		- **Advanced Personalization**
			- **Description**: Customizes interactions based on individual user preferences, history, and behavior, ensuring relevant recommendations and assistance.
			- **Use Case**: Enhances the overall user experience in applications such as learning, entertainment, and daily tasks.
		- **Real-Time Multimodal Interaction**
			- **Description**: Integrates text, voice, and visual inputs to provide a seamless and interactive user experience.
			- **Use Case**: Ideal for virtual assistants, interactive learning platforms, and customer service applications where users can engage using multiple forms of input simultaneously.
		- ![1722893096005.jpeg](assets/1722893096005_1722893626363_0.jpeg)

  - ### Local Knowledge Base
		- Each user device maintains a secure, [[Hardware and Edge]] local knowledge base.
		- This base contains user preferences, interests, and demographic data, organised as a lookup table. Hashes represent product classes or categories of product that are interesting to the user (opt in)

  - ### Nostr Integration
		- User's device includes a [[Nostr protocol]] client to interact with the decentralised Nostr network.
		- The Nostr client accesses the local knowledge base to retrieve relevant product class hashes.
		- These hashes are used to pull personalised marketing content from the Nostr network.

  - ### Embedding in User-Side Applications
		- Personalised marketing content is seamlessly embedded into the user's preferred applications, such as Roblox, [[NVIDIA Omniverse]] , and web browsers.
		  This ensures relevant and engaging marketing content within the context of the user's usual digital experiences.

  - ### Cloud-Based Latent Space
		- Fine-tuned product variations are stored in a cloud-based [[latent space]] , a high-dimensional vector space where each point represents a specific product variation.
		- This [[latent space]] is organised and indexed for efficient retrieval based on user preferences.

  - ### Interaction Flow
		- The user's device, with a Nostr client, accesses the local knowledge base to retrieve relevant product class hashes.
		- These hashes are used to pull personalised marketing content from the Nostr network, which matches hashes with corresponding product variations in the cloud-based latent space.
		- The matched product variations are then returned to the user's device via the Nostr network, ensuring the marketer has no direct access to the user's personal information or identity.

		- #### Measurement and Analytics
		- The exploration of privacy-preserving measurement techniques allows for aggregate insights without compromising individual user privacy.

		- ### Windows
			- Download the OpenVPN client from the official website: [https://openvpn.net/community-downloads/](https://openvpn.net/community-downloads/)
			- Install the OpenVPN client on your laptop.
			- Obtain the `vpn.ovpn` file provided by the event organisers.
			- Launch the OpenVPN client and import the `vpn.ovpn` file.
			- On the day of the event, you will receive a username and password. Use these credentials to connect to the VPN.

		- ### macOS
			- Download the official OpenVPN Connect client from the App Store: [https://apps.apple.com/us/app/openvpn-connect/id590379981](https://apps.apple.com/us/app/openvpn-connect/id590379981)
			- Install the OpenVPN Connect client on your laptop.
			- Obtain the `vpn.ovpn` file provided by the event organisers.
			- Launch the OpenVPN Connect client and import the `vpn.ovpn` file.
			- On the day of the event, you will receive a username and password. Use these credentials to connect to the VPN.

  - ## Section 8: Other Launches
		- Midjourney launched v6 and web UI.
		- OpenAI released logprobs for ChatGPT.
		- LlamaIndex launched step-wise agent execution.
		- New models like Suno AI (audio), Phi-2 (Microsoft), TextDiffuser 2 (images).

		- ### DONE Lead Generation & Sales Outreach
			- **Run.Reply.io (with Jason AI)**
				- *Description:* Sales engagement platform automating multi-channel outreach (email, etc.). Jason AI component helps generate and draft emails for cold outreach.
				- *Cost:* Subscription-based, plans often start from $60-$90 USD/user/month.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Reply.io](https://reply.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Artisan (with Ava AI)**
				- *Description:* AI tool focused on boosting sales pipelines. 'Ava' AI employee helps find new leads and generate customised cold emails based on campaign goals and target sectors.
				- *Cost:* Likely subscription or custom pricing; check website.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Artisan Sales AI](https://www.artisan.co/sales-ai)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Vidyard**
				- *Description:* Video platform for sales. Can be used to create personalised video messages for email campaigns, identify prospects, generate scripts, and automate sending.
				- *Cost:* Free plan available. Paid plans add more features, starting around $19 USD/user/month.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Vidyard](https://www.vidyard.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Dopplio**
				- *Description:* AI tool for creating personalised cold-outreach videos at scale. Record once, then use AI to customise for individual prospects.
				- *Cost:* Check website for pricing details (likely subscription/usage-based).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Dopplio](https://www.dopplio.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

		- ### Presentation Creation
			- *Task:* Design and build professional presentations and pitch decks more efficiently.
			- **Gamma**
				- *Description:* Creates presentations, documents, and basic websites from a single text prompt. Focuses on dynamic and visually appealing layouts.
				- *Cost:* Free plan with credits. Paid plans start around $8 USD/user/month (billed annually).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Gamma](https://gamma.app/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Tome**
				- *Description:* AI-powered storytelling format for creating presentations and narratives. Generates slides with text and AI images from prompts.
				- *Cost:* Free plan available. Pro plans start around $16 USD/user/month (billed annually).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Tome](https://tome.app/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Presentations.AI / SlidesAI / Plus AI / Slidesgo / Beautiful.ai**
				- *Description:* A range of AI tools specifically designed to generate presentation slides from text prompts or existing documents, often integrating with Google Slides or PowerPoint. (Head-to-head comparison mentioned).
				- *Cost:* Varies per tool. Many offer free trials or basic versions. Paid plans range typically from $10-$40 USD/user/month.
				- *Websites:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Presentations.AI](https://presentations.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[SlidesAI](https://www.slidesai.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Plus AI](https://www.plusdocs.com/plus-ai)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Slidesgo AI Maker](https://slidesgo.com/ai-presentation-maker)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Beautiful.ai](https://www.beautiful.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Microsoft Copilot**
				- *Description:* Can generate entire PowerPoint presentations from prompts or Word documents. (See Writing Assistance).
				- *Cost:* See Writing Assistance.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Microsoft Copilot for M365](https://www.microsoft.com/en-gb/microsoft-copilot/microsoft-copilot-for-microsoft-365)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

  - ### UI/UX Design Assistance
		- *Task:* Designing user interfaces (UI) and user experiences (UX) for websites or applications.
		- **Galileo.AI**
			- *Description:* AI tool that generates user interface designs (for websites, mobile apps) from text prompts. Aims to speed up the initial design phase (no-code).
			- *Cost:* Pricing has changed; check website for current plans (likely subscription).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Galileo AI](https://www.usegalileo.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
		- **Figma (Landify plugin)**
			- *Description:* Figma is a leading UI/UX design tool. The Landify plugin allows creating web design elements or landing pages within Figma using simple text prompts.
			- *Cost:* Figma has free starter plans. Paid plans for teams/pro features. Plugin costs vary (Landify may have its own pricing).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Figma](https://www.figma.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----> / (Search Figma Community for Landify)

  - ### Analysing Customer Feedback
		- *Task:* Extract insights from customer interactions (like sales calls or support tickets) to understand needs and improve products/services.
		- **Buildbetter.ai**
			- *Description:* AI platform that analyses customer call recordings to generate reports, extract key insights, and create detailed user personas based on actual feedback.
			- *Cost:* Check website for pricing details (likely subscription).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[BuildBetter.ai](https://buildbetter.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

		- #### User Behaviour and Adoption
			- A critical factor in the success of AI-driven search engines will be user adoption. While AI-enhanced search engines promise more accurate and contextually relevant results, there remains scepticism about whether users will transition from well-known traditional search engines like Google. Improvements in AI capabilities must demonstrate a substantial enhancement in user experience to effectively drive this behavioural shift.

		- ## Primitives
			- OpenAI identified the following 5 points about metaverse, in response to the query "What are 5 key points I should know when studying metaverse?". This is an unexpectedly great answer, probably the cleanest I have found, but I cannot longer find it online.
				- Metaverse is a virtual reality platform that allows users to interact with each other and with digital objects in a virtual space.
				- Metaverse is a decentralized platform, meaning that there is no central authority or server that controls the platform.
				- Metaverse is an open platform, meaning that anyone can develop applications for the platform.
				- Metaverse is a secure platform, meaning that all data and transactions are encrypted and secure.
				- Metaverse is a scalable platform, meaning that it can support a large number of users and a large number of transactions.
			- The [Metaverse Standard Forum](https://metaverse-standards.org/) highlights the following, which reads like the output from a brainstorm between academia and industry stakeholders.
				- collaborative spatial computing
				- interactive 3D graphics
				- ugmented and virtual reality
				- photorealistic content authoring
				- geospatial systems
				- end-user content tooling
				- digital twins
				- real-time collaboration
				- physical simulation
				- online economies
				- multi-user gaming
				- new levels of scale and immersiveness.
			- It's not a useless list by any means, but it lacks the kind of product focus we need for detailed exploration of value and trust transfer.
			- Mystakidis identifies the following [155]:
				- Principles
					- Interoperable
					- Open
					- Hardware agnostic
					- Network
				- Technologies
					- Virtual reality
					- Augmented reality
					- Mixed reality
				- Affordances
					- Immersive
					- Embodiment
					- Presence
					- Identity construction
				- Challenges
					- Physical well-being
					- Psychology
					- Ethics
					- Privacy
				- This is quite an academic list. A lot of these words will be explored in the next section which is more of an academic literature review.
				- Nevelsteen attempted to identify key elements for a ‘virtual work’ in 2018 and these are relevant now, and described rigorously in the appendix of his
				  paper [156]:
					- Shared Temporality, meaning that the distributed users of the virtual world share the same frame of time.
					- Real time which he defines as “not turn based”.
					- Shared Spatiality, which he says can include an ‘allegory’ of a space, as in text adventures. It seems this might extend to a spoken interface to a mixed reality metaverse.
					- ONE Shard is a description of the WLAN network architecture, and conforms to servers in a connected open metaverse.
					- Many human agents simply means that more than one person can be represented in the virtual world and corresponds to ‘social’ in our description.
					- Many Software Agents corresponds to AI actors in our descriptions. Non playing characters would be the gaming equivalent.
					- Virtual Interaction pertains to any ability of a user to interact actively with the persistent virtual scene, and is pretty much a given these days.
					- Nonpausable isn’t even a word, but is pretty self explanatory.
					- Persistence means that if human participants leave then the data of the virtual world continues. This applies to the scenes, the data representing actions, and objects and actors in the worlds.
					- Avatar is interesting as it might seem that having avatar representations of connected human participants is a given. In fact the shared spaces employed by Nvidia for digital engineering do not.
				- Turning to industry; John Riccitiello, CEO of Unity Technologies says that metaverse is “The next generation of the internet that is:
					- always real-time
					- mostly 3D
					- mostly interactive
					- mostly social
					- mostly persistent
				- Expanding this slightly I choose the following primitives of what I think are important for a metaverse:
					- Fusing of digital and real life
					- Social first
					- Real time interactive 3d graphics first
					- Persistent
					- Supports ownership
					- Supports user generated content [157]
					- Open and extensible
					- Low friction economic actors and actions
					- Trusted / secure
					- Convergence of film and games
					- Blurring of IP boundaries
					- Blurring of narrative flow
					- Multimodal and hardware agnostic
					- Mobile first experiences
					- Safeguarding, and governance
					- Scaffolded by GenAI
					- Supports Agentic AI actors

		- #### More like crypto NFT virtual land
		- This next three are a placeholder taking text from the [linkedsite](https://www.analyticsinsight.net/top-10-metaverse-platforms-that-will-replace-social-media-in-future/)and will be swapped out: The digital land [narrative isfading](https://www.coindesk.com/markets/2022/04/06/metaverse-majors-struggle-as-user-base-falls-short-of-market-expectations/?).

		- ##### Sandbox
			- The Sandbox, a decentralized gaming platform built on the Ethereumblockchain, has garnered attention for its promise of a vibrantecosystem filled with user-generated content. However, despite itsambitious vision, the project has faced various challenges andcriticisms similar to Decentraland. Limited use cases and adoptionremain a significant challenge for The Sandbox. While the platform aimsto create a vast and engaging gaming ecosystem, it has yet to gainwidespread adoption, leading to a limited number of users anddevelopers. This lack of user engagement raises questions about thelong-term viability of the project, as the value of virtual land,assets, and in-game experiences may remain limited without a thrivingcommunity. Like Decentraland it is a manipulated hype bubble, attractingglowing paid press reports in some media, and ‘interest’ from nationaland regional ‘branches’ of global brands which are then spun to createartificial hype in main stream media. The tradable NFTs within theseearly platforms are obviously subject to insider trading, pricevolatility, wash trading, and other harmful activities.
			- The Sandbox places too much emphasis on the speculative aspect ofvirtual land and asset trading, rather than focusing on creating agenuinely engaging gaming ecosystem. This focus on speculation couldlead to an unsustainable bubble with inflated asset prices, and it seemslikely we have already seen most of the collapse of this ecosystem.
			- The actual experience of interacting with The Sandbox’s gaming productsleaves much to be desired. For instance, the platform’s games may sufferfrom lag and poor performance due to the technical limitations ofblockchain technology. Additionally, the quality of user-generatedcontent can be highly variable, as not all creators possess the skillsand resources to develop engaging gaming experiences. As a result, usersmight find themselves sifting through a plethora of low-quality games,which can be frustrating and time-consuming.
			- Concerns about centralization persist, as some critics argue that theproject is not entirely decentralized. The team behind The Sandbox stillholds a significant amount of control over the platform’s developmentand governance, potentially undermining the project’s core vision of adecentralized gaming ecosystem.

		- ##### Space Somnium
			- Somnium Space is just another one of these, but with more VR. It allowsusers to join in either through a downloadable VR client or abrowser-based version to function like any other web app. It sufferedthe same problems at Decentraland and Sandbox. They are terribleproducts, with hype, manufactured by money, extracted from users, oftenconvinced by paid celebrity endorsements. It’s the NFT space, butsadder, and technically worse, and likely not for very much longer.

  - ##### Spatial
		- Spatial is worth a quick look because it’s a business first meetingtool, and comparatively well received by industry for that purpose.
		- - Very compelling. Wins at wow.
		- - Great avatars, user generated
		- - AR first design
		- - Limited scenes
		- - Smaller groups (12?)
		- - Limited headset support
		- - Intuitive meeting support tools
		- - No back end integration

  - ##### MeetinVR
		- Good enough graphics, pretty mature system
		- OK indicative avatars, user selected
		- VR first design
		- Limited scenes
		- Smaller groups (12?)
		- Quest and PC
		- Writing and gestures supported
		- Some basic enterprise tools integration
		- Bring in 3D objects
		- Need to apply for a license?

  - #### Ubiquitous displays
		- This includes [laser retinaldisplays](https://skarredghost.com/2022/06/28/mojo-vision-contact-tested-eye/),and smart screens which are context and user aware.

  - ##### Unfair distribution
		- By design the distribution of Bitcoin is likely ‘fair‘, in that everyone has been able to access and secure the asset long term without prejudice. This image from Twitter user @Geertjancap shows the distribution in 2021. Whether this is judged to be fair if the asset jumps to 10 times it’s current value, minting a new class of hyper rich holders, is another matter.
		- ![](./assets/3c46c793cd3e9cdedc88623cafee35ef0ac7ebf0.jpg)
		- https://twitter.com/Geertjancap/status/1380972132990136322/photo/1
		- {{twitter https://twitter.com/Geertjancap/status/1380972132990136322/photo/1}}
		- Bitcoin distribution is skewed to a few early holders, but it likely is fair.

			- ##### Monetisation of User Generated Content:
				- Games as a NFT’s offer ability to monetise UGC: User generated content.Video games such as [Nintendo’s *PokemonGo*](https://www.businessofapps.com/data/pokemon-go-statistics/) *(166million players)*, [Bungie’s *Destiny2*](https://techacake.com/destiny-2-player-count/#:~:text=The%20total%20player%20base%20of,to%20be%2038%20million%20players.&text=According%20to%20the%20source%2C%20the,in%20terms%20of%20player%20population.)*(38 million players)* or [miHoYo’s GenshinImpact](https://fictionhorizon.com/how-many-people-play-genshin-impact/#:~:text=Genshin%20Impact%20had%20approximately%209,million%20users%20in%20June%202021.)(*9 million players* ) all have large, established and significantplayer bases. What is noteworthy, the games are designed to encourageplayers may spend hundreds, or in some cases thousands of hours on onegame alone; according to[Destinytracker.com](https://destinytracker.com/destiny/leaderboards/all/minutesplayedtotal?grouped=true&page=1),the top players have amassed total play times over 20,000 hours, closeto 1,000 days or asciitilde 3 years, which is incredible feat givenDestiny 2 only launched 5 years ago in 2017.
				- Destiny/Pokemon Go and Genshin Impact revolve around a central key gamemechanic; players investing significant amounts of time collecting ingame digital assets; characters/weapons/items, often classed as ‘rare’or ‘exotic’ or ‘5 Star’. These collectibles usually found by acombination of the accrual of in-game time, completing quests,purchasing additional in-game items/boosters, and luck (‘RNG’). Playersare often encouraged to share their collections of rarecharacters/weapons/ objects through in-game achievements, triumphs,scores acting as a mark of distinction/status symbol.
				- Traditionally there has been nothing that went beyond sharing the*digital badge* (i.e triumph/achievement/accomplishment) on a on socialmedia/gamer’s platform profile. However NFT’s offer the ideal system fordevelopers/publishers and even players to monetise usergenerated/customised data (such as a players unique save game data),simultaneously allowing: a) creation of an additional monetisedecosystem to meet player demands i.e. some players who are willing tomonetise and ‘sell’ their invested time in a particular product/serviceto other players with little time but willing to pay other players for‘grinding’ (progressing laborious in game tasks) and a more advancedin-game progression point. The potential to providepublishers/developers with an additional long-term income stream,providing a better ROI on computer & video game development, which inmany instances can cost hundreds of millions in development costsspanning 5/10 years, is undeniable.
				- This use case is where our focus lies, as it is now far easier for users to generate content with the support of AI. Note that ideas also can count as content.

  - ### DID principles
		- The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ### Nostr
		- Nostr (pronounced no-star) is a [decentralized openprotocol](https://www.nostr.how/) that aims to improve the social mediaexperience by addressing issues of censorship and data collection. Theprotocol operates by allowing users to post and view notes on serverscalled relays, and view and post these notes through apps calledclients. The open nature of the protocol allows for competition and afree flow of information, as users can choose to use different relays orclients if they are censored. This is because the protocol isdecentralized and controlled by no one.
		- The decentralized nature of Nostr means that there is no centralauthority that can control the flow of information. This is achievedthrough the use of relays and clients, which are run by differentindividuals or entities. Users have the freedom to choose which relaysand clients they want to use, and as a result, their feeds are populatedwith content from the people they choose to follow. If a relay or clienttries to censor a user, they can simply switch to a different one. Thisis a major advantage over traditional centralized social media platformswhere one entity holds all the control over the flow of information andcan censor or manipulate the content that users see.
		- Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
		- Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
		- This potential step-change improvement to the social media experiencefor everyday people addresses issues of censorship and data collection.
		- Nostr is “The simplest open protocol that is able to create acensorship-resistant global "social" network once and for all.”according to it’s [github page](https://github.com/fiatjaf/nostr). Morethan that it’s a client side validated proof of who a user isinteracting with, hence being in this identity section. To be clear,it’s not a completely peer to peer system in that it uses (very dumb)relay servers, but this gives it some of the best characteristics ofboth paradigms. This has the following advantages for our metaverseapplication;
			- it’s lightweight, with minimal network overhead and complexity
			- it’s real-time using websockets
			- anyone can run a relay server, so one can be run in the deployment in the final section of the book.
			- Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
			- it’s open-source
			- it is itself [Turing Complete](https://snort.social/e/note1evkdgcg0dw8ckyqsqhnk4wy55h7w97twjf8etcq2tr9sv5urlszqjc9p6v) and therefore able to execute any code within it’s message protocol
			- there are multiple usable libraries and tools
			- it’s under active development with an excellent team. The lead, ‘Fiatjaf’ is one of the most [prolific developers](https://github.com/fiatjaf) in the lightning space.
			- it’s based on the same underlying cryptographic technology we are using elsewhere, indeed with it’s use of Bitcoin keys the identity system is global
			- it provides the identity proof that we need to validate users and objects into a virtual space
			- it enables message passing
			- it scales to be a social network as required
			- it need not rely on anything outside of a relay hosted on the metaverse server
			- it can be scaled to provide one to many bulletin board style applications within the metaverse
			- we can use it in private, group, and public modes as required
			- it integrates with the torrent network allowing storage and external referencing of arbitrary data
			- it can easily operate outside of the walled garden of the metaverse, extending the reach of the messages
		- [Nostr is incredibly promising](https://www.forbes.com/sites/rogerhuang/2022/12/29/nostr-is-the-decentralized-protocol-that-might-replace-elon-musks-twitter/),and integrating these relays in the metaverse servers and clients of theproposed technology stack in this book might allow us globally provableidentity, with privacy by design. It can provide message passing. If allentities in the collaborative mixed reality scenegraphs are also Nostrkey pairs then schema can be applied consistently with the economiclayer using the same key system as Bitcoin. Nostr has just received asubstantial grant from Dorsey. It is core to the design later in thebook. A curated list of projects and libraries is [available ongithub](https://github.com/aljazceru/awesome-nostr).
		- Luke Childs [says](https://github.com/nostr-protocol/nips/issues/154):
			- “Nostr makes a good candidate to be used as a very simple DID layer.Having "Login with Nostr" auth on websites solves a lot of problems in avery elegant way, and Nostr’s main use case as a social network protocolmakes it highly suited to be used as your main identity proving key.Compare "Login with Nostr" to similar "Login with Lightning"(LNURL-auth) specs to see some easy and obvious advantages:  Remote signer vs local signer  Login with Lightning requires access to remote keys, login with Nostrrequires access to local keys ideally stored in a browser extension. Dueto the way Lightning works you can only really have one instance. Youneed all your client devices linked to a single Lightning node, thismeans most clients will be connecting to the signer remotely. Now ifyour Lightning node goes down or you lose your connection you also can’tauth with any service. This could cause circular dependencies where youlose the connection to your Lightning node so you can’t auth with theservices you need to access to debug the issue with your Lightning nodelike your hosting provider or VPN account. You could technically solvethis by replicating your LN keys to other client devices only to be usedfor local auth signing but that introduces other risks.  Unique identifier vs identity  A Lightning node is not really an identity but a unique identifier. Itjust tells you the person that auths is the same random person thatauthed last time, it doesn’t tell you who they are. A nostr pubkey is anidentity. It tells you who they are, what their name is, what they looklike, who they know, how you can pay them, how you can message them.  This is much more useful as an identity layer for an application. Theapplication can show their profile picture, username, send secure crossplatform push notifications via NIP-04 encrypted Nostr DMs, etc.  Consistent identity across services  Lightning pubkeys are sensitive private information and can leakconfidential financial information, Nostr pubkeys are safe to share withanyone. LNURL-auth adds extra steps to solve this by creating derivedsubkeys for identities that are unique to each service you auth with.This does not seem ideal, it seems the default case is that an identityis something that you do want to follow you across all your accounts.Nostr based auth behaves more appropriate in this regard. In the rarecase you need to achieve privacy and separation between certain servicesyou can still do that by using use a throwaway Nostr key for thoseservices.  User relationships across services Since authing with Nostr shares areal social identity with the service, they can also see your Nostrsocial graph. This could be useful for connecting you to people youalready know on the new service.  Low cost identity  Ideally identities should be easy to create but hard to build upreputation to limit spam while avoiding excluding people from thenetwork. It’s not clear that it will be cost effective / scalable foreveryone to run their own Lightning node so tying individual identity toa single Lightning node pubkey is problematic. Nostr keys are easy tocreate and hard reputation can be earned via PoW/DNS or building astrong social graph.”

  - ### Company Culture
		- **Growth Focus**: The company culture prioritized growth and user engagement over other factors, such as user safety and value​​.
		- **Conflicting Teams**: Integrity/safety teams often found their priorities at odds with growth teams, with growth usually prevailing.
		- **Metrics of Success**: Success was defined primarily in terms of user engagement and platform growth, often to the detriment of other considerations.

  - ### Impact on Society
		- **Content Amplification**: Facebook's algorithms influenced what content got amplified, contributing to sensationalism and decreased factual accuracy.
		- **User Influence**: Hyperactive users had disproportionate influence over content flow and amplification.
		- **Democratic Illusion**: The platform created an illusion of democratization, but in practice, it was a curated environment with significant control over content and user interaction.

  - ### Mistakes by Senior Management
		- **Misaligned Priorities**: There was a fundamental misalignment between short-term growth and long-term integrity and user experience.
		- **Ignoring Research**: Findings that suggested integrity changes could boost long-term retention were often ignored or downplayed.
		- **Limited Transparency**: Decisions were made with a lack of transparency, both internally and externally.

  - ### Hypothetical Better Ways of Building Platforms
		- **User Safety Focus**: Prioritizing user safety and value over mere engagement and growth.
		- **Balanced Influence**: Implementing measures to prevent hyperactive users from disproportionately influencing content amplification.
		- **Transparent Decision Making**: Adopting more transparent processes in algorithm design and content moderation decisions.
		- **Long-Term Metrics**: Shifting focus from short-term engagement metrics to long-term user well-being and platform health.
  - References:
  - Jeff Horwitz's book "Broken Code," which delves into the Wall Street Journal's 2021 investigation and further into Facebook's internal documents. It was based on interviews and discussions with former Facebook employees and experts, shedding light on the company's internal dynamics and decision-making processes.

  - ### [OpenWebUI](https://openwebui.com/)
		- A user-friendly web interface for interacting with large language models.

  - ### [Rabbit](https://www.rabbit.tech/)
		- **Features:**
			- Designed by Teenage Engineering Co
			- Agentic (connect it to your data and it does stuff)
				- Needs to be connected to a lot of different user data sources
			- I'm sceptical, but it's a nice effort.
			- It's **cheap**, I would totally give this to a kid over a mobile phone. £200 all in?!?
			- It sold out immediately.
			- {{tweet https://twitter.com/rabbit_hmi/status/1744781083831574824}}

		- ### Key Features and Benefits
			- **Precision and Intuitiveness**: The EMG technology can detect even the tiniest muscle movements, allowing for fluid and responsive interactions in VR and AR[1](https://blogs.expandreality.io/meta-are-enhancing-vr-experiences-with-neural-wristbands).
			- **Non-Invasive**: The wristbands offer a non-invasive way to capture neural signals, making the technology more accessible and user-friendly[1](https://blogs.expandreality.io/meta-are-enhancing-vr-experiences-with-neural-wristbands).
			- **Versatility**: The wristbands can be used for various applications, from simple object recognition to fully immersive environments[1](https://blogs.expandreality.io/meta-are-enhancing-vr-experiences-with-neural-wristbands).
			- **Adaptive Learning**: The neural interface continuously improves its understanding of each user's unique movements over time, enhancing the overall experience5
			- At present, the EMG wristbands can provide basic input commands, such as:
				- Finger taps (index and middle finger
				- D-pad-like gestures
				- Simple hand movements[2](https://mixed-news.com/en/bosworth-on-emg-wristband-as-quest-controller/)
			- While these inputs are currently limited, Meta's CTO Andrew Bosworth suggests that the technology could evolve to become an increasingly universal interface over time[2](https://mixed-news.com/en/bosworth-on-emg-wristband-as-quest-controller/).

  - ##### Windows in Spatial Design
		- - Windows are designed with a new visual language, made of a glass material that provides contrast with the world, awareness of surroundings, and adapts to different lighting conditions.
		- - Windows can be moved, closed, and resized by users, with windows facing the user during movement.
		- - Windows are flexible and can be resized to fit comfortably within the user’s view.
		- - Choosing Window Size and Layout Windows are designed to be flexible, adapting to content, and the window size should be chosen based on this. Windows can change size dynamically based on context.
		- - Apps can use multiple windows to display content side by side or show distinct actions, but should ideally stick to a single window to avoid user overwhelm.

		- ##### User Mobility
		- The presentation emphasizes the importance of designing applicationsthat require minimal movement from users. It recommends usingsystem-level recentering methods to adjust the app’s view when a usermoves.

		- ##### Dimensionality
		- The use of depth and scale in designing the user experience isemphasized. Depth can help with hierarchy and focus, and scale can beused to emphasize content. The text warns against overusing depth,especially with text, and encourages developers to experiment with scaleto achieve the desired user experience.

		- ##### Immersiveness
		- The passage introduces the concept of an immersion spectrum, where anapp can transition between various states of immersion based on theuser’s experience. The importance of smooth transitions, designing withconsideration to user focus, thoughtful blending with reality, andkeeping the user comfortable are emphasized.

		- ##### User Comfort
		- Recommendations for moving an immersive app, focusing on avoidingdisorienting fast movements and instead recommending fade out and fadein techniques to keep the user comfortable during motion.

		- ##### Key Moments
		- Focusing on a “key moment” that provides a unique spatial or immersiveexperience is recommended. This could involve enhancing a moment withdepth and scale or transforming the user’s space to create a unique andmemorable experience.
  - Lightfield
		- [Light Field Lab](https://www.lightfieldlab.com/#tech)
  - [Infitec shows holographic projection screens (installation-international.com)](https://www.installation-international.com/ise-daily/infitec-shows-holographic-projection-screens)
  - [HYPERVSN is a 3D Integrated Holographic System for advertising, digital signage, events.](https://hypervsn.com/)
  - {{video https://www.youtube.com/watch?v=DxkIo-2Jzzo&}}

  - # Brain
  - Apple has submitted a patent application that raises some serious privacy and ethical concerns.
  - [From this post](https://www.linkedin.com/feed/update/urn:li:activity:7196781454519877632/)
  - ![1715807554519.jpeg](assets/1715807554519_1716117593773_0.jpeg)
  - The US Patent and Trademark Office lists application 2023/0225659 as a “biosensing device” built into Apple’s earbuds to measure “biological signal parameters from a user.”
		- 👉 Electroencephalography (EEG). In other words, the aim is to directly record the user’s brain waves from tiny sensors positioned within the ear canal.
		- 👉 Electromyography (EMG). This records muscle movements and the information can be used to help understand facial expressions and jaw movements related to emotion.
		- 👉 Electrooculography (EOG) tracks eye movements, particularly side-to-side.
		- 👉 Electrocardiogram (ECG) typically measures the electrical activity of the heart.
		- 👉 Galvanic skin response (GSR), which provides an indirect measure of emotional arousal – that is, the strength of an emotional response.
		- 👉 Blood volume pulse (BVP). This is measured using photoplethysmography and provides information about heart rate (HR) and heart rate variability (HRV).
  - In other words, the aim is to collect a very comprehensive set of neurological and biometric data from the user. Creepy, right?!
  - It’s unclear to me how you could even record meaningful data from within the ear.
  - If this kind of interface goes ahead it should be
		- 1. Voluntary. Participants should not be forced or deceived into providing physiological or neurological data. Volunteers at liberty to stop at any time.
		- 2. Limited. Personal data may only be collected for a specific, explicit and legitimate purpose. This purpose must be clearly stated, and only stored as long as needed to complete that purpose.
		- 3. Transparent. Requires informed consent including being aware the data are being collected and knowing the risks involved, including whether the information will be shared with other organizations.
		- 4. Autonomy. Free from manipulation. Participants should not be forced or deceived into making decisions they would not otherwise make.
		- 5. Valid. Must be based on valid science and led by scientifically trained staff.
  - To my mind, this application potentially violates 4 out of 5 of these principles (I don’t see any evidence of manipulation) and this makes me deeply uneasy!

  - # AI Agent Refactor
  - ```mermaid
  classDiagram

  %% -----------------------------------------------------------------------
  %% 1. CORE: Agent-Oriented Ontology
  %% -----------------------------------------------------------------------
      class AgentOntologyEntity {
          rdfs:label "Agent Ontology Entity"
          rdfs:comment "Root class for all concepts in the agent-focused ontology."
      }

      class Agent {
          rdfs:label "Agent"
          rdfs:comment "A general actor capable of autonomous or semi-autonomous behavior, including humans and AIs."
          hasSkillProfile SkillProfile
          hasPrivacySetting PrivacySetting
          hasReputationScore ReputationScore
          hasWallet DigitalWallet
          hasInteractionPreference InteractionPreference
      }

      class AIAgent {
          rdfs:label "AI Agent"
          rdfs:comment "An agent driven by AI models, with specialized capabilities for autonomy and decision-making."
          hasAIModel AIModel
          decayFunction xsd:string
      }

      class HumanAgent {
          rdfs:label "Human Agent"
          rdfs:comment "A real human user. May be linked to a WebID for decentralized identity and authentication."
      }

      class AIModel {
          rdfs:label "AI Model"
          rdfs:comment "The underlying neural network or algorithm powering an AI Agent's intelligence."
      }

      class SkillProfile {
          rdfs:label "Skill Profile"
          rdfs:comment "Describes the abilities or competencies an agent (human or AI) can exhibit."
      }

      class PrivacySetting {
          rdfs:label "Privacy Setting"
          rdfs:comment "Rules and preferences regarding data usage, sharing, and retention for an agent."
      }

      class ReputationScore {
          rdfs:label "Reputation Score"
          rdfs:comment "Metric or rating reflecting an agent's trust or standing in a community."
      }

      class DigitalWallet {
          rdfs:label "Digital Wallet"
          rdfs:comment "Holds digital assets, cryptocurrencies, or tokens owned by an agent."
      }

      class InteractionPreference {
          rdfs:label "Interaction Preference"
          rdfs:comment "Specifies how an agent prefers to interact, moderate content, or engage with others."
      }


  %% -----------------------------------------------------------------------
  %% 2. WEBID SUBCATEGORY: Decentralized Identity & Events
  %% -----------------------------------------------------------------------
      class WebIDEntity {
          rdfs:label "WebID Entity"
          rdfs:comment "A conceptual parent for all objects in the WebID ecosystem."
      }

      class Person {
          rdfs:label "Person"
          rdfs:comment "Represents a decentralized identity and profile using WebID."
          webid xsd:anyURI "A unique WebID URI identifying this individual"
          name xsd:string "A handle or short name (distinct from display_name)"
          display_name xsd:string "A more user-facing display name"
          about xsd:string "Short bio/about text"
          picture xsd:anyURI "URI of the user’s profile image"
          banner xsd:anyURI "URI of the user’s banner image"
          website xsd:anyURI "User’s personal website"
      }

      class WebIDEvent {
          rdfs:label "WebID Event"
          rdfs:comment "A generic event referencing a WebID identity, with timestamps, content, and possible signatures."
          authorWebID xsd:anyURI "The WebID of the event author"
          created_at xsd:dateTime "Timestamp of creation"
          content xsd:string "Event content or message"
          signature xsd:string "Digital signature (e.g., for verifiability)"
      }

      class WebIDService {
          rdfs:label "WebID Service"
          rdfs:comment "A decentralized or semi-decentralized service endpoint that stores or routes WebID events."
          serviceURI xsd:anyURI "The endpoint (e.g., HTTPS, WebSocket) providing service functionality"
      }


  %% -----------------------------------------------------------------------
  %% 3. IMMERSIVE REAL-TIME SUBCATEGORY
  %% -----------------------------------------------------------------------
      class ImmersiveRealTimeEntity {
          rdfs:label "Immersive Real-Time Entity"
          rdfs:comment "Base class for objects and concepts within immersive real-time environments (3D spaces, XR, etc.)."
      }

      class ImmersiveScene {
          rdfs:label "Immersive Scene"
          rdfs:comment "A real-time interactive environment or 'scene' supporting multi-agent presence."
          governedBy GovernanceStructure
          hasPolicy ImmersivePolicy
      }

      class GovernanceStructure {
          rdfs:label "Governance Structure"
          rdfs:comment "Rules, roles, and processes governing an immersive scene or community."
      }

      class ImmersivePolicy {
          rdfs:label "Immersive Policy"
          rdfs:comment "Behavioral and content guidelines within a particular immersive real-time environment."
      }

      class SceneObject {
          rdfs:label "Scene Object"
          rdfs:comment "Any interactive or visible object in an immersive real-time scene."
      }

      class DigitalAsset {
          rdfs:label "Digital Asset"
          rdfs:comment "A unique digital good or token that can be owned or traded in immersive or other digital contexts."
          hasOwner Agent
      }

      class VirtualEconomy {
          rdfs:label "Virtual Economy"
          rdfs:comment "A system enabling trade and currency exchange in immersive or other digital environments."
          regulatedBy EconomicPolicy
          hasMarketplace Marketplace
      }

      class Marketplace {
          rdfs:label "Marketplace"
          rdfs:comment "A platform or location to trade digital assets (NFTs, tokens, etc.)."
      }

      class EconomicPolicy {
          rdfs:label "Economic Policy"
          rdfs:comment "Regulations defining currency issuance, exchange rules, and other economic mechanics."
      }


  %% -----------------------------------------------------------------------
  %% 4. RELATIONSHIPS & INHERITANCE
  %% -----------------------------------------------------------------------

      %% A. Ontology Roots & Subcategories
      AgentOntologyEntity <|-- Agent
      AgentOntologyEntity <|-- WebIDEntity
      AgentOntologyEntity <|-- ImmersiveRealTimeEntity

      %% B. Agent Hierarchy
      Agent <|-- AIAgent
      Agent <|-- HumanAgent

      %% C. WebID
      WebIDEntity <|-- Person
      WebIDEntity <|-- WebIDEvent
      WebIDEntity <|-- WebIDService
      HumanAgent -- Person : "may link to/represent"

      %% D. Immersive Real-Time
      ImmersiveRealTimeEntity <|-- ImmersiveScene
      ImmersiveRealTimeEntity <|-- DigitalAsset
      ImmersiveRealTimeEntity <|-- VirtualEconomy
      ImmersiveRealTimeEntity <|-- Marketplace
      ImmersiveRealTimeEntity <|-- GovernanceStructure
      ImmersiveRealTimeEntity <|-- ImmersivePolicy
      ImmersiveRealTimeEntity <|-- SceneObject

      %% E. Detailed Links
      AIAgent "1" *-- "1" AIModel : hasAIModel
      Agent "1" *-- "0..*" SkillProfile : hasSkillProfile
      Agent "1" *-- "0..*" PrivacySetting : hasPrivacySetting
      Agent "1" *-- "0..*" ReputationScore : hasReputationScore
      Agent "1" *-- "0..*" DigitalWallet : hasWallet
      Agent "1" *-- "1" InteractionPreference : hasInteractionPreference

      %% Example of AI Agents creating scene objects (optional)
      AIAgent "1" *-- "*" SceneObject : canCreateVariations

      ImmersiveScene "1" *-- "0..*" GovernanceStructure : governedBy
      ImmersiveScene "1" *-- "0..*" ImmersivePolicy : hasPolicy

      DigitalAsset "1" *-- "1" Agent : hasOwner

      VirtualEconomy "1" *-- "0..*" EconomicPolicy : regulatedBy
      VirtualEconomy "1" *-- "0..*" Marketplace : hasMarketplace

  ```

  - ### Frameworks for Decision-Making
		- [[Agents]] can mitigate psychological friction by automating repetitive micropayment approvals.
		- For example, they might pre-authorise low-value transactions (e.g., API queries or short IoT data bursts) based on user-defined spending thresholds.
		- Such automation proves essential in contexts where multiple micro-billings—like generative AI queries at $0.001 each—could overwhelm users if prompted for every purchase.

  - ### Trust and Transparency Mechanisms
		- Balancing autonomous decisions with user control is critical.
		- Implementations like [[MIT’s lit on Lightning]] use programmable escrow accounts that only release funds once conditions (e.g., correct AI output) are met.
		- Yet, overly opaque AI systems risk alienating users; real-time spending dashboards and per-service monthly caps help maintain trust.

  - ### Algorithmic Bias
		- AI-managed budgeting risks reinforcing socioeconomic inequalities if models disproportionately restrict certain users.
		- Mitigation includes fairness audits and user-adjustable parameters.

		- ### Real-time Collaboration
			- Multi-user editing: Multiple users can simultaneously work on the same USD scene or asset, with changes being synchronized in real-time
			- Presence and awareness: Users can see the presence and activities of other collaborators working on the same project
			- Conflict resolution: Nucleus Server automatically handles conflicts that may arise from simultaneous edits by multiple users

  - # Notes and Other Stuff by Relays
  - Nostr [pronounced no-star] is a decentralized open protocol that aims to improve the social media experience by addressing issues of censorship and data collection. The protocol operates by allowing users to post and view notes on servers called relays, and view and post these notes through apps called clients. The open nature of the protocol allows for competition and a free flow of information, as users can choose to use different relays or clients if they are censored. This is because the protocol is decentralized and controlled by no one.
  - The decentralized nature of Nostr means that there is no central authority that can control the flow of information. This is achieved through the use of relays and clients, which are run by different individuals or entities. Users have the freedom to choose which relays and clients they want to use, and as a result, their feeds are populated with content from the people they choose to follow. If a relay or client tries to censor a user, they can simply switch to a different one. This is a major advantage over traditional centralized social media platforms where one entity holds all the control over the flow of information and can censor or manipulate the content that users see.
  - Nostr is also not beholden to shareholders or investors. This means that the protocol can make decisions that prioritize the well-being and quality of discourse for users, rather than solely focusing on profit. This is in contrast to traditional social media networks like Twitter, Facebook, and TikTok, which are driven by the need to collect data on users and sell ads to generate revenue. In these centralized platforms, users’ data is collected, analyzed and sold to the highest bidder, often without the user’s knowledge or consent. Nostr, on the other hand, allows users to have more control over their data and the ability to monetize their content.
  - Nostr also tightly integrates Bitcoin Lightning to support the protocol. This will hopefully enable secure transmission of value alongside the information and interactions on the platform. It also gives users the ability to monetise their content.
  - This potential step-change improvement to the social media experience for everyday people addresses issues of censorship and data collection.
  - Nostr is “The simplest open protocol that is able to create a censorship-resistant global "social" network once and for all.” according to it’s github page. More than that it’s a client side validated proof of who a user is interacting with, hence being in this identity section. To be clear, it’s not a completely peer to peer system in that it uses (very dumb) relay servers, but this gives it some of the best characteristics of both paradigms. This has the following advantages for our metaverse application;
		- It’s lightweight, with minimal network overhead and complexity
		- It’s real-time using websockets
		- Anyone can run a relay server, so one can be run in the deployment in the final section of the book.
		- Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
		- It is itself Turing Complete and therefore able to execute any code within it’s message protocol
		- There are multiple usable libraries and tools
		- It’s under active development with a diverse and experienced community
		- It’s based on the same underlying cryptographic technology we are using elsewhere, indeed with it’s use of Taproot keys the identity system is global
		- It provides the identity proof that we need to validate users and objects into a virtual space
		- It enables message passing
		- It scales to be a social network as required
		- It need not rely on anything outside of a relay hosted on the metaverse server
		- It can be scaled to provide one to many bulletin board style applications within the metaverse
		- We can use it in private, group, and public modes as required
		- It integrates with the torrent network allowing storage and external referencing of arbitrary data
		- It can easily operate outside of the walled garden of the metaverse, extending the reach of the messages
  - Nostr is incredibly promising, and integrating these relays in the metaverse servers and clients of the proposed technology stack in this book might allow us globally provable identity, with privacy by design. It can provide message passing. If all entities in the collaborative mixed reality scenegraphs are also Nostr key pairs then schema can be applied consistently with the economic layer using the same key system as Bitcoin. Nostr has just received a substantial grant from Dorsey. It is core to the design later in the book. A curated list of projects and libraries is available on github.
  - Luke Childs says:
		- “Nostr makes a good candidate to be used as a very simple DID layer. Having "Login with Nostr" auth on websites solves a lot of problems in a very elegant way, and Nostr’s main use case as a social network protocol makes it highly suited to be used as your main identity proving key. Compare "Login with Nostr" to similar "Login with Lightning" (LNURL-auth) specs to see some easy and obvious advantages:
		  Remote signer vs local signer
		  Login with Lightning requires access to remote keys, login with Nostr requires access to local keys ideally stored in a browser extension. Due to the way Lightning works you can only really have one instance. You need all your client devices linked to a single Lightning node, this means most clients will be connecting to the signer remotely. Now if your Lightning node goes down or you lose your connection you also can’t auth with any service. This could cause circular dependencies where you lose the connection to your Lightning node so you can’t auth with the services you need to access to debug the issue with your Lightning node like your hosting provider or VPN account. You could technically solve this by replicating your LN keys to other client devices only to be used for local auth signing but that introduces other risks.
		  Unique identifier vs identity
		  A Lightning node is not really an identity but a unique identifier. It just tells you the person that auths is the same random person that authed last time, it doesn’t tell you who they are. A nostr pubkey is an identity. It tells you who they are, what their name is, what they look like, who they know, how you can pay them, how you can message them.
		  This is much more useful as an identity layer for an application. The application can show their profile picture, username, send secure cross platform push notifications via NIP-04 encrypted Nostr DMs, etc.
		  Consistent identity across services
		  Lightning pubkeys are sensitive private information and can leak confidential financial information, Nostr pubkeys are safe to share with anyone. LNURL-auth adds extra steps to solve this by creating derived subkeys for identities that are unique to each service you auth with. This does not seem ideal, it seems the default case is that an identity is something that you do want to follow you across all your accounts. Nostr based auth behaves more appropriate in this regard. In the rare case you need to achieve privacy and separation between certain services you can still do that by using use a throwaway Nostr key for those services.
		  User relationships across services Since authing with Nostr shares a real social identity with the service, they can also see your Nostr social graph. This could be useful for connecting you to people you already know on the new service.
		  Low cost identity
		  Ideally identities should be easy to create but hard to build up reputation to limit spam while avoiding excluding people from the network. It’s not clear that it will be cost effective / scalable for everyone to run their own Lightning node so tying individual identity to a single Lightning node pubkey is problematic. Nostr keys are easy to create and hard reputation can be earned via PoW/DNS or building a strong social graph.”

  - ## nostr, bluesky, twitter
		- [An Interview With Jack Dorsey (creator of Twitter)](https://www.piratewires.com/p/interview-with-jack-dorsey-mike-solana)
			- Dorsey left Bluesky, a project aimed at creating an open-source protocol layer for social media platforms, because it deviated from its original decentralized vision and started repeating the same mistakes as Twitter.
			- Dorsey believes Twitter's core problem was choosing an advertising-based business model, which made the platform vulnerable to pressure from advertisers and governments, leading to censorship.
			- Taking Twitter private was the only way to implement the changes needed to make it a true internet company with a focus on protocol, service, and business.
			- Dorsey argues that social media companies cannot remain censorship-resistant without moving to open protocols, as centralized platforms will always be vulnerable to pressure from advertisers and governments.
			- He believes that truly decentralized protocols like Nostr, which have no central point of control, are the future of free speech on the internet.
			- **Open Source Development Philosophy**: The foundational principles of early internet development were rooted in open-source philosophy, where transparency of code and open APIs facilitated widespread innovation. This approach, akin to a "bazaar" rather than a "cathedral," advocates for a decentralised system to operate alongside existing centralised models. This ensures resilience and the availability of alternatives when centralised systems encounter failures.
			- **Censorship Resistance and Bitcoin**: Censorship resistance is a critical aspect, particularly within the context of Bitcoin and open platforms like Nostr. Despite the widespread discussion on this topic, there is an observed gap between rhetoric and daily usage. The infrastructure must be robust and prepared to support billions of users when the demand for censorship-resistant platforms increases.
			- **Nostr vs. Twitter (X)**: Nostr is positioned as a superior platform to Twitter (now X) due to its open and permissionless nature. The focus shifts from merely counting user numbers to assessing the quantity and quality of information on the platform. The role of algorithms in organising this vast information corpus is recognised as a critical factor in enhancing user experience and platform utility.
			- **Bots and Automated Systems**: Automated systems, including bots, are expected to play a significant role in the future digital landscape. Nostr's open architecture makes it an ideal environment for developing transparent, user-controlled bots, where users retain agency over their deployment and interaction.
			- **Twitter's Transformation and Blue Sky**: The evolution of Twitter, especially under new ownership, reflects the challenges of maintaining a platform as a public company dependent on an advertising model. An earlier initiative, Blue Sky, aimed to create a protocol-based network but ultimately diverged from the optimal direction that Nostr represents today.
			- **Identity Verification and Privacy**: The practice of mass identity verification on platforms like X is criticised for its potential to be exploited by governments to suppress free speech. Although users currently prioritise convenience over privacy, the risks associated with extensive identity verification are significant, particularly in repressive environments.
			- **Security Concerns on Nostr**: While Nostr offers substantial privacy benefits, it faces security challenges, such as the leakage of IP addresses. Addressing these vulnerabilities is crucial to safeguarding activists and other high-risk users, ensuring that Nostr can serve as a secure platform for all.
			- **Public vs. Private Markets for Companies**: The brief considers whether companies should enter public markets, noting that public status imposes challenging incentives that can lead to short-term decision-making at the expense of long-term viability. Staying private may allow companies to maintain focus on core principles and sustainable growth.
			- **Open Protocols vs. Closed Platforms**: There is a strong preference for open protocols over closed platforms. Open protocols like Bitcoin level the playing field for all participants, allowing companies to build successful business models without the constraints imposed by closed, centralised systems.
			- **Nostr's Unique Position**: Nostr is positioned as the most resilient, durable, and stable platform for public conversation. Its decentralised nature ensures that no single entity can remove content, making it a robust alternative to current social media platforms. The platform's openness provides an enduring space for information sharing, immune to external censorship.
			- **Onboarding and User Retention Challenges**: A smooth onboarding experience is crucial for the widespread adoption of Nostr. While the current applications have not fully perfected this process, the diversity within the Nostr ecosystem offers multiple entry points that can attract and retain users. Each app contributes to the overall network, reinforcing the value of the ecosystem as a whole.
			- **Community and Development**: The dedication of the open-source community is pivotal to the development and promotion of technologies like Nostr. The ongoing collaboration and sacrifice by developers and users alike are essential to the success of these decentralised tools. The continued growth and improvement of Nostr and similar platforms depend on the sustained efforts and support of this community.
			- {{video https://www.youtube.com/watch?v=qUwXRDrfJU0}}

  - ### Digital Objects and Decentralised Governance on Nostr
		- Nostr's design centres around the concept of digital objects – encompassing social media posts, maps, and other data structures – owned and controlled by users. These objects are governed not by a central authority but are distributed across the network, ensuring user autonomy and resilience. Nostr maintains the integrity of interactions without central oversight, enabling permissionless and self-sovereign participation. This model ensures that digital objects remain uncapturable and resistant to external coercion. In extreme cases, this decentralised governance is further reinforced by the Bitcoin ledger, providing an immutable record and a final layer of defence against any attempts to undermine the system's integrity.

		- ### Challenges and Future Considerations:
			- **Client adoption:** The success of the new DM spec hinges on its implementation across various Nostr clients. Developers need to integrate the necessary cryptographic functions and session management logic.
			- **Device syncing:** Syncing conversations across multiple devices and clients poses a significant challenge due to the lack of a central server. Potential solutions involve broadcasting messages to multiple sessions and managing separate inboxes for each session.
			- **User experience:** The complexity of the double ratchet system and the potential for out-of-order messages may require careful design considerations to ensure a seamless user experience.

  - #### Margaret Hagan’s Work on Access to Law through AI
		- **Executive Director of the Legal Design Lab**
			- Focuses on making legal services more user-friendly and engaging through design.
			- Launched the Program for Legal Tech & Design at Stanford’s d.school.
		- **Teaching and Workshops**
			- Teaches project-based classes at Stanford Law School.
			- Leads workshops on the design process for legal professionals.
		- **Research and Publications**
			- Explores how AI can improve access to legal help.
			- Advocates for human-centered design in legal tech.

  - #### Ensuring Safeguarding and Privacy Compliance
		- Protecting user privacy and ensuring safeguarding is vital for any
		  digital society platform. The open-source system must be developed in
		  compliance with legislative and cultural norms while maintaining the
		  balance between user privacy and the need for identity verification and
		  data management. The evidence that social media is damaging youth mental
		  health is very compelling.[@haidt2023social] The Centre for Humane
		  Technology call social media the ‘[first contact
		  point](https://www.youtube.com/watch?v=xoVJKj8lcNQ) with AI’. They
		  explains that new technologies often create an arms race. They list the
		  negative impacts of this contact as including “information overload,
		  addiction, doom scrolling, sexualization of kids, shortened attention
		  spans, polarization, fake news, and breakdown of democracy”. These were
		  not the intended consequence of engineers who aimed to maximize
		  engagement. The underlying arms race for attention led to what they call
		  ‘an engagement monster’ that rewrote the rules of society.
		- These lessons should be learnt and the problems should be pro-actively
		  mitigated. This proposal is bfnot a social metaverse, and deliberately
		  limits both numbers of participants and avatar optionality.

  - #### Managing Scalability, Performance, and Latency
		- As the Metaverse continues to grow, it is crucial to ensure that the
		  open-source system can scale effectively and maintain optimal
		  performance. By using distributed and federated networks, the system can
		  better manage latency and performance issues, ensuring a seamless user
		  experience.

  - #### AI and Generative ML Technologies
		- As AI and generative ML technologies continue to evolve, their
		  integration into the Metaverse will further enhance user experiences and
		  create new opportunities for innovation. The release of models like
		  GPT-4 have already prompted debate about general
		  AI[@bubeck2023sparks; @perez2022discovering] (Figure
		  <a href="#fig:rlhf" data-reference-type="ref" data-reference="fig:rlhf">[fig:rlhf]</a>).
		  It seems unavoidable that this will all impact on the Metaverse and
		  digital society.

		  ![image](assets/552f8c9bfcf9305e87b1413ea51637d986ac28dd.png)

  - # NVIDIA Omniverse design
  - **Phase 1: Foundational Infrastructure**
  - **Bitcoin Base Layer (NixOS):**
		- Set up a secure and reliable Bitcoin full node on NixOS.
		- Implement robust backup and recovery procedures.
		- Consider running a Lightning Network node for faster and cheaper transactions.
  - **Identity and Value Management:**
		- Integrate Nostr protocol for decentralized identity and messaging.
		- Develop or utilize existing libraries for Nostr event creation, signing, and relaying.
		- Implement BIP85 hierarchical deterministic wallets for secure key management.
  - **Digital Assets (RGB):**
		- Choose or design appropriate RGB schemas for the types of digital assets you want to support.
		- Develop or utilize tools for issuing and managing RGB assets.
		- Integrate RGB wallets with the overall wallet management system.

		  **Phase 2: Interaction Module (Omniverse):**
  - **Omniverse Environment Setup:**
		- Deploy an Omniverse Nucleus server to manage collaborative scenes and 3D assets.
		- Design and create the initial 3D environment(s) using USD (Universal Scene Description).
		- Consider incorporating elements from your existing visualizations and research.
  - **Agent Integration:**
		- Develop avatar systems for both human and AI agents within Omniverse.
		- Implement controls and interactions for agents within the 3D environment.
		- Explore the use of Omniverse Kit SDK for advanced features and customizations.
  - **Digital Asset Integration:**
		- Develop methods to represent and interact with RGB digital assets within Omniverse scenes.
		- Implement ownership and transfer functionalities based on the underlying Bitcoin/RGB infrastructure.
		- Explore visual representations of ownership and asset metadata within the 3D environment.

		  **Phase 3: AI and Governance:**
  - **AI Agent Development:**
		- Choose or design AI models for different agent archetypes (e.g., governance agents, task agents, social agents).
		- Implement the D&D-inspired personality system and the wealth decay function.
		- Develop AI behaviors and decision-making processes aligned with the scene schema.
  - **Scene Schema and Governance:**
		- Define the rules and constraints for different scene types within a flexible schema framework.
		- Implement the SupraAgent (governance LLM) with its monitoring and evidence collection capabilities.
		- Develop mechanisms for encrypted evidence payloads and communication with relevant parties.
  - **GenAI Integration:**
		- Explore the use of generative AI models (e.g., ChatGPT, Stable Diffusion) for content creation, world-building, and immersive storytelling.
		- Develop interfaces for users and AI agents to interact with GenAI tools within the metaverse.

		  **Phase 4: User Interface and Experience:**
  - **Nostr-based Chat Interface:**
		- Develop a chat interface using Nostr as the communication protocol.
		- Integrate the chat interface within the Omniverse environment.
		- Enable secure and private communication between agents.
  - **Wallet Integration:**
		- Provide users with access to their digital wallets within the metaverse.
		- Enable users to manage their assets, view transaction history, and interact with the virtual economy.
  - **Accessibility and Multimodality:**
		- Explore ways to make the metaverse experience accessible to users with disabilities.
		- Support multiple interaction modalities (e.g., VR, AR, desktop, mobile).

		  **Additional Considerations:**
  - **Security:** Implement robust security measures at all levels, including encryption, access control, and regular security audits.
  - **Privacy:** Ensure user privacy by minimizing data collection and providing transparent privacy settings.
  - **Scalability:** Design the system to be scalable to accommodate a growing number of users and increasing complexity.
  - **Community Building:** Foster a strong community around your metaverse project through open communication, collaboration, and user engagement initiatives.

		- ## Model List
			- ```text
			  Models returned from the OpenWebUI API should be listed here, one model name per line.
			  ```
  - **Select Agent Models**: The user can copy and paste model names into the agent slots here.

  - # My Expectations of Assistant
	  Defer to the user's wishes if they override these expectations:

  - ### Adobe
		- Developed by Adobe, Firefly claims ethical training practices.
			- **Cost**: "Generative cred* system starting from $4.99/month for 100 credits.
			- **User Interface**: Clean, simple web interface, now integrated fully into Photoshop for free.
			- **Strengths**: User-friendly, good for everyday photorealistic images, legal protection.
			- {{video https://www.youtube.com/watch?v=VNs1lW8t4hw}}

  - ### DALL·E 3
		- From [[OpenAI]] , integrated with ChatGPT pro, [integrated with Bing](https://www.bing.com/images/create), built into Swiftkey [[android]] keyboard.
			- ![image.png](assets/image_1704230683869_0.png){:height 700, :width 300}
			- **Cost**: Free on Microsoft’s Bing Image Creator; some free credits. $20 pcm for ChatGPT.
			- **User Interface**: Simple, via Bing Image Creator. Can iteratively build though ChatGPT interface.
			- **Strengths**: Easy to use, understands complex prompts, versatile in image types.
			- **Weaknesses**: Aesthetic quality subjectively different to MidJourney, censorship issues, limited free credits.
			- **Skill Level**: Beginner-friendly.
			- **Some ChatGPT images:** this prompting complexity is extremely hard elsewhere.
			  ChatGPT Dall-E is iterative; Tell it to *keep the same seed"
			- .#.v-gallery-col3
				- ![433f2bd0-ae29-4661-b542-c28fa54c09ff_1702324038829_0.webp](assets/433f2bd0-ae29-4661-b542-c28fa54c09ff_1702324038829_0_1705315472745_0.webp)
				- ![spider.png](assets/spider_1705315548949_0.png)
				- ![slices.png](assets/slices_1705349018973_0.png)
			- ![image.png](assets/image_1704791221902_0.png){:width 600}

  - ### 7.  **OAuth and OpenID Connect (OIDC)**
  - **Overview**: While not decentralized, OAuth and OIDC are standards for authorization and identity verification across the web. They are widely used in web applications to allow users to log in with existing credentials from services like Google, Facebook, and Twitter.
  - **Use Cases**: OAuth and OIDC are used for secure authorization and identity verification across countless web services, providing a smoother user experience while managing access permissions.

  - ## Explicitly develop under a "for profit" model.
		- The primary use case emerging for all this incredibly expensive technology (exempting the AGI narrative) is targeted advertising, pairing very specific user data with very specific products. The platform providers are explicitly interested in [[Hyper personalisation]] of [[AI Video]]
		- In the case of Microsoft, Meta's Llama "open" models and Google's capable "free to use" models this means a *scorched earth* policy where they push AI into all of their apps and ecosystems, ensuring continuity of the user eyeballs that allow them profit. For a while it looked like OpenAI were going to capture so many users that downstream search products built on their system, like Perplexity, would challenge the primacy of the incumbent centralised web providers.
		- This also increasingly means automation, and robotics efficiency; profit though reduction of human workforce which is tax incentivised in the USA.
		- At the very least all of these companies are predicted on an advertising business model, and if the soft power of GenAI is used for advertising then it could be pretty dystopian.
		- All the current law pertaining to this is voluntary, to be clear, business isn't going to stop pursuing this plan because they (not China) signed a form.
		- Post Cambridge Analytica abuse of Social Media there has been NO binding legislation in the half decade after.
		- Governments are far too slow to respond. This will most likely be engaged with through bottom up labour movements like the screen writers guild strike.
		- [Bill Gurley on X: "What’s really happening in the background around AI regulation. https://t.co/2xrdqvdpkE" / X (twitter.com)](https://twitter.com/bgurley/status/1786073617316360670)
			- ![GMlofTGaYAMjN0v.jpeg](assets/GMlofTGaYAMjN0v_1714807755332_0.jpeg){:height 907, :width 1097}

  - ## Technological Advancements and Applications
		- AI hardware advancements leading to more energy-efficient and powerful processing capabilities.
		- The beginning of AI [[Agents]]
			- intentional UX.
			- Having your personal agent, or it's agents, do the online work for you,
			- Bringing back distilled updates to a locally or securely hosted core agent.
			- This will have staggering repercussions for the web as we know it.
			- This is the old [[Death of the Internet]] conspiracy theory, but happening.
		- Semantic and natural language programming
			- In a future where intentional programming user experience (UX) evolves to its next stage, we could envision a scenario where multimodal and language models interface directly with bytecode, driven by semantic instructions from product owners. This approach would represent a significant leap from current programming paradigms, emphasizing a more intuitive, less syntax-heavy interaction with software development.
			- **1. Semantic Instruction and Bytecode Manipulation:**
				- In this future, product owners or non-technical stakeholders could provide instructions in natural language or through other intuitive interfaces.
				- These instructions would be semantically analyzed by advanced language models, capable of understanding the intent and context of the request.
				- The language models would then translate these semantic instructions into bytecode – the lowest-level code executed by the computer's processor.
				- This process bypasses traditional programming languages, allowing for more direct and efficient creation or modification of software functionalities.
			- **2. Multimodal Interfaces:**
				- Multimodal interfaces, incorporating voice, text, and possibly visual or gestural inputs, would make the process more accessible and intuitive.
				- These interfaces would cater to a diverse range of users and preferences, allowing instructions to be given in various formats.
			- **3. Enhanced Collaboration and Iteration:**
				- By enabling product owners to directly communicate their requirements to the software, the gap between idea conception and implementation narrows significantly.
				- This direct communication loop would facilitate rapid iterations, as changes can be implemented and reviewed in real-time or near-real-time.
			- **4. Automated Testing and Validation:**
				- The system would incorporate sophisticated automated testing mechanisms.
				- As soon as the bytecode is generated or modified, a series of automated tests could run to validate the functionality, ensuring that the changes meet the specified requirements and do not introduce bugs or vulnerabilities.
				- Product owners could also perform their own tests on the resultant functionality, using user-friendly testing tools integrated into this system.

  - ## User Friendly Interfaces
		- Platforms like [Leonardo.AI](https://leonardo.ai/), [RunDiffusion](https://rundiffusion.com/) and [Automatic1111's WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) provide intuitive and user friendly interfaces for interacting with Stable Diffusion.

  - ### [CSM AI](https://3d.csm.ai/) - *   The website provides tools for creating 3D models from 2D images using [[artificial intelligence]].
  -   Users can generate 3D assets for various applications, including game development, e-commerce, and augmented reality.
  -   The platform offers a user-friendly [[user experience]] and streamlined workflow for converting images into 3D models.
  -   It supports various image formats and provides options for customising the 3D model's appearance and texture.
  -   It empowers users to generate 3D assets for a range of applications, including gaming, e-commerce, [[design thinking]], prototyping, and augmented reality.
  -   Meshy supports texturing and colour application to 3D models, enhancing their visual appeal and realism.
  -   The service enables [[organisation]] and management of generated 3D models, facilitating efficient workflows and [[collaboration]].
  -   It allows users to share their 3D creations easily, fostering collaboration and feedback from others.
  -   Meshy offers possibilities for customisation and fine-tuning of 3D models, allowing for greater control over the final output.
  -   The platform provides tools for [[optimization]] of 3D models for different platforms and devices, ensuring [[performance]] and compatibility.
		- <iframe src="https://www.meshy.ai/showcase" style="width: 100%; height: 600px"></iframe>

  - ### [StableProjectorz](https://stableprojectorz.com/) - * Stable Projectorz offers immersive, high-quality projector experiences for various settings including homes, businesses, and events.
  - They specialise in portable projectors, offering convenient and versatile viewing solutions.
  - The website features a curated selection of projectors based on performance, features, and customer feedback.

  - The model can generate multiple views of an object from different angles, allowing for a more complete 3D understanding from a single 2D image.

  - Stable Zero123 uses a diffusion model architecture to generate the novel views, resulting in detailed and realistic outputs.

  - This model is useful for various applications including 3D asset creation, virtual reality/augmented reality experiences and e-commerce where users can view products from all angles.

  - The model is readily available for use through the Hugging Face Transformers library, allowing developers to easily integrate it into their workflows.

  - The integration enables users to incorporate 3D object generation into their ComfyUI workflows, potentially for tasks such as object manipulation, virtual environment creation, or 3D asset design.
  - A key feature is the ability to visualise the generated 3D model directly within ComfyUI, offering immediate feedback on the reconstruction quality and supporting [[user experience]] optimisation.
  - The node simplifies the process of using TripoSR by handling the necessary model loading and inference steps, reducing the technical complexity for ComfyUI users through effective [[documentation]].
  - Updates and improvements to the node are regularly made, addressing bugs and optimising [[performance]], and users can contribute with feedback or code contributions.
  - The provided documentation explains how to obtain the required model weights and organise them correctly for the node to function.
  - Support for additional features and customisation options may be added in future updates, enhancing the node's functionality and user experience.
		- **[layerdiffusion/LayerDiffuse](https://github.com/layerdiffusion/LayerDiffuse)** - LayerDiffuse offers a layered diffusion approach for image editing, allowing users to manipulate specific parts of an image rather than the whole thing at once.
  - The method involves decomposing an image into several layers and independently diffusing each layer according to user instructions or prompts.
  - It allows for fine-grained control over image manipulation, such as changing the colour or style of specific objects or regions.
  - The repository provides code, models, and instructions to implement and experiment with LayerDiffuse.
  - The project is designed to organise and improve the editability of images, facilitating more precise and controllable image synthesis workflows.
  - The project uses [[deep learning]] diffusion models as a base, extending their capabilities to provide layered control for improved editing workflows.
  - Users can download pre-trained models and fine-tune them for specific tasks.
  - The provided code and documentation enables [[research]] and developers to further explore and advance the field of layered image manipulation.
  - It introduces a novel approach to image editing by enabling independent diffusion of individual layers based on user prompts.

  - ### **3D Highlighter**
		- [3D Highlighter Website](https://threedle.github.io/3DHighlighter/) - 3DHighlighter is a JavaScript library for highlighting elements on a 3D model displayed in a web browser.
  - It allows developers to easily integrate interactive highlighting functionality into their 3D web applications.
  - The library provides various highlighting styles, including colour changes, outlines, and transparency effects.
  - Developers can organise and customise the highlighting behaviour based on user interactions or application logic.
  - The library offers simple APIs for managing highlighted elements and controlling the visual appearance of the highlights.
  - It supports different 3D model formats and is compatible with popular 3D rendering engines.
  - 3DHighlighter aims to improve [[user experience]] by providing clear visual feedback when interacting with 3D models.
  - The site offers a range of resources, including generators to help create D&D content such as character backstories, non-player characters (NPCs), and adventure hooks.
  - It aims to alleviate writer's block and provide inspiration for game masters who are looking for fresh ideas to incorporate into their campaigns.
  - The website also includes articles and guides that delve into various aspects of D&D, such as character creation and tips for running engaging game sessions.
  - Colour palettes tailored for use in D&D and fantasy settings are available to enhance visual consistency in artwork and designs related to campaigns.
  - Users can organise and plan their D&D campaigns more effectively using the tools and resources available on the site.
  - Overall, it provides a comprehensive platform to aid in creating, organising, and playing D&D games.

  - ### **AGG: Amortized Generative 3D Gaussians**

  - It offers advanced features such as anti-aliasing, sub-pixel accuracy, and gradient meshes.

  - AGG can be used for various applications, including image processing, font rendering, and [[user experience]] interface design.

  - The library is cross-platform and can be compiled on different operating systems.

  - Developers can organise the library according to their specific project needs.


  - ## Understanding the Scope of Accessibility
				- * **Cognitive and Language Barriers:** Users with cognitive disabilities or non-native speakers may find complex language and instructions in software challenging. Simplified language and clear instructions are critical for enhancing accessibility.
				- * **Edge Case:** A user with dyslexia might benefit from using a font designed to reduce letter confusion, such as Dyslexie or OpenDyslexic. Similarly, real-time text-to-speech options can be invaluable for those with severe reading impairments. AI-powered tools, such as text-to-speech generators, can contribute to accessibility by providing more natural and accurate vocalizations.
				- * **Age-Related Impairments:** As the global population ages, designs must account for declining vision, hearing, and motor skills.
				- * **Edge Case:** An elderly user with reduced dexterity and vision may require larger touch targets on touchscreen devices and support for voice commands to interact effectively. AI can help by analysing user behaviour and adjusting the interface to optimize for ease of use, such as automatically increasing font sizes or simplifying navigation based on observed patterns.
		    * **Edge Case:** A VR environment where users navigate through auditory cues rather than visual ones could be beneficial for visually impaired users. For instance, using echolocation or 3D audio mapping to provide context in a game or virtual tour. AI could play a role in generating dynamic auditory descriptions of the virtual environment based on the user's movement and interactions.
		  2. **Auditory Impairments:**
		    * Real-time sign language interpretation and closed captioning are critical for deaf or hard-of-hearing users.
		    * Open metadata standards are needed to support these features across platforms.
		    * **Edge Case:** Implementing haptic feedback in VR gloves to simulate sound vibrations or using visual sound indicators, like flashing lights that correspond to loud noises, can enhance the experience for hearing-impaired users. AI can be used to create real-time subtitles based on audio input and even translate sign language into text or audio. [Liopa](https://liopa.ai/) is a company that has developed AI that can decipher speech by analysing lip movements, providing a vital communication tool for patients who have lost their ability to speak.
		  3. **Physical Disabilities:**
		    * VR headsets and controllers must be designed to accommodate users with limited mobility or dexterity.
		  4. **Cognitive Disabilities:**
		    * Immersive environments should offer simplified navigation and clear, consistent instructions to support users with cognitive impairments.
		    * **Edge Case:** Consider a social media platform where users can fully engage through voice commands, allowing those with severe physical disabilities to post, comment, and interact without the need for traditional input devices. AI can enhance the accessibility of interactive elements by enabling users to interact with them using natural language, gestures, or other alternative methods.

  - ### Executive Summary
		  *   **Centralized Points of Failure and Control:** Platform-centric ecosystems are vulnerable to censorship, de-platforming, and systemic outages. These central authorities act as gatekeepers, controlling the flow of information and value.
		  *   **Inefficiency for the Agentic Economy:** The existing financial infrastructure is ill-suited for the high-volume, low-value microtransactions characteristic of an agent-to-agent economy. High fees and slow settlement times make seamless, automated value exchange impractical.
		  *   **Erosion of Trust:** A persistent lack of transparency and a series of high-profile data breaches have led to a fundamental collapse in user trust, forcing a reliance on cumbersome security measures (e.g., 2FA) that degrade the user experience.
		- To realize this vision, we propose a stack of open, battle-tested protocols that provide the necessary layers for trust, communication, and value.

  - ## Lean Canvas Business Model:
		- Problem: Existing large-scale telecollaboration solutions suffer from poor adoption, limited accessibility, and trust issues. Meanwhile, emerging markets struggle to participate in the growing digital society due to the lack of inclusive tools and infrastructure, limiting access to global talent and new pools of ideas. There is insufficient provision of global talent pipelines for highly technical workflows.
		- Solution: Develop a secure, accessible, and inclusive platform for specialized telecollaboration spaces that seamlessly integrate advanced AI, ML, highly scalable and proven distributed systems, and open-source principles to create a digital society that caters to diverse industries, users globally, and captures global talent and innovative ideas.
		- Value Proposition: Ultra low cost training spaces, accessible 24/7 through very low end hardware. Interact with highly customizable, task-appropriate, and user-friendly specialized telecollaboration spaces supported by specially trained and optimised supportive large language AI models. Multi-lingual for emerging markets, enabling access to untapped global talent and fostering the exchange of diverse ideas.
		- Customer Segments: Initially Universities, but this will scale to be sector specific, catering to the global training, research, biomedical, and creative industries, with a special focus on empowering users in emerging markets such as Africa and India, and connecting them with worldwide opportunities and resources.
		- Revenue Streams: Tiered subscription plans to accommodate various user needs and budgets, as well as tailored enterprise solutions for large-scale clients. Bespoke consulting and support trending toward software as a service at scale.
		- Key Metrics: Track user growth, engagement, and retention, successful collaborations across industries, the platform's positive impact on users in emerging markets, and the effectiveness of global talent capture and idea exchange.
		- Unfair Advantage: The team's extensive experience in telecollaboration research, AI, ML, and a deep understanding of the complex landscape of emerging technologies, including highly scalable and proven distributed systems, provide a unique edge in creating a game-changing platform for specialized telecollaboration spaces that are secure, trusted, and tailored to diverse user needs while enabling access to global talent and innovative ideas.

  - ### Managing Scalability, Performance, and Latency:
		- As the Metaverse continues to grow, it is crucial to ensure that the open-source system can scale effectively and maintain optimal performance. By using distributed and federated networks, the system can better manage latency and performance issues, ensuring a seamless user experience.
		- The creation of an open and economically empowered Metaverse, in which AI actors can mediate governance issues and participate in economic transactions, can lead to a more efficient and dynamic digital ecosystem. This integration will enable new business models and opportunities for all users, both human and AI.

						- #### Reputation Management
							- Tracking and evaluating user behavior and trustworthiness.
							- Example Linked-JSON snippet:
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#subClassOf": [
								      {
								        "@id": "narrativegoldmine:MetaverseEntity"
								      },
								      {
								        "@id": "_:N7734f53c103846fba0f7f099a17df575"
								      },
								      {
								        "@id": "_:Nd9e50a6e98a54130bbc92b9a80ca3bfb"
								      }
								    ]
								  }
								  ```
								- ```json
								  {
								    "@id": "narrativegoldmine:regulatedBy",
								    "@type": [
								      "http://www.w3.org/2002/07/owl#ObjectProperty"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#domain": [
								      {
								        "@id": "narrativegoldmine:VirtualEconomy"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#range": [
								      {
								        "@id": "narrativegoldmine:EconomicPolicy"
								      }
								    ]
								  }
								  ```

		- ## No, Really, What are Agents
			- I have given up following the debate because in a way it doesn't matter. As a good heuristic
				- Agents
					- Tool use
				- User preferences and personalisation data
				- Historical conversation context
				- Current date, time, and environmental information
				- Tool definitions and available functions

  - ### Nostr Integration
		- User's device includes a [[Nostr protocol]] client to interact with the decentralised Nostr network.
		- These hashes are used to pull personalised marketing content from the Nostr network.

  - ### Nostr Network Distribution and Support
		- Marketers distribute product variations across a cloud of [[Nostr]] servers, each variation associated with a unique Nostr event containing metadata and content.
		- The Nostr servers act as a decentralised storage and distribution network for marketing content.
		- Advertisers and brand leaders support the Nostr network by subsidising network nodes, helping maintain network infrastructure and incentivising node operators.
		- The matched product variations are then returned to the user's device via the Nostr network, ensuring the marketer has no direct access to the user's personal information or identity.

		- #### User Privacy

		- ### Integration and User Experience
		- Implement clear communication and opt-in mechanisms for transparency and user control.

		- #### Measurement and Analytics
		- The exploration of privacy-preserving measurement techniques allows for aggregate insights without compromising individual user privacy.
		- Collaboration with the Nostr community and stakeholders will refine the system's design and drive adoption.
		- Advanced AI and ML techniques will enhance [[Hyper personalisation]] and DCO capabilities, fostering a thriving ecosystem benefiting from a privacy-focused approach. -

  - ### Analysing Customer Feedback
		- *Task:* Extract insights from customer interactions (like sales calls or support tickets) to understand needs and improve products/services.
		- **Buildbetter.ai**
			- *Description:* AI platform that analyses customer call recordings to generate reports, extract key insights, and create detailed user personas based on actual feedback.
			- *Cost:* Check website for pricing details (likely subscription).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[BuildBetter.ai](https://buildbetter.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

  - ## Case Study: CrowdStrike Global Outage
			- The recent CrowdStrike global outage had far-reaching effects across various sectors:
				- **Banks and Finance**: Institutions such as Bendigo Bank, ANZ, Commonwealth Bank, and Bank of Queensland faced significant issues, evidenced by numerous user reports on Downdetector ([AP News](https://apnews.com/live/internet-global-outage-crowdstrike-microsoft-downtime)).

		- #### User Behaviour and Adoption
			- A critical factor in the success of AI-driven search engines will be user adoption. While AI-enhanced search engines promise more accurate and contextually relevant results, there remains scepticism about whether users will transition from well-known traditional search engines like Google. Improvements in AI capabilities must demonstrate a substantial enhancement in user experience to effectively drive this behavioural shift.

		- ### **4. Availability**
			- Standards specifications are made accessible to all for implementation and deployment. Affirming standards organizations have defined procedures to develop specifications that can be implemented under fair terms. Given market diversity, fair terms may vary from royalty-free to fair, reasonable, and non-discriminatory terms (FRAND).
				- photorealistic content authoring
				- geospatial systems
				- end-user content tooling
				- digital twins
				- real-time collaboration
				- physical simulation
				- online economies
				- multi-user gaming
				- new levels of scale and immersiveness.
			- It's not a useless list by any means, but it lacks the kind of product focus we need for detailed exploration of value and trust transfer.
			- Mystakidis identifies the following [155]:
				- Principles
					- Interoperable
					- Network
				- Technologies
					- Mixed reality
				- Affordances
					- Ethics
					- Privacy
				- This is quite an academic list. A lot of these words will be explored in the next section which is more of an academic literature review.
				- Nevelsteen attempted to identify key elements for a ‘virtual work’ in 2018 and these are relevant now, and described rigorously in the appendix of his
				  paper [156]:
					- Shared Temporality, meaning that the distributed users of the virtual world share the same frame of time.
					- Real time which he defines as “not turn based”.
					- Avatar is interesting as it might seem that having avatar representations of connected human participants is a given. In fact the shared spaces employed by Nvidia for digital engineering do not.
				- Turning to industry; John Riccitiello, CEO of Unity Technologies says that metaverse is “The next generation of the internet that is:
					- always real-time
					- mostly 3D
					- mostly interactive
					- mostly social
					- mostly persistent
					- Social first
					- Real time interactive 3d graphics first
					- Supports user generated content [157]
					- Open and extensible
			- Horizon Worlds is the Meta (Facebook) meteverse, and Workrooms it’sbusiness offering and a subset of the “Worlds” global system. It iscurrently a walled garden without connection to the outside digitalworld, and arguably not therefore a metaverse.
			- The Financial Times [took a look](needs a link) at their patent applications and noted that the travel is toward increased user behaviour tracking, and targeted advertising.
			- Facebook actually have a poor history on innovation and diversification of their business model. This model has previously been tracking users to target ads on their platform, while increasing and maintaining attention using machine learning algorithms.
			- It makes complete sense then to analyse the move by Meta into 3D socialspaces as an attempt to front run the technology using their hugeinvestment capacity. Facebook have recently taken a huge hit to theirshare price. Nothing seems to have changed in the underling businessexcept Zuckerberg’s well publicised shift to supporting a money losinggamble on the Metaverse. It is by no means clear that users want this,that Meta will be able to better target ads on this new platform, orthat the markets are willing to trust Zuckerburg on this proactive move.
			- With all this said the investment and management capacity and capabilityat Meta cannot be dismissed. It is very likely that Meta will be able torapidly deploy a 3D social space, and that it’s development willcontinue to be strong for years. The main interface for Horizon Worldsis through the Meta owned and developer Oculus headset, which isexcellent and reasonably affordable. It has been quite poorly received[byreviewers](https://kotaku.com/facebook-metaverse-horizon-worlds-vr-oculus-quest-2-cha-1848436740)but will likely improve, especially if users are encouraged to innovate.

		- #### More like crypto NFT virtual land
		- This next three are a placeholder taking text from the [linkedsite](https://www.analyticsinsight.net/top-10-metaverse-platforms-that-will-replace-social-media-in-future/)and will be swapped out: The digital land [narrative isfading](https://www.coindesk.com/markets/2022/04/06/metaverse-majors-struggle-as-user-base-falls-short-of-market-expectations/?).

		- ##### Sandbox
			- The Sandbox, a decentralized gaming platform built on the Ethereumblockchain, has garnered attention for its promise of a vibrantecosystem filled with user-generated content. However, despite itsambitious vision, the project has faced various challenges andcriticisms similar to Decentraland. Limited use cases and adoptionremain a significant challenge for The Sandbox. While the platform aimsto create a vast and engaging gaming ecosystem, it has yet to gainwidespread adoption, leading to a limited number of users anddevelopers. This lack of user engagement raises questions about thelong-term viability of the project, as the value of virtual land,assets, and in-game experiences may remain limited without a thrivingcommunity. Like Decentraland it is a manipulated hype bubble, attractingglowing paid press reports in some media, and ‘interest’ from nationaland regional ‘branches’ of global brands which are then spun to createartificial hype in main stream media. The tradable NFTs within theseearly platforms are obviously subject to insider trading, pricevolatility, wash trading, and other harmful activities.
			- The Sandbox places too much emphasis on the speculative aspect ofvirtual land and asset trading, rather than focusing on creating agenuinely engaging gaming ecosystem. This focus on speculation couldlead to an unsustainable bubble with inflated asset prices, and it seemslikely we have already seen most of the collapse of this ecosystem.
			- The actual experience of interacting with The Sandbox’s gaming productsleaves much to be desired. For instance, the platform’s games may sufferfrom lag and poor performance due to the technical limitations ofblockchain technology. Additionally, the quality of user-generatedcontent can be highly variable, as not all creators possess the skillsand resources to develop engaging gaming experiences. As a result, usersmight find themselves sifting through a plethora of low-quality games,which can be frustrating and time-consuming.
			- Concerns about centralization persist, as some critics argue that theproject is not entirely decentralized. The team behind The Sandbox stillholds a significant amount of control over the platform’s developmentand governance, potentially undermining the project’s core vision of adecentralized gaming ecosystem.

		- ##### Space Somnium
			- Somnium Space is just another one of these, but with more VR. It allowsusers to join in either through a downloadable VR client or abrowser-based version to function like any other web app. It sufferedthe same problems at Decentraland and Sandbox. They are terribleproducts, with hype, manufactured by money, extracted from users, oftenconvinced by paid celebrity endorsements. It’s the NFT space, butsadder, and technically worse, and likely not for very much longer.

  - ##### Spatial
		- Spatial is worth a quick look because it’s a business first meetingtool, and comparatively well received by industry for that purpose.
		- - Very compelling. Wins at wow.
		- - Great avatars, user generated
		- - AR first design
		- - Limited scenes
		- - Smaller groups (12?)
		- - Limited headset support
		- - Intuitive meeting support tools
		- - No back end integration

  - ##### MeetinVR
		- Good enough graphics, pretty mature system
		- OK indicative avatars, user selected
		- VR first design
		- Limited scenes
		- Smaller groups (12?)
		- Quest and PC
		- Writing and gestures supported
		- Some basic enterprise tools integration
		- Bring in 3D objects
		- Need to apply for a license?

  - ##### Engage
		- Fully customisable avatars
		- Presentation to groups for education and learning
		- PC first, quest is side loadable but that’s a technical issue
		- up to 12 user

  - ##### Unfair distribution
		- By design the distribution of Bitcoin is likely ‘fair‘, in that everyone has been able to access and secure the asset long term without prejudice. This image from Twitter user @Geertjancap shows the distribution in 2021. Whether this is judged to be fair if the asset jumps to 10 times it’s current value, minting a new class of hyper rich holders, is another matter.
		- ![](./assets/3c46c793cd3e9cdedc88623cafee35ef0ac7ebf0.jpg)
		- https://twitter.com/Geertjancap/status/1380972132990136322/photo/1

			- ##### Monetisation of User Generated Content:
				- Games as a NFT’s offer ability to monetise UGC: User generated content.Video games such as [Nintendo’s *PokemonGo*](https://www.businessofapps.com/data/pokemon-go-statistics/) *(166million players)*, [Bungie’s *Destiny2*](https://techacake.com/destiny-2-player-count/#:~:text=The%20total%20player%20base%20of,to%20be%2038%20million%20players.&text=According%20to%20the%20source%2C%20the,in%20terms%20of%20player%20population.)*(38 million players)* or [miHoYo’s GenshinImpact](https://fictionhorizon.com/how-many-people-play-genshin-impact/#:~:text=Genshin%20Impact%20had%20approximately%209,million%20users%20in%20June%202021.)(*9 million players* ) all have large, established and significantplayer bases. What is noteworthy, the games are designed to encourageplayers may spend hundreds, or in some cases thousands of hours on onegame alone; according to[Destinytracker.com](https://destinytracker.com/destiny/leaderboards/all/minutesplayedtotal?grouped=true&page=1),the top players have amassed total play times over 20,000 hours, closeto 1,000 days or asciitilde 3 years, which is incredible feat givenDestiny 2 only launched 5 years ago in 2017.
				- This use case is where our focus lies, as it is now far easier for users to generate content with the support of AI. Note that ideas also can count as content.

  - ### DID principles
		- The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ### Nostr
		- Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
		- Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
			- it’s lightweight, with minimal network overhead and complexity
			- it’s real-time using websockets
			- there are multiple usable libraries and tools
			- it’s under active development with an excellent team. The lead, ‘Fiatjaf’ is one of the most [prolific developers](https://github.com/fiatjaf) in the lightning space.
			- it’s based on the same underlying cryptographic technology we are using elsewhere, indeed with it’s use of Bitcoin keys the identity system is global
			- it provides the identity proof that we need to validate users and objects into a virtual space
  - web 
	  -> webid (identity) 
	  -> solid (social) -> solid lite (lite,modern,working 
	  -> nosdav (add nostr, and mastodon etc.)
  - Repeat section?
  - Distributed Identity & Trust----------------------------
  - For distributed Web3, and by extension metaverse applications toflourish it is necessary to solve the identificationproblem.[[king1966fisher]] Without a [solution tothis](https://joshgans.medium.com/web3-isnt-going-to-work-without-identification-6aa776d674)bots, scammers, and AI actors will reduce usefulness and usability ofand already quite arcane user experience.
  - This chapter is an oddity because most of traditional DID/SSI isn’treally fit for purpose. Distributed self sovereign identity has a greatelevator pitch though. Individuals should be empowered throughtechnology to manage their own data, without manipulation orexploitation by centralised corporate behemoths. In practice it’s astaggeringly complex proposition which increases risk to the individual,decreases convenience, and despite much work, does not even make muchsense in it’s own terms. Webs of trust are viable so this means Nostr,[Marking](https://github.com/project-bitmark/marking/wiki#marking), orpubky which will be discussed, but are early products.

  - ### [OpenWebUI](https://openwebui.com/)
		- A user-friendly web interface for interacting with large language models.

  - ##### Spatial operating systems
		- - Enabling users to design experiences not previously possible.
		- - The presentation outlines how to keep apps familiar, be human-centered, take advantage of space, enhance immersion, and make apps authentic to the platform.
		- - The world serves as an infinite canvas for new apps and games.
		- - Existing app elements should be kept familiar with common elements like sidebars, tabs, and search fields.
		- - In a spatial platform, interfaces are placed within windows to make them easily accessible and part of the user’s surroundings.
		- - Good spatial design places the user at the center, accounting for their field of view and movement.
		- - The most important content should be placed in the center of the field of view and use landscape layouts.
		- - Ergonomics should also be considered, placing content along a natural line of sight for comfort.
		- - Designers should avoid placing content behind users or anchoring content to their view as it can be disorienting.
		- - Spatial design should aim to create stationary experiences that require minimal movement from users.

		- ##### User Mobility
		- The presentation emphasizes the importance of designing applicationsthat require minimal movement from users. It recommends usingsystem-level recentering methods to adjust the app’s view when a usermoves.

  - ### Animation: Breathing Life into Digital Characters
		- Bringing digital characters to life requires compelling animation. This section explores projects and resources focused on achieving realistic and expressive character movement.
			    * [ComfyUI Nodes for LivePortrait (GitHub Repository)](https://github.com/kijai/ComfyUI-LivePortraitKJ?tab=readme-ov-file): ComfyUI nodes designed for LivePortrait.
			  * [CLARA2 (GitHub Repository)](https://github.com/0xMatthew/CLARA2): A 3D-rendered AI agent designed to present PowerPoint presentations.
			  * [Consistent Character API (Replicate)](https://replicate.com/fofr/consistent-character): An API for running fofr's consistent character model.
			  * [Joystick-Controlled Character Manipulation (Twitter)](https://x.com/JungleSilicon/status/1798457212291150189): A concept for manipulating character features using a joystick.
			  * [Volucap Authentic Digital Avatars](https://volucap.com/): A company specialising in creating authentic digital avatars.
			  * [ComfyUI Character Turntable with SV3D (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1bme62y/comfyui_creating_a_character_turntable_with_sv3d/): A discussion on creating character turntables using ComfyUI and SV3D.
			  * [Animating Characters for Free (LinkedIn Post)](https://www.linkedin.com/posts/jacques-alomo_animate-any-character-now-for-free-activity-7177666734957420544-N7v9/?utm_source=share&utm_medium=member_android): A post highlighting methods for animating characters for free.
			  * [Midjourney Character Reference Feature (Medium Article)](https://degennfts.medium.com/new-midjourney-feature-character-reference-oppenheimer-example-906750d53d3f): An article exploring Midjourney's Character Reference feature.
			  * [Full-Character Consistency with SDXL (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1azn5lq/an_attempt_at_full-character_consistancy_sdxl/): A discussion on achieving full-character consistency using SDXL.
			  * [Create Bot Emotions (Miku.gg Documentation)](https://docs.miku.gg/guides/bots/create-bot-emotions/): Documentation on creating bot emotions within the Miku.gg platform.
			  * [Consistent Emotions on a Character with ComfyUI (Reddit User)](https://www.reddit.com/user/iwantofftheride00/): A Reddit user's plans to publish a method for achieving consistent emotions on a character using ComfyUI.
			  * [BakedAvatar](https://buaavrcg.github.io/BakedAvatar/): A project focused on avatar creation.
			  * [Dreamtalk (GitHub Repository)](https://github.com/ali-vilab/dreamtalk): The official implementation of Dreamtalk, focusing on expressive talking head generation.
			  * [CharTurnerBeta LoRA (Civitai)](https://civitai.com/models/7252/charturnerbeta-lora-experimental): A LoRA for multi-direction consistency in Stable Diffusion character generation.
			  * [VividTalk](https://humanaigc.github.io/vivid-talk/): A project focused on one-shot audio-driven talking head generation.
			  * **Gaussian-Based Avatars (Hugging Face Papers):**
			    * [Relightable Gaussian Codec Avatars](https://huggingface.co/papers/2312.03704): Research on using Gaussian codecs for avatar representation.
			  * [GAIA (Microsoft)](https://microsoft.github.io/GAIA/): A project from Microsoft exploring advanced avatar technologies.

			  This meticulously curated collection offers a comprehensive overview of the dynamic field of digital human and avatar creation. Explore, learn, and contribute to the ongoing evolution of this exciting frontier!

  - ### Visualising
		- http://owlgred.lumii.lv/online_visualization/4qge#
		- [[Some legacy Linked-JSON]]
          rdfs:comment "A general actor capable of autonomous or semi-autonomous behavior, including humans and AIs."
          hasSkillProfile SkillProfile
          hasPrivacySetting PrivacySetting
          hasReputationScore ReputationScore
          hasWallet DigitalWallet
          hasInteractionPreference InteractionPreference
      }

      class AIAgent {
          rdfs:label "AI Agent"
          rdfs:comment "An agent driven by AI models, with specialized capabilities for autonomy and decision-making."
          hasAIModel AIModel
          decayFunction xsd:string
      }

      class HumanAgent {
          rdfs:label "Human Agent"
          rdfs:comment "A real human user. May be linked to a WebID for decentralized identity and authentication."
      }

      class AIModel {
          rdfs:label "AI Model"
          rdfs:comment "The underlying neural network or algorithm powering an AI Agent's intelligence."
      class SkillProfile {
          rdfs:label "Skill Profile"
          rdfs:label "Digital Wallet"
          rdfs:comment "Holds digital assets, cryptocurrencies, or tokens owned by an agent."
      }

      class InteractionPreference {
          rdfs:label "Interaction Preference"
          rdfs:comment "Specifies how an agent prefers to interact, moderate content, or engage with others."
      }


  %% -----------------------------------------------------------------------
  %% 2. WEBID SUBCATEGORY: Decentralized Identity & Events
  %% -----------------------------------------------------------------------
      class WebIDEntity {
          rdfs:comment "A conceptual parent for all objects in the WebID ecosystem."
      class Person {
          rdfs:label "Person"
          banner xsd:anyURI "URI of the user’s banner image"
          website xsd:anyURI "User’s personal website"
      }

      class WebIDEvent {
          rdfs:label "WebID Event"
          rdfs:comment "A decentralized or semi-decentralized service endpoint that stores or routes WebID events."
          serviceURI xsd:anyURI "The endpoint (e.g., HTTPS, WebSocket) providing service functionality"
      }


  %% -----------------------------------------------------------------------
  %% 3. IMMERSIVE REAL-TIME SUBCATEGORY
  %% -----------------------------------------------------------------------
      class ImmersiveRealTimeEntity {
      class ImmersiveScene {
          rdfs:label "Immersive Scene"
          rdfs:comment "A real-time interactive environment or 'scene' supporting multi-agent presence."
          governedBy GovernanceStructure

  - ### Frameworks for Decision-Making
		- [[Agents]] can mitigate psychological friction by automating repetitive micropayment approvals.
		- For example, they might pre-authorise low-value transactions (e.g., API queries or short IoT data bursts) based on user-defined spending thresholds.

		- ### Real-time Collaboration
			- Multi-user editing: Multiple users can simultaneously work on the same USD scene or asset, with changes being synchronized in real-time
			- Asset versioning: Nucleus Server maintains a version history of USD files and assets, allowing users to track changes over time
			- Branching and merging: Users can create separate branches of USD files for experimentation or parallel development, and merge changes back into the main branch
			- File locking: Nucleus Server supports file locking to prevent conflicts and ensure exclusive access to assets when needed

  - # Notes and Other Stuff by Relays
  - Nostr [pronounced no-star] is a decentralized open protocol that aims to improve the social media experience by addressing issues of censorship and data collection. The protocol operates by allowing users to post and view notes on servers called relays, and view and post these notes through apps called clients. The open nature of the protocol allows for competition and a free flow of information, as users can choose to use different relays or clients if they are censored. This is because the protocol is decentralized and controlled by no one.
  - The decentralized nature of Nostr means that there is no central authority that can control the flow of information. This is achieved through the use of relays and clients, which are run by different individuals or entities. Users have the freedom to choose which relays and clients they want to use, and as a result, their feeds are populated with content from the people they choose to follow. If a relay or client tries to censor a user, they can simply switch to a different one. This is a major advantage over traditional centralized social media platforms where one entity holds all the control over the flow of information and can censor or manipulate the content that users see.
			- Taking Twitter private was the only way to implement the changes needed to make it a true internet company with a focus on protocol, service, and business.
			- Dorsey argues that social media companies cannot remain censorship-resistant without moving to open protocols, as centralized platforms will always be vulnerable to pressure from advertisers and governments.
			- He believes that truly decentralized protocols like Nostr, which have no central point of control, are the future of free speech on the internet.
			- **Open Source Development Philosophy**: The foundational principles of early internet development were rooted in open-source philosophy, where transparency of code and open APIs facilitated widespread innovation. This approach, akin to a "bazaar" rather than a "cathedral," advocates for a decentralised system to operate alongside existing centralised models. This ensures resilience and the availability of alternatives when centralised systems encounter failures.
			- **Censorship Resistance and Bitcoin**: Censorship resistance is a critical aspect, particularly within the context of Bitcoin and open platforms like Nostr. Despite the widespread discussion on this topic, there is an observed gap between rhetoric and daily usage. The infrastructure must be robust and prepared to support billions of users when the demand for censorship-resistant platforms increases.
			- **Nostr vs. Twitter (X)**: Nostr is positioned as a superior platform to Twitter (now X) due to its open and permissionless nature. The focus shifts from merely counting user numbers to assessing the quantity and quality of information on the platform. The role of algorithms in organising this vast information corpus is recognised as a critical factor in enhancing user experience and platform utility.
			- **Bots and Automated Systems**: Automated systems, including bots, are expected to play a significant role in the future digital landscape. Nostr's open architecture makes it an ideal environment for developing transparent, user-controlled bots, where users retain agency over their deployment and interaction.
			- **Twitter's Transformation and Blue Sky**: The evolution of Twitter, especially under new ownership, reflects the challenges of maintaining a platform as a public company dependent on an advertising model. An earlier initiative, Blue Sky, aimed to create a protocol-based network but ultimately diverged from the optimal direction that Nostr represents today.
			- **Identity Verification and Privacy**: The practice of mass identity verification on platforms like X is criticised for its potential to be exploited by governments to suppress free speech. Although users currently prioritise convenience over privacy, the risks associated with extensive identity verification are significant, particularly in repressive environments.
			- **Security Concerns on Nostr**: While Nostr offers substantial privacy benefits, it faces security challenges, such as the leakage of IP addresses. Addressing these vulnerabilities is crucial to safeguarding activists and other high-risk users, ensuring that Nostr can serve as a secure platform for all.
			- **Public vs. Private Markets for Companies**: The brief considers whether companies should enter public markets, noting that public status imposes challenging incentives that can lead to short-term decision-making at the expense of long-term viability. Staying private may allow companies to maintain focus on core principles and sustainable growth.
			- **Open Protocols vs. Closed Platforms**: There is a strong preference for open protocols over closed platforms. Open protocols like Bitcoin level the playing field for all participants, allowing companies to build successful business models without the constraints imposed by closed, centralised systems.
			- **Nostr's Unique Position**: Nostr is positioned as the most resilient, durable, and stable platform for public conversation. Its decentralised nature ensures that no single entity can remove content, making it a robust alternative to current social media platforms. The platform's openness provides an enduring space for information sharing, immune to external censorship.
			- **Onboarding and User Retention Challenges**: A smooth onboarding experience is crucial for the widespread adoption of Nostr. While the current applications have not fully perfected this process, the diversity within the Nostr ecosystem offers multiple entry points that can attract and retain users. Each app contributes to the overall network, reinforcing the value of the ecosystem as a whole.
			- **Community and Development**: The dedication of the open-source community is pivotal to the development and promotion of technologies like Nostr. The ongoing collaboration and sacrifice by developers and users alike are essential to the success of these decentralised tools. The continued growth and improvement of Nostr and similar platforms depend on the sustained efforts and support of this community.
			- {{video https://www.youtube.com/watch?v=qUwXRDrfJU0}}

  - ### Digital Objects and Decentralised Governance on Nostr
		- Nostr's design centres around the concept of digital objects – encompassing social media posts, maps, and other data structures – owned and controlled by users. These objects are governed not by a central authority but are distributed across the network, ensuring user autonomy and resilience. Nostr maintains the integrity of interactions without central oversight, enabling permissionless and self-sovereign participation. This model ensures that digital objects remain uncapturable and resistant to external coercion. In extreme cases, this decentralised governance is further reinforced by the Bitcoin ledger, providing an immutable record and a final layer of defence against any attempts to undermine the system's integrity.

  - #### Margaret Hagan’s Work on Access to Law through AI
		- **Executive Director of the Legal Design Lab**
			- Focuses on making legal services more user-friendly and engaging through design.
			- Launched the Program for Legal Tech & Design at Stanford’s d.school.
		- **Teaching and Workshops**
			- Teaches project-based classes at Stanford Law School.
			- Leads workshops on the design process for legal professionals.
		- **Research and Publications**
			- Explores how AI can improve access to legal help.
		- [Panelist at a national event discussing AI’s implications for equitable legal services](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4582745)[3](https://justiceinnovation.law.stanford.edu/american-academy-event-on-ai-equitable-access-to-legal-services/).

		   For more detailed information on her research and publications, you can visit her [Stanford Law School profile](https://law.stanford.edu/margaret-hagan/) and the [Legal Design Lab website](https://justiceinnovation.law.stanford.edu/american-academy-event-on-ai-equitable-access-to-legal-services/). Her work continues to push the boundaries of how AI can be leveraged to enhance the accessibility and effectiveness of legal services.

  - #### Managing Scalability, Performance, and Latency
		- As the Metaverse continues to grow, it is crucial to ensure that the
		  open-source system can scale effectively and maintain optimal
		  performance. By using distributed and federated networks, the system can
		  better manage latency and performance issues, ensuring a seamless user
		  experience.

  - #### AI and Generative ML Technologies
		- As AI and generative ML technologies continue to evolve, their
		  integration into the Metaverse will further enhance user experiences and
		  create new opportunities for innovation. The release of models like
		  GPT-4 have already prompted debate about general
		  AI[@bubeck2023sparks; @perez2022discovering] (Figure
		  <a href="#fig:rlhf" data-reference-type="ref" data-reference="fig:rlhf">[fig:rlhf]</a>).
		  It seems unavoidable that this will all impact on the Metaverse and
		  digital society.

		  ![image](assets/552f8c9bfcf9305e87b1413ea51637d986ac28dd.png)

  - # NVIDIA Omniverse design
		- Integrate Nostr protocol for decentralized identity and messaging.
		- Develop or utilize existing libraries for Nostr event creation, signing, and relaying.
		- Implement BIP85 hierarchical deterministic wallets for secure key management.
  - **Digital Assets (RGB):**
		- Choose or design appropriate RGB schemas for the types of digital assets you want to support.
		- Develop or utilize tools for issuing and managing RGB assets.
		- Consider incorporating elements from your existing visualizations and research.
  - **Agent Integration:**
		- Develop avatar systems for both human and AI agents within Omniverse.
		- Implement controls and interactions for agents within the 3D environment.
		- Explore the use of Omniverse Kit SDK for advanced features and customizations.
  - **Digital Asset Integration:**
		- Implement ownership and transfer functionalities based on the underlying Bitcoin/RGB infrastructure.
  - **GenAI Integration:**
		- Explore the use of generative AI models (e.g., ChatGPT, Stable Diffusion) for content creation, world-building, and immersive storytelling.
		- Develop interfaces for users and AI agents to interact with GenAI tools within the metaverse.

		  **Phase 4: User Interface and Experience:**
  - **Nostr-based Chat Interface:**
		- Develop a chat interface using Nostr as the communication protocol.
		- Integrate the chat interface within the Omniverse environment.
		- Enable secure and private communication between agents.
  - **Wallet Integration:**
		- Provide users with access to their digital wallets within the metaverse.
		  **Additional Considerations:**
  - **Security:** Implement robust security measures at all levels, including encryption, access control, and regular security audits.
  - **Privacy:** Ensure user privacy by minimizing data collection and providing transparent privacy settings.
  - **Scalability:** Design the system to be scalable to accommodate a growing number of users and increasing complexity.
  - **Community Building:** Foster a strong community around your metaverse project through open communication, collaboration, and user engagement initiatives.
		- **Identity and Value Management:**
		- **Integrate Nostr protocol for decentralized identity and messaging.**
		- **Develop or utilize existing libraries for Nostr event creation, signing, and relaying.**
		- **Implement BIP85 hierarchical deterministic wallets for secure key management.**
		- **Digital Assets (RGB):**
		- **Choose or design appropriate RGB schemas for the types of digital assets you want to support.**
		- **Design and create the initial 3D environment(s) using USD (Universal Scene Description).**
		- **Consider incorporating elements from your existing visualizations and research.**
		- **Agent Integration:**
		- **Develop avatar systems for both human and AI agents within Omniverse.**
		- **Implement controls and interactions for agents within the 3D environment.**
		- **Explore the use of Omniverse Kit SDK for advanced features and customizations.**
		- **AI Agent Development:**
		- **Choose or design AI models for different agent archetypes (e.g., governance agents, task agents, social agents).**
		- **Implement the D&D-inspired personality system and the wealth decay function.**
		- **Develop AI behaviors and decision-making processes aligned with the scene schema.**
		- **Scene Schema and Governance:**
		- **Define the rules and constraints for different scene types within a flexible schema framework.**
		- **Develop mechanisms for encrypted evidence payloads and communication with relevant parties.**
		- **Develop a chat interface using Nostr as the communication protocol.**
		- **Integrate the chat interface within the Omniverse environment.**
		- **Enable secure and private communication between agents.**
		- **Wallet Integration:**
		- **Provide users with access to their digital wallets within the metaverse.**
		- **Enable users to manage their assets, view transaction history, and interact with the virtual economy.**
		- **Privacy:** Ensure user privacy by minimizing data collection and providing transparent privacy settings.
		- **Scalability:** Design the system to be scalable to accommodate a growing number of users and increasing complexity.
		- **Community Building:** Foster a strong community around your metaverse project through open communication, collaboration, and user engagement initiatives.

		  **This development plan provides a roadmap for implementing your metaverse vision, step by step. By focusing on the core principles of your research and leveraging innovative technologies like Bitcoin, RGB, Nostr, and Omniverse, you are building a foundation for a truly unique and transformative metaverse experience.**

  - # My Expectations of Assistant
	  Defer to the user's wishes if they override these expectations:

  - ## User Friendly Interfaces
		- Platforms like [Leonardo.AI](https://leonardo.ai/), [RunDiffusion](https://rundiffusion.com/) and [Automatic1111's WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) provide intuitive and user friendly interfaces for interacting with Stable Diffusion.

			- ### 2. **Grounded in Private Datasets**
				- **Nostr Authentication**: Decentralized, key-based auth ensures user control without centralized identity providers.
				- **End-to-End Encryption**: Sensitive data (e.g., API keys, user sessions) is encrypted at rest and in transit.
				- **Business Intelligence**: Model organizational knowledge; analysts can query and refine in real time.
				- **Creative Collaboration**: Teams co-edit graphs; AI agents generate ideas, documentation, or prototypes.
				- **Education**: Interactive 3D mind maps; students collaborate with AI tutors on private notes.
			- Its modular architecture allows custom extensions, making it pliable for any problem requiring human-AI synergy on private data.

  - ### [CSM AI](https://3d.csm.ai/) - *   The website provides tools for creating 3D models from 2D images using [[artificial intelligence]].
  -   Users can generate 3D assets for various applications, including game development, e-commerce, and augmented reality.
  -   The platform offers a user-friendly [[user experience]] and streamlined workflow for converting images into 3D models.
  -   It supports various image formats and provides options for customising the 3D model's appearance and texture.
  -   It empowers users to generate 3D assets for a range of applications, including gaming, e-commerce, [[design thinking]], prototyping, and augmented reality.
  -   Meshy supports texturing and colour application to 3D models, enhancing their visual appeal and realism.
  -   The service enables [[organisation]] and management of generated 3D models, facilitating efficient workflows and [[collaboration]].
  -   It allows users to share their 3D creations easily, fostering collaboration and feedback from others.
  -   Meshy offers possibilities for customisation and fine-tuning of 3D models, allowing for greater control over the final output.

  - ### [StableProjectorz](https://stableprojectorz.com/) - * Stable Projectorz offers immersive, high-quality projector experiences for various settings including homes, businesses, and events.
  - They specialise in portable projectors, offering convenient and versatile viewing solutions.
  - The website features a curated selection of projectors based on performance, features, and customer feedback.

  - The model can generate multiple views of an object from different angles, allowing for a more complete 3D understanding from a single 2D image.

  - Stable Zero123 uses a diffusion model architecture to generate the novel views, resulting in detailed and realistic outputs.

  - This model is useful for various applications including 3D asset creation, virtual reality/augmented reality experiences and e-commerce where users can view products from all angles.

  - The method involves decomposing an image into several layers and independently diffusing each layer according to user instructions or prompts.
  - It allows for fine-grained control over image manipulation, such as changing the colour or style of specific objects or regions.
  - The repository provides code, models, and instructions to implement and experiment with LayerDiffuse.
  - The project is designed to organise and improve the editability of images, facilitating more precise and controllable image synthesis workflows.
  - The project uses [[deep learning]] diffusion models as a base, extending their capabilities to provide layered control for improved editing workflows.
  - Users can download pre-trained models and fine-tune them for specific tasks.
  - The provided code and documentation enables [[research]] and developers to further explore and advance the field of layered image manipulation.
  - It introduces a novel approach to image editing by enabling independent diffusion of individual layers based on user prompts.

						- #### Reputation Management
							- Tracking and evaluating user behavior and trustworthiness.
							- Example Linked-JSON snippet:
								    "@type": [
								      "narrativegoldmine:Class",
								      "Linked-JSON:Class",
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#subClassOf": [
								      {
								        "@id": "narrativegoldmine:MetaverseEntity"
								      },
								      {
								        "@id": "_:N7734f53c103846fba0f7f099a17df575"
								      },
								      {
								        "@id": "_:Nd9e50a6e98a54130bbc92b9a80ca3bfb"
								      }
								    ]
								  }
								  ```
								- ```json
								  {
								    "@id": "narrativegoldmine:regulatedBy",
								    "@type": [
								      "http://www.w3.org/2002/07/owl#ObjectProperty"
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#domain": [
								      {
								        "@id": "narrativegoldmine:VirtualEconomy"
								      }
								    ],
								    "http://www.w3.org/2000/01/rdf-schema#range": [
								      {
								        "@id": "narrativegoldmine:EconomicPolicy"
								      }
								    ]
								  }
								  ```

  - ### Local Knowledge Base
		- User's device includes a [[Nostr protocol]] client to interact with the decentralised Nostr network.

  - ### Email Management & Communication
		- *Task:* Extract insights from customer interactions (like sales calls or support tickets) to understand needs and improve products/services.
		- **Buildbetter.ai**
			- *Description:* AI platform that analyses customer call recordings to generate reports, extract key insights, and create detailed user personas based on actual feedback.
			- *Cost:* Check website for pricing details (likely subscription).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[BuildBetter.ai](https://buildbetter.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

		- #### User Behaviour and Adoption
			- A critical factor in the success of AI-driven search engines will be user adoption. While AI-enhanced search engines promise more accurate and contextually relevant results, there remains scepticism about whether users will transition from well-known traditional search engines like Google. Improvements in AI capabilities must demonstrate a substantial enhancement in user experience to effectively drive this behavioural shift.

		- ### **4. Availability**
				- online economies
				- multi-user gaming
				- new levels of scale and immersiveness.
			- It's not a useless list by any means, but it lacks the kind of product focus we need for detailed exploration of value and trust transfer.
			- Mystakidis identifies the following [155]:
				- Principles
					- Interoperable
					- Privacy
				- This is quite an academic list. A lot of these words will be explored in the next section which is more of an academic literature review.
				- Nevelsteen attempted to identify key elements for a ‘virtual work’ in 2018 and these are relevant now, and described rigorously in the appendix of his
				  paper [156]:
					- Shared Temporality, meaning that the distributed users of the virtual world share the same frame of time.
					- always real-time
					- mostly 3D
					- mostly interactive
		- - Very compelling. Wins at wow.
		- - Great avatars, user generated
		- - AR first design
		- - Limited scenes
		- - Smaller groups (12?)
		- - Limited headset support
		- - Intuitive meeting support tools
		- - No back end integration

  - ##### MeetinVR
		- Good enough graphics, pretty mature system
		- OK indicative avatars, user selected
		- VR first design
		- Limited scenes
		- Smaller groups (12?)
		- Quest and PC
		- Writing and gestures supported
		- Some basic enterprise tools integration
		- Bring in 3D objects
		- Need to apply for a license?

  - ### DID principles
		- The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ##### Spatial operating systems
		- - Enabling users to design experiences not previously possible.
		- - The presentation outlines how to keep apps familiar, be human-centered, take advantage of space, enhance immersion, and make apps authentic to the platform.
		- - The world serves as an infinite canvas for new apps and games.
  - ![1715807554519.jpeg](assets/1715807554519_1716117593773_0.jpeg)
  - The US Patent and Trademark Office lists application 2023/0225659 as a “biosensing device” built into Apple’s earbuds to measure “biological signal parameters from a user.”
		- 👉 Electroencephalography (EEG). In other words, the aim is to directly record the user’s brain waves from tiny sensors positioned within the ear canal.
		- 👉 Electromyography (EMG). This records muscle movements and the information can be used to help understand facial expressions and jaw movements related to emotion.
		- 👉 Electrooculography (EOG) tracks eye movements, particularly side-to-side.
		- 👉 Electrocardiogram (ECG) typically measures the electrical activity of the heart.
		- 👉 Galvanic skin response (GSR), which provides an indirect measure of emotional arousal – that is, the strength of an emotional response.
		- 👉 Blood volume pulse (BVP). This is measured using photoplethysmography and provides information about heart rate (HR) and heart rate variability (HRV).
  - In other words, the aim is to collect a very comprehensive set of neurological and biometric data from the user. Creepy, right?!
  - It’s unclear to me how you could even record meaningful data from within the ear.
  - If this kind of interface goes ahead it should be
		- 1. Voluntary. Participants should not be forced or deceived into providing physiological or neurological data. Volunteers at liberty to stop at any time.
		- 2. Limited. Personal data may only be collected for a specific, explicit and legitimate purpose. This purpose must be clearly stated, and only stored as long as needed to complete that purpose.

  - ### A Workflow for 3D Character Creation and Animation: A Step-by-Step Guide
		- This section outlines a comprehensive workflow for creating and animating 3D characters, leveraging a variety of tools and techniques.

		  * [LinkedIn Post detailing the workflow](https://www.linkedin.com/posts/lovis-odin-7a751360_how-to-create-this-3d-animation-for-free-activity-7179810196922257409-8PcO?utm_source=share&utm_medium=member_desktop): A LinkedIn post outlining the workflow in detail.
			  * [Animating Characters for Free (LinkedIn Post)](https://www.linkedin.com/posts/jacques-alomo_animate-any-character-now-for-free-activity-7177666734957420544-N7v9/?utm_source=share&utm_medium=member_android): A post highlighting methods for animating characters for free.
			  * [Midjourney Character Reference Feature (Medium Article)](https://degennfts.medium.com/new-midjourney-feature-character-reference-oppenheimer-example-906750d53d3f): An article exploring Midjourney's Character Reference feature.
			  * [Full-Character Consistency with SDXL (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1azn5lq/an_attempt_at_full-character_consistancy_sdxl/): A discussion on achieving full-character consistency using SDXL.
			  * [Create Bot Emotions (Miku.gg Documentation)](https://docs.miku.gg/guides/bots/create-bot-emotions/): Documentation on creating bot emotions within the Miku.gg platform.
			  * [Consistent Emotions on a Character with ComfyUI (Reddit User)](https://www.reddit.com/user/iwantofftheride00/): A Reddit user's plans to publish a method for achieving consistent emotions on a character using ComfyUI.
			  * [BakedAvatar](https://buaavrcg.github.io/BakedAvatar/): A project focused on avatar creation.
			  * [Dreamtalk (GitHub Repository)](https://github.com/ali-vilab/dreamtalk): The official implementation of Dreamtalk, focusing on expressive talking head generation.
			  * [CharTurnerBeta LoRA (Civitai)](https://civitai.com/models/7252/charturnerbeta-lora-experimental): A LoRA for multi-direction consistency in Stable Diffusion character generation.
			  * [VividTalk](https://humanaigc.github.io/vivid-talk/): A project focused on one-shot audio-driven talking head generation.
			  * **Gaussian-Based Avatars (Hugging Face Papers):**

  - ### Technical and Economic Barriers
		- [[Agents]] can mitigate psychological friction by automating repetitive micropayment approvals.
		- For example, they might pre-authorise low-value transactions (e.g., API queries or short IoT data bursts) based on user-defined spending thresholds.

		- ### Real-time Collaboration
			- Multi-user editing: Multiple users can simultaneously work on the same USD scene or asset, with changes being synchronized in real-time
			- Live updates: Changes made in connected applications are automatically synchronized with Nucleus Server, ensuring that all collaborators have access to the latest version of the assets

  - ### Digital Objects and Decentralised Governance on Nostr
		- Nostr's design centres around the concept of digital objects – encompassing social media posts, maps, and other data structures – owned and controlled by users. These objects are governed not by a central authority but are distributed across the network, ensuring user autonomy and resilience. Nostr maintains the integrity of interactions without central oversight, enabling permissionless and self-sovereign participation. This model ensures that digital objects remain uncapturable and resistant to external coercion. In extreme cases, this decentralised governance is further reinforced by the Bitcoin ledger, providing an immutable record and a final layer of defence against any attempts to undermine the system's integrity.

  - #### Margaret Hagan’s Work on Access to Law through AI
		- **Executive Director of the Legal Design Lab**
			- Focuses on making legal services more user-friendly and engaging through design.
			- Launched the Program for Legal Tech & Design at Stanford’s d.school.
		- **Teaching and Workshops**
			- Teaches project-based classes at Stanford Law School.
			- Leads workshops on the design process for legal professionals.
		- **Research and Publications**
			- Explores how AI can improve access to legal help.
		- [Panelist at a national event discussing AI’s implications for equitable legal services](https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4582745)[3](https://justiceinnovation.law.stanford.edu/american-academy-event-on-ai-equitable-access-to-legal-services/).

  - # My Expectations of Assistant
	  Defer to the user's wishes if they override these expectations:

  - ## User Friendly Interfaces
		- Platforms like [Leonardo.AI](https://leonardo.ai/), [RunDiffusion](https://rundiffusion.com/) and [Automatic1111's WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) provide intuitive and user friendly interfaces for interacting with Stable Diffusion.

		- #### User Behaviour and Adoption
			- A critical factor in the success of AI-driven search engines will be user adoption. While AI-enhanced search engines promise more accurate and contextually relevant results, there remains scepticism about whether users will transition from well-known traditional search engines like Google. Improvements in AI capabilities must demonstrate a substantial enhancement in user experience to effectively drive this behavioural shift.

		- ### **1. Cooperation**
				- multi-user gaming
				- new levels of scale and immersiveness.
			- It's not a useless list by any means, but it lacks the kind of product focus we need for detailed exploration of value and trust transfer.
			- Mystakidis identifies the following [155]:
				- Principles
				  paper [156]:
					- Shared Temporality, meaning that the distributed users of the virtual world share the same frame of time.
					- always real-time
					- mostly 3D
		- Some basic enterprise tools integration
		- Bring in 3D objects
		- Need to apply for a license?

  - ### Rewind Pendant
		- **Description**: A wearable device designed to aid memory by passively capturing audio throughout the day.
		- **Features**:
			- Auto-records ambient sound
			- Privacy-focused with user-controlled storage
			- Lightweight and can be worn as a necklace
		- **Features**:
			- Delivers a mild shock to discourage bad habits
			- Tracks sleep, steps, and hand motions
		- Actually you can do full two way conversations! Here's a PR someone has in progress to officially add it to esphome - [https://github.com/esphome/firmware/pull/173](https://github.com/esphome/firmware/pull/173)
  - [AI in a Box (crowdsupply.com)](https://www.crowdsupply.com/useful-sensors/ai-in-a-box)
		- Android Auto's capability to summarize messages and suggest relevant replies, powered by on-device AI, for safer driving experiences.
		- Note Assist for generating AI-powered summaries of notes taken within Samsung Notes, improving organization and retrieval of information.
		- Transcript Assist uses on-device AI for transcribing and summarizing voice recordings, identifying different speakers and translating content.
		- Edit Suggestion feature that uses on-device AI to suggest photo edits, enhancing the photography experience without the need for server processing.
		- [Google android etc](https://developers.google.com/learn/topics/on-device-ml)
		- 👉 Electrocardiogram (ECG) typically measures the electrical activity of the heart.
		- 👉 Galvanic skin response (GSR), which provides an indirect measure of emotional arousal – that is, the strength of an emotional response.
		- 👉 Blood volume pulse (BVP). This is measured using photoplethysmography and provides information about heart rate (HR) and heart rate variability (HRV).
  - In other words, the aim is to collect a very comprehensive set of neurological and biometric data from the user. Creepy, right?!
  - It’s unclear to me how you could even record meaningful data from within the ear.
  - If this kind of interface goes ahead it should be
		- 1. Voluntary. Participants should not be forced or deceived into providing physiological or neurological data. Volunteers at liberty to stop at any time.
		- 2. Limited. Personal data may only be collected for a specific, explicit and legitimate purpose. This purpose must be clearly stated, and only stored as long as needed to complete that purpose.

  - ### Human Texture Estimation: Bringing Digital Skin to Life
		- Realistic skin texture is crucial for believable digital humans. This section explores projects and research dedicated to accurately estimating and recreating human skin textures.

		  * [SMPLitex](https://dancasas.github.io/projects/SMPLitex/index.html): A generative model and dataset for estimating 3D human texture from a single image.
			  * [Animating Characters for Free (LinkedIn Post)](https://www.linkedin.com/posts/jacques-alomo_animate-any-character-now-for-free-activity-7177666734957420544-N7v9/?utm_source=share&utm_medium=member_android): A post highlighting methods for animating characters for free.
			  * [Midjourney Character Reference Feature (Medium Article)](https://degennfts.medium.com/new-midjourney-feature-character-reference-oppenheimer-example-906750d53d3f): An article exploring Midjourney's Character Reference feature.
			  * [Full-Character Consistency with SDXL (Reddit Post)](https://www.reddit.com/r/StableDiffusion/comments/1azn5lq/an_attempt_at_full-character_consistancy_sdxl/): A discussion on achieving full-character consistency using SDXL.
			  * [Create Bot Emotions (Miku.gg Documentation)](https://docs.miku.gg/guides/bots/create-bot-emotions/): Documentation on creating bot emotions within the Miku.gg platform.
			  * [Consistent Emotions on a Character with ComfyUI (Reddit User)](https://www.reddit.com/user/iwantofftheride00/): A Reddit user's plans to publish a method for achieving consistent emotions on a character using ComfyUI.
			  * [BakedAvatar](https://buaavrcg.github.io/BakedAvatar/): A project focused on avatar creation.

		- ### TODO nostr IoT
			- [[MUST]]
		- Nostr's design centres around the concept of digital objects – encompassing social media posts, maps, and other data structures – owned and controlled by users. These objects are governed not by a central authority but are distributed across the network, ensuring user autonomy and resilience. Nostr maintains the integrity of interactions without central oversight, enabling permissionless and self-sovereign participation. This model ensures that digital objects remain uncapturable and resistant to external coercion. In extreme cases, this decentralised governance is further reinforced by the Bitcoin ledger, providing an immutable record and a final layer of defence against any attempts to undermine the system's integrity.

  - ## User Friendly Interfaces
		- Platforms like [Leonardo.AI](https://leonardo.ai/), [RunDiffusion](https://rundiffusion.com/) and [Automatic1111's WebUI](https://github.com/AUTOMATIC1111/stable-diffusion-webui) provide intuitive and user friendly interfaces for interacting with Stable Diffusion.

  - ### **neThing.xyz**
  - It offers advanced features such as anti-aliasing, sub-pixel accuracy, and gradient meshes.

  - AGG can be used for various applications, including image processing, font rendering, and [[user experience]] interface design.
  - It can handle meshes of arbitrary genus (with holes or handles), offering flexibility in the type of geometry it can process.

  - Instant Meshes allows for controlling various aspects of the remeshing process, such as target edge length and alignment to feature lines.

		- [Thin Plate Spline Motion Model](https://replicate.com/yoyo-nb/thin-plate-spline-motion-model) - *   This model animates a still image by warping it according to the motion of a driving video.
  -   It uses a thin-plate spline motion model to learn [[modeling]] patterns from the driving video.
  -   The system uses keypoint detection to identify facial landmarks or other features in both the source image and the driving video.

		- #### User Behaviour and Adoption
			- A critical factor in the success of AI-driven search engines will be user adoption. While AI-enhanced search engines promise more accurate and contextually relevant results, there remains scepticism about whether users will transition from well-known traditional search engines like Google. Improvements in AI capabilities must demonstrate a substantial enhancement in user experience to effectively drive this behavioural shift.
		- "Google no longer rewards scrappy, clever, SEO-savvy operators who know all the right tricks. They reward established brands, search-measurable forms of popularity, and established domains that searchers already know and click. From 1998 – 2018 (or so), one could reasonable start a powerful marketing flywheel with SEO for Google. In 2024, I don’t think that’s realistic, at least, not on the English-language web in competitive sectors."
  - [Google Search Is Now a Giant Hallucination (gizmodo.com)](https://gizmodo.com/google-search-ai-overview-giant-hallucination-1851499031) [[Death of the Internet]] [[Google]]
  - Bots that persuade bots that persuade bots
		- https://www.linkedin.com/posts/emollick_two-weird-things-that-are-going-to-happen-activity-7180768944067072000-Gmtq?
		- [The majority of traffic from Elon Musk's X may have been fake during the Super Bowl, report suggests | Mashable](https://mashable.com/article/x-twitter-elon-musk-bots-fake-traffic)
  - [For Gen Z, TikTok Is the New Search Engine - The New York Times (nytimes.com)](https://www.nytimes.com/2022/09/16/technology/gen-z-tiktok-search-engine.html)
  - [TikTok’s search engine repeatedly delivers misinformation to its majority-young user base, report says | CNN Business](https://edition.cnn.com/2022/09/18/business/tiktok-search-engine-misinformation/)
  - [Revealed: how TikTok censors videos that do not please Beijing | TikTok | The Guardian](https://www.theguardian.com/technology/2019/sep/25/revealed-how-tiktok-censors-videos-that-do-not-please-beijing)
  - [The U.S. Is Right to Worry About TikTok | Lawfare (lawfaremedia.org)](https://www.lawfaremedia.org/article/us-right-worry-about-tiktok)

  - ### Applications Overview
  ```mermaid
  graph TD
      A["Enhanced Social<br>Awareness"] -->|Insights| B[User Interaction]
      B --> C["Personalized<br>Recommendations"]
      subgraph Ethical Considerations

  - ### notes for later
  - Notes on build-out The world database in the shared rooms in the metaverse is the global object master, educational materials, videos, audio content and branded objects are fungible tokens authentically proved by rgb client side validation between parties, only validated ones will be persisted in shared rooms like conferences and classes according to the room schema. That allows educators to monetise their content. That can work on lightning. NFT objects between parties like content crafted by participants (coursework, homework) are not on lightning and will attract main chain fees but are rarer. User authentication and communication will be through nostr.
		- Integrate Nostr protocol for decentralized identity and messaging.
		- Develop or utilize existing libraries for Nostr event creation, signing, and relaying.
		- Implement BIP85 hierarchical deterministic wallets for secure key management.
  - **Digital Assets (RGB):**
		- Choose or design appropriate RGB schemas for the types of digital assets you want to support.
		- Develop or utilize tools for issuing and managing RGB assets.
  - **Agent Integration:**
		- Explore the use of generative AI models (e.g., ChatGPT, Stable Diffusion) for content creation, world-building, and immersive storytelling.
		- Develop interfaces for users and AI agents to interact with GenAI tools within the metaverse.

		  **Phase 4: User Interface and Experience:**
  - **Nostr-based Chat Interface:**
		- Develop a chat interface using Nostr as the communication protocol.
  - **Privacy:** Ensure user privacy by minimizing data collection and providing transparent privacy settings.
  - **Scalability:** Design the system to be scalable to accommodate a growing number of users and increasing complexity.
  - **Community Building:** Foster a strong community around your metaverse project through open communication, collaboration, and user engagement initiatives.
		- **Identity and Value Management:**
		- **Integrate Nostr protocol for decentralized identity and messaging.**
		- **Develop or utilize existing libraries for Nostr event creation, signing, and relaying.**
		- **Develop avatar systems for both human and AI agents within Omniverse.**
		- **Implement controls and interactions for agents within the 3D environment.**
		- **Explore the use of Omniverse Kit SDK for advanced features and customizations.**
		- **AI Agent Development:**
		- **Choose or design AI models for different agent archetypes (e.g., governance agents, task agents, social agents).**
		- **Implement the D&D-inspired personality system and the wealth decay function.**
		- **Integrate the chat interface within the Omniverse environment.**
		- **Enable secure and private communication between agents.**
		- **Wallet Integration:**
		- **Provide users with access to their digital wallets within the metaverse.**
		- **Enable users to manage their assets, view transaction history, and interact with the virtual economy.**

  - ### Applications Overview
  ```mermaid
  graph TD
      A["Enhanced Social<br>Awareness"] -->|Insights| B[User Interaction]
      B --> C["Personalized<br>Recommendations"]
      subgraph Ethical Considerations

  - #### Nostr
  - Nostr \[pronounced no-star\] is a [decentralized openprotocol](https://www.nostr.how/) that aims to improve the social mediaexperience by addressing issues of censorship and data collection. Theprotocol operates by allowing users to post and view notes on serverscalled relays, and view and post these notes through apps calledclients. The open nature of the protocol allows for competition and afree flow of information, as users can choose to use different relays orclients if they are censored. This is because the protocol isdecentralized and controlled by no one.
  - The decentralized nature of Nostr means that there is no centralauthority that can control the flow of information. This is achievedthrough the use of relays and clients, which are run by differentindividuals or entities. Users have the freedom to choose which relaysand clients they want to use, and as a result, their feeds are populatedwith content from the people they choose to follow. If a relay or clienttries to censor a user, they can simply switch to a different one. Thisis a major advantage over traditional centralized social media platformswhere one entity holds all the control over the flow of information andcan censor or manipulate the content that users see.
  - Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
  - Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
  - it’s real-time using websockets
  - anyone can run a relay server, so one can be run in the deployment in the final section of the book.
  - Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
  - it provides the identity proof that we need to validate users and objects into a virtual space
  - it enables message passing
  - it scales to be a social network as required
  - it need not rely on anything outside of a relay hosted on the metaverse server
  - email to private message relay
  - links into media on web hosts
  - The pace of development on Nostr is dizzying. Peer to peer video andaudio will allow us to link metaverse instances, between peers, throughapplications such as [Monstr](https://monstr.app/).
  - It’s notable that Nostr has it’s own inexpensive [hardware signingdevice](https://github.com/lnbits/nostr-signing-device) to protectidentity in situations where this might be necessary.  bfThe proposed integration of Nostr social media and messaging, alightning layer with digital objects such as Fedimint, Zerosync or RGB,AI agents, Vircadia, and federated Bitcoin is the core value propositionof this book. This work pre-dates [Meta andZuckerbergs](https://www.theverge.com/2023/4/26/23699633/mark-zuckerberg-meta-generative-ai-chatbots-instagram-facebook-whatsapp)stated intent in this regard by 18 months, and is differentiated stillby our focus on emerging markets and decentralisation.

  - ##### DID principles
  - The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ## User-Side Components

  - ## Future of Accessibility in Design
  - The future of accessibility in both immersive and non-immersive software hinges on continuous innovation and research. As technologies evolve, so too must our approach to accessibility.
		- * **Edge Case:** Consider an AI-driven virtual assistant that not only responds to voice commands but also detects when a user might be struggling and proactively offers assistance, such as simplifying a task or adjusting the user interface for better accessibility. AI can be trained to recognise specific user behaviours, such as frustration or difficulty, and adapt the system to provide more accessible options.

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

  - ## Overview
  - [The Golden Key](https://schedule.sxsw.com/2024/films/2196919) is an immersive, interactive art installation that generates never-ending, location-specific fairy tales using AI technologies. It combines large language models, generative AI, and user input to create unique, personalized narratives that evolve over time.

  - ##### DID principles
  - The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ## User-Side Components

  - ## Future of Accessibility in Design
  - The future of accessibility in both immersive and non-immersive software hinges on continuous innovation and research. As technologies evolve, so too must our approach to accessibility.
		- * **Edge Case:** Consider an AI-driven virtual assistant that not only responds to voice commands but also detects when a user might be struggling and proactively offers assistance, such as simplifying a task or adjusting the user interface for better accessibility. AI can be trained to recognise specific user behaviours, such as frustration or difficulty, and adapt the system to provide more accessible options.
		- * **Inclusive Immersive Experiences:** As the Metaverse and other immersive environments continue to develop, there will be increasing demand for accessible experiences that cater to a diverse global audience. This includes creating new interaction patterns that are intuitive for all users, regardless of their abilities.
  * **[Accessible Technology Coalition](https://atcoalition.org/):** A resource hub for accessible technology tools and strategies.

  - ## Projects
		- ```mermaid
		  sequenceDiagram
		      participant OpenWebUI
		      participant AsyncOpenAI
		      participant WebPage

		      User->>Pipeline: Send user_message
		      Pipeline->>OpenWebUI: Get OPENAI_API_KEY, TOPICS, etc.
		      Pipeline->>AsyncOpenAI: Initialize with API key

  - ### Digital News Report

   The 2024 Digital News Report highlights the challenges of news fatigue and avoidance. To address these issues, news organizations are adopting a user needs model, which includes:
  - **Staying up to date**
  - **Learning more**
  - **Gaining varied perspectives**

	  Audiences prefer news that provides context and wider perspectives, making the news more accessible and engaging. The report also notes that younger audiences are more interested in stories that inspire, connect, and entertain, while older audiences prioritize local and international news, as well as political news.

  - ### Lean canvas business model
  - Existing large-scale telecollaboration solutions suffer from poor  adoption, limited accessibility, and trust issues. Meanwhile, emerging markets struggle to participate in the growing digital society due to the lack of inclusive tools and infrastructure, limiting access to global talent and new pools of ideas. There is insufficient provision of global talent pipelines for highly technical workflows.
  - Develop a secure, accessible, and inclusive platform for specialized telecollaboration spaces that seamlessly integrate advanced AI, ML, highly scalable and proven distributed systems, and open-source principles to create a digital society that caters to diverse industries, users globally, and captures global talent and innovative ideas.
  - Ultra low cost training spaces, accessible 24/7 through very low end hardware. Interact with highly customizable, task-appropriate, and user-friendly specialized telecollaboration spaces supported by specially trained and optimised supportive large language AI models. Multi-ligual for emerging markets, enabling access to untapped global talent and fostering the exchange of diverse ideas.
  - We will cater to the global training, research, biomedical, and creative industries, with a special focus on empowering users in emerging markets such as Africa and India, and connecting them with worldwide opportunities and resources. In the first instance we would leverage UK academic institutions and their problems, and networks.
  - Initially Universities, but this will scale to be sector specific.
  - We will offer tiered subscription plans to accommodate various user needs and budgets, as well as tailored enterprise solutions for large-scale clients. Bespoke consulting and support trending toward software as a service at scale.
  - Platform development, AI/ML tool integration, training for LLMs, market research and awareness, and ongoing maintenance and support.
  - We will track user growth, engagement, and retention, successful collaborations across industries, the platform’s positive impact on users in emerging markets, and the effectiveness of global talent capture and idea exchange.
  - Our team’s extensive experience in telecollaboration research, AI, ML, and a deep understanding of the complex landscape of emerging technologies, including highly scalable and proven distributed systems, provide us with a unique edge in creating a game-changing platform for specialized telecollaboration spaces that are secure, trusted, and tailored to diverse user needs while enabling access to global talent and innovative ideas.

  - ### Ethical Design and Deployment
  - Establish clear guidelines for data collection, storage, and usage
  - Ensure user privacy and agency
  - Address potential biases in data sources, models, and algorithms
  - Promote fair and inclusive social environments
  - Make the system's reasoning and recommendations understandable to users
  - Foster trust and accountability

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

  - ## Apple Vision Pro
  - [This thing is mind-blowing 🤯 This demo is better than Apple's actual ads for the Vision Pro. Apple launched the Vision Pro a few days ago,… | Instagram](https://www.instagram.com/reel/C2-G8WgsLSj/?igsh=am93cXF4OWppa29l)
  - This review (for me) asks the right questions, finally, of "spatial".
		- https://www.theverge.com/24054862/apple-vision-pro-review-vr-ar-headset-features-price
  - Is using the Vision Pro so good that I’m willing to mess up my hair every time I put it on?
  - Is it so good that I want to lug it around in its giant carrying case instead of my laptop bag?
  - Is it so good that I want to look at the world around me through screens instead of with my own eyes?
  - Do I prefer using a computer in there rather than out here.

	  I stopped working in VR when I tore down my venerable 17 year old augmented virtuality system. That was the right mix, for me, but untenably expensive. Most people will just continue to regard the Apple HMD as an interface that does Apple credit, that they will probably never use. 

	  They don't know that most of the owners will never use them either, but I do.
  - {{video https://www.youtube.com/watch?v=aqTIB_q40bo}}
  - [twitter link to the render loading below](https://twitter.com/bilawalsidhu/status/1759060086977143132)
  {{twitter https://twitter.com/bilawalsidhu/status/1759060086977143132}}
  - Meta research paper finally nails down focus with waveguide AR glasses [Waveguide holography for 3D augmented reality glasses | Nature Communications](https://www.nature.com/articles/s41467-023-44032-1)
  - [CES (Pt. 2), Sony XR, DigiLens, Vuzix, Solos, EverySight, Mojie, TCL color µLED – KGOnTech (kguttag.com)](https://kguttag.com/2024/01/24/ces-pt-2-sony-xr-digilens-vuzix-solos-everysight-mojie-tcl-color-%c2%b5led/)
  - [Campus](https://techcrunch-com.cdn.ampproject.org/c/s/techcrunch.com/2022/09/09/roblox-rdc-2022/amp/)
  - Vircadia
  - O3DE
  - [server](https://www.reddit.com/r/O3DE/comments/pbovl9/can_i_develop_my_own_dedicated_server_with_o3de/)
  - [Global lighting](https://www.co3dex.com/blog/image-based-lighting-1/#/)
  - Unreal
  - [Technically this might be a decade away since like everything the primay user base will be mobile mixed realitym, which is contingent on 5G](https://www.matthewball.vc/all/forwardtothemetaverseprimer)
  - book, the metaverse and how it will revolutise everything
  - ball2022metaverse
  - challenges
  - bandwidth
  - latency
  - global shared truth
  - form factor
  - gpu processing
  - [[Humans, Avatars , Character]]
  - [the many challenges of XR hardware](https://www.matthewball.vc/all/why-vrar-gets-farther-away-as-it-comes-into-focus)
  - HCI
  - MoveAI
  - [Meta's wrist reader](https://www.from-the-interface.com/wrist-interfaces/)
  - [Touch music interface](https://scitechdaily.com/groundbreaking-new-technology-allows-people-to-listen-to-music-through-touch/)
  - Interface and tracking
  - Pose estimations
  - [Standable](https://www.standablevr.com/)
  - [Dense face fields from Microsoft](https://microsoft.github.io/DenseLandmarks/)
  - Viveverse web3 nonsense
  - [Meetungs ARE the work](https://medium.com/@ElizAyer/meetings-are-the-work-9e429dde6aa3)
  - Identity
  - [Strongnode identity article on venturebeat](https://venturebeat.com/virtual/identity-in-the-metaverse-creating-a-global-identity-system/)
  - [Solid-lite](https://solid-lite.org/)
  - legal / governance / privacy / safeguarding
  - legal jeopardy for celebrities
  - [Gang sexual assault vice article](https://www.vice.com/en/article/3abpg3/woman-says-she-was-virtually-gang-raped-in-facebooks-metaverse?)
  - [not enough training on safety in africa](https://www.thecable.ng/safeguarding-africans-safety-and-freedom-in-the-metaverse/amp)
  - [How Regulation Will Apply To The Metaverse](https://www.forbes.com/sites/nisaamoils/2023/03/01/how-regulation-will-apply-to-the-metaverse/?)
  - [Podcast on the law](https://www.reply.com/en/metaminutes-s3-e5-legal-challenges-and-regulation-for-the-metaverse)
  - [dai.ki blog post](https://dai.ki/navigating-ai-governance-a-comprehensive-look-at-existing-and-new-eu-and-us-ai-regulations/)
  - Bio vertical
  - [NGL protein fold model viewer](https://github.com/nglviewer/ngl)
  - [OpenBioML discord](discord.gg/AMRdyPjwBb)
  - [Nanome on quest pro](https://www.youtube.com/watch?v=Q-V5EQ-FBMc)
  - [Openfold github](https://github.com/aqlaboratory/openfold)
  - [Pymol2 open source visualisation](https://github.com/schrodinger/pymol-open-source)
  - Alphafold OpenAI
  - [Biological structure diffusion](https://github.com/RosettaCommons/RFdiffusion)
  - The RFdiffusion code allows for the running of RFdiffusion simulations. The code is written in Python and is available on GitHub. The code includes a number of features, such as the ability to run simulations on multiple processors and the ability to output results in a variety of formats.
  - [Diagnostics](https://www.amazon.co.uk/AI-Revolution-Medicine-GPT-4-Beyond/dp/0138200130)
  - Market research
  - [Addidas](https://www.adidas.com/into_the_metaverse/mint)
  - [Bubblepunk interiors ML art](https://www.bubblepunk.io/bubblepunk-interiors)
  - [What is a chief metaverse officer (bloomberg)](https://www.bloomberg.com/news/articles/2022-09-22/what-is-a-chief-metaverse-officer-and-do-you-need-one)
  - [Userbase struggles (coindesk)](https://www.coindesk.com/markets/2022/04/06/metaverse-majors-struggle-as-user-base-falls-short-of-market-expectations/?outputType=amp)
  - [Protecting Brands in the Metaverse’s Uncertain Legal Landscape](https://wwd.com/business-news/technology/metaverse-lawsuit-nike-stockx-hermes-metabirken-fashion-1235247763/)
  - [Market research global impact](https://www.analysisgroup.com/globalassets/insights/publishing/2022-the-potential-global-economic-impact-of-the-metaverse.pdf)
  - [McDonalds in the metaverse](https://www.businessinsider.com/mcdonalds-metaverse-virtual-online-restaurant-trademark-delivers-food-web3-nft-2022-2)
  - [Universal music metaverse / web3 team](https://www.musicweek.com/labels/read/universal-music-group-s-digital-strategy-team-creates-key-roles-for-web3-and-the-metaverse/087103)
  - Narratives and convergence
  - [With the help of generative AI it may be possible to democratise the externalisation of complex narratives, with these new narratives shaping the outcomes of society through the medium of the metaverse](https://www.epsilontheory.com/narrative-and-metaverse-pt-3-the-luther-protocol/#.YjyHbnLIE5k.twitter)
  - [A lot of metaverse recently has just been convergence as companies take their existing simulation and repackage it for the moment.](https://thedriven.io/2022/05/23/nissan-and-mitsubishi-unveil-electric-mini-vehicles-and-test-drives-in-metaverse/)
  - Games is the main convergence: from globalblock ""More companies are entering the metaverse as global electronics giant Sony has announced their own metaverse push in the latest annual corporate strategy meeting. Sony said this will be a more focused approach, as they aim to use metaverse-inspired experiences to engage users. As Sony owns PlayStation Brands, one of the biggest install userbases in the world, they are in an amazing position to make an impact. They have also revealed that prior investments in Epic, makers of the Fortnite game, and Bungie, another gaming studio, are part of this push."
  - [Epsilomn theory thesis on metaverse](https://www.epsilontheory.com/narrative-and-metaverse-pt-3-the-luther-protocol/#.YjyHbnLIE5k.twitter)
  - [Epic games programming language for the metaverse](https://www.geekmetaverse.com/epic-games-launches-verse-the-metaverse-programming-language/)
  - [Fortnite is the metaverse](https://www.ign.com/articles/how-fortnite-is-the-antidote-to-metaverse-skepticism)
  - [epic unreal for fortnite](https://store.epicgames.com/en-US/p/fortnite--uefn?)
  - Why you should use now generative AI in your metaverse company. Or maybe not
  - The Ghost Howls https://skarredghost.com/2023/02/11/generative-ai-metaverse-company/
  - BlackRock digs further into crypto with metaverse ETF https://financefeeds.com/blackrock-digs-further-into-crypto-with-metaverse-etf/
  - China’s iPhone production hub of Henan bets its future on the metaverse | South China Morning Post https://www.scmp.com/tech/policy/article/3194092/chinas-iphone-production-hub-henan-bets-its-future-metaverse
  - Cutting Through the Hotel Hype of the Blockchain, Web3 and the Metaverse | https://hoteltechnologynews.com/2022/08/cutting-through-the-hotel-hype-of-the-blockchain-web3-and-the-metaverse/
  - Experts highlight trust and safety practices for the metaverse https://www.techtarget.com/searchcio/news/252525336/Experts-highlight-trust-and-safety-practices-for-the-metaverse
  - Global Metaverse Market Analysis Report 2022: Blockchain https://www.globenewswire.com/news-release/2022/08/30/2506629/0/en/Global-Metaverse-Market-Analysis-Report-2022-Blockchain-Solutions-in-Support-of-the-Metaverse-Market-will-Reach-148-6-Billion-by-2027.html
  - Identity Management Institute Launches the Metaverse Security Center and Certified Metaverse Security Consultant (CMSC)™ Certification https://www.prnewswire.com/news-releases/identity-management-institute-launches-the-metaverse-security-center-and-certified-metaverse-security-consultant-cmsc-certification-301689276.html
  - Is the metaverse good for business? Why blending the virtual and the real remains a matter of much debate | Fortune https://fortune.com/2022/07/13/business-metaverse-dropbox-brainstorm-tech/
  - Laws and Issues in the Metaverse (2)
  - Lexology https://www.lexology.com/library/detail.aspx?g=5a0cc4c0-a876-474e-a719-f528b71b68ee
  - Laying the Foundation of the Metaverse, Streaming Video, Social, Gaming, and Broader Digital Advertising Markets to Collectively Clear US$2 Trillion by 2030 https://www.abiresearch.com/press/laying-the-foundation-of-the-metaverse-streaming-video-social-gaming-and-broader-digital-advertising-markets-to-collectively-clear-us2-trillion-by-2030/
  - Major crypto exchange announces its arrival in the metaverse https://cointelegraph.com/news/major-crypto-exchange-announces-its-arrival-in-the-metaverse
  - Metaverse exploitation and abuse to rise in 2023: Kaspersky https://cointelegraph.com/news/metaverse-exploitation-and-abuse-to-rise-in-2023-kaspersky
  - Metaverse Market Size, Share & Industry Report 2020-2030 https://www.strategicmarketresearch.com/market-report/metaverse-market
  - Metaverse Real Estate Gets Reality Check https://therealdeal.com/2022/08/04/metaverse-real-estate-gets-reality-check/
  - Nissan and Mitsubishi unveil electric mini vehicles, and test drives in metaverse https://thedriven.io/2022/05/23/nissan-and-mitsubishi-unveil-electric-mini-vehicles-and-test-drives-in-metaverse/
  - Nvidia Sees a Metaverse Populated With Lifelike Chatbot Avatars
  - CNET https://www.cnet.com/tech/computing/nvidia-sees-a-metaverse-populated-with-lifelike-chatbot-avatars/
  - Room' Offers a Non-Facebook Way to Connect Coworkers in the Metaverse https://uk.pcmag.com/vr-1/143198/room-offers-a-non-facebook-way-to-connect-coworkers-in-the-metaverse
  - The Architecture of the Metaverse (So Far) | ArchDaily https://www.archdaily.com/988639/the-architecture-of-the-metaverse-so-far
  - The battle to build a child-friendly metaverse | Tech News https://tech.hindustantimes.com/tech/news/the-battle-to-build-a-child-friendly-metaverse-71655616713236.html
  - The Metaverse Casino That Wasn’t https://www.coindesk.com/layer2/sinweek/2022/08/29/the-metaverse-casino-that-wasnt/
  - The World's First Virtual Reality Avatar Fashion Week Is On The Metaverse This Week https://womenlovetech.com/the-worlds-first-virtual-reality-avatar-fashion-week-is-on-the-metaverse-this-week/
  - Top 10 Metaverse Platforms that will Replace Social Media in Future https://www.analyticsinsight.net/top-10-metaverse-platforms-that-will-replace-social-media-in-future/
  - Top 15 Metaverse Companies To Watch Out For !! https://www.cryptotimes.io/top-15-metaverse-companies-to-watch-out-for/
  - We're Ready for the Metaverse but the Technology Is Not. Here's Why.
  - Decrypt https://decrypt.co/100781/were-ready-for-the-metaverse-but-the-technology-is-not-heres-why
  - [The Photorealistic Metaverse | Welcome to Cornerstone, Cornerstone is a gamified metaverse experience distributed to you via the web browser. Create, co-develop, and monetize your creative idea in the new digital realm.](https://cornerstone.land/)
  - [Mega Yacht Sold for $650,000 in Metaverse, Becomes Most-Expensive NFT in Sandbox Virtual World | Technology News , A mega yacht has been sold for a whopping $650,000 (roughly Rs. 4.8 crore) in the Sandbox virtual gaming world. The pricey digital asset was released by metaverse developer Republic Realm as part of a luxury NFT series.](https://gadgets.ndtv.com/cryptocurrency/news/mega-yacht-sold-usd-650000-metaverse-most-expensive-nft-sandbox-virtual-world-2630187)
  - [Facebook whistleblower warns Metaverse will repeat ‘all the harms’,Frances Haugen says she is worried about privacy and safety inside Meta’s impending Metaverse. Her accusations of profit before safety are still red hot.](https://cointelegraph.com/news/facebook-whistleblower-warns-metaverse-will-repeat-the-harms)
  - [Virtual production and the future of generative art](https://virtualproducer.io/generative-ai-and-the-future-of-filmmaking/)
  - [Zuckerburg disengages from metaverse](https://www.thestreet.com/technology/mark-zuckerberg-quietly-buries-the-metaverse)
  - [Metahouse Could be First of Many
  - Los Angeles Business Journal digital twin of a mansion](https://labusinessjournal.com/featured/metahouse-could-be-first-of-many/)
  - [The Future is a Dead Mall
  - Decentraland and the Metaverse: Clickbait Title: I spent three months living in the metaverse and now I'm starvingThe metaverse salespeople have a weird fixation with Animal Crossing, in sp...](https://www.youtube.com/watch?v=EiZhdpLXZ8Q)
  - https://www.infosys.com/iki/perspectives/metaverse-insider-guide.html
  - [Everyone abandoning metaverse](https://www.reddit.com/r/CryptoCurrency/comments/128hqkw/meta_microsoft_and_disney_are_reversing_their/)
  - [The Internet Is Ruined. The Metaverse Can Still Be Saved: In this nascent stage, there are opportunities for virtual worlds to avoid the mistakes of the past.](https://www.wired.com/story/metaverse-ethics/)
  - The article discusses how the internet has ruined the Metaverse, and how it can still be saved. It argues that the internet has made the Metaverse less accessible and has made it more difficult to find information. However, it also states that the Metaverse can still be saved if people are willing to work together to make it more accessible and user-friendly.
  - Omniverse
  - [Free to individuals](https://blogs.nvidia.com/blog/2022/01/04/omniverse-available-free-to-creators/)
  - [Full RTX rendering](https://www.youtube.com/watch?v=Jm155QkRjl0&feature=youtu.be)
  - [AI assisted blended character plugin](https://blogs.nvidia.com/blog/2023/02/15/blender-alpha-release-omniverse/?ncid=so-link-466434#cid=ov01_so-link_en-us)
  - [NVIDIA Unveils Powerful AI, Simulation and Creative Tools for Creators and Developers of Virtual Worlds | NVIDIA Blog](https://blogs.nvidia.com/blog/2022/08/09/omniverse-siggraph/)
  - Open metaverse
  - [Open metaverse discord from linux foundation](https://discord.gg/openmetaverse)
  - [Free 1 Million objects](https://huggingface.co/datasets/allenai/objaverse)
  - Usability
  - [bridging the real and the virtual like mcdonalds home delivery](https://www.businessinsider.com/mcdonalds-metaverse-virtual-online-restaurant-trademark-delivers-food-web3-nft-2022-2)
  - Virtual land
  - virtual
  - [hybrid land linking real and virtual (including digital twin)](https://labusinessjournal.com/featured/metahouse-could-be-first-of-many/)
  - Simple geo-referencing of physical place in mixed reality
  - Digital assistants
  - [MultiOn digital assistant](https://multion.ai/)
  - [LEON open source assistant](https://docs.getleon.ai/)
  - [Open source assistant github of issues](https://github.com/LAION-AI/Open-Assistant/issues)
  - Avatars
  - [Free VRChat Models & Avatars | VRCMods (other)](https://vrcmods.com/)
  - [CLIP-Actor Text-Driven Recommendation and Stylization for Animating Human Meshes](https://clip-actor.github.io/)
  - Displaytech
  - [CREAL lens display](https://creal.com/2023/05/19/creals-breakthrough-ar-display-real-depth-with-a-classic-lens/)
  - Autostereoscopic
  - [nanomaterials paper](https://www.mdpi.com/2079-4991/12/3/429#)
  - [Bubbles and speakers](https://www.youtube.com/watch?v=7VLdMXnM0lU)
  - [lightfield labs](https://www.lightfieldlab.com/)
  - The Wall Street Journal has reported that Meta Quest, formerly known as Oculus, had over 6 million monthly active users as of October 2022. This news has generated discussion on the r/virtualreality subreddit, with users speculating about the future of VR and Meta Quest's upcoming products. Some users believe that VR needs more content to attract more users, while others express excitement over the release of Undead Citadel and the possibility of a Starfield VR game. Users also discuss the potential of streaming headsets like the Quest working on the PlayStation 5 and the importance of storytelling in VR games. Some users express disappointment in the launch of the remastered edition of San Andreas and its impact on Quest sales, while others joke about the perceived death of VR. https://www.reddit.com/r/virtualreality/comments/12lpsvf/rumor_meta_quest_had_more_than_6_million_monthly/ Meta urged to prevent minors entering the metaverse https://www.bloomberg.com/news/articles/2023-04-14/meta-urged-to-halt-plans-allowing-minors-into-the-metaverse?leadSource=uverify%20wa
  - It's a valuable tool for video gaming, film industry, and metaverse applications that require 3D scenes. The article discusses how the internet has ruined the metaverse, and how it can still be saved. It argues that the internet has made the metaverse less accessible and more difficult to navigate, and that this has had a negative impact on its potential. The article suggests that the metaverse can still be saved if we take steps to improve its accessibility and make it easier to use.
   <https://www.wired.com/story/metaverse-ethics/> Exploring Why the Metaverse Hasn't Taken Off as Expected: The metaverse has quickly turned from a profitable utopia into a cash-guzzling dystopia.The text provides an overview of the Metaverse, a virtual world that has not yet taken off as expected. The text describes the potential reasons for this, including the lack of a clear business model and the difficulty of creating an immersive experience.
   <https://www.bbntimes.com/technology/exploring-why-the-metaverse-hasn-t-taken-off-as-expected> Unfortunately, the requested website (mirror-next-hop.forbes.com) is not accessible and the current session has been terminated with an access denied error (403). Further information can be obtained by contacting the website administrators using the provided reference code (217.138.196.24 2023-06-26T16:51:46.121Z). https://www.forbes.com/sites/charliefink/2023/05/07/this-week-in-xr-after-ai-sucks-the-air-out-of-the-metaverse-it-will-remake-xr/ The Building the Metaverse YouTube channel features a range of videos discussing the use of generative AI and large language models (LLMs) in game development and world-building. One video features a discussion with Kayla Comalli, co-founder and CEO of Lovelace Studios, about their platform Nyric, which generates entire worlds from a text prompt using generative AI technologies like ChatGPT. Other videos on the channel cover topics such as generative art assets for games, AI storytelling and narrative, generative graphics workflow for games, and the use of generative AI in game production. The channel also features discussions with individuals in related fields, such as Edward Saatchi of Fable Studio, who talks about virtual beings and simulated worlds, and Adam B. Levine of Blockade Labs, who discusses Skybox AI and game development. Additionally, there are videos discussing the potential applications of AI in other areas, such as defense and longevity. The channel provides a valuable resource for those interested in learning about the intersection of generative AI and gaming, as well as related topics. https://www.youtube.com/watch?v=fsg83BvsXww The article discusses the potential risks and opportunities of motion tracking data in extended reality (XR) and the metaverse. While this data is often presumed to be innocuous, recent studies have shown that it has the potential to profile and deanonymize XR users, posing a significant threat to security and privacy in the metaverse. The article highlights the need for increased awareness and caution regarding the collection and use of motion data in XR and metaverse experiences. https://arxiv.org/abs/2306.06459 Beauty company Coty has created a metaverse for its 11,000 global employees, using technology from Spatial. The virtual campus is based on 3D tech and tools from Spatial, and aims to develop upskilling and future innovation for Coty brands. The campus includes features such as text and vocal chat forums, screen and filesharing, customisable avatars and location exploration and quest fulfilment, as well as a "phygital" rewards system. Coty and Spatial said the campus was a significant milestone in crafting "new models for scalable gamified experiences". https://drugstorenews.com/coty-enters-metaverse-campus-global-workforce Tencent Cloud has announced its commitment to support the development of the Web3 ecosystem at the first global Web3 summit. The cloud business of Tencent has unveiled a development roadmap for a full suite of blockchain API services and its Tencent Cloud Metaverse-in-a-Box offering. The platform will provide technical support for Web3 and work with industry partners to nurture the Web3 ecosystem. Tencent Cloud plans to promote sustainable growth by offering Web3 builders cloud solutions credits, marketing workshops and publicity opportunities. It has also signed a Memorandum of Understanding with Ankr, a Web3 infrastructure provider, to jointly develop a full suite of blockchain API services. The API services will cover security, storage, identity management, middleware, development tools, and data analytics, among other areas. https://www.tencentcloud.com/dynamic/news-details/100437?lang=en&pg=
   <https://www.tencentcloud.com/dynamic/news-details/100437?lang=en&amp;pg=>
  - The concept of a "predictive metaverse", an artificial intelligence (AI)-powered advanced form of a virtual world that could predict and anticipate its users' intentions and behaviors, is offering new ways to improve engagement, creativity and personalised learning in [[Education and AI]], according to an article in eSchool News by Roger James Hamilton, Founder and CEO of Genius Group. As virtual reality worlds become increasingly sophisticated and realistic, they are also becoming more intelligent and able to analyse data in real-time to deliver tailored recommendations and feedback to individual users, for example to optimise the virtual marketplace to improve user experience and increase sales. https://www.eschoolnews.com/educational-leadership/2023/04/21/predictive-metaverse-the-future-of-guided-learning/
  - Reddit and its partners use cookies and similar technologies to improve the quality of its website, personalize content and advertising, measure advertising effectiveness, and ensure the proper functionality of its platform. By accepting all cookies, users agree to the use of cookies. However, by rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of its platform. Reddit's Cookie Notice and Privacy Policy provide more information about its use of cookies. Recently, Meta, Microsoft, and Disney have reversed their bets on the metaverse. Posts related to this topic on r/CryptoCurrency have been removed by moderators. https://www.reddit.com/r/CryptoCurrency/comments/128hqkw/meta_microsoft_and_disney_are_reversing_their/ Exokit, Adrian's opensource mixed reality toolkit for web <https://github.com/exokitxr/exokit>
  - [[Apple]] has acquired Mira, a Los Angeles-based startup that creates AR headsets for various companies and the US military. The acquisition, which was confirmed by [[Apple]], follows the company's launch of its $3,499 mixed reality headset, the Vision Pro. Two former Mira employees said that Jony Ive, [[Apple]]'s former design chief, was an advisor to the startup at one point. Mira's military contracts include a small agreement with the US Air Force and a $702,351 agreement with the Navy while its contract with Nintendo World provides headsets for the Mario Kart ride at its theme parks in Japan and LA's Universal Studios. It is currently unknown if [[Apple]] will continue Mira's military contracts. https://www.theverge.com/2023/6/6/23751350/[[apple]]-mira-ar-headset-startup
  - These posts include insights on the development of XR technology, possible applications, and innovations in the field. https://www.linkedin.com/posts/reneschulte_visionpro-ar-vr-activity-7072953336156602369-_2pL?utm_source=share&utm_medium=member_android
  - [This text is a brief description of a position paper published by the OMA3 Portaling and Mapping Working Group (PMWG) on the transformative technology of portals in the metaverse. The position paper provides insights into the potential of a universal portal system to reshape digital interaction for consumers, businesses, and platforms. It highlights the development process, strategic approach, and vision of OMA3 in setting new standards for the Web3 universe. The paper invites readers to comment on it by creating an issue or commenting in the Google Doc. It also encourages individuals to join OMA3 and participate in the Portaling and Mapping Working Group if they would like to contribute to the project. The paper is licensed under a Creative Commons Attribution 4.0 International License.](https://github.com/oma3dao/portal-position-paper)
  - [The Open Metaverse Alliance for Web3 (OMA3) has announced the Inter-World Portaling System (IWPS) project, aimed at creating standards for seamless travel between metaverse platforms. OMA3, based in Zug, Switzerland, is a consortium of top metaverse companies in Web3. The IWPS project will allow users to walk through inter-world portals and travel between metaverse platforms such as Alien Worlds, My Neighbor Alice, and Sandbox. OMA3 believes that IWPS has the potential to enhance accessibility and engagement within the digital realm by bridging disparate metaverse environments. They compare IWPS to the development of transportation technology like railroads and highways in the industrial revolution and the introduction of the HTTP standard in the digital realm, both of which facilitated the free flow of goods, services, and information. OMA3 has released a position paper outlining the importance of IWPS and inviting participation and comments from the Web3 metaverse community. They see the development and standardization of IWPS as the next frontier in the evolution of the metaverse, enabling new levels of connectivity, commerce, and shared experiences.](https://venturebeat.com/games/oma3-offers-way-for-users-to-travel-between-blockchain-gaming-worlds-in-the-metaverse/)
  - [Beatoven.ai is a website that uses advanced AI music generation techniques to create unique, mood-based music for videos and podcasts. Users can start by choosing a genre or style that suits their theme and then make cuts to reflect different moods throughout their content. With a rich selection of 16 moods to choose from, users can easily find the right mood for each cut. Once the desired moods have been selected, users can hit compose and let the AI algorithm generate a unique track for them.   The website is useful for various types of content creators, including agency/production houses, YouTube creators, podcast creators, indie game developers, audiobook producers, and web3 and metaverse companies. It offers a range of benefits, such as packing a punch in videos, creating a signature sound for YouTube channels, making intro and outro sections special for podcasts, designing themes and background music for games, elevating audio books with atmospheric music, and providing background music for metaverse experiences.   Beatoven.ai also allows users to customize the length, genre, mood, and instruments of their tracks. The resulting music is production-ready with industry-standard mixing and mastering.   The licensing terms for the music on Beatoven.ai grant users a perpetual license for usage on their chosen platforms. All copyrights for the music created on the website belong to Beatoven Private Limited.   The website offers a free membership option, allowing users to create and download music for the first 15 minutes of their projects. There is also a premium pricing plan available for unlimited usage.   Overall, Beatoven.ai is a versatile and user-friendly platform that offers customized, royalty-free music for a wide range of content creators.](https://www.beatoven.ai/)
  - [A predictive metaverse is an advanced virtual world powered by AI and machine learning algorithms. It can predict and anticipate the actions and behaviors of its users, allowing for personalized recommendations, predictions, and feedback. This concept is becoming increasingly appealing to content creators and educators in the field of education, as it can improve engagement and creativity and create personalized learning programs.  In a predictive metaverse, AI algorithms can analyze real-time data to understand the preferences, behaviors, and intentions of users. This information can then be used to optimize the virtual world and improve the user experience. For example, an AI algorithm could predict user behavior in a virtual marketplace, such as what they are likely to buy and when they are likely to buy it. This data can be used to optimize the marketplace and increase sales.  While the term metaverse is often associated with the gaming industry, its potential applications in education are significant. The predictive metaverse can enhance virtual learning by providing personalized guidance and support to students. It can help create immersive learning experiences and improve student engagement and motivation.  As virtual worlds become more sophisticated and realistic, the predictive metaverse holds great promise for the future of guided learning. By harnessing the power of AI and machine learning, educators can create personalized learning experiences that cater to the unique needs and preferences of each student. This technology has the potential to revolutionize education by providing tailored instruction, real-time feedback, and personalized recommendations, ultimately improving student outcomes and overall learning experiences.](https://www.eschoolnews.com/educational-leadership/2023/04/21/predictive-metaverse-the-future-of-guided-learning/)
  - [This text is a Reddit post from the r/CryptoCurrency subreddit. The post mentions that Meta (formerly known as Facebook) as well as Microsoft and Disney are reversing their bets on the metaverse. However, the post has been removed by the subreddit moderators. The comments in the post discuss the current hype around artificial intelligence (AI) and the need for companies to hop on that trend. Some users express their opinions that these companies went about their approach to the metaverse in the wrong way. The post also includes comments about the ownership of a bot that has received a high number of moons (a cryptocurrency earned on the Reddit platform) and speculation on the future of meta platforms like Meta. The post is followed by a list of related crypto news articles from various sources, covering topics such as refunds in crypto scams, acquisitions of Bitcoin, changes in cryptocurrency taxes, and the launch of web3 games by Ubisoft.](https://www.reddit.com/r/CryptoCurrency/comments/128hqkw/meta_microsoft_and_disney_are_reversing_their/)
  - [Tencent Cloud, the cloud business of global tech company Tencent, has announced its commitment to support the development of the Web3 ecosystem. The company unveiled its development roadmap for a full suite of blockchain API services and its Tencent Cloud Metaverse-in-a-Box offerings. It aims to provide a strong technological foundation for Web3 builders and be the digital enabler for the Web3 industry. Tencent Cloud will collaborate with Web3 partners to accelerate the adoption of Web3. The company also signed a Memorandum of Understanding (MoU) with Web3 infrastructure provider Ankr to jointly develop a full suite of blockchain API services. Additionally, Tencent Cloud announced strategic collaborations with Avalanche, Scroll, and Sui, three other Web3 blockchain partners, to build a stronger foundational infrastructure for global builders. The collaboration with Avalanche will explore blockchain solutions for enterprise customers, while the partnership with Scroll aims to scale Ethereum through an open-sourced zk-Rollup. The collaboration with Sui will optimize the on-chain gaming experience. Furthermore, Tencent Cloud introduced Tencent Cloud Metaverse-in-a-Box, a comprehensive solution that integrates infrastructure, products, SDKs, and low-code solutions. The Metaverse-in-a-Box allows businesses to develop metaverse applications rapidly. Tencent Cloud hosted its first global Web3 summit, Tencent Cloud Web3 Build Day, to discuss the latest blockchain landscape and development trends in Web3 games and social networks.](https://www.tencentcloud.com/dynamic/news-details/100437?lang=enandpg=)
  - BrahmGAN is a cutting-edge 3D content creation tool that uses advanced technology such as NeRF, GAN, and Blockchain to create 3D content effortlessly, without requiring technical expertise or complex software. The tool is designed for industries such as eCommerce, XR, and Gaming. BrahmGAN's NeRF solutions for VR Services are capable of creating stunning worlds within days. The company is based in Bengaluru and Singapore. Interested parties can contact them via email at info@brahmgan.com or join their mailing list to stay updated on their latest developments. http://www.brahmGAN.ai
  - Hallway is an app that empowers creators to tell their stories using avatars instead of their real faces, making it easy for anyone to express their creativity without the limitations of video as a medium. It is a single-camera app that supports a variety of avatars and requires no custom hardware or clunky setups. The app is currently taking VTuber and 2D/3D artist intakes to join the waitlist for early access. Hallway provides a new avenue for creators to express themselves and join the next generation of creators. http://joinhallway.com/
  - BrahmGAN is an AI-based 3D content creation platform that uses advanced technologies like NeRF, GAN, and Blockchain for quick and decentralized content creation. BrahmGAN's text-to-3D tools enable users to create 3D content without technical expertise or complex software. BrahmGAN caters to industries like XR, gaming, and eCommerce and uses NeRF for video to 3D, and Blockchain for democratizing 3D content creation globally. BrahmGAN has offices in Bangalore and Singapore and has clients like Taanga Studios. http://www.brahmGAN.ai
  - [In this post on Reddit, a user shares their experience developing a C++ library for running Stable Diffusion, an AI image generation model. They explain that the library does not rely on Python and can use the GPU for executing the AI models involved. The user's main motivation for developing this library was to use its image synthesis capabilities in real-time 3D software written in C++.   The user shares their first results, which include a simple library available as an integration-ready MIT licensed Nuget package, capable of running Stable Diffusion models in ONNX format. They note that the code is currently targeting Windows, but only a small portion related to image editing tasks relies on the WinAPI, which can easily be replaced for other platforms.  Several redditors comment on the post, expressing interest in the library and discussing their own experiences with Stable Diffusion and C++ implementations in machine learning. Some users appreciate the user interface design of the library, while others discuss the advantages and disadvantages of using Python for machine learning tasks.  The user also mentions that they are working on an Xbox release and have already generated Stable Diffusion images on the Xbox. There are further discussions on related topics, such as RAID arrays, graphics libraries for Rust, and C++ language support in Xcode 15.  Overall, the post provides an overview of a C++ library for running Stable Diffusion and highlights the user's experiences and progress in developing it.](https://www.reddit.com/r/cpp/comments/143olej/an_open_source_library_for_running_stable/)
  - [The text is a Reddit post discussing the process of generating and applying AI-generated images to a 3D model. The poster shares the results of their image generation using AI and provides details about the rendering process. They mention using Blender and a custom UV map to project the generated image onto the face of the 3D model.  The poster explains that they manually removed diffuse and specular reflections during the AI image generation stage and conducted additional tests to bring out more details. They aim to create a color map that can be used without adjustments.  Other users in the comments ask about the training process and suggest alternative methods for projection mapping. The poster responds, stating that they did additional training with images that suppress shadows, light, and AO. They also mention that the AI-generated image was baked into a custom UV map before rendering.  Some users express interest in learning the process and suggest creating a tutorial. The original poster mentions that the process takes a lot of time and effort and that the results may vary. They recommend referring to their previous test articles for more information on AI image generation.  The post concludes with a list of related posts from other subreddits discussing topics such as computer vision, AI-generated avatars, and visualizations in Stable Diffusion.](https://www.reddit.com/r/StableDiffusion/comments/11ol47u/3d_model_face_color_map_generation_test3/)
  - The article discusses Reddit's use of cookies and similar technologies to provide a better experience to users. By accepting all cookies, users agree to Reddit's use of cookies to provide and maintain their services, personalize content and advertising, and measure advertising effectiveness. If users reject non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of the platform. Additionally, the article includes a user-generated post on using Mixamo, a free website with a large library of 3D animations, for character posing. Several commenters offer their own suggestions and recommendations for related tools and workflows on different subreddits. https://www.reddit.com/r/StableDiffusion/comments/11owo31/something_that_might_help_ppl_with_posing/
  - Mixed reality, spatial, metaverse and telecollaboration
  - [The text discusses the use of cookies and similar technologies on Reddit's platform. By accepting all cookies, users agree to the use of cookies to improve their experience, deliver and maintain services, personalize content and advertising, and measure the effectiveness of advertising. Rejecting non-essential cookies still allows Reddit to use certain cookies for proper platform functionality. The text also mentions that more information can be found in the Cookie Notice and Privacy Policy.  The rest of the text is a Reddit post from the r/StableDiffusion subreddit. The post discusses a generalist model that the OP (original poster) will be releasing soon. The model is capable of creating images with resolutions ranging from 1024 to 1080p, and it is fine-tuned on SD 2.1 768X. The model can generate a variety of images, including photorealism, paintings, and anime. The OP shares some example images generated during the training process and invites others to test prompts for image creation. The post receives several comments and discussions about the model's capabilities, potential uses, and suggestions for improvement.  Additionally, the text includes a list of other posts from various subreddits such as r/3dsmax, r/colorists, and r/StableDiffusion. These posts cover topics related to rendering, color grading, using AI-generated visuals, and showcasing artistic works.](https://www.reddit.com/r/StableDiffusion/comments/13j78fo/some_examples_of_the_generalist_model_i_will_be/)
  - Scan the World is a museum of sculptures, artifacts, and statues made possible through 3D scanning and printing technology. The scans of these historical pieces are free to download for accessibility, educational and cultural heritage purposes. Scan the World uses photogrammetry to capture these high-resolution scans, from digital archaeology to downloadable monuments and buildings, 3D printing enthusiasts will be able to find it at the museum. The museum offers more than 20 categories ranging from Africa to South America and everything in between, and it ranks objects based on popularity, date published, and views. Visitors have instant access to the MyMiniFactory library, which is community-powered with users able to upload their 3D printable designs as well. The ultimate goal of Scan the World is to make historical and artistic objects more widely available to people around the world. It’s the perfect solution for those who want to own an authentic, accurate replica of an important sculpture, artifact, or more. https://www.myminifactory.com/category/scan-the-world
  - LinkedIn uses both essential and non-essential cookies to provide, secure, analyze and improve their services, as well as show users relevant ads on and off the platform, according to their Cookie Policy. Users can accept or reject non-essential cookies for this use and can update their choices at any time in their settings. In a post by Rene Schulte, the Head of 3D & Quantum CoPs at Microsoft, he shared resources for Unity developers to prepare for developing for Apple's VisionPro and visionOS. The post sparked conversations and comments from other professionals in the AR/VR industry, including discussions about AR's utility, developments in volumetric video and tracking, and the use of digital twins in building. https://www.linkedin.com/posts/reneschulte_visionpro-ar-vr-activity-7072953336156602369-_2pL?utm_source=share&utm_medium=member_android
  - [The text discusses a research paper on a diffusion model called 3DiM for 3D novel view synthesis. The model takes a single input view and generates consistent and sharp completions across many views. It uses a pose-conditional image-to-image diffusion model that takes a source view and pose as inputs and generates a novel view for a target pose as output. The model employs stochastic conditioning, where a random conditioning view is selected from previously generated views at each denoising step, to improve 3D consistency. The paper introduces a new evaluation methodology called 3D consistency scoring to assess the 3D consistency of the generated objects. The model is geometry-free, does not rely on hyper-networks or test-time optimization, and can easily scale to a large number of scenes.  The paper presents samples generated by 3DiM trained on the ShapeNet dataset. The model achieves high fidelity and approximate 3D consistency in generating completions from a single view. It also demonstrates the model's effectiveness by generating 3D objects from in-the-wild images downloaded from the internet. The paper compares 3DiM to prior work on the SRN ShapeNet benchmark and shows that 3DiM outperforms other methods in terms of generating sharp samples. The paper also discusses the technical details of 3DiM, including its generation process using stochastic conditioning and the modifications made to the image-to-image UNet model to achieve high-quality results.  Overall, the paper highlights the effectiveness of diffusion models for 3D novel view synthesis and introduces novel techniques, such as stochastic conditioning and 3D consistency scoring, to improve the quality and consistency of generated views. The proposed model, 3DiM, shows promising results in generating realistic and consistent 3D objects from a single input view.](https://3d-diffusion.github.io/)
  - [The paper presents a monocular depth estimation method using denoising diffusion models. The goal is to generate accurate depth maps from single RGB images. The authors address the problem of noisy and incomplete depth maps in the training data by using step-unrolled denoising diffusion, an L1 loss, and depth infilling during training.  To overcome the limited availability of supervised training data, the authors leverage pre-training on self-supervised image-to-image translation tasks. Despite the simplicity of the approach, their model achieves state-of-the-art (SOTA) performance on the indoor NYU dataset and near SOTA results on the outdoor KITTI dataset.  The approach involves infilling missing depth in ground truth depth maps using nearest neighbor interpolation. Then, noise is added to the depth map and a neural network is trained to predict the noise given the RGB image and noisy depth map. During fine-tuning, one step of the forward pass is unrolled and the ground truth depth map is replaced with the model's prediction.  The DepthGen model achieves an absolute relative error of 0.074 on the indoor NYU dataset and a competitive relative error of 0.064 on the outdoor KITTI dataset, demonstrating its accuracy in depth estimation.  The paper also introduces a text-to-3D pipeline that combines DepthGen with off-the-shelf text-to-image and text-conditioned image completion models. This pipeline allows for generating 3D point clouds from text prompts.  In conclusion, the proposed method of monocular depth estimation using diffusion models achieves state-of-the-art performance, even with limited supervised training data. The approach is simple yet effective and can be integrated into a text-to-3D pipeline for generating 3D scenes from text prompts.](https://depth-gen.github.io/)
  - [The text provided is a collection of video titles and descriptions related to Blender, AI, and 3D design. The videos cover topics such as creating isometric rooms, using AI in 3D design, Unreal Engine, toon shading in Blender, QR code art, GPT (Generative Pre-trained Transformer) engineering, creating Ghibli-style characters, new features in Blender 3.6, animation in Blender, and adding vegetation in Twinmotion. The videos are created by various individuals and brands, including vertex vendor, Unreal Sensei, Quick QR Art, ENFANT TERRIBLE, Matt Wolfe, Ian Wootten, Brandon's Drawings, Polyfjord, Charlie Barber, and vishal panjeta. The text also mentions a Google company and provides information about cookie usage and privacy settings when using Google services.](https://www.youtube.com/watch?v=GZO7TAlVE_8)
  - [WebXR is a device API that allows for VR/AR experiences through web browsers. However, monetization has been a major issue for the platform, with indie creators struggling to capture value. Most WebXR apps appear as prototypes because developers find it difficult to justify investing more resources into the ecosystem. The current ways people pay for WebXR content include purchasing tickets, using cryptocurrency for virtual land, and accessing certain features by login or ownership of bot handles. The process of paying for WebXR content can be made easier and more frictionless by integrating payment methods like Apple Pay or Google Pay while in VR. Artists can get paid through various means such as commissions, Patreon, grants, VC investment, and event tickets. Non-payment based monetization strategies like advertising are also being explored. A list of 101 ideas for WebXR monetization includes platforms like Patreon and Github Sponsors, virtual market stalls, virtual land parcels, and in-world advertising. Other strategies include payment processing integration with platforms like PayPal or Discord, creating virtual actors and performers, storytelling, and podcast sponsorships. Advertisements targeted at 18-44 year old males interested in software, gaming, and VR have shown promising results. A Github repository for WebXR monetization examples is in progress. Despite these efforts, monetization in the WebXR ecosystem is still a work in progress, and more exploration and innovation is needed.](https://hackmd.io/@xr/monetization)
  - The paper proposes a system called CLIP-Actor, which animates a 3D human mesh to conform to a text prompt by recommending a motion sequence and optimizing mesh style attributes. The system's novelty lies in its ability to recommend motion that conforms to the prompt in a pose-agnostic and temporally-consistent manner while leveraging multi-frame human motion and rejecting poorly rendered views. The authors demonstrate that CLIP-Actor produces plausible and human-recognizable style 3D human mesh in motion with detailed geometry and texture solely from a natural language prompt. The paper's methodology shows that CLIP-Actor is an effective and efficient way to generate plausible results when the pose of an artist-designed mesh does not conform to the text prompt from the beginning. The research has been sponsored by the Korean government's grant funded by the Institute of Information & communications Technology Planning & Evaluation (IITP). https://clip-actor.github.io
  - [The paper CLIP-Actor: Text-Driven Recommendation and Stylization for Animating Human Meshes proposes a system for animating human meshes based on text prompts. The system, called CLIP-Actor, generates motion sequences and optimizes mesh style attributes to conform to a given text prompt.  The authors highlight a limitation of previous work, which struggled to produce realistic results when the starting pose of a pre-designed mesh did not align with the text prompt. To address this issue, CLIP-Actor leverages a large-scale human motion dataset with language labels to build a text-driven human motion recommendation system. It suggests a motion sequence that aligns with the given prompt in a coarse-to-fine manner.  In addition, the authors introduce a novel neural style optimization technique that adds detail and texture to the recommended mesh sequence in a temporally-consistent and pose-agnostic manner. They also propose spatio-temporal view augmentation and mask-weighted embedding attention techniques to stabilize the optimization process by incorporating multi-frame human motion and rejecting poorly rendered views.  The results of CLIP-Actor demonstrate its ability to generate plausible and human-recognizable 3D human meshes in motion with detailed geometry and texture solely from natural language prompts.  The paper includes the BibTeX citation for academic referencing and acknowledges the support received from the Institute of Information and Communications Technology Planning and Evaluation (IITP) in Korea for funding the research.  The website containing the paper and code is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. The source code for the system is mainly borrowed from Keunhong Park's Nerfies website, and feedback and questions can be directed to Kim Ji-Yeon.](https://clip-actor.github.io)
  - [Magic123 is a two-stage solution for generating high-quality, textured 3D meshes from a single unposed image. The first stage optimizes a neural radiance field to create a coarse geometry, while the second stage uses a memory-efficient differentiable mesh representation to produce a high-resolution mesh with realistic textures. The 3D content is learned through reference view supervision and guided by both 2D and 3D diffusion priors. The system includes a tradeoff parameter that controls the balance between exploring novel geometries and achieving precise results. Textual inversion and monocular depth regularization are employed to ensure consistent appearances across views and prevent degenerate solutions. Magic123 outperforms previous image-to-3D techniques, as demonstrated through experiments on synthetic benchmarks and real-world images.  The Magic123 pipeline consists of two stages: coarse and fine. In the coarse stage, an Instant-NGP neural radiance field is optimized to reconstruct a rough geometry. In the fine stage, a DMTet mesh is initialized from the coarse output and optimized to generate a high-resolution mesh with textures. Textural inversion is used in both stages to preserve object geometry and ensure consistent textures across views.  Example generated objects from Magic123 show photo-realistic 3D representations created from single images. The system offers a tradeoff between 2D and 3D priors, allowing for exploration and imagination in geometry generation or precise results with reduced details. By combining both priors and adjusting the tradeoff parameter, Magic123 consistently produces identity-preserving 3D content with fine-grained geometry and visually appealing textures.  Quantitative evaluations on the NeRF4 and RealFusion15 datasets demonstrate the effectiveness of Magic123 compared to previous state-of-the-art approaches. The system achieves top performance across various metrics, showcasing its ability to generate high-quality 3D representations.  The article credits DreamFusion authors for their website templates, and the text is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.](https://guochengqian.github.io/project/magic123/)
  - [The paper Magic123: One Image to High-Quality 3D Object Generation Using Both 2D and 3D Diffusion Priors presents a two-stage approach for generating high-quality, textured 3D meshes from a single unposed image.   In the first stage, a neural radiance field is optimized to create a coarse geometry. In the second stage, a memory-efficient differentiable mesh representation is used to generate a high-resolution mesh with visually appealing texture.   To learn the 3D content, reference view supervision and novel views guided by a combination of 2D and 3D diffusion priors are employed in both stages. A trade-off parameter controls the balance between exploration and exploitation of the generated geometry.   Textual inversion and monocular depth regularization techniques are also used to ensure consistent appearances across views and prevent degenerate solutions.   The approach, called Magic123, outperforms previous image-to-3D techniques according to extensive experiments on synthetic benchmarks and real-world images.   The code, models, and generated 3D assets are available on GitHub.](https://huggingface.co/papers/2306.17843)
  - This is a conversation and code change history on the GitHub platform for the "dream-textures" repository. It appears that the main topic of discussion is the addition of a new feature called "Project Dream Texture operator". This feature involves the use of depth-to-image projection to apply a texture to a mesh based on user input. The conversation includes comments and feedback from users who have tested the feature, as well as responses from the repository owner who is implementing the changes. There are also code commits and updates to various files related to the feature and its implementation. https://github.com/carson-katri/dream-textures/pull/409
  - This text appears to be a GitHub pull request for the "dream-textures" repository, with the pull request titled "Add Project Dream Texture operator". The pull request adds functionality that allows users to project a texture onto a mesh using a text prompt and depth data. The pull request includes a log of commits and comments from users who have tested the functionality and provided feedback. It seems that the pull request has been approved by at least two reviewers and has been merged into the main branch of the repository. https://github.com/carson-katri/dream-textures/pull/409
         | 
       |
  - [SDFStudio is a unified and modular framework for neural implicit surface reconstruction. It provides an implementation of three major implicit surface reconstruction methods: UniSurf, VolSDF, and NeuS. The framework also supports various scene representations, point sampling strategies, and incorporates advances in monocular cues, geometry regularization, and multi-view consistency. The modular implementation of SDFStudio makes it easy to transfer ideas from one method to another. The repository includes documentation, datasets, and examples for users to get started.  To use SDFStudio, users need to set up the environment by installing CUDA and creating a Conda environment. The framework requires Python 3.7 or higher. Users can install the necessary dependencies, including PyTorch and tiny-cuda-nn, using pip. After installing the dependencies, users can clone the SDFStudio repository and install it using pip. Tab completion can be enabled for better user experience.  To train a model, users can download test data and train a model on a specific dataset using the provided commands. SDFStudio supports different models and parameters can be modified to train different models. The training progress can be tracked using visualization tools such as the viewer, Tensorboard, or Weights and Biases.  Once a model is trained, users can export the mesh and render it. The repository provides commands for extracting the mesh and rendering it. Video rendering and customization of the camera path are also supported. Advanced options include training models other than NeuS-facto and modifying the configuration.  SDFStudio is built on top of the Nerfstudio project and incorporates contributions from various developers. If the library is used or the documentation is found useful, the authors request users to consider citation.  The repository includes a comprehensive README file that provides detailed instructions and explanations for using SDFStudio. It also provides information about the contributors, license, and other resources.](https://github.com/autonomousvision/sdfstudio)
  - [The text summarizes a GitHub repository called CLIP-Actor, which is a pytorch implementation for the ECCV 2022 paper, CLIP-Actor: Text-Driven Recommendation and Stylization for Animating Human Meshes. CLIP-Actor is a system for text-driven motion recommendation and neural mesh stylization for human mesh animation. The repository contains code developed on Ubuntu 18.04 with Python 3.7, CUDA 10.2, and PyTorch 1.9.0. The system requirements include Python 3.7, CUDA 10.2, and a single GPU with a minimum of 24 GB RAM. The repository provides instructions for setting up the environment and installing the required dependencies. It also provides instructions for downloading the necessary body models and datasets. The repository includes example commands to generate stylized 4D human avatars based on prompts, such as a scuba diver is scuba diving or Freddie Mercury is dancing. The outputs include final video files, stylized .obj files, colored render views, and screenshots. The repository includes a citation for the paper and acknowledges the prior work that inspired the CLIP-Actor implementation.](https://github.com/youwang-kim/clip-actor)
  - [Mixed reality design guidelines from Meta](https://developer.oculus.com/resources/mr-design-guideline/)

  - ## Bibliography
  - [Crimson Publishers](https://crimsonpublishers.com/cojts/pdf/COJTS.000578.pdf)
  - [The Case Against Micropayments](https://www.researchgate.net/publication/2899901_The_Case_Against_Micropayments)
  - [The Fall and Rise of Micropayment Systems](https://www.researchgate.net/publication/226658669_The_Fall_and_Rise_of_Micropayment_Systems)
  - [Micropayments and Mental Transaction Costs (Satoshi Nakamoto Institute)](https://nakamotoinstitute.org/library/micropayments-and-mental-transaction-costs/)
  - [Szabo’s Micropayments and Mental Transaction Costs (Nasdaq)](https://www.nasdaq.com/articles/szabos-micropayments-and-mental-transaction-costs-25-years-later)
  - [Szabo’s Micropayments and Mental Transaction Costs (Bitcoin Magazine)](https://bitcoinmagazine.com/technical/szabos-micropayments-and-mental-transaction-costs-25-years-later-)
  - [The Case Against Micropayments (University of Minnesota)](https://www-users.cse.umn.edu/~odlyzko/doc/case.against.micropayments.pdf)
  - [Autonomous AI Agents in Decentralised Finance](https://www.researchgate.net/publication/387049652_Autonomous_AI_Agents_in_Decentralized_Finance_Market_Dynamics_Application_Areas_and_Theoretical_Implications)
  - [AI Agents in Banking and Payments (Sardine)](https://www.sardine.ai/blog/ai-agents-payments)
  - [How AI Can Unlock Micropayments for Better Content Monetisation (Medium)](https://medium.com/dappier/how-ai-can-unlock-micropayments-for-better-content-monetization-966b0f9439b1)
  - [Understanding the Lightning Network (ZebPay)](https://zebpay.com/blog/understanding-the-lightning-network-the-future-of-btc-transactions)
  - [The Bitcoin Lightning Network (NYDIG)](https://www.nydig.com/learn/the-bitcoin-lightning-network)
  - [Role of the Bitcoin Lightning Network in Digital Micro-Payments (ResearchGate)](https://www.researchgate.net/publication/376682196_Role_of_the_Bitcoin_Lightning_Network_in_Digital_Micro-Payments)
  - [Micropayments and Nanopayments (CoinGeek)](https://coingeek.com/bitcoin101/micropayments-and-nanopayments-the-future-of-tiny-payments-through-bitcoin/)
  - [Lightning Network Micropayments (Netcoins)](https://blog.netcoins.com/lightning-network-micropayments-benefits-and-challenges/)
  - [Jack Dorsey-Backed Nostr Emerges as Bitcoin’s Social Layer (Bitcoin Magazine)](https://bitcoinmagazine.com/technical/jack-dorsey-backed-nostr-emerges-as-bitcoins-social-layer-at-riga-conference-)
  - [Unlocking Decentralised Payments (Murray Rudd)](https://www.murrayrudd.pro/unlocking-decentralized-payments-insights-from-nostrs-bitcoin-integration/)
  - [Monetisation Within The Nostr Ecosystem (The Bitcoin Manual)](https://thebitcoinmanual.com/articles/monetisation-nostr-ecosystem/)
  - [Nostr, Love at First Sight (Dries Buytaert)](https://dri.es/nostr-love-at-first-sight)
  - [Designing Digital Payment Experiences (ResearchGate)](https://www.researchgate.net/publication/378550360_Designing_Digital_Payment_Experiences_The_Crucial_Role_of_User-Centered_Design_and_Effective_User_Feedback_Integration)
  - [User Experience in Digital Payments (Softjourn)](https://softjourn.com/insights/user-experience-in-digital-payments-a-guide-through-best-practices)
  - [The Role of UX Design in Payment Integration (Luqra)](https://www.luqra.com/the-role-of-user-experience-design-in-payment-processing-integration/)
  - [Maybe There is a Way Micropayments Can Be Successful for News (INMA)](https://www.inma.org/blogs/product-initiative/post.cfm/maybe-there-is-a-way-micropayments-can-be-successful-for-news)
  - [The Internet of Value: Integrating Blockchain and Lightning Network Micropayments (arXiv)](https://arxiv.org/abs/2412.19384)
  - [Who Will Become The VISA of the AI Economy? (ChainCatcher)](https://www.chaincatcher.com/en/article/2161951)
  - [Micropayments 101: A Guide (Stripe)](https://stripe.com/ae/resources/more/micropayments-101-a-guide-to-get-businesses-started)
  - [The Psychology Behind Micropayments (Medium)](https://medium.com/dreamcommerce/the-psychology-behind-micropayments-how-they-match-our-modern-world-4d7aaf47449d)
  - [Factors Influencing the Adoption of Electronic Payment Cards (IISTE)](https://www.iiste.org/Journals/index.php/RJFA/article/view/19147)
  - [How Behavioural Science Can Unleash Digital Payments Adoption (Simon-Kucher)](https://www.simon-kucher.com/sites/default/files/2019-01/SimonKucher_Report_Payment%20Adoption_Final.pdf)
  - [Ethical Implications and Challenges of AI in Business Operations (ResearchGate)](https://www.researchgate.net/publication/387653122_Ethical_Implications_and_Challenges_of_AI_Implementation_in_Business_Operations)
  - [Ethical Considerations for AI Financial Planning (OneStream)](https://www.onestream.com/blog/ethical-considerations-for-ai-financial-planning/)

  - ## Conclusion
  - Micropayments rest at the confluence of technological breakthroughs and insights from behavioural economics.
  - The [[Lightning and Similar L2]] and [[Nostr protocol]] have paved the way for frictionless payments, while AI agents can address psychological barriers by automating trivial transactions.
  - User experience design emerges as the pivotal determinant of success; only when microtransactions become near-invisible—with transparency and trust controls—will the public truly embrace them.
  - The future hinges on collaboration among developers, UX experts, and policymakers to foster interoperable, privacy-respecting solutions.
  - By overcoming both mental and technical transaction costs, micropayments can finally unlock new economic possibilities and empower a fairer, more direct online marketplace.

  - ## User Experience (UX) Design Principles

  - ## Interfaces and Scaling
  - The evolution and scaling of interfaces for Large Language Models have significant implications for user interaction and the accessibility of AI technologies. This area explores the integration of LLMs into various interfaces, including immersive spaces and metaverse applications, which opens up new avenues for interaction and engagement with AI.

  - ### Key Resources and Projects
  - **Web LLM Project**: A pioneering initiative bringing LLM functionalities to the browser, enabling users to interact with these models directly from their web interface. [Web LLM Project](https://example.com/link-to-web-llm-project)
		- *This project demonstrates the feasibility and potential of deploying complex AI models in consumer-friendly interfaces.*
  - **Browser-based Models**: The [Web LLM project](https://simonwillison.net/2023/Apr/16/web-llm/) introduces a browser-based implementation of the vicuna-7b Large Language Model. This project showcases the practical application of LLMs in web environments, enabling users to interact with sophisticated AI models directly within their browsers. The initiative highlights the evolving accessibility of AI technologies, bringing powerful computational linguistics tools to a broader audience without the need for specialized hardware.

  - ## Overview
  - [The Golden Key](https://schedule.sxsw.com/2024/films/2196919) is an immersive, interactive art installation that generates never-ending, location-specific fairy tales using AI technologies. It combines large language models, generative AI, and user input to create unique, personalized narratives that evolve over time.

  - #### Nostr
  - Nostr \[pronounced no-star\] is a [decentralized openprotocol](https://www.nostr.how/) that aims to improve the social mediaexperience by addressing issues of censorship and data collection. Theprotocol operates by allowing users to post and view notes on serverscalled relays, and view and post these notes through apps calledclients. The open nature of the protocol allows for competition and afree flow of information, as users can choose to use different relays orclients if they are censored. This is because the protocol isdecentralized and controlled by no one.
  - The decentralized nature of Nostr means that there is no centralauthority that can control the flow of information. This is achievedthrough the use of relays and clients, which are run by differentindividuals or entities. Users have the freedom to choose which relaysand clients they want to use, and as a result, their feeds are populatedwith content from the people they choose to follow. If a relay or clienttries to censor a user, they can simply switch to a different one. Thisis a major advantage over traditional centralized social media platformswhere one entity holds all the control over the flow of information andcan censor or manipulate the content that users see.
  - Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
  - Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
  - This potential step-change improvement to the social media experiencefor everyday people addresses issues of censorship and data collection.
  - Nostr is “The simplest open protocol that is able to create acensorship-resistant global "social" network once and for all.”according to it’s [github page](https://github.com/fiatjaf/nostr). Morethan that it’s a client side validated proof of who a user isinteracting with, hence being in this identity section. To be clear,it’s not a completely peer to peer system in that it uses (very dumb)relay servers, but this gives it some of the best characteristics ofboth paradigms. This has the following advantages for our metaverseapplication;
  - it’s lightweight, with minimal network overhead and complexity
  - it’s real-time using websockets
  - anyone can run a relay server, so one can be run in the deployment in the final section of the book.
  - Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
  - it’s open-source
  - it is itself [Turing Complete](https://snort.social/e/note1evkdgcg0dw8ckyqsqhnk4wy55h7w97twjf8etcq2tr9sv5urlszqjc9p6v) and therefore able to execute any code within it’s message protocol
  - there are multiple usable libraries and tools
  - it’s under active development with an excellent team. The lead, ‘Fiatjaf’ is one of the most [prolific developers](https://github.com/fiatjaf) in the lightning space.
  - it’s based on the same underlying cryptographic technology we are using elsewhere, indeed with it’s use of Bitcoin keys the identity system is global
  - it provides the identity proof that we need to validate users and objects into a virtual space
  - it enables message passing
  - it scales to be a social network as required
  - it need not rely on anything outside of a relay hosted on the metaverse server
  - it can be scaled to provide one to many bulletin board style applications within the metaverse
  - we can use it in private, group, and public modes as required
  - it integrates with the torrent network allowing storage and external referencing of arbitrary data
  - it can easily operate outside of the walled garden of the metaverse, extending the reach of the messages
  - [Nostr is incrediblypromising](https://www.forbes.com/sites/rogerhuang/2022/12/29/nostr-is-the-decentralized-protocol-that-might-replace-elon-musks-twitter/),and integrating these relays in the metaverse servers and clients of theproposed technology stack in this book might allow us globally provableidentity, with privacy by design. It can provide message passing. If allentities in the collaborative mixed reality scenegraphs are also Nostrkey pairs then schema can be applied consistently with the economiclayer using the same key system as Bitcoin. Nostr has just received asubstantial grant from Dorsey. It is core to the design later in thebook. A curated list of projects and libraries is [available ongithub](https://github.com/aljazceru/awesome-nostr).
  - Luke Childs [says](https://github.com/nostr-protocol/nips/issues/154):it“Nostr makes a good candidate to be used as a very simple DID layer.Having "Login with Nostr" auth on websites solves a lot of problems in avery elegant way, and Nostr’s main use case as a social network protocolmakes it highly suited to be used as your main identity proving key.Compare "Login with Nostr" to similar "Login with Lightning"(LNURL-auth) specs to see some easy and obvious advantages:  Remote signer vs local signer  Login with Lightning requires access to remote keys, login with Nostrrequires access to local keys ideally stored in a browser extension. Dueto the way Lightning works you can only really have one instance. Youneed all your client devices linked to a single Lightning node, thismeans most clients will be connecting to the signer remotely. Now ifyour Lightning node goes down or you lose your connection you also can’tauth with any service. This could cause circular dependencies where youlose the connection to your Lightning node so you can’t auth with theservices you need to access to debug the issue with your Lightning nodelike your hosting provider or VPN account. You could technically solvethis by replicating your LN keys to other client devices only to be usedfor local auth signing but that introduces other risks.  Unique identifier vs identity  A Lightning node is not really an identity but a unique identifier. Itjust tells you the person that auths is the same random person thatauthed last time, it doesn’t tell you who they are. A nostr pubkey is anidentity. It tells you who they are, what their name is, what they looklike, who they know, how you can pay them, how you can message them.  This is much more useful as an identity layer for an application. Theapplication can show their profile picture, username, send secure crossplatform push notifications via NIP-04 encrypted Nostr DMs, etc.  Consistent identity across services  Lightning pubkeys are sensitive private information and can leakconfidential financial information, Nostr pubkeys are safe to share withanyone. LNURL-auth adds extra steps to solve this by creating derivedsubkeys for identities that are unique to each service you auth with.This does not seem ideal, it seems the default case is that an identityis something that you do want to follow you across all your accounts.Nostr based auth behaves more appropriate in this regard. In the rarecase you need to achieve privacy and separation between certain servicesyou can still do that by using use a throwaway Nostr key for thoseservices.  User relationships across services Since authing with Nostr shares areal social identity with the service, they can also see your Nostrsocial graph. This could be useful for connecting you to people youalready know on the new service.  Low cost identity  Ideally identities should be easy to create but hard to build upreputation to limit spam while avoiding excluding people from thenetwork. It’s not clear that it will be cost effective / scalable foreveryone to run their own Lightning node so tying individual identity toa single Lightning node pubkey is problematic. Nostr keys are easy tocreate and hard reputation can be earned via PoW/DNS or building astrong social graph.”  Figure<a href="#fig:starhistory" data-reference-type="ref" data-reference="fig:starhistory">5.2</a>shows that the adoption is potentially tremendously fast.
  ![]./assets/431d39316d5fa17f89fa9e1154fa2a267517a245.png
  An illustration of the enthusiasm for Nostr compared to traditional DID based on GitHub ‘stars’.
  - This provides a web interface into the metaverse providing:
  - simple cryptographic identity assurance
  - private peer to peer chat
  - group chats and channels
  - email to private message relay
  - links into media on web hosts
  - The pace of development on Nostr is dizzying. Peer to peer video andaudio will allow us to link metaverse instances, between peers, throughapplications such as [Monstr](https://monstr.app/).
  - It’s notable that Nostr has it’s own inexpensive [hardware signingdevice](https://github.com/lnbits/nostr-signing-device) to protectidentity in situations where this might be necessary.  bfThe proposed integration of Nostr social media and messaging, alightning layer with digital objects such as Fedimint, Zerosync or RGB,AI agents, Vircadia, and federated Bitcoin is the core value propositionof this book. This work pre-dates [Meta andZuckerbergs](https://www.theverge.com/2023/4/26/23699633/mark-zuckerberg-meta-generative-ai-chatbots-instagram-facebook-whatsapp)stated intent in this regard by 18 months, and is differentiated stillby our focus on emerging markets and decentralisation.

  - ##### DID principles
  - The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ## User-Side Components

  - ## Layer 3: The Application Layer
  - Layer 3 solutions are envisioned as an "application layer" built on top of Layer 2 protocols. Their primary focus will be on interoperability, customization, and enhanced user experience.

  - ### Case Studies and Research

  * **[XR Accessibility – Learning from the Past and Addressing Real User Needs for Inclusive Immersive Environments](https://doi.org/10.1007/978-3-030-58805-2_25):** This research explores how XR technologies can be made accessible to users with various disabilities, including blindness, stroke recovery, and intellectual disabilities. The study highlights the use of spatial sound for object location and interaction, as well as alternative symbolic representations for information accessibility.
  * **[Inclusive Immersion: A Review of Efforts to Improve Accessibility in Virtual Reality, Augmented Reality, and the Metaverse](https://doi.org/10.1109/VRW55335.2023.00110):** This paper reviews current efforts to address accessibility in VR and AR, focusing on creating equitable access for diverse user needs. It also identifies ongoing challenges that require further research to ensure these technologies are inclusive.
  * **[Accessibility in the Metaverse: Are We Prepared?](https://doi.org/10.5753/WAIHCWS.2022.234117):** This study discusses the significant challenges faced by people with disabilities in accessing the Metaverse. It emphasises that while efforts are being made, there is still a considerable distance to go before these environments are fully accessible.

  - ### Digital News Report

   The 2024 Digital News Report highlights the challenges of news fatigue and avoidance. To address these issues, news organizations are adopting a user needs model, which includes:
  - **Staying up to date**
  - **Learning more**
  - **Gaining varied perspectives**

	  Audiences prefer news that provides context and wider perspectives, making the news more accessible and engaging. The report also notes that younger audiences are more interested in stories that inspire, connect, and entertain, while older audiences prioritize local and international news, as well as political news.

  - ### Lean canvas business model
  - Existing large-scale telecollaboration solutions suffer from poor  adoption, limited accessibility, and trust issues. Meanwhile, emerging markets struggle to participate in the growing digital society due to the lack of inclusive tools and infrastructure, limiting access to global talent and new pools of ideas. There is insufficient provision of global talent pipelines for highly technical workflows.
  - Develop a secure, accessible, and inclusive platform for specialized telecollaboration spaces that seamlessly integrate advanced AI, ML, highly scalable and proven distributed systems, and open-source principles to create a digital society that caters to diverse industries, users globally, and captures global talent and innovative ideas.
  - Ultra low cost training spaces, accessible 24/7 through very low end hardware. Interact with highly customizable, task-appropriate, and user-friendly specialized telecollaboration spaces supported by specially trained and optimised supportive large language AI models. Multi-ligual for emerging markets, enabling access to untapped global talent and fostering the exchange of diverse ideas.
  - We will cater to the global training, research, biomedical, and creative industries, with a special focus on empowering users in emerging markets such as Africa and India, and connecting them with worldwide opportunities and resources. In the first instance we would leverage UK academic institutions and their problems, and networks.
  - Initially Universities, but this will scale to be sector specific.
  - We will offer tiered subscription plans to accommodate various user needs and budgets, as well as tailored enterprise solutions for large-scale clients. Bespoke consulting and support trending toward software as a service at scale.
  - Platform development, AI/ML tool integration, training for LLMs, market research and awareness, and ongoing maintenance and support.
  - We will track user growth, engagement, and retention, successful collaborations across industries, the platform’s positive impact on users in emerging markets, and the effectiveness of global talent capture and idea exchange.
  - Our team’s extensive experience in telecollaboration research, AI, ML, and a deep understanding of the complex landscape of emerging technologies, including highly scalable and proven distributed systems, provide us with a unique edge in creating a game-changing platform for specialized telecollaboration spaces that are secure, trusted, and tailored to diverse user needs while enabling access to global talent and innovative ideas.

  - ### Ethical Design and Deployment
  - Establish clear guidelines for data collection, storage, and usage
  - Ensure user privacy and agency
  - Address potential biases in data sources, models, and algorithms
  - Promote fair and inclusive social environments
  - Make the system's reasoning and recommendations understandable to users
  - Foster trust and accountability

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

  - ## Apple Vision Pro
  - [This thing is mind-blowing 🤯 This demo is better than Apple's actual ads for the Vision Pro. Apple launched the Vision Pro a few days ago,… | Instagram](https://www.instagram.com/reel/C2-G8WgsLSj/?igsh=am93cXF4OWppa29l)
  - This review (for me) asks the right questions, finally, of "spatial".
		- https://www.theverge.com/24054862/apple-vision-pro-review-vr-ar-headset-features-price
  - Is using the Vision Pro so good that I’m willing to mess up my hair every time I put it on?
  - Is it so good that I want to lug it around in its giant carrying case instead of my laptop bag?
  - Is it so good that I want to look at the world around me through screens instead of with my own eyes?
  - Do I prefer using a computer in there rather than out here.

	  I stopped working in VR when I tore down my venerable 17 year old augmented virtuality system. That was the right mix, for me, but untenably expensive. Most people will just continue to regard the Apple HMD as an interface that does Apple credit, that they will probably never use. 

	  They don't know that most of the owners will never use them either, but I do.
  - {{video https://www.youtube.com/watch?v=aqTIB_q40bo}}
  - [twitter link to the render loading below](https://twitter.com/bilawalsidhu/status/1759060086977143132)
  {{twitter https://twitter.com/bilawalsidhu/status/1759060086977143132}}
  - Meta research paper finally nails down focus with waveguide AR glasses [Waveguide holography for 3D augmented reality glasses | Nature Communications](https://www.nature.com/articles/s41467-023-44032-1)
  - [CES (Pt. 2), Sony XR, DigiLens, Vuzix, Solos, EverySight, Mojie, TCL color µLED – KGOnTech (kguttag.com)](https://kguttag.com/2024/01/24/ces-pt-2-sony-xr-digilens-vuzix-solos-everysight-mojie-tcl-color-%c2%b5led/)
  - [Campus](https://techcrunch-com.cdn.ampproject.org/c/s/techcrunch.com/2022/09/09/roblox-rdc-2022/amp/)
  - Vircadia
  - O3DE
  - [server](https://www.reddit.com/r/O3DE/comments/pbovl9/can_i_develop_my_own_dedicated_server_with_o3de/)
  - [Global lighting](https://www.co3dex.com/blog/image-based-lighting-1/#/)
  - Unreal
  - [Technically this might be a decade away since like everything the primay user base will be mobile mixed realitym, which is contingent on 5G](https://www.matthewball.vc/all/forwardtothemetaverseprimer)
  - book, the metaverse and how it will revolutise everything
  - ball2022metaverse
  - challenges
  - bandwidth
  - latency
  - global shared truth
  - form factor
  - gpu processing
  - [[Humans, Avatars , Character]]
  - [the many challenges of XR hardware](https://www.matthewball.vc/all/why-vrar-gets-farther-away-as-it-comes-into-focus)
  - HCI
  - MoveAI
  - [Meta's wrist reader](https://www.from-the-interface.com/wrist-interfaces/)
  - [Touch music interface](https://scitechdaily.com/groundbreaking-new-technology-allows-people-to-listen-to-music-through-touch/)
  - Interface and tracking
  - Pose estimations
  - [Standable](https://www.standablevr.com/)
  - [Dense face fields from Microsoft](https://microsoft.github.io/DenseLandmarks/)
  - Viveverse web3 nonsense
  - [Meetungs ARE the work](https://medium.com/@ElizAyer/meetings-are-the-work-9e429dde6aa3)
  - Identity
  - [Strongnode identity article on venturebeat](https://venturebeat.com/virtual/identity-in-the-metaverse-creating-a-global-identity-system/)
  - [Solid-lite](https://solid-lite.org/)
  - legal / governance / privacy / safeguarding
  - legal jeopardy for celebrities
  - [Gang sexual assault vice article](https://www.vice.com/en/article/3abpg3/woman-says-she-was-virtually-gang-raped-in-facebooks-metaverse?)
  - [not enough training on safety in africa](https://www.thecable.ng/safeguarding-africans-safety-and-freedom-in-the-metaverse/amp)
  - [How Regulation Will Apply To The Metaverse](https://www.forbes.com/sites/nisaamoils/2023/03/01/how-regulation-will-apply-to-the-metaverse/?)
  - [Podcast on the law](https://www.reply.com/en/metaminutes-s3-e5-legal-challenges-and-regulation-for-the-metaverse)
  - [dai.ki blog post](https://dai.ki/navigating-ai-governance-a-comprehensive-look-at-existing-and-new-eu-and-us-ai-regulations/)
  - Bio vertical
  - [NGL protein fold model viewer](https://github.com/nglviewer/ngl)
  - [OpenBioML discord](discord.gg/AMRdyPjwBb)
  - [Nanome on quest pro](https://www.youtube.com/watch?v=Q-V5EQ-FBMc)
  - [Openfold github](https://github.com/aqlaboratory/openfold)
  - [Pymol2 open source visualisation](https://github.com/schrodinger/pymol-open-source)
  - Alphafold OpenAI
  - [Biological structure diffusion](https://github.com/RosettaCommons/RFdiffusion)
  - The RFdiffusion code allows for the running of RFdiffusion simulations. The code is written in Python and is available on GitHub. The code includes a number of features, such as the ability to run simulations on multiple processors and the ability to output results in a variety of formats.
  - [Diagnostics](https://www.amazon.co.uk/AI-Revolution-Medicine-GPT-4-Beyond/dp/0138200130)
  - Market research
  - [Addidas](https://www.adidas.com/into_the_metaverse/mint)
  - [Bubblepunk interiors ML art](https://www.bubblepunk.io/bubblepunk-interiors)
  - [What is a chief metaverse officer (bloomberg)](https://www.bloomberg.com/news/articles/2022-09-22/what-is-a-chief-metaverse-officer-and-do-you-need-one)
  - [Userbase struggles (coindesk)](https://www.coindesk.com/markets/2022/04/06/metaverse-majors-struggle-as-user-base-falls-short-of-market-expectations/?outputType=amp)
  - [Protecting Brands in the Metaverse’s Uncertain Legal Landscape](https://wwd.com/business-news/technology/metaverse-lawsuit-nike-stockx-hermes-metabirken-fashion-1235247763/)
  - [Market research global impact](https://www.analysisgroup.com/globalassets/insights/publishing/2022-the-potential-global-economic-impact-of-the-metaverse.pdf)
  - [McDonalds in the metaverse](https://www.businessinsider.com/mcdonalds-metaverse-virtual-online-restaurant-trademark-delivers-food-web3-nft-2022-2)
  - [Universal music metaverse / web3 team](https://www.musicweek.com/labels/read/universal-music-group-s-digital-strategy-team-creates-key-roles-for-web3-and-the-metaverse/087103)
  - Narratives and convergence
  - [With the help of generative AI it may be possible to democratise the externalisation of complex narratives, with these new narratives shaping the outcomes of society through the medium of the metaverse](https://www.epsilontheory.com/narrative-and-metaverse-pt-3-the-luther-protocol/#.YjyHbnLIE5k.twitter)
  - [A lot of metaverse recently has just been convergence as companies take their existing simulation and repackage it for the moment.](https://thedriven.io/2022/05/23/nissan-and-mitsubishi-unveil-electric-mini-vehicles-and-test-drives-in-metaverse/)
  - Games is the main convergence: from globalblock ""More companies are entering the metaverse as global electronics giant Sony has announced their own metaverse push in the latest annual corporate strategy meeting. Sony said this will be a more focused approach, as they aim to use metaverse-inspired experiences to engage users. As Sony owns PlayStation Brands, one of the biggest install userbases in the world, they are in an amazing position to make an impact. They have also revealed that prior investments in Epic, makers of the Fortnite game, and Bungie, another gaming studio, are part of this push."
  - [Epsilomn theory thesis on metaverse](https://www.epsilontheory.com/narrative-and-metaverse-pt-3-the-luther-protocol/#.YjyHbnLIE5k.twitter)
  - [Epic games programming language for the metaverse](https://www.geekmetaverse.com/epic-games-launches-verse-the-metaverse-programming-language/)
  - [Fortnite is the metaverse](https://www.ign.com/articles/how-fortnite-is-the-antidote-to-metaverse-skepticism)
  - [epic unreal for fortnite](https://store.epicgames.com/en-US/p/fortnite--uefn?)
  - Why you should use now generative AI in your metaverse company. Or maybe not
  - The Ghost Howls https://skarredghost.com/2023/02/11/generative-ai-metaverse-company/
  - BlackRock digs further into crypto with metaverse ETF https://financefeeds.com/blackrock-digs-further-into-crypto-with-metaverse-etf/
  - China’s iPhone production hub of Henan bets its future on the metaverse | South China Morning Post https://www.scmp.com/tech/policy/article/3194092/chinas-iphone-production-hub-henan-bets-its-future-metaverse
  - Cutting Through the Hotel Hype of the Blockchain, Web3 and the Metaverse | https://hoteltechnologynews.com/2022/08/cutting-through-the-hotel-hype-of-the-blockchain-web3-and-the-metaverse/
  - Experts highlight trust and safety practices for the metaverse https://www.techtarget.com/searchcio/news/252525336/Experts-highlight-trust-and-safety-practices-for-the-metaverse
  - Global Metaverse Market Analysis Report 2022: Blockchain https://www.globenewswire.com/news-release/2022/08/30/2506629/0/en/Global-Metaverse-Market-Analysis-Report-2022-Blockchain-Solutions-in-Support-of-the-Metaverse-Market-will-Reach-148-6-Billion-by-2027.html
  - Identity Management Institute Launches the Metaverse Security Center and Certified Metaverse Security Consultant (CMSC)™ Certification https://www.prnewswire.com/news-releases/identity-management-institute-launches-the-metaverse-security-center-and-certified-metaverse-security-consultant-cmsc-certification-301689276.html
  - Is the metaverse good for business? Why blending the virtual and the real remains a matter of much debate | Fortune https://fortune.com/2022/07/13/business-metaverse-dropbox-brainstorm-tech/
  - Laws and Issues in the Metaverse (2)
  - Lexology https://www.lexology.com/library/detail.aspx?g=5a0cc4c0-a876-474e-a719-f528b71b68ee
  - Laying the Foundation of the Metaverse, Streaming Video, Social, Gaming, and Broader Digital Advertising Markets to Collectively Clear US$2 Trillion by 2030 https://www.abiresearch.com/press/laying-the-foundation-of-the-metaverse-streaming-video-social-gaming-and-broader-digital-advertising-markets-to-collectively-clear-us2-trillion-by-2030/
  - Major crypto exchange announces its arrival in the metaverse https://cointelegraph.com/news/major-crypto-exchange-announces-its-arrival-in-the-metaverse
  - Metaverse exploitation and abuse to rise in 2023: Kaspersky https://cointelegraph.com/news/metaverse-exploitation-and-abuse-to-rise-in-2023-kaspersky
  - Metaverse Market Size, Share & Industry Report 2020-2030 https://www.strategicmarketresearch.com/market-report/metaverse-market
  - Metaverse Real Estate Gets Reality Check https://therealdeal.com/2022/08/04/metaverse-real-estate-gets-reality-check/
  - Nissan and Mitsubishi unveil electric mini vehicles, and test drives in metaverse https://thedriven.io/2022/05/23/nissan-and-mitsubishi-unveil-electric-mini-vehicles-and-test-drives-in-metaverse/
  - Nvidia Sees a Metaverse Populated With Lifelike Chatbot Avatars
  - CNET https://www.cnet.com/tech/computing/nvidia-sees-a-metaverse-populated-with-lifelike-chatbot-avatars/
  - Room' Offers a Non-Facebook Way to Connect Coworkers in the Metaverse https://uk.pcmag.com/vr-1/143198/room-offers-a-non-facebook-way-to-connect-coworkers-in-the-metaverse
  - The Architecture of the Metaverse (So Far) | ArchDaily https://www.archdaily.com/988639/the-architecture-of-the-metaverse-so-far
  - The battle to build a child-friendly metaverse | Tech News https://tech.hindustantimes.com/tech/news/the-battle-to-build-a-child-friendly-metaverse-71655616713236.html
  - The Metaverse Casino That Wasn’t https://www.coindesk.com/layer2/sinweek/2022/08/29/the-metaverse-casino-that-wasnt/
  - The World's First Virtual Reality Avatar Fashion Week Is On The Metaverse This Week https://womenlovetech.com/the-worlds-first-virtual-reality-avatar-fashion-week-is-on-the-metaverse-this-week/
  - Top 10 Metaverse Platforms that will Replace Social Media in Future https://www.analyticsinsight.net/top-10-metaverse-platforms-that-will-replace-social-media-in-future/
  - Top 15 Metaverse Companies To Watch Out For !! https://www.cryptotimes.io/top-15-metaverse-companies-to-watch-out-for/
  - We're Ready for the Metaverse but the Technology Is Not. Here's Why.
  - Decrypt https://decrypt.co/100781/were-ready-for-the-metaverse-but-the-technology-is-not-heres-why
  - [The Photorealistic Metaverse | Welcome to Cornerstone, Cornerstone is a gamified metaverse experience distributed to you via the web browser. Create, co-develop, and monetize your creative idea in the new digital realm.](https://cornerstone.land/)
  - [Mega Yacht Sold for $650,000 in Metaverse, Becomes Most-Expensive NFT in Sandbox Virtual World | Technology News , A mega yacht has been sold for a whopping $650,000 (roughly Rs. 4.8 crore) in the Sandbox virtual gaming world. The pricey digital asset was released by metaverse developer Republic Realm as part of a luxury NFT series.](https://gadgets.ndtv.com/cryptocurrency/news/mega-yacht-sold-usd-650000-metaverse-most-expensive-nft-sandbox-virtual-world-2630187)
  - [Facebook whistleblower warns Metaverse will repeat ‘all the harms’,Frances Haugen says she is worried about privacy and safety inside Meta’s impending Metaverse. Her accusations of profit before safety are still red hot.](https://cointelegraph.com/news/facebook-whistleblower-warns-metaverse-will-repeat-the-harms)
  - [Virtual production and the future of generative art](https://virtualproducer.io/generative-ai-and-the-future-of-filmmaking/)
  - [Zuckerburg disengages from metaverse](https://www.thestreet.com/technology/mark-zuckerberg-quietly-buries-the-metaverse)
  - [Metahouse Could be First of Many
  - Los Angeles Business Journal digital twin of a mansion](https://labusinessjournal.com/featured/metahouse-could-be-first-of-many/)
  - [The Future is a Dead Mall
  - Decentraland and the Metaverse: Clickbait Title: I spent three months living in the metaverse and now I'm starvingThe metaverse salespeople have a weird fixation with Animal Crossing, in sp...](https://www.youtube.com/watch?v=EiZhdpLXZ8Q)
  - https://www.infosys.com/iki/perspectives/metaverse-insider-guide.html
  - [Everyone abandoning metaverse](https://www.reddit.com/r/CryptoCurrency/comments/128hqkw/meta_microsoft_and_disney_are_reversing_their/)
  - [The Internet Is Ruined. The Metaverse Can Still Be Saved: In this nascent stage, there are opportunities for virtual worlds to avoid the mistakes of the past.](https://www.wired.com/story/metaverse-ethics/)
  - The article discusses how the internet has ruined the Metaverse, and how it can still be saved. It argues that the internet has made the Metaverse less accessible and has made it more difficult to find information. However, it also states that the Metaverse can still be saved if people are willing to work together to make it more accessible and user-friendly.
  - Omniverse
  - [Free to individuals](https://blogs.nvidia.com/blog/2022/01/04/omniverse-available-free-to-creators/)
  - [Full RTX rendering](https://www.youtube.com/watch?v=Jm155QkRjl0&feature=youtu.be)
  - [AI assisted blended character plugin](https://blogs.nvidia.com/blog/2023/02/15/blender-alpha-release-omniverse/?ncid=so-link-466434#cid=ov01_so-link_en-us)
  - [NVIDIA Unveils Powerful AI, Simulation and Creative Tools for Creators and Developers of Virtual Worlds | NVIDIA Blog](https://blogs.nvidia.com/blog/2022/08/09/omniverse-siggraph/)
  - Open metaverse
  - [Open metaverse discord from linux foundation](https://discord.gg/openmetaverse)
  - [Free 1 Million objects](https://huggingface.co/datasets/allenai/objaverse)
  - Usability
  - [bridging the real and the virtual like mcdonalds home delivery](https://www.businessinsider.com/mcdonalds-metaverse-virtual-online-restaurant-trademark-delivers-food-web3-nft-2022-2)
  - Virtual land
  - virtual
  - [hybrid land linking real and virtual (including digital twin)](https://labusinessjournal.com/featured/metahouse-could-be-first-of-many/)
  - Simple geo-referencing of physical place in mixed reality
  - Digital assistants
  - [MultiOn digital assistant](https://multion.ai/)
  - [LEON open source assistant](https://docs.getleon.ai/)
  - [Open source assistant github of issues](https://github.com/LAION-AI/Open-Assistant/issues)
  - Avatars
  - [Free VRChat Models & Avatars | VRCMods (other)](https://vrcmods.com/)
  - [CLIP-Actor Text-Driven Recommendation and Stylization for Animating Human Meshes](https://clip-actor.github.io/)
  - Displaytech
  - [CREAL lens display](https://creal.com/2023/05/19/creals-breakthrough-ar-display-real-depth-with-a-classic-lens/)
  - Autostereoscopic
  - [nanomaterials paper](https://www.mdpi.com/2079-4991/12/3/429#)
  - [Bubbles and speakers](https://www.youtube.com/watch?v=7VLdMXnM0lU)
  - [lightfield labs](https://www.lightfieldlab.com/)
  - The Wall Street Journal has reported that Meta Quest, formerly known as Oculus, had over 6 million monthly active users as of October 2022. This news has generated discussion on the r/virtualreality subreddit, with users speculating about the future of VR and Meta Quest's upcoming products. Some users believe that VR needs more content to attract more users, while others express excitement over the release of Undead Citadel and the possibility of a Starfield VR game. Users also discuss the potential of streaming headsets like the Quest working on the PlayStation 5 and the importance of storytelling in VR games. Some users express disappointment in the launch of the remastered edition of San Andreas and its impact on Quest sales, while others joke about the perceived death of VR. https://www.reddit.com/r/virtualreality/comments/12lpsvf/rumor_meta_quest_had_more_than_6_million_monthly/ Meta urged to prevent minors entering the metaverse https://www.bloomberg.com/news/articles/2023-04-14/meta-urged-to-halt-plans-allowing-minors-into-the-metaverse?leadSource=uverify%20wa
  - It's a valuable tool for video gaming, film industry, and metaverse applications that require 3D scenes. The article discusses how the internet has ruined the metaverse, and how it can still be saved. It argues that the internet has made the metaverse less accessible and more difficult to navigate, and that this has had a negative impact on its potential. The article suggests that the metaverse can still be saved if we take steps to improve its accessibility and make it easier to use.
   <https://www.wired.com/story/metaverse-ethics/> Exploring Why the Metaverse Hasn't Taken Off as Expected: The metaverse has quickly turned from a profitable utopia into a cash-guzzling dystopia.The text provides an overview of the Metaverse, a virtual world that has not yet taken off as expected. The text describes the potential reasons for this, including the lack of a clear business model and the difficulty of creating an immersive experience.
   <https://www.bbntimes.com/technology/exploring-why-the-metaverse-hasn-t-taken-off-as-expected> Unfortunately, the requested website (mirror-next-hop.forbes.com) is not accessible and the current session has been terminated with an access denied error (403). Further information can be obtained by contacting the website administrators using the provided reference code (217.138.196.24 2023-06-26T16:51:46.121Z). https://www.forbes.com/sites/charliefink/2023/05/07/this-week-in-xr-after-ai-sucks-the-air-out-of-the-metaverse-it-will-remake-xr/ The Building the Metaverse YouTube channel features a range of videos discussing the use of generative AI and large language models (LLMs) in game development and world-building. One video features a discussion with Kayla Comalli, co-founder and CEO of Lovelace Studios, about their platform Nyric, which generates entire worlds from a text prompt using generative AI technologies like ChatGPT. Other videos on the channel cover topics such as generative art assets for games, AI storytelling and narrative, generative graphics workflow for games, and the use of generative AI in game production. The channel also features discussions with individuals in related fields, such as Edward Saatchi of Fable Studio, who talks about virtual beings and simulated worlds, and Adam B. Levine of Blockade Labs, who discusses Skybox AI and game development. Additionally, there are videos discussing the potential applications of AI in other areas, such as defense and longevity. The channel provides a valuable resource for those interested in learning about the intersection of generative AI and gaming, as well as related topics. https://www.youtube.com/watch?v=fsg83BvsXww The article discusses the potential risks and opportunities of motion tracking data in extended reality (XR) and the metaverse. While this data is often presumed to be innocuous, recent studies have shown that it has the potential to profile and deanonymize XR users, posing a significant threat to security and privacy in the metaverse. The article highlights the need for increased awareness and caution regarding the collection and use of motion data in XR and metaverse experiences. https://arxiv.org/abs/2306.06459 Beauty company Coty has created a metaverse for its 11,000 global employees, using technology from Spatial. The virtual campus is based on 3D tech and tools from Spatial, and aims to develop upskilling and future innovation for Coty brands. The campus includes features such as text and vocal chat forums, screen and filesharing, customisable avatars and location exploration and quest fulfilment, as well as a "phygital" rewards system. Coty and Spatial said the campus was a significant milestone in crafting "new models for scalable gamified experiences". https://drugstorenews.com/coty-enters-metaverse-campus-global-workforce Tencent Cloud has announced its commitment to support the development of the Web3 ecosystem at the first global Web3 summit. The cloud business of Tencent has unveiled a development roadmap for a full suite of blockchain API services and its Tencent Cloud Metaverse-in-a-Box offering. The platform will provide technical support for Web3 and work with industry partners to nurture the Web3 ecosystem. Tencent Cloud plans to promote sustainable growth by offering Web3 builders cloud solutions credits, marketing workshops and publicity opportunities. It has also signed a Memorandum of Understanding with Ankr, a Web3 infrastructure provider, to jointly develop a full suite of blockchain API services. The API services will cover security, storage, identity management, middleware, development tools, and data analytics, among other areas. https://www.tencentcloud.com/dynamic/news-details/100437?lang=en&pg=
   <https://www.tencentcloud.com/dynamic/news-details/100437?lang=en&amp;pg=>
  - The concept of a "predictive metaverse", an artificial intelligence (AI)-powered advanced form of a virtual world that could predict and anticipate its users' intentions and behaviors, is offering new ways to improve engagement, creativity and personalised learning in [[Education and AI]], according to an article in eSchool News by Roger James Hamilton, Founder and CEO of Genius Group. As virtual reality worlds become increasingly sophisticated and realistic, they are also becoming more intelligent and able to analyse data in real-time to deliver tailored recommendations and feedback to individual users, for example to optimise the virtual marketplace to improve user experience and increase sales. https://www.eschoolnews.com/educational-leadership/2023/04/21/predictive-metaverse-the-future-of-guided-learning/
  - Reddit and its partners use cookies and similar technologies to improve the quality of its website, personalize content and advertising, measure advertising effectiveness, and ensure the proper functionality of its platform. By accepting all cookies, users agree to the use of cookies. However, by rejecting non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of its platform. Reddit's Cookie Notice and Privacy Policy provide more information about its use of cookies. Recently, Meta, Microsoft, and Disney have reversed their bets on the metaverse. Posts related to this topic on r/CryptoCurrency have been removed by moderators. https://www.reddit.com/r/CryptoCurrency/comments/128hqkw/meta_microsoft_and_disney_are_reversing_their/ Exokit, Adrian's opensource mixed reality toolkit for web <https://github.com/exokitxr/exokit>
  - [[Apple]] has acquired Mira, a Los Angeles-based startup that creates AR headsets for various companies and the US military. The acquisition, which was confirmed by [[Apple]], follows the company's launch of its $3,499 mixed reality headset, the Vision Pro. Two former Mira employees said that Jony Ive, [[Apple]]'s former design chief, was an advisor to the startup at one point. Mira's military contracts include a small agreement with the US Air Force and a $702,351 agreement with the Navy while its contract with Nintendo World provides headsets for the Mario Kart ride at its theme parks in Japan and LA's Universal Studios. It is currently unknown if [[Apple]] will continue Mira's military contracts. https://www.theverge.com/2023/6/6/23751350/[[apple]]-mira-ar-headset-startup
  - These posts include insights on the development of XR technology, possible applications, and innovations in the field. https://www.linkedin.com/posts/reneschulte_visionpro-ar-vr-activity-7072953336156602369-_2pL?utm_source=share&utm_medium=member_android
  - [This text is a brief description of a position paper published by the OMA3 Portaling and Mapping Working Group (PMWG) on the transformative technology of portals in the metaverse. The position paper provides insights into the potential of a universal portal system to reshape digital interaction for consumers, businesses, and platforms. It highlights the development process, strategic approach, and vision of OMA3 in setting new standards for the Web3 universe. The paper invites readers to comment on it by creating an issue or commenting in the Google Doc. It also encourages individuals to join OMA3 and participate in the Portaling and Mapping Working Group if they would like to contribute to the project. The paper is licensed under a Creative Commons Attribution 4.0 International License.](https://github.com/oma3dao/portal-position-paper)
  - [The Open Metaverse Alliance for Web3 (OMA3) has announced the Inter-World Portaling System (IWPS) project, aimed at creating standards for seamless travel between metaverse platforms. OMA3, based in Zug, Switzerland, is a consortium of top metaverse companies in Web3. The IWPS project will allow users to walk through inter-world portals and travel between metaverse platforms such as Alien Worlds, My Neighbor Alice, and Sandbox. OMA3 believes that IWPS has the potential to enhance accessibility and engagement within the digital realm by bridging disparate metaverse environments. They compare IWPS to the development of transportation technology like railroads and highways in the industrial revolution and the introduction of the HTTP standard in the digital realm, both of which facilitated the free flow of goods, services, and information. OMA3 has released a position paper outlining the importance of IWPS and inviting participation and comments from the Web3 metaverse community. They see the development and standardization of IWPS as the next frontier in the evolution of the metaverse, enabling new levels of connectivity, commerce, and shared experiences.](https://venturebeat.com/games/oma3-offers-way-for-users-to-travel-between-blockchain-gaming-worlds-in-the-metaverse/)
  - [Beatoven.ai is a website that uses advanced AI music generation techniques to create unique, mood-based music for videos and podcasts. Users can start by choosing a genre or style that suits their theme and then make cuts to reflect different moods throughout their content. With a rich selection of 16 moods to choose from, users can easily find the right mood for each cut. Once the desired moods have been selected, users can hit compose and let the AI algorithm generate a unique track for them.   The website is useful for various types of content creators, including agency/production houses, YouTube creators, podcast creators, indie game developers, audiobook producers, and web3 and metaverse companies. It offers a range of benefits, such as packing a punch in videos, creating a signature sound for YouTube channels, making intro and outro sections special for podcasts, designing themes and background music for games, elevating audio books with atmospheric music, and providing background music for metaverse experiences.   Beatoven.ai also allows users to customize the length, genre, mood, and instruments of their tracks. The resulting music is production-ready with industry-standard mixing and mastering.   The licensing terms for the music on Beatoven.ai grant users a perpetual license for usage on their chosen platforms. All copyrights for the music created on the website belong to Beatoven Private Limited.   The website offers a free membership option, allowing users to create and download music for the first 15 minutes of their projects. There is also a premium pricing plan available for unlimited usage.   Overall, Beatoven.ai is a versatile and user-friendly platform that offers customized, royalty-free music for a wide range of content creators.](https://www.beatoven.ai/)
  - [A predictive metaverse is an advanced virtual world powered by AI and machine learning algorithms. It can predict and anticipate the actions and behaviors of its users, allowing for personalized recommendations, predictions, and feedback. This concept is becoming increasingly appealing to content creators and educators in the field of education, as it can improve engagement and creativity and create personalized learning programs.  In a predictive metaverse, AI algorithms can analyze real-time data to understand the preferences, behaviors, and intentions of users. This information can then be used to optimize the virtual world and improve the user experience. For example, an AI algorithm could predict user behavior in a virtual marketplace, such as what they are likely to buy and when they are likely to buy it. This data can be used to optimize the marketplace and increase sales.  While the term metaverse is often associated with the gaming industry, its potential applications in education are significant. The predictive metaverse can enhance virtual learning by providing personalized guidance and support to students. It can help create immersive learning experiences and improve student engagement and motivation.  As virtual worlds become more sophisticated and realistic, the predictive metaverse holds great promise for the future of guided learning. By harnessing the power of AI and machine learning, educators can create personalized learning experiences that cater to the unique needs and preferences of each student. This technology has the potential to revolutionize education by providing tailored instruction, real-time feedback, and personalized recommendations, ultimately improving student outcomes and overall learning experiences.](https://www.eschoolnews.com/educational-leadership/2023/04/21/predictive-metaverse-the-future-of-guided-learning/)
  - [This text is a Reddit post from the r/CryptoCurrency subreddit. The post mentions that Meta (formerly known as Facebook) as well as Microsoft and Disney are reversing their bets on the metaverse. However, the post has been removed by the subreddit moderators. The comments in the post discuss the current hype around artificial intelligence (AI) and the need for companies to hop on that trend. Some users express their opinions that these companies went about their approach to the metaverse in the wrong way. The post also includes comments about the ownership of a bot that has received a high number of moons (a cryptocurrency earned on the Reddit platform) and speculation on the future of meta platforms like Meta. The post is followed by a list of related crypto news articles from various sources, covering topics such as refunds in crypto scams, acquisitions of Bitcoin, changes in cryptocurrency taxes, and the launch of web3 games by Ubisoft.](https://www.reddit.com/r/CryptoCurrency/comments/128hqkw/meta_microsoft_and_disney_are_reversing_their/)
  - [Tencent Cloud, the cloud business of global tech company Tencent, has announced its commitment to support the development of the Web3 ecosystem. The company unveiled its development roadmap for a full suite of blockchain API services and its Tencent Cloud Metaverse-in-a-Box offerings. It aims to provide a strong technological foundation for Web3 builders and be the digital enabler for the Web3 industry. Tencent Cloud will collaborate with Web3 partners to accelerate the adoption of Web3. The company also signed a Memorandum of Understanding (MoU) with Web3 infrastructure provider Ankr to jointly develop a full suite of blockchain API services. Additionally, Tencent Cloud announced strategic collaborations with Avalanche, Scroll, and Sui, three other Web3 blockchain partners, to build a stronger foundational infrastructure for global builders. The collaboration with Avalanche will explore blockchain solutions for enterprise customers, while the partnership with Scroll aims to scale Ethereum through an open-sourced zk-Rollup. The collaboration with Sui will optimize the on-chain gaming experience. Furthermore, Tencent Cloud introduced Tencent Cloud Metaverse-in-a-Box, a comprehensive solution that integrates infrastructure, products, SDKs, and low-code solutions. The Metaverse-in-a-Box allows businesses to develop metaverse applications rapidly. Tencent Cloud hosted its first global Web3 summit, Tencent Cloud Web3 Build Day, to discuss the latest blockchain landscape and development trends in Web3 games and social networks.](https://www.tencentcloud.com/dynamic/news-details/100437?lang=enandpg=)
  - BrahmGAN is a cutting-edge 3D content creation tool that uses advanced technology such as NeRF, GAN, and Blockchain to create 3D content effortlessly, without requiring technical expertise or complex software. The tool is designed for industries such as eCommerce, XR, and Gaming. BrahmGAN's NeRF solutions for VR Services are capable of creating stunning worlds within days. The company is based in Bengaluru and Singapore. Interested parties can contact them via email at info@brahmgan.com or join their mailing list to stay updated on their latest developments. http://www.brahmGAN.ai
  - Hallway is an app that empowers creators to tell their stories using avatars instead of their real faces, making it easy for anyone to express their creativity without the limitations of video as a medium. It is a single-camera app that supports a variety of avatars and requires no custom hardware or clunky setups. The app is currently taking VTuber and 2D/3D artist intakes to join the waitlist for early access. Hallway provides a new avenue for creators to express themselves and join the next generation of creators. http://joinhallway.com/
  - BrahmGAN is an AI-based 3D content creation platform that uses advanced technologies like NeRF, GAN, and Blockchain for quick and decentralized content creation. BrahmGAN's text-to-3D tools enable users to create 3D content without technical expertise or complex software. BrahmGAN caters to industries like XR, gaming, and eCommerce and uses NeRF for video to 3D, and Blockchain for democratizing 3D content creation globally. BrahmGAN has offices in Bangalore and Singapore and has clients like Taanga Studios. http://www.brahmGAN.ai
  - [In this post on Reddit, a user shares their experience developing a C++ library for running Stable Diffusion, an AI image generation model. They explain that the library does not rely on Python and can use the GPU for executing the AI models involved. The user's main motivation for developing this library was to use its image synthesis capabilities in real-time 3D software written in C++.   The user shares their first results, which include a simple library available as an integration-ready MIT licensed Nuget package, capable of running Stable Diffusion models in ONNX format. They note that the code is currently targeting Windows, but only a small portion related to image editing tasks relies on the WinAPI, which can easily be replaced for other platforms.  Several redditors comment on the post, expressing interest in the library and discussing their own experiences with Stable Diffusion and C++ implementations in machine learning. Some users appreciate the user interface design of the library, while others discuss the advantages and disadvantages of using Python for machine learning tasks.  The user also mentions that they are working on an Xbox release and have already generated Stable Diffusion images on the Xbox. There are further discussions on related topics, such as RAID arrays, graphics libraries for Rust, and C++ language support in Xcode 15.  Overall, the post provides an overview of a C++ library for running Stable Diffusion and highlights the user's experiences and progress in developing it.](https://www.reddit.com/r/cpp/comments/143olej/an_open_source_library_for_running_stable/)
  - [The text is a Reddit post discussing the process of generating and applying AI-generated images to a 3D model. The poster shares the results of their image generation using AI and provides details about the rendering process. They mention using Blender and a custom UV map to project the generated image onto the face of the 3D model.  The poster explains that they manually removed diffuse and specular reflections during the AI image generation stage and conducted additional tests to bring out more details. They aim to create a color map that can be used without adjustments.  Other users in the comments ask about the training process and suggest alternative methods for projection mapping. The poster responds, stating that they did additional training with images that suppress shadows, light, and AO. They also mention that the AI-generated image was baked into a custom UV map before rendering.  Some users express interest in learning the process and suggest creating a tutorial. The original poster mentions that the process takes a lot of time and effort and that the results may vary. They recommend referring to their previous test articles for more information on AI image generation.  The post concludes with a list of related posts from other subreddits discussing topics such as computer vision, AI-generated avatars, and visualizations in Stable Diffusion.](https://www.reddit.com/r/StableDiffusion/comments/11ol47u/3d_model_face_color_map_generation_test3/)
  - The article discusses Reddit's use of cookies and similar technologies to provide a better experience to users. By accepting all cookies, users agree to Reddit's use of cookies to provide and maintain their services, personalize content and advertising, and measure advertising effectiveness. If users reject non-essential cookies, Reddit may still use certain cookies to ensure the proper functionality of the platform. Additionally, the article includes a user-generated post on using Mixamo, a free website with a large library of 3D animations, for character posing. Several commenters offer their own suggestions and recommendations for related tools and workflows on different subreddits. https://www.reddit.com/r/StableDiffusion/comments/11owo31/something_that_might_help_ppl_with_posing/
  - Mixed reality, spatial, metaverse and telecollaboration
  - [The text discusses the use of cookies and similar technologies on Reddit's platform. By accepting all cookies, users agree to the use of cookies to improve their experience, deliver and maintain services, personalize content and advertising, and measure the effectiveness of advertising. Rejecting non-essential cookies still allows Reddit to use certain cookies for proper platform functionality. The text also mentions that more information can be found in the Cookie Notice and Privacy Policy.  The rest of the text is a Reddit post from the r/StableDiffusion subreddit. The post discusses a generalist model that the OP (original poster) will be releasing soon. The model is capable of creating images with resolutions ranging from 1024 to 1080p, and it is fine-tuned on SD 2.1 768X. The model can generate a variety of images, including photorealism, paintings, and anime. The OP shares some example images generated during the training process and invites others to test prompts for image creation. The post receives several comments and discussions about the model's capabilities, potential uses, and suggestions for improvement.  Additionally, the text includes a list of other posts from various subreddits such as r/3dsmax, r/colorists, and r/StableDiffusion. These posts cover topics related to rendering, color grading, using AI-generated visuals, and showcasing artistic works.](https://www.reddit.com/r/StableDiffusion/comments/13j78fo/some_examples_of_the_generalist_model_i_will_be/)
  - Scan the World is a museum of sculptures, artifacts, and statues made possible through 3D scanning and printing technology. The scans of these historical pieces are free to download for accessibility, educational and cultural heritage purposes. Scan the World uses photogrammetry to capture these high-resolution scans, from digital archaeology to downloadable monuments and buildings, 3D printing enthusiasts will be able to find it at the museum. The museum offers more than 20 categories ranging from Africa to South America and everything in between, and it ranks objects based on popularity, date published, and views. Visitors have instant access to the MyMiniFactory library, which is community-powered with users able to upload their 3D printable designs as well. The ultimate goal of Scan the World is to make historical and artistic objects more widely available to people around the world. It’s the perfect solution for those who want to own an authentic, accurate replica of an important sculpture, artifact, or more. https://www.myminifactory.com/category/scan-the-world
  - LinkedIn uses both essential and non-essential cookies to provide, secure, analyze and improve their services, as well as show users relevant ads on and off the platform, according to their Cookie Policy. Users can accept or reject non-essential cookies for this use and can update their choices at any time in their settings. In a post by Rene Schulte, the Head of 3D & Quantum CoPs at Microsoft, he shared resources for Unity developers to prepare for developing for Apple's VisionPro and visionOS. The post sparked conversations and comments from other professionals in the AR/VR industry, including discussions about AR's utility, developments in volumetric video and tracking, and the use of digital twins in building. https://www.linkedin.com/posts/reneschulte_visionpro-ar-vr-activity-7072953336156602369-_2pL?utm_source=share&utm_medium=member_android
  - [The text discusses a research paper on a diffusion model called 3DiM for 3D novel view synthesis. The model takes a single input view and generates consistent and sharp completions across many views. It uses a pose-conditional image-to-image diffusion model that takes a source view and pose as inputs and generates a novel view for a target pose as output. The model employs stochastic conditioning, where a random conditioning view is selected from previously generated views at each denoising step, to improve 3D consistency. The paper introduces a new evaluation methodology called 3D consistency scoring to assess the 3D consistency of the generated objects. The model is geometry-free, does not rely on hyper-networks or test-time optimization, and can easily scale to a large number of scenes.  The paper presents samples generated by 3DiM trained on the ShapeNet dataset. The model achieves high fidelity and approximate 3D consistency in generating completions from a single view. It also demonstrates the model's effectiveness by generating 3D objects from in-the-wild images downloaded from the internet. The paper compares 3DiM to prior work on the SRN ShapeNet benchmark and shows that 3DiM outperforms other methods in terms of generating sharp samples. The paper also discusses the technical details of 3DiM, including its generation process using stochastic conditioning and the modifications made to the image-to-image UNet model to achieve high-quality results.  Overall, the paper highlights the effectiveness of diffusion models for 3D novel view synthesis and introduces novel techniques, such as stochastic conditioning and 3D consistency scoring, to improve the quality and consistency of generated views. The proposed model, 3DiM, shows promising results in generating realistic and consistent 3D objects from a single input view.](https://3d-diffusion.github.io/)
  - [The paper presents a monocular depth estimation method using denoising diffusion models. The goal is to generate accurate depth maps from single RGB images. The authors address the problem of noisy and incomplete depth maps in the training data by using step-unrolled denoising diffusion, an L1 loss, and depth infilling during training.  To overcome the limited availability of supervised training data, the authors leverage pre-training on self-supervised image-to-image translation tasks. Despite the simplicity of the approach, their model achieves state-of-the-art (SOTA) performance on the indoor NYU dataset and near SOTA results on the outdoor KITTI dataset.  The approach involves infilling missing depth in ground truth depth maps using nearest neighbor interpolation. Then, noise is added to the depth map and a neural network is trained to predict the noise given the RGB image and noisy depth map. During fine-tuning, one step of the forward pass is unrolled and the ground truth depth map is replaced with the model's prediction.  The DepthGen model achieves an absolute relative error of 0.074 on the indoor NYU dataset and a competitive relative error of 0.064 on the outdoor KITTI dataset, demonstrating its accuracy in depth estimation.  The paper also introduces a text-to-3D pipeline that combines DepthGen with off-the-shelf text-to-image and text-conditioned image completion models. This pipeline allows for generating 3D point clouds from text prompts.  In conclusion, the proposed method of monocular depth estimation using diffusion models achieves state-of-the-art performance, even with limited supervised training data. The approach is simple yet effective and can be integrated into a text-to-3D pipeline for generating 3D scenes from text prompts.](https://depth-gen.github.io/)
  - [The text provided is a collection of video titles and descriptions related to Blender, AI, and 3D design. The videos cover topics such as creating isometric rooms, using AI in 3D design, Unreal Engine, toon shading in Blender, QR code art, GPT (Generative Pre-trained Transformer) engineering, creating Ghibli-style characters, new features in Blender 3.6, animation in Blender, and adding vegetation in Twinmotion. The videos are created by various individuals and brands, including vertex vendor, Unreal Sensei, Quick QR Art, ENFANT TERRIBLE, Matt Wolfe, Ian Wootten, Brandon's Drawings, Polyfjord, Charlie Barber, and vishal panjeta. The text also mentions a Google company and provides information about cookie usage and privacy settings when using Google services.](https://www.youtube.com/watch?v=GZO7TAlVE_8)
  - [WebXR is a device API that allows for VR/AR experiences through web browsers. However, monetization has been a major issue for the platform, with indie creators struggling to capture value. Most WebXR apps appear as prototypes because developers find it difficult to justify investing more resources into the ecosystem. The current ways people pay for WebXR content include purchasing tickets, using cryptocurrency for virtual land, and accessing certain features by login or ownership of bot handles. The process of paying for WebXR content can be made easier and more frictionless by integrating payment methods like Apple Pay or Google Pay while in VR. Artists can get paid through various means such as commissions, Patreon, grants, VC investment, and event tickets. Non-payment based monetization strategies like advertising are also being explored. A list of 101 ideas for WebXR monetization includes platforms like Patreon and Github Sponsors, virtual market stalls, virtual land parcels, and in-world advertising. Other strategies include payment processing integration with platforms like PayPal or Discord, creating virtual actors and performers, storytelling, and podcast sponsorships. Advertisements targeted at 18-44 year old males interested in software, gaming, and VR have shown promising results. A Github repository for WebXR monetization examples is in progress. Despite these efforts, monetization in the WebXR ecosystem is still a work in progress, and more exploration and innovation is needed.](https://hackmd.io/@xr/monetization)
  - The paper proposes a system called CLIP-Actor, which animates a 3D human mesh to conform to a text prompt by recommending a motion sequence and optimizing mesh style attributes. The system's novelty lies in its ability to recommend motion that conforms to the prompt in a pose-agnostic and temporally-consistent manner while leveraging multi-frame human motion and rejecting poorly rendered views. The authors demonstrate that CLIP-Actor produces plausible and human-recognizable style 3D human mesh in motion with detailed geometry and texture solely from a natural language prompt. The paper's methodology shows that CLIP-Actor is an effective and efficient way to generate plausible results when the pose of an artist-designed mesh does not conform to the text prompt from the beginning. The research has been sponsored by the Korean government's grant funded by the Institute of Information & communications Technology Planning & Evaluation (IITP). https://clip-actor.github.io
  - [The paper CLIP-Actor: Text-Driven Recommendation and Stylization for Animating Human Meshes proposes a system for animating human meshes based on text prompts. The system, called CLIP-Actor, generates motion sequences and optimizes mesh style attributes to conform to a given text prompt.  The authors highlight a limitation of previous work, which struggled to produce realistic results when the starting pose of a pre-designed mesh did not align with the text prompt. To address this issue, CLIP-Actor leverages a large-scale human motion dataset with language labels to build a text-driven human motion recommendation system. It suggests a motion sequence that aligns with the given prompt in a coarse-to-fine manner.  In addition, the authors introduce a novel neural style optimization technique that adds detail and texture to the recommended mesh sequence in a temporally-consistent and pose-agnostic manner. They also propose spatio-temporal view augmentation and mask-weighted embedding attention techniques to stabilize the optimization process by incorporating multi-frame human motion and rejecting poorly rendered views.  The results of CLIP-Actor demonstrate its ability to generate plausible and human-recognizable 3D human meshes in motion with detailed geometry and texture solely from natural language prompts.  The paper includes the BibTeX citation for academic referencing and acknowledges the support received from the Institute of Information and Communications Technology Planning and Evaluation (IITP) in Korea for funding the research.  The website containing the paper and code is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License. The source code for the system is mainly borrowed from Keunhong Park's Nerfies website, and feedback and questions can be directed to Kim Ji-Yeon.](https://clip-actor.github.io)
  - [Magic123 is a two-stage solution for generating high-quality, textured 3D meshes from a single unposed image. The first stage optimizes a neural radiance field to create a coarse geometry, while the second stage uses a memory-efficient differentiable mesh representation to produce a high-resolution mesh with realistic textures. The 3D content is learned through reference view supervision and guided by both 2D and 3D diffusion priors. The system includes a tradeoff parameter that controls the balance between exploring novel geometries and achieving precise results. Textual inversion and monocular depth regularization are employed to ensure consistent appearances across views and prevent degenerate solutions. Magic123 outperforms previous image-to-3D techniques, as demonstrated through experiments on synthetic benchmarks and real-world images.  The Magic123 pipeline consists of two stages: coarse and fine. In the coarse stage, an Instant-NGP neural radiance field is optimized to reconstruct a rough geometry. In the fine stage, a DMTet mesh is initialized from the coarse output and optimized to generate a high-resolution mesh with textures. Textural inversion is used in both stages to preserve object geometry and ensure consistent textures across views.  Example generated objects from Magic123 show photo-realistic 3D representations created from single images. The system offers a tradeoff between 2D and 3D priors, allowing for exploration and imagination in geometry generation or precise results with reduced details. By combining both priors and adjusting the tradeoff parameter, Magic123 consistently produces identity-preserving 3D content with fine-grained geometry and visually appealing textures.  Quantitative evaluations on the NeRF4 and RealFusion15 datasets demonstrate the effectiveness of Magic123 compared to previous state-of-the-art approaches. The system achieves top performance across various metrics, showcasing its ability to generate high-quality 3D representations.  The article credits DreamFusion authors for their website templates, and the text is licensed under a Creative Commons Attribution-ShareAlike 4.0 International License.](https://guochengqian.github.io/project/magic123/)
  - [The paper Magic123: One Image to High-Quality 3D Object Generation Using Both 2D and 3D Diffusion Priors presents a two-stage approach for generating high-quality, textured 3D meshes from a single unposed image.   In the first stage, a neural radiance field is optimized to create a coarse geometry. In the second stage, a memory-efficient differentiable mesh representation is used to generate a high-resolution mesh with visually appealing texture.   To learn the 3D content, reference view supervision and novel views guided by a combination of 2D and 3D diffusion priors are employed in both stages. A trade-off parameter controls the balance between exploration and exploitation of the generated geometry.   Textual inversion and monocular depth regularization techniques are also used to ensure consistent appearances across views and prevent degenerate solutions.   The approach, called Magic123, outperforms previous image-to-3D techniques according to extensive experiments on synthetic benchmarks and real-world images.   The code, models, and generated 3D assets are available on GitHub.](https://huggingface.co/papers/2306.17843)
  - This is a conversation and code change history on the GitHub platform for the "dream-textures" repository. It appears that the main topic of discussion is the addition of a new feature called "Project Dream Texture operator". This feature involves the use of depth-to-image projection to apply a texture to a mesh based on user input. The conversation includes comments and feedback from users who have tested the feature, as well as responses from the repository owner who is implementing the changes. There are also code commits and updates to various files related to the feature and its implementation. https://github.com/carson-katri/dream-textures/pull/409
  - This text appears to be a GitHub pull request for the "dream-textures" repository, with the pull request titled "Add Project Dream Texture operator". The pull request adds functionality that allows users to project a texture onto a mesh using a text prompt and depth data. The pull request includes a log of commits and comments from users who have tested the functionality and provided feedback. It seems that the pull request has been approved by at least two reviewers and has been merged into the main branch of the repository. https://github.com/carson-katri/dream-textures/pull/409
         | 
       |
  - [SDFStudio is a unified and modular framework for neural implicit surface reconstruction. It provides an implementation of three major implicit surface reconstruction methods: UniSurf, VolSDF, and NeuS. The framework also supports various scene representations, point sampling strategies, and incorporates advances in monocular cues, geometry regularization, and multi-view consistency. The modular implementation of SDFStudio makes it easy to transfer ideas from one method to another. The repository includes documentation, datasets, and examples for users to get started.  To use SDFStudio, users need to set up the environment by installing CUDA and creating a Conda environment. The framework requires Python 3.7 or higher. Users can install the necessary dependencies, including PyTorch and tiny-cuda-nn, using pip. After installing the dependencies, users can clone the SDFStudio repository and install it using pip. Tab completion can be enabled for better user experience.  To train a model, users can download test data and train a model on a specific dataset using the provided commands. SDFStudio supports different models and parameters can be modified to train different models. The training progress can be tracked using visualization tools such as the viewer, Tensorboard, or Weights and Biases.  Once a model is trained, users can export the mesh and render it. The repository provides commands for extracting the mesh and rendering it. Video rendering and customization of the camera path are also supported. Advanced options include training models other than NeuS-facto and modifying the configuration.  SDFStudio is built on top of the Nerfstudio project and incorporates contributions from various developers. If the library is used or the documentation is found useful, the authors request users to consider citation.  The repository includes a comprehensive README file that provides detailed instructions and explanations for using SDFStudio. It also provides information about the contributors, license, and other resources.](https://github.com/autonomousvision/sdfstudio)
  - [The text summarizes a GitHub repository called CLIP-Actor, which is a pytorch implementation for the ECCV 2022 paper, CLIP-Actor: Text-Driven Recommendation and Stylization for Animating Human Meshes. CLIP-Actor is a system for text-driven motion recommendation and neural mesh stylization for human mesh animation. The repository contains code developed on Ubuntu 18.04 with Python 3.7, CUDA 10.2, and PyTorch 1.9.0. The system requirements include Python 3.7, CUDA 10.2, and a single GPU with a minimum of 24 GB RAM. The repository provides instructions for setting up the environment and installing the required dependencies. It also provides instructions for downloading the necessary body models and datasets. The repository includes example commands to generate stylized 4D human avatars based on prompts, such as a scuba diver is scuba diving or Freddie Mercury is dancing. The outputs include final video files, stylized .obj files, colored render views, and screenshots. The repository includes a citation for the paper and acknowledges the prior work that inspired the CLIP-Actor implementation.](https://github.com/youwang-kim/clip-actor)
  - [Mixed reality design guidelines from Meta](https://developer.oculus.com/resources/mr-design-guideline/)

  - ## Bibliography
  - [Crimson Publishers](https://crimsonpublishers.com/cojts/pdf/COJTS.000578.pdf)
  - [The Case Against Micropayments](https://www.researchgate.net/publication/2899901_The_Case_Against_Micropayments)
  - [The Fall and Rise of Micropayment Systems](https://www.researchgate.net/publication/226658669_The_Fall_and_Rise_of_Micropayment_Systems)
  - [Micropayments and Mental Transaction Costs (Satoshi Nakamoto Institute)](https://nakamotoinstitute.org/library/micropayments-and-mental-transaction-costs/)
  - [Szabo’s Micropayments and Mental Transaction Costs (Nasdaq)](https://www.nasdaq.com/articles/szabos-micropayments-and-mental-transaction-costs-25-years-later)
  - [Szabo’s Micropayments and Mental Transaction Costs (Bitcoin Magazine)](https://bitcoinmagazine.com/technical/szabos-micropayments-and-mental-transaction-costs-25-years-later-)
  - [The Case Against Micropayments (University of Minnesota)](https://www-users.cse.umn.edu/~odlyzko/doc/case.against.micropayments.pdf)
  - [Autonomous AI Agents in Decentralised Finance](https://www.researchgate.net/publication/387049652_Autonomous_AI_Agents_in_Decentralized_Finance_Market_Dynamics_Application_Areas_and_Theoretical_Implications)
  - [AI Agents in Banking and Payments (Sardine)](https://www.sardine.ai/blog/ai-agents-payments)
  - [How AI Can Unlock Micropayments for Better Content Monetisation (Medium)](https://medium.com/dappier/how-ai-can-unlock-micropayments-for-better-content-monetization-966b0f9439b1)
  - [Understanding the Lightning Network (ZebPay)](https://zebpay.com/blog/understanding-the-lightning-network-the-future-of-btc-transactions)
  - [The Bitcoin Lightning Network (NYDIG)](https://www.nydig.com/learn/the-bitcoin-lightning-network)
  - [Role of the Bitcoin Lightning Network in Digital Micro-Payments (ResearchGate)](https://www.researchgate.net/publication/376682196_Role_of_the_Bitcoin_Lightning_Network_in_Digital_Micro-Payments)
  - [Micropayments and Nanopayments (CoinGeek)](https://coingeek.com/bitcoin101/micropayments-and-nanopayments-the-future-of-tiny-payments-through-bitcoin/)
  - [Lightning Network Micropayments (Netcoins)](https://blog.netcoins.com/lightning-network-micropayments-benefits-and-challenges/)
  - [Jack Dorsey-Backed Nostr Emerges as Bitcoin’s Social Layer (Bitcoin Magazine)](https://bitcoinmagazine.com/technical/jack-dorsey-backed-nostr-emerges-as-bitcoins-social-layer-at-riga-conference-)
  - [Unlocking Decentralised Payments (Murray Rudd)](https://www.murrayrudd.pro/unlocking-decentralized-payments-insights-from-nostrs-bitcoin-integration/)
  - [Monetisation Within The Nostr Ecosystem (The Bitcoin Manual)](https://thebitcoinmanual.com/articles/monetisation-nostr-ecosystem/)
  - [Nostr, Love at First Sight (Dries Buytaert)](https://dri.es/nostr-love-at-first-sight)
  - [Designing Digital Payment Experiences (ResearchGate)](https://www.researchgate.net/publication/378550360_Designing_Digital_Payment_Experiences_The_Crucial_Role_of_User-Centered_Design_and_Effective_User_Feedback_Integration)
  - [User Experience in Digital Payments (Softjourn)](https://softjourn.com/insights/user-experience-in-digital-payments-a-guide-through-best-practices)
  - [The Role of UX Design in Payment Integration (Luqra)](https://www.luqra.com/the-role-of-user-experience-design-in-payment-processing-integration/)
  - [Maybe There is a Way Micropayments Can Be Successful for News (INMA)](https://www.inma.org/blogs/product-initiative/post.cfm/maybe-there-is-a-way-micropayments-can-be-successful-for-news)
  - [The Internet of Value: Integrating Blockchain and Lightning Network Micropayments (arXiv)](https://arxiv.org/abs/2412.19384)
  - [Who Will Become The VISA of the AI Economy? (ChainCatcher)](https://www.chaincatcher.com/en/article/2161951)
  - [Micropayments 101: A Guide (Stripe)](https://stripe.com/ae/resources/more/micropayments-101-a-guide-to-get-businesses-started)
  - [The Psychology Behind Micropayments (Medium)](https://medium.com/dreamcommerce/the-psychology-behind-micropayments-how-they-match-our-modern-world-4d7aaf47449d)
  - [Factors Influencing the Adoption of Electronic Payment Cards (IISTE)](https://www.iiste.org/Journals/index.php/RJFA/article/view/19147)
  - [How Behavioural Science Can Unleash Digital Payments Adoption (Simon-Kucher)](https://www.simon-kucher.com/sites/default/files/2019-01/SimonKucher_Report_Payment%20Adoption_Final.pdf)
  - [Ethical Implications and Challenges of AI in Business Operations (ResearchGate)](https://www.researchgate.net/publication/387653122_Ethical_Implications_and_Challenges_of_AI_Implementation_in_Business_Operations)
  - [Ethical Considerations for AI Financial Planning (OneStream)](https://www.onestream.com/blog/ethical-considerations-for-ai-financial-planning/)

  - ## Conclusion
  - Micropayments rest at the confluence of technological breakthroughs and insights from behavioural economics.
  - The [[Lightning and Similar L2]] and [[Nostr protocol]] have paved the way for frictionless payments, while AI agents can address psychological barriers by automating trivial transactions.
  - User experience design emerges as the pivotal determinant of success; only when microtransactions become near-invisible—with transparency and trust controls—will the public truly embrace them.
  - The future hinges on collaboration among developers, UX experts, and policymakers to foster interoperable, privacy-respecting solutions.
  - By overcoming both mental and technical transaction costs, micropayments can finally unlock new economic possibilities and empower a fairer, more direct online marketplace.

  - ## User Experience (UX) Design Principles

  - ## Interfaces and Scaling
  - The evolution and scaling of interfaces for Large Language Models have significant implications for user interaction and the accessibility of AI technologies. This area explores the integration of LLMs into various interfaces, including immersive spaces and metaverse applications, which opens up new avenues for interaction and engagement with AI.

  - ### Key Resources and Projects
  - **Web LLM Project**: A pioneering initiative bringing LLM functionalities to the browser, enabling users to interact with these models directly from their web interface. [Web LLM Project](https://example.com/link-to-web-llm-project)
		- *This project demonstrates the feasibility and potential of deploying complex AI models in consumer-friendly interfaces.*
  - **Browser-based Models**: The [Web LLM project](https://simonwillison.net/2023/Apr/16/web-llm/) introduces a browser-based implementation of the vicuna-7b Large Language Model. This project showcases the practical application of LLMs in web environments, enabling users to interact with sophisticated AI models directly within their browsers. The initiative highlights the evolving accessibility of AI technologies, bringing powerful computational linguistics tools to a broader audience without the need for specialized hardware.

  - ## Overview
  - [The Golden Key](https://schedule.sxsw.com/2024/films/2196919) is an immersive, interactive art installation that generates never-ending, location-specific fairy tales using AI technologies. It combines large language models, generative AI, and user input to create unique, personalized narratives that evolve over time.

  - #### Nostr
  - Nostr \[pronounced no-star\] is a [decentralized openprotocol](https://www.nostr.how/) that aims to improve the social mediaexperience by addressing issues of censorship and data collection. Theprotocol operates by allowing users to post and view notes on serverscalled relays, and view and post these notes through apps calledclients. The open nature of the protocol allows for competition and afree flow of information, as users can choose to use different relays orclients if they are censored. This is because the protocol isdecentralized and controlled by no one.
  - The decentralized nature of Nostr means that there is no centralauthority that can control the flow of information. This is achievedthrough the use of relays and clients, which are run by differentindividuals or entities. Users have the freedom to choose which relaysand clients they want to use, and as a result, their feeds are populatedwith content from the people they choose to follow. If a relay or clienttries to censor a user, they can simply switch to a different one. Thisis a major advantage over traditional centralized social media platformswhere one entity holds all the control over the flow of information andcan censor or manipulate the content that users see.
  - Nostr is also not beholden to shareholders or investors. This means thatthe protocol can make decisions that prioritize the well-being andquality of discourse for users, rather than solely focusing on profit.This is in contrast to traditional social media networks like Twitter,Facebook, and TikTok, which are driven by the need to collect data onusers and sell ads to generate revenue. In these centralized platforms,users’ data is collected, analyzed and sold to the highest bidder, oftenwithout the user’s knowledge or consent. Nostr, on the other hand,allows users to have more control over their data and the ability tomonetize their content.
  - Nostr also tightly integrates Bitcoin Lightning to support the protocol.This will hopefully enable secure transmission of value alongside theinformation and interactions on the platform. It also gives users theability to monetise their content.
  - This potential step-change improvement to the social media experiencefor everyday people addresses issues of censorship and data collection.
  - Nostr is “The simplest open protocol that is able to create acensorship-resistant global "social" network once and for all.”according to it’s [github page](https://github.com/fiatjaf/nostr). Morethan that it’s a client side validated proof of who a user isinteracting with, hence being in this identity section. To be clear,it’s not a completely peer to peer system in that it uses (very dumb)relay servers, but this gives it some of the best characteristics ofboth paradigms. This has the following advantages for our metaverseapplication;
  - it’s lightweight, with minimal network overhead and complexity
  - it’s real-time using websockets
  - anyone can run a relay server, so one can be run in the deployment in the final section of the book.
  - Each of the client peers connecting to the metaverse can be a relay and able to pass messages and proofs to the other clients without the metaverse server seeing the data or being online
  - it’s open-source
  - it is itself [Turing Complete](https://snort.social/e/note1evkdgcg0dw8ckyqsqhnk4wy55h7w97twjf8etcq2tr9sv5urlszqjc9p6v) and therefore able to execute any code within it’s message protocol
  - there are multiple usable libraries and tools
  - it’s under active development with an excellent team. The lead, ‘Fiatjaf’ is one of the most [prolific developers](https://github.com/fiatjaf) in the lightning space.
  - it’s based on the same underlying cryptographic technology we are using elsewhere, indeed with it’s use of Bitcoin keys the identity system is global
  - it provides the identity proof that we need to validate users and objects into a virtual space
  - it enables message passing
  - it scales to be a social network as required
  - it need not rely on anything outside of a relay hosted on the metaverse server
  - it can be scaled to provide one to many bulletin board style applications within the metaverse
  - we can use it in private, group, and public modes as required
  - it integrates with the torrent network allowing storage and external referencing of arbitrary data
  - it can easily operate outside of the walled garden of the metaverse, extending the reach of the messages
  - [Nostr is incrediblypromising](https://www.forbes.com/sites/rogerhuang/2022/12/29/nostr-is-the-decentralized-protocol-that-might-replace-elon-musks-twitter/),and integrating these relays in the metaverse servers and clients of theproposed technology stack in this book might allow us globally provableidentity, with privacy by design. It can provide message passing. If allentities in the collaborative mixed reality scenegraphs are also Nostrkey pairs then schema can be applied consistently with the economiclayer using the same key system as Bitcoin. Nostr has just received asubstantial grant from Dorsey. It is core to the design later in thebook. A curated list of projects and libraries is [available ongithub](https://github.com/aljazceru/awesome-nostr).
  - Luke Childs [says](https://github.com/nostr-protocol/nips/issues/154):it“Nostr makes a good candidate to be used as a very simple DID layer.Having "Login with Nostr" auth on websites solves a lot of problems in avery elegant way, and Nostr’s main use case as a social network protocolmakes it highly suited to be used as your main identity proving key.Compare "Login with Nostr" to similar "Login with Lightning"(LNURL-auth) specs to see some easy and obvious advantages:  Remote signer vs local signer  Login with Lightning requires access to remote keys, login with Nostrrequires access to local keys ideally stored in a browser extension. Dueto the way Lightning works you can only really have one instance. Youneed all your client devices linked to a single Lightning node, thismeans most clients will be connecting to the signer remotely. Now ifyour Lightning node goes down or you lose your connection you also can’tauth with any service. This could cause circular dependencies where youlose the connection to your Lightning node so you can’t auth with theservices you need to access to debug the issue with your Lightning nodelike your hosting provider or VPN account. You could technically solvethis by replicating your LN keys to other client devices only to be usedfor local auth signing but that introduces other risks.  Unique identifier vs identity  A Lightning node is not really an identity but a unique identifier. Itjust tells you the person that auths is the same random person thatauthed last time, it doesn’t tell you who they are. A nostr pubkey is anidentity. It tells you who they are, what their name is, what they looklike, who they know, how you can pay them, how you can message them.  This is much more useful as an identity layer for an application. Theapplication can show their profile picture, username, send secure crossplatform push notifications via NIP-04 encrypted Nostr DMs, etc.  Consistent identity across services  Lightning pubkeys are sensitive private information and can leakconfidential financial information, Nostr pubkeys are safe to share withanyone. LNURL-auth adds extra steps to solve this by creating derivedsubkeys for identities that are unique to each service you auth with.This does not seem ideal, it seems the default case is that an identityis something that you do want to follow you across all your accounts.Nostr based auth behaves more appropriate in this regard. In the rarecase you need to achieve privacy and separation between certain servicesyou can still do that by using use a throwaway Nostr key for thoseservices.  User relationships across services Since authing with Nostr shares areal social identity with the service, they can also see your Nostrsocial graph. This could be useful for connecting you to people youalready know on the new service.  Low cost identity  Ideally identities should be easy to create but hard to build upreputation to limit spam while avoiding excluding people from thenetwork. It’s not clear that it will be cost effective / scalable foreveryone to run their own Lightning node so tying individual identity toa single Lightning node pubkey is problematic. Nostr keys are easy tocreate and hard reputation can be earned via PoW/DNS or building astrong social graph.”  Figure<a href="#fig:starhistory" data-reference-type="ref" data-reference="fig:starhistory">5.2</a>shows that the adoption is potentially tremendously fast.
  ![]./assets/431d39316d5fa17f89fa9e1154fa2a267517a245.png
  An illustration of the enthusiasm for Nostr compared to traditional DID based on GitHub ‘stars’.
  - This provides a web interface into the metaverse providing:
  - simple cryptographic identity assurance
  - private peer to peer chat
  - group chats and channels
  - email to private message relay
  - links into media on web hosts
  - The pace of development on Nostr is dizzying. Peer to peer video andaudio will allow us to link metaverse instances, between peers, throughapplications such as [Monstr](https://monstr.app/).
  - It’s notable that Nostr has it’s own inexpensive [hardware signingdevice](https://github.com/lnbits/nostr-signing-device) to protectidentity in situations where this might be necessary.  bfThe proposed integration of Nostr social media and messaging, alightning layer with digital objects such as Fedimint, Zerosync or RGB,AI agents, Vircadia, and federated Bitcoin is the core value propositionof this book. This work pre-dates [Meta andZuckerbergs](https://www.theverge.com/2023/4/26/23699633/mark-zuckerberg-meta-generative-ai-chatbots-instagram-facebook-whatsapp)stated intent in this regard by 18 months, and is differentiated stillby our focus on emerging markets and decentralisation.

  - ##### DID principles
  - The core principles of distributed identity are that there should bepersistent identifiers, like real world documents which assert identity,but with extended use cases. These should be permanent, and resolvableeverywhere, forever. Underpinning this is cryptographically verifiableand decentralised data, managed by the user, or their trusted proxy. Asprimitives this makes them lifetime digital assets, that are portable,and unconfiscatable, with no required reliance on a trusted third party.By this stage in the book you should be familiar with these concepts,but application of this fundamental mindset to all personal data anddigital interactions is a bigger reach even than money and value.

  - ## User-Side Components

  - ## Layer 3: The Application Layer
  - Layer 3 solutions are envisioned as an "application layer" built on top of Layer 2 protocols. Their primary focus will be on interoperability, customization, and enhanced user experience.

  - ### Case Studies and Research

  * **[XR Accessibility – Learning from the Past and Addressing Real User Needs for Inclusive Immersive Environments](https://doi.org/10.1007/978-3-030-58805-2_25):** This research explores how XR technologies can be made accessible to users with various disabilities, including blindness, stroke recovery, and intellectual disabilities. The study highlights the use of spatial sound for object location and interaction, as well as alternative symbolic representations for information accessibility.
  * **[Inclusive Immersion: A Review of Efforts to Improve Accessibility in Virtual Reality, Augmented Reality, and the Metaverse](https://doi.org/10.1109/VRW55335.2023.00110):** This paper reviews current efforts to address accessibility in VR and AR, focusing on creating equitable access for diverse user needs. It also identifies ongoing challenges that require further research to ensure these technologies are inclusive.
  * **[Accessibility in the Metaverse: Are We Prepared?](https://doi.org/10.5753/WAIHCWS.2022.234117):** This study discusses the significant challenges faced by people with disabilities in accessing the Metaverse. It emphasises that while efforts are being made, there is still a considerable distance to go before these environments are fully accessible.

  - ## Interfaces and Scaling
  - The evolution and scaling of interfaces for Large Language Models have significant implications for user interaction and the accessibility of AI technologies. This area explores the integration of LLMs into various interfaces, including immersive spaces and metaverse applications, which opens up new avenues for interaction and engagement with AI.

  - ### Key Resources and Projects
  - **Web LLM Project**: A pioneering initiative bringing LLM functionalities to the browser, enabling users to interact with these models directly from their web interface. [Web LLM Project](https://example.com/link-to-web-llm-project)
		- *This project demonstrates the feasibility and potential of deploying complex AI models in consumer-friendly interfaces.*
  - **Browser-based Models**: The [Web LLM project](https://simonwillison.net/2023/Apr/16/web-llm/) introduces a browser-based implementation of the vicuna-7b Large Language Model. This project showcases the practical application of LLMs in web environments, enabling users to interact with sophisticated AI models directly within their browsers. The initiative highlights the evolving accessibility of AI technologies, bringing powerful computational linguistics tools to a broader audience without the need for specialized hardware.

  ## Context and Significance

  AI users represent the ultimate stakeholders for whom AI systems are designed and deployed, experiencing both the benefits and risks of AI applications. The user perspective is essential for assessing AI system effectiveness, usability, fairness, and social impact. User needs, capabilities, and contexts significantly influence appropriate AI system design, deployment approaches, and oversight mechanisms.

  The NIST AI Risk Management Framework emphasises the importance of understanding user contexts, capabilities, and expectations when mapping and managing AI risks. User diversity—in technical sophistication, domain expertise, accessibility requirements, cultural backgrounds, and power relationships with AI providers—necessitates user-centred design approaches and inclusive development practices.

  Modern AI systems create increasingly complex user relationships: users may simultaneously benefit from and be constrained by AI, may interact knowingly or unknowingly with AI, may possess varying degrees of choice in AI system use, and may have asymmetric information about AI system functioning. These dynamics raise important questions about informed consent, user autonomy, and power imbalances requiring ethical consideration and governance attention.

  #### Key Characteristics
  - **Diverse relationships**: Direct interaction, indirect exposure, or subject status
		  - **Varying awareness**: Conscious engagement or unknowing exposure to AI
		  - **Range of agency**: From active choice to involuntary subjection
		  - **Information asymmetry**: Often limited knowledge of AI system functioning
		  - **Outcome dependence**: Affected by AI system outputs and decisions
		  - **Feedback provision**: Source of information on system performance and impacts
		  - **Rights and protections**: Legal and ethical entitlements regarding AI use
		  - **Varying vulnerability**: Different risks and power dynamics across user groups

		  ## User Categories

		  ### 1. Direct Interactive Users
		  - **Characteristics**: Consciously interact with AI system through interface
		  - **Examples**: Chatbot users, diagnostic AI-assisted clinicians, autonomous vehicle passengers
		  - **Relationship**: Active engagement, input provision, output interpretation
		  - **Considerations**: Usability, training, understanding of capabilities and limitations

		  ### 2. Mediated Users
		  - **Characteristics**: Receive AI-influenced services through intermediaries
		  - **Examples**: Patients receiving AI-assisted diagnoses, loan applicants assessed by AI
		  - **Relationship**: Indirect exposure, limited visibility into AI involvement
		  - **Considerations**: Transparency, explanation rights, human oversight

		  ### 3. Passive Subjects
		  - **Characteristics**: Data processed or circumstances affected without active participation
		  - **Examples**: Surveillance subjects, profiled individuals, algorithmically targeted populations
		  - **Relationship**: Minimal agency, often unaware of AI use
		  - **Considerations**: Consent, privacy, fairness, power imbalances

		  ### 4. Professional Users
		  - **Characteristics**: Use AI as tool in professional capacity with expertise
		  - **Examples**: Radiologists using diagnostic AI, engineers using design optimization AI
		  - **Relationship**: Expert judgment applied to AI outputs, professional responsibility
		  - **Considerations**: Maintaining skill, avoiding automation bias, accountability

		  ### 5. General Public Users
		  - **Characteristics**: Interact with consumer AI applications
		  - **Examples**: Smart assistant users, social media users experiencing algorithmic curation
		  - **Relationship**: Convenience-focused, limited technical understanding
		  - **Considerations**: Ease of use, safety, protection from manipulation

		  ## User Rights and Considerations

		  ### Information Rights
		  - **Notification**: Right to know when interacting with AI
		  - **Explanation**: Right to understand how decisions affecting them were made
		  - **Transparency**: Access to information about AI system functioning
		  - **Documentation**: Availability of user guides and support materials

		  ### Agency Rights
		  - **Choice**: Ability to opt out or choose alternative processes where feasible
		  - **Override**: Opportunity to request human review of AI decisions
		  - **Appeal**: Mechanisms to challenge AI-generated outcomes
		  - **Consent**: Informed agreement to AI system use, especially for data processing

		  ### Protection Rights
		  - **Non-discrimination**: Protection from biased or unfair treatment
		  - **Privacy**: Safeguarding of personal data and privacy interests
		  - **Safety**: Protection from AI system errors or malfunctions
		  - **Redress**: Access to remedies for AI-caused harms

		  ### Accessibility Rights
		  - **Inclusive design**: AI systems usable by people with diverse abilities
		  - **Language and cultural adaptation**: Systems accessible across languages and cultures
		  - **Digital literacy accommodation**: Appropriate for users with varying technical skills
		  - **Assistive technology compatibility**: Integration with accessibility tools

		  ## Relationships

		  - **Distinct from**: AI Provider (system developer), AI Operator (system manager)
		  - **Interacts with**: AI systems, AI Operators, AI-mediated services
		  - **Protected by**: AI Governance, regulations, user rights frameworks
		  - **Provides**: Feedback, training data (active learning), usage patterns
		  - **Subject of**: AI Impact Assessment, user research, testing
		  - **Benefits from**: AI system capabilities, services, and outputs
		  - **Vulnerable to**: AI errors, bias, manipulation, privacy violations
		  - **Informs**: AI system improvement, requirements definition
		  - **Exercised by**: Human Oversight in some contexts (when user is also operator)
		  - **Monitored via**: Usage analytics, satisfaction surveys, complaint tracking

		  ## Examples and Applications

		  1. **Healthcare Patient as User**: Patient undergoes AI-assisted diagnostic imaging—radiologist uses AI to analyze scan (radiologist as direct interactive user), patient receives diagnosis influenced by AI insights (patient as mediated user), patient has right to human expert review and explanation of diagnosis, patient's outcome data may inform future AI improvement (with consent)
		  2. **Job Applicant as Passive Subject**: Job seeker applies to company using AI resume screening—applicant unknowingly subject to AI filtering, may be rejected without human review, has limited visibility into screening criteria, may have legal rights to human oversight or non-discrimination depending on jurisdiction
		  3. **Social Media User**: Individual uses platform with AI-driven content recommendation—actively posts and consumes content (interactive user), subject to algorithmic curation affecting information exposure and wellbeing (passive subject), generates data training recommendation systems, has limited understanding of or control over algorithmic mechanisms
		  4. **Autonomous Vehicle Passenger**: Rider uses self-driving taxi service—consciously chooses AI-driven transportation (interactive user with choice), trusts system for safety during journey (dependence on AI reliability), can intervene in some designs (partial override capability), subject to system errors with potential safety consequences

		  ## ISO/IEC Standards Alignment

		  **ISO/IEC 42001:2023** (AI Management Systems):
		  - Clause 4.2: Understanding needs and expectations of interested parties (users)
		  - Clause 5.2: Policy addressing user interests
		  - Clause 8.2: Impact assessment considering user impacts
		  - Clause 9.1.3: Analysis of user feedback

		  **ISO/IEC 25059** (Quality Model for AI Systems):
		  - Quality in use perspective centered on user experience
		  - User-oriented evaluation criteria
		  - Usability and accessibility quality characteristics

		  **ISO/IEC 23894:2023** (AI Risk Management):
		  - User-oriented risk assessment
		  - Consideration of diverse user populations and vulnerabilities
		  - User feedback in risk monitoring

		  ## NIST AI RMF Integration

		  **GOVERN Function**:
		  - User involvement in governance processes
		  - Policies protecting user rights and interests
		  - Stakeholder engagement including user representation

		  **MAP Function**:
		  - User context analysis and characterization
		  - User impact identification and assessment
		  - User needs and expectations mapping

		  **MEASURE Function**:
		  - User experience and satisfaction measurement
		  - User-oriented performance and fairness metrics
		  - User feedback collection and analysis

		  **MANAGE Function**:
		  - User protections in risk management
		  - User communication in incident response
		  - User redress mechanisms

		  ## Implementation Considerations

		  **User-Centered Design**:
		  - User research to understand needs, capabilities, contexts
		  - Inclusive design involving diverse user groups
		  - Usability testing with representative users
		  - Iterative refinement based on user feedback
		  - Accessibility evaluation and enhancement

		  **User Support and Training**:
		  - Clear user documentation and guidance
		  - Training on system capabilities and limitations
		  - Support channels for questions and issues
		  - Onboarding processes for new users
		  - Resources addressing diverse user backgrounds

		  **User Protection Mechanisms**:
		  - Transparency measures informing users of AI use
		  - Explanation capabilities for user understanding
		  - Human review or override options
		  - Complaint and redress procedures
		  - Privacy controls and data protection

		  **Challenges**:
		  - Diverse user populations with varying needs
		  - Information asymmetries between providers and users
		  - Power imbalances in mandatory AI use contexts
		  - Difficulty providing meaningful choice in ubiquitous AI
		  - Balancing user control with system complexity
		  - Addressing unconscious user exposure to AI
		  - Ensuring accessibility across abilities and backgrounds

		  **Best Practices**:
		  - Conduct user research throughout development
		  - Design for diverse user capabilities and contexts
		  - Provide transparency appropriate to user sophistication
		  - Offer meaningful user control and choice where possible
		  - Test with representative user populations
		  - Maintain channels for ongoing user feedback
		  - Monitor for adverse user experiences
		  - Provide accessible recourse mechanisms
		  - Respect user autonomy and dignity
		  - Consider vulnerable user populations explicitly

		  ## Regulatory and Policy Context

		  **EU AI Act**: Defines "user" (similar to operator) rights and protections, requires providers to design for user understanding and appropriate oversight

		  **GDPR**: Establishes data subject rights including automated decision-making protections

		  **Consumer Protection Laws**: Prohibit unfair or deceptive AI practices affecting consumers

		  **Accessibility Regulations**: Require digital services including AI to be accessible to people with disabilities

		  **Sector-specific User Protections**: Healthcare patient rights, financial services consumer protections, education student rights, employment applicant protections

		  ## Related Terms

		  - **AI Provider**: Entity creating AI system used by users
		  - **AI Operator**: Entity deploying system for user interaction
		  - **Human Oversight**: Protection mechanism for users
		  - **Stakeholder**: Broader category including users
		  - **Transparency**: Information provision to users
		  - **Explainability**: Making AI understandable to users
		  - [[Fairness**: Protection of users from discriminatory treatment
		  - **User Experience**: Quality of user interaction with AI
		  - **Accessibility**: Ensuring usability for diverse users
		  - **Informed Consent**: User agreement based on understanding

  ## Context and Significance

  AI users represent the ultimate stakeholders for whom AI systems are designed and deployed, experiencing both the benefits and risks of AI applications. The user perspective is essential for assessing AI system effectiveness, usability, fairness, and social impact. User needs, capabilities, and contexts significantly influence appropriate AI system design, deployment approaches, and oversight mechanisms.

  The NIST AI Risk Management Framework emphasises the importance of understanding user contexts, capabilities, and expectations when mapping and managing AI risks. User diversity—in technical sophistication, domain expertise, accessibility requirements, cultural backgrounds, and power relationships with AI providers—necessitates user-centred design approaches and inclusive development practices.

  Modern AI systems create increasingly complex user relationships: users may simultaneously benefit from and be constrained by AI, may interact knowingly or unknowingly with AI, may possess varying degrees of choice in AI system use, and may have asymmetric information about AI system functioning. These dynamics raise important questions about informed consent, user autonomy, and power imbalances requiring ethical consideration and governance attention.

  #### References
  1. European Commission, *Proposal for a Regulation on Artificial Intelligence (AI Act)* (2021)
		  2. NIST AI 100-1, *Artificial Intelligence Risk Management Framework* (2023)
		  3. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*
		  4. Shneiderman, B., *Human-Centered AI* (2022)
		  5. GDPR, Articles 13-15, 22 (data subject rights)

		  ## See Also

		  - [[AI Provider]]
		  - [[AI Operator]]
		  - [[Human Oversight]]
		  - [[Stakeholder]]
		  - [[Transparency]]
		  - [[Explainability]]
		  - [[Fairness]]
		  - [[Accessibility]]
		  - [[User Experience]]
		  - [[Informed Consent]]

		  ```

  - public-access:: true
  - definition:: An individual or entity who interacts with, relies upon, or is affected by the outputs, decisions, or recommendations of an artificial intelligence system in order to accomplish tasks, make decisions, obtain services, or achieve objectives, either through direct system interaction or indirect exposure to AI-mediated outcomes, encompassing both active users who consciously engage with AI systems and passive subjects whose data is processed or whose circumstances are influenced by AI operations.



  ## Academic Context

  - Brief contextual overview
  - The concept of an "AI User" has evolved alongside the proliferation of artificial intelligence systems, now encompassing a broad spectrum of individuals and entities whose activities, decisions, or experiences are shaped by AI-driven technologies
  - Key developments and current state
		- AI is no longer confined to specialist domains; it permeates everyday life, from personal assistants to workplace automation, healthcare diagnostics, and public service delivery
		- The distinction between active users (those who directly interact with AI systems) and passive subjects (those whose data or circumstances are influenced by AI, often without direct engagement) is increasingly recognised in both academic and policy discourse
  - Academic foundations
		- The field draws on human-computer interaction (HCI), sociology of technology, and ethics, with foundational work by scholars such as Sherry Turkle and Paul Dourish highlighting the social and psychological dimensions of technology use

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - AI systems are now embedded in a wide range of sectors, including healthcare, finance, retail, and public services
  - Notable organisations and platforms
		- NHS Digital in the UK has rolled out AI-driven diagnostic tools and patient management systems
		- Financial institutions like Barclays and NatWest use AI for fraud detection and customer service
		- Retail giants such as Tesco and Sainsbury's employ AI for inventory management and personalised marketing
  - UK and North England examples where relevant
		- Manchester City Council has implemented AI for traffic management and urban planning
		- Leeds City Council uses AI to optimise waste collection routes and improve public service delivery
		- Newcastle University's Institute for Data Science and Artificial Intelligence supports local businesses in adopting AI solutions
		- Sheffield Hallam University collaborates with local SMEs to develop AI-driven training and support programmes
  - Technical capabilities and limitations
  - AI systems can process vast amounts of data, provide real-time insights, and automate routine tasks, but they are not infallible and can perpetuate biases present in training data
  - Limitations include the need for high-quality data, the potential for algorithmic bias, and the challenge of ensuring transparency and accountability
  - Standards and frameworks
  - The UK government has established the Centre for Data Ethics and Innovation (CDEI) to oversee the ethical use of AI
  - The National Institute for Health and Care Excellence (NICE) provides guidelines for the use of AI in healthcare
  - The British Standards Institution (BSI) has developed standards for AI in various sectors, including ISO/IEC 23894:2023 for AI risk management

  ## Research & Literature

  - Key academic papers and sources
  - Dourish, P. (2021). "The Social Life of AI: Human-Computer Interaction and the Social Dimensions of Artificial Intelligence." *ACM Transactions on Computer-Human Interaction*, 28(3), 1-25. https://doi.org/10.1145/3447526
  - Turkle, S. (2020). "Alone Together: Why We Expect More from Technology and Less from Each Other." *Basic Books*. https://www.basicbooks.com/titles/sherry-turkle/alone-together/9780465093641/
  - Floridi, L. (2021). "The Ethics of Artificial Intelligence: Principles, Challenges, and Opportunities." *Philosophical Transactions of the Royal Society A*, 379(2190), 20200361. https://doi.org/10.1098/rsta.2020.0361
  - Jobin, A., Ienca, M., & Vayena, E. (2019). "The Global Landscape of AI Ethics Guidelines." *Nature Machine Intelligence*, 1(9), 389-399. https://doi.org/10.1038/s42256-019-0088-2
  - Ongoing research directions
  - Investigating the social and psychological impacts of AI on users
  - Developing more transparent and explainable AI systems
  - Exploring the ethical and legal implications of AI in various contexts

  ## UK Context

  - British contributions and implementations
  - The UK has been at the forefront of AI research and policy, with significant investments in AI education, research, and infrastructure
  - The Alan Turing Institute, the UK's national institute for data science and AI, plays a crucial role in advancing AI research and fostering collaboration between academia and industry
  - North England innovation hubs (if relevant)
  - Manchester is home to the Manchester Centre for Digital Development, which supports AI innovation in the region
  - Leeds has established the Leeds Digital Innovation Hub, focusing on AI and data science applications in healthcare and public services
  - Newcastle's Digital Catapult North East and Cumbria provides support for AI startups and SMEs
  - Sheffield's Advanced Manufacturing Research Centre (AMRC) integrates AI into manufacturing processes
  - Regional case studies
  - Manchester's AI-driven traffic management system has reduced congestion and improved air quality
  - Leeds' AI-powered waste collection optimisation has led to cost savings and environmental benefits
  - Newcastle's collaboration with local businesses has resulted in the development of AI solutions for supply chain management
  - Sheffield's AMRC has implemented AI in predictive maintenance, reducing downtime and increasing efficiency

  ## Future Directions

  - Emerging trends and developments
  - Increased integration of AI in everyday life, with a focus on personalisation and user-centric design
  - Greater emphasis on ethical and responsible AI, with the development of more robust regulatory frameworks
  - Expansion of AI applications in healthcare, education, and public services
  - Anticipated challenges
  - Ensuring data privacy and security
  - Addressing algorithmic bias and ensuring fairness
  - Maintaining transparency and accountability in AI systems
  - Research priorities
  - Investigating the long-term social and psychological impacts of AI on users
  - Developing more transparent and explainable AI systems
  - Exploring the ethical and legal implications of AI in various contexts

  ## References

  1. Dourish, P. (2021). "The Social Life of AI: Human-Computer Interaction and the Social Dimensions of Artificial Intelligence." *ACM Transactions on Computer-Human Interaction*, 28(3), 1-25. https://doi.org/10.1145/3447526
  2. Turkle, S. (2020). "Alone Together: Why We Expect More from Technology and Less from Each Other." *Basic Books*. https://www.basicbooks.com/titles/sherry-turkle/alone-together/9780465093641/
  3. Floridi, L. (2021). "The Ethics of Artificial Intelligence: Principles, Challenges, and Opportunities." *Philosophical Transactions of the Royal Society A*, 379(2190), 20200361. https://doi.org/10.1098/rsta.2020.0361
  4. Jobin, A., Ienca, M., & Vayena, E. (2019). "The Global Landscape of AI Ethics Guidelines." *Nature Machine Intelligence*, 1(9), 389-399. https://doi.org/10.1038/s42256-019-0088-2
  5. Centre for Data Ethics and Innovation (CDEI). (2025). "Guidance on the Ethical Use of AI." https://www.gov.uk/government/organisations/centre-for-data-ethics-and-innovation
  6. National Institute for Health and Care Excellence (NICE). (2025). "Guidelines for the Use of AI in Healthcare." https://www.nice.org.uk/guidance
  7. British Standards Institution (BSI). (2023). "ISO/IEC 23894:2023 - Artificial Intelligence — Risk Management." https://www.bsigroup.com/en-GB/standards/iso-iec-23894-2023/
  8. Alan Turing Institute. (2025). "About the Alan Turing Institute." https://www.turing.ac.uk/
  9. Manchester Centre for Digital Development. (2025). "AI Innovation in Manchester." https://www.manchester.ac.uk/research/centres/manchester-centre-for-digital-development/
  10. Leeds Digital Innovation Hub. (2025). "AI and Data Science in Leeds." https://leedsdigitalinnovationhub.co.uk/
  11. Digital Catapult North East and Cumbria. (2025). "Support for AI Startups and SMEs." https://www.digitcatapult.org.uk/north-east-and-cumbria/
  12. Advanced Manufacturing Research Centre (AMRC). (2025). "AI in Manufacturing." https://www.amrc.co.uk/


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources:: [[EU AI Act]], [[GDPR]], [[NIST AI Risk Management Framework]]
  - migration-date:: 2026-04-26T00:00:00Z
  - modified:: 2026-04-26T15:00:00Z