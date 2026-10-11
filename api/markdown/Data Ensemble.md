A data ensemble is a collection of related data items treated together as a set, which the SWEET ontology models as a kind of collection.[^1]

In the sources, the clearest worked example is the ensemble weather forecast, a set of forecasts produced by running multiple simulations, each with a slight variation of its initial conditions and with slightly perturbed weather models.[^2] The variations stand for uncertainty in the starting state and in the model, and together the members show a range of possible outcomes rather than a single answer.[^2]

The SWEET source gives only the class relation and a label for the ensemble class. It does not say how members are chosen, how many there should be, or what they must share, so those details depend on the producing system.[^1] The ECMWF fact sheet describes forecasting practice and does not establish that every data ensemble is a set of model runs; an ensemble of observations or of reprocessed products would need its own documentation.[^2]

An ensemble is a set of members and should not be confused with a single product that summarises them, such as a mean. The sources reviewed do not define such summaries, so statements about them need the documentation of the specific dataset.

[^1]: ESIP, SWEET ontology, reprDataProduct module (Turtle source). https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataProduct.ttl
[^2]: ECMWF, “Fact sheet: Ensemble weather forecasting”, 23 March 2017. https://www.ecmwf.int/en/about/media-centre/focus/2017/fact-sheet-ensemble-weather-forecasting

