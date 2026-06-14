public:: true

# Information Theory
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:d993d2994544808be5c5f77ced5bb96f776af492f6788558fecf1fbeb528186f",
  "@type": "Page",
  "vc:slug": "information-theory",
  "title": "Information Theory",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:entropy",
      "vc:label": "Entropy"
    },
    {
      "@id": "urn:visionflow:linked:mutual-information",
      "vc:label": "Mutual Information"
    },
    {
      "@id": "urn:visionflow:linked:channel-capacity",
      "vc:label": "Channel Capacity"
    },
    {
      "@id": "urn:visionflow:linked:probability-theory",
      "vc:label": "Probability Theory"
    },
    {
      "@id": "urn:visionflow:linked:data-compression",
      "vc:label": "Data Compression"
    },
    {
      "@id": "urn:visionflow:linked:error-correcting-code",
      "vc:label": "Error Correcting Code"
    },
    {
      "@id": "urn:visionflow:linked:cryptography",
      "vc:label": "Cryptography"
    },
    {
      "@id": "urn:visionflow:linked:machine-learning",
      "vc:label": "Machine Learning"
    },
    {
      "@id": "urn:visionflow:linked:statistics",
      "vc:label": "Statistics"
    },
    {
      "@id": "urn:visionflow:linked:owl-thing",
      "vc:label": "owl:Thing"
    },
    {
      "@id": "urn:visionflow:linked:shannon-1948-a-mathematical-theory-of-communication",
      "vc:label": "Shannon 1948, A Mathematical Theory of Communication"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "preferred-term",
      "vc:value": "Information Theory"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:jjohare"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:information-theory",
  "@type": "Class",
  "label": "Information Theory",
  "definition": "Information Theory is the mathematical study of the quantification, storage and communication of information, founded by Claude Shannon in 1948. It introduces entropy as a measure of uncertainty in a random source and defines channel capacity, the maximum rate at which information can be transmitted reliably over a noisy channel. The theory underpins data compression, error-correcting codes and modern digital communication. It also connects to statistics, cryptography and machine learning through measures such as mutual information and Kullback-Leibler divergence.",
  "domain": "machine-learning",
  "maturity": "established",
  "qualityScore": 0.7,
  "subClassOf": [
    {
      "@id": "urn:ngm:class:owl-thing",
      "label": "owl:Thing"
    }
  ],
  "relations": {
    "hasPart": [
      {
        "@id": "urn:ngm:class:entropy",
        "label": "Entropy"
      },
      {
        "@id": "urn:ngm:class:mutual-information",
        "label": "Mutual Information"
      },
      {
        "@id": "urn:ngm:class:channel-capacity",
        "label": "Channel Capacity"
      }
    ],
    "requires": [
      {
        "@id": "urn:ngm:class:probability-theory",
        "label": "Probability Theory"
      }
    ],
    "enables": [
      {
        "@id": "urn:ngm:class:data-compression",
        "label": "Data Compression"
      },
      {
        "@id": "urn:ngm:class:error-correcting-code",
        "label": "Error Correcting Code"
      },
      {
        "@id": "urn:ngm:class:cryptography",
        "label": "Cryptography"
      }
    ]
  },
  "quality": 0.6,
  "provenance": {
    "attributedTo": "did:nostr:lcr-swarm",
    "generatedAt": "2026-05-29T00:00:00Z",
    "inferenceRule": "GapFillTier5"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:information-theory:8d89b1fc114f",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:d993d2994544808be5c5f77ced5bb96f776af492f6788558fecf1fbeb528186f"
  },
  "vc:resolutions": [
    {
      "raw": "[[Entropy]]",
      "resolved": "urn:visionflow:linked:entropy",
      "kind": "StubLink"
    },
    {
      "raw": "[[Mutual Information]]",
      "resolved": "urn:visionflow:linked:mutual-information",
      "kind": "StubLink"
    },
    {
      "raw": "[[Channel Capacity]]",
      "resolved": "urn:visionflow:linked:channel-capacity",
      "kind": "StubLink"
    },
    {
      "raw": "[[Probability Theory]]",
      "resolved": "urn:visionflow:linked:probability-theory",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Data Compression]]",
      "resolved": "urn:visionflow:linked:data-compression",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Error Correcting Code]]",
      "resolved": "urn:visionflow:linked:error-correcting-code",
      "kind": "StubLink"
    },
    {
      "raw": "[[Cryptography]]",
      "resolved": "urn:visionflow:linked:cryptography",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Machine Learning Discipline]]",
      "resolved": "urn:visionflow:linked:machine-learning",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Statistics]]",
      "resolved": "urn:visionflow:linked:statistics",
      "kind": "StubLink"
    },
    {
      "raw": "[[owl:Thing]]",
      "resolved": "urn:visionflow:linked:owl-thing",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Shannon 1948, A Mathematical Theory of Communication]]",
      "resolved": "urn:visionflow:linked:shannon-1948-a-mathematical-theory-of-communication",
      "kind": "StubLink"
    }
  ],
  "prov:wasAttributedTo": {
    "@id": "did:nostr:lcr-swarm"
  },
  "prov:generatedAtTime": {
    "@value": "2026-05-29T00:00:00Z",
    "@type": "xsd:dateTime"
  }
}
```


- ### Definition
  - Information Theory is the mathematical study of the quantification, storage and communication of information, founded by Claude Shannon in 1948. It introduces entropy as a measure of uncertainty in a random source and defines channel capacity, the maximum rate at which information can be transmitted reliably over a noisy channel. The theory underpins data compression, error-correcting codes and modern digital communication. It also connects to statistics, cryptography and machine learning through measures such as mutual information and Kullback-Leibler divergence.

- ### Semantic Classification
  - owl-class:: math:InformationTheory
  - owl-role:: Concept

- ### Relationships
  - is-subclass-of:: [[owl:Thing]]
  - bridges-to:: [[Machine Learning Discipline]], [[Statistics]]
  - has-part:: [[Entropy]], [[Mutual Information]], [[Channel Capacity]]
  - requires:: [[Probability Theory]]
  - enables:: [[Data Compression]], [[Error Correcting Code]], [[Cryptography]]

- ### Content
  - Information Theory addresses two central problems: how compactly a message source can be represented (source coding) and how reliably information can be sent across an imperfect channel (channel coding). Shannon's source coding theorem establishes that the entropy of a source sets a lower bound on the average number of bits needed to encode its symbols without loss.
  - The noisy channel coding theorem shows that, provided the transmission rate stays below the channel capacity, codes exist that make the error probability arbitrarily small. This result separated the design of compression and error correction and gave engineers concrete performance targets to approach with practical codes such as Reed-Solomon, turbo and LDPC codes.
  - Beyond communications, the framework supplies tools used throughout science and computing. Mutual information quantifies statistical dependence, relative entropy measures the cost of using a wrong probability model, and these quantities appear in feature selection, model evaluation and the analysis of learning algorithms.

- ### Provenance
  - sources:: [[Shannon 1948, A Mathematical Theory of Communication]]
  - migration-date:: 2026-05-29T00:00:00Z
