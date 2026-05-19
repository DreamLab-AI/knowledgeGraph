schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/distributed-collaboration#ThreadedMessaging
legacy_uri:: urn:visionclaw:concept:distributed-collaboration:threaded-messaging
public:: true

# Threaded Messaging
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1",
  "@type": "Page",
  "vc:slug": "threaded-messaging",
  "title": "Threaded Messaging",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:collaboration-tools",
      "vc:label": "Collaboration Tools"
    },
    {
      "@id": "urn:visionflow:linked:discord",
      "vc:label": "Discord"
    },
    {
      "@id": "urn:visionflow:linked:slack",
      "vc:label": "Slack"
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
      "vc:key": "bridges-to",
      "vc:value": "[[Virtual Workspace]], [[Lightning Network]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-bea573b5919a"
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
      "vc:value": "http://narrativegoldmine.com/distributed-collaboration#ThreadedMessaging"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9001"
    },
    {
      "vc:key": "maturity",
      "vc:value": "mature"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Threaded Messaging"
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
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:threaded-messaging"
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
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:threaded-messaging"
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
    "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:owl:class:threaded-messaging",
  "@type": "OntologyClass",
  "label": "Threaded Messaging",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:asynchronous-collaboration",
      "vc:label": "Asynchronous Collaboration"
    }
  ],
  "vc:sourceDomain": "distributed-collaboration",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Asynchronous communication pattern where messages are organized into conversation threads, enabling contextual discussions and reducing notification overload.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  },
  "vc:bridgesTo": [
    {
      "@id": "urn:visionflow:owl:class:lightning-network",
      "vc:label": "Lightning Network"
    },
    {
      "@id": "urn:visionflow:owl:class:virtual-workspace",
      "vc:label": "Virtual Workspace"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:threaded-messaging:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1"
  },
  "vc:resolutions": [
    {
      "raw": "[[Collaboration Tools]]",
      "resolved": "urn:visionflow:linked:collaboration-tools",
      "kind": "StubLink"
    },
    {
      "raw": "[[Discord]]",
      "resolved": "urn:visionflow:linked:discord",
      "kind": "StubLink"
    },
    {
      "raw": "[[Slack]]",
      "resolved": "urn:visionflow:linked:slack",
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
    "@id": "urn:visionflow:page:0b96025270d184284eae2d39d06cadf7e18b3481d72cdeb5f3ddafcc81d331b1@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Asynchronous communication pattern where messages are organized into conversation threads, enabling contextual discussions and reducing notification overload.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:ThreadedMessaging
  - owl-role:: Process
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Asynchronous Collaboration]]

- ### Content
  Threaded Messaging — content pending enrichment.

- ### Provenance
  - sources:: [[Collaboration Tools]], [[Slack]], [[Discord]]
  - migration-date:: 2026-04-26T00:00:00Z
