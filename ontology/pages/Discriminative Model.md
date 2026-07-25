public:: true

# Discriminative Model

```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:discriminative-model", "@type":"Page", "title":"Discriminative Model", "vc:slug":"discriminative-model", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```

```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:discriminative-model",
  "@type":"Class",
  "label":"Discriminative Model",
  "definition":"A discriminative model is a class of machine learning model that directly learns the conditional probability of a target label given the observed input, rather than modelling how the data itself is generated. It focuses on the decision boundary that separates classes, which often yields strong predictive accuracy on classification and regression tasks. Discriminative models contrast with generative models, which learn the joint distribution of inputs and outputs.",
  "domain":"machine-learning",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}],
  "relations":{
    "contrastsWith":[{"@id":"urn:ngm:class:generative-model","label":"Generative Model"}],
    "partOf":[{"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"},{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}],
    "uses":[{"@id":"urn:ngm:class:maximum-likelihood-estimation","label":"Maximum Likelihood Estimation"},{"@id":"urn:ngm:class:feature-extraction","label":"Feature Extraction"}],
    "enables":[{"@id":"urn:ngm:class:classification","label":"Classification"}],
    "implements":[{"@id":"urn:ngm:class:support-vector-machine","label":"Support Vector Machine"}],
    "relatedTo":[{"@id":"urn:ngm:class:neural-network","label":"Neural Network"},{"@id":"urn:ngm:class:deep-learning","label":"Deep Learning"},{"@id":"urn:ngm:class:probabilistic-model","label":"Probabilistic Model"}],
    "supports":[{"@id":"urn:ngm:class:classification","label":"Classification"},{"@id":"urn:ngm:class:decision-theory","label":"Decision Theory"}],
    "dependsOn":[{"@id":"urn:ngm:class:model-training","label":"Model Training"}],
    "bridgesTo":[{"@id":"urn:ngm:class:generative-model","label":"Generative Model"}]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```

- ### Definition
	- A **Discriminative Model** learns the conditional distribution P(y | x) directly, modelling the boundary between classes rather than the underlying data distribution. It belongs to [[Supervised Learning]] and is frequently contrasted with the [[Generative Model]] family.
	- By concentrating modelling capacity on the [[Classification]] decision rather than on reconstructing inputs, discriminative approaches such as the [[Support Vector Machine]] and discriminatively trained [[Neural Network]] architectures typically achieve higher predictive accuracy when labelled data is plentiful.
- ### Overview
	- Discriminative modelling is one of the two principal paradigms for predictive machine learning. Where a generative model asks "how was this data produced?", a discriminative model asks the narrower and more direct question "given this input, what is the most probable label?".
	- Because it never needs to characterise the full input distribution, a discriminative model can devote its parameters to sharpening the decision boundary. This is computationally efficient and statistically effective for prediction, though it forfeits the ability to synthesise new samples or to reason about inputs that lie far from the training distribution.
	- Logistic regression, conditional random fields, support vector machines, and most supervised deep networks are discriminative. The distinction is conceptual rather than architectural: the same neural network can be trained discriminatively or generatively depending on the objective.
- ### Key aspects
	- Models P(y | x) directly without estimating P(x) or the joint P(x, y).
	- Optimised against a supervised loss such as cross-entropy or hinge loss via [[Maximum Likelihood Estimation]] of the conditional likelihood.
	- Tends to require less restrictive distributional assumptions than generative counterparts.
	- Sensitive to the quality of [[Feature Extraction]] and to class imbalance in the training set.
	- Cannot natively generate new data or compute input likelihoods for anomaly detection.
- ### Applications
	- Image and text [[Classification]] where a clean decision boundary is the primary objective.
	- Spam filtering, sentiment analysis, and credit scoring built on logistic regression or gradient-boosted models.
	- Discriminative fine-tuning of pretrained [[Neural Network]] and [[Deep Learning]] backbones for downstream prediction.
	- Margin-maximising classifiers such as the [[Support Vector Machine]] for high-dimensional, small-sample regimes.
- ### Relationships
	- contrastsWith:: [[Generative Model]]
	- partOf:: [[Supervised Learning]]
	- partOf:: [[Machine Learning]]
	- uses:: [[Maximum Likelihood Estimation]]
	- uses:: [[Feature Extraction]]
	- enables:: [[Classification]]
	- implements:: [[Support Vector Machine]]
	- relatedTo:: [[Neural Network]]
	- relatedTo:: [[Deep Learning]]
	- relatedTo:: [[Probabilistic Model]]
	- supports:: [[Classification]]
	- supports:: [[Decision Theory]]
	- dependsOn:: [[Model Training]]
	- bridgesTo:: [[Generative Model]]
- ### Provenance
	- updated:: 2026-06-15
	- attributedTo:: did:nostr:ontology-mesh
	- inferenceRule:: GapMaterialisation
