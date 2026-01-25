- ### OntologyBlock
  id:: named-entity-recognition-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0368
	- preferred-term:: Named Entity Recognition
	- source-domain:: mv
	- status:: draft
- definition:: Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :NamedEntityRecognition))

;; Annotations
(AnnotationAssertion rdfs:label :NamedEntityRecognition "Named Entity Recognition"@en)
(AnnotationAssertion rdfs:comment :NamedEntityRecognition "Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search."@en)

;; Taxonomic Relationships
(SubClassOf :NamedEntityRecognition :NaturalLanguageProcessing)

;; Semantic Relationships
(SubClassOf :NamedEntityRecognition
  (ObjectSomeValuesFrom :relatedTo :InformationExtraction))
(SubClassOf :NamedEntityRecognition
  (ObjectSomeValuesFrom :relatedTo :Bert))
(SubClassOf :NamedEntityRecognition
  (ObjectSomeValuesFrom :relatedTo :NaturalLanguageProcessing))

;; Data Properties
(AnnotationAssertion dcterms:identifier :NamedEntityRecognition "AI-0368"^^xsd:string)
(DataPropertyAssertion :isAITechnology :NamedEntityRecognition "true"^^xsd:boolean)
```

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

## Metadata

- **Domain**: NLP, Information Extraction
- **Maturity**: Production deployment
	- maturity:: draft
	- owl:class:: mv:NamedEntityRecognition
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: named-entity-recognition-relationships
- ## About Named Entity Recognition
	- Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search.

	- ## Converting 2D Plans into 3D Models
		- **usBIM.planAI** ([ACCA tool](https://www.accasoftware.com/en/2d-to-3d-how-to-convert-2d-files-into-3d-models))
			- Upload PNG, JPG or PDF plans; AI recognises walls, doors and rooms; outputs IFC for import into Vectorworks.
		- **Planner 5D AI** ([service](https://planner5d.com/ai))
			- Fast floor-plan recognition from images; yields a basic 3D layout you can reference or rebuild precisely.
		- **Coohom Floor Plan to 3D** ([overview](https://www.coohom.com/article/floor-plan-to-3d-ai))
			- One-click conversion with auto-furnished interiors; ideal for rapid prototyping and client approvals.
		- Other services (GetFloorPlan, RoomSketcher) offer similar AI-assisted conversions for sketches or scanned plans.
		-
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
		-
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
		-
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

## Metadata

- **Domain**: NLP, Information Extraction
- **Maturity**: Production deployment
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Named Entity Recognition
		  
		  **Term ID**: AI-0368
		  **Category**: Domain Applications → NLP Applications
		  **Status**: Stable
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search.
		  
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
		  
		  ## Metadata
		  
		  - **Domain**: NLP, Information Extraction
		  - **Maturity**: Production deployment
		  
		  ```

    - measured-by:: [[Natural Language Processing]]

- public-access:: true
	- definition:: Named Entity Recognition (NER) is the NLP task of identifying and classifying named entities (persons, organisations, locations, dates, quantities) within unstructured text into predefined categories. NER systems employ transformer-based models (BERT, RoBERTa) with sequence labelling architectures (CRF, BiLSTM-CRF) to extract structured information from documents, enabling information extraction, knowledge graph construction, and semantic search.



## Academic Context

- Named Entity Recognition (NER) is a foundational task in natural language processing (NLP) focused on identifying and categorising named entities—such as persons, organisations, locations, dates, and quantities—within unstructured text.
  - Originating from the Message Understanding Conferences (MUC) in the 1990s, NER has evolved from rule-based systems to sophisticated machine learning and deep learning approaches.
  - The academic foundations lie in sequence labelling, probabilistic models, and more recently, transformer-based architectures that leverage contextual embeddings for improved accuracy.
  - NER plays a critical role in semantic understanding, information extraction, and downstream applications like knowledge graph construction and question answering.

## Current Landscape (2025)

- Industry adoption of NER is widespread across sectors including finance, healthcare, legal, and media, where automated extraction of structured data from vast text corpora is essential.
  - Modern NER systems predominantly employ transformer models such as BERT, RoBERTa, and their derivatives, often combined with sequence labelling layers like Conditional Random Fields (CRF) or BiLSTM-CRF architectures to capture entity boundaries and dependencies.
  - Despite advances, challenges remain in handling ambiguous entities, domain adaptation, and multilingual contexts.
- Notable platforms integrating NER include cloud AI services (e.g., AWS Comprehend, Google Cloud NLP), open-source frameworks (SpaCy, Hugging Face Transformers), and specialised enterprise solutions.
- In the UK, and particularly in North England, organisations and academic institutions increasingly leverage NER for regional data analytics, digital humanities, and public sector information management.
  - Cities such as Manchester, Leeds, Newcastle, and Sheffield host innovation hubs and research groups focusing on NLP applications, including NER, often collaborating with industry partners.
- Standards and frameworks for NER evaluation and deployment continue to mature, emphasising reproducibility, fairness, and explainability.

## Research & Literature

- Key academic contributions include:
  - Lample, G., Ballesteros, M., Subramanian, S., Kawakami, K., & Dyer, C. (2016). *Neural Architectures for Named Entity Recognition*. Proceedings of NAACL-HLT 2016. DOI: 10.18653/v1/N16-1030
  - Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). *BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding*. NAACL-HLT 2019. DOI: 10.18653/v1/N19-1423
  - Akbik, A., Blythe, D., & Vollgraf, R. (2018). *Contextual String Embeddings for Sequence Labeling*. Proceedings of COLING 2018. URL: https://aclanthology.org/C18-1139/
- Ongoing research explores:
  - Cross-lingual and low-resource NER
  - Incorporation of external knowledge bases for disambiguation
  - Robustness against noisy and domain-specific data
  - Explainability and fairness in entity recognition systems

## UK Context

- The UK has a vibrant NLP research community contributing to NER advancements, with institutions such as the University of Manchester and the University of Leeds leading in applied NLP research.
- North England innovation hubs foster collaborations between academia and industry, focusing on regional language varieties, dialectal challenges, and domain-specific NER applications (e.g., healthcare records in NHS trusts).
- Regional case studies include projects utilising NER to analyse local government documents, social media data for public sentiment, and historical archives digitisation in Sheffield and Newcastle.
- The UK government and private sector increasingly deploy NER-powered tools for regulatory compliance, intelligence analysis, and digital transformation initiatives.

## Future Directions

- Emerging trends include:
  - Integration of multimodal data (text, images, audio) for richer entity recognition
  - Real-time NER in conversational AI and interactive systems
  - Enhanced domain adaptation techniques to reduce annotation costs
  - Greater emphasis on ethical AI, addressing bias and privacy in entity extraction
- Anticipated challenges:
  - Balancing model complexity with deployment efficiency
  - Handling evolving language use and emerging entities dynamically
  - Ensuring transparency and user trust in automated entity recognition
- Research priorities focus on:
  - Developing universally adaptable NER models
  - Leveraging unsupervised and semi-supervised learning
  - Expanding NER capabilities to underrepresented languages and dialects, including regional UK English variants

## References

1. Lample, G., Ballesteros, M., Subramanian, S., Kawakami, K., & Dyer, C. (2016). Neural Architectures for Named Entity Recognition. *Proceedings of NAACL-HLT 2016*. DOI: 10.18653/v1/N16-1030

2. Devlin, J., Chang, M.-W., Lee, K., & Toutanova, K. (2019). BERT: Pre-training of Deep Bidirectional Transformers for Language Understanding. *NAACL-HLT 2019*. DOI: 10.18653/v1/N19-1423

3. Akbik, A., Blythe, D., & Vollgraf, R. (2018). Contextual String Embeddings for Sequence Labeling. *Proceedings of COLING 2018*. URL: https://aclanthology.org/C18-1139/

4. Emeritus. (2025). What is the Relevance of Named Entity Recognition in NLP? Retrieved November 2025, from emeritus.org

5. GeeksforGeeks. (2025). Named Entity Recognition. Retrieved October 2025, from geeksforgeeks.org

6. TechTarget. (2025). What Is Named Entity Recognition (NER)? Retrieved November 2025, from techtarget.com

7. Label Your Data. (2025). Named Entity Recognition: A Practical 2025 Guide. Retrieved November 2025, from labelyourdata.com

8. IBM. (2025). What Is Named Entity Recognition? Retrieved November 2025, from ibm.com

9. Universität der Bundeswehr München. (2025). Paper accepted at ACL 2025 on Named Entity Recognition. Retrieved November 2025, from unibw.de

(If you find yourself wondering whether the 'named entities' include your tea or biscuits, rest assured: for now, they remain firmly in the realm of persons, places, and organisations.)


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
