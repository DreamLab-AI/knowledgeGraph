public:: true

# Bitrate

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:bitrate", "@type":"Page", "title":"Bitrate", "vc:slug":"bitrate", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:bitrate",
  "@type": "Class",
  "label": "Bitrate",
  "definition": "Bitrate is the rate at which bits are transmitted, encoded or processed per unit of time, typically expressed in kilobits or megabits per second. It determines the bandwidth a signal consumes and, for audio and video, the trade-off between file size or transmission cost and perceptual quality. Bitrate is a fundamental parameter in broadcast systems and adaptive streaming, where it is dynamically adjusted, and in video compression, where techniques such as motion estimation influence how efficiently a target bitrate is achieved.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-network-and-comms",
      "label": "Network and Communication"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:video-compression",
        "label": "Video Compression"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.55,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-07-25T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Bitrate is the rate at which bits are transmitted, encoded or processed per unit of time, typically expressed in kilobits or megabits per second. It determines the bandwidth a signal consumes and, for audio and video, the trade-off between file size or transmission cost and perceptual quality. Bitrate is a fundamental parameter in broadcast systems and adaptive streaming, where it is dynamically adjusted, and in video compression, where techniques such as motion estimation influence how efficiently a target bitrate is achieved.
