A probabilistic roadmap (PRM) is a sampling-based motion-planning algorithm that constructs a graph representation of the free configuration space of a robot by randomly sampling collision-free configurations and connecting nearby configurations with local path planners. In a preprocessing phase, many random configurations are sampled and validated against the robot's collision model; valid configurations become nodes and successful local connections become edges. At query time, start and goal configurations are connected to the roadmap and a graph-search algorithm finds a path. PRMs are effective in high-dimensional configuration spaces where deterministic grid-based planners are computationally infeasible.

### Overview

- The Probabilistic Roadmap Method was proposed by Kavraki et al. in 1996 and became one of the foundational algorithms in robot motion planning. It addresses the "curse of dimensionality" that makes deterministic planning infeasible for robots with many degrees of freedom.
- The algorithm operates in two phases. In the learning phase, random collision-free configurations are sampled from the configuration space and connected by a local planner (often a straight-line interpolator in C-space) when the connection is collision-free. The result is a dense graph approximating the topology of the free space. In the query phase, the start and goal are added to the roadmap and a shortest-path algorithm finds a route.
- PRM shines in static, high-dimensional environments where the same roadmap can be reused across many queries. For single-query problems or dynamic environments, [[Rapidly Exploring Random Tree]] variants are often preferred.

### Key aspects

- **Sampling strategy** — uniform random sampling provides probabilistic completeness; halton sequences or Gaussian sampling near obstacles improve coverage of narrow passages.
- **Local planner** — simple linear interpolation in joint space works for many robots; more complex planners handle kinodynamic constraints.
- **Narrow passages** — thin corridors in configuration space are rarely sampled, causing connectivity failures; bridge sampling and other techniques address this weakness.
- **Lazy evaluation** — collision checking is expensive; lazy PRM defers edge collision checks to query time, reducing preprocessing cost.

### Applications

- Planning collision-free trajectories for industrial robot arms with 6–7 degrees of freedom.
- Assembly planning for articulated mechanisms where parts must be inserted through narrow clearances.
- Animation of virtual characters navigating complex 3D environments.
- Protein folding analysis using C-space analogy for molecular conformation planning.

### Mechanisms

- **Learning phase** — sample N random configurations; check each for collision; connect k-nearest valid neighbours with the local planner; store valid edges in the roadmap.
- **Query phase** — connect start and goal to their nearest roadmap nodes; run Dijkstra or A* on the combined graph; smooth the returned path.
- **Roadmap densification** — additional samples are added if connectivity is insufficient for a given query.

### Provenance

