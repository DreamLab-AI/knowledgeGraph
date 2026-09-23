
Local Interpretable Model-agnostic Explanations, a technique that explains individual predictions of any machine learning model by fitting a simple interpretable model to perturbed samples around the instance of interest.

- ### Semantic Classification

- ### Content
  - LIME explains a single prediction by sampling perturbed versions of the input, observing how the model's output changes, and fitting a sparse linear surrogate model weighted by proximity to the original instance. The coefficients of this local model indicate which features most influenced that particular prediction.
  - Because it treats the underlying model as a black box, LIME applies to any classifier or regressor. It is widely used alongside SHAP for local feature attribution, though its explanations can be sensitive to the choice of perturbation and neighbourhood parameters.

- ### Provenance

