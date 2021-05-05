const express = require('express');
const { Tutor, Class, Module } = require('../../db');

const router = express.Router();

router
  .route('/')
  .get(async (req, res, next) => {
    try {
      const data = await Tutor.findAll({
        where: {},
        include: {
          model: Class,
          include: { model: Module },
          attributes: { exclude: ['moduleId', 'tutorId'] },
        },
      });
      res.status(200).send(data);
    } catch (e) {
      console.log(e);
    }
  })
  .post(async (req, res, next) => {
    try {
      const data = await Tutor.create(req.body);
      console.log(data);
      res.status(201).send(data);
    } catch (e) {
      console.log(e);
    }
  });

router
  .route('/:id')
  .get(async (req, res, next) => {
    try {
      const tutor = await Tutor.findByPk(req.params.id, {
        include: { model: Class },
      });
      // const result = await tutor.addClass(req.params.id);
      res.status(200).send(tutor);
    } catch (e) {
      console.log(e);
    }
  })
  .put(async (req, res, next) => {
    try {
      const [, data] = await Tutor.update(req.body, {
        where: { id: req.params.id },
        returning: true,
      });
      res.status(200).send(data[0]);
    } catch (e) {
      console.log(e);
    }
  })
  .delete(async (req, res, next) => {
    try {
      const data = await Tutor.destroy({ where: { id: req.params.id } });
      res.status(200).send({ message: 'destroyed' });
    } catch (e) {
      console.log(e);
    }
  });

module.exports = router;
