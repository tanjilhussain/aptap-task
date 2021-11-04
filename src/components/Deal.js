import { React } from 'react';

export default function Deal(props) {
  const providerName = props.deal['provider_name']
  const dealName = props.deal['deal_name']
  const monthlyCost = props.deal['monthly_price']
  const setupCost = props.deal['set_up_cost']
  const contractLength = props.deal['contract_info']
  const rating = props.deal['provider_rating']

  return (
    <div style={{ display: 'inline-block', paddingRight: 20, }}>
      <dl>
        <dt><b>Plan Name: </b> {providerName}</dt>
        <dt><b>Deal Name: </b> {dealName}</dt>
        <dt><b>Monthly Cost: </b> {monthlyCost}</dt>
        <dt><b>Setup Cost: </b> {setupCost}</dt>
        <dt><b>Contract Length: </b> {contractLength}</dt>
        <dt><b>Rating: </b> {rating}</dt>
      </dl>
    </div>
  );
}
