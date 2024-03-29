import React from 'react';
import { Card } from 'antd';
import './FeedCard.css';

const FeedCard = ({ title, content }) => (
  <Card style={{ width: 1200 }} hoverable>
    <div
      style={{
        display: 'flex',
        flexDirection: 'row',
        gap: '16px',
      }}
      key={title}
    >
      <div>
        <img
          style={{ width: '200px', height: '150px' }}
          alt="example"
          src="https://finepointwriting.ca/wp-content/uploads/2020/06/Magnetic-Brand-Story-2.png"
        />
      </div>
      <div>
        <h3>{title}</h3>
        <p className="truncate-line-clamp-feeds">{content}</p>
      </div>
    </div>
  </Card>
);

export default FeedCard;
