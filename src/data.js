export async function getOrder(id) {
  return (await getOrders()).find((order) => order.id.toString() === id)
}



export async function getRecentOrders() {
  return (await getOrders()).slice(0, 10)
}

export const getOrders = async () => {
  return [
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "ULSD 08025",
      price: "$2.5000",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "AWD 08026",
      price: "$2.5300",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "#2 HO 08121",
      price: "$2.4650",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "B2 ULSD 08325",
      price: "$2.5100",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "B2 AWD 08326",
      price: "$2.5500",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "B5 ULSD 08525",
      price: "$2.5000",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "B5 AWD 08526",
      price: "$2.5300",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN",
      state: "PA",
      prodName: "BZERO AWD 08571",
      price: "$2.5900",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "ROCHESTER",
      state: "NY",
      prodName: "ULSD 08025",
      price: "$2.5600",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "TONAWANDA",
      state: "NY",
      prodName: "BZERO AWD 08571",
      price: "$2.5600",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN-KEYSTONE",
      state: "PA",
      prodName: "ULSD 08025",
      price: "$2.5000",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN-KEYSTONE",
      state: "PA",
      prodName: "AWD 08026",
      price: "$2.5300",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN-KEYSTONE",
      state: "PA",
      prodName: "#2 HO 08121",
      price: "$2.4650",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN-KEYSTONE",
      state: "PA",
      prodName: "B2 ULSD 08325",
      price: "$2.5100",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN-KEYSTONE",
      state: "PA",
      prodName: "B2 AWD 08326",
      price: "$2.5500",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN-KEYSTONE",
      state: "PA",
      prodName: "B5 ULSD 08525",
      price: "$2.5000",
      effDate: "05/13/24",
      effTime: "18:00:00"
    },
    {
      id: 6019750,
      terminal: "WARREN-KEYSTONE",
      state: "PA",
      prodName: "B5 AWD 08526",
      price: "$2.5300",
      effDate: "05/13/24",
      effTime: "18:00:00"
    }
  ];
};


export async function getEvent(id) {
  return (await getEvents()).find((event) => event.id.toString() === id)
}

export async function getEventOrders(id) {
  return (await getOrders()).filter((order) => order.event.id.toString() === id)
}

export async function getEvents() {
  return [
    {
      id: 1000,
      name: 'Bear Hug: Live in Concert',
      url: '/events/1000',
      date: 'May 20, 2024',
      time: '10 PM',
      location: 'Harmony Theater, Winnipeg, MB',
      totalRevenue: '$102,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 500,
      ticketsSold: 350,
      ticketsSoldChange: '+8.1%',
      pageViews: '24,300',
      pageViewsChange: '-0.75%',
      status: 'On Sale',
      imgUrl: '/events/bear-hug.jpg',
      thumbUrl: '/events/bear-hug-thumb.jpg',
    },
    {
      id: 1001,
      name: 'Six Fingers — DJ Set',
      url: '/events/1001',
      date: 'Jun 2, 2024',
      time: '8 PM',
      location: 'Moonbeam Arena, Uxbridge, ON',
      totalRevenue: '$24,115',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 150,
      ticketsSold: 72,
      ticketsSoldChange: '+8.1%',
      pageViews: '57,544',
      pageViewsChange: '-2.5%',
      status: 'On Sale',
      imgUrl: '/events/six-fingers.jpg',
      thumbUrl: '/events/six-fingers-thumb.jpg',
    },
    {
      id: 1002,
      name: 'We All Look The Same',
      url: '/events/1002',
      date: 'Aug 5, 2024',
      time: '4 PM',
      location: 'Electric Coliseum, New York, NY',
      totalRevenue: '$40,598',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 275,
      ticketsSold: 275,
      ticketsSoldChange: '+8.1%',
      pageViews: '122,122',
      pageViewsChange: '-8.0%',
      status: 'Closed',
      imgUrl: '/events/we-all-look-the-same.jpg',
      thumbUrl: '/events/we-all-look-the-same-thumb.jpg',
    },
    {
      id: 1003,
      name: 'Viking People',
      url: '/events/1003',
      date: 'Dec 31, 2024',
      time: '8 PM',
      location: 'Tapestry Hall, Cambridge, ON',
      totalRevenue: '$3,552',
      totalRevenueChange: '+3.2%',
      ticketsAvailable: 40,
      ticketsSold: 6,
      ticketsSoldChange: '+8.1%',
      pageViews: '9,000',
      pageViewsChange: '-0.15%',
      status: 'On Sale',
      imgUrl: '/events/viking-people.jpg',
      thumbUrl: '/events/viking-people-thumb.jpg',
    },
  ]
}

export const getReceipts = async () => {
  return [
    {
      id: 1001,
      date: "01-02-2008",
      invoiceNumber: 191,
      image: "20240220182913.5654533.001.tif"
    },
    {
      id: 1002,
      date: "01-02-2008",
      invoiceNumber: 191,
      image: "20240220182913.5654533.002.tif"
    },
    {
      id: 1003,
      date: "01-02-2008",
      invoiceNumber: 191,
      image: "20240220182913.5654533.003.tif"
    },
    {
      id: 1004,
      date: "01-02-2008",
      invoiceNumber: 191,
      image: "20240220182913.5654533.004.tif"
    }
  ];
};

export const getBol = async () => {
  return [
      {
        "seq": 1,
        "filename": "20240309192109.5654533.001",
        "filesize": 39514,
        "imageMasterId": 5654533,
        "imageTypeCodeId": "BOLPKT",
        "srcNo": 1001,
        "bolNo": 191,
        "bolDate": "01-02-08",
        "pageCount": 4,
        "imageClass": "I",
        "cacheStatus": 0,
        "extension": ".tif",
        "archiveStatus": "DISK",
        "masterFile": "s2016416.tif",
        "detailFile": "s2016416",
        "detailBatch": "BILLING batch_204R",
        "orientation": 270,
        "urcImgexpfId": "5654533*I",
        "urcCustId": "07402950"
      },
      {
        "seq": 2,
        "filename": "20240309192109.5654533.002",
        "filesize": 25948,
        "imageMasterId": 5654533,
        "imageTypeCodeId": "BOLPKT",
        "srcNo": 1001,
        "bolNo": 191,
        "bolDate": "01-02-08",
        "pageCount": 4,
        "imageClass": "I",
        "cacheStatus": 0,
        "extension": ".tif",
        "archiveStatus": "DISK",
        "masterFile": "s2016417.tif",
        "detailFile": "s2016417",
        "detailBatch": "BILLING batch_204R",
        "orientation": 180,
        "urcImgexpfId": "5654533*I",
        "urcCustId": "07402950"
      },
      {
        "seq": 3,
        "filename": "20240309192109.5654533.003",
        "filesize": 26132,
        "imageMasterId": 5654533,
        "imageTypeCodeId": "BOLPKT",
        "srcNo": 1001,
        "bolNo": 191,
        "bolDate": "01-02-08",
        "pageCount": 4,
        "imageClass": "I",
        "cacheStatus": 0,
        "extension": ".tif",
        "archiveStatus": "DISK",
        "masterFile": "s2016418.tif",
        "detailFile": "s2016418",
        "detailBatch": "BILLING batch_204R",
        "orientation": 180,
        "urcImgexpfId": "5654533*I",
        "urcCustId": "07402950"
      },
      {
        "seq": 4,
        "filename": "20240309192109.5654533.004",
        "filesize": 23516,
        "imageMasterId": 5654533,
        "imageTypeCodeId": "BOLPKT",
        "srcNo": 1001,
        "bolNo": 191,
        "bolDate": "01-02-08",
        "pageCount": 4,
        "imageClass": "I",
        "cacheStatus": 0,
        "extension": ".tif",
        "archiveStatus": "DISK",
        "masterFile": "s2016419.tif",
        "detailFile": "s2016419",
        "detailBatch": "BILLING batch_204R",
        "orientation": 180,
        "urcImgexpfId": "5654533*I",
        "urcCustId": "07402950"
      }
  ]
}

export function getSheets() {
  return [
    {
      name: 'Asphalt (Performance Graded)',
      url: '/files/content/ASPHALT_PERFORMANCE_GRADED_SDS_NA2015-MEX_090117_FINAL.PDF',
      thumbnail: 'path_to_thumbnail_1', // Replace with actual thumbnail path if available
    },
    {
      name: 'Asphalt (Roofing)',
      url: '/files/content/asphalt_roofing_sds_na2015-mex_090117_final-rev.pdf?d=20215617246',
      thumbnail: 'path_to_thumbnail_2', // Replace with actual thumbnail path if available
    },
    {
      name: 'B6-B20 Biodiesel Blend',
      url: '/files/content/b6-b20_bodiesel_blend_sds_na2015-mex_021519_final.pdf?d=202156165947',
      thumbnail: 'path_to_thumbnail_3', // Replace with actual thumbnail path if available
    },
    {
      name: 'Bioheat B6-B20',
      url: '/files/content/bioheat_b6-b20_sds_na2015-mex_021519_final.pdf?d=20215617110',
      thumbnail: 'path_to_thumbnail_4', // Replace with actual thumbnail path if available
    },
    {
      name: 'Butane',
      url: '/files/content/Butane_SDS_NA2015-MEX_090117_FINAL.PDF',
      thumbnail: 'path_to_thumbnail_5', // Replace with actual thumbnail path if available
    },
    {
      name: 'Carbon Black Feed Stock',
      url: '/files/content/carbon_black_feed_stock_sds_na2015-mex_092519_final.pdf?d=2021561739',
      thumbnail: 'path_to_thumbnail_6', // Replace with actual thumbnail path if available
    },
    {
      name: 'Ethanol Free Gasoline',
      url: '/files/content/ethanol_free_gasoline_sds_na2015-mex_021419_final.pdf?d=202151193658',
      thumbnail: 'path_to_thumbnail_7', // Replace with actual thumbnail path if available
    },
    {
      name: 'Fuel Oil #2',
      url: '/files/content/fuel_oil_2_dyed_sds_na2015-mex_021419_final.pdf?d=20215617033',
      thumbnail: 'path_to_thumbnail_8', // Replace with actual thumbnail path if available
    },
    {
      name: 'Gasoline, conventional unleaded with Ethanol',
      url: '/files/content/gasoline_conventional_unleaded_with_ethanol_sds_na2015-mex_021419_final.pdf?d=202151193622',
      thumbnail: 'path_to_thumbnail_9', // Replace with actual thumbnail path if available
    },
    {
      name: 'Isomerate',
      url: '/files/content/URC-402_Isomerate.pdf',
      thumbnail: 'path_to_thumbnail_10', // Replace with actual thumbnail path if available
    },
    {
      name: 'Kerosene',
      url: '/files/content/kerosene_sds_us_021519_final.pdf?d=202151193755',
      thumbnail: 'path_to_thumbnail_11', // Replace with actual thumbnail path if available
    },
    {
      name: 'Light Cycle Oil',
      url: '/files/content/Light_Cycle_Oil_SDS_NA2015-MEX_05172022_FINAL.pdf',
      thumbnail: 'path_to_thumbnail_12', // Replace with actual thumbnail path if available
    },
    {
      name: 'Propane',
      url: '/files/content/propane_sds_na2015-mex_021419_final.pdf?d=2021561721',
      thumbnail: 'path_to_thumbnail_13', // Replace with actual thumbnail path if available
    },
    {
      name: 'Sodium Hydroxide, 50% Aqueous, Spent',
      url: '/files/content/sodium_hydroxide_50_aqueous_spent_sds_us_030217_final.pdf?d=20215617540',
      thumbnail: 'path_to_thumbnail_14', // Replace with actual thumbnail path if available
    },
    {
      name: 'Sodium Hydroxide Solution, Spent',
      url: 'https://www.urc.com/files/content/sodium_hydroxide_solution_spent_sds_us_011924_final_un3266.pdf?d=2024131203345',
      thumbnail: 'path_to_thumbnail_15', // Replace with actual thumbnail path if available
    },
    {
      name: 'Sulfur',
      url: '/files/content/sulfur_sds_na2015-mex_082217_final.pdf?d=20215617352',
      thumbnail: 'path_to_thumbnail_16', // Replace with actual thumbnail path if available
    },
    {
      name: 'Sulfuric Acid - Spent',
      url: '/files/content/sulfuric_acid_spent_sds_us_052416_final.pdf?d=202151193823',
      thumbnail: 'path_to_thumbnail_17', // Replace with actual thumbnail path if available
    },
    {
      name: 'Ultra Low Sulfur Diesel',
      url: '/files/content/ultra_low_sulfur_diesel_all_sds_na2015-mex_021419_final.pdf?d=202151193724',
      thumbnail: 'path_to_thumbnail_18', // Replace with actual thumbnail path if available
    },
  ];
}

export function getCountries() {
  return [
    {
      name: 'Canada',
      code: 'CA',
      flagUrl: '/flags/ca.svg',
      regions: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Northwest Territories',
        'Nova Scotia',
        'Nunavut',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon',
      ],
    },
    {
      name: 'Mexico',
      code: 'MX',
      flagUrl: '/flags/mx.svg',
      regions: [
        'Aguascalientes',
        'Baja California',
        'Baja California Sur',
        'Campeche',
        'Chiapas',
        'Chihuahua',
        'Ciudad de Mexico',
        'Coahuila',
        'Colima',
        'Durango',
        'Guanajuato',
        'Guerrero',
        'Hidalgo',
        'Jalisco',
        'Mexico State',
        'Michoacán',
        'Morelos',
        'Nayarit',
        'Nuevo León',
        'Oaxaca',
        'Puebla',
        'Querétaro',
        'Quintana Roo',
        'San Luis Potosí',
        'Sinaloa',
        'Sonora',
        'Tabasco',
        'Tamaulipas',
        'Tlaxcala',
        'Veracruz',
        'Yucatán',
        'Zacatecas',
      ],
    },
    {
      name: 'United States',
      code: 'US',
      flagUrl: '/flags/us.svg',
      regions: [
        'Alabama',
        'Alaska',
        'American Samoa',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'Delaware',
        'Washington DC',
        'Micronesia',
        'Florida',
        'Georgia',
        'Guam',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Marshall Islands',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Northern Mariana Islands',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Palau',
        'Pennsylvania',
        'Puerto Rico',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'U.S. Virgin Islands',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'Armed Forces Americas',
        'Armed Forces Europe',
        'Armed Forces Pacific',
      ],
    },
  ]
}
