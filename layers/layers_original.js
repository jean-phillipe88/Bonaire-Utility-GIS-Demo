var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });

        var lyr_googlesattelite_1 = new ol.layer.Tile({
            'title': 'google sattelite',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://google.com{x}&y={y}&z={z}'
            })
        });
var format_buildings_2 = new ol.format.GeoJSON();
var features_buildings_2 = format_buildings_2.readFeatures(json_buildings_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_2.addFeatures(features_buildings_2);
var lyr_buildings_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_2, 
                style: style_buildings_2,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_2.png" /> buildings'
            });
var format_buildings_3 = new ol.format.GeoJSON();
var features_buildings_3 = format_buildings_3.readFeatures(json_buildings_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_buildings_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_buildings_3.addFeatures(features_buildings_3);
var lyr_buildings_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_buildings_3, 
                style: style_buildings_3,
                popuplayertitle: 'buildings',
                interactive: true,
                title: '<img src="styles/legend/buildings_3.png" /> buildings'
            });
var lyr_print_layout_test2_4 = new ol.layer.Image({
        opacity: 1,
        
    title: 'print_layout_test2<br />\
    <img src="styles/legend/print_layout_test2_4_0.png" /> 0<br />\
    <img src="styles/legend/print_layout_test2_4_1.png" /> 143<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/print_layout_test2_4.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [-7628027.950800, 1347512.918695, -7580198.745666, 1382108.799732]
        })
    });

lyr_OpenStreetMap_0.setVisible(true);lyr_googlesattelite_1.setVisible(true);lyr_buildings_2.setVisible(true);lyr_buildings_3.setVisible(true);lyr_print_layout_test2_4.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_googlesattelite_1,lyr_buildings_2,lyr_buildings_3,lyr_print_layout_test2_4];
lyr_buildings_2.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'name_en': 'name_en', 'name_nl': 'name_nl', 'building': 'building', 'building_levels': 'building_levels', 'building_materials': 'building_materials', 'addr_full': 'addr_full', 'addr_housenumber': 'addr_housenumber', 'addr_street': 'addr_street', 'addr_city': 'addr_city', 'office': 'office', 'source': 'source', 'adm0_pcode': 'adm0_pcode', 'adm0_name': 'adm0_name', 'adm1_pcode': 'adm1_pcode', 'adm1_name': 'adm1_name', 'adm2_pcode': 'adm2_pcode', 'adm2_name': 'adm2_name', 'adm3_pcode': 'adm3_pcode', 'adm3_name': 'adm3_name', 'adm4_pcode': 'adm4_pcode', 'adm4_name': 'adm4_name', 'name_latin': 'name_latin', });
lyr_buildings_3.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'name': 'name', 'name_en': 'name_en', 'name_nl': 'name_nl', 'building': 'building', 'building_levels': 'building_levels', 'building_materials': 'building_materials', 'addr_full': 'addr_full', 'addr_housenumber': 'addr_housenumber', 'addr_street': 'addr_street', 'addr_city': 'addr_city', 'office': 'office', 'source': 'source', 'adm0_pcode': 'adm0_pcode', 'adm0_name': 'adm0_name', 'adm1_pcode': 'adm1_pcode', 'adm1_name': 'adm1_name', 'adm2_pcode': 'adm2_pcode', 'adm2_name': 'adm2_name', 'adm3_pcode': 'adm3_pcode', 'adm3_name': 'adm3_name', 'adm4_pcode': 'adm4_pcode', 'adm4_name': 'adm4_name', 'name_latin': 'name_latin', });
lyr_buildings_2.set('fieldImages', {'fid': '', 'id': '', 'name': '', 'name_en': '', 'name_nl': '', 'building': '', 'building_levels': '', 'building_materials': '', 'addr_full': '', 'addr_housenumber': '', 'addr_street': '', 'addr_city': '', 'office': '', 'source': '', 'adm0_pcode': '', 'adm0_name': '', 'adm1_pcode': '', 'adm1_name': '', 'adm2_pcode': '', 'adm2_name': '', 'adm3_pcode': '', 'adm3_name': '', 'adm4_pcode': '', 'adm4_name': '', 'name_latin': '', });
lyr_buildings_3.set('fieldImages', {'fid': '', 'id': '', 'name': '', 'name_en': '', 'name_nl': '', 'building': '', 'building_levels': '', 'building_materials': '', 'addr_full': '', 'addr_housenumber': '', 'addr_street': '', 'addr_city': '', 'office': '', 'source': '', 'adm0_pcode': '', 'adm0_name': '', 'adm1_pcode': '', 'adm1_name': '', 'adm2_pcode': '', 'adm2_name': '', 'adm3_pcode': '', 'adm3_name': '', 'adm4_pcode': '', 'adm4_name': '', 'name_latin': '', });
lyr_buildings_2.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'name': 'no label', 'name_en': 'no label', 'name_nl': 'no label', 'building': 'no label', 'building_levels': 'no label', 'building_materials': 'no label', 'addr_full': 'no label', 'addr_housenumber': 'no label', 'addr_street': 'no label', 'addr_city': 'no label', 'office': 'no label', 'source': 'no label', 'adm0_pcode': 'no label', 'adm0_name': 'no label', 'adm1_pcode': 'no label', 'adm1_name': 'no label', 'adm2_pcode': 'no label', 'adm2_name': 'no label', 'adm3_pcode': 'no label', 'adm3_name': 'no label', 'adm4_pcode': 'no label', 'adm4_name': 'no label', 'name_latin': 'no label', });
lyr_buildings_3.set('fieldLabels', {'fid': 'header label - visible with data', 'id': 'no label', 'name': 'no label', 'name_en': 'no label', 'name_nl': 'no label', 'building': 'no label', 'building_levels': 'no label', 'building_materials': 'no label', 'addr_full': 'no label', 'addr_housenumber': 'no label', 'addr_street': 'no label', 'addr_city': 'no label', 'office': 'no label', 'source': 'no label', 'adm0_pcode': 'no label', 'adm0_name': 'no label', 'adm1_pcode': 'no label', 'adm1_name': 'no label', 'adm2_pcode': 'no label', 'adm2_name': 'no label', 'adm3_pcode': 'no label', 'adm3_name': 'no label', 'adm4_pcode': 'no label', 'adm4_name': 'no label', 'name_latin': 'no label', });
lyr_buildings_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});