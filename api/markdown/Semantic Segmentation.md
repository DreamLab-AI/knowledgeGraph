- ### OntologyBlock
  id:: semantic-segmentation-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0359
	- preferred-term:: Semantic Segmentation
	- source-domain:: ai
	- status:: draft
- definition:: Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Semantic segmentation networks (FCN, U-Net, DeepLab) produce dense pixel-wise predictions enabling scene understanding applications in medical imaging, autonomous driving, and satellite imagery analysis.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :SemanticSegmentation))

;; Annotations
(AnnotationAssertion rdfs:label :SemanticSegmentation "Semantic Segmentation"@en)
(AnnotationAssertion rdfs:comment :SemanticSegmentation "Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Semantic segmentation networks (FCN, U-Net, DeepLab) produce dense pixel-wise predictions enabling scene understanding applications in medical imaging, autonomous driving, and satellite imagery analysis."@en)

;; Taxonomic Relationships
(SubClassOf :SemanticSegmentation :ComputerVision)

;; Semantic Relationships
(SubClassOf :SemanticSegmentation
  (ObjectSomeValuesFrom :relatedTo :PanopticSegmentation))
(SubClassOf :SemanticSegmentation
  (ObjectSomeValuesFrom :relatedTo :InstanceSegmentation))
(SubClassOf :SemanticSegmentation
  (ObjectSomeValuesFrom :relatedTo :ComputerVision))

;; Data Properties
(AnnotationAssertion dcterms:identifier :SemanticSegmentation "AI-0359"^^xsd:string)
(DataPropertyAssertion :isAITechnology :SemanticSegmentation "true"^^xsd:boolean)
```

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

## Metadata

- **Domain**: Computer Vision
- **Maturity**: Wide deployment
	- maturity:: draft
	- owl:class:: ai:SemanticSegmentation
	- owl:role:: Concept
	- belongsToDomain:: [[ArtificialIntelligenceDomain]]
	- #### Relationships
	  id:: semantic-segmentation-relationships
- ## About Semantic Segmentation
	- Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Semantic segmentation networks (FCN, U-Net, DeepLab) produce dense pixel-wise predictions enabling scene understanding applications in medical imaging, autonomous driving, and satellite imagery analysis.

	- ## Semantic web
		- The [[Semantic Web]] definition of Web3.0 has been somewhat overhauled by other innovations in decentralised internet technologies, now evolving toward the slightly different Web3 moniker. Tim Berners Lee (of WWW fame) first mentioned the semantic web in 1999 \[[2]
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
		- The [[Semantic Web]] definition of Web3.0 has been somewhat overhauled by other innovations in decentralised internet technologies, now evolving toward the slightly different Web3 moniker. Tim Berners Lee (of WWW fame) first mentioned the semantic web in 1999 \[[2]
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
		- The [[Semantic Web]] definition of Web3.0 has been somewhat overhauled by other innovations in decentralised internet technologies, now evolving toward the slightly different Web3 moniker. Tim Berners Lee (of WWW fame) first mentioned the semantic web in 1999 \[[2]
		- "I have a dream for the Web \[in which computers\] become capable of analyzing all the data on the Web -- the content, links, and transactions between people and computers. A \"Semantic Web\", which makes this possible, has yet to emerge, but when it does, the day-to-day mechanisms of trade, bureaucracy and our daily lives will be handled by machines talking to machines. The \"intelligent agents\" people have touted for ages will finally materialize."
		  Attention developed around three core themes, ubiquitous availability and searchability of data, intelligent search assistants, and highly available end points such as phones, and 'internet of things' devices. This is certainly manifesting in home devices, but few people think of this as a Web3 revolution. Since ratification of the standards by the [World Wide Web (W3C) consortium](https://www.w3.org/standards/semanticweb/) it seems that their imperative toward decentralisation has become lost. Instead, it can be seen that Facebook, Amazon, Google, and Apple have a harmful oligopoly on users data \[[3](https://arxiv.org/html/2207.09460v11/#bib.bibx3)\]. This is at odds with Berners-Lee's vision, and he has recently [spoken out about this discrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/), and attempted to [refocus the media](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html) onto Web3.0.
	- More recently Web3 is [being touted](https://trends.google.com/trends/explore?date=all&q=web3) as a way to connect content creators directly to content consumers, without centralised companies acting as gatekeepers of the data. It implies that all users have a cryptographic key management system, to which they attach metadata, that they make requirements of peers with whom they communicate, and that they maintain trust 'scores' with peers.
	- It seems likely that this new model is less driven by a market need, and more by the high availability of tools which allow this to happen (the ecosystems described later). Add to this a social response to the [collapse in trust of companies such as Facebook](https://finance.yahoo.com/news/meta-facebook-worst-company-of-the-year-yahoo-finance-165345819.html) and other [social media platforms](https://reb00ted.org/tech/20220727-end-of-social-networking/)\[[4](https://arxiv.org/html/2207.09460v11/#bib.bibx4)\] (Figure [2.2](https://arxiv.org/html/2207.09460v11/#Ch2.F2 "Figure 2.2 ‣ 2.3 Web3 ‣ Chapter 2 Decentralisation & The Web ‣ Part I State of the art")). There is perhaps a wish by consumers to pass more of the economic incentive to content creators, without the 'rent seeking' layer afforded by businesses, and a healthy dose of mania driven market speculation. [Edelman's latest trust report](https://www.edelman.co.uk/sites/g/files/aatuss301/files/2022-01/2022%20Edelman%20Trust%20Barometer_UK.pdf) is shocking, finding that trust in all institutions has slumped recently to all time lows, and their global survey found that: ["Nearly 6 in 10 say their default tendency is to distrust something until they see evidence it is trustworthy. Another 64% say it's now to a point where people are incapable of having constructive and civil debates about issues they disagree on. When distrust is the default -- we lack the ability to debate or collaborate."] 
	  ![Figure 2.2: [Edelman 2020 trust barometer](https://www.edelman.com/trust/2020-trust-barometer) \[rights requested\]](../assets/c-a-e.jpg)

	- ### Notion
		- {{video https://www.youtube.com/watch?v=WnZR7RPH8sA}}

	- ### Logseq
		-

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
-

- ### Semantic web
	- The “semantic web” definition of Web3.0 has been somewhat overhauled byother innovations in decentralised internet technologies, now evolvingtoward the slightly different Web3 moniker. Tim Berners Lee (of WWWfame) first mentioned the semantic web in 1999.[[semanticWeb]]
	- “I have a dream for the Web \[in which computers\] become capable ofanalyzing all the data on the Web – the content, links, and transactionsbetween people and computers. A "Semantic Web", which makes thispossible, has yet to emerge, but when it does, the day-to-day mechanismsof trade, bureaucracy and our daily lives will be handled by machinestalking to machines. The "intelligent agents" people have touted forages will finally materialize.”
	- Attention developed around three core themes, ubiquitous availabilityand searchability of data, intelligent search assistants, and highlyavailable end points such as phones, and ‘internet of things’ devices.This is certainly manifesting in home devices, but few people think ofthis as a Web3 revolution.
	- Since ratification of the standards by the [World Wide Web (W3C)consortium](https://www.w3.org/standards/semanticweb/) it seems thattheir imperative toward decentralisation has become lost. Instead, itcan be seen that Facebook, Amazon, Google, and Apple have a harmfuloligopoly on users data.[[costigan2018world]] This is at odds withBerners-Lee’s vision, and he has recently [spoken out about thisdiscrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/),and attempted to [refocus themedia](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html)onto Web3.0.
	- It is worth taking a look at his software implementation called[Solid](https://solidproject.org), which is far more mindful of thesovereignty of user data.
	- “Solid is an exciting new project led by Prof. Tim Berners-Lee, inventorof the World Wide Web, taking place at MIT. The project aims toradically change the way Web applications work today, resulting in truedata ownership as well as improved privacy. Solid (derived from "sociallinked data") is a proposed set of conventions and tools for buildingdecentralized social applications based on Linked Data principles. Solidis modular and extensible and it relies as much as possible on existingW3C standards and protocols.”
	- Excitement around this kind of differentiated trust model, hinted at inubiquitous availability of data (and implemented explicitly in Solid),has led to exploration of different paths by cryptographers, and thiswill be described later. For instance, one of the main developers ofSolid, [Carvelho](https://github.com/melvincarvalho/), is now a leadingdeveloper and propotent of Nostr, another very interesting option whichwill be described later. This technology space is prolific, but stillcomparatively young and small.
-

- ### Semantic web
	- The “semantic web” definition of Web3.0 has been somewhat overhauled byother innovations in decentralised internet technologies, now evolvingtoward the slightly different Web3 moniker. Tim Berners Lee (of WWWfame) first mentioned the semantic web in 1999.[[semanticWeb]]
	- “I have a dream for the Web \[in which computers\] become capable ofanalyzing all the data on the Web – the content, links, and transactionsbetween people and computers. A "Semantic Web", which makes thispossible, has yet to emerge, but when it does, the day-to-day mechanismsof trade, bureaucracy and our daily lives will be handled by machinestalking to machines. The "intelligent agents" people have touted forages will finally materialize.”
	- Attention developed around three core themes, ubiquitous availabilityand searchability of data, intelligent search assistants, and highlyavailable end points such as phones, and ‘internet of things’ devices.This is certainly manifesting in home devices, but few people think ofthis as a Web3 revolution.
	- Since ratification of the standards by the [World Wide Web (W3C)consortium](https://www.w3.org/standards/semanticweb/) it seems thattheir imperative toward decentralisation has become lost. Instead, itcan be seen that Facebook, Amazon, Google, and Apple have a harmfuloligopoly on users data.[[costigan2018world]] This is at odds withBerners-Lee’s vision, and he has recently [spoken out about thisdiscrepancy](https://thenextweb.com/news/web-inventor-tim-berners-lee-screw-web3-my-decentralized-internet-doesnt-need-blockchain/),and attempted to [refocus themedia](https://www.cnbc.com/2022/11/04/web-inventor-tim-berners-lee-wants-us-to-ignore-web3.html)onto Web3.0.
	- It is worth taking a look at his software implementation called[Solid](https://solidproject.org), which is far more mindful of thesovereignty of user data.
	- “Solid is an exciting new project led by Prof. Tim Berners-Lee, inventorof the World Wide Web, taking place at MIT. The project aims toradically change the way Web applications work today, resulting in truedata ownership as well as improved privacy. Solid (derived from "sociallinked data") is a proposed set of conventions and tools for buildingdecentralized social applications based on Linked Data principles. Solidis modular and extensible and it relies as much as possible on existingW3C standards and protocols.”
	- Excitement around this kind of differentiated trust model, hinted at inubiquitous availability of data (and implemented explicitly in Solid),has led to exploration of different paths by cryptographers, and thiswill be described later. For instance, one of the main developers ofSolid, [Carvelho](https://github.com/melvincarvalho/), is now a leadingdeveloper and propotent of Nostr, another very interesting option whichwill be described later. This technology space is prolific, but stillcomparatively young and small.
-

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

## Metadata

- **Domain**: Computer Vision
- **Maturity**: Wide deployment
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Semantic Segmentation
		  
		  **Term ID**: AI-0359
		  **Category**: Domain Applications → Computer Vision
		  **Status**: Stable
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Semantic segmentation networks (FCN, U-Net, DeepLab) produce dense pixel-wise predictions enabling scene understanding applications in medical imaging, autonomous driving, and satellite imagery analysis.
		  
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
		  
		  ## Metadata
		  
		  - **Domain**: Computer Vision
		  - **Maturity**: Wide deployment
		  
		  ```

- public-access:: true
	- definition:: Semantic Segmentation is the computer vision task of assigning a class label to every pixel in an image, partitioning the image into semantically meaningful regions without distinguishing between individual object instances. Semantic segmentation networks (FCN, U-Net, DeepLab) produce dense pixel-wise predictions enabling scene understanding applications in medical imaging, autonomous driving, and satellite imagery analysis.



## Academic Context

- Semantic segmentation is a core computer vision task involving the assignment of a semantic class label to every pixel in an image, thereby partitioning the image into meaningful regions without distinguishing individual object instances.
  - It provides a granular understanding of visual scenes, surpassing image classification (which labels entire images) and object detection (which localises objects with bounding boxes).
  - The term “semantic” relates to the meaning or category of visual elements, while “segmentation” refers to dividing the image into distinct regions.
- The academic foundations lie in deep learning, particularly convolutional neural networks (CNNs) and more recently transformer-based architectures, which enable dense pixel-wise predictions.
  - Early influential models include Fully Convolutional Networks (FCN), U-Net, and DeepLab, which remain widely used and serve as baselines for ongoing research.
  - Semantic segmentation is often described as a dense prediction problem, where each pixel is classified simultaneously.

## Current Landscape (2025)

- Industry adoption is widespread across domains requiring precise scene understanding, including autonomous vehicles, medical imaging, satellite and aerial imagery analysis, robotics, and augmented reality.
  - Notable platforms and frameworks supporting semantic segmentation include TensorFlow, PyTorch, MATLAB, and specialized tools like Roboflow.
- In the UK, semantic segmentation is actively applied in autonomous driving research and medical diagnostics, with several companies and research groups leveraging these techniques.
  - North England innovation hubs such as Manchester, Leeds, Newcastle, and Sheffield host academic institutions and startups contributing to semantic segmentation advancements, particularly in healthcare imaging and smart city projects.
- Technical capabilities have advanced with the integration of transformer-based models improving contextual understanding and accuracy, though challenges remain in real-time processing and handling complex scenes with occlusions.
- Standards and frameworks continue to evolve, with open datasets (e.g., Cityscapes, ADE20K) and benchmarking protocols facilitating model comparison and reproducibility.

## Research & Literature

- Key academic papers and sources include:
  - Long, J., Shelhamer, E., & Darrell, T. (2015). Fully Convolutional Networks for Semantic Segmentation. *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)*. DOI: 10.1109/CVPR.2015.7298965
  - Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. *Medical Image Computing and Computer-Assisted Intervention (MICCAI)*. DOI: 10.1007/978-3-319-24574-4_28
  - Chen, L.-C., Papandreou, G., Kokkinos, I., Murphy, K., & Yuille, A. L. (2018). DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 40(4), 834-848. DOI: 10.1109/TPAMI.2017.2699184
- Ongoing research directions focus on:
  - Enhancing model efficiency for deployment on edge devices.
  - Improving segmentation accuracy in challenging environments (e.g., adverse weather, low light).
  - Combining semantic segmentation with instance and panoptic segmentation for richer scene understanding.
  - Leveraging self-supervised and semi-supervised learning to reduce reliance on expensive pixel-level annotations.

## UK Context

- The UK has a strong academic and industrial presence in semantic segmentation, with universities such as the University of Manchester and University of Leeds conducting cutting-edge research in medical image analysis and autonomous systems.
- North England innovation hubs contribute notably:
  - Manchester’s AI and computer vision groups collaborate with healthcare providers to develop semantic segmentation models for diagnostic imaging.
  - Leeds and Sheffield host startups applying semantic segmentation to satellite imagery for environmental monitoring and urban planning.
  - Newcastle’s research centres focus on robotics and smart infrastructure, utilising semantic segmentation for real-time scene interpretation.
- Regional case studies include NHS partnerships employing semantic segmentation for tumour detection and local councils using it for traffic and pedestrian monitoring in smart city initiatives.

## Future Directions

- Emerging trends include:
  - Integration of transformer architectures and multimodal data (e.g., combining LiDAR with images) to enhance segmentation robustness.
  - Development of lightweight models for real-time applications on mobile and embedded devices.
  - Expansion of unsupervised and few-shot learning techniques to reduce annotation costs.
- Anticipated challenges:
  - Balancing model complexity with computational efficiency.
  - Addressing biases in training data to ensure equitable performance across diverse populations and environments.
  - Ensuring privacy and ethical use of semantic segmentation in surveillance and healthcare.
- Research priorities emphasise explainability, robustness to adversarial inputs, and cross-domain generalisation.

## References

1. Long, J., Shelhamer, E., & Darrell, T. (2015). Fully Convolutional Networks for Semantic Segmentation. *Proceedings of the IEEE Conference on Computer Vision and Pattern Recognition (CVPR)*. DOI: 10.1109/CVPR.2015.7298965

2. Ronneberger, O., Fischer, P., & Brox, T. (2015). U-Net: Convolutional Networks for Biomedical Image Segmentation. *Medical Image Computing and Computer-Assisted Intervention (MICCAI)*. DOI: 10.1007/978-3-319-24574-4_28

3. Chen, L.-C., Papandreou, G., Kokkinos, I., Murphy, K., & Yuille, A. L. (2018). DeepLab: Semantic Image Segmentation with Deep Convolutional Nets, Atrous Convolution, and Fully Connected CRFs. *IEEE Transactions on Pattern Analysis and Machine Intelligence*, 40(4), 834-848. DOI: 10.1109/TPAMI.2017.2699184

4. Petru, P. (2025). What Is Semantic Segmentation In Computer Vision? *Roboflow Blog*. Available at: https://blog.roboflow.com/what-is-semantic-segmentation/


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
