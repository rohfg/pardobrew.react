import React from 'react';
import { Card, CardBody, CardTitle, CardSubtitle, CardText } from 'reactstrap';

import './CardComponent.css';

const CardComponent = ({ name, date, description, img }) => (
	<div className='container'>
		<Card>
			<CardBody>
				<CardTitle tag='h5'>{name}</CardTitle>
				<img src={img} alt='user-img' width={200} />
				<CardSubtitle className='mb-2 text-muted' tag='h6'>
					{date}
				</CardSubtitle>
				<CardText>{description}</CardText>
			</CardBody>
		</Card>
	</div>
);

export default CardComponent;