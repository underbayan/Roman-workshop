// Ipij API (c) Copyright 2012, designed by B.Mazin & G.Tartavel

/**
 * @fileOverview Some wavelets.
 * @author TM = Tartavel & Mazin
 * @version 1.0
 */

if (Wavelet === undefined) {
    throw new Error("'Wavelets_list.js' require 'Wavelet' class");
}

Wavelet.list = {
    // Thanks to: http://wavelets.pybytes.com/wavelet/haar/

    /* Daubechies */

    'haar': {
        'name': 'Haar / Daubechies 1',
        'orthogonal': true,
        'normalized': false,
        'filterL': [1, 1]
    },

    'db2': {
        'name': 'Daubechies 2',
        'orthogonal': true,
        'normalized': false,
        'filterL': [1 + Math.sqrt(3), 3 + Math.sqrt(3), 3 - Math.sqrt(3), 1 - Math.sqrt(3)]
    },

    'db4': {
        'name': 'Daubechies 4',
        'orthogonal': true,
        'filterL': [
            -0.010597401784997278,
            0.032883011666982945,
            0.030841381835986965,
            -0.18703481171888114,
            -0.027983769416983849,
            0.63088076792959036,
            0.71484657055254153,
            0.23037781330885523
        ]
    },

    'db8': {
        'name': 'Daubechies 8',
        'orthogonal': true,
        'filterL': [
            -0.00011747678400228192,
            0.00067544940599855677,
            -0.00039174037299597711,
            -0.0048703529930106603,
            0.0087460940470156547,
            0.013981027917015516,
            -0.044088253931064719,
            -0.017369301002022108,
            0.12874742662018601,
            0.00047248457399797254,
            -0.28401554296242809,
            -0.015829105256023893,
            0.58535468365486909,
            0.67563073629801285,
            0.31287159091446592,
            0.054415842243081609
        ]
    },


    /* Symlets*/

    'sym2': {
        'name': 'Symlets 2',
        'orthogonal': true,
        'filterL': [
            -0.12940952255092145,
            0.22414386804185735,
            0.83651630373746899,
            0.48296291314469025
        ]
    },

    'sym4': {
        'name': 'Symlets 4',
        'orthogonal': true,
        'filterL': [
            -0.075765714789273325,
            -0.02963552764599851,
            0.49761866763201545,
            0.80373875180591614,
            0.29785779560527736,
            -0.099219543576847216,
            -0.012603967262037833,
            0.032223100604042702
        ]
    },

    'sym8': {
        'name': 'Symlets 8',
        'orthogonal': true,
        'filterL': [
            -0.0033824159510061256,
            -0.00054213233179114812,
            0.031695087811492981,
            0.0076074873249176054,
            -0.14329423835080971,
            -0.061273359067658524,
            0.48135965125837221,
            0.77718575170052351,
            0.3644418948353314,
            -0.051945838107709037,
            -0.027219029917056003,
            0.049137179673607506,
            0.0038087520138906151,
            -0.014952258337048231,
            -0.0003029205147213668,
            0.0018899503327594609
        ]
    },


    /* Coiflets */

    'coif1': {
        'name': 'Coiflets 1',
        'orthogonal': true,
        'filterL': [
            -0.01565572813546454,
            -0.072732619512853897,
            0.38486484686420286,
            0.85257202021225542,
            0.33789766245780922,
            -0.072732619512853897
        ]
    },

    'coif2': {
        'name': 'Coiflets 2',
        'orthogonal': true,
        'filterL': [
            -0.00072054944536451221,
            -0.0018232088707029932,
            0.0056114348193944995,
            0.023680171946334084,
            -0.059434418646456898,
            -0.076488599078306393,
            0.41700518442169254,
            0.81272363544554227,
            0.38611006682116222,
            -0.067372554721963018,
            -0.041464936781759151,
            0.016387336463522112
        ]
    },

    'coif4': {
        'name': 'Coiflets 4',
        'orthogonal': true,
        'filterL': [
            -1.7849850030882614e-06,
            -3.2596802368833675e-06,
            3.1229875865345646e-05,
            6.2339034461007128e-05,
            -0.00025997455248771324,
            -0.00058902075624433831,
            0.0012665619292989445,
            0.0037514361572784571,
            -0.0056582866866107199,
            -0.015211731527946259,
            0.025082261844864097,
            0.039334427123337491,
            -0.096220442033987982,
            -0.066627474263425038,
            0.4343860564914685,
            0.78223893092049901,
            0.41530840703043026,
            -0.056077313316754807,
            -0.081266699680878754,
            0.026682300156053072,
            0.016068943964776348,
            -0.0073461663276420935,
            -0.0016294920126017326,
            0.00089231366858231456
        ]
    },


    /* Bi-orthogonal */

    'bi13': {
        'name': 'Biorthogonal 1-3',
        'orthogonal': false,
        'filterL': [
            -0.088388347648318447,
            0.088388347648318447,
            0.70710678118654757,
            0.70710678118654757,
            0.088388347648318447,
            -0.088388347648318447
        ],
        'filterH': [
            -0.70710678118654757,
            0.70710678118654757
        ]
    },

    'bi31': {
        'name': 'Biorthogonal 3-1',
        'orthogonal': false,
        'filterL': [
            -0.35355339059327379,
            1.0606601717798214,
            1.0606601717798214,
            -0.35355339059327379
        ],
        'filterH': [
            -0.17677669529663689,
            0.53033008588991071,
            -0.53033008588991071,
            0.17677669529663689
        ]
    },

    'bi68': {
        'name': 'Biorthogonal 6-8',
        'orthogonal': false,
        'filterL': [
            0.0,
            0.0019088317364812906,
            -0.0019142861290887667,
            -0.016990639867602342,
            0.01193456527972926,
            0.04973290349094079,
            -0.077263173167204144,
            -0.09405920349573646,
            0.42079628460982682,
            0.82592299745840225,
            0.42079628460982682,
            -0.09405920349573646,
            -0.077263173167204144,
            0.04973290349094079,
            0.01193456527972926,
            -0.016990639867602342,
            -0.0019142861290887667,
            0.0019088317364812906
        ],
        'filterH': [
            0.0,
            0.014426282505624435,
            -0.014467504896790148,
            -0.078722001062628819,
            0.040367979030339923,
            0.41784910915027457,
            -0.75890772945365415,
            0.41784910915027457,
            0.040367979030339923,
            -0.078722001062628819,
            -0.014467504896790148,
            0.014426282505624435,
            0.0,
            0.0
        ]
    },

    'bi97': {
        'name': 'Biorthogonal 9-7',
        'orthogonal': false,
        'filterL': [
            0.0,
            0.02674875741080976,
            -0.01686411844287495,
            -0.07822326652898785,
            0.2668641184428723,
            0.6029490182363579,
            0.2668641184428723,
            -0.07822326652898785,
            -0.01686411844287495,
            0.02674875741080976
        ],
        'filterH': [
            0.0,
            -0.09127176311424948,
            0.05754352622849957,
            0.5912717631142470,
            -1.115087052456994,
            0.5912717631142470,
            0.05754352622849957,
            -0.09127176311424948,
            0.0,
            0.0
        ]
    }

};