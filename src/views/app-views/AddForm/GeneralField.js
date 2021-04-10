import React from 'react'
import { Input,  Card, Form, InputNumber ,} from 'antd';




const rules = {
	name: [
		{
			required: true,
			message: 'Please enter product name',
		}
	],
	description: [
		{
			required: true,
			message: 'Please enter product description',
		}
	],
	price: [
		{
			required: true,
			message: 'Please enter product price',
		}
	],
	comparePrice: [		
	],
	taxRate: [		
		{
			required: true,
			message: 'Please enter tax rate',
		}
	],
	cost: [		
		{
			required: true,
			message: 'Please enter item cost',
		}
	]
}

const GeneralField = props => {
	
	
	if(props.viewtype.modelo === 1){
	
		return(
			<Card title="Basic Info">
				<Form.Item name="name" label="Product name" rules={rules.name}>
					<Input placeholder="Product Name" />
				</Form.Item>
				<Form.Item name="description" label="Description" rules={rules.description}>
					<Input.TextArea rows={4} />
				</Form.Item>
				<Form.Item name="price" label="Monto" rules={rules.price}>
					<InputNumber></InputNumber>
				</Form.Item>
				

			</Card>
		)			
		
	}
	else if(props.viewtype.modelo === 2){

		return(
			<Card title="Basic Info">
				<Form.Item name="name" label="Product name" rules={rules.name}>
					<Input placeholder="Product Name" />
				</Form.Item>
				<Form.Item name="description" label="Description" rules={rules.description}>
					<Input.TextArea rows={4} />
				</Form.Item>
				<Form.Item name="price" label="MONTO DE VISTA 2" rules={rules.price}>
					<InputNumber></InputNumber>
				</Form.Item>
				

			</Card>
		)	
	}

}
export default GeneralField
