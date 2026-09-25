A relationship edge is a directed or undirected connection in a graph that represents a typed association between two entity nodes, often carrying a label and properties. In knowledge and identity graphs, edges encode facts such as ownership, membership, or similarity that give the graph its semantic structure. Edge type and weight determine how the graph can be queried, traversed, and reasoned over.

### Content

- Edges may be directed (subject to object) or undirected, and carry labels such as "owns" or "knows" plus optional weights and timestamps. Graph databases index edges to support efficient traversal, pattern matching, and inference, making edge design central to query expressiveness and performance.

