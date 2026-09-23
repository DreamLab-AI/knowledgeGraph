
A Rapidly Exploring Random Tree (RRT) is a sampling-based motion-planning algorithm that incrementally builds a space-filling tree by drawing random samples from the configuration space and extending the tree toward each sample. It efficiently explores high-dimensional spaces while respecting kinematic and obstacle constraints, and its variants such as RRT* add asymptotic optimality. RRT is widely used for robot path planning where the free space is too large or complex for grid-based search.

- ### Overview
  - RRT addresses the curse of dimensionality in motion planning by avoiding explicit discretisation of the configuration space. Instead it grows a tree rooted at the start state, biasing exploration toward unexplored regions through uniform random sampling. Because the probability of selecting a node for extension is proportional to the Voronoi region it occupies, the tree rapidly reaches into large empty areas — the property that gives the algorithm its name. Variants improve path quality, connect bidirectional trees, or incorporate dynamics.
- ### Mechanisms
  - Random sampling of the configuration space to generate candidate target states.
  - Nearest-neighbour selection to find the existing tree node closest to each sample.
  - Local steering that extends the tree toward the sample by a bounded step, subject to collision checking.
  - Voronoi bias that naturally pulls growth toward unexplored regions of free space.
  - RRT* rewiring that reconnects the tree to achieve asymptotic optimality over successive samples.
- ### Applications
  - Manipulator arm planning in cluttered workspaces with many degrees of freedom.
  - Mobile robot and autonomous vehicle path generation through obstacle fields.
  - Aerial and underwater vehicle trajectory planning under kinodynamic constraints.
  - Real-time replanning in dynamic environments where obstacles move.
- ### Provenance

