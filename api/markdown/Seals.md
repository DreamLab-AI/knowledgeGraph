public:: true

# Seals
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8f3dd853954ae0ae53a6b3d2a51ad3a2eeb0a859b11da7c6294d51979562eeb0",
  "@type": "Page",
  "vc:slug": "seals",
  "title": "Seals",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Seals"
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
  "@id": "urn:ngm:class:seals",
  "@type": "Class",
  "label": "Seals",
  "definition": "Seals, in this knowledge graph context, refers to a practical AI pipeline experiment using traditional Chinese seal art (海豹-style stamps) as a five-shot image classification and translation task. The experiment demonstrates multimodal AI capabilities: image analysis via OpenAI vision APIs, English description generation, Chinese translation, and appropriateness ranking, subsequently serialised to JSON for potential NFT metadata enrichment.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:multimodal-ai", "label": "Multimodal AI"},
      {"@id": "urn:ngm:class:image-generation", "label": "Image Generation"},
      {"@id": "urn:ngm:class:generative-ai", "label": "Generative AI"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:nft", "label": "NFT"},
      {"@id": "urn:ngm:class:digital-asset", "label": "Digital Asset"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"}
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:seals:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:8f3dd853954ae0ae53a6b3d2a51ad3a2eeb0a859b11da7c6294d51979562eeb0"
  },
  "vc:resolutions": [],
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
  - Seals, in this knowledge graph context, refers to a practical AI pipeline experiment using traditional Chinese seal art (海豹-style stamps) as a five-shot image classification and translation task. The experiment demonstrates multimodal AI capabilities: image analysis via OpenAI vision APIs, English description generation, Chinese translation, and appropriateness ranking, subsequently serialised to JSON for potential NFT metadata enrichment.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:Seals
  - owl-role:: Concept

- ### Relationships
  - **uses**: Multimodal AI — the pipeline uses vision and language models in combination; Image Generation — image analysis and description generation are the core AI tasks; Generative AI — the translation and summarisation steps leverage generative AI.
  - **enables**: NFT — the pipeline generates structured metadata that could enrich NFT records; Digital Asset — the seal images processed are candidates for digital asset encoding.
  - **relatedTo**: Computer Vision — image analysis of seal artwork is a computer vision classification task.

- ### Content
  - This is [海豹
	 - Chinese Seal](https://en.wiktionary.org/wiki/%E6%B5%B7%E8%B1%B9)
  - Five shot example with 256x256 gif of the image uploaded
  - ![photo_2024-01-09_18-10-53.jpg](../assets/photo_2024-01-09_18-10-53_1705085581457_0.jpg)
  - ![photo_2024-01-12_14-38-01.jpg](../assets/photo_2024-01-12_14-38-01_1705085469063_0.jpg)
  - ```mermaid
  sequenceDiagram
      participant Client as Client Script
      participant FS as File System
      participant OpenAI as OpenAI API
      participant Translator as Translation Service
      Note over Client, Translator: Initialization phase
      Client->>FS: Load JSON data and GIF image paths
      loop For each NFT
          Client->>FS: Retrieve next JSON and GIF
          FS-->>Client: JSON data and GIF path
          Client->>OpenAI: Send GIF and JSON for analysis
          OpenAI-->>Client: Return text summary in English
          Client->>Translator: Translate summary to Chinese
          Translator-->>Client: Return Chinese summary
          Client->>OpenAI: Request appropriateness ranking
          OpenAI-->>Client: Return ranking result
          Client->>FS: Save updated JSON with summaries and ranking
      end
      Client->>Client: Validate updated JSON files
      Note over Client: End of processing

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
