public:: true

# Securities Act 1933

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v1",
  "@id": "urn:visionflow:page:securities-act-1933",
  "@type": "Page",
  "title": "Securities Act 1933",
  "vc:slug": "securities-act-1933",
  "vc:public": true,
  "vc:schemaVersion": 2,
  "vc:outboundWikilinks": []
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:securities-act-1933",
  "@type": "Class",
  "label": "Securities Act 1933",
  "definition": "The Securities Act of 1933 is the foundational United States federal statute governing the offer and sale of securities. It requires that securities offered to the public be registered with regulators and accompanied by truthful disclosure, with the aim of preventing fraud and protecting investors. In digital-asset contexts it is central to determining whether a token sale constitutes an unregistered securities offering.",
  "domain": "blockchain",
  "maturity": "mature",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:securities-law",
      "label": "Securities Law"
    }
  ],
  "relations": {
    "partOf": [
      {
        "@id": "urn:ngm:class:securities-law",
        "label": "Securities Law"
      }
    ],
    "implements": [
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      }
    ],
    "standardizedBy": [
      {
        "@id": "urn:ngm:class:securities-regulation",
        "label": "Securities Regulation"
      }
    ],
    "dependsOn": [
      {
        "@id": "urn:ngm:class:regulatory-compliance",
        "label": "Regulatory Compliance"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      }
    ],
    "uses": [
      {
        "@id": "urn:ngm:class:howey-test",
        "label": "Howey Test"
      }
    ],
    "relatedTo": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
      },
      {
        "@id": "urn:ngm:class:regulatory-framework",
        "label": "Regulatory Framework"
      }
    ],
    "supports": [
      {
        "@id": "urn:ngm:class:investor-protection",
        "label": "Investor Protection"
      }
    ],
    "contrastsWith": [
      {
        "@id": "urn:ngm:class:financial-regulation",
        "label": "Financial Regulation"
      }
    ],
    "bridgesTo": [
      {
        "@id": "urn:ngm:class:security-token",
        "label": "Security Token"
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
  - The [[Securities Act 1933]] is the core US statute requiring registration and disclosure for public securities offerings.
  - It sits within [[Securities Law]] and is enforced through [[Securities Regulation]] and broader [[Financial Regulation]].
  - In token economies it interacts with the [[Howey Test]] to classify whether a [[Security Token]] offering is regulated.
- ### Overview
  - Enacted in the aftermath of the 1929 crash, the Act established the principle that investors must receive material information before buying securities.
  - Its two core goals are mandatory disclosure of financial information and prohibition of deceit and misrepresentation in securities sales.
  - Registration statements and prospectuses are the primary disclosure instruments it mandates.
  - The Act provides exemptions, such as private placements, that shape how offerings are structured.
- ### Key aspects
  - Registration: most public offerings must be registered before sale unless an exemption applies.
  - Disclosure: issuers must provide truthful, complete material information to prospective buyers.
  - Liability: the Act creates civil liability for material misstatements or omissions.
  - Exemptions: private and limited offerings can avoid full registration under defined conditions.
- ### Mechanisms
  - The [[Howey Test]], derived from later case law, determines when an instrument is an investment contract subject to the Act.
  - Issuers file registration statements that regulators review for completeness.
  - Anti-fraud provisions allow enforcement and investor recovery for misrepresentation.
  - Exemption frameworks let qualifying offerings proceed with reduced disclosure.
- ### Applications
  - Classifying whether a [[Security Token]] sale is an unregistered securities offering.
  - Structuring compliant token sales through registration or exemption pathways.
  - Underpinning [[Regulatory Compliance]] programmes for digital-asset issuers.
  - Informing [[Investor Protection]] policy for novel financial instruments.
- ### Relationships
  - partOf:: [[Securities Law]]
  - implements:: [[Investor Protection]]
  - standardizedBy:: [[Securities Regulation]]
  - dependsOn:: [[Regulatory Compliance]]
  - requires:: [[Financial Regulation]]
  - enables:: [[Investor Protection]]
  - uses:: [[Howey Test]]
  - relatedTo:: [[Security Token]]
  - relatedTo:: [[Regulatory Framework]]
  - contrastsWith:: [[Financial Regulation]]
  - bridgesTo:: [[Security Token]]
- ### Provenance
  - attributedTo:: did:nostr:ontology-mesh
  - inferenceRule:: GapMaterialisation
  - updated:: 2026-06-15
