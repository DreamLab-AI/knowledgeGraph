schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/distributed-collaboration#SocialPresence
legacy_uri:: urn:visionclaw:concept:distributed-collaboration:social-presence
public:: true

# Social Presence
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce",
  "@type": "Page",
  "vc:slug": "social-presence",
  "title": "Social Presence",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:presence-research",
      "vc:label": "Presence Research"
    },
    {
      "@id": "urn:visionflow:owl:class:presence",
      "vc:label": "Presence"
    },
    {
      "@id": "urn:visionflow:owl:class:telecollaboration",
      "vc:label": "Telecollaboration"
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
      "vc:value": "sha256-12-7c0d684a5894"
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
      "vc:value": "http://narrativegoldmine.com/distributed-collaboration#SocialPresence"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9004"
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
      "vc:value": "Social Presence"
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
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:social-presence"
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
      "vc:value": "urn:visionclaw:concept:distributed-collaboration:social-presence"
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
    "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:social-presence",
  "@type": "OntologyClass",
  "label": "Social Presence",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:presence",
      "vc:label": "Presence"
    }
  ],
  "vc:sourceDomain": "distributed-collaboration",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Subjective experience of feeling connected to and aware of other people in a mediated communication environment, fostering social interactions and relationships.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.00",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:social-presence:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce"
  },
  "vc:resolutions": [
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
      "raw": "[[Telecollaboration]]",
      "resolved": "urn:visionflow:owl:class:telecollaboration",
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
    "@id": "urn:visionflow:page:9e72c244193228052525cf78f2adbdbc525b04fe80c47a1cb4df5a71bf4f3cce@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Subjective experience of feeling connected to and aware of other people in a mediated communication environment, fostering social interactions and relationships.

- ### Semantic Classification
  - owl-class:: distributed-collaboration:SocialPresence
  - owl-role:: Attribute
  - belongs-to-domain:: [[TelecollaborationDomain]]

- ### Relationships
  - is-subclass-of:: [[Presence]]

- ### Content
  Social Presence — content pending enrichment.

- ### Provenance
  - sources:: [[Presence Research]], [[Telecollaboration]]
  - migration-date:: 2026-04-26T00:00:00Z
