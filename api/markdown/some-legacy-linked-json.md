- ### Definition
  - Some legacy Linked-JSON is a collection of early-stage JSON-LD-based ontology data structures capturing metaverse entity models — including agents, scenes, digital assets, and virtual economies — created before the current NarrativeGoldmine v2 schema. These artefacts document the iterative evolution of the knowledge graph's data model and serve as a reference for schema migration and ontology provenance tracing.

- ### Semantic Classification
  - owl-class:: infrastructure:SomeLegacyLinkedJSON
  - owl-role:: Concept

- ### Relationships
  - **relatedTo**: JSON-LD — the content uses JSON-LD syntax for linked data representation; Ontology — the artefacts encode an early ontological model of the metaverse domain; Knowledge Graph — this data was a precursor to the current knowledge graph.
  - **enables**: Knowledge Graph Construction — the legacy models inform how the current graph is structured and what entities are required.
  - **uses**: RDF — the underlying data model follows RDF triples; Semantic Web — the design reflects Semantic Web principles for interlinked machine-readable data.

- ### Content
  - ```mermaid
  classDiagram
      MetaverseEntity <|-- MetaverseAgent
      MetaverseEntity <|-- MetaverseScene
      MetaverseEntity <|-- SceneObject
      MetaverseEntity <|-- DigitalAsset
      MetaverseEntity <|-- VirtualEconomy
      MetaverseEntity <|-- OwnershipTransfer
      MetaverseEntity <|-- NostrEvent
      MetaverseEntity <|-- NostrTag
      MetaverseAgent <|-- HumanAgent
      MetaverseAgent <|-- AIAgent
      AIAgent *-- AgentArchetype
      AIAgent *-- LearningModel
      AIAgent *-- EmotionalState
      MetaverseScene *-- SceneObject
      MetaverseScene *-- EnvironmentalConditions
      MetaverseScene *-- Varset
      SceneObject *-- PhysicalProperties
      SceneObject *-- InteractionEvent
      DigitalAsset *-- RGBschema
      DigitalAsset *-- OwnershipTransfer
      OwnershipTransfer *-- MetaverseAgent : from
      OwnershipTransfer *-- MetaverseAgent : to 
      NostrEvent *-- NostrTag
      MetaverseAgent *-- DigitalWallet : wallet 
      MetaverseEntity *-- string : publicKey
      MetaverseEntity *-- string : privateKey
      MetaverseAgent *-- string : bitcoinWallet
      MetaverseAgent *-- string : lightningNode
      VirtualEconomy *-- ComputerNetwork : bitcoinNetwork
      VirtualEconomy *-- ComputerNetwork : lightningNetwork
      MetaverseScene *-- anyURI : omniverseNucleusUrl
      MetaverseScene *-- anyURI : usdFile
  - Mermaid version with some remaining OWL expressiveness:
  - ```mermaid
	  classDiagram
	      class MetaverseEntity {
	          rdfs:label "Metaverse Entity"
	          rdfs:comment "The root type encompassing all entities within the metaverse."
	      }
	      class MetaverseAgent {
	          rdfs:label "Metaverse Agent"
	          rdfs:comment "Represents any agent within the metaverse, including human users and AI entities."
	          participatesIn MetaverseScene
	          hasSkillProfile SkillProfile
	          hasPrivacySetting PrivacySetting
	          hasReputationScore ReputationScore
	      }
	      class AIAgent {
	          rdfs:label "AI Agent"
	          rdfs:comment "Represents AI entities with varying levels of autonomy and capabilities."
	          decayFunction xsd:string
	      }
	      class HumanAgent {
	          rdfs:label "Human Agent"
	          rdfs:comment "Represents human users within the metaverse."
	      }
	      class MetaverseScene {
	          rdfs:label "Metaverse Scene"
	          rdfs:comment "Represents a specific environment or space within the metaverse."
	          governedBy GovernanceStructure
	          hasPolicy MetaversePolicy
	      }
	      class DigitalAsset {
	          rdfs:label "Digital Asset"
	          rdfs:comment "Represents unique digital goods and assets within the metaverse."
	          hasOwner MetaverseAgent
	      }
	      class VirtualEconomy {
	          rdfs:label "Virtual Economy"
	          rdfs:comment "Represents the economic system within the metaverse."
	          regulatedBy EconomicPolicy
	          hasMarketplace Marketplace
	      }
	      class Marketplace {
	          rdfs:label "Marketplace"
	          rdfs:comment "Represents platforms or locations where digital assets are traded."
	      }
	      class GovernanceStructure {
	          rdfs:label "Governance Structure"
	          rdfs:comment "Represents the governance models and structures within the metaverse."
	      }
	      class MetaversePolicy {
	          rdfs:label "Metaverse Policy"
	          rdfs:comment "Represents policies governing behavior and interactions within the metaverse."
	      }
	      class EconomicPolicy {
	          rdfs:label "Economic Policy"
	          rdfs:comment "Represents the rules and regulations governing the virtual economy."
	      }
	      MetaverseEntity <|-- MetaverseAgent
	      MetaverseEntity <|-- MetaverseScene
	      MetaverseEntity <|-- DigitalAsset
	      MetaverseEntity <|-- VirtualEconomy
	      MetaverseEntity <|-- Marketplace
	      MetaverseEntity <|-- GovernanceStructure
	      MetaverseAgent <|-- AIAgent
	      MetaverseAgent <|-- HumanAgent
	      MetaverseAgent "1" *-- "0..*" SkillProfile : hasSkillProfile
	      MetaverseAgent "1" *-- "0..*" PrivacySetting : hasPrivacySetting
	      MetaverseAgent "1" *-- "0..*" ReputationScore : hasReputationScore
	      MetaverseScene "1" *-- "0..*" GovernanceStructure : governedBy
	      MetaverseScene "1" *-- "0..*" MetaversePolicy : hasPolicy
	      DigitalAsset "1" *-- "1" MetaverseAgent : hasOwner
	      VirtualEconomy "1" *-- "0..*" EconomicPolicy : regulatedBy
	      VirtualEconomy "1" *-- "0..*" Marketplace : hasMarketplace

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z