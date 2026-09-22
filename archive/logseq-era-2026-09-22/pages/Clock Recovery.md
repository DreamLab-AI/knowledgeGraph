public:: true

# Clock Recovery
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:clock-recovery",
  "@type": "Page",
  "vc:slug": "clock-recovery",
  "title": "Clock Recovery",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:clock-recovery",
  "@type": "Class",
  "label": "Clock Recovery",
  "definition": "Clock recovery (clock and data recovery, CDR) is the physical-layer process by which a receiver extracts a synchronised timing reference from an incoming data stream that carries no separate clock signal. It uses phase-locked loops or oversampling to align sampling instants with the centre of each symbol, compensating for jitter and frequency offset between transmitter and receiver. It matters because correct sampling timing is essential for reliable symbol detection in serial communication links.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Network and Communication"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Clock Recovery extracts a synchronised sampling clock from a self-clocked data stream, a required function of the [[Physical Layer]] in serial communication.
- ### Content
  - CDR circuits typically employ a phase-locked loop that tracks data transitions, with line coding (such as 8b/10b) guaranteeing sufficient transition density for lock. Robust clock recovery tolerates jitter, drift, and bounded frequency offset, enabling embedded-clock serial standards like PCIe, SATA, and high-speed Ethernet.
