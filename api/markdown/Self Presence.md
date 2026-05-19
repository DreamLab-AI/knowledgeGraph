public:: true

# Self Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d16e2f16c96e1750007bff39dabd13c47a781adce6432b7d19549e5ef7b6b361",
  "@type": "Page",
  "vc:slug": "self-presence",
  "title": "Self Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:avatar-psychology",
      "vc:label": "Avatar Psychology"
    },
    {
      "@id": "urn:visionflow:linked:presence-research",
      "vc:label": "Presence Research"
    },
    {
      "@id": "urn:visionflow:owl:class:presence",
      "vc:label": "Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration-domain",
      "vc:label": "TelecollaborationDomain"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9006"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Self Presence"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
  "@id": "urn:ngm:class:self-presence",
  "@type": "Class",
  "label": "Self Presence",
  "definition": "Subjective experience of embodiment and self-location in a mediated environment, feeling that one's virtual representation is an extension of oneself.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:dc-telepresence",
      "label": "Telepresence"
    },
    {
      "@id": "urn:ngm:class:presence",
      "label": "Presence"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:jjohare",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R1Explicit"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:self-presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d16e2f16c96e1750007bff39dabd13c47a781adce6432b7d19549e5ef7b6b361"
  },
  "vc:resolutions": [
    {
      "raw": "[[Avatar Psychology]]",
      "resolved": "urn:visionflow:linked:avatar-psychology",
      "kind": "StubLink"
    },
    {
      "raw": "[[Presence Research]]",
      "resolved": "urn:visionflow:linked:presence-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[Presence]]",
      "resolved": "urn:visionflow:owl:class:presence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[TelecollaborationDomain]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration-domain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Subjective experience of embodiment and self-location in a mediated environment, feeling that one's virtual representation is an extension of oneself.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:SelfPresence
  - owl-role:: Attribute
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Presence]]

- ### Content
  Self Presence — content pending enrichment.

- ### Provenance
  - sources:: [[Presence Research]], [[Avatar Psychology]]
  - migration-date:: 2026-04-26T00:00:00Z
