public:: true

# Electromyography

```json-ld
{"@context": "https://narrativegoldmine.com/ns/v1", "@id": "urn:visionflow:page:electromyography", "@type": "Page", "title": "Electromyography", "vc:slug": "electromyography", "vc:public": true, "vc:schemaVersion": 2, "vc:outboundWikilinks": []}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:electromyography",
  "@type": "Class",
  "label": "Electromyography",
  "definition": "Electromyography is the measurement of the electrical activity produced by skeletal muscles, captured by surface or intramuscular electrodes. The resulting signals reflect motor-unit recruitment and can be processed to infer intended movement and muscular effort. In robotics it provides a biosignal interface for prosthetic control, exoskeleton actuation and gesture recognition.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sensor",
      "label": "Sensor"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      },
      {
        "@id": "urn:ngm:class:feature-extraction",
        "label": "Feature Extraction"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:prosthetics",
        "label": "Prosthetics"
      },
      {
        "@id": "urn:ngm:class:exoskeleton",
        "label": "Exoskeleton"
      },
      {
        "@id": "urn:ngm:class:gesture-recognition",
        "label": "Gesture Recognition"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:classification",
        "label": "Classification"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:signal-processing",
        "label": "Signal Processing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:haptics",
        "label": "Haptics"
      },
      {
        "@id": "urn:ngm:class:sensor",
        "label": "Sensor"
      },
      {
        "@id": "urn:ngm:class:human-computer-interaction",
        "label": "Human-Computer Interaction"
      }
    ]
  },
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A [[Sensor]] technique that records the electrical activity of skeletal muscle.
  - Yields biosignals processed with [[Signal Processing]] to infer intended motion.
  - A control interface for [[Prosthetics]] and [[Exoskeleton]] systems.
- ### Overview
  - Surface electrodes are non-invasive; intramuscular needles give finer motor-unit detail.
  - Raw signals are filtered, rectified and feature-extracted before classification.
  - Bridges human intent to machine action in human-robot interfaces.
- ### Mechanisms
  - Electrodes transduce motor-unit action potentials into measurable voltage.
  - Filtering and feature extraction isolate effort and activation onset.
  - Pattern classification maps signals to discrete movement intents for [[Gesture Recognition]].
  - Calibration adapts decoding to individual physiology and electrode placement.
- ### Applications
  - Myoelectric control of robotic prosthetic limbs.
  - Intention detection for assistive exoskeletons.
  - Rehabilitation monitoring and human-computer interaction.
- ### Relationships
  - subClassOf:: [[Sensor]]
  - partOf:: [[Sensor]]
  - uses:: [[Signal Processing]]
  - uses:: [[Feature Extraction]]
  - enables:: [[Prosthetics]]
  - enables:: [[Exoskeleton]]
  - enables:: [[Gesture Recognition]]
  - supports:: [[Human-Computer Interaction]]
  - requires:: [[Classification]]
  - dependsOn:: [[Signal Processing]]
  - relatedTo:: [[Haptics]]
  - relatedTo:: [[Sensor]]
  - relatedTo:: [[Human-Computer Interaction]]
- ### Provenance
  - updated:: 2026-06-15
  - generatedBy:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
