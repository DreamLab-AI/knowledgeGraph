public:: true

# Common Sense Reasoning
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:common-sense-reasoning",
  "@type": "Page",
  "vc:slug": "common-sense-reasoning",
  "title": "Common Sense Reasoning",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:common-sense-reasoning",
  "@type": "Class",
  "label": "Common Sense Reasoning",
  "definition": "The capacity of an AI system to draw inferences that humans consider obvious from general background knowledge about the physical world, social norms, causality, and everyday object behaviour — without explicit instruction. It encompasses naïve physics, naïve psychology, temporal reasoning, and spatial reasoning grounded in embodied human experience.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:ai-agents", "label": "AI Agents"},
      {"@id": "urn:ngm:class:natural-language-understanding", "label": "Natural Language Understanding"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:collective-intelligence", "label": "Collective Intelligence"},
      {"@id": "urn:ngm:class:ai-alignment", "label": "AI Alignment"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:ai-core-concepts", "label": "ai core concepts"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Common Sense Reasoning refers to an AI system's ability to apply implicit, background knowledge — the kind that any competent adult possesses without having studied it — to interpret language, resolve ambiguity, and predict outcomes in everyday situations. This includes understanding that glass breaks when dropped, that people have goals, that yesterday precedes today, and that a bird can fly unless it is penguined. The benchmark challenge is that such knowledge is vast, largely unspoken, and deeply contextual, making it difficult to encode exhaustively in any formal representation.

- ### Relationships
  - Common Sense Reasoning is a capability that sits within [[Natural Language Understanding]] and is exercised through [[Natural Language Processing]] pipelines. It is essential for capable [[AI Agents]] that must act sensibly in open-ended environments. It bears on [[AI Alignment]] because systems lacking common sense may comply with the letter of instructions while violating their spirit. Broader [[Collective Intelligence]] research treats common sense as a property of human social cognition that AI must partially replicate.

- ### Content
  - Efforts to encode common sense into AI date to the 1960s CYC project (Douglas Lenat, 1984 onward), which attempted to manually encode millions of everyday facts and inference rules into a formal knowledge base. Despite decades of work, CYC demonstrated both the feasibility and the staggering labour cost of symbolic common sense representation. Parallel efforts — ConceptNet, OpenCyc, WordNet — took more lightweight approaches, building semantic networks of commonsense relationships crowdsourced from humans.

  - The advent of large language models (LLMs) shifted the paradigm. Models trained on internet-scale text absorb vast implicit common-sense knowledge through statistical regularities in language use. Benchmarks including CommonsenseQA, HellaSwag, WinoGrande, and Physical Intuition QA (PIQA) measure specific dimensions of commonsense inference. LLMs score well on these benchmarks but exhibit characteristic failure modes: they can hallucinate physically impossible scenarios, misattribute agency, and fail on superficially similar but systematically different inputs — exposing the gap between statistical plausibility and genuine causal understanding.

  - Hybrid neurosymbolic approaches attempt to combine the breadth of LLM representations with the structural rigour of knowledge graphs and logic engines. Systems like NeuroSymbolic Concept Learner and COMET-ATOMIC (a neural commonsense knowledge model) generate and retrieve commonsense knowledge on demand, augmenting LLM inference. Reinforcement learning from human feedback (RLHF) and constitutional AI techniques further guide models toward commonsense-consistent outputs by penalising physically implausible or socially incoherent responses during training.

  - In 2024–2025, common sense reasoning remains an active research frontier. Frontier models (GPT-4, Gemini 1.5, Claude 3) handle many commonsense benchmarks near-human-level but continue to fail on adversarial probes and novel physical scenarios not well represented in training data. Embodied AI and robot learning research — grounding language models in physical interaction through simulation and real-world manipulation — is increasingly viewed as the most promising path to robust common sense acquisition, as physical grounding provides the causal signal absent from text alone.