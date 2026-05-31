public:: true

# LDPC Codes
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ldpc-codes",
  "@type": "Page",
  "vc:slug": "ldpc-codes",
  "title": "LDPC Codes",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ldpc-codes",
  "@type": "Class",
  "label": "LDPC Codes",
  "definition": "Low-Density Parity-Check (LDPC) codes are a class of linear error-correcting codes defined by a sparse parity-check matrix and decoded with iterative belief-propagation algorithms. They approach the Shannon capacity limit while remaining computationally tractable, making them a dominant forward-error-correction scheme in modern communications. LDPC codes are mandated in standards such as Wi-Fi 6, 5G NR data channels, and DVB-S2.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Infrastructure Network and Communications"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:forward-error-correction", "label": "Forward Error Correction"}, {"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - LDPC codes are capacity-approaching linear codes that form a key building block of [[Forward Error Correction]], operating in the [[Physical Layer]] of modern wireless and broadcast systems.
- ### Content
  - The sparse parity-check matrix is represented as a Tanner graph over which messages are passed between variable and check nodes until convergence. Code rate, block length, and decoder iteration count trade off coding gain against latency and silicon cost.
