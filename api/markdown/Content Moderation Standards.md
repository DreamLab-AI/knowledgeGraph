public:: true

# Content Moderation Standards
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:618d0d0b051e3af95f332b45674a2f46808a0348f544bc52b03c1147533d4ca4",
  "@type": "Page",
  "vc:slug": "content-moderation-standards",
  "title": "Content Moderation Standards",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:ai-detection-systems",
      "vc:label": "AI Detection Systems"
    },
    {
      "@id": "urn:visionflow:linked:community-trust",
      "vc:label": "Community Trust"
    },
    {
      "@id": "urn:visionflow:linked:harassment-prevention",
      "vc:label": "Harassment Prevention"
    },
    {
      "@id": "urn:visionflow:linked:human-moderators",
      "vc:label": "Human Moderators"
    },
    {
      "@id": "urn:visionflow:linked:moderation-tools",
      "vc:label": "Moderation Tools"
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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9829"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Content Moderation Standards"
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
  "@id": "urn:ngm:class:content-moderation-standards",
  "@type": "Class",
  "label": "Content Moderation Standards",
  "definition": "The policies, technologies, and practices used to monitor, review, and regulate user-generated content and behavior within virtual environments and metaverse platforms, addressing challenges unique to immersive spaces including harassment, hate speech, and harmful conduct that require both tradit...",
  "domain": "spatial-computing",
  "maturity": "draft",
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:human-moderators",
        "label": "Human Moderators"
      },
      {
        "@id": "urn:ngm:class:moderation-tools",
        "label": "Moderation Tools"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:community-trust",
        "label": "Community Trust"
      },
      {
        "@id": "urn:ngm:class:harassment-prevention",
        "label": "Harassment Prevention"
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
  "quality": 0.5,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  },
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:content-moderation-standards:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:618d0d0b051e3af95f332b45674a2f46808a0348f544bc52b03c1147533d4ca4"
  },
  "vc:resolutions": [
    {
      "raw": "[[AI Detection Systems]]",
      "resolved": "urn:visionflow:linked:ai-detection-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Community Trust]]",
      "resolved": "urn:visionflow:linked:community-trust",
      "kind": "StubLink"
    },
    {
      "raw": "[[Harassment Prevention]]",
      "resolved": "urn:visionflow:linked:harassment-prevention",
      "kind": "StubLink"
    },
    {
      "raw": "[[Human Moderators]]",
      "resolved": "urn:visionflow:linked:human-moderators",
      "kind": "StubLink"
    },
    {
      "raw": "[[Moderation Tools]]",
      "resolved": "urn:visionflow:linked:moderation-tools",
      "kind": "StubLink"
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
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - The policies, technologies, and practices used to monitor, review, and regulate user-generated content and behavior within virtual environments and metaverse platforms, addressing challenges unique to immersive spaces including harassment, hate speech, and harmful conduct that require both traditional content moderation and new behavioral moderation approaches.

- ### Semantic Classification
  - owl-class:: spatial-computing:ContentModerationStandards
  - owl-role:: Concept
  - belongs-to-domain:: [[metaverse]]

- ### Relationships
  - bridges-to:: [[Telecollaboration]]
  - is-subclass-of:: [[Platform Governance]]
  - requires:: [[Moderation Tools]], [[AI Detection Systems]], [[Human Moderators]]
  - enables:: [[User Safety]], [[Harassment Prevention]], [[Community Trust]]

- ### Content

  - ## Technical Details
  - **Key Challenges**:
		- Center for Countering Digital Hate: "abusive behavior every seven minutes" in Meta's Metaverse (2022)
		- Immersive nature amplifies psychological impact of threats and harassment
		- Behavioral moderation needed beyond traditional content moderation
		- Age verification relying on self-certification insufficient for minors
  - **Technical Solutions**:
		- **AI Voice Moderation**: ToxMod (RecRoom) detecting inappropriate language in 18 languages
		- Automated text and image scanning for guideline violations
		- User-controlled tools: blocking, muting, avatar invisibility
		- Structured in-game reporting mechanisms
  - **Platform Approaches**:
		- Meta Code of Conduct for Virtual Experiences (CCVE)
		- VRChat age gates for mature content, third-party verification planned (July 2024)
		- Multi-layered approach with platform-wide minimum standards
  - **Regulatory Framework**: EU Digital Services Act, Web 4.0 communication, Citizens' Panel Report
  - ## Applications
  - Real-time behavioral monitoring
  - User harassment prevention
  - Age-appropriate content filtering
  - Automated violation detection
  - Community safety enforcement

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
