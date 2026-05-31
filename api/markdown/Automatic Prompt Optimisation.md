public:: true

# Automatic Prompt Optimisation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:automatic-prompt-optimisation",
  "@type": "Page",
  "vc:slug": "automatic-prompt-optimisation",
  "title": "Automatic Prompt Optimisation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:automatic-prompt-optimisation",
  "@type": "Class",
  "label": "Automatic Prompt Optimisation",
  "definition": "Automatic prompt optimisation is a set of techniques that algorithmically search for or refine the prompts given to a large language model to maximise task performance, rather than relying on manual prompt crafting. Methods include gradient-free search, reinforcement learning, evolutionary algorithms, and LLM-driven self-improvement loops that score candidate prompts against an evaluation metric. It reduces the brittleness and labour of hand-tuned prompting and is a core component of mature prompt-engineering workflows.",
  "domain": "ai",
  "maturity": "emerging",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:prompt-engineering", "label": "Prompt Engineering"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Automatic prompt optimisation algorithmically discovers and refines effective prompts, automating a core part of [[Prompt Engineering]].
- ### Content
  - Approaches range from discrete search over candidate phrasings to continuous soft-prompt tuning and meta-prompting where an LLM proposes improvements to its own instructions. Each candidate is scored on a held-out evaluation set, and the search retains high-performing prompts, yielding measurable gains without manual iteration.
