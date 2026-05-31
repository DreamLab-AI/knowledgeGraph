public:: true

# L402 Protocol
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a16c91c62ec0b12a0a3629ba5c16a6515647353cf5584d0b39d98a0157516560",
  "@type": "Page",
  "vc:slug": "l-402-protocol",
  "title": "L402 Protocol",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:linked:micropayment",
      "vc:label": "Micropayment"
    },
    {
      "@id": "urn:visionflow:linked:authentication",
      "vc:label": "Authentication"
    },
    {
      "@id": "urn:visionflow:linked:l-402",
      "vc:label": "L402"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "L402 Protocol"
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
  "@id": "urn:ngm:class:l-402-protocol",
  "@type": "Class",
  "label": "L402 Protocol",
  "definition": "The specification defining how HTTP 402 responses, Lightning invoices, and macaroon tokens combine to authorise paid access to web resources.",
  "domain": "blockchain",
  "maturity": "emerging",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:l-402",
      "label": "L402"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:lightning-network",
        "label": "Lightning Network"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:micropayment",
        "label": "Micropayment"
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
  "@id": "urn:visionflow:annotation:link-resolutions:l-402-protocol:bfd0f8fe1fc3",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a16c91c62ec0b12a0a3629ba5c16a6515647353cf5584d0b39d98a0157516560"
  },
  "vc:resolutions": [
    {
      "raw": "[[Lightning Network]]",
      "resolved": "urn:visionflow:linked:lightning-network",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Micropayment]]",
      "resolved": "urn:visionflow:linked:micropayment",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Authentication]]",
      "resolved": "urn:visionflow:linked:authentication",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[L402]]",
      "resolved": "urn:visionflow:linked:l-402",
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
  - The specification defining how HTTP 402 responses, Lightning invoices, and macaroon tokens combine to authorise paid access to web resources.

- ### Semantic Classification
  - owl-class:: blockchain:L402Protocol
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[L402]]
  - bridges-to:: [[Authentication]]
  - requires:: [[Lightning Network]]
  - enables:: [[Micropayment]]

- ### Content
  - The protocol formalises the exchange in which a server returns a 402 status alongside an invoice and an incomplete authorisation token. After the client pays the invoice and obtains the payment preimage, it presents the completed token to gain access.
  - By binding access rights to a settled Lightning payment, the specification supports pay-per-request services and metered APIs. Macaroon caveats let issuers constrain the scope and lifetime of each token.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
