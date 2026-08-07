public:: true

# Graph Convolutional Network
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4175431e97f001d54082908c286f88e4840c6d49bff9bc50ab2079d4cd9013fe",
  "@type": "Page",
  "vc:slug": "graph-convolutional-network",
  "title": "Graph Convolutional Network",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:graph-neural-network",
      "vc:label": "Graph Neural Network"
    },
    {
      "@id": "urn:visionflow:linked:graph-attention-network",
      "vc:label": "Graph Attention Network"
    },
    {
      "@id": "urn:visionflow:linked:neural-network",
      "vc:label": "Neural Network"
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
  "@id": "urn:ngm:class:graph-convolutional-network",
  "@type": "Class",
  "label": "Graph Convolutional Network",
  "definition": "A graph neural network architecture that generalises convolution to graph-structured data: each layer updates every node's feature vector by aggregating the degree-normalised features of its neighbours and transforming them with a shared learned weight matrix, so stacked layers propagate information across progressively larger neighbourhoods; formalised by Kipf and Welling in 2017 as a first-order approximation of spectral graph convolution, the GCN is the canonical baseline for node classification, link prediction, and graph-level learning.",
  "domain": "machine-learning",
  "maturity": "established",
  "subClassOf": {
    "@id": "urn:ngm:class:graph-neural-network",
    "label": "Graph Neural Network"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:neural-network",
        "label": "Neural Network"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:graph-attention-network",
        "label": "Graph Attention Network"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A graph neural network architecture that generalises convolution to graph-structured data: each layer updates every node's feature vector by aggregating the degree-normalised features of its neighbours and transforming them with a shared learned weight matrix, so stacked layers propagate information across progressively larger neighbourhoods; formalised by Kipf and Welling in 2017 as a first-order approximation of spectral graph convolution, the GCN is the canonical baseline for node classification, link prediction, and graph-level learning."

- ### Semantic Classification
  - owl-class:: machine-learning:GraphConvolutionalNetwork
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Graph Neural Network]]
  - contrasts-with:: [[Graph Attention Network]]
  - uses:: [[Neural Network]]

- ### Content

  ## Definition

  A **graph convolutional network (GCN)** extends the idea of convolution — a shared local filter slid across a regular grid — to irregular graph domains where nodes have varying numbers of neighbours and no canonical ordering. Each GCN layer computes a new representation for every node by averaging the feature vectors of the node and its neighbours (with symmetric degree normalisation, so high-degree hubs do not dominate), multiplying by a weight matrix shared across all nodes, and applying a non-linearity. Stacking k layers lets information flow across k-hop neighbourhoods, so the network learns representations that blend a node's own attributes with the structure and attributes of its surroundings.

  The architecture descends from spectral graph theory: Bruna et al. (2014) defined convolution via the eigenbasis of the graph Laplacian, ChebNet (2016) made it local and cheap with Chebyshev polynomial filters, and Kipf and Welling's 2017 ICLR paper reduced it to the simple first-order propagation rule that made [[Graph Neural Network]] research mainstream. Trained semi-supervised — labels on a few nodes, the graph and features over all of them — GCNs became the standard baseline for node classification (citation networks, fraud detection), link prediction (recommendation, knowledge-graph completion), and, with pooling, whole-graph tasks such as molecular property prediction.

  Its fixed, structure-determined weighting is the key contrast with the [[Graph Attention Network]], which learns per-edge attention coefficients so that informative neighbours count for more; GraphSAGE similarly replaces full-graph propagation with sampled-neighbourhood aggregation for inductive, web-scale settings. GCNs trade that flexibility for simplicity, few parameters, and strong performance on homophilous graphs where neighbours genuinely resemble each other.

  ## Technical Details

  The layer rule is H^(l+1) = σ(D̃^(-1/2) Ã D̃^(-1/2) H^(l) W^(l)), where Ã = A + I adds self-loops, D̃ is Ã's degree matrix, and W^(l) is the learned weight matrix — a first-order Chebyshev approximation with the "renormalisation trick" for stability. Complexity is linear in the number of edges, but full-batch propagation over huge graphs motivates sampled and clustered variants (GraphSAGE, Cluster-GCN, GraphSAINT). Two well-characterised failure modes shape practice: **over-smoothing** — repeated Laplacian averaging drives node representations towards indistinguishability, so vanilla GCNs are typically only 2–4 layers deep, mitigated by residual/initial connections (GCNII), jumping knowledge, or decoupled propagation (APPNP, SGC) — and weak performance on **heterophilous** graphs, addressed by signed or separated aggregation schemes. Standard tooling is PyTorch Geometric and DGL; production deployments include recommendation at Pinterest (PinSage), fraud and abuse detection at scale, traffic forecasting, and molecular screening, and GCN-style message passing remains the reference point against which graph transformers and newer geometric architectures are measured.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
