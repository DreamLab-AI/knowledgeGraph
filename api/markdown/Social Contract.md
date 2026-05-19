schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#SocialContract
legacy_uri:: urn:visionclaw:concept:infrastructure:social-contract
public:: true

# Social Contract
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:7838501f5cd34701a814d470651761ba3e48cabd08e2306e3725aa8290d0fe99",
  "@type": "Page",
  "vc:slug": "social-contract",
  "title": "Social Contract",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:civil-society",
      "vc:label": "Civil Society"
    },
    {
      "@id": "urn:visionflow:linked:constitutional-law",
      "vc:label": "Constitutional Law"
    },
    {
      "@id": "urn:visionflow:linked:political-philosophy",
      "vc:label": "Political Philosophy"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "Artificial Intelligence"
    },
    {
      "@id": "urn:visionflow:owl:class:democratic-governance",
      "vc:label": "Democratic Governance"
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
      "vc:value": "sha256-12-efb2705285f0"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#SocialContract"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-8003"
    },
    {
      "vc:key": "maturity",
      "vc:value": "reviewed"
    },
    {
      "vc:key": "modified",
      "vc:value": "2026-04-26T13:00:00Z"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Contract"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:social-contract"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:social-contract"
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
    "@id": "urn:visionflow:page:7838501f5cd34701a814d470651761ba3e48cabd08e2306e3725aa8290d0fe99@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:social-contract",
  "@type": "Class",
  "label": "Social Contract",
  "definition": "A philosophical and political theory positing that individuals consent, either explicitly or tacitly, to surrender certain freedoms and submit to authority in exchange for protection of their remaining rights and maintenance of social order.",
  "domain": "infrastructure",
  "maturity": "emerging",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:artificial-intelligence",
      "label": "Artificial Intelligence"
    }
  ],
  "relations": {
    "enables": [
      {
        "@id": "urn:ngm:class:civil-society",
        "label": "Civil Society"
      },
      {
        "@id": "urn:ngm:class:constitutional-law",
        "label": "Constitutional Law"
      },
      {
        "@id": "urn:ngm:class:democratic-governance",
        "label": "Democratic Governance"
      }
    ]
  },
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
  "@id": "urn:visionflow:annotation:link-resolutions:social-contract:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:7838501f5cd34701a814d470651761ba3e48cabd08e2306e3725aa8290d0fe99"
  },
  "vc:resolutions": [
    {
      "raw": "[[Civil Society]]",
      "resolved": "urn:visionflow:linked:civil-society",
      "kind": "StubLink"
    },
    {
      "raw": "[[Constitutional Law]]",
      "resolved": "urn:visionflow:linked:constitutional-law",
      "kind": "StubLink"
    },
    {
      "raw": "[[Political Philosophy]]",
      "resolved": "urn:visionflow:linked:political-philosophy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Artificial Intelligence]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Democratic Governance]]",
      "resolved": "urn:visionflow:owl:class:democratic-governance",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:7838501f5cd34701a814d470651761ba3e48cabd08e2306e3725aa8290d0fe99@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - A philosophical and political theory positing that individuals consent, either explicitly or tacitly, to surrender certain freedoms and submit to authority in exchange for protection of their remaining rights and maintenance of social order. The concept establishes that legitimate political authority derives from agreement among rational individuals rather than divine right or natural hierarchy.

- ### Semantic Classification
  - owl-class:: infrastructure:SocialContract
  - owl-role:: PhilosophicalConcept
  - belongs-to-domain:: [[Political Philosophy]]

- ### Relationships
  - is-subclass-of:: [[Artificial Intelligence]]
  - enables:: [[Democratic Governance]], [[Constitutional Law]], [[Civil Society]]

- ### Content
  Social Contract — content pending enrichment.

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
