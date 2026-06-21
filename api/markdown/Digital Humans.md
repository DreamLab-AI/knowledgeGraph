public:: true

# Digital Humans
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f524c69ac5bcfb66eaa14b382bc8860b96be604fd38b0c2c24240393554efeac",
  "@type": "Page",
  "vc:slug": "digital-humans",
  "title": "Digital Humans",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "ME-0009"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Humans"
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
  "@id": "urn:ngm:class:digital-humans",
  "@type": "Class",
  "label": "Digital Humans",
  "definition": "Digital humans are photorealistic, AI-driven virtual beings that replicate human appearance, movement, voice, and conversational behaviour, rendered in 3D and designed for real-time interaction within immersive and spatial computing environments. They integrate natural language processing, motion capture, generative AI, and real-time rendering to simulate lifelike presence, serving roles in customer service, education, healthcare, and entertainment. As an emerging category they represent the convergence of embodied AI with avatar systems and synthetic media.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.75,
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-platform-and-environment",
      "label": "Platform and Environment"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:real-time-rendering", "label": "Real-Time Rendering"},
      {"@id": "urn:ngm:class:motion-capture", "label": "Motion Capture"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:text-to-speech", "label": "Text-to-Speech"},
      {"@id": "urn:ngm:class:conversational-ai", "label": "Conversational AI"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:avatar-system", "label": "Avatar System"},
      {"@id": "urn:ngm:class:3-d-animation", "label": "3D Animation"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:synthetic-media", "label": "Synthetic Media"},
      {"@id": "urn:ngm:class:embodied-ai", "label": "Embodied AI"},
      {"@id": "urn:ngm:class:digital-avatar", "label": "Digital Avatar"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:immersive-technology", "label": "Immersive Technology"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-humans:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f524c69ac5bcfb66eaa14b382bc8860b96be604fd38b0c2c24240393554efeac"
  },
  "vc:resolutions": [
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
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
  - [Generated from Gartner emerging tech analysis]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalHumans
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - bridges-to:: [[DID Nostr Identity]]

- ### Content

  ## Overview

  - Digital Humans in the Context of Spatial & Immersive Technologies
  - Precise technical definition
    - A digital human is a photorealistic, AI-driven virtual being that replicates human appearance, movement, and conversational abilities, typically rendered in 3D and designed for interaction within immersive environments such as virtual reality (VR), augmented reality (AR), or mixed reality (MR).
    - These entities integrate advanced technologies including artificial intelligence, natural language processing, 3D modelling, and real-time rendering to simulate lifelike communication and presence.
  - Current state and implementations (2024–2025)
    - Digital humans are increasingly deployed in customer service, education, retail, and entertainment, often as virtual assistants, presenters, or brand ambassadors.
    - Leading platforms such as Synthesia and Unreal Engine’s MetaHuman Creator enable rapid creation and deployment of digital humans for both pre-rendered and real-time interactive experiences.
    - In immersive environments, digital humans are used for virtual events, training simulations, and interactive storytelling, with integration into metaverse platforms and spatial computing applications.
    - Real-time motion capture and AI-driven dialogue systems allow for dynamic, context-aware interactions, enhancing user engagement and personalisation.
  - UK context and examples, especially North England
    - The UK has seen growing adoption of digital humans in sectors such as retail, healthcare, and education, with several innovative projects based in the North of England.
    - For example, Manchester-based companies and universities have collaborated on immersive training modules using digital humans for healthcare professionals, leveraging VR and AR technologies.
    - Leeds and Newcastle have hosted virtual events and exhibitions featuring digital humans as guides and presenters, supporting remote participation and accessibility.
    - The Digital Catapult, with hubs in the North, has supported projects exploring digital humans in immersive storytelling and spatial computing applications.
  - Key research papers and sources with full citations
    - Synthesia. (2023). Digital Humans Are Here — & They're Changing Everything. Retrieved from https://www.synthesia.io/post/digital-humans
    - Aranca. (2025). Immersive Technology: Redefining Human Interaction with the Digital World. Retrieved from https://www.aranca.com/knowledge-library/articles/investment-research/immersive-technology-redefining-human-interaction-with-the-digital-world
    - Wikipedia. (2025). Virtual human. Retrieved from https://en.wikipedia.org/wiki/Virtual_human
    - Performit Live. (2025). Digital Humans in the Metaverse: What Does the Future Hold? Retrieved from https://performitlive.com/blog/digital-humans-metaverse-what-future-hold/
    - Ada Lovelace Institute. (2025). What are immersive technologies? Retrieved from https://www.adalovelaceinstitute.org/resource/immersive-technologies-explainer/
    - OCAVU. (2025). Immersive Technologies: Explaining AR, VR, XR, MR, and Spatial Computing. Retrieved from https://ocavu.com/blog/immersive-technologies-explaining-ar-vr-xr-mr-and-spatial-computing
    - InfoVision. (2025). The fascinating world of digital humans: from creation to real-world uses. Retrieved from https://www.infovision.com/blog/the-fascinating-world-of-digital-humans-from-creation-to-real-world-uses/
  - Future outlook
    - Digital humans are expected to become more sophisticated, with improved emotional intelligence, contextual awareness, and seamless integration into spatial and immersive environments.
    - Advances in AI, real-time rendering, and motion capture will enable more natural and engaging interactions, expanding their use in education, mental health support, and remote collaboration.
    - Ethical considerations, such as data privacy and the potential for deception, will become increasingly important as digital humans become more lifelike and pervasive.
    - The UK, particularly regions like the North, is poised to remain at the forefront of innovation in digital humans and immersive technologies, driven by academic research, industry collaboration, and government support.

  #### UK Context
  - British contributions and implementations
  - Research institutions and programmes
  - Industry adoption
  - North England innovation (where relevant)

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
