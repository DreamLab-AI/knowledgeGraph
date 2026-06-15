public:: true

# Optimal Transport

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:optimal-transport",
  "@type": "Page",
  "title": "Optimal Transport",
  "vc:slug": "optimal-transport",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:optimal-transport",
  "@type": "Class",
  "label": "Optimal Transport",
  "definition": "Optimal Transport is the mathematical theory of moving one probability distribution to another while minimising a total cost defined by a ground metric. Its solution induces the Wasserstein distance, a geometrically meaningful divergence between distributions that, unlike many alternatives, behaves well even when supports do not overlap. In machine learning it grounds generative model training, domain adaptation, and distribution matching, including flow-based formulations.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:probability-theory",
      "label": "Probability Theory"
    }
  ],
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      },
      {
        "@id": "urn:ngm:class:gradient-descent",
        "label": "Gradient Descent"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:generative-model",
        "label": "Generative Model"
      },
      {
        "@id": "urn:ngm:class:domain-adaptation",
        "label": "Domain Adaptation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:generative-adversarial-network",
        "label": "Generative Adversarial Network"
      },
      {
        "@id": "urn:ngm:class:normalizing-flow",
        "label": "Normalizing Flow"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:loss-function",
        "label": "Loss Function"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-distribution",
        "label": "Probability Distribution"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:variational-autoencoder",
        "label": "Variational Autoencoder"
      },
      {
        "@id": "urn:ngm:class:diffusion-model",
        "label": "Diffusion Model"
      },
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:machine-learning",
        "label": "Machine Learning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:domain-adaptation",
        "label": "Domain Adaptation"
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
  - Optimal Transport is the mathematical theory of moving one probability distribution to another while minimising a total cost defined by a ground metric. Its solution induces the Wasserstein distance, a geometrically meaningful divergence between distributions that, unlike many alternatives, behaves well even when supports do not overlap. In machine learning it grounds generative model training, domain adaptation, and distribution matching, including flow-based formulations.
  - Core concepts: [[Probability Theory]], [[Probability Distribution]], [[Generative Model]], [[Domain Adaptation]]
- ### Overview
  - **Optimal Transport** sits within the [[Probability Theory]] area of the machine learning domain.
  - It is referenced by existing classes in the knowledge graph and is materialised here as a defined, rooted node so those edges resolve.
- ### Key aspects
  - Establishes a precise, shared meaning for optimal transport usable across coordinating components.
  - Integrates with neighbouring concepts through the relations enumerated below.
  - Maturity assessed as established based on established practice and literature.
- ### Mechanisms
  - Operates through the dependencies and components captured in its `requires`, `uses`, and `hasPart` relations.
  - Produces the capabilities captured in its `enables` and `supports` relations.
- ### Applications
  - Applied wherever machine learning systems need the function described above.
  - Connects to broader workflows via the bridging relations listed below.
- ### Relationships
  - subClassOf:: [[Probability Theory]]
  - uses:: [[Probability Distribution]]
  - uses:: [[Gradient Descent]]
  - enables:: [[Generative Model]]
  - enables:: [[Domain Adaptation]]
  - supports:: [[Generative Adversarial Network]]
  - supports:: [[Normalizing Flow]]
  - implements:: [[Loss Function]]
  - requires:: [[Probability Distribution]]
  - relatedTo:: [[Variational Autoencoder]]
  - relatedTo:: [[Diffusion Model]]
  - relatedTo:: [[Neural Network]]
  - partOf:: [[Machine Learning]]
  - bridgesTo:: [[Domain Adaptation]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
