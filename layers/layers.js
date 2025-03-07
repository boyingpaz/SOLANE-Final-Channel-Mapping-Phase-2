var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_SOLANEPhase2CityMunicipalBoundaries_2 = new ol.format.GeoJSON();
var features_SOLANEPhase2CityMunicipalBoundaries_2 = format_SOLANEPhase2CityMunicipalBoundaries_2.readFeatures(json_SOLANEPhase2CityMunicipalBoundaries_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2CityMunicipalBoundaries_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2CityMunicipalBoundaries_2.addFeatures(features_SOLANEPhase2CityMunicipalBoundaries_2);
var lyr_SOLANEPhase2CityMunicipalBoundaries_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2CityMunicipalBoundaries_2, 
                style: style_SOLANEPhase2CityMunicipalBoundaries_2,
                popuplayertitle: 'SOLANE Phase 2 City / Municipal Boundaries',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2CityMunicipalBoundaries_2.png" /> SOLANE Phase 2 City / Municipal Boundaries'
            });
var format_SOLANEPhase2BarangayswPop_3 = new ol.format.GeoJSON();
var features_SOLANEPhase2BarangayswPop_3 = format_SOLANEPhase2BarangayswPop_3.readFeatures(json_SOLANEPhase2BarangayswPop_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2BarangayswPop_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2BarangayswPop_3.addFeatures(features_SOLANEPhase2BarangayswPop_3);
var lyr_SOLANEPhase2BarangayswPop_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2BarangayswPop_3, 
                style: style_SOLANEPhase2BarangayswPop_3,
                popuplayertitle: 'SOLANE Phase 2 Barangays w: Pop',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2BarangayswPop_3.png" /> SOLANE Phase 2 Barangays w: Pop'
            });
var format_SOLANEPhase2Grids_4 = new ol.format.GeoJSON();
var features_SOLANEPhase2Grids_4 = format_SOLANEPhase2Grids_4.readFeatures(json_SOLANEPhase2Grids_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEPhase2Grids_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEPhase2Grids_4.addFeatures(features_SOLANEPhase2Grids_4);
var lyr_SOLANEPhase2Grids_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEPhase2Grids_4, 
                style: style_SOLANEPhase2Grids_4,
                popuplayertitle: 'SOLANE Phase 2 Grids',
                interactive: true,
                title: '<img src="styles/legend/SOLANEPhase2Grids_4.png" /> SOLANE Phase 2 Grids'
            });
var format_SOLANEAllChannelsFinalPhase2_5 = new ol.format.GeoJSON();
var features_SOLANEAllChannelsFinalPhase2_5 = format_SOLANEAllChannelsFinalPhase2_5.readFeatures(json_SOLANEAllChannelsFinalPhase2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEAllChannelsFinalPhase2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEAllChannelsFinalPhase2_5.addFeatures(features_SOLANEAllChannelsFinalPhase2_5);
var lyr_SOLANEAllChannelsFinalPhase2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEAllChannelsFinalPhase2_5, 
                style: style_SOLANEAllChannelsFinalPhase2_5,
                popuplayertitle: 'SOLANE All Channels Final Phase 2',
                interactive: true,
                title: '<img src="styles/legend/SOLANEAllChannelsFinalPhase2_5.png" /> SOLANE All Channels Final Phase 2'
            });
var format_PATEROS_6 = new ol.format.GeoJSON();
var features_PATEROS_6 = format_PATEROS_6.readFeatures(json_PATEROS_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATEROS_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATEROS_6.addFeatures(features_PATEROS_6);
var lyr_PATEROS_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATEROS_6, 
                style: style_PATEROS_6,
                popuplayertitle: 'PATEROS',
                interactive: true,
                title: '<img src="styles/legend/PATEROS_6.png" /> PATEROS'
            });
var format_PASIG_7 = new ol.format.GeoJSON();
var features_PASIG_7 = format_PASIG_7.readFeatures(json_PASIG_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASIG_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASIG_7.addFeatures(features_PASIG_7);
var lyr_PASIG_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASIG_7, 
                style: style_PASIG_7,
                popuplayertitle: 'PASIG',
                interactive: true,
                title: '<img src="styles/legend/PASIG_7.png" /> PASIG'
            });
var format_VALEZUELA_8 = new ol.format.GeoJSON();
var features_VALEZUELA_8 = format_VALEZUELA_8.readFeatures(json_VALEZUELA_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALEZUELA_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VALEZUELA_8.addFeatures(features_VALEZUELA_8);
var lyr_VALEZUELA_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VALEZUELA_8, 
                style: style_VALEZUELA_8,
                popuplayertitle: 'VALEZUELA',
                interactive: true,
                title: '<img src="styles/legend/VALEZUELA_8.png" /> VALEZUELA'
            });
var format_MALABON_9 = new ol.format.GeoJSON();
var features_MALABON_9 = format_MALABON_9.readFeatures(json_MALABON_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALABON_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALABON_9.addFeatures(features_MALABON_9);
var lyr_MALABON_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALABON_9, 
                style: style_MALABON_9,
                popuplayertitle: 'MALABON',
                interactive: true,
                title: '<img src="styles/legend/MALABON_9.png" /> MALABON'
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
var format_CREATEFINAL_14 = new ol.format.GeoJSON();
var features_CREATEFINAL_14 = format_CREATEFINAL_14.readFeatures(json_CREATEFINAL_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CREATEFINAL_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CREATEFINAL_14.addFeatures(features_CREATEFINAL_14);
var lyr_CREATEFINAL_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CREATEFINAL_14, 
                style: style_CREATEFINAL_14,
                popuplayertitle: 'CREATE FINAL',
                interactive: true,
                title: '<img src="styles/legend/CREATEFINAL_14.png" /> CREATE FINAL'
            });
var format_EXPANDFINAL_15 = new ol.format.GeoJSON();
var features_EXPANDFINAL_15 = format_EXPANDFINAL_15.readFeatures(json_EXPANDFINAL_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPANDFINAL_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANDFINAL_15.addFeatures(features_EXPANDFINAL_15);
var lyr_EXPANDFINAL_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANDFINAL_15, 
                style: style_EXPANDFINAL_15,
                popuplayertitle: 'EXPAND FINAL',
                interactive: true,
                title: '<img src="styles/legend/EXPANDFINAL_15.png" /> EXPAND FINAL'
            });
var format_OPTIMIZEFINAL_16 = new ol.format.GeoJSON();
var features_OPTIMIZEFINAL_16 = format_OPTIMIZEFINAL_16.readFeatures(json_OPTIMIZEFINAL_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPTIMIZEFINAL_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPTIMIZEFINAL_16.addFeatures(features_OPTIMIZEFINAL_16);
var lyr_OPTIMIZEFINAL_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPTIMIZEFINAL_16, 
                style: style_OPTIMIZEFINAL_16,
                popuplayertitle: 'OPTIMIZE FINAL',
                interactive: true,
                title: '<img src="styles/legend/OPTIMIZEFINAL_16.png" /> OPTIMIZE FINAL'
            });
var group_SOLANEperChannelType = new ol.layer.Group({
                                layers: [lyr_CREATEFINAL_14,lyr_EXPANDFINAL_15,lyr_OPTIMIZEFINAL_16,],
                                fold: "open",
                                title: 'SOLANE per Channel Type'});
var group_SOLANEAllChannelsperDistributor = new ol.layer.Group({
                                layers: [lyr_PATEROS_6,lyr_PASIG_7,lyr_VALEZUELA_8,lyr_MALABON_9,lyr_SCALOOCAN_10,lyr_QUEZONCITY_11,lyr_PASAY_12,lyr_MANILA_13,],
                                fold: "open",
                                title: 'SOLANE All Channels per Distributor'});
var group_SOLANEPhase2GeographicCoverageBoundaries = new ol.layer.Group({
                                layers: [lyr_SOLANEPhase2CityMunicipalBoundaries_2,lyr_SOLANEPhase2BarangayswPop_3,lyr_SOLANEPhase2Grids_4,],
                                fold: "open",
                                title: 'SOLANE Phase 2 Geographic Coverage Boundaries'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SOLANEPhase2CityMunicipalBoundaries_2.setVisible(true);lyr_SOLANEPhase2BarangayswPop_3.setVisible(true);lyr_SOLANEPhase2Grids_4.setVisible(true);lyr_SOLANEAllChannelsFinalPhase2_5.setVisible(true);lyr_PATEROS_6.setVisible(true);lyr_PASIG_7.setVisible(true);lyr_VALEZUELA_8.setVisible(true);lyr_MALABON_9.setVisible(true);lyr_SCALOOCAN_10.setVisible(true);lyr_QUEZONCITY_11.setVisible(true);lyr_PASAY_12.setVisible(true);lyr_MANILA_13.setVisible(true);lyr_CREATEFINAL_14.setVisible(true);lyr_EXPANDFINAL_15.setVisible(true);lyr_OPTIMIZEFINAL_16.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_SOLANEPhase2GeographicCoverageBoundaries,lyr_SOLANEAllChannelsFinalPhase2_5,group_SOLANEAllChannelsperDistributor,group_SOLANEperChannelType];
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldAliases', {'Barangay N': 'Barangay Name', 'Population': 'Population', });
lyr_SOLANEPhase2Grids_4.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEAllChannelsFinalPhase2_5.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'HOUSE NO', 'Street Nam': 'STREET', 'Barangay': 'BARANGAY', 'City or Mu': 'CITY / MUNICIPALITY', 'Store Name': 'STORE NAME', 'Channel Se': 'CHANNEL SEGMENT', 'Distributo': 'DISTRIBUTOR', 'Owner\'s Na': 'OWNER\'S NAME', 'Contact No': 'CONTACT', 'Contact _1': 'CONTACT 2', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'INTERESTED DEALER', 'Remarks': 'Remarks', });
lyr_PATEROS_6.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_PASIG_7.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_VALEZUELA_8.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_MALABON_9.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_SCALOOCAN_10.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_QUEZONCITY_11.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_PASAY_12.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_MANILA_13.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_CREATEFINAL_14.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_EXPANDFINAL_15.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_OPTIMIZEFINAL_16.set('fieldAliases', {'POINT X': 'POINT X', 'POINT Y': 'POINT Y', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Contact _2': 'Contact _2', 'Door Type': 'Door Type', 'Interested': 'Interested', 'Remarks': 'Remarks', });
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldImages', {'Barangay N': 'TextEdit', 'Population': 'TextEdit', });
lyr_SOLANEPhase2Grids_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEAllChannelsFinalPhase2_5.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_PATEROS_6.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_PASIG_7.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_VALEZUELA_8.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_MALABON_9.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_SCALOOCAN_10.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_QUEZONCITY_11.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_PASAY_12.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_MANILA_13.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_CREATEFINAL_14.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_EXPANDFINAL_15.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_OPTIMIZEFINAL_16.set('fieldImages', {'POINT X': 'TextEdit', 'POINT Y': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Contact _2': 'TextEdit', 'Door Type': 'TextEdit', 'Interested': 'Range', 'Remarks': 'TextEdit', });
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldLabels', {'Name': 'no label', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldLabels', {'Barangay N': 'no label', 'Population': 'no label', });
lyr_SOLANEPhase2Grids_4.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_SOLANEAllChannelsFinalPhase2_5.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_PATEROS_6.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_PASIG_7.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_VALEZUELA_8.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_MALABON_9.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_SCALOOCAN_10.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_QUEZONCITY_11.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_PASAY_12.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_MANILA_13.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_CREATEFINAL_14.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_EXPANDFINAL_15.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_OPTIMIZEFINAL_16.set('fieldLabels', {'POINT X': 'no label', 'POINT Y': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Contact _2': 'no label', 'Door Type': 'no label', 'Interested': 'no label', 'Remarks': 'no label', });
lyr_OPTIMIZEFINAL_16.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});