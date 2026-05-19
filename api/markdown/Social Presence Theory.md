public:: true

# Social Presence Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:00ed14d4080896336bce6123a0bb81ed17b13f7ef28b61993a4f041afe9bc1ba",
  "@type": "Page",
  "vc:slug": "social-presence-theory",
  "title": "Social Presence Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nonverbal-communication",
      "vc:label": "NonverbalCommunication"
    },
    {
      "@id": "urn:visionflow:linked:tele-002-telecollaboration",
      "vc:label": "TELE-002-telecollaboration"
    },
    {
      "@id": "urn:visionflow:linked:tele-004-media-richness-theory",
      "vc:label": "TELE-004-media-richness-theory"
    },
    {
      "@id": "urn:visionflow:linked:tele-006-presence",
      "vc:label": "TELE-006-presence"
    },
    {
      "@id": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "vc:label": "TELE-020-virtual-reality-telepresence"
    },
    {
      "@id": "urn:visionflow:linked:tele-100-ai-avatars",
      "vc:label": "TELE-100-ai-avatars"
    },
    {
      "@id": "urn:visionflow:linked:tele-110-spatial-audio-processing",
      "vc:label": "TELE-110-spatial-audio-processing"
    },
    {
      "@id": "urn:visionflow:linked:tele-115-gaze-tracking",
      "vc:label": "TELE-115-gaze-tracking"
    },
    {
      "@id": "urn:visionflow:owl:class:communication-theory",
      "vc:label": "CommunicationTheory"
    },
    {
      "@id": "urn:visionflow:owl:class:tele-001-telepresence",
      "vc:label": "TELE-001-telepresence"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0190"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Presence Theory"
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
  "@id": "urn:ngm:class:social-presence-theory",
  "@type": "Class",
  "label": "Social Presence Theory",
  "definition": "\"A theoretical framework explaining how communication media vary in their capacity to convey social cues (facial expressions, vocal intonation, body language, interpersonal warmth), thereby influencing the degree to which communicators perceive each other as psychologically present, real, and eng...",
  "domain": "distributed-collaboration",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nonverbal-communication",
        "label": "NonverbalCommunication"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:tele-002-telecollaboration",
        "label": "TELE-002-telecollaboration"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:social-presence-theory:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:00ed14d4080896336bce6123a0bb81ed17b13f7ef28b61993a4f041afe9bc1ba"
  },
  "vc:resolutions": [
    {
      "raw": "[[NonverbalCommunication]]",
      "resolved": "urn:visionflow:linked:nonverbal-communication",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-002-telecollaboration]]",
      "resolved": "urn:visionflow:linked:tele-002-telecollaboration",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-004-media-richness-theory]]",
      "resolved": "urn:visionflow:linked:tele-004-media-richness-theory",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-006-presence]]",
      "resolved": "urn:visionflow:linked:tele-006-presence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-020-virtual-reality-telepresence]]",
      "resolved": "urn:visionflow:linked:tele-020-virtual-reality-telepresence",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-100-ai-avatars]]",
      "resolved": "urn:visionflow:linked:tele-100-ai-avatars",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-110-spatial-audio-processing]]",
      "resolved": "urn:visionflow:linked:tele-110-spatial-audio-processing",
      "kind": "StubLink"
    },
    {
      "raw": "[[TELE-115-gaze-tracking]]",
      "resolved": "urn:visionflow:linked:tele-115-gaze-tracking",
      "kind": "StubLink"
    },
    {
      "raw": "[[CommunicationTheory]]",
      "resolved": "urn:visionflow:owl:class:communication-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TELE-001-telepresence]]",
      "resolved": "urn:visionflow:owl:class:tele-001-telepresence",
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
  - "A theoretical framework explaining how communication media vary in their capacity to convey social cues (facial expressions, vocal intonation, body language, interpersonal warmth), thereby influencing the degree to which communicators perceive each other as psychologically present, real, and engaged in interpersonal exchange."

- ### Semantic Classification
  - owl-class:: distributed-collaboration:SocialPresenceTheory
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[CommunicationTheory]]
  - requires:: [[NonverbalCommunication]]
  - enables:: [[TELE-002-telecollaboration]]

- ### Content

  ## Definition

  **Social Presence Theory** (SPT), formulated by Short, Williams, and Christie (1976), posits that communication media differ in their ability to transmit social cues that convey interpersonal warmth, intimacy, and psychological proximity. The theory emerged from research on telecommunications systems and has become foundational to understanding how technology-mediated communication affects collaboration, trust, and relationship formation.

  The core proposition is that **social presence** — the degree to which a communication partner is perceived as "real" and "there" — depends on the medium's capacity to convey verbal and nonverbal signals including facial expressions, eye gaze, posture, vocal inflection, and turn-taking cues. Higher social presence media (e.g., video, VR) enable richer interpersonal exchange than lower presence media (e.g., email, text chat), influencing communication effectiveness, persuasiveness, and social attraction.

  SPT predicts that tasks requiring socio-emotional communication (relationship building, conflict resolution, creative brainstorming) benefit from high-presence media, whilst information transfer tasks can tolerate low-presence channels. This has profound implications for [[TELE-002-telecollaboration]] system design: immersive telepresence platforms ([[TELE-020-virtual-reality-telepresence]]) maximise social presence through photorealistic avatars, spatial audio, and gesture tracking.

  #### Current Landscape
  Social Presence Theory remains highly relevant in 2025 as organisations navigate hybrid work and choose between communication platforms with vastly different presence capabilities.

  **Research Findings**:
  - VR meetings (Meta Horizon Workrooms) achieve 87% of face-to-face social presence (Microsoft Research, 2025)
  - AI avatars with facial animation increase perceived presence by 43% vs. static images (Stanford VR Lab)
  - Spatial audio positioning raises social presence scores 31% vs. mono audio (University of Manchester study)

  **UK Context**:
  British institutions leverage SPT principles in telepresence deployments:
  - NHS uses high-presence video consultation for mental health therapy
  - University of Leeds researches gaze-aware telepresence for education
  - Manchester-based startups develop emotion-aware collaboration tools

  ## Theoretical Framework

  ### Dimensions of Social Presence

  **Intimacy**: Psychological distance between communicators
  - Influenced by proximity, eye contact, smiling, personal disclosure
  - High in face-to-face, VR avatars; low in email, text

  **Immediacy**: Salience of the other person in the interaction
  - Conveyed through responsiveness, attentiveness, feedback
  - Enhanced by real-time video, spatial audio; reduced by asynchronous text

  **Co-Presence**: Shared sense of "being there together"
  - Created by shared virtual spaces, joint attention, mutual awareness
  - Core goal of [[TELE-001-telepresence]] systems

  ### Cue Availability

  SPT identifies cues that convey social presence:
  - **Visual**: Facial expressions, gestures, appearance, gaze direction
  - **Auditory**: Vocal tone, prosody, laughter, silence
  - **Spatial**: Proximity, orientation, interpersonal distance
  - **Temporal**: Turn-taking rhythm, response latency

  Modern telepresence systems replicate these cues:
  - [[TELE-100-ai-avatars]]: Photorealistic facial rendering
  - [[TELE-110-spatial-audio-processing]]: 3D voice positioning
  - [[TELE-115-gaze-tracking]]: Eye contact simulation

  #### Related Concepts
  - [[TELE-001-telepresence]]
  - [[TELE-004-media-richness-theory]]
  - [[TELE-006-presence]]
  - [[TELE-100-ai-avatars]]

  #### References
  1. Short, J., Williams, E., & Christie, B. (1976). *The Social Psychology of Telecommunications*. John Wiley & Sons.
  2. Biocca, F., Harms, C., & Burgoon, J. K. (2003). "Toward a More Robust Theory and Measure of Social Presence". *Presence*, 12(5), 456-480.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
