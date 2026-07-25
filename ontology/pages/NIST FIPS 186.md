public:: true

# NIST FIPS 186
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:883cc65bc2d69b5a2500d66656ae223a21de01e6ca3c3e90e1cfa527acff3fed",
  "@type": "Page",
  "vc:slug": "nist-fips-186",
  "title": "NIST FIPS 186",
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
      "vc:value": "NIST FIPS 186"
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
  "@id": "urn:ngm:class:nist-fips-186",
  "@type": "Class",
  "label": "NIST FIPS 186",
  "definition": "A NIST Federal Information Processing Standard specifying the Digital Signature Standard (DSS), defining approved algorithms for generating and verifying digital signatures. It covers algorithms such as DSA, RSA and ECDSA depending on the revision.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-fips-186:79e68c5fe814",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:883cc65bc2d69b5a2500d66656ae223a21de01e6ca3c3e90e1cfa527acff3fed"
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
  - A NIST Federal Information Processing Standard specifying the Digital Signature Standard (DSS), defining approved algorithms for generating and verifying digital signatures. It covers algorithms such as DSA, RSA and ECDSA depending on the revision.

- ### Semantic Classification
  - owl-class:: standards:NISTFIPS186
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - A NIST Federal Information Processing Standard specifying the Digital Signature Standard (DSS), defining approved algorithms for generating and verifying digital signatures. It covers algorithms such as DSA, RSA and ECDSA depending on the revision.
  - Topic area: digital signature standard.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
