schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#PlayerTwo
legacy_uri:: urn:visionclaw:concept:infrastructure:player-two
public:: true

# Player Two
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5f3c3997d3d61dfbf815da8315a6e4f7fcd817f1a68a66a4b3e6b797ecc4eea",
  "@type": "Page",
  "vc:slug": "player-two",
  "title": "Player Two",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:neocadia",
      "vc:label": "Neocadia"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-video",
      "vc:label": "AI Video"
    },
    {
      "@id": "urn:visionflow:owl:class:comfy-ui",
      "vc:label": "ComfyUI"
    },
    {
      "@id": "urn:visionflow:owl:class:player-two-code",
      "vc:label": "Player Two code"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-8b696a307f51"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#PlayerTwo"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Player Two"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:player-two"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:player-two"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b5f3c3997d3d61dfbf815da8315a6e4f7fcd817f1a68a66a4b3e6b797ecc4eea@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:player-two",
  "@type": "OntologyClass",
  "label": "Player Two",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:collaboration-platform",
      "vc:label": "Collaboration Platform"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:b5f3c3997d3d61dfbf815da8315a6e4f7fcd817f1a68a66a4b3e6b797ecc4eea"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b5f3c3997d3d61dfbf815da8315a6e4f7fcd817f1a68a66a4b3e6b797ecc4eea@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "PlayerTwo is a concept within the ngm domain.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:player-two:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b5f3c3997d3d61dfbf815da8315a6e4f7fcd817f1a68a66a4b3e6b797ecc4eea"
  },
  "vc:resolutions": [
    {
      "raw": "[[Neocadia]]",
      "resolved": "urn:visionflow:linked:neocadia",
      "kind": "StubLink"
    },
    {
      "raw": "[[AI Video]]",
      "resolved": "urn:visionflow:owl:class:ai-video",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ComfyUI]]",
      "resolved": "urn:visionflow:owl:class:comfy-ui",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Player Two code]]",
      "resolved": "urn:visionflow:owl:class:player-two-code",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b5f3c3997d3d61dfbf815da8315a6e4f7fcd817f1a68a66a4b3e6b797ecc4eea@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - PlayerTwo is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PlayerTwo
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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
