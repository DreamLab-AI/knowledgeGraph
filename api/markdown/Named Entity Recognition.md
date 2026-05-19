schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#NamedEntityRecognition
legacy_uri:: urn:visionclaw:concept:spatial-computing:named-entity-recognition
public:: true

# Named Entity Recognition
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9af3c3dd60ccd5abfc45fd590ea83ce04ff18e26056846c18e01f8dde1fa6858",
  "@type": "Page",
  "vc:slug": "named-entity-recognition",
  "title": "Named Entity Recognition",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:information-extraction",
      "vc:label": "Information Extraction"
    },
    {
      "@id": "urn:visionflow:owl:class:bert",
      "vc:label": "BERT"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:natural-language-processing",
      "vc:label": "Natural Language Processing"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-2ade7a03fb81"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#NamedEntityRecognition"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0368"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Named Entity Recognition"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:named-entity-recognition"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:named-entity-recognition"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9af3c3dd60ccd5abfc45fd590ea83ce04ff18e26056846c18e01f8dde1fa6858@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:named-entity-recognition",
  "@type": "Class",
  "label": "Named Entity Recognition",
  "definition": "Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories.",
  "domain": "artificial-intelligence",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:natural-language-processing",
      "label": "Natural Language Processing"
    }
  ],
  "quality": 0.5,
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
  "@id": "urn:visionflow:annotation:link-resolutions:named-entity-recognition:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9af3c3dd60ccd5abfc45fd590ea83ce04ff18e26056846c18e01f8dde1fa6858"
  },
  "vc:resolutions": [
    {
      "raw": "[[Information Extraction]]",
      "resolved": "urn:visionflow:linked:information-extraction",
      "kind": "StubLink"
    },
    {
      "raw": "[[BERT]]",
      "resolved": "urn:visionflow:owl:class:bert",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Natural Language Processing]]",
      "resolved": "urn:visionflow:owl:class:natural-language-processing",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9af3c3dd60ccd5abfc45fd590ea83ce04ff18e26056846c18e01f8dde1fa6858@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search.

- ### Semantic Classification
  - owl-class:: spatial-computing:NamedEntityRecognition
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search.

  - ## Converting 2D Plans into 3D Models
		- **usBIM.planAI** ([ACCA tool](https://www.accasoftware.com/en/2d-to-3d-how-to-convert-2d-files-into-3d-models))
			- Upload PNG, JPG or PDF plans; AI recognises walls, doors and rooms; outputs IFC for import into Vectorworks.
		- **Planner 5D AI** ([service](https://planner5d.com/ai))
			- Fast floor-plan recognition from images; yields a basic 3D layout you can reference or rebuild precisely.
		- **Coohom Floor Plan to 3D** ([overview](https://www.coohom.com/article/floor-plan-to-3d-ai))
			- One-click conversion with auto-furnished interiors; ideal for rapid prototyping and client approvals.
		- Other services (GetFloorPlan, RoomSketcher) offer similar AI-assisted conversions for sketches or scanned plans.
  - Start with a simple RAG setup in Logseq or Obsidian linked to your Vectorworks export folder so that every time you update a client plan, your AI system can index it.
  - Use the AI Visualizer for rapid concept boards, then refine chosen options in Veras or Enscape for client review.
  - Incorporate AR with Vectorworks Nomad on site visits—clients love seeing designs overlaid in real space.
  - Keep stylistic consistency by choosing one illustration pipeline (for example, Stable Diffusion plus a ControlNet line-art workflow) and training a small set of prompts or custom LoRAs so that your presentations always look cohesive.

  - ## Converting 2D Plans into 3D Models
		- **usBIM.planAI** ([ACCA tool](https://www.accasoftware.com/en/2d-to-3d-how-to-convert-2d-files-into-3d-models))
			- Upload PNG, JPG or PDF plans; AI recognises walls, doors and rooms; outputs IFC for import into Vectorworks.
		- **Planner 5D AI** ([service](https://planner5d.com/ai))
			- Fast floor-plan recognition from images; yields a basic 3D layout you can reference or rebuild precisely.
		- **Coohom Floor Plan to 3D** ([overview](https://www.coohom.com/article/floor-plan-to-3d-ai))
			- One-click conversion with auto-furnished interiors; ideal for rapid prototyping and client approvals.
		- Other services (GetFloorPlan, RoomSketcher) offer similar AI-assisted conversions for sketches or scanned plans.
  - Start with a simple RAG setup in Logseq or Obsidian linked to your Vectorworks export folder so that every time you update a client plan, your AI system can index it.
  - Use the AI Visualizer for rapid concept boards, then refine chosen options in Veras or Enscape for client review.
  - Incorporate AR with Vectorworks Nomad on site visits—clients love seeing designs overlaid in real space.
  - Keep stylistic consistency by choosing one illustration pipeline (for example, Stable Diffusion plus a ControlNet line-art workflow) and training a small set of prompts or custom LoRAs so that your presentations always look cohesive.

  - ## Devin
		- {{video https://www.youtube.com/watch?v=fjHtjT7GO1c&}}
		- [Blog (cognition-labs.com)](https://www.cognition-labs.com/blog)

  - ## Converting 2D Plans into 3D Models
		- **usBIM.planAI** ([ACCA tool](https://www.accasoftware.com/en/2d-to-3d-how-to-convert-2d-files-into-3d-models))
			- Upload PNG, JPG or PDF plans; AI recognises walls, doors and rooms; outputs IFC for import into Vectorworks.
		- **Planner 5D AI** ([service](https://planner5d.com/ai))
			- Fast floor-plan recognition from images; yields a basic 3D layout you can reference or rebuild precisely.
		- Other services (GetFloorPlan, RoomSketcher) offer similar AI-assisted conversions for sketches or scanned plans.
  - Incorporate AR with Vectorworks Nomad on site visits—clients love seeing designs overlaid in real space.
  - Keep stylistic consistency by choosing one illustration pipeline (for example, Stable Diffusion plus a ControlNet line-art workflow) and training a small set of prompts or custom LoRAs so that your presentations always look cohesive.

  - ## The blurred line of identity
  - ![GODgca6bAAAxaPB.jpeg](assets/GODgca6bAAAxaPB_1716366033099_0.jpeg)

  ## Core Characteristics

  - **Entity Detection**: Identification of entity boundaries in text
  - **Entity Classification**: Assignment to predefined categories (PER, ORG, LOC, DATE)
  - **Contextual Understanding**: Disambiguation using surrounding context
  - **Multi-Domain Support**: Adaptation to medical, legal, financial domains
  - **Few-Shot Learning**: Transfer learning for new entity types

  ## Relationships

  - **Subclass**: Natural Language Processing
  - **Related**: Information Extraction, Knowledge Graph, Sequence Labelling
  - **Models**: BERT-NER, SpaCy, Flair, BiLSTM-CRF
  - **Applications**: Information Extraction, Knowledge Graphs, Question Answering

  ## Key Literature

  1. Lample, G., et al. (2016). "Neural architectures for named entity recognition." *NAACL*, 260-270.

  2. Devlin, J., et al. (2019). "BERT: Pre-training of deep bidirectional transformers for language understanding." *NAACL*, 4171-4186.

  3. Li, J., et al. (2020). "A survey on deep learning for named entity recognition." *IEEE TKDE*, 34(1), 50-70.

  ## See Also

  - [[Natural Language Processing]]
  - [[Information Extraction]]
  - [[BERT]]

  ## Core Characteristics

  - **Entity Detection**: Identification of entity boundaries in text
  - **Entity Classification**: Assignment to predefined categories (PER, ORG, LOC, DATE)
  - **Contextual Understanding**: Disambiguation using surrounding context
  - **Multi-Domain Support**: Adaptation to medical, legal, financial domains
  - **Few-Shot Learning**: Transfer learning for new entity types

  ## Relationships

  - **Subclass**: Natural Language Processing
  - **Related**: Information Extraction, Knowledge Graph, Sequence Labelling
  - **Models**: BERT-NER, SpaCy, Flair, BiLSTM-CRF
  - **Applications**: Information Extraction, Knowledge Graphs, Question Answering

  ## Key Literature

  1. Lample, G., et al. (2016). "Neural architectures for named entity recognition." *NAACL*, 260-270.

  2. Devlin, J., et al. (2019). "BERT: Pre-training of deep bidirectional transformers for language understanding." *NAACL*, 4171-4186.

  3. Li, J., et al. (2020). "A survey on deep learning for named entity recognition." *IEEE TKDE*, 34(1), 50-70.

  ## See Also

  - [[Natural Language Processing]]
  - [[Information Extraction]]
  - [[BERT]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
