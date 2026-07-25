public:: true

# Part-of-Speech Tagging
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:part-of-speech-tagging",
  "@type": "Page",
  "title": "Part-of-Speech Tagging",
  "vc:slug": "part-of-speech-tagging",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:part-of-speech-tagging",
  "@type": "Class",
  "label": "Part-of-Speech Tagging",
  "definition": "Part-of-speech tagging is the natural language processing task of assigning each word in a sentence a grammatical category, such as noun, verb or adjective, based on its definition and surrounding context. It is a foundational preprocessing step for downstream tasks such as parsing and information extraction, and has historically been solved with statistical sequence models, including hidden Markov models, before being subsumed by neural sequence labelling approaches. Accurate tagging disambiguates words whose part of speech depends on context.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ]
  },
  "quality": 0.65
}
```

- ### Definition
  - Part-of-speech tagging is the natural language processing task of assigning each word in a sentence a grammatical category, such as noun, verb or adjective, based on its definition and surrounding context.
  - It is a subclass of [[Natural Language Processing]].
- ### Content
  - Part-of-speech tagging is the natural language processing task of assigning each word in a sentence a grammatical category, such as noun, verb or adjective, based on its definition and surrounding context. It is a foundational preprocessing step for downstream tasks such as parsing and information extraction, and has historically been solved with statistical sequence models, including hidden Markov models, before being subsumed by neural sequence labelling approaches. Accurate tagging disambiguates words whose part of speech depends on context.
