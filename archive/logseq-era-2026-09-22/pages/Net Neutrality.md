public:: true

# Net Neutrality

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:net-neutrality",
  "@type": "Page",
  "title": "Net Neutrality",
  "vc:slug": "net-neutrality",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:net-neutrality",
  "@type": "Class",
  "label": "Net Neutrality",
  "definition": "Net neutrality is the principle that internet service providers should treat all data traversing their networks equally, without discriminating, blocking, throttling, or charging differentially based on the source, destination, application, or content of that traffic. It aims to preserve an open internet where users and content providers compete on merit rather than on access deals. Net neutrality is enforced or challenged through telecommunications regulation and is a recurring subject of internet-governance policy.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:internet-governance",
      "label": "Internet Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:internet-governance",
        "label": "Internet Governance"
      },
      {
        "@id": "urn:ngm:class:digital-governance",
        "label": "Digital Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:regulation",
        "label": "Regulation"
      },
      {
        "@id": "urn:ngm:class:telecommunications",
        "label": "Telecommunications"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:deregulation",
        "label": "Deregulation"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-regulation",
        "label": "Digital Regulation"
      },
      {
        "@id": "urn:ngm:class:bandwidth",
        "label": "Bandwidth"
      },
      {
        "@id": "urn:ngm:class:content-delivery",
        "label": "Content Delivery"
      },
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:transparency",
        "label": "Transparency"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:policy",
        "label": "Policy"
      },
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ]
  },
  "sameAs": [],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
- Net neutrality is the [[Internet Governance]] principle that all network traffic be carried without discrimination.
- It is a core concern of [[Digital Governance]] and shapes [[Telecommunications]] policy.
- It depends on enforceable [[Regulation]] and is often in tension with [[Deregulation]].
- It relates to fair allocation of [[Bandwidth]] and to [[Content Delivery]].
- ### Overview
- The principle holds that internet service providers act as neutral conduits, neither favouring nor degrading particular sources or applications.
- Debates centre on whether mandated neutrality or light-touch competition best preserves an open internet.
- Practices such as throttling, paid prioritisation, and zero-rating are the focal points of regulatory scrutiny.
- Outcomes vary by jurisdiction, reflecting differing balances between regulation and market freedom.
- ### Key aspects
- Non-discrimination across content, applications, and services.
- Prohibition or restriction of blocking and throttling lawful traffic.
- Constraints on paid prioritisation and fast-lane arrangements.
- Transparency obligations on network-management practices.
- ### Applications
- Regulatory frameworks governing broadband and mobile carriers.
- Disputes over interconnection and peering economics.
- Policy design balancing investment incentives with open access.
- Consumer-protection rules requiring disclosure of traffic management.
- ### Relationships
- partOf:: [[Internet Governance]]
- partOf:: [[Digital Governance]]
- requires:: [[Regulation]]
- requires:: [[Telecommunications]]
- contrastsWith:: [[Deregulation]]
- relatedTo:: [[Digital Regulation]]
- relatedTo:: [[Bandwidth]]
- relatedTo:: [[Content Delivery]]
- relatedTo:: [[Governance Framework]]
- supports:: [[Transparency]]
- dependsOn:: [[Policy]]
- dependsOn:: [[Regulatory Compliance]]
- bridgesTo:: [[Governance]]
- ### Provenance
- updated:: 2026-06-15
