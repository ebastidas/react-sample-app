import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import transactionsData from '../../data/transactions.json';

function TransactionDetails() {
  let { transactionId } = useParams();

  let selectedTransaction = transactionsData.find((transaction) => transaction.id === parseInt(transactionId));

  return (
    <div>
      <h1>Transaction Details</h1>
      <div>
        <div>ID: {selectedTransaction.id}</div>
        <div>Status: {selectedTransaction.Status}</div>
        <div>Credits: {selectedTransaction.credits}</div>
      </div>
    </div>
  );
}

export default TransactionDetails;
