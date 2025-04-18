var wms_layers = [];


        var lyr_Positron_0 = new ol.layer.Tile({
            'title': 'Positron',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://cartodb.com/basemaps/">Map tiles by CartoDB, under CC BY 3.0. Data by OpenStreetMap, under ODbL.</a>',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png'
            })
        });
var format_Contours_1 = new ol.format.GeoJSON();
var features_Contours_1 = format_Contours_1.readFeatures(json_Contours_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Contours_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Contours_1.addFeatures(features_Contours_1);
var lyr_Contours_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Contours_1, 
                style: style_Contours_1,
                popuplayertitle: 'Contours',
                interactive: false,
                title: '<img src="styles/legend/Contours_1.png" /> Contours'
            });
var format_scapePolygons240224_2 = new ol.format.GeoJSON();
var features_scapePolygons240224_2 = format_scapePolygons240224_2.readFeatures(json_scapePolygons240224_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_scapePolygons240224_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_scapePolygons240224_2.addFeatures(features_scapePolygons240224_2);
var lyr_scapePolygons240224_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_scapePolygons240224_2, 
                style: style_scapePolygons240224_2,
                popuplayertitle: 'scapePolygons240224',
                interactive: false,
                title: '<img src="styles/legend/scapePolygons240224_2.png" /> scapePolygons240224'
            });
var format_NQP_databasephotos_24_3 = new ol.format.GeoJSON();
var features_NQP_databasephotos_24_3 = format_NQP_databasephotos_24_3.readFeatures(json_NQP_databasephotos_24_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NQP_databasephotos_24_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQP_databasephotos_24_3.addFeatures(features_NQP_databasephotos_24_3);
var lyr_NQP_databasephotos_24_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQP_databasephotos_24_3, 
                style: style_NQP_databasephotos_24_3,
                popuplayertitle: 'NQP_databasephotos_24',
                interactive: true,
                title: '<img src="styles/legend/NQP_databasephotos_24_3.png" /> NQP_databasephotos_24'
            });
var format_NQP_AP_24_EL_4 = new ol.format.GeoJSON();
var features_NQP_AP_24_EL_4 = format_NQP_AP_24_EL_4.readFeatures(json_NQP_AP_24_EL_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NQP_AP_24_EL_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQP_AP_24_EL_4.addFeatures(features_NQP_AP_24_EL_4);
var lyr_NQP_AP_24_EL_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQP_AP_24_EL_4, 
                style: style_NQP_AP_24_EL_4,
                popuplayertitle: 'NQP_AP_24_EL',
                interactive: true,
                title: '<img src="styles/legend/NQP_AP_24_EL_4.png" /> NQP_AP_24_EL'
            });
var format_NQP_ML_24_EL_5 = new ol.format.GeoJSON();
var features_NQP_ML_24_EL_5 = format_NQP_ML_24_EL_5.readFeatures(json_NQP_ML_24_EL_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NQP_ML_24_EL_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQP_ML_24_EL_5.addFeatures(features_NQP_ML_24_EL_5);
var lyr_NQP_ML_24_EL_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQP_ML_24_EL_5, 
                style: style_NQP_ML_24_EL_5,
                popuplayertitle: 'NQP_ML_24_EL',
                interactive: true,
                title: '<img src="styles/legend/NQP_ML_24_EL_5.png" /> NQP_ML_24_EL'
            });
var format_NQP_AP_photos_24_RC_6 = new ol.format.GeoJSON();
var features_NQP_AP_photos_24_RC_6 = format_NQP_AP_photos_24_RC_6.readFeatures(json_NQP_AP_photos_24_RC_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NQP_AP_photos_24_RC_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQP_AP_photos_24_RC_6.addFeatures(features_NQP_AP_photos_24_RC_6);
var lyr_NQP_AP_photos_24_RC_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQP_AP_photos_24_RC_6, 
                style: style_NQP_AP_photos_24_RC_6,
                popuplayertitle: 'NQP_AP_photos_24_RC',
                interactive: true,
                title: '<img src="styles/legend/NQP_AP_photos_24_RC_6.png" /> NQP_AP_photos_24_RC'
            });
var format_NQP_AP_25_RC_7 = new ol.format.GeoJSON();
var features_NQP_AP_25_RC_7 = format_NQP_AP_25_RC_7.readFeatures(json_NQP_AP_25_RC_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NQP_AP_25_RC_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQP_AP_25_RC_7.addFeatures(features_NQP_AP_25_RC_7);
var lyr_NQP_AP_25_RC_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQP_AP_25_RC_7, 
                style: style_NQP_AP_25_RC_7,
                popuplayertitle: 'NQP_AP_25_RC',
                interactive: true,
                title: '<img src="styles/legend/NQP_AP_25_RC_7.png" /> NQP_AP_25_RC'
            });
var format_NQP_AP_25_EL_8 = new ol.format.GeoJSON();
var features_NQP_AP_25_EL_8 = format_NQP_AP_25_EL_8.readFeatures(json_NQP_AP_25_EL_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NQP_AP_25_EL_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQP_AP_25_EL_8.addFeatures(features_NQP_AP_25_EL_8);
var lyr_NQP_AP_25_EL_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQP_AP_25_EL_8, 
                style: style_NQP_AP_25_EL_8,
                popuplayertitle: 'NQP_AP_25_EL',
                interactive: true,
                title: '<img src="styles/legend/NQP_AP_25_EL_8.png" /> NQP_AP_25_EL'
            });
var format_NQP_ML_25_RC_9 = new ol.format.GeoJSON();
var features_NQP_ML_25_RC_9 = format_NQP_ML_25_RC_9.readFeatures(json_NQP_ML_25_RC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_NQP_ML_25_RC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_NQP_ML_25_RC_9.addFeatures(features_NQP_ML_25_RC_9);
var lyr_NQP_ML_25_RC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_NQP_ML_25_RC_9, 
                style: style_NQP_ML_25_RC_9,
                popuplayertitle: 'NQP_ML_25_RC',
                interactive: true,
                title: '<img src="styles/legend/NQP_ML_25_RC_9.png" /> NQP_ML_25_RC'
            });
var format_naxosaqueductexcavated_10 = new ol.format.GeoJSON();
var features_naxosaqueductexcavated_10 = format_naxosaqueductexcavated_10.readFeatures(json_naxosaqueductexcavated_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_naxosaqueductexcavated_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_naxosaqueductexcavated_10.addFeatures(features_naxosaqueductexcavated_10);
var lyr_naxosaqueductexcavated_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_naxosaqueductexcavated_10, 
                style: style_naxosaqueductexcavated_10,
                popuplayertitle: 'naxos-aqueduct-excavated',
                interactive: true,
                title: '<img src="styles/legend/naxosaqueductexcavated_10.png" /> naxos-aqueduct-excavated'
            });
var format_aqueductline_11 = new ol.format.GeoJSON();
var features_aqueductline_11 = format_aqueductline_11.readFeatures(json_aqueductline_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_aqueductline_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_aqueductline_11.addFeatures(features_aqueductline_11);
var lyr_aqueductline_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_aqueductline_11, 
                style: style_aqueductline_11,
                popuplayertitle: 'aqueductline',
                interactive: true,
                title: '<img src="styles/legend/aqueductline_11.png" /> aqueductline'
            });
var group_nqp = new ol.layer.Group({
                                layers: [lyr_scapePolygons240224_2,],
                                fold: 'open',
                                title: 'nqp'});

lyr_Positron_0.setVisible(true);lyr_Contours_1.setVisible(true);lyr_scapePolygons240224_2.setVisible(true);lyr_NQP_databasephotos_24_3.setVisible(true);lyr_NQP_AP_24_EL_4.setVisible(true);lyr_NQP_ML_24_EL_5.setVisible(true);lyr_NQP_AP_photos_24_RC_6.setVisible(true);lyr_NQP_AP_25_RC_7.setVisible(true);lyr_NQP_AP_25_EL_8.setVisible(true);lyr_NQP_ML_25_RC_9.setVisible(true);lyr_naxosaqueductexcavated_10.setVisible(true);lyr_aqueductline_11.setVisible(true);
var layersList = [lyr_Positron_0,lyr_Contours_1,group_nqp,lyr_NQP_databasephotos_24_3,lyr_NQP_AP_24_EL_4,lyr_NQP_ML_24_EL_5,lyr_NQP_AP_photos_24_RC_6,lyr_NQP_AP_25_RC_7,lyr_NQP_AP_25_EL_8,lyr_NQP_ML_25_RC_9,lyr_naxosaqueductexcavated_10,lyr_aqueductline_11];
lyr_Contours_1.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ELEV': 'ELEV', });
lyr_scapePolygons240224_2.set('fieldAliases', {'qc_id': 'qc_id', 'fid': 'fid', 'uuid': 'uuid', 'name': 'name', });
lyr_NQP_databasephotos_24_3.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_NQP_AP_24_EL_4.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_NQP_ML_24_EL_5.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_NQP_AP_photos_24_RC_6.set('fieldAliases', {'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_NQP_AP_25_RC_7.set('fieldAliases', {'qc_id': 'qc_id', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_NQP_AP_25_EL_8.set('fieldAliases', {'qc_id': 'qc_id', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_NQP_ML_25_RC_9.set('fieldAliases', {'qc_id': 'qc_id', 'photo': 'photo', 'filename': 'filename', 'directory': 'directory', 'altitude': 'altitude', 'direction': 'direction', 'rotation': 'rotation', 'longitude': 'longitude', 'latitude': 'latitude', 'timestamp': 'timestamp', });
lyr_naxosaqueductexcavated_10.set('fieldAliases', {'qc_id': 'qc_id', 'place': 'place', 'latitude': 'latitude', 'longitude': 'longitude', });
lyr_aqueductline_11.set('fieldAliases', {'qc_id': 'qc_id', 'id': 'id', });
lyr_Contours_1.set('fieldImages', {'fid': '', 'ID': '', 'ELEV': '', });
lyr_scapePolygons240224_2.set('fieldImages', {'qc_id': '', 'fid': 'TextEdit', 'uuid': 'TextEdit', 'name': 'TextEdit', });
lyr_NQP_databasephotos_24_3.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_NQP_AP_24_EL_4.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_NQP_ML_24_EL_5.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_NQP_AP_photos_24_RC_6.set('fieldImages', {'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_NQP_AP_25_RC_7.set('fieldImages', {'qc_id': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_NQP_AP_25_EL_8.set('fieldImages', {'qc_id': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'Range', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'DateTime', });
lyr_NQP_ML_25_RC_9.set('fieldImages', {'qc_id': 'TextEdit', 'photo': 'ExternalResource', 'filename': 'TextEdit', 'directory': 'ExternalResource', 'altitude': 'TextEdit', 'direction': 'TextEdit', 'rotation': 'TextEdit', 'longitude': 'TextEdit', 'latitude': 'TextEdit', 'timestamp': 'TextEdit', });
lyr_naxosaqueductexcavated_10.set('fieldImages', {'qc_id': '', 'place': '', 'latitude': '', 'longitude': '', });
lyr_aqueductline_11.set('fieldImages', {'qc_id': '', 'id': 'TextEdit', });
lyr_Contours_1.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ELEV': 'no label', });
lyr_scapePolygons240224_2.set('fieldLabels', {'qc_id': 'no label', 'fid': 'no label', 'uuid': 'no label', 'name': 'no label', });
lyr_NQP_databasephotos_24_3.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_NQP_AP_24_EL_4.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_NQP_ML_24_EL_5.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_NQP_AP_photos_24_RC_6.set('fieldLabels', {'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_NQP_AP_25_RC_7.set('fieldLabels', {'qc_id': 'no label', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_NQP_AP_25_EL_8.set('fieldLabels', {'qc_id': 'no label', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_NQP_ML_25_RC_9.set('fieldLabels', {'qc_id': 'header label - visible with data', 'photo': 'no label', 'filename': 'no label', 'directory': 'no label', 'altitude': 'no label', 'direction': 'no label', 'rotation': 'no label', 'longitude': 'no label', 'latitude': 'no label', 'timestamp': 'no label', });
lyr_naxosaqueductexcavated_10.set('fieldLabels', {'qc_id': 'no label', 'place': 'no label', 'latitude': 'no label', 'longitude': 'no label', });
lyr_aqueductline_11.set('fieldLabels', {'qc_id': 'no label', 'id': 'no label', });
lyr_aqueductline_11.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});