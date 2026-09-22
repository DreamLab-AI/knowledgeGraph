public:: true

# Navigation Mesh
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:navigation-mesh",
  "@type": "Page",
  "vc:slug": "navigation-mesh",
  "title": "Navigation Mesh",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:navigation-mesh",
  "@type": "Class",
  "label": "Navigation Mesh",
  "definition": "A navigation mesh (navmesh) is a data structure that decomposes the traversable area of a virtual environment into a set of convex polygons over which an agent can move freely. By abstracting walkable space into connected regions, it enables efficient pathfinding without searching a dense uniform grid. Navmeshes are the standard representation for movement and obstacle avoidance in game AI and simulated 3D worlds.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:ai-technique", "label": "AI Technique"}],
  "relations": {
    "relatedTo": [
      {"@id": "urn:ngm:class:ai-game-agent", "label": "AI Game Agent"},
      {"@id": "urn:ngm:class:ai-in-games", "label": "AI in Games"}
    ]
  },
  "quality": 0.72
}
```

- ### Definition
  - A navigation mesh partitions walkable terrain into connected convex polygons for efficient movement. It is required by an [[AI Game Agent]] for pathfinding and is a core component of [[AI in Games]].
- ### Content
  - Pathfinding over a navmesh typically runs A* across polygon centroids or edges, then smooths the resulting corridor with funnel algorithms. Compared with grid search, navmeshes scale better in large open levels and represent slopes, ledges, and dynamic obstacles more naturally, though they require a baking step to regenerate when geometry changes.
