public:: true

# Computational Neuroscience

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:computational-neuroscience", "@type":"Page", "title":"Computational Neuroscience", "vc:slug":"computational-neuroscience", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:computational-neuroscience",
  "@type": "Class",
  "label": "Computational Neuroscience",
  "definition": "Computational neuroscience is the study of the nervous system through mathematical models, simulations, and information-processing theories that describe how neurons and neural circuits represent, compute, and learn. It spans biophysical models of single neurons, network models of population dynamics, and theories of coding, plasticity, and behaviour. The field both explains experimental data and inspires artificial neural and neuromorphic systems by clarifying the principles of biological computation.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cognitive-science",
      "label": "Cognitive Science"
    },
    {
      "@id": "urn:ngm:class:cognitive-ai",
      "label": "Cognitive AI"
    }
  ],
  "relations": {
    "relatedTo": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:neuromorphic-computing",
        "label": "Neuromorphic Computing"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      },
      {
        "@id": "urn:ngm:class:reinforcement-learning",
        "label": "Reinforcement Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:cognitive-architecture",
        "label": "Cognitive Architecture"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
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
- Computational neuroscience models the nervous system mathematically to explain how neurons and circuits represent and compute information. It draws on [[Cognitive Science]] and shares methods with [[Machine Learning]], and its theories of biological computation inform [[Neuromorphic Computing]] and [[Neural Network|artificial neural networks]].
- ### Overview
- The field builds quantitative models at multiple scales, from the electrochemical dynamics of single neurons to the collective behaviour of large populations and whole systems.
- It aims both to explain how brains process sensory input, store memories, and produce behaviour, and to extract general principles of efficient computation.
- These principles cross-fertilise artificial intelligence, providing biologically grounded ideas about coding, learning, and architecture.
- ### Key aspects
- Biophysical neuron models describe membrane dynamics and the generation of action potentials.
- Network models capture how connectivity and dynamics give rise to representations and computations.
- Theories of neural coding explain how information is encoded in spike timing and population activity.
- Models of synaptic plasticity and learning connect experience to lasting changes in circuits.
- ### Applications
- Interpreting electrophysiological and imaging data from experiments.
- Designing brain-inspired and neuromorphic hardware and algorithms.
- Informing brain-computer interfaces and neural prosthetics.
- Generating and testing hypotheses about perception, cognition, and disease.
- ### Relationships
- relatedTo:: [[Neural Network]]
- relatedTo:: [[Cognitive Science]]
- relatedTo:: [[Machine Learning]]
- enables:: [[Neuromorphic Computing]]
- uses:: [[Machine Learning]]
- uses:: [[Reinforcement Learning]]
- bridgesTo:: [[Deep Learning]]
- supports:: [[Cognitive Architecture]]
- dependsOn:: [[Neural Network]]
- implements:: [[Cognitive Science]]
- contrastsWith:: [[Deep Learning]]
- ### Provenance
- updated:: 2026-06-15
