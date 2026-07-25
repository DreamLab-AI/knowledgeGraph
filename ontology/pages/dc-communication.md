public:: true

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:5cbe45e2322bc474e2be6a79985091929644b385afb8e2956d5eae37f9695ded",
  "@type": "Page",
  "vc:slug": "dc-communication",
  "title": "Communication Technology",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-19T19:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@type": "Class",
  "@id": "urn:ngm:class:dc-communication",
  "label": "Communication Technology",
  "definition": "Taxonomy category covering the network protocols, media channels, and software systems that enable distributed teams to communicate across space and time, spanning real-time video conferencing, asynchronous messaging, WebRTC transport, MQTT messaging, and immersive communication modalities.",
  "domain": "distributed-collaboration",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:distributed-collaboration",
      "label": "Distributed Collaboration"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:realtime-communication", "label": "Realtime Communication"},
      {"@id": "urn:ngm:class:asynchronous-communication", "label": "Asynchronous Communication"},
      {"@id": "urn:ngm:class:video-conferencing", "label": "Video Conferencing"},
      {"@id": "urn:ngm:class:web-rtc", "label": "WebRTC"},
      {"@id": "urn:ngm:class:mqtt", "label": "MQTT"},
      {"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"},
      {"@id": "urn:ngm:class:immersive-communication", "label": "Immersive Communication"},
      {"@id": "urn:ngm:class:network-protocol", "label": "Network Protocol"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:telecollaboration", "label": "Telecollaboration"},
      {"@id": "urn:ngm:class:social-presence", "label": "Social Presence"},
      {"@id": "urn:ngm:class:collaboration-technology", "label": "Collaboration Technology"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:remote-collaboration", "label": "Remote Collaboration"},
      {"@id": "urn:ngm:class:virtual-collaboration", "label": "Virtual Collaboration"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:edge-computing", "label": "Edge Computing"},
      {"@id": "urn:ngm:class:bandwidth-adaptation", "label": "Bandwidth Adaptation"}
    ]
  },
  "quality": 0.8,
  "qualityScore": 0.8,
  "maturity": "established"
}
```
