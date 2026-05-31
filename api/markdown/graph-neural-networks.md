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