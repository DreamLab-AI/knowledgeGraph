public:: true

# Intent Recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:intent-recognition",
  "@type": "Page",
  "vc:slug": "intent-recognition",
  "title": "Intent Recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:intent-recognition",
  "@type": "Class",
  "label": "Intent Recognition",
  "definition": "Intent recognition is the natural-language-processing task of inferring a user's underlying goal or desired action from an utterance, query, or interaction. It maps free-form input to a discrete set of intents and extracts associated parameters, forming the comprehension layer of conversational systems. Accurate intent recognition is what lets chatbots and voice assistants route requests to the correct skill or response.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:intent-classification", "label": "Intent Classification"},
      {"@id": "urn:ngm:class:chatbots", "label": "Chatbots"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Intent recognition infers a user's goal from their input, mapping language to actionable intents. It closely relates to [[Intent Classification]] and is a core component within [[Chatbots]].
- ### Content
  - Classical pipelines pair intent classifiers with slot-filling for entity extraction; modern systems use transformer encoders or large language models that jointly interpret intent and context. Disambiguation and out-of-scope detection are key to robust dialogue management.
