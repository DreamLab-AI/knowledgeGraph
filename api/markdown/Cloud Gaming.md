public:: true

# Cloud Gaming
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cloud-gaming",
  "@type": "Page",
  "vc:slug": "cloud-gaming",
  "title": "Cloud Gaming",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:cloud-gaming",
  "@type": "Class",
  "label": "Cloud Gaming",
  "definition": "Cloud gaming is a model in which games are rendered on remote server GPUs and streamed as video to a client device, while player input is sent back to the server over the network. It shifts compute off the end device, allowing demanding titles to run on thin clients, but is highly sensitive to network latency, bandwidth, and jitter. It matters as a delivery paradigm that depends on adaptive bitrate streaming and low-latency encoding to maintain interactivity.",
  "domain": "metaverse",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:infra-computing-and-cloud", "label": "Infrastructure Computing and Cloud"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:bandwidth-adaptation", "label": "Bandwidth Adaptation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Cloud Gaming renders games on server GPUs and streams them as video to thin clients, relying on [[Bandwidth Adaptation]] to sustain quality and interactivity across variable networks.
- ### Content
  - End-to-end latency budgets span input capture, server render, encode, network transit, and client decode, with adaptive bitrate streaming trading visual fidelity against congestion. Edge data centres and hardware video encoders are deployed to keep round-trip latency within the tens-of-milliseconds range players tolerate.
