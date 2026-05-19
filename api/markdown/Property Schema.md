schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#PropertySchema
legacy_uri:: urn:visionclaw:concept:infrastructure:property-schema
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-5e8e6f2ae513"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#PropertySchema"
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
      "vc:value": "Property Schema"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:property-schema"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:property-schema"
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
    "@id": "urn:visionflow:page:dab66eff8c463563acf237b00eab005ecd178dab85e5b7e0fff453d26d0abeb6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "definition": "Property Schema is a technology infrastructure concept and a type of infrastructure.",
  "domain": "infrastructure",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "quality": 0.5,
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:dab66eff8c463563acf237b00eab005ecd178dab85e5b7e0fff453d26d0abeb6@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


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
