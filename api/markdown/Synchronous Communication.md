public:: true

# Synchronous Communication
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:synchronous-communication", "@type":"Page", "title":"Synchronous Communication", "vc:slug":"synchronous-communication", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:synchronous-communication",
  "@type": "Class",
  "label": "Synchronous Communication",
  "definition": "Synchronous communication is an interaction pattern in which participants exchange messages in real time, with sender and receiver engaged simultaneously and responses expected without significant delay. In collaboration it covers video conferencing, live chat and voice calls; in distributed systems it covers blocking request-response exchanges where a caller waits for a reply. It favours immediacy and tight coordination at the cost of requiring co-presence and tolerance to latency.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:real-time-communication",
      "label": "Real-Time Communication"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:video-conferencing",
        "label": "Video Conferencing"
      },
      {
        "@id": "urn:ngm:class:instant-messaging",
        "label": "Instant Messaging"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:real-time-communication",
        "label": "Real-Time Communication"
      },
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:asynchronous-communication",
        "label": "Asynchronous Communication"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:remote-procedure-call",
        "label": "Remote Procedure Call"
      },
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:communication-protocol",
        "label": "Communication Protocol"
      },
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:presence",
        "label": "Presence"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      },
      {
        "@id": "urn:ngm:class:telepresence",
        "label": "Telepresence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:collaboration",
        "label": "Collaboration"
      },
      {
        "@id": "urn:ngm:class:remote-collaboration",
        "label": "Remote Collaboration"
      },
      {
        "@id": "urn:ngm:class:web-rtc",
        "label": "WebRTC"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Synchronous communication is real-time interaction where participants are engaged simultaneously, a mode of [[Real-Time Communication]].
  - It includes [[Video Conferencing]] and [[Instant Messaging]] and underpins live [[Collaboration]].
  - It contrasts with [[Asynchronous Communication]], trading flexibility for immediacy.

- ### Overview
  - In synchronous exchange a participant sends a message and expects a near-immediate response, requiring all parties to be available at once.
  - In distributed systems the analogous pattern is a blocking [[Remote Procedure Call]] where the caller waits for the result.
  - The mode is sensitive to [[Latency]]; high delay degrades the experience and can make real-time coordination impractical.

- ### Key aspects
  - Co-presence: parties active at the same time.
  - Immediate feedback loops and tight turn-taking.
  - Sensitivity to latency and jitter in the transport.
  - Ephemerality unless the session is explicitly recorded.

- ### Applications
  - Live meetings via [[Video Conferencing]] and [[Telepresence]].
  - Real-time text exchange via [[Instant Messaging]].
  - Browser-based audio and video using [[WebRTC]].
  - Blocking service calls implemented over [[Remote Procedure Call]].

- ### Relationships
  - subClassOf:: [[Real-Time Communication]]
  - hasPart:: [[Video Conferencing]]
  - hasPart:: [[Instant Messaging]]
  - partOf:: [[Real-Time Communication]]
  - partOf:: [[Collaboration]]
  - contrastsWith:: [[Asynchronous Communication]]
  - implements:: [[Remote Procedure Call]]
  - implements:: [[WebRTC]]
  - uses:: [[Communication Protocol]]
  - uses:: [[Message Passing]]
  - dependsOn:: [[Latency]]
  - dependsOn:: [[Presence]]
  - supports:: [[Remote Collaboration]]
  - supports:: [[Telepresence]]
  - relatedTo:: [[Collaboration]]
  - relatedTo:: [[Remote Collaboration]]
  - relatedTo:: [[WebRTC]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
