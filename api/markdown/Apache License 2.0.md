public:: true

# Apache License 2.0
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:apache-license-2-0",
  "@type": "Page",
  "vc:slug": "apache-license-2-0",
  "title": "Apache License 2.0",
  "vc:public": true,
  "vc:outboundWikilinks": [],
  "vc:schemaVersion": 2
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/ns/v2.jsonld",
  "@id": "urn:ngm:class:apache-license-2-0",
  "@type": "Class",
  "label": "Apache License 2.0",
  "definition": "The Apache License 2.0 (AL2) is a permissive free and open-source software licence published by the Apache Software Foundation in 2004, allowing users to freely use, modify, distribute, and sublicence covered works in both open and proprietary contexts. It requires preservation of copyright notices and a NOTICE file but imposes no copyleft obligations on derivatives. Uniquely among major permissive licences, AL2 includes an explicit patent grant and a patent retaliation clause that terminates rights upon initiation of patent litigation against the licensor.",
  "domain": "governance",
  "maturity": "mature",
  "subClassOf": [{"@id": "urn:ngm:class:intellectual-property-licence-instrument", "label": "license"}],
  "relations": {
    "enables": [
      {"@id": "urn:ngm:class:open-source-software", "label": "Open Source Software"},
      {"@id": "urn:ngm:class:open-source-development", "label": "Open Source Development"}
    ],
    "supports": [
      {"@id": "urn:ngm:class:open-source-ai", "label": "Open-Source AI"},
      {"@id": "urn:ngm:class:open-source-framework", "label": "Open Source Framework"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:licensing-requirements", "label": "Licensing Requirements"},
      {"@id": "urn:ngm:class:compliance", "label": "Compliance"}
    ]
  },
  "quality": 0.8
}
```

- ### Definition
  - The [[Apache License 2.0]] is a permissive [[Open Source Software]] licence that grants broad freedoms to use, copy, modify, and distribute software under its terms, with minimal obligations for downstream recipients. It differs from copyleft licences by not requiring that derivative works be released under the same terms, making it attractive for commercial adoption. Its explicit patent licence grant and termination clause are distinctive legal features that protect contributors from patent aggression.

- ### Relationships
  - The Apache License 2.0 enables [[Open Source Development]] and [[Open Source Software]] by providing a legally clear framework for contribution and redistribution. It actively supports [[Open-Source AI]] projects and [[Open Source Framework]] releases where commercial integration must remain unrestricted. It interacts with [[Licensing Requirements]] and organisational [[Compliance]] processes, particularly when combining AL2 software with GPL-licensed components, where compatibility constraints must be assessed.

- ### Content
  - The Apache Software Foundation first published version 1.0 of its licence in 1995, primarily to govern the Apache HTTP Server project. Version 2.0, released in January 2004, represented a substantial revision aimed at addressing GPLv2 compatibility concerns and codifying patent protection explicitly. The Free Software Foundation subsequently declared AL2 compatible with GPLv3, though not with GPLv2, a distinction that continues to shape open-source dependency management.

  - The licence's legal architecture rests on two key provisions beyond standard permissive terms: a perpetual, royalty-free patent licence from each contributor covering patent claims necessarily infringed by their contribution, and an automatic termination of all rights granted under the licence if the licensee initiates patent litigation asserting that the covered work infringes a patent. This makes AL2 more hostile to patent aggression than MIT or BSD licences while retaining permissive redistribution freedoms.

  - The AL2 dominates the enterprise open-source ecosystem, governing flagship projects including Kubernetes, Apache Kafka, TensorFlow (prior to portions moving to other licences), and the Rust programming language's standard library. It is the default licence recommended by the Apache Software Foundation for all its projects and has become a reference standard in cloud-native software stacks. Many AI model releases in 2023–2025, including Meta's Llama variants with additional use-policy riders, adopted AL2 as their base licence.

  - In the 2024–2025 period, AL2 has featured prominently in discussions around AI model licensing as organisations attempt to apply open-source frameworks to model weights and datasets. Its patent grant clauses have attracted particular scrutiny, as the legal status of AI model weights relative to patent law remains unsettled. Open-source AI advocates cite AL2's permissive commercial use provisions as critical to enabling a competitive ecosystem of fine-tuned model derivatives.