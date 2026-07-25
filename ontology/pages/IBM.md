public:: true

# IBM
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:93733caff980c6e2d53658fad0c965639562e4b79915023ef5496594532a16f4",
  "@type": "Page",
  "vc:slug": "ibm",
  "title": "IBM",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:database-systems",
      "vc:label": "Database Systems"
    },
    {
      "@id": "urn:visionflow:linked:web-3-infrastructure",
      "vc:label": "Web3 Infrastructure"
    },
    {
      "@id": "urn:visionflow:linked:cloud-computing",
      "vc:label": "Cloud Computing"
    },
    {
      "@id": "urn:visionflow:linked:https-www-ibm-com",
      "vc:label": "https://www.ibm.com/"
    },
    {
      "@id": "urn:visionflow:linked:https-www-ibm-com-cloud",
      "vc:label": "https://www.ibm.com/cloud"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "IBM"
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
  "@id": "urn:ngm:class:ibm",
  "@type": "Class",
  "label": "IBM",
  "definition": "IBM is a technology company providing enterprise hardware, software, cloud services and consulting, with a long history in mainframe and research computing.",
  "domain": "distributed-systems",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:cloud-computing",
      "label": "Cloud Computing"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:database-systems",
        "label": "Database Systems"
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
  "@id": "urn:visionflow:annotation:link-resolutions:ibm:916a98f0fa2a",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:93733caff980c6e2d53658fad0c965639562e4b79915023ef5496594532a16f4"
  },
  "vc:resolutions": [
    {
      "raw": "[[Database Systems]]",
      "resolved": "urn:visionflow:linked:database-systems",
      "kind": "StubLink"
    },
    {
      "raw": "[[Web3 Infrastructure]]",
      "resolved": "urn:visionflow:linked:web-3-infrastructure",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cloud Computing]]",
      "resolved": "urn:visionflow:linked:cloud-computing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[https://www.ibm.com/]]",
      "resolved": "urn:visionflow:linked:https-www-ibm-com",
      "kind": "StubLink"
    },
    {
      "raw": "[[https://www.ibm.com/cloud]]",
      "resolved": "urn:visionflow:linked:https-www-ibm-com-cloud",
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
  - IBM is a technology company providing enterprise hardware, software, cloud services and consulting, with a long history in mainframe and research computing.

- ### Semantic Classification
  - owl-class:: distributed-systems:IBM
  - owl-role:: Individual

- ### Relationships
  - is-subclass-of:: [[Cloud Computing]]
  - bridges-to:: [[Web3 Infrastructure]]
  - enables:: [[Database Systems]]

- ### Content
  - IBM operates across mainframe systems, enterprise software, cloud infrastructure and research. Its portfolio includes managed cloud services, middleware and data platforms used by large organisations.
  - The company maintains research laboratories that contribute to fields including cryptography, quantum computing and distributed systems. Its enterprise services are commonly integrated with existing database and transaction processing estates.

- ### Provenance
  - sources:: [[https://www.ibm.com/]], [[https://www.ibm.com/cloud]]
  - migration-date:: 2026-05-29T00:00:00Z
