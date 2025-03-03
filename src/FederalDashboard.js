import React, { useState } from 'react';
import './FederalDashboard.css';

const OFFICE_DATA = {
  Federal_Government: {
    aggregated: {
      age_20_24_count: 52292, age_25_29_count: 138992, age_30_34_count: 209553, age_35_39_count: 283869,
      age_40_44_count: 329653, age_45_49_count: 298027, age_50_54_count: 304943, age_55_59_count: 293190,
      age_60_64_count: 213837, age_65_plus_count: 125147, age_under_20_count: 0, annuity_total: 305701678025,
      dc_employee_count: 160973, employee_count: 2252162, not_telework_eligible_count: 954486,
      salary_100k_109k_count: 177382, salary_110k_119k_count: 170288, salary_120k_129k_count: 157100,
      salary_130k_139k_count: 116673, salary_140k_149k_count: 100726, salary_150k_159k_count: 94376,
      salary_160k_169k_count: 60665, salary_170k_179k_count: 43380, salary_180k_189k_count: 49773,
      salary_190k_199k_count: 62434, salary_200k_219k_count: 19438, salary_20k_29k_count: 2499,
      salary_220k_239k_count: 13326, salary_240k_259k_count: 10492, salary_260k_279k_count: 7428,
      salary_280k_299k_count: 4982, salary_300k_349k_count: 8239, salary_30k_39k_count: 44948,
      salary_350k_399k_count: 5375, salary_400k_449k_count: 1058, salary_40k_49k_count: 134098,
      salary_450k_499k_count: 2, salary_500k_plus_count: 1, salary_50k_59k_count: 192950,
      salary_60k_69k_count: 207022, salary_70k_79k_count: 201725, salary_80k_89k_count: 175475,
      salary_90k_99k_count: 176159, salary_less_20k_count: 79, salary_total: 211316158567,
      salary_unspecified_count: 14071, telework_eligible_count: 1296996, telework_unspecified_count: 26,
      tenure_10_14_count: 337610, tenure_15_19_count: 315675, tenure_1_2_count: 284948,
      tenure_20_24_count: 194804, tenure_25_29_count: 87719, tenure_30_34_count: 72555,
      tenure_35_plus_count: 77089, tenure_3_4_count: 232802, tenure_5_9_count: 431005,
      tenure_less_than_1_count: 217955
    },
    children_count: 16439,
    detailed: {},
    office_id: "Federal_Government",
    office_name: "Federal Government"
  },
  OMB: {
    aggregated: {
      age_20_24_count: 16, age_25_29_count: 56, age_30_34_count: 157, age_35_39_count: 173,
      age_40_44_count: 161, age_45_49_count: 93, age_50_54_count: 60, age_55_59_count: 56,
      age_60_64_count: 25, age_65_plus_count: 16, age_under_20_count: 0, annuity_total: 159983514.8,
      dc_employee_count: 668, employee_count: 813, not_telework_eligible_count: 0,
      salary_100k_109k_count: 16, salary_110k_119k_count: 27, salary_120k_129k_count: 31,
      salary_130k_139k_count: 29, salary_140k_149k_count: 46, salary_150k_159k_count: 52,
      salary_160k_169k_count: 77, salary_170k_179k_count: 42, salary_180k_189k_count: 101,
      salary_190k_199k_count: 255, salary_200k_219k_count: 33, salary_20k_29k_count: 0,
      salary_220k_239k_count: 23, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 2,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 15,
      salary_60k_69k_count: 10, salary_70k_79k_count: 3, salary_80k_89k_count: 19,
      salary_90k_99k_count: 28, salary_less_20k_count: 0, salary_total: 133399733,
      salary_unspecified_count: 4, telework_eligible_count: 785, telework_unspecified_count: 26,
      tenure_10_14_count: 103, tenure_15_19_count: 85, tenure_1_2_count: 129,
      tenure_20_24_count: 53, tenure_25_29_count: 36, tenure_30_34_count: 15,
      tenure_35_plus_count: 27, tenure_3_4_count: 92, tenure_5_9_count: 152,
      tenure_less_than_1_count: 121
    },
    children_count: 67,
    detailed: {},
    office_id: "ef152d97-c595-4e7d-9839-cc2d7db5cebe",
    office_name: "Office Of Management And Budget"
  },
  DEA: {
    aggregated: {
      age_20_24_count: 55, age_25_29_count: 491, age_30_34_count: 939, age_35_39_count: 1259,
      age_40_44_count: 1375, age_45_49_count: 1341, age_50_54_count: 1566, age_55_59_count: 1110,
      age_60_64_count: 490, age_65_plus_count: 236, age_under_20_count: 0, annuity_total: 570328206,
      dc_employee_count: 2000, employee_count: 8862, not_telework_eligible_count: 8853,
      salary_100k_109k_count: 752, salary_110k_119k_count: 789, salary_120k_129k_count: 1045,
      salary_130k_139k_count: 933, salary_140k_149k_count: 959, salary_150k_159k_count: 739,
      salary_160k_169k_count: 431, salary_170k_179k_count: 233, salary_180k_189k_count: 223,
      salary_190k_199k_count: 249, salary_200k_219k_count: 32, salary_20k_29k_count: 0,
      salary_220k_239k_count: 16, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 31,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 222,
      salary_60k_69k_count: 498, salary_70k_79k_count: 573, salary_80k_89k_count: 573,
      salary_90k_99k_count: 561, salary_less_20k_count: 0, salary_total: 289184276,
      salary_unspecified_count: 3, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 1321, tenure_15_19_count: 1451, tenure_1_2_count: 745,
      tenure_20_24_count: 1164, tenure_25_29_count: 851, tenure_30_34_count: 438,
      tenure_35_plus_count: 362, tenure_3_4_count: 781, tenure_5_9_count: 1383,
      tenure_less_than_1_count: 366
    },
    children_count: 13,
    detailed: {
      age_20_24_count: 55, age_25_29_count: 491, age_30_34_count: 939, age_35_39_count: 1259,
      age_40_44_count: 1375, age_45_49_count: 1341, age_50_54_count: 1566, age_55_59_count: 1110,
      age_60_64_count: 490, age_65_plus_count: 236, age_under_20_count: 0, annuity_total: 570328206,
      dc_employee_count: 2000, employee_count: 8862, not_telework_eligible_count: 8853,
      salary_100k_109k_count: 752, salary_110k_119k_count: 789, salary_120k_129k_count: 1045,
      salary_130k_139k_count: 933, salary_140k_149k_count: 959, salary_150k_159k_count: 739,
      salary_160k_169k_count: 431, salary_170k_179k_count: 233, salary_180k_189k_count: 223,
      salary_190k_199k_count: 249, salary_200k_219k_count: 32, salary_20k_29k_count: 0,
      salary_220k_239k_count: 16, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 31,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 222,
      salary_60k_69k_count: 498, salary_70k_79k_count: 573, salary_80k_89k_count: 573,
      salary_90k_99k_count: 561, salary_less_20k_count: 0, salary_total: 289184276,
      salary_unspecified_count: 3, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 1321, tenure_15_19_count: 1451, tenure_1_2_count: 745,
      tenure_20_24_count: 1164, tenure_25_29_count: 851, tenure_30_34_count: 438,
      tenure_35_plus_count: 362, tenure_3_4_count: 781, tenure_5_9_count: 1383,
      tenure_less_than_1_count: 366
    },
    office_id: "176eb690-aa86-43c7-b848-9a7e719c9a90",
    office_name: "Drug Enforcement Administration (DEA)"
  },
  HHS: {
    aggregated: {
      age_20_24_count: 867, age_25_29_count: 3385, age_30_34_count: 7268, age_35_39_count: 11454,
      age_40_44_count: 13032, age_45_49_count: 12674, age_50_54_count: 12798, age_55_59_count: 12260,
      age_60_64_count: 9340, age_65_plus_count: 7949, age_under_20_count: 0, annuity_total: 17311751816.5,
      dc_employee_count: 4489, employee_count: 91058, not_telework_eligible_count: 24510,
      salary_100k_109k_count: 5867, salary_110k_119k_count: 6664, salary_120k_129k_count: 9121,
      salary_130k_139k_count: 6446, salary_140k_149k_count: 7707, salary_150k_159k_count: 8635,
      salary_160k_169k_count: 4781, salary_170k_179k_count: 2910, salary_180k_189k_count: 3785,
      salary_190k_199k_count: 5329, salary_200k_219k_count: 1296, salary_20k_29k_count: 43,
      salary_220k_239k_count: 1114, salary_240k_259k_count: 913, salary_260k_279k_count: 512,
      salary_280k_299k_count: 293, salary_300k_349k_count: 351, salary_30k_39k_count: 809,
      salary_350k_399k_count: 156, salary_400k_449k_count: 21, salary_40k_49k_count: 2635,
      salary_450k_499k_count: 2, salary_500k_plus_count: 1, salary_50k_59k_count: 4569,
      salary_60k_69k_count: 3602, salary_70k_79k_count: 3473, salary_80k_89k_count: 4341,
      salary_90k_99k_count: 5466, salary_less_20k_count: 2, salary_total: 11716571915,
      salary_unspecified_count: 214, telework_eligible_count: 66534, telework_unspecified_count: 0,
      tenure_10_14_count: 14264, tenure_15_19_count: 12423, tenure_1_2_count: 11041,
      tenure_20_24_count: 8535, tenure_25_29_count: 4217, tenure_30_34_count: 3951,
      tenure_35_plus_count: 3321, tenure_3_4_count: 10833, tenure_5_9_count: 15666,
      tenure_less_than_1_count: 6807
    },
    children_count: 923,
    detailed: {},
    office_id: "hhs",
    office_name: "Department of Health and Human Services"
  },
  EPA: {
    aggregated: {
      age_20_24_count: 366, age_25_29_count: 1342, age_30_34_count: 1799, age_35_39_count: 1821,
      age_40_44_count: 1980, age_45_49_count: 1881, age_50_54_count: 1984, age_55_59_count: 2282,
      age_60_64_count: 1802, age_65_plus_count: 1193, age_under_20_count: 0, annuity_total: 4030340590.3,
      dc_employee_count: 4163, employee_count: 16450, not_telework_eligible_count: 55,
      salary_100k_109k_count: 1056, salary_110k_119k_count: 1642, salary_120k_129k_count: 1726,
      salary_130k_139k_count: 1319, salary_140k_149k_count: 1816, salary_150k_159k_count: 1590,
      salary_160k_169k_count: 887, salary_170k_179k_count: 700, salary_180k_189k_count: 739,
      salary_190k_199k_count: 1319, salary_200k_219k_count: 114, salary_20k_29k_count: 0,
      salary_220k_239k_count: 159, salary_240k_259k_count: 13, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 70,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 84,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 215,
      salary_60k_69k_count: 518, salary_70k_79k_count: 519, salary_80k_89k_count: 731,
      salary_90k_99k_count: 1112, salary_less_20k_count: 0, salary_total: 2153461411,
      salary_unspecified_count: 121, telework_eligible_count: 16395, telework_unspecified_count: 0,
      tenure_10_14_count: 1627, tenure_15_19_count: 1772, tenure_1_2_count: 2064,
      tenure_20_24_count: 1494, tenure_25_29_count: 1417, tenure_30_34_count: 1464,
      tenure_35_plus_count: 1369, tenure_3_4_count: 1639, tenure_5_9_count: 2025,
      tenure_less_than_1_count: 1579
    },
    children_count: 560,
    detailed: {
      age_20_24_count: 366, age_25_29_count: 1342, age_30_34_count: 1799, age_35_39_count: 1821,
      age_40_44_count: 1980, age_45_49_count: 1881, age_50_54_count: 1984, age_55_59_count: 2282,
      age_60_64_count: 1802, age_65_plus_count: 1193, age_under_20_count: 0, annuity_total: 4030340590.3,
      dc_employee_count: 4163, employee_count: 16450, not_telework_eligible_count: 55,
      salary_100k_109k_count: 1056, salary_110k_119k_count: 1642, salary_120k_129k_count: 1726,
      salary_130k_139k_count: 1319, salary_140k_149k_count: 1816, salary_150k_159k_count: 1590,
      salary_160k_169k_count: 887, salary_170k_179k_count: 700, salary_180k_189k_count: 739,
      salary_190k_199k_count: 1319, salary_200k_219k_count: 114, salary_20k_29k_count: 0,
      salary_220k_239k_count: 159, salary_240k_259k_count: 13, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 70,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 84,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 215,
      salary_60k_69k_count: 518, salary_70k_79k_count: 519, salary_80k_89k_count: 731,
      salary_90k_99k_count: 1112, salary_less_20k_count: 0, salary_total: 2153461411,
      salary_unspecified_count: 121, telework_eligible_count: 16395, telework_unspecified_count: 0,
      tenure_10_14_count: 1627, tenure_15_19_count: 1772, tenure_1_2_count: 2064,
      tenure_20_24_count: 1494, tenure_25_29_count: 1417, tenure_30_34_count: 1464,
      tenure_35_plus_count: 1369, tenure_3_4_count: 1639, tenure_5_9_count: 2025,
      tenure_less_than_1_count: 1579
    },
    office_id: "0a4f8cce-4e75-4b46-9b8c-d4e6b0301ab9",
    office_name: "Environmental Protection Agency"
  },
  NTSB: {
    aggregated: {
      age_20_24_count: 1, age_25_29_count: 9, age_30_34_count: 18, age_35_39_count: 49,
      age_40_44_count: 60, age_45_49_count: 60, age_50_54_count: 74, age_55_59_count: 76,
      age_60_64_count: 46, age_65_plus_count: 36, age_under_20_count: 0, annuity_total: 115673303.1,
      dc_employee_count: 305, employee_count: 429, not_telework_eligible_count: 0,
      salary_100k_109k_count: 7, salary_110k_119k_count: 19, salary_120k_129k_count: 28,
      salary_130k_139k_count: 25, salary_140k_149k_count: 35, salary_150k_159k_count: 55,
      salary_160k_169k_count: 45, salary_170k_179k_count: 44, salary_180k_189k_count: 51,
      salary_190k_199k_count: 67, salary_200k_219k_count: 16, salary_20k_29k_count: 0,
      salary_220k_239k_count: 6, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 0,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 1,
      salary_60k_69k_count: 2, salary_70k_79k_count: 3, salary_80k_89k_count: 13,
      salary_90k_99k_count: 12, salary_less_20k_count: 0, salary_total: 59948529,
      salary_unspecified_count: 0, telework_eligible_count: 425, telework_unspecified_count: 0,
      tenure_10_14_count: 57, tenure_15_19_count: 83, tenure_1_2_count: 27,
      tenure_20_24_count: 52, tenure_25_29_count: 57, tenure_30_34_count: 28,
      tenure_35_plus_count: 20, tenure_3_4_count: 17, tenure_5_9_count: 52,
      tenure_less_than_1_count: 36
    },
    children_count: 67,
    detailed: {},
    office_id: "18a62eea-e330-4f32-ab50-c4096ba96805",
    office_name: "National Transportation Safety Board"
  },
  DOT: {
    aggregated: {
      age_20_24_count: 912, age_25_29_count: 3290, age_30_34_count: 5958, age_35_39_count: 7962,
      age_40_44_count: 9086, age_45_49_count: 6608, age_50_54_count: 6388, age_55_59_count: 6869,
      age_60_64_count: 5476, age_65_plus_count: 3248, age_under_20_count: 0, annuity_total: 13393055175.9,
      dc_employee_count: 7549, employee_count: 55806, not_telework_eligible_count: 17428,
      salary_100k_109k_count: 4303, salary_110k_119k_count: 4680, salary_120k_129k_count: 4648,
      salary_130k_139k_count: 4080, salary_140k_149k_count: 3882, salary_150k_159k_count: 3990,
      salary_160k_169k_count: 3734, salary_170k_179k_count: 3360, salary_180k_189k_count: 3416,
      salary_190k_199k_count: 3372, salary_200k_219k_count: 2759, salary_20k_29k_count: 0,
      salary_220k_239k_count: 2328, salary_240k_259k_count: 0, salary_260k_279k_count: 1,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 481,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 184,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 930,
      salary_60k_69k_count: 1224, salary_70k_79k_count: 1919, salary_80k_89k_count: 2727,
      salary_90k_99k_count: 3785, salary_less_20k_count: 0, salary_total: 7664998288,
      salary_unspecified_count: 3, telework_eligible_count: 38372, telework_unspecified_count: 0,
      tenure_10_14_count: 8684, tenure_15_19_count: 9527, tenure_1_2_count: 4360,
      tenure_20_24_count: 6680, tenure_25_29_count: 3387, tenure_30_34_count: 2959,
      tenure_35_plus_count: 2714, tenure_3_4_count: 4039, tenure_5_9_count: 9647,
      tenure_less_than_1_count: 3809
    },
    children_count: 518,
    detailed: {},
    office_id: "58be2eff-4ba1-45ae-bdf0-97362bd97486",
    office_name: "Department Of Transportation"
  },
  SEC: {
    aggregated: {
      age_20_24_count: 11, age_25_29_count: 91, age_30_34_count: 245, age_35_39_count: 576,
      age_40_44_count: 812, age_45_49_count: 965, age_50_54_count: 908, age_55_59_count: 690,
      age_60_64_count: 448, age_65_plus_count: 247, age_under_20_count: 0, annuity_total: 1795144187.1,
      dc_employee_count: 2538, employee_count: 4993, not_telework_eligible_count: 0,
      salary_100k_109k_count: 30, salary_110k_119k_count: 60, salary_120k_129k_count: 89,
      salary_130k_139k_count: 86, salary_140k_149k_count: 148, salary_150k_159k_count: 194,
      salary_160k_169k_count: 200, salary_170k_179k_count: 245, salary_180k_189k_count: 229,
      salary_190k_199k_count: 262, salary_200k_219k_count: 533, salary_20k_29k_count: 0,
      salary_220k_239k_count: 1174, salary_240k_259k_count: 674, salary_260k_279k_count: 808,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 3,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 18,
      salary_60k_69k_count: 8, salary_70k_79k_count: 15, salary_80k_89k_count: 23,
      salary_90k_99k_count: 43, salary_less_20k_count: 0, salary_total: 1034214020,
      salary_unspecified_count: 151, telework_eligible_count: 4985, telework_unspecified_count: 0,
      tenure_10_14_count: 907, tenure_15_19_count: 839, tenure_1_2_count: 300,
      tenure_20_24_count: 737, tenure_25_29_count: 399, tenure_30_34_count: 283,
      tenure_35_plus_count: 186, tenure_3_4_count: 315, tenure_5_9_count: 707,
      tenure_less_than_1_count: 320
    },
    children_count: 173,
    detailed: {
      age_20_24_count: 11, age_25_29_count: 91, age_30_34_count: 245, age_35_39_count: 576,
      age_40_44_count: 812, age_45_49_count: 965, age_50_54_count: 908, age_55_59_count: 690,
      age_60_64_count: 448, age_65_plus_count: 247, age_under_20_count: 0, annuity_total: 1795144187.1,
      dc_employee_count: 2538, employee_count: 4993, not_telework_eligible_count: 0,
      salary_100k_109k_count: 30, salary_110k_119k_count: 60, salary_120k_129k_count: 89,
      salary_130k_139k_count: 86, salary_140k_149k_count: 148, salary_150k_159k_count: 194,
      salary_160k_169k_count: 200, salary_170k_179k_count: 245, salary_180k_189k_count: 229,
      salary_190k_199k_count: 262, salary_200k_219k_count: 533, salary_20k_29k_count: 0,
      salary_220k_239k_count: 1174, salary_240k_259k_count: 674, salary_260k_279k_count: 808,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 3,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 18,
      salary_60k_69k_count: 8, salary_70k_79k_count: 15, salary_80k_89k_count: 23,
      salary_90k_99k_count: 43, salary_less_20k_count: 0, salary_total: 1034214020,
      salary_unspecified_count: 151, telework_eligible_count: 4985, telework_unspecified_count: 0,
      tenure_10_14_count: 907, tenure_15_19_count: 839, tenure_1_2_count: 300,
      tenure_20_24_count: 737, tenure_25_29_count: 399, tenure_30_34_count: 283,
      tenure_35_plus_count: 186, tenure_3_4_count: 315, tenure_5_9_count: 707,
      tenure_less_than_1_count: 320
    },
    office_id: "c10a38c7-f16c-45c7-9089-5ef972b47dd9",
    office_name: "Securities And Exchange Commission"
  },
  VA: {
    aggregated: {
      age_20_24_count: 6245, age_25_29_count: 22025, age_30_34_count: 42624, age_35_39_count: 62703,
      age_40_44_count: 72288, age_45_49_count: 66503, age_50_54_count: 71481, age_55_59_count: 65678,
      age_60_64_count: 48476, age_65_plus_count: 28188, age_under_20_count: 0, annuity_total: 57290331347.4,
      dc_employee_count: 7464, employee_count: 486522, not_telework_eligible_count: 279332,
      salary_100k_109k_count: 35523, salary_110k_119k_count: 32429, salary_120k_129k_count: 24850,
      salary_130k_139k_count: 19149, salary_140k_149k_count: 14874, salary_150k_159k_count: 12421,
      salary_160k_169k_count: 9659, salary_170k_179k_count: 7027, salary_180k_189k_count: 5059,
      salary_190k_199k_count: 3759, salary_200k_219k_count: 3900, salary_20k_29k_count: 34,
      salary_220k_239k_count: 4820, salary_240k_259k_count: 6585, salary_260k_279k_count: 4948,
      salary_280k_299k_count: 4078, salary_300k_349k_count: 7439, salary_30k_39k_count: 12699,
      salary_350k_399k_count: 4946, salary_400k_449k_count: 968, salary_40k_49k_count: 43708,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 64330,
      salary_60k_69k_count: 49255, salary_70k_79k_count: 40777, salary_80k_89k_count: 35121,
      salary_90k_99k_count: 34568, salary_less_20k_count: 1, salary_total: 50397965855,
      salary_unspecified_count: 3595, telework_eligible_count: 207155, telework_unspecified_count: 0,
      tenure_10_14_count: 69242, tenure_15_19_count: 54491, tenure_1_2_count: 78956,
      tenure_20_24_count: 24756, tenure_25_29_count: 12074, tenure_30_34_count: 9716,
      tenure_35_plus_count: 7523, tenure_3_4_count: 57261, tenure_5_9_count: 110588,
      tenure_less_than_1_count: 61915
    },
    children_count: 797,
    detailed: {},
    office_id: "cd2cae83-8a50-4a31-9dc2-a08345546243",
    office_name: "Department Of Veterans Affairs"
  },
  SBA: {
    aggregated: {
      age_20_24_count: 28, age_25_29_count: 332, age_30_34_count: 548, age_35_39_count: 739,
      age_40_44_count: 1007, age_45_49_count: 933, age_50_54_count: 1116, age_55_59_count: 1178,
      age_60_64_count: 1039, age_65_plus_count: 1005, age_under_20_count: 0, annuity_total: 783748935.5,
      dc_employee_count: 872, employee_count: 7925, not_telework_eligible_count: 876,
      salary_100k_109k_count: 346, salary_110k_119k_count: 413, salary_120k_129k_count: 416,
      salary_130k_139k_count: 255, salary_140k_149k_count: 259, salary_150k_159k_count: 219,
      salary_160k_169k_count: 140, salary_170k_179k_count: 101, salary_180k_189k_count: 124,
      salary_190k_199k_count: 180, salary_200k_219k_count: 18, salary_20k_29k_count: 0,
      salary_220k_239k_count: 25, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 15,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 132,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 805,
      salary_60k_69k_count: 1510, salary_70k_79k_count: 1473, salary_80k_89k_count: 970,
      salary_90k_99k_count: 476, salary_less_20k_count: 0, salary_total: 726095834,
      salary_unspecified_count: 48, telework_eligible_count: 7049, telework_unspecified_count: 0,
      tenure_10_14_count: 671, tenure_15_19_count: 601, tenure_1_2_count: 2470,
      tenure_20_24_count: 204, tenure_25_29_count: 233, tenure_30_34_count: 205,
      tenure_35_plus_count: 210, tenure_3_4_count: 1484, tenure_5_9_count: 896,
      tenure_less_than_1_count: 951
    },
    children_count: 63,
    detailed: {
      age_20_24_count: 28, age_25_29_count: 332, age_30_34_count: 548, age_35_39_count: 739,
      age_40_44_count: 1007, age_45_49_count: 933, age_50_54_count: 1116, age_55_59_count: 1178,
      age_60_64_count: 1039, age_65_plus_count: 1005, age_under_20_count: 0, annuity_total: 783748935.5,
      dc_employee_count: 872, employee_count: 7925, not_telework_eligible_count: 876,
      salary_100k_109k_count: 346, salary_110k_119k_count: 413, salary_120k_129k_count: 416,
      salary_130k_139k_count: 255, salary_140k_149k_count: 259, salary_150k_159k_count: 219,
      salary_160k_169k_count: 140, salary_170k_179k_count: 101, salary_180k_189k_count: 124,
      salary_190k_199k_count: 180, salary_200k_219k_count: 18, salary_20k_29k_count: 0,
      salary_220k_239k_count: 25, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 15,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 132,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 805,
      salary_60k_69k_count: 1510, salary_70k_79k_count: 1473, salary_80k_89k_count: 970,
      salary_90k_99k_count: 476, salary_less_20k_count: 0, salary_total: 726095834,
      salary_unspecified_count: 48, telework_eligible_count: 7049, telework_unspecified_count: 0,
      tenure_10_14_count: 671, tenure_15_19_count: 601, tenure_1_2_count: 2470,
      tenure_20_24_count: 204, tenure_25_29_count: 233, tenure_30_34_count: 205,
      tenure_35_plus_count: 210, tenure_3_4_count: 1484, tenure_5_9_count: 896,
      tenure_less_than_1_count: 951
    },
    office_id: "04873ab3-8d2f-449a-9610-1ae063d6e7d4",
    office_name: "Small Business Administration"
  },
  FBI: {
    aggregated: {
      age_20_24_count: 1338, age_25_29_count: 3960, age_30_34_count: 4933, age_35_39_count: 5688,
      age_40_44_count: 5402, age_45_49_count: 5392, age_50_54_count: 5391, age_55_59_count: 3337,
      age_60_64_count: 1372, age_65_plus_count: 575, age_under_20_count: 0, annuity_total: 2187449419.2,
      dc_employee_count: 9371, employee_count: 37394, not_telework_eligible_count: 37393,
      salary_100k_109k_count: 3223, salary_110k_119k_count: 3234, salary_120k_129k_count: 4201,
      salary_130k_139k_count: 3397, salary_140k_149k_count: 3225, salary_150k_159k_count: 2701,
      salary_160k_169k_count: 1439, salary_170k_179k_count: 829, salary_180k_189k_count: 740,
      salary_190k_199k_count: 689, salary_200k_219k_count: 105, salary_20k_29k_count: 0,
      salary_220k_239k_count: 33, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 250,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 504,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 1328,
      salary_60k_69k_count: 2015, salary_70k_79k_count: 3096, salary_80k_89k_count: 3485,
      salary_90k_99k_count: 2879, salary_less_20k_count: 0, salary_total: 1266051407,
      salary_unspecified_count: 21, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 5374, tenure_15_19_count: 5520, tenure_1_2_count: 4760,
      tenure_20_24_count: 3558, tenure_25_29_count: 3135, tenure_30_34_count: 1369,
      tenure_35_plus_count: 1191, tenure_3_4_count: 3133, tenure_5_9_count: 7433,
      tenure_less_than_1_count: 1921
    },
    children_count: 40,
    detailed: {
      age_20_24_count: 1338, age_25_29_count: 3960, age_30_34_count: 4933, age_35_39_count: 5688,
      age_40_44_count: 5402, age_45_49_count: 5392, age_50_54_count: 5391, age_55_59_count: 3337,
      age_60_64_count: 1372, age_65_plus_count: 575, age_under_20_count: 0, annuity_total: 2187449419.2,
      dc_employee_count: 9371, employee_count: 37394, not_telework_eligible_count: 37393,
      salary_100k_109k_count: 3223, salary_110k_119k_count: 3234, salary_120k_129k_count: 4201,
      salary_130k_139k_count: 3397, salary_140k_149k_count: 3225, salary_150k_159k_count: 2701,
      salary_160k_169k_count: 1439, salary_170k_179k_count: 829, salary_180k_189k_count: 740,
      salary_190k_199k_count: 689, salary_200k_219k_count: 105, salary_20k_29k_count: 0,
      salary_220k_239k_count: 33, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 250,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 504,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 1328,
      salary_60k_69k_count: 2015, salary_70k_79k_count: 3096, salary_80k_89k_count: 3485,
      salary_90k_99k_count: 2879, salary_less_20k_count: 0, salary_total: 1266051407,
      salary_unspecified_count: 21, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 5374, tenure_15_19_count: 5520, tenure_1_2_count: 4760,
      tenure_20_24_count: 3558, tenure_25_29_count: 3135, tenure_30_34_count: 1369,
      tenure_35_plus_count: 1191, tenure_3_4_count: 3133, tenure_5_9_count: 7433,
      tenure_less_than_1_count: 1921
    },
    office_id: "345eeff1-f8d3-434b-a62e-b36494c19421",
    office_name: "Federal Bureau of Investigation (FBI)"
  },
  FCC: {
    aggregated: {
      age_20_24_count: 2, age_25_29_count: 54, age_30_34_count: 94, age_35_39_count: 165,
      age_40_44_count: 191, age_45_49_count: 183, age_50_54_count: 222, age_55_59_count: 259,
      age_60_64_count: 206, age_65_plus_count: 158, age_under_20_count: 0, annuity_total: 506788892.9,
      dc_employee_count: 1355, employee_count: 1534, not_telework_eligible_count: 1534,
      salary_100k_109k_count: 33, salary_110k_119k_count: 62, salary_120k_129k_count: 96,
      salary_130k_139k_count: 62, salary_140k_149k_count: 87, salary_150k_159k_count: 99,
      salary_160k_169k_count: 103, salary_170k_179k_count: 57, salary_180k_189k_count: 163,
      salary_190k_199k_count: 628, salary_200k_219k_count: 42, salary_20k_29k_count: 0,
      salary_220k_239k_count: 0, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 4,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 8,
      salary_60k_69k_count: 9, salary_70k_79k_count: 12, salary_80k_89k_count: 39,
      salary_90k_99k_count: 30, salary_less_20k_count: 0, salary_total: 253725089,
      salary_unspecified_count: 0, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 171, tenure_15_19_count: 231, tenure_1_2_count: 86,
      tenure_20_24_count: 208, tenure_25_29_count: 137, tenure_30_34_count: 163,
      tenure_35_plus_count: 158, tenure_3_4_count: 114, tenure_5_9_count: 185,
      tenure_less_than_1_count: 81
    },
    children_count: 141,
    detailed: {
      age_20_24_count: 2, age_25_29_count: 54, age_30_34_count: 94, age_35_39_count: 165,
      age_40_44_count: 191, age_45_49_count: 183, age_50_54_count: 222, age_55_59_count: 259,
      age_60_64_count: 206, age_65_plus_count: 158, age_under_20_count: 0, annuity_total: 506788892.9,
      dc_employee_count: 1355, employee_count: 1534, not_telework_eligible_count: 1534,
      salary_100k_109k_count: 33, salary_110k_119k_count: 62, salary_120k_129k_count: 96,
      salary_130k_139k_count: 62, salary_140k_149k_count: 87, salary_150k_159k_count: 99,
      salary_160k_169k_count: 103, salary_170k_179k_count: 57, salary_180k_189k_count: 163,
      salary_190k_199k_count: 628, salary_200k_219k_count: 42, salary_20k_29k_count: 0,
      salary_220k_239k_count: 0, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 4,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 8,
      salary_60k_69k_count: 9, salary_70k_79k_count: 12, salary_80k_89k_count: 39,
      salary_90k_99k_count: 30, salary_less_20k_count: 0, salary_total: 253725089,
      salary_unspecified_count: 0, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 171, tenure_15_19_count: 231, tenure_1_2_count: 86,
      tenure_20_24_count: 208, tenure_25_29_count: 137, tenure_30_34_count: 163,
      tenure_35_plus_count: 158, tenure_3_4_count: 114, tenure_5_9_count: 185,
      tenure_less_than_1_count: 81
    },
    office_id: "71a372a8-a1a5-46e2-99b8-02e3966f5ec2",
    office_name: "Federal Communications Commission"
  },
  DoD: {
    aggregated: {
      age_20_24_count: 2515, age_25_29_count: 6421, age_30_34_count: 11440, age_35_39_count: 18229,
      age_40_44_count: 22696, age_45_49_count: 21016, age_50_54_count: 22984, age_55_59_count: 24196,
      age_60_64_count: 18143, age_65_plus_count: 9699, age_under_20_count: 0, annuity_total: 20931121020.9,
      dc_employee_count: 2459, employee_count: 157527, not_telework_eligible_count: 69988,
      salary_100k_109k_count: 11888, salary_110k_119k_count: 11914, salary_120k_129k_count: 10421,
      salary_130k_139k_count: 6878, salary_140k_149k_count: 6098, salary_150k_159k_count: 4936,
      salary_160k_169k_count: 3272, salary_170k_179k_count: 2271, salary_180k_189k_count: 2628,
      salary_190k_199k_count: 4011, salary_200k_219k_count: 661, salary_20k_29k_count: 2279,
      salary_220k_239k_count: 524, salary_240k_259k_count: 457, salary_260k_279k_count: 252,
      salary_280k_299k_count: 230, salary_300k_349k_count: 228, salary_30k_39k_count: 5597,
      salary_350k_399k_count: 257, salary_400k_449k_count: 68, salary_40k_49k_count: 14275,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 18494,
      salary_60k_69k_count: 12630, salary_70k_79k_count: 10659, salary_80k_89k_count: 11220,
      salary_90k_99k_count: 13420, salary_less_20k_count: 4, salary_total: 14886409233,
      salary_unspecified_count: 1955, telework_eligible_count: 87506, telework_unspecified_count: 0,
      tenure_10_14_count: 26919, tenure_15_19_count: 23533, tenure_1_2_count: 19083,
      tenure_20_24_count: 10784, tenure_25_29_count: 4632, tenure_30_34_count: 4367,
      tenure_35_plus_count: 5664, tenure_3_4_count: 14043, tenure_5_9_count: 31748,
      tenure_less_than_1_count: 16754
    },
    children_count: 271,
    detailed: {},
    office_id: "2d9ef89e-6e02-4b68-b5af-ef4bd58aad86",
    office_name: "Department Of Defense"
  },
  DoE: {
    aggregated: {
      age_20_24_count: 23, age_25_29_count: 137, age_30_34_count: 306, age_35_39_count: 569,
      age_40_44_count: 644, age_45_49_count: 561, age_50_54_count: 713, age_55_59_count: 582,
      age_60_64_count: 448, age_65_plus_count: 262, age_under_20_count: 0, annuity_total: 1039137178.5,
      dc_employee_count: 1622, employee_count: 4245, not_telework_eligible_count: 0,
      salary_100k_109k_count: 223, salary_110k_119k_count: 326, salary_120k_129k_count: 488,
      salary_130k_139k_count: 358, salary_140k_149k_count: 405, salary_150k_159k_count: 409,
      salary_160k_169k_count: 281, salary_170k_179k_count: 248, salary_180k_189k_count: 339,
      salary_190k_199k_count: 461, salary_200k_219k_count: 67, salary_20k_29k_count: 28,
      salary_220k_239k_count: 78, salary_240k_259k_count: 1, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 4,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 14,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 14,
      salary_60k_69k_count: 54, salary_70k_79k_count: 66, salary_80k_89k_count: 150,
      salary_90k_99k_count: 174, salary_less_20k_count: 0, salary_total: 596018945,
      salary_unspecified_count: 57, telework_eligible_count: 4236, telework_unspecified_count: 0,
      tenure_10_14_count: 670, tenure_15_19_count: 589, tenure_1_2_count: 377,
      tenure_20_24_count: 393, tenure_25_29_count: 314, tenure_30_34_count: 274,
      tenure_35_plus_count: 293, tenure_3_4_count: 518, tenure_5_9_count: 595,
      tenure_less_than_1_count: 222
    },
    children_count: 346,
    detailed: {},
    office_id: "70741469-348b-43f0-bcc3-76c4ef3e307c",
    office_name: "Department Of Education"
  },
  IRS: {
    aggregated: {
      age_20_24_count: 3121, age_25_29_count: 6985, age_30_34_count: 8604, age_35_39_count: 10115,
      age_40_44_count: 11828, age_45_49_count: 11139, age_50_54_count: 11593, age_55_59_count: 13367,
      age_60_64_count: 10254, age_65_plus_count: 6607, age_under_20_count: 0, annuity_total: 10470006396.8,
      dc_employee_count: 2539, employee_count: 93937, not_telework_eligible_count: 17938,
      salary_100k_109k_count: 3465, salary_110k_119k_count: 3575, salary_120k_129k_count: 4125,
      salary_130k_139k_count: 3937, salary_140k_149k_count: 3693, salary_150k_159k_count: 3791,
      salary_160k_169k_count: 2487, salary_170k_179k_count: 1883, salary_180k_189k_count: 2159,
      salary_190k_199k_count: 2097, salary_200k_219k_count: 198, salary_20k_29k_count: 0,
      salary_220k_239k_count: 7, salary_240k_259k_count: 2, salary_260k_279k_count: 10,
      salary_280k_299k_count: 1, salary_300k_349k_count: 0, salary_30k_39k_count: 5679,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 17944,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 12023,
      salary_60k_69k_count: 10569, salary_70k_79k_count: 8173, salary_80k_89k_count: 4650,
      salary_90k_99k_count: 3453, salary_less_20k_count: 0, salary_total: 6358030807,
      salary_unspecified_count: 16, telework_eligible_count: 75999, telework_unspecified_count: 0,
      tenure_10_14_count: 11183, tenure_15_19_count: 11794, tenure_1_2_count: 13994,
      tenure_20_24_count: 7777, tenure_25_29_count: 4071, tenure_30_34_count: 4193,
      tenure_35_plus_count: 7022, tenure_3_4_count: 9185, tenure_5_9_count: 10488,
      tenure_less_than_1_count: 14230
    },
    children_count: 29,
    detailed: {
      age_20_24_count: 3121, age_25_29_count: 6985, age_30_34_count: 8604, age_35_39_count: 10115,
      age_40_44_count: 11828, age_45_49_count: 11139, age_50_54_count: 11593, age_55_59_count: 13367,
      age_60_64_count: 10254, age_65_plus_count: 6607, age_under_20_count: 0, annuity_total: 10470006396.8,
      dc_employee_count: 2539, employee_count: 93937, not_telework_eligible_count: 17938,
      salary_100k_109k_count: 3465, salary_110k_119k_count: 3575, salary_120k_129k_count: 4125,
      salary_130k_139k_count: 3937, salary_140k_149k_count: 3693, salary_150k_159k_count: 3791,
      salary_160k_169k_count: 2487, salary_170k_179k_count: 1883, salary_180k_189k_count: 2159,
      salary_190k_199k_count: 2097, salary_200k_219k_count: 198, salary_20k_29k_count: 0,
      salary_220k_239k_count: 7, salary_240k_259k_count: 2, salary_260k_279k_count: 10,
      salary_280k_299k_count: 1, salary_300k_349k_count: 0, salary_30k_39k_count: 5679,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 17944,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 12023,
      salary_60k_69k_count: 10569, salary_70k_79k_count: 8173, salary_80k_89k_count: 4650,
      salary_90k_99k_count: 3453, salary_less_20k_count: 0, salary_total: 6358030807,
      salary_unspecified_count: 16, telework_eligible_count: 75999, telework_unspecified_count: 0,
      tenure_10_14_count: 11183, tenure_15_19_count: 11794, tenure_1_2_count: 13994,
      tenure_20_24_count: 7777, tenure_25_29_count: 4071, tenure_30_34_count: 4193,
      tenure_35_plus_count: 7022, tenure_3_4_count: 9185, tenure_5_9_count: 10488,
      tenure_less_than_1_count: 14230
    },
    office_id: "2_94d02fd3-8d19-4742-bcc9-d598e24d9e49",
    office_name: "Internal Revenue Service (IRS)"
  },
  Treasury: {
    aggregated: {
      age_20_24_count: 3427, age_25_29_count: 7825, age_30_34_count: 9959, age_35_39_count: 12054,
      age_40_44_count: 14069, age_45_49_count: 12963, age_50_54_count: 13600, age_55_59_count: 15595,
      age_60_64_count: 11694, age_65_plus_count: 7354, age_under_20_count: 0, annuity_total: 13689528828.5,
      dc_employee_count: 7761, employee_count: 108869, not_telework_eligible_count: 20633,
      salary_100k_109k_count: 4566, salary_110k_119k_count: 4707, salary_120k_129k_count: 5422,
      salary_130k_139k_count: 4850, salary_140k_149k_count: 4567, salary_150k_159k_count: 4618,
      salary_160k_169k_count: 3182, salary_170k_179k_count: 2426, salary_180k_189k_count: 2993,
      salary_190k_199k_count: 2964, salary_200k_219k_count: 704, salary_20k_29k_count: 0,
      salary_220k_239k_count: 271, salary_240k_259k_count: 280, salary_260k_279k_count: 166,
      salary_280k_299k_count: 99, salary_300k_349k_count: 137, salary_30k_39k_count: 5727,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 18112,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 12460,
      salary_60k_69k_count: 11371, salary_70k_79k_count: 9078, salary_80k_89k_count: 5613,
      salary_90k_99k_count: 4495, salary_less_20k_count: 0, salary_total: 8246749417,
      salary_unspecified_count: 61, telework_eligible_count: 88209, telework_unspecified_count: 0,
      tenure_10_14_count: 13691, tenure_15_19_count: 13941, tenure_1_2_count: 15316,
      tenure_20_24_count: 9369, tenure_25_29_count: 4913, tenure_30_34_count: 5135,
      tenure_35_plus_count: 7889, tenure_3_4_count: 10496, tenure_5_9_count: 12868,
      tenure_less_than_1_count: 15251
    },
    children_count: 364,
    detailed: {},
    office_id: "treasury-dept",
    office_name: "Department of The Treasury"
  },
  Energy: {
    aggregated: {
      age_20_24_count: 116, age_25_29_count: 590, age_30_34_count: 1209, age_35_39_count: 1932,
      age_40_44_count: 2454, age_45_49_count: 2126, age_50_54_count: 2144, age_55_59_count: 2226,
      age_60_64_count: 1654, age_65_plus_count: 818, age_under_20_count: 0, annuity_total: 2908665276,
      dc_employee_count: 2990, employee_count: 15271, not_telework_eligible_count: 1331,
      salary_100k_109k_count: 872, salary_110k_119k_count: 1327, salary_120k_129k_count: 1932,
      salary_130k_139k_count: 1397, salary_140k_149k_count: 1585, salary_150k_159k_count: 1339,
      salary_160k_169k_count: 970, salary_170k_179k_count: 759, salary_180k_189k_count: 831,
      salary_190k_199k_count: 1485, salary_200k_219k_count: 550, salary_20k_29k_count: 0,
      salary_220k_239k_count: 192, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 16,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 39,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 117,
      salary_60k_69k_count: 219, salary_70k_79k_count: 370, salary_80k_89k_count: 442,
      salary_90k_99k_count: 635, salary_less_20k_count: 0, salary_total: 1782719080,
      salary_unspecified_count: 194, telework_eligible_count: 13940, telework_unspecified_count: 0,
      tenure_10_14_count: 2277, tenure_15_19_count: 2415, tenure_1_2_count: 1855,
      tenure_20_24_count: 1600, tenure_25_29_count: 759, tenure_30_34_count: 926,
      tenure_35_plus_count: 826, tenure_3_4_count: 1165, tenure_5_9_count: 2081,
      tenure_less_than_1_count: 1367
    },
    children_count: 558,
    detailed: {
      age_20_24_count: 116, age_25_29_count: 590, age_30_34_count: 1209, age_35_39_count: 1932,
      age_40_44_count: 2454, age_45_49_count: 2126, age_50_54_count: 2144, age_55_59_count: 2226,
      age_60_64_count: 1654, age_65_plus_count: 818, age_under_20_count: 0, annuity_total: 2908665276,
      dc_employee_count: 2990, employee_count: 15271, not_telework_eligible_count: 1331,
      salary_100k_109k_count: 872, salary_110k_119k_count: 1327, salary_120k_129k_count: 1932,
      salary_130k_139k_count: 1397, salary_140k_149k_count: 1585, salary_150k_159k_count: 1339,
      salary_160k_169k_count: 970, salary_170k_179k_count: 759, salary_180k_189k_count: 831,
      salary_190k_199k_count: 1485, salary_200k_219k_count: 550, salary_20k_29k_count: 0,
      salary_220k_239k_count: 192, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 16,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 39,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 117,
      salary_60k_69k_count: 219, salary_70k_79k_count: 370, salary_80k_89k_count: 442,
      salary_90k_99k_count: 635, salary_less_20k_count: 0, salary_total: 1782719080,
      salary_unspecified_count: 194, telework_eligible_count: 13940, telework_unspecified_count: 0,
      tenure_10_14_count: 2277, tenure_15_19_count: 2415, tenure_1_2_count: 1855,
      tenure_20_24_count: 1600, tenure_25_29_count: 759, tenure_30_34_count: 926,
      tenure_35_plus_count: 826, tenure_3_4_count: 1165, tenure_5_9_count: 2081,
      tenure_less_than_1_count: 1367
    },
    office_id: "7cea8966-0ab1-4249-9387-5c5dfd3cf0ea",
    office_name: "Department Of Energy"
  },
  Justice: {
    aggregated: {
      age_20_24_count: 2677, age_25_29_count: 8985, age_30_34_count: 15131, age_35_39_count: 19813,
      age_40_44_count: 19585, age_45_49_count: 17744, age_50_54_count: 16164, age_55_59_count: 9575,
      age_60_64_count: 4548, age_65_plus_count: 2369, age_under_20_count: 0, annuity_total: 9228094321.7,
      dc_employee_count: 21961, employee_count: 116613, not_telework_eligible_count: 114558,
      salary_100k_109k_count: 7796, salary_110k_119k_count: 7959, salary_120k_129k_count: 8955,
      salary_130k_139k_count: 7624, salary_140k_149k_count: 6803, salary_150k_159k_count: 5810,
      salary_160k_169k_count: 3616, salary_170k_179k_count: 2315, salary_180k_189k_count: 3051,
      salary_190k_199k_count: 6729, salary_200k_219k_count: 928, salary_20k_29k_count: 1,
      salary_220k_239k_count: 290, salary_240k_259k_count: 58, salary_260k_279k_count: 81,
      salary_280k_299k_count: 66, salary_300k_349k_count: 55, salary_30k_39k_count: 390,
      salary_350k_399k_count: 9, salary_400k_449k_count: 1, salary_40k_49k_count: 1533,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 5187,
      salary_60k_69k_count: 10916, salary_70k_79k_count: 15484, salary_80k_89k_count: 11382,
      salary_90k_99k_count: 9027, salary_less_20k_count: 0, salary_total: 5706611002,
      salary_unspecified_count: 548, telework_eligible_count: 2028, telework_unspecified_count: 0,
      tenure_10_14_count: 17713, tenure_15_19_count: 18328, tenure_1_2_count: 12454,
      tenure_20_24_count: 12287, tenure_25_29_count: 7506, tenure_30_34_count: 3920,
      tenure_35_plus_count: 3045, tenure_3_4_count: 12239, tenure_5_9_count: 21224,
      tenure_less_than_1_count: 7897
    },
    children_count: 318,
    detailed: {},
    office_id: "0667904e-fba4-4110-b1ef-3e78b023e4db",
    office_name: "Department Of Justice"
  },
  ATF: {
    aggregated: {
      age_20_24_count: 83, age_25_29_count: 258, age_30_34_count: 556, age_35_39_count: 868,
      age_40_44_count: 945, age_45_49_count: 909, age_50_54_count: 847, age_55_59_count: 554,
      age_60_64_count: 227, age_65_plus_count: 102, age_under_20_count: 0, annuity_total: 252679939.3,
      dc_employee_count: 844, employee_count: 5349, not_telework_eligible_count: 5340,
      salary_100k_109k_count: 260, salary_110k_119k_count: 607, salary_120k_129k_count: 793,
      salary_130k_139k_count: 813, salary_140k_149k_count: 535, salary_150k_159k_count: 419,
      salary_160k_169k_count: 194, salary_170k_179k_count: 109, salary_180k_189k_count: 124,
      salary_190k_199k_count: 137, salary_200k_219k_count: 15, salary_20k_29k_count: 0,
      salary_220k_239k_count: 16, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 48,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 192,
      salary_60k_69k_count: 263, salary_70k_79k_count: 348, salary_80k_89k_count: 299,
      salary_90k_99k_count: 177, salary_less_20k_count: 0, salary_total: 122223095,
      salary_unspecified_count: 0, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 720, tenure_15_19_count: 926, tenure_1_2_count: 418,
      tenure_20_24_count: 709, tenure_25_29_count: 356, tenure_30_34_count: 267,
      tenure_35_plus_count: 196, tenure_3_4_count: 364, tenure_5_9_count: 1009,
      tenure_less_than_1_count: 384
    },
    children_count: 10,
    detailed: {
      age_20_24_count: 83, age_25_29_count: 258, age_30_34_count: 556, age_35_39_count: 868,
      age_40_44_count: 945, age_45_49_count: 909, age_50_54_count: 847, age_55_59_count: 554,
      age_60_64_count: 227, age_65_plus_count: 102, age_under_20_count: 0, annuity_total: 252679939.3,
      dc_employee_count: 844, employee_count: 5349, not_telework_eligible_count: 5340,
      salary_100k_109k_count: 260, salary_110k_119k_count: 607, salary_120k_129k_count: 793,
      salary_130k_139k_count: 813, salary_140k_149k_count: 535, salary_150k_159k_count: 419,
      salary_160k_169k_count: 194, salary_170k_179k_count: 109, salary_180k_189k_count: 124,
      salary_190k_199k_count: 137, salary_200k_219k_count: 15, salary_20k_29k_count: 0,
      salary_220k_239k_count: 16, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 48,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 192,
      salary_60k_69k_count: 263, salary_70k_79k_count: 348, salary_80k_89k_count: 299,
      salary_90k_99k_count: 177, salary_less_20k_count: 0, salary_total: 122223095,
      salary_unspecified_count: 0, telework_eligible_count: 0, telework_unspecified_count: 0,
      tenure_10_14_count: 720, tenure_15_19_count: 926, tenure_1_2_count: 418,
      tenure_20_24_count: 709, tenure_25_29_count: 356, tenure_30_34_count: 267,
      tenure_35_plus_count: 196, tenure_3_4_count: 364, tenure_5_9_count: 1009,
      tenure_less_than_1_count: 384
    },
    office_id: "50c805c2-13b9-4a4c-bf23-74f2b6d59b6c",
    office_name: "Bureau of Alcohol, Tobacco, Firearms, and Explosives (ATF)"
  },
  HUD: {
    aggregated: {
      age_20_24_count: 68, age_25_29_count: 294, age_30_34_count: 557, age_35_39_count: 908,
      age_40_44_count: 1285, age_45_49_count: 1117, age_50_54_count: 1266, age_55_59_count: 1411,
      age_60_64_count: 1033, age_65_plus_count: 737, age_under_20_count: 0, annuity_total: 1965354803.1,
      dc_employee_count: 3023, employee_count: 8678, not_telework_eligible_count: 109,
      salary_100k_109k_count: 557, salary_110k_119k_count: 892, salary_120k_129k_count: 1117,
      salary_130k_139k_count: 952, salary_140k_149k_count: 943, salary_150k_159k_count: 768,
      salary_160k_169k_count: 513, salary_170k_179k_count: 387, salary_180k_189k_count: 438,
      salary_190k_199k_count: 582, salary_200k_219k_count: 31, salary_20k_29k_count: 0,
      salary_220k_239k_count: 53, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 7,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 35,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 91,
      salary_60k_69k_count: 216, salary_70k_79k_count: 241, salary_80k_89k_count: 354,
      salary_90k_99k_count: 498, salary_less_20k_count: 0, salary_total: 1146072463,
      salary_unspecified_count: 3, telework_eligible_count: 8484, telework_unspecified_count: 0,
      tenure_10_14_count: 1275, tenure_15_19_count: 1251, tenure_1_2_count: 897,
      tenure_20_24_count: 836, tenure_25_29_count: 439, tenure_30_34_count: 574,
      tenure_35_plus_count: 685, tenure_3_4_count: 799, tenure_5_9_count: 1180,
      tenure_less_than_1_count: 742
    },
    children_count: 464,
    detailed: {
      age_20_24_count: 0, age_25_29_count: 4, age_30_34_count: 3, age_35_39_count: 6,
      age_40_44_count: 9, age_45_49_count: 6, age_50_54_count: 7, age_55_59_count: 6,
      age_60_64_count: 2, age_65_plus_count: 2, age_under_20_count: 0, annuity_total: 9755126.1,
      dc_employee_count: 44, employee_count: 45, not_telework_eligible_count: 0,
      salary_100k_109k_count: 2, salary_110k_119k_count: 3, salary_120k_129k_count: 6,
      salary_130k_139k_count: 0, salary_140k_149k_count: 2, salary_150k_159k_count: 3,
      salary_160k_169k_count: 3, salary_170k_179k_count: 4, salary_180k_189k_count: 8,
      salary_190k_199k_count: 5, salary_200k_219k_count: 2, salary_20k_29k_count: 0,
      salary_220k_239k_count: 3, salary_240k_259k_count: 0, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 0,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 0,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 0,
      salary_60k_69k_count: 0, salary_70k_79k_count: 0, salary_80k_89k_count: 2,
      salary_90k_99k_count: 2, salary_less_20k_count: 0, salary_total: 7159433,
      salary_unspecified_count: 0, telework_eligible_count: 45, telework_unspecified_count: 0,
      tenure_10_14_count: 7, tenure_15_19_count: 3, tenure_1_2_count: 10,
      tenure_20_24_count: 6, tenure_25_29_count: 1, tenure_30_34_count: 4,
      tenure_35_plus_count: 0, tenure_3_4_count: 4, tenure_5_9_count: 6,
      tenure_less_than_1_count: 4
    },
    office_id: "cd0c0efe-e526-4982-aa82-e51fb5c720ba",
    office_name: "Department of Housing and Urban Development"
  },
  State: {
    aggregated: {
      age_20_24_count: 269, age_25_29_count: 708, age_30_34_count: 1242, age_35_39_count: 1864,
      age_40_44_count: 2197, age_45_49_count: 1802, age_50_54_count: 1720, age_55_59_count: 1675,
      age_60_64_count: 1340, age_65_plus_count: 1497, age_under_20_count: 0, annuity_total: 3034666873.7,
      dc_employee_count: 10348, employee_count: 14316, not_telework_eligible_count: 2782,
      salary_100k_109k_count: 1033, salary_110k_119k_count: 987, salary_120k_129k_count: 1639,
      salary_130k_139k_count: 994, salary_140k_149k_count: 1213, salary_150k_159k_count: 1454,
      salary_160k_169k_count: 826, salary_170k_179k_count: 455, salary_180k_189k_count: 1175,
      salary_190k_199k_count: 1032, salary_200k_219k_count: 115, salary_20k_29k_count: 0,
      salary_220k_239k_count: 83, salary_240k_259k_count: 1, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 38,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 313,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 380,
      salary_60k_69k_count: 381, salary_70k_79k_count: 332, salary_80k_89k_count: 842,
      salary_90k_99k_count: 894, salary_less_20k_count: 0, salary_total: 1858259321,
      salary_unspecified_count: 129, telework_eligible_count: 11534, telework_unspecified_count: 0,
      tenure_10_14_count: 2198, tenure_15_19_count: 2091, tenure_1_2_count: 1723,
      tenure_20_24_count: 1317, tenure_25_29_count: 665, tenure_30_34_count: 677,
      tenure_35_plus_count: 962, tenure_3_4_count: 1206, tenure_5_9_count: 2152,
      tenure_less_than_1_count: 1325
    },
    children_count: 993,
    detailed: {
      age_20_24_count: 269, age_25_29_count: 708, age_30_34_count: 1242, age_35_39_count: 1864,
      age_40_44_count: 2197, age_45_49_count: 1802, age_50_54_count: 1720, age_55_59_count: 1675,
      age_60_64_count: 1340, age_65_plus_count: 1497, age_under_20_count: 0, annuity_total: 3034666873.7,
      dc_employee_count: 10348, employee_count: 14316, not_telework_eligible_count: 2782,
      salary_100k_109k_count: 1033, salary_110k_119k_count: 987, salary_120k_129k_count: 1639,
      salary_130k_139k_count: 994, salary_140k_149k_count: 1213, salary_150k_159k_count: 1454,
      salary_160k_169k_count: 826, salary_170k_179k_count: 455, salary_180k_189k_count: 1175,
      salary_190k_199k_count: 1032, salary_200k_219k_count: 115, salary_20k_29k_count: 0,
      salary_220k_239k_count: 83, salary_240k_259k_count: 1, salary_260k_279k_count: 0,
      salary_280k_299k_count: 0, salary_300k_349k_count: 0, salary_30k_39k_count: 38,
      salary_350k_399k_count: 0, salary_400k_449k_count: 0, salary_40k_49k_count: 313,
      salary_450k_499k_count: 0, salary_500k_plus_count: 0, salary_50k_59k_count: 380,
      salary_60k_69k_count: 381, salary_70k_79k_count: 332, salary_80k_89k_count: 842,
      salary_90k_99k_count: 894, salary_less_20k_count: 0, salary_total: 1858259321,
      salary_unspecified_count: 129, telework_eligible_count: 11534, telework_unspecified_count: 0,
      tenure_10_14_count: 2198, tenure_15_19_count: 2091, tenure_1_2_count: 1723,
      tenure_20_24_count: 1317, tenure_25_29_count: 665, tenure_30_34_count: 677,
      tenure_35_plus_count: 962, tenure_3_4_count: 1206, tenure_5_9_count: 2152,
      tenure_less_than_1_count: 1325
    },
    office_id: "a3e933d2-1b71-4cdc-aeb1-3773d3335826",
    office_name: "Department Of State"
  }
};

const AGE_RANGES = [
  { label: 'Under 20', key: 'age_under_20_count' }, { label: '20-24', key: 'age_20_24_count' },
  { label: '25-29', key: 'age_25_29_count' }, { label: '30-34', key: 'age_30_34_count' },
  { label: '35-39', key: 'age_35_39_count' }, { label: '40-44', key: 'age_40_44_count' },
  { label: '45-49', key: 'age_45_49_count' }, { label: '50-54', key: 'age_50_54_count' },
  { label: '55-59', key: 'age_55_59_count' }, { label: '60-64', key: 'age_60_64_count' },
  { label: '65+', key: 'age_65_plus_count' }
];

const SALARY_RANGES = [
  { label: 'Under $50K', keys: ['salary_less_20k_count', 'salary_20k_29k_count', 'salary_30k_39k_count', 'salary_40k_49k_count'] },
  { label: '$50K-$69K', keys: ['salary_50k_59k_count', 'salary_60k_69k_count'] },
  { label: '$70K-$89K', keys: ['salary_70k_79k_count', 'salary_80k_89k_count'] },
  { label: '$90K-$109K', keys: ['salary_90k_99k_count', 'salary_100k_109k_count'] },
  { label: '$110K-$129K', keys: ['salary_110k_119k_count', 'salary_120k_129k_count'] },
  { label: '$130K-$149K', keys: ['salary_130k_139k_count', 'salary_140k_149k_count'] },
  { label: '$150K-$199K', keys: ['salary_150k_159k_count', 'salary_160k_169k_count', 'salary_170k_179k_count', 'salary_180k_189k_count', 'salary_190k_199k_count'] },
  { label: '$200K+', keys: ['salary_200k_219k_count', 'salary_220k_239k_count', 'salary_240k_259k_count', 'salary_260k_279k_count', 'salary_280k_299k_count', 'salary_300k_349k_count', 'salary_350k_399k_count', 'salary_400k_449k_count', 'salary_450k_499k_count', 'salary_500k_plus_count'] }
];

const TENURE_RANGES = [
  { label: 'Less than 1 year', key: 'tenure_less_than_1_count' }, { label: '1-2 years', key: 'tenure_1_2_count' },
  { label: '3-4 years', key: 'tenure_3_4_count' }, { label: '5-9 years', key: 'tenure_5_9_count' },
  { label: '10-14 years', key: 'tenure_10_14_count' }, { label: '15-19 years', key: 'tenure_15_19_count' },
  { label: '20-24 years', key: 'tenure_20_24_count' }, { label: '25-29 years', key: 'tenure_25_29_count' },
  { label: '30-34 years', key: 'tenure_30_34_count' }, { label: '35+ years', key: 'tenure_35_plus_count' }
];

const TELEWORK_OPTIONS = [
  { label: 'Eligible', key: 'telework_eligible_count' }, { label: 'Not Eligible', key: 'not_telework_eligible_count' },
  { label: 'Unspecified', key: 'telework_unspecified_count' }
];

const AGE_MIDPOINTS = {
  'Under 20': 19, '20-24': 22, '25-29': 27, '30-34': 32, '35-39': 37, '40-44': 42,
  '45-49': 47, '50-54': 52, '55-59': 57, '60-64': 62, '65+': 70
};

const TABS = ['overview', 'age', 'salary', 'tenure'];

function FederalDashboard() {
  const [activeTab, setActiveTab] = useState('overview');
  const [activeDataPoint, setActiveDataPoint] = useState(null);
  const [selectedOffice, setSelectedOffice] = useState('Federal_Government');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const activeData = OFFICE_DATA[selectedOffice];
  const aggregated = activeData.aggregated;

  const formatNumber = (num) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  const formatCurrency = (amount) => {
    if (amount >= 1e12) return `$${(amount / 1e12).toFixed(2)}T`;
    if (amount >= 1e9) return `$${(amount / 1e9).toFixed(2)}B`;
    if (amount >= 1e6) return `$${(amount / 1e6).toFixed(2)}M`;
    if (amount >= 1e3) return `$${(amount / 1e3).toFixed(2)}K`;
    return `$${amount}`;
  };

  const calculateAverageAge = (data) => {
    const [totalWeightedAge, totalEmployees] = data.reduce(
      ([weighted, total], { label, value }) => [weighted + (AGE_MIDPOINTS[label] * value), total + value],
      [0, 0]
    );
    return totalEmployees > 0 ? (totalWeightedAge / totalEmployees).toFixed(1) : 'N/A';
  };

  const getDataFromKeys = (ranges, data) => ranges.map(({ label, key, keys }) => ({
    label,
    value: keys ? keys.reduce((sum, k) => sum + data[k], 0) : data[key]
  }));

  const ageData = getDataFromKeys(AGE_RANGES, aggregated);
  const salaryData = getDataFromKeys(SALARY_RANGES, aggregated);
  const tenureData = getDataFromKeys(TENURE_RANGES, aggregated);
  const teleworkData = getDataFromKeys(TELEWORK_OPTIONS, aggregated);

  const averageSalary = aggregated.employee_count > 0 ? aggregated.salary_total / aggregated.employee_count : 0;
  const averageAge = calculateAverageAge(ageData);

  const handlePointHover = (data, index) => setActiveDataPoint({
    data,
    index,
    percentage: aggregated.employee_count > 0 ? (data[index].value / aggregated.employee_count * 100).toFixed(1) : '0'
  });

  const renderLineGraph = (data, title, color = '#E0162B') => {
    const totalEmployees = aggregated.employee_count || 1; 
    const normalizedData = data.map(item => ({
      label: item.label,
      value: (item.value / totalEmployees) * 100 
    }));
    const maxValue = Math.max(...normalizedData.map(item => item.value)) || 1;
    const chartHeight = 150;
    const scaleY = chartHeight / maxValue;
  
    return (
      <div className="graph-container">
        <h3 className="graph-title">{title}</h3>
        {activeDataPoint?.data === data && (
          <div className="data-tooltip">
            <strong>{data[activeDataPoint.index].label}:</strong> {formatNumber(data[activeDataPoint.index].value)} employees
            <div>({activeDataPoint.percentage}% of total workforce)</div>
          </div>
        )}
        <div className="line-graph">
          <div className="grid-lines">
            {[0, 25, 50, 75, 100].map(pct => <div key={pct} className="grid-line" style={{ bottom: `${pct}%` }} />)}
          </div>
          <div className="line-points">
            {normalizedData.map((item, index) => {
              const height = item.value * scaleY;
              const pointY = chartHeight - height;
              return (
                <div className="data-point" key={index}>
                  {index > 0 && (
                    <>
                      <svg className="area-fill" style={{ position: 'absolute', top: 0, left: '-50%', width: '100%', height: chartHeight, zIndex: 1 }}>
                        <polygon points={`0,${chartHeight} 0,${chartHeight - (normalizedData[index-1].value * scaleY)} 100,${pointY} 100,${chartHeight}`} fill={`${color}15`} />
                      </svg>
                      <svg className="line-connector" style={{ position: 'absolute', top: 0, left: '-50%', width: '100%', height: chartHeight, zIndex: 2 }}>
                        <line x1="0%" y1={chartHeight - (normalizedData[index-1].value * scaleY)} x2="100%" y2={pointY} stroke={color} strokeWidth="2.5" />
                      </svg>
                    </>
                  )}
                  <div
                    className={`point-marker ${activeDataPoint?.data === data && activeDataPoint.index === index ? 'active' : ''}`}
                    style={{ backgroundColor: color, top: `${pointY}px`, boxShadow: `0 0 0 3px white, 0 0 0 4px ${color}40` }}
                    onMouseEnter={() => handlePointHover(data, index)}
                    onMouseLeave={() => setActiveDataPoint(null)}
                  />
                  <div className="point-label">{item.label}</div>
                </div>
              );
            })}
          </div>
          <div className="y-axis">
            <div className="y-label" style={{ bottom: '0%' }}>0%</div>
            <div className="y-label" style={{ bottom: '50%' }}>{(maxValue / 2).toFixed(1)}%</div>
            <div className="y-label" style={{ bottom: '100%' }}>{maxValue.toFixed(1)}%</div>
          </div>
        </div>
      </div>
    );
  };

  const officeOptions = Object.entries(OFFICE_DATA).map(([key, { office_name }]) => ({ value: key, label: office_name }));
  const selectedLabel = officeOptions.find(opt => opt.value === selectedOffice)?.label || 'Select Office';

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="header-flag">
          <div className="flag-stripe red" />
          <div className="flag-stripe white" />
          <div className="flag-stripe blue" />
        </div>
        <h1>Federal Workforce Dashboard ({activeData.office_name})</h1>
        <div className="modern-dropdown">
          <div className="dropdown-selected" onClick={() => setIsDropdownOpen(!isDropdownOpen)}>
            {selectedLabel}
            <span className={`dropdown-arrow ${isDropdownOpen ? 'open' : ''}`}>▼</span>
          </div>
          {isDropdownOpen && (
            <ul className="dropdown-options">
              {officeOptions.map(({ value, label }) => (
                <li
                  key={value}
                  className={`dropdown-option ${selectedOffice === value ? 'selected' : ''}`}
                  onClick={() => { setSelectedOffice(value); setIsDropdownOpen(false); }}
                >
                  {label}
                </li>
              ))}
            </ul>
          )}
        </div>
      </header>

      <div className="dashboard-summary">
        {[
          { title: 'Total Employees', value: formatNumber(aggregated.employee_count), detail: `${activeData.office_name} workforce`, className: 'red-card' },
          { title: 'Salary Budget', value: formatCurrency(aggregated.salary_total), detail: 'Total annual', className: 'white-card' },
          { title: 'Average Salary', value: formatCurrency(averageSalary), detail: 'Per employee', className: 'blue-card' },
          { title: 'DC-Based', value: formatNumber(aggregated.dc_employee_count), detail: `${aggregated.employee_count > 0 ? ((aggregated.dc_employee_count / aggregated.employee_count) * 100).toFixed(1) : '0'}% of workforce`, className: 'red-card' },
          { title: 'Average Age', value: averageAge, detail: 'Years', className: 'blue-card' }
        ].map(({ title, value, detail, className }) => (
          <div key={title} className={`summary-card ${className}`}>
            <h2>{title}</h2>
            <div className="summary-value">{value}</div>
            <div className="summary-detail">{detail}</div>
          </div>
        ))}
      </div>

      <div className="dashboard-tabs">
        {TABS.map(tab => (
          <button
            key={tab}
            className={activeTab === tab ? 'active' : ''}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      <div className="dashboard-content">
        {activeTab === 'overview' && (
          <div className="overview-container">
            <div className="overview-graph">{renderLineGraph(teleworkData, 'Telework Eligibility', '#0A3161')}</div>
            <div className="overview-graph">{renderLineGraph(ageData, 'Age Distribution Overview', '#E0162B')}</div>
          </div>
        )}
        {activeTab === 'age' && <div className="full-graph-container">{renderLineGraph(ageData, 'Employee Age Distribution', '#E0162B')}</div>}
        {activeTab === 'salary' && <div className="full-graph-container">{renderLineGraph(salaryData, 'Employee Salary Distribution', '#0A3161')}</div>}
        {activeTab === 'tenure' && <div className="full-graph-container">{renderLineGraph(tenureData, 'Employee Tenure Distribution', '#E0162B')}</div>}
      </div>

      <footer className="dashboard-footer">
        <div className="flag-stripes">
          <div className="flag-stripe red" />
          <div className="flag-stripe white" />
          <div className="flag-stripe blue" />
        </div>
        <div className="footer-summary">
          {[
            { label: 'Total employees', value: formatNumber(aggregated.employee_count) },
            { label: 'Total salary budget', value: formatCurrency(aggregated.salary_total) },
            { label: 'Annuity total', value: formatCurrency(aggregated.annuity_total) }
          ].map(({ label, value }) => (
            <div key={label} className="footer-stat">
              <span className="stat-label">{label}:</span>
              <span className="stat-value">{value}</span>
            </div>
          ))}
        </div>
        <div className="copyright">Authored by Michael Mendy © 2025</div>
      </footer>
    </div>
  );
}

export default FederalDashboard;
