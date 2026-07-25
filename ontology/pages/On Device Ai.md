public:: true

# On Device Ai
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:on-device-ai", "@type":"Page", "title":"On Device Ai", "vc:slug":"on-device-ai", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:on-device-ai",
  "@type": "Class",
  "label": "On Device Ai",
  "definition": "On-device AI is the execution of machine-learning inference, and increasingly some training, directly on an end-user device such as a phone, wearable or embedded sensor, rather than sending data to remote servers. Keeping computation local reduces latency, removes network dependence and improves privacy because raw data need not leave the device. It relies on model compression, quantisation and hardware acceleration to fit capable models within tight power, memory and compute budgets, and it is a cornerstone of edge AI and privacy-preserving machine learning.",
  "domain": "machine-learning",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:edge-ai",
      "label": "Edge AI"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:edge-computing",
        "label": "Edge Computing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:model-compression",
        "label": "Model Compression"
      },
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      },
      {
        "@id": "urn:ngm:class:embedded-systems",
        "label": "Embedded Systems"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:model-optimization",
        "label": "Model Optimization"
      },
      {
        "@id": "urn:ngm:class:tiny-ml",
        "label": "TinyML"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy-preserving-machine-learning",
        "label": "Privacy-Preserving Machine Learning"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:mobile-computing",
        "label": "Mobile Computing"
      },
      {
        "@id": "urn:ngm:class:data-privacy",
        "label": "Data Privacy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:hardware-acceleration",
        "label": "Hardware Acceleration"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:federated-learning",
        "label": "Federated Learning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:latency",
        "label": "Latency"
      },
      {
        "@id": "urn:ngm:class:edge-ai",
        "label": "Edge AI"
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
- On-device AI runs machine-learning [[Inference]] locally on phones, wearables and sensors instead of in the cloud. As a form of [[Edge AI]] within [[Edge Computing]], it trades remote scale for low [[Latency]], offline operation and stronger [[Data Privacy]].
- ### Overview
- Moving computation to the device removes the round trip to a server, so results arrive immediately and work even without connectivity. Because raw inputs such as images, audio and location stay on the device, on-device AI is a natural substrate for [[Privacy-Preserving Machine Learning]].
- The challenge is fitting capable models into constrained power and memory budgets, which is solved with [[Model Compression]], quantisation, [[Model Optimization]] and dedicated [[Hardware Acceleration]]. It pairs naturally with [[Federated Learning]], where many devices train collaboratively without centralising data.
- ### Key aspects
- Local inference with minimal or no dependence on the network.
- Model shrinking through compression, pruning and quantisation.
- Exploitation of on-device accelerators and [[Embedded Systems]].
- Privacy by design: sensitive data never leaves the device.
- Energy and thermal budgeting for sustained operation.
- ### Applications
- Voice assistants and keyboard prediction on [[Mobile Computing]] devices.
- Real-time vision on cameras, wearables and AR headsets.
- [[TinyML]] workloads on microcontrollers and sensors.
- On-device personalisation feeding [[Federated Learning]].
- ### Relationships
- partOf:: [[Edge Computing]]
- requires:: [[Model Compression]]
- requires:: [[Hardware Acceleration]]
- requires:: [[Embedded Systems]]
- uses:: [[Model Optimization]]
- uses:: [[TinyML]]
- uses:: [[Neural Network]]
- enables:: [[Privacy-Preserving Machine Learning]]
- enables:: [[Inference]]
- supports:: [[Mobile Computing]]
- supports:: [[Data Privacy]]
- dependsOn:: [[Hardware Acceleration]]
- bridgesTo:: [[Federated Learning]]
- contrastsWith:: [[Cloud Computing]]
- relatedTo:: [[Latency]]
- relatedTo:: [[Edge AI]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
