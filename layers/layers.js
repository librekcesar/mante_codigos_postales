var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_mante_zipcodes_1 = new ol.format.GeoJSON();
var features_mante_zipcodes_1 = format_mante_zipcodes_1.readFeatures(json_mante_zipcodes_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_mante_zipcodes_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_mante_zipcodes_1.addFeatures(features_mante_zipcodes_1);
var lyr_mante_zipcodes_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_mante_zipcodes_1, 
                style: style_mante_zipcodes_1,
                interactive: true,
                title: '<img src="styles/legend/mante_zipcodes_1.png" /> mante_zipcodes'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_mante_zipcodes_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_mante_zipcodes_1];
lyr_mante_zipcodes_1.set('fieldAliases', {'mante_CP': 'mante_CP', 'mante_localidad': 'mante_localidad', });
lyr_mante_zipcodes_1.set('fieldImages', {'mante_CP': 'TextEdit', 'mante_localidad': 'TextEdit', });
lyr_mante_zipcodes_1.set('fieldLabels', {'mante_CP': 'header label', 'mante_localidad': 'header label', });
lyr_mante_zipcodes_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});