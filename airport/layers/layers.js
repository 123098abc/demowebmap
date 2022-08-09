var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.google.at/permissions/geoguidelines/attr-guide.html">Map data ©2015 Google</a>',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_Parcels_1 = new ol.format.GeoJSON();
var features_Parcels_1 = format_Parcels_1.readFeatures(json_Parcels_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Parcels_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Parcels_1.addFeatures(features_Parcels_1);
var lyr_Parcels_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Parcels_1, 
                style: style_Parcels_1,
                interactive: true,
                title: '<img src="styles/legend/Parcels_1.png" /> Parcels'
            });
var format_PPARCELS_2 = new ol.format.GeoJSON();
var features_PPARCELS_2 = format_PPARCELS_2.readFeatures(json_PPARCELS_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PPARCELS_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PPARCELS_2.addFeatures(features_PPARCELS_2);
var lyr_PPARCELS_2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_PPARCELS_2, 
                style: style_PPARCELS_2,
                interactive: true,
                title: '<img src="styles/legend/PPARCELS_2.png" /> PPARCELS'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Parcels_1.setVisible(true);lyr_PPARCELS_2.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Parcels_1,lyr_PPARCELS_2];
lyr_Parcels_1.set('fieldAliases', {'id': 'id', });
lyr_PPARCELS_2.set('fieldAliases', {'AREA': 'AREA', 'Parcel_no': 'Parcel_no', 'AREAS': 'AREAS', 'OWNER': 'OWNER', });
lyr_Parcels_1.set('fieldImages', {'id': '', });
lyr_PPARCELS_2.set('fieldImages', {'AREA': 'TextEdit', 'Parcel_no': 'TextEdit', 'AREAS': 'TextEdit', 'OWNER': 'TextEdit', });
lyr_Parcels_1.set('fieldLabels', {'id': 'no label', });
lyr_PPARCELS_2.set('fieldLabels', {'AREA': 'no label', 'Parcel_no': 'no label', 'AREAS': 'no label', 'OWNER': 'no label', });
lyr_PPARCELS_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});