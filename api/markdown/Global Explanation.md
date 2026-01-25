- ### OntologyBlock
  id:: global-explanation-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0302
	- preferred-term:: Global Explanation
	- source-domain:: mv
	- status:: draft
- definition:: Interpretability techniques that characterise the overall behaviour, decision-making patterns, and feature importance of a machine learning model across its entire input space, rather than explaining individual predictions.


## OWL Formal Semantics

```clojure
;; OWL Functional Syntax

(Declaration (Class :GlobalExplanation))

;; Annotations
(AnnotationAssertion rdfs:label :GlobalExplanation "Global Explanation"@en)
(AnnotationAssertion rdfs:comment :GlobalExplanation "Interpretability techniques that characterise the overall behaviour, decision-making patterns, and feature importance of a machine learning model across its entire input space, rather than explaining individual predictions."@en)

;; Semantic Relationships
(SubClassOf :GlobalExplanation
  (ObjectSomeValuesFrom :relatedTo :Shap))
(SubClassOf :GlobalExplanation
  (ObjectSomeValuesFrom :relatedTo :FeatureImportance))
(SubClassOf :GlobalExplanation
  (ObjectSomeValuesFrom :hasPart :PartialDependencePlot))
(SubClassOf :GlobalExplanation
  (ObjectSomeValuesFrom :relatedTo :PermutationImportance))
(SubClassOf :GlobalExplanation
  (ObjectSomeValuesFrom :relatedTo :IndividualConditionalExpectation))

;; Data Properties
(AnnotationAssertion dcterms:identifier :GlobalExplanation "AI-0302"^^xsd:string)
(DataPropertyAssertion :isAITechnology :GlobalExplanation "true"^^xsd:boolean)
```

## Related Terms

- **Broader**: [[Model Interpretability]], [[Explainable AI]]
- **Narrower**: [[Partial Dependence Plot]], [[Permutation Importance]], [[Feature Importance]]
- **Related**: [[Model Transparency]], [[Surrogate Models]]
- **Contrasts**: [[Local Explanation]]

## Formal Specification

### Core Concept

Given a trained model `f: X → Y`, a global explanation `G(f)` characterises:

```
G(f) → {overall behaviour, feature importance, decision boundaries, interaction effects}
```

**Scope**: Entire input space `X`
**Objective**: Understand `f` holistically without instance-specific focus

### Mathematical Framework

**Global Feature Importance**:
```
I(f, j) = E_X[Impact of feature j on f(X)]
```

**Global Model Approximation**:
```
g* = argmin E_X[L(f(X), g(X))]
     g∈G_interpretable
```

Where `g` is an interpretable surrogate model approximating `f` globally.

## Key Methods

### Feature Importance Measures

#### Permutation Importance

**Algorithm** (Breiman, 2001):

1. **Baseline**: Compute model performance on validation set
   ```
   Score_original = Performance(f, X_val, y_val)
   ```

2. **Permute feature**: Shuffle feature `j` values
   ```
   X_permuted = X_val with column j randomly shuffled
   ```

3. **Recompute performance**:
   ```
   Score_permuted = Performance(f, X_permuted, y_val)
   ```

4. **Feature importance**:
   ```
   FI(j) = Score_original - E[Score_permuted]
   ```

**Properties**:
- Model-agnostic
- Accounts for feature interactions
- Reflects true predictive importance

**Limitations**:
- Requires retraining for some models (not for tree ensembles)
- Assumes feature independence
- Variance from random permutation

#### SHAP Feature Importance (Global)

**Aggregation** (Lundberg & Lee, 2017):

```
I(j) = (1/n) Σ |φ_j(x_i)|
             i=1 to n
```

**Interpretation**: Average absolute SHAP value across all instances

**Benefits**:
- Consistent with local explanations
- Theoretically grounded
- Handles feature interactions

**Visualisations**:
- **Summary plot**: Distribution of SHAP values per feature
- **Bar plot**: Mean absolute SHAP values
- **Dependence plot**: Feature value vs. SHAP value

### Model Behaviour Characterisation

#### Partial Dependence Plots (PDP)

**Definition** (Friedman, 2001):

```
PD_S(x_S) = E_X_C[f(x_S, X_C)]
```

Where:
- `S` is subset of features to visualise
- `C` is complement of `S`
- Marginalisation over `X_C`

**Computation**:
```
PD_S(x_S) ≈ (1/n) Σ f(x_S, x_C^(i))
                   i=1
```

**Interpretation**: Average model output when feature(s) fixed at value

**Advantages**:
- Intuitive visualisation
- Model-agnostic
- Handles non-linear relationships

**Limitations**:
- Assumes feature independence (can be misleading)
- Computationally expensive for many features
- Ignores feature distribution

#### Individual Conditional Expectation (ICE)

**Definition** (Goldstein et al., 2015):

```
ICE_i(x_S) = f(x_S, x_C^(i))
```

**Interpretation**: Model output for instance `i` as feature(s) vary

**Relationship to PDP**:
```
PD_S(x_S) = (1/n) Σ ICE_i(x_S)
```

**Benefits**:
- Reveals heterogeneity (individual instance behaviour)
- Detects interactions (diverging ICE curves)
- Visualises distribution, not just average

**Visualisation**: Overlaid curves showing instance-specific effects

#### Accumulated Local Effects (ALE)

**Definition** (Apley & Zhu, 2020):

```
ALE_j(x) = ∫_{z_min}^x E_X|X_j=z[∂f/∂X_j | X_j=z] dz
```

**Advantages over PDP**:
- Unbiased with correlated features
- Uses conditional rather than marginal distribution
- Faster computation

**Interpretation**: Accumulated marginal effect of feature

**Use Case**: Preferred when features are correlated

### Surrogate Models

#### Global Surrogate

**Approach**:
1. **Train black-box model**: `f(X) → Y`
2. **Generate predictions**: `Ŷ = f(X)` for large dataset
3. **Train interpretable model**: `g(X) → Ŷ`
4. **Interpret** `g` as approximation of `f`

**Interpretable Model Choices**:
- Decision tree
- Linear regression
- Rule set (RuleFit)
- GAM (Generalized Additive Model)

**Fidelity Measure**:
```
Fidelity = R²(f(X), g(X))
```

**Trade-off**: Accuracy (of `f`) vs. Interpretability (of `g`)

**Limitations**:
- Surrogate may not faithfully represent black-box
- Model mismatch in complex regions
- Interpretability of surrogate still limited

#### RuleFit

**Algorithm** (Friedman & Popescu, 2008):

1. **Extract rules** from tree ensemble
2. **Fit sparse linear model** with rules as features
   ```
   y ≈ β₀ + Σ β_k R_k(x)
   ```
   Where `R_k` are if-then rules

**Output**: Interpretable rule-based global model

**Example**:
```
Prediction = 0.5
  + 0.3 × (age > 50 AND cholesterol > 200)
  + 0.15 × (BMI > 30)
  - 0.2 × (exercise_weekly = True)
```

**Benefits**:
- Combines predictive power and interpretability
- Explicit rule interactions
- Sparse representation

### Interaction Detection

#### Friedman's H-statistic

**Two-way Interaction**:
```
H²_jk = [Σ(PD_jk(x_j, x_k) - PD_j(x_j) - PD_k(x_k))²] / [Σ PD_jk(x_j, x_k)²]
```

**Interpretation**: Proportion of variance due to interaction

**Values**:
- `H² = 0`: No interaction
- `H² > 0`: Interaction present (larger = stronger)

**Use Case**: Identify which feature pairs interact significantly

#### SHAP Interaction Values

**Definition**:
```
φ_ij = Σ |S|!(|N|-|S|-1)! / (2|N|!) [Δ_ij(S)]
       S⊆N\{i,j}
```

Where `Δ_ij(S)` quantifies pairwise interaction effect.

**Benefits**:
- Consistent with SHAP values
- Detects non-linear interactions
- Distributes effects fairly

**Visualisation**: Heatmap of interaction strengths

## Application Domains

### Model Debugging

**Use Cases**:
- Detect unexpected feature importance (sanity check)
- Identify bias in feature usage
- Discover data leakage

**Example**:
Global feature importance reveals that "patient ID" has high importance → data leakage detected.

### Regulatory Compliance

**Finance**:
- Fair lending: ensure protected attributes not driving decisions
- Model risk management: holistic model understanding

**Healthcare**:
- Clinical validation: feature importance aligns with medical knowledge
- IEEE P2802 compliance: transparent device behaviour

**Example**:
Partial dependence plots show that "race" feature has flat PD → no discriminatory effect.

### Scientific Discovery

**Use Cases**:
- Hypothesis generation from feature importance
- Mechanism understanding via PDPs
- Interaction detection for biological pathways

**Example**:
Climate modelling: PDP reveals non-linear CO₂ effect on temperature, guiding further research.

### Model Comparison

**Approach**:
- Generate global explanations for multiple models
- Compare feature importance rankings
- Assess consistency of relationships (PDPs)

**Decision Criterion**: Select model with interpretable, domain-aligned behaviour.

## Implementation Approaches

### Permutation Importance

**Scikit-learn**:
```python
from sklearn.inspection import permutation_importance

result = permutation_importance(
    estimator=model,
    X=X_val,
    y=y_val,
    n_repeats=10,
    random_state=42,
    scoring='accuracy'
)

importances = result.importances_mean
```

**Custom Implementation**:
```python
def permutation_importance(model, X, y, metric, n_repeats=10):
    baseline_score = metric(y, model.predict(X))
    importances = {}

    for col in X.columns:
        scores = []
        for _ in range(n_repeats):
            X_permuted = X.copy()
            X_permuted[col] = X_permuted[col].sample(frac=1).values
            score = metric(y, model.predict(X_permuted))
            scores.append(baseline_score - score)
        importances[col] = np.mean(scores)

    return importances
```

### Partial Dependence Plots

**Scikit-learn**:
```python
from sklearn.inspection import PartialDependenceDisplay

features = ['age', 'cholesterol', ('age', 'cholesterol')]

PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=features,
    feature_names=X_train.columns
)
```

**PDPbox**:
```python
from pdpbox import pdp

pdp_age = pdp.pdp_isolate(
    model=model,
    dataset=X_train,
    model_features=X_train.columns,
    feature='age'
)

pdp.pdp_plot(pdp_age, 'age')
```

### ICE Plots

**Scikit-learn** (built into PDP):
```python
from sklearn.inspection import PartialDependenceDisplay

PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=['age'],
    kind='both',  # Shows both PDP and ICE
    ice_lines_kw={'alpha': 0.2}
)
```

### ALE Plots

**ALEPython**:
```python
from alepython import ale_plot

ale_plot(
    model=model.predict,
    X_train=X_train,
    feature='age',
    bins=20
)
```

### SHAP Global Explanations

**Summary Plot**:
```python
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

shap.summary_plot(shap_values, X_test, plot_type="bar")  # Feature importance
shap.summary_plot(shap_values, X_test)  # Distribution
```

**Dependence Plot**:
```python
shap.dependence_plot(
    ind='age',
    shap_values=shap_values,
    features=X_test,
    interaction_index='cholesterol'  # Color by interaction
)
```

### Surrogate Models

**Global Tree Surrogate**:
```python
from sklearn.tree import DecisionTreeRegressor, plot_tree

# Train black-box model
black_box = RandomForestRegressor().fit(X_train, y_train)

# Generate predictions
y_surrogate = black_box.predict(X_train)

# Train interpretable surrogate
surrogate = DecisionTreeRegressor(max_depth=5)
surrogate.fit(X_train, y_surrogate)

# Visualize
plot_tree(surrogate, feature_names=X_train.columns, filled=True)

# Assess fidelity
from sklearn.metrics import r2_score
fidelity = r2_score(black_box.predict(X_test), surrogate.predict(X_test))
print(f"Surrogate fidelity: {fidelity:.3f}")
```

## Evaluation Metrics

### Fidelity Metrics

**Global Fidelity** (for surrogates):
```
Fidelity = R²(f(X), g(X))
```
Measures how well interpretable model `g` approximates black-box `f`.

**Feature Importance Stability**:
```
Stability = Spearman_correlation(FI(subset₁), FI(subset₂))
```
Consistency across data subsets.

### Computational Efficiency

**PDP Complexity**:
- Grid points: `m`
- Instances: `n`
- Features: `p`
- Complexity: `O(m × n × p)` for all features

**Permutation Importance Complexity**:
- Features: `p`
- Repeats: `r`
- Complexity: `O(p × r × prediction_cost)`

### Completeness Metrics

**Interaction Coverage**:
```
Coverage = (Detected interactions) / (True interactions)
```

**Feature Coverage**:
Percentage of features with significant importance.

## Challenges & Limitations

### Methodological Challenges

**Feature Correlation**:
- **PDP Issue**: Marginalises over unrealistic feature combinations
- **Solution**: Use ALE or condition on realistic feature values
- **Example**: Age and years of education correlated; PDP may show "5-year-old with PhD"

**Computational Cost**:
- **PDP/ICE**: Requires many model evaluations
- **SHAP**: Exponential complexity (exact)
- **Mitigation**: Sampling, approximations, caching

**Interpretation Ambiguity**:
- **Permutation Importance**: Which feature interactions are captured?
- **SHAP**: Baseline choice affects values
- **Surrogate**: Fidelity-interpretability trade-off

### Practical Challenges

**High-Dimensional Data**:
- Visualising >3 features difficult
- Feature selection needed
- Curse of dimensionality for interactions

**Model Complexity**:
- Deep neural networks: millions of parameters
- Global explanations may oversimplify
- Multiple explanations needed for completeness

**Dynamic Models**:
- Online learning: explanations change over time
- Temporal dependencies: static explanations insufficient
- Concept drift: explanations become stale

## Research Directions

### Emerging Areas

**Causal Global Explanations**:
- Structural causal models
- Interventional feature importance
- Beyond observational statistics

**Temporal Global Explanations**:
- Evolution of feature importance
- Concept drift detection
- Dynamic model behaviour

**Multi-objective Global Explanations**:
- Balancing accuracy, fairness, and interpretability
- Pareto-optimal model selection
- Trade-off visualisation

**Scalable Global Explanations**:
- Distributed PDP computation
- Incremental feature importance
- Approximate methods for large-scale data

### Industry Innovation

**Microsoft InterpretML**:
- Explainable Boosting Machines (inherently global)
- ICE plots with distribution
- Interaction detection

**Google Cloud Explainable AI**:
- Feature attributions aggregated globally
- What-If Tool for PDP-like exploration
- TensorFlow Model Analysis integration

**DataRobot**:
- Automated feature importance
- Feature effects (PDP-like)
- Prediction explanations at scale

## Best Practices

### Method Selection

**Decision Tree**:
1. **Feature correlation**: High → ALE; Low → PDP
2. **Model type**: Trees → native importance; Any → permutation/SHAP
3. **Computational budget**: Limited → permutation; Ample → SHAP
4. **Explanation goal**: Feature ranking → importance; Relationships → PDP/ALE

### Implementation Guidelines

**Pre-deployment**:
- Validate feature importance with domain experts
- Check PDP/ALE for unexpected patterns
- Assess computational feasibility
- Test on held-out data

**Production**:
- Pre-compute global explanations (cached)
- Update periodically (model drift)
- Monitor feature importance shifts
- Dashboard for stakeholder access

**Post-deployment**:
- Track explanation usage
- Refine based on feedback
- Update as model evolves
- Audit for consistency

### Visualisation Best Practices

**Feature Importance**:
- Sort by magnitude
- Include confidence intervals (permutation variance)
- Highlight top-K features
- Use color for positive/negative effects

**PDP/ICE**:
- Show feature distribution (rug plot)
- Include confidence bands
- Limit number of ICE curves (avoid clutter)
- 2D PDPs for key interactions

**SHAP Plots**:
- Summary plot: distribution + importance
- Dependence plots: select top interactions
- Waterfall plots: global average explanation

### Documentation

**Model Cards** should include:
- Global explanation methods used
- Feature importance rankings
- Key feature effects (PDP summaries)
- Computational requirements

**User-Facing**:
- Executive summary of model behaviour
- Top-K feature importance with interpretation
- Key relationships (PDP insights)
- Known limitations

## References

### Academic Literature

- Friedman, J. H. (2001). "Greedy function approximation: A gradient boosting machine." *Annals of Statistics*, 29(5), 1189-1232
- Breiman, L. (2001). "Random forests." *Machine Learning*, 45(1), 5-32
- Goldstein, A., et al. (2015). "Peeking inside the black box: Visualizing statistical learning with plots of individual conditional expectation." *Journal of Computational and Graphical Statistics*, 24(1), 44-65
- Apley, D. W., & Zhu, J. (2020). "Visualizing the effects of predictor variables in black box supervised learning models." *Journal of the Royal Statistical Society: Series B*, 82(4), 1059-1086
- Friedman, J. H., & Popescu, B. E. (2008). "Predictive learning via rule ensembles." *Annals of Applied Statistics*, 2(3), 916-954

### Standards

- IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
- IEEE. (2021). *IEEE 7001-2021: Standard for Transparency of Autonomous Systems*

### Tools & Frameworks

- Scikit-learn. (2023). *Inspection module*
- Lundberg, S. M. (2023). *SHAP library*
- Molnar, C. (2022). *Interpretable Machine Learning*

## See Also

- [[Local Explanation]]
- [[Feature Importance]]
- [[Partial Dependence Plot]]
- [[Permutation Importance]]
- [[Individual Conditional Expectation]]
- [[SHAP]]
	- maturity:: draft
	- owl:class:: mv:GlobalExplanation
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: global-explanation-relationships
- ## About Global Explanation
	- Interpretability techniques that characterise the overall behaviour, decision-making patterns, and feature importance of a machine learning model across its entire input space, rather than explaining individual predictions.

	- ## Regional Trends
		- The Chainalysis 2024 Global Crypto Adoption Index highlights some interesting regional patterns:
		- Central & Southern Asia and Oceania (CSAO) dominate the adoption index, with 7 of the top 20 countries located in this region
		- DeFi activity has increased significantly in Sub-Saharan Africa, Latin America, and Eastern Europe
		- Stablecoin usage has shown strong growth among retail and professional-sized transfers in low-income and lower-middle-income countries, particularly in Sub-Saharan Africa and Latin America[4](https://www.chainalysis.com/blog/2024-global-crypto-adoption-index/)
	- ![e74d788c-fa31-491a-be03-e3033e759e24.png](assets/e74d788c-fa31-491a-be03-e3033e759e24_1717174484465_0.png){:width 500}
	- ![images.jpeg](assets/images_1723915016591_0.jpeg){:width 400}

	- ### Background
	- **Legal Status of Bitcoin Globally**: Bitcoin is legal in most nations, tolerated in many, and outlawed in a few.
	- **El Salvador's Decision**: The country's adoption of Bitcoin marks a significant change in its global reputation.

	- ## Case Study: CrowdStrike Global Outage

		- ### Fallout and Disruptions
			- The recent CrowdStrike global outage had far-reaching effects across various sectors:
				- **Air Travel**: Major disruptions occurred, with Sydney Airport and Virgin Australia reporting a "complete ground stop" due to the outage ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).
				- **Banks and Finance**: Institutions such as Bendigo Bank, ANZ, Commonwealth Bank, and Bank of Queensland faced significant issues, evidenced by numerous user reports on Downdetector ([AP News](https://apnews.com/live/internet-global-outage-crowdstrike-microsoft-downtime)).
				- **Healthcare**: Hospitals and Australian government agencies, including Centrelink and MyGov, were impacted ([Al Jazeera](https://www.aljazeera.com/news/2024/7/20/slow-recovery-after-crowdstrike-update-sparks-global-it-outage)).
				- **Media**: Networks of multiple media organizations, including the ABC, SBS, Channel 7, Channel 9, and News Corp Australia, were disrupted ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).
				- **Retail**: Retail outlets experienced difficulties in processing electronic payments, affecting shoppers' experiences ([AP News](https://apnews.com/live/internet-global-outage-crowdstrike-microsoft-downtime)).

	- ### Immersive and third person XR
		- In considering the needs of business to business and business to clientsocial VR is it useful to compare software platforms. We have seen thata global connected multiverse is a marketing proposition only, and maybe a decade or more away. Contenders currently look more like one ofthree catagories; games, limited massively multiplayer worlds, ormeeting support software. These will converge.

		- ## Central Bank Balance Sheets and Liquidity
			- King argues that the change in reserves, rather than the size of central bank balance sheets, is the critical factor. Since 2009, global central banks have added approximately $18 trillion in reserves, yet only about $500 billion has been dialed back during QT. He posits that even when reserves appear to decline, a "stealth QE" effect often persists, [contributing to an easing of financial conditions](https://www.bankofengland.co.uk/-/media/boe/files/ccbs/resources/understanding-the-central-bank-balance-sheet.pdf), [BIS](https://www.bis.org/publ/mktc11.pdf).

	- ## Global currency interactions
		- The legacy moniker “third world” came from a division of the world along economic lines.[[tomlinson2003third]] At the time this was the petrodollar / neo-institutional hegemony,[[caballero2008financial; @spiro2019hidden]] vs the economic superpower of the soviet block, and then ‘the rest’; unaligned economic powers.
		- This old framework has fallen away with the associated terminology, but it’s useful to look at what money ‘is’ from a global viewpoint, because all money is effectively trust in the liability held by some defined counter party.
		- Right now the dollar system is still predominant, but it seems likely that there are new axes forming, especially around the [ChineseYuan](https://www.wsj.com/articles/saudi-arabia-considers-accepting-yuan-instead-of-dollars-for-chinese-oil-sales-11647351541).It’s clear that central banks have been aware of this potential transition away from a global dollar / energy system. The Dollar has potentially suffered from the radical expansion of the money supply over the last 70 years or so under the private “Eurodollar” system.[[grewal2020struggling]] Macro markets commentator Peccatiello [describes this](https://themacrocompass.substack.com/p/usd-hidden-debt#details) asfollows: it“Our monetary and credit system is USD-centric: the lions share of international debt, trade invoices, asset classes and FX volume is settled or denominated in US Dollars. Funnily enough though, direct access to $ liquidity is only available to entities located in theUnited States but in a credit-based system the rest of the world also has an incentive to leverage in US Dollars to boost or enhance their global business models. That means European banks, Brazilian corporates or Japanese insurance companies which want to do global business will most likely get exposure to $-denominated assets and liabilities ($debt) despite being domiciled outside the United States.”
		- Some policy makers have been looking back to the great economist John Maynard Keynes’ ideas for a neutral basket of assets as a global synthetic hegemonic currency[[carney2019growing; @piffaretti2009reshaping]] which wouldalmost certainly consist partly of gold.[[stoeferle2018gold]] Gold as a utilitarian commodity trades at a premium because of it’s history as a money, and like Bitcoin, there are [serious consequences](https://www.newyorker.com/magazine/2023/02/27/the-dystopian-underworld-of-south-africas-illegal-gold-mines)to it’s perceived value to humans.
		- Use of the dollar system has recently been shown more and more to be contingent on adherence to US defined political principles. This is evidenced most starkly by the seizure of Russian central bank [foreign reserves](https://twitter.com/RussianEmbassy/status/1504530573527760909),a new and untried projection of monetary power. Counter intuitively this allowed Russia to demand sale of it’s natural resources in their native Ruble, rapidly increasing the buying power of their currency. It seems that the [‘currencywars’](https://mronline.org/2022/04/16/russias-sergey-glazyev-introduces-the-new-global-financial-system/)are accelerating. Putin (who to be clear, is a dictator and aggressor)[recently said](https://finance.yahoo.com/news/russia-calls-payment-system-based-135512758.html)it“The technology of digital currencies and blockchains can be used to create a new system of international settlements that will be much more convenient, absolutely safe for its users and, most importantly, will not depend on banks or interference by third countries”

- # Global Centralised Ledgers
	- Beyond even national CBDCs it is now possible to find discussion aroundweaving these together at a supranational level. Indeed it seems that competition is starting to emerge. The Bank for InternationalSettlements (BIS) and the International Monetary Fund (IMF) have both presented plans to deploy global ledgers to support programmable CentralBank Digital Currencies.

- # Global politics

	- #### Internet Norms and Dissent
		- **Challenges in Establishing Norms**: Varying global expectations make establishing internet norms complex.
		- **Codes of Conduct and Policies**: Essential for constructive online discourse and handling dissent.

	- ##### Global collaboration and remuneration
		- In the book “Ghosts of my life”[@fisher2014ghosts] Fisher asserts that
		  there has been a slowing, even a ‘cancellation’ of creative progress in
		  developed societies, their art, and their media. His contention is that
		  neoliberalism itself is to blame. He says  
		  it“It is the contention of this book that 21st-century culture is marked
		  by the same anachronism and inertia which afflicted Sapphire and Steel
		  in their final adventure. But this status has been buried, interred
		  behind a superficial frenzy of ‘newness’, of perpetual movement. The
		  ‘jumbling up of time’, the montaging of earlier eras, has ceased to be
		  worthy of comment; it is now so prevalent that it is no longer even
		  noticed.”
		- It is the feeling of the authors of this book that the creative and
		  inspirational efforts of the whole world may be needed to heal these
		  deep wounds. It is possible that by connecting creatives with very
		  different global perspectives, directly into ‘Western’ production
		  pipelines, that we will be able to see the shape of this potential.

	- #### Federations of webs of trust and economics
		- Nostr is developing fast enough to provide global bridges between
		  metaverse instances.

	- #### The LATER Phase
		- **Fully Autonomous [[Agents]] and AI as lifelong companions**
			- AI operating without human supervision in various sectors. Value globally is arbitraged by these agents in near real-time. A renaissance of the idea of smart efficient markets?
			- Global access to hyperlocal models which match context and personal choices, through personal devices which need not be cloud connected.
			- AI understanding human emotions for psychological, contextual, and business support.
			- No idea... I have no idea...

	- ## Regional Trends
		- The Chainalysis 2024 Global Crypto Adoption Index highlights some interesting regional patterns:
		- Central & Southern Asia and Oceania (CSAO) dominate the adoption index, with 7 of the top 20 countries located in this region
		- DeFi activity has increased significantly in Sub-Saharan Africa, Latin America, and Eastern Europe
		- Stablecoin usage has shown strong growth among retail and professional-sized transfers in low-income and lower-middle-income countries, particularly in Sub-Saharan Africa and Latin America[4](https://www.chainalysis.com/blog/2024-global-crypto-adoption-index/)
	- ![e74d788c-fa31-491a-be03-e3033e759e24.png](assets/e74d788c-fa31-491a-be03-e3033e759e24_1717174484465_0.png){:width 500}
	- ![images.jpeg](assets/images_1723915016591_0.jpeg){:width 400}

	- ### Background
	- **Legal Status of Bitcoin Globally**: Bitcoin is legal in most nations, tolerated in many, and outlawed in a few.
	- **El Salvador's Decision**: The country's adoption of Bitcoin marks a significant change in its global reputation.

	- ## Case Study: CrowdStrike Global Outage

		- ### Fallout and Disruptions
			- The recent CrowdStrike global outage had far-reaching effects across various sectors:
				- **Air Travel**: Major disruptions occurred, with Sydney Airport and Virgin Australia reporting a "complete ground stop" due to the outage ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).
				- **Banks and Finance**: Institutions such as Bendigo Bank, ANZ, Commonwealth Bank, and Bank of Queensland faced significant issues, evidenced by numerous user reports on Downdetector ([AP News](https://apnews.com/live/internet-global-outage-crowdstrike-microsoft-downtime)).
				- **Healthcare**: Hospitals and Australian government agencies, including Centrelink and MyGov, were impacted ([Al Jazeera](https://www.aljazeera.com/news/2024/7/20/slow-recovery-after-crowdstrike-update-sparks-global-it-outage)).
				- **Media**: Networks of multiple media organizations, including the ABC, SBS, Channel 7, Channel 9, and News Corp Australia, were disrupted ([Reuters](https://www.reuters.com/technology/global-cyber-outage-grounds-flights-hits-media-financial-telecoms-2024-07-19/)).
				- **Retail**: Retail outlets experienced difficulties in processing electronic payments, affecting shoppers' experiences ([AP News](https://apnews.com/live/internet-global-outage-crowdstrike-microsoft-downtime)).

	- ### Immersive and third person XR
		- In considering the needs of business to business and business to clientsocial VR is it useful to compare software platforms. We have seen thata global connected multiverse is a marketing proposition only, and maybe a decade or more away. Contenders currently look more like one ofthree catagories; games, limited massively multiplayer worlds, ormeeting support software. These will converge.

		- ## Central Bank Balance Sheets and Liquidity
			- King argues that the change in reserves, rather than the size of central bank balance sheets, is the critical factor. Since 2009, global central banks have added approximately $18 trillion in reserves, yet only about $500 billion has been dialed back during QT. He posits that even when reserves appear to decline, a "stealth QE" effect often persists, [contributing to an easing of financial conditions](https://www.bankofengland.co.uk/-/media/boe/files/ccbs/resources/understanding-the-central-bank-balance-sheet.pdf), [BIS](https://www.bis.org/publ/mktc11.pdf).

	- ## Global currency interactions
		- The legacy moniker “third world” came from a division of the world along economic lines.[[tomlinson2003third]] At the time this was the petrodollar / neo-institutional hegemony,[[caballero2008financial; @spiro2019hidden]] vs the economic superpower of the soviet block, and then ‘the rest’; unaligned economic powers.
		- This old framework has fallen away with the associated terminology, but it’s useful to look at what money ‘is’ from a global viewpoint, because all money is effectively trust in the liability held by some defined counter party.
		- Right now the dollar system is still predominant, but it seems likely that there are new axes forming, especially around the [ChineseYuan](https://www.wsj.com/articles/saudi-arabia-considers-accepting-yuan-instead-of-dollars-for-chinese-oil-sales-11647351541).It’s clear that central banks have been aware of this potential transition away from a global dollar / energy system. The Dollar has potentially suffered from the radical expansion of the money supply over the last 70 years or so under the private “Eurodollar” system.[[grewal2020struggling]] Macro markets commentator Peccatiello [describes this](https://themacrocompass.substack.com/p/usd-hidden-debt#details) asfollows: it“Our monetary and credit system is USD-centric: the lions share of international debt, trade invoices, asset classes and FX volume is settled or denominated in US Dollars. Funnily enough though, direct access to $ liquidity is only available to entities located in theUnited States but in a credit-based system the rest of the world also has an incentive to leverage in US Dollars to boost or enhance their global business models. That means European banks, Brazilian corporates or Japanese insurance companies which want to do global business will most likely get exposure to $-denominated assets and liabilities ($debt) despite being domiciled outside the United States.”
		- Some policy makers have been looking back to the great economist John Maynard Keynes’ ideas for a neutral basket of assets as a global synthetic hegemonic currency[[carney2019growing; @piffaretti2009reshaping]] which wouldalmost certainly consist partly of gold.[[stoeferle2018gold]] Gold as a utilitarian commodity trades at a premium because of it’s history as a money, and like Bitcoin, there are [serious consequences](https://www.newyorker.com/magazine/2023/02/27/the-dystopian-underworld-of-south-africas-illegal-gold-mines)to it’s perceived value to humans.
		- Use of the dollar system has recently been shown more and more to be contingent on adherence to US defined political principles. This is evidenced most starkly by the seizure of Russian central bank [foreign reserves](https://twitter.com/RussianEmbassy/status/1504530573527760909),a new and untried projection of monetary power. Counter intuitively this allowed Russia to demand sale of it’s natural resources in their native Ruble, rapidly increasing the buying power of their currency. It seems that the [‘currencywars’](https://mronline.org/2022/04/16/russias-sergey-glazyev-introduces-the-new-global-financial-system/)are accelerating. Putin (who to be clear, is a dictator and aggressor)[recently said](https://finance.yahoo.com/news/russia-calls-payment-system-based-135512758.html)it“The technology of digital currencies and blockchains can be used to create a new system of international settlements that will be much more convenient, absolutely safe for its users and, most importantly, will not depend on banks or interference by third countries”

- # Global Centralised Ledgers
	- Beyond even national CBDCs it is now possible to find discussion aroundweaving these together at a supranational level. Indeed it seems that competition is starting to emerge. The Bank for InternationalSettlements (BIS) and the International Monetary Fund (IMF) have both presented plans to deploy global ledgers to support programmable CentralBank Digital Currencies.

- # Global politics

	- #### Internet Norms and Dissent
		- **Challenges in Establishing Norms**: Varying global expectations make establishing internet norms complex.
		- **Codes of Conduct and Policies**: Essential for constructive online discourse and handling dissent.

	- ##### Global collaboration and remuneration
		- In the book “Ghosts of my life”[@fisher2014ghosts] Fisher asserts that
		  there has been a slowing, even a ‘cancellation’ of creative progress in
		  developed societies, their art, and their media. His contention is that
		  neoliberalism itself is to blame. He says  
		  it“It is the contention of this book that 21st-century culture is marked
		  by the same anachronism and inertia which afflicted Sapphire and Steel
		  in their final adventure. But this status has been buried, interred
		  behind a superficial frenzy of ‘newness’, of perpetual movement. The
		  ‘jumbling up of time’, the montaging of earlier eras, has ceased to be
		  worthy of comment; it is now so prevalent that it is no longer even
		  noticed.”
		- It is the feeling of the authors of this book that the creative and
		  inspirational efforts of the whole world may be needed to heal these
		  deep wounds. It is possible that by connecting creatives with very
		  different global perspectives, directly into ‘Western’ production
		  pipelines, that we will be able to see the shape of this potential.

	- #### Federations of webs of trust and economics
		- Nostr is developing fast enough to provide global bridges between
		  metaverse instances.

	- #### The LATER Phase
		- **Fully Autonomous [[Agents]] and AI as lifelong companions**
			- AI operating without human supervision in various sectors. Value globally is arbitraged by these agents in near real-time. A renaissance of the idea of smart efficient markets?
			- Global access to hyperlocal models which match context and personal choices, through personal devices which need not be cloud connected.
			- AI understanding human emotions for psychological, contextual, and business support.
			- No idea... I have no idea...

	- ## Institutional and Government Adoption
		- The Chainalysis 2024 Global Crypto Adoption Index highlights some interesting regional patterns:
		- Central & Southern Asia and Oceania (CSAO) dominate the adoption index, with 7 of the top 20 countries located in this region
		- DeFi activity has increased significantly in Sub-Saharan Africa, Latin America, and Eastern Europe
		- Stablecoin usage has shown strong growth among retail and professional-sized transfers in low-income and lower-middle-income countries, particularly in Sub-Saharan Africa and Latin America[4](https://www.chainalysis.com/blog/2024-global-crypto-adoption-index/)
	- ![e74d788c-fa31-491a-be03-e3033e759e24.png](assets/e74d788c-fa31-491a-be03-e3033e759e24_1717174484465_0.png){:width 500}
	- ![images.jpeg](assets/images_1723915016591_0.jpeg){:width 400}

					- #### Global Business Conference
						- A virtual platform for hosting business conferences and networking events.

		- ### **3. Collective Empowerment**
				- provide global interoperability, scalability, stability, and resiliency;
				- enable global competition;

		- ##### Jurisdictional / legislative arbitrage
			- The reach of Bitcoin and it’s ability to undercut the global money systems, delivering savings for those with a first mover advantage, and the current paucity of agreed legislation has set up an interesting and rare condition. Bitcoin encourages something called jurisdictional arbitrage; the race to take advantage of the variance in national approaches to the asset class. This section could perhaps be explored as a list of opportunities, but from the viewpoint of our SME business use case it’s far more likely that these destabilising ‘features’ are risks:
				- **Difference in ‘crypto’ profit models**. Countries and jurisdictions can apply different charges for use of trading platforms and capital gains tax enjoys huge variance. Some countries are now competing to offer zero tax as a way to attract valuable tech mind share.
				- **Income tax** is harder to monitor in a truly international context. This is variously pitched around the world. It’s hard to monitor this stuff and tax at source like with company employees wages, because it’s basically designed to be hard to monitor. This results in:
				- **Passport perks**. Countries are already selling residence and company rights against Bitcoin marketing. There’s a lot of new ways to buy passports and citizenship based on ‘inclusion’ in this community now. It’s a terrible look. The early adopters can live international jetsetter lifestyles and ca benefit from:
				- **Business subsidies** such as those appearing in Switzerland, [Hondoras](https://davisclute.medium.com/visiting-a-startup-city-in-honduras-73d9c026ee6d), El Salvador, Africa etc. This means a new divide is emerging since some countries are in instead applying:
				- **KYC/AML** rules which make onboarding into this technology harder. Currently there’s a trend toward globally capturing information about people buying these assets, but it’s effectively tech warfare now with engineers, rapidly producing tools to circumvent slow and varied legislation. The best example of this remains El Salvador, where Bitcoin is legal tender, and has perhaps kickstarted:
				- **Bond issuances**. El Salvador are having a [faltering start](https://www.ft.com/content/4fa63c8c-51f5-4512-b522-76dd75e62916) to their promised bond issuance. It might be that all of this is a harbinger of the rise of:
				- **The Network State** is a proposal by Srinivasan.[[Srinivasan2022]] His is a transhumanist thesis which he describes:

	- ## Global currency interactions
		- The legacy moniker “third world” came from a division of the world along economic lines.[[tomlinson2003third]] At the time this was the petrodollar / neo-institutional hegemony,[[caballero2008financial; @spiro2019hidden]] vs the economic superpower of the soviet block, and then ‘the rest’; unaligned economic powers.
		- This old framework has fallen away with the associated terminology, but it’s useful to look at what money ‘is’ from a global viewpoint, because all money is effectively trust in the liability held by some defined counter party.
		- Right now the dollar system is still predominant, but it seems likely that there are new axes forming, especially around the [ChineseYuan](https://www.wsj.com/articles/saudi-arabia-considers-accepting-yuan-instead-of-dollars-for-chinese-oil-sales-11647351541).It’s clear that central banks have been aware of this potential transition away from a global dollar / energy system. The Dollar has potentially suffered from the radical expansion of the money supply over the last 70 years or so under the private “Eurodollar” system.[[grewal2020struggling]] Macro markets commentator Peccatiello [describes this](https://themacrocompass.substack.com/p/usd-hidden-debt#details) asfollows: it“Our monetary and credit system is USD-centric: the lions share of international debt, trade invoices, asset classes and FX volume is settled or denominated in US Dollars. Funnily enough though, direct access to $ liquidity is only available to entities located in theUnited States but in a credit-based system the rest of the world also has an incentive to leverage in US Dollars to boost or enhance their global business models. That means European banks, Brazilian corporates or Japanese insurance companies which want to do global business will most likely get exposure to $-denominated assets and liabilities ($debt) despite being domiciled outside the United States.”
		- Some policy makers have been looking back to the great economist John Maynard Keynes’ ideas for a neutral basket of assets as a global synthetic hegemonic currency[[carney2019growing; @piffaretti2009reshaping]] which wouldalmost certainly consist partly of gold.[[stoeferle2018gold]] Gold as a utilitarian commodity trades at a premium because of it’s history as a money, and like Bitcoin, there are [serious consequences](https://www.newyorker.com/magazine/2023/02/27/the-dystopian-underworld-of-south-africas-illegal-gold-mines)to it’s perceived value to humans.
		- Use of the dollar system has recently been shown more and more to be contingent on adherence to US defined political principles. This is evidenced most starkly by the seizure of Russian central bank [foreign reserves](https://twitter.com/RussianEmbassy/status/1504530573527760909),a new and untried projection of monetary power. Counter intuitively this allowed Russia to demand sale of it’s natural resources in their native Ruble, rapidly increasing the buying power of their currency. It seems that the [‘currencywars’](https://mronline.org/2022/04/16/russias-sergey-glazyev-introduces-the-new-global-financial-system/)are accelerating. Putin (who to be clear, is a dictator and aggressor)[recently said](https://finance.yahoo.com/news/russia-calls-payment-system-based-135512758.html)it“The technology of digital currencies and blockchains can be used to create a new system of international settlements that will be much more convenient, absolutely safe for its users and, most importantly, will not depend on banks or interference by third countries”

- # Global Centralised Ledgers
	- Beyond even national CBDCs it is now possible to find discussion aroundweaving these together at a supranational level. Indeed it seems that competition is starting to emerge. The Bank for InternationalSettlements (BIS) and the International Monetary Fund (IMF) have both presented plans to deploy global ledgers to support programmable CentralBank Digital Currencies.

- # Centralised AI and inequality
	- Negative:
		- Centralised AI systems are exacerbating global inequality, with those already in power benefiting the most economically and in decision-making
		- AI and automation have the potential to be labour-saving, increase unemployment, and concentrate wealth among a small fraction of highly skilled individuals and leading countries
		- The proliferation of AI threatens to reverse economic gains made by developing countries in recent decades, worsening poverty and inequality
		- AI technologies may be unsuited to local contexts and conditions in the developing world
		- Some positive signs are emerging from national AI policies focused on inclusion in certain countries
		- Steering AI research and development to maximise social value and redistributing power in AI governance could make systems more suitable to diverse global contexts
		- Non-distortionary taxation could potentially compensate those displaced or disadvantaged by AI to enable Pareto improvements
		- Local inferencing on virtually ubiquitous mobile phones could enable people to work and learn in their own language and style without internet charges, potentially mitigating inequalities
	- I

	- #### Internet Norms and Dissent
		- **Challenges in Establishing Norms**: Varying global expectations make establishing internet norms complex.
		- **Codes of Conduct and Policies**: Essential for constructive online discourse and handling dissent.

	- #### Federations of webs of trust and economics
		- Nostr is developing fast enough to provide global bridges between
		  metaverse instances.

	- #### The NEXT Phase
		- **Fully Autonomous [[Agents]] and AI as lifelong companions**
			- AI operating without human supervision in various sectors. Value globally is arbitraged by these agents in near real-time. A renaissance of the idea of smart efficient markets?
			- Global access to hyperlocal models which match context and personal choices, through personal devices which need not be cloud connected.
			- AI understanding human emotions for psychological, contextual, and business support.
			- No idea... I have no idea...

	- ## Case Study: CrowdStrike Global Outage
		- Despite the technical nature of the outage, there were concerns about potential exploitation:
		- **Potential Exploitation**: CrowdStrike CEO George Kurtz highlighted that "bad actors will try to exploit events like this," underscoring the persistent challenges in cybersecurity, especially with Microsoft systems ([Al Jazeera](https://www.aljazeera.com/news/2024/7/20/slow-recovery-after-crowdstrike-update-sparks-global-it-outage)).

	- ##### Engage
		-
		-
		- PC first, quest is side loadable but that’s a technical issue
		- In a [GQprofile](https://www.gq.com/story/tim-cook-global-creativity-awards-cover-2023?mbid=social_twitter)Cook, the Apple CEO talked at length about the challenges andopportunities of AR headsets. He has been emphasizing the importance ofaugmented reality over VR for almost a decade, believing that AR canenhance communication and connection by overlaying digital elements onthe physical world. Cook’s vision aligns with Apple’s rumoured mixedreality headset, which is expected to cost around $3,000 and focus on‘copresence’, which we have discussed at length in this chapter. Apple’sapproach differs from Meta’s metaverse, as Apple aims to integratedigital aspects into the real world rather than create purely digitalspaces. This is an interesting area for our applications of bringingsmall teams together, but the pricing at this time is significantly atodds with our chosen market. Cook, like this book, has highlighted AR’spotential in education and its ability to bring people together in thereal world.

		- ##### Jurisdictional / legislative arbitrage
			- The reach of Bitcoin and it’s ability to undercut the global money systems, delivering savings for those with a first mover advantage, and the current paucity of agreed legislation has set up an interesting and rare condition. Bitcoin encourages something called jurisdictional arbitrage; the race to take advantage of the variance in national approaches to the asset class. This section could perhaps be explored as a list of opportunities, but from the viewpoint of our SME business use case it’s far more likely that these destabilising ‘features’ are risks:
				- **Difference in ‘crypto’ profit models**. Countries and jurisdictions can apply different charges for use of trading platforms and capital gains tax enjoys huge variance. Some countries are now competing to offer zero tax as a way to attract valuable tech mind share.
				- **Income tax** is harder to monitor in a truly international context. This is variously pitched around the world. It’s hard to monitor this stuff and tax at source like with company employees wages, because it’s basically designed to be hard to monitor. This results in:
				- **Passport perks**. Countries are already selling residence and company rights against Bitcoin marketing. There’s a lot of new ways to buy passports and citizenship based on ‘inclusion’ in this community now. It’s a terrible look. The early adopters can live international jetsetter lifestyles and ca benefit from:
				- **Business subsidies** such as those appearing in Switzerland, [Hondoras](https://davisclute.medium.com/visiting-a-startup-city-in-honduras-73d9c026ee6d), El Salvador, Africa etc. This means a new divide is emerging since some countries are in instead applying:
				- **KYC/AML** rules which make onboarding into this technology harder. Currently there’s a trend toward globally capturing information about people buying these assets, but it’s effectively tech warfare now with engineers, rapidly producing tools to circumvent slow and varied legislation. The best example of this remains El Salvador, where Bitcoin is legal tender, and has perhaps kickstarted:

	- ## Global currency interactions
		- The legacy moniker “third world” came from a division of the world along economic lines.[[tomlinson2003third]] At the time this was the petrodollar / neo-institutional hegemony,[[caballero2008financial; @spiro2019hidden]] vs the economic superpower of the soviet block, and then ‘the rest’; unaligned economic powers.
		- This old framework has fallen away with the associated terminology, but it’s useful to look at what money ‘is’ from a global viewpoint, because all money is effectively trust in the liability held by some defined counter party.
		- Right now the dollar system is still predominant, but it seems likely that there are new axes forming, especially around the [ChineseYuan](https://www.wsj.com/articles/saudi-arabia-considers-accepting-yuan-instead-of-dollars-for-chinese-oil-sales-11647351541).It’s clear that central banks have been aware of this potential transition away from a global dollar / energy system. The Dollar has potentially suffered from the radical expansion of the money supply over the last 70 years or so under the private “Eurodollar” system.[[grewal2020struggling]] Macro markets commentator Peccatiello [describes this](https://themacrocompass.substack.com/p/usd-hidden-debt#details) asfollows: it“Our monetary and credit system is USD-centric: the lions share of international debt, trade invoices, asset classes and FX volume is settled or denominated in US Dollars. Funnily enough though, direct access to $ liquidity is only available to entities located in theUnited States but in a credit-based system the rest of the world also has an incentive to leverage in US Dollars to boost or enhance their global business models. That means European banks, Brazilian corporates or Japanese insurance companies which want to do global business will most likely get exposure to $-denominated assets and liabilities ($debt) despite being domiciled outside the United States.”
		- Some policy makers have been looking back to the great economist John Maynard Keynes’ ideas for a neutral basket of assets as a global synthetic hegemonic currency[[carney2019growing; @piffaretti2009reshaping]] which wouldalmost certainly consist partly of gold.[[stoeferle2018gold]] Gold as a utilitarian commodity trades at a premium because of it’s history as a money, and like Bitcoin, there are [serious consequences](https://www.newyorker.com/magazine/2023/02/27/the-dystopian-underworld-of-south-africas-illegal-gold-mines)to it’s perceived value to humans.
		- Use of the dollar system has recently been shown more and more to be contingent on adherence to US defined political principles. This is evidenced most starkly by the seizure of Russian central bank [foreign reserves](https://twitter.com/RussianEmbassy/status/1504530573527760909),a new and untried projection of monetary power. Counter intuitively this allowed Russia to demand sale of it’s natural resources in their native Ruble, rapidly increasing the buying power of their currency. It seems that the [‘currencywars’](https://mronline.org/2022/04/16/russias-sergey-glazyev-introduces-the-new-global-financial-system/)are accelerating. Putin (who to be clear, is a dictator and aggressor)[recently said](https://finance.yahoo.com/news/russia-calls-payment-system-based-135512758.html)it“The technology of digital currencies and blockchains can be used to create a new system of international settlements that will be much more convenient, absolutely safe for its users and, most importantly, will not depend on banks or interference by third countries”

- # Global Centralised Ledgers
	- Beyond even national CBDCs it is now possible to find discussion aroundweaving these together at a supranational level. Indeed it seems that competition is starting to emerge. The Bank for InternationalSettlements (BIS) and the International Monetary Fund (IMF) have both presented plans to deploy global ledgers to support programmable CentralBank Digital Currencies.

	- #### Internet Norms and Dissent
		- **Challenges in Establishing Norms**: Varying global expectations make establishing internet norms complex.
		- **Codes of Conduct and Policies**: Essential for constructive online discourse and handling dissent.

	- ##### Behaviour incentives, arbitration, and penalties
		- Nostr is developing fast enough to provide global bridges between
		  metaverse instances.

		- ##### Jurisdictional / legislative arbitrage
			- The reach of Bitcoin and it’s ability to undercut the global money systems, delivering savings for those with a first mover advantage, and the current paucity of agreed legislation has set up an interesting and rare condition. Bitcoin encourages something called jurisdictional arbitrage; the race to take advantage of the variance in national approaches to the asset class. This section could perhaps be explored as a list of opportunities, but from the viewpoint of our SME business use case it’s far more likely that these destabilising ‘features’ are risks:
				- **Difference in ‘crypto’ profit models**. Countries and jurisdictions can apply different charges for use of trading platforms and capital gains tax enjoys huge variance. Some countries are now competing to offer zero tax as a way to attract valuable tech mind share.
				- **Income tax** is harder to monitor in a truly international context. This is variously pitched around the world. It’s hard to monitor this stuff and tax at source like with company employees wages, because it’s basically designed to be hard to monitor. This results in:
				- **Passport perks**. Countries are already selling residence and company rights against Bitcoin marketing. There’s a lot of new ways to buy passports and citizenship based on ‘inclusion’ in this community now. It’s a terrible look. The early adopters can live international jetsetter lifestyles and ca benefit from:

	- ## Global currency interactions
		- The legacy moniker “third world” came from a division of the world along economic lines.[[tomlinson2003third]] At the time this was the petrodollar / neo-institutional hegemony,[[caballero2008financial; @spiro2019hidden]] vs the economic superpower of the soviet block, and then ‘the rest’; unaligned economic powers.
		- Some policy makers have been looking back to the great economist John Maynard Keynes’ ideas for a neutral basket of assets as a global synthetic hegemonic currency[[carney2019growing; @piffaretti2009reshaping]] which wouldalmost certainly consist partly of gold.[[stoeferle2018gold]] Gold as a utilitarian commodity trades at a premium because of it’s history as a money, and like Bitcoin, there are [serious consequences](https://www.newyorker.com/magazine/2023/02/27/the-dystopian-underworld-of-south-africas-illegal-gold-mines)to it’s perceived value to humans.
		- Use of the dollar system has recently been shown more and more to be contingent on adherence to US defined political principles. This is evidenced most starkly by the seizure of Russian central bank [foreign reserves](https://twitter.com/RussianEmbassy/status/1504530573527760909),a new and untried projection of monetary power. Counter intuitively this allowed Russia to demand sale of it’s natural resources in their native Ruble, rapidly increasing the buying power of their currency. It seems that the [‘currencywars’](https://mronline.org/2022/04/16/russias-sergey-glazyev-introduces-the-new-global-financial-system/)are accelerating. Putin (who to be clear, is a dictator and aggressor)[recently said](https://finance.yahoo.com/news/russia-calls-payment-system-based-135512758.html)it“The technology of digital currencies and blockchains can be used to create a new system of international settlements that will be much more convenient, absolutely safe for its users and, most importantly, will not depend on banks or interference by third countries”
				- From 2005 to 2020, the United States successfully modified the international financial system, further separating itself from other states in the global financial hierarchy. This was achieved through various means, including expanding conceptions of US jurisdictional reach, implementing secondary sanctions, and emerging as the dominant financial power with no peer in this domain.
				- The United States leveraged sanctions and financial regulations to reshape the international system. This involved entering into state-on-state competition in the financial domain, resetting expectations for US organisations, banks, and third parties, and effectively ending the concept of neutrality in the global financial system.
				- As a result of these changes, global banks now operate according to US norms and expectations, even when they are not headquartered in the United States. These norms and practices are disseminated throughout the banking sector, from larger institutions to smaller banks, and ultimately into the non-financial economy.
				- A notable case study in this context is the 2012 deferred prosecution agreement (DPA) between the US Department of Justice and HSBC. HSBC was fined for knowingly violating US sanctions, and the DPA was used as a tool to fundamentally restructure HSBC's global business. The agreement required HSBC to hire new leadership, including former US Treasury officials, cut relationships with over 100 correspondent banks worldwide, sell more than 80 subsidiary businesses, and cease operations in 20 countries deemed high-risk by US authorities.
				- The influence of US regulators over global finance is likely to persist regardless of changes in US administration. However, this influence may become more pronounced under administrations that take a more unilateralist approach to foreign policy and financial regulation.
				- The real-world impact of these financial sanctions and regulations is illustrated by personal experiences, such as the difficulties faced when travelling to sanctioned countries like Iran. Travellers may find themselves unable to access funds through normal banking channels, necessitating the carrying of large amounts of cash and facing potential financial difficulties in emergency situations.
	- India has expressed far more interest in the technology, and of course their addressable market is huge! They have published a ‘[conceptnote](https://twitter.com/RBI/status/1578329048446828544?)’ in whichthey assert that a digital Rupee would be faster, cheaper, and easier tomaintain. The key difference in India’s situation is the large areas ofthe rural population where mobile internet is more patchy. In suchsituations a cash equivalent stablecoin token with cash finality which can be transferred between mobile phone wallets itwithout an internet connection is a huge boon. It seems very likely that India is moving toreact to the innovation threat posed by cryptocurrencies to their owncash infrastructure. They are [piloting thetechnology](https://www.reuters.com/article/idUSKBN2RQ0WO) already.Similarly there seems to be a strong, and [predictablyilliberal](https://www.bloomberg.com/news/articles/2022-12-06/nigeria-limits-cash-transactions-to-push-enaira-and-other-payments)push for transition to digital money in Nigeria. Again this is an enormous number of people, and it is hard not to be suspicious of future abuse of the system by governments.
	- In the USA this text from Congressman Tom Emmer shows how complex and interesting this debate is becoming.it“Today, I introduced a bill prohibiting the Fed from issuing a central bank digital currency directly to individuals. Here’s why it matters: As other countries, likeChina, develop CBDCs that fundamentally omit the benefits and protections of cash, it is more important than ever to ensure the UnitedStates’ digital currency policy protects financial privacy, maintains the dollar’s dominance, and cultivates innovation.  CBDCs that fail to adhere to these three basic principles could enable an entity like the Federal Reserve to mobilize itself into a retail bank, collect personally identifiable information on users, and track their transactions indefinitely.  Not only does this CBDC model raise “single point of failure” issues,leaving Americans’ financial information vulnerable to attack, but it could be used as a surveillance tool that Americans should never be forced to tolerate from their own government.  Requiring users to open an account at the Fed to access a United StatesCBDC would put the Fed on an insidious path akin to China’s digital authoritarianism.  Any CBDC implemented by the Fed must be open, permissionless, and private. This means that any digital dollar must be accessible to all,transact on a blockchain that is transparent to all, and maintain the privacy elements of cash.  In order to maintain the dollar’s status as the world’s reserve currency in a digital age, it is important that the United States lead with aposture that prioritizes innovation and does not aim to compete with theprivate sector.  Simply put, we must prioritize blockchain technology with American characteristics, rather than mimic China’s digital authoritarianism outof fear.”
	- Most analysts now seem to think that there is little appetite to replace established ’Western’ cash with CBDCs. Most significantly such productswould need the support of retail banks, and it is not in their interestto service such a product. Their business model relies on using retail deposits for providing loans, and it is these deposits, not cash itself that would be the most addressable market for a CBDC. Banks don’t want people to self custody money. In addition it exposes the whole banking system to a higher risk of bank runs. Such a self custody, interestbearing, central government backed asset would have significantly less counterparty risk than even bank deposits, and at times of high systemic stress it seems likely that money would flow to where it’s thoughtsafest, exposing the retail banks to runs. Fabio Panetta of the ECBsaid: it“If we give access to a means of payment, which is relatively limited, there are no transaction costs because you only need to have a smartphone. There will be risks that people could use this possibility to move, for example, their deposits of other banks or their money outof financial intermediates.”
		- All of the proposed solutions to these problems such as caps and negative interest penalties seem poorlythought through. Held and Smolenski present a [detailed and rigorousnegativecritique](https://www.btcpolicy.org/articles/why-the-u-s-should-reject-central-bank-digital-currencies)of the dystopian ramifications of the technology. In their conclusion they point out that: it“Central bank digital currencies (CBDCs)represent an extension of state control over economic life. CBDCsprovide governments with direct access to every transaction in that currency conducted by any individual anywhere in the world. As governments worldwide routinely share data with one another, individual transaction data will quickly become known to any government in a datasharing arrangement. Given the frequency with which government databases are compromised, this arrangement virtually ensures that anyone’s transaction data will eventually become available for global perusal.”

	- ##### Behaviour incentives, arbitration, and penalties
		- Nostr is developing fast enough to provide global bridges between
		  metaverse instances.

		- ##### Jurisdictional / legislative arbitrage
			- The reach of Bitcoin and it’s ability to undercut the global money systems, delivering savings for those with a first mover advantage, and the current paucity of agreed legislation has set up an interesting and rare condition. Bitcoin encourages something called jurisdictional arbitrage; the race to take advantage of the variance in national approaches to the asset class. This section could perhaps be explored as a list of opportunities, but from the viewpoint of our SME business use case it’s far more likely that these destabilising ‘features’ are risks:
				- **Difference in ‘crypto’ profit models**. Countries and jurisdictions can apply different charges for use of trading platforms and capital gains tax enjoys huge variance. Some countries are now competing to offer zero tax as a way to attract valuable tech mind share.
				- **Income tax** is harder to monitor in a truly international context. This is variously pitched around the world. It’s hard to monitor this stuff and tax at source like with company employees wages, because it’s basically designed to be hard to monitor. This results in:
				- **Passport perks**. Countries are already selling residence and company rights against Bitcoin marketing. There’s a lot of new ways to buy passports and citizenship based on ‘inclusion’ in this community now. It’s a terrible look. The early adopters can live international jetsetter lifestyles and ca benefit from:

	- ##### Behaviour incentives, arbitration, and penalties
		- Nostr is developing fast enough to provide global bridges between
		  metaverse instances.

- ### SPFS and BRICS
	- https://www.londonreviewbookshop.co.uk/stock/westlessness-the-great-global-rebalancing-samir-puri

- #### 4.12.13 Open-source AI and Global Politics

- ### SPFS and BRICS
	- https://www.londonreviewbookshop.co.uk/stock/westlessness-the-great-global-rebalancing-samir-puri

- #### 4.12.11 Democratization of AI Technology
  An argument often made in favor of democratization of AI technology is that it should be made open-source and freely available, thus creating a challenging framework for global political incumbents. This perspective is grounded on the belief that technology
	- and its underlying power
	- must be accessible to everyone to mitigate the risks of misuse and ensure fair benefits distribution.

- ### SPFS and BRICS
	- https://www.londonreviewbookshop.co.uk/stock/westlessness-the-great-global-rebalancing-samir-puri
	- While media outlets like the Financial Times are [seemingly concerned](https://www.ft.com/content/f8f3b2cd-6690-4f26-b81e-e972751c8799)about the proposal for a BRICS based currency, and a multi-polar economic world (as we have suggested), [Nunnopines](https://twitter.com/robfnunn/status/1641743274997055490) Brazil’s reliance on China for inward investment and the impact of USforeign policy. He highlights that Brazil has no choice but to trade with China, who sets the rules. Nunn also points out the reluctance of Brazilians to hold Chinese treasuries. He emphasizes the misunderstanding of international currency usage and states that the Euro-Dollar system, supported by currencies like the Pound and Yen, dominates the market. Nunn argues that the possibility of the US dollar losing reserve currency status is sensationalist nonsense. Meanwhile, chief foreign policy advisor in Brazil has said:
		- “I think the two countries can also have an important role in building a more multipolar world, in which power is less centralized and there is no hegemony. I think this is a very important aspect in which China and Brazil can play important roles.”

- ## **The Stakes - A World Transformed:**
	- **The Return of High-Stakes History:** The episode concludes with a sobering reflection on the potential for AI to fundamentally reshape the global order, potentially ushering in an era of unprecedented technological progress but also fraught with risks.
	- **A World of Extremes:** The guests acknowledge the possibility of AI exacerbating existing inequalities, empowering authoritarian regimes, and leading to new forms of conflict.
	- **A Call for Wisdom and Urgency:** They emphasise the need for policymakers, researchers, and the public to engage in a thoughtful and informed dialogue about the future of AI, striking a balance between fostering innovation and mitigating risks. The decisions made in the coming years will shape the trajectory of AI and determine whether this transformative technology leads to a brighter future or a more perilous world.

- #### 4.12.11 Democratization of AI Technology
  An argument often made in favor of democratization of AI technology is that it should be made open-source and freely available, thus creating a challenging framework for global political incumbents. This perspective is grounded on the belief that technology
	- and its underlying power
	- must be accessible to everyone to mitigate the risks of misuse and ensure fair benefits distribution.

- ### SPFS and BRICS
	- https://www.londonreviewbookshop.co.uk/stock/westlessness-the-great-global-rebalancing-samir-puri
	- While media outlets like the Financial Times are [seemingly concerned](https://www.ft.com/content/f8f3b2cd-6690-4f26-b81e-e972751c8799)about the proposal for a BRICS based currency, and a multi-polar economic world (as we have suggested), [Nunnopines](https://twitter.com/robfnunn/status/1641743274997055490) Brazil’s reliance on China for inward investment and the impact of USforeign policy. He highlights that Brazil has no choice but to trade with China, who sets the rules. Nunn also points out the reluctance of Brazilians to hold Chinese treasuries. He emphasizes the misunderstanding of international currency usage and states that the Euro-Dollar system, supported by currencies like the Pound and Yen, dominates the market. Nunn argues that the possibility of the US dollar losing reserve currency status is sensationalist nonsense. Meanwhile, chief foreign policy advisor in Brazil has said:
		- “I think the two countries can also have an important role in building a more multipolar world, in which power is less centralized and there is no hegemony. I think this is a very important aspect in which China and Brazil can play important roles.”

- ## **The Stakes - A World Transformed:**
	- **The Return of High-Stakes History:** The episode concludes with a sobering reflection on the potential for AI to fundamentally reshape the global order, potentially ushering in an era of unprecedented technological progress but also fraught with risks.
	- **A World of Extremes:** The guests acknowledge the possibility of AI exacerbating existing inequalities, empowering authoritarian regimes, and leading to new forms of conflict.
	- **A Call for Wisdom and Urgency:** They emphasise the need for policymakers, researchers, and the public to engage in a thoughtful and informed dialogue about the future of AI, striking a balance between fostering innovation and mitigating risks. The decisions made in the coming years will shape the trajectory of AI and determine whether this transformative technology leads to a brighter future or a more perilous world.

## Related Terms

- **Broader**: [[Model Interpretability]], [[Explainable AI]]
- **Narrower**: [[Partial Dependence Plot]], [[Permutation Importance]], [[Feature Importance]]
- **Related**: [[Model Transparency]], [[Surrogate Models]]
- **Contrasts**: [[Local Explanation]]

## Formal Specification

### Core Concept

Given a trained model `f: X → Y`, a global explanation `G(f)` characterises:

```
G(f) → {overall behaviour, feature importance, decision boundaries, interaction effects}
```

**Scope**: Entire input space `X`
**Objective**: Understand `f` holistically without instance-specific focus

### Mathematical Framework

**Global Feature Importance**:
```
I(f, j) = E_X[Impact of feature j on f(X)]
```

**Global Model Approximation**:
```
g* = argmin E_X[L(f(X), g(X))]
     g∈G_interpretable
```

Where `g` is an interpretable surrogate model approximating `f` globally.

## Key Methods

### Feature Importance Measures

#### Permutation Importance

**Algorithm** (Breiman, 2001):

1. **Baseline**: Compute model performance on validation set
   ```
   Score_original = Performance(f, X_val, y_val)
   ```

2. **Permute feature**: Shuffle feature `j` values
   ```
   X_permuted = X_val with column j randomly shuffled
   ```

3. **Recompute performance**:
   ```
   Score_permuted = Performance(f, X_permuted, y_val)
   ```

4. **Feature importance**:
   ```
   FI(j) = Score_original - E[Score_permuted]
   ```

**Properties**:
- Model-agnostic
- Accounts for feature interactions
- Reflects true predictive importance

**Limitations**:
- Requires retraining for some models (not for tree ensembles)
- Assumes feature independence
- Variance from random permutation

#### SHAP Feature Importance (Global)

**Aggregation** (Lundberg & Lee, 2017):

```
I(j) = (1/n) Σ |φ_j(x_i)|
             i=1 to n
```

**Interpretation**: Average absolute SHAP value across all instances

**Benefits**:
- Consistent with local explanations
- Theoretically grounded
- Handles feature interactions

**Visualisations**:
- **Summary plot**: Distribution of SHAP values per feature
- **Bar plot**: Mean absolute SHAP values
- **Dependence plot**: Feature value vs. SHAP value

### Model Behaviour Characterisation

#### Partial Dependence Plots (PDP)

**Definition** (Friedman, 2001):

```
PD_S(x_S) = E_X_C[f(x_S, X_C)]
```

Where:
- `S` is subset of features to visualise
- `C` is complement of `S`
- Marginalisation over `X_C`

**Computation**:
```
PD_S(x_S) ≈ (1/n) Σ f(x_S, x_C^(i))
                   i=1
```

**Interpretation**: Average model output when feature(s) fixed at value

**Advantages**:
- Intuitive visualisation
- Model-agnostic
- Handles non-linear relationships

**Limitations**:
- Assumes feature independence (can be misleading)
- Computationally expensive for many features
- Ignores feature distribution

#### Individual Conditional Expectation (ICE)

**Definition** (Goldstein et al., 2015):

```
ICE_i(x_S) = f(x_S, x_C^(i))
```

**Interpretation**: Model output for instance `i` as feature(s) vary

**Relationship to PDP**:
```
PD_S(x_S) = (1/n) Σ ICE_i(x_S)
```

**Benefits**:
- Reveals heterogeneity (individual instance behaviour)
- Detects interactions (diverging ICE curves)
- Visualises distribution, not just average

**Visualisation**: Overlaid curves showing instance-specific effects

#### Accumulated Local Effects (ALE)

**Definition** (Apley & Zhu, 2020):

```
ALE_j(x) = ∫_{z_min}^x E_X|X_j=z[∂f/∂X_j | X_j=z] dz
```

**Advantages over PDP**:
- Unbiased with correlated features
- Uses conditional rather than marginal distribution
- Faster computation

**Interpretation**: Accumulated marginal effect of feature

**Use Case**: Preferred when features are correlated

### Surrogate Models

#### Global Surrogate

**Approach**:
1. **Train black-box model**: `f(X) → Y`
2. **Generate predictions**: `Ŷ = f(X)` for large dataset
3. **Train interpretable model**: `g(X) → Ŷ`
4. **Interpret** `g` as approximation of `f`

**Interpretable Model Choices**:
- Decision tree
- Linear regression
- Rule set (RuleFit)
- GAM (Generalized Additive Model)

**Fidelity Measure**:
```
Fidelity = R²(f(X), g(X))
```

**Trade-off**: Accuracy (of `f`) vs. Interpretability (of `g`)

**Limitations**:
- Surrogate may not faithfully represent black-box
- Model mismatch in complex regions
- Interpretability of surrogate still limited

#### RuleFit

**Algorithm** (Friedman & Popescu, 2008):

1. **Extract rules** from tree ensemble
2. **Fit sparse linear model** with rules as features
   ```
   y ≈ β₀ + Σ β_k R_k(x)
   ```
   Where `R_k` are if-then rules

**Output**: Interpretable rule-based global model

**Example**:
```
Prediction = 0.5
  + 0.3 × (age > 50 AND cholesterol > 200)
  + 0.15 × (BMI > 30)
  - 0.2 × (exercise_weekly = True)
```

**Benefits**:
- Combines predictive power and interpretability
- Explicit rule interactions
- Sparse representation

### Interaction Detection

#### Friedman's H-statistic

**Two-way Interaction**:
```
H²_jk = [Σ(PD_jk(x_j, x_k) - PD_j(x_j) - PD_k(x_k))²] / [Σ PD_jk(x_j, x_k)²]
```

**Interpretation**: Proportion of variance due to interaction

**Values**:
- `H² = 0`: No interaction
- `H² > 0`: Interaction present (larger = stronger)

**Use Case**: Identify which feature pairs interact significantly

#### SHAP Interaction Values

**Definition**:
```
φ_ij = Σ |S|!(|N|-|S|-1)! / (2|N|!) [Δ_ij(S)]
       S⊆N\{i,j}
```

Where `Δ_ij(S)` quantifies pairwise interaction effect.

**Benefits**:
- Consistent with SHAP values
- Detects non-linear interactions
- Distributes effects fairly

**Visualisation**: Heatmap of interaction strengths

## Application Domains

### Model Debugging

**Use Cases**:
- Detect unexpected feature importance (sanity check)
- Identify bias in feature usage
- Discover data leakage

**Example**:
Global feature importance reveals that "patient ID" has high importance → data leakage detected.

### Regulatory Compliance

**Finance**:
- Fair lending: ensure protected attributes not driving decisions
- Model risk management: holistic model understanding

**Healthcare**:
- Clinical validation: feature importance aligns with medical knowledge
- IEEE P2802 compliance: transparent device behaviour

**Example**:
Partial dependence plots show that "race" feature has flat PD → no discriminatory effect.

### Scientific Discovery

**Use Cases**:
- Hypothesis generation from feature importance
- Mechanism understanding via PDPs
- Interaction detection for biological pathways

**Example**:
Climate modelling: PDP reveals non-linear CO₂ effect on temperature, guiding further research.

### Model Comparison

**Approach**:
- Generate global explanations for multiple models
- Compare feature importance rankings
- Assess consistency of relationships (PDPs)

**Decision Criterion**: Select model with interpretable, domain-aligned behaviour.

## Implementation Approaches

### Permutation Importance

**Scikit-learn**:
```python
from sklearn.inspection import permutation_importance

result = permutation_importance(
    estimator=model,
    X=X_val,
    y=y_val,
    n_repeats=10,
    random_state=42,
    scoring='accuracy'
)

importances = result.importances_mean
```

**Custom Implementation**:
```python
def permutation_importance(model, X, y, metric, n_repeats=10):
    baseline_score = metric(y, model.predict(X))
    importances = {}

    for col in X.columns:
        scores = []
        for _ in range(n_repeats):
            X_permuted = X.copy()
            X_permuted[col] = X_permuted[col].sample(frac=1).values
            score = metric(y, model.predict(X_permuted))
            scores.append(baseline_score - score)
        importances[col] = np.mean(scores)

    return importances
```

### Partial Dependence Plots

**Scikit-learn**:
```python
from sklearn.inspection import PartialDependenceDisplay

features = ['age', 'cholesterol', ('age', 'cholesterol')]

PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=features,
    feature_names=X_train.columns
)
```

**PDPbox**:
```python
from pdpbox import pdp

pdp_age = pdp.pdp_isolate(
    model=model,
    dataset=X_train,
    model_features=X_train.columns,
    feature='age'
)

pdp.pdp_plot(pdp_age, 'age')
```

### ICE Plots

**Scikit-learn** (built into PDP):
```python
from sklearn.inspection import PartialDependenceDisplay

PartialDependenceDisplay.from_estimator(
    estimator=model,
    X=X_train,
    features=['age'],
    kind='both',  # Shows both PDP and ICE
    ice_lines_kw={'alpha': 0.2}
)
```

### ALE Plots

**ALEPython**:
```python
from alepython import ale_plot

ale_plot(
    model=model.predict,
    X_train=X_train,
    feature='age',
    bins=20
)
```

### SHAP Global Explanations

**Summary Plot**:
```python
import shap

explainer = shap.TreeExplainer(model)
shap_values = explainer.shap_values(X_test)

shap.summary_plot(shap_values, X_test, plot_type="bar")  # Feature importance
shap.summary_plot(shap_values, X_test)  # Distribution
```

**Dependence Plot**:
```python
shap.dependence_plot(
    ind='age',
    shap_values=shap_values,
    features=X_test,
    interaction_index='cholesterol'  # Color by interaction
)
```

### Surrogate Models

**Global Tree Surrogate**:
```python
from sklearn.tree import DecisionTreeRegressor, plot_tree

# Train black-box model
black_box = RandomForestRegressor().fit(X_train, y_train)

# Generate predictions
y_surrogate = black_box.predict(X_train)

# Train interpretable surrogate
surrogate = DecisionTreeRegressor(max_depth=5)
surrogate.fit(X_train, y_surrogate)

# Visualize
plot_tree(surrogate, feature_names=X_train.columns, filled=True)

# Assess fidelity
from sklearn.metrics import r2_score
fidelity = r2_score(black_box.predict(X_test), surrogate.predict(X_test))
print(f"Surrogate fidelity: {fidelity:.3f}")
```

## Evaluation Metrics

### Fidelity Metrics

**Global Fidelity** (for surrogates):
```
Fidelity = R²(f(X), g(X))
```
Measures how well interpretable model `g` approximates black-box `f`.

**Feature Importance Stability**:
```
Stability = Spearman_correlation(FI(subset₁), FI(subset₂))
```
Consistency across data subsets.

### Computational Efficiency

**PDP Complexity**:
- Grid points: `m`
- Instances: `n`
- Features: `p`
- Complexity: `O(m × n × p)` for all features

**Permutation Importance Complexity**:
- Features: `p`
- Repeats: `r`
- Complexity: `O(p × r × prediction_cost)`

### Completeness Metrics

**Interaction Coverage**:
```
Coverage = (Detected interactions) / (True interactions)
```

**Feature Coverage**:
Percentage of features with significant importance.

## Challenges & Limitations

### Methodological Challenges

**Feature Correlation**:
- **PDP Issue**: Marginalises over unrealistic feature combinations
- **Solution**: Use ALE or condition on realistic feature values
- **Example**: Age and years of education correlated; PDP may show "5-year-old with PhD"

**Computational Cost**:
- **PDP/ICE**: Requires many model evaluations
- **SHAP**: Exponential complexity (exact)
- **Mitigation**: Sampling, approximations, caching

**Interpretation Ambiguity**:
- **Permutation Importance**: Which feature interactions are captured?
- **SHAP**: Baseline choice affects values
- **Surrogate**: Fidelity-interpretability trade-off

### Practical Challenges

**High-Dimensional Data**:
- Visualising >3 features difficult
- Feature selection needed
- Curse of dimensionality for interactions

**Model Complexity**:
- Deep neural networks: millions of parameters
- Global explanations may oversimplify
- Multiple explanations needed for completeness

**Dynamic Models**:
- Online learning: explanations change over time
- Temporal dependencies: static explanations insufficient
- Concept drift: explanations become stale

## Research Directions

### Emerging Areas

**Causal Global Explanations**:
- Structural causal models
- Interventional feature importance
- Beyond observational statistics

**Temporal Global Explanations**:
- Evolution of feature importance
- Concept drift detection
- Dynamic model behaviour

**Multi-objective Global Explanations**:
- Balancing accuracy, fairness, and interpretability
- Pareto-optimal model selection
- Trade-off visualisation

**Scalable Global Explanations**:
- Distributed PDP computation
- Incremental feature importance
- Approximate methods for large-scale data

### Industry Innovation

**Microsoft InterpretML**:
- Explainable Boosting Machines (inherently global)
- ICE plots with distribution
- Interaction detection

**Google Cloud Explainable AI**:
- Feature attributions aggregated globally
- What-If Tool for PDP-like exploration
- TensorFlow Model Analysis integration

**DataRobot**:
- Automated feature importance
- Feature effects (PDP-like)
- Prediction explanations at scale

## Best Practices

### Method Selection

**Decision Tree**:
1. **Feature correlation**: High → ALE; Low → PDP
2. **Model type**: Trees → native importance; Any → permutation/SHAP
3. **Computational budget**: Limited → permutation; Ample → SHAP
4. **Explanation goal**: Feature ranking → importance; Relationships → PDP/ALE

### Implementation Guidelines

**Pre-deployment**:
- Validate feature importance with domain experts
- Check PDP/ALE for unexpected patterns
- Assess computational feasibility
- Test on held-out data

**Production**:
- Pre-compute global explanations (cached)
- Update periodically (model drift)
- Monitor feature importance shifts
- Dashboard for stakeholder access

**Post-deployment**:
- Track explanation usage
- Refine based on feedback
- Update as model evolves
- Audit for consistency

### Visualisation Best Practices

**Feature Importance**:
- Sort by magnitude
- Include confidence intervals (permutation variance)
- Highlight top-K features
- Use color for positive/negative effects

**PDP/ICE**:
- Show feature distribution (rug plot)
- Include confidence bands
- Limit number of ICE curves (avoid clutter)
- 2D PDPs for key interactions

**SHAP Plots**:
- Summary plot: distribution + importance
- Dependence plots: select top interactions
- Waterfall plots: global average explanation

### Documentation

**Model Cards** should include:
- Global explanation methods used
- Feature importance rankings
- Key feature effects (PDP summaries)
- Computational requirements

**User-Facing**:
- Executive summary of model behaviour
- Top-K feature importance with interpretation
- Key relationships (PDP insights)
- Known limitations

## References

### Academic Literature

- Friedman, J. H. (2001). "Greedy function approximation: A gradient boosting machine." *Annals of Statistics*, 29(5), 1189-1232
- Breiman, L. (2001). "Random forests." *Machine Learning*, 45(1), 5-32
- Goldstein, A., et al. (2015). "Peeking inside the black box: Visualizing statistical learning with plots of individual conditional expectation." *Journal of Computational and Graphical Statistics*, 24(1), 44-65
- Apley, D. W., & Zhu, J. (2020). "Visualizing the effects of predictor variables in black box supervised learning models." *Journal of the Royal Statistical Society: Series B*, 82(4), 1059-1086
- Friedman, J. H., & Popescu, B. E. (2008). "Predictive learning via rule ensembles." *Annals of Applied Statistics*, 2(3), 916-954

### Standards

- IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
- IEEE. (2021). *IEEE 7001-2021: Standard for Transparency of Autonomous Systems*

### Tools & Frameworks

- Scikit-learn. (2023). *Inspection module*
- Lundberg, S. M. (2023). *SHAP library*
- Molnar, C. (2022). *Interpretable Machine Learning*

## See Also

- [[Local Explanation]]
- [[Feature Importance]]
- [[Partial Dependence Plot]]
- [[Permutation Importance]]
- [[Individual Conditional Expectation]]
- [[SHAP]]
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Global Explanation
		  
		  **Term ID**: AI-0302
		  **Category**: XAI Methods
		  **Status**: Established
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  Interpretability techniques that characterise the overall behaviour, decision-making patterns, and feature importance of a machine learning model across its entire input space, rather than explaining individual predictions.
		  
		  ## Related Terms
		  
		  - **Broader**: [[Model Interpretability]], [[Explainable AI]]
		  - **Narrower**: [[Partial Dependence Plot]], [[Permutation Importance]], [[Feature Importance]]
		  - **Related**: [[Model Transparency]], [[Surrogate Models]]
		  - **Contrasts**: [[Local Explanation]]
		  
		  ## Formal Specification
		  
		  ### Core Concept
		  
		  Given a trained model `f: X → Y`, a global explanation `G(f)` characterises:
		  
		  ```
		  G(f) → {overall behaviour, feature importance, decision boundaries, interaction effects}
		  ```
		  
		  **Scope**: Entire input space `X`
		  **Objective**: Understand `f` holistically without instance-specific focus
		  
		  ### Mathematical Framework
		  
		  **Global Feature Importance**:
		  ```
		  I(f, j) = E_X[Impact of feature j on f(X)]
		  ```
		  
		  **Global Model Approximation**:
		  ```
		  g* = argmin E_X[L(f(X), g(X))]
		       g∈G_interpretable
		  ```
		  
		  Where `g` is an interpretable surrogate model approximating `f` globally.
		  
		  ## Key Methods
		  
		  ### Feature Importance Measures
		  
		  #### Permutation Importance
		  
		  **Algorithm** (Breiman, 2001):
		  
		  1. **Baseline**: Compute model performance on validation set
		     ```
		     Score_original = Performance(f, X_val, y_val)
		     ```
		  
		  2. **Permute feature**: Shuffle feature `j` values
		     ```
		     X_permuted = X_val with column j randomly shuffled
		     ```
		  
		  3. **Recompute performance**:
		     ```
		     Score_permuted = Performance(f, X_permuted, y_val)
		     ```
		  
		  4. **Feature importance**:
		     ```
		     FI(j) = Score_original - E[Score_permuted]
		     ```
		  
		  **Properties**:
		  - Model-agnostic
		  - Accounts for feature interactions
		  - Reflects true predictive importance
		  
		  **Limitations**:
		  - Requires retraining for some models (not for tree ensembles)
		  - Assumes feature independence
		  - Variance from random permutation
		  
		  #### SHAP Feature Importance (Global)
		  
		  **Aggregation** (Lundberg & Lee, 2017):
		  
		  ```
		  I(j) = (1/n) Σ |φ_j(x_i)|
		               i=1 to n
		  ```
		  
		  **Interpretation**: Average absolute SHAP value across all instances
		  
		  **Benefits**:
		  - Consistent with local explanations
		  - Theoretically grounded
		  - Handles feature interactions
		  
		  **Visualisations**:
		  - **Summary plot**: Distribution of SHAP values per feature
		  - **Bar plot**: Mean absolute SHAP values
		  - **Dependence plot**: Feature value vs. SHAP value
		  
		  ### Model Behaviour Characterisation
		  
		  #### Partial Dependence Plots (PDP)
		  
		  **Definition** (Friedman, 2001):
		  
		  ```
		  PD_S(x_S) = E_X_C[f(x_S, X_C)]
		  ```
		  
		  Where:
		  - `S` is subset of features to visualise
		  - `C` is complement of `S`
		  - Marginalisation over `X_C`
		  
		  **Computation**:
		  ```
		  PD_S(x_S) ≈ (1/n) Σ f(x_S, x_C^(i))
		                     i=1
		  ```
		  
		  **Interpretation**: Average model output when feature(s) fixed at value
		  
		  **Advantages**:
		  - Intuitive visualisation
		  - Model-agnostic
		  - Handles non-linear relationships
		  
		  **Limitations**:
		  - Assumes feature independence (can be misleading)
		  - Computationally expensive for many features
		  - Ignores feature distribution
		  
		  #### Individual Conditional Expectation (ICE)
		  
		  **Definition** (Goldstein et al., 2015):
		  
		  ```
		  ICE_i(x_S) = f(x_S, x_C^(i))
		  ```
		  
		  **Interpretation**: Model output for instance `i` as feature(s) vary
		  
		  **Relationship to PDP**:
		  ```
		  PD_S(x_S) = (1/n) Σ ICE_i(x_S)
		  ```
		  
		  **Benefits**:
		  - Reveals heterogeneity (individual instance behaviour)
		  - Detects interactions (diverging ICE curves)
		  - Visualises distribution, not just average
		  
		  **Visualisation**: Overlaid curves showing instance-specific effects
		  
		  #### Accumulated Local Effects (ALE)
		  
		  **Definition** (Apley & Zhu, 2020):
		  
		  ```
		  ALE_j(x) = ∫_{z_min}^x E_X|X_j=z[∂f/∂X_j | X_j=z] dz
		  ```
		  
		  **Advantages over PDP**:
		  - Unbiased with correlated features
		  - Uses conditional rather than marginal distribution
		  - Faster computation
		  
		  **Interpretation**: Accumulated marginal effect of feature
		  
		  **Use Case**: Preferred when features are correlated
		  
		  ### Surrogate Models
		  
		  #### Global Surrogate
		  
		  **Approach**:
		  1. **Train black-box model**: `f(X) → Y`
		  2. **Generate predictions**: `Ŷ = f(X)` for large dataset
		  3. **Train interpretable model**: `g(X) → Ŷ`
		  4. **Interpret** `g` as approximation of `f`
		  
		  **Interpretable Model Choices**:
		  - Decision tree
		  - Linear regression
		  - Rule set (RuleFit)
		  - GAM (Generalized Additive Model)
		  
		  **Fidelity Measure**:
		  ```
		  Fidelity = R²(f(X), g(X))
		  ```
		  
		  **Trade-off**: Accuracy (of `f`) vs. Interpretability (of `g`)
		  
		  **Limitations**:
		  - Surrogate may not faithfully represent black-box
		  - Model mismatch in complex regions
		  - Interpretability of surrogate still limited
		  
		  #### RuleFit
		  
		  **Algorithm** (Friedman & Popescu, 2008):
		  
		  1. **Extract rules** from tree ensemble
		  2. **Fit sparse linear model** with rules as features
		     ```
		     y ≈ β₀ + Σ β_k R_k(x)
		     ```
		     Where `R_k` are if-then rules
		  
		  **Output**: Interpretable rule-based global model
		  
		  **Example**:
		  ```
		  Prediction = 0.5
		    + 0.3 × (age > 50 AND cholesterol > 200)
		    + 0.15 × (BMI > 30)
		    - 0.2 × (exercise_weekly = True)
		  ```
		  
		  **Benefits**:
		  - Combines predictive power and interpretability
		  - Explicit rule interactions
		  - Sparse representation
		  
		  ### Interaction Detection
		  
		  #### Friedman's H-statistic
		  
		  **Two-way Interaction**:
		  ```
		  H²_jk = [Σ(PD_jk(x_j, x_k) - PD_j(x_j) - PD_k(x_k))²] / [Σ PD_jk(x_j, x_k)²]
		  ```
		  
		  **Interpretation**: Proportion of variance due to interaction
		  
		  **Values**:
		  - `H² = 0`: No interaction
		  - `H² > 0`: Interaction present (larger = stronger)
		  
		  **Use Case**: Identify which feature pairs interact significantly
		  
		  #### SHAP Interaction Values
		  
		  **Definition**:
		  ```
		  φ_ij = Σ |S|!(|N|-|S|-1)! / (2|N|!) [Δ_ij(S)]
		         S⊆N\{i,j}
		  ```
		  
		  Where `Δ_ij(S)` quantifies pairwise interaction effect.
		  
		  **Benefits**:
		  - Consistent with SHAP values
		  - Detects non-linear interactions
		  - Distributes effects fairly
		  
		  **Visualisation**: Heatmap of interaction strengths
		  
		  ## Application Domains
		  
		  ### Model Debugging
		  
		  **Use Cases**:
		  - Detect unexpected feature importance (sanity check)
		  - Identify bias in feature usage
		  - Discover data leakage
		  
		  **Example**:
		  Global feature importance reveals that "patient ID" has high importance → data leakage detected.
		  
		  ### Regulatory Compliance
		  
		  **Finance**:
		  - Fair lending: ensure protected attributes not driving decisions
		  - Model risk management: holistic model understanding
		  
		  **Healthcare**:
		  - Clinical validation: feature importance aligns with medical knowledge
		  - IEEE P2802 compliance: transparent device behaviour
		  
		  **Example**:
		  Partial dependence plots show that "race" feature has flat PD → no discriminatory effect.
		  
		  ### Scientific Discovery
		  
		  **Use Cases**:
		  - Hypothesis generation from feature importance
		  - Mechanism understanding via PDPs
		  - Interaction detection for biological pathways
		  
		  **Example**:
		  Climate modelling: PDP reveals non-linear CO₂ effect on temperature, guiding further research.
		  
		  ### Model Comparison
		  
		  **Approach**:
		  - Generate global explanations for multiple models
		  - Compare feature importance rankings
		  - Assess consistency of relationships (PDPs)
		  
		  **Decision Criterion**: Select model with interpretable, domain-aligned behaviour.
		  
		  ## Implementation Approaches
		  
		  ### Permutation Importance
		  
		  **Scikit-learn**:
		  ```python
		  from sklearn.inspection import permutation_importance
		  
		  result = permutation_importance(
		      estimator=model,
		      X=X_val,
		      y=y_val,
		      n_repeats=10,
		      random_state=42,
		      scoring='accuracy'
		  )
		  
		  importances = result.importances_mean
		  ```
		  
		  **Custom Implementation**:
		  ```python
		  def permutation_importance(model, X, y, metric, n_repeats=10):
		      baseline_score = metric(y, model.predict(X))
		      importances = {}
		  
		      for col in X.columns:
		          scores = []
		          for _ in range(n_repeats):
		              X_permuted = X.copy()
		              X_permuted[col] = X_permuted[col].sample(frac=1).values
		              score = metric(y, model.predict(X_permuted))
		              scores.append(baseline_score - score)
		          importances[col] = np.mean(scores)
		  
		      return importances
		  ```
		  
		  ### Partial Dependence Plots
		  
		  **Scikit-learn**:
		  ```python
		  from sklearn.inspection import PartialDependenceDisplay
		  
		  features = ['age', 'cholesterol', ('age', 'cholesterol')]
		  
		  PartialDependenceDisplay.from_estimator(
		      estimator=model,
		      X=X_train,
		      features=features,
		      feature_names=X_train.columns
		  )
		  ```
		  
		  **PDPbox**:
		  ```python
		  from pdpbox import pdp
		  
		  pdp_age = pdp.pdp_isolate(
		      model=model,
		      dataset=X_train,
		      model_features=X_train.columns,
		      feature='age'
		  )
		  
		  pdp.pdp_plot(pdp_age, 'age')
		  ```
		  
		  ### ICE Plots
		  
		  **Scikit-learn** (built into PDP):
		  ```python
		  from sklearn.inspection import PartialDependenceDisplay
		  
		  PartialDependenceDisplay.from_estimator(
		      estimator=model,
		      X=X_train,
		      features=['age'],
		      kind='both',  # Shows both PDP and ICE
		      ice_lines_kw={'alpha': 0.2}
		  )
		  ```
		  
		  ### ALE Plots
		  
		  **ALEPython**:
		  ```python
		  from alepython import ale_plot
		  
		  ale_plot(
		      model=model.predict,
		      X_train=X_train,
		      feature='age',
		      bins=20
		  )
		  ```
		  
		  ### SHAP Global Explanations
		  
		  **Summary Plot**:
		  ```python
		  import shap
		  
		  explainer = shap.TreeExplainer(model)
		  shap_values = explainer.shap_values(X_test)
		  
		  shap.summary_plot(shap_values, X_test, plot_type="bar")  # Feature importance
		  shap.summary_plot(shap_values, X_test)  # Distribution
		  ```
		  
		  **Dependence Plot**:
		  ```python
		  shap.dependence_plot(
		      ind='age',
		      shap_values=shap_values,
		      features=X_test,
		      interaction_index='cholesterol'  # Color by interaction
		  )
		  ```
		  
		  ### Surrogate Models
		  
		  **Global Tree Surrogate**:
		  ```python
		  from sklearn.tree import DecisionTreeRegressor, plot_tree
		  
		  # Train black-box model
		  black_box = RandomForestRegressor().fit(X_train, y_train)
		  
		  # Generate predictions
		  y_surrogate = black_box.predict(X_train)
		  
		  # Train interpretable surrogate
		  surrogate = DecisionTreeRegressor(max_depth=5)
		  surrogate.fit(X_train, y_surrogate)
		  
		  # Visualize
		  plot_tree(surrogate, feature_names=X_train.columns, filled=True)
		  
		  # Assess fidelity
		  from sklearn.metrics import r2_score
		  fidelity = r2_score(black_box.predict(X_test), surrogate.predict(X_test))
		  print(f"Surrogate fidelity: {fidelity:.3f}")
		  ```
		  
		  ## Evaluation Metrics
		  
		  ### Fidelity Metrics
		  
		  **Global Fidelity** (for surrogates):
		  ```
		  Fidelity = R²(f(X), g(X))
		  ```
		  Measures how well interpretable model `g` approximates black-box `f`.
		  
		  **Feature Importance Stability**:
		  ```
		  Stability = Spearman_correlation(FI(subset₁), FI(subset₂))
		  ```
		  Consistency across data subsets.
		  
		  ### Computational Efficiency
		  
		  **PDP Complexity**:
		  - Grid points: `m`
		  - Instances: `n`
		  - Features: `p`
		  - Complexity: `O(m × n × p)` for all features
		  
		  **Permutation Importance Complexity**:
		  - Features: `p`
		  - Repeats: `r`
		  - Complexity: `O(p × r × prediction_cost)`
		  
		  ### Completeness Metrics
		  
		  **Interaction Coverage**:
		  ```
		  Coverage = (Detected interactions) / (True interactions)
		  ```
		  
		  **Feature Coverage**:
		  Percentage of features with significant importance.
		  
		  ## Challenges & Limitations
		  
		  ### Methodological Challenges
		  
		  **Feature Correlation**:
		  - **PDP Issue**: Marginalises over unrealistic feature combinations
		  - **Solution**: Use ALE or condition on realistic feature values
		  - **Example**: Age and years of education correlated; PDP may show "5-year-old with PhD"
		  
		  **Computational Cost**:
		  - **PDP/ICE**: Requires many model evaluations
		  - **SHAP**: Exponential complexity (exact)
		  - **Mitigation**: Sampling, approximations, caching
		  
		  **Interpretation Ambiguity**:
		  - **Permutation Importance**: Which feature interactions are captured?
		  - **SHAP**: Baseline choice affects values
		  - **Surrogate**: Fidelity-interpretability trade-off
		  
		  ### Practical Challenges
		  
		  **High-Dimensional Data**:
		  - Visualising >3 features difficult
		  - Feature selection needed
		  - Curse of dimensionality for interactions
		  
		  **Model Complexity**:
		  - Deep neural networks: millions of parameters
		  - Global explanations may oversimplify
		  - Multiple explanations needed for completeness
		  
		  **Dynamic Models**:
		  - Online learning: explanations change over time
		  - Temporal dependencies: static explanations insufficient
		  - Concept drift: explanations become stale
		  
		  ## Research Directions
		  
		  ### Emerging Areas
		  
		  **Causal Global Explanations**:
		  - Structural causal models
		  - Interventional feature importance
		  - Beyond observational statistics
		  
		  **Temporal Global Explanations**:
		  - Evolution of feature importance
		  - Concept drift detection
		  - Dynamic model behaviour
		  
		  **Multi-objective Global Explanations**:
		  - Balancing accuracy, fairness, and interpretability
		  - Pareto-optimal model selection
		  - Trade-off visualisation
		  
		  **Scalable Global Explanations**:
		  - Distributed PDP computation
		  - Incremental feature importance
		  - Approximate methods for large-scale data
		  
		  ### Industry Innovation
		  
		  **Microsoft InterpretML**:
		  - Explainable Boosting Machines (inherently global)
		  - ICE plots with distribution
		  - Interaction detection
		  
		  **Google Cloud Explainable AI**:
		  - Feature attributions aggregated globally
		  - What-If Tool for PDP-like exploration
		  - TensorFlow Model Analysis integration
		  
		  **DataRobot**:
		  - Automated feature importance
		  - Feature effects (PDP-like)
		  - Prediction explanations at scale
		  
		  ## Best Practices
		  
		  ### Method Selection
		  
		  **Decision Tree**:
		  1. **Feature correlation**: High → ALE; Low → PDP
		  2. **Model type**: Trees → native importance; Any → permutation/SHAP
		  3. **Computational budget**: Limited → permutation; Ample → SHAP
		  4. **Explanation goal**: Feature ranking → importance; Relationships → PDP/ALE
		  
		  ### Implementation Guidelines
		  
		  **Pre-deployment**:
		  - Validate feature importance with domain experts
		  - Check PDP/ALE for unexpected patterns
		  - Assess computational feasibility
		  - Test on held-out data
		  
		  **Production**:
		  - Pre-compute global explanations (cached)
		  - Update periodically (model drift)
		  - Monitor feature importance shifts
		  - Dashboard for stakeholder access
		  
		  **Post-deployment**:
		  - Track explanation usage
		  - Refine based on feedback
		  - Update as model evolves
		  - Audit for consistency
		  
		  ### Visualisation Best Practices
		  
		  **Feature Importance**:
		  - Sort by magnitude
		  - Include confidence intervals (permutation variance)
		  - Highlight top-K features
		  - Use color for positive/negative effects
		  
		  **PDP/ICE**:
		  - Show feature distribution (rug plot)
		  - Include confidence bands
		  - Limit number of ICE curves (avoid clutter)
		  - 2D PDPs for key interactions
		  
		  **SHAP Plots**:
		  - Summary plot: distribution + importance
		  - Dependence plots: select top interactions
		  - Waterfall plots: global average explanation
		  
		  ### Documentation
		  
		  **Model Cards** should include:
		  - Global explanation methods used
		  - Feature importance rankings
		  - Key feature effects (PDP summaries)
		  - Computational requirements
		  
		  **User-Facing**:
		  - Executive summary of model behaviour
		  - Top-K feature importance with interpretation
		  - Key relationships (PDP insights)
		  - Known limitations
		  
		  ## References
		  
		  ### Academic Literature
		  
		  - Friedman, J. H. (2001). "Greedy function approximation: A gradient boosting machine." *Annals of Statistics*, 29(5), 1189-1232
		  - Breiman, L. (2001). "Random forests." *Machine Learning*, 45(1), 5-32
		  - Goldstein, A., et al. (2015). "Peeking inside the black box: Visualizing statistical learning with plots of individual conditional expectation." *Journal of Computational and Graphical Statistics*, 24(1), 44-65
		  - Apley, D. W., & Zhu, J. (2020). "Visualizing the effects of predictor variables in black box supervised learning models." *Journal of the Royal Statistical Society: Series B*, 82(4), 1059-1086
		  - Friedman, J. H., & Popescu, B. E. (2008). "Predictive learning via rule ensembles." *Annals of Applied Statistics*, 2(3), 916-954
		  
		  ### Standards
		  
		  - IEEE. (2023). *IEEE P2976: Standard for eXplainable Artificial Intelligence*
		  - IEEE. (2021). *IEEE 7001-2021: Standard for Transparency of Autonomous Systems*
		  
		  ### Tools & Frameworks

		  - Scikit-learn. (2023). *Inspection module*
		  - Lundberg, S. M. (2023). *SHAP library*
		  - Molnar, C. (2022). *Interpretable Machine Learning*

## 2024-2025: SHAP Dominance and Mechanistic Interpretability Expansion
id:: global-explanation-recent-developments

The period from 2024 through 2025 witnessed **SHAP** consolidating its position as the dominant global explanation method whilst **mechanistic interpretability** emerged as a transformative approach for understanding the internal workings of complex neural networks, particularly transformers.

### SHAP's Continued Dominance

**SHAP (SHapley Additive exPlanations)** remained the most widely used XAI method in 2024-2025, particularly for tabular data. Based on game theory, SHAP treats each feature as a player and the model outcome as the payoff, providing **both local and global explanations**—the ability to explain feature roles for all instances and for specific instances. SHAP demonstrated advantages over alternatives by considering different feature combinations to calculate attribution and providing both global and local explanations, making it particularly reliable in domains requiring strict fairness and accountability standards.

However, SHAP faced limitations in **computational efficiency**. Computing SHAP values for a single decision in fraud detection could take hours or days, making real-time analysis infeasible. Both SHAP and LIME struggled with uncertainty estimates, generalisation, feature dependencies, and inability to infer causality.

### Mechanistic Interpretability Revolution

**Mechanistic interpretability** emerged as a transformative subfield within explainable AI, aiming to understand the internal workings of neural networks by analysing the mechanisms present in their computations. A core challenge became how to decompose complex neural networks into interpretable parts, with researchers seeking more abstract, distributed, or coarse-grained decompositions that better capture a model's internal logic and behaviour.

Mechanistic interpretability employed **causal methods** to understand how internal model components influence outputs. Methods such as **sparse dictionary learning** and **sparse autoencoders** helped disentangle complex overlapping features by learning interpretable, sparse representations.

### Practical Tools and Real-Time Applications

New developments from 2024-2025 in techniques such as saliency mapping, rule extraction, probing, and influence tracing turned many interpretability techniques into practical, even **real-time tools**. **TransformerLens** provided easy APIs to iteratively refine hypotheses about which heads or MLPs form a circuit for a given behaviour.

### Applications and Impact

Insights from mechanistic interpretability and representation engineering established a foundational basis for progress in **model editing**, **pruning**, and **alignment**, enabling more efficient and controllable AI systems whilst maintaining or improving performance.

		  ## See Also
		  
		  - [[Local Explanation]]
		  - [[Feature Importance]]
		  - [[Partial Dependence Plot]]
		  - [[Permutation Importance]]
		  - [[Individual Conditional Expectation]]
		  - [[SHAP]]
		  
		  ```

- public-access:: true
	- definition:: Interpretability techniques that characterise the overall behaviour, decision-making patterns, and feature importance of a machine learning model across its entire input space, rather than explaining individual predictions.



## Academic Context

- Brief contextual overview
  - Global explanation in machine learning refers to interpretability techniques that characterise the overall behaviour, decision-making patterns, and feature importance of a model across its entire input space, rather than focusing on individual predictions
  - This approach is essential for understanding how models generalise, identifying biases, and ensuring robustness in high-stakes applications

- Key developments and current state
  - The field has matured beyond simple feature importance scores to include methods such as partial dependence plots, accumulated local effects, and global surrogate models
  - There is growing emphasis on model transparency, especially in regulated sectors and public-facing services

- Academic foundations
  - Rooted in statistical learning theory and model interpretability research
  - Early work by Breiman (2001) on random forests and feature importance laid groundwork for later global explanation methods

## Current Landscape (2025)

- Industry adoption and implementations
  - Widely adopted in sectors requiring regulatory compliance, such as finance, healthcare, and public services
  - Used by major platforms including IBM Watson, Google Cloud AI, and Microsoft Azure Machine Learning for model auditing and transparency reporting

- Notable organisations and platforms
  - NHS Digital employs global explanation techniques to audit clinical decision support systems
  - The Financial Conduct Authority (FCA) encourages use of global explanation in algorithmic trading and credit scoring

- UK and North England examples where relevant
  - Manchester-based Health Innovation Manchester uses global explanation to validate AI-driven diagnostics in regional hospitals
  - Leeds City Council applies these techniques to explain automated decision-making in social services and housing allocation
  - Newcastle University’s Institute for Data Science collaborates with local authorities on explainable AI for urban planning

- Technical capabilities and limitations
  - Capable of revealing systemic biases, feature interactions, and model drift over time
  - Limitations include computational cost for large models and potential oversimplification of complex relationships

- Standards and frameworks
  - ISO/IEC 23053:2022 provides guidance on explainable AI, including global explanation
  - The UK’s Centre for Data Ethics and Innovation (CDEI) promotes best practices for model transparency

## Research & Literature

- Key academic papers and sources
  - Molnar, C. (2020). Interpretable Machine Learning: A Guide for Making Black Box Models Explainable. https://christophm.github.io/interpretable-ml-book/
  - Lundberg, S. M., & Lee, S.-I. (2017). A Unified Approach to Interpreting Model Predictions. Advances in Neural Information Processing Systems, 30. https://proceedings.neurips.cc/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf
  - Goldstein, A., Kapelner, A., Bleich, J., & Pitkin, E. (2015). Peeking Inside the Black Box: Visualizing Statistical Learning with Plots of Individual Conditional Expectation. Journal of Computational and Graphical Statistics, 24(1), 44–65. https://doi.org/10.1080/10618600.2014.907095

- Ongoing research directions
  - Development of scalable global explanation methods for deep learning models
  - Integration of global and local explanation techniques for comprehensive model auditing
  - Exploration of causal interpretation in global explanation frameworks

## UK Context

- British contributions and implementations
  - UK researchers have led in developing accessible global explanation tools, such as the R package ‘DALEX’ and Python library ‘SHAP’
  - The Alan Turing Institute promotes research on explainable AI, including global explanation, with funding from UK Research and Innovation (UKRI)

- North England innovation hubs (if relevant)
  - The Digital Catapult in Newcastle supports startups using global explanation for AI transparency in smart city applications
  - The University of Sheffield’s Advanced Manufacturing Research Centre (AMRC) applies global explanation to optimise industrial AI systems

- Regional case studies
  - Health Innovation Manchester’s AI diagnostics project uses global explanation to ensure fairness and transparency in patient risk scoring
  - Leeds City Council’s social services AI system employs global explanation to audit automated decisions and maintain public trust

## Future Directions

- Emerging trends and developments
  - Increasing integration of global explanation in model development lifecycles
  - Growth of automated global explanation tools for non-expert users

- Anticipated challenges
  - Balancing transparency with model complexity and performance
  - Ensuring global explanation methods remain robust as models evolve

- Research priorities
  - Developing standards for evaluating global explanation quality
  - Exploring the role of global explanation in multi-modal and generative AI systems

## References

1. Molnar, C. (2020). Interpretable Machine Learning: A Guide for Making Black Box Models Explainable. https://christophm.github.io/interpretable-ml-book/
2. Lundberg, S. M., & Lee, S.-I. (2017). A Unified Approach to Interpreting Model Predictions. Advances in Neural Information Processing Systems, 30. https://proceedings.neurips.cc/paper/2017/file/8a20a8621978632d76c43dfd28b67767-Paper.pdf
3. Goldstein, A., Kapelner, A., Bleich, J., & Pitkin, E. (2015). Peeking Inside the Black Box: Visualizing Statistical Learning with Plots of Individual Conditional Expectation. Journal of Computational and Graphical Statistics, 24(1), 44–65. https://doi.org/10.1080/10618600.2014.907095
4. ISO/IEC 23053:2022. Framework for Artificial Intelligence (AI) Systems Using Machine Learning. https://www.iso.org/standard/79854.html
5. Centre for Data Ethics and Innovation. (2023). Guidance on Explainable AI. https://www.gov.uk/government/organisations/centre-for-data-ethics-and-innovation
6. Alan Turing Institute. (2025). Research on Explainable AI. https://www.turing.ac.uk/research/research-programmes/explainable-ai
7. Health Innovation Manchester. (2025). AI Diagnostics Project. https://healthinnovationmanchester.ac.uk/
8. Leeds City Council. (2025). Social Services AI System. https://www.leeds.gov.uk/
9. Digital Catapult. (2025). Smart City Applications. https://www.digit.catapult.org.uk/
10. University of Sheffield AMRC. (2025). Industrial AI Systems. https://www.amrc.co.uk/


## Metadata

- **Last Updated**: 2025-11-11
- **Review Status**: Comprehensive editorial review
- **Verification**: Academic sources verified
- **Regional Context**: UK/North England where applicable
