schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Proxemics
legacy_uri:: urn:visionclaw:concept:robotics:proxemics
public:: true

# Proxemics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:31e1f3bc8ed97c0da74e74840a69a48e03efab41c51a4d114054c7236dfa0448",
  "@type": "Page",
  "vc:slug": "proxemics",
  "title": "Proxemics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:hri",
      "vc:label": "HRI"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:social-robotics",
      "vc:label": "Social Robotics"
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
      "vc:value": "sha256-12-cd77f4a56880"
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
      "vc:value": "robotics"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/robotics#Proxemics"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9006"
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
      "vc:value": "Proxemics"
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
      "vc:value": "urn:visionclaw:concept:robotics:proxemics"
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
      "vc:value": "urn:visionclaw:concept:robotics:proxemics"
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
    "@id": "urn:visionflow:page:31e1f3bc8ed97c0da74e74840a69a48e03efab41c51a4d114054c7236dfa0448@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:proxemics",
  "@type": "Class",
  "label": "Proxemics",
  "definition": "Study and application of spatial relationships between humans and robots, including personal space, social distance, and comfort zones for effective human-robot interaction.",
  "domain": "robotics",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:robotics",
      "label": "Robotics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:proxemics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:31e1f3bc8ed97c0da74e74840a69a48e03efab41c51a4d114054c7236dfa0448"
  },
  "vc:resolutions": [
    {
      "raw": "[[HRI]]",
      "resolved": "urn:visionflow:linked:hri",
      "kind": "StubLink"
    },
    {
      "raw": "[[Robotics]]",
      "resolved": "urn:visionflow:owl:class:robotics",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[RoboticsDomain]]",
      "resolved": "urn:visionflow:owl:class:robotics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Social Robotics]]",
      "resolved": "urn:visionflow:owl:class:social-robotics",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:31e1f3bc8ed97c0da74e74840a69a48e03efab41c51a4d114054c7236dfa0448@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Study and application of spatial relationships between humans and robots, including personal space, social distance, and comfort zones for effective human-robot interaction.

- ### Semantic Classification
  - owl-class:: robotics:Proxemics
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Proxemics — content pending enrichment.

- ### Provenance
  - sources:: [[HRI]], [[Social Robotics]]
  - migration-date:: 2026-04-26T00:00:00Z
