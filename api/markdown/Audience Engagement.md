public:: true

# Audience Engagement

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:audience-engagement",
  "@type": "Page",
  "title": "Audience Engagement",
  "vc:slug": "audience-engagement",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:audience-engagement",
  "@type": "Class",
  "label": "Audience Engagement",
  "definition": "Audience engagement is the set of strategies and interactive mechanisms by which creators and platforms capture, sustain and deepen the attention and participation of viewers. It spans techniques such as live polls, question-and-answer sessions, gamification, reactions and personalised content, measured through metrics like watch time, interaction rate and retention. Strong audience engagement drives community growth, loyalty and monetisation across live and on-demand media.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:user-engagement",
      "label": "User Engagement"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:user-engagement",
        "label": "User Engagement"
      },
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:content-creation",
        "label": "Content Creation"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:content-creation",
        "label": "Content Creation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:live-polls-and-qanda",
        "label": "Live Polls and QandA"
      },
      {
        "@id": "urn:ngm:class:gamification",
        "label": "Gamification"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:live-streaming",
        "label": "Live Streaming"
      },
      {
        "@id": "urn:ngm:class:virtual-event",
        "label": "Virtual Event"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:user-engagement",
        "label": "User Engagement"
      },
      {
        "@id": "urn:ngm:class:content-distribution",
        "label": "Content Distribution"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:content-creation",
        "label": "Content Creation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:creator-economy",
        "label": "Creator Economy"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:gamification",
        "label": "Gamification"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Audience Engagement]] sustains viewer participation through tools such as [[Live Polls and QandA]] and [[Gamification]], a facet of [[User Engagement]] central to [[Content Creation]] and [[Live Streaming]].
- ### Overview
  - Captures and sustains viewer attention and participation.
  - Uses interactive mechanisms such as polls, Q&A and reactions.
  - Measured by watch time, interaction rate and retention.
- ### Key aspects
  - Real-time interactivity and live feedback loops.
  - Gamification, rewards and participation incentives.
  - Personalisation and community-building features.
  - Engagement analytics and retention measurement.
- ### Applications
  - Live streaming and virtual events.
  - Online courses and educational platforms.
  - Brand and marketing campaigns.
  - Creator monetisation and community growth.
- ### Relationships
  - enables:: [[User Engagement]]
  - enables:: [[Creator Economy]]
  - requires:: [[Content Creation]]
  - partOf:: [[Content Creation]]
  - uses:: [[Live Polls and QandA]]
  - uses:: [[Gamification]]
  - supports:: [[Live Streaming]]
  - supports:: [[Virtual Event]]
  - relatedTo:: [[User Engagement]]
  - relatedTo:: [[Content Distribution]]
  - dependsOn:: [[Content Creation]]
  - bridgesTo:: [[Creator Economy]]
  - implements:: [[Gamification]]
- ### Provenance
  - updated:: 2026-06-15
