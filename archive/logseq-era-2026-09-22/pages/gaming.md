public:: true

# gaming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df0e67b478dd30079cb4337ddb51d25164423d2799aaa86292aeef9876aea201",
  "@type": "Page",
  "vc:slug": "gaming",
  "title": "gaming",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:game-engine",
      "vc:label": "Game Engine"
    },
    {
      "@id": "urn:visionflow:linked:game-fi",
      "vc:label": "GameFi"
    },
    {
      "@id": "urn:visionflow:linked:virtual-world",
      "vc:label": "Virtual World"
    },
    {
      "@id": "urn:visionflow:linked:game-development",
      "vc:label": "Game Development"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-video-game",
      "vc:label": "https://en.wikipedia.org/wiki/Video_game"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-video-game-industry",
      "vc:label": "https://en.wikipedia.org/wiki/Video_game_industry"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "gaming"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:gaming",
  "@type": "Class",
  "label": "gaming",
  "definition": "Gaming is the activity of playing electronic games and the industry that produces them. It spans hardware, software, online services, and competitive play.",
  "domain": "metaverse",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:game-development",
      "label": "Game Development"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:game-engine",
        "label": "Game Engine"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:game-fi",
        "label": "GameFi"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:gaming:8517b64a7dfa",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df0e67b478dd30079cb4337ddb51d25164423d2799aaa86292aeef9876aea201"
  },
  "vc:resolutions": [
    {
      "raw": "[[Game Engine]]",
      "resolved": "urn:visionflow:linked:game-engine",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[GameFi]]",
      "resolved": "urn:visionflow:linked:game-fi",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual World]]",
      "resolved": "urn:visionflow:linked:virtual-world",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Game Development]]",
      "resolved": "urn:visionflow:linked:game-development",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Video_game]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-video-game",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/Video_game_industry]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-video-game-industry",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Gaming is the activity of playing electronic games and the industry that produces them. It spans hardware, software, online services, and competitive play.

- ### Semantic Classification
  - owl-class:: general:gaming
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Game Development]]
  - bridges-to:: [[Virtual World]]
  - requires:: [[Game Engine]]
  - enables:: [[GameFi]]

- ### Content
  - Gaming covers the design, production, and play of video games across consoles, computers, and mobile devices. The industry includes studios that build games, platforms that distribute them, and services that support online play.
  - Games range from single-player experiences to large multiplayer worlds and competitive esports. Gaming technology also feeds into adjacent areas such as simulation, virtual worlds, and blockchain-based game economies.

- ### Provenance
  - sources:: [[https://en.wikipedia.org/wiki/Video_game]], [[https://en.wikipedia.org/wiki/Video_game_industry]]
  - migration-date:: 2026-05-29T00:00:00Z
