public:: true

# Computation And Intelligence Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:52a7f216ba47ad6b37cf8e59387b88cd19a2e0f6a3d079c26afbc12bf17dad3f",
  "@type": "Page",
  "vc:slug": "computation-and-intelligence-domain",
  "title": "Computation And Intelligence Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cognitive-science",
      "vc:label": "Cognitive Science"
    },
    {
      "@id": "urn:visionflow:linked:philosophy-of-mind",
      "vc:label": "Philosophy of Mind"
    },
    {
      "@id": "urn:visionflow:linked:theoretical-computer-science",
      "vc:label": "Theoretical Computer Science"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:machine-learning",
      "vc:label": "Machine Learning"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-7008"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Computation And Intelligence Domain"
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
  "@id": "urn:ngm:class:computation-and-intelligence-domain",
  "@type": "Class",
  "label": "Computation And Intelligence Domain",
  "definition": "A foundational domain at the intersection of computational theory and cognitive science, encompassing algorithmic information processing, computational complexity, machine cognition, and the theoretical underpinnings of intelligent behaviour in both natural and artificial systems. The domain integrates Turing's computability framework, Shannon's information theory, and cognitive architecture research to address the fundamental question of what computational processes constitute intelligence.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "qualityScore": 0.8,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-research-area",
      "label": "AI Research Area"
    }
  ],
  "relations": {
    "hasPart": [
      {"@id": "urn:ngm:class:cognitive-architecture", "label": "Cognitive Architecture"},
      {"@id": "urn:ngm:class:knowledge-representation", "label": "Knowledge Representation"},
      {"@id": "urn:ngm:class:reasoning", "label": "Reasoning"},
      {"@id": "urn:ngm:class:symbolic-ai", "label": "Symbolic AI"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:artificial-intelligence", "label": "Artificial Intelligence"},
      {"@id": "urn:ngm:class:machine-learning", "label": "Machine Learning"},
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:artificial-general-intelligence", "label": "Artificial General Intelligence"},
      {"@id": "urn:ngm:class:reinforcement-learning", "label": "Reinforcement Learning"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:algorithmic-framework", "label": "Algorithmic Framework"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:computation-and-intelligence-domain:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:52a7f216ba47ad6b37cf8e59387b88cd19a2e0f6a3d079c26afbc12bf17dad3f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cognitive Science]]",
      "resolved": "urn:visionflow:linked:cognitive-science",
      "kind": "StubLink"
    },
    {
      "raw": "[[Philosophy of Mind]]",
      "resolved": "urn:visionflow:linked:philosophy-of-mind",
      "kind": "StubLink"
    },
    {
      "raw": "[[Theoretical Computer Science]]",
      "resolved": "urn:visionflow:linked:theoretical-computer-science",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning]]",
      "resolved": "urn:visionflow:owl:class:machine-learning",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A foundational domain at the intersection of computational theory and cognitive science, encompassing concepts related to algorithmic information processing, computational complexity, machine cognition, and the theoretical underpinnings of intelligent behaviour in both natural and artificial systems.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ComputationAndIntelligenceDomain
  - owl-role:: Domain
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[ArtificialIntelligenceDomain]]
  - bridges-to:: [[Theoretical Computer Science]]

- ### Content

  - #### Member Concepts (Inferred by Reasoner)
		    - Turing Machine is-member-of ComputationAndIntelligenceDomain
		    - Computational Complexity is-member-of ComputationAndIntelligenceDomain
		    - Algorithmic Information Theory is-member-of ComputationAndIntelligenceDomain
		    - Cognitive Architecture is-member-of ComputationAndIntelligenceDomain
		    - Symbol Grounding is-member-of ComputationAndIntelligenceDomain
		- bridges-to:: [[Cognitive Science]]
		- bridges-to:: [[Philosophy of Mind]]
		- bridges-to:: [[Theoretical Computer Science]]
		- foundational-to:: [[Machine Learning]]

  ## Definition

  The **ComputationAndIntelligenceDomain** addresses the fundamental theoretical questions at the intersection of computation and cognition. Drawing from Turing's seminal 1950 paper "Computing Machinery and Intelligence", this domain encompasses the formal foundations of what it means for systems to exhibit intelligent behaviour.

  ## Theoretical Foundations

  ### Computational Theory
  - Turing Machines and computability
  - Computational complexity classes (P, NP, PSPACE)
  - Algorithmic information theory (Kolmogorov complexity)
  - Lambda calculus and functional computation

  ### Cognitive Foundations
  - Cognitive architectures (ACT-R, SOAR, Global Workspace)
  - Symbol grounding problem
  - Frame problem
  - Binding problem

  ### Intelligence Theory
  - General intelligence measures
  - Intelligence amplification
  - Collective intelligence
  - Machine consciousness debates

  ## Historical Context

  This domain traces its origins to:
  - **Turing (1950)**: "Computing Machinery and Intelligence" - the Turing Test
  - **McCarthy et al. (1956)**: Dartmouth Conference - founding of AI
  - **Newell & Simon (1976)**: Physical Symbol System Hypothesis
  - **Searle (1980)**: Chinese Room argument
  - **Chalmers (1995)**: Hard problem of consciousness

  ## Cross-Domain Integration

  - **Philosophy**: Mind-body problem, intentionality, qualia
  - **Neuroscience**: Neural correlates of cognition
  - **Mathematics**: Goedel incompleteness, logical foundations
  - **Linguistics**: Compositionality, semantic grounding

  ## Research Questions

  1. What computational processes constitute intelligence?
  2. Can symbolic manipulation produce understanding?
  3. What are the computational limits of cognition?
  4. How does meaning emerge from syntax?

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
