- ### OntologyBlock
  id:: human-agency-and-oversight-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0409
	- source-domain:: ai
	- preferred-term:: Human Agency and Oversight
	- status:: active
	- public-access:: true
	- definition:: A trustworthiness dimension ensuring AI systems respect human autonomy, preserve meaningful human control, and implement appropriate human supervision mechanisms to prevent undue coercion, manipulation, or erosion of self-determination. Encompasses human agency (protecting decision-making capacity) and human oversight (enabling intervention through human-in-the-loop, human-on-the-loop, and human-in-command mechanisms).
	- source:: [[EU AI Act Article 14]], [[EU HLEG AI]], [[IEEE P7000]]
	- maturity:: mature
	- owl:class:: ai:HumanAgencyOversight
	- owl:physicality:: VirtualEntity
	- owl:role:: Process
	- owl:inferred-class:: ai:VirtualProcess
	- belongsToDomain:: [[AIEthicsDomain]]
	- implementedInLayer:: [[ConceptualLayer]]
	- #### Relationships
	  id:: human-agency-and-oversight-relationships
	  collapsed:: true
		- is-subclass-of:: [[AIGovernance]]
		- enables:: [[AI Trustworthiness]]
		- requires:: [[Transparency]]

## Academic Context

- Human agency and oversight represents a foundational principle in AI governance, ensuring that artificial intelligence systems remain tools serving human interests rather than autonomous decision-makers
  - Emerged from broader ethical AI frameworks emphasising human dignity, autonomy, and control
  - Reflects recognition that technological advancement must be balanced against societal needs and individual rights
  - Grounded in human-centric AI philosophy that treats systems as instruments enhancing rather than replacing human judgment

## Current Landscape (2025)

- **Industry adoption and implementations**
  - EU AI Act Article 14 mandates appropriate human oversight for high-risk AI systems
  - Hybrid approaches routing routine tasks to autonomous systems while escalating high-impact decisions to humans
  - Emergency stop capabilities enabling immediate suspension of automated operations

- **UK and North England context**
  - UK AI regulatory framework emphasises proportionate human oversight
  - Manchester and Leeds AI innovation hubs developing oversight tooling
  - NHS AI implementations require human-in-the-loop for clinical decisions

## Technical Details

- **Domain Prefix**: AI
- **Sequence Number**: 0409
- **Public Access**: true

## References

1. EU AI Act Article 14
2. EU High-Level Expert Group on AI (HLEG AI)
3. IEEE P7000 Series Standards

## Metadata

- **Last Updated**: 2025-12-28
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
