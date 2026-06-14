public:: true
alias:: SemanticSegmentation

# Semantic Segmentation
```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:page:4f84fc9c80488ecbbcd8c62cbed893c0aeb77a39a224d979a5a2afdb3e16eea3",
  "@type": "Page",
  "vc:slug": "semantic-segmentation",
  "title": "Semantic Segmentation",
  "vc:public": true,
  "vc:outboundWikilinks": [
    {
      "@id": "urn:visionflow:linked:costigan2018world",
      "vc:label": "costigan2018world"
    },
    {
      "@id": "urn:visionflow:linked:solid-lite",
      "vc:label": "Solid-Lite"
    },
    {
      "@id": "urn:visionflow:owl:class:artificial-intelligence",
      "vc:label": "ArtificialIntelligenceDomain"
    },
    {
      "@id": "urn:visionflow:owl:class:computer-vision",
      "vc:label": "Computer Vision"
    },
    {
      "@id": "urn:visionflow:owl:class:instance-segmentation",
      "vc:label": "Instance Segmentation"
    },
    {
      "@id": "urn:visionflow:owl:class:nostr-protocol",
      "vc:label": "Nostr protocol"
    },
    {
      "@id": "urn:visionflow:owl:class:panoptic-segmentation",
      "vc:label": "Panoptic Segmentation"
    },
    {
      "@id": "urn:visionflow:owl:class:semantic-web",
      "vc:label": "Semantic Web"
    },
    {
      "@id": "urn:visionflow:owl:class:semantic-web",
      "vc:label": "semanticWeb"
    },
    {
      "@id": "urn:visionflow:owl:class:solid",
      "vc:label": "Solid"
    }
  ],
  "vc:schemaVersion": 2,
  "vc:legacyProperties": [
    {
      "vc:key": "legacy-term-id",
      "vc:value": "AI-0359"
    },
    {
      "vc:key": "preferred-term",
      "vc:value": "Semantic Segmentation"
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
  "@id": "urn:ngm:class:semantic-segmentation",
  "@type": "Class",
  "label": "Semantic Segmentation",
  "definition": "Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Architectures such as FCN, U-Net, and DeepLab produce dense pixel-wise predictions enabling scene understanding in autonomous driving, medical imaging, and satellite analysis.",
  "domain": "artificial-intelligence",
  "maturity": "emerging",
  "subClassOf": {
    "@id": "urn:ngm:class:computer-vision",
    "label": "Computer Vision"
  },
  "relations": {
    "partOf": [
      {"@id": "urn:ngm:class:computer-vision", "label": "Computer Vision"},
      {"@id": "urn:ngm:class:image-understanding", "label": "Image Understanding"}
    ],
    "hasPart": [
      {"@id": "urn:ngm:class:pixel-classification", "label": "Pixel Classification"},
      {"@id": "urn:ngm:class:feature-extraction", "label": "Feature Extraction"},
      {"@id": "urn:ngm:class:encoder-decoder-architecture", "label": "Encoder-Decoder Architecture"}
    ],
    "requires": [
      {"@id": "urn:ngm:class:convolutional-neural-network", "label": "Convolutional Neural Network"},
      {"@id": "urn:ngm:class:annotated-training-data", "label": "Annotated Training Data"},
      {"@id": "urn:ngm:class:gpu-computing", "label": "GPU Computing"}
    ],
    "enables": [
      {"@id": "urn:ngm:class:scene-understanding", "label": "Scene Understanding"},
      {"@id": "urn:ngm:class:autonomous-driving", "label": "Autonomous Driving"},
      {"@id": "urn:ngm:class:medical-image-analysis", "label": "Medical Image Analysis"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"},
      {"@id": "urn:ngm:class:augmented-reality", "label": "Augmented Reality"}
    ],
    "uses": [
      {"@id": "urn:ngm:class:deep-learning", "label": "Deep Learning"},
      {"@id": "urn:ngm:class:transfer-learning", "label": "Transfer Learning"},
      {"@id": "urn:ngm:class:attention-mechanism", "label": "Attention Mechanism"}
    ],
    "contrastsWith": [
      {"@id": "urn:ngm:class:instance-segmentation", "label": "Instance Segmentation"},
      {"@id": "urn:ngm:class:panoptic-segmentation", "label": "Panoptic Segmentation"},
      {"@id": "urn:ngm:class:object-detection", "label": "Object Detection"}
    ],
    "relatedTo": [
      {"@id": "urn:ngm:class:image-segmentation", "label": "Image Segmentation"},
      {"@id": "urn:ngm:class:point-cloud-segmentation", "label": "Point Cloud Segmentation"}
    ],
    "bridgesTo": [
      {"@id": "urn:ngm:class:spatial-computing", "label": "Spatial Computing"},
      {"@id": "urn:ngm:class:robotics-perception", "label": "Robotics Perception"}
    ]
  },
  "sameAs": [
    {"@id": "urn:ngm:class:dense-prediction", "label": "Dense Prediction"},
    {"@id": "urn:ngm:class:pixel-wise-classification", "label": "Pixel-Wise Classification"}
  ],
  "quality": 0.65,
  "provenance": {
    "attributedTo": "did:nostr:ontology-mesh",
    "generatedAt": "2026-06-14T00:00:00Z",
    "inferenceRule": "RelationEnrichment"
  }
}
```

```json-ld
{
  "@context": "https://narrativegoldmine.com/context/v1.jsonld",
  "@id": "urn:visionflow:annotation:link-resolutions:semantic-segmentation:776c802a9fc9",
  "@type": "vc:LinkResolutionsAnnotation",
  "vc:appliesTo": {
    "@id": "urn:visionflow:page:4f84fc9c80488ecbbcd8c62cbed893c0aeb77a39a224d979a5a2afdb3e16eea3"
  },
  "vc:resolutions": [
    {
      "raw": "[[costigan2018world]]",
      "resolved": "urn:visionflow:linked:costigan2018world",
      "kind": "StubLink"
    },
    {
      "raw": "[[Solid-Lite]]",
      "resolved": "urn:visionflow:linked:solid-lite",
      "kind": "StubLink"
    },
    {
      "raw": "[[ArtificialIntelligenceDomain]]",
      "resolved": "urn:visionflow:owl:class:artificial-intelligence",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Computer Vision]]",
      "resolved": "urn:visionflow:owl:class:computer-vision",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Instance Segmentation]]",
      "resolved": "urn:visionflow:owl:class:instance-segmentation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Nostr protocol]]",
      "resolved": "urn:visionflow:owl:class:nostr-protocol",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Panoptic Segmentation]]",
      "resolved": "urn:visionflow:owl:class:panoptic-segmentation",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Semantic Web Linked Data Standard]]",
      "resolved": "urn:visionflow:owl:class:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[semanticWeb]]",
      "resolved": "urn:visionflow:owl:class:semantic-web",
      "kind": "ResolvedLink"
    },
    {
      "raw": "[[Solid]]",
      "resolved": "urn:visionflow:owl:class:solid",
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
  - Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Semantic segmentation networks (FCN, U-Net, DeepLab) produce dense pixel-wise predictions enabling scene understanding applications in medical imaging, autonomous driving, and satellite imagery analysis.

- ### Semantic Classification
  - owl-class:: artificial-intelligence:SemanticSegmentation
  - owl-role:: Concept
  - belongs-to-domain:: [[ArtificialIntelligenceDomain]]

- ### Relationships
  - partOf [[Computer Vision]]
  - contrastsWith [[Instance Segmentation]]
  - contrastsWith [[Panoptic Segmentation]]
  - enables [[Scene Understanding]]
  - enables [[Object Detection]]

- ### Content
  - Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Semantic segmentation networks (FCN, U-Net, DeepLab) produce dense pixel-wise predictions enabling scene understanding applications in medical imaging, autonomous driving, and satellite imagery analysis.

  - ## Semantic web
		- The [[Semantic Web Linked Data Standard]] definition of Web3.0 has been somewhat overhauled by other innovations in decentralised internet technologies, now evolving toward the slightly different Web3 moniker. Tim Berners Lee (of WWW fame) first mentioned the semantic web in 1999 \[[2]
		- "I have a dream for the Web \[in which computers\] become capable of analyzing all the data on the Web -- the content, links, and transactions between people and computers. A \"Semantic Web\", which makes this possible, has yet to emerge, but when it does, the day-to-day mechanisms of trade, bureaucracy and our daily lives will be handled by machines talking to machines. The \"intelligent agents\" people have touted for ages will finally materialize."
		  Attention developed around three core themes, ubiquitous availability and searchability of data, intelligent search assistants, and highly available end points such as phones, and 'internet of things' devices. This is certainly manifesting in home devices, but few people think of this as a Web3 revolution. Since ratification of the standards by the [World Wide Web (W3C) consortium](https://www.w3.org/standards/semanticweb/) it seems that their imperative toward decentralisation has become lost. Instead, it can be seen that Facebook, Amazon, Google, and Apple have a harmful oligopoly on users data \[[3](https://arxiv.org/html/2207.09460v11/#bib.bibx3)\]. This is at odds with Berners-Lee's vision, and he has recently [spoken out about this discrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/), and attempted to [refocus the media](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html) onto Web3.0.
		- It is worth taking a look at his software implementation called [[Solid]], which is far more mindful of the sovereignty of user data.
		- Excitement around this kind of differentiated trust model, hinted at in ubiquitous availability of data (and implemented explicitly in Solid), has led to exploration of different paths by cryptographers, and this will be described later. For instance, one of the developers of Solid, [Carvelho](https://github.com/melvincarvalho/), is now a leading developer and prepotent of [[Solid-Lite]] and [[Nostr protocol]] , another very interesting option. This technology space is prolific, but still comparatively young and small.

			- ## In flight checks
				- This is mid-point review text of a partial conversion, showing the level of understanding from the online LLM
				- ```The updated Linked JSON document looks great! It effectively captures the nuances, features, and links from the original OWL ontology while adhering to the Linked JSON schema. Let's review the key aspects:
				   Context and Namespace:
				   The "@context" object is included at the beginning of the document, defining the namespaces and prefixes used throughout the document.
				   The "http://www.narrativegoldmine.com#" namespace is consistently used for all entities and properties.
				   The "http://linkedjson.org/vocab#" namespace is used for Linked JSON-specific terms.
				   Class Definitions:
				   All the classes from the OWL ontology are properly converted to JSON objects with the correct "@id" and "@type" keys.
				   The class hierarchies and subclass relationships are maintained using the "rdfs:subClassOf" property.
				   The "rdfs:label" and "rdfs:comment" properties provide human-readable labels and descriptions for the classes.
				   Property Definitions:
				   The object properties and data properties are properly converted to JSON objects with the correct "@id" and "@type" keys.
				   The "rdfs:domain" and "rdfs:range" properties specify the source and target types of each property, preserving the property semantics.
				   Relationships and Linkages:
				   The document includes relationships and linkages between entities using the appropriate "@id" references.
				   For example, the "governedBy" property connects the "MetaverseScene" class to the "GovernanceStructure" class, and the "hasPolicy" property links the "MetaverseScene" class to the "MetaversePolicy" class.
				   External Ontologies:
				   References to external ontologies and vocabularies, such as Schema.org and FOAF, are maintained using the correct "@id" references.
				   This ensures proper linking and interoperability with existing semantic web resources.
				   Axioms and Restrictions:
				   The "Axioms and Restrictions" section is included in the document, capturing important constraints and relationships from the OWL ontology.
				   The "_:N3649afbbaf7d4546a49d4097059d55f4" blank node represents the "owl:AllDisjointClasses" axiom, specifying that the "AIAgent" and "HumanAgent" classes are disjoint.
				   The "DigitalAsset" class has a subclass axiom with an "owl:Restriction" that constrains the "hasOwner" property, specifying that a "DigitalAsset" must have exactly one owner.
				   The "MetaverseAgent", "MetaverseScene", and "VirtualEconomy" classes have subclass axioms with existential restrictions using "owl:someValuesFrom" to specify the expected relationships and constraints.
				   Structure and Organization:
				   The document follows a logical structure, starting with the context and ontology metadata, followed by class definitions, property definitions, and axioms and restrictions.
				   This structure enhances readability and maintainability of the Linked JSON document.
				   Consistent Use of Linked JSON Terms:
				   The document consistently uses Linked JSON-specific terms, such as "linkedjson:Class", "linkedjson:ObjectProperty", and "linkedjson:DatatypeProperty", to differentiate them from the original OWL terms.
				   This clarity helps in understanding that the document is referencing the Linked JSON schema and not just using OWL labels.
				   Overall, the converted Linked JSON document successfully represents the metaverse ontology, capturing the key elements, relationships, and constraints from the original OWL ontology. The use of Linked JSON-specific terms and the inclusion of the "Axioms and Restrictions" section further enhance the semantic expressiveness and ensure the integrity of the ontology.

				   The document is well-structured, consistent, and adheres to the Linked JSON principles, making it suitable for use in semantic web applications and data integration scenarios.
				  ```

  - ## Semantic web
		- The [[Semantic Web Linked Data Standard]] definition of Web3.0 has been somewhat overhauled by other innovations in decentralised internet technologies, now evolving toward the slightly different Web3 moniker. Tim Berners Lee (of WWW fame) first mentioned the semantic web in 1999 \[[2]
		- "I have a dream for the Web \[in which computers\] become capable of analyzing all the data on the Web -- the content, links, and transactions between people and computers. A \"Semantic Web\", which makes this possible, has yet to emerge, but when it does, the day-to-day mechanisms of trade, bureaucracy and our daily lives will be handled by machines talking to machines. The \"intelligent agents\" people have touted for ages will finally materialize."
		  Attention developed around three core themes, ubiquitous availability and searchability of data, intelligent search assistants, and highly available end points such as phones, and 'internet of things' devices. This is certainly manifesting in home devices, but few people think of this as a Web3 revolution. Since ratification of the standards by the [World Wide Web (W3C) consortium](https://www.w3.org/standards/semanticweb/) it seems that their imperative toward decentralisation has become lost. Instead, it can be seen that Facebook, Amazon, Google, and Apple have a harmful oligopoly on users data \[[3](https://arxiv.org/html/2207.09460v11/#bib.bibx3)\]. This is at odds with Berners-Lee's vision, and he has recently [spoken out about this discrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/), and attempted to [refocus the media](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html) onto Web3.0.
		- It is worth taking a look at his software implementation called [[Solid]], which is far more mindful of the sovereignty of user data.
		- Excitement around this kind of differentiated trust model, hinted at in ubiquitous availability of data (and implemented explicitly in Solid), has led to exploration of different paths by cryptographers, and this will be described later. For instance, one of the developers of Solid, [Carvelho](https://github.com/melvincarvalho/), is now a leading developer and prepotent of [[Solid-Lite]] and [[Nostr protocol]] , another very interesting option. This technology space is prolific, but still comparatively young and small.

			- ## In flight checks
				- This is mid-point review text of a partial conversion, showing the level of understanding from the online LLM
				- ```The updated Linked JSON document looks great! It effectively captures the nuances, features, and links from the original OWL ontology while adhering to the Linked JSON schema. Let's review the key aspects:
				   Context and Namespace:
				   The "@context" object is included at the beginning of the document, defining the namespaces and prefixes used throughout the document.
				   The "http://www.narrativegoldmine.com#" namespace is consistently used for all entities and properties.
				   The "http://linkedjson.org/vocab#" namespace is used for Linked JSON-specific terms.
				   Class Definitions:
				   All the classes from the OWL ontology are properly converted to JSON objects with the correct "@id" and "@type" keys.
				   The class hierarchies and subclass relationships are maintained using the "rdfs:subClassOf" property.
				   The "rdfs:label" and "rdfs:comment" properties provide human-readable labels and descriptions for the classes.
				   Property Definitions:
				   The object properties and data properties are properly converted to JSON objects with the correct "@id" and "@type" keys.
				   The "rdfs:domain" and "rdfs:range" properties specify the source and target types of each property, preserving the property semantics.
				   Relationships and Linkages:
				   The document includes relationships and linkages between entities using the appropriate "@id" references.
				   For example, the "governedBy" property connects the "MetaverseScene" class to the "GovernanceStructure" class, and the "hasPolicy" property links the "MetaverseScene" class to the "MetaversePolicy" class.
				   External Ontologies:
				   References to external ontologies and vocabularies, such as Schema.org and FOAF, are maintained using the correct "@id" references.
				   This ensures proper linking and interoperability with existing semantic web resources.
				   Axioms and Restrictions:
				   The "Axioms and Restrictions" section is included in the document, capturing important constraints and relationships from the OWL ontology.
				   The "_:N3649afbbaf7d4546a49d4097059d55f4" blank node represents the "owl:AllDisjointClasses" axiom, specifying that the "AIAgent" and "HumanAgent" classes are disjoint.
				   The "DigitalAsset" class has a subclass axiom with an "owl:Restriction" that constrains the "hasOwner" property, specifying that a "DigitalAsset" must have exactly one owner.
				   The "MetaverseAgent", "MetaverseScene", and "VirtualEconomy" classes have subclass axioms with existential restrictions using "owl:someValuesFrom" to specify the expected relationships and constraints.
				   Structure and Organization:
				   The document follows a logical structure, starting with the context and ontology metadata, followed by class definitions, property definitions, and axioms and restrictions.
				   This structure enhances readability and maintainability of the Linked JSON document.
				   Consistent Use of Linked JSON Terms:
				   The document consistently uses Linked JSON-specific terms, such as "linkedjson:Class", "linkedjson:ObjectProperty", and "linkedjson:DatatypeProperty", to differentiate them from the original OWL terms.
				   This clarity helps in understanding that the document is referencing the Linked JSON schema and not just using OWL labels.
				   Overall, the converted Linked JSON document successfully represents the metaverse ontology, capturing the key elements, relationships, and constraints from the original OWL ontology. The use of Linked JSON-specific terms and the inclusion of the "Axioms and Restrictions" section further enhance the semantic expressiveness and ensure the integrity of the ontology.

				   The document is well-structured, consistent, and adheres to the Linked JSON principles, making it suitable for use in semantic web applications and data integration scenarios.
				  ```

  - ## Semantic web
		- The [[Semantic Web Linked Data Standard]] definition of Web3.0 has been somewhat overhauled by other innovations in decentralised internet technologies, now evolving toward the slightly different Web3 moniker. Tim Berners Lee (of WWW fame) first mentioned the semantic web in 1999 \[[2]
		- "I have a dream for the Web \[in which computers\] become capable of analyzing all the data on the Web -- the content, links, and transactions between people and computers. A \"Semantic Web\", which makes this possible, has yet to emerge, but when it does, the day-to-day mechanisms of trade, bureaucracy and our daily lives will be handled by machines talking to machines. The \"intelligent agents\" people have touted for ages will finally materialize."
		  Attention developed around three core themes, ubiquitous availability and searchability of data, intelligent search assistants, and highly available end points such as phones, and 'internet of things' devices. This is certainly manifesting in home devices, but few people think of this as a Web3 revolution. Since ratification of the standards by the [World Wide Web (W3C) consortium](https://www.w3.org/standards/semanticweb/) it seems that their imperative toward decentralisation has become lost. Instead, it can be seen that Facebook, Amazon, Google, and Apple have a harmful oligopoly on users data \[[3](https://arxiv.org/html/2207.09460v11/#bib.bibx3)\]. This is at odds with Berners-Lee's vision, and he has recently [spoken out about this discrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/), and attempted to [refocus the media](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html) onto Web3.0.
  - More recently Web3 is [being touted](https://trends.google.com/trends/explore?date=all&q=web3) as a way to connect content creators directly to content consumers, without centralised companies acting as gatekeepers of the data. It implies that all users have a cryptographic key management system, to which they attach metadata, that they make requirements of peers with whom they communicate, and that they maintain trust 'scores' with peers.
  - It seems likely that this new model is less driven by a market need, and more by the high availability of tools which allow this to happen (the ecosystems described later). Add to this a social response to the [collapse in trust of companies such as Facebook](https://finance.yahoo.com/news/meta-facebook-worst-company-of-the-year-yahoo-finance-165345819.html) and other [social media platforms](https://reb00ted.org/tech/20220727-end-of-social-networking/)\[[4](https://arxiv.org/html/2207.09460v11/#bib.bibx4)\] (Figure [2.2](https://arxiv.org/html/2207.09460v11/#Ch2.F2 "Figure 2.2 ‣ 2.3 Web3 ‣ Chapter 2 Decentralisation & The Web ‣ Part I State of the art")). There is perhaps a wish by consumers to pass more of the economic incentive to content creators, without the 'rent seeking' layer afforded by businesses, and a healthy dose of mania driven market speculation. [Edelman's latest trust report](https://www.edelman.co.uk/sites/g/files/aatuss301/files/2022-01/2022%20Edelman%20Trust%20Barometer_UK.pdf) is shocking, finding that trust in all institutions has slumped recently to all time lows, and their global survey found that: ["Nearly 6 in 10 say their default tendency is to distrust something until they see evidence it is trustworthy. Another 64% say it's now to a point where people are incapable of having constructive and civil debates about issues they disagree on. When distrust is the default -- we lack the ability to debate or collaborate."] 
	  ![Figure 2.2: [Edelman 2020 trust barometer](https://www.edelman.com/trust/2020-trust-barometer) \[rights requested\]](../assets/c-a-e.jpg)

  - ### Notion
		- {{video https://www.youtube.com/watch?v=WnZR7RPH8sA}}

  - ### Logseq

  - ## Obsidian

  - ## The common thread
  - Overall then, perhaps the space is hype, and is certainly [rife with scams](https://web3isgoinggreat.com/). Fully 24% of projects in 2022 are [estimated to be built](https://blog.chainalysis.com/reports/2022-crypto-pump-and-dump-schemes/) as 'pump and dump' scams. The degree to which it even accomplishes decentralised trust is highly debatable, and meanwhile the limited numbers of Web3 and supporting crypto companies display lamentable cyber security practice themselves, creating [honeypots of personal data](https://www.coindesk.com/tag/data-breaches/) from users of the ecosystem.
  With that said the component parts necessary to deliver on the promise [do]  exist. If there is to be no central controlling party(s) as in the Web 2 model then nothing can happen without a cryptographically secure underpinning, allowing digital data to be passed around without a prior arrangement.
  The following chapter will describe how much has been done by computer scientists over the past decades to support that. From this base layer we also get the potential for secure and trust minimised identity management. This nascent field of distributed identity management is explained later. From distributed trust models we can see 'trustless' transmission of economic value. The ability to send value from one person to another person or service without a third party.
  The rest of this book will focus on the trust and value transfer elements of this shift in internet technologies, and attempt to build a case for it's use in decentralised, open source, collaborative mixed reality applications.
  [\\chapterimage]
  - There is perhaps a wish by con­sumers to pass more of the economic incentive to content creators, without the ‘rent seeking’ layer afforded by businesses, and a healthy dose of mania driven market speculation. Edelman’s latest trust report is shocking, finding that trust in all institutions has slumped recently to all time lows, and their global survey found that: “Nearly 6 in 10 say their default tendency is to distrust something until they see evidence it is trustworthy. Another 64% say it’s now to a point where people are incapable of having constructive and civil debates about issues they disagree on. When distrust is the default – we lack the ability to debate or collaborate.”
  - Emerging consensus
  - The recent hype cycle ignored the legacy definitions described above and instead focusing almost exclusively on Ethereum based peer-to-peer projects. 
	  It can be seen that the description is somewhat in the eye of the beholder.
  - It’s possible to frame this Ethereum Web3 as a hugely complex and ineffi­cient digital rights management system (DRM). DRM is something that users of the internet are increasingly familiar and comfortable with. It’s somewhat debatable whether decentralising this is worthwhile. The thesis of the devel­opers of the technology seems to be that without it, control of ‘value’ will accrete over time, to one or more hegemonic controlling entities. It’s a strong argument, but there is a substantial counter argument emerging that users just don’t want this stuff. The nervousness of legislators in the USA to the attempt by Facebook/Meta to enter this peer-to-peer value transmission space is telling in terms of the perception of who is driving Web3.
		- The Money Revolution
		- The Financial Revolution
		- The Internet Revolution”
  - Create targeted, risk-calibrated oversight regimes for different web3 activities
  - Foster innovation with composability, open source code, and the power of open communities
  - Broaden access to the economic benefits of the innovation economy
  - Embrace the role of well-regulated stablecoins in financial inclusion and innovation
  - Collaborate with other nations to harmonize standards and regulatory frameworks
  - Dante Disparte, chief strategy officer of ‘Circle’ venture capital, said in testimony to a US senate hearing; that Web 1 was ‘read’, Web 2 was ‘read write’, and that Web 3 will ‘read write own’. The important takeaway here is not so much this oft quoted elevator pitch for Web3, but the fact that legislative bodies now consider this technology a force which they need to be aware of and potentially contend with.
  - Jeremy Allaire, again of Circle’, talks about the recent legislative order in the USA as follows: “this is a watershed moment for crypto, digital assets, and Web 3, akin to the 1996/1997 whole of government wakeup to the commercial internet. The U.S. seems to be taking on the reality that digital assets represent one of the most significant technologies and infrastructures for the 21st century; it’s rewarding to see this from the WH after so many of us have been making the case for 9+ years.”
  - The “semantic web” definition of Web3.0 has been somewhat overhauled byother innovations in decentralised internet technologies, now evolvingtoward the slightly different Web3 moniker. Tim Berners Lee (of WWWfame) first mentioned the semantic web in 1999.[[semanticWeb]]
  - “I have a dream for the Web \[in which computers\] become capable ofanalyzing all the data on the Web – the content, links, and transactionsbetween people and computers. A "Semantic Web", which makes thispossible, has yet to emerge, but when it does, the day-to-day mechanismsof trade, bureaucracy and our daily lives will be handled by machinestalking to machines. The "intelligent agents" people have touted forages will finally materialize.”
  - Attention developed around three core themes, ubiquitous availabilityand searchability of data, intelligent search assistants, and highlyavailable end points such as phones, and ‘internet of things’ devices.This is certainly manifesting in home devices, but few people think ofthis as a Web3 revolution.

  - ### Semantic web
  - The “semantic web” definition of Web3.0 has been somewhat overhauled byother innovations in decentralised internet technologies, now evolvingtoward the slightly different Web3 moniker. Tim Berners Lee (of WWWfame) first mentioned the semantic web in 1999.[[semanticWeb]]
  - “I have a dream for the Web \[in which computers\] become capable ofanalyzing all the data on the Web – the content, links, and transactionsbetween people and computers. A "Semantic Web", which makes thispossible, has yet to emerge, but when it does, the day-to-day mechanismsof trade, bureaucracy and our daily lives will be handled by machinestalking to machines. The "intelligent agents" people have touted forages will finally materialize.”
  - Attention developed around three core themes, ubiquitous availabilityand searchability of data, intelligent search assistants, and highlyavailable end points such as phones, and ‘internet of things’ devices.This is certainly manifesting in home devices, but few people think ofthis as a Web3 revolution.
  - Since ratification of the standards by the [World Wide Web (W3C)consortium](https://www.w3.org/standards/semanticweb/) it seems thattheir imperative toward decentralisation has become lost. Instead, itcan be seen that Facebook, Amazon, Google, and Apple have a harmfuloligopoly on users data.[[costigan2018world]] This is at odds withBerners-Lee’s vision, and he has recently [spoken out about thisdiscrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/),and attempted to [refocus themedia](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html)onto Web3.0.
  - It is worth taking a look at his software implementation called[Solid](https://solidproject.org), which is far more mindful of thesovereignty of user data.
  - “Solid is an exciting new project led by Prof. Tim Berners-Lee, inventorof the World Wide Web, taking place at MIT. The project aims toradically change the way Web applications work today, resulting in truedata ownership as well as improved privacy. Solid (derived from "sociallinked data") is a proposed set of conventions and tools for buildingdecentralized social applications based on Linked Data principles. Solidis modular and extensible and it relies as much as possible on existingW3C standards and protocols.”
  - Excitement around this kind of differentiated trust model, hinted at inubiquitous availability of data (and implemented explicitly in Solid),has led to exploration of different paths by cryptographers, and thiswill be described later. For instance, one of the main developers ofSolid, [Carvelho](https://github.com/melvincarvalho/), is now a leadingdeveloper and propotent of Nostr, another very interesting option whichwill be described later. This technology space is prolific, but stillcomparatively young and small.

  - ### Semantic web
  - The “semantic web” definition of Web3.0 has been somewhat overhauled byother innovations in decentralised internet technologies, now evolvingtoward the slightly different Web3 moniker. Tim Berners Lee (of WWWfame) first mentioned the semantic web in 1999.[[semanticWeb]]
  - “I have a dream for the Web \[in which computers\] become capable ofanalyzing all the data on the Web – the content, links, and transactionsbetween people and computers. A "Semantic Web", which makes thispossible, has yet to emerge, but when it does, the day-to-day mechanismsof trade, bureaucracy and our daily lives will be handled by machinestalking to machines. The "intelligent agents" people have touted forages will finally materialize.”
  - Attention developed around three core themes, ubiquitous availabilityand searchability of data, intelligent search assistants, and highlyavailable end points such as phones, and ‘internet of things’ devices.This is certainly manifesting in home devices, but few people think ofthis as a Web3 revolution.
  - Since ratification of the standards by the [World Wide Web (W3C)consortium](https://www.w3.org/standards/semanticweb/) it seems thattheir imperative toward decentralisation has become lost. Instead, itcan be seen that Facebook, Amazon, Google, and Apple have a harmfuloligopoly on users data.[[costigan2018world]] This is at odds withBerners-Lee’s vision, and he has recently [spoken out about thisdiscrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/),and attempted to [refocus themedia](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html)onto Web3.0.
  - It is worth taking a look at his software implementation called[Solid](https://solidproject.org), which is far more mindful of thesovereignty of user data.
  - “Solid is an exciting new project led by Prof. Tim Berners-Lee, inventorof the World Wide Web, taking place at MIT. The project aims toradically change the way Web applications work today, resulting in truedata ownership as well as improved privacy. Solid (derived from "sociallinked data") is a proposed set of conventions and tools for buildingdecentralized social applications based on Linked Data principles. Solidis modular and extensible and it relies as much as possible on existingW3C standards and protocols.”
  - Excitement around this kind of differentiated trust model, hinted at inubiquitous availability of data (and implemented explicitly in Solid),has led to exploration of different paths by cryptographers, and thiswill be described later. For instance, one of the main developers ofSolid, [Carvelho](https://github.com/melvincarvalho/), is now a leadingdeveloper and propotent of Nostr, another very interesting option whichwill be described later. This technology space is prolific, but stillcomparatively young and small.

  ## Core Characteristics

  - **Pixel-Level Classification**: Dense prediction for every pixel
  - **Semantic Understanding**: Class labels without instance differentiation
  - **Fully Convolutional**: End-to-end architectures without fully connected layers
  - **Multi-Scale Processing**: Encoding-decoding with skip connections
  - **Contextual Aggregation**: Atrous convolution, pyramid pooling

  ## Relationships

  - **Subclass**: Computer Vision
  - **Related**: Instance Segmentation, Panoptic Segmentation, Scene Understanding
  - **Architectures**: FCN, U-Net, DeepLab, PSPNet, SegFormer
  - **Datasets**: Cityscapes, ADE20K, Pascal VOC

  ## Key Literature

  1. Long, J., Shelhamer, E., & Darrell, T. (2015). "Fully convolutional networks for semantic segmentation." *CVPR*, 3431-3440.

  2. Ronneberger, O., Fischer, P., & Brox, T. (2015). "U-Net: Convolutional networks for biomedical image segmentation." *MICCAI*, 234-241.

  3. Chen, L. C., et al. (2018). "Encoder-decoder with atrous separable convolution for semantic image segmentation." *ECCV*, 801-818.

  ## See Also

  - [[Computer Vision]]
  - [[Instance Segmentation]]
  - [[Panoptic Segmentation]]

  ## Core Characteristics

  - **Pixel-Level Classification**: Dense prediction for every pixel
  - **Semantic Understanding**: Class labels without instance differentiation
  - **Fully Convolutional**: End-to-end architectures without fully connected layers
  - **Multi-Scale Processing**: Encoding-decoding with skip connections
  - **Contextual Aggregation**: Atrous convolution, pyramid pooling

  ## Relationships

  - **Subclass**: Computer Vision
  - **Related**: Instance Segmentation, Panoptic Segmentation, Scene Understanding
  - **Architectures**: FCN, U-Net, DeepLab, PSPNet, SegFormer
  - **Datasets**: Cityscapes, ADE20K, Pascal VOC

  ## Key Literature

  1. Long, J., Shelhamer, E., & Darrell, T. (2015). "Fully convolutional networks for semantic segmentation." *CVPR*, 3431-3440.

  2. Ronneberger, O., Fischer, P., & Brox, T. (2015). "U-Net: Convolutional networks for biomedical image segmentation." *MICCAI*, 234-241.

  3. Chen, L. C., et al. (2018). "Encoder-decoder with atrous separable convolution for semantic image segmentation." *ECCV*, 801-818.

  ## See Also

  - [[Computer Vision]]
  - [[Instance Segmentation]]
  - [[Panoptic Segmentation]]

- ### Provenance
  - sources::
  - migration-date:: 2026-04-26T00:00:00Z
