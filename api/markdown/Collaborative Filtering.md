public:: true

# Collaborative Filtering
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:collaborative-filtering",
  "@type": "Page",
  "vc:slug": "collaborative-filtering",
  "title": "Collaborative Filtering",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collaborative-systems-modality-filtering",
  "@type": "Class",
  "label": "Collaborative Filtering",
  "definition": "Collaborative filtering is a machine learning technique for building recommendation systems that generates predictions about user preferences by aggregating the behaviour or ratings of many users, without requiring explicit knowledge of item content. Memory-based approaches compute similarity between users (user-based) or items (item-based) using rating vectors; model-based approaches such as matrix factorisation decompose the user-item interaction matrix into latent factor spaces. The method operates on the assumption that users who agreed in the past will agree in the future, and is the foundational algorithm behind recommendation engines at Netflix, Spotify, and Amazon.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:machine-learning-discipline-technique", "label": "Machine Learning Technique"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:recommendation-engine", "label": "Recommendation Engine"},
      {"@id": "urn:ngm:class:recommendation-system", "label": "Recommendation System"},
      {"@id": "urn:ngm:class:hyper-personalisation", "label": "Hyper personalisation"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:machine-learning-discipline", "label": "Machine Learning Discipline"},
      {"@id": "urn:ngm:class:embeddings", "label": "Embeddings"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:recommendation-systems", "label": "Recommendation Systems"},
      {"@id": "urn:ngm:class:data-privacy", "label": "Data Privacy"},
      {"@id": "urn:ngm:class:privacy-preserving-data-mining", "label": "Privacy Preserving Data Mining"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - [[Collaborative Filtering]] is a [[Machine Learning Technique]] that infers user preferences by identifying patterns across aggregated user behaviour data—ratings, clicks, or purchases—to power [[Recommendation System]] engines without requiring analysis of item content.

- ### Relationships
  - Collaborative filtering is a subclass of [[Machine Learning Technique]] that powers [[Recommendation Engine]] and [[Recommendation System]] deployments enabling [[Hyper personalisation]] in consumer platforms. It relies on [[Machine Learning Discipline]] optimisation of latent factor models and increasingly uses learned [[Embeddings]] to represent users and items in shared vector spaces. Broader [[Recommendation Systems]] taxonomies contrast it with content-based filtering. Privacy considerations are significant: collaborative filtering requires large-scale behavioural data, raising [[Data Privacy]] concerns addressed through [[Privacy Preserving Data Mining]] techniques such as federated learning and differential privacy.

- ### Content
  - Collaborative filtering was first described explicitly by Goldberg, Nichols, Oki, and Terry in the 1992 Tapestry email filtering system at Xerox PARC, and popularised by GroupLens at the University of Minnesota in 1994 for Usenet article recommendation. Early implementations were memory-based (neighbourhood methods): for a target user, the system finds the k most similar users (cosine or Pearson correlation on rating vectors) and aggregates their ratings for unseen items as weighted predictions. Item-based collaborative filtering, introduced by Amazon in 2003, computes item-to-item similarity instead, which scales better to large catalogues because item similarity matrices change slowly.

  - Modern collaborative filtering is predominantly model-based, with matrix factorisation as the dominant approach. The user-item interaction matrix R (of shape users × items) is decomposed into two low-rank matrices P (users × k) and Q (items × k) whose product approximates R; latent factors k typically range from 20 to 200. Optimisation minimises reconstruction error with L2 regularisation using stochastic gradient descent or alternating least squares. The Netflix Prize (2006–2009) drove major advances, with the winning ensemble combining factorisation with neighbourhood methods and temporal dynamics. Deep learning extensions—neural collaborative filtering, variational autoencoders, transformer-based sequence models—now dominate research and production recommendation systems at scale.

  - Collaborative filtering underpins recommendation at every major consumer digital platform. Netflix attributes approximately 80% of watched content to its recommendation system; Spotify's Discover Weekly uses user-item embeddings from collaborative filtering trained on billions of listening events; Amazon's item-to-item collaborative filtering was documented to drive 35% of total sales in early studies. The technique extends beyond consumer recommendation to enterprise use cases: drug repurposing (identifying novel compound-disease interactions from clinical trial outcome matrices), materials discovery, and academic paper recommendation in scholarly databases.

  - The principal challenges entering 2024–2025 are cold-start (new users or items with no interaction history), scalability to billions of users and hundreds of millions of items, and privacy compliance. Federated collaborative filtering trains models on-device without centralising raw behavioural data, addressing GDPR and similar regulatory constraints. Large language model embeddings are increasingly used as item representations to bridge content and collaborative signals in hybrid models, partially mitigating the cold-start problem. Responsible AI concerns include filter bubbles, popularity bias, and the amplification of majority-group preferences at the expense of minority tastes.