public:: true

# Signal Processing Unit
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:signal-processing-unit",
  "@type": "Page",
  "vc:slug": "signal-processing-unit",
  "title": "Signal Processing Unit",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:signal-processing-unit",
  "@type": "Class",
  "label": "Signal Processing Unit",
  "definition": "A signal processing unit is the hardware or firmware block that filters, transforms, and extracts features from raw sensor or transducer signals, often using DSP cores, FFTs, and digital filtering. In haptic and biosensing devices it converts captured analogue or digital streams into actionable control signals or feature vectors in real time. It is a core processing component of interactive sensing interfaces.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:hardware", "label": "Hardware"}],
  "relations": {
    "relatedTo": [{"@id": "urn:ngm:class:haptics", "label": "Haptics"}, {"@id": "urn:ngm:class:biosensing-interface", "label": "Biosensing Interface"}]
  },
  "quality": 0.72
}
```

- ### Definition
  - A signal processing unit filters, transforms, and extracts features from raw sensor streams, typically with DSP cores and digital filters. It is required by [[Haptics]] rendering and is a part of a [[Biosensing Interface]].
- ### Content
  - Real-time constraints drive the use of fixed-point DSPs, FFT accelerators, and low-latency filter pipelines. In haptics it computes force and texture signals from contact data, while in biosensing it denoises and decodes physiological signals into commands within tight latency budgets.
