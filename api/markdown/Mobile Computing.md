public:: true

# Mobile Computing

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:mobile-computing",
  "@type": "Page",
  "title": "Mobile Computing",
  "vc:slug": "mobile-computing",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:mobile-computing",
  "@type": "Class",
  "label": "Mobile Computing",
  "definition": "Mobile computing is the discipline of delivering computation, data, and connectivity to portable devices such as smartphones, tablets, and wearables that operate while in motion. It contends with constraints on battery, memory, bandwidth, and intermittent connectivity, and increasingly hosts machine-learning inference directly on-device. Mobile computing bridges cloud back-ends and edge devices, enabling responsive, context-aware applications wherever the user goes.",
  "domain": "machine-learning",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:edge-computing",
      "label": "Edge Computing"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      },
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      },
      {
        "@id": "urn:ngm:class:internet-of-things",
        "label": "Internet of Things"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:on-device-inference",
        "label": "On-Device Inference"
      },
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      },
      {
        "@id": "urn:ngm:class:quantisation",
        "label": "Quantisation"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:on-device-inference",
        "label": "On-Device Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:augmented-reality",
        "label": "Augmented Reality"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:distributed-computing",
        "label": "Distributed Computing"
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
  - Mobile computing is the discipline of delivering computation, data, and connectivity to portable devices such as smartphones, tablets, and wearables that operate while in motion. It contends with constraints on battery, memory, bandwidth, and intermittent connectivity, and increasingly hosts machine-learning inference directly on-device. Mobile computing bridges cloud back-ends and edge devices, enabling responsive, context-aware applications wherever the user goes.
  - Related concepts: [[Edge Computing]] [[Internet of Things]] [[On-Device Inference]] [[Federated Learning]] [[Model Compression]]
- ### Overview
  - Mobile computing extends information systems beyond fixed workstations into the pocket, the wrist, and the vehicle, where compute and power budgets are tight and the network is unreliable. To remain responsive, applications cache aggressively, degrade gracefully offline, and increasingly run compressed machine-learning models on the device itself. This on-device intelligence reduces latency, preserves privacy, and lowers dependence on continuous connectivity.
- ### Key aspects
  - Energy-aware computation under strict battery and thermal budgets
  - Intermittent connectivity handling, caching, and offline-first design
  - On-device inference via quantised and compressed models
  - Context awareness from sensors such as GPS, accelerometers, and cameras
  - Privacy-preserving learning through federated approaches
- ### Applications
  - On-device assistants and real-time translation
  - Mobile augmented-reality experiences
  - Health and activity tracking on wearables
  - Federated model training across fleets of phones
- ### Relationships
  - subClassOf:: [[Edge Computing]]
  - partOf:: [[Edge Computing]]
  - relatedTo:: [[Internet of Things]]
  - relatedTo:: [[Edge Computing]]
  - relatedTo:: [[Latency]]
  - bridgesTo:: [[Edge Computing]]
  - bridgesTo:: [[Internet of Things]]
  - enables:: [[On-Device Inference]]
  - enables:: [[Federated Learning]]
  - dependsOn:: [[Model Compression]]
  - dependsOn:: [[Quantisation]]
  - uses:: [[On-Device Inference]]
  - supports:: [[Augmented Reality]]
  - requires:: [[Latency]]
  - contrastsWith:: [[Distributed Computing]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
