- ### OntologyBlock
  id:: block-time-ontology
  collapsed:: true

  - **Identification**

    - domain-prefix:: BC

    - sequence-number:: 0014

    - filename-history:: ["BC-0014-block-time.md"]
    - public-access:: true
    - ontology:: true
    - term-id:: BC-0014
    - preferred-term:: Block Time
    - source-domain:: blockchain
    - status:: complete
    - version:: 1.0.0
    - last-updated:: 2025-10-28

  - **Definition**
    - definition:: Average time between blocks within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
    - maturity:: mature
    - source:: [[ISO/IEC 23257:2025]], [[IEEE 2418.1]], [[NIST NISTIR]]
    - authority-score:: 0.95

  - **Semantic Classification**
    - owl:class:: bc:BlockTime
    - owl:physicality:: VirtualEntity
    - owl:role:: Object
    - owl:inferred-class:: bc:VirtualObject
    - belongsToDomain:: [[BlockchainDomain]]
    - implementedInLayer:: [[ConceptualLayer]]

  - #### Relationships
    id:: block-time-relationships
    - is-subclass-of:: [[Blockchain Entity]], [[DistributedDataStructure]]

  - #### OWL Axioms
    id:: block-time-owl-axioms
    collapsed:: true
    - ```clojure
      Prefix(:=<http://metaverse-ontology.org/blockchain#>)
Prefix(owl:=<http://www.w3.org/2002/07/owl#>)
Prefix(rdf:=<http://www.w3.org/1999/02/22-rdf-syntax-ns#>)
Prefix(xml:=<http://www.w3.org/XML/1998/namespace>)
Prefix(xsd:=<http://www.w3.org/2001/XMLSchema#>)
Prefix(rdfs:=<http://www.w3.org/2000/01/rdf-schema#>)
Prefix(dct:=<http://purl.org/dc/terms/>)

Ontology(<http://metaverse-ontology.org/blockchain/BC-0014>
  Import(<http://metaverse-ontology.org/blockchain/core>)

  ## Class Declaration
  Declaration(Class(:BlockTime))

  ## Subclass Relationships
  SubClassOf(:BlockTime :DistributedDataStructure)
  SubClassOf(:BlockTime :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:BlockTime
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:BlockTime
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :BlockTime "BC-0014"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :BlockTime "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :BlockTime "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :BlockTime :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :BlockTime :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :BlockTime "Block Time"@en)
  AnnotationAssertion(rdfs:comment :BlockTime
    "Average time between blocks"@en)
  AnnotationAssertion(dct:description :BlockTime
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :BlockTime "BC-0014")
  AnnotationAssertion(:priority :BlockTime "1"^^xsd:integer)
  AnnotationAssertion(:category :BlockTime "blockchain-fundamentals"@en)
)
      ```

- ## About Block Time
  id:: block-time-about

  - Average time between blocks within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  -
  - ### Key Characteristics
    id:: block-time-characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  -
  - ### Technical Components
    id:: block-time-components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  -
  - ### Use Cases
    id:: block-time-use-cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  -
  - ### Standards & References
    id:: block-time-standards
    - [[ISO/IEC 23257:2025]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies
  -

	- ### [Meshy](https://www.meshy.ai/showcase) - *   Meshy allows users to transform ordinary 2D images into detailed 3D models, opening up possibilities for creating immersive experiences and visualisations.
-   The platform simplifies 3D content creation, reducing the technical barriers and time normally associated with complex modelling software.
-   It empowers users to generate 3D assets for a range of applications, including gaming, e-commerce, [[design thinking]], prototyping, and augmented reality.
-   Meshy supports texturing and colour application to 3D models, enhancing their visual appeal and realism.
-   The service enables [[organisation]] and management of generated 3D models, facilitating efficient workflows and [[collaboration]].
-   It allows users to share their 3D creations easily, fostering collaboration and feedback from others.
-   Meshy offers possibilities for customisation and fine-tuning of 3D models, allowing for greater control over the final output.
-   The platform provides tools for [[optimization]] of 3D models for different platforms and devices, ensuring [[performance]] and compatibility.
		- <iframe src="https://www.meshy.ai/showcase" style="width: 100%; height: 600px"></iframe>

- # Pinokio
	- [twitter link to the render loading below](https://twitter.com/cocktailpeanut/status/1765462787046686968) - - The tweet thread discusses advice on how to organise one's life and career to achieve greater success.
- It suggests spending time determining what truly matters to you and what you genuinely enjoy doing, instead of simply chasing money or prestige.
- Focusing on a few key areas, rather than trying to do everything at once, is recommended.
- It also advises against constantly comparing yourself to others and their progress.
- Finding a supportive community and mentors can provide encouragement and guidance.
- The thread emphasizes the importance of being adaptable and willing to change course if something isn't working.
- Building a strong foundation of [[skills development]] and knowledge is highlighted as a long-term investment.
- Patience and persistence are crucial, as significant achievements often take time and effort.
- The author notes the futility of seeking external validation, stating that you'll still be you regardless of success.
	  {{twitter https://twitter.com/cocktailpeanut/status/1765462787046686968}}
- {{twitter https://twitter.com/blizaine/status/1765434684450742764?}}

- # Real-Time
- [H. Jensons -TWISTED : r/aivideo (reddit.com)](https://www.reddit.com/r/aivideo/comments/1eryhk6/h_jensons_twisted/)
- ![rapidsave.com_h_jensons_twisted-zyldr5g40mid1.mp4](assets/rapidsave.com_h_jensons_twisted-zyldr5g40mid1_1723965805126_0.mp4)
- [EndlessDreams - Real-Time videos made easy - YouTube](https://www.youtube.com/watch?v=irUpybVgdDY)
- {{video https://www.youtube.com/watch?v=irUpybVgdDY}}

		- ### The [Secret Cyborg](https://www.oneusefulthing.org/p/reshaping-the-tree-rebuilding-organizations) Concept and You.
		  collapsed:: true
			- [twitter link to the render loading below](https://twitter.com/emollick/status/1775176524653642164){{twitter https://twitter.com/emollick/status/1775176524653642164}}
			- Acknowledge that employees are already using AI at work, often without approval. Over half of people using AI at work are doing so without telling their bosses. [Microsoft put this number at a staggering 75%](https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part/) [[Microsoft Work Trends Impact 2024]]
				- | Statistic | Value |
				  |-----------|-------|
				  | Percentage of global knowledge workers using generative AI | 75% |
				  | Percentage of AI users who say it helps them save time | 90% |
				  | Percentage of AI users who say it helps them focus on their most important work | 85% |
				  | Percentage of AI users who say it helps them be more creative | 84% |
				  | Percentage of AI users who say it helps them enjoy their work more | 83% |
				  | Percentage of AI users who are bringing their own AI tools to work (BYOAI) | 78% |
				  | Percentage of AI users at small and medium-sized companies who are bringing their own AI to work | 80% |
				  | Percentage of AI users reluctant to admit using AI for their most important tasks | 52% |
				  | Percentage of leaders who would rather hire a less experienced candidate with AI skills than a more experienced candidate without them | 71% |
				  | Percentage of leaders who say early-in-career talent will be given greater responsibilities with AI | 77% |
			- Create a culture of exploration and openness around AI use. Encourage employees to share how they are using AI to assist their work.
			- Completely rethink and redesign work processes around AI capabilities, rather than just using AI to automate existing processes. Cut down the org chart and regrow it for AI.
			- Let teams develop their own methods for incorporating AI as an "intelligence" that adds to processes. Manage AI more like additional team members than external IT solutions.
			- Align incentives and provide clear guidelines so employees feel empowered to ethically experiment with AI.
			- Build for the rapidly evolving future of AI, not just today's models. Organizational change takes time, so consider future AI capabilities.
			- Act quickly
			- organizations that wait too long to experiment and adapt processes for AI efficiency gains will fall behind. Provide guidelines for short-term experimentation vs slow top-down solutions.
			- Realize there are only two ways to react to exponential AI change; too early or too late. The capabilities are increasing rapidly, so it's better to start adapting sooner than later.

						- ### Value Translation
							- Facilitating real-time exchange of currencies and assets across instances.

- # Games sector dominates entertainment
	- ![1713196618774.jpeg](assets/1713196618774_1713258422046_0.jpeg)
	- Traditional engines like Unity, [[Unreal]], [[Roblox]] , and [[NVIDIA Omniverse]] may become outdated [[Disruption]].
		- They're something like 15 years old and designed for a past era of computing.
		- The rise of generative AI, cloud computing, and new spatial platforms is poised to transform 3D creation.
		- Future engines might start with simple text prompts for creation, making them more accessible and reducing barriers for new creators.
		- Proposed engines should be modular, cloud-based, and adaptable to different project needs, avoiding the bloat of current engines.
		- There is opportunity for the traditional engines to pivot here, but they are struggling with their size already.
		- A key feature will be real-time collaboration and version control in a cloud-based environment.
		- This suggests that user experience in these engines should be flexible and cater to different skill levels and roles.
		- New engines might initially focus on specific genres, art styles, or platforms, rather than trying to cover all use cases.
		- The interoperable [Open Universal Scene Descriptor](https://openusd.org/release/index.html) might be the key enabler.
		- There could be significant change in the entertainment industry, with more diverse and interactive content as a result of these advancements.
		- [Fiero
		- Create 2D games without a single line of code! (fierogameengine.com)](https://fierogameengine.com/)
		- [They are starting to hide away the AI component and just focus on workflows like Sprite Fusion](https://www.spritefusion.com/)
	- <iframe src="https://miao-ai-lab.github.io/LARP/" style="width: 800px; height: 400px"></iframe>
	- [LARP: Language-Agent Role Play for Open-World Games (arxiv.org)](https://arxiv.org/pdf/2312.17653.pdf)
		- Plenty of fun tools for game makers, but distributors are quite ossified, and access to distribution may be patchy.
		- Steam has [softened it's stance.](https://store.steampowered.com/news/group/4145017/view/3862463747997849618)
		- Latency and cost are still prohibitive **in game**.
		- Tools for builders
		- Blender has been leading the way with open source plugins appearing all the time.
		- [Scenario
		- AI-generated game assets](https://www.scenario.com/)
		- LoRA training.
		- Already plenty to play with [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7148068781314002944/) and [AI-Powered Creativity: Innovating Look Development with Stable Diffusion & ComfyUI](https://www.youtube.com/watch?v=CLPvdbFUNqw)
	- ![1704232411233.mp4](assets/1704232411233_1704298954869_0.mp4){:height 100, :width 400}
		- [Create an AI Robot NPC using Hugging Face Transformers 🤗 and Unity Sentis (substack.com)](https://thomassimonini.substack.com/p/create-an-ai-robot-npc-using-hugging?utm_campaign=post&utm_medium=web)
		- {{video https://www.youtube.com/watch?v=iZ_20vK94hc}}
		-
- [GigaxGames/gigax: LLM-powered NPCs running on your hardware (github.com)](https://github.com/GigaxGames/gigax)
- {{video https://www.youtube.com/watch?v=_KFbT6eph5A}}
-
- [[Ai in Games]] https://www.gginsights.io/
  =======
  <<<<<<< HEAD
- [NVIDIA In-Game Inferencing | NVIDIA Developer](https://developer.nvidia.com/rtx/in-game-inferencing/) [[Ai in Games]]
- [Theoretically Media on X: "Google's Genie 2 just dropped, and it's a stunner. Create a "game" from an image! They're describing it as their most capable large-scale foundation world model yet. More Examples Below! https://t.co/BMOOxfaOVg" / X](https://x.com/TheoMediaAI/status/1864329184459338207) [[Ai in Games]]
- https://github.com/etched-ai/open-oasis [[Ai in Games]]
- [D&D Character Creator (npub.info)](https://pages.npub.info/glyphs/TESTNET_ENG_QAE/tmp/) [[Melvin Carvalho]] [[Runes and Glyphs]] [[Ai in Games]]
- [[Melvin Carvalho]] [[Nostr protocol]] [[Agents]] [[Ai in Games]] [Home · dungeon-mastr/rules Wiki (github.com)](https://github.com/dungeon-mastr/rules/wiki)
- https://github.com/GameGen-O/GameGen-O/ [[Ai in Games]]
- https://gamegen-o.github.io/ [[Ai in Games]] [[Ai in Games]]
- [[Ai in Games]] [[Llama]] [[Facebook Meta]] [Run AI Town entirely locally by default using llama3 by ianmacartney · Pull Request #219 · a16z-infra/ai-town (github.com)](https://github.com/a16z-infra/ai-town/pull/219) [[Large language models]]
- [Champions of Otherworldly Magic - Collect, Trade, Battle! (championstcg.com)](https://championstcg.com/) [[Ai in Games]]
-

	- ### Tutorials
		- [Beginner Friendly AI Animation Tutorial #1](https://www.youtube.com/watch?v=WPlUSnLTmfI) - Discusses strategies for effective time management and increased [[productivity]], covering prioritisation, the Pomodoro Technique, workspace [[organisation]], [[project management]] tools, and [[optimization]] techniques to prevent burnout
		- [AnimateDiff Tutorial for Automatic1111](https://www.youtube.com/watch?v=X-zB4-gX3eA) - Summarises how to organise and manage digital photos effectively through folder structures, descriptive naming, metadata tagging, [[cloud computing]] backups, and [[knowledge management]] principles for maintaining a curated archive

		- ### DONE Logo Design & Branding
		  collapsed:: true
			- *Task:* Create a professional logo and develop a visual identity for the business.
			- **Looka**
				- *Description:* AI-powered platform that generates logo ideas based on business name and industry preferences. Also offers brand kit creation (social media assets, business cards).
				- *Cost:* Logo packages start around $20 USD (one-time). Brand Kit subscriptions available (~$96 USD/year).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Looka](https://looka.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Brand Mark / Logopony / Logo.com / Smashing Logo**
				- *Description:* Various other AI logo generators offering similar services to Looka, generating multiple logo options based on input criteria. (Head-to-head comparison mentioned).
				- *Cost:* Varies, often offer one-time purchase logo packages ($20-$100+ USD) and sometimes subscription brand kits.
				- *Websites:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Brandmark](https://brandmark.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Logopony](https://www.logopony.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Logo.com](https://logo.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Smashing Logo](https://smashinglogo.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Dall-E 3 (via ChatGPT)**
				- *Description:* Can be used to brainstorm logo *concepts* visually, though often struggles with consistent text rendering. Useful for initial ideas to refine later. Can also help brainstorm overall brand visual identity.
				- *Cost:* Requires ChatGPT Plus ($20 USD/month).
				- *Website:* (Accessed via <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[ChatGPT](https://chat.openai.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->)
			- **Deblank**
				- *Description:* AI tool for generating professional colour palettes from images or natural language prompts. Useful for establishing website/brand colours.
				- *Cost:* Check website for pricing.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Deblank](https://deblank.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----> (*Note: URL is .com not .net*)

		- ### Workflow Automation
			- Planning applications processing
			- *Task:* Connect different apps and services to automate repetitive tasks, saving time and reducing errors.
			- **Zapier**
				- *Description:* Leading automation platform connecting thousands of apps. Create "Zaps" (workflows) triggered by events in one app to perform actions in another. Can be used with AI tools (e.g., trigger Synthesia videos, parse emails with GPT, post to social). Zapier AI helps build automations via prompts.
				- *Cost:* Free plan available. Paid plans scale based on task volume and features, starting around $20 USD/month (billed annually).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Zapier](https://zapier.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Cognosys**
				- *Description:* AI-native automation tool that uses natural language prompts to set up workflows for tasks like email automation, research, and notifications.
				- *Cost:* Check website for pricing (likely subscription-based).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Cognosys](https://cognosys.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **ML Blocks**
				- *Description:* Provides no-code AI workflows specifically for image processing tasks. (See Image Generation).
				- *Cost:* Check website.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[ML Blocks](https://mlblocks.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

	- ### Scheduling
		- *Task:* Automate the process of scheduling meetings or appointments.
		- **Reclaim.ai**
			- *Description:* AI scheduling tool that automatically finds the best time for meetings, tasks, and habits in your calendar based on priorities. Useful for coordinating schedules (e.g., house viewings).
			- *Cost:* Free plan available. Paid plans add features, starting around $8 USD/user/month (billed annually).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Reclaim.ai](https://reclaim.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

	- #### Crowd funding
- At time of writing a [crowd fundinginitiative](https://www.constitutiondao.com/) based around a digitaldecentralised construct called a DAO (explained later in detail)[managed to raise $46 million dollars to bid for a copy of the USconstitution](https://www.coindesk.com/business/2025/12/06/daos-and-the-next-crowdfunding-gold-rush/)at Southerbys auction house. The attempt narrowly failed, but the press[heralded this new era of “Web3” economicmight](https://www.coindesk.com/business/2025/12/09/what-kickstarter-going-decentralized-means-for-web-3/).This model might be the only use for DAOs and is likely just a way toavoid regulatory scrutiny. There is more detail on DAOs later.
-

	- #### Augmented reality
		- The closest technology at this time seems to be [Lumus’ waveguideprojectors](https://lumusvision.com/) which are light, bright and highresolution. Peggy Johnson, CEO of Magic Leap, one of the market leaderssaid: it“If I had to guess, I think, maybe, five or so years out, forthe type of fully immersive augmented reality that we do.”
		- In a [GQprofile](https://www.gq.com/story/tim-cook-global-creativity-awards-cover-2025?mbid=social_twitter)Cook, the Apple CEO talked at length about the challenges andopportunities of AR headsets. He has been emphasizing the importance ofaugmented reality over VR for almost a decade, believing that AR canenhance communication and connection by overlaying digital elements onthe physical world. Cook’s vision aligns with Apple’s rumoured mixedreality headset, which is expected to cost around $3,000 and focus on‘copresence’, which we have discussed at length in this chapter. Apple’sapproach differs from Meta’s metaverse, as Apple aims to integratedigital aspects into the real world rather than create purely digitalspaces. This is an interesting area for our applications of bringingsmall teams together, but the pricing at this time is significantly atodds with our chosen market. Cook, like this book, has highlighted AR’spotential in education and its ability to bring people together in thereal world.

		- ### Liquidity Lottery
			- Because holders of BTC are disincentived to sell the asset (assuming future gains) it is likely vulnerable to something [Kao called the‘liquidity lottery’](https://twitter.com/UrbanKaoboy/status/1526311908709502977).This is a supply/demand mismatch which he thinks could spell the end of the asset class in time. Macro analyst group[‘Doomberg’](https://doomberg.substack.com/) believe that this mispricing of the asset is the significant risk, and point out that if Bitcoin is approached within the framework of government controlled Fiat, then there is no [‘there there’](https://en.wiktionary.org/wiki/there_is_no_there_there). Bitcoin does not generate more fiat money within it’s ecosystem (as say an energy extraction company would), and as such is very suggestive of the features of a Ponzi. They have recently softened on this view, and are now clear to separate Bitcoin from the wider ‘crypto’ world, which they remain convinced are simply scams, wash trading magic beans without any productivity. The value is dependent on finding the ‘greater fool’ mentioned near the start of the book. [Doombergassert](https://doomberg.substack.com/p/dollars-ex-machina) that the price of the asset has been inflated by manipulation in the unregulated stablecoin markets (specifically Tether), and in the event of a ‘run for the exits’ there would be a serious repricing. This seems entirely possible, and perhaps even likely, below an unknown threshold of confidence. They are now asserting that if the manipulation and mispricing could be ‘washed out’ of Bitcoin then it would present an investment opportunity, and they estimate that price at around $3000. We think that the combination of global speed of exchange of value, generative AI, and bots which leverage the network to create value within the ecosystem of the network, that this thesis does not stand true, but there is no way to know for sure at this time.

		- ### Centralisation of the money over time
			- In a medium term future it’s possible to imagine a smart enough autonomous AI or ML actor managing to accrue Bitcoin through fast and smart ‘decisions’. This could unreasonably centralise the asset, and it would be impossible to claw this situation back. These constructs would last for the lifetime of the chain unless constrained by timelock multisigs for instance.

			- ##### Play to earn revenue models
				- This is morally dicey at this time and early startups like [AxieInfinity are in serioustrouble](https://www.bloomberg.com/news/features/2025-06-10/axie-infinity-axs-crypto-game-promised-nft-riches-gave-ruin).A (long) [video by DanOlsen](https://www.youtube.com/watch?v=YQ_xWvX1n9g) highlights thestructural problems with both play to earn and NFTs. On chain analysissuggested that 40% of accounts in 200 current Web3 games [arebots](https://gallery.usejigger.com/).

	- #### Peerswap
		- It may be possible to use “Peerswap” to execute rebalancing andsubmarine swaps into and out of Liquid assets on the sidechain in asingle tx. This is anunder explored area at this time.

- # Product research programme
- I'm working on an InnovateUK-funded programme in a lab in MediaCity. We have money to spend on training people.
- You have followed this link because you've been specifically invited to [this WhatsApp group](https://chat.whatsapp.com/KwuFsntcsFdHYtPOjnt8EE), where we can lightly kick ideas about. You don't need to say anything in the group. You can come and go as you please. It's mainly friends and family at this stage. You likely know everyone in the room a bit, but anyone can invite anyone they see fit, so bear in mind it's a public forum to a degree.
- I want to deliver pragmatic, useful tools for teachers, which save time on the organising and admin side of the job, freeing up more time for work-life balance. I have a lot of tricks but I don't know how to apply them to your domains.
- I am going to run a short and brisk seminar series. The sessions will be 45 minutes, likely starting at 4pm. Likely just four or five of them, on a weekly cadence. Probably Nov/Dec. Might be more early next year.
- Nothing is yet decided; I want to find the most convenient fit for teachers at all levels.
- I would initially like to investigate what the open problems are for educators when engaging with AI, and when talking about it to students and colleagues, etc. I need to know what you think the problems are.
- I want to do at least one group chat between us in Teams, Zoom, or Google or something, and as many 30-minute one-to-one sessions as people can give me to capture specific challenges. These are all optional, and we'll figure out how to do all that in the next few weeks.
- Once the programme is developed, you'd be welcome to join the formal sessions delivered from the lab. You can promote them in your institutions as something you have had a hand in building, and disseminate the online material as widely as you like.
- If there's appetite, we might push to physical sessions and there's potentially a bit of (self-reporting into your institution) clout to be had as the council and unis get more involved.
- The material will eventually end up on these pages and website, which is mine. You can have a [look about](https://narrativegoldmine.com/#/page/introduction%20to%20me) if you like, but it's a distraction to be honest at this stage—everything is a bit too raw to be useful.
-

- # Tips for now
  You should be using [Perplexity.ai](https://perplexity.ai) which gives references. That's basically 90% of what you need to know right now.
  
  My custom tooling looks like this, I hope to open it up to you all over time:
  
  ![Screenshot 2024-09-02 125400.png](assets/Screenshot_2024-09-02_125400_1725278127596_0.png)

- # Gaussian Splatting
	- [Instantsplat: Unbounded Sparse-view Pose-free Gaussian Splatting in 40 Seconds](https://instantsplat.github.io/)
	- [The Rise Of 3D Gaussian Splatting: What Is It And How Is It Changing The Immersive Media Industry? — Magnopus](https://www.magnopus.com/blog/the-rise-of-3d-gaussian-splatting)
	- 4D [[Gaussian splatting and Similar]] [with time domain](https://github.com/hustvl/4DGaussians)
	- [[Gaussian splatting and Similar]] [gsgen](https://github.com/gsgen3d/gsgen)
	- Room scale [[Gaussian splatting and Similar]] technique for single lens (#SLAM) [[Scene Capture and Reconstruction]]  [Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting (vladimiryugay.github.io)](https://vladimiryugay.github.io/gaussian_slam/)
	- [Mip-Splatting (niujinshuchong.github.io)](https://niujinshuchong.github.io/mip-splatting/) reduced artifacts in [[Gaussian splatting and Similar]]
	- [Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting (vladimiryugay.github.io)](https://vladimiryugay.github.io/gaussian_slam/)
	- GaussianDiffusion: 3D Gaussian Splatting for Denoising Diffusion Probabilistic Models with Structured Noise
		- logseq://graph/researchpapers?block-id=6579a51f-5e6d-4570-903f-9458f84e845f
	- Gaussian [[SLAM]] rooms scale scanning
		- logseq://graph/researchpapers?block-id=6579a880-ce7f-4a79-b3d3-9135ff4348b3
		- [Gaussian Splatting SLAM (rmurai.co.uk)](https://rmurai.co.uk/projects/GaussianSplattingSLAM/)  is near real-time
	- [Paper page TRIPS: Trilinear Point Splatting for Real-Time Radiance Field Rendering (huggingface.co)](https://huggingface.co/papers/2401.06003)
	- [Deblurring 3D Gaussian Splatting (benhenryl.github.io)](https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/)
	- [huggingface/gsplat.js: JavaScript Gaussian Splatting library. (github.com)](https://github.com/huggingface/gsplat.js/)
	- [[Gaussian splatting and Similar]] in Houdini
	- [Triplane Meets Gaussian Splatting: Fast and Generalizable Single-View 3D Reconstruction with Transformers (zouzx.github.io)](https://zouzx.github.io/TriplaneGaussian/) understandable [[3D and 4D]] from [[Gaussian splatting and Similar]]
	- [dynamic3dgaussians.github.io](https://dynamic3dgaussians.github.io/) using a multi [[Motion Capture]] dome and [[Gaussian splatting and Similar]] for 6DOF [[Human tracking and SLAM capture]]
	- [LangSplat: 3D Language Gaussian Splatting](https://langsplat.github.io/)

		- ### Inequality on the Rise
		- In Britain inequality has returned to levels not seen since the 1930s.After steadily rising between 1600 to 1913, Britain’s wealth as a share of the global total peaked and then began falling until the end of the1970s \[ref required\]. During this time, Britain became one of Europe’s most equal countries, even without the support of its Empire \[ref needed\]. Some argue this relative equality enabled Britain’s economic growth and international standing to keep pace with its European neighbours, despite the loss of imperial power \[ref needed\]. Duringthis period there was much upheaval in global monetary systems. More recently we have seen that trust has diminished, and inequality hasrisen, with social media perhaps acting as an accelerator.

- # Money and The State
	- It seems a pretty reasonable that the best ‘systemic’ approach is a separation between major centralising forces such as state, church, and money. In practice we can see that globally, this isn’t the case, withbad hotspots of high corruption where all three meld together into kleptocratic dictatorships, or theocracies. For our purposes in the UKit’s useful to look at the concept of ‘austerity’.
	- Austerity is a term used to describe a set of economic policies that aimto reduce government spending and debt, often through cuts to public services and welfare programs. The concept of austerity has its originsin the 1920s, following the end of World War I and the economic crisisthat ensued. In the wake of the war, many Western European countrieswere struggling with high levels of debt and inflation. In response,governments began implementing policies to reduce spending and balance their budgets.
	- We have seen in the previous chapter that the concept of inflation itself is complex, and somewhat argued about still. Globally, on aggregate, the efficiencies of increasing technology are thought to be deflationary to the tune of between 3 and 5 percent annually, though this may radically spike up in the era of AI which will be covered later. This is counter to the current need for inflation to maintain debt repayments at a national level. Central banks manipulate interest rates to control inflation, aiming to keep it at sustainable levels.This process is necessary because as national debt and deficits grow,governments need inflation to prevent these debts from spiralling out of control. Higher inflation results in higher nominal GDP, which in turn increases the tax base, providing governments with the revenue needed topay down debt. To achieve this. The natural progression of humanity inherently deflationary, which forces central banks to print more money and further manipulate the monetary system in order to generate the desired inflation. This can be seen as a hidden tax on citizens, as itdevalues their money over time. The negative effects of this system are disproportionately felt by lower-income groups. As inflation rises, the cost of living increases, and many households struggle to make ends meet. This has led to a situation where households need multiple incomesto maintain their standard of living, forcing individuals to work longer hours and take on multiple jobs. As a result, people have less free time and energy to engage in rewarding activities or spend time with their families. This need for constant economic growth, as measured by GDP,has led to an environment where individuals are pushed to be more productive at the expense of their well-being. This has resulted in a society where many people are overworked and struggling to keep up with the rising cost of living. Booth discussed this at length in his book‘The Price of Tomorrow’. His is a rare thesis based around the ideas that technology is deflationary, that the marginal cost of goods trends over zero over time, and that the current system of debt and inflation are inherently unsustainable in the face of exponential technology improvements and automation. We discuss the concept of inflation and deflation, and both their risks throughout the book, but Booth has been very clear on this for many years. He thinks the current global monetary system ill-suited to handle the challenges and opportunities presented by deflation. He suggests that embracing deflation is the key to unlocking a prosperous and sustainable future. The book delves into the implications of deflation on various aspects of society, including wealth distribution, job markets, and the role of governments in shaping economic policies..[[booth2020price]]
	- In the 1920s, Keynes was one of the first to argue against the austerity measures which seem part of the cyclical play book around debt and inflation. He argued that that cutting government spending during a recession would only worsen the economic downturn. Instead, he advocatedfor increased government spending to stimulate economic growth and reduce unemployment. Despite this, many governments continued to implement austerity policies throughout the 1920s and 1930s.
	- In the post-World War II period, the rise of the welfare state and the adoption of Keynesian economic policies led to a shift away from austerity in many countries. However, in the 1970s, a new economic crisis led to a resurgence of austerity policies, particularly in theUnited States and United Kingdom. In the 1980s, the rise ofneoliberalism and the influence of economists such as Milton Friedman led to further cuts to government spending and the rolling back of the welfare state.
	- Today, the concept of austerity continues to shape economic policy,particularly in the wake of the 2008 financial crisis. Many governments,particularly in Europe, have implemented austerity measures in response to the crisis, leading to cuts to public services and welfare programs.The effectiveness of these policies remains a contentious issue, with some arguing that they have helped to reduce debt and stabilize economies, while others argue that they have led to increased inequality and hindered economic growth. Looking around at the state of the world,and the widening gap between the rich and the poor, it is possible tohave some sympathy with those who see patterns in the bahaviour of political leaders and the controllers of Western capital and global resources. The system seems engineered to reward a few. It is possibleto view ‘austerity’ as a means of political control of economic levers,in order to de-democratise populations. This mantra of ‘do more, consume less’ has perhaps become a defacto methodology to constrain popular ideas, diverting capital back into the hands of incumbents, land owners,and the politically and economically motivated.[[mattei2025capital]] It seems that the controlling nexus of this political framework globally isthe concept of the central bank, unelected technocrats whose tenures span across political administrations. Again, this can be traced back to the 1920’s. Hawtrey’s 1925 “Currency & Public Administration” asserts that a central bank should it“Never explain; never regret; never apologise.”, and speaks glowingly of the selfish market.[[hawtrey1925currency]] This economic model is referred to asDirigisme and feels increasingly the global norm.[[balassa2013theory]] Wecan perhaps here see the divergent point at which the lionization of the market began. Again, to be clear, the authors are not economists, but it does seem that in a global digital society there is room to explore moreequitable models of global value, governance, and trust.
	- Remember that these centrally planned national and global actions provide liquidity to the private banking sector. Like the digital money analogues discussed earlier in the book private banks operate fractional reserve banking. This is a banking system where banks hold only a fraction of the deposits they receive as reserves, while the rest is lent out to customers. This means that the money supply in an economy can be increased through the lending activities of banks (itself a complex inflationary force which devalues money over time, feeding back into the policy directives of the central banks. The fractional reserve system is useful for capital creation in times of growth, but relies on the confidence of the depositors. Historical examples of bank runs which threatened systemic risk or caused failures of the banking system include:
		- The Bank of United States crisis in the 1930s: This was the largest bank failure in American history and was a result of a bank run caused by rumours of financial mismanagement.
		- The Savings and Loan crisis of the 1980s: This was a result of a large number of failed savings and loan associations in the United States, which were caused by a combination of factors including poor management, risky lending practices, and a decline in real estate values.
		- The Nordic banking crisis of the 1990s: This crisis was caused by a combination of factors including a real estate bubble, high levels of debt, and a lack of regulation. It resulted in the collapse of several major banks in Sweden, Finland, and Norway, and had a significant impact on the economies of the region.
		- The Bank of Japan crisis in the late 1990s: This crisis was caused by a combination of factors including a real estate bubble, high levels of debt, and a lack of regulation. It resulted in the collapse of several major banks and had a significant impact on the Japanese economy.
		- The Asian Financial Crisis of 1997: This crisis was triggered by a devaluation of the Thai baht and quickly spread throughout the region, causing a number of major banks to fail. The crisis was largely a result of a lack of transparency and poor regulation in the banking industry.
		- The 2008 financial crisis in Iceland: This crisis was caused by the collapse of the country’s three largest banks, which had been engaging in risky lending practices and had accumulated large amounts of debt. The crisis had a devastating impact on the Icelandic economy and resulted in a severe recession.
		- The Global Financial Crisis of 2007-2009: This was a result of a widespread failure of the global banking system, caused by a combination of factors including the housing market collapse, risky lending practices, and a lack of regulation.
		- The collapse of Banco Popular in Spain in 2017: This was one of the largest bank failures in European history, and was caused by a combination of factors including a large amount of bad debt and a declining real estate market.
		- There were many bank runs on smaller rural banks in China during 2025. The financial conditions of Chinese banks are somewhat reminiscent of the 2008 American landscape.
	- In response to the Global Financial Crisis, many measures have been taken to shore up the banking system, including the creation of new regulatory bodies, the implementation of new regulations, such as theDodd-Frank Wall Street Reform and Consumer Protection Act, which increased the regulatory oversight of the banking industry. The introduction of stress testing for banks, to ensure that they have enough capital to withstand financial shocks, globally, has radically deleveraged banks from around 1:40 fractional reserve, to around 1:10.
	- There is increased political pressure to regulate the banking industry and prevent another financial crisis. However, there is also political opposition to excessive regulation, as some argue that it may stifle economic growth. There are concerns about rising levels of debt and the potential for another financial crisis.
	- It’s interesting that Brett, a former FDIC regulator [believesthat](https://blog.orchid.com/exfdic-regulator-on-trust-and-the-battle-of-the-social-media-videos/)the 2008 US bank run was sparked by YouTube posts of queues forming at banks. He says those that formed the initial lines carried memories of the great depression, but that once YouTube started showing the footage more broadly the contagion struck. In the world of instant messaging media today we can perhaps see how this might happen again. More recently, the 2025 ‘wobble’ in global banking caused by the collapse ofAmerica’s 5th largest [bankSVB](https://theconversation.com/why-svb-and-signature-bank-failed-so-fast-and-the-us-banking-crisis-isnt-over-yet-201737)has precipitated strong intervention by the federal government, who haveopted to ‘backstop’ investor deposits. In the midst of this potentialcrisis it it notable that TikTok (now arguably the world’s [most popularsearchengine](https://blog.cloudflare.com/popular-domains-year-in-review-2025/))is carrying millions of hashtag references to[bankruns](https://www.tiktok.com/tag/bankrun?lang=en). Senator Kelly inthe USA [allegedlyinquired](https://public.substack.com/p/exclusive-senator-mark-kelly-called)about the potential for limiting such references on social media, and aUK minister is [asking for securityservices](https://news.sky.com/story/tiktok-ban-minister-asks-national-cyber-security-centre-to-look-into-safety-of-app-12833371)to examine the risks of the Chinese application. The perhaps reflects concern about algorithmically driven geopolitically motivated threats tothe banking system.
	- There is a growing awareness of the role of banks in the economy, and agrowing desire for greater transparency and accountability. There isalso a growing mistrust of banks, particularly in light of the GlobalFinancial Crisis. As we have seen, the advent of new technologies, suchas blockchain CBDC, and fintech, is changing the way that banks operateand interact with customers. This presents both opportunities andchallenges for the banking industry. As a final controversial aside,there is [industrysuspicion](https://apnews.com/article/signature-bank-fdic-barney-frank-silicon-valley-6ad86262d9945675a42d735b66ace4f2)that the collapse of SVB has been used as cover to close the final USbank servicing crypto, effectively decapitating the banking rails of the industry, and forcing it overseas. Were it not for the credibility ofthe people making these claims, this would seem pretty wild, but the prevailing winds are surely blowing against the disruptive potential ofa money system which is beyond the control of legislators.

	- ### Yopi
		- **Description**: A voice-based wellness coach focused on improving breathing and reducing stress.
		- **Features**:
			- Monitors breathing patterns
			- Provides real-time feedback and coaching
			- Portable and pairs with smartphones
			- Focus on breathing exercises and meditation
		- **AI Aspect**: Uses AI to customize breathing exercises and track progress.

	- ## Funding
	- Collaborators
		- Ross Verrall [[PEOPLE]] at [[NVIDIA Omniverse]]has suggested applying for the Inception grant to assist with our bid.
		- Simon Graham : Creative Technology Director at Pixel Artworks has promised some hours and a market potential report as a match fund to the project for £3000
		- Badger and Coombs would like to offer time, support and staff to the workshops work package and can commit £3000 of support.
		- FuzzyDuck productions will commit £3000 in time to product market development, and workshopping, and £7000 to the creation of digital assets for the product, with two iterations and any necessary project support.
	- Project_finance_summary
		- Summary of total project costs and funding requested.
		- Sections to fill:
		- Total project cost
		- Total funding requested
		- Breakdown by cost categories
		- **Advice**: Summarize accurately, cross-check with detailed tabs to ensure consistency.
	- Other_Public_Funding
		- Details of any other public funding received.
		- Sections to fill:
		- Source of funding
		- Amount
		- Status (applied, granted)
		- **Advice**: Disclose all other funding to avoid duplication of funding issues.
	- Other_Projects
		- Information on other ongoing or planned projects.
		- Sections to fill:
		- Project title
		- Funding body
		- Project status
		- **Advice**: Highlight synergies or distinctions with the current project to clarify the innovation aspect.
	- Labour_and_Overheads_Costs
		- Breakdown of labour costs and overhead allocations.
		- Sections to fill:
		- Employee roles
		- Hours
		- Rate
		- Overhead allocation method
		- **Advice**: Ensure labour costs are justifiable and in line with standard industry practices.
	- Materials_Costs
		- Details of material costs for the project.
		- Sections to fill:
		- Type of materials
		- Quantity
		- Cost
		- **Advice**: Source materials cost-effectively while maintaining quality.
	- Capital_Usage
		- Usage of capital items/equipment.
		- Sections to fill:
		- Description of capital items
		- Justification for need
		- Depreciation method
		- **Advice**: Justify capital usage with respect to project outcomes and innovation.
	- Sub_Contract_Costs
		- Costs related to subcontracting work.
		- Sections to fill:
		- Subcontractor details
		- Scope of work
		- Cost
		- **Advice**: Choose subcontractors that add value and expertise to the project.
	- Travel_&_Subsistence_Costs
		- Travel and subsistence expenses for the project.
		- Sections to fill:
		- Purpose of travel
		- Destination
		- Estimated cost
		- **Advice**: Keep travel costs reasonable and directly related to project activities.
	- Other_Costs
		- Any other costs not covered in previous sections.
		- Sections to fill:
		- Description of cost
		- Justification
		- Amount
		- **Advice**: Provide clear justifications for any miscellaneous expenses to ensure they are deemed necessary.

	- ##### Bots and AI agents
		- Autonomous AI agents, bonded to, but not bounded by, each federated
		  mixed reality instance, can to be self-governing entities that operate
		  within their federated virtual social spaces, drawing upon private
		  Bitcoin and Lightning wallets to perform and mediate economic exchanges
		  within the spaces. They could also trivially operate outside the virtual
		  space, and within other spaces on the same metaverse federation. They
		  would accomplish this by drawing on their ‘home’ GPU/TPU processors
		  where appropriate, or else using distributed large language model (LLM)
		  processing to accomplish tasks assigned by their instructors. They can
		  interact with the ‘web2’ world using open-source software called
		  auto-gpt and have constraints, such as “time to live” and limited access
		  to funds through their Bitcoin Lightning wallets.
		- Resource Management: These AI agents have access to dedicated LLM resources within their home instances in the federated virtual social spaces. If such resources are unavailable, they can resort to using slower, distributed open-source LLMs like Horde. This flexibility ensures that the agents can continue to function and complete tasks even if faced with limited LLM interpretive resources.
		- Financial Autonomy: The AI agents have their own private Bitcoin and Lightning wallets, which enable them to manage and utilize funds independently. They can use these funds to pay for services, acquire resources, or even trade with other agents or users within the virtual social spaces.
		- Interaction with Web2: By using open-source software like auto-gpt, the AI agents can interact with the web2 world, which includes browsing websites, retrieving information, and communicating with web services. This allows them to gather data, analyze trends, and perform other tasks that may require access to the broader internet.
		- Task Execution: The AI agents can be assigned tasks by their instructors (or a hierarchy of AI actors), such as data analysis, research, content creation, or other complex tasks that require LLM processing. They can use their dedicated LLM resources or distributed LLMs like Horde to process and analyze large datasets, generate insights, and produce desired outputs, up to and including those which require finance systems. This would be bridged in the first instance using Bitrefil gift card infrastructure.
		- Social Interactions: Within the federated virtual social spaces, AI agents can communicate and collaborate with other agents or human users. They can participate in discussions, provide assistance, or even learn from the interactions, thereby improving their capabilities over time. Language translation, governance, and safeguarding could also be developed. Safeguarding would be handled by threshold risk triggers and transmission of data in a sovereign way to all parties, allowing external action by authorities appropriate to any abuse.
		- Time-to-Live Constraint: The AI agents have a predetermined “time to live”, which means they exist for a specific duration before expiring. This constraint ensures that agents do not consume resources indefinitely and allows for the creation of new agents with updated capabilities. Any agents which deplete their financial resource would also expire.
		- Adaptive Learning: As AI agents interact with their environment, other agents, and users, they can learn and adapt their behaviour. This enables them to improve their performance, better understand their assigned tasks, and become more effective at achieving their goals.

	- #### Classic use cases
		- Small teams working on product, architectural, or industrial design can
		  benefit from CVEs that allow them to visualize, modify, and iterate on
		  3D models in real-time.

		- ##### Ecosystem Interventions
		- The proposed infrastructure would be particularly valuable in areas
		   facing novel disease encroachment, invasive species, active hydrology,
		   shifting aquatic conditions, microplastic hotspots, changing
		   microclimates, or volcanic activity. By providing real-time advice and
		   guidance, the LLM can help communities make informed decisions about
		   ecosystem management and conservation efforts.

- # Actionable LLM advice:
	- Stick with the tools in the ecosystem you have already bought, until you need more. If your data is in Google use Google. If it's in Microsoft use Microsoft. If you use Runway / Mid journey then please do continue.
	- The edge isn't between vendors, it's a deep understanding of what problems you need it to solve, and the disposition of your data, or business technical edge.
	- Importance of unique business strategies over proprietary technology. [Harvard Business Review](https://hbr.org/2025/12/strategy-not-technology-is-the-key-to-winning-with-genai).
		- Necessity for firms to create value beyond technical features.
		- Focus on building strong brands and exceptional customer experiences.
		- Significance of strategic human resource management, including talent retention and skill development.
	- Sort your data management protocols out. Nobody wants to, but things are getting confusing. For me that's as simple as logseq and github.
		- Nearly 10,000 data points that reach well into active code and research. (graph).
	- The OpenAI kerfuffle last year has alerted companies to the fragility of single providers.
	- Consider how business critical the tooling is becoming over time for your business. Have a **NOW / NEXT / LATER** plan. Have and understand options but don't waste too much time exploring them, focus is king.
	- There are now many cloud middleware solutions that will handle the prompt realignment, load balancing, pricing etc across the whole [[Proprietary Large Language Models]] [[landscape]].
	- I think open source will win in the end because SO many people in the world will be forced and/or want not to use these few hyper centralised providers. **This is a contentious opinion**.
	- {{embed ((659fe0be-a52a-42ef-8f50-73695a802945))}}
	- https://www.reddit.com/r/StableDiffusion/comments/18tqyn4/midjourney_v60_vs_sdxl_exact_same_prompts_using/
	- If your business needs custom **models** then still do as much with off the shelf as you can. You need to be mindful of ethics and the law. This is non-trivial. The team here can help.
	- Regardless of the scale and technical proficiency of your team, these tools, especially the open source ones, can provide a rapid way to ask your customers **"is this what you mean?"**. People are bad at specifying, but good at instinctive validation. You can then go and manufacture a properly optimised and legally compliant toolchain.
- This is a [[presentation]] side, and the next slide is [[Proprietary Image Generation]]

- # Notable works
	- Real-time interactive chat bots with thousands of users.  [Player Two | AI Companion](https://playertwo.ai/)
	  id:: 659a922a-ac22-484e-9a3f-921390ea68cc
	- Marine autonomous AI vision on [[Hardware and Edge]] with [Future Fleet – Autonomous Marine Systems](https://futurefleet.co/) (Patent Pending)
	- Human attention tracking in semi public spaces with [QuasiScience](https://quasiscience.com/) and [Fuzzyduck](https://fuzzyduck.co.uk/) (MediaCity:UK)
	- Large scale exhibition AI design with [Immersive International](https://www.immersive.international/)
	- GenAI and robotics for film pre-visualisation with [LED Virtual Production Studio](https://www.pathwayxr.studio/)
	- Interactive GenAI image and video systems for [Neocadia](https://neocadia.com/)
	- Text to 3D models with [Vircadia | Open Source Metaverse Platform](https://vircadia.com/)
	- Collaborating on the [second Unique Digital Asset](https://twitter.com/Single_Use_Seal) launched on Bitcoin / RGB / [Diba](https://diba.io/)
	  id:: 65a27c7d-3da0-4fea-9187-59de9fbbe498
	- Educational products with a couple of top flight product managers such as [Parent's guide to Artificial Intelligence)](https://parentsguidetoai.com/)
	- LogSeq based training and [[presentation]] material**
	- .#.v-gallery-col3
		- ![image.png](assets/image_1704299260090_0.png){:width 600}
		- ![image.png](assets/image_1705148081233_0.png)
		- ![image.png](assets/image_1705148236040_0.png) -

	- ## The age of the informational Agent
		- **Effective collapse of integrated knowledge : Next to Later**
			- This is the 2016 [[Death of the Internet]] [Conpiracy Theory]([Dead Internet theory
		- Wikipedia](https://en.wikipedia.org/wiki/Dead_Internet_theory)) but will likely happen in time
			- [Echoes of the dead internet theory: AI's silent takeover | Cybernews](https://cybernews.com/editorial/dead-internet-theory-ai-silent-takeover/)
		- **Money will change: Next to Later**
		  collapsed:: true
			- Algorithms managing financial transactions and negotiations.
		- **Ubiquitous multi-modal UX: Next to Later**
			- Rise of integrated displays and interfaces for AI interaction.
		- **Intentional UX for accessing diverse networks of information: Later**

	- ## Generic Business Efficiency and Productivity Predictions
	  id:: 659a9246-c630-4781-84cd-a252ae2ce9c7
		- Generative AI enhancing business productivity and efficiency through domain-specific models, optimizing workflows, and integrating multimodal applications.
		  background-color:: yellow
		- Advantage for employees who intersect with AI tooling, increasing engagement and productivity... but for the benefit of whom [[Social contract and jobs]]
		  background-color:: pink
		- Most time benefit from things "close to the metal" such as Dev Ops, coding, macros, light financial work, etc. Thing someone "looked up" then did.
		  background-color:: green
		- Predictive analytics and strategic insights transforming decision-making processes (white collar jobs).
		  background-color:: pink
		- AI-driven project management which doesn't sound like much but... [[Diagrams as Code]]
		  background-color:: green
		- Enhanced virtual [[collaborative]] environments(think reduced travel for the classic complex visual tasks)
		  background-color:: yellow
		- Remote working; [[Metaverse and Telecollaboration]] (notes, minutes, knowledge management tools like this one). This includes radically improved document understanding
		  background-color:: green
		- Business to business mixed reality. I have been doing this since 1997. It's always going to be big "SOON", but the signs are improving and I can't discount it as easily this time.
		  background-color:: pink
		- Concentrate on the lowest hanging fruit, most people are not using this, you'll get huge advantage. Protect your data, let the market develop. If you have a clear business case then do get a consultant and legal advice (£1000/hr). Make a risk matrix, use my GPT if you like.
		  background-color:: red

		- #### Game developers and animators
			- Leverage Stable Diffusion to create unique and memorable characters, streamlining the design process and reducing the time and resources required for character creation.
			  Illustration:

			- ### Real-Time 3D Graph Visualization
				- **GPU-Accelerated Rendering**: Powered by Three.js and React Three Fiber, rendering up to 100,000+ nodes at 60 FPS.
				- **Force-Directed Layout**: Nodes attract/repel based on semantic similarity and connections, creating intuitive clusters.
				- **Dual-Graph Support**: Separate physics for knowledge graphs (stable, blue theme) and agent graphs (dynamic, green theme).
				- **Interactive Controls**: Drag nodes, zoom, orbit, and apply forces in real time.

	- ### [Meshy](https://www.meshy.ai/showcase) - *   Meshy allows users to transform ordinary 2D images into detailed 3D models, opening up possibilities for creating immersive experiences and visualisations.
-   The platform simplifies 3D content creation, reducing the technical barriers and time normally associated with complex modelling software.
-   It empowers users to generate 3D assets for a range of applications, including gaming, e-commerce, [[design thinking]], prototyping, and augmented reality.
-   Meshy supports texturing and colour application to 3D models, enhancing their visual appeal and realism.
-   The service enables [[organisation]] and management of generated 3D models, facilitating efficient workflows and [[collaboration]].
-   It allows users to share their 3D creations easily, fostering collaboration and feedback from others.
-   Meshy offers possibilities for customisation and fine-tuning of 3D models, allowing for greater control over the final output.
-   The platform provides tools for [[optimization]] of 3D models for different platforms and devices, ensuring [[performance]] and compatibility.
		- <iframe src="https://www.meshy.ai/showcase" style="width: 100%; height: 600px"></iframe>

- # Pinokio
	- [twitter link to the render loading below](https://twitter.com/cocktailpeanut/status/1765462787046686968) - - The tweet thread discusses advice on how to organise one's life and career to achieve greater success.
- It suggests spending time determining what truly matters to you and what you genuinely enjoy doing, instead of simply chasing money or prestige.
- Focusing on a few key areas, rather than trying to do everything at once, is recommended.
- It also advises against constantly comparing yourself to others and their progress.
- Finding a supportive community and mentors can provide encouragement and guidance.
- The thread emphasizes the importance of being adaptable and willing to change course if something isn't working.
- Building a strong foundation of [[skills development]] and knowledge is highlighted as a long-term investment.
- Patience and persistence are crucial, as significant achievements often take time and effort.
- The author notes the futility of seeking external validation, stating that you'll still be you regardless of success.
	  {{twitter https://twitter.com/cocktailpeanut/status/1765462787046686968}}
- {{twitter https://twitter.com/blizaine/status/1765434684450742764?}}

- # Real-Time
- [H. Jensons -TWISTED : r/aivideo (reddit.com)](https://www.reddit.com/r/aivideo/comments/1eryhk6/h_jensons_twisted/)
- ![rapidsave.com_h_jensons_twisted-zyldr5g40mid1.mp4](assets/rapidsave.com_h_jensons_twisted-zyldr5g40mid1_1723965805126_0.mp4)
- [EndlessDreams - Real-Time videos made easy - YouTube](https://www.youtube.com/watch?v=irUpybVgdDY)
- {{video https://www.youtube.com/watch?v=irUpybVgdDY}}

		- ### The [Secret Cyborg](https://www.oneusefulthing.org/p/reshaping-the-tree-rebuilding-organizations) Concept and You.
		  collapsed:: true
			- [twitter link to the render loading below](https://twitter.com/emollick/status/1775176524653642164){{twitter https://twitter.com/emollick/status/1775176524653642164}}
			- Acknowledge that employees are already using AI at work, often without approval. Over half of people using AI at work are doing so without telling their bosses. [Microsoft put this number at a staggering 75%](https://www.microsoft.com/en-us/worklab/work-trend-index/ai-at-work-is-here-now-comes-the-hard-part/) [[Microsoft Work Trends Impact 2024]]
				- | Statistic | Value |
				  |-----------|-------|
				  | Percentage of global knowledge workers using generative AI | 75% |
				  | Percentage of AI users who say it helps them save time | 90% |
				  | Percentage of AI users who say it helps them focus on their most important work | 85% |
				  | Percentage of AI users who say it helps them be more creative | 84% |
				  | Percentage of AI users who say it helps them enjoy their work more | 83% |
				  | Percentage of AI users who are bringing their own AI tools to work (BYOAI) | 78% |
				  | Percentage of AI users at small and medium-sized companies who are bringing their own AI to work | 80% |
				  | Percentage of AI users reluctant to admit using AI for their most important tasks | 52% |
				  | Percentage of leaders who would rather hire a less experienced candidate with AI skills than a more experienced candidate without them | 71% |
				  | Percentage of leaders who say early-in-career talent will be given greater responsibilities with AI | 77% |
			- Create a culture of exploration and openness around AI use. Encourage employees to share how they are using AI to assist their work.
			- Completely rethink and redesign work processes around AI capabilities, rather than just using AI to automate existing processes. Cut down the org chart and regrow it for AI.
			- Let teams develop their own methods for incorporating AI as an "intelligence" that adds to processes. Manage AI more like additional team members than external IT solutions.
			- Align incentives and provide clear guidelines so employees feel empowered to ethically experiment with AI.
			- Build for the rapidly evolving future of AI, not just today's models. Organizational change takes time, so consider future AI capabilities.
			- Act quickly
			- organizations that wait too long to experiment and adapt processes for AI efficiency gains will fall behind. Provide guidelines for short-term experimentation vs slow top-down solutions.
			- Realize there are only two ways to react to exponential AI change; too early or too late. The capabilities are increasing rapidly, so it's better to start adapting sooner than later.

						- ### Value Translation
							- Facilitating real-time exchange of currencies and assets across instances.

- # Games sector dominates entertainment
	- ![1713196618774.jpeg](assets/1713196618774_1713258422046_0.jpeg)
	- Traditional engines like Unity, [[Unreal]], [[Roblox]] , and [[NVIDIA Omniverse]] may become outdated [[Disruption]].
		- They're something like 15 years old and designed for a past era of computing.
		- The rise of generative AI, cloud computing, and new spatial platforms is poised to transform 3D creation.
		- Future engines might start with simple text prompts for creation, making them more accessible and reducing barriers for new creators.
		- Proposed engines should be modular, cloud-based, and adaptable to different project needs, avoiding the bloat of current engines.
		- There is opportunity for the traditional engines to pivot here, but they are struggling with their size already.
		- A key feature will be real-time collaboration and version control in a cloud-based environment.
		- This suggests that user experience in these engines should be flexible and cater to different skill levels and roles.
		- New engines might initially focus on specific genres, art styles, or platforms, rather than trying to cover all use cases.
		- The interoperable [Open Universal Scene Descriptor](https://openusd.org/release/index.html) might be the key enabler.
		- There could be significant change in the entertainment industry, with more diverse and interactive content as a result of these advancements.
		- [Fiero
		- Create 2D games without a single line of code! (fierogameengine.com)](https://fierogameengine.com/)
		- [They are starting to hide away the AI component and just focus on workflows like Sprite Fusion](https://www.spritefusion.com/)
	- <iframe src="https://miao-ai-lab.github.io/LARP/" style="width: 800px; height: 400px"></iframe>
	- [LARP: Language-Agent Role Play for Open-World Games (arxiv.org)](https://arxiv.org/pdf/2312.17653.pdf)
		- Plenty of fun tools for game makers, but distributors are quite ossified, and access to distribution may be patchy.
		- Steam has [softened it's stance.](https://store.steampowered.com/news/group/4145017/view/3862463747997849618)
		- Latency and cost are still prohibitive **in game**.
		- Tools for builders
		- Blender has been leading the way with open source plugins appearing all the time.
		- [Scenario
		- AI-generated game assets](https://www.scenario.com/)
		- LoRA training.
		- Already plenty to play with [LinkedIn](https://www.linkedin.com/feed/update/urn:li:activity:7148068781314002944/) and [AI-Powered Creativity: Innovating Look Development with Stable Diffusion & ComfyUI](https://www.youtube.com/watch?v=CLPvdbFUNqw)
	- ![1704232411233.mp4](assets/1704232411233_1704298954869_0.mp4){:height 100, :width 400}
		- [Create an AI Robot NPC using Hugging Face Transformers 🤗 and Unity Sentis (substack.com)](https://thomassimonini.substack.com/p/create-an-ai-robot-npc-using-hugging?utm_campaign=post&utm_medium=web)
		- {{video https://www.youtube.com/watch?v=iZ_20vK94hc}}
		-
- [GigaxGames/gigax: LLM-powered NPCs running on your hardware (github.com)](https://github.com/GigaxGames/gigax)
- {{video https://www.youtube.com/watch?v=_KFbT6eph5A}}
-
- [[Ai in Games]] https://www.gginsights.io/
  =======
  <<<<<<< HEAD
- [NVIDIA In-Game Inferencing | NVIDIA Developer](https://developer.nvidia.com/rtx/in-game-inferencing/) [[Ai in Games]]
- [Theoretically Media on X: "Google's Genie 2 just dropped, and it's a stunner. Create a "game" from an image! They're describing it as their most capable large-scale foundation world model yet. More Examples Below! https://t.co/BMOOxfaOVg" / X](https://x.com/TheoMediaAI/status/1864329184459338207) [[Ai in Games]]
- https://github.com/etched-ai/open-oasis [[Ai in Games]]
- [D&D Character Creator (npub.info)](https://pages.npub.info/glyphs/TESTNET_ENG_QAE/tmp/) [[Melvin Carvalho]] [[Runes and Glyphs]] [[Ai in Games]]
- [[Melvin Carvalho]] [[Nostr protocol]] [[Agents]] [[Ai in Games]] [Home · dungeon-mastr/rules Wiki (github.com)](https://github.com/dungeon-mastr/rules/wiki)
- https://github.com/GameGen-O/GameGen-O/ [[Ai in Games]]
- https://gamegen-o.github.io/ [[Ai in Games]] [[Ai in Games]]
- [[Ai in Games]] [[Llama]] [[Facebook Meta]] [Run AI Town entirely locally by default using llama3 by ianmacartney · Pull Request #219 · a16z-infra/ai-town (github.com)](https://github.com/a16z-infra/ai-town/pull/219) [[Large language models]]
- [Champions of Otherworldly Magic - Collect, Trade, Battle! (championstcg.com)](https://championstcg.com/) [[Ai in Games]]
-

	- ### Tutorials
		- [Beginner Friendly AI Animation Tutorial #1](https://www.youtube.com/watch?v=WPlUSnLTmfI) - Discusses strategies for effective time management and increased [[productivity]], covering prioritisation, the Pomodoro Technique, workspace [[organisation]], [[project management]] tools, and [[optimization]] techniques to prevent burnout
		- [AnimateDiff Tutorial for Automatic1111](https://www.youtube.com/watch?v=X-zB4-gX3eA) - Summarises how to organise and manage digital photos effectively through folder structures, descriptive naming, metadata tagging, [[cloud computing]] backups, and [[knowledge management]] principles for maintaining a curated archive

		- ### DONE Logo Design & Branding
		  collapsed:: true
			- *Task:* Create a professional logo and develop a visual identity for the business.
			- **Looka**
				- *Description:* AI-powered platform that generates logo ideas based on business name and industry preferences. Also offers brand kit creation (social media assets, business cards).
				- *Cost:* Logo packages start around $20 USD (one-time). Brand Kit subscriptions available (~$96 USD/year).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Looka](https://looka.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Brand Mark / Logopony / Logo.com / Smashing Logo**
				- *Description:* Various other AI logo generators offering similar services to Looka, generating multiple logo options based on input criteria. (Head-to-head comparison mentioned).
				- *Cost:* Varies, often offer one-time purchase logo packages ($20-$100+ USD) and sometimes subscription brand kits.
				- *Websites:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Brandmark](https://brandmark.io/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Logopony](https://www.logopony.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Logo.com](https://logo.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->, <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Smashing Logo](https://smashinglogo.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Dall-E 3 (via ChatGPT)**
				- *Description:* Can be used to brainstorm logo *concepts* visually, though often struggles with consistent text rendering. Useful for initial ideas to refine later. Can also help brainstorm overall brand visual identity.
				- *Cost:* Requires ChatGPT Plus ($20 USD/month).
				- *Website:* (Accessed via <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[ChatGPT](https://chat.openai.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->)
			- **Deblank**
				- *Description:* AI tool for generating professional colour palettes from images or natural language prompts. Useful for establishing website/brand colours.
				- *Cost:* Check website for pricing.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Deblank](https://deblank.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----> (*Note: URL is .com not .net*)

		- ### Workflow Automation
			- Planning applications processing
			- *Task:* Connect different apps and services to automate repetitive tasks, saving time and reducing errors.
			- **Zapier**
				- *Description:* Leading automation platform connecting thousands of apps. Create "Zaps" (workflows) triggered by events in one app to perform actions in another. Can be used with AI tools (e.g., trigger Synthesia videos, parse emails with GPT, post to social). Zapier AI helps build automations via prompts.
				- *Cost:* Free plan available. Paid plans scale based on task volume and features, starting around $20 USD/month (billed annually).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Zapier](https://zapier.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Cognosys**
				- *Description:* AI-native automation tool that uses natural language prompts to set up workflows for tasks like email automation, research, and notifications.
				- *Cost:* Check website for pricing (likely subscription-based).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Cognosys](https://cognosys.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **ML Blocks**
				- *Description:* Provides no-code AI workflows specifically for image processing tasks. (See Image Generation).
				- *Cost:* Check website.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[ML Blocks](https://mlblocks.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

	- ### Scheduling
		- *Task:* Automate the process of scheduling meetings or appointments.
		- **Reclaim.ai**
			- *Description:* AI scheduling tool that automatically finds the best time for meetings, tasks, and habits in your calendar based on priorities. Useful for coordinating schedules (e.g., house viewings).
			- *Cost:* Free plan available. Paid plans add features, starting around $8 USD/user/month (billed annually).
			- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Reclaim.ai](https://reclaim.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

	- #### Crowd funding
- At time of writing a [crowd fundinginitiative](https://www.constitutiondao.com/) based around a digitaldecentralised construct called a DAO (explained later in detail)[managed to raise $46 million dollars to bid for a copy of the USconstitution](https://www.coindesk.com/business/2025/12/06/daos-and-the-next-crowdfunding-gold-rush/)at Southerbys auction house. The attempt narrowly failed, but the press[heralded this new era of “Web3” economicmight](https://www.coindesk.com/business/2025/12/09/what-kickstarter-going-decentralized-means-for-web-3/).This model might be the only use for DAOs and is likely just a way toavoid regulatory scrutiny. There is more detail on DAOs later.
-

	- #### Augmented reality
		- The closest technology at this time seems to be [Lumus’ waveguideprojectors](https://lumusvision.com/) which are light, bright and highresolution. Peggy Johnson, CEO of Magic Leap, one of the market leaderssaid: it“If I had to guess, I think, maybe, five or so years out, forthe type of fully immersive augmented reality that we do.”
		- In a [GQprofile](https://www.gq.com/story/tim-cook-global-creativity-awards-cover-2025?mbid=social_twitter)Cook, the Apple CEO talked at length about the challenges andopportunities of AR headsets. He has been emphasizing the importance ofaugmented reality over VR for almost a decade, believing that AR canenhance communication and connection by overlaying digital elements onthe physical world. Cook’s vision aligns with Apple’s rumoured mixedreality headset, which is expected to cost around $3,000 and focus on‘copresence’, which we have discussed at length in this chapter. Apple’sapproach differs from Meta’s metaverse, as Apple aims to integratedigital aspects into the real world rather than create purely digitalspaces. This is an interesting area for our applications of bringingsmall teams together, but the pricing at this time is significantly atodds with our chosen market. Cook, like this book, has highlighted AR’spotential in education and its ability to bring people together in thereal world.

		- ### Liquidity Lottery
			- Because holders of BTC are disincentived to sell the asset (assuming future gains) it is likely vulnerable to something [Kao called the‘liquidity lottery’](https://twitter.com/UrbanKaoboy/status/1526311908709502977).This is a supply/demand mismatch which he thinks could spell the end of the asset class in time. Macro analyst group[‘Doomberg’](https://doomberg.substack.com/) believe that this mispricing of the asset is the significant risk, and point out that if Bitcoin is approached within the framework of government controlled Fiat, then there is no [‘there there’](https://en.wiktionary.org/wiki/there_is_no_there_there). Bitcoin does not generate more fiat money within it’s ecosystem (as say an energy extraction company would), and as such is very suggestive of the features of a Ponzi. They have recently softened on this view, and are now clear to separate Bitcoin from the wider ‘crypto’ world, which they remain convinced are simply scams, wash trading magic beans without any productivity. The value is dependent on finding the ‘greater fool’ mentioned near the start of the book. [Doombergassert](https://doomberg.substack.com/p/dollars-ex-machina) that the price of the asset has been inflated by manipulation in the unregulated stablecoin markets (specifically Tether), and in the event of a ‘run for the exits’ there would be a serious repricing. This seems entirely possible, and perhaps even likely, below an unknown threshold of confidence. They are now asserting that if the manipulation and mispricing could be ‘washed out’ of Bitcoin then it would present an investment opportunity, and they estimate that price at around $3000. We think that the combination of global speed of exchange of value, generative AI, and bots which leverage the network to create value within the ecosystem of the network, that this thesis does not stand true, but there is no way to know for sure at this time.

		- ### Centralisation of the money over time
			- In a medium term future it’s possible to imagine a smart enough autonomous AI or ML actor managing to accrue Bitcoin through fast and smart ‘decisions’. This could unreasonably centralise the asset, and it would be impossible to claw this situation back. These constructs would last for the lifetime of the chain unless constrained by timelock multisigs for instance.

			- ##### Play to earn revenue models
				- This is morally dicey at this time and early startups like [AxieInfinity are in serioustrouble](https://www.bloomberg.com/news/features/2025-06-10/axie-infinity-axs-crypto-game-promised-nft-riches-gave-ruin).A (long) [video by DanOlsen](https://www.youtube.com/watch?v=YQ_xWvX1n9g) highlights thestructural problems with both play to earn and NFTs. On chain analysissuggested that 40% of accounts in 200 current Web3 games [arebots](https://gallery.usejigger.com/).

	- #### Peerswap
		- It may be possible to use “Peerswap” to execute rebalancing andsubmarine swaps into and out of Liquid assets on the sidechain in asingle tx. This is anunder explored area at this time.

- # Product research programme
- I'm working on an InnovateUK-funded programme in a lab in MediaCity. We have money to spend on training people.
- You have followed this link because you've been specifically invited to [this WhatsApp group](https://chat.whatsapp.com/KwuFsntcsFdHYtPOjnt8EE), where we can lightly kick ideas about. You don't need to say anything in the group. You can come and go as you please. It's mainly friends and family at this stage. You likely know everyone in the room a bit, but anyone can invite anyone they see fit, so bear in mind it's a public forum to a degree.
- I want to deliver pragmatic, useful tools for teachers, which save time on the organising and admin side of the job, freeing up more time for work-life balance. I have a lot of tricks but I don't know how to apply them to your domains.
- I am going to run a short and brisk seminar series. The sessions will be 45 minutes, likely starting at 4pm. Likely just four or five of them, on a weekly cadence. Probably Nov/Dec. Might be more early next year.
- Nothing is yet decided; I want to find the most convenient fit for teachers at all levels.
- I would initially like to investigate what the open problems are for educators when engaging with AI, and when talking about it to students and colleagues, etc. I need to know what you think the problems are.
- I want to do at least one group chat between us in Teams, Zoom, or Google or something, and as many 30-minute one-to-one sessions as people can give me to capture specific challenges. These are all optional, and we'll figure out how to do all that in the next few weeks.
- Once the programme is developed, you'd be welcome to join the formal sessions delivered from the lab. You can promote them in your institutions as something you have had a hand in building, and disseminate the online material as widely as you like.
- If there's appetite, we might push to physical sessions and there's potentially a bit of (self-reporting into your institution) clout to be had as the council and unis get more involved.
- The material will eventually end up on these pages and website, which is mine. You can have a [look about](https://narrativegoldmine.com/#/page/introduction%20to%20me) if you like, but it's a distraction to be honest at this stage—everything is a bit too raw to be useful.
-

- # Tips for now
  You should be using [Perplexity.ai](https://perplexity.ai) which gives references. That's basically 90% of what you need to know right now.
  
  My custom tooling looks like this, I hope to open it up to you all over time:
  
  ![Screenshot 2024-09-02 125400.png](assets/Screenshot_2024-09-02_125400_1725278127596_0.png)

- # Gaussian Splatting
	- [Instantsplat: Unbounded Sparse-view Pose-free Gaussian Splatting in 40 Seconds](https://instantsplat.github.io/)
	- [The Rise Of 3D Gaussian Splatting: What Is It And How Is It Changing The Immersive Media Industry? — Magnopus](https://www.magnopus.com/blog/the-rise-of-3d-gaussian-splatting)
	- 4D [[Gaussian splatting and Similar]] [with time domain](https://github.com/hustvl/4DGaussians)
	- [[Gaussian splatting and Similar]] [gsgen](https://github.com/gsgen3d/gsgen)
	- Room scale [[Gaussian splatting and Similar]] technique for single lens (#SLAM) [[Scene Capture and Reconstruction]]  [Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting (vladimiryugay.github.io)](https://vladimiryugay.github.io/gaussian_slam/)
	- [Mip-Splatting (niujinshuchong.github.io)](https://niujinshuchong.github.io/mip-splatting/) reduced artifacts in [[Gaussian splatting and Similar]]
	- [Gaussian-SLAM: Photo-realistic Dense SLAM with Gaussian Splatting (vladimiryugay.github.io)](https://vladimiryugay.github.io/gaussian_slam/)
	- GaussianDiffusion: 3D Gaussian Splatting for Denoising Diffusion Probabilistic Models with Structured Noise
		- logseq://graph/researchpapers?block-id=6579a51f-5e6d-4570-903f-9458f84e845f
	- Gaussian [[SLAM]] rooms scale scanning
		- logseq://graph/researchpapers?block-id=6579a880-ce7f-4a79-b3d3-9135ff4348b3
		- [Gaussian Splatting SLAM (rmurai.co.uk)](https://rmurai.co.uk/projects/GaussianSplattingSLAM/)  is near real-time
	- [Paper page TRIPS: Trilinear Point Splatting for Real-Time Radiance Field Rendering (huggingface.co)](https://huggingface.co/papers/2401.06003)
	- [Deblurring 3D Gaussian Splatting (benhenryl.github.io)](https://benhenryl.github.io/Deblurring-3D-Gaussian-Splatting/)
	- [huggingface/gsplat.js: JavaScript Gaussian Splatting library. (github.com)](https://github.com/huggingface/gsplat.js/)
	- [[Gaussian splatting and Similar]] in Houdini
	- [Triplane Meets Gaussian Splatting: Fast and Generalizable Single-View 3D Reconstruction with Transformers (zouzx.github.io)](https://zouzx.github.io/TriplaneGaussian/) understandable [[3D and 4D]] from [[Gaussian splatting and Similar]]
	- [dynamic3dgaussians.github.io](https://dynamic3dgaussians.github.io/) using a multi [[Motion Capture]] dome and [[Gaussian splatting and Similar]] for 6DOF [[Human tracking and SLAM capture]]
	- [LangSplat: 3D Language Gaussian Splatting](https://langsplat.github.io/)

		- ### Inequality on the Rise
		- In Britain inequality has returned to levels not seen since the 1930s.After steadily rising between 1600 to 1913, Britain’s wealth as a share of the global total peaked and then began falling until the end of the1970s \[ref required\]. During this time, Britain became one of Europe’s most equal countries, even without the support of its Empire \[ref needed\]. Some argue this relative equality enabled Britain’s economic growth and international standing to keep pace with its European neighbours, despite the loss of imperial power \[ref needed\]. Duringthis period there was much upheaval in global monetary systems. More recently we have seen that trust has diminished, and inequality hasrisen, with social media perhaps acting as an accelerator.

- # Money and The State
	- It seems a pretty reasonable that the best ‘systemic’ approach is a separation between major centralising forces such as state, church, and money. In practice we can see that globally, this isn’t the case, withbad hotspots of high corruption where all three meld together into kleptocratic dictatorships, or theocracies. For our purposes in the UKit’s useful to look at the concept of ‘austerity’.
	- Austerity is a term used to describe a set of economic policies that aimto reduce government spending and debt, often through cuts to public services and welfare programs. The concept of austerity has its originsin the 1920s, following the end of World War I and the economic crisisthat ensued. In the wake of the war, many Western European countrieswere struggling with high levels of debt and inflation. In response,governments began implementing policies to reduce spending and balance their budgets.
	- We have seen in the previous chapter that the concept of inflation itself is complex, and somewhat argued about still. Globally, on aggregate, the efficiencies of increasing technology are thought to be deflationary to the tune of between 3 and 5 percent annually, though this may radically spike up in the era of AI which will be covered later. This is counter to the current need for inflation to maintain debt repayments at a national level. Central banks manipulate interest rates to control inflation, aiming to keep it at sustainable levels.This process is necessary because as national debt and deficits grow,governments need inflation to prevent these debts from spiralling out of control. Higher inflation results in higher nominal GDP, which in turn increases the tax base, providing governments with the revenue needed topay down debt. To achieve this. The natural progression of humanity inherently deflationary, which forces central banks to print more money and further manipulate the monetary system in order to generate the desired inflation. This can be seen as a hidden tax on citizens, as itdevalues their money over time. The negative effects of this system are disproportionately felt by lower-income groups. As inflation rises, the cost of living increases, and many households struggle to make ends meet. This has led to a situation where households need multiple incomesto maintain their standard of living, forcing individuals to work longer hours and take on multiple jobs. As a result, people have less free time and energy to engage in rewarding activities or spend time with their families. This need for constant economic growth, as measured by GDP,has led to an environment where individuals are pushed to be more productive at the expense of their well-being. This has resulted in a society where many people are overworked and struggling to keep up with the rising cost of living. Booth discussed this at length in his book‘The Price of Tomorrow’. His is a rare thesis based around the ideas that technology is deflationary, that the marginal cost of goods trends over zero over time, and that the current system of debt and inflation are inherently unsustainable in the face of exponential technology improvements and automation. We discuss the concept of inflation and deflation, and both their risks throughout the book, but Booth has been very clear on this for many years. He thinks the current global monetary system ill-suited to handle the challenges and opportunities presented by deflation. He suggests that embracing deflation is the key to unlocking a prosperous and sustainable future. The book delves into the implications of deflation on various aspects of society, including wealth distribution, job markets, and the role of governments in shaping economic policies..[[booth2020price]]
	- In the 1920s, Keynes was one of the first to argue against the austerity measures which seem part of the cyclical play book around debt and inflation. He argued that that cutting government spending during a recession would only worsen the economic downturn. Instead, he advocatedfor increased government spending to stimulate economic growth and reduce unemployment. Despite this, many governments continued to implement austerity policies throughout the 1920s and 1930s.
	- In the post-World War II period, the rise of the welfare state and the adoption of Keynesian economic policies led to a shift away from austerity in many countries. However, in the 1970s, a new economic crisis led to a resurgence of austerity policies, particularly in theUnited States and United Kingdom. In the 1980s, the rise ofneoliberalism and the influence of economists such as Milton Friedman led to further cuts to government spending and the rolling back of the welfare state.
	- Today, the concept of austerity continues to shape economic policy,particularly in the wake of the 2008 financial crisis. Many governments,particularly in Europe, have implemented austerity measures in response to the crisis, leading to cuts to public services and welfare programs.The effectiveness of these policies remains a contentious issue, with some arguing that they have helped to reduce debt and stabilize economies, while others argue that they have led to increased inequality and hindered economic growth. Looking around at the state of the world,and the widening gap between the rich and the poor, it is possible tohave some sympathy with those who see patterns in the bahaviour of political leaders and the controllers of Western capital and global resources. The system seems engineered to reward a few. It is possibleto view ‘austerity’ as a means of political control of economic levers,in order to de-democratise populations. This mantra of ‘do more, consume less’ has perhaps become a defacto methodology to constrain popular ideas, diverting capital back into the hands of incumbents, land owners,and the politically and economically motivated.[[mattei2025capital]] It seems that the controlling nexus of this political framework globally isthe concept of the central bank, unelected technocrats whose tenures span across political administrations. Again, this can be traced back to the 1920’s. Hawtrey’s 1925 “Currency & Public Administration” asserts that a central bank should it“Never explain; never regret; never apologise.”, and speaks glowingly of the selfish market.[[hawtrey1925currency]] This economic model is referred to asDirigisme and feels increasingly the global norm.[[balassa2013theory]] Wecan perhaps here see the divergent point at which the lionization of the market began. Again, to be clear, the authors are not economists, but it does seem that in a global digital society there is room to explore moreequitable models of global value, governance, and trust.
	- Remember that these centrally planned national and global actions provide liquidity to the private banking sector. Like the digital money analogues discussed earlier in the book private banks operate fractional reserve banking. This is a banking system where banks hold only a fraction of the deposits they receive as reserves, while the rest is lent out to customers. This means that the money supply in an economy can be increased through the lending activities of banks (itself a complex inflationary force which devalues money over time, feeding back into the policy directives of the central banks. The fractional reserve system is useful for capital creation in times of growth, but relies on the confidence of the depositors. Historical examples of bank runs which threatened systemic risk or caused failures of the banking system include:
		- The Bank of United States crisis in the 1930s: This was the largest bank failure in American history and was a result of a bank run caused by rumours of financial mismanagement.
		- The Savings and Loan crisis of the 1980s: This was a result of a large number of failed savings and loan associations in the United States, which were caused by a combination of factors including poor management, risky lending practices, and a decline in real estate values.
		- The Nordic banking crisis of the 1990s: This crisis was caused by a combination of factors including a real estate bubble, high levels of debt, and a lack of regulation. It resulted in the collapse of several major banks in Sweden, Finland, and Norway, and had a significant impact on the economies of the region.
		- The Bank of Japan crisis in the late 1990s: This crisis was caused by a combination of factors including a real estate bubble, high levels of debt, and a lack of regulation. It resulted in the collapse of several major banks and had a significant impact on the Japanese economy.
		- The Asian Financial Crisis of 1997: This crisis was triggered by a devaluation of the Thai baht and quickly spread throughout the region, causing a number of major banks to fail. The crisis was largely a result of a lack of transparency and poor regulation in the banking industry.
		- The 2008 financial crisis in Iceland: This crisis was caused by the collapse of the country’s three largest banks, which had been engaging in risky lending practices and had accumulated large amounts of debt. The crisis had a devastating impact on the Icelandic economy and resulted in a severe recession.
		- The Global Financial Crisis of 2007-2009: This was a result of a widespread failure of the global banking system, caused by a combination of factors including the housing market collapse, risky lending practices, and a lack of regulation.
		- The collapse of Banco Popular in Spain in 2017: This was one of the largest bank failures in European history, and was caused by a combination of factors including a large amount of bad debt and a declining real estate market.
		- There were many bank runs on smaller rural banks in China during 2025. The financial conditions of Chinese banks are somewhat reminiscent of the 2008 American landscape.
	- In response to the Global Financial Crisis, many measures have been taken to shore up the banking system, including the creation of new regulatory bodies, the implementation of new regulations, such as theDodd-Frank Wall Street Reform and Consumer Protection Act, which increased the regulatory oversight of the banking industry. The introduction of stress testing for banks, to ensure that they have enough capital to withstand financial shocks, globally, has radically deleveraged banks from around 1:40 fractional reserve, to around 1:10.
	- There is increased political pressure to regulate the banking industry and prevent another financial crisis. However, there is also political opposition to excessive regulation, as some argue that it may stifle economic growth. There are concerns about rising levels of debt and the potential for another financial crisis.
	- It’s interesting that Brett, a former FDIC regulator [believesthat](https://blog.orchid.com/exfdic-regulator-on-trust-and-the-battle-of-the-social-media-videos/)the 2008 US bank run was sparked by YouTube posts of queues forming at banks. He says those that formed the initial lines carried memories of the great depression, but that once YouTube started showing the footage more broadly the contagion struck. In the world of instant messaging media today we can perhaps see how this might happen again. More recently, the 2025 ‘wobble’ in global banking caused by the collapse ofAmerica’s 5th largest [bankSVB](https://theconversation.com/why-svb-and-signature-bank-failed-so-fast-and-the-us-banking-crisis-isnt-over-yet-201737)has precipitated strong intervention by the federal government, who haveopted to ‘backstop’ investor deposits. In the midst of this potentialcrisis it it notable that TikTok (now arguably the world’s [most popularsearchengine](https://blog.cloudflare.com/popular-domains-year-in-review-2025/))is carrying millions of hashtag references to[bankruns](https://www.tiktok.com/tag/bankrun?lang=en). Senator Kelly inthe USA [allegedlyinquired](https://public.substack.com/p/exclusive-senator-mark-kelly-called)about the potential for limiting such references on social media, and aUK minister is [asking for securityservices](https://news.sky.com/story/tiktok-ban-minister-asks-national-cyber-security-centre-to-look-into-safety-of-app-12833371)to examine the risks of the Chinese application. The perhaps reflects concern about algorithmically driven geopolitically motivated threats tothe banking system.
	- There is a growing awareness of the role of banks in the economy, and agrowing desire for greater transparency and accountability. There isalso a growing mistrust of banks, particularly in light of the GlobalFinancial Crisis. As we have seen, the advent of new technologies, suchas blockchain CBDC, and fintech, is changing the way that banks operateand interact with customers. This presents both opportunities andchallenges for the banking industry. As a final controversial aside,there is [industrysuspicion](https://apnews.com/article/signature-bank-fdic-barney-frank-silicon-valley-6ad86262d9945675a42d735b66ace4f2)that the collapse of SVB has been used as cover to close the final USbank servicing crypto, effectively decapitating the banking rails of the industry, and forcing it overseas. Were it not for the credibility ofthe people making these claims, this would seem pretty wild, but the prevailing winds are surely blowing against the disruptive potential ofa money system which is beyond the control of legislators.

	- ### Yopi
		- **Description**: A voice-based wellness coach focused on improving breathing and reducing stress.
		- **Features**:
			- Monitors breathing patterns
			- Provides real-time feedback and coaching
			- Portable and pairs with smartphones
			- Focus on breathing exercises and meditation
		- **AI Aspect**: Uses AI to customize breathing exercises and track progress.

	- ## Funding
	- Collaborators
		- Ross Verrall [[PEOPLE]] at [[NVIDIA Omniverse]]has suggested applying for the Inception grant to assist with our bid.
		- Simon Graham : Creative Technology Director at Pixel Artworks has promised some hours and a market potential report as a match fund to the project for £3000
		- Badger and Coombs would like to offer time, support and staff to the workshops work package and can commit £3000 of support.
		- FuzzyDuck productions will commit £3000 in time to product market development, and workshopping, and £7000 to the creation of digital assets for the product, with two iterations and any necessary project support.
	- Project_finance_summary
		- Summary of total project costs and funding requested.
		- Sections to fill:
		- Total project cost
		- Total funding requested
		- Breakdown by cost categories
		- **Advice**: Summarize accurately, cross-check with detailed tabs to ensure consistency.
	- Other_Public_Funding
		- Details of any other public funding received.
		- Sections to fill:
		- Source of funding
		- Amount
		- Status (applied, granted)
		- **Advice**: Disclose all other funding to avoid duplication of funding issues.
	- Other_Projects
		- Information on other ongoing or planned projects.
		- Sections to fill:
		- Project title
		- Funding body
		- Project status
		- **Advice**: Highlight synergies or distinctions with the current project to clarify the innovation aspect.
	- Labour_and_Overheads_Costs
		- Breakdown of labour costs and overhead allocations.
		- Sections to fill:
		- Employee roles
		- Hours
		- Rate
		- Overhead allocation method
		- **Advice**: Ensure labour costs are justifiable and in line with standard industry practices.
	- Materials_Costs
		- Details of material costs for the project.
		- Sections to fill:
		- Type of materials
		- Quantity
		- Cost
		- **Advice**: Source materials cost-effectively while maintaining quality.
	- Capital_Usage
		- Usage of capital items/equipment.
		- Sections to fill:
		- Description of capital items
		- Justification for need
		- Depreciation method
		- **Advice**: Justify capital usage with respect to project outcomes and innovation.
	- Sub_Contract_Costs
		- Costs related to subcontracting work.
		- Sections to fill:
		- Subcontractor details
		- Scope of work
		- Cost
		- **Advice**: Choose subcontractors that add value and expertise to the project.
	- Travel_&_Subsistence_Costs
		- Travel and subsistence expenses for the project.
		- Sections to fill:
		- Purpose of travel
		- Destination
		- Estimated cost
		- **Advice**: Keep travel costs reasonable and directly related to project activities.
	- Other_Costs
		- Any other costs not covered in previous sections.
		- Sections to fill:
		- Description of cost
		- Justification
		- Amount
		- **Advice**: Provide clear justifications for any miscellaneous expenses to ensure they are deemed necessary.

	- ##### Bots and AI agents
		- Autonomous AI agents, bonded to, but not bounded by, each federated
		  mixed reality instance, can to be self-governing entities that operate
		  within their federated virtual social spaces, drawing upon private
		  Bitcoin and Lightning wallets to perform and mediate economic exchanges
		  within the spaces. They could also trivially operate outside the virtual
		  space, and within other spaces on the same metaverse federation. They
		  would accomplish this by drawing on their ‘home’ GPU/TPU processors
		  where appropriate, or else using distributed large language model (LLM)
		  processing to accomplish tasks assigned by their instructors. They can
		  interact with the ‘web2’ world using open-source software called
		  auto-gpt and have constraints, such as “time to live” and limited access
		  to funds through their Bitcoin Lightning wallets.
		- Resource Management: These AI agents have access to dedicated LLM resources within their home instances in the federated virtual social spaces. If such resources are unavailable, they can resort to using slower, distributed open-source LLMs like Horde. This flexibility ensures that the agents can continue to function and complete tasks even if faced with limited LLM interpretive resources.
		- Financial Autonomy: The AI agents have their own private Bitcoin and Lightning wallets, which enable them to manage and utilize funds independently. They can use these funds to pay for services, acquire resources, or even trade with other agents or users within the virtual social spaces.
		- Interaction with Web2: By using open-source software like auto-gpt, the AI agents can interact with the web2 world, which includes browsing websites, retrieving information, and communicating with web services. This allows them to gather data, analyze trends, and perform other tasks that may require access to the broader internet.
		- Task Execution: The AI agents can be assigned tasks by their instructors (or a hierarchy of AI actors), such as data analysis, research, content creation, or other complex tasks that require LLM processing. They can use their dedicated LLM resources or distributed LLMs like Horde to process and analyze large datasets, generate insights, and produce desired outputs, up to and including those which require finance systems. This would be bridged in the first instance using Bitrefil gift card infrastructure.
		- Social Interactions: Within the federated virtual social spaces, AI agents can communicate and collaborate with other agents or human users. They can participate in discussions, provide assistance, or even learn from the interactions, thereby improving their capabilities over time. Language translation, governance, and safeguarding could also be developed. Safeguarding would be handled by threshold risk triggers and transmission of data in a sovereign way to all parties, allowing external action by authorities appropriate to any abuse.
		- Time-to-Live Constraint: The AI agents have a predetermined “time to live”, which means they exist for a specific duration before expiring. This constraint ensures that agents do not consume resources indefinitely and allows for the creation of new agents with updated capabilities. Any agents which deplete their financial resource would also expire.
		- Adaptive Learning: As AI agents interact with their environment, other agents, and users, they can learn and adapt their behaviour. This enables them to improve their performance, better understand their assigned tasks, and become more effective at achieving their goals.

	- #### Classic use cases
		- Small teams working on product, architectural, or industrial design can
		  benefit from CVEs that allow them to visualize, modify, and iterate on
		  3D models in real-time.

		- ##### Ecosystem Interventions
		- The proposed infrastructure would be particularly valuable in areas
		   facing novel disease encroachment, invasive species, active hydrology,
		   shifting aquatic conditions, microplastic hotspots, changing
		   microclimates, or volcanic activity. By providing real-time advice and
		   guidance, the LLM can help communities make informed decisions about
		   ecosystem management and conservation efforts.

- # Actionable LLM advice:
	- Stick with the tools in the ecosystem you have already bought, until you need more. If your data is in Google use Google. If it's in Microsoft use Microsoft. If you use Runway / Mid journey then please do continue.
	- The edge isn't between vendors, it's a deep understanding of what problems you need it to solve, and the disposition of your data, or business technical edge.
	- Importance of unique business strategies over proprietary technology. [Harvard Business Review](https://hbr.org/2025/12/strategy-not-technology-is-the-key-to-winning-with-genai).
		- Necessity for firms to create value beyond technical features.
		- Focus on building strong brands and exceptional customer experiences.
		- Significance of strategic human resource management, including talent retention and skill development.
	- Sort your data management protocols out. Nobody wants to, but things are getting confusing. For me that's as simple as logseq and github.
		- Nearly 10,000 data points that reach well into active code and research. (graph).
	- The OpenAI kerfuffle last year has alerted companies to the fragility of single providers.
	- Consider how business critical the tooling is becoming over time for your business. Have a **NOW / NEXT / LATER** plan. Have and understand options but don't waste too much time exploring them, focus is king.
	- There are now many cloud middleware solutions that will handle the prompt realignment, load balancing, pricing etc across the whole [[Proprietary Large Language Models]] [[landscape]].
	- I think open source will win in the end because SO many people in the world will be forced and/or want not to use these few hyper centralised providers. **This is a contentious opinion**.
	- {{embed ((659fe0be-a52a-42ef-8f50-73695a802945))}}
	- https://www.reddit.com/r/StableDiffusion/comments/18tqyn4/midjourney_v60_vs_sdxl_exact_same_prompts_using/
	- If your business needs custom **models** then still do as much with off the shelf as you can. You need to be mindful of ethics and the law. This is non-trivial. The team here can help.
	- Regardless of the scale and technical proficiency of your team, these tools, especially the open source ones, can provide a rapid way to ask your customers **"is this what you mean?"**. People are bad at specifying, but good at instinctive validation. You can then go and manufacture a properly optimised and legally compliant toolchain.
- This is a [[presentation]] side, and the next slide is [[Proprietary Image Generation]]

- # Notable works
	- Real-time interactive chat bots with thousands of users.  [Player Two | AI Companion](https://playertwo.ai/)
	  id:: 659a922a-ac22-484e-9a3f-921390ea68cc
	- Marine autonomous AI vision on [[Hardware and Edge]] with [Future Fleet – Autonomous Marine Systems](https://futurefleet.co/) (Patent Pending)
	- Human attention tracking in semi public spaces with [QuasiScience](https://quasiscience.com/) and [Fuzzyduck](https://fuzzyduck.co.uk/) (MediaCity:UK)
	- Large scale exhibition AI design with [Immersive International](https://www.immersive.international/)
	- GenAI and robotics for film pre-visualisation with [LED Virtual Production Studio](https://www.pathwayxr.studio/)
	- Interactive GenAI image and video systems for [Neocadia](https://neocadia.com/)
	- Text to 3D models with [Vircadia | Open Source Metaverse Platform](https://vircadia.com/)
	- Collaborating on the [second Unique Digital Asset](https://twitter.com/Single_Use_Seal) launched on Bitcoin / RGB / [Diba](https://diba.io/)
	  id:: 65a27c7d-3da0-4fea-9187-59de9fbbe498
	- Educational products with a couple of top flight product managers such as [Parent's guide to Artificial Intelligence)](https://parentsguidetoai.com/)
	- LogSeq based training and [[presentation]] material**
	- .#.v-gallery-col3
		- ![image.png](assets/image_1704299260090_0.png){:width 600}
		- ![image.png](assets/image_1705148081233_0.png)
		- ![image.png](assets/image_1705148236040_0.png) -

	- ## The age of the informational Agent
		- **Effective collapse of integrated knowledge : Next to Later**
			- This is the 2016 [[Death of the Internet]] [Conpiracy Theory]([Dead Internet theory
		- Wikipedia](https://en.wikipedia.org/wiki/Dead_Internet_theory)) but will likely happen in time
			- [Echoes of the dead internet theory: AI's silent takeover | Cybernews](https://cybernews.com/editorial/dead-internet-theory-ai-silent-takeover/)
		- **Money will change: Next to Later**
		  collapsed:: true
			- Algorithms managing financial transactions and negotiations.
		- **Ubiquitous multi-modal UX: Next to Later**
			- Rise of integrated displays and interfaces for AI interaction.
		- **Intentional UX for accessing diverse networks of information: Later**

	- ## Generic Business Efficiency and Productivity Predictions
	  id:: 659a9246-c630-4781-84cd-a252ae2ce9c7
		- Generative AI enhancing business productivity and efficiency through domain-specific models, optimizing workflows, and integrating multimodal applications.
		  background-color:: yellow
		- Advantage for employees who intersect with AI tooling, increasing engagement and productivity... but for the benefit of whom [[Social contract and jobs]]
		  background-color:: pink
		- Most time benefit from things "close to the metal" such as Dev Ops, coding, macros, light financial work, etc. Thing someone "looked up" then did.
		  background-color:: green
		- Predictive analytics and strategic insights transforming decision-making processes (white collar jobs).
		  background-color:: pink
		- AI-driven project management which doesn't sound like much but... [[Diagrams as Code]]
		  background-color:: green
		- Enhanced virtual [[collaborative]] environments(think reduced travel for the classic complex visual tasks)
		  background-color:: yellow
		- Remote working; [[Metaverse and Telecollaboration]] (notes, minutes, knowledge management tools like this one). This includes radically improved document understanding
		  background-color:: green
		- Business to business mixed reality. I have been doing this since 1997. It's always going to be big "SOON", but the signs are improving and I can't discount it as easily this time.
		  background-color:: pink
		- Concentrate on the lowest hanging fruit, most people are not using this, you'll get huge advantage. Protect your data, let the market develop. If you have a clear business case then do get a consultant and legal advice (£1000/hr). Make a risk matrix, use my GPT if you like.
		  background-color:: red

		- #### Game developers and animators
			- Leverage Stable Diffusion to create unique and memorable characters, streamlining the design process and reducing the time and resources required for character creation.
			  Illustration:

			- ### Real-Time 3D Graph Visualization
				- **GPU-Accelerated Rendering**: Powered by Three.js and React Three Fiber, rendering up to 100,000+ nodes at 60 FPS.
				- **Force-Directed Layout**: Nodes attract/repel based on semantic similarity and connections, creating intuitive clusters.
				- **Dual-Graph Support**: Separate physics for knowledge graphs (stable, blue theme) and agent graphs (dynamic, green theme).
				- **Interactive Controls**: Drag nodes, zoom, orbit, and apply forces in real time.

						- ### Value Translation
							- Facilitating real-time exchange of currencies and assets across instances.

		- ### Workflow Automation
			- Planning applications processing
			- *Task:* Connect different apps and services to automate repetitive tasks, saving time and reducing errors.
			- **Zapier**
				- *Description:* Leading automation platform connecting thousands of apps. Create "Zaps" (workflows) triggered by events in one app to perform actions in another. Can be used with AI tools (e.g., trigger Synthesia videos, parse emails with GPT, post to social). Zapier AI helps build automations via prompts.
				- *Cost:* Free plan available. Paid plans scale based on task volume and features, starting around $20 USD/month (billed annually).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Zapier](https://zapier.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **Cognosys**
				- *Description:* AI-native automation tool that uses natural language prompts to set up workflows for tasks like email automation, research, and notifications.
				- *Cost:* Check website for pricing (likely subscription-based).
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[Cognosys](https://cognosys.ai/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->
			- **ML Blocks**
				- *Description:* Provides no-code AI workflows specifically for image processing tasks. (See Image Generation).
				- *Cost:* Check website.
				- *Website:* <!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->[ML Blocks](https://mlblocks.com/)<!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!----><!---->

	- #### Crowd funding
- At time of writing a [crowd fundinginitiative](https://www.constitutiondao.com/) based around a digitaldecentralised construct called a DAO (explained later in detail)[managed to raise $46 million dollars to bid for a copy of the USconstitution](https://www.coindesk.com/business/2025/12/06/daos-and-the-next-crowdfunding-gold-rush/)at Southerbys auction house. The attempt narrowly failed, but the press[heralded this new era of “Web3” economicmight](https://www.coindesk.com/business/2025/12/09/what-kickstarter-going-decentralized-means-for-web-3/).This model might be the only use for DAOs and is likely just a way toavoid regulatory scrutiny. There is more detail on DAOs later.
-

		- ### Centralisation of the money over time
			- In a medium term future it’s possible to imagine a smart enough autonomous AI or ML actor managing to accrue Bitcoin through fast and smart ‘decisions’. This could unreasonably centralise the asset, and it would be impossible to claw this situation back. These constructs would last for the lifetime of the chain unless constrained by timelock multisigs for instance.

	- #### Peerswap
		- It may be possible to use “Peerswap” to execute rebalancing andsubmarine swaps into and out of Liquid assets on the sidechain in asingle tx. This is anunder explored area at this time.

- # Tips for now
  You should be using [Perplexity.ai](https://perplexity.ai) which gives references. That's basically 90% of what you need to know right now.
  
  My custom tooling looks like this, I hope to open it up to you all over time:

- # Central Banks
	- Central banks were established to be lenders of last resort, providing liquidity to commercial banks during financial crises to prevent bank runs and systemic crises. This remains a core function.
	- Over time, many central banks have expanded their role as lender of last resort beyond just commercial banks to also support non-bank financial entities that face liquidity shortages in crises. Central banks have effectively become backstops for the broader financial system.
	- While politically independent, central banks face pressure from politicians and the public. They have mandates like inflation targeting, financial stability, employment, etc. that shape policy.
	- Central bank policies like QE and low rates for long periods are criticized for enabling fiscal deficits and debt levels to rise and inflating asset bubbles. But also defended as supporting growth.
	- Extraordinary central bank actions during crises like COVID-19 have fueled high inflation worldwide. They face challenges normalizing policy and credibility issues.
	- As lenders of last resort with balance sheet expansion power, central banks have uniquely influential roles in national and global finance. Their policies have major economic and political impacts.

	- #### Classic use cases
		  language AI can transcribe and analyse spoken conversations, providing
		  real-time translations or summaries, while visual generative ML can
		  create visual aids or dynamically update shared documents. This may
		  especially be useful in complex multinational legal and/or negotiation
		  applications, though very clearly the risks of using assisting ML
		  tooling increases.

	- ## Generic Business Efficiency and Productivity Predictions
	  id:: 659a9246-c630-4781-84cd-a252ae2ce9c7
		- Generative AI enhancing business productivity and efficiency through domain-specific models, optimizing workflows, and integrating multimodal applications.
		  background-color:: yellow
		- Advantage for employees who intersect with AI tooling, increasing engagement and productivity... but for the benefit of whom [[Social contract and jobs]]
		  background-color:: pink
		- Most time benefit from things "close to the metal" such as Dev Ops, coding, macros, light financial work, etc. Thing someone "looked up" then did.
		  background-color:: green
		- Predictive analytics and strategic insights transforming decision-making processes (white collar jobs).
		  background-color:: pink
		- Business to business mixed reality. I have been doing this since 1997. It's always going to be big "SOON", but the signs are improving and I can't discount it as easily this time.
		  background-color:: pink
		- Concentrate on the lowest hanging fruit, most people are not using this, you'll get huge advantage. Protect your data, let the market develop. If you have a clear business case then do get a consultant and legal advice (£1000/hr). Make a risk matrix, use my GPT if you like.
		  background-color:: red

						- ### Value Translation
							- Facilitating real-time exchange of currencies and assets across instances.

- # Tips for now
  You should be using [Perplexity.ai](https://perplexity.ai) which gives references. That's basically 90% of what you need to know right now.
  
  My custom tooling looks like this, I hope to open it up to you all over time:

- # Mess
  ![1713028555251.jpg](assets/1713028555251_1713029092792_0.jpg){:height 2309, :width 999}
		- Khanmigo can act as a teaching assistant, helping teachers with grading, progress reports, lesson plans. This saves teachers time on repetitive tasks.
		  
			- Provides a holistic student profile to teachers over time.
			- Expand beyond just Khan Academy content to be an always-available guide and companion for learning anything.
			  
			  [Class Companion Puts AI To Work Helping Teachers Help Students (forbes.com)](https://www.forbes.com/sites/rayravaglia/2025/10/05/class-companion-puts-ai-to-work-helping-teachers-help-students/)
		- By challenging decision biases and encouraging diverse perspectives, AI acts as a catalyst for developing critical thinking skills.

		- ### Scalability and Performance
		- Key features of USD include:
		- Hierarchical scene composition
		- Layered overrides and customization
		- Variant selection: Specifying which variant from each variant set should be active at any given time
		- Variant authoring: Creating and modifying variants using USD editing tools or supported 3D software applications
		- USD import and export: Blender can read and write USD files, enabling seamless exchange of 3D data with other USD-compatible applications

	- ## Global currency interactions
		- The legacy moniker “third world” came from a division of the world along economic lines.[[tomlinson2003third]] At the time this was the petrodollar / neo-institutional hegemony,[[caballero2008financial; @spiro2019hidden]] vs the economic superpower of the soviet block, and then ‘the rest’; unaligned economic powers.

- #### The Need for Modular Open-Source Solutions
	- Developing a topologically flat, inclusive, permissionless, federated, and open Metaverse is essential to address these challenges. By using open-source AI tooling and large language models, it is possible to improve creativity, safeguarding, and governance, while breaking down language barriers and accessibility challenges. Implementing secure, trusted, and task-appropriate solutions can promote collaboration and innovation across various industries.
		- evergreen telecollaboration around technical issues
		- exchange of good, services, money within systems, without friction
		  global ledger could unite isolated digital ecosystems and enable the
		  transfer of portable ‘goods’ across digital society. An open-source
		  Metaverse should emphasize the development and adoption of open
		  protocols and data formats. The Nostr protocol, for instance, might link
		  and federate mixed reality spaces, providing identity assurances and
		  mediating data synchronization while maintaining reasonably strong
		  would accomplish this by drawing on their ‘home’ GPU/TPU processors
		  where appropriate, or else using distributed large language model (LLM)
		  processing to accomplish tasks assigned by their instructors. They can
		  interact with the ‘web2’ world using open-source software called
		  auto-gpt and have constraints, such as “time to live” and limited access
		  to funds through their Bitcoin Lightning wallets.
		- Resource Management: These AI agents have access to dedicated LLM resources within their home instances in the federated virtual social spaces. If such resources are unavailable, they can resort to using slower, distributed open-source LLMs like Horde. This flexibility ensures that the agents can continue to function and complete tasks even if faced with limited LLM interpretive resources.
		- Financial Autonomy: The AI agents have their own private Bitcoin and Lightning wallets, which enable them to manage and utilize funds independently. They can use these funds to pay for services, acquire resources, or even trade with other agents or users within the virtual social spaces.
		- Interaction with Web2: By using open-source software like auto-gpt, the AI agents can interact with the web2 world, which includes browsing websites, retrieving information, and communicating with web services. This allows them to gather data, analyze trends, and perform other tasks that may require access to the broader internet.
		- Task Execution: The AI agents can be assigned tasks by their instructors (or a hierarchy of AI actors), such as data analysis, research, content creation, or other complex tasks that require LLM processing. They can use their dedicated LLM resources or distributed LLMs like Horde to process and analyze large datasets, generate insights, and produce desired outputs, up to and including those which require finance systems. This would be bridged in the first instance using Bitrefil gift card infrastructure.
		- Social Interactions: Within the federated virtual social spaces, AI agents can communicate and collaborate with other agents or human users. They can participate in discussions, provide assistance, or even learn from the interactions, thereby improving their capabilities over time. Language translation, governance, and safeguarding could also be developed. Safeguarding would be handled by threshold risk triggers and transmission of data in a sovereign way to all parties, allowing external action by authorities appropriate to any abuse.
		- Time-to-Live Constraint: The AI agents have a predetermined “time to live”, which means they exist for a specific duration before expiring. This constraint ensures that agents do not consume resources indefinitely and allows for the creation of new agents with updated capabilities. Any agents which deplete their financial resource would also expire.
		- Adaptive Learning: As AI agents interact with their environment, other agents, and users, they can learn and adapt their behaviour. This enables them to improve their performance, better understand their assigned tasks, and become more effective at achieving their goals.

- ## **Agentic Systems: The Next Generation of AI**
  
  Agentic AI represents a significant advancement in AI technology. Unlike traditional AI systems that rely on predefined rules, agentic systems are more autonomous and capable of decision-making 7. They can perceive their environment, adapt to changes, and make decisions to achieve specific goals 8. This allows for more personalized, efficient, and dynamic customer interactions. The ability of agentic AI to adapt in real-time allows for more dynamic and personalized customer interactions, leading to increased satisfaction and improved problem resolution 7.
  
  | Cognigy | Conversational AI | Automates customer support processes, streamlines communication, integrates with existing systems. |
  | Freshdesk | Conversational AI | Offers Freddy AI, automates customer service through chat and email, suggests new ticket fields for efficient routing. |
  | Google Contact Center AI | Conversational AI | Suite of tools including virtual agents, agent assist, and a platform for building conversational interfaces. |
  | Balto | Agent Assist | Real-time call guidance and coaching, AI-powered recommendations, performance tracking. |
  | Convin.ai | Agent Assist | Real-time conversation intelligence, agent coaching, performance analytics. |

- ## Computers breeding humans
	- It's indesputible that dating app algorithms have been "matchmaking" humans against numerical criteria for a long time. It's possible there's are third generation "matched" users of the apps now, since computers were first [applied to this in 1964](https://www.datingadvice.com/online-dating/history-of-online-dating).
		- "Cofounder of the RIZZ app here. We got inspired to build RIZZ a while back when we noticed the sheer volume of people asking for dating conversational help in the Tinder subreddit. Tons of people, both guys and girls, struggle with online dating. In fact, the statistics show that most are not successful with it. So how can they improve? Many go on Reddit asking for help. Or asking their friends for advice. Most simply can’t afford a dating coach. I believe AI can level the playing field, enabling people to enhance their flirting skills and boost confidence when interacting with new people. We launched just over a year ago and have learned so much up to this point. We still have so much to do to make our vision a reality."
	- It seems not it'll be bots talking to bots, under the guidance of algos, leading to dystopian babies.

- ### [[Unreal]] & Virtual Production
- Matthew Ball is an [expert on Metaverse](https://www.matthewball.vc/).He explained his vision and concerns with regard to metaverse in an[adaptation of hisbook](https://time.com/6197849/metaverse-future-matthew-ball/)[[ball2020metaverse]]featured on Time Magazine (Figure<a href="#fig:time" data-reference-type="ref" data-reference="fig:time">7.5</a>).
  ![]./assets/e35c9e5d7580ee3fd48bd0ac43cc26026e379cd6.png
  Time magazine Metaverse Cover 2025
- He [talks about Epic’s Unrealengine](https://www.matthewball.vc/all/epicprimer1) and identifies whathe calls the Epic Flywheel for games manufacture seen in Figure<a href="#fig:epicflywheel" data-reference-type="ref" data-reference="fig:epicflywheel">7.6</a>.
  ![]./assets/354b361cffb9d11b9e425cb2d1307ed933b808d5.jpg
  Epic games flywheel by Matthew Ball
- Epic is a behemoth and has made better business development decisions,and have a better technology than their main competitor Unity3D. Unitydidn’t make the cut for this book, though their technology is great.Their recent merger with a [malwaremanufacturer](https://www.pcgamer.com/unity-is-merging-with-a-company-who-made-a-malware-installer/)and a history of poor data privacy have removed them from considerationat this time.
- ICVFX (in camera virtual effects) or “Volume shooting” is theapplication of large, bright LED walls to film and TV production. Morebroadly than this Virtual Production is a suite of real-timetechnologies that weaves through pre and post production to acceleratecreativity, and reduce costs. These are collaborative, and oftendistributed tasks:
-
	- Set ideation and design
-
	- Dry runs with actors to plan shots in mixed reality
-
	- Virtual set design and storyboarding in full VR
-
	- Lighting design
-
	- Shot camera track design (movement, focus, lens choices etc)
	  ![]./assets/ce7288a4d695eb0437e09074d5aae06823e7b339.jpg
	  John O’Hare (author) with a virtual production robot.

- ##### AI Integration
	- AI can be integrated to steer personalized narratives and experiences subtly in the background or provide interactive moments. The AI backend can use game engines like Unreal Engine or Unity to render personalized content dynamically, allowing for real-time adaptation to the viewer’s reactions.

- ## What's changing
	- There may now be an inflection point in the organisational topology of the internet, because of trust abuses and [[Digital Society Harms]] perpetuated by the incumbent providers like [[Facebook Meta]] and [Google](https://archive.ph/AVRL9). This moment has been calling itself Web3, but the moniker is fraught with problems, and somewhat meaningless. The drivers are real.
	- `The Metaverse' is coming, in some form, at some point. Everyone is positioning in case it's "soon". It's not at all clear what it is, or if people want it, but the best of the emergent narrative looks like the older field of "digital society" and that obviously should not be dismissed lightly.
		- Large scale `social' & immersive metaverse is suffering poor adoption, failing as it has in the past. It's likely that the market need has been overstated. More advanced and popular (closed) games based solutions do not serve societal or business needs.
		- AI / ML will soon act as an accelerant to this, but the timing is still unclear, and likely still years away.
		- The closest contenders at this time are Roblox for social and play, VRChat for more serious users, and Nvidia Omniverse for high end business to business metaverse.
		- From a business perspective metaverse is the worst of the remote collaboration tool-kits, and undermines flow, productivity, and interpersonal trust. Metaverse is probably technology for technologies sake at this time, but the investment is real.
	- Social media may be changing slightly, with less focus on old platforms like Facebook and Twitter, more on high intensity media shorts like TikTok, and a separate movement toward more decentralised platforms like Mastadon, Bluesky, Nostr etc. This is potentially a bifurcation.

- ## Knowledge Graph Construction and Real-Time Updates

- ### Session 1
	- How to use my knowledge and tools, in your own time at your own pace, if you want.
	- About AI. Myth busting.
	- [The Shadow Of The Shape Of The Thing](https://www.oneusefulthing.org/p/the-shape-of-the-shadow-of-the-thing) – defining the problems of AI in educative settings.
	- Feedback and questions.

- ## Computers breeding humans
	- It's indesputible that dating app algorithms have been "matchmaking" humans against numerical criteria for a long time. It's possible there's are third generation "matched" users of the apps now, since computers were first [applied to this in 1964](https://www.datingadvice.com/online-dating/history-of-online-dating).
		- "Cofounder of the RIZZ app here. We got inspired to build RIZZ a while back when we noticed the sheer volume of people asking for dating conversational help in the Tinder subreddit. Tons of people, both guys and girls, struggle with online dating. In fact, the statistics show that most are not successful with it. So how can they improve? Many go on Reddit asking for help. Or asking their friends for advice. Most simply can’t afford a dating coach. I believe AI can level the playing field, enabling people to enhance their flirting skills and boost confidence when interacting with new people. We launched just over a year ago and have learned so much up to this point. We still have so much to do to make our vision a reality."
	- It seems not it'll be bots talking to bots, under the guidance of algos, leading to dystopian babies.

- ## **Agentic Systems: The Next Generation of AI**
  
  Agentic AI represents a significant advancement in AI technology. Unlike traditional AI systems that rely on predefined rules, agentic systems are more autonomous and capable of decision-making 7. They can perceive their environment, adapt to changes, and make decisions to achieve specific goals 8. This allows for more personalized, efficient, and dynamic customer interactions. The ability of agentic AI to adapt in real-time allows for more dynamic and personalized customer interactions, leading to increased satisfaction and improved problem resolution 7.
  
  Agentic AI differs from generative AI, which focuses on creating content like text and code. Agentic AI, on the other hand, is designed to perform actions and make decisions based on real-time data and pre-set goals 7. For example, an agentic system can monitor customer interactions, identify dissatisfaction, and automatically escalate the issue to a supervisor or offer a refund without human intervention 7.
  
  One of the key advantages of agentic AI is its ability to provide a cohesive customer view across a range of channels 9. By integrating data from various sources, such as previous calls, emails, and social media interactions, agentic AI can offer a complete picture of the customer's journey. This enables a consistent and personalized experience, regardless of the channel the customer chooses to interact with the company 9.

- #### Mutiny web wallet
- Mutiny Wallet, a new self-custodial lightning wallet, has launched inopen beta. It is web-based so requires no app download. Key featuresinclude just-in-time channels via Voltage, separating on-chain andLightning balances, encrypted remote backups, and Nostr walletconnections for social tips and subscriptions.
- Mutiny aims to make lightning accessible to the billions of internetusers worldwide and provide features not possible on most custodialwallets due to app store restrictions. It is our chosen user wallet forour design.

- ### [[Unreal]] & Virtual Production
- Matthew Ball is an [expert on Metaverse](https://www.matthewball.vc/).He explained his vision and concerns with regard to metaverse in an[adaptation of hisbook](https://time.com/6197849/metaverse-future-matthew-ball/)[[ball2020metaverse]]featured on Time Magazine (Figure<a href="#fig:time" data-reference-type="ref" data-reference="fig:time">7.5</a>).
  ![]./assets/e35c9e5d7580ee3fd48bd0ac43cc26026e379cd6.png
  Time magazine Metaverse Cover 2025
- He [talks about Epic’s Unrealengine](https://www.matthewball.vc/all/epicprimer1) and identifies whathe calls the Epic Flywheel for games manufacture seen in Figure<a href="#fig:epicflywheel" data-reference-type="ref" data-reference="fig:epicflywheel">7.6</a>.
  ![]./assets/354b361cffb9d11b9e425cb2d1307ed933b808d5.jpg
  Epic games flywheel by Matthew Ball
- Epic is a behemoth and has made better business development decisions,and have a better technology than their main competitor Unity3D. Unitydidn’t make the cut for this book, though their technology is great.Their recent merger with a [malwaremanufacturer](https://www.pcgamer.com/unity-is-merging-with-a-company-who-made-a-malware-installer/)and a history of poor data privacy have removed them from considerationat this time.
- ICVFX (in camera virtual effects) or “Volume shooting” is theapplication of large, bright LED walls to film and TV production. Morebroadly than this Virtual Production is a suite of real-timetechnologies that weaves through pre and post production to acceleratecreativity, and reduce costs. These are collaborative, and oftendistributed tasks:
-
	- Set ideation and design
-
	- Dry runs with actors to plan shots in mixed reality
-
	- Virtual set design and storyboarding in full VR
-
	- Lighting design
-
	- Shot camera track design (movement, focus, lens choices etc)
	  ![]./assets/ce7288a4d695eb0437e09074d5aae06823e7b339.jpg
	  John O’Hare (author) with a virtual production robot.

- ##### AI Integration
	- AI can be integrated to steer personalized narratives and experiences subtly in the background or provide interactive moments. The AI backend can use game engines like Unreal Engine or Unity to render personalized content dynamically, allowing for real-time adaptation to the viewer’s reactions.

- ## What's changing
	- There may now be an inflection point in the organisational topology of the internet, because of trust abuses and [[Digital Society Harms]] perpetuated by the incumbent providers like [[Facebook Meta]] and [Google](https://archive.ph/AVRL9). This moment has been calling itself Web3, but the moniker is fraught with problems, and somewhat meaningless. The drivers are real.
	- `The Metaverse' is coming, in some form, at some point. Everyone is positioning in case it's "soon". It's not at all clear what it is, or if people want it, but the best of the emergent narrative looks like the older field of "digital society" and that obviously should not be dismissed lightly.
		- Large scale `social' & immersive metaverse is suffering poor adoption, failing as it has in the past. It's likely that the market need has been overstated. More advanced and popular (closed) games based solutions do not serve societal or business needs.
		- AI / ML will soon act as an accelerant to this, but the timing is still unclear, and likely still years away.
		- The closest contenders at this time are Roblox for social and play, VRChat for more serious users, and Nvidia Omniverse for high end business to business metaverse.
		- From a business perspective metaverse is the worst of the remote collaboration tool-kits, and undermines flow, productivity, and interpersonal trust. Metaverse is probably technology for technologies sake at this time, but the investment is real.
	- Social media may be changing slightly, with less focus on old platforms like Facebook and Twitter, more on high intensity media shorts like TikTok, and a separate movement toward more decentralised platforms like Mastadon, Bluesky, Nostr etc. This is potentially a bifurcation.

- ## Knowledge Graph Construction and Real-Time Updates

- ### Session 1
	- How to use my knowledge and tools, in your own time at your own pace, if you want.
	- About AI. Myth busting.
	- [The Shadow Of The Shape Of The Thing](https://www.oneusefulthing.org/p/the-shape-of-the-shadow-of-the-thing) – defining the problems of AI in educative settings.
	- Feedback and questions.

- ## Computers breeding humans
	- It's indesputible that dating app algorithms have been "matchmaking" humans against numerical criteria for a long time. It's possible there's are third generation "matched" users of the apps now, since computers were first [applied to this in 1964](https://www.datingadvice.com/online-dating/history-of-online-dating).
		- "Cofounder of the RIZZ app here. We got inspired to build RIZZ a while back when we noticed the sheer volume of people asking for dating conversational help in the Tinder subreddit. Tons of people, both guys and girls, struggle with online dating. In fact, the statistics show that most are not successful with it. So how can they improve? Many go on Reddit asking for help. Or asking their friends for advice. Most simply can’t afford a dating coach. I believe AI can level the playing field, enabling people to enhance their flirting skills and boost confidence when interacting with new people. We launched just over a year ago and have learned so much up to this point. We still have so much to do to make our vision a reality."
	- It seems not it'll be bots talking to bots, under the guidance of algos, leading to dystopian babies.

- ## **Agentic Systems: The Next Generation of AI**
  
  Agentic AI represents a significant advancement in AI technology. Unlike traditional AI systems that rely on predefined rules, agentic systems are more autonomous and capable of decision-making 7. They can perceive their environment, adapt to changes, and make decisions to achieve specific goals 8. This allows for more personalized, efficient, and dynamic customer interactions. The ability of agentic AI to adapt in real-time allows for more dynamic and personalized customer interactions, leading to increased satisfaction and improved problem resolution 7.
  
  Agentic AI differs from generative AI, which focuses on creating content like text and code. Agentic AI, on the other hand, is designed to perform actions and make decisions based on real-time data and pre-set goals 7. For example, an agentic system can monitor customer interactions, identify dissatisfaction, and automatically escalate the issue to a supervisor or offer a refund without human intervention 7.
  
  One of the key advantages of agentic AI is its ability to provide a cohesive customer view across a range of channels 9. By integrating data from various sources, such as previous calls, emails, and social media interactions, agentic AI can offer a complete picture of the customer's journey. This enables a consistent and personalized experience, regardless of the channel the customer chooses to interact with the company 9.

- #### Mutiny web wallet
- Mutiny Wallet, a new self-custodial lightning wallet, has launched inopen beta. It is web-based so requires no app download. Key featuresinclude just-in-time channels via Voltage, separating on-chain andLightning balances, encrypted remote backups, and Nostr walletconnections for social tips and subscriptions.
- Mutiny aims to make lightning accessible to the billions of internetusers worldwide and provide features not possible on most custodialwallets due to app store restrictions. It is our chosen user wallet forour design.


## Academic Context

- Brief contextual overview
  - Block time is a foundational concept in blockchain technology, describing the average interval required for a new block to be generated and appended to the chain
  - The metric directly influences transaction confirmation speed, network throughput, and overall user experience
  - Key developments and current state
    - Block time is dynamically managed in most major protocols, with consensus algorithms adjusting mining difficulty to maintain target intervals
    - The trade-off between speed and security remains a central research theme, with shorter block times increasing throughput but potentially raising the risk of forks
  - Academic foundations
    - The concept is rooted in distributed systems theory, with early work by Nakamoto (2008) establishing the proof-of-work model and its relationship to block time
    - Subsequent research has explored alternative consensus mechanisms, including proof-of-stake and sharding, which offer new approaches to block time optimisation

## Current Landscape (2025)

- Industry adoption and implementations
  - Notable organisations and platforms
    - Bitcoin maintains a block time of approximately 10 minutes, serving as a benchmark for security and stability
    - Ethereum, having transitioned to proof-of-stake, now targets a block time of 12 seconds, balancing speed and decentralisation
    - Other platforms, such as Solana and Cardano, have adopted varying block times to suit their specific use cases
  - UK and North England examples where relevant
    - UK-based blockchain firms, including those in Manchester and Leeds, are leveraging shorter block times for applications in supply chain and financial services
    - Newcastle and Sheffield have seen growth in blockchain startups focusing on real-time transaction processing, benefiting from faster block times
- Technical capabilities and limitations
  - Shorter block times enable quicker transaction confirmations, enhancing user experience
  - However, they can increase the likelihood of network forks and require more sophisticated consensus mechanisms to maintain security
  - Standards and frameworks
    - Industry standards, such as those developed by the International Organization for Standardization (ISO), provide guidelines for block time management in blockchain systems

## Research & Literature

- Key academic papers and sources
  - Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. *Cryptographic ePrint Archive*. https://bitcoin.org/bitcoin.pdf
  - Buterin, V., & Griffith, V. (2017). Casper the Friendly Finality Gadget. *arXiv preprint arXiv:1710.09437*. https://arxiv.org/abs/1710.09437
  - Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. *Ethereum Project Yellow Paper*. https://ethereum.github.io/yellowpaper/paper.pdf
  - Ongoing research directions
    - Exploring the impact of block time on network scalability and security
    - Investigating the role of block time in cross-chain interoperability and multi-chain architectures


- Emerging trends and developments
  - Continued exploration of hybrid consensus mechanisms that balance speed and security
  - Increased focus on cross-chain interoperability and the role of block time in multi-chain architectures
- Anticipated challenges
  - Balancing the need for faster block times with the risk of increased network forks and security vulnerabilities
  - Ensuring that block time optimisation does not compromise the decentralisation and resilience of blockchain networks
- Research priorities
  - Investigating the impact of block time on user experience and network performance
  - Developing new consensus algorithms that can dynamically adjust block time based on network conditions

## References

1. Nakamoto, S. (2008). Bitcoin: A Peer-to-Peer Electronic Cash System. *Cryptographic ePrint Archive*. https://bitcoin.org/bitcoin.pdf
2. Buterin, V., & Griffith, V. (2017). Casper the Friendly Finality Gadget. *arXiv preprint arXiv:1710.09437*. https://arxiv.org/abs/1710.09437
3. Wood, G. (2014). Ethereum: A Secure Decentralised Generalised Transaction Ledger. *Ethereum Project Yellow Paper*. https://ethereum.github.io/yellowpaper/paper.pdf
4. International Organization for Standardization. (2025). ISO/TC 307 Blockchain and distributed ledger technologies. https://www.iso.org/committee/6733608.html
5. Alan Turing Institute. (2025). Blockchain and Distributed Ledger Technologies: Research and Innovation. https://www.turing.ac.uk/research/research-programmes/blockchain-and-distributed-ledger-technologies
6. University of Cambridge. (2025). Cambridge Centre for Alternative Finance. https://www.jbs.cam.ac.uk/faculty-research/centres/alternative-finance/


## Metadata


- **Migration Status**: Ontology block enriched on 2025-11-12
- **Last Updated**: 2025-11-12
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
