public:: true

# PageRank

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:pagerank",
  "@type": "Page",
  "title": "PageRank",
  "vc:slug": "pagerank",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:pagerank",
  "@type": "Class",
  "label": "PageRank",
  "definition": "PageRank is a link-analysis algorithm that assigns a numerical importance score to each node in a directed graph based on the structure of incoming links, modelling importance as the stationary distribution of a random walk that occasionally teleports to a random node. Originally devised to rank web pages by treating hyperlinks as votes whose weight depends on the ranking of the linking page, it generalises to any graph where influence propagates along edges. The scores are computed iteratively until convergence and are robust to local manipulation because importance flows recursively from important neighbours.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:network-analysis",
      "label": "Network Analysis"
    }
  ],
  "relations": {
    "subClassOf": [
      {
        "@id": "urn:ngm:class:network-analysis",
        "label": "Network Analysis"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:search-engine",
        "label": "Search Engine"
      },
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      },
      {
        "@id": "urn:ngm:class:markov-chain",
        "label": "Markov Chain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:search-engine",
        "label": "Search Engine"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:network-analysis",
        "label": "Network Analysis"
      },
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      },
      {
        "@id": "urn:ngm:class:recommendation-system",
        "label": "Recommendation System"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:information-retrieval",
        "label": "Information Retrieval"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
	- [[PageRank]] is a link-analysis algorithm rooted in [[Network Analysis]] that scores the importance of nodes in a directed graph.
	- It treats importance as the stationary distribution of a random walk over a [[Graph Theory]] structure, equivalent to a [[Markov Chain]].
	- Importance flows recursively: a node is important if important nodes link to it.
- ### Overview
	- The algorithm was conceived to rank web pages for [[Information Retrieval]] by interpreting hyperlinks as endorsements weighted by the rank of the source.
	- A damping factor models the probability that the random surfer follows a link rather than teleporting to an arbitrary node, guaranteeing convergence and handling dangling nodes.
	- Scores are computed by repeated multiplication of the rank vector by the transition matrix until the values stabilise.
- ### Mechanisms
	- Construct a transition matrix from the link structure, normalising each node's outgoing edges.
	- Apply the damping factor to mix the link-following walk with uniform teleportation.
	- Iterate the power method until the rank vector converges to the principal eigenvector.
	- Handle sinks and disconnected components through teleportation so every node receives a baseline score.
- ### Applications
	- Ranking results in a [[Search Engine]] and broader [[Information Retrieval]] pipelines.
	- Powering relevance and influence signals inside a [[Recommendation System]].
	- Scoring entity salience within a [[Knowledge Graph]].
	- Detecting influential actors in social and citation networks via [[Network Analysis]].
- ### Relationships
	- partOf:: [[Search Engine]]
	- partOf:: [[Information Retrieval]]
	- uses:: [[Graph Theory]]
	- uses:: [[Markov Chain]]
	- enables:: [[Recommendation System]]
	- supports:: [[Knowledge Graph]]
	- relatedTo:: [[Network Analysis]]
	- bridgesTo:: [[Information Retrieval]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
