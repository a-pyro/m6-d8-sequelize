const express = require('express');
const { Tutor } = require('../../db');

const router = express.Router();

router
  .route('/')
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Tutor.create(req.body);
      console.log(data);
      res.status(200).send(data);
    } catch (e) {
      console.log(e);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
