- ### OntologyBlock
  id:: aidomain-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-7017
	- preferred-term:: AIDomain
	- source-domain:: ai
	- status:: active
	- public-access:: true
	- definition:: The abbreviated reference for the Artificial Intelligence Domain, serving as a top-level ontological classification for all AI-related concepts including methods, systems, applications, and governance frameworks within the knowledge graph.
	- maturity:: stable
	- owl:class:: ai:AiDomain
	- owl:role:: Domain
	- belongsToDomain:: [[Artificial Intelligence]]
	- #### Relationships
	  id:: aidomain-relationships
	  collapsed:: true
		- owl:equivalentClass:: [[ArtificialIntelligenceDomain]]
		- is-subclass-of:: [[Technology Domain]]
		  collapsed:: true
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

```turtle
@prefix ai: <http://narrativegoldmine.com/ai#> .

ai:SomeAIConcept a owl:Class ;
    skos:broader ai:AIDomain ;
    ngm:belongsToDomain ai:AIDomain .
```

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched from stub
- **Authority Score**: 0.90
- **References**: 6 pages reference this concept
