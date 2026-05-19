schema_version:: 1
legacy_iri:: http://narrativegoldmine.com/artificial-intelligence#K-anonymityInDatasets
legacy_uri:: urn:visionclaw:concept:artificial-intelligence:k-anonymity-in-datasets
public:: true

# k-Anonymity in Datasets
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:22a3c57cc34b3d0ee443e5b6bdfae8f1a8086659731e3cc21303b1f047581faa",
  "@type": "Page",
  "vc:slug": "k-anonymity-in-datasets",
  "title": "k-Anonymity in Datasets",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:li-et-al-2007",
      "vc:label": "Li et al. (2007)"
    },
    {
      "@id": "urn:visionflow:linked:machanavajjhala-et-al-2007",
      "vc:label": "Machanavajjhala et al. (2007)"
    },
    {
      "@id": "urn:visionflow:linked:sweeney-2002",
      "vc:label": "Sweeney (2002)"
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
      "vc:value": "sha256-12-54af67443eb9"
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
      "vc:value": "http://narrativegoldmine.com/artificial-intelligence#K-anonymityInDatasets"
    },
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0421"
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
      "vc:value": "k-Anonymity in Datasets"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:k-anonymity-in-datasets"
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
      "vc:value": "urn:visionclaw:concept:artificial-intelligence:k-anonymity-in-datasets"
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
    "@id": "urn:visionflow:page:22a3c57cc34b3d0ee443e5b6bdfae8f1a8086659731e3cc21303b1f047581faa@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
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
  "@id": "urn:ngm:class:k-anonymity-in-datasets",
  "@type": "Class",
  "label": "k-Anonymity in Datasets",
  "definition": "k-Anonymity in Datasets is a privacy-preserving property ensuring that each record in a dataset is indistinguishable from at least k-1 other records with respect to quasi-identifiers (attributes that could potentially identify individuals when combined, such as age, gender, zip code), preventing ...",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:privacy-preserving-analytics",
      "label": "Privacy Preserving Analytics"
    }
  ],
  "quality": 0.35,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-18T07:12:05Z",
    "inferenceRule": "R5DomainRootFallback"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:k-anonymity-in-datasets:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:22a3c57cc34b3d0ee443e5b6bdfae8f1a8086659731e3cc21303b1f047581faa"
  },
  "vc:resolutions": [
    {
      "raw": "[[Li et al. (2007)]]",
      "resolved": "urn:visionflow:linked:li-et-al-2007",
      "kind": "StubLink"
    },
    {
      "raw": "[[Machanavajjhala et al. (2007)]]",
      "resolved": "urn:visionflow:linked:machanavajjhala-et-al-2007",
      "kind": "StubLink"
    },
    {
      "raw": "[[Sweeney (2002)]]",
      "resolved": "urn:visionflow:linked:sweeney-2002",
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
    "@id": "urn:visionflow:page:22a3c57cc34b3d0ee443e5b6bdfae8f1a8086659731e3cc21303b1f047581faa@776c802a9fc9058c7e99ea02bf84643a0b6cd2be"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-18T07:12:05Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - k-Anonymity in Datasets is a privacy-preserving property ensuring that each record in a dataset is indistinguishable from at least k-1 other records with respect to quasi-identifiers (attributes that could potentially identify individuals when combined, such as age, gender, zip code), preventing re-identification attacks by guaranteeing anonymity sets of at least size k. This technique achieves anonymization through generalization (replacing specific values with broader categories, such as exact age → age range [30-40], 5-digit zip code → 3-digit prefix) and suppression (removing or masking particularly identifying attribute values when generalization insufficient), producing equivalence classes where all records within a class share identical quasi-identifier values. The privacy guarantee states that for any record in the dataset, an adversary with knowledge of quasi-identifiers cannot distinguish the target individual from k-1 others, formalized as minimum group size ≥ k for all equivalence classes partitioned by quasi-identifiers. However, limitations include vulnerability to homogeneity attacks when sensitive attributes lack diversity within equivalence classes (all k individuals having same disease diagnosis still leaks information), background knowledge attacks leveraging external information to narrow anonymity sets, and composition attacks combining multiple published datasets to re-identify individuals despite each satisfying k-anonymity independently. Extensions addressing these limitations include l-diversity requiring each equivalence class to contain at least l distinct sensitive attribute values ensuring diversity beyond quasi-identifier indistinguishability, t-closeness requiring sensitive attribute distribution within each equivalence class to be close (within threshold t) to distribution in overall dataset preventing attribute disclosure through distribution differences, and δ-presence ensuring individuals' presence or absence in dataset cannot be determined with confidence exceeding δ. Implementation algorithms include Mondrian recursive partitioning of feature space creating balanced anonymization groups, Incognito bottom-up lattice traversal exploring generalization strategies, and μ-Argus specialized tool for statistical disclosure control in survey data, with typical parameter selections including k ≥ 5 minimum for meaningful privacy, k ≥ 10 recommended for sensitive data, l ≥ 2-3 for l-diversity, and t ≤ 0.2 for t-closeness applications.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:KAnonymityInDatasets
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->

- ### Content
  k-Anonymity in Datasets — content pending enrichment.

- ### Provenance
  - sources:: [[Sweeney (2002)]], [[Machanavajjhala et al. (2007)]], [[Li et al. (2007)]]
  - migration-date:: 2026-04-26T00:00:00Z
