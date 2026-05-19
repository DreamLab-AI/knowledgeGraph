schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#LoyaltyToken
legacy_uri:: urn:visionclaw:concept:spatial-computing:loyalty-token
public:: true

# Loyalty Token
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:e2c0e0b56558c32c1583db0b39e32a72e2467187ec45bdb4571621bcba73eca9",
  "@type": "Page",
  "vc:slug": "loyalty-token",
  "title": "Loyalty Token",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:brand-engagement",
      "vc:label": "Brand Engagement"
    },
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:linked:incentive-mechanism",
      "vc:label": "Incentive Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:membership-program",
      "vc:label": "Membership Program"
    },
    {
      "@id": "urn:visionflow:linked:msf-use-cases",
      "vc:label": "MSF Use Cases"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:crypto-token",
      "vc:label": "Crypto Token"
    },
    {
      "@id": "urn:visionflow:owl:class:customer-rewards",
      "vc:label": "Customer Rewards"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-asset",
      "vc:label": "Virtual Asset"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-economy-domain",
      "vc:label": "VirtualEconomyDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-society-domain",
      "vc:label": "VirtualSocietyDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-f47162bbb621"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#LoyaltyToken"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20088"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Loyalty Token"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:spatial-computing:loyalty-token"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:spatial-computing:loyalty-token"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e2c0e0b56558c32c1583db0b39e32a72e2467187ec45bdb4571621bcba73eca9@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:loyalty-token",
  "@type": "OntologyClass",
  "label": "Loyalty Token",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:loyalty-programs",
      "vc:label": "Loyalty Programs"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:e2c0e0b56558c32c1583db0b39e32a72e2467187ec45bdb4571621bcba73eca9"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e2c0e0b56558c32c1583db0b39e32a72e2467187ec45bdb4571621bcba73eca9@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A digital token granting repeat-use or membership rewards within a metaverse ecosystem, enabling customer engagement, brand loyalty programs, and tokenized incentive mechanisms.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:isPartOf": [
    {
      "@id": "urn:visionflow:owl:class:crypto-token",
      "vc:label": "Crypto Token"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-asset",
      "vc:label": "Virtual Asset"
    }
  ],
  "vc:requires": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-wallet",
      "vc:label": "Digital Wallet"
    },
    {
      "@id": "urn:visionflow:owl:class:smart-contract",
      "vc:label": "Smart Contract"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:brand-engagement",
      "vc:label": "Brand Engagement"
    },
    {
      "@id": "urn:visionflow:linked:incentive-mechanism",
      "vc:label": "Incentive Mechanism"
    },
    {
      "@id": "urn:visionflow:linked:membership-program",
      "vc:label": "Membership Program"
    },
    {
      "@id": "urn:visionflow:owl:class:customer-rewards",
      "vc:label": "Customer Rewards"
    }
  ],
  "vc:dependsOn": [
    {
      "@id": "urn:visionflow:linked:cryptographic-signature",
      "vc:label": "Cryptographic Signature"
    },
    {
      "@id": "urn:visionflow:owl:class:token-standard",
      "vc:label": "Token Standard"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:loyalty-token:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:e2c0e0b56558c32c1583db0b39e32a72e2467187ec45bdb4571621bcba73eca9"
  },
  "vc:resolutions": [
    {
      "raw": "[[Brand Engagement]]",
      "resolved": "urn:visionflow:linked:brand-engagement",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Signature]]",
      "resolved": "urn:visionflow:linked:cryptographic-signature",
      "kind": "StubLink"
    },
    {
      "raw": "[[Incentive Mechanism]]",
      "resolved": "urn:visionflow:linked:incentive-mechanism",
      "kind": "StubLink"
    },
    {
      "raw": "[[Membership Program]]",
      "resolved": "urn:visionflow:linked:membership-program",
      "kind": "StubLink"
    },
    {
      "raw": "[[MSF Use Cases]]",
      "resolved": "urn:visionflow:linked:msf-use-cases",
      "kind": "StubLink"
    },
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Crypto Token]]",
      "resolved": "urn:visionflow:owl:class:crypto-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Customer Rewards]]",
      "resolved": "urn:visionflow:owl:class:customer-rewards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Wallet]]",
      "resolved": "urn:visionflow:owl:class:digital-wallet",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Smart Contract]]",
      "resolved": "urn:visionflow:owl:class:smart-contract",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:owl:class:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Virtual Asset]]",
      "resolved": "urn:visionflow:owl:class:virtual-asset",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualEconomyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-economy-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[VirtualSocietyDomain]]",
      "resolved": "urn:visionflow:owl:class:virtual-society-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:e2c0e0b56558c32c1583db0b39e32a72e2467187ec45bdb4571621bcba73eca9@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A digital token granting repeat-use or membership rewards within a metaverse ecosystem, enabling customer engagement, brand loyalty programs, and tokenized incentive mechanisms.

- ### Semantic Classification
  - owl-class:: spatial-computing:LoyaltyToken
  - owl-role:: Object
  - owl-inferred:: spatial-computing:VirtualObject
  - belongs-to-domain:: [[VirtualEconomyDomain]], [[VirtualSocietyDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - is-part-of:: [[Crypto Token]], [[Virtual Asset]]
  - requires:: [[Blockchain]], [[Smart Contract]], [[Digital Wallet]]
  - enables:: [[Customer Rewards]], [[Brand Engagement]], [[Membership Program]], [[Incentive Mechanism]]
  - depends-on:: [[Token Standard]], [[Cryptographic Signature]]

- ### Content
  Loyalty Token — content pending enrichment.

- ### Provenance
  - sources:: [[MSF Use Cases]]
  - migration-date:: 2026-04-26T00:00:00Z
