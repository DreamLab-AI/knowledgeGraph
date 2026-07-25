public:: true

# Gradient Boosted Trees
```json-ld
{ "@context":"https://narrativegoldmine.com/ns/v1", "@id":"urn:visionflow:page:gradient-boosted-trees", "@type":"Page", "title":"Gradient Boosted Trees", "vc:slug":"gradient-boosted-trees", "vc:public":true, "vc:schemaVersion":2, "vc:outboundWikilinks":[] }
```
```json-ld
{
  "@context":"https://narrativegoldmine.com/ns/v2.jsonld",
  "@id":"urn:ngm:class:gradient-boosted-trees",
  "@type":"Class",
  "label":"Gradient Boosted Trees",
  "definition":"Gradient boosted trees are an ensemble learning method that builds a strong predictor by sequentially adding shallow decision trees, each fitted to the negative gradient of a differentiable loss with respect to the current model's predictions. By combining many weak learners in an additive, stage-wise manner, the method achieves high accuracy on structured and tabular data while controlling overfitting through regularisation, shrinkage and subsampling. It is among the most effective approaches for supervised regression and classification on heterogeneous features.",
  "domain":"ai",
  "maturity":"established",
  "subClassOf":[{"@id":"urn:ngm:class:boosting","label":"Boosting"}],
  "relations":{
    "hasPart":[
      {"@id":"urn:ngm:class:decision-tree","label":"Decision Tree"},
      {"@id":"urn:ngm:class:loss-function","label":"Loss Function"}
    ],
    "partOf":[{"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"}],
    "implements":[
      {"@id":"urn:ngm:class:boosting","label":"Boosting"},
      {"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}
    ],
    "uses":[
      {"@id":"urn:ngm:class:decision-tree","label":"Decision Tree"},
      {"@id":"urn:ngm:class:gradient-descent","label":"Gradient Descent"}
    ],
    "requires":[
      {"@id":"urn:ngm:class:loss-function","label":"Loss Function"},
      {"@id":"urn:ngm:class:supervised-learning","label":"Supervised Learning"}
    ],
    "enables":[
      {"@id":"urn:ngm:class:regression","label":"Regression"},
      {"@id":"urn:ngm:class:classification","label":"Classification"}
    ],
    "supports":[{"@id":"urn:ngm:class:feature-importance","label":"Feature Importance"}],
    "contrastsWith":[{"@id":"urn:ngm:class:random-forest","label":"Random Forest"}],
    "relatedTo":[
      {"@id":"urn:ngm:class:boosting","label":"Boosting"},
      {"@id":"urn:ngm:class:machine-learning","label":"Machine Learning"},
      {"@id":"urn:ngm:class:feature-importance","label":"Feature Importance"}
    ]
  },
  "sameAs":[],
  "quality":0.62,
  "provenance":{"attributedTo":"did:nostr:ontology-mesh","generatedAt":"2026-06-15T00:00:00Z","inferenceRule":"GapMaterialisation"}
}
```
- ### Definition
- Gradient boosted trees build a strong predictor by sequentially adding shallow [[Decision Tree]] learners, each fitted to the negative gradient of a [[Loss Function]]. The method implements [[Boosting]] within [[Ensemble Learning]] and excels on tabular data.
- ### Overview
- Boosting turns many weak learners into one accurate model by adding them stage by stage, with each new tree correcting the residual errors of the ensemble so far.
- Framing this as functional [[Gradient Descent]] on a chosen loss makes the approach general: any differentiable objective for [[Regression]] or [[Classification]] can be optimised.
- Practical implementations add shrinkage, column and row subsampling, and tree-complexity penalties, which together control variance and make the method robust and competitive on heterogeneous features.
- ### Mechanisms
- Initialise with a constant prediction minimising the loss.
- Compute pseudo-residuals as negative gradients of the loss.
- Fit a shallow regression tree to those residuals.
- Add the tree scaled by a learning rate to the running model.
- Repeat for many rounds, with regularisation and early stopping.
- ### Applications
- High-accuracy [[Regression]] and [[Classification]] on tabular datasets.
- Ranking, risk scoring and demand forecasting tasks.
- Producing [[Feature Importance]] rankings for interpretation.
- Strong baselines in applied [[Machine Learning]] competitions.
- ### Relationships
- hasPart:: [[Decision Tree]]
- hasPart:: [[Loss Function]]
- partOf:: [[Machine Learning]]
- implements:: [[Boosting]]
- implements:: [[Supervised Learning]]
- uses:: [[Decision Tree]]
- uses:: [[Gradient Descent]]
- requires:: [[Loss Function]]
- requires:: [[Supervised Learning]]
- enables:: [[Regression]]
- enables:: [[Classification]]
- supports:: [[Feature Importance]]
- contrastsWith:: [[Random Forest]]
- relatedTo:: [[Boosting]]
- relatedTo:: [[Machine Learning]]
- relatedTo:: [[Feature Importance]]
- ### Provenance
- updated:: 2026-06-15
- attributedTo:: did:nostr:ontology-mesh
- inferenceRule:: GapMaterialisation
