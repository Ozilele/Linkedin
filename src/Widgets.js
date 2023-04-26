import React from 'react'
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {

  const newArticle = (heading, subtitle) => {
    return (
      <div className="widgets__article">
        <div className="widgets__article__left">
          <FiberManualRecordIcon />
        </div>
        <div className="widgets__article__right">
          <h4>{heading}</h4>
          <p>{subtitle}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="widgets__section">
      <div className="widgets__header">
        <h2>LinkedIn News</h2>
        <InfoIcon />
      </div>
      {newArticle('Bitcoin hits new targets', 'Top news - 12000 readers')}
      {newArticle('China sends new spy ballons around America', 'Top news - 723000 readers')}
      {newArticle('Etherum hits new targets', 'Top news - 12000 readers')}
    </div>
  );
}

export default Widgets;