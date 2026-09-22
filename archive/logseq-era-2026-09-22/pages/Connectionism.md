public:: true

# Connectionism

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:connectionism", "@type":"Page", "title":"Connectionism", "vc:slug":"connectionism", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:connectionism",
  "@type": "Class",
  "label": "Connectionism",
  "definition": "Connectionism is an approach in cognitive science and artificial intelligence that models mental and computational phenomena as emergent from networks of simple, densely interconnected units whose collective activity, governed by weighted connections, gives rise to behaviour. It treats knowledge as distributed across connection strengths rather than stored as explicit symbols, and learning as the adjustment of those weights through experience. The paradigm provides the theoretical foundation for artificial neural networks and deep learning.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cognitive-science",
      "label": "Cognitive Science"
    },
    {
      "@id": "urn:ngm:class:ai-technique",
      "label": "AI Technique"
    }
  ],
  "relations": {
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symbolic-ai",
        "label": "Symbolic AI"
      },
      {
        "@id": "urn:ngm:class:symbolic-reasoning",
        "label": "Symbolic Reasoning"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      },
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:artificial-intelligence",
        "label": "Artificial Intelligence"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      },
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:artificial-general-intelligence",
        "label": "Artificial General Intelligence"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:cognitive-science",
        "label": "Cognitive Science"
      },
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
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
- Connectionism explains cognition and computation as emergent from networks of simple units, providing the theoretical basis for the [[Neural Network]] and [[Deep Learning]] within [[Cognitive Science]].
- Knowledge is held in distributed connection weights rather than explicit symbols, contrasting sharply with [[Symbolic AI]].
- ### Overview
- In a connectionist model, large numbers of simple processing units interact through weighted links, and intelligent behaviour emerges from their collective dynamics.
- Learning is framed as gradual weight adjustment in response to data, rather than the manipulation of discrete symbolic rules.
- The paradigm re-emerged powerfully with the success of deep neural networks across perception, language and control.
- ### Key aspects
- Distributed representation spreading meaning across many units.
- Parallel constraint satisfaction through interacting activations.
- Learning by weight adjustment driven by error signals.
- Graceful degradation and tolerance to noise and partial damage.
- Emergence of structure without explicit programming.
- ### Mechanisms
- Units compute weighted sums passed through non-linear activation functions.
- [[Backpropagation]] and [[Gradient Descent]] adjust weights to reduce error.
- Layered architectures build increasingly abstract internal features.
- Representations are learned from data rather than hand-specified.
- ### Applications
- Foundations of modern [[Deep Learning]] systems.
- Models of perception, memory and language in cognitive science.
- Hybrid neuro-symbolic systems combining learning with reasoning.
- Theoretical grounding for [[Machine Learning]] architectures.
- ### Relationships
- subClassOf:: [[Cognitive Science]]
- contrastsWith:: [[Symbolic AI]]
- contrastsWith:: [[Symbolic Reasoning]]
- hasPart:: [[Neural Network]]
- enables:: [[Deep Learning]]
- enables:: [[Machine Learning]]
- uses:: [[Gradient Descent]]
- uses:: [[Backpropagation]]
- supports:: [[Artificial Intelligence]]
- implements:: [[Neural Network]]
- bridgesTo:: [[Machine Learning]]
- relatedTo:: [[Artificial General Intelligence]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
