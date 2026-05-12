import express from 'express';

const plugins = [
  express.static('src/static'),
  express.urlencoded({ extended: true }),
  express.json(),
];



export default plugins;



