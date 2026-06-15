public:: true

# Commonsense Reasoning

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:commonsense-reasoning",
  "@type": "Page",
  "title": "Commonsense Reasoning",
  "vc:slug": "commonsense-reasoning",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:commonsense-reasoning",
  "@type": "Class",
  "label": "Commonsense Reasoning",
  "definition": "Commonsense reasoning is the ability of an artificial system to make plausible inferences about everyday situations using broad background knowledge that humans take for granted. It covers naive physics, folk psychology, and typical cause-and-effect expectations that are rarely stated explicitly. It remains a long-standing challenge because such knowledge is vast, tacit, and context-dependent.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:reasoning",
      "label": "Reasoning"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:reasoning",
        "label": "Reasoning"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:symbolic-reasoning",
        "label": "Symbolic Reasoning"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:natural-language-understanding",
        "label": "Natural Language Understanding"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:knowledge-base",
        "label": "Knowledge Base"
      },
      {
        "@id": "urn:ngm:class:world-model",
        "label": "World Model"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:large-language-model",
        "label": "Large Language Model"
      },
      {
        "@id": "urn:ngm:class:inference",
        "label": "Inference"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:knowledge-representation",
        "label": "Knowledge Representation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:cognitive-architecture",
        "label": "Cognitive Architecture"
      },
      {
        "@id": "urn:ngm:class:automated-reasoning",
        "label": "Automated Reasoning"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:world-model",
        "label": "World Model"
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
  - [[Commonsense Reasoning]] lets a system draw plausible everyday inferences from broad tacit background knowledge.
  - It is a form of [[Reasoning]] that complements and contrasts with formal [[Symbolic Reasoning]].
  - It draws on a [[Knowledge Base]] and an internal [[World Model]] to interpret situations the way humans do.
- ### Overview
  - Humans effortlessly know that water makes things wet or that a dropped glass may break; encoding this for machines is hard.
  - The required knowledge is enormous, mostly unstated, and varies with context, defying simple enumeration.
  - Classical approaches built large hand-curated knowledge bases of commonsense facts and rules.
  - Modern [[Large Language Model]] systems acquire much commonsense implicitly from text, though gaps and brittleness remain.
- ### Mechanisms
  - Knowledge bases store typical properties, relations, and default assumptions about the world.
  - Default and non-monotonic [[Inference]] lets conclusions be revised when exceptions appear.
  - Learned representations capture statistical regularities about how the world usually behaves.
  - Grounding links language to a [[World Model]] so inferences respect physical and social plausibility.
- ### Key aspects
  - Tacitness: the knowledge is rarely stated explicitly anywhere.
  - Defeasibility: conclusions hold by default but can be overturned.
  - Breadth: coverage must span an open-ended range of situations.
  - Context sensitivity: the right inference depends on the surrounding circumstances.
- ### Applications
  - Improving [[Natural Language Understanding]] of implicit meaning.
  - Making conversational agents respond sensibly to underspecified requests.
  - Supporting robust planning in [[Cognitive Architecture]] systems.
  - Reducing absurd or unsafe outputs from generative models.
- ### Relationships
  - partOf:: [[Reasoning]]
  - contrastsWith:: [[Symbolic Reasoning]]
  - enables:: [[Natural Language Understanding]]
  - supports:: [[Natural Language Processing]]
  - requires:: [[Knowledge Base]]
  - requires:: [[World Model]]
  - uses:: [[Large Language Model]]
  - uses:: [[Inference]]
  - dependsOn:: [[Knowledge Representation]]
  - relatedTo:: [[Cognitive Architecture]]
  - relatedTo:: [[Automated Reasoning]]
  - bridgesTo:: [[World Model]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
