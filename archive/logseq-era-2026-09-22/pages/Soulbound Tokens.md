public:: true

# Soulbound Tokens
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:ecec0d8203bef3920d491f3f6d4da82a25567536f7290a3cf4374381d1568a2c",
  "@type": "Page",
  "vc:slug": "soulbound-tokens",
  "title": "Soulbound Tokens",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:token-standard",
      "vc:label": "Token Standard"
    },
    {
      "@id": "urn:visionflow:linked:sybil-resistance",
      "vc:label": "Sybil Resistance"
    },
    {
      "@id": "urn:visionflow:linked:verifiable-credentials",
      "vc:label": "Verifiable Credentials"
    },
    {
      "@id": "urn:visionflow:linked:non-fungible-token",
      "vc:label": "Non-Fungible Token"
    },
    {
      "@id": "urn:visionflow:linked:identity",
      "vc:label": "Identity"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identity",
      "vc:label": "Decentralized Identity"
    },
    {
      "@id": "urn:visionflow:linked:https-papers-ssrn-com-sol-3-papers-cfm-abstract-id-4105763",
      "vc:label": "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Soulbound Tokens"
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
  "@id": "urn:ngm:class:soulbound-tokens",
  "@type": "Class",
  "label": "Soulbound Tokens",
  "definition": "Non-transferable tokens bound to a single account that represent credentials, affiliations or reputation rather than tradable value. Because they cannot be sold or moved, they encode persistent attributes of an identity.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:decentralized-identity",
      "label": "Decentralized Identity"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:token-standard",
        "label": "Token Standard"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:sybil-resistance",
        "label": "Sybil Resistance"
      },
      {
        "@id": "urn:ngm:class:verifiable-credentials",
        "label": "Verifiable Credentials"
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
  "@id": "urn:visionflow:annotation:link-resolutions:soulbound-tokens:6e850ea913be",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:ecec0d8203bef3920d491f3f6d4da82a25567536f7290a3cf4374381d1568a2c"
  },
  "vc:resolutions": [
    {
      "raw": "[[Token Standard]]",
      "resolved": "urn:visionflow:linked:token-standard",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Sybil Resistance]]",
      "resolved": "urn:visionflow:linked:sybil-resistance",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Verifiable Credentials]]",
      "resolved": "urn:visionflow:linked:verifiable-credentials",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Non-Fungible Token]]",
      "resolved": "urn:visionflow:linked:non-fungible-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Identity]]",
      "resolved": "urn:visionflow:linked:identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Decentralized Identity]]",
      "resolved": "urn:visionflow:linked:decentralized-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763]]",
      "resolved": "urn:visionflow:linked:https-papers-ssrn-com-sol-3-papers-cfm-abstract-id-4105763",
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
  - Non-transferable tokens bound to a single account that represent credentials, affiliations or reputation rather than tradable value. Because they cannot be sold or moved, they encode persistent attributes of an identity.

- ### Semantic Classification
  - owl-class:: blockchain:SoulboundTokens
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Identity]]
  - bridges-to:: [[Non-Fungible Token]], [[Identity]]
  - requires:: [[Token Standard]]
  - enables:: [[Sybil Resistance]], [[Verifiable Credentials]]

- ### Content
  - Soulbound tokens are issued to an account and cannot be transferred away from it, so they act as records of attributes such as qualifications, memberships or attestations. The non-transferable property is intended to prevent the buying and selling of reputation.
  - Proposed as a building block for a more identity-aware on-chain ecosystem, they can support reputation systems, governance eligibility and resistance to Sybil attacks. They extend non-fungible token mechanics by removing the ability to trade the token.

- ### Provenance
  - sources:: [[https://papers.ssrn.com/sol3/papers.cfm?abstract_id=4105763]]
  - migration-date:: 2026-05-29T00:00:00Z
