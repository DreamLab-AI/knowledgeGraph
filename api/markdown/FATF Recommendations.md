public:: true

# FATF Recommendations
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ab23fc7695fe1e306ce76cd6a688e162604605ce64d601a0c8f3d35990f2e03b",
  "@type": "Page",
  "vc:slug": "fatf-recommendations",
  "title": "FATF Recommendations",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:travel-rule",
      "vc:label": "Travel Rule"
    },
    {
      "@id": "urn:visionflow:linked:know-your-customer",
      "vc:label": "Know Your Customer"
    },
    {
      "@id": "urn:visionflow:linked:anti-money-laundering",
      "vc:label": "Anti-Money Laundering"
    },
    {
      "@id": "urn:visionflow:linked:https-www-fatf-gafi-org-en-publications-fatfrecommendations-fatf-recommendations-html",
      "vc:label": "https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html"
    },
    {
      "@id": "urn:visionflow:linked:https-www-fatf-gafi-org",
      "vc:label": "https://www.fatf-gafi.org/"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "FATF Recommendations"
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
  "@id": "urn:ngm:class:fatf-recommendations",
  "@type": "Class",
  "label": "FATF Recommendations",
  "definition": "The FATF Recommendations are international standards on combating money laundering, terrorist financing and proliferation financing issued by the Financial Action Task Force.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:anti-money-laundering",
      "label": "Anti-Money Laundering"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:regulatory-frameworks",
        "label": "Regulatory Frameworks"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:travel-rule",
        "label": "Travel Rule"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fatf-recommendations:8b6b0174e171",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ab23fc7695fe1e306ce76cd6a688e162604605ce64d601a0c8f3d35990f2e03b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Travel Rule]]",
      "resolved": "urn:visionflow:linked:travel-rule",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Know Your Customer]]",
      "resolved": "urn:visionflow:linked:know-your-customer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Anti-Money Laundering]]",
      "resolved": "urn:visionflow:linked:anti-money-laundering",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html]]",
      "resolved": "urn:visionflow:linked:https-www-fatf-gafi-org-en-publications-fatfrecommendations-fatf-recommendations-html",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.fatf-gafi.org/]]",
      "resolved": "urn:visionflow:linked:https-www-fatf-gafi-org",
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
  - The FATF Recommendations are international standards on combating money laundering, terrorist financing and proliferation financing issued by the Financial Action Task Force.

- ### Semantic Classification
  - owl-class:: governance:FATFRecommendations
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Anti-Money Laundering]]
  - bridges-to:: [[Know Your Customer]]
  - requires:: [[Regulatory Frameworks]]
  - enables:: [[Travel Rule]]

- ### Content
  - The Financial Action Task Force Recommendations set out a comprehensive set of measures that countries are expected to implement to counter money laundering and terrorist financing. They cover preventive measures, supervision and international cooperation.
  - The standards are subject to mutual evaluation, in which countries assess each other's compliance. Guidance has extended the standards to virtual assets and virtual asset service providers, including the travel rule for transfer information.

- ### Provenance
  - sources:: [[https://www.fatf-gafi.org/en/publications/Fatfrecommendations/Fatf-recommendations.html]], [[https://www.fatf-gafi.org/]]
  - migration-date:: 2026-05-29T00:00:00Z
