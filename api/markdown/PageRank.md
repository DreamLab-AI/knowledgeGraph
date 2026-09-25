PageRank is a link-analysis algorithm that assigns a numerical importance score to each node in a directed graph based on the structure of incoming links, modelling importance as the stationary distribution of a random walk that occasionally teleports to a random node. Originally devised to rank web pages by treating hyperlinks as votes whose weight depends on the ranking of the linking page, it generalises to any graph where influence propagates along edges. The scores are computed iteratively until convergence and are robust to local manipulation because importance flows recursively from important neighbours.

### Overview

- The algorithm was conceived to rank web pages for [[Information Retrieval]] by interpreting hyperlinks as endorsements weighted by the rank of the source.
- A damping factor models the probability that the random surfer follows a link rather than teleporting to an arbitrary node, guaranteeing convergence and handling dangling nodes.
- Scores are computed by repeated multiplication of the rank vector by the transition matrix until the values stabilise.

### Mechanisms

- Construct a transition matrix from the link structure, normalising each node's outgoing edges.
- Apply the damping factor to mix the link-following walk with uniform teleportation.
- Iterate the power method until the rank vector converges to the principal eigenvector.
- Handle sinks and disconnected components through teleportation so every node receives a baseline score.

### Applications

- Ranking results in a [[Search Engine]] and broader [[Information Retrieval]] pipelines.
- Powering relevance and influence signals inside a [[Recommendation System]].
- Scoring entity salience within a [[Knowledge Graph]].
- Detecting influential actors in social and citation networks via [[Network Analysis]].

### Provenance

