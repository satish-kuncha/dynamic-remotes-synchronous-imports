import Widget from './Widget';
import React, { Suspense } from 'react';
import WidgetRemoteGraph from 'remoteNeodash/RemoteGraph';
import WidgetRemoteSingle from 'remoteNeodash/RemoteSingle';
import WidgetRemoteHeader from 'remoteNeodash/RemoteHeader';
import WidgetRemotePie from 'remoteNeodash/RemotePie';
import WidgetRemoteBar from 'remoteNeodash/RemoteBar';

import graphProps from './graphProps';
import pieProps from './pieProps';
import barProps from './barProps';

const passingVal = pieProps;
console.log("pieProps :" , passingVal);

const App = () => (
  
  <div>
    <h1>Dynamic System Host</h1>
    <h2>Our Custom Application</h2>
    <Widget />
    <Suspense fallback="Loading Header widget">
      <WidgetRemoteHeader/>
    </Suspense>
    <br/>
    <br/>
    <br/>
    <br/>
    <Suspense fallback="Loading Single Val Widget">
      <b>This is Single Valued Chart (Default Data value ) from Neodash. </b>
      <WidgetRemoteSingle/>
    </Suspense>
    <br/>
    <br/>
    <br/>
    <br/>
    <Suspense fallback="Loading Graph widget">
    <b>This is Graph Chart (Sample local data) from Neodash. You can hover, click, drag, zoom in, zoom out</b>
      <WidgetRemoteGraph  {...graphProps}/>
    </Suspense>
    <Suspense fallback="Loading pie widget">
      <b>To be: Pie Chart - Failing due to Typescript/Types resolution</b>
      <WidgetRemotePie  {...pieProps}/>
    </Suspense>

   
  </div>
);

export default App;
