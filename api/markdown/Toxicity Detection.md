schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#ToxicityDetection
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:toxicity-detection
public:: true

# Toxicity Detection
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:b9963886abf89bfbd0ccffd622cad0ccaf11f9ba0c6bd4db8dc96701f7a2dafe",
  "@type": "Page",
  "vc:slug": "toxicity-detection",
  "title": "Toxicity Detection",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:content-moderation",
      "vc:label": "Content Moderation"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "authority-score",
      "vc:value": "0.95"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-0eb36fb794f2"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-11-13T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#ToxicityDetection"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0859"
    },
    {
      "vc:key": "maturity",
      "vc:value": "established"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Toxicity Detection"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:toxicity-detection"
    },
    {
      "vc:key": "status",
      "vc:value": "complete"
    },
    {
      "vc:key": "type",
      "vc:value": "owl:Class"
    },
    {
      "vc:key": "uri",
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:toxicity-detection"
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
    "@id": "urn:visionflow:page:b9963886abf89bfbd0ccffd622cad0ccaf11f9ba0c6bd4db8dc96701f7a2dafe@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:toxicity-detection",
  "@type": "OntologyClass",
  "label": "Toxicity Detection",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:content-moderation",
      "vc:label": "Content Moderation"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "complete",
  "vc:maturity": "established",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:b9963886abf89bfbd0ccffd622cad0ccaf11f9ba0c6bd4db8dc96701f7a2dafe"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b9963886abf89bfbd0ccffd622cad0ccaf11f9ba0c6bd4db8dc96701f7a2dafe@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Toxicity Detection is a artificial intelligence concept and a type of Content Moderation.",
  "vc:qualityScore": {
    "@value": "0.35",
    "@type": "xsd:float"
  },
  "vc:authorityScore": {
    "@value": "0.95",
    "@type": "xsd:float"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:toxicity-detection:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:b9963886abf89bfbd0ccffd622cad0ccaf11f9ba0c6bd4db8dc96701f7a2dafe"
  },
  "vc:resolutions": [
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Content Moderation]]",
      "resolved": "urn:visionflow:owl:class:content-moderation",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:b9963886abf89bfbd0ccffd622cad0ccaf11f9ba0c6bd4db8dc96701f7a2dafe@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Toxicity Detection is a concept within the ai domain.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:ToxicityDetection
  - owl-role:: Concept
  - belongs-to-domain:: [[Artificial Intelligence]]

- ### Relationships
  - is-subclass-of:: [[Content Moderation]]

- ### Content
  Toxicity Detection — content pending enrichment.

- ### Provenance
  - sources:: Chimera Prime Research
  - migration-date:: 2026-04-26T00:00:00Z
