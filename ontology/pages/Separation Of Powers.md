public:: true

# Separation Of Powers
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:22090cced5f0bc5190bf785464da370aacff6a9ee6e7fde24687ce2813420a00",
  "@type": "Page",
  "vc:slug": "separation-of-powers",
  "title": "Separation Of Powers",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decentralized-control",
      "vc:label": "Decentralized Control"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:dao-governance",
      "vc:label": "DAO Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-10038"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Separation Of Powers"
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
  "@id": "urn:ngm:class:separation-of-powers",
  "@type": "Class",
  "label": "Separation Of Powers",
  "definition": "Governance design patterns in decentralized autonomous organizations that distribute authority across distinct functional roles, preventing concentration of control through checks and balances between proposal creation, voting, execution, and oversight functions.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-control",
        "label": "Decentralized Control"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:dao-governance",
        "label": "DAO Governance"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:separation-of-powers:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:22090cced5f0bc5190bf785464da370aacff6a9ee6e7fde24687ce2813420a00"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decentralized Control]]",
      "resolved": "urn:visionflow:linked:decentralized-control",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DAO Governance]]",
      "resolved": "urn:visionflow:owl:class:dao-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    }
  ],
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
  - Governance design patterns in decentralized autonomous organizations that distribute authority across distinct functional roles, preventing concentration of control through checks and balances between proposal creation, voting, execution, and oversight functions.

- ### Semantic Classification
  - owl-class:: spatial-computing:SeparationOfPowers
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[DAO Governance]]
  - enables:: [[Decentralized Control]]
  - bridges-to:: [[Blockchain]] (domain: bc) for decentralised autonomous organisation governance implementation

- ### Content

  - #### Governance Roles
		- Proposal creators (legislative function)
		- Token voters (decision function)
		- Multi-sig executors (executive function)
		- Guardian councils (oversight function)
		- Treasury managers (financial function)
  - #### Implementation Patterns
		- Time-locked execution delays
		- Multi-sig approval requirements
		- Veto mechanisms for guardians
		- Emergency pause capabilities
		- Transparent audit trails

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
