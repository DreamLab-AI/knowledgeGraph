schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/infrastructure#DistributedWork
legacy_uri:: urn:visionclaw:concept:infrastructure:distributed-work
public:: true

# Distributed Work
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:eab65b892f4488a0480697446b05573615bd2bdcd88ffb23446518592d0a4aa2",
  "@type": "Page",
  "vc:slug": "distributed-work",
  "title": "Distributed Work",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
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
      "vc:value": "sha256-12-28fbe0f73c4b"
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
      "vc:value": "http://narrativegoldmine.com/infrastructure#DistributedWork"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "TC-9013"
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
      "vc:value": "Distributed Work"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:distributed-work"
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
      "vc:value": "urn:visionclaw:concept:infrastructure:distributed-work"
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
    "@id": "urn:visionflow:page:eab65b892f4488a0480697446b05573615bd2bdcd88ffb23446518592d0a4aa2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:distributed-work",
  "@type": "OntologyClass",
  "label": "Distributed Work",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:infrastructure",
      "vc:label": "infrastructure"
    }
  ],
  "vc:sourceDomain": "infrastructure",
  "vc:status": "draft",
  "vc:maturity": "draft",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:eab65b892f4488a0480697446b05573615bd2bdcd88ffb23446518592d0a4aa2"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:eab65b892f4488a0480697446b05573615bd2bdcd88ffb23446518592d0a4aa2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Distributed Work is a technology infrastructure concept and a type of infrastructure.",
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
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    }
  ]
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:distributed-work:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:eab65b892f4488a0480697446b05573615bd2bdcd88ffb23446518592d0a4aa2"
  },
  "vc:resolutions": [
    {
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:eab65b892f4488a0480697446b05573615bd2bdcd88ffb23446518592d0a4aa2@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - DistributedWork is a concept within the ngm domain.

- ### Semantic Classification
  - owl-class:: infrastructure:DistributedWork
  - owl-role:: Concept

- ### Relationships
  - <!-- No relationships defined -->

  - bridges-to:: [[Blockchain]] (bc)
- ### Content

  ## Definition

  Distributed Work represents organizational models, practices, and technologies enabling geographically dispersed teams to collaborate effectively while maintaining productivity, cohesion, and work-life balance. This paradigm encompasses remote work, hybrid work, asynchronous collaboration, and globally distributed teams coordinating across time zones. Foundational concepts include communication protocols (meeting schedules, response time expectations), documentation practices (wikis, decision logs, architectural decision records), and cultural norms (transparency, autonomy, results orientation). Technology enablers include collaboration platforms integrating video conferencing and project management, asynchronous communication tools prioritizing thoughtful responses over immediate replies, and virtual workspace environments providing spatial context for remote presence. Management approaches employ objectives and key results (OKRs) for goal alignment, agile methodologies adapted for distributed contexts, and data-driven productivity analytics balanced with employee privacy. Modern implementations leverage AI meeting assistants automating summaries and action items, digital twins of physical offices for hybrid coordination, and metaverse workspaces combining social presence with functional productivity tools. The future of distributed work integrates brain-computer interfaces for enhanced communication bandwidth, holographic telepresence for lifelike remote interaction, and ambient computing seamlessly blending physical and digital workspaces.

  #### References
  - MIT Center for Collective Intelligence. (2024). "Research on Distributed Team Performance." https://cci.mit.edu/
  - GitLab. (2024). "Remote Work Handbook and Best Practices." https://about.gitlab.com/company/culture/all-remote/
  - Harvard Business Review. (2024). "The Future of Distributed Work." https://hbr.org/
  - ACM CSCW. (2024). "Computer-Supported Cooperative Work in Distributed Settings." https://cscw.acm.org/
  - World Economic Forum. (2024). "Global Workforce Transformation and Distributed Work." https://www.weforum.org/

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
