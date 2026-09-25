The forecast horizon is the length of time into the future over which a predictive model generates estimates, measured as the number of time steps ahead from the last observation. It is a key design parameter in time-series forecasting that trades off relevance against uncertainty, since predictive error generally grows with the horizon. Choice of horizon shapes model selection, evaluation strategy, and the operational decisions a forecast supports.

### Content

- Short horizons typically yield lower error and support operational decisions such as inventory replenishment, while longer horizons feed strategic planning at the cost of greater uncertainty and wider prediction intervals. Multi-step forecasting can be produced recursively, directly per step, or jointly, and the chosen horizon governs how models are trained, how backtesting windows are arranged, and how forecast accuracy is reported.

