public:: true

# Centralised Application
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:524c8485c40179ce08c5aa91bba074bc038da992474b8a30016675e23cd4f5d6",
  "@type": "Page",
  "vc:slug": "centralized-application",
  "title": "Centralised Application",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:software-system",
      "vc:label": "Software System"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-application",
      "vc:label": "Decentralised Application"
    },
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
    }
  ],
  "vc:schemaVersion": 2,
  "prov:wasAttributedTo": {
    "@id": "did:nostr:ontology-mesh"
  },
  "prov:generatedAtTime": {
    "@value": "2026-08-06T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:centralized-application",
  "@type": "Class",
  "label": "Centralised Application",
  "definition": "A software application whose logic, state, and data are operated by a single controlling entity on infrastructure it administers, typically following a client-server architecture in which users depend on the operator for availability, data custody, access control, and rule changes, in contrast to decentralised applications whose execution and state are replicated across a permissionless network.",
  "domain": "infrastructure",
  "maturity": "mature",
  "subClassOf": {
    "@id": "urn:ngm:class:software-system",
    "label": "Software System"
  },
  "relations": {
    "uses": [
      {
        "@id": "urn:ngm:class:client-server-architecture",
        "label": "Client-Server Architecture"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:cloud-computing",
        "label": "Cloud Computing"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:decentralized-application",
        "label": "Decentralized Application"
      },
      {
        "@id": "urn:ngm:class:blockchain-application",
        "label": "Blockchain Application"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:single-point-of-failure",
        "label": "Single Point of Failure"
      }
    ]
  },
  "quality": 0.7,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-08-06T00:00:00Z",
    "inferenceRule": "SwarmRepair"
  }
}
```

- ### Definition
  - "A software application whose logic, state, and data are operated by a single controlling entity on infrastructure it administers, typically following a client-server architecture in which users depend on the operator for availability, data custody, access control, and rule changes, in contrast to decentralised applications whose execution and state are replicated across a permissionless network."

- ### Semantic Classification
  - owl-class:: infrastructure:CentralisedApplication
  - owl-role:: Artifact

- ### Relationships
  - is-subclass-of:: [[Software System]]
  - contrasts-with:: [[Decentralised Application]]
  - uses:: [[Client-Server Architecture]]
  - depends-on:: [[Cloud Computing]]

- ### Content

  ## Definition

  A **centralised application** is the conventional model of software delivery: a single organisation writes, hosts, and operates the application, holds its database, and mediates every interaction between users. Web services, mobile app backends, banking platforms, and social networks are all centralised applications — the client is merely a window onto servers the operator controls. This concentration of control brings real advantages: rapid iteration, coherent user experience, straightforward regulatory accountability, and the ability to reverse mistakes such as fraudulent transactions or accidental data loss.

  The same concentration is the model's weakness. The operator is a single point of failure for availability, a single point of trust for data custody, and a single point of coercion for censorship or policy change. Users hold no independent guarantee that their data, balances, or access rights persist beyond the operator's goodwill and solvency. These trade-offs are why the class serves as the canonical contrast case for [[Decentralised Application]] and blockchain application designs, which replicate state and execution across many independent operators at the cost of throughput, upgrade agility, and governance simplicity.

  ## Current Landscape

  The overwhelming majority of production software remains centralised, and hyperscale cloud platforms have deepened the pattern: even nominally independent services concentrate on a handful of cloud providers, so operational centralisation now spans both the application operator and its infrastructure supplier. Outages at major providers routinely take down thousands of dependent applications simultaneously, illustrating the systemic reach of the single-point-of-failure property.

  Hybrid architectures are increasingly common. Many blockchain systems retain centralised components — front-ends, indexers, custodial wallets, sequencers — so the centralised/decentralised distinction is best read as a spectrum of control rather than a binary. Regulators generally find centralised applications easier to supervise, since there is an identifiable operator to license, audit, and hold liable; this is a recurring argument in policy debates over decentralised finance and data protection.

- ### Provenance
  - sources::
  - migration-date:: 2026-08-06T00:00:00Z
