schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Landscape
legacy_uri:: urn:visionclaw:concept:infrastructure:landscape
public:: true

# Landscape
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:686e4195f3663261deb52dfc2d9e8276d7b6e1141f183961d78518576baf1d9e",
  "@type": "Page",
  "vc:slug": "landscape",
  "title": "Landscape",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:landscape",
      "vc:label": "Landscape"
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
      "vc:value": "[[Blockchain]], [[AI Agent System]]"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-537c6c0b8339"
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
      "vc:value": "infrastructure"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/infrastructure#Landscape"
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
      "vc:value": "Landscape"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:landscape"
    },
    {
      "vc:key": "status",
      "vc:value": "stub"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:infrastructure:landscape"
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
    "@id": "urn:visionflow:page:686e4195f3663261deb52dfc2d9e8276d7b6e1141f183961d78518576baf1d9e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:landscape",
  "@type": "OntologyClass",
  "label": "Landscape",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "stub",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:686e4195f3663261deb52dfc2d9e8276d7b6e1141f183961d78518576baf1d9e"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:686e4195f3663261deb52dfc2d9e8276d7b6e1141f183961d78518576baf1d9e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Landscape is a technology infrastructure concept and a type of infrastructure.",
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
      "@id": "urn:visionflow:owl:class:ai-agent-system",
      "vc:label": "AI Agent System"
    },
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:landscape:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:686e4195f3663261deb52dfc2d9e8276d7b6e1141f183961d78518576baf1d9e"
  },
  "vc:resolutions": [
    {
      "raw": "[[Landscape]]",
      "resolved": "urn:visionflow:owl:class:landscape",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:686e4195f3663261deb52dfc2d9e8276d7b6e1141f183961d78518576baf1d9e@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Landscape is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Landscape
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - #Public page
	 - automatically published
  - a16z market analysis [[Landscape]] [market analysis](https://a16z.com/2023/05/25/ai-canon/)
  - Cowboy ventures [[Landscape]] [AI stack overview](https://medium.com/cowboy-ventures/the-new-infra-stack-for-generative-ai-9db8f294dc3f)

  - ## AI landscape

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
