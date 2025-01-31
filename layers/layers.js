var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });

        var lyr_OSMStandard_1 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
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
var format_SOLANEAllChannelsFinalPh2_5 = new ol.format.GeoJSON();
var features_SOLANEAllChannelsFinalPh2_5 = format_SOLANEAllChannelsFinalPh2_5.readFeatures(json_SOLANEAllChannelsFinalPh2_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SOLANEAllChannelsFinalPh2_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SOLANEAllChannelsFinalPh2_5.addFeatures(features_SOLANEAllChannelsFinalPh2_5);
var lyr_SOLANEAllChannelsFinalPh2_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SOLANEAllChannelsFinalPh2_5, 
                style: style_SOLANEAllChannelsFinalPh2_5,
                popuplayertitle: 'SOLANE All Channels Final Ph2',
                interactive: true,
                title: '<img src="styles/legend/SOLANEAllChannelsFinalPh2_5.png" /> SOLANE All Channels Final Ph2'
            });
var format_PATEROSPACI_6 = new ol.format.GeoJSON();
var features_PATEROSPACI_6 = format_PATEROSPACI_6.readFeatures(json_PATEROSPACI_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PATEROSPACI_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PATEROSPACI_6.addFeatures(features_PATEROSPACI_6);
var lyr_PATEROSPACI_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PATEROSPACI_6, 
                style: style_PATEROSPACI_6,
                popuplayertitle: 'PATEROS PACI',
                interactive: true,
                title: '<img src="styles/legend/PATEROSPACI_6.png" /> PATEROS PACI'
            });
var format_PASIGPACI_7 = new ol.format.GeoJSON();
var features_PASIGPACI_7 = format_PASIGPACI_7.readFeatures(json_PASIGPACI_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASIGPACI_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASIGPACI_7.addFeatures(features_PASIGPACI_7);
var lyr_PASIGPACI_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASIGPACI_7, 
                style: style_PASIGPACI_7,
                popuplayertitle: 'PASIG PACI',
                interactive: true,
                title: '<img src="styles/legend/PASIGPACI_7.png" /> PASIG PACI'
            });
var format_VALENZUELADDC_8 = new ol.format.GeoJSON();
var features_VALENZUELADDC_8 = format_VALENZUELADDC_8.readFeatures(json_VALENZUELADDC_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_VALENZUELADDC_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_VALENZUELADDC_8.addFeatures(features_VALENZUELADDC_8);
var lyr_VALENZUELADDC_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_VALENZUELADDC_8, 
                style: style_VALENZUELADDC_8,
                popuplayertitle: 'VALENZUELA DDC',
                interactive: true,
                title: '<img src="styles/legend/VALENZUELADDC_8.png" /> VALENZUELA DDC'
            });
var format_NAVOTASDDC_9 = new ol.format.GeoJSON();
var features_NAVOTASDDC_9 = format_NAVOTASDDC_9.readFeatures(json_NAVOTASDDC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NAVOTASDDC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NAVOTASDDC_9.addFeatures(features_NAVOTASDDC_9);
var lyr_NAVOTASDDC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NAVOTASDDC_9, 
                style: style_NAVOTASDDC_9,
                popuplayertitle: 'NAVOTAS DDC',
                interactive: true,
                title: '<img src="styles/legend/NAVOTASDDC_9.png" /> NAVOTAS DDC'
            });
var format_MALABONDDC_10 = new ol.format.GeoJSON();
var features_MALABONDDC_10 = format_MALABONDDC_10.readFeatures(json_MALABONDDC_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MALABONDDC_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MALABONDDC_10.addFeatures(features_MALABONDDC_10);
var lyr_MALABONDDC_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MALABONDDC_10, 
                style: style_MALABONDDC_10,
                popuplayertitle: 'MALABON DDC',
                interactive: true,
                title: '<img src="styles/legend/MALABONDDC_10.png" /> MALABON DDC'
            });
var format_SCALOOCANDDC_11 = new ol.format.GeoJSON();
var features_SCALOOCANDDC_11 = format_SCALOOCANDDC_11.readFeatures(json_SCALOOCANDDC_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SCALOOCANDDC_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SCALOOCANDDC_11.addFeatures(features_SCALOOCANDDC_11);
var lyr_SCALOOCANDDC_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SCALOOCANDDC_11, 
                style: style_SCALOOCANDDC_11,
                popuplayertitle: 'S CALOOCAN DDC',
                interactive: true,
                title: '<img src="styles/legend/SCALOOCANDDC_11.png" /> S CALOOCAN DDC'
            });
var format_QUEZONCITYDDC_12 = new ol.format.GeoJSON();
var features_QUEZONCITYDDC_12 = format_QUEZONCITYDDC_12.readFeatures(json_QUEZONCITYDDC_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_QUEZONCITYDDC_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_QUEZONCITYDDC_12.addFeatures(features_QUEZONCITYDDC_12);
var lyr_QUEZONCITYDDC_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_QUEZONCITYDDC_12, 
                style: style_QUEZONCITYDDC_12,
                popuplayertitle: 'QUEZON CITY DDC',
                interactive: true,
                title: '<img src="styles/legend/QUEZONCITYDDC_12.png" /> QUEZON CITY DDC'
            });
var format_PASAYSMI_13 = new ol.format.GeoJSON();
var features_PASAYSMI_13 = format_PASAYSMI_13.readFeatures(json_PASAYSMI_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PASAYSMI_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PASAYSMI_13.addFeatures(features_PASAYSMI_13);
var lyr_PASAYSMI_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PASAYSMI_13, 
                style: style_PASAYSMI_13,
                popuplayertitle: 'PASAY SMI',
                interactive: true,
                title: '<img src="styles/legend/PASAYSMI_13.png" /> PASAY SMI'
            });
var format_MANILASMI_14 = new ol.format.GeoJSON();
var features_MANILASMI_14 = format_MANILASMI_14.readFeatures(json_MANILASMI_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MANILASMI_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MANILASMI_14.addFeatures(features_MANILASMI_14);
var lyr_MANILASMI_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MANILASMI_14, 
                style: style_MANILASMI_14,
                popuplayertitle: 'MANILA SMI',
                interactive: true,
                title: '<img src="styles/legend/MANILASMI_14.png" /> MANILA SMI'
            });
var format_CREATEChannels_15 = new ol.format.GeoJSON();
var features_CREATEChannels_15 = format_CREATEChannels_15.readFeatures(json_CREATEChannels_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CREATEChannels_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CREATEChannels_15.addFeatures(features_CREATEChannels_15);
var lyr_CREATEChannels_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CREATEChannels_15, 
                style: style_CREATEChannels_15,
                popuplayertitle: 'CREATE Channels',
                interactive: true,
                title: '<img src="styles/legend/CREATEChannels_15.png" /> CREATE Channels'
            });
var format_EXPANDChannels_16 = new ol.format.GeoJSON();
var features_EXPANDChannels_16 = format_EXPANDChannels_16.readFeatures(json_EXPANDChannels_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EXPANDChannels_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EXPANDChannels_16.addFeatures(features_EXPANDChannels_16);
var lyr_EXPANDChannels_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_EXPANDChannels_16, 
                style: style_EXPANDChannels_16,
                popuplayertitle: 'EXPAND Channels',
                interactive: true,
                title: '<img src="styles/legend/EXPANDChannels_16.png" /> EXPAND Channels'
            });
var format_OPTIMIZEChannels_17 = new ol.format.GeoJSON();
var features_OPTIMIZEChannels_17 = format_OPTIMIZEChannels_17.readFeatures(json_OPTIMIZEChannels_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_OPTIMIZEChannels_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_OPTIMIZEChannels_17.addFeatures(features_OPTIMIZEChannels_17);
var lyr_OPTIMIZEChannels_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_OPTIMIZEChannels_17, 
                style: style_OPTIMIZEChannels_17,
                popuplayertitle: 'OPTIMIZE Channels',
                interactive: true,
                title: '<img src="styles/legend/OPTIMIZEChannels_17.png" /> OPTIMIZE Channels'
            });
var group_SOLANEperChannelType = new ol.layer.Group({
                                layers: [lyr_CREATEChannels_15,lyr_EXPANDChannels_16,lyr_OPTIMIZEChannels_17,],
                                fold: "open",
                                title: 'SOLANE per Channel Type'});
var group_SOLANEAllChannelsperDistributorArea = new ol.layer.Group({
                                layers: [lyr_PATEROSPACI_6,lyr_PASIGPACI_7,lyr_VALENZUELADDC_8,lyr_NAVOTASDDC_9,lyr_MALABONDDC_10,lyr_SCALOOCANDDC_11,lyr_QUEZONCITYDDC_12,lyr_PASAYSMI_13,lyr_MANILASMI_14,],
                                fold: "open",
                                title: 'SOLANE All Channels per Distributor Area'});
var group_SOLANEPhase2GeographicCoverageBoundaries = new ol.layer.Group({
                                layers: [lyr_SOLANEPhase2CityMunicipalBoundaries_2,lyr_SOLANEPhase2BarangayswPop_3,lyr_SOLANEPhase2Grids_4,],
                                fold: "open",
                                title: 'SOLANE Phase 2 Geographic Coverage Boundaries'});

lyr_GoogleSatellite_0.setVisible(true);lyr_OSMStandard_1.setVisible(true);lyr_SOLANEPhase2CityMunicipalBoundaries_2.setVisible(true);lyr_SOLANEPhase2BarangayswPop_3.setVisible(true);lyr_SOLANEPhase2Grids_4.setVisible(true);lyr_SOLANEAllChannelsFinalPh2_5.setVisible(true);lyr_PATEROSPACI_6.setVisible(true);lyr_PASIGPACI_7.setVisible(true);lyr_VALENZUELADDC_8.setVisible(true);lyr_NAVOTASDDC_9.setVisible(true);lyr_MALABONDDC_10.setVisible(true);lyr_SCALOOCANDDC_11.setVisible(true);lyr_QUEZONCITYDDC_12.setVisible(true);lyr_PASAYSMI_13.setVisible(true);lyr_MANILASMI_14.setVisible(true);lyr_CREATEChannels_15.setVisible(true);lyr_EXPANDChannels_16.setVisible(true);lyr_OPTIMIZEChannels_17.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_OSMStandard_1,group_SOLANEPhase2GeographicCoverageBoundaries,lyr_SOLANEAllChannelsFinalPh2_5,group_SOLANEAllChannelsperDistributorArea,group_SOLANEperChannelType];
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldAliases', {'Barangay N': 'Barangay Name', 'Population': 'Population', });
lyr_SOLANEPhase2Grids_4.set('fieldAliases', {'Name': 'Name', });
lyr_SOLANEAllChannelsFinalPh2_5.set('fieldAliases', {'_Store / O': 'X_COORD', '_Store /_1': 'Y_COORD', 'Tag No': 'TAG NO', 'Grid No': 'GRID NO', 'House No': 'HOUSE NO', 'Street Nam': 'STREET', 'Barangay': 'BARANGAY', 'City or Mu': 'CITY / MUNICIPALITY', 'Store Name': 'STORE NAME', 'Channel Se': 'CHANNEL SEGMENT', 'Distributo': 'DISTRIBUTOR', 'Owner\'s Na': 'OWNER\'S NAME', 'Contact No': 'CONTACT', 'Contact _1': 'CONTACT 2', 'Interested': 'INTERESTED DEALER', });
lyr_PATEROSPACI_6.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_PASIGPACI_7.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_VALENZUELADDC_8.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_NAVOTASDDC_9.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_MALABONDDC_10.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_SCALOOCANDDC_11.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_QUEZONCITYDDC_12.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_PASAYSMI_13.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_MANILASMI_14.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_CREATEChannels_15.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_EXPANDChannels_16.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_OPTIMIZEChannels_17.set('fieldAliases', {'_Store / O': '_Store / O', '_Store /_1': '_Store /_1', 'Tag No': 'Tag No', 'Grid No': 'Grid No', 'House No': 'House No', 'Street Nam': 'Street Nam', 'Barangay': 'Barangay', 'City or Mu': 'City or Mu', 'Store Name': 'Store Name', 'Channel Se': 'Channel Se', 'Distributo': 'Distributo', 'Owner\'s Na': 'Owner\'s Na', 'Contact No': 'Contact No', 'Contact _1': 'Contact _1', 'Interested': 'Interested', });
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldImages', {'Barangay N': 'TextEdit', 'Population': 'TextEdit', });
lyr_SOLANEPhase2Grids_4.set('fieldImages', {'Name': 'TextEdit', });
lyr_SOLANEAllChannelsFinalPh2_5.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_PATEROSPACI_6.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_PASIGPACI_7.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_VALENZUELADDC_8.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_NAVOTASDDC_9.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_MALABONDDC_10.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_SCALOOCANDDC_11.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_QUEZONCITYDDC_12.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_PASAYSMI_13.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_MANILASMI_14.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_CREATEChannels_15.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_EXPANDChannels_16.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_OPTIMIZEChannels_17.set('fieldImages', {'_Store / O': 'TextEdit', '_Store /_1': 'TextEdit', 'Tag No': 'TextEdit', 'Grid No': 'TextEdit', 'House No': 'TextEdit', 'Street Nam': 'TextEdit', 'Barangay': 'TextEdit', 'City or Mu': 'TextEdit', 'Store Name': 'TextEdit', 'Channel Se': 'TextEdit', 'Distributo': 'TextEdit', 'Owner\'s Na': 'TextEdit', 'Contact No': 'TextEdit', 'Contact _1': 'TextEdit', 'Interested': 'Range', });
lyr_SOLANEPhase2CityMunicipalBoundaries_2.set('fieldLabels', {'Name': 'no label', });
lyr_SOLANEPhase2BarangayswPop_3.set('fieldLabels', {'Barangay N': 'no label', 'Population': 'no label', });
lyr_SOLANEPhase2Grids_4.set('fieldLabels', {'Name': 'header label - visible with data', });
lyr_SOLANEAllChannelsFinalPh2_5.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_PATEROSPACI_6.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_PASIGPACI_7.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_VALENZUELADDC_8.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_NAVOTASDDC_9.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_MALABONDDC_10.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_SCALOOCANDDC_11.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_QUEZONCITYDDC_12.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_PASAYSMI_13.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_MANILASMI_14.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_CREATEChannels_15.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_EXPANDChannels_16.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_OPTIMIZEChannels_17.set('fieldLabels', {'_Store / O': 'hidden field', '_Store /_1': 'hidden field', 'Tag No': 'no label', 'Grid No': 'no label', 'House No': 'no label', 'Street Nam': 'no label', 'Barangay': 'no label', 'City or Mu': 'no label', 'Store Name': 'no label', 'Channel Se': 'no label', 'Distributo': 'no label', 'Owner\'s Na': 'no label', 'Contact No': 'no label', 'Contact _1': 'no label', 'Interested': 'no label', });
lyr_OPTIMIZEChannels_17.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});