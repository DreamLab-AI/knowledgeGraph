- ### Definition
  - Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search.

- ### Semantic Classification
  - owl-class:: spatial-computing:NamedEntityRecognition
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - uses:: [[Transformer Architecture]]
  - uses:: [[Encoder]]
  - enables:: [[Knowledge Graph Construction]]
  - enables:: [[Information Retrieval]]
  - enables:: [[Question Answering]]
  - partOf:: [[Natural Language Processing]]

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