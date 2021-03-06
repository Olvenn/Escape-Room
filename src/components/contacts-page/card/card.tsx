import { useRef, useEffect } from 'react';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import MARKER from '../../../assets/img/mainIcon.svg';
import * as S from './card.styled';

const ZOOM = 16;

const Position = {
  lat: 59.968137,
  lng: 30.316272,
};

const mainIcon = leaflet.icon({
  iconUrl: MARKER,
  iconSize: [48, 61],
  iconAnchor: [24, 42],
});

const Card = (): JSX.Element => {
  const mapRef = useRef(null);
  useEffect(() => {
    if (mapRef && mapRef.current) {

      const map = L.map(mapRef.current, { zoomControl: false }).setView(
        {
          lat: Position.lat,
          lng: Position.lng,
        },
        ZOOM,
      );

      leaflet.tileLayer('https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
        {
          attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        },
      ).addTo(map);

      L.marker({
        lat: Position.lat,
        lng: Position.lng,
      }, { icon: mainIcon }).addTo(map);
    }
  }, []);

  return (
    <S.ContactsMap ref={mapRef}>
    </S.ContactsMap>
  );
};

export default Card;

