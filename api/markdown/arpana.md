schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#Arpana
legacy_uri:: urn:visionclaw:concept:infrastructure:arpana
public:: true

# arpana
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063",
  "@type": "Page",
  "vc:slug": "arpana",
  "title": "arpana",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:crime-uk",
      "vc:label": "crime uk"
    },
    {
      "@id": "urn:visionflow:linked:law",
      "vc:label": "law"
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
      "vc:value": "sha256-12-3bcf0c0aaa1d"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#Arpana"
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
      "vc:value": "arpana"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:arpana"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:arpana"
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
    "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:arpana",
  "@type": "OntologyClass",
  "label": "arpana",
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
    "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "arpana is a technology infrastructure concept and a type of infrastructure.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:arpana:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063"
  },
  "vc:resolutions": [
    {
      "raw": "[[crime uk]]",
      "resolved": "urn:visionflow:linked:crime-uk",
      "kind": "StubLink"
    },
    {
      "raw": "[[law]]",
      "resolved": "urn:visionflow:linked:law",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a6e76761322adc85fed465a262d3998bd8e25e65cba9aeb5742d03ed0bed9063@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - arpana is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:Arpana
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  - [[law]]
  - [[crime uk]]
  - jurisditional practice for integraating crime scene reconstruction with court proceeding

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
