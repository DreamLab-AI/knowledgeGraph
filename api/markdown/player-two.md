- ### Definition
  - Player Two is a decentralised AI-character and collaborative storytelling platform combining Nostr-relay messaging, BIP85 key derivation, and generative AI workflows. It enables trustless group interactions with AI-driven waifu characters, token-gated access, and a robot project with on-device edge compute for the ED3N distributed network.

- ### Semantic Classification
  - owl-class:: infrastructure:PlayerTwo
  - owl-role:: Concept

- ### Relationships
  - hasPart: [[Player Two code]]
  - uses: [[AI Video]], [[Generative AI]]
  - enables: [[Player Tracking]], [[Identity Management]]
  - dependsOn: [[Decentralised Identity]], [[Cryptography]]

- ### Content
  - Planning for work on [[Neocadia]] and [[Player Two code]]
  - Near term planning
		- stand up a nostr relay
		- sync whitelist from publey hex list on the middleware
		- isolate the subset of users on the whitelist from the message pool in the relay
		- build a super dumb module for a form of the player2 client that confirms a message with the whitelist code on the relay
  - Medium term
		- Connect the nostr module in the fork to the interface proper, replacing the comms to the middleware server with the comms to the relay over the network as DMs
		- Leave the storage as it stands
		- Leave the middleware user management as it stands, see if the latancy is ok for message passing and retrieval
  - Longer term
		- Integrate nosdav for file storage and encryption
		- Figure out groups
		- Figure out media passing
		- Integrate token rails
  - decent competition [miku.gg | Generative Visual Novels](https://miku.gg/)
  - Style transfer workflow for [[ComfyUI]] [Comfy Workflows](https://comfyworkflows.com/workflows/4cd95372-4995-4740-8675-f228d4c24f41) [[AI Video]]
  - [Megumin (KonoSuba)
  - Megumin Arch Wizard Outfit | Stable Diffusion LoRA | Civitai](https://civitai.com/models/9502/megumin-konosuba)
  - # Demo
  - [Player Two](https://app.playertwo.ai/#/story/XV7eOWS6b8UrxIypZBYM/replay/4)
  - # Robot Project
  - I forgot you said email is best. So rq here it is:
		- Team
		- Michael: Vircadia (clients: Deutsche Telekom, University
		  Academy 92) and Player Two (Gen 1 Closed Alpha #1, Gen 2 10k+
		  users). Has USA and TT access.
		- Soul: Quant @ HSBC. German, Brazilian, and Russian access.
		  Biotech background.
		- Ken: Designs and develops custom SOTA batteries and weapons
		  R&D. Based in Thailand with Thai and UK access.
		- Biscuits: PhD @ University of Salford. CTO and specialist at
		  UK firms on XR and blockchain. Has UK access.
		- Setup
		- Workshop: Compound in Thailand (Ken's) or rented space in
		  Taiwan. Use 3D printers for production and prototyping.
		- Marketing: Aim to be the Raspberry Pi of humanoid
		  waifurobotics and replace StabilityAI with a stable open-source
		  model funding and development business model (Apache 2.0 / MIT).
		- Tokenomics
		- Initial sale: US$50k for a Player Two wAIfu bot preorder (25%
		  burned, 75% for extra capital).
		- Staked tokens count towards ED3N Network voting.
			- Early: Open-source everything, members vote on next items to
			  build and release, and can vote to issue new tokens for
			  treasury.
			- Later: Tokens burned for discounted compute on in-house
			  clusters or sold to other robot owners for training on their
			  clusters ("mining").
			- ED3N (Network) Solution
		- Problems: Regulation targeting compute, centralized compute in
		  datacenters, unreliable decentralized compute.
		- Solution: Known compute and validated software stack in each
		  Player Two's wAIfu (Robot), improving with each generation.
		- wAIfu's can accept $ED3N tokens to perform edge compute for
		  other devices globally, supporting a distributed network.
		- Notes
		- Sell US$10-20m tokens on Solana, need KYC inroads (investors
		  can handshake to vendors or we use public platform).
		- Incorporate non-US entity if needed (ideally DAO, secondarily
		  Middle East or Asia) to save on cost and legal.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z