```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:c7b12eb8de5fbd09a39b5ad524aaa50416048be230302b2027a4689d2385031b",
  "@type": "Page",
  "vc:slug": "analog-to-digital-converter",
  "title": "Analog To Digital Converter",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:digital-audio-recording",
      "vc:label": "Digital Audio Recording"
    },
    {
      "@id": "urn:visionflow:linked:digital-imaging",
      "vc:label": "Digital Imaging"
    },
    {
      "@id": "urn:visionflow:linked:resolution-bits",
      "vc:label": "Resolution Bits"
    },
    {
      "@id": "urn:visionflow:linked:sampling-rate",
      "vc:label": "Sampling Rate"
    },
    {
      "@id": "urn:visionflow:linked:sensor-data-processing",
      "vc:label": "Sensor Data Processing"
    },
    {
      "@id": "urn:visionflow:linked:sensor-input",
      "vc:label": "Sensor Input"
    },
    {
      "@id": "urn:visionflow:linked:signal-conditioning",
      "vc:label": "Signal Conditioning"
    },
    {
      "@id": "urn:visionflow:linked:signal-processing-hardware",
      "vc:label": "Signal Processing Hardware"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9765"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Analog To Digital Converter"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:analog-to-digital-converter",
  "@type": "Class",
  "label": "Analog To Digital Converter",
  "definition": "Analog To Digital Converter (ADC) is an electronic component that converts continuous analog signals such as sound, light, or voltage into discrete digital representations through sampling, quantization, and encoding processes, enabling digital processing, storage, and transmission of real-world ...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-display-and-rendering",
      "label": "Display and Rendering"
    }
  ],
  "relations": {
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:robo-perception",
        "label": "Perception and Sensing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:signal-conditioning",
        "label": "Signal Conditioning"
      }
    ]
  },
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

- ### Definition
  - Analog To Digital Converter (ADC) is an electronic component that converts continuous analog signals such as sound, light, or voltage into discrete digital representations through sampling, quantization, and encoding processes, enabling digital processing, storage, and transmission of real-world signals.

- ### Semantic Classification
  - owl-class:: spatial-computing:AnalogToDigitalConverter
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Signal Processing Hardware]]
  - requires:: [[Sampling Rate]], [[Resolution Bits]], [[Signal Conditioning]]
  - enables:: [[Digital Audio Recording]], [[Digital Imaging]], [[Sensor Data Processing]]
  - bridges-to:: [[Sensor Input]] (rb)

- ### Content

  ### Technical Details
  Key components include:
  - **Sampling**: Measuring analog signals at specific intervals (sampling rate must meet Nyquist criterion: 2x highest frequency)
  - **Quantization**: Determining resolution by mapping continuous values to discrete levels
  - **Encoding**: Converting quantized values to binary digital representations
  - **ADC Types**: Flash, Pipeline, Dual Slope, SAR (Successive Approximation), and Delta-Sigma architectures

  ### Audio Applications
  Music production ADCs sample at rates up to 192 kHz, with recording studios using 24-bit 96 kHz PCM before downsampling to 44.1 kHz (CD) or 48 kHz (broadcast).

  ### Metaverse Relevance
  ADCs are essential for capturing real-world audio, video, and sensor data for integration into virtual environments and digital twin applications.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
