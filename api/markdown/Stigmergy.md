schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/robotics#Stigmergy
legacy_uri:: urn:visionclaw:concept:robotics:stigmergy
public:: true

# Stigmergy
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419",
  "@type": "Page",
  "vc:slug": "stigmergy",
  "title": "Stigmergy",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:robotics-research",
      "vc:label": "Robotics Research"
    },
    {
      "@id": "urn:visionflow:linked:swarm-intelligence",
      "vc:label": "Swarm Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics",
      "vc:label": "Robotics"
    },
    {
      "@id": "urn:visionflow:owl:class:robotics-domain",
      "vc:label": "RoboticsDomain"
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
      "vc:value": "sha256-12-bdad63624a53"
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
      "vc:value": "http://narrativegoldmine.com/robotics#Stigmergy"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "RB-9005"
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
      "vc:value": "Stigmergy"
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
      "vc:value": "urn:visionclaw:concept:robotics:stigmergy"
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
      "vc:value": "urn:visionclaw:concept:robotics:stigmergy"
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
    "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:stigmergy",
  "@type": "OntologyClass",
  "label": "Stigmergy",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:swarm-robotics",
      "vc:label": "Swarm Robotics"
    }
  ],
  "vc:sourceDomain": "robotics",
  "vc:status": "draft",
  "vc:maturity": "emerging",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Indirect coordination mechanism in swarm robotics where agents communicate through environmental modifications, enabling emergent collective behavior without direct communication.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:stigmergy:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419"
  },
  "vc:resolutions": [
    {
      "raw": "[[Robotics Research]]",
      "resolved": "urn:visionflow:linked:robotics-research",
      "kind": "StubLink"
    },
    {
      "raw": "[[Swarm Intelligence]]",
      "resolved": "urn:visionflow:linked:swarm-intelligence",
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
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:a87e8403abbd843bfa0344b3c26f23f25105adf1774030d0b73d86c77acfa419@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Indirect coordination mechanism in swarm robotics where agents communicate through environmental modifications, enabling emergent collective behavior without direct communication.

- ### Semantic Classification
  - owl-class:: robotics:Stigmergy
  - owl-role:: Process
  - belongs-to-domain:: [[RoboticsDomain]]

- ### Relationships
  - is-subclass-of:: [[Robotics]]

- ### Content
  Stigmergy — content pending enrichment.

- ### Provenance
  - sources:: [[Swarm Intelligence]], [[Robotics Research]]
  - migration-date:: 2026-04-26T00:00:00Z
