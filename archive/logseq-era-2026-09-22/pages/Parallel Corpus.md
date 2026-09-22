public:: true

# Parallel Corpus
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:parallel-corpus",
  "@type": "Page",
  "vc:slug": "parallel-corpus",
  "title": "Parallel Corpus",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:parallel-corpus",
  "@type": "Class",
  "label": "Parallel Corpus",
  "definition": "A Parallel Corpus is a collection of texts paired with their translations in one or more other languages, aligned at the sentence or segment level. It provides the supervised training signal for statistical and neural machine-translation systems by exemplifying how meaning maps across languages. The size, quality, and domain coverage of a parallel corpus strongly influence the accuracy of trained translation models.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:translation", "label": "Translation"},
      {"@id": "urn:ngm:class:real-time-translation", "label": "Real-time Translation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A Parallel Corpus is sentence-aligned bilingual or multilingual text that supplies the training signal for [[Translation]] systems, including [[Real-Time Translation]] models.
- ### Content
  - Alignment at the segment level lets models learn how meaning maps between languages. Corpus size, translation quality, and domain coverage directly bound achievable accuracy, so curation and cleaning of parallel data are central concerns in machine-translation development.
