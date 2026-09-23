
Gradient boosted trees are an ensemble learning method that builds a strong predictor by sequentially adding shallow decision trees, each fitted to the negative gradient of a differentiable loss with respect to the current model's predictions. By combining many weak learners in an additive, stage-wise manner, the method achieves high accuracy on structured and tabular data while controlling overfitting through regularisation, shrinkage and subsampling. It is among the most effective approaches for supervised regression and classification on heterogeneous features.

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
- ### Provenance

