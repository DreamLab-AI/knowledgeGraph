schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#SomeLegacyLinkedJSON
legacy_uri:: urn:visionclaw:concept:infrastructure:some-legacy-linked-json
public:: true

# Some legacy Linked-JSON
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:aac956e03f1e2210ac04181552b1f9ab242e577f8b4744c67211f83cc3b10193",
  "@type": "Page",
  "vc:slug": "some-legacy-linked-json",
  "title": "Some legacy Linked-JSON",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-53eff1e8ba83"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#SomeLegacyLinkedJSON"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Some legacy Linked-JSON"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.50"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:infrastructure:some-legacy-linked-json"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:some-legacy-linked-json"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:aac956e03f1e2210ac04181552b1f9ab242e577f8b4744c67211f83cc3b10193@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:some-legacy-linked-json",
  "@type": "OntologyClass",
  "label": "Some legacy Linked-JSON",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:aac956e03f1e2210ac04181552b1f9ab242e577f8b4744c67211f83cc3b10193"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:aac956e03f1e2210ac04181552b1f9ab242e577f8b4744c67211f83cc3b10193@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Some legacy Linked-JSON is a technology infrastructure concept and a type of infrastructure.",
  "vc:qualityScore": {
    "@value": "0.50",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:some-legacy-linked-json:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:aac956e03f1e2210ac04181552b1f9ab242e577f8b4744c67211f83cc3b10193"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:aac956e03f1e2210ac04181552b1f9ab242e577f8b4744c67211f83cc3b10193@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Some legacy Linked-JSON is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:SomeLegacyLinkedJSON
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

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
