public:: true

# Back-Translation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:back-translation",
  "@type": "Page",
  "vc:slug": "back-translation",
  "title": "Back-Translation",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:back-translation",
  "@type": "Class",
  "label": "Back-Translation",
  "definition": "Back-translation is a data augmentation and quality-assurance technique in machine translation where text translated into a target language is translated back into the source language. As an augmentation method, monolingual target-language data is translated into the source language to create synthetic parallel pairs that improve translation models. As a QA method, the round-trip output is compared with the original to detect meaning drift.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:translation", "label": "Translation"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - Back-translation translates text into a target language and back again, serving both as a data-augmentation method and a quality check for [[Translation]] systems.
- ### Content
  - In neural machine translation, large monolingual corpora in the target language are translated into the source to synthesise additional training pairs, substantially improving low-resource performance. The same round-trip mechanism is used to flag mistranslations when the recovered text diverges semantically from the input.
