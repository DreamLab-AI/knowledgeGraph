- ### Definition
  - Client-side Dynamic Creative Optimisation (DCO) is an approach where personalised advertising content is generated and matched on the user's device rather than on centralised servers. Using locally maintained preference hashes and decentralised distribution protocols (such as Nostr), the system delivers contextually relevant content without exposing personal identity data to advertisers.

- ### Semantic Classification
  - owl-class:: infrastructure:ClientSideDCO
  - owl-role:: Concept

- ### Relationships
  - uses:: [[Nostr Protocol]], [[Neural Network Latent Space]], [[Hardware and Edge]]
  - enables:: [[Hyper personalisation]], [[Privacy]]
  - requires:: [[Edge Computing]]
  - depends-on:: [[Multimodal AI Architecture]]

- ### Content
  - #Public page
  - automatically published
  - # Client Pull Model for Embedded Product Promotion
  - [An Interview With Jack Dorsey (piratewires.com)](https://www.piratewires.com/p/interview-with-jack-dorsey-mike-solana)
		- Each user device maintains a secure, [[Hardware and Edge]] local knowledge base.
		- This base contains user preferences, interests, and demographic data, organised as a lookup table. Hashes represent product classes or categories of product that are interesting to the user (opt in)
		- User's device includes a [[Nostr protocol]] client to interact with the decentralised Nostr network.
		- The Nostr client accesses the local knowledge base to retrieve relevant product class hashes.
		- These hashes are used to pull personalised marketing content from the Nostr network.
		- Personalised marketing content is seamlessly embedded into the user's preferred applications, such as Roblox, [[NVIDIA Omniverse Platform]] , and web browsers.
		  This ensures relevant and engaging marketing content within the context of the user's usual digital experiences.
		- [[Multimodal]] Product Representation
		- Marketers create rich, multi-modal representations of their products, capturing visual appearance, textual descriptions, and other relevant attributes.
		  These are [[Training and fine tuning]] using AI to generate variations catering to different user preferences and demographics.
		- Fine-tuned product variations are stored in a cloud-based [[Neural Network Latent Space]] , a high-dimensional vector space where each point represents a specific product variation.
		- This [[Neural Network Latent Space]] is organised and indexed for efficient retrieval based on user preferences.
		- Marketers distribute product variations across a cloud of [[Nostr]] servers, each variation associated with a unique Nostr event containing metadata and content.
		- The Nostr servers act as a decentralised storage and distribution network for marketing content.
		- Advertisers and brand leaders support the Nostr network by subsidising network nodes, helping maintain network infrastructure and incentivising node operators.
		- The user's device, with a Nostr client, accesses the local knowledge base to retrieve relevant product class hashes.
		- These hashes are used to pull personalised marketing content from the Nostr network, which matches hashes with corresponding product variations in the cloud-based latent space.
		- The matched product variations are then returned to the user's device via the Nostr network, ensuring the marketer has no direct access to the user's personal information or identity.
		- The user's knowledge base is kept local to their device, using hashes to retrieve personalised content, which enhances [[AI Governance Law and Privacy]] by avoiding centralized data collection and tracking.
		- [[Hyper personalisation]] and Dynamic Creative Optimisation (DCO)
		- The system delivers content optimised for the user's language, environment, age, and other demographic factors using AI-powered multi-modal product representations.
		- DCO techniques dynamically adapt and optimise creative elements in real-time based on user interactions and preferences.
		- The [[Decentralised Web]] Nostr architecture allows for efficient distribution and retrieval of marketing content.
		- Advertiser subsidies help maintain a robust and reliable network infrastructure.
		- Personalised marketing content is embedded into the user's preferred applications for a seamless experience.
		   Ethical Considerations
		- It's crucial to ensure user awareness and consent for using the local knowledge base for personalised marketing.
		- Implement clear communication and opt-in mechanisms for transparency and user control.
		- The exploration of privacy-preserving measurement techniques allows for aggregate insights without compromising individual user privacy.
		- Advertiser subsidies contribute to the long-term sustainability and growth of the Nostr network, fostering a mutually beneficial ecosystem.
		- The system aims to expand advertiser participation and subsidies to strengthen the Nostr network infrastructure further.
		- Collaboration with the Nostr community and stakeholders will refine the system's design and drive adoption.
		- Advanced AI and ML techniques will enhance [[Hyper personalisation]] and DCO capabilities, fostering a thriving ecosystem benefiting from a privacy-focused approach. -
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z