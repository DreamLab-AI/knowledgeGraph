public:: true

# Content-Based Filtering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:26157190a0c2c192890c6d132b2b8dcece70ac0664e50ea55a544366f5bd83e4",
  "@type": "Page",
  "vc:slug": "content-based-filtering",
  "title": "Content-Based Filtering",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:recommendation-systems",
      "vc:label": "Recommendation Systems"
    },
    {
      "@id": "urn:visionflow:linked:collaborative-filtering",
      "vc:label": "Collaborative Filtering"
    },
    {
      "@id": "urn:visionflow:linked:content-discovery",
      "vc:label": "Content Discovery"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:content-based-filtering",
  "@type": "Class",
  "label": "Content-Based Filtering",
  "definition": "A recommendation technique that suggests items by matching the attributes of items a user has previously engaged with — such as text features, genres, tags, or learned embeddings — against the attributes of candidate items, building a per-user preference profile in feature space; it requires no data about other users, handles new items gracefully, and offers explainable suggestions, but tends to over-specialise, recommending only items similar to what the user already knows.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:recommendation-systems",
    "label": "Recommendation Systems"
  },
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:content-discovery",
        "label": "Content Discovery"
      },
      {
        "@id": "urn:ngm:class:hyper-personalisation",
        "label": "Hyper Personalisation"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-filtering",
        "label": "Collaborative Filtering"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:filter-bubble",
        "label": "Filter Bubble"
      }
    ]
  },
  "quality": 0.8,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-07T00:00:00Z",
    "inferenceRule": "ResearchAugment"
  }
}
```

- ### Definition
  - "A recommendation technique that suggests items by matching the attributes of items a user has previously engaged with — such as text features, genres, tags, or learned embeddings — against the attributes of candidate items, building a per-user preference profile in feature space; it requires no data about other users, handles new items gracefully, and offers explainable suggestions, but tends to over-specialise, recommending only items similar to what the user already knows."

- ### Semantic Classification
  - owl-class:: machine-learning:ContentBasedFiltering
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Recommendation Systems]]
  - contrasts-with:: [[Collaborative Filtering]]
  - part-of:: [[Content Discovery]]

- ### Content

  ## Definition

  **Content-based filtering** recommends items to a user by comparing item attributes with a profile of that user's demonstrated preferences. Each item is represented as a feature vector — classically TF-IDF weights over text, genre and metadata tags, or, in modern systems, dense embeddings from neural encoders. The user profile is an aggregate (often a weighted mean) of the vectors of items they have rated, watched, or purchased. Candidate items are scored by similarity to this profile, typically with cosine similarity or a learned relevance model, and the top-scoring items are surfaced.

  The approach contrasts directly with [[Collaborative Filtering]], which ignores item content and instead exploits patterns across the user–item interaction matrix ("users like you also liked..."). Content-based methods need no other users' data, which gives them three practical advantages: new items can be recommended immediately from their attributes (no item cold-start), recommendations remain available for niche users with unusual tastes, and each suggestion can be explained in terms of concrete features. Their characteristic failure is over-specialisation — the system keeps recommending close neighbours of past consumption and rarely produces serendipitous discoveries, a dynamic that feeds the [[Filter Bubble]] phenomenon.

  Production recommenders almost always deploy hybrids: content features handle cold-start and long-tail items, collaborative signals supply serendipity and social proof, and a ranking model blends both. Within this graph, content-based filtering is one functional component of [[Content Discovery]] pipelines and of hyper-personalisation systems.

  ## Technical Details

  A minimal pipeline has three stages. **Item representation**: extract features per item — TF-IDF or BM25 for text; one-hot or learned embeddings for categorical metadata; CNN, audio, or transformer embeddings for images, music, and long-form text. **Profile construction**: aggregate the vectors of positively engaged items, usually with recency weighting and negative feedback subtraction; Rocchio's relevance-feedback formula is the classical formulation. **Scoring**: rank candidates by cosine similarity or feed profile and item vectors into a learned model (logistic regression through to two-tower neural retrieval, where one tower encodes the user history and the other the item content). Modern large-scale systems blur the line: two-tower and sequence models such as SASRec consume content embeddings as inputs, making "content-based" one signal within a learned ranking stack rather than a standalone algorithm. Evaluation uses ranking metrics (precision@k, nDCG, MAP) plus beyond-accuracy measures — diversity, novelty, and catalogue coverage — precisely because content-based systems score well on accuracy while narrowing exposure.

  ## Current Landscape

  - **Semantic IDs**: content-derived discrete item tokens (RQ-VAE quantised embeddings) have become the dominant successor to random hashed item IDs; Spotify Research (September 2025) showed that embeddings fine-tuned jointly for search and recommendation give the best cross-task Semantic IDs.
  - **Generative retrieval in production**: YouTube and Google DeepMind's PLUM framework (arXiv:2510.07784, October 2025) fuses multi-modal content embeddings into SID-v2 tokens and is in production for YouTube recommendations, delivering a reported +4.96% panel CTR lift for Shorts in live A/B tests — content signals now sit inside LLM-native generative recommenders rather than standalone content-based scorers.
  - **LLM-as-recommender scaling**: a September 2025 study (arXiv:2509.25522) found SID-based generative recommendation saturates with scale, whereas directly using LLMs as recommenders (44M–14B parameters tested) scales better, improving up to 20% over the best SID configurations.
  - **Enhancement-layer pattern**: the LF AI & Data survey (August 2025) describes the prevailing non-generative architecture — LLMs generate semantic item/user embeddings and enrich features feeding conventional ranking stacks, i.e. content-based filtering re-implemented on foundation-model representations.

  **Sources**:
  - https://research.atspotify.com/2025/9/semantic-ids-for-generative-search-and-recommendation
  - https://arxiv.org/html/2510.07784v1
  - https://arxiv.org/abs/2509.25522
  - https://lfaidata.foundation/communityblog/2025/08/25/leverage-llm-for-next-gen-recommender-systems-technical-deep-dive-into-llm-enhanced-recommender-architectures/

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
