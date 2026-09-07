```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:8c2580748dd25e5f68db64b0d5751504ef17eaf9b59c5bc465543b4efac9c1f7",
  "@type": "Page",
  "vc:slug": "virtual-property-right",
  "title": "Virtual Property Right",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:authentication-mechanism",
      "vc:label": "Authentication Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:enforcement-system",
      "vc:label": "Enforcement System"
    },
    {
      "@id": "urn:visionflow:linked:exclusion-right",
      "vc:label": "Exclusion Right"
    },
    {
      "@id": "urn:visionflow:linked:ip-protection",
      "vc:label": "IP Protection"
    },
    {
      "@id": "urn:visionflow:linked:legal-entity",
      "vc:label": "Legal Entity"
    },
    {
      "@id": "urn:visionflow:linked:legal-recognition",
      "vc:label": "Legal Recognition"
    },
    {
      "@id": "urn:visionflow:linked:legal-system",
      "vc:label": "Legal System"
    },
    {
      "@id": "urn:visionflow:linked:nft",
      "vc:label": "NFT"
    },
    {
      "@id": "urn:visionflow:linked:ownership-claim",
      "vc:label": "Ownership Claim"
    },
    {
      "@id": "urn:visionflow:linked:property-law-framework",
      "vc:label": "Property Law Framework"
    },
    {
      "@id": "urn:visionflow:linked:transfer-mechanism",
      "vc:label": "Transfer Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:uniform-commercial-code-ucc-article-12",
      "vc:label": "Uniform Commercial Code (UCC) Article 12"
    },
    {
      "@id": "urn:visionflow:linked:usage-permission",
      "vc:label": "Usage Permission"
    },
    {
      "@id": "urn:visionflow:linked:world-intellectual-property-organization-wipo",
      "vc:label": "World Intellectual Property Organization (WIPO)"
    },
    {
      "@id": "urn:visionflow:owl:class:application-layer",
      "vc:label": "ApplicationLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:asset-registry",
      "vc:label": "Asset Registry"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-ownership",
      "vc:label": "Digital Ownership"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-signature",
      "vc:label": "Digital Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-asset-trading",
      "vc:label": "Virtual Asset Trading"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy",
      "vc:label": "VirtualEconomyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-land-rights",
      "vc:label": "Virtual Land Rights"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20294"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Property Right"
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
  "@id": "urn:ngm:class:virtual-property-right",
  "@type": "Class",
  "label": "Virtual Property Right",
  "definition": "A legally recognized claim to ownership, use, transfer, or exclusion rights over digital assets, virtual goods, or intangible resources within virtual environments, enforced through technical mechanisms, platform policies, or legal frameworks.",
  "domain": "spatial-computing",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:sc-governance-and-safety",
      "label": "Governance and Safety"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:authentication-mechanism",
        "label": "Authentication Mechanism"
      },
      {
        "@id": "urn:ngm:class:asset-registry",
        "label": "Asset Registry"
      },
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-ownership",
        "label": "Digital Ownership"
      },
      {
        "@id": "urn:ngm:class:virtual-asset-trading",
        "label": "Virtual Asset Trading"
      },
      {
        "@id": "urn:ngm:class:virtual-land-rights",
        "label": "Virtual Land Rights"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:legal-system",
        "label": "Legal System"
      }
    ]
  },
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

- ### Definition
  - A legally recognized claim to ownership, use, transfer, or exclusion rights over digital assets, virtual goods, or intangible resources within virtual environments, enforced through technical mechanisms, platform policies, or legal frameworks.

- ### Semantic Classification
  - owl-class:: spatial-computing:VirtualPropertyRight
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]], [[VirtualEconomyDomain]]
  - implemented-in-layer:: [[ApplicationLayer]]

- ### Relationships
  - has-part:: [[Ownership Claim]], [[Usage Permission]], [[Transfer Mechanism]], [[Exclusion Right]], [[Enforcement System]]
  - is-part-of:: [[Property Law Framework]], [[Legal System]]
  - requires:: [[Digital Identity]], [[Asset Registry]], [[Authentication Mechanism]], [[Legal Recognition]]
  - enables:: [[Virtual Asset Trading]], [[Digital Ownership]], [[IP Protection]], [[Virtual Land Rights]]
  - depends-on:: [[Smart Contract]], [[Blockchain]], [[NFT]], [[Digital Signature]], [[Legal Entity]]

- ### Content
  Virtual Property Right — content pending enrichment.

- ### Provenance
  - sources:: [[World Intellectual Property Organization (WIPO)]], [[Uniform Commercial Code (UCC) Article 12]]
  - migration-date:: 2026-04-26T00:00:00Z
