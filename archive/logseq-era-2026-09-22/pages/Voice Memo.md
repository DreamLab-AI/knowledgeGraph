public:: true

# Voice Memo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f",
  "@type": "Page",
  "vc:slug": "voice-memo",
  "title": "Voice Memo",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:owl:class:asynchronous-collaboration",
      "vc:label": "Asynchronous Collaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "TelecollaborationDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9002"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Voice Memo"
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
  "@id": "urn:ngm:class:voice-memo",
  "@type": "Class",
  "label": "Voice Memo",
  "definition": "An asynchronous audio communication artefact that allows users to record and share spoken messages, conveying prosodic nuance, emotional tone, and contextual richness not available in text. Voice memos occupy a middle tier of communication fidelity between text messages and synchronous video calls, enabling remote teams to maintain natural communication rhythms across time zones without requiring real-time scheduling.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "quality": 0.75,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-communication",
      "label": "Communication Technology"
    },
    {
      "@id": "urn:ngm:class:asynchronous-collaboration",
      "label": "Asynchronous Collaboration"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:asynchronous-collaboration", "label": "Asynchronous Collaboration"},
      {"@id": "urn:ngm:class:distributed-collaboration", "label": "Distributed Collaboration"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"},
      {"@id": "urn:ngm:class:asynchronous-video", "label": "Asynchronous Video"},
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"},
      {"@id": "urn:ngm:class:audio-technology", "label": "Audio Technology"},
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:meeting-transcription", "label": "Meeting Transcription"},
      {"@id": "urn:ngm:class:real-time-transcription", "label": "Real-time Transcription"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:automatic-speech-recognition", "label": "Automatic Speech Recognition"},
      {"@id": "urn:ngm:class:speech-recognition", "label": "Speech Recognition"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:voice-memo:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asynchronous Collaboration]]",
      "resolved": "urn:visionflow:owl:class:asynchronous-collaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TelecollaborationDomain]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
  - Asynchronous audio communication allowing users to record and share voice messages, providing richer context than text while maintaining time flexibility.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VoiceMemo
  - owl-role:: Object
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Asynchronous Collaboration]]

- ### Content
  Voice memos are audio recordings transmitted within messaging or collaboration platforms that recipients can play back at their convenience. Unlike phone calls or video meetings, they impose no scheduling overhead, making them particularly effective for distributed teams operating across multiple time zones. The format preserves tonal and emotional cues that are stripped from text, reducing ambiguity in complex or nuanced communications.

  When paired with automatic speech recognition and natural language processing pipelines, voice memos can be automatically transcribed, indexed, and surfaced by knowledge management systems, enabling searchable spoken archives. This integration positions voice memos as a bridge between informal spoken communication and structured knowledge repositories — a growing consideration for organisations building institutional memory from remote work interactions.

- ### Provenance
  - sources:: [[Collaboration Tools]]
  - migration-date:: 2026-04-26T00:00:00Z
