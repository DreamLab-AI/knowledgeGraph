schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#GroupVsIndividualFairness
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:group-vs-individual-fairness
public:: true

# Group vs Individual Fairness
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083",
  "@type": "Page",
  "vc:slug": "group-vs-individual-fairness",
  "title": "Group vs Individual Fairness",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:barocas-et-al-2019",
      "vc:label": "Barocas et al. (2019)"
    },
    {
      "@id": "urn:visionflow:linked:dwork-et-al-2012",
      "vc:label": "Dwork et al. (2012)"
    },
    {
      "@id": "urn:visionflow:linked:hardt-et-al-2016",
      "vc:label": "Hardt et al. (2016)"
    },
    {
      "@id": "urn:visionflow:owl:class:aiethics-domain",
      "vc:label": "AIEthicsDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
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
      "vc:value": "sha256-12-a5ccb8cd620c"
    },
    {
      "vc:key": "context",
      "vc:value": "https://visionclaw.dreamlab-ai.systems/ns/v2"
    },
    {
      "vc:key": "created",
      "vc:value": "2025-10-29T00:00:00Z"
    },
    {
      "vc:key": "domain",
      "vc:value": "artificial-intelligence"
    },
    {
      "vc:key": "iri",
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#GroupVsIndividualFairness"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0383"
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
      "vc:value": "Group vs Individual Fairness"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:group-vs-individual-fairness"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:group-vs-individual-fairness"
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
    "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:visionflow:owl:class:group-vs-individual-fairness",
  "@type": "OntologyClass",
  "label": "Group vs Individual Fairness",
  "subClassOf": [
    {
      "@id": "urn:visionflow:owl:class:ai-ethics",
      "vc:label": "AI Ethics"
    }
  ],
  "vc:sourceDomain": "artificial-intelligence",
  "vc:status": "draft",
  "vc:maturity": "mature",
  "vc:definedIn": {
    "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083"
  },
  "vc:inferenceRule": "R5DomainRootFallback",
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  },
  "definition": "Group vs Individual Fairness represents two distinct paradigms for conceptualizing and operationalizing algorithmic fairness with fundamentally different units of analysis and philosophical foundations. Group Fairness operates at the aggregate level, requiring statistical parity across protected demographic groups such that prediction distributions, error rates, or outcome rates are similar across groups, formalized as P(Ŷ|A=a) being approximately equal for all protected group values a. This paradigm underlies metrics like demographic parity, equalized odds, and predictive parity, and aligns with legal frameworks focused on disparate impact and anti-discrimination compliance. In contrast, Individual Fairness operates at the person level, requiring that similar individuals receive similar predictions regardless of group membership, formalized through a fairness metric d(x₁,x₂) → d(f(x₁),f(f₂)) where the distance between predictions is bounded by the distance between individuals in a task-relevant similarity space. Group fairness is operationally straightforward requiring only protected attribute labels but may permit unfairness to individuals within groups, while individual fairness",
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
  "@id": "urn:visionflow:annotation:link-resolutions:group-vs-individual-fairness:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083"
  },
  "vc:resolutions": [
    {
      "raw": "[[Barocas et al. (2019)]]",
      "resolved": "urn:visionflow:linked:barocas-et-al-2019",
      "kind": "StubLink"
    },
    {
      "raw": "[[Dwork et al. (2012)]]",
      "resolved": "urn:visionflow:linked:dwork-et-al-2012",
      "kind": "StubLink"
    },
    {
      "raw": "[[Hardt et al. (2016)]]",
      "resolved": "urn:visionflow:linked:hardt-et-al-2016",
      "kind": "StubLink"
    },
    {
      "raw": "[[AIEthicsDomain]]",
      "resolved": "urn:visionflow:owl:class:aiethics-domain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:wasDerivedFrom": {
    "@id": "urn:visionflow:page:f7894d96e93c7725e6a95045aa27aa41a63a4f6d72475bf1a9ca46778e89e083@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Group vs Individual Fairness represents two distinct paradigms for conceptualizing and operationalizing algorithmic fairness with fundamentally different units of analysis and philosophical foundations. Group Fairness operates at the aggregate level, requiring statistical parity across protected demographic groups such that prediction distributions, error rates, or outcome rates are similar across groups, formalized as P(Ŷ|A=a) being approximately equal for all protected group values a. This paradigm underlies metrics like demographic parity, equalized odds, and predictive parity, and aligns with legal frameworks focused on disparate impact and anti-discrimination compliance. In contrast, Individual Fairness operates at the person level, requiring that similar individuals receive similar predictions regardless of group membership, formalized through a fairness metric d(x₁,x₂) → d(f(x₁),f(f₂)) where the distance between predictions is bounded by the distance between individuals in a task-relevant similarity space. Group fairness is operationally straightforward requiring only protected attribute labels but may permit unfairness to individuals within groups, while individual fairness provides stronger theoretical guarantees but requires defining task-appropriate similarity metrics that avoid encoding prohibited biases. The two paradigms are not necessarily compatible, as satisfying group fairness constraints does not guarantee individual fairness and vice versa, representing a fundamental tension in fair machine learning research explored by Dwork et al. (2012) and subsequent scholarship.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:GroupVsIndividualFairness
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  Group vs Individual Fairness — content pending enrichment.

- ### Provenance
  - sources:: [[Dwork et al. (2012)]], [[Hardt et al. (2016)]], [[Barocas et al. (2019)]]
  - migration-date:: 2026-04-26T00:00:00Z
