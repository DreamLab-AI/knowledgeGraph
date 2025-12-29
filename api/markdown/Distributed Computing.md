- ### OntologyBlock
  id:: distributed-computing-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7034
	- preferred-term:: Distributed Computing
	- source-domain:: ngm
	- status:: active
	- public-access:: true
	- definition:: Distributed computing is a field of computer science that studies systems whose inter-communicating components are located on different networked computers, coordinating actions through message passing to achieve common computational goals. These systems appear to users as a single coherent computer while providing fault tolerance, scalability, and parallel processing capabilities across geographically dispersed nodes.
	- maturity:: reviewed
	- belongsToDomain:: [[InfrastructureDomain]], [[ComputationAndIntelligenceDomain]], [[Technology Domain]]
	- owl:class:: ngm:DistributedComputing
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept

## Relationships
- relatedTo:: [[Cloud Infrastructure]], [[Computing Infrastructure]], [[Network Protocol]]
- enables:: [[Parallel Processing]], [[Fault Tolerance]], [[Horizontal Scaling]]
- implementedBy:: [[Microservices Architecture]], [[Peer-to-Peer Networks]], [[Client-Server Architecture]]
- governedBy:: [[CAP Theorem]], [[Consensus Algorithms]]
- dependsOn:: [[Network Protocol]], [[Database System]]

## Architecture Types

### Client-Server Architecture
Smart clients contact servers for data, then format and display results to users. The server centralizes data management while clients handle presentation.

### Peer-to-Peer (P2P)
Peers share resources mutually without a central server. Each node acts as both client and server, enabling decentralized resource sharing.

### Microservices Architecture
Decomposes applications into separate services corresponding to business features (payments, users, products), where each component handles specific business logic.

### Three-Tier and N-Tier
Separates presentation, business logic, and data tiers across multiple servers for improved scalability and maintainability.

## Core Principles

### Fundamental Design Issues
- **Communication**: Message passing between distributed components
- **Coordination**: Synchronizing actions across nodes
- **Fault Tolerance**: Continuing operation after component failures
- **Parallelism**: Concurrent execution of tasks
- **Synchronization**: Managing shared state consistency

### CAP Theorem
Distributed systems cannot simultaneously guarantee all three properties:
- **Consistency**: All nodes see the same data at the same time
- **Availability**: Every request receives a response
- **Partition Tolerance**: System continues operating during network partitions

### Key Challenges
1. Maintaining concurrency of components
2. Overcoming lack of global clock
3. Managing independent failure of components

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with technical content
- **References**: 5 pages reference this concept
