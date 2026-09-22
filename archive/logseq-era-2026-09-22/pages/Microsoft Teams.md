public:: true

# Microsoft Teams
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b5867f2b87ecc8c29bb811538d4a2f083db0ab2a0391b1130f32feff1f8c5f98",
  "@type": "Page",
  "vc:slug": "microsoft-teams",
  "title": "Microsoft Teams",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:communication-protocols",
      "vc:label": "Communication Protocols"
    },
    {
      "@id": "urn:visionflow:linked:microsoft",
      "vc:label": "Microsoft"
    },
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:linked:https-www-microsoft-com-en-us-microsoft-teams-group-chat-software",
      "vc:label": "https://www.microsoft.com/en-us/microsoft-teams/group-chat-software"
    },
    {
      "@id": "urn:visionflow:linked:https-learn-microsoft-com-en-us-microsoftteams",
      "vc:label": "https://learn.microsoft.com/en-us/microsoftteams/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Microsoft Teams"
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
  "@id": "urn:ngm:class:microsoft-teams",
  "@type": "Class",
  "label": "Microsoft Teams",
  "definition": "Microsoft Teams is a collaboration application combining chat, video meetings, file sharing and application integration within the Microsoft 365 suite.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:collaboration-tools",
      "label": "Collaboration Tools"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:identity-management",
        "label": "Identity Management"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:communication-protocols",
        "label": "Communication Protocols"
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
  "@id": "urn:visionflow:annotation:link-resolutions:microsoft-teams:9088a7e8c4f7",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b5867f2b87ecc8c29bb811538d4a2f083db0ab2a0391b1130f32feff1f8c5f98"
  },
  "vc:resolutions": [
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Communication Protocols]]",
      "resolved": "urn:visionflow:linked:communication-protocols",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Microsoft]]",
      "resolved": "urn:visionflow:linked:microsoft",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.microsoft.com/en-us/microsoft-teams/group-chat-software]]",
      "resolved": "urn:visionflow:linked:https-www-microsoft-com-en-us-microsoft-teams-group-chat-software",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://learn.microsoft.com/en-us/microsoftteams/]]",
      "resolved": "urn:visionflow:linked:https-learn-microsoft-com-en-us-microsoftteams",
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
  - Microsoft Teams is a collaboration application combining chat, video meetings, file sharing and application integration within the Microsoft 365 suite.

- ### Semantic Classification
  - owl-class:: distributed-systems:MicrosoftTeams
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Collaboration Tools]]
  - bridges-to:: [[Microsoft]]
  - requires:: [[Identity Management]]
  - enables:: [[Communication Protocols]]

- ### Content
  - Microsoft Teams provides persistent chat, audio and video meetings, and shared workspaces organised into teams and channels. It integrates with Microsoft 365 services such as SharePoint and Exchange.
  - The application supports third-party and custom app integrations through its developer platform. Authentication and access are managed through the Microsoft Entra identity platform.

- ### Provenance
  - sources:: [[https://www.microsoft.com/en-us/microsoft-teams/group-chat-software]], [[https://learn.microsoft.com/en-us/microsoftteams/]]
  - migration-date:: 2026-05-29T00:00:00Z
