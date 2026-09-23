
A navigation mesh (navmesh) is a data structure that decomposes the traversable area of a virtual environment into a set of convex polygons over which an agent can move freely. By abstracting walkable space into connected regions, it enables efficient pathfinding without searching a dense uniform grid. Navmeshes are the standard representation for movement and obstacle avoidance in game AI and simulated 3D worlds.

- ### Content
  - Pathfinding over a navmesh typically runs A* across polygon centroids or edges, then smooths the resulting corridor with funnel algorithms. Compared with grid search, navmeshes scale better in large open levels and represent slopes, ledges, and dynamic obstacles more naturally, though they require a baking step to regenerate when geometry changes.

