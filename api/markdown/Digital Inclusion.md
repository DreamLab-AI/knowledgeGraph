public:: true

# Digital Inclusion

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:digital-inclusion",
  "@type": "Page",
  "title": "Digital Inclusion",
  "vc:slug": "digital-inclusion",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:digital-inclusion",
  "@type": "Class",
  "label": "Digital Inclusion",
  "definition": "Digital Inclusion is the set of policies and practices that ensure all individuals and communities, especially the disadvantaged, have meaningful access to and the ability to use digital technologies. It addresses affordable connectivity, accessible devices and services, relevant skills and trustworthy content so that no group is left behind as services move online. Digital Inclusion is the constructive response to the digital divide and a precondition for equitable participation in modern civic and economic life.",
  "domain": "governance",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance",
      "label": "Governance"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:universal-access",
        "label": "Universal Access"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      },
      {
        "@id": "urn:ngm:class:assistive-technology",
        "label": "Assistive Technology"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:universal-access",
        "label": "Universal Access"
      },
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      },
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
      },
      {
        "@id": "urn:ngm:class:policy",
        "label": "Policy"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:assistive-technology",
        "label": "Assistive Technology"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:digital-divide",
        "label": "Digital Divide"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:digital-divide",
        "label": "Digital Divide"
      },
      {
        "@id": "urn:ngm:class:universal-access",
        "label": "Universal Access"
      },
      {
        "@id": "urn:ngm:class:policy",
        "label": "Policy"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:universal-access",
        "label": "Universal Access"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:accessibility",
        "label": "Accessibility"
      }
    ]
  },
  "sameAs": [
    {
      "@id": "urn:ngm:class:digital-equity",
      "label": "Digital Equity"
    }
  ],
  "quality": 0.62,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-15T00:00:00Z",
    "inferenceRule": "GapMaterialisation"
  }
}
```

- ### Definition
  - Digital Inclusion is the set of policies and practices that ensure all individuals and communities, especially the disadvantaged, have meaningful access to and the ability to use digital technologies. It addresses affordable connectivity, accessible devices and services, relevant skills and trustworthy content so that no group is left behind as services move online. Digital Inclusion is the constructive response to the digital divide and a precondition for equitable participation in modern civic and economic life.
  - Closely related concepts include [[Governance]], [[Digital Divide]], [[Universal Access]], [[Accessibility]], [[Assistive Technology]].
- ### Overview
  - [[Governance]] provides the broader context within which Digital Inclusion sits.
  - Digital Inclusion is treated here as a member of the **governance** domain at **established** maturity.
  - It is referenced across the knowledge graph by classes that depend on or compose it, making it a central node that warranted an explicit definition.
- ### Key aspects
  - It requires [[Universal Access]].
  - It requires [[Accessibility]].
  - It requires [[Assistive Technology]].
- ### Mechanisms
  - Digital Inclusion operates by combining its constituent parts into a coherent capability that other classes can rely upon.
  - Its guarantees and behaviours are realised through the dependencies and standards captured in the relations below.
- ### Applications
  - Enables and supports [[Universal Access]].
  - Enables and supports [[Accessibility]].
  - Enables and supports [[Governance]].
  - Enables and supports [[Policy]].
- ### Relationships
  - partOf:: [[Governance]]
  - requires:: [[Universal Access]]
  - requires:: [[Accessibility]]
  - requires:: [[Assistive Technology]]
  - enables:: [[Universal Access]]
  - enables:: [[Accessibility]]
  - supports:: [[Accessibility]]
  - supports:: [[Governance]]
  - supports:: [[Policy]]
  - uses:: [[Assistive Technology]]
  - contrastsWith:: [[Digital Divide]]
  - relatedTo:: [[Digital Divide]]
  - relatedTo:: [[Universal Access]]
  - relatedTo:: [[Policy]]
  - dependsOn:: [[Universal Access]]
  - bridgesTo:: [[Accessibility]]
  - subClassOf:: [[Governance]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - quality:: 0.62
  - updated:: 2026-06-15
