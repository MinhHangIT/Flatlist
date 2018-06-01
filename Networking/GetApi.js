import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const apiJsonWeb = 'https://jsonplaceholder.typicode.com/photos';

async function getJsonFromWeb() {
  try {
    let res = await fetch(apiJsonWeb);
    let resJson = await res.json();
    return resJson;
  } catch (error) {
    console.error(`Error: ${error}`);
  }
}
export { getJsonFromWeb };
