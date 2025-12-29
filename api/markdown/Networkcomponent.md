- ### OntologyBlock
  id:: networkcomponent-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: TC-7000
	- preferred-term:: Networkcomponent
	- source-domain:: tc
	- status:: active
	- public-access:: true
	- definition:: Network Components are the physical and virtual hardware devices that comprise telecommunications and computer network infrastructure, enabling network connectivity, communication, and data routing between users, devices, applications, and the internet. Core components include switches for local traffic routing, routers for inter-network packet forwarding, and firewalls for security enforcement, forming the foundation of modern digital communications.
	- maturity:: reviewed
	- owl:class:: tc:Networkcomponent
	- owl:physicality:: ConceptualEntity
	- owl:role:: Concept
	- belongsToDomain:: [[InfrastructureDomain]]

## Relationships
- ### Core Components
	- [[Router]] - Directs packets between networks using routing algorithms
	- [[Switch]] - Routes traffic within LANs, full-duplex communication
	- [[Firewall]] - Security enforcement and traffic filtering
	- [[Hub]] - Basic network connectivity (legacy)
	- [[Gateway]] - Protocol translation between networks

- ### Related Concepts
	- [[NetworkInfrastructure]] - Overall infrastructure framework
	- [[NetworkTopology]] - Physical and logical network design
	- [[OSIModel]] - Network layer reference model
	- [[IPAddressing]] - Network addressing scheme
	- [[VLAN]] - Virtual network segmentation
	- [[LoadBalancer]] - Traffic distribution across servers

- ### Component Types
	- [[ManagedSwitch]] - Configurable with SNMP monitoring
	- [[UnmanagedSwitch]] - Plug-and-play basic switching
	- [[EdgeRouter]] - Border routing and internet connectivity
	- [[CoreRouter]] - High-capacity backbone routing
	- [[WirelessAccessPoint]] - WiFi connectivity

- ### Management
	- [[NetworkManagement]] - Configuration and monitoring
	- [[SNMP]] - Simple Network Management Protocol
	- [[ConfigurationManagement]] - Device configuration control
	- [[NetworkMonitoring]] - Performance and health tracking

## Metadata

- **Last Updated**: 2025-12-29
- **Review Status**: Reviewed and enriched
- **References**: 32 pages reference this concept
