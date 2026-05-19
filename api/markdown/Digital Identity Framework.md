schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#DigitalIdentityFramework
legacy_uri:: urn:visionclaw:concept:infrastructure:digital-identity-framework
public:: true

# Digital Identity Framework
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:694da137453a1c2489e1b3b80fac909f8d827913d9050a3004266ffabc61724a",
  "@type": "Page",
  "vc:slug": "digital-identity-framework",
  "title": "Digital Identity Framework",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:cryptographic-systems",
      "vc:label": "Cryptographic Systems"
    },
    {
      "@id": "urn:visionflow:linked:e-idas-2-0",
      "vc:label": "eIDAS 2.0"
    },
    {
      "@id": "urn:visionflow:linked:identity-policies",
      "vc:label": "Identity Policies"
    },
    {
      "@id": "urn:visionflow:linked:iso-iec-24760",
      "vc:label": "ISO/IEC 24760"
    },
    {
      "@id": "urn:visionflow:linked:policy-frameworks",
      "vc:label": "Policy Frameworks"
    },
    {
      "@id": "urn:visionflow:linked:privacy-controls",
      "vc:label": "Privacy Controls"
    },
    {
      "@id": "urn:visionflow:linked:privacy-protection",
      "vc:label": "Privacy Protection"
    },
    {
      "@id": "urn:visionflow:linked:secure-authentication",
      "vc:label": "Secure Authentication"
    },
    {
      "@id": "urn:visionflow:linked:trust-mechanisms",
      "vc:label": "Trust Mechanisms"
    },
    {
      "@id": "urn:visionflow:owl:class:authentication-standards",
      "vc:label": "Authentication Standards"
    },
    {
      "@id": "urn:visionflow:owl:class:cross-platform-identity",
      "vc:label": "Cross-Platform Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:data-layer",
      "vc:label": "DataLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:did-nostr-identity",
      "vc:label": "DID Nostr Identity"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-identity-management",
      "vc:label": "Digital Identity Management"
    },
    {
      "@id": "urn:visionflow:owl:class:governance-framework",
      "vc:label": "Governance Framework"
    },
    {
      "@id": "urn:visionflow:owl:class:middleware-layer",
      "vc:label": "MiddlewareLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:standardization-bodies",
      "vc:label": "Standardization Bodies"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-and-governance-domain",
      "vc:label": "TrustAndGovernanceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:trust-architecture",
      "vc:label": "Trust Architecture"
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
      "vc:value": "sha256-12-3f07edb8d684"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#DigitalIdentityFramework"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "20185"
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
      "vc:value": "Digital Identity Framework"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:digital-identity-framework"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:digital-identity-framework"
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
    "@id": "urn:visionflow:page:694da137453a1c2489e1b3b80fac909f8d827913d9050a3004266ffabc61724a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:digital-identity-framework",
  "@type": "Class",
  "label": "Digital Identity Framework",
  "definition": "Digital Identity Framework is a type of Infrastructure in the infrastructure domain.",
  "domain": "infrastructure",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:infrastructure",
      "label": "infrastructure"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:identity-policies",
        "label": "Identity Policies"
      },
      {
        "@id": "urn:ngm:class:privacy-controls",
        "label": "Privacy Controls"
      },
      {
        "@id": "urn:ngm:class:trust-mechanisms",
        "label": "Trust Mechanisms"
      },
      {
        "@id": "urn:ngm:class:authentication-standards",
        "label": "Authentication Standards"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:cryptographic-systems",
        "label": "Cryptographic Systems"
      },
      {
        "@id": "urn:ngm:class:policy-frameworks",
        "label": "Policy Frameworks"
      },
      {
        "@id": "urn:ngm:class:standardization-bodies",
        "label": "Standardization Bodies"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:privacy-protection",
        "label": "Privacy Protection"
      },
      {
        "@id": "urn:ngm:class:secure-authentication",
        "label": "Secure Authentication"
      },
      {
        "@id": "urn:ngm:class:cross-platform-identity",
        "label": "Cross-Platform Identity"
      },
      {
        "@id": "urn:ngm:class:digital-identity-management",
        "label": "Digital Identity Management"
      }
    ],
    "partOf": [
      {
        "@id": "urn:ngm:class:governance-framework",
        "label": "Governance Framework"
      },
      {
        "@id": "urn:ngm:class:trust-architecture",
        "label": "Trust Architecture"
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
  "@id": "urn:visionflow:annotation:link-resolutions:digital-identity-framework:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:694da137453a1c2489e1b3b80fac909f8d827913d9050a3004266ffabc61724a"
  },
  "vc:resolutions": [
    {
      "raw": "[[Cryptographic Systems]]",
      "resolved": "urn:visionflow:linked:cryptographic-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[eIDAS 2.0]]",
      "resolved": "urn:visionflow:linked:e-idas-2-0",
      "kind": "StubLink"
    },
    {
      "raw": "[[Identity Policies]]",
      "resolved": "urn:visionflow:linked:identity-policies",
      "kind": "StubLink"
    },
    {
      "raw": "[[ISO/IEC 24760]]",
      "resolved": "urn:visionflow:linked:iso-iec-24760",
      "kind": "StubLink"
    },
    {
      "raw": "[[Policy Frameworks]]",
      "resolved": "urn:visionflow:linked:policy-frameworks",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Controls]]",
      "resolved": "urn:visionflow:linked:privacy-controls",
      "kind": "StubLink"
    },
    {
      "raw": "[[Privacy Protection]]",
      "resolved": "urn:visionflow:linked:privacy-protection",
      "kind": "StubLink"
    },
    {
      "raw": "[[Secure Authentication]]",
      "resolved": "urn:visionflow:linked:secure-authentication",
      "kind": "StubLink"
    },
    {
      "raw": "[[Trust Mechanisms]]",
      "resolved": "urn:visionflow:linked:trust-mechanisms",
      "kind": "StubLink"
    },
    {
      "raw": "[[Authentication Standards]]",
      "resolved": "urn:visionflow:owl:class:authentication-standards",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Cross-Platform Identity]]",
      "resolved": "urn:visionflow:owl:class:cross-platform-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DataLayer]]",
      "resolved": "urn:visionflow:owl:class:data-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[DID Nostr Identity]]",
      "resolved": "urn:visionflow:owl:class:did-nostr-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity Management]]",
      "resolved": "urn:visionflow:owl:class:digital-identity-management",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Framework]]",
      "resolved": "urn:visionflow:owl:class:governance-framework",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MiddlewareLayer]]",
      "resolved": "urn:visionflow:owl:class:middleware-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Standardization Bodies]]",
      "resolved": "urn:visionflow:owl:class:standardization-bodies",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TrustAndGovernanceDomain]]",
      "resolved": "urn:visionflow:owl:class:trust-and-governance-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Trust Architecture]]",
      "resolved": "urn:visionflow:owl:class:trust-architecture",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:694da137453a1c2489e1b3b80fac909f8d827913d9050a3004266ffabc61724a@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Coordinated set of policies and standards governing creation, management, and use of digital identities in metaverse environments.

bridges-to:: [[DID Nostr Identity]]

- ### Semantic Classification
  - owl-class:: infrastructure:DigitalIdentityFramework
  - owl-role:: Object
  - owl-inferred:: infrastructure:VirtualObject
  - belongs-to-domain:: [[TrustAndGovernanceDomain]]
  - implemented-in-layer:: [[DataLayer]], [[MiddlewareLayer]]

- ### Relationships
  - has-part:: [[Identity Policies]], [[Authentication Standards]], [[Privacy Controls]], [[Trust Mechanisms]]
  - is-part-of:: [[Trust Architecture]], [[Governance Framework]]
  - requires:: [[Cryptographic Systems]], [[Policy Frameworks]], [[Standardization Bodies]]
  - enables:: [[Digital Identity Management]], [[Secure Authentication]], [[Privacy Protection]], [[Cross-Platform Identity]]

- ### Content
  Digital Identity Framework — content pending enrichment.

- ### Provenance
  - sources:: [[ISO/IEC 24760]], [[eIDAS 2.0]]
  - migration-date:: 2026-04-26T00:00:00Z
