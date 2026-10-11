A trained data state is a SWEET data state reached after a training process has acted on the data.[^1]

SWEET defines the class as a subclass of Data State restricted to things that had a process of type Training, and it gives only a label, not a prose definition.[^1] Machine-learning practice supplies the usual meaning of training: in scikit-learn, training proceeds on the training set, followed by evaluation on a validation set and a final evaluation on a test set.[^2]

In that workflow training comes before validation, and a trained state alone carries no claim about accuracy.[^2]

Retained sources do not say what object is trained in the SWEET restriction, whether a model or a data record, and they give no Earth observation example of a trained data state. The page therefore bounds the term to the processing-state label and leaves the object open.

[^1]: ESIP Federation, “SWEET ontology, state data processing module”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/stateDataProcessing.ttl
[^2]: scikit-learn, “Cross-validation: evaluating estimator performance”. https://scikit-learn.org/stable/modules/cross_validation.html

