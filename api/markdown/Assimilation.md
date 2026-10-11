Assimilation is the combination of observations with a model forecast to produce an updated estimate of the state of a system, and in Earth observation it is the step that brings satellite and other measurements into a numerical model.[^1][^2]

ECMWF gives the purpose as determining a best possible atmospheric state and its uncertainties using observations and short range forecasts.[^1] It describes the method as typically sequential: a previous model forecast is compared with newly received observations, the model state is then updated, and a new forecast is initiated.[^1] A general reference adds that what separates assimilation from other estimation methods is that the model is dynamical, describing how its variables change over time.[^2]

In SWEET the class Assimilation is a subclass of SWEET’s parameterisation class, and Assimilate is declared equivalent to it, which fixes the alias but supplies no prose definition.[^3] The retained sources do not establish a satellite-specific definition, since the ECMWF text concerns atmospheric forecasting and the second source is a general encyclopaedia entry.[^1][^2] They also do not establish which observation types or model families the class covers.

[^1]: ECMWF, “Data assimilation”. https://www.ecmwf.int/en/research/data-assimilation
[^2]: Wikipedia, “Data assimilation”. https://en.wikipedia.org/wiki/Data_assimilation
[^3]: ESIP Federation (SWEET), “SWEET reprDataServiceAnalysis.ttl”. https://raw.githubusercontent.com/ESIPFed/sweet/master/src/reprDataServiceAnalysis.ttl

