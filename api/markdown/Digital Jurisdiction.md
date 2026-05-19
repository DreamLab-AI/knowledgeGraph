public:: true

# Digital Jurisdiction
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b310ef2e4a028c93cceee2a2a853e2fe1ce74778f9480f5642b7a61b8903e032",
  "@type": "Page",
  "vc:slug": "digital-jurisdiction",
  "title": "Digital Jurisdiction",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:conflict-resolution-mechanism",
      "vc:label": "Conflict Resolution Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:cross-border-enforcement",
      "vc:label": "Cross-Border Enforcement"
    },
    {
      "@id": "urn:visionflow:linked:dispute-resolution",
      "vc:label": "Dispute Resolution"
    },
    {
      "@id": "urn:visionflow:linked:enforcement-mechanism",
      "vc:label": "Enforcement Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:international-jurisdiction-and-the-internet-working-group",
      "vc:label": "International Jurisdiction and the Internet Working Group"
    },
    {
      "@id": "urn:visionflow:linked:legal-authority",
      "vc:label": "Legal Authority"
    },
    {
      "@id": "urn:visionflow:linked:legal-entity",
      "vc:label": "Legal Entity"
    },
    {
      "@id": "urn:visionflow:linked:legal-system",
      "vc:label": "Legal System"
    },
    {
      "@id": "urn:visionflow:linked:multi-jurisdictional-coordination",
      "vc:label": "Multi-Jurisdictional Coordination"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-authority",
      "vc:label": "Regulatory Authority"
    },
    {
      "@id": "urn:visionflow:linked:sovereignty-model",
      "vc:label": "Sovereignty Model"
    },
    {
      "@id": "urn:visionflow:linked:uncitral-model-law-on-electronic-commerce",
      "vc:label": "UNCITRAL Model Law on Electronic Commerce"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:governance-framework",
      "vc:label": "Governance Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:governance-token",
      "vc:label": "Governance Token"
    },
    {
      "@id": "urn:visionflow:owl:class:jurisdictional-boundary",
      "vc:label": "Jurisdictional Boundary"
    },
    {
      "@id": "urn:visionflow:owl:class:platform-governance",
      "vc:label": "Platform Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:regulatory-framework",
      "vc:label": "Regulatory Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-nation-state",
      "vc:label": "Virtual Nation State"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20293"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Digital Jurisdiction"
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
  "@id": "urn:ngm:class:digital-jurisdiction",
  "@type": "Class",
  "label": "Digital Jurisdiction",
  "definition": "Digital Jurisdiction is a type of Metaverse governance and safeguarding in the spatial computing domain.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    },
    {
      "@id": "urn:ngm:class:metaverse-governance-and-safeguarding",
      "label": "Metaverse governance and safeguarding"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:conflict-resolution-mechanism",
        "label": "Conflict Resolution Mechanism"
      },
      {
        "@id": "urn:ngm:class:legal-authority",
        "label": "Legal Authority"
      },
      {
        "@id": "urn:ngm:class:sovereignty-model",
        "label": "Sovereignty Model"
      },
      {
        "@id": "urn:ngm:class:jurisdictional-boundary",
        "label": "Jurisdictional Boundary"
      },
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:dispute-resolution",
        "label": "Dispute Resolution"
      },
      {
        "@id": "urn:ngm:class:enforcement-mechanism",
        "label": "Enforcement Mechanism"
      },
      {
        "@id": "urn:ngm:class:legal-entity",
        "label": "Legal Entity"
      },
      {
        "@id": "urn:ngm:class:regulatory-authority",
        "label": "Regulatory Authority"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:cross-border-enforcement",
        "label": "Cross-Border Enforcement"
      },
      {
        "@id": "urn:ngm:class:multi-jurisdictional-coordination",
        "label": "Multi-Jurisdictional Coordination"
      },
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
      },
      {
        "@id": "urn:ngm:class:virtual-nation-state",
        "label": "Virtual Nation State"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:legal-system",
        "label": "Legal System"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ]
  },
  "quality": 0.35,
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-jurisdiction:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b310ef2e4a028c93cceee2a2a853e2fe1ce74778f9480f5642b7a61b8903e032"
  },
  "vc:resolutions": [
    {
      "raw": "[[Conflict Resolution Mechanism]]",
      "resolved": "urn:visionflow:linked:conflict-resolution-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cross-Border Enforcement]]",
      "resolved": "urn:visionflow:linked:cross-border-enforcement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dispute Resolution]]",
      "resolved": "urn:visionflow:linked:dispute-resolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Enforcement Mechanism]]",
      "resolved": "urn:visionflow:linked:enforcement-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[International Jurisdiction and the Internet Working Group]]",
      "resolved": "urn:visionflow:linked:international-jurisdiction-and-the-internet-working-group",
      "kind": "StubLink"
    },
    {
      "raw": "[[Legal Authority]]",
      "resolved": "urn:visionflow:linked:legal-authority",
      "kind": "StubLink"
    },
    {
      "raw": "[[Legal Entity]]",
      "resolved": "urn:visionflow:linked:legal-entity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Legal System]]",
      "resolved": "urn:visionflow:linked:legal-system",
      "kind": "StubLink"
    },
    {
      "raw": "[[Multi-Jurisdictional Coordination]]",
      "resolved": "urn:visionflow:linked:multi-jurisdictional-coordination",
      "kind": "StubLink"
    },
    {
      "raw": "[[Regulatory Authority]]",
      "resolved": "urn:visionflow:linked:regulatory-authority",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sovereignty Model]]",
      "resolved": "urn:visionflow:linked:sovereignty-model",
      "kind": "StubLink"
    },
    {
      "raw": "[[UNCITRAL Model Law on Electronic Commerce]]",
      "resolved": "urn:visionflow:linked:uncitral-model-law-on-electronic-commerce",
      "kind": "StubLink"
    },
    {
      "raw": "[[ApplicationLayer]]",
      "resolved": "urn:visionflow:owl:class:application-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:owl:class:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Framework]]",
      "resolved": "urn:visionflow:owl:class:governance-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Token]]",
      "resolved": "urn:visionflow:owl:class:governance-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Jurisdictional Boundary]]",
      "resolved": "urn:visionflow:owl:class:jurisdictional-boundary",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Platform Governance]]",
      "resolved": "urn:visionflow:owl:class:platform-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Framework]]",
      "resolved": "urn:visionflow:owl:class:regulatory-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Nation State]]",
      "resolved": "urn:visionflow:owl:class:virtual-nation-state",
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
  - A legally recognized framework defining the boundaries of authority, regulatory control, and legal enforcement within virtual spaces, establishing which laws apply to activities, transactions, and disputes occurring in digital environments.

bridges-to:: [[Blockchain]]

- ### Semantic Classification
  - owl-class:: spatial-computing:DigitalJurisdiction
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Jurisdictional Boundary]], [[Regulatory Framework]], [[Legal Authority]], [[Conflict Resolution Mechanism]], [[Sovereignty Model]]
  - is-part-of:: [[Governance Framework]], [[Legal System]]
  - requires:: [[Legal Entity]], [[Regulatory Authority]], [[Enforcement Mechanism]], [[Dispute Resolution]]
  - enables:: [[Cross-Border Enforcement]], [[Multi-Jurisdictional Coordination]], [[Platform Governance]], [[Virtual Nation State]]
  - depends-on:: [[Digital Identity]], [[Smart Contract]], [[Blockchain]], [[Governance Token]]

- ### Content
  Digital Jurisdiction — content pending enrichment.

- ### Provenance
  - sources:: [[UNCITRAL Model Law on Electronic Commerce]], [[International Jurisdiction and the Internet Working Group]]
  - migration-date:: 2026-04-26T00:00:00Z
