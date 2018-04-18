import React from 'react';
import FileUpload from './FileUpload';
import ShowUploads from './ShowUploads';

import withAuthorization from './withAuthorization';

const HomePage = () =>
    <div>
      <h1>Home Page</h1>
      <hr/>
      <FileUpload />
      <ShowUploads />
    </div>

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(HomePage);
