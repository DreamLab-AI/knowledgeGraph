public:: true

# Graph Neural Networks
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:fd18558e6717f863b00f5358bf13ac671d4f7b1cf425928fcb7249a3aa9b92e1",
  "@type": "Page",
  "vc:slug": "graph-neural-networks",
  "title": "Graph Neural Networks",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:message-passing",
      "vc:label": "Message Passing"
    },
    {
      "@id": "urn:visionflow:linked:graph-theory",
      "vc:label": "Graph Theory"
    },
    {
      "@id": "urn:visionflow:linked:knowledge-graph",
      "vc:label": "Knowledge Graph"
    },
    {
      "@id": "urn:visionflow:linked:deep-learning",
      "vc:label": "Deep Learning Domain"
    },
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Graph Neural Networks"
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
  "@id": "urn:ngm:class:graph-neural-networks",
  "@type": "Class",
  "label": "Graph Neural Networks",
  "definition": "A family of neural network architectures that operate directly on graph-structured data, computing node, edge or graph representations by iteratively exchanging information along edges through message-passing schemes.",
  "domain": "machine-learning",
  "maturity": "growing",
  "qualityScore": 0.7,
  "subClassOf": {
    "@id": "urn:ngm:class:neural-network",
    "label": "Neural Network"
  },
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:message-passing",
        "label": "Message Passing"
      },
      {
        "@id": "urn:ngm:class:graph-theory",
        "label": "Graph Theory"
      },
      {
        "@id": "urn:ngm:class:adjacency-matrix",
        "label": "Adjacency Matrix"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:knowledge-graph",
        "label": "Knowledge Graph"
      },
      {
        "@id": "urn:ngm:class:node-classification",
        "label": "Node Classification"
      },
      {
        "@id": "urn:ngm:class:link-prediction",
        "label": "Link Prediction"
      },
      {
        "@id": "urn:ngm:class:graph-classification",
        "label": "Graph Classification"
      },
      {
        "@id": "urn:ngm:class:recommendation-systems",
        "label": "Recommendation Systems"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:graph-convolutional-network",
        "label": "Graph Convolutional Network"
      },
      {
        "@id": "urn:ngm:class:graph-attention-network",
        "label": "Graph Attention Network"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:deep-learning",
        "label": "Deep Learning"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:backpropagation",
        "label": "Backpropagation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:graph-structured-data",
        "label": "Graph-Structured Data"
      },
      {
        "@id": "urn:ngm:class:embedding",
        "label": "Embedding Representations"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:convolutional-neural-network",
        "label": "Convolutional Neural Network"
      },
      {
        "@id": "urn:ngm:class:recurrent-neural-network",
        "label": "Recurrent Neural Network"
      },
      {
        "@id": "urn:ngm:class:transformer",
        "label": "Transformer"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:social-network-analysis",
        "label": "Social Network Analysis"
      },
      {
        "@id": "urn:ngm:class:drug-discovery",
        "label": "Drug Discovery"
      },
      {
        "@id": "urn:ngm:class:supply-chain-optimisation",
        "label": "Supply Chain Optimisation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:knowledge-graph-embedding",
        "label": "Knowledge Graph Embedding"
      },
      {
        "@id": "urn:ngm:class:semi-supervised-learning",
        "label": "Semi-Supervised Learning"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:gnn",
      "label": "GNN"
    },
    {
      "@id": "urn:ngm:class:graph-network",
      "label": "Graph Network"
    }
  ],
  "quality": 0.72,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:graph-neural-networks:6bec174064a7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:fd18558e6717f863b00f5358bf13ac671d4f7b1cf425928fcb7249a3aa9b92e1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Message Passing]]",
      "resolved": "urn:visionflow:linked:message-passing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graph Theory]]",
      "resolved": "urn:visionflow:linked:graph-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Knowledge Graph]]",
      "resolved": "urn:visionflow:linked:knowledge-graph",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Deep Learning Domain]]",
      "resolved": "urn:visionflow:linked:deep-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Neural Network]]",
      "resolved": "urn:visionflow:linked:neural-network",
      "kind": "ResolvedLink"
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
  - A family of neural network architectures that operate directly on graph-structured data, computing node, edge or graph representations by exchanging information along edges.

- ### Semantic Classification
  - owl-class:: deep-learning:GraphNeuralNetworks
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Neural Network]]
  - bridges-to:: [[Deep Learning Domain]]
  - requires:: [[Message Passing]], [[Graph Theory]]
  - enables:: [[Knowledge Graph]]

- ### Content
  - Graph neural networks (GNNs) generalise convolution to irregular graph domains. Most follow a message-passing scheme in which each node aggregates feature information from its neighbours and updates its own representation, repeated over several layers to capture larger neighbourhoods.
  - GNNs are applied to tasks such as node classification, link prediction and graph classification across domains including molecules, social networks and recommendation systems. Design choices include the aggregation function, the depth of message passing and methods to mitigate over-smoothing when many layers are stacked.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
