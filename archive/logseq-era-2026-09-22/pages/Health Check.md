public:: true

# Health Check
```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:health-check",
  "@type": "Page",
  "title": "Health Check",
  "vc:slug": "health-check",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:health-check",
  "@type": "Class",
  "label": "Health Check",
  "definition": "A health check is a periodic probe that determines whether a service instance is functioning correctly and able to handle requests. Health checks distinguish between liveness, whether a process is running and should be restarted if not, and readiness, whether it is prepared to receive traffic. Load balancers, orchestrators, and service meshes use health checks to route around failed instances, trigger restarts, and gate traffic, making them a foundational primitive for high availability and self-healing distributed systems.",
  "domain": "distributed-systems",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:high-availability",
      "label": "High Availability"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:high-availability",
        "label": "High Availability"
      }
    ],
    "hasPart": [
      {
        "@id": "urn:ngm:class:liveness",
        "label": "Liveness"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:monitoring",
        "label": "Monitoring"
      },
      {
        "@id": "urn:ngm:class:heartbeat-mechanism",
        "label": "Heartbeat Mechanism"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:auto-scaling",
        "label": "Auto Scaling"
      },
      {
        "@id": "urn:ngm:class:fault-tolerance",
        "label": "Fault Tolerance"
      },
      {
        "@id": "urn:ngm:class:graceful-degradation",
        "label": "Graceful Degradation"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:load-balancer",
        "label": "Load Balancer"
      },
      {
        "@id": "urn:ngm:class:service-discovery",
        "label": "Service Discovery"
      },
      {
        "@id": "urn:ngm:class:kubernetes",
        "label": "Kubernetes"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:observability",
        "label": "Observability"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:circuit-breaker",
        "label": "Circuit Breaker"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:uptime",
        "label": "Uptime"
      },
      {
        "@id": "urn:ngm:class:service-level-agreement",
        "label": "Service Level Agreement"
      },
      {
        "@id": "urn:ngm:class:microservices",
        "label": "Microservices"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - A health check is a periodic probe that determines whether a service instance is functioning correctly and able to handle requests. Health checks distinguish between liveness, whether a process is running and should be restarted if not, and readiness, whether it is prepared to receive traffic. Load balancers, orchestrators, and service meshes use health checks to route around failed instances, trigger restarts, and gate traffic, making them a foundational primitive for high availability and self-healing distributed systems.
  - Core related concepts: [[High Availability]], [[Load Balancer]], [[Heartbeat Mechanism]], [[Monitoring]], [[Service Discovery]].

- ### Overview
  - Health checks are how a distributed system continuously verifies the operational state of its components. They convert the abstract goal of high availability into a concrete control signal: an instance that fails its probes is removed from rotation, restarted, or replaced. Modern orchestration platforms formalise the distinction between liveness and readiness so that transient warm-up states do not trigger needless restarts.

- ### Mechanisms
  - Liveness probes: detect deadlocked or crashed processes so the orchestrator can restart them automatically.
  - Readiness probes: gate traffic until an instance has loaded dependencies and is genuinely able to serve, avoiding errors during start-up.
  - Probe types: lightweight TCP, HTTP endpoint, and command-based checks trade fidelity against overhead and intrusiveness.
  - Aggregation: load balancers and service meshes combine probe results across instances to make routing and failover decisions.

- ### Applications
  - Load balancers removing unhealthy backends from rotation to preserve availability.
  - Container orchestrators such as Kubernetes restarting failed pods and gating traffic on readiness.
  - Service meshes performing outlier detection and circuit breaking based on health signals.
  - Autoscaling systems using health and load signals to add or remove capacity.

- ### Relationships
  - subClassOf:: [[High Availability]]
  - partOf:: [[High Availability]]
  - hasPart:: [[Liveness]]
  - uses:: [[Monitoring]]
  - uses:: [[Heartbeat Mechanism]]
  - enables:: [[Auto Scaling]]
  - enables:: [[Fault Tolerance]]
  - enables:: [[Graceful Degradation]]
  - supports:: [[Load Balancer]]
  - supports:: [[Service Discovery]]
  - supports:: [[Kubernetes]]
  - dependsOn:: [[Observability]]
  - implements:: [[Circuit Breaker]]
  - relatedTo:: [[Uptime]]
  - relatedTo:: [[Service Level Agreement]]
  - relatedTo:: [[Microservices]]

- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
