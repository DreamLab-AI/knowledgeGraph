Receiver clock bias is the receiver’s estimated offset from the GNSS time scale, represented either as a time offset or as the equivalent range term in a measurement model.[^1][^2]

Pseudorange models include a receiver-clock term shared by observations made with that receiver clock. A navigation solution estimates this state alongside the receiver position; its value is not itself a residual or proof of an oscillator fault. State estimates may change between epochs as the receiver clock and solution evolve.[^2][^3]

RINEX records an optional receiver-clock offset in seconds and describes how an offset is handled across pseudorange, carrier phase and Doppler observations. State the unit and sign convention when reporting it. The file header records whether the offset has been applied, so the presence of a value does not establish that every observation has already been corrected.[^1]

Receiver and satellite clock terms belong to different parts of the model. The receiver clock is estimated for the user equipment; satellite clock offsets are satellite-specific quantities supplied by a navigation message or precise products. Residuals are the remaining measurement differences after modelling and estimation, and can include several error sources besides clock effects.[^1][^2][^3]

[^1]: IGS/RTCM RINEX Committee, *RINEX: The Receiver Independent Exchange Format*, version 4.02. https://files.igs.org/pub/data/format/rinex_4.02.pdf
[^2]: ESA, *GNSS Data Processing, Volume I: Fundamentals and Algorithms*. https://gssc.esa.int/navipedia/GNSS_Book/ESA_GNSS-Book_TM-23_Vol_I.pdf
[^3]: ESA Navipedia, “Clock Modelling”. https://gssc.esa.int/navipedia/index.php?title=Clock_Modelling

