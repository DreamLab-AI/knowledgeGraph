public:: true

# NIST FIPS 205
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b225c81ec916e5efba8286b6be452baba645dee0f2ebab52ce3f0e0fb8cdd7eb",
  "@type": "Page",
  "vc:slug": "nist-fips-205",
  "title": "NIST FIPS 205",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:nist",
      "vc:label": "NIST"
    },
    {
      "@id": "urn:visionflow:linked:technical-standard",
      "vc:label": "Technical Standard"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "NIST FIPS 205"
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
  "@id": "urn:ngm:class:nist-fips-205",
  "@type": "Class",
  "label": "NIST FIPS 205",
  "definition": "A NIST Federal Information Processing Standard specifying the stateless hash-based digital signature algorithm (SLH-DSA), based on SPHINCS+. It is one of the standardised post-quantum signature schemes.",
  "domain": "standards",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:technical-standard",
      "label": "Technical Standard"
    }
  ],
  "relations": {
    "requires": [
      {
        "@id": "urn:ngm:class:nist",
        "label": "NIST"
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-fips-205:306378af46a8",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b225c81ec916e5efba8286b6be452baba645dee0f2ebab52ce3f0e0fb8cdd7eb"
  },
  "vc:resolutions": [
    {
      "raw": "[[NIST]]",
      "resolved": "urn:visionflow:linked:nist",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Technical Standard]]",
      "resolved": "urn:visionflow:linked:technical-standard",
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
  - A NIST Federal Information Processing Standard specifying the stateless hash-based digital signature algorithm (SLH-DSA), based on SPHINCS+. It is one of the standardised post-quantum signature schemes.

- ### Semantic Classification
  - owl-class:: standards:NISTFIPS205
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - A NIST Federal Information Processing Standard specifying the stateless hash-based digital signature algorithm (SLH-DSA), based on SPHINCS+. It is one of the standardised post-quantum signature schemes.
  - Topic area: post-quantum cryptography.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
