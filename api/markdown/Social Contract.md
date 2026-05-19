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
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "NGM-8003"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Social Contract"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
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
      "@id": "urn:ngm:class:infra-legal-and-regulatory",
      "label": "Legal and Regulatory"
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
