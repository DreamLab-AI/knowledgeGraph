schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/distributed-collaboration#VoiceMemo
legacy_uri:: urn:visionclaw:concept:distributed-collaboration:voice-memo
public:: true

# Voice Memo
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f",
  "@type": "Page",
  "vc:slug": "voice-memo",
  "title": "Voice Memo",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:owl:class:asynchronous-collaboration",
      "vc:label": "Asynchronous Collaboration"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration-domain",
      "vc:label": "TelecollaborationDomain"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-b31decf4f0fd"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "distributed-collaboration"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/distributed-collaboration#VoiceMemo"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9002"
    },
    {
      "vc:key": "maturity",
      "vc:value": "emerging"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Voice Memo"
    },
    {
      "vc:key": "public",
      "vc:value": "true"
    },
    {
      "vc:key": "quality-score",
      "vc:value": "0.35"
    },
    {
      "vc:key": "rdf-type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "same-as",
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:voice-memo"
    },
    {
      "vc:key": "status",
      "vc:value": "draft"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:voice-memo"
    },
    {
      "vc:key": "version",
      "vc:value": "2.0.0"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:voice-memo",
  "@type": "Class",
  "label": "Voice Memo",
  "definition": "Asynchronous audio communication allowing users to record and share voice messages, providing richer context than text while maintaining time flexibility.",
  "domain": "distributed-collaboration",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:asynchronous-collaboration",
      "label": "Asynchronous Collaboration"
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
  "@id": "urn:visionflow:annotation:link-resolutions:voice-memo:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Asynchronous Collaboration]]",
      "resolved": "urn:visionflow:owl:class:asynchronous-collaboration",
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
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:94ff7db92bcd3ceb16a1e50027c29c4ee331025b7794617995cd84c4cc3ede2f@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Asynchronous audio communication allowing users to record and share voice messages, providing richer context than text while maintaining time flexibility.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VoiceMemo
  - owl-role:: Object
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Asynchronous Collaboration]]

- ### Content
  Voice Memo — content pending enrichment.

- ### Provenance
  - sources:: [[Collaboration Tools]]
  - migration-date:: 2026-04-26T00:00:00Z
