public:: true

# World Economic Forum
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2daf914ab969a7940685fe2929fb4dce62f93c7fad483f147962cf33a6102a8f",
  "@type": "Page",
  "vc:slug": "world-economic-forum",
  "title": "World Economic Forum",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:governance",
      "vc:label": "Governance"
    },
    {
      "@id": "urn:visionflow:linked:climate-finance",
      "vc:label": "Climate Finance"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:https-www-weforum-org",
      "vc:label": "https://www.weforum.org"
    },
    {
      "@id": "urn:visionflow:linked:https-www-weforum-org-about-world-economic-forum",
      "vc:label": "https://www.weforum.org/about/world-economic-forum/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "World Economic Forum"
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
  "@id": "urn:ngm:class:world-economic-forum",
  "@type": "Class",
  "label": "World Economic Forum",
  "definition": "The World Economic Forum is an international organisation based in Switzerland that convenes leaders from business, government, and civil society to discuss global issues. It is best known for its annual meeting in Davos.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Infra Legal And Regulatory"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:governance",
        "label": "Governance"
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
  "@id": "urn:visionflow:annotation:link-resolutions:world-economic-forum:26ae8f2867cb",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2daf914ab969a7940685fe2929fb4dce62f93c7fad483f147962cf33a6102a8f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Governance]]",
      "resolved": "urn:visionflow:linked:governance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Climate Finance]]",
      "resolved": "urn:visionflow:linked:climate-finance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.weforum.org]]",
      "resolved": "urn:visionflow:linked:https-www-weforum-org",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.weforum.org/about/world-economic-forum/]]",
      "resolved": "urn:visionflow:linked:https-www-weforum-org-about-world-economic-forum",
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
  - The World Economic Forum is an international organisation based in Switzerland that convenes leaders from business, government, and civil society to discuss global issues. It is best known for its annual meeting in Davos.

- ### Semantic Classification
  - owl-class:: governance:WorldEconomicForum
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Climate Finance]]
  - enables:: [[Governance]]

- ### Content
  - The World Economic Forum brings together figures from business, politics, academia, and civil society to discuss economic and social challenges. It hosts an annual meeting and runs initiatives on topics such as technology, trade, and climate.
  - The organisation publishes reports and convenes working groups on global risks and policy areas. It functions as a venue for dialogue rather than as a decision-making body with binding authority.

- ### Provenance
  - sources:: [[https://www.weforum.org]], [[https://www.weforum.org/about/world-economic-forum/]]
  - migration-date:: 2026-05-29T00:00:00Z
