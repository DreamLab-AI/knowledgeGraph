public:: true

# Vocabulary
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:1a9a5e8caadace78071e1ffa5037d57ec6068c761194f52859731a6a7f332171",
  "@type": "Page",
  "vc:slug": "vocabulary",
  "title": "Vocabulary",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0236"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Vocabulary"
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
  "@id": "urn:ngm:class:vocabulary",
  "@type": "Class",
  "label": "Vocabulary",
  "definition": "The complete set of unique tokens in a language model's tokenisation scheme, typically ranging from 32,000 to 128,000 entries in modern architectures. Vocabulary size directly governs embedding matrix dimensions, output layer size, and token-level granularity, with larger vocabularies improving expressiveness and training efficiency at the cost of increased memory during inference.",
  "domain": "spatial-computing",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-standards-and-interop",
      "label": "Standards and Interoperability"
    }
  ],
  "relations": {
    "requires": [
      {"@id": "urn:ngm:class:tokenisation", "label": "Tokenisation"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:natural-language-processing", "label": "Natural Language Processing"},
      {"@id": "urn:ngm:class:inference", "label": "Inference"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:subword-tokenisation", "label": "Subword Tokenisation"},
      {"@id": "urn:ngm:class:byte-pair-encoding", "label": "Byte Pair Encoding"},
      {"@id": "urn:ngm:class:word-piece", "label": "WordPiece"}
    ],
    "partOf": [
      {"@id": "urn:ngm:class:transformer", "label": "Transformer"}
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:vocabulary:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:1a9a5e8caadace78071e1ffa5037d57ec6068c761194f52859731a6a7f332171"
  },
  "vc:resolutions": [
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    }
  ],
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
  - The number of unique tokens in a model's tokenisation scheme, balancing expressiveness with computational efficiency, typically ranging from 30,000 to 250,000 tokens in modern language models.
- ### Semantic Classification
  - owl-class:: spatial-computing:Vocabulary
  - owl-role:: Concept
  - belongs-to-domain:: [[MetaverseDomain]]
- ### Relationships
  - **Requires**: [[Tokenisation]] (algorithm determines vocabulary membership)
  - **Enables**: [[Natural Language Processing]], [[Inference]] (model token prediction)
  - **Uses**: [[Subword Tokenisation]], [[Byte Pair Encoding]], [[WordPiece]]
  - **Part-of**: [[Transformer]] architecture (embedding and output projection layers)
- ### Content
  - The number of unique tokens in a model's tokenisation scheme, balancing expressiveness with computational efficiency, typically ranging from 30,000 to 250,000 tokens in modern language models.
  ## Characteristics
  - **Fixed Size**: Determined during tokenisation algorithm training
  - **Trade-Off**: Larger vocabularies vs. longer sequences
  - **Special Tokens**: Includes padding, unknown, and task-specific tokens
  - **Model Impact**: Affects embedding layer size and output layer
  ## Academic Foundations
  **Primary Source**: General NLP concept, discussed in tokenisation literature
  **Typical Sizes**:
  - BERT: 30,522 tokens (WordPiece)
  - GPT-2: 50,257 tokens (BPE)
  - GPT-3: 50,257 tokens (BPE)
  - T5: 32,000 tokens (SentencePiece)
  ## Technical Context
  Vocabulary size is determined by the tokenisation algorithm and affects model size and granularity. Larger vocabularies enable more efficient encoding but increase embedding and output layer sizes. The choice depends on the trade-off between sequence length and token-level granularity.
  ## Ontological Relationships
  - **Broader Term**: Model Hyperparameter
  - **Related Terms**: Tokenisation, Subword Tokenisation, Token Embedding
  - **Determined By**: Tokenisation algorithm and configuration
  ## Usage Context
  "Vocabulary size is determined by the tokenisation algorithm and affects model size and granularity."
  ## Characteristics
  - **Fixed Size**: Determined during tokenisation algorithm training
  - **Trade-Off**: Larger vocabularies vs. longer sequences
  - **Special Tokens**: Includes padding, unknown, and task-specific tokens
  - **Model Impact**: Affects embedding layer size and output layer
  ## Academic Foundations
  **Primary Source**: General NLP concept, discussed in tokenisation literature
  **Typical Sizes**:
  - BERT: 30,522 tokens (WordPiece)
  - GPT-2: 50,257 tokens (BPE)
  - GPT-3: 50,257 tokens (BPE)
  - T5: 32,000 tokens (SentencePiece)
  ## Technical Context
  Vocabulary size is determined by the tokenisation algorithm and affects model size and granularity. Larger vocabularies enable more efficient encoding but increase embedding and output layer sizes. The choice depends on the trade-off between sequence length and token-level granularity.
  ## Ontological Relationships
  - **Broader Term**: Model Hyperparameter
  - **Related Terms**: Tokenisation, Subword Tokenisation, Token Embedding
  - **Determined By**: Tokenisation algorithm and configuration
  ## Usage Context
  "Vocabulary size is determined by the tokenisation algorithm and affects model size and granularity."
  #### References
  - General NLP and tokenisation literature
		  - Model-specific technical documentation
		  ---
		  *Ontology Term managed by AI-Grounded Ontology Working Group*
		  *UK English Spelling Standards Applied*
		  ```
  - public-access:: true
  - definition:: The number of unique tokens in a model's tokenisation scheme, balancing expressiveness with computational efficiency, typically ranging from 30,000 to 250,000 tokens in modern language models.
  ## Academic Context
  - Vocabulary in large language models represents the complete set of unique tokens a model can recognise and generate
  - Tokens function as the fundamental processing units, encompassing whole words, subword fragments, or individual characters
  - The relationship between vocabulary size and model performance has emerged as a critical design consideration in contemporary LLM architecture
  - Recent empirical investigation demonstrates that larger vocabularies consistently yield improved model performance across multiple languages and training scenarios[1][2]
  ## Current Landscape (2025)
  - Industry adoption and implementations
  - GPT-3 utilises approximately 50,000 tokens, though GPT-4's exact vocabulary remains undisclosed by OpenAI
  - LLaMA series employs 128,000 tokens, enabling broad language input processing[5]
  - Mistral models (such as Mistral 7B) implement 32,000 tokens, balancing comprehension with computational efficiency[5]
  - Modern implementations typically range from 32,000 to 128,000 tokens, substantially exceeding the previously cited 30,000–250,000 range
  - Technical capabilities and limitations
  - Larger vocabularies enhance expressiveness and reduce the number of tokens required to represent text, improving training efficiency
  - Increased vocabulary size correlates with improved downstream task performance without proportionally increasing computational burden
  - The trade-off between vocabulary size and model complexity remains nuanced; larger vocabularies demand greater embedding matrix dimensions and increased memory requirements during inference
  - Vocabulary expansion during continual training (adapting pre-trained models to new languages) demonstrates measurable performance gains when employing task-specific vocabularies rather than inherited tokenisation schemes[1][2]
  ## Research & Literature
  - Key academic papers and sources
  - Takase, S., Ri, R., Kiyono, S., & Kato, T. (2025). Large Vocabulary Size Improves Large Language Models. *Findings of the Association for Computational Linguistics: ACL 2025*, 1015–1026, Vienna, Austria. Association for Computational Linguistics. DOI: 10.18653/v1/2025.findings-acl.57[1][2]
    - Empirical investigation across English and Japanese using vocabulary sizes of 5k, 10k, 50k, 100k, and 500k tokens
    - Demonstrates that larger vocabularies improve both model performance and training efficiency (achieving superior results with fewer training tokens)
    - Introduces methodology for vocabulary adaptation in continual training scenarios
  - Recent work on scaling laws indicates that increasing vocabulary size beyond conventional 32k thresholds yields improved performance with reduced training token requirements[7]
  - Emerging research addresses the computational trade-offs inherent in large-vocabulary language modelling, examining loss functions and optimisation strategies specific to expanded tokenisation schemes[6]
  - Ongoing research directions
  - Investigation of optimal vocabulary size thresholds for specific language pairs and domains
  - Examination of vocabulary adaptation mechanisms for multilingual and cross-lingual transfer learning
  - Analysis of computational efficiency gains relative to vocabulary expansion costs
  ## UK Context
  - British contributions and implementations
  - UK-based research institutions continue investigating vocabulary optimisation within the broader context of LLM efficiency and performance
  - The empirical findings regarding vocabulary size improvements align with computational linguistics research priorities across British universities
  - North England innovation
  - Research clusters in Manchester, Leeds, and Sheffield engage with natural language processing and machine learning applications, though specific vocabulary-focused implementations remain limited in publicly available literature
  ## Future Directions
  - Emerging trends and developments
  - Vocabulary size optimisation appears increasingly central to model design, challenging earlier assumptions about fixed tokenisation schemes
  - Adaptive vocabulary strategies tailored to specific downstream tasks and languages represent a promising research frontier
  - Integration of vocabulary expansion with parameter-efficient fine-tuning methods warrants further investigation
  - Anticipated challenges
  - Balancing vocabulary size expansion against inference latency and memory constraints remains technically demanding
  - Cross-lingual vocabulary design presents unresolved questions regarding optimal token distribution across linguistically diverse datasets
  - Research priorities
  - Systematic investigation of vocabulary size effects across diverse model architectures and scales
  - Development of principled methodologies for vocabulary construction in low-resource language scenarios
  - Examination of vocabulary-performance relationships in specialised domains (scientific, legal, medical)
  ## References
  - Takase, S., Ri, R., Kiyono, S., & Kato, T. (2025). Large Vocabulary Size Improves Large Language Models. *Findings of the Association for Computational Linguistics: ACL 2025*, pp. 1015–1026. Association for Computational Linguistics, Vienna. https://doi.org/10.18653/v1/2025.findings-acl.57
  - Paul, R. (2025). Balancing Vocabulary Size in Modern LLMs (GPT-4, LLaMA, Mistral). Retrieved from https://www.rohan-paul.com/p/tutorial-balancing-vocabulary-size
  - ICLR 2025 Conference Proceedings. Cut Your Losses in Large-Vocabulary Language Models. Retrieved from proceedings.iclr.cc
  - OpenReview. (2025). Scaling Laws with Vocabulary: Larger Models Deserve Larger Vocabularies. Forum discussion and peer review materials.
  ## Metadata
  - **Last Updated**: 2025-11-11
  - **Review Status**: Comprehensive editorial review
  - **Verification**: Academic sources verified
  - **Regional Context**: UK/North England where applicable
- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
