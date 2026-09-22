public:: true

# Voting System
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4e62a33e5c8ffbfb692a16325971214712c68589a652f963c17f4a3b246a3e14",
  "@type": "Page",
  "vc:slug": "voting-system",
  "title": "Voting System",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance-frameworks",
      "vc:label": "Governance Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Voting System"
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
  "@id": "urn:ngm:class:voting-system",
  "@type": "Class",
  "label": "Voting System",
  "definition": "A voting system is a method for collecting and aggregating participants' preferences into a collective decision, used in governance, elections, and on-chain protocols.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:voting-system:e3b96b5292f6",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4e62a33e5c8ffbfb692a16325971214712c68589a652f963c17f4a3b246a3e14"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance Frameworks]]",
      "resolved": "urn:visionflow:linked:governance-frameworks",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
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
  - A voting system is a method for collecting and aggregating participants' preferences into a collective decision, used in governance, elections, and on-chain protocols.

- ### Semantic Classification
  - owl-class:: governance:VotingSystem
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Governance]]
  - bridges-to:: [[Governance Frameworks]]

- ### Content
  - Voting systems define who may vote, how votes are weighted, and how they are tallied into an outcome. Variants include simple majority, supermajority thresholds, and weighted schemes such as token-weighted voting in blockchain governance.
  - In decentralised governance, voting often uses governance tokens, where voting power is proportional to holdings, and may include delegation so token holders can assign their votes to representatives.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
