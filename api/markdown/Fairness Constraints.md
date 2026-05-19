public:: true

# Fairness Constraints
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4c44e64c482c158e3c33e90fb395229049753f0feffddd28956a93891274149b",
  "@type": "Page",
  "vc:slug": "fairness-constraints",
  "title": "Fairness Constraints",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:barocas-et-al-2019",
      "vc:label": "Barocas et al. (2019)"
    },
    {
      "@id": "urn:visionflow:linked:chouldechova-2017",
      "vc:label": "Chouldechova (2017)"
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
      "@id": "urn:visionflow:owl:class:blockchain",
      "vc:label": "Blockchain"
    },
    {
      "@id": "urn:visionflow:owl:class:conceptual-layer",
      "vc:label": "ConceptualLayer"
    },
    {
      "@id": "urn:visionflow:owl:class:digital-twin",
      "vc:label": "Digital Twin"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0382"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Fairness Constraints"
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
  "@id": "urn:ngm:class:fairness-constraints",
  "@type": "Class",
  "label": "Fairness Constraints",
  "definition": "Fairness Constraints are mathematical formalizations of equitable treatment in AI systems, expressed as conditions that predictions must satisfy relative to protected attributes.",
  "domain": "artificial-intelligence",
  "maturity": "established",
  "subClassOf": [
    {
      "@id": "urn:ngm:class:ai-governance-and-ethics",
      "label": "AI Governance and Ethics"
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
  "@id": "urn:visionflow:annotation:link-resolutions:fairness-constraints:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4c44e64c482c158e3c33e90fb395229049753f0feffddd28956a93891274149b"
  },
  "vc:resolutions": [
    {
      "raw": "[[Barocas et al. (2019)]]",
      "resolved": "urn:visionflow:linked:barocas-et-al-2019",
      "kind": "StubLink"
    },
    {
      "raw": "[[Chouldechova (2017)]]",
      "resolved": "urn:visionflow:linked:chouldechova-2017",
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
      "raw": "[[Blockchain]]",
      "resolved": "urn:visionflow:owl:class:blockchain",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[ConceptualLayer]]",
      "resolved": "urn:visionflow:owl:class:conceptual-layer",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Digital Twin]]",
      "resolved": "urn:visionflow:owl:class:digital-twin",
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
  - Fairness Constraints are mathematical formalizations of equitable treatment in AI systems, expressed as conditions that predictions must satisfy relative to protected attributes. These constraints are categorized into three fundamental types based on independence criteria: Independence (demographic parity) requires predictions to be independent of protected attributes (Ŷ ⊥ A), meaning P(Ŷ|A=0) = P(Ŷ|A=1); Separation (equalized odds) requires predictions to be independent of protected attributes conditional on true labels (Ŷ ⊥ A | Y), ensuring equal true positive and false positive rates across groups; and Sufficiency (predictive parity) requires true labels to be independent of protected attributes conditional on predictions (Y ⊥ A | Ŷ), ensuring equal precision and calibration across groups. These constraints formalize fairness concepts like demographic parity, equalized odds, equal opportunity (separation for positive class only), and calibration into optimization problems during model training. However, impossibility theorems (Chouldechova 2017, Kleinberg et al. 2017) prove that when base rates differ between groups, certain combinations of fairness constraints cannot be simultaneously satisfied, necessitating context-dependent tradeoffs. Implementation typically involves constrained optimization with Lagrange multipliers, where accuracy loss is balanced against fairness violations through tunable regularization parameters, as formalized in foundational research by Hardt et al. (2016) and Barocas et al. (2019).

- ### Semantic Classification
  - owl-class:: artificial-intelligence:FairnessConstraints
  - owl-role:: Process
  - owl-inferred:: ai:VirtualProcess
  - belongs-to-domain:: [[AIEthicsDomain]]
  - implemented-in-layer:: [[ConceptualLayer]]

- ### Relationships
  - <!-- No relationships defined -->
  - bridges-to:: [[Digital Twin]], [[Blockchain]]

- ### Content
  Fairness Constraints — content pending enrichment.

- ### Provenance
  - sources:: [[Hardt et al. (2016)]], [[Barocas et al. (2019)]], [[Chouldechova (2017)]]
  - migration-date:: 2026-04-26T00:00:00Z
