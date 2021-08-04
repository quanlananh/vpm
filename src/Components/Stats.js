import React from 'react';
import { StyleSheet } from 'react-native';
import { Text, Title, Subheading, Headline, Caption } from 'react-native-paper';
import Chart from './Chart';

const styles = StyleSheet.create({
  body: {
    display: 'flex',
    marginBottom: 20,
    borderBottomColor: '#e5e5e5',
    borderBottomWidth: 3,
    padding: 20
  },
  launcherId: {
    marginTop: 10,
    marginLeft: 20,
    marginRight: 5,
    fontWeight: 'bold'
  },
  seperator: {
    marginTop: 10
  },
  stats: {
    marginTop: -5,
    color: 'darkgreen'
  }
});

const { body, launcherId, seperator, stats } = styles;
// const Stats = ({ launcherId, delay_time, is_pool_member, points, difficulty, p2_singleton_puzzle_hash, payout_instructions }) => {
export default function Stats(props) {
  // winning info
  const { amount, confirmed, confirmedAtHeight, createdAt, feeAmount } = { ...props.info.data[0] };
  return (
    <>
      <Subheading>Amount</Subheading>
      <Title style={stats}>{amount}</Title>
      <Subheading>Height</Subheading>
      <Title style={stats}>{confirmedAtHeight}</Title>
      <Subheading>Fee</Subheading>
      <Title style={stats}>{feeAmount}</Title>

      <Chart />
    </>
  );
}
