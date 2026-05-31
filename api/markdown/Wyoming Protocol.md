public:: true

# Wyoming Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:wyoming-protocol",
  "@type": "Page",
  "vc:slug": "wyoming-protocol",
  "title": "Wyoming Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:wyoming-protocol",
  "@type": "Class",
  "label": "Wyoming Protocol",
  "definition": "The Wyoming Protocol is an open, peer-to-peer communication protocol used in the Home Assistant ecosystem to connect voice and audio services such as wake-word detection, speech-to-text, and text-to-speech. It defines a simple JSON-over-socket event framing that lets independent voice components run as networked services and interoperate locally without cloud dependencies. It matters as the backbone of Home Assistant's privacy-preserving local voice assistant pipeline.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:communication-protocol", "label": "Communication Protocol"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:home-assistant", "label": "Home Assistant"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - The Wyoming Protocol is a lightweight peer-to-peer protocol for chaining local voice services, implemented across the [[Home Assistant]] voice stack.
- ### Content
  - Wyoming frames audio and intent events as JSON headers followed by binary payloads over TCP sockets, allowing modular wake-word, ASR, and TTS engines to be composed as discrete services. By keeping the entire pipeline on the local network, it enables fully offline voice control without relaying user audio to external clouds.
