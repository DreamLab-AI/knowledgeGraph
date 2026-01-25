- ### OntologyBlock
  id:: mean-absolute-error-ontology
  collapsed:: true
	- ontology:: true
	- term-id:: AI-0114
	- preferred-term:: Mean Absolute Error
	- source-domain:: mv
	- status:: draft
- definition:: A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences between predictions and ground truth across all instances, providing an intuitive measure of prediction accuracy in the same units as the target variable, treating all errors equally regardless of direction, and being less sensitive to outliers than squared error metrics.

## Mathematical Definition

$$\text{MAE} = \frac{1}{n}\sum_{i=1}^{n}|y_i - \hat{y}_i|$$

Where:
- **n**: Number of instances
- **yᵢ**: Actual value for instance i
- **ŷᵢ**: Predicted value for instance i
- **|·|**: Absolute value function

## Context and Significance

MAE provides a straightforward interpretation: "On average, how far off are the predictions?" with the answer in the same units as the target variable (e.g., dollars, years, metres). Unlike squared error metrics (MSE, RMSE), MAE treats all errors equally, making it robust to outliers—a large prediction error contributes proportionally rather than quadratically to the overall metric.

This equal weighting has implications: MAE is appropriate when all errors have similar consequences, but may be less suitable when large errors are disproportionately costly. The choice between MAE and RMSE often reflects whether errors should be penalised linearly (MAE) or quadratically (RMSE), which depends on the application's cost function for prediction errors.

## Key Characteristics

- **Intuitive interpretation**: Average error in original units
- **Outlier robust**: Less sensitive to outliers than RMSE
- **Equal error weighting**: All errors contribute proportionally
- **Non-differentiable at zero**: Complicates some optimization algorithms
- **Scale-dependent**: Values only comparable within same target variable scale
- **Always non-negative**: Range [0, ∞), lower is better
- **Symmetric**: Treats over-predictions and under-predictions equally

## Appropriate Use Cases

**When MAE is Suitable:**
- Errors have linear cost (doubling error doubles cost)
- Outliers should not dominate performance assessment
- Intuitive communication to non-technical stakeholders desired
- All prediction errors equally important (no special concern for large errors)
- Median-based predictions (MAE optimal for median predictions)

**When RMSE May Be Preferred:**
- Large errors significantly more costly than small errors
- Gaussian error distributions expected
- Mean-based predictions (RMSE optimal for mean predictions)
- Applications where squared error has natural interpretation

## Relationships

- **Component of**: Model Performance assessment for regression
- **Alternative to**: Root Mean Square Error (RMSE), Mean Squared Error (MSE)
- **Related to**: Mean Absolute Percentage Error (MAPE) - relative version
- **Optimized by**: Median predictions (MAE-optimal)
- **Used in**: Model Evaluation, model comparison, performance monitoring
- **Scale-dependent**: Unlike MAPE or R², requires same-scale comparisons
- **Reported in**: Model Cards, performance dashboards, regression analysis

## Examples and Applications

1. **House Price Prediction**: Model achieves MAE of £15,000 on house price predictions—average prediction is off by £15,000, intuitively interpretable by stakeholders and property professionals
2. **Demand Forecasting**: Inventory demand forecast with MAE of 23 units—on average, forecasts miss actual demand by 23 units, directly informing safety stock calculations
3. **Temperature Prediction**: Weather model MAE of 2.1°C—average temperature forecast error is 2.1 degrees, straightforward for weather service communication
4. **Age Estimation**: Face age estimation with MAE of 4.7 years—predictions typically off by about 4.7 years, with occasional larger errors not dominating metric (unlike RMSE)

## Calculation and Implementation

**Standard Calculation:**
```python
from sklearn.metrics import mean_absolute_error

mae = mean_absolute_error(y_true, y_pred)
print(f'MAE: {mae:.2f}')
```

**Manual Calculation:**
```python
import numpy as np

mae = np.mean(np.abs(y_true - y_pred))
```

**Weighted MAE:**
```python
# Sample-weighted MAE
mae_weighted = mean_absolute_error(y_true, y_pred, sample_weight=weights)

# Manual weighted calculation
mae_weighted = np.sum(weights * np.abs(y_true - y_pred)) / np.sum(weights)
```

## Implementation Considerations

**Best Practices:**
- Report MAE in interpretable units with context (e.g., "MAE: £15,000 on properties averaging £250,000")
- Compare MAE to baseline (e.g., predicting mean, predicting previous value)
- Disaggregate MAE across subgroups or value ranges for fairness assessment
- Examine error distribution, not just MAE, to detect systematic biases
- Consider RMSE alongside MAE if large errors are disproportionately important
- Monitor MAE trends over time to detect model degradation

**Common Pitfalls:**
- Comparing MAE across datasets with different target variable scales
- Not accounting for heteroscedasticity (errors varying with predicted value)
- Ignoring error distribution patterns revealed by MAE alone
- Using MAE when large errors are critically important (consider RMSE)
- Failing to contextualize MAE with baseline or target variable statistics

**Comparison with RMSE:**
- **MAE ≤ RMSE** always holds (equality only when all errors identical)
- Larger RMSE-MAE gap indicates greater error variance or presence of outliers
- RMSE / MAE ratio provides insight into error distribution spread

## Variants and Related Metrics

**Median Absolute Error (MedAE)**: Median instead of mean of absolute errors
- More robust to outliers than MAE
- Provides different central tendency measure

**Mean Absolute Percentage Error (MAPE)**: Scale-independent version
$$\text{MAPE} = \frac{100\%}{n}\sum_{i=1}^{n}\left|\frac{y_i - \hat{y}_i}{y_i}\right|$$
- Interpretable as percentage error
- Undefined when actual values are zero
- Asymmetric (penalises over-predictions more than under-predictions)

**Quantile Loss / Pinball Loss**: Asymmetric MAE variant
- Allows different penalties for over- vs. under-prediction
- Used in quantile regression

## ISO/IEC and Standards Alignment

**ISO/IEC 25059** (Quality Model for AI Systems):
- MAE as regression accuracy metric
- Functional correctness measurement

**ISO/IEC 25024** (Data Quality Metrics):
- Accuracy measurement for continuous outputs

## NIST AI RMF Integration

**MEASURE Function**:
- MEASURE-2.2: MAE as appropriate metric for regression tasks
- MEASURE-2.3: MAE assessed across different contexts and subgroups
- Supports Valid and Reliable trustworthiness characteristic

## Statistical Properties

**Optimal Predictor**: MAE is minimized by predicting the **median** of the conditional distribution P(y|x)

**Robustness**: MAE uses L₁ norm, making it robust to outliers (unlike L₂ norm used in MSE/RMSE)

**Non-differentiability**: Absolute value function non-differentiable at zero, requiring special handling in gradient-based optimization (subgradient methods)

## Related Terms

- [[Model Performance]]: MAE as regression performance metric
- [[Root Mean Square Error]]: Alternative squared-error metric
- [[Mean Squared Error]]: Related squared-error metric
- [[MAPE]]: Percentage-based variant
- [[Regression]]: Task type for which MAE is appropriate
- [[Outlier]]: MAE less sensitive than RMSE
- [[Model Evaluation]]: Process using MAE
- [[Error Analysis]]: Examination of prediction errors

## References

1. Willmott, C.J. & Matsuura, K., *Advantages of the Mean Absolute Error (MAE) over the Root Mean Square Error (RMSE) in Assessing Average Model Performance*, Climate Research (2005)
2. Chai, T. & Draxler, R.R., *Root Mean Square Error (RMSE) or Mean Absolute Error (MAE)? Arguments Against Avoiding RMSE in the Literature*, Geoscientific Model Development (2014)
3. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*

## Formal Ontology

<details>
<summary>OWL Functional Syntax</summary>

```clojure
;; Class Declaration
(Declaration (Class :MeanAbsoluteError))
(SubClassOf :MeanAbsoluteError :PerformanceMetric)
(SubClassOf :MeanAbsoluteError :RegressionMetric)
(SubClassOf :MeanAbsoluteError :ErrorMetric)

;; Abbreviation
(Declaration (AnnotationProperty :abbreviation))
(AnnotationAssertion :abbreviation :MeanAbsoluteError "MAE"^^xsd:string)

;; Core relationships
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :measuresPerformanceOf :RegressionModel))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :alternativeTo :RootMeanSquareError))

;; Metric properties
(Declaration (DataProperty :hasMAEValue))
(DataPropertyDomain :hasMAEValue :MeanAbsoluteError)
(DataPropertyRange :hasMAEValue xsd:float)
(FunctionalDataProperty :hasMAEValue)

;; Value constraints
(SubClassOf :MeanAbsoluteError
  (DataPropertyRestriction
    :hasMAEValue
    (MinInclusiveDataRange 0.0^^xsd:float)))

(AnnotationAssertion rdfs:comment :hasMAEValue
  "MAE is always non-negative; range [0, ∞) with lower values indicating better performance"@en)

;; Characteristics
(Declaration (Class :OutlierRobustMetric))
(Declaration (Class :LinearErrorPenalty))
(Declaration (ObjectProperty :hasCharacteristic))

(SubClassOf :MeanAbsoluteError :OutlierRobustMetric)
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :hasCharacteristic :LinearErrorPenalty))

;; Unit preservation
(Declaration (DataProperty :measurementUnits))
(DataPropertyDomain :measurementUnits :MeanAbsoluteError)
(DataPropertyRange :measurementUnits xsd:string)
(AnnotationAssertion rdfs:comment :measurementUnits
  "MAE expressed in same units as target variable, enabling intuitive interpretation"@en)

;; Optimal prediction type
(Declaration (Class :MedianPrediction))
(Declaration (ObjectProperty :optimisedBy))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :optimisedBy :MedianPrediction))

;; Comparison with RMSE
(Declaration (ObjectProperty :lessSensitiveToOutliersThan))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :lessSensitiveToOutliersThan :RootMeanSquareError))

;; Use case focus
(Declaration (Class :LinearCostFunction))
(Declaration (ObjectProperty :appropriateFor))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :appropriateFor :LinearCostFunction))

;; Annotations
(AnnotationAssertion rdfs:label :MeanAbsoluteError "Mean Absolute Error"@en)
(AnnotationAssertion rdfs:label :MeanAbsoluteError "MAE"@en)
(AnnotationAssertion rdfs:comment :MeanAbsoluteError
  "A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences."@en)
(AnnotationAssertion dcterms:source :MeanAbsoluteError <https://www.iso.org/standard/74438.html>)
(AnnotationAssertion :termID :MeanAbsoluteError "AI-0114"^^xsd:string)
(AnnotationAssertion :mathematicalFormula :MeanAbsoluteError
  "(1/n) Σ |yᵢ - ŷᵢ|"^^xsd:string)

;; ISO/IEC alignment
(AnnotationAssertion :alignedWith :MeanAbsoluteError :ISO25059)
(AnnotationAssertion :alignedWith :MeanAbsoluteError :NISTAIRFM_MEASURE27)
```

</details>

## See Also

- [[Model Performance]]
- [[Root Mean Square Error]]
- [[Mean Squared Error]]
- [[MAPE]]
- [[Regression]]
- [[Model Evaluation]]
- [[Error Analysis]]
- [[Median Absolute Error]]
	- maturity:: draft
	- owl:class:: mv:MeanAbsoluteError
	- owl:role:: Concept
	- belongsToDomain:: [[MetaverseDomain]]
	- #### Relationships
	  id:: mean-absolute-error-relationships
- ## About Mean Absolute Error
	- A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences between predictions and ground truth across all instances, providing an intuitive measure of prediction accuracy in the same units as the target variable, treating all errors equally regardless of direction, and being less sensitive to outliers than squared error metrics.

	- ### Open Source
		- The Openstand principles are a great starting place for what an open metaverse might mean. [They are](https://open-stand.org/about-us/principles/)

	- ### Open Source
		- The Openstand principles are a great starting place for what an open metaverse might mean. [They are](https://open-stand.org/about-us/principles/)

## Mathematical Definition

$$\text{MAE} = \frac{1}{n}\sum_{i=1}^{n}|y_i - \hat{y}_i|$$

Where:
- **n**: Number of instances
- **yᵢ**: Actual value for instance i
- **ŷᵢ**: Predicted value for instance i
- **|·|**: Absolute value function

## Context and Significance

MAE provides a straightforward interpretation: "On average, how far off are the predictions?" with the answer in the same units as the target variable (e.g., dollars, years, metres). Unlike squared error metrics (MSE, RMSE), MAE treats all errors equally, making it robust to outliers—a large prediction error contributes proportionally rather than quadratically to the overall metric.

This equal weighting has implications: MAE is appropriate when all errors have similar consequences, but may be less suitable when large errors are disproportionately costly. The choice between MAE and RMSE often reflects whether errors should be penalised linearly (MAE) or quadratically (RMSE), which depends on the application's cost function for prediction errors.

## Key Characteristics

- **Intuitive interpretation**: Average error in original units
- **Outlier robust**: Less sensitive to outliers than RMSE
- **Equal error weighting**: All errors contribute proportionally
- **Non-differentiable at zero**: Complicates some optimization algorithms
- **Scale-dependent**: Values only comparable within same target variable scale
- **Always non-negative**: Range [0, ∞), lower is better
- **Symmetric**: Treats over-predictions and under-predictions equally

## Appropriate Use Cases

**When MAE is Suitable:**
- Errors have linear cost (doubling error doubles cost)
- Outliers should not dominate performance assessment
- Intuitive communication to non-technical stakeholders desired
- All prediction errors equally important (no special concern for large errors)
- Median-based predictions (MAE optimal for median predictions)

**When RMSE May Be Preferred:**
- Large errors significantly more costly than small errors
- Gaussian error distributions expected
- Mean-based predictions (RMSE optimal for mean predictions)
- Applications where squared error has natural interpretation

## Relationships

- **Component of**: Model Performance assessment for regression
- **Alternative to**: Root Mean Square Error (RMSE), Mean Squared Error (MSE)
- **Related to**: Mean Absolute Percentage Error (MAPE) - relative version
- **Optimized by**: Median predictions (MAE-optimal)
- **Used in**: Model Evaluation, model comparison, performance monitoring
- **Scale-dependent**: Unlike MAPE or R², requires same-scale comparisons
- **Reported in**: Model Cards, performance dashboards, regression analysis

## Examples and Applications

1. **House Price Prediction**: Model achieves MAE of £15,000 on house price predictions—average prediction is off by £15,000, intuitively interpretable by stakeholders and property professionals
2. **Demand Forecasting**: Inventory demand forecast with MAE of 23 units—on average, forecasts miss actual demand by 23 units, directly informing safety stock calculations
3. **Temperature Prediction**: Weather model MAE of 2.1°C—average temperature forecast error is 2.1 degrees, straightforward for weather service communication
4. **Age Estimation**: Face age estimation with MAE of 4.7 years—predictions typically off by about 4.7 years, with occasional larger errors not dominating metric (unlike RMSE)

## Calculation and Implementation

**Standard Calculation:**
```python
from sklearn.metrics import mean_absolute_error

mae = mean_absolute_error(y_true, y_pred)
print(f'MAE: {mae:.2f}')
```

**Manual Calculation:**
```python
import numpy as np

mae = np.mean(np.abs(y_true - y_pred))
```

**Weighted MAE:**
```python
# Sample-weighted MAE
mae_weighted = mean_absolute_error(y_true, y_pred, sample_weight=weights)

# Manual weighted calculation
mae_weighted = np.sum(weights * np.abs(y_true - y_pred)) / np.sum(weights)
```

## Implementation Considerations

**Best Practices:**
- Report MAE in interpretable units with context (e.g., "MAE: £15,000 on properties averaging £250,000")
- Compare MAE to baseline (e.g., predicting mean, predicting previous value)
- Disaggregate MAE across subgroups or value ranges for fairness assessment
- Examine error distribution, not just MAE, to detect systematic biases
- Consider RMSE alongside MAE if large errors are disproportionately important
- Monitor MAE trends over time to detect model degradation

**Common Pitfalls:**
- Comparing MAE across datasets with different target variable scales
- Not accounting for heteroscedasticity (errors varying with predicted value)
- Ignoring error distribution patterns revealed by MAE alone
- Using MAE when large errors are critically important (consider RMSE)
- Failing to contextualize MAE with baseline or target variable statistics

**Comparison with RMSE:**
- **MAE ≤ RMSE** always holds (equality only when all errors identical)
- Larger RMSE-MAE gap indicates greater error variance or presence of outliers
- RMSE / MAE ratio provides insight into error distribution spread

## Variants and Related Metrics

**Median Absolute Error (MedAE)**: Median instead of mean of absolute errors
- More robust to outliers than MAE
- Provides different central tendency measure

**Mean Absolute Percentage Error (MAPE)**: Scale-independent version
$$\text{MAPE} = \frac{100\%}{n}\sum_{i=1}^{n}\left|\frac{y_i - \hat{y}_i}{y_i}\right|$$
- Interpretable as percentage error
- Undefined when actual values are zero
- Asymmetric (penalises over-predictions more than under-predictions)

**Quantile Loss / Pinball Loss**: Asymmetric MAE variant
- Allows different penalties for over- vs. under-prediction
- Used in quantile regression

## ISO/IEC and Standards Alignment

**ISO/IEC 25059** (Quality Model for AI Systems):
- MAE as regression accuracy metric
- Functional correctness measurement

**ISO/IEC 25024** (Data Quality Metrics):
- Accuracy measurement for continuous outputs

## NIST AI RMF Integration

**MEASURE Function**:
- MEASURE-2.2: MAE as appropriate metric for regression tasks
- MEASURE-2.3: MAE assessed across different contexts and subgroups
- Supports Valid and Reliable trustworthiness characteristic

## Statistical Properties

**Optimal Predictor**: MAE is minimized by predicting the **median** of the conditional distribution P(y|x)

**Robustness**: MAE uses L₁ norm, making it robust to outliers (unlike L₂ norm used in MSE/RMSE)

**Non-differentiability**: Absolute value function non-differentiable at zero, requiring special handling in gradient-based optimization (subgradient methods)

## Related Terms

- [[Model Performance]]: MAE as regression performance metric
- [[Root Mean Square Error]]: Alternative squared-error metric
- [[Mean Squared Error]]: Related squared-error metric
- [[MAPE]]: Percentage-based variant
- [[Regression]]: Task type for which MAE is appropriate
- [[Outlier]]: MAE less sensitive than RMSE
- [[Model Evaluation]]: Process using MAE
- [[Error Analysis]]: Examination of prediction errors

## References

1. Willmott, C.J. & Matsuura, K., *Advantages of the Mean Absolute Error (MAE) over the Root Mean Square Error (RMSE) in Assessing Average Model Performance*, Climate Research (2005)
2. Chai, T. & Draxler, R.R., *Root Mean Square Error (RMSE) or Mean Absolute Error (MAE)? Arguments Against Avoiding RMSE in the Literature*, Geoscientific Model Development (2014)
3. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*

## Formal Ontology

<details>
<summary>OWL Functional Syntax</summary>

```clojure
;; Class Declaration
(Declaration (Class :MeanAbsoluteError))
(SubClassOf :MeanAbsoluteError :PerformanceMetric)
(SubClassOf :MeanAbsoluteError :RegressionMetric)
(SubClassOf :MeanAbsoluteError :ErrorMetric)

;; Abbreviation
(Declaration (AnnotationProperty :abbreviation))
(AnnotationAssertion :abbreviation :MeanAbsoluteError "MAE"^^xsd:string)

;; Core relationships
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :measuresPerformanceOf :RegressionModel))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :alternativeTo :RootMeanSquareError))

;; Metric properties
(Declaration (DataProperty :hasMAEValue))
(DataPropertyDomain :hasMAEValue :MeanAbsoluteError)
(DataPropertyRange :hasMAEValue xsd:float)
(FunctionalDataProperty :hasMAEValue)

;; Value constraints
(SubClassOf :MeanAbsoluteError
  (DataPropertyRestriction
    :hasMAEValue
    (MinInclusiveDataRange 0.0^^xsd:float)))

(AnnotationAssertion rdfs:comment :hasMAEValue
  "MAE is always non-negative; range [0, ∞) with lower values indicating better performance"@en)

;; Characteristics
(Declaration (Class :OutlierRobustMetric))
(Declaration (Class :LinearErrorPenalty))
(Declaration (ObjectProperty :hasCharacteristic))

(SubClassOf :MeanAbsoluteError :OutlierRobustMetric)
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :hasCharacteristic :LinearErrorPenalty))

;; Unit preservation
(Declaration (DataProperty :measurementUnits))
(DataPropertyDomain :measurementUnits :MeanAbsoluteError)
(DataPropertyRange :measurementUnits xsd:string)
(AnnotationAssertion rdfs:comment :measurementUnits
  "MAE expressed in same units as target variable, enabling intuitive interpretation"@en)

;; Optimal prediction type
(Declaration (Class :MedianPrediction))
(Declaration (ObjectProperty :optimisedBy))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :optimisedBy :MedianPrediction))

;; Comparison with RMSE
(Declaration (ObjectProperty :lessSensitiveToOutliersThan))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :lessSensitiveToOutliersThan :RootMeanSquareError))

;; Use case focus
(Declaration (Class :LinearCostFunction))
(Declaration (ObjectProperty :appropriateFor))
(SubClassOf :MeanAbsoluteError
  (ObjectSomeValuesFrom :appropriateFor :LinearCostFunction))

;; Annotations
(AnnotationAssertion rdfs:label :MeanAbsoluteError "Mean Absolute Error"@en)
(AnnotationAssertion rdfs:label :MeanAbsoluteError "MAE"@en)
(AnnotationAssertion rdfs:comment :MeanAbsoluteError
  "A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences."@en)
(AnnotationAssertion dcterms:source :MeanAbsoluteError <https://www.iso.org/standard/74438.html>)
(AnnotationAssertion :termID :MeanAbsoluteError "AI-0114"^^xsd:string)
(AnnotationAssertion :mathematicalFormula :MeanAbsoluteError
  "(1/n) Σ |yᵢ - ŷᵢ|"^^xsd:string)

;; ISO/IEC alignment
(AnnotationAssertion :alignedWith :MeanAbsoluteError :ISO25059)
(AnnotationAssertion :alignedWith :MeanAbsoluteError :NISTAIRFM_MEASURE27)
```

</details>

## See Also

- [[Model Performance]]
- [[Root Mean Square Error]]
- [[Mean Squared Error]]
- [[MAPE]]
- [[Regression]]
- [[Model Evaluation]]
- [[Error Analysis]]
- [[Median Absolute Error]]
	-
	- ### Original Content
	  collapsed:: true
		- ```
# Mean Absolute Error
		  
		  **Term ID**: AI-0114
		  **Category**: Foundational Concept - Performance Metric
		  **Ontology**: AI-Grounded Ontology
		  **Last Updated**: 2025-10-27
		  
		  ## Definition
		  
		  A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences between predictions and ground truth across all instances, providing an intuitive measure of prediction accuracy in the same units as the target variable, treating all errors equally regardless of direction, and being less sensitive to outliers than squared error metrics.
		  
		  ## Mathematical Definition
		  
		  $$\text{MAE} = \frac{1}{n}\sum_{i=1}^{n}|y_i - \hat{y}_i|$$
		  
		  Where:
		  - **n**: Number of instances
		  - **yᵢ**: Actual value for instance i
		  - **ŷᵢ**: Predicted value for instance i
		  - **|·|**: Absolute value function
		  
		  ## Context and Significance
		  
		  MAE provides a straightforward interpretation: "On average, how far off are the predictions?" with the answer in the same units as the target variable (e.g., dollars, years, metres). Unlike squared error metrics (MSE, RMSE), MAE treats all errors equally, making it robust to outliers—a large prediction error contributes proportionally rather than quadratically to the overall metric.
		  
		  This equal weighting has implications: MAE is appropriate when all errors have similar consequences, but may be less suitable when large errors are disproportionately costly. The choice between MAE and RMSE often reflects whether errors should be penalised linearly (MAE) or quadratically (RMSE), which depends on the application's cost function for prediction errors.
		  
		  ## Key Characteristics
		  
		  - **Intuitive interpretation**: Average error in original units
		  - **Outlier robust**: Less sensitive to outliers than RMSE
		  - **Equal error weighting**: All errors contribute proportionally
		  - **Non-differentiable at zero**: Complicates some optimization algorithms
		  - **Scale-dependent**: Values only comparable within same target variable scale
		  - **Always non-negative**: Range [0, ∞), lower is better
		  - **Symmetric**: Treats over-predictions and under-predictions equally
		  
		  ## Appropriate Use Cases
		  
		  **When MAE is Suitable:**
		  - Errors have linear cost (doubling error doubles cost)
		  - Outliers should not dominate performance assessment
		  - Intuitive communication to non-technical stakeholders desired
		  - All prediction errors equally important (no special concern for large errors)
		  - Median-based predictions (MAE optimal for median predictions)
		  
		  **When RMSE May Be Preferred:**
		  - Large errors significantly more costly than small errors
		  - Gaussian error distributions expected
		  - Mean-based predictions (RMSE optimal for mean predictions)
		  - Applications where squared error has natural interpretation
		  
		  ## Relationships
		  
		  - **Component of**: Model Performance assessment for regression
		  - **Alternative to**: Root Mean Square Error (RMSE), Mean Squared Error (MSE)
		  - **Related to**: Mean Absolute Percentage Error (MAPE) - relative version
		  - **Optimized by**: Median predictions (MAE-optimal)
		  - **Used in**: Model Evaluation, model comparison, performance monitoring
		  - **Scale-dependent**: Unlike MAPE or R², requires same-scale comparisons
		  - **Reported in**: Model Cards, performance dashboards, regression analysis
		  
		  ## Examples and Applications
		  
		  1. **House Price Prediction**: Model achieves MAE of £15,000 on house price predictions—average prediction is off by £15,000, intuitively interpretable by stakeholders and property professionals
		  2. **Demand Forecasting**: Inventory demand forecast with MAE of 23 units—on average, forecasts miss actual demand by 23 units, directly informing safety stock calculations
		  3. **Temperature Prediction**: Weather model MAE of 2.1°C—average temperature forecast error is 2.1 degrees, straightforward for weather service communication
		  4. **Age Estimation**: Face age estimation with MAE of 4.7 years—predictions typically off by about 4.7 years, with occasional larger errors not dominating metric (unlike RMSE)
		  
		  ## Calculation and Implementation
		  
		  **Standard Calculation:**
		  ```python
		  from sklearn.metrics import mean_absolute_error
		  
		  mae = mean_absolute_error(y_true, y_pred)
		  print(f'MAE: {mae:.2f}')
		  ```
		  
		  **Manual Calculation:**
		  ```python
		  import numpy as np
		  
		  mae = np.mean(np.abs(y_true - y_pred))
		  ```
		  
		  **Weighted MAE:**
		  ```python
		  # Sample-weighted MAE
		  mae_weighted = mean_absolute_error(y_true, y_pred, sample_weight=weights)
		  
		  # Manual weighted calculation
		  mae_weighted = np.sum(weights * np.abs(y_true - y_pred)) / np.sum(weights)
		  ```
		  
		  ## Implementation Considerations
		  
		  **Best Practices:**
		  - Report MAE in interpretable units with context (e.g., "MAE: £15,000 on properties averaging £250,000")
		  - Compare MAE to baseline (e.g., predicting mean, predicting previous value)
		  - Disaggregate MAE across subgroups or value ranges for fairness assessment
		  - Examine error distribution, not just MAE, to detect systematic biases
		  - Consider RMSE alongside MAE if large errors are disproportionately important
		  - Monitor MAE trends over time to detect model degradation
		  
		  **Common Pitfalls:**
		  - Comparing MAE across datasets with different target variable scales
		  - Not accounting for heteroscedasticity (errors varying with predicted value)
		  - Ignoring error distribution patterns revealed by MAE alone
		  - Using MAE when large errors are critically important (consider RMSE)
		  - Failing to contextualize MAE with baseline or target variable statistics
		  
		  **Comparison with RMSE:**
		  - **MAE ≤ RMSE** always holds (equality only when all errors identical)
		  - Larger RMSE-MAE gap indicates greater error variance or presence of outliers
		  - RMSE / MAE ratio provides insight into error distribution spread
		  
		  ## Variants and Related Metrics
		  
		  **Median Absolute Error (MedAE)**: Median instead of mean of absolute errors
		  - More robust to outliers than MAE
		  - Provides different central tendency measure
		  
		  **Mean Absolute Percentage Error (MAPE)**: Scale-independent version
		  $$\text{MAPE} = \frac{100\%}{n}\sum_{i=1}^{n}\left|\frac{y_i - \hat{y}_i}{y_i}\right|$$
		  - Interpretable as percentage error
		  - Undefined when actual values are zero
		  - Asymmetric (penalises over-predictions more than under-predictions)
		  
		  **Quantile Loss / Pinball Loss**: Asymmetric MAE variant
		  - Allows different penalties for over- vs. under-prediction
		  - Used in quantile regression
		  
		  ## ISO/IEC and Standards Alignment
		  
		  **ISO/IEC 25059** (Quality Model for AI Systems):
		  - MAE as regression accuracy metric
		  - Functional correctness measurement
		  
		  **ISO/IEC 25024** (Data Quality Metrics):
		  - Accuracy measurement for continuous outputs
		  
		  ## NIST AI RMF Integration
		  
		  **MEASURE Function**:
		  - MEASURE-2.2: MAE as appropriate metric for regression tasks
		  - MEASURE-2.3: MAE assessed across different contexts and subgroups
		  - Supports Valid and Reliable trustworthiness characteristic
		  
		  ## Statistical Properties
		  
		  **Optimal Predictor**: MAE is minimized by predicting the **median** of the conditional distribution P(y|x)
		  
		  **Robustness**: MAE uses L₁ norm, making it robust to outliers (unlike L₂ norm used in MSE/RMSE)
		  
		  **Non-differentiability**: Absolute value function non-differentiable at zero, requiring special handling in gradient-based optimization (subgradient methods)
		  
		  ## Related Terms
		  
		  - [[Model Performance]]: MAE as regression performance metric
		  - [[Root Mean Square Error]]: Alternative squared-error metric
		  - [[Mean Squared Error]]: Related squared-error metric
		  - [[MAPE]]: Percentage-based variant
		  - [[Regression]]: Task type for which MAE is appropriate
		  - [[Outlier]]: MAE less sensitive than RMSE
		  - [[Model Evaluation]]: Process using MAE
		  - [[Error Analysis]]: Examination of prediction errors
		  
		  ## References
		  
		  1. Willmott, C.J. & Matsuura, K., *Advantages of the Mean Absolute Error (MAE) over the Root Mean Square Error (RMSE) in Assessing Average Model Performance*, Climate Research (2005)
		  2. Chai, T. & Draxler, R.R., *Root Mean Square Error (RMSE) or Mean Absolute Error (MAE)? Arguments Against Avoiding RMSE in the Literature*, Geoscientific Model Development (2014)
		  3. ISO/IEC 25059, *Software engineering — Systems and software Quality Requirements and Evaluation (SQuaRE) — Quality model for AI systems*
		  
		  ## Formal Ontology
		  
		  <details>
		  <summary>OWL Functional Syntax</summary>
		  
		  ```clojure
		  ;; Class Declaration
		  (Declaration (Class :MeanAbsoluteError))
		  (SubClassOf :MeanAbsoluteError :PerformanceMetric)
		  (SubClassOf :MeanAbsoluteError :RegressionMetric)
		  (SubClassOf :MeanAbsoluteError :ErrorMetric)
		  
		  ;; Abbreviation
		  (Declaration (AnnotationProperty :abbreviation))
		  (AnnotationAssertion :abbreviation :MeanAbsoluteError "MAE"^^xsd:string)
		  
		  ;; Core relationships
		  (SubClassOf :MeanAbsoluteError
		    (ObjectSomeValuesFrom :measuresPerformanceOf :RegressionModel))
		  (SubClassOf :MeanAbsoluteError
		    (ObjectSomeValuesFrom :alternativeTo :RootMeanSquareError))
		  
		  ;; Metric properties
		  (Declaration (DataProperty :hasMAEValue))
		  (DataPropertyDomain :hasMAEValue :MeanAbsoluteError)
		  (DataPropertyRange :hasMAEValue xsd:float)
		  (FunctionalDataProperty :hasMAEValue)
		  
		  ;; Value constraints
		  (SubClassOf :MeanAbsoluteError
		    (DataPropertyRestriction
		      :hasMAEValue
		      (MinInclusiveDataRange 0.0^^xsd:float)))
		  
		  (AnnotationAssertion rdfs:comment :hasMAEValue
		    "MAE is always non-negative; range [0, ∞) with lower values indicating better performance"@en)
		  
		  ;; Characteristics
		  (Declaration (Class :OutlierRobustMetric))
		  (Declaration (Class :LinearErrorPenalty))
		  (Declaration (ObjectProperty :hasCharacteristic))
		  
		  (SubClassOf :MeanAbsoluteError :OutlierRobustMetric)
		  (SubClassOf :MeanAbsoluteError
		    (ObjectSomeValuesFrom :hasCharacteristic :LinearErrorPenalty))
		  
		  ;; Unit preservation
		  (Declaration (DataProperty :measurementUnits))
		  (DataPropertyDomain :measurementUnits :MeanAbsoluteError)
		  (DataPropertyRange :measurementUnits xsd:string)
		  (AnnotationAssertion rdfs:comment :measurementUnits
		    "MAE expressed in same units as target variable, enabling intuitive interpretation"@en)
		  
		  ;; Optimal prediction type
		  (Declaration (Class :MedianPrediction))
		  (Declaration (ObjectProperty :optimisedBy))
		  (SubClassOf :MeanAbsoluteError
		    (ObjectSomeValuesFrom :optimisedBy :MedianPrediction))
		  
		  ;; Comparison with RMSE
		  (Declaration (ObjectProperty :lessSensitiveToOutliersThan))
		  (SubClassOf :MeanAbsoluteError
		    (ObjectSomeValuesFrom :lessSensitiveToOutliersThan :RootMeanSquareError))
		  
		  ;; Use case focus
		  (Declaration (Class :LinearCostFunction))
		  (Declaration (ObjectProperty :appropriateFor))
		  (SubClassOf :MeanAbsoluteError
		    (ObjectSomeValuesFrom :appropriateFor :LinearCostFunction))
		  
		  ;; Annotations
		  (AnnotationAssertion rdfs:label :MeanAbsoluteError "Mean Absolute Error"@en)
		  (AnnotationAssertion rdfs:label :MeanAbsoluteError "MAE"@en)
		  (AnnotationAssertion rdfs:comment :MeanAbsoluteError
		    "A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences."@en)
		  (AnnotationAssertion dcterms:source :MeanAbsoluteError <https://www.iso.org/standard/74438.html>)
		  (AnnotationAssertion :termID :MeanAbsoluteError "AI-0114"^^xsd:string)
		  (AnnotationAssertion :mathematicalFormula :MeanAbsoluteError
		    "(1/n) Σ |yᵢ - ŷᵢ|"^^xsd:string)
		  
		  ;; ISO/IEC alignment
		  (AnnotationAssertion :alignedWith :MeanAbsoluteError :ISO25059)
		  (AnnotationAssertion :alignedWith :MeanAbsoluteError :NISTAIRFM_MEASURE27)
		  ```
		  
		  </details>
		  
		  ## See Also
		  
		  - [[Model Performance]]
		  - [[Root Mean Square Error]]
		  - [[Mean Squared Error]]
		  - [[MAPE]]
		  - [[Regression]]
		  - [[Model Evaluation]]
		  - [[Error Analysis]]
		  - [[Median Absolute Error]]
		  
		  ```

    - measures:: [[MAPE]], [[Regression]], [[Model Evaluation]]

- public-access:: true
	- definition:: A regression performance metric representing the average magnitude of errors between predicted and actual values, calculated as the arithmetic mean of absolute differences between predictions and ground truth across all instances, providing an intuitive measure of prediction accuracy in the same units as the target variable, treating all errors equally regardless of direction, and being less sensitive to outliers than squared error metrics.


## Academic Context

- Mean Absolute Error (MAE) is a fundamental regression performance metric quantifying the average magnitude of errors between predicted and actual values
  - It is calculated as the arithmetic mean of the absolute differences between predictions and ground truth across all instances
  - MAE treats all errors equally regardless of direction, providing an intuitive measure of prediction accuracy in the same units as the target variable
  - The metric is grounded in statistical error analysis and regression diagnostics, offering a linear, interpretable loss function
  - Unlike squared error metrics, MAE is less sensitive to outliers, making it a robust choice in many modelling scenarios
  - Its simplicity and direct interpretability have made it a staple in both academic research and practical machine learning applications

## Current Landscape (2025)

- MAE remains widely adopted in industry for evaluating regression models due to its straightforward interpretation and robustness
  - It is implemented across major machine learning platforms and libraries such as scikit-learn, TensorFlow, and PyTorch
  - Organisations prioritising explainability and fairness often prefer MAE over metrics like Mean Squared Error (MSE) because it does not disproportionately penalise large errors
  - In the UK, MAE is commonly used in sectors such as healthcare analytics, financial forecasting, and public sector data science, where transparent and interpretable metrics are valued
  - In North England, regional innovation hubs like the Hartree Centre in Liverpool and the Digital Catapult in Newcastle have incorporated MAE into their model evaluation frameworks for local industry partnerships

## Research & Literature

- Key academic papers and sources
  - Willmott, C. J., & Matsuura, K. (2005). Advantages of the mean absolute error (MAE) over the root mean square error (RMSE) in assessing average model performance. Climate Research, 30(1), 79–82. https://doi.org/10.3354/cr030079
  - Hyndman, R. J., & Koehler, A. B. (2006). Another look at measures of forecast accuracy. International Journal of Forecasting, 22(4), 679–688. https://doi.org/10.1016/j.ijforecast.2006.03.001
  - Arize (2025). Mean Absolute Error in Machine Learning: What You Need To Know. https://arize.com/blog-course/mean-absolute-error-in-machine-learning-what-you-need-to-know/
  - Deepchecks (2025). What is Mean Absolute Error? Formula & Significance. https://www.deepchecks.com/glossary/mean-absolute-error/
  - GeeksforGeeks (2025). How to Calculate Mean Absolute Error in Python. https://www.geeksforgeeks.org/python/how-to-calculate-mean-absolute-error-in-python/
- Ongoing research directions
  - Exploring hybrid error metrics that combine MAE with other measures for improved robustness
  - Investigating the impact of MAE in fairness-aware machine learning and explainable AI frameworks

## UK Context

- British contributions and implementations
  - UK universities and research institutions frequently use MAE in their published studies on regression models, particularly in environmental science and social sciences
  - The Office for National Statistics (ONS) and other government bodies have adopted MAE for evaluating predictive models in public policy and economic forecasting
- North England innovation hubs
  - The Hartree Centre in Liverpool has led several projects using MAE for model validation in energy and manufacturing sectors
  - The Digital Catapult in Newcastle supports local startups and SMEs in adopting MAE for transparent model evaluation in digital health and smart city applications
- Regional case studies
  - A recent collaboration between the University of Manchester and local healthcare providers used MAE to assess the accuracy of predictive models for patient readmission rates, highlighting its practical utility in real-world settings

## Future Directions

- Emerging trends and developments
  - Increasing integration of MAE in automated machine learning (AutoML) platforms for model selection and hyperparameter tuning
  - Growing interest in MAE for evaluating models in edge computing and IoT applications, where interpretability and robustness are critical
- Anticipated challenges
  - Balancing the need for robustness with the desire for more nuanced error metrics that capture different aspects of model performance
  - Addressing the limitations of MAE in scenarios where the direction of errors is important
- Research priorities
  - Developing new error metrics that combine the strengths of MAE with other measures
  - Investigating the impact of MAE in fairness-aware and explainable AI frameworks

## References

1. Willmott, C. J., & Matsuura, K. (2005). Advantages of the mean absolute error (MAE) over the root mean square error (RMSE) in assessing average model performance. Climate Research, 30(1), 79–82. https://doi.org/10.3354/cr030079
2. Hyndman, R. J., & Koehler, A. B. (2006). Another look at measures of forecast accuracy. International Journal of Forecasting, 22(4), 679–688. https://doi.org/10.1016/j.ijforecast.2006.03.001
3. Arize (2025). Mean Absolute Error in Machine Learning: What You Need To Know. https://arize.com/blog-course/mean-absolute-error-in-machine-learning-what-you-need-to-know/
4. Deepchecks (2025). What is Mean Absolute Error? Formula & Significance. https://www.deepchecks.com/glossary/mean-absolute-error/
5. GeeksforGeeks (2025). How to Calculate Mean Absolute Error in Python. https://www.geeksforgeeks.org/python/how-to-calculate-mean-absolute-error-in-python/

## Metadata

- Last Updated: 2025-11-11
- Review Status: Comprehensive editorial review
- Verification: Academic sources verified
- Regional Context: UK/North England where applicable
