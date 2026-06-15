public:: true

# Identity Graph
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0459c95e67ddad069af922485b5720db509cce31b36e6cac45c4534f190a1ff1",
  "@type": "Page",
  "vc:slug": "identity-graph",
  "title": "Identity Graph",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:did-resolution",
      "vc:label": "DID Resolution"
    },
    {
      "@id": "urn:visionflow:linked:dif-universal-resolver",
      "vc:label": "DIF Universal Resolver"
    },
    {
      "@id": "urn:visionflow:linked:fraud-detection",
      "vc:label": "Fraud Detection"
    },
    {
      "@id": "urn:visionflow:linked:identity-node",
      "vc:label": "Identity Node"
    },
    {
      "@id": "urn:visionflow:linked:identity-resolution",
      "vc:label": "Identity Resolution"
    },
    {
      "@id": "urn:visionflow:linked:relationship-edge",
      "vc:label": "Relationship Edge"
    },
    {
      "@id": "urn:visionflow:linked:social-network-analysis",
      "vc:label": "Social Network Analysis"
    },
    {
      "@id": "urn:visionflow:linked:trust-attribute",
      "vc:label": "Trust Attribute"
    },
    {
      "@id": "urn:visionflow:linked:trust-metrics",
      "vc:label": "Trust Metrics"
    },
    {
      "@id": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "vc:label": "W3C Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:owl:class:cryptographic-keys",
      "vc:label": "Cryptographic Keys"
    },
    {
      "@id": "urn:visionflow:owl:class:graph-database",
      "vc:label": "Graph Database"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-management-system",
      "vc:label": "Identity Management System"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-provider",
      "vc:label": "Identity Provider"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:reputation-system",
      "vc:label": "Reputation System"
    },
    {
      "@id": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-framework",
      "vc:label": "Trust Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20285"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Identity Graph"
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
  "@id": "urn:ngm:class:identity-graph",
  "@type": "Class",
  "label": "Identity Graph",
  "definition": "A network-based data structure representing entities, their digital identities, and relationships in a graph database optimized for identity resolution, trust scoring, and social network analysis.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infra-security-and-identity",
      "label": "Security and Identity"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:relationship-edge",
        "label": "Relationship Edge"
      },
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-keys",
        "label": "Cryptographic Keys"
      },
      {
        "@id": "urn:ngm:class:graph-database",
        "label": "Graph Database"
      },
      {
        "@id": "urn:ngm:class:identity-provider",
        "label": "Identity Provider"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:fraud-detection",
        "label": "Fraud Detection"
      },
      {
        "@id": "urn:ngm:class:identity-resolution",
        "label": "Identity Resolution"
      },
      {
        "@id": "urn:ngm:class:social-network-analysis",
        "label": "Social Network Analysis"
      },
      {
        "@id": "urn:ngm:class:reputation-system",
        "label": "Reputation System"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:identity-management-system",
        "label": "Identity Management System"
      },
      {
        "@id": "urn:ngm:class:trust-framework",
        "label": "Trust Framework"
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

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:identity-graph:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0459c95e67ddad069af922485b5720db509cce31b36e6cac45c4534f190a1ff1"
  },
  "vc:resolutions": [
    {
      "raw": "[[DID Resolution]]",
      "resolved": "urn:visionflow:linked:did-resolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[DIF Universal Resolver]]",
      "resolved": "urn:visionflow:linked:dif-universal-resolver",
      "kind": "StubLink"
    },
    {
      "raw": "[[Fraud Detection]]",
      "resolved": "urn:visionflow:linked:fraud-detection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Node]]",
      "resolved": "urn:visionflow:linked:identity-node",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Resolution]]",
      "resolved": "urn:visionflow:linked:identity-resolution",
      "kind": "StubLink"
    },
    {
      "raw": "[[Relationship Edge]]",
      "resolved": "urn:visionflow:linked:relationship-edge",
      "kind": "StubLink"
    },
    {
      "raw": "[[Social Network Analysis]]",
      "resolved": "urn:visionflow:linked:social-network-analysis",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Attribute]]",
      "resolved": "urn:visionflow:linked:trust-attribute",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Metrics]]",
      "resolved": "urn:visionflow:linked:trust-metrics",
      "kind": "StubLink"
    },
    {
      "raw": "[[W3C Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:w3-c-verifiable-credentials",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptographic Keys]]",
      "resolved": "urn:visionflow:owl:class:cryptographic-keys",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Graph Database]]",
      "resolved": "urn:visionflow:owl:class:graph-database",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Management System]]",
      "resolved": "urn:visionflow:owl:class:identity-management-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity Provider]]",
      "resolved": "urn:visionflow:owl:class:identity-provider",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Reputation System]]",
      "resolved": "urn:visionflow:owl:class:reputation-system",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:ai-governance-and-ethics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust Framework]]",
      "resolved": "urn:visionflow:owl:class:trust-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credentials]]",
      "resolved": "urn:visionflow:owl:class:verifiable-credentials",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A network-based data structure representing entities, their digital identities, and relationships in a graph database optimized for identity resolution, trust scoring, and social network analysis.

- ### Semantic Classification
  - owl-class:: infrastructure:IdentityGraph
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Identity Node]], [[Relationship Edge]], [[Trust Attribute]], [[Graph Database]]
  - is-part-of:: [[Identity Management System]], [[Trust Framework]]
  - requires:: [[Graph Database]], [[Identity Provider]], [[Cryptographic Keys]]
  - enables:: [[Social Network Analysis]], [[Reputation System]], [[Fraud Detection]], [[Identity Resolution]]
  - depends-on:: [[Verifiable Credentials]], [[DID Resolution]], [[Trust Metrics]]

- ### Content
  Identity Graph — content pending enrichment.

- ### Provenance
  - sources:: [[W3C Verifiable Credentials]], [[DIF Universal Resolver]]
  - migration-date:: 2026-04-26T00:00:00Z
