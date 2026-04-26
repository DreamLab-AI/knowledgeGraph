iri:: http://narrativegoldmine.com/robotics#TopologicalMap
uri:: urn:visionclaw:concept:robotics:topological-map
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:robotics:topological-map
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: robotics
preferred-term:: Topological Map
content-hash:: sha256-12-17e336358cd6
status:: stub
maturity:: draft
quality-score:: 0.35
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - TopologicalMap is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: robotics:TopologicalMap
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  term-id: RB-9034
  domain: rb
  # TopologicalMap
  A Topological Map represents an environment as a graph structure capturing connectivity and qualitative spatial relationships rather than precise geometric details, enabling efficient path planning and place recognition for mobile robot navigation. This abstraction reduces computational complexity compared to metric maps while retaining essential connectivity information for long-distance navigation.
  The representation consists of nodes corresponding to distinctive places or waypoints and edges representing navigable paths between them. Nodes may encode place appearance through visual descriptors, while edges may store traversability information and expected travel times. Hybrid topological-metric approaches combine graph topology for global planning with local metric representations for precise navigation and obstacle avoidance.
  Applications include large-scale robot navigation in buildings and urban environments where global metric accuracy is unnecessary, multi-floor navigation leveraging elevator and stairwell nodes, and semantic navigation using place categories (kitchen, bedroom) rather than coordinates. Topological maps enable human-interpretable spatial descriptions and support efficient planning over large areas.
  Contemporary research develops learning-based place recognition for robust node matching across appearance changes, dynamic topological mapping adapting to environment modifications, and semantic topological maps enriching nodes with object and scene understanding. Modern approaches integrate visual SLAM for local metric mapping with topological graphs for global organization, employ graph neural networks learning graph embeddings for place recognition, and utilize lifelong mapping continuously updating topology through robot experience. Recent work explores multi-robot topological mapping collaboratively building shared spatial representations and human-robot topological map communication enabling natural spatial dialog through landmark references and relative directions.
  - Kuipers, B., & Byun, Y.T. (1991). "A robot exploration and mapping strategy based on a semantic hierarchy of spatial representations." Robotics and Autonomous Systems, 8(1-2), 47-63
  - Thrun, S., & Bücken, A. (1996). "Integrating grid-based and topological maps for mobile robot navigation." AAAI, 944-950
  - Lowry, S., et al. (2016). "Visual place recognition: A survey." IEEE Transactions on Robotics, 32(1), 1-19
  - Kostavelis, I., & Gasteratos, A. (2015). "Semantic mapping for mobile robotics tasks: A survey." Robotics and Autonomous Systems, 66, 86-103

  ## Sources

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
