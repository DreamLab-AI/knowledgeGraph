public:: true

# Auto-Scaling

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:auto-scaling", "@type":"Page", "title":"Auto-Scaling", "vc:slug":"auto-scaling", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:auto-scaling",
  "@type":"Class",
  "label":"Auto-Scaling",
  "definition":"Auto-scaling is the automated adjustment of computing capacity in response to observed demand, adding or removing resources to maintain performance and control cost. It uses metrics, policies and controllers to scale horizontally by changing instance counts or vertically by resizing instances. Auto-scaling is foundational to elastic cloud infrastructure, balancing responsiveness against efficiency without manual intervention.",
  "domain":"infrastructure",
  "maturity":"mature",
  "subClassOf":[{"@id":"urn:ngm:class:scalability","label":"Scalability"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:monitoring","label":"Monitoring"},
      {"@id":"urn:ngm:class:resource-allocation","label":"Resource Allocation"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:observability","label":"Observability"},
      {"@id":"urn:ngm:class:capacity-planning","label":"Capacity Planning"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:high-availability","label":"High Availability"},
      {"@id":"urn:ngm:class:fault-tolerance","label":"Fault Tolerance"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:load-balancing","label":"Load Balancing"},
      {"@id":"urn:ngm:class:monitoring","label":"Monitoring"}
    ],
    "supports":[
      {"@id":"urn:ngm:class:microservices","label":"Microservices"},
      {"@id":"urn:ngm:class:performance-optimization","label":"Performance Optimization"}
    ],
    "dependsOn":[
      {"@id":"urn:ngm:class:resource-management","label":"Resource Management"}
    ],
    "implementedBy":[
      {"@id":"urn:ngm:class:kubernetes","label":"Kubernetes"},
      {"@id":"urn:ngm:class:container-orchestration","label":"Container Orchestration"}
    ],
    "relatedTo":[
      {"@id":"urn:ngm:class:orchestration","label":"Orchestration"},
      {"@id":"urn:ngm:class:cloud-computing","label":"Cloud Computing"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- [[Auto-Scaling]] is the automated adjustment of computing capacity in response to demand, adding or removing resources to hold performance steady while controlling cost. It is a form of [[Scalability]] that closes a control loop using [[Monitoring]] signals and policies.
	- It scales horizontally by changing instance counts or vertically by resizing instances, removing the need for manual capacity changes.
- ### Overview
	- Auto-scaling observes workload signals, request rate, queue depth, CPU and memory utilisation, latency, through [[Monitoring]] and [[Observability]], and compares them against target thresholds. Controllers then act to converge actual capacity on the level the policy implies.
	- Horizontal scaling adds or removes interchangeable instances behind [[Load Balancing]], which is the dominant pattern for [[Microservices]] and stateless workloads. Vertical scaling resizes a single instance and suits stateful services that are harder to replicate.
	- In modern platforms auto-scaling is implemented by [[Kubernetes]] and other [[Container Orchestration]] systems, and informed by [[Capacity Planning]] so that scaling limits, cooldowns and reserves are set sensibly.
- ### Mechanisms
	- Metric collection and aggregation feeding scaling decisions.
	- Threshold, target-tracking and predictive scaling policies.
	- Horizontal scaling of instance counts behind a load balancer.
	- Vertical resizing of individual instances.
	- Cooldown windows and stabilisation to avoid oscillation.
- ### Applications
	- Absorbing traffic spikes for web and API services.
	- Right-sizing [[Microservices]] fleets to demand.
	- Improving [[High Availability]] and [[Fault Tolerance]] through redundancy.
	- Reducing idle cost during low-demand periods.
- ### Relationships
	- hasPart:: [[Monitoring]]
	- hasPart:: [[Resource Allocation]]
	- requires:: [[Observability]]
	- requires:: [[Capacity Planning]]
	- enables:: [[High Availability]]
	- enables:: [[Fault Tolerance]]
	- uses:: [[Load Balancing]]
	- uses:: [[Monitoring]]
	- supports:: [[Microservices]]
	- supports:: [[Performance Optimization]]
	- dependsOn:: [[Resource Management]]
	- implementedBy:: [[Kubernetes]]
	- implementedBy:: [[Container Orchestration]]
	- relatedTo:: [[Orchestration]]
	- relatedTo:: [[Cloud Computing]]
- ### Provenance
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
	- updated:: 2026-06-15
