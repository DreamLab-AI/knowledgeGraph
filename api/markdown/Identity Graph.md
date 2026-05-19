schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#IdentityGraph
legacy_uri:: urn:visionclaw:concept:infrastructure:identity-graph
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
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
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
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-487b1350f53e"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#IdentityGraph"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-20285"
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
      "vc:value": "Identity Graph"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:identity-graph"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:identity-graph"
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
    "@id": "urn:visionflow:page:0459c95e67ddad069af922485b5720db509cce31b36e6cac45c4534f190a1ff1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:identity-graph",
  "@type": "OntologyClass",
  "label": "Identity Graph",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:0459c95e67ddad069af922485b5720db509cce31b36e6cac45c4534f190a1ff1"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0459c95e67ddad069af922485b5720db509cce31b36e6cac45c4534f190a1ff1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "A network-based data structure representing entities, their digital identities, and relationships in a graph database optimized for identity resolution, trust scoring, and social network analysis.",
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
      "@id": "urn:visionflow:owl:class:identity-management-system",
      "vc:label": "Identity Management System"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-framework",
      "vc:label": "Trust Framework"
    }
  ],
  "vc:hasPart": [
    {
      "@id": "urn:visionflow:linked:identity-node",
      "vc:label": "Identity Node"
    },
    {
      "@id": "urn:visionflow:linked:relationship-edge",
      "vc:label": "Relationship Edge"
    },
    {
      "@id": "urn:visionflow:linked:trust-attribute",
      "vc:label": "Trust Attribute"
    },
    {
      "@id": "urn:visionflow:owl:class:graph-database",
      "vc:label": "Graph Database"
    }
  ],
  "vc:requires": [
    {
      "@id": "urn:visionflow:owl:class:cryptographic-keys",
      "vc:label": "Cryptographic Keys"
    },
    {
      "@id": "urn:visionflow:owl:class:graph-database",
      "vc:label": "Graph Database"
    },
    {
      "@id": "urn:visionflow:owl:class:identity-provider",
      "vc:label": "Identity Provider"
    }
  ],
  "vc:enables": [
    {
      "@id": "urn:visionflow:linked:fraud-detection",
      "vc:label": "Fraud Detection"
    },
    {
      "@id": "urn:visionflow:linked:identity-resolution",
      "vc:label": "Identity Resolution"
    },
    {
      "@id": "urn:visionflow:linked:social-network-analysis",
      "vc:label": "Social Network Analysis"
    },
    {
      "@id": "urn:visionflow:owl:class:reputation-system",
      "vc:label": "Reputation System"
    }
  ],
  "vc:dependsOn": [
    {
      "@id": "urn:visionflow:linked:did-resolution",
      "vc:label": "DID Resolution"
    },
    {
      "@id": "urn:visionflow:linked:trust-metrics",
      "vc:label": "Trust Metrics"
    },
    {
      "@id": "urn:visionflow:owl:class:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    }
  ]
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
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0459c95e67ddad069af922485b5720db509cce31b36e6cac45c4534f190a1ff1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
