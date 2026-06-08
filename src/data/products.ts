export type ProductCategory = "Bakery & Food Processing" | "Agricultural Machinery" | "Commercial Cooking & Snacks" | "Communication Systems";

export interface Product {
  id: number;
  name: string;
  category: ProductCategory;
  images: string[];
  description: string;
  specifications: Record<string, string>;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: "Centrifugal Bread Dough Mixer",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/Centrifugal_Bread_Dough_Mixer(1)_1779125609481.jpg",
      "/attached_assets/Centrifugal_Bread_Dough_Mixer(2)_1779125626714.png",
      "/attached_assets/Centrifugal_Bread_Dough_Mixer(3)_1779125632381.png"
    ],
    description: "High-performance centrifugal dough mixer engineered for commercial bakeries. Features heavy-duty construction and precise speed controls to ensure consistent dough quality in large batches.",
    specifications: {
      "Capacity": "50 KG",
      "Power": "3.0 kW",
      "Voltage": "380V / 50Hz",
      "Mixing Speed": "120/240 RPM",
      "Bowl Speed": "12/24 RPM",
      "Material": "Food-grade Stainless Steel",
      "Weight": "180 KG",
      "Dimensions (L x W x H)": "950 x 550 x 1050 mm"
    }
  },
  {
    id: 2,
    name: "GREEN + STRAW 2 In 1 Chaff Cutter",
    category: "Agricultural Machinery",
    images: [
      "/attached_assets/GREEN_+_STRAW_2_In_1_Chaff_Cutter(1)_1779125642647.png",
      "/attached_assets/GREEN_+_STRAW_2_In_1_Chaff_Cutter(2)_1779125648536.jpg"
    ],
    description: "2 in 1 Chaff Cutter Machine combining a chaff cutter and grinder. Features 2 blade sizes, 2 blades of 13x50x130mm, a hammer type grinder with 20 hammers, and a heavy-duty fly wheel. An essential tool for livestock farms looking to maximize feed utilization and reduce waste.",
    specifications: {
      "Chaff Cutter Output": "Up to 500 kg/hour",
      "Grinding Output": "Up to 200 kg/hour",
      "Blades": "2 Blades of 13x50x130mm",
      "Grinder": "Hammer Type, 20 Hammers",
      "Fly Wheel": "10mm Thickness, OD 380mm",
      "Weight": "Approx. 80 KG (without motor)"
    }
  },
  {
    id: 3,
    name: "Commercial Gas Range with 6-Burner & Oven",
    category: "Commercial Cooking & Snacks",
    images: [
      "/attached_assets/Commercial_Gas_Range_with_6-Burner_&_Oven_Kitchen_Appliance_Ba_1779125658128.png",
      "/attached_assets/Commercial_Gas_Range_with_6-Burner_&_Oven_Kitchen_Appliance_Ba_1779125664402.png"
    ],
    description: "Industrial-grade 6-burner gas range equipped with a spacious built-in oven. Built for high-volume restaurant kitchens requiring intense heat output and unmatched durability.",
    specifications: {
      "Gas Type": "LPG / Natural Gas",
      "Burners": "6 Heavy-duty Cast Iron",
      "Oven Capacity": "120 Liters",
      "Thermal Power": "24 kW (Burners) + 6 kW (Oven)",
      "Material": "Stainless Steel (Body)",
      "Ignition": "Piezoelectric",
      "Weight": "145 KG",
      "Dimensions (L x W x H)": "1200 x 900 x 950 mm"
    }
  },
  {
    id: 4,
    name: "10 Trays Electric Convection Oven With Steam Function",
    category: "Bakery & Food Processing",
    images: ["/attached_assets/10_Trays_Electric_Convection_Oven_With_Steam_Function_1779125689006.png"],
    description: "10 Trays Electric Convection Oven With Steam Function features tray sizes of 400x600mm or 460x720mm and controls temperatures from 0 to 350°C. Equipped with a steam function, 110mm distance between trays, and built with SS#201 stainless steel. The electrical control system utilizes high-quality components from Schneider and Omron, reaching 200°C in just 10–12 minutes.",
    specifications: {
      "Capacity": "10 Trays (400x600mm or 460x720mm)",
      "Temp Range": "0°C – 350°C",
      "Steam Function": "Yes",
      "Tray Spacing": "110 mm",
      "Material": "SS#201 Stainless Steel",
      "Preheat Time": "10–12 minutes to 200°C",
      "Gas Consumption": "2.0 kg/h"
    }
  },
  {
    id: 5,
    name: "Dough Divider and Cutter",
    category: "Bakery & Food Processing",
    images: ["/attached_assets/Dough_Divider_and_Cutter_1779125702553.png"],
    description: "The Dough Divider and Cutter streamlines bakery production by automatically dividing and cutting dough into equal portions with precision. Manually operated with no electricity required, it saves time, reduces manual labor, and ensures uniform product sizes. Built with durable INOX304 stainless steel knives and grids.",
    specifications: {
      "Operation": "Manual (No Electricity Required)",
      "Portions per Cycle": "36 Equal Pieces",
      "Piece Weight Range": "30 – 180 gm",
      "Basket Capacity": "6.5 KG",
      "Knives & Grids Material": "INOX304 Stainless Steel",
      "Mobility": "2 or 4 Wheel Options",
      "Gross Weight": "100 – 150 KG"
    }
  },
  {
    id: 6,
    name: "Cast Iron 4-Burner Electric Stove",
    category: "Commercial Cooking & Snacks",
    images: ["/attached_assets/Cast_Iron_4-Burner_Electric_Stove_1779125714156.png"],
    description: "This Cast Iron 4-Burner Electric Stove is a heavy-duty industrial electric stove designed for intensive daily use in professional environments like restaurants, hotels, and large-scale catering facilities. It utilizes solid cast iron burners that provide high heat retention and exceptionally even heat distribution across the entire cooking surface.",
    specifications: {
      "Total Power": "12.0 – 14.0 kW (approx. 3.0–3.5 kW per burner)",
      "Voltage": "220V / 380V (Single or 3-Phase)",
      "Burner Material": "High-durability solid cast iron",
      "Frame Material": "Food-grade 304 Stainless Steel",
      "Control System": "Independent 4-stage or 7-stage rotary switches",
      "Safety": "Overheat protection and indicator lights"
    }
  },
  {
    id: 7,
    name: "AS-LS4 4-Burner Induction Cooker",
    category: "Commercial Cooking & Snacks",
    images: ["/attached_assets/AS-LS4_4-Burner_Induction_Cooker_1779125722920.png"],
    description: "AS-LS4 4-Burner Induction Cooker is a high-efficiency commercial induction stove with four independent burners. It features precise 8-level power controls and advanced safety functions like pan detection and overheat protection, making it safer and faster than traditional gas stoves.",
    specifications: {
      "Model": "AS-LS4",
      "Cooker Type": "Commercial Induction (4 Zones)",
      "Total Power": "14.0 kW – 20.0 kW",
      "Power per Burner": "3.5 kW or 5.0 kW per hob",
      "Voltage": "380V – 400V (3-Phase)",
      "Control Interface": "Independent 8-level power knobs or touch controls",
      "Material": "304 Stainless Steel & Tempered Ceramic Glass",
      "Dimensions": "800 x 900 x 850 mm",
      "Safety Features": "Pan detection, Overheat protection, Auto-fault detection"
    }
  },
  {
    id: 8,
    name: "KU Band 60cm Satellite Dish Antenna",
    category: "Communication Systems",
    images: ["/attached_assets/KU_Band_60cm_Satellite_Dish_Antenna_1779125732628.png"],
    description: "KU Band 60cm Satellite Dish Antenna delivers reliable, high-quality signal reception for broadcasting, internet, and data communication. Designed for commercial, residential, and remote applications, it ensures strong connectivity and consistent performance even in challenging weather conditions.",
    specifications: {
      "Dish Diameter": "60cm (approx. 24 inches)",
      "Frequency Range": "10.70 GHz – 12.75 GHz (KU Band)",
      "Material": "Steel or Aluminum with Polyester Powder Coating",
      "Gain @ 12.5GHz": "Approx. 35.8 dB – 36.5 dB",
      "Mounting Type": "Universal Wall/Pole Mount (Azimuth-Elevation)",
      "Efficiency": "> 70%",
      "Wind Loading": "Rated for operational speeds up to 90 km/h"
    }
  },
  {
    id: 9,
    name: "KU BAND 90cm Satellite Dish Antenna",
    category: "Communication Systems",
    images: ["/attached_assets/KU_Band_60cm_Satellite_Dish_Antenna_1779125732628.png"],
    description: "KU BAND 90cm Satellite Dish Antenna delivers reliable, high-quality signal reception for broadcasting, internet, and data communication. Built from durable, corrosion-resistant zinc-phosphated steel, this antenna provides long-lasting stability, easy installation, and precise alignment for professional satellite systems.",
    specifications: {
      "Dish Diameter": "90cm (approx. 35.4 inches)",
      "Frequency Range": "10.70 GHz – 12.75 GHz (KU Band)",
      "Gain @ 12.5GHz": "Approx. 39.0 dB – 39.8 dB",
      "Material": "Zinc-phosphated steel with polyester powder coating",
      "F/D Ratio": "0.6",
      "Mounting Type": "Pole/Wall mount with reinforced back bracket",
      "Wind Resistance": "Operational up to 90 km/h; Survival up to 180 km/h"
    }
  },
  {
    id: 10,
    name: "Millet Corn Soybean Sorghum Sheller Thresher Machine",
    category: "Agricultural Machinery",
    images: [
      "/attached_assets/Millet_Corn_Soybean_Sorghum_Sheller_Thresher_Machine_Maize_She_1779134814953.png",
      "/attached_assets/Millet_Corn_Soybean_Sorghum_Sheller_Thresher_Machine_Maize_She_1779134821153.png",
      "/attached_assets/Millet_Corn_Soybean_Sorghum_Sheller_Thresher_Machine_Maize_She_1779134824986.png"
    ],
    description: "Multifunctional thresher for wheat and rice suitable for threshing small samples of agricultural household and quality test units. Suitable for rice, wheat, beans, peppercorns, and other crops that need to be threshed. Realizes automatic separation of straw, grain, and chaff — saving time and labor.",
    specifications: {
      "Supported Crops": "Corn, Soybean, Sorghum, Millet, Rice, Wheat, Beans",
      "Function": "Automatic separation of straw, grain, and chaff",
      "Power": "Electric Motor / Diesel Engine Options",
      "Application": "Agricultural household and quality test units"
    }
  },
  {
    id: 11,
    name: "DSS-220C Noodle Machine",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/DSS-220C_Noodle_Machine(1)_1779134834154.png",
      "/attached_assets/DSS-220C_Noodle_Machine(2)_1779134838179.jpg"
    ],
    description: "DSS-220C Noodle Machine is a professional-grade noodle making machine that uses rotating rollers to press and cut dough into uniform strips. Designed for high efficiency, it features adjustable thickness controls for various noodle types. Constructed entirely from stainless steel for food safety and durability.",
    specifications: {
      "Model": "DSS-220C",
      "Power Output": "750W – 1100W (approx. 1.0 – 1.5 HP)",
      "Roller Width": "220 mm (approx. 8.6 inches)",
      "Production Capacity": "35 – 50 kg/h",
      "Dough Thickness": "Adjustable from 1 mm to 10 mm",
      "Standard Cutter Sizes": "2 mm / 6 mm or 3 mm / 9 mm",
      "Material": "Full Stainless Steel Rollers and Body",
      "Voltage": "220V / 50Hz"
    }
  },
  {
    id: 12,
    name: "Sapling Oil Press Model SY 350",
    category: "Agricultural Machinery",
    featured: true,
    images: [
      "/attached_assets/Sapling_Oil_Press_Model_SY_350(1)_1779134845568.png",
      "/attached_assets/Sapling_Oil_Press_Model_SY_350(2)_1779134849738.jpg"
    ],
    description: "The Sapling Oil Press Model SY 350 (Digital Model) is a portable, electric oil expeller used for extracting healthy, natural oil from various seeds like peanuts, sesame, and sunflower seeds. Features a 350W motor and supports both cold and hot pressing through a digital temperature control system.",
    specifications: {
      "Model": "SY-350 (Digital)",
      "Power Output": "350W – 400W",
      "Motor": "0.5 HP (Heavy-duty copper motor)",
      "Input Capacity": "2 – 4 kg/h (Raw material)",
      "Material": "Food-grade SS-304 & 316 Stainless Steel",
      "Operating Duration": "Continuous 5 – 6 hours",
      "Voltage": "220V / 50Hz",
      "Weight": "Approx. 13 – 15 kg",
      "Dimensions": "37.5 x 29.5 x 16.2 cm"
    }
  },
  {
    id: 13,
    name: "3 Deck 6 Trays Electric Deck Oven",
    category: "Bakery & Food Processing",
    images: ["/attached_assets/3_Deck_6_Trays_Electric_Deck_Oven_1779134857795.png"],
    description: "3 Deck 6 Trays Electric Deck Oven features a high-quality stainless steel exterior and interior, ensuring durability and a sleek appearance. Equipped with specialized pizza baking stones that provide even heating for perfect results. The internal light and tempered glass make it easy to monitor baking progress.",
    specifications: {
      "Voltage": "380V",
      "Power": "19.5 KW",
      "Dimensions": "1250 x 980 x 1690 mm",
      "Tray Size": "400 x 600 mm",
      "Frequency": "50 Hz",
      "Temp Range": "20°C – 400°C"
    }
  },
  {
    id: 14,
    name: "Electric 1 Deck 2 Trays Deck Oven HGB-20D",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/Electric_1_deck_2_trays_Deck_Oven_HGB-20D(1)_1779134861989.png",
      "/attached_assets/Electric_1_deck_2_trays_Deck_Oven_HGB-20D(2)_1779134867360.png"
    ],
    description: "The Electric 1 Deck 2 Trays Deck Oven is designed for efficient, even baking with precise temperature control. Ideal for bakeries, restaurants, and cafes, it accommodates two trays per deck, making it perfect for small to medium production needs. Built with a durable stainless-steel body and independent heating controls.",
    specifications: {
      "Size": "1220 x 990 x 1530 mm",
      "Voltage": "380V / 50Hz",
      "Power": "19.5 KW",
      "Weight": "208 KG",
      "Performance": "800 bread/h",
      "Tray Size": "400 x 600 mm"
    }
  },
  {
    id: 15,
    name: "Electric 2 Deck 4 Trays Deck Oven HGB-40D",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/Electric_2_deck_4_trays_Deck_Oven_HGB-40D(1)_1779134871600.png",
      "/attached_assets/Electric_2_deck_4_trays_Deck_Oven_HGB-40D(2)_1779159114290.png"
    ],
    description: "The Electric 2 Deck 4 Trays Deck Oven delivers powerful, even baking performance for bakeries, restaurants, and commercial kitchens. With two independent decks and space for four trays, it allows simultaneous baking of different products at precise temperatures. Constructed from high-quality stainless steel for durability and easy cleaning.",
    specifications: {
      "Model": "HGB-4D",
      "Type": "2 Deck 4 Trays Electric Oven",
      "Voltage": "220V",
      "Power": "13.2 KW",
      "Dimensions": "1250 x 820 x 1215 mm",
      "Tray Size": "400 x 600 mm",
      "Frequency": "50 Hz",
      "Temp Range": "20°C – 400°C"
    }
  },
  {
    id: 16,
    name: "Commercial Food Mixer Model – WG-B15",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/Commercial_Food_Mixer_Model_–_WG-B15(1)_1779159124989.png",
      "/attached_assets/Commercial_Food_Mixer_Model_–_WG-B15(2)_1779159129693.jpg"
    ],
    description: "The Commercial Food Mixer Model WG-B15 is a commercial-grade planetary food mixer designed for professional kitchen environments like bakeries, restaurants, and hotels. A versatile, heavy-duty machine used for kneading dough, mixing batters, and whipping creams or eggs. Utilizes a gear-driven transmission system for consistent power and even mixing.",
    specifications: {
      "Model": "WG-B15",
      "Bowl Capacity": "15 Liters",
      "Max Flour Capacity": "1.5 kg (approx. 3.3 lbs)",
      "Voltage / Frequency": "220V / 50Hz",
      "Power Output": "0.37 kW",
      "Speeds": "3 Speeds (90 / 160 / 300 rpm)",
      "Dimensions": "456 x 360 x 680 mm",
      "Attachments": "Dough hook, flat beater, and wire whisk"
    }
  },
  {
    id: 17,
    name: "Commercial Food Mixer Model WG-B30",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/Commercial_Food_Mixer_Model_WG-B30(1)_1779159145189.png",
      "/attached_assets/Commercial_Food_Mixer_Model_WG-B30(2)_1779159150500.jpg"
    ],
    description: "The Commercial Food Mixer Model WG-B30 is a larger, 30-liter capacity commercial mixer powered by a high-torque 1500W motor. Designed to handle heavier batches of 3–6 kg of dough using a belt-driven or high-precision gear system. Designed for higher-volume environments like bakeries and hotel kitchens.",
    specifications: {
      "Bowl Volume": "30 Liters",
      "Capacity": "3 – 6 kg (Dough/Filling)",
      "Power Output": "1500W (1.5 kW)",
      "Voltage / Frequency": "220V / 50Hz",
      "Speeds": "3 Speeds (110 / 200 / 420 RPM)",
      "Dimensions": "Approx. 620 x 500 x 960 mm",
      "Transmission": "Belt or Gear Drive"
    }
  },
  {
    id: 18,
    name: "12 Tray Single Door Proofer",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/12_Tray_Single_Door_Proofer(1)_1779159160256.png",
      "/attached_assets/12_Tray_Single_Door_Proofer(2)_1779159164995.jpg"
    ],
    description: "The 12 Tray Single Door Proofer – Model PR12 is designed to deliver perfect dough fermentation and consistent baking results. With a capacity for 12 trays, this proofer maintains ideal temperature and humidity levels to ensure optimal dough rise and texture. Built with a durable stainless-steel body and clear glass door for easy monitoring.",
    specifications: {
      "Voltage": "220V",
      "Power": "1.5 KW",
      "Dimensions": "1850 x 1020 x 640 mm",
      "Tray Size": "400 x 600 mm",
      "Proofing Time": "10 – 15 minutes",
      "Temperature": "32°C (optimal)"
    }
  },
  {
    id: 19,
    name: "24 Tray Two Door Proofer",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/24_Tray_Two_Door_Proofer(1)_1779159169621.png",
      "/attached_assets/24_Tray_Two_Door_Proofer(2)_1779159177511.jpg"
    ],
    description: "The 24 Tray Two Door Proofer – Model PR24 is engineered for medium to large-scale bakery operations, providing consistent temperature and humidity for perfect dough fermentation. With capacity for 24 trays, it ensures uniform proofing and reliable baking results. Constructed with a robust stainless-steel body and double glass doors for easy visibility.",
    specifications: {
      "Voltage": "220V",
      "Power": "2 KW",
      "Dimensions": "1850 x 1020 x 1215 mm",
      "Tray Size": "400 x 600 mm",
      "Proofing Time": "10 – 15 minutes",
      "Temperature": "32°C (optimal)"
    }
  },
  {
    id: 20,
    name: "32 Tray Two Door Proofer",
    category: "Bakery & Food Processing",
    images: ["/attached_assets/32_Tray_Two_Door_Proofer_1779159181894.png"],
    description: "Industrial-scale 32-tray proofer for maximum production efficiency. Delivers uncompromised environmental control for large batch yeast proofing. Constructed with a robust stainless-steel body and double glass doors, ideal for large bakeries and food production facilities.",
    specifications: {
      "Capacity": "32 Trays (400x600mm)",
      "Power": "2.8 kW",
      "Voltage": "220V / 380V",
      "Temp Range": "Room Temp – 60°C",
      "Humidity": "Automatic Control System",
      "Material": "Full Stainless Steel",
      "Weight": "130 KG",
      "Dimensions": "1000 x 700 x 1950 mm"
    }
  },
  {
    id: 21,
    name: "Type 25 Roasting Heating Machine",
    category: "Commercial Cooking & Snacks",
    images: [
      "/attached_assets/Type_25_Roasting_Heating_Machine(1)_1779159192032.png",
      "/attached_assets/Type_25_Roasting_Heating_Machine(2)_1779159197156.jpg"
    ],
    description: "The Type 25 Roasting Heating Machine is a professional-grade rotary drum roaster designed for small-to-medium scale processing of coffee beans, nuts, and various oilseeds. The most compact model in the Elyas Power roasting series, ideal for specialty coffee shops or boutique food producers. Uses a horizontal rotating drum to ensure 360° uniform heating.",
    specifications: {
      "Model": "Type 25",
      "Barrel Body Size": "61 x 35 cm",
      "Barrel Mouth Diameter": "20 cm",
      "Power": "4000W (4.0 kW)",
      "Voltage": "220V (Single Phase) or 380V (3-Phase)",
      "Machine Dimensions": "94 x 46 x 90 cm",
      "Packing Size": "106 x 96 x 90 cm",
      "Warranty": "12 Months"
    }
  },
  {
    id: 22,
    name: "Type 100 Roasting Heating Machine",
    category: "Commercial Cooking & Snacks",
    images: [
      "/attached_assets/Type_100_Roasting_Heating_Machine(1)_1779159201551.png",
      "/attached_assets/Type_100_Roasting_Heating_Machine(2)_1779159213684.jpg"
    ],
    description: "The Type 100 Roasting Heating Machine is an industrial-grade rotary drum roaster designed for high-volume processing of a wide variety of seeds, nuts, and grains. Uses a horizontal rotating drum to ensure materials are heated evenly through a combination of thermal radiation and hot air circulation. Widely used in leisure food production and oil extraction facilities.",
    specifications: {
      "Model": "Type 100",
      "Heating Source": "Electric (Infrared) or Gas (LPG/LNG)",
      "Production Capacity": "80 – 100 kg/h",
      "Batch Capacity": "30 – 50 kg per batch",
      "Power Consumption": "12.5 kW – 13.0 kW (Electric models)",
      "Temperature Range": "60°C – 300°C (adjustable)",
      "Drum Speed": "Approx. 14 – 37 rpm (adjustable)",
      "Material": "Food-grade 304 Stainless Steel",
      "Weight": "Approx. 170 – 830 kg"
    }
  },
  {
    id: 23,
    name: "FDM Soybean Grinder Model JM 85",
    category: "Agricultural Machinery",
    images: ["/attached_assets/FDM_Soybean_Grinder_model_JM_85_1779159224987.png"],
    description: "The FDM Soybean Grinder Model JM 85 is an industrial-grade vertical colloid mill designed for the superfine grinding, emulsification, and homogenization of wet or semi-wet materials. Primarily used in food processing to create smooth pastes like peanut butter, tahini, and fruit jams. Uses high-speed rotating discs to apply intense shearing forces.",
    specifications: {
      "Model": "JM-85",
      "Category": "Industrial Grinder / Colloid Mill",
      "Motor Power": "5.5 kW",
      "Production Capacity": "100 – 150 kg/h",
      "Grinding Fineness": "2 – 70 microns",
      "Rotation Speed": "3000 rpm",
      "Dimensions": "800 x 350 x 850 mm",
      "Material": "Food-grade Stainless Steel",
      "Primary Use": "Nut butters, emulsified sauces, and liquid homogenization"
    }
  },
  {
    id: 24,
    name: "8kg Spiral Mixer – Model SD-20",
    category: "Bakery & Food Processing",
    images: ["/attached_assets/8kg_Spiral_Mixer_–_Model_SD-20_1779159235757.png"],
    description: "The 8kg Spiral Mixer is designed for small bakeries, cafés, and pizzerias that need reliable dough mixing in a compact form. Its spiral mixing system ensures even, gentle kneading that maintains dough texture and consistency. Built with a sturdy stainless-steel bowl and frame for durability and easy cleaning.",
    specifications: {
      "Model": "SD-20",
      "Motor Power": "1100W (1.1 kW)",
      "Voltage": "220V",
      "Max Kneading Capacity": "8 KG",
      "Bowl Capacity": "20 Liters"
    }
  },
  {
    id: 25,
    name: "12kg Spiral Mixer – Model SM12",
    category: "Bakery & Food Processing",
    images: [
      "/attached_assets/12kg_Spiral_Mixer_–_Model_SM12(1)_1779159243102.png",
      "/attached_assets/12kg_Spiral_Mixer_–_Model_SM12(2)_1779159247546.png"
    ],
    description: "The 12kg Spiral Mixer offers powerful and consistent dough mixing for small to medium-scale bakeries and pizzerias. Its spiral agitator and rotating bowl ensure thorough blending, maintaining ideal dough texture and elasticity. Crafted from high-quality stainless steel, it delivers durability, low noise, and easy maintenance.",
    specifications: {
      "Model": "SD-30",
      "Motor Power": "1500W (1.5 kW)",
      "Voltage": "220V",
      "Max Kneading Capacity": "12 KG",
      "Bowl Capacity": "30 Liters"
    }
  },
  {
    id: 26,
    name: "25kg Spiral Mixer – Model SM50",
    category: "Bakery & Food Processing",
    images: ["/attached_assets/25kg_Spiral_Mixer_–_Model_SM50_1779159252490.png"],
    description: "The 25kg Spiral Mixer is designed for efficient and consistent dough mixing in bakeries, pizzerias, and commercial kitchens. Its powerful motor and spiral-shaped agitator ensure thorough blending while keeping the dough cool and maintaining optimal texture. Built from heavy-duty stainless steel for durability, quiet operation, and easy cleaning.",
    specifications: {
      "Bowl Capacity": "54 Liters",
      "Voltage": "220V – 380V / 50Hz",
      "Power": "3 KW",
      "Mixing Speed": "112 / 198 r/min",
      "Weight": "170 KG",
      "Dimensions": "840 x 480 x 100 mm (LWH)"
    }
  },
  {
    id: 27,
    name: "50kg Spiral Mixer – Model SM50",
    category: "Bakery & Food Processing",
    images: ["/attached_assets/50kg_Spiral_Mixer_–_Model_SM50_1779160302794.png"],
    description: "The 50kg Spiral Mixer is designed for efficient and consistent dough mixing in bakeries, pizzerias, and commercial kitchens. Its powerful motor and spiral-shaped agitator ensure thorough blending while keeping the dough cool and maintaining optimal texture. Built from heavy-duty stainless steel for industrial-grade durability.",
    specifications: {
      "Bowl Capacity": "54 Liters",
      "Voltage": "220V – 380V / 50Hz",
      "Power": "3 KW",
      "Mixing Speed": "112 / 198 r/min",
      "Weight": "170 KG",
      "Dimensions": "840 x 480 x 100 mm (LWH)"
    }
  },
  {
    id: 28,
    name: "Vegetable Cutter Machine",
    category: "Commercial Cooking & Snacks",
    images: ["/attached_assets/Vegetable_cutter_machine(1)_1779160312159.jpg"],
    description: "The Vegetable Cutter Machine streamlines food preparation by slicing, dicing, shredding, and chopping vegetables quickly and uniformly. Designed for commercial kitchens, hotels, and catering services, it saves time while ensuring consistent results for every dish. Built with a durable stainless-steel body and interchangeable cutting blades.",
    specifications: {
      "Size": "775 x 710 x 940 mm",
      "Voltage": "380V / 50Hz",
      "Capacity": "20 Liters",
      "Productivity": "120 KG/hour",
      "Weight": "126 KG"
    }
  },
  {
    id: 29,
    name: "Vegetable Food Processor and Cutter",
    category: "Commercial Cooking & Snacks",
    images: [
      "/attached_assets/Vegetable_Food_Processor_and_Cutter(1)_1779160317208.png",
      "/attached_assets/Vegetable_Food_Processor_and_Cutter(2)_1779160321221.jpg"
    ],
    description: "The Vegetable Food Processor and Cutter is a versatile machine designed to handle slicing, shredding, chopping, and dicing with speed and precision. Ideal for restaurants, hotels, and catering businesses, it simplifies large-scale food prep while ensuring consistent quality. Featuring a powerful motor and durable stainless-steel blades.",
    specifications: {
      "Size": "990 x 810 x 980 mm",
      "Voltage": "380V / 50Hz",
      "Knife Motor Power": "2.2 / 2.8 kW",
      "Bowl Motor Power": "1.1 kW",
      "Capacity": "25 Liters",
      "Productivity": "300 KG/hour",
      "Weight": "318 KG"
    }
  },
  {
    id: 30,
    name: "Cotton Candy Machine Commercial",
    category: "Commercial Cooking & Snacks",
    images: [
      "/attached_assets/Cotton_Candy_Machine_Commercial(1)_1779125674448.png",
      "/attached_assets/Cotton_Candy_Machine_Commercial(2)_1779125679625.jpg"
    ],
    description: "Cotton Candy Machine Commercial, 1030W Electric Cotton Candy Maker Machine. Features a stainless steel bowl and sugar scoop, designed for kids birthday parties, family events, and commercial use. Engineered for quick heat-up and continuous production at events and stalls.",
    specifications: {
      "Power": "1030W",
      "Dimensions (L x W x H)": "57.4 x 57.4 x 44.5 cm (22.6 x 22.6 x 17.5 inches)",
      "Weight": "12.61 kg (27.8 lbs)",
      "Model": "Candy Floss Machine",
      "Bowl Material": "Stainless Steel"
    }
  }
];