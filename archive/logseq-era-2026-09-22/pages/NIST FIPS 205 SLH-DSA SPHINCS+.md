public:: true

# NIST FIPS 205 SLH-DSA SPHINCS+
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:50b4df0da6aa362c1f3ff9642b97d3dbec6743b9b8dc8e0186c381e9a3e86c18",
  "@type": "Page",
  "vc:slug": "nist-fips-205-slh-dsa-sphincs",
  "title": "NIST FIPS 205 SLH-DSA SPHINCS+",
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
      "vc:value": "NIST FIPS 205 SLH-DSA SPHINCS+"
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
  "@id": "urn:ngm:class:nist-fips-205-slh-dsa-sphincs",
  "@type": "Class",
  "label": "NIST FIPS 205 SLH-DSA SPHINCS+",
  "definition": "A NIST Federal Information Processing Standard specifying the Stateless Hash-Based Digital Signature Algorithm (SLH-DSA), derived from the SPHINCS+ scheme. It provides hash-based signatures designed to resist quantum attacks.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:nist-fips-205-slh-dsa-sphincs:271cae672009",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:50b4df0da6aa362c1f3ff9642b97d3dbec6743b9b8dc8e0186c381e9a3e86c18"
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
  - A NIST Federal Information Processing Standard specifying the Stateless Hash-Based Digital Signature Algorithm (SLH-DSA), derived from the SPHINCS+ scheme. It provides hash-based signatures designed to resist quantum attacks.

- ### Semantic Classification
  - owl-class:: standards:NISTFIPS205SLHDSASPHINCS
  - owl-role:: Standard

- ### Relationships
  - is-subclass-of:: [[Technical Standard]]
  - requires:: [[NIST]]

- ### Content
  - A NIST Federal Information Processing Standard specifying the Stateless Hash-Based Digital Signature Algorithm (SLH-DSA), derived from the SPHINCS+ scheme. It provides hash-based signatures designed to resist quantum attacks.
  - Topic area: post-quantum cryptography.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
