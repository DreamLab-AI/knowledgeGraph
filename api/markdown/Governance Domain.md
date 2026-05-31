public:: true

# Governance Domain
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:66a961523e61c44824447716014c0b5ef6cfcb870e02787f73e7d7cda40f8c1e",
  "@type": "Page",
  "vc:slug": "governance-domain",
  "title": "Governance Domain",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:decision-rights",
      "vc:label": "Decision Rights"
    },
    {
      "@id": "urn:visionflow:linked:accountability",
      "vc:label": "Accountability"
    },
    {
      "@id": "urn:visionflow:linked:policy-framework",
      "vc:label": "Policy Framework"
    },
    {
      "@id": "urn:visionflow:linked:voting-mechanism",
      "vc:label": "Voting Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:stakeholder-representation",
      "vc:label": "Stakeholder Representation"
    },
    {
      "@id": "urn:visionflow:linked:identity-domain",
      "vc:label": "Identity Domain"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:collective-decision-making",
      "vc:label": "Collective Decision Making"
    },
    {
      "@id": "urn:visionflow:linked:protocol-upgrade-process",
      "vc:label": "Protocol Upgrade Process"
    },
    {
      "@id": "urn:visionflow:linked:blockchain-domain",
      "vc:label": "Blockchain Domain"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-38500",
      "vc:label": "ISO/IEC 38500"
    },
    {
      "@id": "urn:visionflow:linked:oecd-principles-of-corporate-governance",
      "vc:label": "OECD Principles of Corporate Governance"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Governance Domain"
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
  "@id": "urn:ngm:class:governance-domain",
  "@type": "Class",
  "label": "Governance Domain",
  "definition": "The Governance Domain classifies concepts concerned with the structures, processes and decision rights by which collective systems are directed and held accountable. It covers the formation, ratification and enforcement of rules across organisations, protocols and public institutions. As a top-level subject axis, it is orthogonal to architectural Layer and provides the social and procedural framing for systems that other domains realise technically.",
  "domain": "governance",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:decision-rights",
        "label": "Decision Rights"
      },
      {
        "@id": "urn:ngm:class:accountability",
        "label": "Accountability"
      },
      {
        "@id": "urn:ngm:class:policy-framework",
        "label": "Policy Framework"
      },
      {
        "@id": "urn:ngm:class:voting-mechanism",
        "label": "Voting Mechanism"
      },
      {
        "@id": "urn:ngm:class:stakeholder-representation",
        "label": "Stakeholder Representation"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:identity-domain",
        "label": "Identity Domain"
      },
      {
        "@id": "urn:ngm:class:regulatory-domain",
        "label": "Regulatory Domain"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:collective-decision-making",
        "label": "Collective Decision Making"
      },
      {
        "@id": "urn:ngm:class:protocol-upgrade-process",
        "label": "Protocol Upgrade Process"
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
  "@id": "urn:visionflow:annotation:link-resolutions:governance-domain:bd9a50a4e39d",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:66a961523e61c44824447716014c0b5ef6cfcb870e02787f73e7d7cda40f8c1e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Decision Rights]]",
      "resolved": "urn:visionflow:linked:decision-rights",
      "kind": "StubLink"
    },
    {
      "raw": "[[Accountability]]",
      "resolved": "urn:visionflow:linked:accountability",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Policy Framework]]",
      "resolved": "urn:visionflow:linked:policy-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Voting Mechanism]]",
      "resolved": "urn:visionflow:linked:voting-mechanism",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stakeholder Representation]]",
      "resolved": "urn:visionflow:linked:stakeholder-representation",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Domain]]",
      "resolved": "urn:visionflow:linked:identity-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "StubLink"
    },
    {
      "raw": "[[Collective Decision Making]]",
      "resolved": "urn:visionflow:linked:collective-decision-making",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Protocol Upgrade Process]]",
      "resolved": "urn:visionflow:linked:protocol-upgrade-process",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain Domain]]",
      "resolved": "urn:visionflow:linked:blockchain-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ISO/IEC 38500]]",
      "resolved": "urn:visionflow:linked:iso-iec-38500",
      "kind": "StubLink"
    },
    {
      "raw": "[[OECD Principles of Corporate Governance]]",
      "resolved": "urn:visionflow:linked:oecd-principles-of-corporate-governance",
      "kind": "StubLink"
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
  - The Governance Domain classifies concepts concerned with the structures, processes and decision rights by which collective systems are directed and held accountable. It covers the formation, ratification and enforcement of rules across organisations, protocols and public institutions. As a top-level subject axis, it is orthogonal to architectural Layer and provides the social and procedural framing for systems that other domains realise technically.

- ### Semantic Classification
  - owl-class:: gov:GovernanceDomain
  - owl-role:: Domain

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Blockchain Domain]], [[Regulatory Domain]]
  - has-part:: [[Decision Rights]], [[Accountability]], [[Policy Framework]], [[Voting Mechanism]], [[Stakeholder Representation]]
  - requires:: [[Identity Domain]], [[Regulatory Domain]]
  - enables:: [[Collective Decision Making]], [[Protocol Upgrade Process]]

- ### Content
  - Governance organises the allocation of authority and the procedures through which decisions become binding. It distinguishes between rule-making (policy formation), rule-application (administration) and rule-adjudication (dispute resolution), and assigns these functions to defined actors. The domain spans corporate boards, standards bodies and on-chain protocol governance, treating each as an instance of the same structural problem.
  - A central concern is the alignment of decision rights with accountability, so that those who exercise power bear its consequences. Mechanisms such as voting, delegation, quorum thresholds and veto rights are studied as configurable parameters of a governance system. The domain also addresses legitimacy, the conditions under which affected parties accept outcomes as authoritative.
  - Governance bridges to regulatory and identity concerns because enforcement depends on identifiable parties and a body of binding rules. In distributed and protocol settings it interfaces with the Blockchain Domain, where governance is partly encoded in smart contracts and token-weighted voting.

- ### Provenance
  - sources:: [[ISO/IEC 38500]], [[OECD Principles of Corporate Governance]]
  - migration-date:: 2026-05-29T00:00:00Z
