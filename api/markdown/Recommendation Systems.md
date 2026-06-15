public:: true

# Recommendation Systems
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:recommendation-systems",
  "@type": "Page",
  "vc:slug": "recommendation-systems",
  "title": "Recommendation Systems",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:recommendation-systems",
  "@type": "Class",
  "label": "Recommendation Systems",
  "definition": "Recommendation Systems are information filtering systems that predict a user's preference for items—products, content, services—and surface the most relevant items from a large catalogue. They are categorised into collaborative filtering (leveraging the behaviour of similar users), content-based filtering (matching item attributes to user profiles), and hybrid approaches that combine both. Modern large-scale recommendation systems employ deep learning architectures, embedding models, and two-tower neural networks trained on implicit feedback signals such as clicks, watch-time, and purchases. Recommendation systems are among the highest-impact machine learning applications in commercial technology, driving substantial fractions of revenue at platforms such as Netflix, Amazon, YouTube, and Spotify, while also raising significant concerns about filter bubbles, engagement maximisation harms, and algorithmic amplification of misinformation.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:machine-learning-discipline",
      "label": "Machine Learning Discipline"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:collaborative-systems-modality-filtering",
        "label": "Collaborative Filtering"
      },
      {
        "@id": "urn:ngm:class:content-based-filtering",
        "label": "Content-Based Filtering"
      },
      {
        "@id": "urn:ngm:class:candidate-generation",
        "label": "Candidate Generation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:implicit-feedback",
        "label": "Implicit Feedback"
      },
      {
        "@id": "urn:ngm:class:feature-engineering",
        "label": "Feature Engineering"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:hyper-personalisation",
        "label": "Hyper personalisation"
      },
      {
        "@id": "urn:ngm:class:predictive-personalization",
        "label": "Predictive Personalization"
      },
      {
        "@id": "urn:ngm:class:content-discovery",
        "label": "Content Discovery"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-neural-network",
        "label": "Graph Neural Network"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-pipeline",
        "label": "Machine Learning Pipeline"
      },
      {
        "@id": "urn:ngm:class:embedding-model",
        "label": "Embedding Model"
      },
      {
        "@id": "urn:ngm:class:two-tower-neural-network",
        "label": "Two-Tower Neural Network"
      },
      {
        "@id": "urn:ngm:class:matrix-factorisation",
        "label": "Matrix Factorisation"
      },
      {
        "@id": "urn:ngm:class:nearest-neighbor-search",
        "label": "Approximate Nearest Neighbour Search"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      },
      {
        "@id": "urn:ngm:class:vector-database",
        "label": "Vector Database"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:search-engine",
        "label": "Search Engine"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:recommendation-engine",
        "label": "Recommendation Engine"
      },
      {
        "@id": "urn:ngm:class:machine-learning-discipline-model",
        "label": "Machine Learning Model"
      },
      {
        "@id": "urn:ngm:class:filter-bubble",
        "label": "Filter Bubble"
      },
      {
        "@id": "urn:ngm:class:algorithmic-amplification",
        "label": "Algorithmic Amplification"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:ai-governance-and-ethics",
        "label": "AI Governance and Ethics"
      },
      {
        "@id": "urn:ngm:class:digital-services-act",
        "label": "Digital Services Act"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:recommender-system",
      "label": "Recommender System"
    },
    {
      "@id": "urn:ngm:class:collaborative-filtering-system",
      "label": "Collaborative Filtering System"
    }
  ],
  "quality": 0.75,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

- ### Definition
  - [[Recommendation Systems]] are [[Machine Learning Discipline]] systems that predict user preferences to surface relevant items from large catalogues, using collaborative filtering, content-based filtering, and hybrid [[Deep Learning]] architectures trained on implicit feedback to power [[Hyper personalisation]] across digital platforms.
- ### Relationships
  - [[Recommendation Systems]] depend on [[Embedding Model]] representations to capture latent relationships between users and items in shared vector spaces, enabling efficient nearest-neighbour retrieval at scale. [[Recommendation Engine]] infrastructure translates offline-trained models into online serving pipelines, while [[Machine Learning Pipeline]] tooling manages feature engineering, training, evaluation, and deployment. [[Deep Learning]] architectures—particularly [[Graph Neural Network]] models that capture social and item-graph structure—have displaced earlier matrix factorisation methods. The systems enable [[Predictive Personalization]] and [[Hyper personalisation]] experiences but raise governance concerns about engagement maximisation that drives harmful content amplification.
- ### Content
  - Recommendation systems address the fundamental information overload problem: as the number of available items—films, products, songs, articles—grows into the millions or billions, users cannot discover relevant content through manual browsing alone. Early collaborative filtering systems such as Amazon's item-to-item CF (2003) demonstrated that purchase co-occurrence patterns could predict complementary purchases with commercially useful accuracy. Netflix's $1 million prize competition (2006–2009) accelerated academic research, producing matrix factorisation and ensemble methods that became industry standard approaches for the following decade.

  - Modern recommendation systems have evolved significantly beyond matrix factorisation. The dominant architecture is the two-tower or dual-encoder model: separate neural networks encode users and items into a shared embedding space, enabling efficient approximate nearest-neighbour retrieval from candidate pools of hundreds of millions of items in milliseconds. These retrieval models are typically followed by a ranking stage—a more expensive neural network that scores a shortlist of candidates using richer features—before final business-rule filtering (deduplication, content policy enforcement, inventory availability). This three-stage retrieve-rank-rerank pipeline is the standard architecture at YouTube, TikTok, and similar large-scale platforms.

  - [[Graph Neural Network]] architectures have become important for capturing higher-order relationship structure that simpler embedding models miss. Pinterest's PinSage and Alibaba's Graph Convolutional Network for recommendation both demonstrated that propagating signals through user-item interaction graphs substantially improves recommendation quality, particularly for long-tail items with sparse direct interaction histories. Social graph signals—who a user follows, whose purchases they observe—provide complementary information that purely item-interaction models cannot access.

  - The societal implications of recommendation systems have attracted increasing regulatory scrutiny. Engagement-optimised systems are accused of creating filter bubbles that reinforce existing beliefs, radicalising users towards increasingly extreme content, and amplifying misinformation because false or sensational content generates high engagement signals. The EU Digital Services Act imposes new transparency and auditability requirements on recommendation systems deployed by very large online platforms, requiring platforms to offer users algorithmic alternatives and to conduct independent algorithmic audits. This intersection of [[Recommendation Systems]] with content governance represents one of the most contested frontiers of [[AI Governance and Ethics]].
