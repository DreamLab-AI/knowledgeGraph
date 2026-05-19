schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/distributed-collaboration#VirtualMeeting
legacy_uri:: urn:visionclaw:concept:distributed-collaboration:virtual-meeting
public:: true

# Virtual Meeting
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d",
  "@type": "Page",
  "vc:slug": "virtual-meeting",
  "title": "Virtual Meeting",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
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
      "vc:value": "sha256-12-e2bc23cc5925"
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
      "vc:value": "http://narrativegoldmine.com/distributed-collaboration#VirtualMeeting"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-0602"
    },
    {
      "vc:key": "maturity",
      "vc:value": "draft"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Virtual Meeting"
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
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:virtual-meeting"
    },
    {
      "vc:key": "status",
      "vc:value": "active"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:virtual-meeting"
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
    "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:virtual-meeting",
  "@type": "Class",
  "label": "Virtual Meeting",
  "definition": "Virtual Meeting refers to synchronous gatherings of participants using video conferencing, spatial computing, or immersive technologies to collaborate remotely.",
  "domain": "distributed-collaboration",
  "maturity": "draft",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:telecollaboration",
      "label": "Telecollaboration"
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
  "@id": "urn:visionflow:annotation:link-resolutions:virtual-meeting:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d"
  },
  "vc:resolutions": [
    {
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b2e3dc56f974948ed53971fd1cb1224b65cd16f0f7107ff648a00f685e2f842d@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Virtual Meeting refers to synchronous gatherings of participants using video conferencing, spatial computing, or immersive technologies to collaborate remotely. This encompasses traditional video conferencing platforms, virtual whiteboards, screen sharing capabilities, and emerging 3D virtual meeting spaces.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:VirtualMeeting
  - owl-role:: Concept
  - belongs-to-domain:: [[Telecollaboration]]

- ### Relationships
  - is-subclass-of:: [[Telecollaboration]]

- ### Content
  Virtual Meeting — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
