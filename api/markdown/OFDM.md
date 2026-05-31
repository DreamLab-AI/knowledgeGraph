public:: true

# OFDM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ofdm",
  "@type": "Page",
  "vc:slug": "ofdm",
  "title": "OFDM",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:ofdm",
  "@type": "Class",
  "label": "OFDM",
  "definition": "OFDM (Orthogonal Frequency-Division Multiplexing) is a digital modulation scheme that transmits data in parallel over many closely spaced, mutually orthogonal subcarriers. Splitting a high-rate stream into many low-rate subcarriers makes the signal robust to multipath fading and allows simple frequency-domain equalisation. It is the physical-layer foundation of Wi-Fi, LTE, 5G, DVB, and many other modern broadband systems.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:infra-network-and-comms", "label": "Infrastructure Network and Comms"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:physical-layer", "label": "Physical Layer"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - OFDM is a modulation scheme that sends data across many orthogonal subcarriers in parallel. It is a [[Physical Layer]] technique used in Wi-Fi, LTE, and 5G.
- ### Content
  - The orthogonality of subcarriers, implemented efficiently with the FFT, lets them overlap in frequency without interference, maximising spectral efficiency. A cyclic prefix absorbs multipath delay spread to prevent inter-symbol interference, while the main drawbacks are sensitivity to frequency offset and a high peak-to-average power ratio that stresses transmitters.
