public:: true

# Channel Coding
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:channel-coding",
  "@type": "Page",
  "vc:slug": "channel-coding",
  "title": "Channel Coding",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:channel-coding",
  "@type": "Class",
  "label": "Channel Coding",
  "definition": "Channel coding is the branch of coding theory that adds controlled redundancy to transmitted data so that errors introduced by a noisy communication channel can be detected and corrected at the receiver. Techniques include block codes, convolutional codes, turbo codes, and LDPC codes, with forward error correction being its dominant application. It matters because it lets systems approach the Shannon channel capacity, trading bandwidth for reliability in wireless, storage, and deep-space links.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Infrastructure Network and Communications"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:forward-error-correction", "label": "Forward Error Correction"},
      {"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Channel Coding adds redundancy to data to enable error detection and correction over noisy channels; [[Forward Error Correction]] is its principal sub-discipline and it operates within the [[Physical Layer]].
- ### Content
  - Modern systems pair powerful codes such as LDPC and polar codes with soft-decision decoding to approach theoretical capacity limits in 5G, Wi-Fi, and satellite links. The coding rate sets the trade-off: lower rates add more redundancy for greater resilience at the cost of throughput.
