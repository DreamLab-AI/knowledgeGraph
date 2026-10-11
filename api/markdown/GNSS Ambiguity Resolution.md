GNSS ambiguity resolution estimates the integer carrier cycles associated with a continuous phase-tracking arc and tests whether an integer candidate can be accepted in the positioning solution.[^1][^2]

Processing commonly starts with a float solution, in which ambiguities are estimated as real-valued parameters. An integer search then proposes candidate values. If a candidate passes the chosen validation tests, the estimator forms a fixed solution conditioned on it. “Fixed” describes the estimator’s state; it does not by itself establish that the integers are correct or guarantee a particular coordinate accuracy.[^1][^3][^4]

Integer structure depends on the observation model. In short-baseline double differences, shared receiver and satellite phase biases can cancel under suitable conditions, leaving integer ambiguities. Undifferenced models can retain fractional phase biases, which must be handled if integer fixing is intended.[^1][^2]

Validation is a separate quality-control step. Ratio tests are one established approach, but acceptance depends on the candidate evidence and on the observation model being adequate. Satellite geometry, continuous carrier data, realistic weights, atmospheric effects and hardware biases all affect whether a fix is defensible. A cycle slip breaks the affected ambiguity arc and may require a fresh estimate before another integer search.[^1][^3][^4]

[^1]: ESA, *GNSS Data Processing, Volume I: Fundamentals and Algorithms*. https://gssc.esa.int/navipedia/GNSS_Book/ESA_GNSS-Book_TM-23_Vol_I.pdf
[^2]: ESA Navipedia, “Carrier Phase Ambiguity Fixing”. https://gssc.esa.int/navipedia/index.php/Carrier_Phase_Ambiguity_Fixing
[^3]: Yin, Teunissen and Tiberius, “Performance of ambiguity-resolved detector for GNSS mixed-integer model”. https://pure.tudelft.nl/ws/portalfiles/portal/240662638/s10291-024-01806-4.pdf
[^4]: Teunissen and Verhagen, “On the Foundation of the Popular Ratio Test for GNSS Ambiguity Resolution”, ION GNSS 2004. https://www.ion.org/publications/abstract.cfm?articleID=5937

