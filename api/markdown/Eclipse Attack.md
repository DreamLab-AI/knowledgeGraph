schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/blockchain#EclipseAttack
legacy_uri:: urn:visionclaw:concept:blockchain:eclipse-attack
public:: true

# Eclipse Attack
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:98cbc72ce45b623b7f72fd41eb8446516c7553d60e4b65c1e566acac8a79c89b",
  "@type": "Page",
  "vc:slug": "eclipse-attack",
  "title": "Eclipse Attack",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ieee-2418-1",
      "vc:label": "IEEE 2418.1"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-23257-2021",
      "vc:label": "ISO/IEC 23257:2021"
    },
    {
      "@id": "urn:visionflow:linked:nist-nistir",
      "vc:label": "NIST NISTIR"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain-entity",
      "vc:label": "Blockchain Entity"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-domain",
      "vc:label": "CryptographicDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:network-component",
      "vc:label": "NetworkComponent"
    },
    {
      "@id": "urn:visionflow:owl:class:security-layer",
      "vc:label": "SecurityLayer"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-2cf23e7010a3"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-10-28T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "blockchain"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/blockchain#EclipseAttack"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "BC-0083"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Eclipse Attack"
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
      "vc:value": "urn:visionclaw:concept:blockchain:eclipse-attack"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:blockchain:eclipse-attack"
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
    "@id": "urn:visionflow:page:98cbc72ce45b623b7f72fd41eb8446516c7553d60e4b65c1e566acac8a79c89b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:eclipse-attack",
  "@type": "Class",
  "label": "Eclipse Attack",
  "definition": "Node isolation attack within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.",
  "domain": "blockchain",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:blockchain-entity",
      "label": "Blockchain Entity"
    },
    {
      "@id": "urn:ngm:class:network-component",
      "label": "NetworkComponent"
    }
  ],
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:eclipse-attack:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:98cbc72ce45b623b7f72fd41eb8446516c7553d60e4b65c1e566acac8a79c89b"
  },
  "vc:resolutions": [
    {
      "raw": "[[IEEE 2418.1]]",
      "resolved": "urn:visionflow:linked:ieee-2418-1",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 23257:2021]]",
      "resolved": "urn:visionflow:linked:iso-iec-23257-2021",
      "kind": "StubLink"
    },
    {
      "raw": "[[NIST NISTIR]]",
      "resolved": "urn:visionflow:linked:nist-nistir",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Entity]]",
      "resolved": "urn:visionflow:owl:class:blockchain-entity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[CryptographicDomain]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[NetworkComponent]]",
      "resolved": "urn:visionflow:owl:class:network-component",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[SecurityLayer]]",
      "resolved": "urn:visionflow:owl:class:security-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:98cbc72ce45b623b7f72fd41eb8446516c7553d60e4b65c1e566acac8a79c89b@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Node isolation attack within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.

- ### Semantic Classification
  - owl-class:: blockchain:EclipseAttack
  - owl-role:: Object
  - owl-inferred:: blockchain:VirtualObject
  - belongs-to-domain:: [[CryptographicDomain]]
  - implemented-in-layer:: [[SecurityLayer]]

- ### Relationships
  - is-subclass-of:: [[Blockchain Entity]], [[NetworkComponent]]

- ### Content

  ## Class Declaration
  Declaration(Class(:EclipseAttack))

  ## Subclass Relationships
  SubClassOf(:EclipseAttack :NetworkComponent)
  SubClassOf(:EclipseAttack :BlockchainEntity)

  ## Essential Properties
  SubClassOf(:EclipseAttack
    (ObjectSomeValuesFrom :partOf :Blockchain))

  SubClassOf(:EclipseAttack
    (ObjectSomeValuesFrom :hasProperty :Property))

  ## Data Properties
  DataPropertyAssertion(:hasIdentifier :EclipseAttack "BC-0083"^^xsd:string)
  DataPropertyAssertion(:hasAuthorityScore :EclipseAttack "1.0"^^xsd:decimal)
  DataPropertyAssertion(:isFoundational :EclipseAttack "true"^^xsd:boolean)

  ## Object Properties
  ObjectPropertyAssertion(:enablesFeature :EclipseAttack :BlockchainFeature)
  ObjectPropertyAssertion(:relatesTo :EclipseAttack :RelatedConcept)

  ## Annotations
  AnnotationAssertion(rdfs:label :EclipseAttack "Eclipse Attack"@en)
  AnnotationAssertion(rdfs:comment :EclipseAttack
    "Node isolation attack"@en)
  AnnotationAssertion(dct:description :EclipseAttack
    "Foundational blockchain concept with formal ontological definition"@en)
  AnnotationAssertion(:termID :EclipseAttack "BC-0083")
  AnnotationAssertion(:priority :EclipseAttack "1"^^xsd:integer)
  AnnotationAssertion(:category :EclipseAttack "network-security"@en)
  )
      ```

  - ## About Eclipse Attack

  - Node isolation attack within blockchain systems, providing essential functionality for distributed ledger technology operations and properties.
  - ### Key Characteristics
    - 1. **Definitional Property**: Core defining characteristic
    - 2. **Functional Property**: Operational behavior
    - 3. **Structural Property**: Compositional elements
    - 4. **Security Property**: Security guarantees provided
    - 5. **Performance Property**: Efficiency considerations
  - ### Technical Components
    - **Implementation**: How concept is realized technically
    - **Verification**: Methods for validating correctness
    - **Interaction**: Relationships with other components
    - **Constraints**: Technical limitations and requirements
  - ### Use Cases
    - **1. Core Blockchain Operation**
    - **Application**: Fundamental blockchain functionality
    - **Example**: Practical implementation in major blockchains
    - **Requirements**: Technical prerequisites
    - **Benefits**: Value provided to blockchain systems
  - ### Standards & References
    - [[ISO/IEC 23257:2021]] - Blockchain and distributed ledger technologies
    - [[IEEE 2418.1]] - Blockchain and distributed ledger technologies
    - [[NIST NISTIR]] - Blockchain and distributed ledger technologies

- ### Provenance
  - sources:: [[ISO/IEC 23257:2021]], [[IEEE 2418.1]], [[NIST NISTIR]]
  - migration-date:: 2026-04-26T00:00:00Z
