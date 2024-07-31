import { Icon } from 'leaflet';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { useRef, useEffect } from 'react';
import useMap from '../../hooks/use-map';
import { MapDataType, OfferCardType } from '../../types';
import { URL_MARKER_DEFAULT, URL_MARKER_ACTIVE } from '../../constants';
import cn from 'classnames';

type MapProps = {
  mapData: MapDataType;
  mapType: string;
  points: OfferCardType[];
  selectedPoint: string;
}

function Map({ mapData, mapType, points, selectedPoint }: MapProps): JSX.Element {
  const mapRef = useRef(null);
  const map = useMap(mapRef, mapData);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [27, 39],
    iconAnchor: [20, 40]
  });

  const activeCustomIcon = new Icon({
    iconUrl: URL_MARKER_ACTIVE,
    iconSize: [27, 39],
    iconAnchor: [20, 40]
  });

  useEffect(() => {
    if (map) {
      points.forEach((point: OfferCardType) => {
        if (point.lat && point.lng) {
          leaflet
            .marker({
              lat: point.lat,
              lng: point.lng,
            }, {
              icon: (point.id === selectedPoint)
                ? activeCustomIcon
                : defaultCustomIcon,
            })
            .addTo(map);
        }
      });
    }
  }, [map, points, selectedPoint]);

  return (
    <section
      className={cn(
        'map',
        { 'cities__map': mapType === 'main' },
        { 'offer__map': mapType === 'offer' },
      )}
      ref={mapRef}
    >
    </section>


  );
}

export default Map;
