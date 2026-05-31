public:: true

# OECD
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:035ec2e3e8e191ef7e131ae83c5b7e2df07ec9c2d6d907f8685305f8299d29d1",
  "@type": "Page",
  "vc:slug": "oecd",
  "title": "OECD",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:mi-ca",
      "vc:label": "MiCA"
    },
    {
      "@id": "urn:visionflow:linked:regulatory-domain",
      "vc:label": "Regulatory Domain"
    },
    {
      "@id": "urn:visionflow:linked:governance-domain",
      "vc:label": "Governance Domain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "OECD"
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
  "@id": "urn:ngm:class:oecd",
  "@type": "Class",
  "label": "OECD",
  "definition": "The OECD (Organisation for Economic Co-operation and Development) is an intergovernmental organisation founded in 1961 and headquartered in Paris, comprising mostly high-income member countries committed to market economies and democratic governance. It produces economic analysis, statistics and policy recommendations, and develops international standards on taxation, trade, education and digital policy. In the technology and finance domains it has led work on the taxation of digital assets through its Crypto-Asset Reporting Framework and on principles for trustworthy artificial intelligence. Its outputs are influential in shaping national and international policy.",
  "domain": "oecd",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:governance-domain",
      "label": "Governance Domain"
    }
  ],
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
  "@id": "urn:visionflow:annotation:link-resolutions:oecd:6b1c64c81e67",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:035ec2e3e8e191ef7e131ae83c5b7e2df07ec9c2d6d907f8685305f8299d29d1"
  },
  "vc:resolutions": [
    {
      "raw": "[[MiCA]]",
      "resolved": "urn:visionflow:linked:mi-ca",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Regulatory Domain]]",
      "resolved": "urn:visionflow:linked:regulatory-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Governance Domain]]",
      "resolved": "urn:visionflow:linked:governance-domain",
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
  - The OECD (Organisation for Economic Co-operation and Development) is an intergovernmental organisation founded in 1961 and headquartered in Paris, comprising mostly high-income member countries committed to market economies and democratic governance. It produces economic analysis, statistics and policy recommendations, and develops international standards on taxation, trade, education and digital policy. In the technology and finance domains it has led work on the taxation of digital assets through its Crypto-Asset Reporting Framework and on principles for trustworthy artificial intelligence. Its outputs are influential in shaping national and international policy.

- ### Semantic Classification
  - owl-class:: org:OECD
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[Governance Domain]]
  - bridges-to:: [[MiCA]], [[Regulatory Domain]]

- ### Content
  - The OECD grew out of the post-war Organisation for European Economic Co-operation and was reconstituted in 1961 with a broader membership. It serves as a forum where governments compare policy experience, gather comparable statistics and negotiate common standards across economic and social areas.
  - The organisation is well known for its work on international taxation, including the base erosion and profit shifting initiatives and, more recently, the Crypto-Asset Reporting Framework that extends automatic exchange of tax information to crypto-assets. It also publishes widely cited economic outlooks and education assessments such as PISA.
  - On emerging technology, the OECD's principles on artificial intelligence, adopted in 2019, set out recommendations for trustworthy and human-centred AI that informed subsequent regulatory and international discussions. Its recommendations are not binding but carry weight through peer review and broad adoption among members.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
