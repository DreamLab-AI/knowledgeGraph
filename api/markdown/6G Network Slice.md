- ### OntologyBlock
  id:: 6g-network-slice-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: DT-1017
	- source-domain:: mv
	- preferred-term:: 6G Network Slice
	- public-access:: true
	- definition:: Virtual partition of 6G infrastructure guaranteeing specified quality-of-service levels for immersive workloads through isolated resource allocation.
	- source:: [[3GPP Release 21]], [[ETSI ENI 008]]
	- maturity:: draft
	- owl:class:: mv:SixGNetworkSlice
	- owl:physicality:: VirtualEntity
	- owl:role:: Object
	- owl:inferred-class:: mv:VirtualObject
	- owl:functional-syntax:: true
	- belongsToDomain:: [[InfrastructureDomain]]
	- implementedInLayer:: [[NetworkLayer]]
	- #### Relationships
- is-subclass-of:: [[Metaverse]]
	  id:: 6g-network-slice-relationships
	  collapsed:: true
		- has-part:: [[Service Level Agreement]]
		- has-part:: [[Resource Allocation Unit]]
		- has-part:: [[Traffic Classifier]]
		- has-part:: [[QoS Policy]]
		- requires:: [[6G Network Infrastructure]]
		- requires:: [[Network Slicing Orchestrator]]
		- requires:: [[SDN Controller]]
		- enables:: [[Dynamic Resource Allocation]]
		- enables:: [[Low Latency Service]]
		- enables:: [[Workload Isolation]]
		- enables:: [[Guaranteed Bandwidth]]
		- uses:: [[Network Slice]]
		- uses:: [[Virtual Network]]
		- uses:: [[Network Function Virtualization]]
		- uses:: [[5G Network Slice]]

## 6G Network Slice

6G Network Slice refers to virtual partition of 6g infrastructure guaranteeing specified quality-of-service levels for immersive workloads through isolated resource allocation.

- Industry adoption and implementations
	- Major telecom equipment vendors and operators are actively developing 6G slicing prototypes and testbeds
	- Notable organisations and platforms
		- Ericsson, Nokia, and Huawei are leading in 6G research and development, with ongoing collaborations with academic institutions
		- The UK’s 6G Innovation Centre (6GIC) at the University of Surrey is a key hub for 6G research, including slicing technologies
	- UK and North England examples where relevant
		- The Northern 5G (N5G) project, spanning Manchester, Leeds, and Newcastle, is exploring advanced network slicing for smart city and industrial applications
		- Sheffield’s Advanced Manufacturing Research Centre (AMRC) is piloting slicing for immersive industrial workloads, such as remote maintenance and digital twinning
- Technical capabilities and limitations
	- 6G slicing is expected to support ultra-low latency (sub-millisecond), massive connectivity, and highly customisable quality-of-service (QoS) guarantees
	- Current limitations include the complexity of cross-domain orchestration, security challenges, and the need for robust standards
- Standards and frameworks
	- The 3GPP is developing 6G slicing specifications, with a focus on interoperability and security
	- The European Telecommunications Standards Institute (ETSI) is also contributing to 6G slicing standards, particularly in the context of cross-border and multi-operator scenarios

## Research & Literature

- Key academic papers and sources
	- Uusitalo, M., Chaffer, K., & Ladid, L. (2025). Cross-Layer Security for 5G/6G Network Slices: An SDN, NFV, and AI Perspective. Sensors, 25(11), 3335. https://doi.org/10.3390/s25113335
	- Ericsson. (2025). 6G: The Next Generation of Cellular Networks. Ericsson White Paper. https://www.ericsson.com/en/6g
	- Pereira, J., & Ladid, L. (2025). Symposium on 6G Communications. IEEE FNWF 2025. https://fnwf2025.ieee.org/symposium-6g-communications
- Ongoing research directions
	- AI-driven orchestration and automation of network slices
	- Cross-layer security and privacy for slicing
	- Integration of sensing and communication in 6G slicing

## UK Context

- British contributions and implementations
	- The UK is a leader in 6G research, with significant government and industry investment in 6G slicing technologies
	- The 6GIC at the University of Surrey is a world-renowned centre for 6G research, including slicing
- North England innovation hubs (if relevant)
	- The N5G project is a major initiative in North England, focusing on advanced network slicing for smart cities and industrial applications
	- The AMRC in Sheffield is a key player in industrial 6G slicing, with pilots in immersive workloads and digital twinning
- Regional case studies
	- Manchester’s smart city initiatives are leveraging 6G slicing for immersive urban services
	- Leeds is exploring slicing for healthcare and remote monitoring applications
	- Newcastle’s digital innovation hub is piloting slicing for autonomous mobility and smart transport

## Future Directions

- Emerging trends and developments
	- AI-driven, context-aware slicing for dynamic service provisioning
	- Integration of sensing and communication in 6G slicing
	- Seamless cross-domain and multi-operator slicing
- Anticipated challenges
	- Complexity of cross-domain orchestration
	- Security and privacy concerns
	- Need for robust standards and interoperability
- Research priorities
	- AI-driven orchestration and automation
	- Cross-layer security and privacy
	- Integration of sensing and communication

## References

1. Uusitalo, M., Chaffer, K., & Ladid, L. (2025). Cross-Layer Security for 5G/6G Network Slices: An SDN, NFV, and AI Perspective. Sensors, 25(11), 3335. https://doi.org/10.3390/s25113335
2. Ericsson. (2025). 6G: The Next Generation of Cellular Networks. Ericsson White Paper. https://www.ericsson.com/en/6g
3. Pereira, J., & Ladid, L. (2025). Symposium on 6G Communications. IEEE FNWF 2025. https://fnwf2025.ieee.org/symposium-6g-communications
4. 6G Innovation Centre. (2025). 6G Research and Development. University of Surrey. https://www.surrey.ac.uk/6g-innovation-centre
5. Northern 5G. (2025). Advanced Network Slicing for Smart Cities and Industry. https://www.northern5g.com
6. Advanced Manufacturing Research Centre. (2025). 6G Slicing for Industrial Applications. https://www.amrc.co.uk
7. European Telecommunications Standards Institute. (2025). 6G Network Slicing Standards. https://www.etsi.org
8. 3GPP. (2025). 6G Network Slicing Specifications. https://www.3gpp.org

## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
