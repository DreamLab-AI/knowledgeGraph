public:: true

# Social Platform
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:806571c040f358693c3e6eba4fd7edbaed22502a5cb863822bfa447f63a22ea7",
  "@type": "Page",
  "vc:slug": "social-platform",
  "title": "Social Platform",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9142"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Platform"
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
  "@id": "urn:ngm:class:social-platform",
  "@type": "Class",
  "label": "Social Platform",
  "definition": "A Social Platform is a networked software environment that mediates human connection, identity expression, content sharing, and community formation. It combines identity management, real-time communication, moderation tooling, and reputation mechanisms to sustain persistent social graphs, supporting both synchronous interaction (voice, video) and asynchronous content exchange across devices.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:digital-identity", "label": "Digital Identity"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:virtual-community-platform", "label": "Virtual Community Platform"},
      {"@id": "urn:ngm:class:avatar", "label": "Avatar"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:content-moderation", "label": "Content Moderation"},
      {"@id": "urn:ngm:class:user-interface", "label": "User Interface"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:platform-governance", "label": "Platform Governance"},
      {"@id": "urn:ngm:class:social-network-graph", "label": "Social Network Graph"}
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
  "@id": "urn:visionflow:annotation:link-resolutions:social-platform:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:806571c040f358693c3e6eba4fd7edbaed22502a5cb863822bfa447f63a22ea7"
  },
  "vc:resolutions": [],
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
  - A Social Platform is a networked software environment that mediates human connection, identity expression, content sharing, and community formation. It combines identity management, real-time communication, moderation tooling, and reputation mechanisms to sustain persistent social graphs, supporting both synchronous interaction (voice, video) and asynchronous content exchange across devices.

- ### Semantic Classification
  - owl-class:: infrastructure:SocialPlatform
  - owl-role:: Concept

- ### Relationships
  - **requires** → [[Digital Identity]], [[Communication Protocol]]
  - **enables** → [[Virtual Community Platform]], [[Avatar]]
  - **uses** → [[Content Moderation]], [[User Interface]]
  - **supports** → [[Platform Governance]], [[Social Network Graph]]

- ### Content
  # SocialPlatform
  SocialPlatform facilitates human connection, communication, and community formation within virtual environments through features enabling identity expression, synchronous and asynchronous interaction, content sharing, and relationship management. Core functionalities include customizable avatars expressing identity and personality, spatial voice chat with proximity attenuation and directional audio creating natural conversation dynamics, text messaging supporting private conversations and public channels, friend systems managing social connections with presence indicators showing online status, activity feeds displaying user-generated content and platform events, and community tools including groups, guilds, and virtual venues hosting events. Modern social platforms integrate rich media sharing (photos, videos, 3D models), augmented reality filters enhancing self-expression, virtual economies enabling gifting and commerce, and content moderation tools combating harassment and inappropriate content through automated detection and human review. Platform design significantly influences social dynamics: open worlds encourage serendipitous encounters, instanced spaces provide privacy and control, asynchronous communication reduces coordination burden, and reputation systems surface quality content and trustworthy users. Successful platforms balance freedom of expression with safety, support diverse interaction styles accommodating introverts and extroverts, and implement onboarding flows helping newcomers establish social connections.
  - https://www.vrchat.com/ - VRChat social VR platform
  - https://www.roblox.com/ - Roblox user-generated gaming and social platform
  - https://www.meta.com/horizon-worlds/ - Meta Horizon Worlds social VR
  - https://www.recroom.com/ - Rec Room cross-platform social gaming

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
