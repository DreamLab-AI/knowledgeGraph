public:: true

# GENIUS Act
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eedbc1f90bc336d6722b9c1ad7190e668774dfc61a74226f7b8e04853f892f66",
  "@type": "Page",
  "vc:slug": "genius-act",
  "title": "GENIUS Act",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:regulatory-frameworks",
      "vc:label": "Regulatory Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:investor-protection",
      "vc:label": "Investor Protection"
    },
    {
      "@id": "urn:visionflow:linked:stablecoin",
      "vc:label": "Stablecoin"
    },
    {
      "@id": "urn:visionflow:linked:crypto-regulation",
      "vc:label": "Crypto Regulation"
    },
    {
      "@id": "urn:visionflow:linked:https-www-congress-gov-bill-119-th-congress-senate-bill-394",
      "vc:label": "https://www.congress.gov/bill/119th-congress/senate-bill/394"
    },
    {
      "@id": "urn:visionflow:linked:https-en-wikipedia-org-wiki-genius-act",
      "vc:label": "https://en.wikipedia.org/wiki/GENIUS_Act"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "GENIUS Act"
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
  "@id": "urn:ngm:class:genius-act",
  "@type": "Class",
  "label": "GENIUS Act",
  "definition": "The GENIUS Act is United States legislation establishing a federal regulatory framework for the issuance of payment stablecoins.",
  "domain": "governance",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:crypto-regulation",
      "label": "Crypto Regulation"
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
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
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
  "@id": "urn:visionflow:annotation:link-resolutions:genius-act:ae6c22026286",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eedbc1f90bc336d6722b9c1ad7190e668774dfc61a74226f7b8e04853f892f66"
  },
  "vc:resolutions": [
    {
      "raw": "[[Regulatory Frameworks]]",
      "resolved": "urn:visionflow:linked:regulatory-frameworks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Investor Protection]]",
      "resolved": "urn:visionflow:linked:investor-protection",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Stablecoin]]",
      "resolved": "urn:visionflow:linked:stablecoin",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Crypto Regulation]]",
      "resolved": "urn:visionflow:linked:crypto-regulation",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.congress.gov/bill/119th-congress/senate-bill/394]]",
      "resolved": "urn:visionflow:linked:https-www-congress-gov-bill-119-th-congress-senate-bill-394",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://en.wikipedia.org/wiki/GENIUS_Act]]",
      "resolved": "urn:visionflow:linked:https-en-wikipedia-org-wiki-genius-act",
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
  - The GENIUS Act is United States legislation establishing a federal regulatory framework for the issuance of payment stablecoins.

- ### Semantic Classification
  - owl-class:: governance:GENIUSAct
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Crypto Regulation]]
  - bridges-to:: [[Stablecoin]]
  - requires:: [[Regulatory Frameworks]]
  - enables:: [[Investor Protection]]

- ### Content
  - The GENIUS Act, formally the Guiding and Establishing National Innovation for US Stablecoins Act, sets out federal requirements for issuers of payment stablecoins in the United States. It was enacted in 2025.
  - The Act defines who may issue payment stablecoins, requires reserves backing issued tokens, and assigns supervisory responsibilities. It establishes standards for reserves, redemption and disclosure for permitted issuers.

- ### Provenance
  - sources:: [[https://www.congress.gov/bill/119th-congress/senate-bill/394]], [[https://en.wikipedia.org/wiki/GENIUS_Act]]
  - migration-date:: 2026-05-29T00:00:00Z
