import { useEffect, useRef, useState } from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import 'ol/ol.css';

import Feature from 'ol/Feature';
import Point from 'ol/geom/Point'
import Polygon from 'ol/geom/Polygon';

import { Vector as VectorLayer } from 'ol/layer';
import { Vector as VectorSource } from 'ol/source';
import { fromLonLat } from 'ol/proj';

import { CheckBoxForMap } from '../shared/ui/CheckBoxForMap';

interface AMarkerPoints {
    name: string;
    coords: number[];
};

const markerPoints: AMarkerPoints[] = [
    { name: 'Площадь Революции', coords: [61.4025, 55.1598] },
    { name: 'Кировка', coords: [61.4007, 55.1632] },
    { name: 'Парк Гагарина', coords: [61.3785, 55.1610] }
];

export default function MapPage () {
    const mapRef = useRef(null);
    const [showPoints, setShowPoints] = useState(true);
    const [showPolygons, setShowPolygons] = useState(true);

    useEffect(() => {
        if (!mapRef.current) return;

        const chelyabinskMarker = markerPoints.map(loc => {
            return new Feature({
                geometry: new Point(fromLonLat(loc.coords))
            });
        });
        const pointsLayer = new VectorLayer({
            source: new VectorSource({ features: chelyabinskMarker }),
            visible: showPoints,
        });

        const areaPolygon = new Feature({
            geometry: new Polygon([[
                fromLonLat([61.25, 55.10]), // Левый нижний угол
                fromLonLat([61.55, 55.10]), // Правый нижний угол
                fromLonLat([61.55, 55.22]), // Правый верхний угол
                fromLonLat([61.25, 55.22]), // Левый верхний угол
                fromLonLat([61.25, 55.10]), // Замыкаем полигон
            ]]),
        });
        const polygonsLayer = new VectorLayer({
            source: new VectorSource({ features: [areaPolygon] }),
            visible: showPolygons
        });

        const map = new Map({
            target: mapRef.current,
            layers: [
                new TileLayer({ source: new OSM() }),
                polygonsLayer,
                pointsLayer
            ],
            view: new View({
                center: fromLonLat([61.4368, 55.1549]),
                zoom: 10,
            }),
        });

        return () => map.setTarget(undefined);
    }, [showPoints, showPolygons]);

    return (
        <div className="p-10 h-full w-full">
            <div className="flex mb-3 gap-5">
                <CheckBoxForMap 
                    label="Показать точки"
                    type="checkbox"
                    checked={showPoints}
                    onChange={(checked) => setShowPoints(checked)}
                />
                <CheckBoxForMap 
                    label="Показать полигоны"
                    type="checkbox"
                    checked={showPolygons}
                    onChange={(checked) => setShowPolygons(checked)}
                />
            </div>
            <div ref={mapRef} className="w-full h-96" />
        </div>
    );
};