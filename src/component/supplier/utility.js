import React from 'react';
import ReactMapboxGl, { Layer, Feature,Marker } from "react-mapbox-gl";

export const Map = ReactMapboxGl({
    accessToken: "pk.eyJ1IjoidGhlY3JvcG5hdGlvbiIsImEiOiJjanNvd3RiaTAwb3p6M3lxbGlrYWIzaHB3In0.ZR0go6GJ-Nnk2rx52-Xubw",
    interactive:true
  });

export const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    