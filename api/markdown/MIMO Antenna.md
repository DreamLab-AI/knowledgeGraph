public:: true

# MIMO Antenna
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:mimo-antenna",
  "@type": "Page",
  "vc:slug": "mimo-antenna",
  "title": "MIMO Antenna",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mimo-antenna",
  "@type": "Class",
  "label": "MIMO Antenna",
  "definition": "A MIMO (multiple-input multiple-output) antenna is an array of multiple transmit and receive elements that exploits spatial multiplexing to send several independent data streams over the same frequency channel. By leveraging multipath propagation, it increases spectral efficiency and link reliability without additional bandwidth, and is foundational to Wi-Fi and 4G/5G physical layers. Massive MIMO scales this to dozens or hundreds of elements with beamforming.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Network and Communications"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A MIMO antenna uses multiple transmit and receive elements to multiplex independent data streams over one channel. It operates at the wireless [[Physical Layer]].
- ### Content
  - Spatial multiplexing turns multipath, normally a source of fading, into extra capacity by resolving streams across spatially separated antennas. Massive MIMO and beamforming concentrate energy toward specific users, improving signal-to-interference ratios in dense 5G deployments.
