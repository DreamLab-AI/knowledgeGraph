public:: true

# Few-Shot Examples
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:few-shot-examples",
  "@type": "Page",
  "vc:slug": "few-shot-examples",
  "title": "Few-Shot Examples",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:few-shot-examples",
  "@type": "Class",
  "label": "Few-Shot Examples",
  "definition": "Few-shot examples are a small set of input-output demonstrations placed within a language model's prompt to illustrate the desired task, format, or reasoning pattern. By conditioning on these in-context examples, the model can perform the task without weight updates, leveraging in-context learning. The number, quality, ordering, and representativeness of the examples strongly influence output accuracy and consistency.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:context-engineering", "label": "Context Engineering"},
      {"@id": "urn:ngm:class:few-shot-prompting", "label": "Few-Shot Prompting"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Few-shot examples are the demonstrations embedded in a prompt to guide a language model by example, forming the payload of [[Few-Shot Prompting]] and a key element of [[Context Engineering]]. They are an [[AI Technique]] exploiting in-context learning.
- ### Content
  - Selecting effective few-shot examples involves choosing demonstrations that are representative of the target distribution, formatted consistently, and ordered to avoid recency or majority biases. Because examples consume context-window budget, practitioners balance their number against token limits and may retrieve semantically similar examples dynamically to maximise relevance per prompt.
