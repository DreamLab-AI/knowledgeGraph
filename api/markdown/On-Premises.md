
On-premises is the deployment model in which an organisation runs its computing infrastructure — servers, storage, networking, and the software on top — in facilities it owns or directly controls, rather than renting capacity from a cloud provider. The organisation purchases hardware as capital expenditure, operates and patches the full stack itself, and retains physical custody of its data, trading the elasticity and managed services of public cloud for maximal control over locality, latency, security boundaries, and long-run unit costs.

- ### Semantic Classification

- ### Content

  ## Definition

  **On-premises** (colloquially "on-prem") denotes computing run in facilities the organisation itself owns or controls — a server room, a corporate [[Data Centre]], or leased colocation space with the organisation's own hardware. Before cloud computing the model had no name because it was the only model; the term was retrofitted as a contrast class once [[Infrastructure As A Service]] and [[Software As A Service]] made "someone else's data centre" the default alternative. The defining features are ownership of the hardware lifecycle, operational responsibility for the entire stack from power and cooling to application patches, and a capital-expenditure cost profile: capacity is bought up front and depreciated, rather than metered per hour.

  The trade-offs against [[Cloud Computing]] are well mapped. On-premises offers physical data custody (decisive for classified workloads, air-gapped environments, and strict data-residency regimes), deterministic latency to co-located equipment (factory floors, trading venues, hospitals), no egress fees, and — at high sustained utilisation — lower unit cost than equivalent rented capacity. Against that stand slow procurement, capacity that must be sized for peak rather than average, the burden of staffing 24/7 operations, and the absence of the managed databases, queues, and AI services that cloud platforms bundle. Security is a genuine draw rather than an automatic win on either side: cloud providers patch hypervisors faster than most enterprises, but on-premises keeps the attack surface and the audit trail under one roof.

  In practice pure positions are rare. Most large organisations operate a [[Hybrid Cloud]]: regulated systems of record and latency-critical workloads stay on-premises while elastic and customer-facing workloads run in public cloud, with private connectivity between the two. Vendors now sell the boundary itself — AWS Outposts, Azure Stack/Azure Local, and Google Distributed Cloud place cloud-operated racks inside customer facilities, while [[Edge Computing]] pushes small on-premises footprints out to shops, cell sites, and vehicles.

  ## Current Landscape

  After a decade of cloud-first orthodoxy, the pendulum has partially swung back under the banner of "cloud repatriation": organisations with stable, predictable workloads (large databases, video, simulation, and increasingly self-hosted AI inference on their own GPUs) report material savings from moving them back on-premises.

  - **37signals completed its AWS exit in May 2025**, migrating 18 petabytes off Amazon S3 onto its own Pure Storage arrays (a ~$1.5m purchase costing under $200k a year to run); its annual infrastructure bill fell from roughly $3.2m in the cloud to about $1.3m on-premises, with projected five-year savings above $10m and no added headcount.
  - **Flexera's 2026 State of the Cloud report puts enterprise workload/data repatriation at 21%**, up two points year on year; other documented cases include GEICO (private OCP-based cloud after costs rose 2.5x, halving compute cost per core) and Dropbox's earlier Magic Pocket build-out.
  - **Steady-state AI inference is the strongest new repatriation driver**: 24/7 LLM inference on owned GPU servers typically undercuts equivalent three-year reserved cloud capacity by 2–3x, while bursty training generally stays in the cloud for elasticity.
  - EU data-sovereignty regulation and the growth of sovereign-cloud offerings reinforce the trend; hybrid remains the dominant end-state, and the realistic synthesis is workload placement as an ongoing economic decision — on-premises is no longer a legacy posture but one point on a continuum from owned racks through colocation and hosted private cloud to hyperscale public regions.

  **Sources**:
  - https://www.theregister.com/special-features/2025/05/09/37signals-on-prem-migration-to-save-millions-abandon-aws/691340
  - https://www.puppet.com/blog/cloud-repatriation-trends-2026
  - https://www.flowverify.co/blog/cloud-repatriation-21-percent-2026

