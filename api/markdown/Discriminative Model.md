
A discriminative model is a class of machine learning model that directly learns the conditional probability of a target label given the observed input, rather than modelling how the data itself is generated. It focuses on the decision boundary that separates classes, which often yields strong predictive accuracy on classification and regression tasks. Discriminative models contrast with generative models, which learn the joint distribution of inputs and outputs.

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
- ### Provenance

