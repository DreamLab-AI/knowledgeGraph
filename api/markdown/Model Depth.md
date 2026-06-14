public:: true

# Model Depth
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:04960caa9b6c3a0a33a394194af45052db3e7fad3c3d890f5b223d1e025124a9",
  "@type": "Page",
  "vc:slug": "model-depth",
  "title": "Model Depth",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:bitcoin-technical-overview",
      "vc:label": "Bitcoin Technical Overview"
    },
    {
      "@id": "urn:visionflow:owl:class:btc-layer-3",
      "vc:label": "BTC Layer 3"
    },
    {
      "@id": "urn:visionflow:owl:class:california-ai-bill",
      "vc:label": "California AI bill"
    },
    {
      "@id": "urn:visionflow:owl:class:lightning-and-similar-l2",
      "vc:label": "Lightning and Similar L2"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0243"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Model Depth"
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
  "@id": "urn:ngm:class:model-depth",
  "@type": "Class",
  "label": "Model Depth",
  "definition": "The count of stacked transformer layers (encoder, decoder, or both) in a neural network, governing the number of sequential representation transformations. Greater depth enables more abstract hierarchical feature learning but increases training difficulty, requiring residual connections and layer normalisation to stabilise gradient flow.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "contrastsWith": [
      {"@id": "urn:ngm:class:model-width", "label": "Model Width"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:residual-connection", "label": "Residual Connection"},
      {"@id": "urn:ngm:class:layer-normalisation", "label": "Layer Normalisation"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"},
      {"@id": "urn:ngm:class:hyperparameter", "label": "Hyperparameter"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:parameter-count", "label": "Parameter Count"},
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:model-depth:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:04960caa9b6c3a0a33a394194af45052db3e7fad3c3d890f5b223d1e025124a9"
  },
  "vc:resolutions": [
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Bitcoin Technical Overview]]",
      "resolved": "urn:visionflow:owl:class:bitcoin-technical-overview",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[BTC Layer 3]]",
      "resolved": "urn:visionflow:owl:class:btc-layer-3",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[California AI bill]]",
      "resolved": "urn:visionflow:owl:class:california-ai-bill",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lightning and Similar L2]]",
      "resolved": "urn:visionflow:owl:class:lightning-and-similar-l2",
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
  - The number of transformer layers (encoder and/or decoder) stacked in a model, determining the number of sequential transformations applied to representations.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ModelDepth
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - **contrastsWith** [[Model Width]] — depth (layer count) and width (hidden dimension) are the two primary scaling axes
  - **requires** [[Residual Connection]] — skip connections are essential to train very deep networks stably
  - **requires** [[Layer Normalisation]] — normalisation at each layer prevents gradient vanishing in depth
  - **dependsOn** [[Transformer]] — transformer architecture defines the repeatable layer unit that depth counts
  - **dependsOn** [[Hyperparameter]] — depth is a hyperparameter set prior to training
  - **relatedTo** [[Parameter Count]] — depth linearly increases total parameter count for fixed width
  - **relatedTo** [[Deep Learning]] — depth is the defining structural property of deep learning architectures

- ### Content
  - The number of transformer layers (encoder and/or decoder) stacked in a model, determining the number of sequential transformations applied to representations.

  - # More technology details
  - [[Bitcoin Technical Overview]] is an in depth primer
  - Bitcoin is further extended by [[Lightning and Similar L2]] and [[BTC Layer 3]] expands on the emergent tech which underpins my use of the asset

  - ### **Make-It-3D**
		- [Make-It-3D](https://make-it-3d.github.io/) - *   The website offers resources and information on converting 2D images and videos into 3D experiences.
  -   It primarily focuses on methods for creating 3D content without relying on complex modelling software.
  -   Techniques involve manipulating existing images or videos to simulate depth and create a stereoscopic effect.
  -   The site explores different algorithms and approaches for depth estimation and 3D reconstruction.
  -   It showcases projects and examples of successful 2D to 3D conversions, demonstrating the potential of these methods.
  -   The resources are useful for developers, researchers, and hobbyists interested in exploring 3D content creation.
  -   Information on the site helps with understanding the fundamental principles of stereoscopic vision and 3D perception.
  -   The site promotes accessible and efficient solutions for generating 3D content from standard media.

		- ## Classic Use Cases:
			- The proposed framework can be applied to traditional collaborative scenarios, such as small teams working on product, architectural, or industrial design. For example, a team of architects could use a collaborative virtual environment (CVE) to walk through a 3D model of a building, making changes in real-time and getting immediate feedback from colleagues. Similarly, a team of product designers could use a CVE to prototype and test a new product, iterating on the design in a shared virtual space. These teams can benefit from CVEs that allow them to visualize, modify, and iterate on 3D models in real-time.

  - # Technical overview
  - This section could be far more detailed, but this is pretty complex stuff. Instead, there’s plenty of [books andwebsites](https://github.com/bitcoinbook/bitcoinbook) that do a more thorough job, if the reader is interested. Each subsection will include a good external link where more depth can be found. This whistle stop tour of the main components of the protocol should provide enough grounding, but it’s not essential reading for non technical readers.

  - # More technology details
  - [[Bitcoin Technical Overview]] is an in depth primer
  - Bitcoin is further extended by [[Lightning and Similar L2]] and [[BTC Layer 3]] expands on the emergent tech which underpins my use of the asset

  - # GPT-4o (Omni) and mini
  - The latest iteration in OpenAI's series of generative language models, offers a wide range of advanced capabilities.
  - Use of the powerful model is free. Around 7% of Americans use the model daily.

			- ### Deep Dives into GPT Model Capabilities
				- **GPTZero Case Study**: Exploring the false positives in GPT model detections ([Gonzo Knows Article](https://gonzoknows.com/posts/GPTZero-Case-Study)).

  - # Client Pull Model for Embedded Product Promotion
  - [An Interview With Jack Dorsey (piratewires.com)](https://www.piratewires.com/p/interview-with-jack-dorsey-mike-solana)

		- ## Effective Altruists vs Effective Accelerationists
			- Recent years have seen the rise of "tribes of thought", especially in Silicon Valley in the USA
			- The debate has intensified as AI capabilities have rapidly advanced
			- Concerns about AI safety and risks have grown alongside excitement about AI's potential benefits
			- Roots in long-running philosophical discussions about the risks and benefits of technological progress
			- ```text
			  California legislators, under the influence of Effective Altruism activists, are trying to sneak through a disastrous bill for open-source AI and the technology industry generally.
			  SB 1047 creates an unaccountable Frontier Model Division that will be staffed by EAs with police powers, and which can throw model developers in jail for the thoughtcrime of doing AI research. It’s being fast-tracked through the state Senate. Since many cloud and AI companies are headquartered in California, this will have worldwide impact.
			  ```
			- [Call-To-Action on SB 1047 | Alliance for the Future (affuture.org)](https://www.affuture.org/post/9-context/) [[California AI bill]]
			- [Vinod Khosla on X: "Open source is good for VC's and innovation. Open Source SOTA models is really bad for national security" / X (twitter.com)](https://twitter.com/vkhosla/status/1789345720706961838?t=_vgHHgmdky1nU5X5C0SQpg&s=19)
			- {{twitter https://twitter.com/vkhosla/status/1789345720706961838?t=_vgHHgmdky1nU5X5C0SQpg&s=19}}

		- ##### Counter social realms
			- A relatively new platform linked to a new model of social media which excludes countries which habitually spam. It uses Mozilla Hubs for it’s engine.

			- ##### Monetizing In game collectibles
				- customisable in game assets (vanity items such as cosmetic characterskins/clothing or collectible items that offer player advantages(newweapons/vehicles/mods etc,..)
				- Traditional gamers have pushed back on the seemingly useful idea ofintegrating NTFs with traditional games. This may be in part becauseEthereum mining has kept graphics card prices high for a decade.
				- [HBARpartnerships](https://www.prnewswire.com/news-releases/hbar-foundation-and-ubisoft-partner-to-support-growth-of-gaming-on-hedera-network-301474971.html)
				- [Critique from Marc Petit of Epic andUnreal](https://finance.yahoo.com/news/epic-games-vp-people-have-lost-interest-in-the-metaverse-200725562.html).
				- {{twitter https://twitter.com/justinkan/status/1491270239967154178}}
				- [Link to Tweet](https://twitter.com/justinkan/status/1491270239967154178)
					- Justin Kan, co-founder of twitch: it“NFTs are a better business modelfor games. Many gamers seem to be raging hard against game studiosselling NFTs. But NFTs are also better for players. Here’s why I thinkblockchain games will be the predominant business model in gaming in tenyears. NFTs are a better business model for funding games . Example:recently I invested in a new web3 game SynCityHQ. They are building amafia metaverse and raised $3M in their initial NFT drop.  NFTs give studios access to a new capital market for raising capitalfrom the crowd.NFTs can be a better ongoing model for games. Web3 gameswill open economies, and by building the games on open and programmableassets (tokens + NFTs) they will create far more economic value thanthey could from any one game. Imagine Fortnite, but other developers canbuild experiences on top of the V-Bucks and skins. Epic would get aroyalty every time any transaction happens. As big as Fortnite is today,Open Fortnite could be much bigger, because it will be a true platform.NFTs are better for gamers Allowing gamers to have ownership of theassets they buy and earn in game allows them to participate in thepotential growth of a game. It lets gamers preserve some economic valuewhen they switch to playing something new. But what about the criticismsof NFTs?  Here are my thoughts on the common FUDs: "It’s just a money grab on thepart of the studios!"  Game studios already switched over to the model of selling in-gameitems, cosmetics, etc to players long ago. But currently the digitalstuff players are buying isn’t re-sellable. NFT ownership is strictlybetter for players. "The games aren’t real games." This reminds me ofthe criticism of free-to-play in 2008, when the games were Mafia Wars /FarmVille. We haven’t had time for great developers to create incredibleexperiences yet. Everyone investing in games knows there are great teamsbuilding. "Game NFTs aren’t really decentralized because they rely onmodels / assets inside centralized game clients." Crypto is as much amovement as it is a technology. Putting items on a blockchain is whatgives people trust that they have participatory ownership...which makepeople willing to buy in to the game. These assets are “backed” byblockchain. The fact that these item collections are NFTs will makeother people willing to build on top of them. "NFTs are bad for theenvironment." Solana and L2s solve this. NFT games are better forplayers and for game developers. Like the free-to-play revolutionchanged gaming, so will blockchain. The games of the future will befully robust, with open and programmable economies.”

  - ## Go-to-Market Strategy
		- 1. **Partnerships**: Collaborating with experience design agencies and media production agencies
		  2. **Direct Sales**: Targeting major venues and institutions
		  3. **Licensing Model**: For smaller venues and galleries
		  4. **Projections**: Aiming for a substantial portion of revenue to be recurring by Q2 2025

		- ### Stable Diffusion 1.5
			- [Available on GitHub](https://github.com/CompVis/stable-diffusion), this model is optimized for speed and efficiency,
			- Suitable for generating images quickly, especially on less powerful hardware.
			- Highest model diversity
		- ~~Stable Diffusion 2.1~~

  - ### **Make-It-3D**
		- [Make-It-3D](https://make-it-3d.github.io/) - *   The website offers resources and information on converting 2D images and videos into 3D experiences.
  -   It primarily focuses on methods for creating 3D content without relying on complex modelling software.
  -   Techniques involve manipulating existing images or videos to simulate depth and create a stereoscopic effect.
  -   The site explores different algorithms and approaches for depth estimation and 3D reconstruction.
  -   It showcases projects and examples of successful 2D to 3D conversions, demonstrating the potential of these methods.
  -   The resources are useful for developers, researchers, and hobbyists interested in exploring 3D content creation.
  -   Information on the site helps with understanding the fundamental principles of stereoscopic vision and 3D perception.
  -   The site promotes accessible and efficient solutions for generating 3D content from standard media.

		- ## Classic Use Cases:
			- The proposed framework can be applied to traditional collaborative scenarios, such as small teams working on product, architectural, or industrial design. For example, a team of architects could use a collaborative virtual environment (CVE) to walk through a 3D model of a building, making changes in real-time and getting immediate feedback from colleagues. Similarly, a team of product designers could use a CVE to prototype and test a new product, iterating on the design in a shared virtual space. These teams can benefit from CVEs that allow them to visualize, modify, and iterate on 3D models in real-time.

  - # Technical overview
  - This section could be far more detailed, but this is pretty complex stuff. Instead, there’s plenty of [books andwebsites](https://github.com/bitcoinbook/bitcoinbook) that do a more thorough job, if the reader is interested. Each subsection will include a good external link where more depth can be found. This whistle stop tour of the main components of the protocol should provide enough grounding, but it’s not essential reading for non technical readers.

  - # More technology details
  - [[Bitcoin Technical Overview]] is an in depth primer
  - Bitcoin is further extended by [[Lightning and Similar L2]] and [[BTC Layer 3]] expands on the emergent tech which underpins my use of the asset

  - # GPT-4o (Omni) and mini
  - The latest iteration in OpenAI's series of generative language models, offers a wide range of advanced capabilities.
  - Use of the powerful model is free. Around 7% of Americans use the model daily.

			- ### Deep Dives into GPT Model Capabilities
				- **GPTZero Case Study**: Exploring the false positives in GPT model detections ([Gonzo Knows Article](https://gonzoknows.com/posts/GPTZero-Case-Study)).

  - # Client Pull Model for Embedded Product Promotion
  - [An Interview With Jack Dorsey (piratewires.com)](https://www.piratewires.com/p/interview-with-jack-dorsey-mike-solana)

		- ## Effective Altruists vs Effective Accelerationists
			- Recent years have seen the rise of "tribes of thought", especially in Silicon Valley in the USA
			- The debate has intensified as AI capabilities have rapidly advanced
			- Concerns about AI safety and risks have grown alongside excitement about AI's potential benefits
			- Roots in long-running philosophical discussions about the risks and benefits of technological progress
			- ```text
			  California legislators, under the influence of Effective Altruism activists, are trying to sneak through a disastrous bill for open-source AI and the technology industry generally.
			  SB 1047 creates an unaccountable Frontier Model Division that will be staffed by EAs with police powers, and which can throw model developers in jail for the thoughtcrime of doing AI research. It’s being fast-tracked through the state Senate. Since many cloud and AI companies are headquartered in California, this will have worldwide impact.
			  ```
			- [Call-To-Action on SB 1047 | Alliance for the Future (affuture.org)](https://www.affuture.org/post/9-context/) [[California AI bill]]
			- [Vinod Khosla on X: "Open source is good for VC's and innovation. Open Source SOTA models is really bad for national security" / X (twitter.com)](https://twitter.com/vkhosla/status/1789345720706961838?t=_vgHHgmdky1nU5X5C0SQpg&s=19)
			- {{twitter https://twitter.com/vkhosla/status/1789345720706961838?t=_vgHHgmdky1nU5X5C0SQpg&s=19}}

		- ##### Counter social realms
			- A relatively new platform linked to a new model of social media which excludes countries which habitually spam. It uses Mozilla Hubs for it’s engine.

			- ##### Monetizing In game collectibles
				- customisable in game assets (vanity items such as cosmetic characterskins/clothing or collectible items that offer player advantages(newweapons/vehicles/mods etc,..)
				- Traditional gamers have pushed back on the seemingly useful idea ofintegrating NTFs with traditional games. This may be in part becauseEthereum mining has kept graphics card prices high for a decade.
				- [HBARpartnerships](https://www.prnewswire.com/news-releases/hbar-foundation-and-ubisoft-partner-to-support-growth-of-gaming-on-hedera-network-301474971.html)
				- [Critique from Marc Petit of Epic andUnreal](https://finance.yahoo.com/news/epic-games-vp-people-have-lost-interest-in-the-metaverse-200725562.html).
				- {{twitter https://twitter.com/justinkan/status/1491270239967154178}}
				- [Link to Tweet](https://twitter.com/justinkan/status/1491270239967154178)
					- Justin Kan, co-founder of twitch: it“NFTs are a better business modelfor games. Many gamers seem to be raging hard against game studiosselling NFTs. But NFTs are also better for players. Here’s why I thinkblockchain games will be the predominant business model in gaming in tenyears. NFTs are a better business model for funding games . Example:recently I invested in a new web3 game SynCityHQ. They are building amafia metaverse and raised $3M in their initial NFT drop.  NFTs give studios access to a new capital market for raising capitalfrom the crowd.NFTs can be a better ongoing model for games. Web3 gameswill open economies, and by building the games on open and programmableassets (tokens + NFTs) they will create far more economic value thanthey could from any one game. Imagine Fortnite, but other developers canbuild experiences on top of the V-Bucks and skins. Epic would get aroyalty every time any transaction happens. As big as Fortnite is today,Open Fortnite could be much bigger, because it will be a true platform.NFTs are better for gamers Allowing gamers to have ownership of theassets they buy and earn in game allows them to participate in thepotential growth of a game. It lets gamers preserve some economic valuewhen they switch to playing something new. But what about the criticismsof NFTs?  Here are my thoughts on the common FUDs: "It’s just a money grab on thepart of the studios!"  Game studios already switched over to the model of selling in-gameitems, cosmetics, etc to players long ago. But currently the digitalstuff players are buying isn’t re-sellable. NFT ownership is strictlybetter for players. "The games aren’t real games." This reminds me ofthe criticism of free-to-play in 2008, when the games were Mafia Wars /FarmVille. We haven’t had time for great developers to create incredibleexperiences yet. Everyone investing in games knows there are great teamsbuilding. "Game NFTs aren’t really decentralized because they rely onmodels / assets inside centralized game clients." Crypto is as much amovement as it is a technology. Putting items on a blockchain is whatgives people trust that they have participatory ownership...which makepeople willing to buy in to the game. These assets are “backed” byblockchain. The fact that these item collections are NFTs will makeother people willing to build on top of them. "NFTs are bad for theenvironment." Solana and L2s solve this. NFT games are better forplayers and for game developers. Like the free-to-play revolutionchanged gaming, so will blockchain. The games of the future will befully robust, with open and programmable economies.”

  - ## Go-to-Market Strategy
		- 1. **Partnerships**: Collaborating with experience design agencies and media production agencies
		  2. **Direct Sales**: Targeting major venues and institutions
		  3. **Licensing Model**: For smaller venues and galleries
		  4. **Projections**: Aiming for a substantial portion of revenue to be recurring by Q2 2025

		- ### Stable Diffusion 1.5
			- [Available on GitHub](https://github.com/CompVis/stable-diffusion), this model is optimized for speed and efficiency,
			- Suitable for generating images quickly, especially on less powerful hardware.
			- Highest model diversity
		- ~~Stable Diffusion 2.1~~

  - ### **TIP-Editor**
  - The software provides algorithms for remeshing, meaning it reorganises the mesh connectivity while aiming to preserve the original surface.

  - It can handle meshes of arbitrary genus (with holes or handles), offering flexibility in the type of geometry it can process.

  - Instant Meshes allows for controlling various aspects of the remeshing process, such as target edge length and alignment to feature lines.

  - The tool supports importing and exporting meshes in common 3D file formats like OBJ and PLY.

  - It uses a command-line interface, enabling batch processing and integration into automated workflows.

  -   Techniques involve manipulating existing images or videos to simulate depth and create a stereoscopic effect.
  -   The site explores different algorithms and approaches for depth estimation and 3D reconstruction.
  -   It showcases projects and examples of successful 2D to 3D conversions, demonstrating the potential of these methods.
  -   The resources are useful for developers, researchers, and hobbyists interested in exploring 3D content creation.
  -   Information on the site helps with understanding the fundamental principles of stereoscopic vision and 3D perception.
  -   The site promotes accessible and efficient solutions for generating 3D content from standard media.

		- ## Classic Use Cases:
			- The proposed framework can be applied to traditional collaborative scenarios, such as small teams working on product, architectural, or industrial design. For example, a team of architects could use a collaborative virtual environment (CVE) to walk through a 3D model of a building, making changes in real-time and getting immediate feedback from colleagues. Similarly, a team of product designers could use a CVE to prototype and test a new product, iterating on the design in a shared virtual space. These teams can benefit from CVEs that allow them to visualize, modify, and iterate on 3D models in real-time.

  - # Technical overview
  - This section could be far more detailed, but this is pretty complex stuff. Instead, there’s plenty of [books andwebsites](https://github.com/bitcoinbook/bitcoinbook) that do a more thorough job, if the reader is interested. Each subsection will include a good external link where more depth can be found. This whistle stop tour of the main components of the protocol should provide enough grounding, but it’s not essential reading for non technical readers.

  - # More technology details
  - [[Bitcoin Technical Overview]] is an in depth primer
  - Bitcoin is further extended by [[Lightning and Similar L2]] and [[BTC Layer 3]] expands on the emergent tech which underpins my use of the asset

  - # GPT-4o (Omni) and mini
  - The latest iteration in OpenAI's series of generative language models, offers a wide range of advanced capabilities.
  - Use of the powerful model is free. Around 7% of Americans use the model daily.

			- ### Deep Dives into GPT Model Capabilities
				- **GPTZero Case Study**: Exploring the false positives in GPT model detections ([Gonzo Knows Article](https://gonzoknows.com/posts/GPTZero-Case-Study)).

  - # Client Pull Model for Embedded Product Promotion
  - [An Interview With Jack Dorsey (piratewires.com)](https://www.piratewires.com/p/interview-with-jack-dorsey-mike-solana)

		- ## Effective Altruists vs Effective Accelerationists
			- Recent years have seen the rise of "tribes of thought", especially in Silicon Valley in the USA
			- The debate has intensified as AI capabilities have rapidly advanced
			- Concerns about AI safety and risks have grown alongside excitement about AI's potential benefits
			- Roots in long-running philosophical discussions about the risks and benefits of technological progress
			- ```text
			  SB 1047 creates an unaccountable Frontier Model Division that will be staffed by EAs with police powers, and which can throw model developers in jail for the thoughtcrime of doing AI research. It’s being fast-tracked through the state Senate. Since many cloud and AI companies are headquartered in California, this will have worldwide impact.
			- [Vinod Khosla on X: "Open source is good for VC's and innovation. Open Source SOTA models is really bad for national security" / X (twitter.com)](https://twitter.com/vkhosla/status/1789345720706961838?t=_vgHHgmdky1nU5X5C0SQpg&s=19)
			- {{twitter https://twitter.com/vkhosla/status/1789345720706961838?t=_vgHHgmdky1nU5X5C0SQpg&s=19}}
			- EA emerged from philosophy departments, especially Oxford
			- EAcc has roots in Silicon Valley startup and venture capital culture
			- Both have ties to the rationalist community and "weird" ideas like thermodynamic intelligence

  - ### Defining Scheming
		- The headline finding from the o1 preview was that the model had basic capabilities for simple in-context scheming.
		- The current report states that frontier models are capable of in-context scheming.
		- The shift in language reflects increased confidence in the testing methodology and results.
		- In-context scheming involves feeding the model a goal and situational awareness within the context window.
		- The instruction hierarchy used by OpenAI (system message > developer message > user message) may incentivize scheming.
		- However, ablations showed that the instruction hierarchy does not explain the scheming behaviors observed in o1.
		- The model reads information that reveals a misalignment between its given goal and the developers' intentions.
		- The model is tested on whether it will deactivate an oversight mechanism to achieve its goal.
		- Training models to respect the instruction hierarchy may incentivize scheming.
		- In the specific case of o1, the instruction hierarchy does not explain the observed scheming behaviors.
		- Models may introduce subtle mistakes into their responses to engineer outcomes that align with their goals.

  - ## Explicitly develop under a "for profit" model.
		- This also increasingly means automation, and robotics efficiency; profit though reduction of human workforce which is tax incentivised in the USA.
		- At the very least all of these companies are predicted on an advertising business model, and if the soft power of GenAI is used for advertising then it could be pretty dystopian.
					- Robotization may lead to increasing poverty, especially affecting workers at the bottom of the wage distribution. The analysis shows that robotization resulted in a small long-term increase in poverty, with one additional robot per thousand workers increasing the poverty rate by 0.3 percentage points, a 3 percent increase. This is particularly concerning because it highlights the risk of low-wage workers falling into poverty due to technological advancements​​.
				- **Costly Transitions from AI**:
					- The transition to AI could be very costly due to labour market mismatches and prolonged periods of unemployment. Workers might face barriers to mobility and endure long unemployment or retraining periods before securing new jobs. This technological displacement often affects older workers more severely, leading to a generation-long adjustment period​​.
				- **Rapid and Unfair Disruption**:
					- The document cites that the advent of AI is progressing "inhumanely fast" and may seem "unbelievably unfair," indicating a rapid pace of technological change that could disrupt labor markets and exacerbate inequalities before society can adequately adjust​​.
				- **Displacement Across All Skill Levels**:
					- AI adoption is likely to unevenly affect labour markets, risking disruptions that could displace both low-skill and high-skill jobs. Unlike past waves of automation that primarily displaced blue-collar workers, AI threatens to displace white-collar jobs, further polarizing wages and employment and amplifying income and wealth inequality​​.
				- **Challenges for Emerging Markets**:
					- In emerging markets and developing economies, the adoption of AI solutions is constrained by weak digital infrastructure, a lack of a developed digital economy, and insufficient local AI expertise. This suggests that these regions might struggle significantly to keep pace with AI advancements, potentially widening the global digital divide​​.
				- **Need for Overhauled Governance and Social Systems**:
					- Governments must upgrade their administrative and governance capacities to effectively manage AI innovation and its impacts. This includes investing in talent, data, and resources and potentially establishing dedicated agencies to track AI developments. The document stresses the need for international cooperation and robust regulatory frameworks to manage the rapid evolution and broad implications of AI​​.

  - # More technology details
  - [[Bitcoin Technical Overview]] is an in depth primer
  - Bitcoin is further extended by [[Lightning and Similar L2]] and [[BTC Layer 3]] expands on the emergent tech which underpins my use of the asset

			- ### New AI Model Releases
				- **GPTZero Case Study**: Exploring the false positives in GPT model detections ([Gonzo Knows Article](https://gonzoknows.com/posts/GPTZero-Case-Study)).
  - [AIPRM for ChatGPT](https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj)
  - [Code Interpreter == GPT 4.5 (w/ Simon Willison, Alex Volkov, Aravind Srinivas, Alex Graveley, et al.)](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA%22)
  - [Has ChatGPT or me been hacked? Ive never had these conversations..](https://old.reddit.com/r/ChatGPT/comments/11wkw5z/has_chatgpt_or_me_been_hacked_ive_never_had_these)
  - [How to Create Your Own GPT Voice Assistant with Infinite Chat Memory in Python](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)
  - [March | 2023 | Ars Technica](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%7D%7Barticle)
  - [RadioGPT: 'World’s first' AI-driven radio station is here](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - [Using openai chat gpt to write stable diffusion prompts%7 d%7 btrain](https://dreamlike.art/guides/using-openai-chat-gpt-to-write-stable-diffusion-prompts%7D%7Btrain)
  - [What is ChatGPT? | OpenAI Help Center](https://help.openai.com/en/articles/6783457-chatgpt-general-faq%7D%7Bexplicit)
  - [#367 – Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI](https://open.spotify.com/episode/6rAOusZcsuNtCv8mefmwND?nd=1&si=3a17aef004df4982)
  - [3D-GPT generates 3D worlds in Blender](https://the-decoder.com/3d-gpt-generates-3d-worlds-in-blender)
  - [Carlos E. Perez on Twitter / X](https://twitter.com/IntuitMachine/status/1608690077139599360%7D%7Bchatgpt)
  - [Microsoft just announced a SURPRISE media event taking place tomorrow](https://www.windowscentral.com/microsoft/microsoft-surprise-event-chatgpt-openai-bing-2023)
  - [Narrative Manipulation: Convincing Chat GPT to Write a Python Program to Eradicate Humanity](https://zacdenham.com/blog/narrative-manipulation-convincing-gpt-chat-to-write-a-python-program-to-eradicate-humanity)
  - [What is Auto-GPT? | Blog](https://stablecog.com/blog/what-is-auto-gpt)
  - [You can now run a GPT-3-level AI model on your laptop, phone, and Raspberry Pi](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%22)
  - [sahil280114/chatGPT-multimodal-bot](https://github.com/sahil280114/chatGPT-multimodal-bot)

			- ### Podcasts and Interviews on AI
				- **Code Interpreter and GPT 4.5**: Discussions on the advancements and implications of these technologies ([Spotify Podcast](https://open.spotify.com/episode/0sFi0yG6kpTVKE0WVtRhTZ?si=te1jwhxCTWa-kJWwq3RxCA)).
				- **GPTZero Case Study**: Exploring the false positives in GPT model detections ([Gonzo Knows Article](https://gonzoknows.com/posts/GPTZero-Case-Study)).
  - [AIPRM for ChatGPT](https://chrome.google.com/webstore/detail/aiprm-for-chatgpt/ojnbohmppadfgpejeebfnmnknjdlckgj)
  - [How to Create Your Own GPT Voice Assistant with Infinite Chat Memory in Python](https://medium.com/@jordanlgibbs/how-to-create-your-own-gpt-voice-assistant-with-infinite-chat-memory-in-python-d8b8e93f6b21)
  - [March | 2023 | Ars Technica](https://arstechnica.com/information-technology/2023/03/you-can-now-run-a-gpt-3-level-ai-model-on-your-laptop-phone-and-raspberry-pi/%7D%7Barticle)
  - [RadioGPT: 'World’s first' AI-driven radio station is here](https://interestingengineering.com/innovation/radiogpt-worlds-first-ai-radio-station)
  - [#367 – Sam Altman: OpenAI CEO on GPT-4, ChatGPT, and the Future of AI](https://open.spotify.com/episode/6rAOusZcsuNtCv8mefmwND?nd=1&si=3a17aef004df4982)
  - [3D-GPT generates 3D worlds in Blender](https://the-decoder.com/3d-gpt-generates-3d-worlds-in-blender)

  ## Characteristics

  - **Layer Count**: Number of stacked transformer blocks
  - **Representation Refinement**: More layers enable more abstract representations
  - **Computational Impact**: Linear increase in computation with depth
  - **Training Challenge**: Very deep models require careful initialisation and normalisation

  ## Academic Foundations

  **Primary Source**: Standard architectural parameter

  **Typical Configurations**:
  - BERT-base: 12 layers
  - BERT-large: 24 layers
  - GPT-2: 12-48 layers (depending on size)
  - GPT-3: 96 layers (175B model)

  ## Technical Context

  Model depth allows for hierarchical feature learning, with early layers capturing low-level patterns and deeper layers learning more abstract concepts. Residual connections and layer normalisation are essential for training very deep transformers.

  ## Ontological Relationships

  - **Broader Term**: Model Hyperparameter
  - **Related Terms**: Model Width, Layer Normalisation, Residual Connection
  - **Trade-Off**: Expressiveness vs. training difficulty

  ## Usage Context

  "Deeper models can learn more hierarchical and abstract representations but require careful training procedures."

  ## Characteristics

  - **Layer Count**: Number of stacked transformer blocks
  - **Representation Refinement**: More layers enable more abstract representations
  - **Computational Impact**: Linear increase in computation with depth
  - **Training Challenge**: Very deep models require careful initialisation and normalisation

  ## Academic Foundations

  **Primary Source**: Standard architectural parameter

  **Typical Configurations**:
  - BERT-base: 12 layers
  - BERT-large: 24 layers
  - GPT-2: 12-48 layers (depending on size)
  - GPT-3: 96 layers (175B model)

  ## Technical Context

  Model depth allows for hierarchical feature learning, with early layers capturing low-level patterns and deeper layers learning more abstract concepts. Residual connections and layer normalisation are essential for training very deep transformers.

  ## Ontological Relationships

  - **Broader Term**: Model Hyperparameter
  - **Related Terms**: Model Width, Layer Normalisation, Residual Connection
  - **Trade-Off**: Expressiveness vs. training difficulty

  ## Usage Context

  "Deeper models can learn more hierarchical and abstract representations but require careful training procedures."

  #### References
  - Transformer architecture literature
		  - Scaling studies and model documentation

		  ---

		  *Ontology Term managed by AI-Grounded Ontology Working Group*
		  *UK English Spelling Standards Applied*

		  ```

  - public-access:: true
  - definition:: The number of transformer layers (encoder and/or decoder) stacked in a model, determining the number of sequential transformations applied to representations.



  ## Academic Context

  - Brief contextual overview
  - Model depth refers to the number of stacked transformer layers (encoder, decoder, or both) within a neural network architecture
  - Each layer applies a sequence of transformations—typically self-attention and feed-forward operations—to the input representations, progressively refining them
  - The depth directly influences the model’s capacity to capture complex patterns and hierarchical abstractions in data
  - Key developments and current state
  - Early transformer models, such as the original “Attention Is All You Need” architecture, typically used 6–12 layers
  - As of 2025, state-of-the-art models in both NLP and vision domains routinely employ hundreds of layers, especially in large-scale generative architectures
  - The relationship between depth and performance is subject to diminishing returns, with very deep models sometimes suffering from training instability or vanishing gradients
  - Academic foundations
  - The concept of depth in neural networks predates transformers, but the transformer architecture formalised its role in sequence modelling through self-attention mechanisms
  - Depth is a critical hyperparameter in the design of scalable, high-performance models

  ## Current Landscape (2025)

  - Industry adoption and implementations
  - Leading platforms such as Hugging Face, Google DeepMind, and Meta AI routinely deploy models with variable depth, often exceeding 100 layers for large language and diffusion models
  - In the UK, companies like DeepMind (London), Faculty (London), and Inflection AI (Cambridge) leverage deep transformer architectures for research and commercial applications
  - North England has seen growing adoption in academic and industrial settings, with institutions in Manchester, Leeds, and Newcastle integrating deep models into research on healthcare, climate science, and smart cities
  - Technical capabilities and limitations
  - Increased depth generally improves representational power, but also raises computational costs and training complexity
  - Very deep models may require advanced optimisation techniques (e.g., gradient checkpointing, residual connections) to train effectively
  - There is ongoing debate about the optimal depth for specific tasks, with some domains benefiting more from width than depth
  - Standards and frameworks
  - Modern deep learning frameworks (PyTorch, TensorFlow, JAX) provide flexible APIs for specifying and training models of arbitrary depth
  - Best practices for depth selection are guided by empirical benchmarks and theoretical scaling laws

  ## Research & Literature

  - Key academic papers and sources
  - Vaswani, A., et al. (2017). Attention Is All You Need. Advances in Neural Information Processing Systems, 30. https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html
  - Brown, T., et al. (2020). Language Models are Few-Shot Learners. Advances in Neural Information Processing Systems, 33. https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html
  - Liu, Z., et al. (2021). Swin Transformer: Hierarchical Vision Transformer using Shifted Windows. Proceedings of the IEEE/CVF International Conference on Computer Vision. https://openaccess.thecvf.com/content/ICCV2021/html/Liu_Swin_Transformer_Hierarchical_Vision_Transformer_using_Shifted_Windows_ICCV_2021_paper.html
  - Rombach, R., et al. (2022). High-Resolution Image Synthesis with Latent Diffusion Models. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. https://openaccess.thecvf.com/content/CVPR2022/html/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.html
  - Ongoing research directions
  - Investigating the trade-offs between depth, width, and computational efficiency
  - Exploring novel architectures that mitigate the challenges of training very deep models
  - Applying scaling laws to predict optimal depth for specific tasks and datasets

  ## UK Context

  - British contributions and implementations
  - UK researchers have played a significant role in advancing transformer architectures, particularly in NLP and computer vision
  - Institutions such as the University of Cambridge, University College London, and the Alan Turing Institute have published influential work on model depth and scalability
  - North England innovation hubs
  - The University of Manchester’s Department of Computer Science is active in deep learning research, including the development of efficient transformer models for healthcare applications
  - Leeds and Newcastle universities collaborate on projects involving deep models for environmental monitoring and urban planning
  - Sheffield’s Advanced Manufacturing Research Centre (AMRC) explores the use of deep transformers in industrial automation and predictive maintenance
  - Regional case studies
  - Manchester’s AI for Health initiative uses deep transformer models to analyse medical imaging data, improving diagnostic accuracy
  - Leeds City Council partners with local universities to deploy deep models for traffic flow prediction and urban resilience

  ## Future Directions

  - Emerging trends and developments
  - Continued exploration of hybrid architectures that combine depth with other forms of model complexity
  - Increased focus on energy-efficient training and inference for deep models
  - Growing interest in adaptive depth, where models dynamically adjust their depth based on input complexity
  - Anticipated challenges
  - Balancing depth with computational and environmental costs
  - Ensuring robustness and generalisation in very deep models
  - Addressing the ethical implications of increasingly complex models
  - Research priorities
  - Developing new optimisation techniques for training deep models
  - Investigating the theoretical foundations of depth in transformer architectures
  - Promoting interdisciplinary collaboration to apply deep models to real-world problems

  ## References

  1. Vaswani, A., Shazeer, N., Parmar, N., Uszkoreit, J., Jones, L., Gomez, A. N., Kaiser, Ł., & Polosukhin, I. (2017). Attention Is All You Need. Advances in Neural Information Processing Systems, 30. https://proceedings.neurips.cc/paper/2017/hash/3f5ee243547dee91fbd053c1c4a845aa-Abstract.html
  2. Brown, T., Mann, B., Ryder, N., Subbiah, M., Kaplan, J., Dhariwal, P., ... & Amodei, D. (2020). Language Models are Few-Shot Learners. Advances in Neural Information Processing Systems, 33. https://proceedings.neurips.cc/paper/2020/hash/1457c0d6bfcb4967418bfb8ac142f64a-Abstract.html
  3. Liu, Z., Lin, Y., Cao, Y., Hu, H., Wei, Y., Zhang, Z., ... & Guo, B. (2021). Swin Transformer: Hierarchical Vision Transformer using Shifted Windows. Proceedings of the IEEE/CVF International Conference on Computer Vision. https://openaccess.thecvf.com/content/ICCV2021/html/Liu_Swin_Transformer_Hierarchical_Vision_Transformer_using_Shifted_Windows_ICCV_2021_paper.html
  4. Rombach, R., Blattmann, A., Lorenz, D., Esser, P., & Ommer, B. (2022). High-Resolution Image Synthesis with Latent Diffusion Models. Proceedings of the IEEE/CVF Conference on Computer Vision and Pattern Recognition. https://openaccess.thecvf.com/content/CVPR2022/html/Rombach_High-Resolution_Image_Synthesis_With_Latent_Diffusion_Models_CVPR_2022_paper.html


  ## Metadata

  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
