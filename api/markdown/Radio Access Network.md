public:: true

# Radio Access Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:radio-access-network",
  "@type": "Page",
  "vc:slug": "radio-access-network",
  "title": "Radio Access Network",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:radio-access-network",
  "@type": "Class",
  "label": "Radio Access Network",
  "definition": "A radio access network (RAN) is the part of a mobile telecommunications system that connects user devices to the core network over the air interface via base stations and antennas. It manages radio resource allocation, modulation, and handover across cells. Modern architectures such as Open RAN disaggregate hardware and software to enable multi-vendor, virtualised deployments.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-infrastructure", "label": "Network Infrastructure"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"},
      {"@id": "urn:ngm:class:wireless-radio", "label": "Wireless Radio"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A radio access network connects devices to the mobile core via base stations and the air interface. It operates above the [[Physical Layer]] and depends on [[Wireless Radio]] hardware for transmission.
- ### Content
  - The RAN handles scheduling, beamforming, power control, and inter-cell handover. Disaggregated and virtualised RAN (vRAN/Open RAN) split functions into radio, distributed, and centralised units connected by standardised interfaces, lowering vendor lock-in and enabling cloud-native, AI-assisted radio optimisation.
