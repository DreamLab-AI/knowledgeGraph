public:: true

# Analogue To Digital Conversion

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:analogue-to-digital-conversion",
  "@type": "Page",
  "title": "Analogue To Digital Conversion",
  "vc:slug": "analogue-to-digital-conversion",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:analogue-to-digital-conversion",
  "@type": "Class",
  "label": "Analogue To Digital Conversion",
  "definition": "Analogue-to-digital conversion is the process of transforming a continuous physical signal, such as voltage from a sensor, into a discrete sequence of numerical values that a digital system can store and process. It proceeds by sampling the signal at regular intervals and quantising each sample to a finite set of levels, with the sampling rate and bit depth determining how faithfully the original is represented. In robotics and embedded systems it is the essential bridge between the analogue physical world and digital control and perception pipelines.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:signal-processing",
      "label": "Signal Processing"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:data-acquisition",
        "label": "Data Acquisition"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      },
      {
        "@id": "urn:ngm:class:analog-to-digital-converter",
        "label": "Analog To Digital Converter"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:signal-conditioning",
        "label": "Signal Conditioning"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:analog-to-digital-converter",
        "label": "Analog To Digital Converter"
      },
      {
        "@id": "urn:ngm:class:sampling",
        "label": "Sampling"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:data-acquisition",
        "label": "Data Acquisition"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:signal-conditioning",
        "label": "Signal Conditioning"
      },
      {
        "@id": "urn:ngm:class:digital-signal-processing",
        "label": "Digital Signal Processing"
      },
      {
        "@id": "urn:ngm:class:embedded-system",
        "label": "Embedded System"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - [[Analogue To Digital Conversion]] is part of [[Signal Processing]].
  - It depends on a [[Sensor]] and prior [[Signal Conditioning]].
  - It is performed by an [[Analog To Digital Converter]].
  - It enables [[Digital Signal Processing]].
- ### Overview
  - Conversion turns continuous physical quantities into machine-readable numbers.
  - Sampling captures signal values at fixed time intervals.
  - Quantisation maps each sample onto a finite scale of levels.
  - Together with conditioning it forms the front end of a data-acquisition chain.
- ### Key aspects
  - Sampling rate must satisfy the Nyquist criterion to avoid aliasing.
  - Bit depth determines resolution and quantisation noise.
  - Anti-alias filtering precedes sampling in conditioning.
  - Converter architectures trade speed against accuracy.
  - Reference voltages set the measurable input range.
- ### Applications
  - Reading sensor voltages in robotic control loops.
  - Digitising audio and vibration for monitoring.
  - Acquiring physiological signals in instrumentation.
  - Interfacing analogue transducers with embedded processors.
- ### Relationships
  - partOf:: [[Signal Processing]]
  - partOf:: [[Data Acquisition]]
  - hasPart:: [[Sampling]]
  - hasPart:: [[Analog To Digital Converter]]
  - requires:: [[Signal Conditioning]]
  - requires:: [[Sensor]]
  - uses:: [[Analog To Digital Converter]]
  - uses:: [[Sampling]]
  - enables:: [[Digital Signal Processing]]
  - enables:: [[Data Acquisition]]
  - dependsOn:: [[Sensor]]
  - supports:: [[Embedded System]]
  - relatedTo:: [[Signal Conditioning]]
  - relatedTo:: [[Digital Signal Processing]]
  - relatedTo:: [[Embedded System]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
