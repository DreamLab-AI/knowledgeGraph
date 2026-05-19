schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#CommunityStandards
legacy_uri:: urn:visionclaw:concept:spatial-computing:community-standards
public:: true

# Community Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f896db608cb6be0c364a8997c67dbb169ca1d2bc5e5d796b4d6da971d2e3313e",
  "@type": "Page",
  "vc:slug": "community-standards",
  "title": "Community Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:gdpr-general-data-protection-regulation",
      "vc:label": "GDPR (General Data Protection Regulation)"
    },
    {
      "@id": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "vc:label": "IEEE (Institute of Electrical and Electronics Engineers)"
    },
    {
      "@id": "urn:visionflow:linked:moderation-tools",
      "vc:label": "Moderation Tools"
    },
    {
      "@id": "urn:visionflow:linked:reporting-mechanisms",
      "vc:label": "Reporting Mechanisms"
    },
    {
      "@id": "urn:visionflow:linked:trust-building",
      "vc:label": "Trust Building"
    },
    {
      "@id": "urn:visionflow:owl:class:content-moderation",
      "vc:label": "Content Moderation"
    },
    {
      "@id": "urn:visionflow:owl:class:eu-ai-act",
      "vc:label": "EU AI Act"
    },
    {
      "@id": "urn:visionflow:owl:class:governance-framework",
      "vc:label": "Governance Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:platform-governance",
      "vc:label": "Platform Governance"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:user-safety",
      "vc:label": "User Safety"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-f825c133e9d4"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#CommunityStandards"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9825"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T17:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Community Standards"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:community-standards"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:community-standards"
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
    "@id": "urn:visionflow:page:f896db608cb6be0c364a8997c67dbb169ca1d2bc5e5d796b4d6da971d2e3313e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:community-standards",
  "@type": "Class",
  "label": "Community Standards",
  "definition": "The rules, guidelines, and behavioral norms established for virtual environments and metaverse platforms that govern user conduct, content creation, and social interactions, often enforced through technical standards, governance frameworks, and moderation systems to ensure safety, inclusivity, an...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:moderation-tools",
        "label": "Moderation Tools"
      },
      {
        "@id": "urn:ngm:class:reporting-mechanisms",
        "label": "Reporting Mechanisms"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:trust-building",
        "label": "Trust Building"
      },
      {
        "@id": "urn:ngm:class:content-moderation",
        "label": "Content Moderation"
      },
      {
        "@id": "urn:ngm:class:user-safety",
        "label": "User Safety"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:platform-governance",
        "label": "Platform Governance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:community-standards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f896db608cb6be0c364a8997c67dbb169ca1d2bc5e5d796b4d6da971d2e3313e"
  },
  "vc:resolutions": [
    {
      "raw": "[[GDPR (General Data Protection Regulation)]]",
      "resolved": "urn:visionflow:linked:gdpr-general-data-protection-regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[IEEE (Institute of Electrical and Electronics Engineers)]]",
      "resolved": "urn:visionflow:linked:ieee-institute-of-electrical-and-electronics-engineers",
      "kind": "StubLink"
    },
    {
      "raw": "[[Moderation Tools]]",
      "resolved": "urn:visionflow:linked:moderation-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Reporting Mechanisms]]",
      "resolved": "urn:visionflow:linked:reporting-mechanisms",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Building]]",
      "resolved": "urn:visionflow:linked:trust-building",
      "kind": "StubLink"
    },
    {
      "raw": "[[Content Moderation]]",
      "resolved": "urn:visionflow:owl:class:content-moderation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[EU AI Act]]",
      "resolved": "urn:visionflow:owl:class:eu-ai-act",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Framework]]",
      "resolved": "urn:visionflow:owl:class:governance-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Platform Governance]]",
      "resolved": "urn:visionflow:owl:class:platform-governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[User Safety]]",
      "resolved": "urn:visionflow:owl:class:user-safety",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f896db608cb6be0c364a8997c67dbb169ca1d2bc5e5d796b4d6da971d2e3313e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The rules, guidelines, and behavioral norms established for virtual environments and metaverse platforms that govern user conduct, content creation, and social interactions, often enforced through technical standards, governance frameworks, and moderation systems to ensure safety, inclusivity, and positive user experiences.

- ### Semantic Classification
  - owl-class:: spatial-computing:CommunityStandards
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - is-subclass-of:: [[Platform Governance]]
  - requires:: [[Governance Framework]], [[Moderation Tools]], [[Reporting Mechanisms]]
  - enables:: [[User Safety]], [[Content Moderation]], [[Trust Building]]
  - bridges-to:: [[Telecollaboration]]

- ### Content

  - ## Technical Details
  - **Standards Organizations**:
		- Metaverse Standards Forum: 2,600+ member organizations promoting interoperability and inclusivity
		- IEEE Standards: P2048 Metaverse Terminology, P7016 Ethically Aligned Design
		- World Economic Forum "Defining and Building the Metaverse" initiative
  - **Key Principles**:
		- Plurality, inclusivity, openness, transparency, decision-making by consensus
		- Decentralized platforms based on community protocols via blockchain
		- Technical standards enabling compatibility and security across platforms
  - **Human Rights Considerations**:
		- Virtual environments enable free expression but risk bullying, harassment, and hate speech
		- Behavioral moderation needed in addition to content moderation
		- Immersive nature intensifies perception of threats and psychological effects
  - **Regulatory Frameworks**: GDPR, Digital Services Act, EU AI Act, Global Digital Compact (2024)
  - ## Applications
  - Virtual world governance policies
  - User behavior guidelines enforcement
  - Content creation standards
  - Community safety protocols
  - Cross-platform interoperability standards

- ### Provenance
  - sources:: [[EU AI Act]], [[GDPR (General Data Protection Regulation)]], [[IEEE (Institute of Electrical and Electronics Engineers)]]
  - migration-date:: 2026-04-26T00:00:00Z
