public:: true

# Lido DAO
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:df417b5c349223249e3cd4131165f81513f2eea1b561a215b3d46055300a4cb2",
  "@type": "Page",
  "vc:slug": "lido-dao",
  "title": "Lido DAO",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:linked:treasury-management",
      "vc:label": "Treasury Management"
    },
    {
      "@id": "urn:visionflow:linked:lido",
      "vc:label": "Lido"
    },
    {
      "@id": "urn:visionflow:linked:on-chain-governance",
      "vc:label": "On-chain Governance"
    },
    {
      "@id": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "vc:label": "Decentralised Autonomous Organisation"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Lido DAO"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:lido-dao",
  "@type": "Class",
  "label": "Lido DAO",
  "definition": "The decentralised organisation that governs the Lido liquid staking protocol, setting node operator policy, fees, and treasury decisions through token-holder voting.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralised-autonomous-organisation",
      "label": "Decentralised Autonomous Organisation"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:governance-token",
        "label": "Governance Token"
      },
      {
        "@id": "urn:ngm:class:treasury-management",
        "label": "Treasury Management"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:lido-dao:daf2bc7e694d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:df417b5c349223249e3cd4131165f81513f2eea1b561a215b3d46055300a4cb2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:linked:governance-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Treasury Management]]",
      "resolved": "urn:visionflow:linked:treasury-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Lido]]",
      "resolved": "urn:visionflow:linked:lido",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[On-chain Governance]]",
      "resolved": "urn:visionflow:linked:on-chain-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralised Autonomous Organisation]]",
      "resolved": "urn:visionflow:linked:decentralised-autonomous-organisation",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The decentralised organisation that governs the Lido liquid staking protocol, setting node operator policy, fees, and treasury decisions through token-holder voting.

- ### Semantic Classification
  - owl-class:: blockchain:LidoDAO
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralised Autonomous Organisation]]
  - bridges-to:: [[Lido]], [[On-chain Governance]]
  - requires:: [[Governance Token]], [[Treasury Management]]

- ### Content
  - Lido DAO is the governance body for the Lido liquid staking protocol. Holders of its governance token vote on parameters such as the set of node operators, the protocol fee, and the management of the treasury that accumulates from staking activity.
  - Because the protocol delegates a large volume of staked assets, decisions made by the DAO about operator selection and fee policy affect both the protocol's users and the wider network it stakes into. Governance is exercised on-chain, with proposals and votes recorded and executed by contract.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
