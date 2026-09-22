public:: true

# Property Schema
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:dab66eff8c463563acf237b00eab005ecd178dab85e5b7e0fff453d26d0abeb6",
  "@type": "Page",
  "vc:slug": "property-schema",
  "title": "Property Schema",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Property Schema"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:property-schema",
  "@type": "Class",
  "label": "Property Schema",
  "definition": "A formal specification of the object properties, data properties, and annotation properties that relate classes within an ontology, including domain and range constraints, cardinality axioms, and logical characteristics such as transitivity and symmetry. Property schemas are the mechanism by which OWL2 ontologies encode typed, machine-readable relations between entities.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-software-engineering",
      "label": "Software Engineering"
    }
  ],
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:ontology", "label": "Ontology"},
      {"@id": "urn:ngm:class:owl-class-hierarchy", "label": "OWL Class Hierarchy"}
    ],
    "implements": [
      {"@id": "urn:ngm:class:linked-data", "label": "Linked Data"},
      {"@id": "urn:ngm:class:semantic-web-linked-data-standard", "label": "Semantic Web Linked Data Standard"}
    ],
    "standardizedBy": [
      {"@id": "urn:ngm:class:rdf", "label": "RDF"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:knowledge-graph", "label": "Knowledge Graph"},
      {"@id": "urn:ngm:class:sparql", "label": "SPARQL"}
    ]
  },
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:property-schema:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:dab66eff8c463563acf237b00eab005ecd178dab85e5b7e0fff453d26d0abeb6"
  },
  "vc:resolutions": [],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A formal specification of the object properties, data properties, and annotation properties that relate classes within an ontology, including domain and range constraints, cardinality axioms, and logical characteristics such as transitivity and symmetry. Property schemas are the mechanism by which OWL2 ontologies encode typed, machine-readable relations between entities.

- ### Semantic Classification
  - owl-class:: infrastructure:PropertySchema
  - owl-role:: Concept

- ### Relationships
  - **partOf** [[Ontology]] — a property schema is a constitutive component of every formal ontology
  - **partOf** [[OWL Class Hierarchy]] — property axioms are declared alongside and inter-relate OWL class hierarchies
  - **implements** [[Linked Data]] — property schemas realise the typed predicates that link data nodes in RDF graphs
  - **implements** [[Semantic Web Linked Data Standard]] — the semantic web depends on agreed property schemas to enable cross-ontology inference
  - **standardizedBy** [[RDF]] — RDF provides the triple model within which property schemas are instantiated
  - **enables** [[Knowledge Graph]] — knowledge graphs use property schemas to type and constrain their edges
  - **enables** [[SPARQL]] — SPARQL queries exploit property schema declarations for pattern matching and inference

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
