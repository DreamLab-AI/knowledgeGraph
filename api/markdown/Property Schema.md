iri:: http://narrativegoldmine.com/infrastructure#PropertySchema
uri:: urn:visionclaw:concept:infrastructure:property-schema
rdf-type:: owl:Class
same-as:: urn:visionclaw:concept:infrastructure:property-schema
type:: owl:Class
context:: https://visionclaw.dreamlab-ai.systems/ns/v2
domain:: infrastructure
preferred-term:: Property Schema
content-hash:: sha256-12-5e8e6f2ae513
status:: stub
maturity:: draft
quality-score:: 0.50
authority-score:: 0.00
version:: 2.0.0
created:: 2026-04-26T00:00:00Z
modified:: 2026-04-26T13:00:00Z
public:: true

- ### Definition
  - PropertySchema is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:PropertySchema
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  # Metaverse Ontology Property Schema
  This file provides the formal OWL declarations for all Object, Data, and Annotation properties.
  Declaration(ObjectProperty(infrastructure:hasPart))
  TransitiveObjectProperty(infrastructure:hasPart)
  IrreflexiveObjectProperty(infrastructure:hasPart)
  AsymmetricObjectProperty(infrastructure:hasPart)
  Declaration(ObjectProperty(infrastructure:isPartOf))
  TransitiveObjectProperty(infrastructure:isPartOf)
  InverseObjectProperties(infrastructure:hasPart infrastructure:isPartOf)
  Declaration(ObjectProperty(infrastructure:dependsOn))
  TransitiveObjectProperty(infrastructure:dependsOn)
  Declaration(ObjectProperty(infrastructure:requires))
  SubObjectPropertyOf(infrastructure:requires infrastructure:dependsOn)
  Declaration(ObjectProperty(infrastructure:enables))
  Declaration(ObjectProperty(infrastructure:enabledBy))
  InverseObjectProperties(infrastructure:enables infrastructure:enabledBy)
  Declaration(ObjectProperty(infrastructure:bindsTo))
  SymmetricObjectProperty(infrastructure:bindsTo)
  IrreflexiveObjectProperty(infrastructure:bindsTo)
  FunctionalObjectProperty(infrastructure:bindsTo)
  ObjectPropertyDomain(infrastructure:bindsTo ObjectUnionOf(infrastructure:PhysicalEntity infrastructure:VirtualEntity infrastructure:HybridEntity))
  ObjectPropertyRange(infrastructure:bindsTo ObjectUnionOf(infrastructure:PhysicalEntity infrastructure:VirtualEntity))
  Declaration(ObjectProperty(infrastructure:represents))
  ObjectPropertyDomain(infrastructure:represents infrastructure:Entity)
  ObjectPropertyRange(infrastructure:represents infrastructure:Entity)
  Declaration(ObjectProperty(infrastructure:runsOn))
  ObjectPropertyDomain(infrastructure:runsOn infrastructure:Software)
  ObjectPropertyRange(infrastructure:runsOn infrastructure:Hardware)
  Declaration(ObjectProperty(infrastructure:implementedInLayer))
  Declaration(Class(infrastructure:ArchitectureLayer))
  SubClassOf(infrastructure:ArchitectureLayer infrastructure:AbstractConcept)
  ObjectPropertyDomain(infrastructure:implementedInLayer infrastructure:Entity)
  ObjectPropertyRange(infrastructure:implementedInLayer infrastructure:ArchitectureLayer)
  Declaration(Class(infrastructure:UserExperienceLayer))
  SubClassOf(infrastructure:UserExperienceLayer infrastructure:ArchitectureLayer)
  Declaration(DataProperty(infrastructure:termId))
  FunctionalDataProperty(infrastructure:termId)
  DataPropertyRange(infrastructure:termId xsd:integer)
  Declaration(DataProperty(infrastructure:maturity))
  Declaration(Datatype(infrastructure:MaturityLevel))
  DatatypeDefinition(infrastructure:MaturityLevel DataOneOf("draft"^^xsd:string "mature"^^xsd:string "deprecated"^^xsd:string))
  DataPropertyRange(infrastructure:maturity infrastructure:MaturityLevel)
  Declaration(AnnotationProperty(infrastructure:source))
  Declaration(AnnotationProperty(infrastructure:synonyms))

  ## Object Properties
  ### Mereological (Part-Whole)
  #### hasPart
  #### isPartOf
  ### Dependency
  #### dependsOn
  #### requires
  ### Capability
  #### enables
  #### enabledBy
  ### Binding (for Hybrid Entities)
  #### bindsTo
  ### Representation
  #### represents
  ### Execution/Deployment
  #### runsOn
  ### Architectural Classification
  #### implementedInLayer
  ## Data Properties
  ### Identification
  #### termId
  ### Classification
  #### maturity
  ## Annotation Properties
  #### source
  #### synonyms

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
