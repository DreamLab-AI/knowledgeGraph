iri:: http://narrativegoldmine.com/artificial-intelligence#AIDomain
uri:: urn:visionclaw:concept:artificial-intelligence:aidomain
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:artificial-intelligence:aidomain
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: artificial-intelligence
preferred-term:: AIDomain
content-hash:: sha256-12-27bbedc2161a
legacy-term-id:: AI-7017
status:: active
maturity:: stable
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - The abbreviated reference for the Artificial Intelligence Domain, serving as a top-level ontological classification for all AI-related concepts including methods, systems, applications, and governance frameworks within the knowledge graph.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:AiDomain
  - owl-role:: Domain
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Technology Domain]]
  - bridges-to:: [[Blockchain Technology]] (via AI-BC integration)

- ### Content

  - #### Subdomains (Inferred by Reasoner)
		    - Machine Learning is-subdomain-of AIDomain
		    - Deep Learning is-subdomain-of AIDomain
		    - Natural Language Processing is-subdomain-of AIDomain
		    - Computer Vision is-subdomain-of AIDomain
		    - AI Governance is-subdomain-of AIDomain
		- bridges-to:: [[Blockchain Technology]] (via AI-BC integration)
		- bridges-to:: [[Metaverse Technology]] (via AI avatars)
		- bridges-to:: [[Telecollaboration]] (via AI assistants)
		- bridges-to:: [[Robotics Systems]] (via robot learning)

  ## Definition

  **AIDomain** serves as the compact namespace identifier for the Artificial Intelligence domain within the ontology. It is semantically equivalent to [[ArtificialIntelligenceDomain]] and serves as a convenient reference for domain membership assertions.

  ## Namespace Purpose

  This abbreviated domain identifier:
  - Enables concise `belongsToDomain::` assertions
  - Provides namespace prefix for AI concept identifiers
  - Supports cross-domain bridge declarations
  - Facilitates ontology import/export operations

  ## Domain Scope

  The AIDomain encompasses:
  1. **Core AI Methods**: Machine learning, deep learning, reinforcement learning
  2. **AI Subfields**: NLP, computer vision, robotics, expert systems
  3. **AI Systems**: Models, architectures, frameworks, tools
  4. **AI Governance**: Ethics, policy, regulation, standards
  5. **AI Applications**: Deployed systems across industry verticals

  ## Usage Pattern

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
