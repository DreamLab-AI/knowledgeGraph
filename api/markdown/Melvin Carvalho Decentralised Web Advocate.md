```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a49265f4447c913741dfcfbb1d3c3ef2c6a72d6ec7c4a23ba8b69c8db85efde5",
  "@type": "Page",
  "vc:slug": "melvin-carvalho-decentralised-web-advocate",
  "title": "Melvin Carvalho Decentralised Web Advocate",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:linked-data",
      "vc:label": "Linked Data"
    },
    {
      "@id": "urn:visionflow:linked:decentralized-identity",
      "vc:label": "Decentralized Identity"
    },
    {
      "@id": "urn:visionflow:linked:solid",
      "vc:label": "Solid"
    },
    {
      "@id": "urn:visionflow:linked:semantic-web",
      "vc:label": "Semantic Web"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Melvin Carvalho"
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
  "@id": "urn:ngm:class:melvin-carvalho-decentralised-web-advocate",
  "@type": "Class",
  "label": "Melvin Carvalho Decentralised Web Advocate",
  "definition": "Melvin Carvalho is a developer and advocate active in decentralised web and identity standards work, contributing to linked data, Solid and related semantic web technologies.",
  "domain": "metaverse",
  "maturity": "established",
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
        "@id": "urn:ngm:class:linked-data",
        "label": "Linked Data"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:decentralized-identity",
        "label": "Decentralized Identity"
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

- ### Definition
  - Melvin Carvalho is a developer and advocate active in decentralised web and identity standards work, contributing to linked data, Solid and related semantic web technologies.

- ### Semantic Classification
  - owl-class:: metaverse:MelvinCarvalho
  - owl-role:: Class

- ### Relationships
  - is-subclass-of:: [[Decentralized Identity]]
  - bridges-to:: [[Solid]], [[Semantic Web Linked Data Standard]]
  - requires:: [[Linked Data]]
  - enables:: [[Decentralized Identity]]

- ### Content
  - Carvalho has worked within communities developing decentralised identity and personal data store approaches, including the Solid project and WebID-style identity built on linked data. The focus is on giving individuals control over their own data and credentials.
  - This work sits at the intersection of the semantic web and self-sovereign identity, where standardised, interlinked data lets people and applications interoperate without central authorities. It connects to broader decentralised identity efforts.

- ### Provenance
  - sources::
  - migration-date:: 2026-05-29T00:00:00Z
