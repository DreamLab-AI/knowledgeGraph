GNSS time to first fix is the time elapsed from switching on a GNSS receiver until it outputs a navigation solution within a stated performance level.[^1][^2]

Navipedia notes that the figure depends on the receiver's starting conditions. In a cold start the receiver holds no information and searches the whole sky. In a warm start it has a valid almanac, a rough position and approximate frequency offset. In a hot start it has accurate ephemeris, frequency offset information and an accurate initial solution.[^2]

This article breaks the total into warm-up, signal acquisition, tracking, navigation message and navigation solution times. Receiver resources such as parallel correlation, the signal and the structure and data rate of its navigation message influence the result, and harsh environments such as urban canyons can interrupt or block the process.[^2]

Time to first fix is a receiver-level indicator, used by some manufacturers, rather than one of the core system parameters of accuracy, availability, continuity and integrity.[^1] Manufacturers publish only an overall figure, and some quote time to fix instead, so values from different vendors are comparable only when the start condition and accuracy criterion match. The sources do not give typical values.[^1][^2]

[^1]: ESA Navipedia, “GNSS Performances”, 2011. https://gssc.esa.int/navipedia/index.php/GNSS_Performances
[^2]: ESA Navipedia, “TTFF”, 2012. https://gssc.esa.int/navipedia/index.php/TTFF

