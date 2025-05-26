// Copyright (c) 2025 Ain Jeong All rights reserved
//
// Created by: Ain Jeong
// Created on: June 2025
// This file contains the JS functions for index.html

'use strict'
/**
 * This function checks the random facts of extinct animals
 * The 'async' is there because it will take time for the internet to return the value
 */
async function checkRandomFacts () {
  // the 'try' is here because the internet may not be working
  // it is like an 'if ... else' statement'
  try {
    const resultJSON = await fetch(
      'https://extinct-api.herokuapp.com/api/v1/animal/'
    )
    const jsonData = await resultJSON.json()
    console.log(jsonData)

    // bring the information from API
    const imageSrc = jsonData.data[0].imageSrc
    const commonName = jsonData.data[0].commonName
    const binomialName = jsonData.data[0].binomialName
    const location = jsonData.data[0].location
    const lastRecord = jsonData.data[0].lastRecord
    const shortDescription = jsonData.data[0].shortDesc

    // output
    document.getElementById('random-image').src = imageSrc
    document.getElementById('extinct-animal-facts').innerHTML =
      'Name: ' + commonName + '(' + binomialName + ')<br />' +
      'Location: ' + location + '<br />' +
      'Last Record: ' + lastRecord + '<br />' +
      'Short Description: ' + shortDescription + '<br />'
  } catch (error) {
    console.error(error)
  }
}
