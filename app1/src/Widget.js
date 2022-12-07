import React from 'react';
import moment from 'moment';
import { remoteNeodashModule } from '../moduleConfig';

export default function Widget() {
  return (
    <div
      style={{
        borderRadius: '4px',
        padding: '2em',
        backgroundColor: 'red',
        color: 'white',
      }}
    >
      <h2>Our Application Widget</h2>
      <p>
        This is Coming from our application <br />{' '}
        {moment().format('MMMM Do YYYY, h:mm:ss a')}
      </p>
      <p> The Below Text, Single Value, Pie Chart and Graph components are coming from Remote Neodash Application 
         
         The data is provided statically from a local json object - but it could as well be obtained from an external API and supplied to the component as properties.
      </p>
      <p>  {window[remoteNeodashModule.urlGlobalVariable]}  </p>
    </div>
  );
}
