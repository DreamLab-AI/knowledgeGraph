- ### OntologyBlock
  id:: computing-infrastructure-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: NGM-7033
	- preferred-term:: Computing Infrastructure
	- source-domain:: ngm
	- status:: active
	- public-access:: true
	- definition:: Computing infrastructure encompasses the physical and virtual resources required for building, running, and delivering applications and services, including servers, storage systems, networking equipment, power systems, and cooling facilities housed in data centers. It provides the foundational computing capacity that IT systems require to process, store, and transmit digital data.
	- maturity:: reviewed
	- belongsToDomain:: [[InfrastructureDomain]], [[Technology Domain]]
	- owl:class:: ngm:ComputingInfrastructure
	- owl:role:: Infrastructure

## Relationships
- relatedTo:: [[Cloud Infrastructure]], [[Distributed Computing]], [[Database System]]
- includes:: [[Power Supply]], [[Network Protocol]], [[Server Hardware]]
- supports:: [[Real-Time Rendering]], [[Performance Optimization]]
- hostedIn:: [[Data Centers]], [[Edge Computing Facilities]]
- managedBy:: [[Infrastructure Management Systems]]

## Core Components

### Computing Resources
- **Servers**: Physical and virtualized machines providing processing, memory, local storage, and network connectivity
- **CPUs/GPUs**: Processing units for general and specialized computing tasks
- **Memory**: RAM and cache systems for active data processing

### Storage Infrastructure
- **Block Storage**: Direct-attached and SAN-based storage systems
- **Object Storage**: Scalable storage for unstructured data
- **Network-Attached Storage (NAS)**: File-level data storage

### Network Infrastructure
- **Routers and Switches**: Traffic routing and local network connectivity
- **Firewalls**: Security perimeter control
- **Load Balancers**: Traffic distribution across servers

### Power Infrastructure
- **Uninterruptible Power Supplies (UPS)**: Immediate backup power
- **Power Distribution Units (PDUs)**: Power management to rack equipment
- **Backup Generators**: Extended power during outages

### Cooling Systems
- **Air-Based Cooling**: Traditional CRAC/CRAH units
- **Liquid Cooling**: Direct-to-chip and immersion cooling
- **Hybrid Systems**: Combined air and liquid approaches

## Data Center Types

| Type | Description |
|------|-------------|
| On-Premises | Owned and operated by the organization |
| Colocation | Leased space in third-party facilities |
| Cloud | Operated by providers (AWS, Azure, Google Cloud) |
| Hybrid | Combined on-premises, colocation, and cloud |

## Industry Trends (2024)
- Data center consumption estimated at ~415 TWh (1.5% of global power)
- Annual growth rate of 12-15%
- AI workloads driving demand for specialized GPU/TPU infrastructure
- Increased focus on energy efficiency and sustainable operations

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Enriched with technical content
- **References**: 5 pages reference this concept
