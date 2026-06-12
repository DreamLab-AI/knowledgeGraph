public:: true

# SD-JWT VC
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:2182061083f865d260e3e78cb279242ed9c5c8202bcfce4de0ff5d9f54b2093b",
  "@type": "Page",
  "vc:slug": "sd-jwt-vc",
  "title": "SD-JWT VC",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:json-web-token",
      "vc:label": "JSON Web Token"
    },
    {
      "@id": "urn:visionflow:linked:selective-disclosure",
      "vc:label": "Selective Disclosure"
    },
    {
      "@id": "urn:visionflow:linked:digital-identity",
      "vc:label": "Digital Identity"
    },
    {
      "@id": "urn:visionflow:linked:privacy",
      "vc:label": "Privacy"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "SD-JWT VC"
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
  "@id": "urn:ngm:class:sd-jwt-vc",
  "@type": "Class",
  "label": "SD-JWT VC",
  "definition": "A verifiable credential format that uses Selective Disclosure JSON Web Tokens, allowing a holder to reveal only chosen claims to a verifier. It combines the JWT structure with salted hashes that support selective disclosure.",
  "domain": "identity",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:json-data-interchange-format-web-token",
      "label": "JSON Web Token"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:json-data-interchange-format-web-token",
        "label": "JSON Web Token"
      },
      {
        "@id": "urn:ngm:class:selective-disclosure",
        "label": "Selective Disclosure"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:digital-identity",
        "label": "Digital Identity"
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
  "@id": "urn:visionflow:annotation:link-resolutions:sd-jwt-vc:e89340256a92",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:2182061083f865d260e3e78cb279242ed9c5c8202bcfce4de0ff5d9f54b2093b"
  },
  "vc:resolutions": [
    {
      "raw": "[[JSON Web Token]]",
      "resolved": "urn:visionflow:linked:json-web-token",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Selective Disclosure]]",
      "resolved": "urn:visionflow:linked:selective-disclosure",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Identity]]",
      "resolved": "urn:visionflow:linked:digital-identity",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Privacy]]",
      "resolved": "urn:visionflow:linked:privacy",
      "kind": "ResolvedLink"
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
  - A verifiable credential format that uses Selective Disclosure JSON Web Tokens, allowing a holder to reveal only chosen claims to a verifier. It combines the JWT structure with salted hashes that support selective disclosure.

- ### Semantic Classification
  - owl-class:: identity:SDJWTVC
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[JSON Web Token]]
  - bridges-to:: [[Privacy]]
  - requires:: [[JSON Web Token]], [[Selective Disclosure]]
  - enables:: [[Digital Identity]]

- ### Content
  - SD-JWT VC builds on the Selective Disclosure JWT mechanism, where individual claims are hashed with salts so that a holder can present a subset of claims while the verifier can still check the issuer signature.
  - The format is used in digital identity wallets and credential ecosystems where minimising disclosure of personal data is a goal, and it is being standardised within the IETF and related credential frameworks.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
