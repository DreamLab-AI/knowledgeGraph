public:: true

# Local Planner
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:845312c0be3391c9151694e2c3e09a04415159c46d472a0d8fb4645d90d92c20",
  "@type": "Page",
  "vc:slug": "local-planner",
  "title": "Local Planner",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {"@id": "urn:visionflow:linked:motion-planning", "vc:label": "Motion Planning"},
    {"@id": "urn:visionflow:linked:navigation", "vc:label": "Navigation"},
    {"@id": "urn:visionflow:linked:ros-navigation-stack", "vc:label": "ROS Navigation Stack"},
    {"@id": "urn:visionflow:linked:obstacle-avoidance", "vc:label": "Obstacle Avoidance"}
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {"@id": "did:nostr:ontology-mesh"},
  "prov:generatedAtTime": {"@value": "2026-08-06T00:00:00Z", "@type": "xsd:dateTime"}
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:local-planner",
  "@type": "Class",
  "label": "Local Planner",
  "definition": "The component of a robot navigation system that converts a global route into safe, kinematically feasible velocity commands over a short horizon, reacting in real time to obstacles detected by onboard sensors. Operating at control rates of five to twenty hertz over a rolling window of a few metres, a local planner evaluates candidate trajectories against a local costmap and the robot's kinodynamic limits, selecting commands that make progress along the global path while avoiding collisions. Classic realisations include the Dynamic Window Approach, Timed Elastic Bands, and sampling-based controllers such as MPPI; in sampling-based roadmap methods the same term names the routine that checks whether two configurations can be connected by a simple collision-free motion.",
  "domain": "robotics",
  "maturity": "established",
  "subClassOf": {"@id": "urn:ngm:class:motion-planning", "label": "Motion Planning"},
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:navigation", "label": "Navigation"},
      {"@id": "urn:ngm:class:ros-navigation-stack", "label": "ROS Navigation Stack"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:obstacle-avoidance", "label": "Obstacle Avoidance"}
    ],
    "dependsOn": [
      {"@id": "urn:ngm:class:localisation", "label": "Localization"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:trajectory-planning", "label": "Trajectory Planning"},
      {"@id": "urn:ngm:class:probabilistic-roadmap", "label": "Probabilistic Roadmap"},
      {"@id": "urn:ngm:class:velocity-control", "label": "Velocity Control"}
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
  - "The component of a robot navigation system that converts a global route into safe, kinematically feasible velocity commands over a short horizon, reacting in real time to obstacles detected by onboard sensors. Operating at control rates of five to twenty hertz over a rolling window of a few metres, a local planner evaluates candidate trajectories against a local costmap and the robot's kinodynamic limits, selecting commands that make progress along the global path while avoiding collisions. Classic realisations include the Dynamic Window Approach, Timed Elastic Bands, and sampling-based controllers such as MPPI; in sampling-based roadmap methods the same term names the routine that checks whether two configurations can be connected by a simple collision-free motion."

- ### Semantic Classification
  - owl-class:: robotics:LocalPlanner
  - owl-role:: Process

- ### Relationships
  - is-subclass-of:: [[Motion Planning]]
  - part-of:: [[Navigation]]
  - part-of:: [[ROS Navigation Stack]]
  - implements:: [[Obstacle Avoidance]]

- ### Content

  ## Definition

  Mobile-robot [[Navigation]] is conventionally split into two cooperating layers. A global planner searches a map for a route from start to goal — an A* or Dijkstra path over a costmap, or a roadmap query — but that route is computed against a static, possibly stale world model. The **local planner** closes the gap with reality: running continuously at control rate, it consumes the robot's current pose from [[Localisation]], a local costmap built from live sensor data, and the next stretch of the global path, and emits velocity commands that follow the route while steering around pedestrians, furniture, and anything else the map never knew about.

  The dominant designs are trajectory-sampling controllers. The Dynamic Window Approach (DWA) samples velocity pairs reachable within the robot's acceleration limits, forward-simulates each for a short horizon, and scores the resulting arcs on path adherence, goal progress, and obstacle clearance. Timed Elastic Band (TEB) planners instead deform a time-parameterised trajectory under attractive and repulsive forces, handling car-like kinematics gracefully. Model Predictive Path Integral (MPPI) and other MPC-style controllers, now the default in ROS 2 Nav2, optimise over thousands of sampled rollouts on the fly. All are exercises in constrained [[Trajectory Planning]] compressed into a few tens of milliseconds.

  The term carries a second, older sense in sampling-based motion planning: in a [[Probabilistic Roadmap]], the "local planner" is the subroutine that attempts to connect two sampled configurations with a simple motion (usually a straight line in configuration space) and reports whether it is collision-free. Both senses share the same essence — solving the easy, short-range piece of a planning problem cheaply and often, so a more expensive global method can treat it as a primitive.

  ## Technical Details

  - **Inputs**: global path segment, local costmap (rolling window, typically 3–10 m), current pose and velocity estimate, robot footprint and kinodynamic limits.
  - **Outputs**: body velocity commands (linear and angular), typically published at 10–20 Hz to a [[Velocity Control]] loop.
  - **ROS ecosystem**: `base_local_planner` (DWA) and `teb_local_planner` in ROS 1; Nav2's controller server in ROS 2 hosts DWB, Regulated Pure Pursuit, and MPPI as plugins behind a common interface.
  - **Failure handling**: when no admissible trajectory exists, navigation stacks trigger recovery behaviours — costmap clearing, in-place rotation, or requesting a global replan.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
