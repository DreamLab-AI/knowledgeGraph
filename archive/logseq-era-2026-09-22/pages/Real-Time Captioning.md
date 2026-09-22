public:: true

# Real-Time Captioning

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:real-time-captioning", "@type":"Page", "title":"Real-Time Captioning", "vc:slug":"real-time-captioning", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:real-time-captioning",
  "@type":"Class",
  "label":"Real-Time Captioning",
  "definition":"Real-time captioning is the continuous generation of synchronised text captions from live audio using streaming automatic speech recognition, with latency low enough that captions appear as speech occurs. It is used for live broadcasts, video conferencing, and accessibility services for deaf and hard-of-hearing users. It requires low-latency acoustic and language models tuned to trade a small amount of accuracy for responsiveness.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:automatic-speech-recognition","label":"Automatic Speech Recognition"}],
  "relations":{
    "partOf":[{"@id":"urn:ngm:class:automatic-speech-recognition","label":"Automatic Speech Recognition"}]
  },
  "sameAs":[],
  "quality":0.6,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-07-25T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- Real-time captioning is the continuous generation of synchronised text captions from live audio using streaming automatic speech recognition, with latency low enough that captions appear as speech occurs. It is used for live broadcasts, video conferencing, and accessibility services for deaf and hard-of-hearing users. It requires low-latency acoustic and language models tuned to trade a small amount of accuracy for responsiveness.
- ### Provenance
	- updated:: 2026-07-25
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
