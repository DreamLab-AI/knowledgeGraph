public:: true

# Azure
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:97c0d1a6e7a283b8e75ed6d34a1ce148dfeaa8b705fe5f08b531e4f937253318",
  "@type": "Page",
  "vc:slug": "azure",
  "title": "Azure",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:identity-management",
      "vc:label": "Identity Management"
    },
    {
      "@id": "urn:visionflow:linked:web-3-infrastructure",
      "vc:label": "Web3 Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:microsoft-entra-verified-id",
      "vc:label": "Microsoft Entra Verified ID"
    },
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
    },
    {
      "@id": "urn:visionflow:linked:https-learn-microsoft-com-en-us-azure",
      "vc:label": "https://learn.microsoft.com/en-us/azure/"
    },
    {
      "@id": "urn:visionflow:linked:https-azure-microsoft-com",
      "vc:label": "https://azure.microsoft.com/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Azure"
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
  "@id": "urn:ngm:class:azure",
  "@type": "Class",
  "label": "Azure",
  "definition": "Azure is Microsoft's public cloud computing platform offering compute, storage, networking, identity and managed services.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cloud-computing",
      "label": "Cloud Computing"
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
        "@id": "urn:ngm:class:web-3-infrastructure",
        "label": "Web3 Infrastructure"
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
  "@id": "urn:visionflow:annotation:link-resolutions:azure:79f43c3b9c23",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:97c0d1a6e7a283b8e75ed6d34a1ce148dfeaa8b705fe5f08b531e4f937253318"
  },
  "vc:resolutions": [
    {
      "raw": "[[Identity Management]]",
      "resolved": "urn:visionflow:linked:identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Web3 Infrastructure]]",
      "resolved": "urn:visionflow:linked:web-3-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Microsoft Entra Verified ID]]",
      "resolved": "urn:visionflow:linked:microsoft-entra-verified-id",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cloud Computing]]",
      "resolved": "urn:visionflow:linked:cloud-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://learn.microsoft.com/en-us/azure/]]",
      "resolved": "urn:visionflow:linked:https-learn-microsoft-com-en-us-azure",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://azure.microsoft.com/]]",
      "resolved": "urn:visionflow:linked:https-azure-microsoft-com",
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
  - Azure is Microsoft's public cloud computing platform offering compute, storage, networking, identity and managed services.

- ### Semantic Classification
  - owl-class:: distributed-systems:Azure
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cloud Computing]]
  - bridges-to:: [[Microsoft Entra Verified ID]]
  - requires:: [[Identity Management]]
  - enables:: [[Web3 Infrastructure]]

- ### Content
  - Azure is operated by Microsoft and provides on-demand infrastructure and platform services across a network of regional data centres. It exposes services through REST APIs and integrates with the wider Microsoft identity and management ecosystem.
  - Common workloads include virtual machines, container hosting, managed databases and identity services. Azure Active Directory, now part of Microsoft Entra, supplies authentication and access control for resources hosted on the platform.

- ### Provenance
  - sources:: [[https://learn.microsoft.com/en-us/azure/]], [[https://azure.microsoft.com/]]
  - migration-date:: 2026-05-29T00:00:00Z
