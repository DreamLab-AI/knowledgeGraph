public:: true

# Collective Intelligence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:collective-intelligence",
  "@type": "Page",
  "vc:slug": "collective-intelligence",
  "title": "Collective Intelligence",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:collective-intelligence",
  "@type": "Class",
  "label": "Collective Intelligence",
  "definition": "Collective intelligence is the shared or group intelligence that emerges from the collaboration, competition, and collective decision-making of many individuals or agents, producing cognitive capacities — prediction accuracy, problem-solving breadth, creative output — that exceed what any individual participant could achieve alone. It manifests in biological systems such as ant colonies and immune networks, human social institutions, and engineered multi-agent systems, and is characterised by distributed information processing, diversity of perspective, and aggregation mechanisms.",
  "domain": "ai",
  "maturity": "established",
  "subClassOf": [{"@id": "urn:ngm:class:collective-intelligence-system", "label": "Collective Intelligence System"}],
  "relations": {
    "uses": [
      {"@id": "urn:ngm:class:multi-agent-system", "label": "Multi-Agent System"},
      {"@id": "urn:ngm:class:knowledge-management", "label": "Knowledge Management"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:collective-decision-making", "label": "Collective Decision Making"},
      {"@id": "urn:ngm:class:emergence", "label": "Emergence"},
      {"@id": "urn:ngm:class:decentralised-coordination", "label": "Decentralised Coordination"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:multi-agent-systems", "label": "Multi-Agent Systems"},
      {"@id": "urn:ngm:class:governance", "label": "Governance"},
      {"@id": "urn:ngm:class:agent-based-models", "label": "Agent-Based Models"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - Collective intelligence arises when a group of agents — biological organisms, humans, or artificial systems — collectively processes distributed information and produces decisions or artefacts of higher quality than individual components could generate independently. The phenomenon depends on three conditions: diversity (agents holding different information or models), aggregation mechanisms (voting, markets, stigmergy, averaging) that combine individual signals without excessive coordination overhead, and independence (preventing correlated errors from cascading into group failures). It is the substrate on which [[Multi-Agent System]] coordination, prediction markets, open-source development, and [[Governance]] institutions are built, and its engineering is a core challenge for [[Decentralised Coordination]] systems.

- ### Relationships
  - Collective intelligence is instantiated through [[Multi-Agent System]]s and [[Multi-Agent Systems]] that embody different computational approaches to distributed cognition. It produces [[Collective Decision Making]] as a key output and is the mechanism through which [[Emergence]] of complex group behaviours arises from simple local interaction rules. [[Knowledge Management]] systems capture and propagate the distributed knowledge that fuels collective intelligence processes. [[Agent-Based Models]] simulate collective intelligence dynamics to study conditions under which group performance exceeds individual performance. [[Governance]] structures in organisations and democratic institutions are applications of collective intelligence principles at societal scale.

- ### Content
  - The scientific study of collective intelligence draws from multiple disciplines: ethology documented social insect cognition through Bonabeau, Dorigo, and Théraulaz's work on ant colony optimisation (1999); social science formalised the wisdom-of-crowds effect through Galton's 1907 observation that the median of individual estimates outperforms most experts; computer science formalised distributed problem-solving through Minsky's society of mind (1986) and multi-agent system theory; and organisational science studied how firms aggregate distributed knowledge through price systems, deliberation, and corporate hierarchy. The internet era produced new data on collective intelligence at scale — Wikipedia, prediction markets, open-source software — enabling empirical measurement of conditions that promote or inhibit group performance.

  - Technically, collective intelligence systems are designed around three architectural elements: the information aggregation mechanism (majority vote, weighted ensemble, prediction market, Delphi method, PageRank); the communication and coordination structure (fully connected, hierarchical, stigmergic, broadcast); and the incentive design that motivates honest participation and penalises free-riding. MIT's Collective Intelligence research group identified statistically, that a group's "c-factor" (collective intelligence score) correlates with the average social perceptiveness of members, communication balance, and proportion of women in the group — not with mean IQ. Ensemble machine learning methods (random forests, gradient boosting, mixture of experts) are the computational instantiation of these principles, exploiting model diversity and aggregation to exceed individual model performance.

  - Collective intelligence manifests across multiple domains: financial markets aggregate distributed private information into prices through trading mechanisms; open-source software development coordinates thousands of contributors through modular architecture, code review, and reputation systems; citizen science platforms such as Foldit and Galaxy Zoo harness human pattern recognition at scales impossible for individual researchers; and corporate prediction markets outperform expert forecasters on quarterly earnings and project completion dates. Decentralised autonomous organisations (DAOs) represent a blockchain-mediated attempt to implement collective governance at internet scale.

  - In 2024–2025, the intersection of collective intelligence with AI has produced hybrid human-AI systems in which language models augment individual cognition while structured deliberation protocols harvest group intelligence. Superforecasting platforms incorporating AI summarisation of reasoning and structured Bayesian updating have demonstrated persistent outperformance of analyst consensus. Swarm intelligence algorithms derived from collective intelligence principles — particle swarm optimisation, ant colony optimisation — are applied to hyperparameter search, network routing, and supply chain optimisation. The design of AI agent collectives — in which multiple specialised AI agents coordinate through shared memory and communication protocols — is emerging as a distinct engineering discipline informed by collective intelligence theory.

