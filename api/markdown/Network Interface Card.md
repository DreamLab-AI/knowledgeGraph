public:: true

# Network Interface Card
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:network-interface-card",
  "@type": "Page",
  "vc:slug": "network-interface-card",
  "title": "Network Interface Card",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:network-interface-card",
  "@type": "Class",
  "label": "Network Interface Card",
  "definition": "A network interface card (NIC) is the hardware component that connects a computing device to a network and implements the physical and data-link layer functions for sending and receiving frames. It encodes outgoing data onto the transmission medium, decodes incoming signals, and carries a unique MAC address for link-layer addressing. Modern NICs often offload checksum, segmentation, and encryption work from the CPU.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:network-component", "label": "Network Component"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A network interface card is the hardware that attaches a device to a network and drives the [[Physical Layer]] and data-link functions, including signal encoding and MAC addressing.
- ### Content
  - NICs may be wired (Ethernet) or wireless, and high-performance variants (SmartNICs and DPUs) embed programmable processors to offload networking, storage, and security tasks. By handling framing, error detection, and media access in hardware, the NIC frees the host CPU and is essential to throughput in data-centre and edge deployments.
