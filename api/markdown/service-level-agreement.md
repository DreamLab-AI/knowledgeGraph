- ### Definition
  - A [[Service Level Agreement]] is a formal contract defining measurable service targets and the remedies for breaching them, decomposed into the [[Service Level Objective]] and [[Service Level Indicator]]. It depends on [[Monitoring]], enables [[High Availability]], and underpins [[Cloud Computing]] accountability.

- ### Overview
  - An SLA codifies the commitments a provider makes about a service: how often it will be available, how quickly it will respond, how incidents are classified, and what compensation applies on failure. By making expectations explicit and measurable, it aligns the provider's operational investment with the customer's reliability needs.
  - SLAs sit atop a hierarchy of supporting constructs. Service level indicators are the raw measurements (such as request success rate or latency percentiles); service level objectives are the internal targets for those indicators; and the SLA is the externally facing, contractually binding subset, usually set conservatively below the internal SLO to provide a safety margin.

- ### Key aspects
  - Quantitative availability and performance targets (for example nines of uptime).
  - Defined measurement windows, exclusions, and maintenance windows.
  - Penalties or service credits triggered by breaches.
  - Escalation, support tiers, and incident response commitments.

- ### Applications
  - Cloud platform and SaaS contracts guaranteeing uptime and support.
  - Managed services and outsourcing arrangements with defined responsibilities.
  - Internal SLAs between platform teams and product teams within an organisation.

- ### Relationships
  - subClassOf:: [[Infrastructure]]
  - hasPart:: [[Service Level Objective]]
  - hasPart:: [[Service Level Indicator]]
  - partOf:: [[Service Management]]
  - implements:: [[Contractual Obligation]]
  - dependsOn:: [[Monitoring]]
  - enables:: [[High Availability]]
  - supports:: [[Cloud Computing]]
  - bridgesTo:: [[Error Budget]]
  - bridgesTo:: [[Site Reliability Engineering]]
  - contrastsWith:: [[Best-Effort Service]]
  - relatedTo:: [[Disaster Recovery]]

- ### Provenance
  - updated:: 2026-06-15
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation