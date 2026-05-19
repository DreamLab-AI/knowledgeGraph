schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/spatial-computing#SoftBodyDynamics
legacy_uri:: urn:visionclaw:concept:spatial-computing:soft-body-dynamics
public:: true

# Soft Body Dynamics
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:cdbcc3f538d5723c60a9aa2ce722af2f817d76527aeb21ad7425fe85e1d6f664",
  "@type": "Page",
  "vc:slug": "soft-body-dynamics",
  "title": "Soft Body Dynamics",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:game-physics",
      "vc:label": "Game Physics"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    },
    {
      "@id": "urn:visionflow:owl:class:metaverse-domain",
      "vc:label": "MetaverseDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:physics-engine",
      "vc:label": "Physics Engine"
    }
  ],
  "vc:schemaVersion": 1,
  "vc:legacyProperties": [
    {
      "vc:key": "author-did",
      "vc:value": ""
    },
    {
      "vc:key": "authority-score",
      "vc:value": "0.00"
    },
    {
      "vc:key": "content-hash",
      "vc:value": "sha256-12-81b4a4388619"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "contributors",
      "vc:value": ""
    },
    {
      "vc:key": "created",
      "vc:value": "2026-04-26T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "spatial-computing"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/spatial-computing#SoftBodyDynamics"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "MV-9005"
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
      "vc:value": "Soft Body Dynamics"
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:soft-body-dynamics"
    },
    {
      "vc:key": "signature",
      "vc:value": ""
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
      "vc:value": "urn:visionclaw:concept:spatial-computing:soft-body-dynamics"
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
    "@id": "urn:visionflow:page:cdbcc3f538d5723c60a9aa2ce722af2f817d76527aeb21ad7425fe85e1d6f664@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:soft-body-dynamics",
  "@type": "OntologyClass",
  "label": "Soft Body Dynamics",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:metaverse",
      "vc:label": "Metaverse"
    }
  ],
  "vc:sourceDomain": "spatial-computing",
  "vc:status": "draft",
  "vc:maturity": "emerging",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:cdbcc3f538d5723c60a9aa2ce722af2f817d76527aeb21ad7425fe85e1d6f664"
  },
  "vc:inferenceRule": "R1Explicit",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:cdbcc3f538d5723c60a9aa2ce722af2f817d76527aeb21ad7425fe85e1d6f664@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Physics simulation of deformable objects like cloth, flesh, or elastic materials, modeling realistic deformation and dynamic behavior in virtual environments.",
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
  "@id": "urn:visionflow:annotation:link-resolutions:soft-body-dynamics:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:cdbcc3f538d5723c60a9aa2ce722af2f817d76527aeb21ad7425fe85e1d6f664"
  },
  "vc:resolutions": [
    {
      "raw": "[[Game Physics]]",
      "resolved": "urn:visionflow:linked:game-physics",
      "kind": "StubLink"
    },
    {
      "raw": "[[Metaverse]]",
      "resolved": "urn:visionflow:owl:class:metaverse",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[MetaverseDomain]]",
      "resolved": "urn:visionflow:owl:class:metaverse-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Physics Engine]]",
      "resolved": "urn:visionflow:owl:class:physics-engine",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:cdbcc3f538d5723c60a9aa2ce722af2f817d76527aeb21ad7425fe85e1d6f664@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Physics simulation of deformable objects like cloth, flesh, or elastic materials, modeling realistic deformation and dynamic behavior in virtual environments.

- ### Semantic Classification
  - owl-class:: spatial-computing:SoftBodyDynamics
  - owl-role:: Process
  - belongs-to-domain:: [[MetaverseDomain]]

- ### Relationships
  - is-subclass-of:: [[Metaverse]]

- ### Content
  Soft Body Dynamics — content pending enrichment.

- ### Provenance
  - sources:: [[Physics Engine]], [[Game Physics]]
  - migration-date:: 2026-04-26T00:00:00Z
