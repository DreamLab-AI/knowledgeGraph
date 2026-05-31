public:: true

# Vesting Schedule
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f4e6ce0752f742a96aa082b79b8491f88c051875502a00dbe450482bfeef8974",
  "@type": "Page",
  "vc:slug": "vesting-schedule",
  "title": "Vesting Schedule",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:linked:tokenomics-governance",
      "vc:label": "Tokenomics Governance"
    },
    {
      "@id": "urn:visionflow:linked:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:linked:token",
      "vc:label": "Token"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Vesting Schedule"
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
  "@id": "urn:ngm:class:vesting-schedule",
  "@type": "Class",
  "label": "Vesting Schedule",
  "definition": "A predefined timetable that releases allocated tokens to recipients gradually over time, often after an initial cliff period, rather than all at once.",
  "domain": "blockchain",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:token",
      "label": "Token"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:smart-contract",
        "label": "Smart Contract"
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
  "@id": "urn:visionflow:annotation:link-resolutions:vesting-schedule:fec2a654b722",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f4e6ce0752f742a96aa082b79b8491f88c051875502a00dbe450482bfeef8974"
  },
  "vc:resolutions": [
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:linked:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Tokenomics Governance]]",
      "resolved": "urn:visionflow:linked:tokenomics-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:linked:governance-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token]]",
      "resolved": "urn:visionflow:linked:token",
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
  - A predefined timetable that releases allocated tokens to recipients gradually over time, often after an initial cliff period, rather than all at once.

- ### Semantic Classification
  - owl-class:: blockchain:VestingSchedule
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Token]]
  - bridges-to:: [[Tokenomics Governance]], [[Governance Token]]
  - requires:: [[Smart Contract]]

- ### Content
  - A vesting schedule governs when allocated tokens become available to their recipients, such as founders, team members, and early backers. A common structure includes an initial cliff during which nothing is released, followed by a period of gradual release until the full allocation has vested.
  - Vesting is typically enforced by a contract that holds the tokens and releases them according to the schedule, aligning the incentives of recipients with the longer-term progress of the project and limiting sudden increases in circulating supply. The chosen parameters affect token distribution and are a common point of scrutiny in project governance.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
