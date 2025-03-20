var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SOLANEPhase2CityMunicipalBoundaries_1 = new ol.format.GeoJSON();
var features_SOLANEPhase2CityMunicipalBoundaries_1 = format_SOLANEPhase2CityMunicipalBoundaries_1.readFeatures(json_SOLANEPhase2CityMunicipalBoundaries_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2CityMunicipalBoundaries_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2CityMunicipalBoundaries_1.addFeatures(features_SOLANEPhase2CityMunicipalBoundaries_1);
var lyr_SOLANEPhase2CityMunicipalBoundaries_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2CityMunicipalBoundaries_1, 
                style: style_SOLANEPhase2CityMunicipalBoundaries_1,
                popuplayertitle: 'SOLANE Phase 2 City / Municipal Boundaries',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2CityMunicipalBoundaries_1.png" /> SOLANE Phase 2 City / Municipal Boundaries'
            });
var format_SOLANEPhase2BarangayswPop_2 = new ol.format.GeoJSON();
var features_SOLANEPhase2BarangayswPop_2 = format_SOLANEPhase2BarangayswPop_2.readFeatures(json_SOLANEPhase2BarangayswPop_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2BarangayswPop_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2BarangayswPop_2.addFeatures(features_SOLANEPhase2BarangayswPop_2);
var lyr_SOLANEPhase2BarangayswPop_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2BarangayswPop_2, 
                style: style_SOLANEPhase2BarangayswPop_2,
                popuplayertitle: 'SOLANE Phase 2 Barangays w: Pop',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2BarangayswPop_2.png" /> SOLANE Phase 2 Barangays w: Pop'
            });
var format_SOLANEPhase2Grids_3 = new ol.format.GeoJSON();
var features_SOLANEPhase2Grids_3 = format_SOLANEPhase2Grids_3.readFeatures(json_SOLANEPhase2Grids_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2Grids_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2Grids_3.addFeatures(features_SOLANEPhase2Grids_3);
var lyr_SOLANEPhase2Grids_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2Grids_3, 
                style: style_SOLANEPhase2Grids_3,
                popuplayertitle: 'SOLANE Phase 2 Grids',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2Grids_3.png" /> SOLANE Phase 2 Grids'
            });
var format_SOLANEFINALPH2ALL_4 = new ol.format.GeoJSON();
var features_SOLANEFINALPH2ALL_4 = format_SOLANEFINALPH2ALL_4.readFeatures(json_SOLANEFINALPH2ALL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEFINALPH2ALL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEFINALPH2ALL_4.addFeatures(features_SOLANEFINALPH2ALL_4);
var lyr_SOLANEFINALPH2ALL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEFINALPH2ALL_4, 
                style: style_SOLANEFINALPH2ALL_4,
                popuplayertitle: 'SOLANE FINAL PH 2 ALL',
                interactive: true,
                title: '<img src="styles/legend/SOLANEFINALPH2ALL_4.png" /> SOLANE FINAL PH 2 ALL'
            });
var format_PATEROS_5 = new ol.format.GeoJSON();
var features_PATEROS_5 = format_PATEROS_5.readFeatures(json_PATEROS_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATEROS_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATEROS_5.addFeatures(features_PATEROS_5);
var lyr_PATEROS_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATEROS_5, 
                style: style_PATEROS_5,
                popuplayertitle: 'PATEROS',
                interactive: true,
                title: '<img src="styles/legend/PATEROS_5.png" /> PATEROS'
            });
var format_PASIGPACI_6 = new ol.format.GeoJSON();
var features_PASIGPACI_6 = format_PASIGPACI_6.readFeatures(json_PASIGPACI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASIGPACI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASIGPACI_6.addFeatures(features_PASIGPACI_6);
var lyr_PASIGPACI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASIGPACI_6, 
                style: style_PASIGPACI_6,
                popuplayertitle: 'PASIG PACI',
                interactive: true,
                title: '<img src="styles/legend/PASIGPACI_6.png" /> PASIG PACI'
            });
var format_NAVOTASDDC_7 = new ol.format.GeoJSON();
var features_NAVOTASDDC_7 = format_NAVOTASDDC_7.readFeatures(json_NAVOTASDDC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVOTASDDC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVOTASDDC_7.addFeatures(features_NAVOTASDDC_7);
var lyr_NAVOTASDDC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAVOTASDDC_7, 
                style: style_NAVOTASDDC_7,
                popuplayertitle: 'NAVOTAS DDC',
                interactive: true,
                title: '<img src="styles/legend/NAVOTASDDC_7.png" /> NAVOTAS DDC'
            });
var format_VALENZUELA_8 = new ol.format.GeoJSON();
var features_VALENZUELA_8 = format_VALENZUELA_8.readFeatures(json_VALENZUELA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALENZUELA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VALENZUELA_8.addFeatures(features_VALENZUELA_8);
var lyr_VALENZUELA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VALENZUELA_8, 
                style: style_VALENZUELA_8,
                popuplayertitle: 'VALENZUELA',
                interactive: true,
                title: '<img src="styles/legend/VALENZUELA_8.png" /> VALENZUELA'
            });
var format_MALABONDDC_9 = new ol.format.GeoJSON();
var features_MALABONDDC_9 = format_MALABONDDC_9.readFeatures(json_MALABONDDC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALABONDDC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALABONDDC_9.addFeatures(features_MALABONDDC_9);
var lyr_MALABONDDC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALABONDDC_9, 
                style: style_MALABONDDC_9,
                popuplayertitle: 'MALABON DDC',
                interactive: true,
                title: '<img src="styles/legend/MALABONDDC_9.png" /> MALABON DDC'
            });
var format_SCALOOCAN_10 = new ol.format.GeoJSON();
var features_SCALOOCAN_10 = format_SCALOOCAN_10.readFeatures(json_SCALOOCAN_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCALOOCAN_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCALOOCAN_10.addFeatures(features_SCALOOCAN_10);
var lyr_SCALOOCAN_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCALOOCAN_10, 
                style: style_SCALOOCAN_10,
                popuplayertitle: 'S CALOOCAN',
                interactive: true,
                title: '<img src="styles/legend/SCALOOCAN_10.png" /> S CALOOCAN'
            });
var format_QUEZONCITY_11 = new ol.format.GeoJSON();
var features_QUEZONCITY_11 = format_QUEZONCITY_11.readFeatures(json_QUEZONCITY_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUEZONCITY_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUEZONCITY_11.addFeatures(features_QUEZONCITY_11);
var lyr_QUEZONCITY_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUEZONCITY_11, 
                style: style_QUEZONCITY_11,
                popuplayertitle: 'QUEZON CITY',
                interactive: true,
                title: '<img src="styles/legend/QUEZONCITY_11.png" /> QUEZON CITY'
            });
var format_PASAY_12 = new ol.format.GeoJSON();
var features_PASAY_12 = format_PASAY_12.readFeatures(json_PASAY_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASAY_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASAY_12.addFeatures(features_PASAY_12);
var lyr_PASAY_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASAY_12, 
                style: style_PASAY_12,
                popuplayertitle: 'PASAY',
                interactive: true,
                title: '<img src="styles/legend/PASAY_12.png" /> PASAY'
            });
var format_MANILA_13 = new ol.format.GeoJSON();
var features_MANILA_13 = format_MANILA_13.readFeatures(json_MANILA_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANILA_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANILA_13.addFeatures(features_MANILA_13);
var lyr_MANILA_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANILA_13, 
                style: style_MANILA_13,
                popuplayertitle: 'MANILA',
                interactive: true,
                title: '<img src="styles/legend/MANILA_13.png" /> MANILA'
            });
var format_CREATE_14 = new ol.format.GeoJSON();
var features_CREATE_14 = format_CREATE_14.readFeatures(json_CREATE_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CREATE_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CREATE_14.addFeatures(features_CREATE_14);
var lyr_CREATE_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CREATE_14, 
                style: style_CREATE_14,
                popuplayertitle: 'CREATE',
                interactive: true,
                title: '<img src="styles/legend/CREATE_14.png" /> CREATE'
            });
var format_EXPAND_15 = new ol.format.GeoJSON();
var features_EXPAND_15 = format_EXPAND_15.readFeatures(json_EXPAND_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPAND_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPAND_15.addFeatures(features_EXPAND_15);
var lyr_EXPAND_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPAND_15, 
                style: style_EXPAND_15,
                popuplayertitle: 'EXPAND',
                interactive: true,
                title: '<img src="styles/legend/EXPAND_15.png" /> EXPAND'
            });
var format_OPTIMIZE_16 = new ol.format.GeoJSON();
var features_OPTIMIZE_16 = format_OPTIMIZE_16.readFeatures(json_OPTIMIZE_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPTIMIZE_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPTIMIZE_16.addFeatures(features_OPTIMIZE_16);
var lyr_OPTIMIZE_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPTIMIZE_16, 
                style: style_OPTIMIZE_16,
                popuplayertitle: 'OPTIMIZE',
                interactive: true,
                title: '<img src="styles/legend/OPTIMIZE_16.png" /> OPTIMIZE'
            });
var format_interested_17 = new ol.format.GeoJSON();
var features_interested_17 = format_interested_17.readFeatures(json_interested_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_interested_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_interested_17.addFeatures(features_interested_17);
var lyr_interested_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_interested_17, 
                style: style_interested_17,
                popuplayertitle: 'interested',
                interactive: true,
                title: '<img src="styles/legend/interested_17.png" /> interested'
            });
var group_SOLANEperChannelType = new ol.layer.Group({
                                layers: [lyr_CREATE_14,lyr_EXPAND_15,lyr_OPTIMIZE_16,],
                                fold: "open",
                                title: 'SOLANE per Channel Type'});
var group_SOLANEperDistributorArea = new ol.layer.Group({
                                layers: [lyr_PATEROS_5,lyr_PASIGPACI_6,lyr_NAVOTASDDC_7,lyr_VALENZUELA_8,lyr_MALABONDDC_9,lyr_SCALOOCAN_10,lyr_QUEZONCITY_11,lyr_PASAY_12,lyr_MANILA_13,],
                                fold: "open",
                                title: 'SOLANE per Distributor Area'});
var group_SOLANEPhase2GeographicCoverageBoundaries = new ol.layer.Group({
                                layers: [lyr_SOLANEPhase2CityMunicipalBoundaries_1,lyr_SOLANEPhase2BarangayswPop_2,lyr_SOLANEPhase2Grids_3,],
                                fold: "open",
                                title: 'SOLANE Phase 2 Geographic Coverage Boundaries'});

lyr_OSMStandard_0.setVisible(true);lyr_SOLANEPhase2CityMunicipalBoundaries_1.setVisible(true);lyr_SOLANEPhase2BarangayswPop_2.setVisible(true);lyr_SOLANEPhase2Grids_3.setVisible(true);lyr_SOLANEFINALPH2ALL_4.setVisible(true);lyr_PATEROS_5.setVisible(true);lyr_PASIGPACI_6.setVisible(true);lyr_NAVOTASDDC_7.setVisible(true);lyr_VALENZUELA_8.setVisible(true);lyr_MALABONDDC_9.setVisible(true);lyr_SCALOOCAN_10.setVisible(true);lyr_QUEZONCITY_11.setVisible(true);lyr_PASAY_12.setVisible(true);lyr_MANILA_13.setVisible(true);lyr_CREATE_14.setVisible(true);lyr_EXPAND_15.setVisible(true);lyr_OPTIMIZE_16.setVisible(true);lyr_interested_17.setVisible(true);
var layersList = [lyr_OSMStandard_0,group_SOLANEPhase2GeographicCoverageBoundaries,lyr_SOLANEFINALPH2ALL_4,group_SOLANEperDistributorArea,group_SOLANEperChannelType,lyr_interested_17];
lyr_SOLANEPhase2CityMunicipalBoundaries_1.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEPhase2BarangayswPop_2.set('fieldAliases', {'Barangay N': 'Barangay Name', 'Population': 'Population', });
lyr_SOLANEPhase2Grids_3.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEFINALPH2ALL_4.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_PATEROS_5.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_PASIGPACI_6.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_NAVOTASDDC_7.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_VALENZUELA_8.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_MALABONDDC_9.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_SCALOOCAN_10.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_QUEZONCITY_11.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_PASAY_12.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_MANILA_13.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_CREATE_14.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_EXPAND_15.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_OPTIMIZE_16.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'field_6': 'field_6', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', 'Photo': 'Photo', });
lyr_interested_17.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_SOLANEPhase2CityMunicipalBoundaries_1.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEPhase2BarangayswPop_2.set('fieldImages', {'Barangay N': 'TextEdit', 'Population': 'TextEdit', });
lyr_SOLANEPhase2Grids_3.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEFINALPH2ALL_4.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'CheckBox', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_PATEROS_5.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_PASIGPACI_6.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_NAVOTASDDC_7.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_VALENZUELA_8.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_MALABONDDC_9.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_SCALOOCAN_10.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_QUEZONCITY_11.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_PASAY_12.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_MANILA_13.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_CREATE_14.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_EXPAND_15.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_OPTIMIZE_16.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'field_6': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', 'Photo': 'TextEdit', });
lyr_interested_17.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_SOLANEPhase2CityMunicipalBoundaries_1.set('fieldLabels', {'Name': 'no label', });
lyr_SOLANEPhase2BarangayswPop_2.set('fieldLabels', {'Barangay N': 'no label', 'Population': 'no label', });
lyr_SOLANEPhase2Grids_3.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_SOLANEFINALPH2ALL_4.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_PATEROS_5.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_PASIGPACI_6.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_NAVOTASDDC_7.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_VALENZUELA_8.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_MALABONDDC_9.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_SCALOOCAN_10.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_QUEZONCITY_11.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_PASAY_12.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_MANILA_13.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_CREATE_14.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_EXPAND_15.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_OPTIMIZE_16.set('fieldLabels', {'_Store / O': 'no label', '_Store /_1': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'field_6': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', 'Photo': 'no label', });
lyr_interested_17.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_interested_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});