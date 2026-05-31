public:: true

# Information Extraction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e7730d0c74eb0802b37c5415e49629f792cf4eabd647eaee725cffc6c8da34fb",
  "@type": "Page",
  "vc:slug": "information-extraction",
  "title": "Information Extraction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:natural-language-processing",
      "vc:label": "Natural Language Processing"
    },
    {
      "@id": "urn:visionflow:linked:computer-science",
      "vc:label": "Computer Science"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Information Extraction"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:information-extraction",
  "@type": "Class",
  "label": "Information Extraction",
  "definition": "Information extraction is the task of automatically deriving structured information, such as entities and relations, from unstructured or semi-structured text.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:natural-language-processing",
        "label": "Natural Language Processing"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:information-extraction:3d45a0d18d48",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e7730d0c74eb0802b37c5415e49629f792cf4eabd647eaee725cffc6c8da34fb"
  },
  "vc:resolutions": [
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:linked:natural-language-processing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Science]]",
      "resolved": "urn:visionflow:linked:computer-science",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Information extraction is the task of automatically deriving structured information, such as entities and relations, from unstructured or semi-structured text.

- ### Semantic Classification
  - owl-class:: machine-learning:InformationExtraction
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Natural Language Processing]]
  - bridges-to:: [[Computer Science]]
  - requires:: [[Natural Language Processing]]

- ### Content
  - Information extraction includes subtasks such as named entity recognition, relation extraction, and event extraction. The goal is to convert free text into structured records that can populate databases or knowledge graphs.
  - Early systems relied on hand-written rules and pattern matching, while modern approaches use supervised machine learning and pretrained language models to label and link entities and relations.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
